# Titan: independent forensic review, v2 720p cut

**Reviewer:** a new session that did not build the film. Read only PLAYBOOK §14.4 and the sections it names, the
hard lines in `CLAUDE.md`, `films/titan/claims.csv` and `films/titan/vo/timing.json`. No treatment, screenplay,
scene code or earlier review notes were read.
**File reviewed:** `titan_review_v2_720p.mp4` (Drive `titan/renders`), 1280×720, 60 fps, 83,115 frames,
1385.25 s (23:05.25), H.264 4.03 Mb/s, AAC 48 kHz stereo.
**Method:** the full decode with ffmpeg (frame timestamps, `blackdetect`, `freezedetect`, per-frame luma), EBU R128
on the whole file, 93 contact sheets at 2 frames/s with the words heard under every frame (from `timing.json`
`words` and `clips`), all read, full-resolution frames for text sizes, and every on-air fact checked against its
`claims.csv` row. Text sizes are measured cap heights in the 720p frame, converted to 1080 px font size
(cap ÷ 0.73 × 1.5). They are accurate to about ±2 px.

## Verdict

1. The record is strong and mostly fairly said: almost every number on air traces to a primary row, the
   "our own reading" label at 12:10 is exemplary, and the hearing clips are the best thing in the film.
2. Two picture faults undercut its own signature moments: the Kramer clip shows the NTSB's *depth* plot while he
   says "plotted as a function of time" (10:48), and the opening readout puts **CLOCK 10:47** beside **2,408 m** (1:07).
   Three fairness gaps also need fixing before launch: the board's criminal-referral passage without its own
   caveat, the "illegal" highlight, and the salary request without "volunteers".
3. The last third leans on text-only cards in sub-floor type, and the "Boardroom" chapter runs 12.6 minutes,
   so the YouTube chapters hide the film's best beat.

**Readiness: 7 / 10.** One more round fixes it. The fixes are local; no re-record is needed except one optional line (§2.3).

**Measured clean:** 0 timestamp gaps (every frame step is 1/60 s), 0 flash frames (no single frame differs by more
than 20 luma levels from both neighbours), 0 freezes ≥ 2.5 s (`freezedetect` n=0.001), black only where intended
(0:15.18–0:17.80 after the names, 22:47.87–22:52.32 and 23:01.27–23:05.05 at the close).
**Loudness: −14.0 LUFS integrated, true peak −1.3 dBTP, LRA 2.7 LU: passes.**

---

## 1. Critical red flags (fix before the next render or the launch)

**1.1 [10:48.1–10:54.3 / clip `h_kramer_time`]: the hearing shot shows the answer before the reveal.** While
Dr. Kramer says "OceanGate's strain data was typically and perhaps always plotted as a function of time", the
hearing frame behind him shows the NTSB slide titled *"Dive 80 Depth-based Plot of Strain – Linear Relationship"*.
→ The picture contradicts the caption under it, and it shows the depth plot 17 s before the film's signature turn
at 11:12 ("So here is the same data, against depth"). The viewer who reads the slide gets the payoff early, and the
viewer who doesn't sees a mismatch. → Crop or reframe the clip to Kramer at the witness table without the screen
(check the hearing video for another camera angle in the same minute; not verified here), or cut to the time-plot exhibit under his
voice with the lower third kept. Never alter the slide. If no clean angle exists, run his audio over our
`TIME`-axis plot with `OWN VOICE · HEARING VIDEO` kept on screen.

**1.2 [1:06–1:16 / dive 88 text-log reconstruction]: the clock and the depth disagree.** At 1:07.0 the card reads
**CLOCK 10:47** beside **DEPTH 2,408 M**. The counter keeps rolling to 3,350 m while the clock stays fixed at 10:47.
→ The narration says "at ten forty-seven, at about three thousand three hundred and fifty metres" (C37, C50). For
two seconds the screen says Titan was at 2,400 m at 10:47, which no record says, under a RECONSTRUCTION label that
points to the NTSB. That breaks §10.3 ("a readout and the picture it describes move together"). → Drive both from
one value: the clock rolls 09:00 → 10:47 as the depth rolls 0 → 3,350, both landing on "forty-seven". Or show the
depth already landed at 3,350 when 10:47 appears.

