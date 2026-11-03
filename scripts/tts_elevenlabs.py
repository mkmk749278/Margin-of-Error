#!/usr/bin/env python3
"""Generate a film's narration with the channel's ElevenLabs voice (config/voice.yaml), one MP3 per recording block.

  python3 scripts/tts_elevenlabs.py films/<slug> --dry-run          # blocks, characters, quota; no audio, no cost
  python3 scripts/tts_elevenlabs.py films/<slug> --blocks 1         # one block first: listen and measure
  python3 scripts/tts_elevenlabs.py films/<slug>                    # all blocks (existing files are skipped)
  add --force to regenerate blocks that already exist

Blocks are the same ones `scripts/vo_blocks.py` writes to vo/vo_blocks.md (split only at paragraph breaks), so a take
always matches its block number. Each request sends the neighbouring text (previous_text / next_text) so the voice
keeps its intonation across block joins. Output: films/<slug>/vo/<slug>_vo_bNN.mp3 (gitignored; upload to Drive with
scripts/upload_gdrive.sh --sub <slug>/vo). Every run appends to films/<slug>/vo/tts_log.csv (block, characters, file,
model, settings) and prints the account's remaining characters.

Needs ELEVENLABS_API_KEY in the environment (owner adds it to the cloud environment's variables). Never print it.
Costs characters from the owner's ElevenLabs plan: a full narration is about 12,000 characters.
"""
import argparse
import csv
import json
import os
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parents[1]
API = "https://api.elevenlabs.io/v1"
sys.path.insert(0, str(ROOT / "scripts"))


def blocks_for(film: Path, max_chars: int):
    paras = [p.strip() for p in (film / "script/vo.txt").read_text().split("\n\n") if p.strip()]
    blocks, cur = [], []
    for p in paras:
        if cur and len("\n\n".join(cur + [p])) > max_chars:
            blocks.append(cur)
            cur = []
        cur.append(p)
    if cur:
        blocks.append(cur)
    if len(blocks) > 1 and len("\n\n".join(blocks[-1])) < 300:  # same rule as vo_blocks.py
        tail = blocks.pop()
        blocks[-1] = blocks[-1] + tail
    return ["\n\n".join(b) for b in blocks]


def call(method, path, key, body=None, accept="application/json"):
    req = urllib.request.Request(API + path, method=method, headers={"xi-api-key": key, "Accept": accept})
    data = None
    if body is not None:
        data = json.dumps(body).encode()
        req.add_header("Content-Type", "application/json")
    for attempt in range(4):
        try:
            with urllib.request.urlopen(req, data, timeout=300) as r:
                return r.read()
        except urllib.error.HTTPError as e:
            msg = e.read().decode(errors="ignore")[:400]
            if e.code in (429, 500, 502, 503) and attempt < 3:
                time.sleep(2 ** (attempt + 1))
                continue
            raise RuntimeError(f"ElevenLabs {method} {path.split('?')[0]} → HTTP {e.code}: {msg}") from None
    raise RuntimeError("unreachable")


def find_voice(key, name):
    voices = json.loads(call("GET", "/voices", key))["voices"]
    hits = [v for v in voices if v.get("name", "").strip() == name]
    if len(hits) != 1:
        names = ", ".join(sorted(repr(v.get("name")) for v in voices))
        sys.exit(f"voice named {name!r}: {len(hits)} matches; voices on this account: {names}")
    return hits[0]["voice_id"]


def quota(key):
    try:
        s = json.loads(call("GET", "/user/subscription", key))
        return f"{s.get('character_count', '?')} of {s.get('character_limit', '?')} characters used this period"
    except RuntimeError as e:
        return f"(quota unavailable: {e})"


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("film")
    ap.add_argument("--blocks", help="comma list of block numbers, e.g. 1 or 2,5")
    ap.add_argument("--dry-run", action="store_true")
    ap.add_argument("--force", action="store_true")
    a = ap.parse_args()
    film = Path(a.film).resolve()
    cfg = yaml.safe_load((ROOT / "config/voice.yaml").read_text())
    blocks = blocks_for(film, cfg["block_max_chars"])
    pick = [int(x) for x in a.blocks.split(",")] if a.blocks else list(range(1, len(blocks) + 1))
    slug = film.name
    out = film / "vo"
    out.mkdir(exist_ok=True)
    total = sum(len(blocks[i - 1]) for i in pick)
    print(f"{len(blocks)} blocks; generating {pick} = {total:,} characters with voice {cfg['voice_name']!r}, {cfg['model_id']}")
    key = os.environ.get("ELEVENLABS_API_KEY", "").strip()
    if not key:
        sys.exit("ELEVENLABS_API_KEY is not set in this session (add it to the environment's variables, then start a new session)")
    print(quota(key))
    if a.dry_run:
        return
    voice_id = find_voice(key, str(cfg["voice_name"]))
    log = out / "tts_log.csv"
    new_log = not log.exists()
    with log.open("a", newline="") as fh:
        w = csv.writer(fh)
        if new_log:
            w.writerow(["time_utc", "block", "chars", "file", "model", "format", "settings"])
        for i in pick:
            dest = out / f"{slug}_vo_b{i:02d}.mp3"
            if dest.exists() and not a.force:
                print(f"block {i}: exists, skipped ({dest.name})")
                continue
            body = {
                "text": blocks[i - 1],
                "model_id": cfg["model_id"],
                "voice_settings": cfg["voice_settings"],
                "previous_text": blocks[i - 2][-1000:] if i > 1 else None,
                "next_text": blocks[i][:1000] if i < len(blocks) else None,
            }
            fmt = cfg["output_format"]
            try:
                audio = call("POST", f"/text-to-speech/{voice_id}?output_format={fmt}", key, body, "audio/mpeg")
            except RuntimeError as e:
                if "output_format" in str(e) or "HTTP 403" in str(e) or "HTTP 422" in str(e):
                    fmt = "mp3_44100_128"
                    audio = call("POST", f"/text-to-speech/{voice_id}?output_format={fmt}", key, body, "audio/mpeg")
                else:
                    raise
            dest.write_bytes(audio)
            w.writerow([time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()), i, len(blocks[i - 1]), dest.name,
                        cfg["model_id"], fmt, json.dumps(cfg["voice_settings"], sort_keys=True)])
            print(f"block {i}: {len(blocks[i - 1]):,} chars → {dest.name} ({len(audio) / 1e6:.1f} MB, {fmt})")
    print(quota(key))


if __name__ == "__main__":
    main()
