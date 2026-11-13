# Titan: the landscape (PLAYBOOK §3a step 2, 2026-11-13)

Records (local copies in `assets/titan/records/`, gitignored; originals on Drive `titan/records/`): NTSB **MIR-25-36**,
*Hull Failure and Implosion of Submersible Titan* (02 OCT 2025, case DCA23FM036); USCG **Report of the Marine Board of
Investigation** (04 AUG 2025, MISLE 7724663, 335 pp, official file, verified against our first reading copy page by
page); **CG 112**, MBI formal hearing and post-hearing transcripts (1,651 pp, sworn, Sept 2024); CG-082 pre-hearing
interviews (1,430 pp); CG-100 (scan, OCR pending). Claim ids refer to `../claims.csv`.

## 1. What everyone says

**The films** (our scan, `docs/research/2026-11-02_youtube_scan.csv`, views at scan time):
| Film | Channel | Views | Made from |
|---|---|---|---|
| Oceangate Submarine Disaster - What REALLY Happened | Two Bit da Vinci | 15.9M (Jun 2023) | News, days after; no report existed |
| OceanGate Is Worse Than You Thought | The Fool | 3.2M (May 2026) | The CEO's character and quotes |
| Fatal Flaws: The OceanGate Story | 7NEWS Australia | 3.4M (Jun 2024) | TV documentary, pre-report |
| OceanGate Wreck Shows Why Sub Wasn't Strong Enough | Scott Manley | 2.4M (Sep 2024) | The 2024 hearing evidence |
| NTSB's Report On OceanGate Titan | Scott Manley | 1.2M (Oct 2025) | The NTSB report, talking head |
| OceanGate Disaster: Minute by Minute | DocuReal | 1.1M (Apr 2026) | TV documentary (54 min) |
| OceanGate Titan Sub USCG FINAL Report | jeffostroff | 0.48M (Aug 2025) | The USCG report, talking head (49 min) |
| How OceanGate Titan Sub Realtime Hull Monitor FAILED! RTM | jeffostroff | 0.29M (Oct 2024) | The RTM data, pre-NTSB |

Demand is still live: two Titan films passed 1M views in 2026, and long ones hold (54–117 min films at 0.2–1.1M). No
film in the scan builds the hull's own data on screen from both final reports.

**What their viewers believe** (top comments by likes on six of these films, read 13 NOV 2026 through the API):
- "Crazy how the early warning system actually worked and was just ignored" (11,927 likes, Scott Manley 2024);
  "They kept talking about their acoustic monitoring system, but didn't pay any attention when it actually detected
  something" (8,344); "Real-time monitoring data doesn't work if you don't monitor the data" (3,278).
- "Let's dive again and see what happens" is already known and quoted (3,706).
- "Every time the titan passed a test, the hull became weaker" (4,919).
- "'Carbon fiber is better than titanium' Translation: 'carbon fiber costs less than titanium'" (5,125).
- "No one has died in submarines in years ... because of the regulations" (27,256).
- Repeat viewers exist: "Have I watched everything on YouTube involving this incident? Yes. Am I going to watch
  anything 'new' that is created? Also yes" (2,004).

**What the record says to each** (the film answers them, on the record):
- *"The warning system worked and was ignored":* more exact, and stronger. The monitor **recorded** the event (C08).
  But OceanGate read strain **against time**; the NTSB re-read it **against depth** and found the change (C30). The
  acoustic alert was tuned on earlier hulls built differently, so after dive 80 it "never produced the type of
  acoustic emission signal that would have triggered an alert" (C31). Three of eight acoustic channels were dead all
  2022 (C09). The engineering director saw "a shift in the level" on two of sixteen strain channels and, in his words,
  it seemed minor at the time (C34). No alarm sounded because none had been built that could sound for this hull.
- *"Let's dive again":* now sourced to sworn testimony, and more careful than the popular version: "I think the plan
  was at that time to 'well, let's dive again and see what happens'"; who decided: "Definitely Stockton" (C13, C33).
