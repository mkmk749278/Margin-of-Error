# The Four Missing Bolts: status and handoff (2026-11-06)

## Re-voice with Marcus (2026-11-06; the owner took the voice-"1" upload down)
- **Voice:** "Marcus - Baritone(Stoic)", Eleven v4, stability 0.5. 12,097 characters, text unchanged (2,091 words,
  matched word for word to the final narration). Film now **13:44.2** (narration 756 s; 55 holds, 54.1 s). Open-loop
  window scaled to Marcus's pace (260–310 s; the gap is 283 s, and "about five minutes" stays true).
- **Checks:** `vo_review.py --model medium.en` 99.5–100% of words as written; every flag checked on its own cut
  (number formatting; one diff artefact). Word alignment re-run (2,097 words). Three cues added (s26 "between", s143
  "jelly", s150 "airplane"); sync 177/177. Stills swept every 8 s: clean.
- **Mix:** slots and the wind cue mapped sentence by sentence: −14.00 LUFS, −1.40 dBTP, voice −2.4 dBTP; Drive
  `mix/mix.wav` (the voice-1 mix kept as `mix_voice1.wav`). Takes: Drive `vo/marcus/`; full narration
  `vo/four-missing-bolts_narration_marcus_full.mp3`.
- **Next:** owner approves the audio; 720p review cut (after the East Palestine render, inside the runner budget);
  review; owner approves the cut; 4K master; the package again with the voice note in the description.


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

## US and UK audience review of the 4K master (2026-11-04)
- `review/audience_us_uk_4k.md`: 177 sentence frames of the master read, plus sequential decodes and 4K crops.
  **Verdict: ship; no re-render.** Package fixed: new recommended title (Boeing first), description line 1
  ("737-9 MAX", NTSB and FAA glossed, where the real Fig. 18 is), search-phrase chapters, thumbnail D (NTSB Fig. 1)
  for Test & Compare D/B/C, end-screen step, SRT rebuilt (NTSB/FAA/MAX as text, no one-word tails; 223 cues).
  Claims 93/93 (C93 added). Cut lessons L1–L7 in PLAYBOOK §4.1c.

## Final pass (2026-11-04): forensic review, fixes, 4K master
- **Forensic review of the round-3b cut:** `review/forensic_review_round3b_720p.md` (0 gaps, 0 black/frozen frames,
  0 still holds, −14.1 LUFS / −1.3 dBTP; claims 92/92; sync 177/177). Six fixes in code (bolt readout never passes
  3 OF 4; NTSB on screen as one word; the production chart no longer sits empty; door-team tiles larger and off the
  grid lines; "INCREASED HIRING"; the Graham quote ends with an ellipsis; "SAID THE COMPANY KNEW"). Voice and mix
  unchanged. PR #16, merged.
- **4K master done** (run 41779692152, scale 2, CRF 16, 30 Mb/s cap): Drive
  `renders/four-missing-bolts_master_4k.mp4`, 3840×2160, 60 fps, 54,316 frames (15:05.27, = timing.json), H.264
  High, 11.3 Mb/s average, 1.28 GB; the six fixes checked in its frames; −14.1 LUFS, −1.3 dBTP, 0 black or frozen frames (measured on the file).
- **YouTube package:** `youtube/package.md` (3 titles, description with chapters and sources, tags, pinned comment,
  Studio checklist), 3 thumbnails, `four-missing-bolts.en.srt` (230 cues).
- **For the owner:** two spoken paraphrases kept ("it hired fast"; "at all"), see the review's last section.

## Round 3 (2026-11-03): dead air cut, word-level choreography begun
Owner's notes: "so many audio gaps, it feels like the video stopped"; the word-level kinetic choreography directive
(PLAYBOOK §10.6); "regenerate the minute number only, nothing that feels stitched".
- **Word times measured** (`scripts/word_align.py`, CTC forced alignment): the old estimates were off by a median
  65 ms, up to 1 s.
- **Dead air cut:** holds 124 s → 54 s (0.8 s cap; act turns and signature beats 1.5–3 s). Film **15:05** (was 16:15).
  Music continuous from 0:04 (regenerated: the earlier ElevenLabs files had never reached Drive; now in Drive
  `assets/el/`). Mix −14.0 LUFS, −1.4 dBTP; no stretch under −34 dB longer than 1.2 s. Previous mix kept as
  `mix/mix_round2b.wav`.
- **Promise line:** "about six minutes" → "about five minutes" (the reveal now lands 5:17 later). One sentence
  regenerated (best of 4 takes by pitch and pace), cut in at its own pauses: pauses either side within 10 ms of the
  original, no click. Take `vo/four-missing-bolts_vo_b01_v2.mp3` in Drive (the original kept).
