# Titan · forensic review v2 (cut v2), every point checked (PLAYBOOK §14.3), 17 NOV 2026

Review: `forensic_review_v2_720p.md` (independent session, readiness 7/10). Each point checked against the code,
`vo/timing.json`, the record and a still. **Outcome** is what round 3 (cut v3) does.

## 1. Critical
| # | Point | Check | Outcome |
|---|---|---|---|
| 1.1 | Kramer clip shows the NTSB depth slide while he says "function of time"; gives away 11:12 | CONFIRMED: the whole fetched range is the slide (screen capture, no witness shot) | FIXED: his voice plays over the dive 80 strain-vs-time trace (NTSB 24-012 fig. 26, traced); strip says VOICE: USCG HEARING · PICTURE: NTSB FIG. 26 |
| 1.2 | 1:07 CLOCK 10:47 beside DEPTH 2,408 M | CONFIRMED | FIXED: clock and depth share one driver, both land on "forty-seven" (10:47 · 3,350 M); digit groups light on "three…fifty" |
| 1.3 | Referral passage drops the board's caveat; tag "EVIDENCE OF CRIMINAL ACTS" | CONFIRMED (C39 note: "say both sentences together") | PICTURE FIXED: tag "6.5 · THE BOARD'S REFERRAL SECTION"; the caveat line "the determination of whether any crime was committed would be made by the DoJ" highlighted on its sentence. NARRATION: re-voiced as approved (owner, 17 NOV 2026), spliced in v4; the page highlights the caveat on "crime" |
| 1.4 | 17:11 highlight on p. 292 says "illegal", not the words said | CONFIRMED | FIXED: the 5.18 page itself (PDF p. 317), the said words highlighted ("misrepresented … as mandatory duties to conceal that their mission specialists were actually paying passengers") |
| 1.5 | "The bend first appears in dive eighty-one" vs TSB's smaller 2021 bend | PARTLY: the next sentence scopes it, but the line alone reads absolute | PICTURE FIXED: "NTSB PLOTS: BEND FIRST IN 81". NARRATION: re-voiced as approved, "In the NTSB's plots, …" (v4) |

## 2. Record
| # | Point | Check | Outcome |
|---|---|---|---|
| 2.1 | "not seen in 2021" has no row | CONFIRMED gap in the CSV; the record supports it: CG 112 printed p. 801, "we hadn't seen that in 2021" | FIXED: quote and page added to C65 |
| 2.2 | quote marks on a paraphrase (0:30) | CONFIRMED | FIXED: no quote marks under IT IS OFTEN SAID |
| 2.3 | controller: TSB not checked | CHECKED: TSB M23A0169 names the handheld controller only in its factual description, not in findings | NO CHANGE NEEDED; C93 note records it |
| 2.4 | "By the Coast Guard's reading of the law" — support is the NTSB | CONFIRMED | FIXED: re-voiced as approved, "By the NTSB's reading of the law" (v4); the law now shown on NTSB p. 60 |
| 2.5 | "the first hull cracked" vs "a crack was found" | CONFIRMED (minor) | FIXED: re-voiced as approved, "a crack was found in the first hull"; chip CRACK FOUND (v4) |
| 2.6 | 6,000 × 1.25 sounds like the analysis's own | CONFIRMED | FIXED: label "6,000 × 1.25: OUR ARITHMETIC" |
| 2.7 | logbook label should be TRANSCRIPTION | CONFIRMED (§9.4) | FIXED: "LOGBOOK: TRANSCRIPTION · USCG ROI" |
| 2.8 | dive 88 counter lands on 1,200 m | CONFIRMED | FIXED: it rolls toward 3,350 under the cut and never lands on an unsourced value |

## 3–5. Audio, picture, fairness
| # | Point | Check | Outcome |
|---|---|---|---|
| 3.2 | "Mr." split into its own sentence | CONFIRMED in timing.json (sentences 226/227, 229/230) | OPEN, kept: changing the splitter renumbers every later sentence the picture is cued to; no audible or visual fault (s229/s230 cue as one line); the SRT is built from words |
| 3.5 | American spelling in the SRT | CONFIRMED rule (§4.1c) | FIXED NEXT ROUND: the SRT, built at the package step |
| 4.1 | read-now lines ≈31–33 px, labels ≈27 px | CONFIRMED | FIXED: the finding bar under every exhibit 36 px; honesty labels on every plate 34 px bold. Card bodies stay 30–32 px (OPEN, with 4.3) |
| 4.2 | decision tags cover the dive numbers; 6:49 overprint; 4:25 crossfade | CONFIRMED | FIXED: tags in one column above the chart, chart lowered; "NAMED IN THE 2018 REPORT" lifted clear of the strip; the test table leaves before NEVER TESTED arrives |
| 4.3 | 13 near-static text-card stretches 4–9.5 s | PARTLY (stillness audit 0 at 3 s; the cards change by words only) | FIXED in v4: each on its record page (NTSB 2.6; USCG 4.34.9 and 5.5; ROI summary and NTSB 2.5), plus s108 on CG 112 p. 768 |
| 4.4 | NTSB p. 66 three times in 2 min | CONFIRMED | FIXED: s199 shows the executive summary's contributing line; s209 the buckling analysis (p. 53); only the verdict keeps p. 66 |
| 4.5 | harbour footage with another video's title; reads as the base | CONFIRMED | FIXED: re-cut from 0:12 (title gone); "ST. JOHN'S HARBOUR · REFERENCE, NOT THE BASE" |
| 5.1 | salaries without "volunteers" | CONFIRMED (CG 112 printed p. 779) | FIXED on screen: BROOKS: "THEY ASKED FOR VOLUNTEERS" · CG 112 P. 779 |
| 5.3 | C66 status `claim` | CONFIRMED | FIXED: confirmed (sworn testimony, attributed) |

## 6. Packaging (titles, thumbnail, window): leads for the package step; the locked promise stays the owner's.

## Narration changes for the owner (each one re-voiced sentence, cut in at its pauses, §10.4)
1. s229 (fairness, must ship): "Whether any crime was committed, the board wrote, was for the Justice Department to decide, and that will not happen, because Mr. Rush died." (replaces "That investigation, the board noted, will not occur, because Mr. Rush died.")
2. s141: "In the N - T - S - B's plots, the bend first appears in dive eighty-one."
3. s188: "By the N - T - S - B's reading of the law, it was not."
4. s73: "In twenty nineteen, a crack was found in the first hull."
