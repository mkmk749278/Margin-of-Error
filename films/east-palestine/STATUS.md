# East Palestine: status and handoff (2026-11-06)

Read this first in a new session, then `CLAUDE.md`, `treatment.md` and the playbook parts it names.

## Done
- **Owner gates passed:** treatment v2, narration v1, audio (all 2026-11-05). Claims 182 rows, gate passes.
- **Timing:** `vo/timing.json`, every word measured. Film **20:27.7** (10 holds, 107.2 s; tail 14 s); open loop 298 s.
  The two hearing-clip holds were re-cut on 2026-11-06 (below); the voice is unchanged.
- **Exhibits (step 7, 2026-11-06):** all record files fetched (`assets/src/`, also Drive `east-palestine/src/`) and
  logged in `media_manifest.csv` (52 rows). Render media in Drive `east-palestine/render-media/` →
  `public/films/east-palestine/`:
  - `pages/`: 51 pages at 220 dpi from RIR-24-05 (27), the hearing transcript (9), NS rule 147, the event-recorder
    factual report, CRS R47911, the NTSB recommendation status, the two court orders. Highlight boxes on the located
    words in `remotion/data/*_phrases.json`, keyed by claim id (RIR: 78 phrases).
  - `docs/`: 17 crops shot from the filings' and releases' own HTML (8-K, 10-Ks, proxy, 10-Q, NS 25 JUN 2024, NTSB
    07 MAR 2023), highlights in their `docs.json` (`assets/docs/docs.json`; copy into `remotion/data/` when building).
  - `fig/`: 14 NTSB report figures cleared for screen (third-party figures are references only).
  - `excerpts/`: hearing CLIP 1 (50.75 s), CLIP 2 (37.35 s, **picture incomplete**, below), plume (5.5 s cut, 4 s used).
  - Data: `remotion/data/er_ns4178.json` (event recorder 20:10–20:56 at 1 s; 19.42 mi Salem → East Palestine, OUR
    CALCULATION), `table3_ocpx80370.json` (the one plot), `clip_captions.json` (transcript captions, timed).
  - `scenes/design-reference.md`: every drawn element → record → what we copy → label.
- **Hearing clips re-cut** (`scenes/clips/clip_cuts.md`): the approved CLIP 1 span cut into its first word and ended
  mid-sentence; now 03.40–54.15 of clip01 on measured silences, ending on "a lot of false stops" (his detection
  sentence kept, per the fairness pass). CLIP 2 now ends after "hot bearings" (the earliest end C29 allows).

## Blocked
- **CLIP 2's picture:** clip01's video track ends at 138.9 s (audio to 155 s), so "Correct." has no picture. The owner
  re-fetches it with one Termux line (`scenes/owner_fetch.txt`, clip04). Then `scripts/gdrive_pull.sh
  east-palestine/footage films/east-palestine/assets/footage`, probe both streams, cut 01:20:32.00–01:21:09.35 (find
  the same silences: the alignment in `scenes/clips/clip01_words.json` gives the words), replace
  `excerpts/hearing_clip2.mp4` in render-media.
- **Docket item 70** returns 0 bytes; RIR Table 7 (pdf 58) carries its figures and is used instead.

## Next
- Step 8, choreography (`/choreograph`): scenes on `vo/timing.json`, every word cued, `sync_audit.py`.
