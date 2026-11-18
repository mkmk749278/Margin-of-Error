# Titan: the opening rewritten (v2, 18 NOV 2026)

**Why:** the owner watched cut v7 and asked why it looks like slides. Measured on the cut (a frame every 4 s, then every
1 s for 0:00–0:50): **no real image until 0:56**. 0:00–0:14 a small chart on a dark card; 0:15–0:22 five names in
type on black (7 s, nothing moves); 0:23–0:41 a flat blue rectangle with dots and a quote typed into a box; 0:41–0:50
the chart again. Words fine, picture failing exactly where a viewer decides to stay. Owner's call (18 NOV 2026):
**rewrite the opening**, not only the picture.

Locked promise (unchanged): **The NTSB Graph That Shows Titan Was Damaged 11 Months Before It Imploded**, thumbnail A
`SAME DATA` (one chart, TIME grey and flat, DEPTH bending away in red).

## Three cold opens (PLAYBOOK §5.1; each differs in kind)
| | Form | Verdict |
|---|---|---|
| **A. The line, the bang, the man under oath** | Sentence 1 points at the hull's own strain trace; the bang lands on the line's jump; then **real sworn hearing video** (Brooks: "let's dive again and see what happens") by about 0:20; consequence; the myth; the method | **Chosen.** Real footage and a real voice inside 20 s; the promise is the first thing said; the signature clip "Definitely Stockton" stays for 8:43 |
| B. The dual split | Two charts side by side from frame 0: "These two charts hold the same numbers." | Rejected: shows the method before any human stakes; still two charts on dark, the very look the owner rejected |
| C. The room | Opens on the hearing room: the board asks who decided to keep diving; "Definitely Stockton." | Rejected: sentence 1 isn't the thumbnail's exhibit (fails promise check 1), and it spends the 8:43 signature in the first ten seconds |

## Opening A: narration (VO text `opening_v2_vo.txt`; vo_lint passes)
| ~Time | VO | Picture (no text cards; every beat a real image or a 3D object) | Claims |
|---|---|---|---|
| 0:00 | This is the strain in Titan's hull on its eightieth dive, the fifteenth of July, twenty twenty-two. | **3D hull** (built from the NTSB construction: five carbon layers, titanium rings, domes) in the dark, gauge group 4 at the forward end glowing; on "strain" the trace draws *out of the gauge* across the full frame, large. `15 JUL 2022 · DIVE 80` as one small tag. Thumbnail exhibit on screen from frame 0 | C08, C03, C82 |
| 0:07 | That afternoon, the four people inside heard a loud bang. And the line jumped. | "bang": a hard low hit in the sound, the camera jolts once; "jumped": the trace jumps (the real dive-80 shift, traced from NTSB fig. 26) | C08, C81 |
| 0:13 | OceanGate's director of engineering later testified that Stockton Rush, the chief executive, wanted to keep diving. | **Real hearing video**: Brooks standing to be sworn (`h_brooks_oath`, silent picture, already fetched), lower third on "director of engineering" | C13 |
| 0:20 | *(clip, 6.6 s)* "I think the plan was at that time to, well, let's dive again and see what happens." | Brooks speaking, `h_brooks_diveagain` 5.26–11.88 s, captioned from CG 112 verbatim; the full clip still plays at 8:56 (this is its tail, a flash-forward) | C13 |
| 0:27 | Titan dived twice more to the Titanic. | **Real NOAA footage**, the Titanic's bow; a depth readout falls to 3,840 m twice: `81`, `82` | C15 |
| 0:30 | Eleven months later, on its first deep dive of twenty twenty-three, the hull failed, and all five people on board died. | **Real ROV footage**, the tail cone on the seabed (USCG/DVIDS); on "five people", the picture slows and darkens; no names here (they close the film at 23:08) | C17, C37, C01, C118 |
| 0:38 | It is often said the warning worked, and was ignored. The record is more complicated. | The 3D hull again, the monitor's sensors lighting on "warning"; on "record", the NTSB report and the Coast Guard report land on the steel bench beside it (real covers) | C102 |
| 0:44 | OceanGate plotted this strain against time. | OceanGate's own dive-80 plot (NTSB fig. 20), traced, the TIME axis bracketing on "time" | C112, C54, C130 |
| 0:47 | After the implosion, the N - T - S - B, America's accident investigator, plotted the same numbers against depth. | **The same points physically turn** in 3D (time axis swings away, depth axis swings in); the camera rides the turn and stops before the bend shows | C30, C103 |
| 0:55 | We will draw that chart from their numbers, and ask why a company that read this data after every dive did not know its hull was damaged. | Slow push into the forward end of the 3D hull, where the gauge sat; cut on "damaged" to the act's first frame | C12, C58, C80 |

About 137 words + 6.6 s of clip: **about 61 s** at Marcus's measured 152 wpm (the old opening reached 0:55 at the same
seam). Then the film continues unchanged at "The eighteenth of June, twenty twenty-three."

## Promise check (§5.1)
1. Title, thumbnail, sentence 1: "This is the strain in Titan's hull on its eightieth dive" with the thumbnail's trace
   on screen. A stranger knows it is the film they clicked. **Pass.**
2. Sentence 1 on the record: a dive number, a date, the recorded strain (USCG ROI 5.7, NTSB 24-012 fig. 26). **Pass.**
3. Thumbnail exhibit by 0:07 (from frame 0); new hook, the sworn "let's dive again", about 0:20; "eleven months"
   said about 0:31; method about 0:47. **Pass** (re-measure on the audio).
4. Confirms without answering: it never shows the depth chart or says what it shows; the bend is paid at 11:20.
   Every sentence sits on a confirmed `claims.csv` row (C102 is the attributed "often said", status claim, as approved
   in narration v4). **Pass.**
5. Challengers: "Titan's Own Sensors Recorded the Damage. OceanGate Sent It Back Down." (sentences 1–3) and "Same
   Data, Different Axis" (sentences 7–8) both confirmed. **Pass.**

## Fairness notes (for the fairness pass at max before recording)
- "wanted to keep diving" is Brooks's sworn "he wanted to continue on" (CG 112 p. 765), attributed as testimony; his
  hedge "I think the plan was" plays in his own voice.
- "did not know its hull was damaged" is the NTSB's finding (MIR-25-36: the analysis was flawed, so OceanGate did not
  know Titan was damaged and needed removal from service); the NTSB is named one sentence before.
- "on its first deep dive of twenty twenty-three" replaces "its next deep dive": dive 83 (2,954 m) came after 81–82.
- No names in the opening; the five names stay at the sign-off.

## Audio plan
New sentences (Marcus, Eleven v4, API, 3 takes each, picked by Whisper and pitch): 1, 2a, 2b, 3, 4, 5, 7, 9, about
600 characters. Reused takes, same words: "It is often said…", "The record is more complicated.", "After the implosion…".
Then splice at pauses, re-time, words, cues, choreography, mix.