- *"Every test made it weaker":* the record supports a narrower version: damage on dive 80 (C10), further damage of
  unknown origin after dive 82 (C20); proof-test effects are a lead to check, not a claim.
- *"Carbon fibre because it was cheaper":* the record gives the CEO's stated reasons (compression strength, less
  buoyancy, smaller ships, more people; NTSB PDF p. 25), not cost. The film says his stated reasons and the
  investigators' finding that its limits were not established (C25).
- *"Regulations":* the NTSB's contributing factor: voluntary guidance and small-passenger-vessel rules "insufficient
  to ensure OceanGate adhered to established industry standards". Act V, with both reports' recommendations.

## 2. What the record says (the spine)
1. **The margin was thin from the start.** Design goal 6,000 m at a 2.25 factor (C05); the hull that dived was
   proof-tested to about 4,200 m, held 20 minutes, against 3,840 m dives (C06–C07).
2. **15 JUL 2022, dive 80:** a bang near the surface, heard inside and on the small boat; AE peak 25,687 mV and a
   strain jump at 3:26:45 p.m. (C08); an outside check only, the insert never removed (C14, C34); the decision to keep
   diving (C13, C33); dives 81 and 82 to 3,840 m (C15).
3. **The winter:** uncovered in a St. John's parking lot to 06 FEB 2023, 1.4°F to 84.2°F (C19); a $1,750 cover quote
   reportedly unanswered (C18).
4. **2023:** the engineering director leaves (C35); the post left vacant (C21, the board's reading); four shallow dives
   (C17); dive 88, 18 JUN 2023, the first 2023 dive below 33 ft, implosion at about 3,363 m (C26, C37), shallower than
   the depth it had reached 13 times (C27).
5. **The findings:** NTSB probable cause, inadequate engineering process (C25); the USCG board, "preventable" (C02);
   its referral line with its own caveat (C39).

## 3. Our edge (one sentence)
**Every big Titan film tells the CEO's story; we show the hull's: its own dive 80 data, re-plotted on screen the way
the NTSB did it, the 360-metre tested margin it was built on, and the dated decisions that kept it diving, all from
the two final reports and the sworn testimony.**

## 4. Exhibits and licences (first pass)
| Exhibit | Where | Licence |
|---|---|---|
| NTSB report figures (strain vs depth plots, wreckage photos, parking-lot overhead) | MIR-25-36, docket DCA23FM036 | US federal work; check each figure's credited source (some "Source: OceanGate", some third parties) |
| USCG report figures (DOTF logbook, AE plots, storage photos, inspection report) | MBI ROI | US federal work; many figures credited OceanGate, DOTF, A Harvey: rights check each (§11) |
| Hearing transcripts | CG 112 | US federal record: quote verbatim |
| The dive 80 data itself | Both reports' tables and text | Facts: redrawn as RECONSTRUCTION from the record's numbers |
| Titan photos | OceanGate press images | Not licensed for us: avoid; use a line silhouette labelled ILLUSTRATION |
| USCG hearing video (Sept 2024) | USCG public hearing | US federal; find the official stream and check its terms before use |

## 5. The human through-line
**Phil Brooks**, OceanGate's engineering director from 2021 (his testimony, CG 112): present for dive 80, the
decision to continue (C13, C33), and his own reason for leaving in early 2023 (C35). Prologue: the **Director of
Marine Operations**' 26-item inspection report of 18 JAN 2018 (C23). Both testified in public; words only from the
transcripts, verbatim.

## 6. Fairness flags (carried into the treatment)
- Mr. Rush died in the implosion. The USCG board's statements about him are said as the board's findings, never as
  ours; its criminal-referral line always with its caveat that no determination will be made (C39).
- Living former employees and contractors: role only, their testimony only, no characterisation beyond the record.
- The four who died with him: never pictured; no "passengers' choices" commentary. The film's subject is the hull
  and the decisions.
- OceanGate's status and any lawsuits: check, and say pending as pending.
