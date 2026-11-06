# East Palestine: status and handoff (2026-11-06)

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

## Next
- Step 9: the 720p review cut on GitHub (`/parallel-render`, 6 runners), then `/review-cut`.
