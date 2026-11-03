# Outside visual review of the 720p review cut: every point checked (2026-11-03)

The owner sent an outside reviewer's visual notes on the 720p review cut (a 3-page PDF: typos, static holds, sync,
phone legibility, document lighting). Audio is locked. **Nothing here is applied yet:** per STATUS, the owner's notes
are collected and fixed in one round. This file checks each point against the film's code, `vo/timing.json` and
720p stills rendered in the session from the same composition, so the round fixes what is really wrong and nothing
that isn't.

**Verdicts:** CONFIRMED (true as stated) · PARTLY (the problem is real, the cause or the fix differs) · NOT CONFIRMED
(the code and the rendered frame say otherwise).

**How the outside review was made, as far as we can tell:** it reads the picture well, but its numbers are not ours.
Its CSS values (`perspective: 1200px`, `rotateY(-2deg)`, `#475569`) are not in the code, its "typo" is a misread of
small text, and several of its word times are a second or two off the recorded words. So every time and value below
comes from our own timing file and code, not from the PDF.

| # | Time · scene | Outside note | Verdict | What the code and the frame show | The fix for the round |
|---|---|---|---|---|---|
| 1 | 4:42 · Act III, fuselage arrival | Typo "EDG FRAME" | **NOT CONFIRMED (a legibility finding)** | `act3.tsx:154` and the rendered frame at 4:45 read **EDGE FRAME, JUST FORWARD OF THE PLUG**. The line is 16 px at 1080 (about 11 px in the 720p cut), grey, widely letter-spaced: small enough to misread, which is the real finding. | No text change. Raise the line to ≥ 26 px (§6.7). |
| 2 | 14:36 · Act V, the 20-year arc | "PART OF BOEING AGAIN" within 6 px of the grid line at the right edge; shift 16 px left | **PARTLY** | The label ends at x 1500 of 1920, 420 px from the edge. But in the 720p still a major desk-grid line runs straight through both arc labels (2005 and 2025), and both labels are 15 px. | Put the two labels on a card (or a void scrim) so no grid line crosses text; raise to ≥ 26 px. No 16 px shift. |
| 3 | 0:58–1:04 · Act I, CVR box | 6 s dead hold | **CONFIRMED** | The type-on ends about 0:57.5; the second line fades in at 0:59.3; then nothing a viewer can see moves until the report page at 1:04.5 (only grain and the 0.05-opacity grid). | A slow push in across the hold (about 1.00 → 1.04). **Not** the suggested 1 Hz flashing amber dot: amber means threshold or drift (§6.1), and a blinker reads as an alert. |
| 4 | 1:16–1:21 · Act I, evidence envelope | 5 s dead hold | **CONFIRMED** | The 108 DAYS counter lands on "afternoon" (1:15.4); the envelope then sits still until the cut at 1:22.5: about 7 s. | A slow push toward the envelope's label, ending as "six minutes" is said. **Not** the suggested `[ T+06:00 TARGET ]` corner readout: a film-time reference breaks the desk (fresh-eyes r2, B3). |
| 5 | 5:01–5:10 · Act III, removal record | 9 s static card; flash rows on the words | **CONFIRMED** | `RemovalForm` brings all four rows in within 1 s of 5:02.5; the caption comes at 5:09.7. Row labels are 14 px. | Build the card on its words: row 1 on "removal record" (5:04.6), row 2 on "steps to restore" (5:07.4), rows 3–4 on "quality sign-offs" (5:10.0); each row lights in Technical Cyan as it is named. Row labels ≥ 26 px. |
| 6 | 2:39–2:46 · Act II, fastener stack | All five parts at once; stagger them | **CONFIRMED (times corrected)** | `BoltStack` spreads all five parts together from 2:39.2 over 1 s. The words land earlier than the PDF says: "washers" 2:40.0, "castle" 2:40.9, "cotter" 2:41.9 (timing.json). **Also found:** at 2:41 the COTTER PIN label and the pin itself are cut off by the mount's right edge, and the part labels are 13 px. | Each part enters on its own word (`wf(35, …)`); widen the mount or tighten the spacing so nothing is clipped; labels ≥ 26 px. |
| 7 | 4:11–4:30 · Act III, Spirit 10-K | Highlight late; start it at 4:26.2 | **NOT CONFIRMED** | The highlight starts on "two" (4:27.9) and finishes 0.47 s later, on "thirds". 4:26.0 is the start of the sentence ("By twenty twenty-three"); starting there would light the line 1.7 s before the words. Word times inside a sentence are spread by length (§10.4), so check 4:26–4:30 by ear. | Start the stroke about 15 frames before "two" so it completes as the word lands (§10.3). Nothing else. |
| 8 | 11:51–11:59 · Act IV, g-load trace | The dip comes at 11:58; move it to 11:56.5 | **NOT CONFIRMED (a different sync fault found)** | In the still at 11:55.5 the dip to 0.40 g is already drawn. The real fault: from about 11:55 to 12:00 the trace shows 0.40 g while the readout beside it still says **63 LB · AT 1 G**; it only falls to 25 LB at 12:00.2–12:01.4. For ~5 s the screen contradicts itself. | Drive the readout from the trace (the weight falls as the trace dips and lands on "twenty-five"), or hold the trace at 1 g until "fell from sixty-three". |
| 9 | 0:15–0:20 · Act I, FDR note | Annotation unreadable on a phone; boost size and colour | **CONFIRMED** | The two lines are 18 px at 1080 (12 px in the 720p cut); the second is in `muted` `#64748b`, 3.7:1 on the card, below WCAG AA (4.5:1). | ≥ 26 px; `sub` or `ink`, never `muted`, for text that carries a fact (§6.7). |
| 10 | 10:04 · Act III, experience bars | Legend small; burn 50% and 25–30% inside the bars | **PARTLY** | The percentages are 36 px, beside the bars, readable. The real problem is the 16 px `muted` legend that says what the bars measure, and the bars sitting in a thin top band. | Legend ≥ 26 px in `sub`; bars larger and centred. Labels inside the bars are optional, not needed. |
| 11 | 12:11–12:16 · Act IV, 154-flight readout | Micro-text `#475569`, unreadable | **PARTLY** | The line under the percentage is 14 px in `sub` (6.9:1), not `#475569`; the panel title is 13 px `muted`. Size is the problem, and that line carries the **ILLUSTRATIVE VALUES** label, which must be readable (§9.4). | Title and sub-line ≥ 26 px; the honesty label on its own line. |
| 12 | Exhibits 03–04 (4:12) and 09–10 (10:32) | SEC sheets look flat next to the NTSB pages; give them Exhibit 05's transform and light | **PARTLY (cause found)** | Every exhibit already uses the same `Exhibit` component (perspective 1000 px, not 1200). But the tilt goes to 0° when the push ends, and the filings push for only about 2 s, so they lie flat for most of their time; and `RecordDoc` paints the filings on pure white `#fff`, not the paper token `#f3f4f6`, with no paper grain. | One desk pose for every document (§6.6): a resting tilt kept after the push, the paper token and the same grain and contact shadow for filings. |
| 13 | Summary list | "Make the master render flawless" | — | The PDF's checklist repeats items 1–9. | — |

## What the round adds beyond the outside notes
- **Text size across the film:** 92 font-size settings in the film and library code are below 18 px at 1080 (13–17 px
  is common for tags, captions and panel titles). Fresh-eyes r2 (S7) asked for the same. The round applies the §6.7 floor to every
  label that carries a fact, not only the ones named here.
- **Static holds:** three remain after r3 (items 3–5) because "motion" counted grain and the grid drift. The round
  applies the §6.4 definition of motion a viewer can see.

## The fix list for the next picture round (with the owner's other notes)
1. §6.7 sizes on every fact-carrying label (items 1, 2, 6, 9, 10, 11 and the rest of the film).
2. Slow pushes over the CVR box and the envelope (items 3, 4).
3. Build the removal record and the fastener stack on their words; fix the cotter-pin clipping (items 5, 6).
4. Highlight lead of about 15 frames on every highlighter stroke (item 7).
5. One driver for the g trace and the weight readout (item 8).
6. Labels off the grid lines (item 2); one desk pose and the paper token for filings (item 12).
Then the picture gate (§14.2) on the new 720p cut, and the owner's review.