**1.3 [20:50–21:14 / USCG ROI p. 322]: the criminal-referral passage is missing the board's own caveat, under a
tag that reads "EVIDENCE OF CRIMINAL ACTS".** The VO says the board would have recommended a referral, "for its
consideration on whether to pursue a separate criminal investigation" and "That investigation, the board noted,
will not occur, because Mr. Rush died." C39's own note says "**Say both sentences together, always**". The
second sentence in the record is: "It is important to note that the determination of whether any crime was
committed would be made by the DoJ following its own investigation and analysis, which will not occur in this
instance due to the death of Mr. Rush." The film drops the first half. Meanwhile the exhibit tag reads
`P. 322 · EVIDENCE OF CRIMINAL ACTS` for 24 s, and the visible page text includes "may have been subject to
criminal liability". → §9.6.3: no guilt without a verdict. The dead cannot be defamed in the US or UK, but the
company, its officers and its insurers can be, and a split audience reads this as the channel's verdict. → Re-voice
sentence 229 as one sentence (§10.4): *"Whether any crime was committed, the board wrote, was for the Justice
Department to decide, and that will not happen, because Mr. Rush died."* Change the tag to
`P. 322 · THE BOARD'S REFERRAL SECTION`, or quote the report's heading as the board's (`§6.5, AS TITLED BY THE
BOARD`). Highlight the "determination … would be made by the DoJ" line, not only "which will not occur".

**1.4 [17:11–17:21 / USCG ROI p. 292]: the highlighted words are not the words said, and the highlight says
"illegal".** The VO (C53, ROI 5.18, PDF p. 317) is "described its paying passengers as mission specialists, with
mandatory duties, to conceal that they were paying passengers". The page shown is p. 292, and the highlight
lands on **"…'mission specialists' to conceal their illegal passenger operations"**. → The channel puts the
board's word "illegal" on screen, highlighted, without saying it or attributing it, on a page whose words differ
from the narration. §9.5: show the record that is said. → Show the 5.18 page (the C53 quote) with its exact
line highlighted. If p. 292 stays, do not highlight "illegal": cut the highlight at "to conceal".

**1.5 [13:39 / VO s.141, "The bend first appears in dive eighty-one"]: unscoped absolute, contradicted 43 s later.**
At 13:02 (s.149) the film says Canada's TSB "found a smaller bend a year earlier, in August twenty twenty-one"
(C123: 21% on 05 AUG 2021). → Experts in the comments will set the two lines side by side. → Scope it, re-voicing one
sentence: *"In the N - T - S - B's plots, the bend first appears in dive eighty-one."* The on-screen tag
`THE BEND FIRST APPEARS IN 81` changes to match: `NTSB PLOTS: BEND FIRST IN DIVE 81`.

## 2. Record and mechanism corrections

**2.1 [10:04–10:24 / VO s.113, "…activity on the dives that followed that they had not seen in twenty twenty-one"]:
no row carries "not seen in 2021".** C65's quotes (CG 112 printed p. 764) contain "sensor 4 did have a
characteristic of the kind of thing that we wanted to be concerned about", but not the 2021 comparison. The
on-screen chart at 10:15 also says `NOT SEEN IN 2021`. → Add the verbatim CG 112 words and the page to C65, or drop
"that they had not seen in twenty twenty-one" from the VO and the chart. Until then, `claims_check.py` passes a
sentence the record in the CSV does not support.

**2.2 [0:30–0:35 / quote card "The warning worked, and was ignored."]: quotation marks on a paraphrase.** C102's
source is a YouTube comment reading "Crazy how the early warning system actually worked and was just ignored"
(status `claim`). The card sets a different sentence in quotation marks under `IT IS OFTEN SAID`. → A quote mark
promises verbatim words, and this audience checks. → Drop the quote marks (set it as a plain line: `IT IS OFTEN
SAID: THE WARNING WORKED, AND WAS IGNORED`), or show the real comment text with its like count and date and no
user name.

**2.3 [19:49–20:04 / VO s.219, "None of the three reports names the controller as a cause"]: the TSB is not
checked.** C93 covers the NTSB findings and probable cause and the USCG causal factors; its note says "neither US
report". The TSB (C121–C125) is not cited for this point. → Read TSB M23A0169 §3 (findings as to causes and
contributing factors) for the controller, and add the page to C93. If the TSB is silent, the line stands. If it is
unread, say "Neither U - S report…".

