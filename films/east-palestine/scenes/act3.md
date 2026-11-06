# Act III · The Boardroom: scene handoff (PLAYBOOK §10.3, 2026-11-06)

Sentences 67–111 and the two hearing clips, F20132–F41382 (5:35.5–11:29.7). Code: `remotion/scenes/act3.tsx`, parts in
`remotion/parts3.tsx` (HearingClip, VerdictCard, YearBars). Word cues: `scenes/choreography/act3.md` (generated).

| Scene | Base picture | Record (claims) | Labels | Semantic lock |
|---|---|---|---|---|
| Rulebook | A-A-R built letter by letter; Rule 36 read into the transcript (p. 214); RIR p. 106, p. 107; the hearing card | C25, C23, C72, C172, C173 | — | "seventy" lands 170 on the rule's own line; "billable", "billing", "safety" highlight the NTSB's words |
| Clip 1 | NTSB video, unaltered; live-caption band cropped; captions from the transcript, timed (`data/clip_captions.json`) | C26, C27, C123 | NTSB VIDEO, UNALTERED; CAPTIONS: OFFICIAL TRANSCRIPT | the witness's own words; no narration over them |
| Question | transcript p. 216, the question highlighted phrase by phrase | C28, C125 | — | "limits", "safe", "operation", "all" highlight as asked |
| Clip 2 | NTSB video: the question and "Correct." (camera cuts to the witness before the word) | C28, C29 | as Clip 1 | — |
| Billing | A BILLING STANDARD.; the witness's "in the same breath"; what the AAR can and cannot set | C29, C124 | — | "derailment" completes the quote; "own track" lights red |
| NS line | RIR p. 106 (NS's testimony); 200 → 170; transcript p. 293; the billing number became the stop line | C73, C77, C76 | — | "hundred" lands 200; "seventy" flips to 170 |
| Trade | one line between two costs; RIR p. 106 "balancing" | C24 | — | "low" drops the line, "high" raises it |
| Plan | CONTEXT, NOT CAUSE; the 8-K of 11 FEB 2019: PSR, 60% by 2021 from 65.4%, buybacks, five principles incl. working safely | C43–C47, C160 | CONTEXT, NOT CAUSE (36 px) | "sixty" rolls the ratio to 60.0%; "safely" highlights the principle (fairness: always with C43) |
| Filings | average employees 26,662 (2018) → 18,900 (2022), −29%; buybacks 2019–2022, $10.0B | C48, C49, C161, C162, C102–C104, C50, C51 | OUR CALCULATION (both) | "sixty-two", "hundred" land the counts; "percent" bumps −29%; "billion" lands $10.0B |
| Car | DID THAT CAUSE THIS DERAILMENT? THE RECORD STOPS; car 23's papers: GATX, Braskem America, TRRA, Madison IL; TRRA checked it, NS did not; finding 3 | C82, C170, C21, C22, C164 | — | "stops" ends the record line; G-A-T-X letter by letter |
| Other cars | RIR p. 87: 26%, most minor, the email "appeared to" set 90 s, in NS's own yards; car 23 elsewhere; p. 103; NTSB release 07 MAR 2023 | C30, C31, C182, C32, C33, C157 | — | "quarter" lands 26% |
| Reading | OUR READING OF THE RECORD; verdict 1: "COST CUTTING CAUSED THIS." → THE RECORD CAN'T SAY; ACT IV title | C73 | OUR READING OF THE RECORD (36 px) | "say" stamps the verdict |

**The clips' sound** is not in the Remotion video (the players are muted): `scripts/mix_film.py` must lay
`excerpts/hearing_clip1.mp4` at F22329 and `hearing_clip2.mp4` at F25882 (hold start + 16 frames), each in full.

Checks: tsc clean; text floor 0; sync audit Acts I–III 112/112; stills swept every 4 s and at every fix.
