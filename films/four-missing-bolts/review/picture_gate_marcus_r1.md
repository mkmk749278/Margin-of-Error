# Picture gate: Marcus re-voice, 720p review cut (2026-11-06)

Cut: Drive `four-missing-bolts/renders/four-missing-bolts_review_marcus_720p.mp4` (run 42225170073), 1280×720, 60 fps,
49,452 frames = 824.20 s = `vo/timing.json`; audio 824.20 s.

The picture code is the owner-approved round-3b/4K cut with three cues added (s26 "between", s143 "jelly", s150
"airplane"); only the timing changed. So this round checks what a re-timing can break.

| Check | Result |
|---|---|
| Loudness | −14.0 LUFS integrated, −1.2 dBTP after AAC, LRA 3.3 LU |
| Black frames | none |
| Stillness (≥ 3 s) | 0 runs |
| Frozen (480p, n=0.002, ≥ 1.5 s) | 4, all under 2.5 s: 1:14.9 (1.7 s), 4:59.0 (2.4 s), 6:14.0 (1.6 s), 13:02.7 (1.5 s) |
| Sync audit | 177/177 sentences, no uncued stretch over 1.5 s, no uncued number |
| Word cues resolve | all (`sync_audit.py` fails on any that don't) |
| Session stills | every 8 s, 103 frames: no overlap, clipping or empty card |
| Runner frames | sheets every 4 s (206 frames) read at 0:02–0:34, 4:50–5:22, 9:38–10:10, 12:38–13:10: fonts, labels, real exhibits, honesty labels as in the session |
| Narration | `vo_review.py --model medium.en` 99.5–100% of words as written; every flag checked on its own cut; owner approved the audio |
| Open loop | "about five minutes" → paid 4:43 later |

**Verdict: passes.** No blocker. Next: the owner approves the cut → the 4K master (scale 2) → the package
(`youtube/package.md`: chapters, the photograph timecode and the end screen remapped; the voice note added;
SRT rebuilt, 223 cues).