**2.4 [16:53 / VO s.188, "By the Coast Guard's reading of the law, it was not."]: wrong body.** The support (C68)
is NTSB 2.6: "because OceanGate operated the Titan with passengers for hire, it was required to be inspected by
the US Coast Guard". The next line itself says "the N - T - S - B notes". The card header reads `BY THE COAST GUARD'S
READING OF THE LAW: IT WAS NOT`. → Say "By the N - T - S - B's reading of the law, it was not", or "Under U - S
law, as the N - T - S - B reads it, it was not." The board's own legal finding is also usable if a row is added
(USCG ROI 5.18).

**2.5 [7:07 / VO s.73, "In twenty nineteen, the first hull cracked."]: the record says a crack was *found*.** C61:
"a crack found in the carbon fiber hull of the first TITAN". When it formed is not stated. → "In twenty nineteen, a
crack was found in the first hull." (minor, one re-voiced sentence, or leave it and fix the on-screen line).

**2.6 [3:02 / VO s.31, "The analysis for this hull said … about seven thousand five hundred metres: six thousand,
times one point two five."]: our arithmetic sounds like the analysis's own.** NTSB p. 27 (C45) gives the 7,500 m
prediction. "6,000 × 1.25" is our arithmetic (C121 note: "Arithmetic ours, said plainly"). → On screen add `6,000 ×
1.25 = 7,500 · OUR ARITHMETIC`. The VO can stay if the screen labels it.

**2.7 [4:00–4:25 / DOTF logbook table]: the label is wrong for a typed copy.** The day/plan/logbook table is our
typed transcription of the facility logbook (C56), labelled `LOGBOOK: RECONSTRUCTION`. §9.4: a document we set in
type from a record is `TRANSCRIPTION`. → `LOGBOOK: TRANSCRIPTION · USCG ROI FIGS. 150–152`.

**2.8 [18:58–19:03 / "18 JUN 2023 · THE FIRST DEEP DIVE IN ELEVEN MONTHS"]: a counter lands on an unexplained
number.** The depth counter rolls 128 → 592 → 961 → 1,121 → 1,186 → **1,200 M** and the scene cuts away on 1,200.
No row gives 1,200 m and the narration never says it. → Viewers will read 1,200 m as a recorded depth on the
fatal dive. → Let it roll to `≈ 3,350 M · LAST MESSAGE` (C50), or keep it rolling under the cut without a landed value.

**Checked and holding** (each against its row): 3,840 m × 13 (C27, C106); ~3,350 m and "a minute later" (C50, C73);
"about five hundred metres shallower" (3,840 − 3,341/3,363 = 477–499 m); 380× surface pressure (C74: 382.9 gauge);
2.25 → 1.25 (C05, C121); "less than twice" (7,500 / 3,840 = 1.95); DOTF 01 MAR 2021, 20 min (C06); four hours, twice
(C07); 8 AE + 16 strain (C36); 26 items, 18 JAN 2018 (C23); four days to the firing (C59); 25,687 mV (C08); slopes
5.00/4.74 → 8.76/8.09/8.77 m/mV, 15–150 m, "about three quarters" (C41, C105, C127: +75%); nearly double, 98% (C123);
CA$1,750, 28 JUL (C18); 1.4–84.2 °F = −17.0 to 29.0 °C (C19); $1.85M (C24); 45 m vs 3,840 m (C70); NVIC JUL 1993 /
PVSA DEC 1993 (C69); "more than seven hours" (C71, by every clock count in its note); four recommendations all open as
of the 22 OCT 2026 letter (C96: "OPEN-- ACCEPTABLE RESPONSE"; the screen says so). Mechanism: local buckling from
delamination (C126) is explained to the NTSB's own threshold. **Re-check C96 and C97 on upload day**: an open
recommendation can close at any time.

## 3. Audio, pronunciation and captions

**3.1 Loudness passes:** −14.0 LUFS, −1.3 dBTP, LRA 2.7 LU (measured on the file).

**3.2 [20:53 and 21:12 / "Mr. Rush"]: the sentence splitter broke the name in two.** `timing.json` holds sentences
226/227 and 229/230 split after "Mr.". The aligner gives "Mr." at 1272.168–1272.208 (40 ms, impossible for a
spoken word), and "Rush" starts at 1273.230. RMS in the cut shows speech resuming at about 1272.5 s, so the timing
for "Mr." is misplaced (estimate: about 0.3 s early). → Captions built from sentences will show `…because Mr.` /
`Rush died.` as two cues, and the `MR. RUSH DIED` tag is cued on a wrong word time. → Treat "Mr." as a non-terminal
abbreviation in the sentence splitter, re-run `word_align.py` for those two sentences, and cue the tag on the measured
"Rush". Listen once to 21:11.9–21:13.3 for an audible pause inside the name. The RMS shows a ~0.35 s dip
before it, which reads as a natural comma.

**3.3 Hearing clips:** all seven sit in measured gaps with no narration over them, captions are verbatim to CG 112
with page numbers, and lower thirds name the role and the date sworn. This is exemplary and should be kept as the
channel's standard.

**3.4 Acronyms:** N-T-S-B, U-S, are pre-spaced in every row; "TSB" and "IMO" are spoken in full. No "MBI" or
"NVIC" is read aloud. Good for both audiences.

**3.5 SRT note:** the VO spells "metres" and "fibre", and the brand rule is American spelling (§4.1c: "One spelling
(American)"). Spoken words are identical either way, but the English SRT and on-screen words ("10 M" is fine;
"METRES" is not used on screen) should use American spelling in captions: meters, fiber, center.

## 4. Picture: smoothness, motion, sync, legibility, labels

**4.1 Legibility, measured (§6.7):**

| Element (time) | Measured @1080 | Floor | Result |
|---|---|---|---|
| Decision tags on the dive ledger (19:29–19:47) | ≈ 25 px | 36 (read now: "each dated decision") | **fail** |
| "THE BOARD: …" finding lines (21:18–21:44) | ≈ 33 px | 36 | **fail** |
| "FIRST CALL TO RESCUERS: 7+ HOURS" (21:23) | ≈ 31 px | 36 | **fail** |
| `RECONSTRUCTION` honesty label (1:07) | ≈ 27 px | 36 (could pass as real telemetry) | **fail** |
| Dive ledger title (19:33) | ≈ 35 px | 36 | marginal |
| Source strips, `DEPTHS TO SCALE` | ≈ 27 px | 26 | pass |
| Act kicker `ACT IV THE CASCADE` (top left, `muted`) | ≈ 12 px | decoration only | pass, if it never carries a fact |

→ Every card built from mono text (the 2023 dives 18:18, NTSB/TSB 18:44, two things 19:49, the law 16:53, the
regulator 17:21, one more finding 21:14, recommendations 22:00) sets its read-now lines at about 30–33 px.
→ Raise read-now lines to 36–40 px and honesty labels to 36 px across the shared card component. There is room:
those cards leave 40–60% of their area empty (see 4.3).

**4.2 Collisions and clipping:**
- 19:33–19:47: the seven decision tags sit on top of the dive numbers 75–82 and the tops of their bars (tags cover
  "75 76 … 82"; only 83–87 stay readable). → Move the tags to a column right of the bars, each with a leader line
  to its dive.
- 6:49.5: `NAMED IN THE 2018 REPORT` overprints the source strip `HULL 1 (2018-19) AND HULL 2 …`. → Lift it 40 px.
- 4:25.0: one frame shows `01 MAR 2021 THE HULL` and `NEVER TESTED TO FAILURE` overprinted during the
  crossfade. → Fade the first out before the second in (or cut).

**4.3 Motion a viewer can see (§6.4).** On 0.5 s luma differences (200×112, mean |Δ| < 1.0), these stretches
change by less than a word arriving: 1:07.0–1:13.0 (6.0 s, depth counter only), 4:53.5–4:59.0 (5.5 s), 6:05.0–6:11.0
(6.0 s), 7:11.5–7:16.5 (5.0 s), 9:42.5–9:49.5 (7.0 s), 9:50.5–10:00.0 (9.5 s), 12:10.5–12:14.5 (4.0 s), 16:53.5–17:00.5
(7.0 s), 17:51.0–17:56.0 (5.0 s), 20:41.5–20:47.0 (5.5 s), 21:15.0–21:19.0 (4.0 s), 21:44.5–21:50.5 (6.0 s),
21:59.0–22:06.0 (7.0 s). Most of these "move" only by 30-px words typing into a near-empty card. By the letter of
§6.4 a new element on its word counts, but at phone size the frame reads as static. → The camera must move
≥ 3% across each, and these cards need one image: the real exhibit whose words are typed (C-numbered page), the
hearing still, or the schematic the sentence is about. The biggest wins are 16:53–17:10 (law), 18:44–18:58
(investigators differ), 19:49–20:16 (two things) and 21:14–21:44 (one more finding).

**4.4 Repetition.** The NTSB p. 66 probable-cause page appears three times in 2 m 15 s (18:04–18:17, 19:03–19:10,
20:18–20:37), each time with a new highlight. → The third, at the verdict, is the one that matters. Replace the first
two with the page they actually cite: §2.6 (contributing factors, 18:04) and the §2.2 buckling analysis (19:03).

**4.5 Reference footage with a third party's burned-in title (14:03).** The St. John's harbour shot carries the
source video's own caption, *"Cruising through the Narrows into the Harbour of St. John's"*, and plays under "set
down in a parking lot at a marine base". → It reads as another channel's footage and as the base itself. → Crop the
title out (crop is allowed, §9.5) and add `REFERENCE · ST. JOHN'S HARBOUR · NOT THE BASE`. Confirm its licence row in
`media_manifest.csv` (CC BY with attribution, never NC/ND).

