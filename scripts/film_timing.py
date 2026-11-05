#!/usr/bin/env python3
"""Lay the edit holds into the joined VO and write the film's timeline (PLAYBOOK §10.4).

  python3 scripts/film_timing.py films/<slug>

Reads assets/vo/timing.json and assets/vo/vo_full.wav (from scripts/vo_timing.py) and script/holds.json: seconds of
picture time inserted after a sentence (matched by its opening words, so a re-take never shifts a hold), plus a tail
for the outro. Each hold is cut into the middle of the pause after its sentence, so no word tail is clipped.
Writes assets/vo/film_vo.wav (48 kHz mono, holds as digital silence: the mix's bed covers it) and vo/timing.json
(committed: the film's frames for Remotion and the render farm), with every sentence and word shifted, the holds
listed, and `durationInFrames` for the whole film. Fails if the open loop misses its window.
"""
import json
import re
import subprocess
import sys
from pathlib import Path

SR = 48000


def norm(t: str) -> str:
    return re.sub(r"\s+", " ", t).strip()


def main() -> None:
    film = Path(sys.argv[1])
    t = json.loads((film / "assets/vo/timing.json").read_text())
    cfg = json.loads((film / "script/holds.json").read_text())
    fps = t["fps"]
    sents = t["sentences"]

    def find(prefix: str, nth: int | None = None) -> int:
        hits = [s["id"] for s in sents if norm(s["text"]).startswith(norm(prefix))]
        if nth is not None:  # a sentence said more than once: pick its occurrence (0-based), never guess
            if nth >= len(hits):
                sys.exit(f"hold anchor {prefix!r}: occurrence {nth} of {len(hits)}")
            return hits[nth]
        if len(hits) != 1:
            sys.exit(f"hold anchor {prefix!r}: {len(hits)} sentence matches (add \"nth\")")
        return hits[0]

    holds = []
    for h in cfg["holds"]:
        i = find(h["after"], h.get("nth"))
        nxt = sents[i + 1]["start"] if i + 1 < len(sents) else sents[i]["end"] + 0.3
        at = round((sents[i]["end"] + nxt) / 2, 3) if i + 1 < len(sents) else round(sents[i]["end"] + 0.3, 3)
        holds.append({"after": i, "at": at, "s": h["s"], "why": h.get("why", "")})
    holds.sort(key=lambda h: h["at"])

    def shift(x: float) -> float:
        return round(x + sum(h["s"] for h in holds if h["at"] <= x), 3)

    # audio: cut vo_full at each hold point, insert silence
    src = film / "assets/vo/vo_full.wav"
    raw = subprocess.run(["ffmpeg", "-v", "error", "-i", str(src), "-f", "s16le", "-ac", "1", "-ar", str(SR), "-"],
                         check=True, capture_output=True).stdout
    pcm = bytearray()
    prev = 0
    for h in holds:
        k = int(h["at"] * SR) * 2
        pcm += raw[prev:k] + bytes(int(h["s"] * SR) * 2)
        prev = k
    pcm += raw[prev:] + bytes(int(cfg["tail"] * SR) * 2)
    out = film / "assets/vo/film_vo.wav"
    subprocess.run(["ffmpeg", "-v", "error", "-y", "-f", "s16le", "-ac", "1", "-ar", str(SR), "-i", "-", str(out)],
                   input=bytes(pcm), check=True)
    total = len(pcm) / 2 / SR

    ft = {"fps": fps, "source": "assets/vo/timing.json + script/holds.json", "duration": round(total, 3),
          "durationInFrames": round(total * fps), "holds": [], "chapters": [], "sentences": [], "words": []}
    for h in holds:
        ft["holds"].append({**h, "filmStart": shift(h["at"]) - h["s"], "filmStartFrame": round((shift(h["at"]) - h["s"]) * fps)})
    for c in t["chapters"]:
        ft["chapters"].append({"title": c["title"], "start": shift(c["start"]), "startFrame": round(shift(c["start"]) * fps)})
    for s in sents:
        a, b = shift(s["start"]), shift(s["end"])
        ft["sentences"].append({"id": s["id"], "text": s["text"], "chapter": s["chapter"], "start": a, "end": b,
                                "startFrame": round(a * fps), "endFrame": round(b * fps)})
    for w in t["words"]:
        a, b = shift(w["start"]), shift(w["end"])
        ft["words"].append({"s": w["s"], "w": w["w"], "start": a, "end": b, "startFrame": round(a * fps), "endFrame": round(b * fps)})

    ol = cfg["open_loop"]
    p, r = ft["sentences"][find(ol["promise"])], ft["sentences"][find(ol["reveal"])]
    gap = r["start"] - p["end"]
    ft["openLoop"] = {"promiseEnd": p["end"], "revealStart": r["start"], "gap": round(gap, 2)}
    (film / "vo/timing.json").write_text(json.dumps(ft, indent=1, ensure_ascii=False))
    print(f"film {total:.1f} s ({total / 60:.0f}:{total % 60:04.1f}) · {len(holds)} holds, {sum(h['s'] for h in holds):.1f} s"
          f" · tail {cfg['tail']} s · open loop {gap:.1f} s (window {ol['min']}-{ol['max']})")
    for c in ft["chapters"]:
        print(f"  {int(c['start'] // 60)}:{c['start'] % 60:04.1f}  {c['title']}")
    if not ol["min"] <= gap <= ol["max"]:
        sys.exit(f"open loop misses its window: {gap:.1f} s")


if __name__ == "__main__":
    main()
