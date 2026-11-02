# NTSB AIR-25-04: research notes

Source: NTSB, *In-Flight Separation of Left Mid Exit Door Plug, Alaska Airlines Flight 1282, Boeing 737-9, N704AL,
Portland, Oregon, January 5, 2024*, Aviation Investigation Report AIR-25-04, adopted June 24, 2025, 158 pp.
<https://www.ntsb.gov/investigations/AccidentReports/Reports/AIR2504.pdf> (case DCA24MA063; investigation page
<https://www.ntsb.gov/investigations/Pages/DCA24MA063.aspx>). Read in full on 2026-11-02 (sections 1.1, 1.5, 1.10,
1.11.2, 1.12, 2, 3, board statements). Page numbers are the report's printed numbers. Quotes are verbatim; the
claim ids in `claims.csv` point here.

## The flight (pp. x, 1–6)
- 5 Jan 2024, about 1713 PST, Alaska 1282, 737-9 N704AL, PDX → Ontario (ONT). Departed about 1707.
- 1712:33: "climbing through about 14,830 ft when the cabin pressure dropped, and the cabin altitude warning
  activated, followed 1 second later by the master caution alert." (p. 2). **Not 16,000 ft** (the spec's figure).
- Max altitude 16,320 ft at 1713:41, then descent; below 10,000 ft at 1717:00; landed 1726:46, "about 14 minutes after
  the MED plug separated" (pp. 3, 6).
- Captain: "an explosive experience"; first officer: "it was chaos" (p. 3). Flight deck door blew open (by design; crews
  did not know). QRC blown from its holder.
- Seats 26A and 26B unoccupied; occupants of 25A–C had moved; 26C stayed (p. 4 fn 12). A 15-year-old's shirt was pulled
  off (p. 4 fn 11).
- Injuries: 1 flight attendant + 7 passengers minor; 2 pilots, 3 FAs, 164 passengers uninjured (p. x).
- CVR: no audio from the accident flight (overwritten; p. 1 fn 3; finding 32). **So Act I cannot use cockpit audio;
  the FDR timeline and crew interview words are the record.**

## The airplane and the plug (pp. 10–17)
- Delivered to Alaska 31 Oct 2023, in service 11 Nov 2023; 510 hours, 154 cycles at the accident (p. 11).
- MED plug: "a rectangular airframe structure, about 29 inches wide and 59 inches high" (p. 1 fn); aluminum alloy,
  principal structural element, certified under 14 CFR 25.571 (p. 12). Nominal weight 63 lb at 1 g (p. 32).
- Held against moving **outboard** by 12 stop fittings (6 per side): plug stop pins bear on frame stop pads (pp. 12–13).
- Held against moving **upward** by 4 bolts: 2 upper guide track bolts + 2 vertical movement arrestor bolts, each with
  two washers, castle nut, cotter pin (p. 12).
- To open: remove the 4 bolts, lift the plug until the upper guide fittings clear the rollers; at that point the stop
  fittings have cleared the stop pads "by about half an inch" (p. 15); then the top swings outboard, pivoting on the
  lower hinges, limited to 15° by straps (pp. 16–17). Two lift-assist springs, about 50 lb each (p. 14).
- **The margin, by design:** "an installation with only one vertical movement arrestor bolt … was capable of
  preventing upward movement," and the two upper guide track bolts alone "could sufficiently limit upward movement …
  to prevent disengagement" (p. 33). Four bolts where one would do. All four were missing.
- Spirit AeroSystems designed the plug and held drawing responsibility (p. 74 fn 80).

## What the wreckage showed (pp. 26–33, 84–86)
- None of the 4 bolts recovered; no bolt-contact damage in any of the 4 holes → missing before the plug moved (finding 11).
- Faint washer outlines at the upper guide track bolt holes → hardware was installed once (p. 86; finding 12).
- Parallel dark lines of dust, dirt and petroleum jelly near the upper seal: the plug "had moved incrementally upward
  during previous flight cycles" (p. 85).
