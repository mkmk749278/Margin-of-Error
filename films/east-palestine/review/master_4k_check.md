# East Palestine: 4K master check (07 NOV 2026)

Master: Drive `east-palestine/renders/east-palestine_master_4k.mp4` (1.70 GB), rendered from `main` e6e6e3d (the
owner-approved r3 cut, unchanged) by remotion-render run 42348084191: scale 2, CRF 16, 19 blocks on 19 runners plus
the join, 06:41–07:56 UTC, every job green. 1080p copy: `east-palestine_master_1080p.mp4` (same folder).

| Check | Result |
|---|---|
| Gates before the run | `tsc --noEmit` clean; `claims_check.py`: 184 rows, gate passes; `text_floor.py`: 0 lines below the floor |
| Picture | H.264 3840×2160, 60/1 fps, yuv420p, **66,549 frames**, 1109.150 s = `vo/timing.json` |
| Sound | AAC 48 kHz stereo, 1109.150 s, same as the picture; **−14.0 LUFS**, LRA 3.0 LU (the approved mix) |
| Every frame against the approved r3 720p cut | master scaled to 720p, PSNR per frame over all 66,549: frame counts equal, nothing shifted; median Y 31.0 dB; the lowest frames (19.6–24 dB, Act V verdict cards, the second-number plot, the cost table) looked at side by side: the same picture, only the anti-aliasing of rotated stamps and small type differs between a 4K and a 720p raster |
| Shard seams (36, every 30 s) | three frames either side of each: no step at any seam; the only seam inside a low-PSNR stretch (50400) is low on both sides (dense type), not a seam fault |
| Isolated one-frame drops | 6 of 5–6 dB (19228, 25666–7, 31040, 32820, 44915): mid-dissolve frames, present in both cuts |
| Runner frames | contact sheet `master_4k_contact.jpg` (16 frames, one per chapter): fonts, honesty labels, source strips and hearing captions as in r3 |

**Verdict: the master is the approved cut at 4K. Ready for upload.** No edits made (the owner approved the cut).
