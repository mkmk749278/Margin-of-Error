# Titan: status (17 NOV 2026, third session)

## Done this session: the picture, all five acts (Remotion, `films/titan/remotion/`)
- **Acts I–V coded on the measured words** (`scenes/act1.tsx`, `act2`, `act3a`, `act3b`, `act3c`, `act45`):
  1,662 word cues on 3,530 words; **sync audit 0 of 244 sentences fail** (`review/sync_audit.md`); text floor 0;
  claims gate passes (130). Choreography tables generated from the code: `scenes/choreography/*.md`.
- **The re-plot (signature 2) uses the NTSB's own points:** figs. 29–31 of Materials Lab report 24-012 are vector
  graphics, so every plotted point was read from the PDF (`research/digitise/`); the points move from time order to
  strain-vs-depth, then zoom to the first 1,000 m; the NTSB slopes land digit by digit. Dive 80's time trace (cold
  open, sign-off) traced from fig. 26d.
- **Real exhibits with located highlights:** CG-098 (incl. its photographs of the delaminated cut-off ends), CG-100
  (the recorded 2018 meeting), CG 112 hearing pages, the USCG board report, NTSB MIR-25-36 (fig. 17 micrograph,
  probable cause, footnote 42). Pages in `public/films/titan/pages/`, phrase specs in `remotion/data/*_spec.json`.
- **Hearing clips play on picture** (USCG hearing video, unaltered) with the official transcript as captions, word by
  word on the clip's own Whisper word times (`remotion/data/clip_words.json`).
- **Real footage:** NOAA Titanic bow, the MBI's ROV video (tail cone, debris), DVIDS photos (hull 1 in 2019, recovered
  hull pieces), CC BY reference footage (North Atlantic, St. John's, composite manufacturing, NDT), each credited and
  labelled "reference" where a viewer could take it for the day. Built by `films/titan/render_media.sh`.
- **Sound:** `sound/cues.json` (123 picture cues), `sound/mix.json` (library beds per passage; music out under the
  axis turn, after the dive-88 line stops, and under the five names; effects from our synthesised bank).
- `timing.ts` and `scripts/choreo_index.py` now look sentences up by id (sentences replaced by clips are absent).

## Next
1. 720p review cut on GitHub (`remotion-render.yml`, comp `Titan`), then `/review-cut` and the independent reviews.
2. `media_manifest.csv` rows for every asset in `render_media.sh` (licences already checked in each `.info.json`).

## Earlier (16 NOV 2026, second session)
- **Narration v4 APPROVED by the owner (16 NOV 2026)** (`script/narration.md`, `script/vo.txt`, 3,567 words), after an
  independent fact-check v2, fairness pass v2 (both max effort, fresh contexts), an independent audience review (seven
  viewers; "reads as an investigation, not an opinion piece"), and Canada's TSB report M23A0169 read in full. Claims
  C01–C129, gate passes. One referent fix after approval (block 3: "The Coast Guard board also wrote this").
- **Audio (owner-generated, Eleven v4, Marcus):** blocks b01–b03 + re-takes r01–r03, all on Drive `titan/vo/`. Gemini
  listening review saved and checked by measurement (`review/gemini_audio_review_check.md`: its timeline was wrong,
  26:59 vs 21:59). Every scripted word confirmed spoken (`vo/review/`). Re-takes spliced at their pauses with room
  sound (`assets/vo/takes/`, Drive `*_spliced.mp3`).
- **Timeline:** `script/holds.json` (17 holds) → `vo/timing.json`: **film 23:36**, acts I 0:00 · II 1:58 · III 5:41 ·
  IV 17:49 · V 19:49; 3,640 words measured (`vo/word_align.md`: 202 low-score words, mostly numbers). Full track:
  Drive `titan/vo/titan_film_vo_v1.mp3`.
- **Owner decisions:** CG-140 (implosion recording) and CG-141 (chartroom) **not used**. "crewed" → "that carry people".
- **Footage:** DVIDS batch reviewed (`scenes/footage_review.md`): the MBI's ROV seabed video (tail cone) carries the
  discovery and Act IV. Official USCG hearing-day videos found (Brooks 23 SEP `Xw0rnBv-Pa8`, Kramer/NTSB 25 SEP
  `YupblW5tgiM`, 17 SEP `B9tqlpARlqQ`, 20 SEP `hOaatO7CBOw`). CC shortlist of 20 clips (`scenes/owner_fetch.txt`).

## Owner decision (16 NOV 2026): hearing clips, real voice replaces
Brooks's own words play from the USCG hearing video (captioned from the official transcript CG 112, credited
`U.S. COAST GUARD · MARINE BOARD HEARING · 23 SEP 2024`); Marcus's sentence that reads the same quote is cut at its
pauses, his lead-ins stay. Same for the NTSB materials witness ("perhaps always plotted as a function of time", 25 SEP).
Quote times found in the auto-captions (`scripts/vtt_words.py`); list `scenes/hearing_fetch.txt`. The answer to the
decision question (6:49:08-6:49:12) is a caption gap: confirm "Definitely Stockton" by ear before use.