- Exemplar test on the right plug, bolts out: 120 lb upward did not move it; two people, estimated over 150 lb, did
  (p. 31).
- Boeing dynamic-loads analysis of QAR data (9 flights, 106,008 values): lowest inertial load 0.40–0.45 g, an
  effective plug weight of 25 lb; error about ±0.15 g (pp. 32–33). "dynamic loads imparted by the vibrations and
  flexing associated with normal flight operations led to the gradual and incremental upward movement" (p. 85).
- Exterior gap, unsecured plug: 0.079 in (down), 0.315 in (middle), 0.630 in (at instability) (p. 32); not readily
  detectable on a walkaround (finding 4).
- AUTO FAIL lights (four since delivery) likely intermittent microchip failures; no link to the plug shown (finding 5).

## The factory timeline (pp. 41–53)
- Spirit Malaysia made the plug 24 Mar 2023; Spirit Wichita received it 10 May, installed 18 Jul, final closure with
  all 4 bolts 28 Jul 2023 ("close and verify"); fuselage shipped 20 Aug, arrived Renton 31 Aug 2023 (p. 41).
- 1 Sep 2023: Boeing found 5 damaged rivets in the edge frame forward of the left plug (installed by Quik Tek, a Spirit
  supplier) → NCR + NCO "Damaged Rivets"; IP "OK to Install Blankets" short-stamped (p. 43). Spirit could not open
  completed installations; only Boeing personnel could (pp. 44–45).
- 6 Sep: Spirit contract mechanic stamped rivets replaced; Boeing QA found them "just painted over"; mechanic "had
  confused [the accident] airplane with another airplane" (p. 47).
- 14 Sep: escalated Tier 1 → 2; 17 Sep 0841 "no access"; 1554 Tier 2 → 3; 1815: "If removal needed, a removal needs
  to [be] written first." (pp. 47–48).
- 18 Sep 0700: door manager: "door is being opened by mechanic"; plug open at least from 1053 (p. 48; p. 87 says
  1035) to at least 1709 on 19 Sep. **No removal record was ever created** (p. 46).
- The most experienced door team member (about 25 years) was on leave 18–19 Sep (p. 49). None of those on duty had ever
  opened a plug (finding 13). Door master lead: told to open a "mid door"; "I can honestly tell you they didn't" (p. 50).
- 18 Sep second shift: a functional test team lead found the plug "lying open on the stand" and "just strapped it up
  there and let it hang" (p. 50).
- 19 Sep second shift, no door team on duty: plug closed. **Text messages between Boeing personnel included a
  photograph sent about 1839 showing the plug closed with no attachment hardware in the three visible locations**
  (Figure 18, p. 51). Who closed it: never identified (finding 17).
- 20 Sep: QA signed off IP "OK to Install Blankets"; her signoff "did not involve looking at the airplane" (p. 53).
  Sidewalls already installed over the plug.
- Boeing's SVP of quality told a 25 Jun 2024 media briefing "we know the move crew closed the plug"; the NTSB says the
  interviews did not identify who closed it, and sanctioned Boeing for releasing investigative information (p. 52 fn 60).
- No security video: Boeing kept recordings for 30 days (p. 46 fn 54).

## The system behind it (pp. 53–69, 92–106)
- One door manager, 24 door team personnel (p. 53). On-the-job training: no task list, grading or documentation
  (p. 54); the four less experienced door members had about 18–23 months on 737 doors (p. 55 fn 63).
- Plug openings in production: 62 instances on 28 airplanes since 2018; in Renton 2022 to Sep 2023 only 6 airplanes,
  while producing about 30–38 a month (pp. 55, 89).
