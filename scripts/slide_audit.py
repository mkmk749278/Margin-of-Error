#!/usr/bin/env python3
"""Slide audit (PLAYBOOK §6.8, §14.2): how much of a cut is a dark card, and where.

A "card frame" is one where most of the picture is the desk (void or card colours: dark, unsaturated) and what is
left is thin lines and type: a chart on a card, a text panel, a diagram on the void. Footage, photographs, document
scans and lit 3D objects fill the frame with light, colour or texture and are not card frames.

  python3 scripts/slide_audit.py CUT.mp4 [--fps 1] [--out review/slide_audit_rN.md]

Measures (one frame a second by default, at 320x180):
  - card share of the whole film                      gate: <= 30%
  - longest run of consecutive card frames            gate: <= 12 s
  - first non-card frame                              gate: by 0:02
  - card share of the first 60 s                      gate: <= 25%
Prints the runs over 8 s with their times so the fixes can be planned. Exit 1 if any gate fails.
Calibrated 18 NOV 2026 on Titan cut v7 (hand count: about half the film text-on-dark; first real image at 0:56).
"""
import argparse, subprocess, sys
import numpy as np

W, H = 320, 180
DARK_LUMA = 48          # 0..255: the void #0a0d12 and the card #121824 sit far below this
DARK_SAT = 60           # max-min channel spread: the desk colours are near-grey
CARD_SHARE = 0.80       # a frame this dark (by pixel share) is a card frame


def frames(path, fps):
    cmd = ["ffmpeg", "-loglevel", "error", "-i", path, "-vf", f"fps={fps},scale={W}:{H}",
           "-f", "rawvideo", "-pix_fmt", "rgb24", "-"]
    p = subprocess.Popen(cmd, stdout=subprocess.PIPE)
    n = W * H * 3
    while True:
        b = p.stdout.read(n)
        if len(b) < n:
            break
        yield np.frombuffer(b, np.uint8).reshape(H, W, 3).astype(np.int16)
    p.wait()


def dark_share(f):
    luma = 0.2126 * f[..., 0] + 0.7152 * f[..., 1] + 0.0722 * f[..., 2]
    sat = f.max(axis=2) - f.min(axis=2)
    return float(((luma < DARK_LUMA) & (sat < DARK_SAT)).mean())


def mmss(s):
    return f"{int(s // 60)}:{int(s % 60):02d}"


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("cut")
    ap.add_argument("--fps", type=float, default=1.0)
    ap.add_argument("--out")
    a = ap.parse_args()
    step = 1.0 / a.fps
    card = [dark_share(f) >= CARD_SHARE for f in frames(a.cut, a.fps)]
    if not card:
        sys.exit("no frames decoded")
    n = len(card)
    runs, start = [], None
    for i, c in enumerate(card + [False]):
        if c and start is None:
            start = i
        if not c and start is not None:
            runs.append((start * step, i * step))
            start = None
    longest = max((e - s for s, e in runs), default=0.0)
    first_real = next((i * step for i, c in enumerate(card) if not c), n * step)
    head = card[: int(60 / step)]
    share, head_share = sum(card) / n, sum(head) / max(1, len(head))
    gates = [
        ("card share, whole film", f"{share:.0%}", share <= 0.30, "<= 30%"),
        ("longest card run", f"{longest:.0f} s", longest <= 12, "<= 12 s"),
        ("first non-card frame", mmss(first_real), first_real <= 2, "by 0:02"),
        ("card share, first 60 s", f"{head_share:.0%}", head_share <= 0.25, "<= 25%"),
    ]
    lines = [f"# Slide audit: `{a.cut}`", "", f"{n} frames at {a.fps:g} fps.", "",
             "| Measure | Value | Gate | |", "|---|---|---|---|"]
    lines += [f"| {k} | {v} | {g} | {'pass' if ok else '**FAIL**'} |" for k, v, ok, g in gates]
    long_runs = [(s, e) for s, e in runs if e - s > 8]
    lines += ["", f"## Card runs over 8 s ({len(long_runs)})", ""]
    lines += [f"- {mmss(s)}–{mmss(e)} ({e - s:.0f} s)" for s, e in long_runs] or ["- none"]
    text = "\n".join(lines) + "\n"
    print(text)
    if a.out:
        open(a.out, "w").write(text)
    sys.exit(0 if all(ok for _, _, ok, _ in gates) else 1)


if __name__ == "__main__":
    main()