## Done this session
- **Hearing clips in the timeline.** Nine ranges fetched (Drive `titan/footage/h_*.mp4`). Seven trimmed by Whisper
  word times at the quietest point of each gap, each trim re-transcribed (exact words, no stray syllable), joins
  re-transcribed in place. "Definitely Stockton" confirmed by ear (Whisper: "Uh, definitely Stockton."). They replace
  nine narrated sentences (`script/holds.json` `clips`; list in `script/narration.md`). Captions: CG 112 verbatim,
  pages from the PDF (printed = PDF − 1). Lower thirds and credits in each clip entry. New claim C130 (Kramer, NTSB);
  gate passes (130).
- **Timeline: film 23:05** (1,385.3 s; the old "23:36" was a display bug: it was 22:36). Acts I 0:00 · II 1:57.8 ·
  III 5:41.1 · IV 18:18.1 · V 20:18.0. Words measured again (3,530; 201 low-score, all numbers as before).
- Clip loudness −31 to −33 LUFS against Marcus −24.9: the mix's `clips` entries set each clip's `lufs` (§12).
- Unused but fetched: `h_brooks_oath` (Brooks standing to be sworn: silent picture under ¶ "Phil Brooks was the
  director of engineering"), `h_brooks_shift` (Marcus keeps that line).
- **The NTSB hearing slide** "Dive 80 Depth-based Plot of Strain — Linear Relationship" is on screen in `h_kramer_time`
  (NTSB, public domain): a candidate exhibit for the re-plot's first state.
- CC clips: all 20 now on Drive as merged MP4s. `termux_fetch_to_drive.sh` now repairs a broken ffmpeg.
- PLAYBOOK §11.1 no longer names another channel or repo (channel separation). Older git history still does.

## Waiting on the owner
Nothing for the clips. The next owner gate is the 720p review cut.

## Next session
1. Session setup: `scripts/gdrive_pull.sh titan/vo films/titan/assets/vo/drive`, copy `*_spliced.mp3` to
   `assets/vo/takes/bNN.mp3`, pull `titan/footage` to `assets/titan/footage`, then `vo_timing.py` → `film_timing.py`
   → `word_align.py` (rebuilds `assets/clips/` too).
2. Hero builds: the re-plot (digitise NTSB Materials 24-012 figs. 28–31, five dives), the hull wall (Three.js,
   realistic PBR, ILLUSTRATION), the gauge, the ledger (dives 75–88, `13 IN ALL · 2021–22`).
3. Screenplay renumbered to v4 paragraphs; choreography tables per scene (`/choreograph`); renders on GitHub.
- **Session setup:** speech tools are pip-installed per session (torch/torchaudio 2.8.0 CPU, faster-whisper,
  librosa, pyloudnorm, matplotlib); records from Drive `titan/records/` (+ `records/tsb/`) with `scripts/gdrive_pull.sh`.