- **Rates and workforce (p. 56 fn 64; pp. 56–57):** about 52 a month before 2018; under 10 at the height of the
  pandemic; about 30–38 before the accident. 2018–19: production cut after the two fatal MAX accidents, hiring halted,
  attrition not replaced; 2020: more losses, "particularly among retirement-eligible employees"; 2022: Boeing "sought
  to increase production to pre-2018 levels," hired many "with no previous manufacturing experience."
  SVP quality: "after COVID with this rapid hiring, we got more and more people with no aerospace experience
  whatsoever." 737 VP/GM: "10 years ago, we were closer to 50% of employees with more than 10 years' [experience].
  Today, I would say we are at 25 or 30%."
- No change-management or safety risk assessment of the workforce change (finding 20).
- BPI "Perform Part or Assembly Removal": over 50 pages, more exceptions than directions; revised 11 times 2013–2023;
  16 regulatory compliance issues 2018–2023 (9 voluntary disclosures, 7 FAA compliance actions); 35 Speak Up reports
  Jan 2019–Apr 2024; 12 quality alerts 2020–2023 (pp. 62–65). Corrective actions accepted by the FAA were ineffective
  for at least 10 years (finding 21).
- Rate readiness reviews assessed "the rate of supply and available manpower to work the line," not safety hazards
  (p. 95). Boeing's VSMS (accepted Dec 2020, operational Jun 2021) came from a 2015 FAA–Boeing settlement resolving
  allegations in 13 FAA enforcement investigative reports (p. 59 fn 68).
- FAA: 5 inspectors on the 737 program at the time (p. 65); Oct 2022–Sep 2023, 68 alleged noncompliances at Renton,
  none referencing the BPI (p. 67); enforcement records kept only 5 years (p. 63) (finding 23).
- **Fairness limit (finding 27):** the NTSB could not assess Boeing's safety culture, "including whether adverse
  pressure existed on the production line" (the 2024 machinists' strike stopped its survey). Interviewees mentioned
  pressure but "most did not consider it undue" (p. 104). **We may not say production pressure caused the accident.**

## Probable cause (p. 122), verbatim
"The National Transportation Safety Board determines that the probable cause of this accident was the in-flight
separation of the left mid exit door (MED) plug due to Boeing Commercial Airplanes' failure to provide adequate
training, guidance, and oversight necessary to ensure that manufacturing personnel could consistently and correctly
comply with its parts removal process, which was intended to document and ensure that the securing bolts and hardware
that were removed from the left MED plug to facilitate rework during the manufacturing process were reinstalled.
Contributing to the accident was the Federal Aviation Administration's ineffective compliance enforcement
surveillance and audit planning activities, which failed to adequately identify and ensure that Boeing addressed the
repetitive and systemic nonconformance issues associated with its parts removal process."

## After (pp. 69–78, 92)
- FAA Emergency AD 2024-02-51, 6 Jan 2024: 171 737-9s grounded until plugs inspected (p. 69); FAA halted production
  expansion of the 737 MAX, added inspectors (p. 70).
- Boeing: BPI revised 12 Jun 2024; removal-trained-only CMES rule; "move ready" process; 6 KPIs; quality stand-downs
  with more than 70,000 employees (pp. 72–74).
- Design enhancement with Spirit: two secondary retention devices + lanyards on the bolts; new production "likely
  begin sometime in 2026" (p. 92). Status to check at publication.
- Spirit started a 737 quality improvement plan in Q3 2023 "after allowing fuselages with undetected
  nonconformances to be delivered to Boeing" (p. 76).

## Board member statements (pp. 127–131)
- Graham: "I am skeptical Boeing's systems at the time were equipped to catch these types of errors."
- Inman: "When holes in the cheese align, disaster follows." "this could have resulted in tragedy if the event had
  taken place over the Pacific." Also notes the Boeing acquisition of Spirit.

## Still to collect
- The 2005 sale of Wichita (Spirit's S-1 / 10-K), Boeing's 2022–23 rate plans (10-K), the Spirit reacquisition
  (8-K, closing), the FAA production-cap announcement, the DOT OIG audit (9 Oct 2024), the Section 103 expert panel
  report (Feb 2024), the hearing transcript (6–7 Aug 2024), docket photos (Figure 18 and the plug), the FAA AD.
