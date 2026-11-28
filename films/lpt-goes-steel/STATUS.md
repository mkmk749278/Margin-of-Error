# Transformer steel (lpt-goes-steel): status and handoff (28 NOV 2026, r03)

Read this first in a new session, then `CLAUDE.md`, `treatment.md` and the playbook parts it names.

## NOW (r03, 28 NOV 2026, ~11:30 PM IST)
- **r03 built and merged** (PR #140): real footage per the owner's Drive spec `lpt-goes-steel/handoff/r03_cinematic_polish_spec.md`
  and `footage/broll/us_specific_footage_sources.md`. Components: `remotion/footage.tsx` (`Footage`, `Backdrop`,
  `TitleCard`, `BROLL` registry with every credit), `parts.tsx` `Excerpt` (cropped record lines over moving footage);
  every `Doc` now sits over a blurred clip by act (`backdropFor`). Gates: tsc clean, `sync_audit` 0 fails
  (`review/sync_audit_r03.md`), text floor 0, claims gate passes. Stills at every changed beat looked at.
- **Render in flight:** GitHub run 46173008664 (remotion-render.yml, 720p, 15 runners, ref `ccr-2737a15b-mxmdq9`, the
  same commit as main after merge). Output: Drive `lpt-goes-steel/renders/lpt-goes-steel_cut_r03_720p.mp4`.
  **Next session:** check the run; if it failed, read the logs and re-run (or `blocks` + `reuse_from`). Then pull the cut,
  run `scripts/stillness_audit.py` and `scripts/slide_audit.py`, look at frames (0:00–0:30 above all), write
  `review/picture_gate_r03.md`, send the owner the Drive link (times in IST), then the Gemini `cut-audit` handoff.
  No 4K until the owner approves the cut.
- **Media:** all r03 clips are muted 1080p30 in Drive `lpt-goes-steel/render-media/broll/` (the runners pull them into
  `public/films/lpt-goes-steel/broll/`); originals with `.info.json` in Drive `lpt-goes-steel/footage/hero_*`.
  Licences in `media_manifest.csv` (13 rows, r03); description credits in `youtube/description_credits_r03.md`;
  end-card credits in `scenes/outro.tsx` `CREDITS`. Owner (28 NOV): Gemini's Drive clips are licence-checked.
- **Deviations from the spec, told to the owner:** Schnabel clips sit where the narration speaks of rail (1:42, 12:16),
  not 8:10–9:30; WECX 800 carries a nuclear steam generator and is labelled so; the width beat (2:52) stays 3D;
  Slovenian industrial clips are labelled ILLUSTRATION; the teaching-model transformer is cropped above its badge;
  hero_04 used from 20 s (its burned-in "Quelle" line is at 12–16 s); hero_03 from 11 s (burned-in text before).
- Mix unchanged (narration timing unchanged): Drive `lpt-goes-steel/mix/mix.wav`. New visual events have no new SFX
  cues yet: a candidate fix for r04 if the cut review asks for it.

## Earlier record (r02 and before)

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

## Next (in order)
1. Re-take spliced (`review/gemini_audio-audit_check.md`, `vo/splice_r01.py`): finals
   `assets/lpt-goes-steel/vo/lpt-goes-steel_vo_b01_final.wav` (577.97 s) and `_b02_final.wav` (231.97 s), also in
   Drive `lpt-goes-steel/vo/` with MP3 copies. **Waiting: the owner approves the audio.**
2. Timing chain on the final takes: `vo_timing.py` → `word_align.py` (§10.4); splice the two clips at 0:24 and after
   "described it" (Act IV); the calendar run hold (signature 2).
3. Exhibits (step 7): the open item is the 0:18 shot (a US large power transformer in a substation; options in
   `scenes/exhibits_leads.md`, owner's call); fetch the transport clip `1AiQzYdMUGk` and the slitting-line clips;
   document pages from the 232 report, USTR, DOE 2014/2024, the Cliffs datasheets; `media_manifest.csv`.
4. Hero builds (coil, core, surface, calendar), then word-level choreography, Modal renders (not built yet: stills and
   short tests only until it is), music, the 720p cut, Gemini cut audit, owner.

## Open owner decisions
- The 0:18 substation shot (licence a photo, DOE Flickr by hand, or carry it on the 3D core).
- Next film after this one: North Hyde (Heathrow substation fire), owner decision 27 NOV 2026.

## Notes
- The Gmail connector is signed in to the owner's second account; wake-up emails go to both addresses.
- `pip install` needed this session for `scripts/vo_review.py`: faster-whisper 1.1.1, librosa 0.10.2.post1,
  matplotlib 3.9.2. faster-whisper's own file decoder fails with this container's PyAV (`metadata_errors`); decode with
  ffmpeg to a numpy array (vo_review.py already does).
- `youtube/title_variants.txt` holds rejected forms; only the three locked pairs in `brief.md` may be used.
