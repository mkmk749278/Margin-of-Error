# East Palestine: status and handoff (2026-11-07)

Read this first in a new session, then `CLAUDE.md`, `treatment.md` and the playbook parts it names.

## Done
- **Owner gates passed:** treatment v2, narration v1, audio (all 2026-11-05). Claims 182 rows, gate passes.
- **Timing:** `vo/timing.json`, every word measured. Film **20:27.7** (10 holds, 107.2 s; tail 14 s); open loop 298 s.
  The two hearing-clip holds were re-cut on 2026-11-06 (below); the voice is unchanged.
- **Exhibits (step 7, 2026-11-06):** all record files fetched (`assets/src/`, also Drive `east-palestine/src/`) and
  logged in `media_manifest.csv` (53 rows). Render media in Drive `east-palestine/render-media/` →
  `public/films/east-palestine/`:
  - `pages/`: 51 pages at 220 dpi from RIR-24-05 (27), the hearing transcript (9), NS rule 147, the event-recorder
    factual report, CRS R47911, the NTSB recommendation status, the two court orders. Highlight boxes on the located
    words in `remotion/data/*_phrases.json`, keyed by claim id (RIR: 78 phrases).
  - `docs/`: 17 crops shot from the filings' and releases' own HTML (8-K, 10-Ks, proxy, 10-Q, NS 25 JUN 2024, NTSB
    07 MAR 2023), highlights in their `docs.json` (`assets/docs/docs.json`; copy into `remotion/data/` when building).
  - `fig/`: 14 NTSB report figures cleared for screen (third-party figures are references only).
  - `excerpts/`: hearing CLIP 1 (50.75 s), CLIP 2 (37.35 s, from clip04, full picture), plume (5.5 s cut, 4 s used).
  - Data: `remotion/data/er_ns4178.json` (event recorder 20:10–20:56 at 1 s; 19.42 mi Salem → East Palestine, OUR
    CALCULATION), `table3_ocpx80370.json` (the one plot), `clip_captions.json` (transcript captions, timed).
  - `scenes/design-reference.md`: every drawn element → record → what we copy → label.
- **Hearing clips re-cut** (`scenes/clips/clip_cuts.md`): the approved CLIP 1 span cut into its first word and ended
  mid-sentence; now 03.40–54.15 of clip01 on measured silences, ending on "a lot of false stops" (his detection
  sentence kept, per the fairness pass). CLIP 2 now ends after "hot bearings" (the earliest end C29 allows).

## Blocked
- **Docket item 70** returns 0 bytes; RIR Table 7 (pdf 58) carries its figures and is used instead.

## Step 8, choreography (in progress)
- **Act I done (2026-11-06):** `remotion/scenes/act1.tsx` (11 scenes, sentences 0–31), handoff `scenes/act1.md`, table
  `scenes/choreography/act1.md` (`python3 scenes/choreography/act1_table.py`). Act I: 32/32 sentences pass the sync audit.
  Composition `EastPalestine` (src/Root.tsx); stills: `node scripts/stills.mjs EastPalestine <out> <frames> --scale 0.5`.
- **Act II done (2026-11-06):** `remotion/scenes/act2.tsx` (9 scenes, s32–66), handoff `scenes/act2.md`, index
  `scenes/choreography/act2.md`. Acts I–II: 67/67 sentences pass. Film.tsx now dissolves every scene into the next (no empty frame).
- **Act III done (2026-11-06):** `remotion/scenes/act3.tsx` (12 scenes, s67–111, both hearing clips), handoff `scenes/act3.md`.
  Acts I–III: 112/112 sentences pass. **Mix note:** the clips play muted in Remotion; the mix lays their sound at F22330
  and F25883 (act3.tsx C1/C2; an earlier note said 22329/25882, one frame early).
- **Act IV done (2026-11-06):** `remotion/scenes/act4.tsx` (10 scenes, s112–175, both signature beats), handoff `scenes/act4.md`.
  Acts I–IV: 176/176 sentences pass.
- **Act V done (2026-11-06):** `remotion/scenes/act5.tsx` (report, who paid, courts, could it happen again, verdict 5,
  sign-off on the dark route line, outro). **Whole film: 198/198 sentences pass the sync audit.**
- **Act V stills reviewed and fixed (2026-11-06):** handoff `scenes/act5.md`. Long right-anchored chips capped at
  1500 px (they ran off the left edge), the cover's date pill made a solid JUN 2024 chip, the 2029 pill given a void
  background, no "−$0M" before the 2025 roll. Gates: tsc, text floor 0, sync 198/198, claims pass.

