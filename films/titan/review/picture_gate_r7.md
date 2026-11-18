# Titan · picture gate, round 7 (720p review cut v8, 18 NOV 2026)

Cut: Drive `titan/renders/titan_review_v8_720p.mp4`, joined by run 44341919319. It reuses run 44308960890's blocks
and re-renders block 14400-27000 at commit 4f171f0. Carries the slides phase (every act rebuilt on the 3D hull, the
record's photos and real footage), the screen-text fact-check, the DOTF photo replaced (owner, 18 NOV 2026) and the
3D canvas size rounded (the fractional width that killed block 14400-27000 at frame 28373).

## Measured on v8
| Check | v7 | v8 | Gate |
|---|---|---|---|
| Length | 1,406.93 s | 1,421.32 s picture and audio (= timeline 1,421.31 s) | pass |
| Loudness | −14.0 LUFS, −1.3 dBTP | −14.0 LUFS, LRA 2.8 LU, −1.2 dBTP | pass |
| Black (0.1 s, 480p) | none | 23:37.3–23:41.1, the outro slate on the void (by design) | pass |
| Stillness audit (≥ 3 s) | 0 | 0 | pass |
| Near-freezes ≥ 1.5 s (480p, n = 0.003) | 8 | 1: 23:38.3, 1.6 s (outro, by design) | pass |
| **Slide audit** (`slide_audit_v8.md`) | 60% · 81 s · 0:58 · 97% | **36% · 82 s · 0:09 · 37%** | **FAIL** |

## Changes checked on the decoded cut
- 4:11.7 (s40–41): the 3D hull with "DEEP OCEAN TEST FACILITY · BETHESDA, MD · FEB 2021"; the DOTF photo is gone. PASS.
- 4:17 "4,200 M · PLAN: 3 OF 4 DAYS" inside its card. PASS.
- 7:52.9 (frame 28373, the crash frame): the hull at its split width, chips and label clear. PASS.

## Blocker: the slide audit (PLAYBOOK §6.8)
Read frame by frame (contact sheets of the long runs). There are two causes:
1. **The 3D hull counts as a card.** It is near-black carbon on a dark bench in the void, so ≥ 80% of the frame is
   dark. 0:00–0:09 is the hull with its strain trace. Half of 2:56–4:18 is the hull. On a TV across the room it reads
   as dark too.
2. **Real card runs:** one composition held too long, with record charts on dark cards.

| Run | Sentences | On screen | Fix (round 8) |
|---|---|---|---|
| 0:00–0:09 (9 s) | s0–s1 | hull + strain trace | lit hull (1) |
| 0:48–1:00 (12 s) | s8–s9 | dive-80 time plot | lit mount (3) |
| 1:21–1:38 (17 s) | s14–s16 | trace at 10:47 | lit hull (1); cut-in under 12 s |
| **2:56–4:18 (82 s)** | s29–s42 | depth chart + hull, one layout | lit hull (1); cut-ins: Hull 1 photos (`hull1_2019`, `hull1_crack`) on s37–s39; layout change at s40 |
| 4:39–4:55 (16 s) | s46–s49 | "never tested to failure" | cut-in |
| 5:37–5:55 (18 s) | s57–s58 | alert criteria | cut-in |
| 9:24–9:41 (17 s) | s103–s106 | "What did they think the bang was?" | cut-in |
| 10:06–10:46 (3 × 9–12 s) | s110–s117 | dive 81 on, the sensor testimony | break with the hearing room |
| **11:03–12:18 (75 s)** | s120–s135 | the strain re-plot on dark cards | lit mount (3); cut-ins: NTSB materials photos |
| 12:31–13:03 (32 s) | s138–s144 | our timing reading | lit mount (3) + cut-in |
| 13:51–14:06 (15 s) | s153–s156 | layer separation | lit hull (1) |
| 16:06–16:16, 17:10–17:20 | s176–s187 | the ship, the platform | real footage or photo |
| 17:57–18:36 (19 s, 13 s) | s194–s199 | USCG guidance | the guidance page on the desk |
| 19:03–19:22 (19 s) | s203–s207 | "damage of unknown origin" | NTSB photo of the recovered parts |
| 19:42–19:53 (11 s) | s211–s212 | delamination | lit hull (1) |
| 20:01–20:23 (22 s) | s214–s218 | dive record 75–88 | lit mount (3) |
| 23:10–23:24 (14 s) | s247–s248 | the sign-off | lit hull (1) |

Fixes:
1. **Light the 3D hull as a physical object:** carbon reads dark grey with its weave, the bench lit, and a soft lit
   sweep behind it. This is global and fixes every hull frame at once.
2. **Cut-ins from the record** every ≤ 12 s in the long runs, from photos already vetted in `media_manifest.csv`.
3. **Redrawn record charts on a lit mount** (the paper token, like a lab sheet), not a dark card.

Also found:
- 23:28–23:37, the outro's sources line, and "18 JUN 2023" under the five names, are below 26 px (about 15 px at
  1080). Raise both to 26 px.
- 4:11 "MODELS: 2,800 M · 2,500 M" dims to about 40% when the test line lands. The red still reads; keep it at 60%
  or more.

**Open blocker: the slide audit. v8 does not go to the owner. Round 8 builds the fixes, then a full re-render.**
