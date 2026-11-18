# Titan v8 screen text: independent fact-check and fairness pass

18 NOV 2026, max effort, fresh context. Scope: every line in `review/screen_text_v8.txt` plus the items the
brief named that sit in the scene code (`remotion/scenes/*.tsx`). Checked against `claims.csv` (verbatim quotes),
the primary records in `assets/records/` (NTSB MIR-25-36, NTSB Materials Lab 24-012, USCG MBI ROI; page numbers
below are **PDF pages** unless marked "printed"), the CG 112 page scans in `public/films/titan/pages/`, and the live
DVIDS pages for the four DVIDS stills used.

Page convention used by the film's own record pages (`remotion/docs.tsx`): MIR printed page = PDF page − 8,
ROI printed = PDF − 8, CG 112 printed = PDF − 1. Labels citing a page should follow the same (printed) convention.

## Verdict summary

- **FAIL (2):** the 29 MAY 2019 date on the hull-in-storage photo; the "AGAINST TIME" source strip on the
  three-panel re-plot.
- **FIX (19):** listed in the table, with wording. Five are licence flags on pictures whose report credit is not
  a US federal source.
- Everything else **PASS**.

## Table

| Label | Verdict | Reason (quote / page) | Suggested wording |
|---|---|---|---|
| 4 ABOARD · USCG ROI 4.34.8 (open, s1) | PASS | ROI 4.34.8, PDF p. 233: "conducted Dive 80 ... with a pilot, a content expert, and two mission specialists aboard" (C81). | – |
| ACOUSTIC CH 2 · 25,687 mV | PASS | C08, ROI PDF pp. 283-284: "AE Channel 2 peaked at 25,687 mV". | – |
| STRAIN SHIFT · 15:26:45 | PASS | C08: "At 3:26:45 p.m. ... recorded a major acoustic emission event". | – |
| ON STOCKTON RUSH, OCEANGATE CEO | PASS | C52 / ROI Table 2: "Chief Pilot/CEO". Sits on s3 (Brooks's testimony), attributed by the PHIL BROOKS / SWORN chips. | – |
| PHIL BROOKS · OCEANGATE DIRECTOR OF ENGINEERING 2021–23 / DIRECTOR OF ENGINEERING 2021–23 | PASS | C62: promoted "in the fall of 2021"; C35: "left in February of 2023". | – |
| HULL FAILED · ABOUT 3,363 M (open, s5) | FIX | NTSB p. 58: 3,363 m; USCG: last message at 3,341 m (C50, disputed). The narration (s14) says "about three thousand three hundred and fifty", so the screen and the voice give different numbers, and the chip is unattributed while the records differ. | `HULL FAILED · ABOUT 3,350 M` (matches VO and both records) or `HULL FAILED · ABOUT 3,363 M · NTSB` |
| ≈ 09:00 · DIVE 88 · RELEASED FROM THE PLATFORM | PASS | C37 NTSB "About 0900 ... released from the LARS"; USCG 9:14 commenced (C50) is within "≈". | – |
| FIRST 2023 DIVE BELOW 10 M | PASS | C37: "the first dive of the 2023 expedition to descend below 33 feet (10 meters)". | – |
| POLAR PRINCE DECK LOG · 18 JUN 2023, 0600–1200 WATCH · PHOTO BY THE MBI · USCG ROI FIG. 37 | PASS | ROI PDF p. 38, fig. 37: "Photo of the POLAR PRINCE Logbook entry for 0600-1200 watch on June 18, 2023, taken by the MBI post-casualty. Source: USCG". Federal photo. | – |
| THE NORTH ATLANTIC · REFERENCE FOOTAGE, NOT THE DAY · SAGA47SWAN / YOUTUBE · CC BY | PASS | Manifest row 2 (CC BY, "Saga47swan Sailing"). Honesty label present. | – |
| SAGA4TSMAN / YOUTUBE · CC BY (act45.tsx l. 76) | FIX | Typo in the attribution: the channel is "Saga47swan" (manifest row 2; act1 spells it right). A CC BY credit must name the author correctly. | `SAGA47SWAN / YOUTUBE · CC BY` |
| THE TITANIC'S BOW · NOAA · 2004 · PUBLIC DOMAIN | PASS | Manifest: NOAA Ocean Exploration 2004, US government work. (Note outside v8 list: open2 says "3,840 M DOWN", act2 says "≈3,800 M DOWN" for the same bow shot; pick one, "≈3,800 M" is the safer wording for the bow.) | – |
| THE TITANIC · 3,840 M | PASS | C04: NTSB p. 33 and USCG 4.34.11 give 3,840 m as the Titanic depth (dive-log figure). Never 3,880. | – |
| TITAN'S DIVE LOG, USCG MBI REPORT · DIVE 88: NTSB MIR-25-36 · DEPTHS TO SCALE | PASS | C27, C106, C17 (Table 6 / App. C). | – |
| THE USUAL DEEP HULL: A SPHERE | PASS | C75, ROI 4.4.7.1 PDF p. 62: "deviated from the traditional spherical configuration". | – |
| CARBON FIBRE CYLINDER | PASS | C03. | – |
| 5 × ~1 IN = 5 IN WALL | PASS | MIR PDF p. 28: "five co-bonded, nominally 1-inch-thick" layers ... "until the cylinder was (nominally) 5 inches thick"; ROI p. 13 "5 inches of carbon fiber". Optional: `5 × ~1 IN = ~5 IN WALL` (the trimmed ends measured 5.166-5.175 in, MIR p. 43). | optional `5 × ~1 IN = ~5 IN WALL` |
| TITAN'S CUT-OFF END, IN SECTION · NTSB MATERIALS LAB REPORT 24-012 | FIX | The image comes from ROI fig. 255 (PDF p. 276): "TITAN cut off ends cross section ... Source: NTSB Materials Laboratory Factual Report" (no number). Report 24-012 is the wreckage/strain report; its figure list (figs. 1-40) has no cut-off-end section. The "24-012" attribution is unsupported. | `TITAN'S CUT-OFF END, IN SECTION · NTSB MATERIALS LAB, IN USCG ROI FIG. 255` |
| CYLINDER AND TITANIUM END SEGMENTS · NTSB MIR-25-36 FIG. 2 · NTSB DRAWING | FIX (licence) | MIR PDF p. 11, fig. 2 caption ends "(Background source: OceanGate)". The drawing is an OceanGate image annotated by the NTSB, so it is not a clean US federal work; the manifest claims "US government work". Channel rule: US federal works only. | Replace with our own drawing from the record, or keep and credit `... · NTSB MIR-25-36 FIG. 2 (BACKGROUND: OCEANGATE)` and log the third-party status in `media_manifest.csv` for the owner's decision |
| ILLUSTRATION · HULL FROM NTSB MIR-25-36, USCG ROI | PASS | Honesty label present. | – |
| ACCORDING TO A FORMER DIRECTOR OF MARINE OPERATIONS | PASS | MIR PDF p. 25 (printed 17), verbatim (C76). | – |
| THE CEO'S REASONS, AS HE DESCRIBED THEM · NTSB MIR-25-36 P. 25 | FIX (fairness + page) | (1) "he" reads as the CEO describing his own reasons. The record is second-hand: "According to a former OceanGate director of marine operations, the CEO chose carbon fiber because he believed..."; the second sentence ("the CEO believed it would require less buoyancy...") is the NTSB's report of his beliefs, with no source of his own words. Saying the CEO "described them" attributes statements to a dead man that the record does not hold. (2) P. 25 is the PDF page; the film's convention is printed pages (printed p. 17; cf. "P. 51" for PDF p. 59). | `THE CEO'S REASONS, AS THE NTSB REPORTS THEM · MIR-25-36 P. 17` |
| CARBON-FIBRE MATERIAL LAID BY MACHINE · REFERENCE, NOT TITAN / AUTOMATED COMPOSITE MANUFACTURING · REFERENCE, NOT TITAN · TECNALIA / YOUTUBE · CC BY | PASS | Manifest rows 5-6 (CC BY). Honesty label present. | – |
| ILLUSTRATION · NOT TO SCALE (gauge chart) / NTSB MIR-25-36 · USCG MBI · TSB M23A0169 | PASS | – | – |
| 6,000 × 2.25 / × 1.25: OUR ARITHMETIC (context) | PASS | C05, C121; arithmetic labelled ours. | – |
| NTSB · ANALYSIS ASSUMED A PERFECT HULL | PASS | C78, MIR p. 63: "assumed perfect geometry and fiber orientation, rather than the actual ... pressure vessel built by OceanGate". | optional `NTSB · ANALYSIS ASSUMED PERFECT GEOMETRY` |
| ONE-THIRD SCALE MODELS | FIX (minor) | MIR PDF p. 27: the first is "a one-third scale model"; the second is only "a second sub-scale model". Plural "one-third" is not in the record for both. | `SCALE MODELS` |
| MODELS: 2,800 M · 2,500 M | PASS | C46/C117, MIR p. 27: imploded at 2,800 m; test stopped at 2,500 m "when ... it was going to fail". Optional clarity, so red 2,500 is not read as a second implosion. | optional `MODELS: IMPLODED 2,800 M · STOPPED 2,500 M` |
| TSB · NOT BUILT, TO SAVE MONEY | FIX (clarity) | C122, TSB p. 49: "a multi-cure model was not built in order to save money". Without its object the chip can read as "Titan was not built (properly) to save money". | `TSB: SCALE MODEL NOT BUILT, TO SAVE MONEY` |
| TITAN'S FINAL HULL AT THE DEEP OCEAN TEST FACILITY · 25 FEB 2021 · USCG ROI FIG. 149 | FIX (licence) | Caption and date right (ROI PDF p. 184: "Final TITAN hull at the DOTF in Bethesda, Maryland on February 25, 2021. Source: DOTF"). But the source is the DOTF, not the USCG, and MIR PDF p. 26 says the facility was "then operated by Northrup Grumman" (2019). The manifest's "U.S. Navy" and "US government work" are not supported by any record. A contractor's photo is not a federal work. | Confirm who operated DOTF in Feb 2021 and who took the photo; until then credit `PHOTO: DOTF · IN USCG ROI FIG. 149` and mark the licence as unverified in the manifest (owner's call), or drop the photo |
| DOTF LOGBOOK · 01 MAR 2021 · ARROW ADDED BY THE MBI · USCG ROI FIG. 151 | FIX (licence) | Content right (ROI PDF p. 185: "DOTF Logbook for TITAN on March 1, 2021 ... red arrow added by MBI ... 6,154 psi ... Source: DOTF"). Same licence issue as fig. 149: third-party (DOTF) document. Low copyright risk for a table of times and pressures, but it is not a federal work as the manifest says. | Same credit fix: `DOTF LOGBOOK, 01 MAR 2021 · ARROW: MBI · USCG ROI FIG. 151 · SOURCE: DOTF`; fix manifest licence field |
| DOTF LOGBOOK · 02–03 MAR 2021 · ARROWS ADDED BY THE MBI · USCG ROI FIG. 152 | FIX (licence) | Content right (ROI p. 185, 5,628 psi, "Source: DOTF"). Same licence issue. | as above |
| 4,200 M · PLANNED, 3 OF 4 DAYS → REACHED ONCE | PASS | C56, ROI 4.28.1 p. 183: Day 1 to 3,000 and 4,200 m, Days 2 and 3 to 4,200 m (our count, matches the VO); 4,200 m reached only on 01 MAR (figs. 150-152). | – |
| 01 MAR 2021 · 20 MIN | PASS | C06, ROI p. 184: "held at that maximum pressure for one 20-minute cycle". | – |
| LIMIT: A TITANIUM DOME | PASS | C57/C45; sits on s44, which voices the attribution ("according to analysis done for the company"). | – |
| 3,840 M: 4 H, TWICE | PASS | C07, ROI p. 185: 02 and 03 MAR, "one 240-minute cycle" each. | – |
| THE HULL'S OWN LIMIT: NEVER MEASURED | PASS | C47, MIR p. 63: "never tested a co-bonded composite pressure hull to failure". | – |
| PILOT · LIVE READINGS / FULL DATA · AFTER THE DIVE | PASS | C80. | – |
| ANALYSED: THE DIVE / AT THE SURFACE / IN STORAGE | PASS | C32, MIR p. 64. | – |
| ALERT THRESHOLD: SET ON EARLIER HULLS AND MODELS · NTSB / ALERT THRESHOLD (ILLUSTRATIVE VALUES) | PASS | C79, MIR p. 31. | – |
| ILLUSTRATION · SENSOR COUNT: NTSB MIR-25-36 · POSITIONS ILLUSTRATIVE | PASS | C36. | – |
| The Boardroom / HULL 1 / EXHIBIT | PASS | – | – |
| DIRECTOR OF MARINE OPERATIONS | PASS | C23. | – |
| Q. = MR. RUSH | PASS | C116: CG-100 scan p. 4 "BY MR. RUSH:". | – |
| ● RECORDED BY THE CEO | PASS (row missing) | MIR PDF p. 48 (printed 40): "a subsequent conversation ... on January 19, 2018, which the OceanGate CEO recorded". No `claims.csv` row carries "the CEO recorded" (C116 says only "the recorded meeting"); the VO (s65) relies on it too. | Add the MIR p. 48 quote to C116 or a new row so `claims_check.py` covers it |
| THE LETTER OF MARCH 2018 / MARCH 2018 | PASS | C60. | – |
| THE SAME FAILURE MODE, FOUND IN HULL 2 · NTSB | FIX (attribution) | The NTSB found delaminations in hull 2 (C104) but never links them to the 2018 report or calls it "the same failure mode"; that link is ours (VO s73 says it as ours). The "· NTSB" tag attributes our link to the NTSB. | `DELAMINATION: FOUND IN HULL 2 BY THE NTSB` |
| DELAMINATION IN A TRIMMED END OF THE FIRST HULL · NTSB MIR-25-36 FIG. 18 | FIX (minor) | MIR PDF p. 45, fig. 18: "From left to right: ... trimmed end piece of first full-scale Titan pressure vessel, and wrinkle and delamination in trimmed end piece of one-third scale model". The Photo starts on the full figure (from w 1950) before cropping to the left half, so for the first frames the scale-model piece is on screen under a "first hull" caption. | Start the crop on the left half (`from={{x:0,y:0,w:1000,h:627}}`), or caption `LEFT: FIRST HULL · RIGHT: SCALE MODEL` while both show |
| THE FIRST HULL / HULL 1 IN STORAGE · 29 MAY 2019 · USCG · DVIDS | **FAIL** (date) | DVIDS 9057367 caption: "A section of the first Titan submersible's carbon fiber hull sits in storage at OceanGate's facility in Everett, Wash., after a crack was discovered and ground down ... The hull was tested and retired from service in October 2019 following the discovery of the crack on May 29, 2019. (U.S. Coast Guard photo)". DVIDS's "Date Taken 05.29.2019" is the crack-discovery date: the photo shows the hull after grinding and retirement and was taken by the USCG (posted 22 MAY 2025; the MBI photographed it at Everett on 02 AUG 2023, ROI fig. 132). On screen "29 MAY 2019" dates the photo wrongly. Licence: a USCG photo, PD, correct. | `date=""`, `what="THE FIRST HULL, IN STORAGE · PHOTOGRAPHED BY THE COAST GUARD"` (or `"HULL 1 IN STORAGE, EVERETT · LATER PHOTO"`) |
| THE FIRST HULL, CRACK GROUND OUT (CIRCLE: MBI) · USCG ROI FIG. 132 | PASS | ROI PDF p. 163: "Photo of the first TITAN hull taken by the MBI on August 2, 2023 ... crack was ground out ... yellow circle added by the MBI. Source: USCG". | – |
| 2019 · CRACK FOUND | PASS | C61 (USCG 4.22.17: 29 MAY 2019). | – |
| FIRST DIRECTOR OF ENGINEERING · HIS TESTIMONY / THE COMPANY'S LETTER TO HIM | PASS | C61; both sides shown. | – |
| HULL 2 · 2021–23 / LOST 18 JUN 2023 | PASS | C77, C01. | – |
| ILLUSTRATION · DIVE NUMBERS: NTSB MIR-25-36 | PASS | – | – |
| DIVE 80 | PASS | C08. | – |
| EXACT DEPTH: RECORDS DIFFER · ALL: NEAR THE SURFACE | PASS | C42 (four versions, all near/at the surface). | – |
| STRAIN · GAUGE GROUP 4 | PASS | C82. | – |
| TITAN · DEPTH / ILLUSTRATIVE ASCENT | PASS | Honesty label present. | – |
| A CONTRACTOR'S TESTIMONY / BROOKS (record-page titles) | PASS | C66 (attributed), C110. | – |
| MARINE BOARD HEARING · 23 SEP 2024 · U.S. COAST GUARD · PUBLIC DOMAIN | PASS | Manifest: USCG hearing video, Brooks's day 23 SEP. | – |
| THE CEO'S THEORY, AS BROOKS TESTIFIED · CG 112 P. 785 | PASS | Scan PDF p. 786 = printed "Page 785 of 1651": "Did you agree with Mr. Rush's assessment that it was a frame shift that probably caused the loud bang? A. ... his explanation sounded plausible ... he was probably correct". Fair wording: it is Rush's theory as Brooks recounted it under oath. The mechanism itself (compresses / frame does not / sprang back) is on the earlier pages (C110, pp. 769-770 old numbering, printed ~770-771). | optional `... · CG 112 PP. 770, 785` once the earlier page is read by eye |
| ILLUSTRATION OF A THEORY · MOVEMENT EXAGGERATED | PASS | Honesty label present. | – |
| BROOKS, UNDER OATH · CG 112 P. 801 | PASS | Scan PDF p. 802 = printed 801: "I think it was under the 5,000 threshold or maybe just barely over it". | – |
| CHANNEL 4 · BROOKS, CG 112 P. 802 | FIX | "Channel 4" and the threshold answer are on printed p. 801 (scan PDF p. 802, ll. 17-25). P. 802 is the PDF page; the film's convention (and the chip beside it) uses printed 801. | `CHANNEL 4 · BROOKS, CG 112 P. 801` |
| ONE ACOUSTIC CHANNEL · LATER DIVES / THEIR THRESHOLD · 5,000 (ILLUSTRATIVE VALUES) | PASS | C65; no unit given, never compared with 25,687 mV. | – |
| NTSB: NO SIGNAL OF THE KIND THAT TRIGGERS AN ALERT | PASS | C31, MIR p. 65. | – |
| ILLUSTRATION · CHANNEL POSITION ILLUSTRATIVE | PASS | – | – |
| GAUGE GROUP 4 HOOP · NTSB MATERIALS LAB 24-012, FIGS. 29–31, P. 7 | PASS | 24-012 figs. 29-31 (depth vs gauge output, group 4 hoop); slopes p. 7. | – |
| FINDINGS (ROI record page) / OUR READING OF THE RECORD · NOT A FINDING | PASS | C108; our reading labelled. | – |
| DIVES 75, 80, 81 AGAINST TIME · NTSB 24-012, FIGS. 29–31 (NTSB DATA · REDRAWN) | **FAIL** | 24-012 figs. 29-31 are "dive depth as a function of strain gage output", not time plots, and only dive 80 has a time plot in the report (fig. 26). Our panels lay the digitised depth-figure points out in recorded order (replot.tsx: x = point index), not against clock time. "AGAINST TIME" credited to the NTSB says the NTSB plotted this; it did not. The in-chart axis line ("STRAIN, POINT BY POINT, AS RECORDED THROUGH EACH DIVE") is honest; the strip is not. | `DIVES 75, 80, 81 IN RECORDED ORDER · OUR RE-PLOT OF NTSB 24-012 FIGS. 29–31` with label `RECONSTRUCTION` |
| NOT A FAULTY GAUGE · NTSB / DEEP END: THE CURVES MATCH / FOOTNOTE 42 | PASS | C48, MIR p. 59 fn 42. | – |
| DIVES 80 AND 81, WHOLE DIVE · NTSB MATERIALS LAB 24-012, FIG. 30 | PASS | 24-012 fig. 30 caption. | – |
| TSB CANADA · M23A0169 / EACH DIVE AGAINST ITSELF | PASS | C123. | – |
| ONE GAUGE · CENTRE TOP · 10–300 M | PASS | C123/C131, TSB pp. 38-39: "The strain gauge located on the centre top portion of the carbon fibre cylinder"; 10-300 m band per C123. (TSB PDF not in `assets/records/`; checked against the claims row only.) | – |
| +98% VS THE WHOLE DIVE · TSB | PASS | C123: "the strain slope was found to be 98% greater than the slope for the entire dive profile" (19 JUL 2022). Counter lands on 98, never 100; VO says "nearly double". | – |
| 05 AUG 2021 · A SMALLER BEND | PASS | C123: "21% greater" on 05 AUG 2021. "Bend" is our gloss, fair. | – |
| TSB: CAUSE NOT DETERMINED | FIX | TSB: "it cannot be determined whether this event precipitated the non-linear readings on 19 July 2022". Alone on screen, "CAUSE NOT DETERMINED" reads as the TSB not finding the cause of the accident, which it did (finding 4, C124). | `TSB: LINK TO THE BANG NOT DETERMINED` |
| ILLUSTRATION · AMBER: TSB'S GAUGE · CYAN: NTSB'S GAUGE GROUP 4 | PASS | C131 (two locations; our reading, drawn as illustration). | – |
| FIGURE 17 · LAYERS 1 AND 2 / LAYERS 1 AND 2, WITH VOIDS IN THE ADHESIVE · NTSB MIR-25-36 FIG. 17 | PASS | MIR PDF p. 44 caption: "Cross section of layers 1 and 2 ... voids in the adhesive between layers 1 and 2". NTSB photo. | – |
| THE CYLINDER'S END · AS THE NTSB DESCRIBED IT, MIR-25-36 P. 51 | PASS | MIR PDF p. 59 = printed 51: "The intersection of a delamination with the end of the cylinder would have allowed the separated layers to initially respond differently ... at shallow depths". | – |
| LAYER 1 SEPARATED: IT MOVES ON ITS OWN / DEEPER: LIKE THE INTACT HULL | PASS | C85 (same page); drawn under ILLUSTRATION · NOT TO SCALE. | – |
| JULY 2022 · 3 MORE DIVES / 81 · 82: THE TITANIC'S DEPTH | PASS | C15. | – |
| NTSB: FIRST DAMAGE NOT ENOUGH TO IMPLODE | PASS | C86, MIR pp. 59-60: "the initial delamination(s) ... were not sufficient to cause implosion". | – |
| ILLUSTRATION · AMBER: THE LAYER BONDS | PASS | – | – |
| FINDING · CONCLUSION (MIR record page) | PASS | C12. | – |
| A PARKING LOT · MARINE BASE, ST. JOHN'S / UNCOVERED / UNCOVERED UNTIL | PASS | C88, C19. | – |
| PLAN: BACK TO EVERETT · INSERT OUT · LOOK FOR CRACKS | FIX (minor) | C113, Brooks: "what we really wanted to do was bring the sub back ... pull the insert ... see if there were any cracks"; "we were told ... the cost ... was prohibitive". It was a wish that was turned down, not a plan; "PLAN" overstates it and hides the refusal. | `WANTED: BACK TO EVERETT · INSERT OUT · LOOK FOR CRACKS` |
| SPRING 2023 · THE PLATFORM, AT SEA AND IN PORT | PASS | C43; 24-012 fig. 40c: "aft end of LARS tipped downward in St. John's" (in port). | – |
| TAIL CONE LOST | PASS | ROI fig. 240 (PDF p. 254): "missing tail cone due to the May 24th incident"; 24-012 fig. 40a. | – |
| ILLUSTRATION · UPSETS: USCG ROI 4.38 · ANGLES ILLUSTRATIVE | PASS | – | – |
| 2.6 · OVERSIGHT (MIR record-page title) | FIX (minor) | MIR section 2.6 is titled "OceanGate Submersible Operations and Industry Regulations" (TOC, mir.txt l. 78). A section number with an invented title reads as the report's heading. | `2.6 · OPERATIONS AND REGULATIONS` (or drop the number) |
| THE MARINE BOARD'S PUBLIC HEARING · SEP 2024 · U.S. COAST GUARD · DVIDS | PASS | DVIDS 8646773: "(U.S. Coast Guard photo by Petty Officer 2nd Class Kate Kilroy)", 16 SEP 2024. | – |
| THE COAST GUARD'S MARINE BOARD · SEP 2024 · U.S. COAST GUARD · DVIDS | PASS | DVIDS 8650993, USCG photo, 19 SEP 2024. Note: the caption says the board is hearing mission specialist Renata Rojas; if she is identifiable in the crop, she is a public witness at a public hearing, but keep the crop on the board. | – |
| NTSB: NEVER UPDATED TO MATCH / GUIDANCE NEVER UPDATED (to 2025) | PASS | C69, "has not been updated since its release", as of the Oct 2025 report (VO says so). | – |
| COAST GUARD: NO SPECIFIC DESIGN OR BUILD STANDARDS · NTSB | PASS | C69. | – |
| NTSB: NO RESCUE STANDING BY THAT COULD REACH IT | PASS | C70. | – |
| 2023 · DIVES / ≤ 10 M | PASS | C17 (8-10 m). | – |
| AFTER DIVE 82: DAMAGED AGAIN / NTSB: OF UNKNOWN ORIGIN | PASS | C20, NTSB p. 7. | – |
| USCG BOARD: MADE WORSE BY THE WINTER OUTDOORS AND THE TOWING | FIX | ROI 5.7, PDF p. 291: "The pre-existing delamination caused during Dive 80 was **likely** exacerbated by cyclic thermal changes ... outdoor fall and winter storage ... combined with continual impact damage from towing ... and the slamming effects ... during Dive 87." The chip drops the board's "likely" (a no-false-absolutes issue; the VO s204 keeps it). | `USCG BOARD: LIKELY MADE WORSE BY THE WINTER OUTDOORS AND THE TOWING` |
| NTSB: TWO EVENTS · DIVE 80 · AFTER DIVE 82 | PASS | C10, C20. | – |
| TSB: PROGRESSIVE · DAMAGE EACH DIVE | FIX (minor) | C124, TSB finding 4: "**likely** led the cylinder to fail progressively". Same dropped hedge. | `TSB: LIKELY PROGRESSIVE · DAMAGE EACH DIVE` |
| ILLUSTRATION · 2023 DIVES: NTSB MIR-25-36 TABLE 6 | PASS | MIR PDF p. 37, Table 6. | – |
| DIVE 88 · FIRST DEEP DIVE IN 11 MONTHS | PASS | C17 (dive log): previous deep dive 83, 23 JUL 2022 (2,954 m) → 18 JUN 2023 is 10 months 26 days; "11 months" is a fair rounding and matches the VO. | – |
| THE NORTH ATLANTIC · REFERENCE FOOTAGE, NOT THE DAY (act45) | PASS | Honesty label present (credit typo: see SAGA4TSMAN row). | – |
| DIVE 80'S DAMAGE: THE FORWARD END · NTSB / WHERE GAUGE GROUP 4 SAT | PASS | C87, MIR p. 59. | – |
| ROV VIDEO · TAIL CONE / FORWARD DEBRIS FIELD · USCG MBI · DVIDS (· PUBLIC DOMAIN) | FIX (licence; outside the v8 list but a picture credit) | Manifest: DVIDS 936977 / 937093 credited "**Courtesy Video** / U.S. Coast Guard Headquarters"; footage_review.md notes a Pelagic ROV overlay; ROI fig. 41 credits the ROV image "Source: Pelagic Research Services". "Courtesy" on DVIDS marks third-party material released by the USCG; DVIDS's default PD tag does not make a contractor's footage a federal work. | Confirm the ROV operator and release terms (the salvage ran under US Navy SUPSALV; if Navy-contracted work-for-hire, record that with a source); until then credit `ROV VIDEO · RELEASED BY THE USCG MBI · DVIDS` without "PUBLIC DOMAIN" and flag in the manifest for the owner |
| NTSB · USCG BOARD · TSB: THE FAILURE WAS IN THE HULL | PASS | C25, C95, C124. | – |
| RECOVERED PIECES OF TITAN'S CARBON FIBRE HULL · NTSB MIR-25-36 FIG. 13 | PASS | MIR PDF p. 41, fig. 13: "Recovered carbon fiber composite pressure hull outer surface and inner surface". No third-party credit. | – |
| THE WINDOW · 5.5 · THE ACRYLIC WINDOW | PASS | C94 (ROI 5.5 "Use of an Un-tested / Un-certified Acrylic Window"). | – |
| ST. JOHN'S · REFERENCE FOOTAGE · ALICK TSUI / YOUTUBE · CC BY | PASS | Manifest rows 9-11. | – |
| NO OVERSIGHT FROM TRANSPORT CANADA | PASS | C125. | – |
| 21 JUN 2023 · COAST GUARD AIR CREW, SEARCHING · U.S. COAST GUARD · DVIDS | PASS | DVIDS 7875448: "A Coast Guard Air Station Elizabeth City ... HC-130 Hercules airplane flies over the French research vessel, L'Atalante ... during the search for the 21-foot submersible, Titan, June 21, 2023" (PO1 Amber Howie, USCG). | – |
| USCG BOARD: THE COMPANY'S OWN COMMUNICATIONS PLAN / FIRST CALL TO RESCUERS: 7+ HOURS | PASS | C71, ROI 5.21 p. 324: "seven-hour initial notification delay dictated by OceanGate's communications plan"; every clock count is over seven hours. | – |
| NO DEEP-WATER RESCUE VEHICLE STANDING BY | PASS | ROI 4.38.8.1 p. 247: "no contracts in place to have emergency deep-sea rescue resources on standby"; 5.21 p. 324: "OceanGate's decision not to confirm any backup deepwater capable assets" and the lack of "an ROV or a secondary submersible". Sits beside the board chip on s233. | – |
| TITAN'S FORWARD SEGMENT, RECOVERED · 05 JUL 2023 · FBI · USCG ROI FIG. 159 | PASS | ROI PDF p. 189: "pictured post-accident on July 5, 2023 ... Source: FBI ERT". FBI = federal, PD. | – |
| OCEANGATE · OPERATIONS SUSPENDED JUL 2023 | PASS | C120 (company's own statement via AP, allowed by PLAYBOOK §9.2; status "claim" is right for a company statement). | – |
| AUG 2025 · COMPANY SPOKESPERSON: WOUND DOWN, COOPERATING, CONDOLENCES | PASS | C120, AP via KUOW 05 AUG 2025: "the company has been wound down and was fully cooperating with the investigation, and offered condolences to the families". Attributed, dated, the company's side given. | – |
| RECOMMENDATIONS · 4.1 · TO THE US COAST GUARD | PASS | C72, MIR p. 75. | – |
| USCG: AGREED TO M-25-014 | PASS | C96: "I concur with this recommendation" (M-25-014, revise NVIC 05-93); partial concurrence on -012, -013, -015. | – |
| OPEN · OCT 2026 | FIX (fairness, minor) | C96: NTSB letter 22 OCT 2026 classifies all four "OPEN-- ACCEPTABLE RESPONSE". Amber "OPEN" alone can read as Coast Guard inaction; the NTSB's own status says the response is acceptable. The regulator gets the same fairness as the company. Re-check CAROL on upload day (C96 note). | `OPEN · ACCEPTABLE RESPONSE · OCT 2026` (or `OPEN, RESPONSE ACCEPTABLE · NTSB, OCT 2026`) |
| ELEVEN MONTHS LATER · 18 JUN 2023 | PASS | 15 JUL 2022 → 18 JUN 2023 = 11 months 3 days. | – |
| STRAIN: TRACED, NTSB 24-012 FIG. 26 · HULL: ILLUSTRATION | PASS | 24-012 fig. 26d (dive 80 group 4 strain vs time, OceanGate's plot, traced). | – |

## Fairness and defamation read (US/UK)

- No label states or implies criminal guilt; the referral section is shown with its own "will not occur" line (C39).
- Motive and money: the only cost-motive chip is the TSB's scale-model finding (attributed); with the fix above it
  names the object. The board's "troubling prioritization" stays on the board's record page.
- Rush's beliefs: the "AS HE DESCRIBED THEM" line is the one place the screen puts words in the CEO's mouth that the
  record holds only second-hand; fix as above.
- Hedges: three chips drop the investigators' "likely" (USCG winter/towing, TSB progressive) or narrow a TSB caveat
  into a wider-sounding one (CAUSE NOT DETERMINED); fixed above.
- The regulator: "OPEN" without "ACCEPTABLE RESPONSE" is the one place the Coast Guard is treated less fairly than the
  record allows.

## Licence summary (US federal works only)

Clean: NTSB photos figs. 13, 17, 18 (no third-party credit); USCG photos figs. 37, 132; FBI fig. 159; DVIDS stills
9057367, 7875448, 8646773, 8650993 (all "U.S. Coast Guard photo"); NOAA 2004; USCG hearing video.
Not clean as logged: **MIR fig. 2** (background OceanGate), **ROI figs. 149, 151, 152** (Source: DOTF; facility
contractor-operated per MIR p. 26), **ROV videos** (DVIDS "Courtesy Video"; Pelagic credit in ROI fig. 41). The
manifest's "US government work" and "U.S. Navy" entries for these are unsupported and need correcting either way.


## Applied (18 NOV 2026, before the v8 render)
Both FAILs and all FIXes applied as suggested, with these licence calls: the NTSB cylinder drawing (fig. 2, background
credited to OceanGate) is removed; the DOTF photo and logbooks keep the report's own credit ("DOTF, IN USCG ROI FIG. …")
and are marked rights-unconfirmed in `media_manifest.csv` for the owner's decision; the ROV strips no longer claim
public domain ("RELEASED BY THE USCG MARINE BOARD · DVIDS") pending the release terms, also for the owner. C116 gains
the NTSB's "which the OceanGate CEO recorded". The bow is labelled ≈3,800 M everywhere.
