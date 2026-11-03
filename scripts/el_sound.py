#!/usr/bin/env python3
"""ElevenLabs sound effects and music for a film (owner, 2026-11-03: "use them for a more refined film").

  python3 scripts/el_sound.py films/<slug> sound/el_sound.json [--only KEY,KEY] [--force]

SPEC: {"sfx": {"key": {"text": …, "seconds": 2.0}}, "music": {"key": {"prompt": …, "seconds": 120}}}
Writes assets/el/<key>.mp3 (gitignored; Drive <slug>/sound/), logs every generation with the credits it used in
sound/el_log.csv (the account's character_count before and after). Never prints the key. Instrumental only.
"""
import csv, json, os, sys, time, urllib.request, urllib.error
from pathlib import Path

API = "https://api.elevenlabs.io/v1"
key = os.environ.get("ELEVENLABS_API_KEY", "").strip() or sys.exit("ELEVENLABS_API_KEY not set")


def req(path, body=None, accept="application/json"):
    r = urllib.request.Request(API + path, method="POST" if body is not None else "GET", headers={"xi-api-key": key, "Accept": accept})
    data = json.dumps(body).encode() if body is not None else None
    if data:
        r.add_header("Content-Type", "application/json")
    for i in range(3):
        try:
            with urllib.request.urlopen(r, data, timeout=600) as x:
                return x.read()
        except urllib.error.HTTPError as e:
            msg = e.read().decode(errors="ignore")[:300]
            if e.code in (429, 500, 502, 503) and i < 2:
                time.sleep(4 * (i + 1)); continue
            raise RuntimeError(f"HTTP {e.code} {path}: {msg}") from None


def used():
    return json.loads(req("/user/subscription"))["character_count"]


film = Path(sys.argv[1]); spec = json.loads((film / sys.argv[2]).read_text())
only = set(sys.argv[sys.argv.index("--only") + 1].split(",")) if "--only" in sys.argv else None
force = "--force" in sys.argv
out = film / "assets/el"; out.mkdir(parents=True, exist_ok=True)
log = film / "sound/el_log.csv"; new = not log.exists()
with log.open("a", newline="") as fh:
    w = csv.writer(fh)
    if new:
        w.writerow(["time_utc", "kind", "key", "seconds", "credits", "prompt"])
    for kind in ("sfx", "music"):
        for k, s in spec.get(kind, {}).items():
            if only and k not in only:
                continue
            dest = out / f"{k}.mp3"
            if dest.exists() and not force:
                print(f"{k}: exists"); continue
            u0 = used()
            if kind == "sfx":
                audio = req("/sound-generation?output_format=mp3_44100_192", {"text": s["text"], "duration_seconds": s["seconds"], "prompt_influence": s.get("influence", 0.5)}, "audio/mpeg")
            else:
                audio = req("/music?output_format=mp3_44100_192", {"prompt": s["prompt"], "music_length_ms": int(s["seconds"] * 1000), "force_instrumental": True}, "audio/mpeg")
            dest.write_bytes(audio)
            time.sleep(2)
            c = used() - u0
            w.writerow([time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()), kind, k, s["seconds"], c, s.get("text") or s.get("prompt")])
            fh.flush()
            print(f"{k}: {len(audio)/1e6:.1f} MB, {c} credits")
print(f"account: {used()} credits used this period")
