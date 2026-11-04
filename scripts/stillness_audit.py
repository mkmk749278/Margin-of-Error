#!/usr/bin/env python3
"""Find still holds in a cut (PLAYBOOK §6.4, §14.2): runs where the picture does not visibly change.

  python3 scripts/stillness_audit.py CUT.mp4 [--fps 4] [--width 320] [--run 3.0] [--level 6] [--share 0.004]

Method (round-2 lesson, 2026-11-03): decode at 4 fps, 320 px wide, grey; between neighbouring frames count the share
of pixels that change by more than 6 grey levels. A run of at least 3 s where every step stays under 0.4% is a still
hold. Grain and a 0.05-opacity grid barely register at this size, so what is left is motion a viewer can see.
Prints each run (start-end, length) and a total; exit 1 if any run is found.
"""
import argparse
import subprocess
import sys

import numpy as np


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("cut")
    ap.add_argument("--fps", type=float, default=4)
    ap.add_argument("--width", type=int, default=320)
    ap.add_argument("--run", type=float, default=3.0, help="seconds")
    ap.add_argument("--level", type=int, default=6, help="grey levels that count as a change")
    ap.add_argument("--share", type=float, default=0.004, help="share of pixels that must change")
    a = ap.parse_args()
    probe = subprocess.run(["ffprobe", "-v", "error", "-select_streams", "v:0", "-show_entries", "stream=width,height",
                            "-of", "csv=p=0", a.cut], capture_output=True, text=True, check=True).stdout.strip()
    w0, h0 = (int(x) for x in probe.split(",")[:2])
    w = a.width
    h = int(round(h0 * w / w0 / 2) * 2)
    cmd = ["ffmpeg", "-v", "error", "-i", a.cut, "-vf", f"fps={a.fps},scale={w}:{h},format=gray", "-f", "rawvideo", "-"]
    p = subprocess.Popen(cmd, stdout=subprocess.PIPE)
    size = w * h
    prev = None
    i = 0
    still_from = None
    runs = []
    assert p.stdout is not None
    while True:
        buf = p.stdout.read(size)
        if len(buf) < size:
            break
        cur = np.frombuffer(buf, dtype=np.uint8).astype(np.int16)
        if prev is not None:
            moved = float(np.mean(np.abs(cur - prev) > a.level))
            t = i / a.fps
            if moved < a.share:
                if still_from is None:
                    still_from = t - 1 / a.fps
            else:
                if still_from is not None and t - still_from >= a.run:
                    runs.append((still_from, t))
                still_from = None
        prev = cur
        i += 1
    p.wait()
    if still_from is not None and i / a.fps - still_from >= a.run:
        runs.append((still_from, i / a.fps))
    mmss = lambda s: f"{int(s // 60)}:{s % 60:05.2f}"
    for s, e in runs:
        print(f"STILL {mmss(s)}-{mmss(e)}  {e - s:.2f} s")
    print(f"{len(runs)} still run(s) of {a.run:.1f} s or more in {i / a.fps:.1f} s of picture")
    return 1 if runs else 0


if __name__ == "__main__":
    sys.exit(main())