**4.6 Sync (§10.3) holds where checked.** Words land within a word of their cue in every sheet read (the $1.85M
counter lands on "five million", the slopes land on their numbers, the ledger's 6 → 13 flips on "Thirteen"). The two
misses are 1.2 and 3.2 above.

**4.7 Labels present and right:** `TRACED FROM THE NTSB FIGURE` (0:00), `ILLUSTRATION · NOT TO SCALE` on every drawn
mechanism, `ILLUSTRATIVE VALUES` on the AE chart (10:15), `LENGTHS TO SCALE` and `DEPTHS TO SCALE` where true, and
`OUR READING OF THE RECORD · NOT A FINDING` (12:10). Real photographs (NTSB Fig. 17, ROV still 22 JUN 2023, recovered
hull pieces USCG/DVIDS) are credited. No victims' faces anywhere.

**4.8 Retention structure.** Record in frame 1 (the dive 80 strain trace, 0:00), open question by 1:49 ("So where did
the margin of error run out?"), open loop "We will draw that chart with them" (0:50) paid at 11:10. All in time.
But the chapters are **I 0:00 · II 1:58 · III 5:41 · IV 18:18 · V 20:18**. Act III runs **12 m 37 s (55%)** and
holds the dive 80 investigation, the signature depth plot, the winter and the money. Act IV is 2 minutes. → A
viewer using chapters cannot find the chart, and YouTube's key moments will be thin. → Keep the five acts in the
film. Publish descriptive chapters on YouTube, e.g. 0:00 The bang on dive 80 · 1:58 A carbon hull · 5:41 The 2018
warning · 7:20 Dive 80 · 10:55 The same data, against depth · 14:01 Winter in a parking lot · 15:06 The money ·
16:50 The law · 18:18 The final dive · 20:18 The verdict.

## 5. Fairness and law

**5.1 [15:29–15:35 / VO s.174, salaries]:** "employees were asked to temporarily forgo their salaries, with a promise
of back pay" omits the record's own context: "They asked for volunteers. I don't think anybody did it" (C91 note:
"Fairness: it was a request for volunteers and he did not think anyone did it"). → In the UK the company would have
to show serious financial loss, and the risk is low. Fairness, though, needs the line. → Add six words: "…with a promise
of back pay. A former employee said they asked for volunteers." Or put `ASKED FOR VOLUNTEERS · CG 112` on screen.

**5.2 1.3 and 1.4 above** are the two fairness fixes that must ship.

**5.3 [9:29–9:42 / the contractor's account, C66, status `claim`]:** attributed ("In her account"), sworn, and
Brooks's own account follows. Fair as built. → Change C66 from `claim` to `confirmed (sworn testimony, attributed)`
so the gate's meaning is clear. The CSV note says Brooks was never asked about "microns".

**5.4 Board's motive findings (16:13–16:38, "to ensure the 2023 expedition proceeded unhindered"):** said as the
board's words, in quotes, with the page on screen. Fair (§9.6.6).

**5.5 Regulator scrutiny (17:21–18:17):** the Coast Guard's own guidance gets equal weight, said in the NTSB's
words. This is exactly what §4.1b asks; it keeps both halves of the US audience.

**5.6 Status and date:** OceanGate's statement is dated (AUG 2025) and the recommendations are dated (OCT 2026). The
Nargeolet suit (C101) is rightly kept off air. If the description mentions any litigation, say it is pending, as of a
date, with the defendants' response.

**5.7 Language check (§4.1b):** no partisan words, no "greed", no "cover-up". "Conceal" appears only as the board's
finding, attributed. "Preventable tragedy" is attributed to the board.

## 6. Packaging and launch

**Titles** (case first, the margin, no tabloid words; the thumbnail's exhibit is the strain trace):
1. `Titan: The Hull Changed on Dive 80, and Its Own Sensors Recorded It`
2. `Titan Submersible: The Data That Showed the Damage, 11 Months Early`
3. `OceanGate Titan: Same Strain Data, Plotted Against Depth (NTSB MIR-25-36)`

**Thumbnail brief:** left two-thirds, the dive 81 strain-vs-depth curve bending away from the straight dive 75 line in
the first 500 m (cyan straight, red bent), drawn thick (≥ 8 px at 1280), on Void. Right third: one number in amber
Inter Black, `+75%`, with a 2-word subhead `SAME GAUGE`. No sub, no faces, no ocean. Test at 168 px wide: the two
lines and the number must still read. Challenger A: the real NTSB Fig. 17 delamination photo with the same `+75%`.
Challenger B: the ledger's dive 88 bar stopping short, `500 M SHORT`. The promise is the same in all three (the dive 80
change, on the record).

**Description line 1:** "The Titan submersible's hull monitor recorded the change on dive 80, 15 JUL 2022: here is
the NTSB's own data, plotted the way it found the damage." Then the sources with page numbers (NTSB MIR-25-36,
USCG MBI ROI 04 AUG 2025, NTSB Materials 24-012, CG 112 transcript, TSB M23A0169), the descriptive chapters (4.8), and
the voice note word for word.

**Staged upload:** upload the 4K master **Unlisted at least 3 hours before** the slot (4K 60 fps processing, Content
ID on the hearing clips, captions indexed). Confirm the 4K/HD versions are processed and the SRT is attached before
switching to public. Pin the opening comment within 60 s.
**Window (§13.6):** Thursday 14:00–16:00 US Eastern (19:00–21:00 UK). The first eligible Thursday after the 4K master
passes. If the master is ready in time, **Thursday 19 NOV 2026**; otherwise **Thursday 26 NOV 2026** (US
Thanksgiving: the US audience is lower that afternoon, so consider **Thursday 03 DEC 2026**). Re-check C96/C97
(recommendation status) the morning of upload.

## 7. The strongest ideas (weak or generic moments, best replacement inside the hard lines)

1. **16:53–17:10, the law card (text only, 17 s).** Replace with the actual 46 U.S.C. definition line or NTSB 2.6's
   sentence as a page, highlighted word by word on "even one passenger for hire". The real words of the law carry
   more than our mono summary.
2. **21:14–21:44, "one more finding" (one card, 30 s).** Turn the bar into a real clock strip: 10:47:02 last
   message → 10:48 acknowledged → 14:50 last message from the ship (C128) → 18:27 first call to JRCC Halifax
   (C71 note), each landing on its word. The gap is the finding; let the viewer watch it open.
3. **19:49–20:16, "two things often said".** Put each myth beside its page: the USCG 4.34.9 paragraph on the
   reversed thrusters, and the 5.5 heading on the window. Two short exhibits read as care; two cards read as a
   rebuttal.
4. **18:58–19:03, dive 88 counter.** The strongest image in the film is already built: the dive 80 strain trace.
   Hold it full frame for 2 s of room tone after "eleven months", with the depth readout rolling under it to ≈3,350 m
   and stopping. No new graphic needed.
5. **14:03, harbour footage.** Swap the third-party cruise shot for the USCG figure of Titan in the A Harvey parking
   lot if the ROI has one (the ROI figures around 4.35 are public-domain federal work). It is the exhibit the
   sentence is about.
6. **10:48, Kramer clip (1.1).** If the clean angle exists, this becomes the film's best 6 seconds: the NTSB's own
   materials engineer saying "a function of time", followed by the axis turning. Keep his words and protect the reveal.

---
*Leads, not orders (§14.3): each point should be checked against the code, `vo/timing.json` and a rendered still,
and recorded in `review/forensic_review_v2_720p_check.md` as CONFIRMED / PARTLY / NOT CONFIRMED.*
