# Picture gate r1: 720p review cut, Marcus (2026-11-06)

Cut: Drive `east-palestine/renders/east-palestine_review_r1_720p.mp4` (render 42214755971, joined by 42236379949),
1280×720, 60 fps, 66,549 frames = 1109.15 s = `vo/timing.json`; audio 1109.15 s.

| Check | Result |
|---|---|
| Loudness | −14.0 LUFS integrated, −1.3 dBTP after AAC, LRA 3.0 LU |
| Frozen (480p, n=0.002, ≥ 1.5 s) | 3, all under 2.5 s: 3:42.8 (1.6 s), 9:05.3 (1.75 s), 15:36.8 (1.5 s) |
| Stillness (≥ 3 s) | 0 runs |
| **Black** | **2: 16:32.7 (1.85 s), 16:58.1 (1.67 s)**: the DISMISSED and "Could it happen again?" title cards, which the stills fix had put on a full-frame void (one line of text on near-black reads as a dead frame on a TV) |
| Sync audit | 198/198; every word cue resolves |
| Session stills | every 8 s (139) and at every fix |
| Runner frames | sheets every 4 s (277 frames) read at 0:02–0:34, 5:26–5:58 (hearing clip 1 with transcript captions), 10:50–11:22 (the blind 19 miles on the recorder data), 16:50–17:22: fonts, labels, real exhibits, honesty labels correct |
| Narration | speech-to-text and Gemini checks passed; owner approved the audio |

**Fix (r2):** both title cards are now a centred card on the desk (card colour, border, amber edge, shadow), so the
desk stays visible and the incoming document still can't show through. Stills at 59610, 59700, 59768, 61134, 61204
checked. Re-render block 50400–61200 only (`blocks` + `reuse_from` 42214755971), then measure the joined cut again.

## r2 (render 42238582203: block 50400–61200 re-rendered, the rest reused)
Drive `east-palestine/renders/east-palestine_review_r2_720p.mp4`: 66,549 frames, 1109.15 s, audio 1109.15 s.
Loudness −14.0 LUFS / −1.3 dBTP; **black: none**; stillness 0; the same three freezes, all under 2.5 s. Frames at
16:33.5 and 16:58.9 read from the file: both title cards sit on the desk. **Verdict: passes.** Next: the owner
approves the cut → 4K master.

## r3: real federal footage (render 42266689658: blocks 0–10800 and 50400–61200, the rest reused)
Drive `east-palestine/renders/east-palestine_review_r3_720p.mp4`: 66,549 frames, 1109.15 s, audio 1109.15 s.
Loudness −14.0 LUFS / −1.3 dBTP; black: none; stillness 0; the same three short freezes. Frames read from the file:
0:00.5–0:06.5 (NTSB drone over the burning cars under the dateline, strip "05 FEB 2023 · THE WRECK, TWO DAYS
LATER"), 1:34–1:41.5 (the reconstruction hands over to the NTSB drone pass, then the NTSB aerial; the counters on
cards), 14:23.5 (EPA aircraft, 07 FEB, still smoking). **Verdict: passes.** Next: the owner approves the cut.
