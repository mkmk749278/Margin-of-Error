#!/usr/bin/env python3
"""Cut a film's Shorts from its approved master (PLAYBOOK §13.5).

Reads films/<slug>/shorts/shorts.json (each short = a span of whole sentences from vo/timing.json, a chip and a hook),
cuts the span from the master (picture + final mix, untouched) into public/shorts/<id>.mp4 at 1080p, and writes
films/<slug>/shorts/<id>.props.json for the `Short` composition (words re-timed to the clip).

Usage: python3 scripts/shorts_build.py films/<slug> [--only <id>]
"""
import json, subprocess, sys
from pathlib import Path

PRE, POST = 0.35, 0.6  # seconds of picture before the first word and after the last

def main() -> int:
    film = Path(sys.argv[1]); only = sys.argv[sys.argv.index("--only") + 1] if "--only" in sys.argv else None
    cfg = json.loads((film / "shorts/shorts.json").read_text())
    t = json.loads((film / "vo/timing.json").read_text())
    root = Path(__file__).resolve().parent.parent
    out = root / "public/shorts"; out.mkdir(parents=True, exist_ok=True)
    for sh in cfg["shorts"]:
        if only and sh["id"] != only:
            continue
        sents = [s for s in t["sentences"] if sh["from"] <= s["id"] <= sh["to"]]
        start = max(0.0, sents[0]["start"] - PRE); end = sents[-1]["end"] + POST
        nxt = [s["start"] for s in t["sentences"] if s["id"] == sh["to"] + 1]
        if nxt:
            end = min(end, nxt[0] - 0.08)  # never the first syllable of the next sentence
        prv = [s["end"] for s in t["sentences"] if s["id"] == sh["from"] - 1]
        if prv:
            start = max(start, prv[0] + 0.05)  # nor the last of the one before
        words = [{"w": w["w"], "s": w["s"], "t0": round(w["start"] - start, 3), "t1": round(w["end"] - start, 3)}
                 for w in t["words"] if sh["from"] <= w["s"] <= sh["to"]]
        clip = out / f"{sh['id']}.mp4"
        props_only = clip.exists() and "--props-only" in sys.argv
        if not props_only:
          subprocess.run(["ffmpeg", "-y", "-v", "error", "-ss", f"{start:.3f}", "-i", str(root / cfg["master"]),
                        "-t", f"{end - start:.3f}", "-vf", "scale=1920:1080:flags=lanczos", "-r", "60",
                        "-c:v", "libx264", "-preset", "medium", "-crf", "16", "-maxrate", "16M", "-bufsize", "32M",
                        "-pix_fmt", "yuv420p", "-c:a", "aac", "-b:a", "256k", str(clip)], check=True)
        props = {"id": sh["id"], "clip": f"shorts/{sh['id']}.mp4", "duration": round(end - start, 3),
                 "chip": sh["chip"], "hook": sh["hook"], "words": words,
                 "sentences": [s["text"] for s in sents], "cover": sh.get("cover", 0.0), "coverLine": sh.get("coverLine")}
        (film / f"shorts/{sh['id']}.props.json").write_text(json.dumps(props, indent=1, ensure_ascii=False))
        print(f"{sh['id']}: {start:.2f}-{end:.2f} s ({end - start:.1f} s), {len(words)} words")
    return 0

if __name__ == "__main__":
    sys.exit(main())
