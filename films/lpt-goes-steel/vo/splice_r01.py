#!/usr/bin/env python3
"""Splice the owner's re-take (lpt-goes-steel_vo_r01.mp3) into blocks 1 and 2 (PLAYBOOK §10.4).
Each cut sits on the quietest 10 ms point of a measured pause (word times from faster-whisper medium.en, 28 NOV 2026);
the re-take is gain-matched to its block's integrated loudness; joins get a 10 ms equal-power crossfade.
Writes assets/lpt-goes-steel/vo/lpt-goes-steel_vo_b01_final.wav and _b02_final.wav (44.1 kHz mono, 24-bit)."""
import subprocess, numpy as np, soundfile as sf
V = "assets/lpt-goes-steel/vo/lpt-goes-steel_vo_"
SR = 44100
def load(name):
    raw = subprocess.run(["ffmpeg", "-v", "error", "-i", f"{V}{name}.mp3", "-ac", "1", "-ar", str(SR), "-f", "f32le", "-"],
                         capture_output=True, check=True).stdout
    return np.frombuffer(raw, np.float32).copy()
def quiet(x, a, b):
    """Sample index of the quietest 10 ms frame in the middle 60% of the pause [a, b] seconds."""
    m = (b - a) * 0.2  # keep 20% of the pause clear on each side, so no word onset or tail is clipped
    i0, i1, w = int((a + m) * SR), int((b - m) * SR), int(0.01 * SR)
    best, bi = 9e9, (i0 + i1) // 2
    for i in range(i0, max(i0 + 1, i1 - w), w // 2):
        r = float(np.sqrt(np.mean(x[i:i + w] ** 2)))
        if r < best: best, bi = r, i + w // 2
    return bi
def join(parts):
    f = int(0.01 * SR); out = parts[0]
    for p in parts[1:]:
        t = np.linspace(0, np.pi / 2, f); out = np.concatenate([out[:-f], out[-f:] * np.cos(t) + p[:f] * np.sin(t), p[f:]])
    return out
r = load("r01")
gain = {"b01": 10 ** ((-25.1 - -23.4) / 20), "b02": 10 ** ((-26.3 - -23.4) / 20)}
# (block, original pause before, original pause after, re-take pause before, re-take pause after); seconds
EDITS = {
  "b01": [((26.78, 27.42), (31.72, 32.36), (23.90, 24.42), (29.02, 29.23)),   # P04 "That report found ... security."
          ((299.34, 299.98), (308.94, 309.56), (6.76, 7.40), (16.16, 16.70)), # P23 "The administration, it said, ..."
          ((371.80, 372.64), (375.58, 376.14), (3.12, 3.70), (6.76, 7.40))],  # P26 "Neither country, ... this steel."
  "b02": [((83.94, 84.38), (91.66, 91.98), (16.16, 16.70), (23.90, 24.42)),   # P43 "In the body ... estimated."
          ((197.92, 198.54), (201.04, 201.50), (None, None), (3.12, 3.70))],  # P49 "The records we examined ..."
}
for blk, edits in EDITS.items():
    x = load(blk); parts, pos = [], 0
    for ob, oa, rb, ra in sorted(edits, key=lambda e: e[0][0]):
        c0, c1 = quiet(x, *ob), quiet(x, *oa)
        s0 = 0 if rb[0] is None else quiet(r, *rb)
        s1 = len(r) if ra[1] >= len(r) / SR - 0.01 else quiet(r, *ra)
        seg = r[s0:s1] * gain[blk]
        if rb[0] is None: seg = np.concatenate([np.zeros(int(0.25 * SR), np.float32), seg])  # restore the pause before
        parts += [x[pos:c0], seg]; pos = c1
        print(f"{blk}: {c0/SR:7.2f}-{c1/SR:7.2f} s replaced by re-take {s0/SR:5.2f}-{s1/SR:5.2f} s")
    parts.append(x[pos:])
    y = join(parts)
    sf.write(f"{V}{blk}_final.wav", y, SR, subtype="PCM_24")
    print(f"{blk}_final: {len(y)/SR:.2f} s (was {len(x)/SR:.2f} s)")
