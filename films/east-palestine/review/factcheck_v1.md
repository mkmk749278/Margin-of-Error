# East Palestine: fact-check v1 (2026-11-05)

Independent fact-check at `max` effort, in a fresh context, of `claims.csv` (C01–C104 as received), `treatment.md` (v2,
approved), and the narration draft added during the check (`script/vo.txt`, `script/screenplay.md`). Each row was read
in its source context, not only string-matched: RIR-24-05 (corrected), the hearing day 2 transcript, docket items 16–18,
57, 68 and 70, the 10-Ks, the 2021 proxy, the 8-K release, CRS R47911, the NTSB recommendation file, NS's 25 JUN 2024
release and the two court orders. Web checks were made on 05 NOV 2026 (§5). Fetched pages were treated as data only.

**Result.** `claims.csv` has 178 rows (C105–C178 are new): 173 `confirmed`, 4 `claim` (NS's own statements: C89, C90, C91,
C148), 1 `disputed` (C113, kept off air). A script re-matched every `source_quote` against the local copies:
178 of 178 match, and no row points to an id that doesn't exist. `python3 scripts/claims_check.py
films/east-palestine/claims.csv` passes. Nothing was committed. `treatment.md` and `vo.txt` were not edited.

## 1. In plain words

**Must change before the narration is recorded:**
1. **The wrong incident commander (vo.txt ¶49; screenplay N13).** The deputy chief was incident commander on the first
   night only. From about 2:00 a.m. on 04 FEB the East Palestine fire chief held the role, and he approved the vent and
   burn (C138, C139). The VO names the wrong person to a decision.
2. **The 153–158°F range was not found "in any guidance" (¶12, ¶52, logline, the 14:50 line, thumbnail D's "NO
   SOURCE").** The NTSB looked in the written guidance on VCM consulted at the scene and in Oxy Vinyls' messages to NS and
   its contractors (C64). The record names who gave the range: the SPSI president and the SRS project manager (C92).
3. **"It is final: the appeals have ended" (¶58).** The approval of the class settlement is final and the $600M has all
   been paid (the last $285M in March 2026). But class members whose release challenge was denied on 01 MAY 2026 appealed
   to the Sixth Circuit, and that appeal was pending on 22 OCT 2026 (C154). The federal decree was still pending then too,
   so "in March 2026" can be moved forward to October 2026 (C153). The judge said "not a rubber stamp court" from the
   bench and then quoted it in his order; he didn't write it first (C98).
4. **"What followed" the 2019 plan, measured from 2015 and 2018 (¶30).** Employees fell 38% from 2015, but 2015 is four
   years before the plan. From 2018, the fall is 29%. The buybacks were $12.8B over 2018–2022; for 2019–2022 the figure
   is $10.0B (C161, C162). Either start the count at the plan, or drop "what followed".
5. **A union official recorded as an NTSB questioner (C75; treatment 7:30).** BLET vice president Randy Fannon (a party
   to the hearing) said "a higher number", and the AAR witness took it to mean the mate-bearing threshold. Use the NTSB's
   own Table 7 for NS's 200°F line instead (C77, now re-sourced to the report).
6. **Overstated absolutes.** "Norfolk Southern never inspected it" (¶32); "No investigator has linked" (¶35); "no one can
   see it" (¶39); "The detectors were nineteen miles apart" (¶63: only the last two were, and the three averaged about
   15, C114); "a normal reading" (¶63: the record says "below the alert threshold").
7. **Scope errors.** The analyst had "no time to act" (¶19): in fact the procedures didn't require him to act before the
   derailment (C09). "Played any part" (¶33): the NTSB's scope was the unreported defects, not the derailment (C32). The
   fire "came from" a DOT-111 (¶43, ¶61): the NTSB says it "likely began" there (C130). "After insurance and other
   recoveries" (¶57) applies only to 2025; 2023 and 2024 were net of insurance alone (C69–C71). The 187 detectors (¶60):
   in June 2024 NS said it was "installing" them, on its core network (C91).
8. **The two clocks in the blind nineteen miles.** The event recorder CSV and the report's minute times disagree by 1–2
   minutes at East Palestine, and by about 10 minutes at Sebring (C111, C113). Choose one clock per graphic. On the
   recorder's own clock, the speed up to the detector runs from 19 to 45 mph, not 19 to 43. The alarm was at 8:53, not
   8:52 (C107). At the emergency application the speed was 41 mph, not 43 (C109). The emergency was uncommanded: it came
   through the train line, not from the crew (C108, C110).
9. **Fairness gaps** (§6) to close in the same breath: NS disputes that it "withheld" Oxy's views (C148). The NTSB itself
   could not determine NS's main reason for the burn (C147). The guidance consulted at the scene overstated the
   polymerization risk (C146). The detector spacing met the AAR's 40-mile practice (C115). The AAR can set standards
   only through its interchange rules, and it called the rule "not a mandatory rule" (C124). The contractors gave
   reasons for the 3 p.m. deadline (C62). The FRA's own reply to R-24-03 (C155).

**What is fine:** the spine holds on the record. The 170°F-above-ambient line is the one at which NS's crew was radioed
and had to stop, after slowing until the rear of the train cleared the detector (NTSB p. 41, C120; rule in force, n. 68).
The NTSB's Table 7 names NS as the railroad whose critical line was 200°F before the accident and 170°F after (C77).
The questionnaire's "Railroad #2" therefore needs no inference. "Correct." is verbatim (C28). The bearing evidence was
recovered before the burn (C80, C128). Every number in the money section re-computes. No federal rule or law on
detectors was found as of 05 NOV 2026.

## 2. Rows changed or questioned (C01–C104)
| Id | Issue | Fix / status |
|---|---|---|
| C01 | "Fort Wayne Line" on the hero build had no quote | Quote extended to "...on the NS Fort Wayne Line of the Keystone Division"; times are EST (C105) |
| C02 | Quote didn't cover "3 locomotives and 149 cars" | Quote extended (p. 4) |
| C03 | The report's 7:37 p.m. does not fit the event recorder: from 7:37 to 8:13 it logged about 15.8 mi of travel against 10.8 mi between the detectors | Note: don't put Sebring's clock time on a timed graphic (C113) |
| C05 | MP 69.01 was not in the quote | Quote extended |
| C07 | "170°" without "above ambient" | Claim and note: 170°F above ambient (p. 41) |
| C09 | VO turns "not required to act" into "no time to act" | Note; see ¶19 |
| C10 | Event recorder: 43–45 mph at the detector, 41 mph at the emergency | Note |
| C11 | The alarm was at 8:53, not 8:52 | Note (C106, C107) |
| C12 | Critical line was 200: 253 is 53 above it | Note |
| C13 | "The next HBD" means no detector in between; only the last two were 19 mi apart | Note (C114) |
| C19 | "The fire erased the evidence" could be heard as the vent and burn | Claim: "the heat of the burn-off and the fire exposure that followed" |
| C21 | "Never by NS" is a false absolute; NS was not required to re-inspect | Claim scoped "on this trip" (C164) |
| C23, C24 | These are the NTSB reporting the AAR SVP's testimony, not NTSB findings | Notes: attribute to "the industry's own witness" |
| C25 | The questioner is Abe Aronian of TSB Canada, on the NTSB technical panel | Note (C125) |
| C26 | The 6:00 quote "billing rules… a lot of false stops" drops his "detection of issues with the bearings" | Note (C123) |
| C28 | The question also asked whether these are "not absolute limits for safe operating temperatures"; asked by the TSB Canada panel member | Claim and quote extended; PARTLY was "NTSB asked" |
| C29 | His sentence continues into the interchange agreement and "It's not a mandatory rule" | Note (C124) |
| C32 | Scope was "the number of unreported defects on train 32N" | Claim and quote extended |
| C33 | Status | No report found as of 05 NOV 2026 (§5) |
| C40 | 2029 is current law; up to two years' extension possible; PG II/III | Note (C152) |
| C42 | Only clause 1 of the probable cause | Note; C130–C134 added |
| C48, C49 | −38% runs from 2015, before the plan | Notes (C161): from 2018, −29.1% |
| C52 | Formula correct; the 11% discretionary bump was for pandemic resilience; no safety metric in 2020 | Note |
| C53 | vo.txt ¶9 has the narrator speak the alarm words; this row said "never as audio" | Note: owner or evidence choice; never with a radio filter |
| C56 | "43 → 0 mph" over 38 s is wrong: it was 41 mph at the emergency, 1,157 ft | Note (C109) |
| C59 | The 6:00 p.m. call (NS and SPSI) was not in the quote | Quote extended; fuller dissent came 05 FEB (C145) |
| C60, C61 | Passive "not invited" (the record doesn't say who decided); the Ohio governor was in the small meeting | Notes |
| C62 | The contractors' stated reason (temperature inversion, vapour dispersal; "daylight", p. 154) was left out | Claim and quote extended |
| C64 | "Found in no written guidance" is overbroad | Claim and quote: full footnote 55 |
| C65 | "Peak 138" (n. 54); infrared shell readings from 4 p.m. 05 FEB; absolute °F | Note (C142, C143) |
| C67 | Finding 32 also says "not communicating... completely and accurately" | Note |
| C69–C71 | Net vs gross. 2023: $1,116M net of $101M insurance (gross $1,217M). 2024: $325M net of $650M insurance (gross $975M). 2025: insurance $338M + other $80M = $418M recoveries exceeded $164M of new costs by $254M. 2026 to date: $53M of expenses (Q3 10-Q) | Claims rewritten; gross figures OUR CALCULATION |
| C74 | Also in the NTSB's Table 7 (13.9 → 13.0) | Note |
| C75 | WRONG attribution: Fannon (BLET), not the NTSB; the referent is the mate-bearing threshold | Claim rewritten; do not use for 200°F |
| C77 | Was an inference from the questionnaire; the NTSB's own Table 7 (p. 43) names NS | Re-sourced to RIR p. 43 table and footnote; sound to state on screen |
| C79 | 170 is the stop line (p. 41); rule in force (n. 68). "Slow to 8 mph" is wrong: it is "not less than 8 MPH" | Note (C120) |
| C80 | Located 04 FEB, recovered 05 FEB; some parts never found | Note (C128) |
| C83 | "Three in the cab" is not in the record | Note: "a crew of three" |
| C84 | Re-checked 05 NOV 2026 | Note (C156) |
| C85 | The NTSB says it directly (p. 86) | Note (C151) |
| C87 | R-24-3 builds on R-24-2's research; status 05 NOV 2026 | Note (C155) |
| C89–C91 | NS's own statements | Status `claim`; C91 now "said it was installing ... core network" |
| C96–C98 | Status after 09 MAR 2026; "the judge wrote" | Notes, claims (C153) |
| C99, C101 | Payment types; 196 movants; the appeal pending | Notes, claim (C154, C174) |
| C102–C104 | 2,781 + 2,099 + 1,439 + 3,390 + 3,110 = 12,819: correct | Total in C162 |

Re-run and correct as filed: C14 ("less than a minute"; Table 2 fits), C16 (79.8 − 49.5 = 30.3 mi), C47, C49 arithmetic
(37.9%).

## 3. New rows (C105–C178)
- **Clock and train handling:** C105 EST; C106 8:52 crossing; C107 8:53 alarm; C108 8:53 dynamic brake, 8:54 uncommanded
  emergency; C109 41 mph, 1,157 ft, 38 s; C110 trainline emergency, not engineer-initiated; C111 CSV speeds (OUR
  CALCULATION); C112 "about forty minutes"; C113 77 minutes (`disputed`, keep off air).
- **Detectors and thresholds:** C114 no detector between Salem and East Palestine, the three averaging about 15 mi; C115
  AAR 40-mile criterion met; C116 two infrared cameras; C117 inner edge of the cup; C118 friction; C119 seized in under a
  minute (testing cited); C120 warm-bearing alarm, slow then stop; C121 26 MAY 2023 change; C122 NS's reason for
  monitoring; C176 finding 5, the lag.
- **Hearing:** C123 "detection of issues with the bearings"; C124 interchange agreement, "not a mandatory rule"; C125
  who asked (Aronian, TSB Canada; Fannon, BLET); C172 the AAR witness's title; C173 East Palestine High School,
  23 JUN 2023.
- **Bearing:** C126 burn-off (Iwand); C127 tapered roller bearing; C128 axle end broken, parts found 04 FEB; C129 the
  evidence-destroying pattern; C175 journal bearing; C177 seals and damage.
- **Probable cause and response:** C130–C134 the rest of the probable cause; C135 finding 14; C136 consist times; C137
  evacuation at 11 p.m. (deputy chief, then incident commander); C138 fire chief from 2:00 a.m.; C139 the fire chief
  approved the burn; C140 volunteer department; C169 fire at derailment; C171 four relief valves; C178 DOT-105
  pressure cars.
- **Vent and burn:** C141 the 60–100-person meeting; C142 peak 138°F; C143 monitoring from 4 p.m. 05 FEB; C144 confidence
  in readings disputed; C145 Oxy's 05 FEB dissent not passed on; C146 Pamphlet 171; C147 no main reason determined;
  C148 NS: not "withheld" (`claim`); C149 exothermic, overpressure; C150 stabilized VCM won't polymerize from heat alone;
  C158 plume = docket item 57.
- **Act V and money:** C151 not an HHFT; C152 2029 extension; C153 decree pending at 22 OCT 2026; C154 class payment and
  release appeal; C155 R-24-03 status and the FRA's reply; C156 no law (bills in committee); C157 special investigation
  announced 07 MAR 2023; C159 report dates; C160 operating ratio; C161 employees; C162 buybacks; C163 insurance
  recoveries; C164 no re-inspection required at Decatur; C165 in-cab recorders; C166 the bearing may not have looked bad;
  C167 fire at the L1 bearing; C168 "shortly after"; C170 TRRA, Madison, co-owned; C174 the fund's three payment types.

## 4. Facts that had no row before this check
- **Treatment:** the consist delay (C135, C136); 8:52 (C106) and the 8:53 alarm (C107); 39 minutes (C112: say "about
  forty"); 77 minutes (C113: `disputed`, not for air); "about 43 mph" (C10 existed; C109 and C111 now show it is the
  speed at the detector, not along the route); `NO DETECTOR · 19 MI` (C114: write `NO HOT BEARING DETECTOR · ABOUT 19 MI`);
  the plume as item 57 (C158, confirmed as the Columbiana County Commissioner's UAS video, file ID 16582840); EST (C105);
  Fort Wayne Line (C01); 3 locomotives (C02); 6:00 p.m. call (C59); 3:00 p.m. reason (C62); the plot's start time (C143);
  the probable cause "line by line" (C130–C134); 26 MAY 2023 (C121); tapered roller bearing (C127); burn-off mechanism
  (C126).
- **Screenplay N-list:** N1 C167 · N2 C168 · N3 C116, C117 (p. 105, not 104) · N4 C119 · N5 C118 · N6 C169 · N7 C170 ·
  N8 C129 · N9 C171 · N11 C135 · N12 C149 · **N13 WRONG**: the deputy chief was incident commander only on night one; use
  C137–C140 · N14 C141 · N15 C111 (but see the clock issue) · N16 C172, C173 · N17 C159 · N18 C160 (both wordings are in
  the 2019 10-K) · N19 C174. (There is no N10.) Screenplay ¶53 cites "p. 132" (a DOT-111 table): it should be p. 154
  (C67) and p. xi (C37, C95).

## 5. Status checks (made 05 NOV 2026)
| Item | Finding | Source |
|---|---|---|
| Federal consent decree, N.D. Ohio 4:23-cv-517 | **Not entered.** NS's Q3 2026 10-Q (filed 22 OCT 2026): the DOJ's motion of 10 OCT 2024 "remains pending"; the stay of the Daubert motions has been lifted and an exchange of discovery ordered. govinfo carries no opinion after Doc. 301 of 09 MAR 2026 (package `dateIssued` 2026-03-09). The court docket itself could not be read (CourtListener and Justia block this container; PACER not available). Re-check on upload day | https://www.sec.gov/Archives/edgar/data/702165/000162828026066836/nsc-20260930.htm ; https://api.govinfo.gov/packages/USCOURTS-ohnd-4_23-cv-00517/summary |
| Class settlement, 4:23-cv-242 | Approval final (6th Cir. 05 NOV 2025; cert. denied 02 MAR 2026). The final $285M was paid in March 2026 ($315M in 2024). The 01 MAY 2026 denial of the release challenge is on appeal at the Sixth Circuit, pending at 22 OCT 2026 | Q3 2026 10-Q (above); Doc. 1053 |
| NTSB special investigation of NS (announced 07 MAR 2023) | **No published report found** (ntsb.gov release page and site search, news search). Can't establish more than "no report found" | https://www.ntsb.gov/news/press-releases/Pages/NR20230323.aspx |
| Federal detector rule or law after 24 JUL 2026 | **None found.** Federal Register (FRA; "hot bearing", "wayside detector(s)", "bearing defect detector"; all FRA rules and proposed rules since 01 JUL 2026): latest on bearings is the 17 JUL 2024 advisory supplement. Congress: S. 3903 Railway Safety Act of 2026 referred 24 FEB 2026; H.R. 7748 at subcommittee 03 MAR 2026; H.R. 8870 (BUILD America 250; 15/20-mile detector spacing) ordered reported 22 MAY 2026, no floor action; no public law. CRS R47911 v8 (dated 24 JUL 2026) has the same text as v7 | https://www.federalregister.gov/api/v1/documents.json ; https://www.govinfo.gov/bulkdata/BILLSTATUS/119/s/BILLSTATUS-119s3903.xml ; https://www.congress.gov/crs_external_products/R/PDF/R47911/R47911.8.pdf |
| NTSB R-24-03 | **Open – Initial Response Received** (unchanged). The only correspondence is NTSB 12 JUL 2024 and FRA 10 JAN 2025; the FRA's working group is to inform "guidelines and/or regulations" | https://data.ntsb.gov/carol-main-public/sr-details/R-24-003 |
| Also found (NS Q3 2026 10-Q) | NS says the FRA and OSHA investigations "have now settled" (terms not stated). A lead only, not in the film | same 10-Q |

The fetched copies are saved, gitignored, in `assets/src/status/factcheck_v1/`.

## 6. Fairness flags (PLAYBOOK §9.6)
- **NS:** (a) ¶29's "What is an unnecessary stop worth?" leads into the 2019 plan, and so implies a money motive for the
  threshold that no record supports (item 6, no motive invented). Recast it, or put the plan after the line "the record
  does not link them". (b) "What followed" and the baselines (§1.4). (c) Put NS's denial of "withheld" (C148) beside
  C93 and C132. (d) Verdict card 4 should state the NTSB's own limit (C147). (e) Pamphlet 171 overstated the risk (C146).
  (f) The spacing met the AAR's 40-mile practice (C115), so the blind nineteen miles mustn't read as NS breaking a
  standard. (g) NS's reason for monitor-only alerts (C122) belongs beside finding 6. (h) Title A2 "Came From a Billing
  Rule" compresses NS's testimony ("its own experience ... and AAR standards"). "Matched a Billing Rule" is exact; "Came
  From" needs the fairness pass's sign-off. (i) The full probable cause names NS three times; it also names the DOT-111
  fleet and Ohio's training rules. Show all of it.
- **AAR:** keep "the detection of issues with the bearings" (C123) and the interchange and not-mandatory explanation
  (C124) with "Correct."; end the clip no earlier than "attributable to hot bearings".
- **Incident commander:** fix the identity (§1.1). His own words: "overwhelmed and blindsided" (C68 note). The NTSB
  found the volunteer firefighters acted in good faith (finding 11).
- **SPSI and SRS:** never "NO SOURCE" or "unsourced range" (C64, C92). Give their reason for the deadline (C62), and the
  SPSI president's low confidence in the infrared readings that the plot draws (C144).
- **Oxy Vinyls:** quote it in the record's words only ("low probability", C59; its 05 FEB conclusion, C145). NS's
  statement says Oxy gave "conflicting information" (attribute it, if used).
- **FRA:** "no federal rule" should sit with the FRA's reply on R-24-03 (C155).
- **TRRA, GATX, Braskem:** the bearing may not have shown visible problems (C166). Nothing hints at Hurricane Harvey: the
  NTSB found no evidence of water ingress (p. 111).
- **Courts:** settlements are not admissions. If the narration describes them, collect a source (the settlement
  agreement or decree text) for a "neither is an admission" line. No row exists yet.

## 7. Treatment changes needed (do not edit until the owner sees them)
- **Logline.** Replace "a factory's camera" with "a surveillance camera" (C167). "170° line" becomes "170°F-above-ambient
  line". "That line is the railroads' billing definition" becomes "the same number as the industry's definition, which
  sits in its car repair billing rules". "Thirty-nine minutes later the bearing read 253°F" becomes "About forty minutes
  later it read 253°F above ambient". "Found in no written guidance, set a 13-minute clock" becomes "found in none of the
  written guidance consulted at the scene; the decision came with a 13-minute limit".
- **Margin line:** "detectors about 19 miles apart" → "the last two detectors about 19 miles apart".
- **Questions table:** "the unsourced range" → "the range not found in the guidance used at the scene"; "never by NS" →
  "not by NS on this trip"; "three in the cab" → "a crew of three".
- **0:00:** `STOP LINE 170°F` → `STOP LINE +170°F ABOVE AMBIENT`. **0:55:** `8:53 P.M.` on the alarm; `253°F ABOVE AMBIENT
  · DETECTOR MAXIMUM`. **1:20:** `41 → 0 MPH · ABOUT 1,160 FT · 38 S` from the emergency; the crew used dynamic braking;
  the emergency came through the train line (C108–C110).
- **3:15:** "slow (not below 8 mph) until the rear clears, then stop"; the 200°F source is NTSB Table 7 (C77).
  **4:40:** add the AAR 40-mile line (C115).
- **6:00:** no ellipsis that drops C123. **6:50:** label the questioner as NTSB technical panel (TSB Canada); carry C124.
  **7:30:** drop C75; use C77 and C121.
- **8:10:** baselines (§1.4). **9:10:** "not by NS on this trip"; special investigation "no report as of <date>".
- **10:30 (signature 1):** `NO HOT BEARING DETECTOR · ABOUT 19 MI`. Run the strip on the recorder's clock: the head end
  reaches MP 49.81 at about 8:53:30–8:54:00, so use 19–45 mph, or show no clock at all (C111). `253°F ABOVE AMBIENT`.
  41 → 0 mph from the emergency.
- **11:20:** "the heat of the burn-off and the fire that followed". **12:00:** "likely began" (C130).
- **12:30:** "heat drives it" → the guidance warned VCM "may polymerize explosively when heated" (C149), and the NTSB found
  stabilized VCM cannot polymerize from heat alone (C150).
- **13:00 (signature 3):** strip `NOT IN THE WRITTEN GUIDANCE CONSULTED AT THE SCENE · NTSB RIR-24-05 p. 28 n. 55`. The
  temperature line starts at `4:00 P.M. 05 FEB`, labelled `INFRARED SHELL READINGS · SPSI, SRS`, in °F (not above
  ambient); peak 138 (C142). `3:00 P.M. "DEADLINE"` sits with "not a hard deadline" (C66).
- **14:50:** "found in none of the guidance used at the scene". **15:00:** add C148 and C146. **15:50:** add C147.
- **16:10:** the probable cause in full (C42, C130–C134). **16:35:** label each year with what it is net of (C69–C71).
  Class: "approval final; $600M paid; a release appeal pending (OCT 2026)". Decree: "pending, 22 OCT 2026".
- **17:30:** "as of <upload date>" after the re-check (C156); R-24-03 status (C155) with the FRA's reply; NS "said it was
  installing ... core network"; DOT-111 "under current law" (C152). **18:30:** "a crew of three".
- **Sign-off 1:** "From a reading below the alert line to a separated axle: about thirty miles. The last two detectors
  were about nineteen miles apart."
- **Package:** thumbnail D `153–158°F · NO SOURCE` → `153–158°F · NOT IN THE GUIDANCE`; title A2: see §6(h).

## 8. Narration (vo.txt): every factual sentence against the claims
| ¶ (line) | Rows | Verdict |
|---|---|---|
| 1 (1) | C05, C105 | OK |
| 2 (3) | C04, C167, C82, C42, C128 | FIX: "a factory / the factory's camera" has no source; say "a surveillance camera in Salem" |
| 3 (5) | C168, C116, C05 | OK |
| 4 (7) | C07, C79, C120 | OK (the screen must say "above ambient") |
| 5 (9) | C08 | OK |
| 6 (11) | C02 | OK |
| 7 (13) | C26–C29, C173 | OK |
| 8 (15) | C106, C112, C11, C55 | PARTLY: "Thirty-nine" fits only the report's 8:52 crossing; say "About forty minutes" |
| 9 (17) | C53 | Fact OK; voicing the alarm words conflicts with C53's "never as audio" (owner choice) |
| 10 (19) | C108, C15, C165, C14 | OK; "the axle came apart" is acceptable (the record says "the end of axle 1 was broken", C128) |
| 11 (21) | C01, C169, C34, C137 | OK |
| 12 (23) | C63, C64, C36 | FIX: "in any written guidance" → "in the written guidance used at the scene, or in what the shipper had told them" |
| 13 (25) | — | framing |
| 14 (28) | C175, C177, C118 | OK |
| 15 (30) | C116 | OK |
| 16 (32) | C06, C120, C79, C78, C54, C77 | OK |
| 17 (34) | C05–C07 | OK |
| 18 (36) | C04, C116, C117, C176, C17, C119 | PARTLY: "heats from the inside" → "is likely hotter inside" (C176). Attribute "less than a minute" to the testing the report cites; "once a bearing is failing" is not in the source |
| 19 (38) | C09 | FIX: "there was no time to act" → "the procedures would not have required him to act before the train derailed" |
| 20 (40) | — | framing |
| 21 (42) | C13, C114, C74, C16, C128 | OK; add C115 for fairness |
| 22 (44) | — | framing |
| 23 (47) | C25, C23, C72 | FIX attribution: "The N-T-S-B found that this definition is based on..." → the industry's own witness testified this, as the NTSB records; the "board wrote" sentence is correct |
| 24 (49) | C173, C172, C125 | PARTLY: the question came from the NTSB's technical panel (a TSB Canada member) |
| 25 (51) | C28 | FIX: "limits for safe operation at all" overstates; he asked whether they are "absolute limits for safe operating temperatures" or a standard for removal and billing |
| 26 (53) | C28, C29 | OK; add C124 |
| 27 (55) | C73, C77, C121, C76 | OK |
| 28 (57) | C27, C24 | PARTLY: "In the N-T-S-B's words" → "in the NTSB's summary of the industry's testimony" |
| 29 (59) | C43–C47, C160 | Facts OK; fairness §6(a) on the opening question |
| 30 (61) | C48, C49, C161, C162, C52 | FIX: "what followed" with 2015 and 2018 starting points (§1.4) |
| 31 (63) | — | framing |
| 32 (65) | C82, C170, C21, C164, C22, C166 | FIX: "never inspected it" → "did not inspect it on this trip, and was not required to" |
| 33 (67) | C30, C31, C32 | FIX: "played any part" → "contributed to the defects that went unreported" |
| 34 (69) | C33, C157 | OK; add "we found no report from it as of <date>" |
| 35 (71) | — | FIX: "No investigator has linked" → "The NTSB's report does not link" |
| 36 (73) | C32, C22 | OK |
| 37 (76) | C126, C128, C177 | PARTLY: "the wheelset drops" → "the journal breaks off the axle, and the car's lead truck derails" (C126, finding 2). Present it as how a burn-off goes (ILLUSTRATION): this bearing's sequence is not established |
| 38 (78) | — | OK |
| 39 (80) | C111, C114 | FIX: speed range is clock-dependent (19–45 to the detector by the recorder). "No one can see it" is an absolute → "no detector reads it" |
| 40 (82) | C55, C11, C53, C108, C14, C56, C109 | OK; "about" 1,160 ft |
| 41 (84) | C19, C20, C129 | PARTLY: "the heat of its own failure" → "the heat of the burn-off and the fire that followed" |
| 42 (86) | C80, C81, C128, C36 | OK (found 04 FEB, recovered 05 FEB; a few pieces never found) |
| 43 (88) | C130, C171, C178 | FIX: "came from a tank car" → "most likely began at a tank car" |
| 44 (90) | C135, C136 | OK |
| 45 (92) | C94, C149 | OK |
| 47 (96) | C59 | OK (the call was NS and SPSI; Table 4 says SPSI and SRS) |
| 48 (98) | C142, C143, C65 | OK |
| 49 (100) | C138–C141, C60, C93 | FIX: the incident commander was the fire chief, not the deputy chief. "Met the governors ... and dozens of other officials" → "the incident command met, some sixty to a hundred people, among them the governors" |
| 50 (102) | C61, C92, C63, C64, C62 | PARTLY: add the contractors' stated reason for 3 p.m. (inversion, smoke dispersal, daylight) |
| 51 (104) | C68, C36, C66 | OK |
| 52 (106) | C64, C23, C72 | FIX: "found in no guidance" → "in none of the guidance used at the scene"; "written for billing" is our framing (fairness pass) |
| 53 (108) | C95, C37, C67 | OK |
| 54 (110) | C89, C90, C68 | OK; add C148 |
| 55 (112) | C147 | OK; add the NTSB's "could not determine the main reason" |
| 56 (115) | C159, C42 | PARTLY: give the contributing causes (C130–C134), at least on screen |
| 57 (117) | C69–C71, C163 | FIX: "after insurance and other recoveries" is right for 2025 only |
| 58 (119) | C99, C174, C100, C101, C154, C96–C98, C153 | FIX: "final: the appeals have ended" (§1.3); March → October 2026; "wrote" → said, then quoted |
| 59 (121) | C84, C156, C87, C155 | OK; the date can move to November 2026 after the re-check |
| 60 (123) | C91 | FIX: "says it has added" → "said in June 2024 it was installing ... on its core network" |
| 61 (125) | C130, C40, C152, C39 | FIX: "started the fire" → "where the fire most likely began"; "under current law" |
| 62 (127) | C86, C85, C151, C83 | PARTLY: "three people in the cab" → "a crew of three" |
| 63 (129) | C16, C114, C84, C87 | FIX: "a normal reading" → "a reading below the alert line"; "The detectors were" → "The last two detectors were about" |

## 9. Notes
- `research/claims_build.py` regenerates C01–C104 from its own list. It is now out of date: re-running it would undo this
  check. Retire it, or move the rows into it.
- The hearing-video timecodes (01:18:44, 01:20:32–01:21:10, 03:05:00, 04:02:35) could not be checked from here, since
  YouTube is blocked. Match the clip's words to transcript pp. 215–217, 259 and 293 with `word_align.py` when the owner's
  clip arrives.
- On upload day, re-check: the decree (C153), the class appeal (C154), R-24-03 (C155), any rule or law (C156), and the
  special investigation (C157).
- The `on_screen` column is now set for rows the treatment puts on screen; set the timecodes at choreography.
