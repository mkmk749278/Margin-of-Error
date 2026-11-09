# Review of the "Forensic Engineering Dossier" and its summary (received 2026-11-09)

The owner shared two documents (not kept in the repo): a 17-page dossier, *Forensic Engineering Dossier: Structural
Failure Dynamics and Critical Supply Choke Points*, and a 2-page summary of it. They propose two tracks at eight films
a month, give a full East Palestine treatment (packaging, physics, money trail, a script, a storyboard), four "Invisible
Moats" cases (EUV mirrors, 500 kV transformers, coupler knuckles, marine P&I reinsurance), a palette, and three next
steps. Nothing in them is a fact until a `claims.csv` row confirms it (PLAYBOOK §9). Its 42 works cited mix primary
records (NTSB report and docket, SEC filings, DOE) with blogs, Wikipedia, Scribd, Grokipedia and a retail page.

## 1. East Palestine: our finished film already has the record; the dossier has it wrong in 20 places
Our film (`films/east-palestine/`, 4K master and package done) rests on 182 checked rows. Set against them, the
dossier's East Palestine section fails often enough that **nothing in it should change the film, and no correction
is owed**. Each point below is checked against our `claims.csv` row.

| # | Dossier says | The record says | Row |
|---|---|---|---|
| 1 | NTSB lab **confirmed** subsurface rolling-contact fatigue spalling in the cup | Why the bearing failed is **not known**: the heat erased evidence of fatigue, lubrication loss or water | C19, C20 |
| 2 | First detector "Upper Sandusky, MP 79.9" read +38°F | The **Sebring** detector, MP 79.8, 7:37 p.m., +38°F, no alert | C03 |
| 3 | Salem: 113°F absolute, +64°F to the mate bearing | +103°F above ambient is the reading on record; the other two figures have no source | C05 |
| 4 | Salem data "withheld from the crew and the Wayside Help Desk" | The alert **went to the desk**; the analyst, on higher-priority alerts, didn't see it; seeing it wouldn't have prevented the derailment | C08, C09 |
| 5 | No crew warning below 200°F | NS radioed a crew "warm bearing" alarm at 170–200°F above ambient; above 200°F, stop at once | C77, C120 |
| 6 | Thresholds set high "to avoid stopping trains" (a motive) | NS: based on its experience and AAR standards; the AAR line rests on billing rules; railroads balance failures against unneeded stops. No documented motive | C23–C26, C24, C73 |
| 7 | Inspection time per car 180 → 120 → 90 → 60 → 30–45 s, 2018–2022, "sworn testimony" | No source for that series. One NS foreman email appeared to set a **90-second** target; car 23 was inspected at the **TRRA** yard, not by NS; the NTSB could not determine whether time goals contributed | C21, C31, C32, C182 |
| 8 | "35% of executive bonuses" tied to operating ratio | Not found. The 2020 annual incentive was based on operating ratio and operating income | C52 |
| 9 | Speed 47 mph at the derailment | About 43 mph at East Palestine; 41 mph at the emergency application | C10, C109 |
| 10 | "Nineteen minutes" from Salem to East Palestine | About **forty minutes**; 19 is the **miles** | C112, C13 |
| 11 | Cab broadcast: "Stop Train!" | "Critical alarm, critical alarm, critical alarm. Norfolk Southern milepost 49.8, track 1 hotbox, axle 101, south rail" | C53 |
| 12 | 141 loaded + 9 empties; 17,900 tons; 9,300 ft | 149 cars including 9 empties; 17,977 tons; 9,309 ft | C02 |
| 13 | Locomotives stopped 1,368 ft on | About 1,157–1,160 ft, 38 s after the emergency application | C56, C109 |
| 14 | Second-by-second timeline (8:52:45, 8:53:19, 8:53:32 "axle shears") | Not in the report; the times on record are 8:53 p.m. dynamic braking and 8:54 p.m. emergency; our event-recorder data stands | C108 |
| 15 | >800°C, austenite, "60% of shear strength lost" | Not in the record. The record: overheating in seconds, axle steel heats and deforms until the journal breaks off; melting, galling, plastic deformation | C126, C177 |
| 16 | Buybacks 2019 $2.40B | $2,099M (2018 $2,781M, 2020 $1,439M, 2021 $3,390M, 2022 $3,110M; 2018–2022 total $12.8B, our sum) | C50, C51, C102–C104 |
| 17 | Workforce 26,500 (2018), 24,000 (2019) | 26,662 and 24,587 (2022: 18,900 matches) | C48, C49, C161 |
| 18 | "Three thousand positions" cut to reach 60.1% in 2021; 20 hazmat cars, 11 derailed; MCT sensors | No source given; unchecked | — |
| 19 | Title: "Why Norfolk Southern Ignored Three Alarms" | **False**: one alarm (East Palestine); Sebring no alert; Salem a non-critical alert to a desk. A legal risk as well as an error | C03, C05, C11 |
| 20 | "BUILT TO BURN"; "made it mathematically impossible for any inspector to stop it" | Our own accusation and an absolute; fails the fairness pass (§9.6) | — |