## Step 10, sound (2026-11-06)
- **Music:** Act I fx08, Act II fx02, Act III fx07 + fx03, Act IV fx04 + fx09, Act V **fx05_verdict** (new: Google Flow
  Music, checked clean of voices in both halves in the Gemini app; in the library with its sidecar). fx01 (2 takes)
  and fx06 (1 take) failed for voices; kept in Drive `Music-Library/forensic/flow/rejected/`.
- **Cues:** 306 (`scripts/cues_auto.py` → `remotion/cues_auto.ts`, merged under the hand cues; four hand cues added in
  s108–110 and s152–154); `sound/cues.json` exported.
- **Mix:** `sound/mix.json` (10 slots, continuous; both hearing clips at their own sound, music −14 dB under them),
  `scripts/mix_film.py`: master −14.00 LUFS, −1.40 dBTP, voice peaks −2.3 dBTP, no digital silence; clips 1.3 dB
  under the narration. In Drive `east-palestine/mix/mix.wav`. `film_vo.wav` rebuilt from Drive
  `vo/east-palestine_narration_v1_full.mp3` + the holds in `vo/timing.json` (speech onsets 18–100 ms after each
  measured start, no drift).

## Re-voice with Marcus (2026-11-06)
- **Voice:** "Marcus - Baritone(Stoic)", Eleven v4, stability 0.5 (owner). 15,997 characters. Film now **18:29.2**
  (narration 988 s; holds unchanged, 107.2 s; open loop 261.7 s). Takes: Drive `vo/marcus/`; full narration
  `vo/east-palestine_narration_marcus_full.mp3`; voice "1" kept in Drive (`vo/east-palestine_vo_bNN.mp3`).
- **Checks:** `vo_review.py --model medium.en` 99.4–100% words as written in all 7 blocks, every flag checked on its own
  cut (number formatting only); Gemini listening check, 14 parts (`review/PROMPT_batch_A/B.txt`): General American,
  words and numbers OK, letters clear, rising pitch only on questions, no defects, 9–9.5/10. Word alignment re-run.
- **Picture:** four cues added (s69, s70, s80, s109), sync 198/198; stills swept every 8 s; fixed: the Act II detector
  scene (chips over the header, two bottom cards whose headers wrapped), the DISMISSED and "Could it happen again?"
  cards (now on the void, no see-through), the 2023 cost row's "$0.0B". Hearing clips now at F19820 and F23330.
- **Mix:** rebuilt on the new timing (slots mapped sentence by sentence): −14.00 LUFS, −1.40 dBTP, voice −2.4 dBTP.
  Drive `mix/mix.wav` (the voice-1 mix kept as `mix_voice1.wav`).
- **Owner gate passed (2026-11-06):** the owner approved the Marcus audio ("audio approved").

## Real footage (owner, 2026-11-06: "where is the connection?")
- Federal sources only (owner). The cold open now starts on the NTSB's drone over the burning tank cars (05 FEB 2023,
  labelled), under the date and place; s24 runs on the NTSB's overhead drone pass of the pileup, s25 on the NTSB's
  aerial photo of the wreck beside the village; the hold after s160 shows the EPA aircraft's photo of the cars still
  smoking the next afternoon (07 FEB). The county's drone clip (rights not cleared) is withdrawn. Narration unchanged.
  Sources: `media_manifest.csv`; Drive `east-palestine/federal/`.

## Next
- **720p review cut r2 passes** (`review/picture_gate_r1.md`; Drive `renders/east-palestine_review_r2_720p.mp4`).
  The owner approves the cut → 4K master → YouTube package (with the voice note).

## 4K master and YouTube package (2026-11-07)
- **Owner approved the r3 cut** and asked for the 4K master. Rendered on GitHub (run 42348084191, 19 runners, scale 2):
  Drive `renders/east-palestine_master_4k.mp4` + `east-palestine_master_1080p.mp4`. Checked frame by frame against r3:
  `review/master_4k_check.md` (passes).
- **YouTube package:** `youtube/package.md` (three title-and-thumbnail pairs from 32 titles, description with
  chapters and sources, tags, pinned comment, Studio checklist), thumbnails A–C on the NTSB drone frame
  (`make_thumbnails.py`), English SRT with the hearing clips captioned (`make_srt.py`, 301 cues).
- **Next:** the owner uploads (Unlisted ≥ 3 h, then public in the Thursday window); the 24 h / 7 d / 28 d reads.
