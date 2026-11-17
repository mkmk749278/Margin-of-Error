# Titan · picture gate, round 5 (720p review cut v5, 17 NOV 2026)

Cut: Drive `titan/renders/titan_review_v5_720p.mp4` (run 44040029416, commit 1de379e). Carries round 5
(`viewer_review_v2_720p_check.md`).

## Measured on v5
| Check | v4 | v5 |
|---|---|---|
| Length | 1,393.93 s | 1,393.93 s picture, 1,393.93 s audio (= timeline) |
| Loudness | −14.0 LUFS | −14.0 LUFS, LRA 2.6 LU, −1.2 dBTP |
| Black frames (0.1 s, 480p) | none | none |
| Stillness audit (≥ 3 s) | — | 0 runs |
| Near-freezes ≥ 1.5 s (480p, n = 0.003) | 9, longest 2.8 s | 9, longest 2.8 s |

v5 near-freezes: 0:55.6 (date, by design) · 4:37.1 (act-turn question) · 6:04.8 (2.5 s) · 7:12.4 · 17:57.6 ·
21:25.2 · 21:53.3 · 22:09.7 (2.8 s) · 22:57.0 (the five names, by design).
22:09.7 checked frame by frame against the measured words: "NTSB:" lands on "N" (22:09.8), "4 RECOMMENDATIONS" and
the four slots on "four" (22:11.1), "TO THE U.S. COAST GUARD" on "U" (22:12.7). The picture changes on every word;
the changes are small text, below freezedetect's threshold. Not a freeze.

## Round-5 fixes, checked on v5
- Cold-open axis: TIME dims, "→ DEPTH" arrives beside it and stays (0:49, 0:52). PASS.
- Act II chart broken by the record (fig. 151 logbook, 3:15). PASS.
- Hull-2 card: "SHOWN HERE: 75 → 80, TO THE WRECK" (7:18). Card builds on its words. PASS.
- "≈ 500 M SHORT" inside the frame (19:50). PASS.
- TSB card (12:58–13:04) fills on its words. PASS. (Its +98% line is the narration change planned next.)

## Found on v5, fixed for v6
| Issue | Where | Fix |
|---|---|---|
| **The narration's spelling "N-T-S-B" on screen**, 19 labels in all five acts (e.g. 0:49 chip, 14:03 finding bar, 22:09 "THE N-T-S-B:"). The hyphens are a voice instruction (PLAYBOOK §7); the record and the viewer read "NTSB" | act1–act45 | every on-screen label now "NTSB"; spoken text unchanged |
| **Source strips cut with "…"**: "…TSB M…" (2:59–4:37), "…FIG…" (11:56), "…CG 112, …" (19:45), and 8 more. A record id the viewer cannot read; §6.7 says text is never clipped | `kit.tsx` Mount strip; 11 sources | the strip wraps instead of cutting (grows upward); the 11 sources shortened with every record id kept; tracking 0.6 → 0.2 px. Stills of all 11 strips + the NTSB labels at 720p: each on one line, complete |

Gates after the fix: `tsc` 0 errors; sync audit 0 of 244; text floor 0; claims gate passes (130).