**What this shows (lesson, added to §16):** a polished research document can be confident and wrong. The errors
cluster exactly where a story wants them: a confirmed physical cause the NTSB says is unknowable, a motive for the
threshold, a tidy year-by-year inspection series, a dramatic radio quote. That is why every number goes through
`claims.csv`, and why our film's Act III says what the record says (the billing rule) and nothing more.

## 2. Two tracks, eight films a month: not recommended (owner's decision)
- **Domain.** "Invisible Moats" (monopolies and physical limits) has no failure and no dated decision, so it fails the
  channel's case test (CLAUDE.md "No edge or no dated decision: the case waits"; "no physics-trivia detours"). "Why
  no country can copy ASML" is also a geopolitics frame outside our regions.
- **Cadence.** Our films take a full chain of gates (treatment, facts at max, fairness, audience review, owner
  approvals, two independent reviews). Two a week means skipping them. The 2026 strategy research found the ranking
  pays for time viewers rate as well spent, and a catalogue that looks templated risks demonetisation channel-wide
  (§4.1d, §14.2a). The standing decision is "each film released when it is finished" (§17.1 item 5).
- **Use instead:** the moats material as **Act II or Act V content inside real cases**: transformers stay slate #3
  (waiting for an incident and a dated decision, §17.3); P&I reinsurance belongs in a Key Bridge Act V ("who pays");
  coupler slack and knuckle limits belong in a derailment where the NTSB found a coupler failure. Each number from a
  primary or standards source first (the dossier's EUV and coupler figures come from blogs, a preprint and patents).

## 3. The look: one point new, the rest already ours
- **Palette (reject):** safety orange `#FF7A00` and slate `#1E293B` geometry would break colour = meaning (Amber
  `#f59e0b` thresholds and money, Red `#ef4444` fracture; `#1e293b` is our card border). Tokens stay in `brand.yaml`.
- **3.5-second motion rule:** already adopted (2026-11-02 review, item 7; §6.4 sets what counts as visible motion).
- **Real grounding, nothing floating:** already §6.5a. **Blender Cycles:** already an open option there.
- **New, worth keeping as a cold-open option:** the 0:00–0:03.5 "specimen on the bench" open (the failed part with its
  record id as a label) is a valid hero-build idea, used only with a real NTSB photo or a labelled RECONSTRUCTION.

## 4. The three next steps
1. **"Publish Four Missing Bolts as *The Four Missing Bolts That Grounded Boeing*, NO BOLTS":** the film is finished;
   its package is locked on titles checked row by row (`films/four-missing-bolts/youtube/package.md`, thumbnail G
   already reads NO BOLTS). "Grounded Boeing" overstates the record: the emergency AD grounded 171 737-9s until their
   plugs were inspected (Film 1 `claims.csv` C62), not Boeing. Keep our package.
2. **EUV film as the next release:** decline (§2).
3. **Key Bridge (MV *Dali*) as the next Track A film: agree.** It is already the strongest candidate (§17.4: NTSB final
   18 NOV 2025). Every point the dossier names (terminal block, breakers) to be checked in the final report and docket
   before the case sheet.

## 5. Source leads worth opening (unverified until opened)
- NTSB hearing transcript, Day 2, 23 JUN 2023 (DCA23HR001), docket ID 16501748; NTSB SPC-24-06 (Illustrated Digest).
- Deposition of an NS witness, docket ID 15670739 (check what it holds before any use).
- DOE *Large Power Transformers and the U.S. Electric Grid* (2014 update and the 2024 study) for slate #3.
- International Group of P&I Clubs reinsurance programme 2026/27 (club circulars) for a Key Bridge Act V.