- **Word-level choreography:** kit `lib/remotion/Kinetic.tsx`; the journey (sentences 49–50) rebuilt beat by beat
  (`scenes/choreography/journey.md`); the 154-flight counter now lands on "fifty-four". Audit
  (`review/sync_audit.md`): 161 of 177 sentences still had an uncued stretch over 1.5 s.
- **Legibility pass merged (2026-11-04).** The round-2b check and its fixes (every label ≥ 26 px across the film,
  one driver for the g trace, the removal record rebuilt, 13 faults; `review/round2b_check.md`) sat on branch
  `ccr-f2c16d1a-fculpb` and had never reached `main`: the round-3a render was built without them. Merged here, Act I
  re-floored by hand; `scripts/text_floor.py` reads 0.
- **Act I choreographed word by word (2026-11-04):** sentences 0–22, 113 word cues
  (`scenes/choreography/act1.md`). The date, the event time, the aircraft, the NTSB altitude, the alarms, the
  quotes, the photographs' camera ("behind the wing", "left side", "hole"), the 29 × 59 in dimensions, the seats,
  the track and injury counts, the voice-recorder tape, the report, the 108-day bar and the question all change on
  their own words. **The FDR replay is now anchored to "dropped":** at ×0.25 the recorded warning and master
  caution then land within 100 ms of their words from the record itself. Sync audit: Act I 23/23 pass; film
  139 of 177 sentences still fail (Acts II–V).
- **Mix patched for the moved effects** (pressure drop, two chimes, paper, highlighter, pen, a new stamp):
  `scripts/patch_mix_sfx.py` (old mix − old cues + new cues, same limiter; changes confined to 15.4–79.3 s).
  −14.0 LUFS, −1.4 dBTP, unchanged. Drive `mix/mix.wav`; the previous kept as `mix/mix_round3a.wav`.
- **The whole film choreographed word by word (2026-11-04):** Acts II–V on the same kit (sentences 23–176), plus shared
  beats in `remotion/beats.tsx` (`KeyLine`: key phrases that land on their words; `ChunkQuote`: a record quote revealed
  chunk by chunk as the narration reaches it; `WordLine`). **Sync audit 177/177 pass, 887 word cues** (was 69 cues, 162
  failing). Every counted cue drives a visible change (a check found 13 names defined but never drawn; all wired).
  Choreography: `scenes/choreography/act1.md`, `journey.md` (hand-written) and `acts2-5.md` (generated from the code by
  `scripts/choreo_index.py`). One behaviour change in Act IV: the g trace and the effective-weight readout now dip
  together on "fell from sixty-three pounds to about twenty-five" (before, the readout reached 25 lb on "lowest", ~5 s
  before the narration said the number).
- **Effects re-exported, mix patched again** (48 cues, changes 2:02–14:45, −14.0 LUFS, −1.4 dBTP). Drive `mix/mix.wav`;
  previous kept as `mix/mix_round3_act1.wav`.
- **720p round-3b cut rendering on the farm** → Drive `renders/four-missing-bolts_review_round3b_720p.mp4`. Then: still
  holds, flash, loudness and a sheet read of the cut, then to the owner.

## Delivered to the owner (2026-11-03), round 2
Round-2 cut (owner's PDF notes, audio locked, plus a deep review): Drive `renders/four-missing-bolts_review_round2b_720p.mp4`.
Motion audit: 0 still runs of 3 s or more (was 76). Loudness −14.0 LUFS, −1.3 dBTP. Waiting for the owner's notes.

## Earlier delivery (round 1)
Review cut (720p, 16:15): Drive `four-missing-bolts/renders/four-missing-bolts_review_720p.mp4`. Picture gate r1, fresh-eyes review r2
(`review/fresh_eyes_r2.md`, applied), r3/r4 checked. Waiting for the owner's notes; collect them all, then one round.
**Owner's notes so far (2026-11-03):** an outside visual review of the 720p cut (audio locked). Every point checked in
code, timing and rendered stills: `review/outside_visual_r1_check.md` (5 confirmed, 5 partly, 2 not confirmed, 2 new
faults found) with the fix list for the next round. Not applied yet.

## Next, in order (history)
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
All merged into `main` and safe to delete: `ccr-1364b7b0-rh2ico`, `ccr-f2c16d1a-fculpb` (merged 2026-11-04),
`review-fresh-eyes-r2` (review session), `ccr-76270493-hjpb56`, `ccr-9288f556-4k3oqe`, and this session's
`ccr-e72aa454-utqxe5`, and `ccr-13a84ff1-gtorhw` (this pass) once its PRs are merged.
`ccr-76270493-hjpb56` and `ccr-9288f556-4k3oqe` (merged) can be deleted. Docs and round-3 session 2026-11-03: `ccr-f2c16d1a-fculpb`.
