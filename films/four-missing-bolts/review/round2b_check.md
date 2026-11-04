# Round-2b review cut, checked (2026-11-03)

Cut: Drive `renders/four-missing-bolts_review_round2b_720p.mp4` (720p60, 16:15.1). Read against
`outside_visual_r1_check.md`, PLAYBOOK §6.4, §6.6, §6.7, §10.3 and §14.2. Method: the whole cut decoded; contact
sheets at one frame every 2 s with the words heard (31 sheets, every one read); full-resolution frames at the doubtful
moments; the film code linted (`scripts/text_floor.py`).

## Measured
| Check | Result |
|---|---|
| Still holds ≥ 3 s (`scripts/stillness_audit.py`: 4 fps, 320 px, < 0.4% of pixels moving > 6 levels) | **0** (pass) |
| Flash frames (64×36 luma under 45% of both neighbours) | **0** (pass) |
| Near-black frames | **0** (pass) |
| Loudness | **−14.0 LUFS, −1.3 dBTP** (pass) |
| Text below the §6.7 floor in the code (`scripts/text_floor.py`) | **≈150 lines** at 11–24 px; facts in `muted`; `#cbd5e1` hard-coded (not a token) |

## What round 2 fixed (verified in the cut)
- Motion: a slow drift and push on every scene; the CVR box, the envelope and the removal record no longer hold still.
- The fastener stack builds part by part on its words (2:39–2:42).
- The Spirit 10-K highlight runs on "nearly two thirds" (4:27.5), not 1.7 s early.
- Experience values inside the bars (10:04); larger FDR note; brighter Act IV panel lines; one resting tilt and light
  for every document.

## Still wrong (fix in round 3)
1. **11:52–12:00 · the g trace contradicts its readout for ~8 s.** The dip to 0.40 g is drawn on "below its own
   weight" (11:52) while the panel still reads **63 LB · AT 1 G** until 12:00. Round 2 moved the dip earlier, as the
   outside note asked, which made the contradiction longer. **Fix:** one driver: the readout follows the trace's head
   (63 lb × the load at the head, holding the lowest value as "LOWEST 25 LB"), so the number falls as the line dips.
2. **5:07–5:10 · removal-record rows light in the wrong order.** Row 1 (INSTALLATION DISTURBED) lights on "steps",
   row 2 on "restore". **Fix:** row 2 on "steps to restore", row 1 on "disturbed", rows 3–4 on "quality sign-offs".
3. **2:40–2:48 · the cotter pin and its label are still cut off** at the fastener mount's right edge. **Fix:** widen
   the mount, keep every part and label inside it.
4. **0:59–1:04 · a hard on/off amber dot blinks at 1 Hz** beside "RECORDING CONTINUED". Amber means a threshold or
   drift (§6.1), and a blink is not interpolated motion. **Fix:** remove it; the scene drift already moves the frame.
5. **3:42–3:44 · an empty desk** between the fitting photograph and the question (about 2 s of bare grid). **Fix:**
   start the question on the sentence's first words, and let the photograph fade out under it.
6. **4:26–4:32 · a stray word ("milling")** from the filing's previous section floats above the page top. **Fix:**
   trim the shot's top.
7. **7:14–7:28 · the honesty line on the redrawn photograph is about 19 px** ("THE PHOTOGRAPH IS NTSB AIR-25-04 FIG.
   18 …"). It is the one place where a drawing could pass for the photograph. **Fix:** 36 px, on its own card.
8. **14:34–14:38 · the arc labels are 15 px** (BOEING SELLS WICHITA, PART OF BOEING AGAIN), with grid lines under
   them; round 2 moved the right one 16 px, as the outside note asked, which changed nothing. **Fix:** ≥ 26 px on a
   scrim.
9. **Legibility across the film (§6.7):** source strips, exhibit tags, panel titles, captions, quote attributions,
   chart axes and the end card's sources line are 12–24 px, many in `muted`. **Fix:** the floor applied everywhere
   (26 px for every fact-carrying label, `sub`/`ink` for facts, tokens only), layouts widened where text grows.
10. **Filings still sit on pure white** (`RecordDoc` paints `#fff`): **Fix:** the paper token under a multiply, like
    the scans.
11. **9:18 · an empty chart frame** before its first bar. **Fix:** the first bar rises with the frame.
12. **Composition:** several cards sit in one corner of an empty desk (THE LIFE OF A PART 3:52, the FAA inspectors
    8:58–9:16, the search box 10:56, the text messages 7:00). The larger type fills them; the inspector block is
    re-laid instead of scaled.
13. **12:52–12:56 · the climax plug turns into a ghost** as it leaves (the faintest image at the film's peak,
    first raised in fresh-eyes r2 S3). **Fix:** keep the plug solid as it rises and swings out; fade only after it
    clears the frame.

## Not changed (checked, fine)
Act structure, the open loop (named at 1:19, paid at 7:14), every exhibit's source tag, the stamps, the counters'
landing on their words, the FAA release push, the 8-K pages, the end screen's length.
