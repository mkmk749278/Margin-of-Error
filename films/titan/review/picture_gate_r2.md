# Titan · picture gate, round 2 (720p review cut v2, 17 NOV 2026)

Cut: Drive `titan/renders/titan_review_v2_720p.mp4` (run 44003664816, branch `ccr-f7fe467c-g6ztxq`). 1,385.25 s =
the timeline exactly.

## Measured
| Check | v1 | v2 |
|---|---|---|
| Loudness | −14.0 LUFS, peak −1.3 dB | −14.0 LUFS, peak −1.3 dB |
| Black frames (0.1 s) | none | none |
| Stillness audit (3 s) | 0 | 0 |
| Freezes ≥ 1.5 s (480p) | 6 | 3: 9:43.4 (2.1 s, the theory question card), 22:00.7 (1.7 s, "What now?"), 22:48.2 (1.8 s, the five names: intended) |

## Round-1 fixes, checked frame by frame (1 fps sheets with the words heard)
| Fix | Where | Result |
|---|---|---|
| Footage and its cards leave together | 2:05 NOAA bow → 2:06 Act II build | FIXED: card and picture fade as one |
| Hearing-clip panel spans exactly its picture | 8:18–8:22 flashlight; 15:00–15:05 cost | FIXED: no empty box before or after |
| "Listen to it" footage | 4:41 | FIXED: live acoustic signals on a laptop beside a composite ring |
| Dive-record dates off the chart | 19:30–19:47 | FIXED: chart clear; decisions carry their dates |

## Still open (into round 3 with the independent reviews)
- 19:36–19:47: the "6 / 13 of these reached 3,840 m" counter sits close under the title line's right end; move it down
  20 px clear of the title.
- 9:43 and 22:00: two question cards hold 1.7–2.1 s with only drift; give each a word-locked change (underline draw).

Independent reviews running: forensic (session with the repo) and viewer panel (no repo); each point to be checked
(§14.3) in `review/*_check.md` before round 3.
