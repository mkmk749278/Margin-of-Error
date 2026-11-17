# Titan · picture gate, round 6 (720p review cut v7, 17 NOV 2026)

Cut: Drive `titan/renders/titan_review_v7_720p.mp4` (run 44086845969, commit e8c59ce). Carries round 5's screen fixes
(`picture_gate_r5.md`, also in v6, run 44077129315) and round 6: the s119/s147/s148 re-takes (fact-check v3), the
NTSB clip inserted after Brooks's, OceanGate's dive-80 plot with its depth axis, the TSB card, the Act II sensor
inset, and the new mix (Drive `titan/mix/mix.wav`; v5/v6 mix kept as `mix_v6.wav`).

## Measured on v7
| Check | v5 | v7 |
|---|---|---|
| Length | 1,393.93 s | 1,406.93 s picture and audio (= timeline, 23:26.9) |
| Loudness | −14.0 LUFS, −1.2 dBTP | −14.0 LUFS, LRA 2.6 LU, −1.3 dBTP |
| Black frames (0.1 s, 480p) | none | none |
| Stillness audit (≥ 3 s) | 0 | 0 |
| Near-freezes ≥ 1.5 s (480p, n = 0.003) | 9, longest 2.8 s | 8, longest 3.0 s |

v7 near-freezes: 0:55.6 (date, by design) · 4:37.1 (act-turn question) · 6:04.8 (2.5 s) · 7:12.4 · 21:38.1 ·
22:06.3 · 22:22.7 (3.0 s, "What now?": checked in round 5, the picture changes on every word in small text) ·
23:10.0 (the five names, by design). None in the scenes changed this round.

## Round 6, checked on the decoded cut
- 4:53.8–5:14 Act II monitor card: the hull's eight sensors shrink into the corner on "limits"; channels 1, 3, 5 red
  on "three", matching the row of eight below. Clear of the chip row. PASS.
- 10:50 NTSB clip: the traced plot shows depth on its right-hand axis, rising with the strain, as NTSB fig. 20; the
  credit strip complete ("USCG, 25 SEP 2024 · TRACED: NTSB 24-012 FIG. 26 · PUBLIC DOMAIN"). PASS.
- 10:57.5–11:00.5 s119: DEPTH on "depth", ON THE SAME CHART (AS THE STRAIN) on its words, BOTH … AGAINST THE CLOCK
  and the amber TIME axis on "clock". Source strip complete, TRACED label. PASS.
- 13:05–13:24 TSB card: each line on its words; "SLOPE 10–300 M" lands on "ten" and "three hundred"; +98% grey until
  "double". PASS.
- 0:49 "NTSB" chip; 22:25 "THE NTSB: 4 RECOMMENDATIONS"; 3:12 source strip complete. PASS.
- Audio across 10:34–11:06: Brooks clip → Kramer clip → s119 → s120, no overlap (Whisper on the mix); voice stem
  −2.8 dBTP.

Gates: `tsc` 0; sync audit 0 of 245; text floor 0 (now also checks voice spelling on screen); claims gate passes (131).

**No open blocker. v7 goes to the owner as the review cut.**
