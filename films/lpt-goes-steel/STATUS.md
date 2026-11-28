# Transformer steel (lpt-goes-steel): status and handoff (28 NOV 2026)

Read this first in a new session, then `CLAUDE.md`, `treatment.md` and the playbook parts it names.

## Done (owner gates in bold)
- Research: `research/landscape.md`; Gemini's research passes checked (`review/gemini_research_check.md`,
  `review/gemini_research_r2_check.md`). The two blocked pages are in Drive `lpt-goes-steel/records/` (reading copies).
- **Treatment v2 approved 27 NOV 2026, promise locked**; v3 after the max fact-check (`review/factcheck_v1.md`).
  **Title fixes for B and C accepted** (`brief.md`).
- Claims: `claims.csv` 99 rows (71 confirmed, 25 claim, 3 disputed); `claims_check.py` passes.
- Opening first, through the promise check: `script/opening.md`.
- Narration v2: `script/vo.txt`, `script/narration.md` (lean-in map, claim ids per paragraph). Max fairness pass
  (`review/fairness_v1.md`, 32 fixes) and three Gemini reviews applied; **owner's three fairness calls** (payoff line
  "ended without a tariff"; no red on the company's 920 mm; thumbnail B `12+ MM GAP`); **narration v2 approved for
  recording 28 NOV 2026**.
- Audio: the owner recorded both blocks (Marcus, Eleven v4, Natural): `assets/lpt-goes-steel/vo/lpt-goes-steel_vo_b01.mp3`
  (9:38) and `_b02.mp3` (3:51), also in Drive `lpt-goes-steel/vo/`. Gemini's audio audit: `review/gemini_audio-audit.md`
  (46 of 51 paragraphs ready; word map with paragraph start times).
- Hearing clips fetched and checked by ear: Drive `lpt-goes-steel/footage/clip01.mp4` (Rodrigues, use 29.4–36.2 s) and
  `clip02.mp4` (Paulling, use 17.2–33.6 s); licence note in `scenes/exhibits_leads.md`.

## Done 28 NOV 2026 (this session)
- **Audio approved by the owner**, with notes applied (`vo/splice_r02.py`): P49 −3.0 dB, its pre-pause 0.90 → 0.48 s; P04 +1.0 dB, P26 +1.2 dB
  (within ±1 dB of their neighbours; P23 already was). Finals `*_final_r02.wav/.mp3` in Drive `lpt-goes-steel/vo/`.
- Timing chain on the finals: film 14:27.6; holds in `script/holds.json`; clip01 (Rodrigues) at 0:27, clip02 (Paulling)
  at 10:38; open loop 6:48.
- **0:18 shot: carried on the 3D core** (owner's call).
- Gemini second opinion on the shot plan checked: `review/gemini_second-opinion_check.md`.
- Full build: `remotion/` (3D coil and cores in `coil3d.tsx`; parts; acts 1–5; beats; outro). Records in
  `assets/lpt-goes-steel/records/` (fetched by `scenes/fetch_records.py` and `scenes/print_web.cjs`), pages and highlight
  rectangles in `remotion/data/`. Gates: tsc ✓, text_floor 0 ✓, claims_check ✓, sync_audit 0 fails ✓ (405 scene cues
  plus 438 generated camera steps from `scenes/beats_gen.py`). Mix: `sound/mix.json`, −14.0 LUFS / −1.9 dBTP.
- Render media and the mix in Drive (`render-media/`, `mix/`). 720p run 49 on GitHub's runners (15), started 2:26 PM IST.

## Next (in order)
1. Pull the 720p cut, run `slide_audit.py` and `stillness_audit.py`, look at it, then Gemini `cut-audit` (§14.6).
2. Check Gemini's audit, fix, and re-render only the blocks that changed (`reuse_from`).
3. **The owner approves the cut**, then the 4K master, then the YouTube package.
4. Before release: re-check the core-tariff rate (C56) and the DOE award status (fresh-facts); re-check the CC0 licence
   of the laminations photo on Commons (the API was rate-limited on 28 NOV).

## Open owner decisions
- Next film after this one: North Hyde (Heathrow substation fire), owner decision 27 NOV 2026.

## Notes
- The Gmail connector is signed in to the owner's second account; wake-up emails go to both addresses.
- `pip install` needed this session for `scripts/vo_review.py`: faster-whisper 1.1.1, librosa 0.10.2.post1,
  matplotlib 3.9.2. faster-whisper's own file decoder fails with this container's PyAV (`metadata_errors`); decode with
  ffmpeg to a numpy array (vo_review.py already does).
- `youtube/title_variants.txt` holds rejected forms; only the three locked pairs in `brief.md` may be used.
