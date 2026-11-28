#!/usr/bin/env python3
"""Owner's audio notes on the approved finals (28 NOV 2026), applied to the r01 finals (PLAYBOOK §10.4).
b02: the P49 splice ("The records we examined give no engineering reason.") down 3.0 dB (it measured -24.1 LUFS
     against -27.5 / -28.0 for the sentences either side) and its pre-pause trimmed from 0.90 s (end of "wider?" to the
     onset of "The") to 0.63 s: 0.27 s of digital silence cut out of the middle of the pause.
     (Owner asked for ~0.48 s from a 0.75 s reading; both readings agree on the cut: 0.27 s.)
b01: the r01 splices checked against the mean of the sentences either side (±1 dB): P23 -0.2 dB (kept), P04 -1.25 dB
     and P26 -1.3 dB, so P04 +1.0 dB and P26 +1.2 dB.
Every gain change is a 20 ms ramp on the quietest 10 ms of the pause either side; the cut is a 10 ms equal-power fade.
Writes assets/lpt-goes-steel/vo/lpt-goes-steel_vo_b01_final_r02.wav and _b02_final_r02.wav."""
import numpy as np, soundfile as sf
V = "assets/lpt-goes-steel/vo/lpt-goes-steel_vo_"
def quiet(x, sr, a, b):
    w = int(0.01 * sr); best, bi = 9e9, int((a + b) / 2 * sr)
    for i in range(int(a * sr), int(b * sr) - w, w // 2):
        r = float(np.sqrt(np.mean(x[i:i + w] ** 2)))
        if r < best: best, bi = r, i + w // 2
    return bi
def gain(x, sr, i0, i1, db):
    g = np.ones(len(x)); k = 10 ** (db / 20); r = int(0.02 * sr)
    g[i0:i1] = k; g[i0 - r // 2:i0 + r // 2] = np.linspace(1, k, r); g[i1 - r // 2:i1 + r // 2] = np.linspace(k, 1, r)
    return x * g
# b01: (pause before, pause after, dB); pauses measured on b01_final (faster-whisper medium.en word times)
x, sr = sf.read(V + "b01_final.wav")
for name, pb, pa, db in [("P04", (26.78, 27.42), (31.90, 32.32), +1.0), ("P26", (371.22, 371.70), (374.76, 375.66), +1.2)]:
    i0, i1 = quiet(x, sr, *pb), quiet(x, sr, *pa); x = gain(x, sr, i0, i1, db)
    print(f"b01 {name}: {i0/sr:.2f}-{i1/sr:.2f} s {db:+.1f} dB")
sf.write(V + "b01_final_r02.wav", x, sr, subtype="PCM_24")
# b02: P49 -3 dB from the pause before to the pause after, then cut 0.27 s of zeros from the pause before
x, sr = sf.read(V + "b02_final.wav")
i0, i1 = quiet(x, sr, 197.95, 198.70), quiet(x, sr, 201.74, 202.20)
x = gain(x, sr, i0, i1, -3.0); print(f"b02 P49: {i0/sr:.2f}-{i1/sr:.2f} s -3.0 dB")
c0, c1 = int(198.345 * sr), int(198.615 * sr); f = int(0.01 * sr); t = np.linspace(0, np.pi / 2, f)
x = np.concatenate([x[:c0], x[c0:c0 + f] * np.cos(t) + x[c1:c1 + f] * np.sin(t), x[c1 + f:]])
print(f"b02 cut {c0/sr:.3f}-{c1/sr:.3f} s ({(c1-c0)/sr:.2f} s)")
sf.write(V + "b02_final_r02.wav", x, sr, subtype="PCM_24")
