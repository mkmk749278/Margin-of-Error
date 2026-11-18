#!/usr/bin/env python3
"""Pick word cues for a camera or object 'beat' track (PLAYBOOK §6.8, §10.6): content words no more than --gap seconds
apart through each sentence, so a scene that shows things (not typed words) still moves on its narration.

  python3 scripts/beat_words.py films/<slug> 24-28 [--gap 1.1]

Prints a TypeScript array of wf(sentence, 'word'[, nth]) calls to paste into a scene's beat track
(hull3d.tsx `dolly`). Words of three letters or fewer are skipped unless nothing else fills a gap; numbers always count.
"""
import argparse, json, re
from pathlib import Path

STOP = {"the", "and", "that", "with", "from", "this", "were", "was", "had", "have", "would", "could", "been", "into",
        "onto", "than", "then", "they", "their", "there", "which", "about", "also", "because", "said", "its", "it's"}


def clean(w: str) -> str:
    return re.sub(r"[^a-z0-9'-]", "", w.lower())


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("film")
    ap.add_argument("ids")
    ap.add_argument("--gap", type=float, default=1.1)
    a = ap.parse_args()
    lo, hi = (int(x) for x in a.ids.split("-")) if "-" in a.ids else (int(a.ids), int(a.ids))
    t = json.loads((Path(a.film) / "vo/timing.json").read_text())
    fps = t["fps"]
    out = []
    for sid in range(lo, hi + 1):
        ws = [w for w in t["words"] if w["s"] == sid]
        if not ws:
            continue
        seen: dict[str, int] = {}
        cand = []
        for w in ws:
            c = clean(w["w"])
            n = seen.get(c, 0)
            seen[c] = n + 1
            ok = len(c) > 3 and c not in STOP
            cand.append((w["startFrame"] / fps, c, n, ok))
        last = ws[0]["startFrame"] / fps
        end = ws[-1]["endFrame"] / fps
        picked = []
        i = 0
        while True:
            # the latest content word within the gap from the last cue
            window = [x for x in cand if last < x[0] <= last + a.gap]
            if not window:
                nxt = [x for x in cand if x[0] > last]
                if not nxt:
                    break
                pick = nxt[0]
            else:
                good = [x for x in window if x[3]]
                pick = (good or window)[-1]
            picked.append(pick)
            last = pick[0]
            if end - last <= a.gap:
                break
            i += 1
            if i > 40:
                break
        # every spoken number gets its own beat (the sync audit's rule: no uncued number)
        nums = {"one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve",
                "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "thirty", "forty",
                "fifty", "sixty", "seventy", "eighty", "ninety", "hundred", "thousand", "million", "billion", "first",
                "second", "third", "half", "zero", "percent", "january", "february", "march", "april", "may", "june",
                "july", "august", "september", "october", "november", "december"}
        for x in cand:
            if x[1].rstrip(",.:;") in nums and x not in picked:
                picked.append(x)
        picked.sort()
        for _, c, n, _ in picked:
            q = '"' if "'" in c else "'"
            out.append(f"wf({sid}, {q}{c}{q}{', ' + str(n) if n else ''})")
    print("[" + ", ".join(out) + "]")


if __name__ == "__main__":
    main()
