# Titan · picture gate, round 1 (720p review cut v1, 17 NOV 2026)

Cut: Drive `titan/renders/titan_review_v1_720p.mp4` (run 43996716198, 12 runners). 1,385.25 s = the timeline exactly;
1280×720; audio present.

## Measured
| Check | Result |
|---|---|
| Loudness (ebur128) | −14.0 LUFS integrated, peak −1.3 dB, LRA 2.7 LU: **pass** |
| Black frames (blackdetect 0.1 s) | none: **pass** |
| Stillness audit (3 s) | 0 runs: **pass** |
| Freezes (480p, n=0.002, d=1.5) | 6, 1.5–2.8 s: 6:05.9, 9:42.8, 16:55.7, 18:40.7, 21:59.7 (question cards, static pages) and 22:48 (the names, intended) → **fixed**: camera drift raised to ≥ 30 px per 4 s |
| Shard flash check | every shard passed on the runner |

## Frames against the words (one frame every 4 s, whole film)
| Issue | Where | Fix |
|---|---|---|
| Cards outlived their footage for up to 0.5 s (empty plate behind a card) | 2:05 NOAA bow, 8:05 hearing oath, 15:05 cost clip tail | `RealFootage` fades out on its end frame with its cards; `HearingClip` panel spans exactly the clip's picture (no empty video box before or after) |
| "Listen to it" footage was a blurry lab interior | 4:40 | replaced: a laptop showing live acoustic signals from a composite ring (J P / YouTube, CC BY, same channel and licence) |
| Rotated dive dates under the dive record collided with the wreck line and the source strip | 19:30–19:46 | dates removed from the chart (the pinned decisions carry them) |
| Contact-sheet note | — | the 1/4-fps sheet's labels sit ≈2 s before the frame shown; times above are corrected |

## Evidence and act checks
- The record by 0:07 (dive 80's trace, NTSB fig. 26, labelled TRACED); open loop (the depth plot) at 0:42, paid at 11:12;
  the Act I question at 1:49; channel name only in the outro. **Pass.**
- Every exhibit carries its source strip; reconstructions and illustrations labelled; the hindsight passage labelled
  OUR READING · NOT A FINDING for its whole length; numbers on screen match the voice and `claims.csv`. **Pass.**

## Open after the fixes
Render cut v2 and repeat the frame pass (2 fps) before the independent viewer and forensic reviews.
