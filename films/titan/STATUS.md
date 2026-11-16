# Titan: status (16 NOV 2026, end of session)

## Done
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

## Waiting on the owner (Termux)
1. Hearing captions: `curl -sL https://raw.githubusercontent.com/mkmk749278/Margin-of-Error/main/scripts/termux_captions_to_drive.sh | bash -s -- titan Xw0rnBv-Pa8 YupblW5tgiM B9tqlpARlqQ hOaatO7CBOw`
2. The 20 clips: `curl -sL https://raw.githubusercontent.com/mkmk749278/Margin-of-Error/main/scripts/termux_fetch_to_drive.sh | bash -s -- titan --list films/titan/scenes/owner_fetch.txt`

## Next session
1. Pull Drive `titan/captions/` and `titan/footage/`; find the quote timecodes in the hearing captions (Brooks:
   "Definitely Stockton", the flashlight, "let's dive again"; Kramer: "typically and perhaps always plotted as a
   function of time"); ask for exact ranges; add each clip as a hold in `holds.json` and re-run `film_timing.py` →
   `word_align.py` (no narration over a real clip).
2. Hero builds: the re-plot (digitise NTSB Materials 24-012 figs. 28–31, five dives), the hull wall (Three.js,
   realistic PBR, ILLUSTRATION), the gauge, the ledger (dives 75–88, `13 IN ALL · 2021–22`).
3. Screenplay renumbered to v4 paragraphs; choreography tables per scene (`/choreograph`); renders on GitHub.
- **Session setup:** speech tools are pip-installed per session (torch/torchaudio 2.8.0 CPU, faster-whisper,
  librosa, pyloudnorm, matplotlib); records from Drive `titan/records/` (+ `records/tsb/`) with `scripts/gdrive_pull.sh`.
