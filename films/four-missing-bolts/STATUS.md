# The Four Missing Bolts: status and handoff (2026-11-03, evening)

Read this first in a new session, then `CLAUDE.md` and the playbook parts it names.

## Done
- **Research, claims, treatment, script v2.1, screenplay, assets:** as before (claims now 91 rows, gate passes;
  C89–C91 added for on-screen facts in Act III).
- **Voice:** voice "1" on **Eleven v4, stability Creative (0.0), similarity 0.80** (owner, 2026-11-03). All five blocks
  generated and measured (98–100% of words as written, 141–160 wpm, no flat stretches; `N - T - S - B` read as
  letters). Takes in Drive `four-missing-bolts/vo/`.
- **Timing:** `vo/timing.json` = the joined takes (scripts/vo_timing.py, act titles from `script/acts.txt`) plus the
  edit holds in `script/holds.json` (scripts/film_timing.py). Film **16:15**; open loop **351.7 s** (window 345–375).
- **Benchmark:** `research/benchmark_youtube.md` (what the existing films missed; applied in Act II).
- **Picture:** the whole film in Remotion, `remotion/` (Film.tsx, kit, engine3d + PlugModel, docs, scenes/act1–5).
  Composition `FourMissingBolts`. Stills of every act reviewed in the session.
- **Sound:** ElevenLabs music (6 cues) and effects (8) via `scripts/el_sound.py` (`sound/el_sound.json`,
  `sound/el_log.csv`); cues exported from the picture (`sound/cues.json`); mix by `scripts/mix_film.py`
  (`sound/mix.json`, `sound/mix_report.md`): voice −2.3 dBTP, master −14.0 LUFS, −1.4 dBTP. Mix in Drive
  `four-missing-bolts/mix/mix.wav`; render media in Drive `four-missing-bolts/render-media/`.

## Next, in order
1. **720p review cut on the render farm** (`remotion-render.yml`: film `four-missing-bolts`, comp `FourMissingBolts`,
   scale `2/3`, name `four-missing-bolts_review_r1_720p.mp4`). Dispatched 2026-11-03 (run 41604046525) after the owner set
   the default branch to `main` (workflows register only from the default branch).
2. Picture gate (§14.2): r1 read frame by frame (review/picture_gate_r1.md), 8 fixes, r2 rendered
   (Drive `renders/four-missing-bolts_review_r2_720p.mp4`) and the fixes verified. Independent fresh-eyes review of r2
   running in session session_017FkceYUjxs6FoDdpVxTDCd (report → review/fresh_eyes_r2.md).
3. Owner review; fixes collected per round; 4K only after approval; then the YouTube package (§13.7).

## Open with the owner
- rclone's shared Drive client id is being retired during 2026 (own client id + re-authorise).
- Brand art still to design. Before publication: status of the plug design enhancement (C65).

## Branches
`ccr-76270493-hjpb56` (merged earlier) can be deleted. This session: `ccr-9288f556-4k3oqe`.
