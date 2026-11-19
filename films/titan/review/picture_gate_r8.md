# Titan · picture gate, round 8 (720p review cut v9, 19 NOV 2026)

Cut: Drive `titan/renders/titan_review_v9_720p.mp4`, run 44449474377 at main 1d9cb61, the whole film re-rendered.
It carries round 8 (PRs #104–#106): the 3D hull lit as a physical object, every chart and readout plate on the lit
mount (`lamp` tokens, the default for `Mount` and `Card`), the opening re-plot under the lamp, the outro sources on two
lines at 30 px, "18 JUN 2023" at 36 px, and the MODELS label kept at 65% or more.

## Measured on v9
| Check | v8 | v9 | Gate |
|---|---|---|---|
| Length | 1,421.32 s | 1,421.32 s picture, 1,421.32 s audio (= timeline 1,421.32 s) | pass |
| Loudness | −14.0 LUFS, LRA 2.8, −1.2 dBTP | −14.0 LUFS, LRA 2.8 LU, −1.2 dBTP | pass |
| Stillness audit (≥ 3 s) | 0 | 0 | pass |
| Near-freezes ≥ 1.5 s (480p, n = 0.003) | 1 (outro) | 0 | pass |
| **Slide audit** (`slide_audit_v9.md`) | 36% · 82 s · 0:09 · 37% | **1% · 4 s · 0:00 · 2%** | **pass** |

Black (480p, `blackdetect d=0.1 pix_th=0.10`): 13 dips of 0.10–0.57 s mid-film, plus the outro slate on the void
(23:37.3–23:41.3, by design). The same 13 are in v8 at the same times (checked on the v8 file this round; round 7's
black check ran a stricter setting). They are the scene dissolve through the empty desk (`Film.tsx`: "a cut is always a
dissolve on the desk"): the grid and act chip stay on screen, all under the 0.8 s hold rule. Longest: 17:27.8 (0.57 s),
23:23.4 (0.52 s). Not a blocker; a later polish could overlap those two scene pairs.

## Changes checked on the decoded cut
- 0:03, 3:20, 4:05, 4:45, 11:40, 19:50 (hull frames): carbon reads as dark grey with its weave, bench and lit floor;
  overlays and honesty labels clear. PASS.
- 0:50 dive-80 plot, 1:25 dive-88 log, 11:40 re-plot, 12:40 timing reading, 19:50 delamination: on the lit mount; ink,
  cyan, amber and red labels all read. PASS.
- 4:45 "MODELS: 2,800 M · 2,500 M" stays red and readable after the test line lands. PASS.
- 23:28 names, "18 JUN 2023" at 36 px; 23:39 sources on two lines at 30 px. PASS.

## Notes for a later round (not blockers)
- 1:21–1:38, the dive-88 text-log panel ("3,350 M · CLOCK 10:47") is mostly empty slate: lit, so it passes, but a thin
  picture for 17 s.
- Render time: the lit hull costs about 1.8× v8 on the runners (block 14400–27000: 4 h 10 min, against a 350 min job
  limit). PLAYBOOK §10.5 note added.

**No open blocker: v9 goes to the owner.**
