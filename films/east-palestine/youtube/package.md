# East Palestine: YouTube package (PLAYBOOK §13.7)

Cut: `east-palestine_master_4k.mp4` (Drive `east-palestine/renders/`), 3840×2160, 60 fps, 18:29.2 (66,549 frames),
rendered 07 NOV 2026 on 19 runners (run 42348084191) from the owner-approved r3 cut. Mix −14.0 LUFS.
Chapters below are from `vo/timing.json`, the same timing the master is rendered on (sentence starts, rounded down).

## Titles: 32 written, three kept (each word on a confirmed `claims.csv` row)
Three angles, one per Test & Compare pair. No question marks, no all-caps, no adjectives of ours; "not necessary" is
the NTSB's finding and attributed in the title (§13.2). The case name the viewer types, East Palestine, leads every one.

| # | Title | The question it opens | Thumbnail | Record |
|---|---|---|---|---|
| 1 (recommended) | East Palestine's Alarm Line Came From a Billing Rule | how can a safety line come from billing? (Act III answers, with the hearing clip) | A | C07, C25, C26, C28, C69, C73 (fairness: NS's own basis said in the film) |
| 2 | Why the NTSB Says East Palestine's Vent and Burn Wasn't Necessary | then why did it happen? (Act IV) | B | C37, C64, C65, C92 |
| 3 | East Palestine: 19 Miles Between the Last Two Detectors | what happened in those miles? (signature 1) | C | C05, C13, C16 |

```
East Palestine's Alarm Line Came From a Billing Rule
```

```
Why the NTSB Says East Palestine's Vent and Burn Wasn't Necessary
```

```
East Palestine: 19 Miles Between the Last Two Detectors
```

Search-safe fallback (if click-through is low after 7 days):

```
East Palestine Derailment: What the NTSB Final Report Found
```

<details><summary>All 32 (the long list the three were cut from)</summary>

Billing line: East Palestine's Alarm Line Came From a Billing Rule · The Billing Rule Behind the East Palestine Alarm ·
East Palestine: The Stop Line Was Written for Billing · Norfolk Southern's 170° Line: Where It Came From ·
East Palestine: The Detector Read 103°. The Stop Line Was 170°. · East Palestine: A Billing Rule Set the Alarm Line ·
"Correct.": The East Palestine Hearing on the 170° Line · Why East Palestine's Train Didn't Stop at Salem ·
East Palestine: The Wheel Was on Fire. The Detector Read 103°. · Norfolk Southern 32N: The Alert That Went to a Help Desk ·
East Palestine: The Alert Went to a Help Desk, Not the Crew · East Palestine: Fire on Camera, 103° on the Detector.
The gap: East Palestine: 19 Miles Between the Last Two Detectors · Norfolk Southern's Last 19 Miles Before East Palestine ·
East Palestine: 19 Miles With No Detector Reading · East Palestine: From Normal Reading to Broken Axle in 30 Miles ·
The Last 19 Miles of Norfolk Southern 32N · East Palestine: 38°, 103°, 253°.
The burn: Why the NTSB Says East Palestine's Vent and Burn Wasn't Necessary · East Palestine: NTSB Finds the Vent and
Burn Wasn't Necessary · East Palestine's Vent and Burn: 13 Minutes to Decide · The Number Behind the East Palestine Vent
and Burn · East Palestine: The 153° Number Missing From the Guidance · East Palestine's Vent and Burn: The NTSB's Findings ·
East Palestine: Two Numbers That Decided a Town's Week · East Palestine: Two Numbers, One Written for Billing.
Search-safe: East Palestine Derailment: What the NTSB Final Report Found · East Palestine Derailment, From the NTSB
Record · Norfolk Southern East Palestine: The NTSB Investigation · East Palestine Train Derailment: The Bearing, the
Billing Rule, the Burn · Ohio Train Derailment: The NTSB Final Report, Record by Record · East Palestine: What Caused the
Norfolk Southern Derailment.
</details>

## Thumbnails (Test & Compare: A, B, C)
All three stand on the film's opening exhibit, on screen 0:00–0:07: the NTSB's drone video of the wreck burning,
05 FEB 2023 (public domain), graded only, nothing added to the picture. Each was checked at 168 px wide (the
browse size; `make_thumbnails.py` writes the `*_168.png` check, not committed). Three different compositions, unlike the last film's (§14.2a).

