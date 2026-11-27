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

## Next (in order)
1. Audio check done (`review/gemini_audio-audit_check.md`): the owner records the re-take block in that file (4
   sentences + 1 optional) as `lpt-goes-steel_vo_r01.mp3`; we splice at measured pauses, re-run `vo_review.py`, and
   the owner **approves the audio**. Takes measured: b01 152 wpm, 98.2%; b02 161 wpm, 99.4%; b02 +1.2 dB in the mix.
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
