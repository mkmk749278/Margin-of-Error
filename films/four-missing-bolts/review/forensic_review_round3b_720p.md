# Forensic review: `four-missing-bolts_review_round3b_720p.mp4` (2026-11-04)

Cut: Drive `four-missing-bolts/renders/four-missing-bolts_review_round3b_720p.mp4`, 1280×720, 60 fps, 54,316 frames,
905.27 s (15:05.27) = `vo/timing.json` `durationInFrames` 54316. Method: PLAYBOOK §14.4 (protocol), read with
`claims.csv` and `vo/timing.json`. Note on independence: this session did not build the film, but it is the session
that applies the fixes, so it is not a fully separate reviewer; the owner asked for review, fixes and the 4K master in
one pass.

## Verdict
- The record holds: 92/92 claims confirmed, every on-screen number checked against its row; no fact found wrong.
- The cut is clean technically: no flash, black or frozen frames, no timestamp gaps, −14.1 LUFS / −1.3 dBTP.
- Six picture and wording faults, all fixed in code below; none needs a voice change. **Readiness 8.5/10 → 9/10 after fixes.**

## Measurements (on the file)
| Check | Result |
|---|---|
| Frame timing | 54,316 packets, every step 1/60 s (16.666–16.667 ms); 0 gaps |
| Black frames (`blackdetect` d 0.05 s, pix 0.06) | 0 |
| Frozen (`freezedetect` n 0.001, d 2.5 s) | 0 |
| Still holds (`scripts/stillness_audit.py`, 3 s) | 0 |
| Loudness (`ebur128`) | −14.1 LUFS integrated, LRA 3.0 LU, true peak −1.3 dBFS |
| Sync (`scripts/sync_audit.py`) | 177/177 sentences pass, 887 word cues |
| Text floor (`scripts/text_floor.py`) | 0 lines below the floor |
| Claims gate (`scripts/claims_check.py`) | 92 confirmed, gate passes |

Contact sheets: one frame every 1.5 s with the words heard (604 frames, 38 sheets), every sheet read; doubtful
moments re-checked at exact frames. (The sheet sampler sits about 0.4 s early; exact times below come from exact
frames and `timing.json`.)

## 1. Critical red flags
None. Nothing in the record, the labels or the law blocks launch.

## 2. Record and mechanism corrections
1. **[2:54.0–2:55.2 / bolt test] the readout says `3 OF 4` while the narration says "the two upper bolts, on their
   own"** (sentence 40, "two" at 174.005 s; the third bolt came out only on "own", 175.59 s). → A readout that
   contradicts the record line (C14: "with only the two upper guide track bolts") is the one thing a pilot or A&P
   viewer will screenshot. → **Fixed:** the lower bolt leaves as the uppers return, on "two"; the number reads the
   state the narration names (2 from "two"); the sub-line reads `TESTING: TWO UPPER BOLTS` until "kept"
   (`scenes/act2.tsx`). Verified at frames 10440–10500: `2 OF 4`.
2. **[9:07 / production chart] `· HIRING FAST`** on screen. The record (C44, NTSB p. 56): "increased hiring to
   compensate for the employees lost". "Fast" is our gloss. → **Fixed on screen:** `· INCREASED HIRING`. The spoken
   "it hired fast" stays (the voice is locked; the ramp from under 10 to 31–38 a month in the same records supports
   the reading), listed here for the owner.
3. **[14:24–14:30 / Graham quote] the quote card closes after "these types of errors"**, but the sentence in the
   record continues ("…and would have successfully prevented a similar accident", C67, p. 127). → A cut quote shown
   as whole is a fairness fault. → **Fixed:** the card ends `these types of errors …”`. The narration's "at all" is a
   close paraphrase of "skeptical … were equipped to catch"; listed for the owner, not changed.

## 3. Audio, pronunciation and captions
- Loudness on target. No clipping, no repeated phrase found in the narration text.
- **[7:42–7:46 and 12:07–12:12] the on-screen line spelled the acronym as the voice script does: `N T S B`.** The
  hyphen-spaced form is for the narrator only. → **Fixed:** `KeyLine` parts can now join (`join`), so the letters
  still light one by one on their syllables but read `NTSB` (`beats.tsx`, `act3.tsx`, `act5.tsx`).
- To listen to (no fault found in the text): "seven thirty-seven nine" at 0:08 and 1:37; "Max" at 8:48.

## 4. Picture: smoothness, motion, sync, legibility, labels
4. **[8:36–8:42 / production chart] an empty chart card for about 5 s** before the first bar rises on "built".
   → **Fixed:** each slot and its label (`BEFORE 2018`, `PANDEMIC LOW`, `BEFORE THE ACCIDENT`) arrive on their own
   words, a baseline tick drawing under each, so the frame changes on "eighteen" before the bar rises on "built"
   (no bar height is shown before its number is said). Verified at frames 31140 and 31260.
5. **[5:36–5:52 / the door team] small cards in the upper left of an empty desk, and the heading line sat on a grid
   line** (y ≈ 232 at 1080). → **Fixed:** tiles 600×330, key figure 34 → 46 px, labels 26 → 30 px, heading moved to
   y 250 and the source line to y 726, both clear of grid lines.
6. **[13:07 / Boeing media briefing] `· THE COMPANY KNEW THE MOVE CREW HAD CLOSED THE PLUG`** read as our statement
   on a line where the NTSB says no one was identified. → **Fixed:** `· SAID THE COMPANY KNEW …` (attribution on
   screen, as in the narration "told a media briefing").
- Checked and fine: every exhibit carries its source tag; reconstructions and illustrations labelled; the redrawn
  photograph labelled RECONSTRUCTION with its figure number; FAA "5" lands on "five" (499.91 s, frame-checked);
  the 154-flight counter lands on "fifty-four"; one desk pose for every document; legibility spot-measured at 0:14
  and 5:45 (smallest fact text ≈ 26 px at 1080).

## 5. Fairness and law
- Probable cause quoted from the record; FAA contributing cause given equal weight; Spirit's account given
  (5:07); Boeing's response given (at least 20 corrective actions, 14:31); buybacks explicitly "not as a cause" with
  the report's silence shown as our own search. No individual named beyond public board members and an
  administrator. No pending-case claims. Clean for both halves of a split audience.

## 6. Packaging and launch
- Titles: see `youtube/` (package written after this review).
- **Upload Unlisted at least 3 hours before public** (4K processing, copyright checks, captions indexed); public in
  the default window, Thursday 14:00–16:00 US Eastern (19:00–21:00 UK), PLAYBOOK §13.6.

## 7. The strongest ideas (not applied; for the next film or a later pass)
- **[14:01–14:22] "The fix is for one plug"** is text cards only. A stronger close: the one plug on the left, and a
  field of identical faint "disturbed installation" outlines filling the frame to the right as "every line" is said.
- **[13:30–13:35] the 2005 → 2025 arc** sits in the lower half with an empty top: the Wichita 10-K paragraph and the
  8-K line could ride the arc's two ends.

## Owner's decisions pending
- Two spoken paraphrases kept as recorded: "it hired fast" (record: "increased hiring") and "at all" (record:
  "skeptical … were equipped to catch"). Each would be one regenerated sentence if the owner wants them changed.