| File | Reads | Pairs with |
|---|---|---|
| `thumb_a_billing_line.jpg` | **103°** in amber, the bar stopping well below a white **STOP 170°** line, beside the burning wreck | title 1 (**recommended**) |
| `thumb_b_not_necessary.jpg` | full-frame wreck; **NTSB ON THE BURN: NOT NECESSARY** (the board's finding, attributed) | title 2 |
| `thumb_c_19_miles.jpg` | **19 MILES**, the route line Salem → East Palestine dashed amber, *no detector between* | title 3 |

Rebuild: `ffmpeg -ss 5 -i public/films/east-palestine/footage/ntsb_drone_wreck_fire.mp4 -frames:v 1 OUT/drone.png`, then
`python3 films/east-palestine/youtube/make_thumbnails.py OUT/drone.png films/east-palestine/youtube`.

### Thumbnails D–F: the bearing set (owner's brief, 07 NOV 2026)
The owner's architecture: slate blueprint grid `#0D1117`; on the right a 3D cut-away of the tapered roller bearing on
the axle journal, rollers glowing thermal orange `#FF7A00`; a three-line readout; at most three words on the left.
Built in Remotion with three.js (`remotion/thumb/ThumbBearing.tsx`, compositions `EPThumbD/E/F`), labelled
**ILLUSTRATION** (a generic tapered roller bearing, not car 23's; the film's own bearing is after NTSB pp. 46–48).

| File | Headline | Readout (degrees above ambient, NTSB RIR-24-05) |
|---|---|---|
| `thumb_d_bearing_billing_rule.jpg` (**recommended of the three**, pairs with title 1) | EAST PALESTINE · **A BILLING RULE** | `103°F // DETECTED` (Salem, C05) · `170°F // BILLING RULE` (AAR Rule 36, C25–C26) · `253°F // CRITICAL ALARM` (East Palestine) |
| `thumb_e_bearing_written_for_billing.jpg` | **WRITTEN FOR BILLING** (the narration's words, s163) | same |
| `thumb_f_bearing_crew_not_told.jpg` | **CREW NOT TOLD** (C07: below the crew line, the crew did not know) | same |

Changed from the brief, because the record does not carry them: "170° WAS WRONG" (the NTSB found research is needed
to tell whether lower thresholds help; our verdict, not the record's); "NOT PHYSICS." (NS testified it based its lines
on its own experience as well as the industry's standards, C73); "253°F // FAILURE" (253° was the East Palestine
reading, the top of the scale; the axle separated after it); the title "The $40 Billing Rule That Caused East
Palestine" (no record gives $40; the NTSB's probable cause is the bearing's failure, and the film says no
investigator links the billing line to the cause). The paired title stays "East Palestine's Alarm Line Came From a
Billing Rule".
Note: the brief's exhibit is a drawing that first appears at 2:08 (as the film's flat schematic), not in 0:00–0:07
(§ Format: the thumbnail's exhibit by 0:07); the readings 103° and 170° are on screen and said by 0:35.
Rebuild: `node scripts/stills.mjs EPThumbD OUT 0 --scale 1` (and E, F), then resize 1920×1080 → 1280×720 (LANCZOS).

## Description

```
On 3 February 2023 a hot bearing detector in Salem, Ohio, read a burning wheel bearing on Norfolk Southern train 32N at 103°F above the air. The line that would have told the crew to stop was 170°F. About nineteen miles later, at East Palestine, the axle came apart.

This film reads the US National Transportation Safety Board (NTSB) final report and the public hearing record: how wayside detectors work, where the 170° line comes from (the industry's car repair billing rules, in the NTSB's words), what Norfolk Southern's 2019 plan and filings show and what the record does not link to this bearing, the last 19 miles, and why the NTSB found the vent and burn of five vinyl chloride tank cars was not necessary. Findings are the NTSB's; Norfolk Southern's responses are given; our own reading is said as ours.

0:00 Norfolk Southern 32N passes the Salem detector
2:08 How a hot bearing detector works
3:55 The detectors: 19 miles apart
4:55 The 170° line and the AAR billing rule
5:20 The NTSB hearing: "Correct."
8:13 Norfolk Southern's 2019 plan and the buybacks
8:58 Did cost cutting cause the derailment?
10:27 The last 19 miles: the bearing fails
11:21 Was it the grease?
12:04 The fire and the vinyl chloride cars
12:56 The vent and burn decision
14:31 NTSB: the burn was not necessary
15:53 The probable cause and what it cost
16:58 Could it happen again?

Footage: NTSB drone video and aerial photograph, 5 February 2023; U.S. EPA ASPECT aircraft photograph, 7 February 2023; NTSB investigative hearing, day 2, 23 June 2023, two excerpts shown unaltered (all US government works). The Salem surveillance camera frame is shown as a labelled RECONSTRUCTION; the real frame is Figure 5 of the NTSB report.

Sources
NTSB Railroad Investigation Report RIR-24-05, Norfolk Southern Railway Derailment and Hazardous Materials Release, East Palestine, Ohio (adopted 25 June 2024): https://www.ntsb.gov/investigations/AccidentReports/Reports/RIR2405%20CORRECTED.pdf
NTSB public docket RRD23MR005: https://data.ntsb.gov/Docket/?NTSBNumber=RRD23MR005
NTSB investigative hearing transcript, day 2, 23 June 2023 (DCA23HR001): https://data.ntsb.gov/Docket/Document/docBLOB?ID=16501748&FileExtension=pdf&FileName=DCA23HR001_NS%20Investigative%20Hearing.06-23-23.Day2-Rel.pdf
NTSB hearing video, day 2: https://www.youtube.com/watch?v=x-QON0Tel1Q
NTSB event recorder factual report and lead locomotive data (NS 4178): https://data.ntsb.gov/Docket/Document/docBLOB?ID=15618483&FileExtension=pdf&FileName=RRD23MR005_ER-Factual-Report_FINAL-Rel.pdf
Norfolk Southern operating rule, defective equipment detectors (docket): https://data.ntsb.gov/Docket/Document/docBLOB?ID=16604436&FileExtension=pdf&FileName=NS%20OPERATING%20RULE%20-%20DEFECTIVE%20EQUIPMENT%20DETECTORS-Rel.pdf
NTSB news release, special investigation into Norfolk Southern's organization and safety culture, March 2023: https://www.ntsb.gov/news/press-releases/Pages/NR20230323.aspx
NTSB safety recommendation R-24-003: https://data.ntsb.gov/carol-main-public/sr-details/R-24-003
Norfolk Southern Form 8-K, 11 February 2019 (the 2019 plan): https://www.sec.gov/Archives/edgar/data/702165/000070216519000015/nspr-0811191.htm
Norfolk Southern Form 10-K, FY2019: https://www.sec.gov/Archives/edgar/data/702165/000070216520000011/nsc-20191231.htm
Norfolk Southern Form 10-K, FY2022: https://www.sec.gov/Archives/edgar/data/702165/000070216523000010/nsc-20221231.htm
Norfolk Southern Form 10-K, FY2023: https://www.sec.gov/Archives/edgar/data/702165/000070216524000005/nsc-20231231.htm
Norfolk Southern Form 10-K, FY2025: https://www.sec.gov/Archives/edgar/data/702165/000162828026006268/nsc-20251231.htm
Norfolk Southern Form 10-Q, Q3 2026: https://www.sec.gov/Archives/edgar/data/702165/000162828026066836/nsc-20260930.htm
Norfolk Southern, 25 June 2024 (response to the NTSB's final recommendations): https://norfolksouthern.investorroom.com/2024-06-25-Norfolk-Southern-Safety-Enhancements-Align-with-NTSB-East-Palestine-Final-Recommendations
Congressional Research Service report R47911: https://www.congress.gov/crs_external_products/R/PDF/R47911/R47911.7.pdf
US District Court, N.D. Ohio, 4:23-cv-00242 (class settlement): https://www.govinfo.gov/content/pkg/USCOURTS-ohnd-4_23-cv-00242/pdf/USCOURTS-ohnd-4_23-cv-00242-22.pdf
US District Court, N.D. Ohio, 4:23-cv-00517 (the federal settlement and consent decree): https://www.govinfo.gov/content/pkg/USCOURTS-ohnd-4_23-cv-00517/pdf/USCOURTS-ohnd-4_23-cv-00517-4.pdf

Reconstructions and illustrations are labelled on screen; values not from a record are marked ILLUSTRATIVE.
Narrated using the studio's calibrated synthetic voice model (Marcus) for forensic clarity.
```

## Tags (Studio "Tags" field)

```
East Palestine derailment, Norfolk Southern derailment, East Palestine NTSB report, RIR-24-05, hot bearing detector, hot box detector, vent and burn, vinyl chloride, Ohio train derailment, NTSB investigation
```

## Pinned opening comment (§13.8)

```
The 170° line sits in the industry's car repair billing rules; the NTSB found it relates to billing, not directly to safety, and asked the FRA to set minimum requirements, alarm thresholds and detector spacing included. For those who work with wayside detectors: what should decide when a train stops, the reading, the rise between two detectors, or the distance between them?
```

## Captions
`east-palestine.en.srt` (301 cues), from the measured word times in `vo/timing.json`; both hearing clips captioned with
the official transcript's words on the clip audio (`remotion/data/clip_captions.json`), speaker marked
`[AAR witness]` / `[NTSB panel]`. Acronyms and figures written as text (NTSB, AAR, $1.1 billion, 9,309 feet); no
figure split across lines; at most 2 lines of 42 characters. Upload as English, "Upload file → With timing".
Rebuild: `python3 films/east-palestine/youtube/make_srt.py`.

## Studio checklist (the owner)
- [ ] Upload **Unlisted** first; wait **at least 3 hours** (4K processing, copyright checks, captions indexed).
- [ ] Altered or synthetic content: the owner's setting (the narration voice is synthetic).
- [ ] Category: Science & Technology (or Education). Made for kids: **No**. Language: English.
- [ ] Captions: upload the SRT. Chapters: from the description (first line 0:00).
- [ ] Test & Compare: thumbnails D, A, B with title 1 (or A, B, C; D–F are the bearing set) (Studio tests thumbnails under one title; titles 2 and 3 are
      the follow-up tests if A–C settle low).
- [ ] End screen: the outro card (18:15–18:29): a subscribe element, plus *The Four Missing Bolts* as the next video.
- [ ] Public in the default window: **Thursday 14:00–16:00 US Eastern (19:00–21:00 UK)** (§13.6).
- [ ] After public: pin the opening comment within 60 s. No self-views.
- [ ] Reads at 24 h, 7 d and 28 d (§13.6): CTR and average view duration per thumbnail; the challenger rule.
