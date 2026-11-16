# Titan: fact-check v2 (16 NOV 2026, max effort, fresh context)

**Checked:** every sentence of `script/vo.txt` (223 lines, the narration v2) and the on-screen text in `treatment.md`
(the three titles, three thumbnail concepts, beat-sheet readouts and the three signature moments), against the local
records in `assets/titan/records/`: NTSB MIR-25-36 (`NTSB.txt`), the USCG Marine Board report (`MBI.txt`), the sworn
hearing transcripts CG 112 (`CG112.txt`), NTSB Materials Laboratory report 24-012, exhibit CG-098, plus web checks.
Method: `.claude/skills/fact-check/SKILL.md` and PLAYBOOK §9.1–§9.5. Every `source_quote` in `claims.csv` was matched in
code against the record text after normalising quotes, dashes and whitespace; the five misses were layout breaks
(footnote markers, table columns, page footers) and were read by eye (C08, C11, C17, C41, C52).

**Result:** the narration is close, but there are **16 must-fixes before it is final** (13 in the narration, 3 in the
on-screen text: wrong, or contradicted by a record), 10 should-fixes (4 narration, 6 treatment: overstated or
unattributed) and 9 small precision edits. The opening (0:00–0:45) needs only one optional word change (#18), which
does not touch the promise. `claims.csv` now has 108 rows (C01–C108) and
`python3 scripts/claims_check.py films/titan/claims.csv` passes (confirmed 100, claim 5, disputed 3).

**Read this before trusting the gate:** where a line is wrong as written, its row now records the **corrected** wording
and carries the words `NARRATION FIX REQUIRED` with the fix number below. So the gate passing does not mean `vo.txt` is
ready: `vo.txt` must be edited to these fixes before recording.

**Page numbers in CG 112:** the writer's references were one page early throughout. The printed footer page
("Page N of 1651") is the PDF page minus 1. Corrected in C13, C33, C34, C35, C51, C58, C63, C64, C65, C66; Materials
24-012 slopes are on pp. 7–8, not 6–7 (C41).

## 1. Changes the narration and screen text need

Severity: **must** (wrong, or contradicted by a record) · **should** (overstated, or said in our voice when the record
says it as someone's) · **minor** (precision). `#` is the fix number used in the `claims.csv` notes.

| # | Where | Says now | Problem (what the record says) | Exact fix | Row | Severity |
|---|---|---|---|---|---|---|
| 18 | vo L1 (opening) | "On its eightieth dive" | Dive numbers are labels, not a count: dives 1–49 were the first hull, plus a "dive 45.1" (NTSB App. C fn a; fn 23–24) | "On dive eighty," (re-run the promise check: same exhibit, same date) | C77 | minor |
| 24 | vo L18 | "Titan had reached the depth of the wreck, three thousand eight hundred and forty metres, thirteen times." | Both reports call 3,840 m the Titanic's depth (NTSB p. 33, USCG 4.34.11), but NTSB 1.1.2 puts the wreck site at 3,880 m | Optional: "By its dive log, Titan had reached the wreck, three thousand eight hundred and forty metres down, thirteen times." | C04 | minor |
| 1 | vo L14 | "Then nothing more came back." | After the "dropped two wts" message (sent 10:47:02), an automated final ping (sent 10:47:08) was received at 10:47:32 (USCG 4.1.50, 4.1.55). The board: "This was the last message that was sent from the TITAN." NTSB: at 1048 the Polar Prince acknowledged and "received no response" | "It was the last message Titan sent. A minute later, the support ship acknowledged it. No reply came." | C73, C37 | must |
| 2 | vo L16 | "about five hundred metres from the Titanic's bow" | The NTSB disagrees with itself: 1.2 "about 500 meters (1,148 feet)", 1.4.1 "about 330 meters (1,083 feet)"; 1,148 ft is 350 m. The board gives no distance | "a few hundred metres from the Titanic's bow" | C38 (now disputed) | must |
| 4 | vo L29 | "It was also lighter, which meant less buoyancy, smaller support ships, and more seats." | NTSB p. 25 gives these as the CEO's beliefs, not facts, and says "could be launched from a bigger variety of surface tenders—as opposed to necessitating a purpose-built ship", not smaller ships | "He also believed that, because it was lighter, it would need less buoyancy, could be launched from many more kinds of ship instead of a purpose-built one, and could carry more people." | C76 | must |
| 5 | vo L33 | "assumed perfect geometry and perfect fibres" | NTSB p. 63: "assumed perfect geometry and fiber orientation, rather than the actual ... pressure vessel built by OceanGate" | "But that analysis assumed perfect geometry and perfectly aligned fibres, not the hull that was actually built." (Fairness pass: fn 46 says knockdown factors were applied) | C78 | should |
| 20 | vo L52 | "bonded to the hull" | The records say "installed on the inside" of the hull (USCG 4.27.13), some on the titanium dome and segment | "fixed inside the hull" | C36 | minor |
| 6 | vo L62 | "The safeguard had a threshold. Nobody had tested it on this hull." | The RTM recorded the final hull's four DOTF tests, two days of them acoustic (Felicity-ratio) tests by Brooks's sworn account (CG 112 printed p. 753); the board says those tests aimed at depth, "rather than establishing clear acoustic warning thresholds" (5.6). The NTSB's exact point: the warning levels came from other hulls, and OceanGate "had no data on how a co-bonded structure would deteriorate and fail" acoustically (pp. 31, 65) | "The safeguard had a threshold, set on other hulls. OceanGate had no data on how this one would sound as it failed." | C79 | must |
| 8 | vo L73 | "more than twenty submersible professionals drafted a letter" | USCG 4.21.3: drafted "with input from numerous colleagues"; "More than 20 professionals signed the letter" | "more than twenty submersible professionals signed a letter" | C60 | should |
| 3 | vo L75 | "But the failure mode named in that report is the one the investigators would find." | The 2018 report named delamination and "potential inter-laminar fatigue due to pressure cycling". The US investigators found delamination (NTSB fn 22 calls it "a failure mode"; p. 59), not fatigue from pressure cycling | "But the failure mode named in that report, delamination, is what the investigators would find in the second hull." | C104 | should |
| 7 | vo L79 | "A second hull was built. The one that would dive eighty-eight times." | Wrong: dives 1–49 were the first hull; the second hull made dives 50–88, 39 numbered outings (NTSB App. C fn a; Table 3) | "A second hull was built: the one lost in twenty twenty-three. Its dives were numbered fifty to eighty-eight." | C77 | must |
| 9 | vo L109 | "But it never crossed the threshold they had set." | Unattributed in its own sentence, and his own testimony differs: "it never went beyond the threshold" (printed p. 764) but later "I think it was under the 5,000 threshold or maybe just barely over it" (printed p. 801). The Materials report (p. 8) logs four "hits" on channel 2 during dive 81's descent; the NTSB says the sensors "never produced the type of acoustic emission signal that would have triggered an alert" (p. 65) | "It stayed under the threshold they had set, he said, or maybe just barely over it, and it never got worse, so he did not think it was a concern. The N - T - S - B found the sensors never produced the kind of signal that would have triggered an alert." (matches the fairness pass's M8) | C65 | must |
| 22 | vo L123 | "Over the first hundred and fifty metres" | The fit ran from 15 m to 150 m (Materials p. 7) | "Between fifteen and a hundred and fifty metres down," | C105, C41 | minor |
| 21 | vo L138 | "Deeper down, the pressure squeezes the layers together, and the hull behaves as if it were whole." | "Squeezes the layers together" is our gloss; the NTSB says only that deeper down the layers "would have responded in a manner similar to the intact pressure vessel" (p. 59) | "Deeper down, it found, the layers respond like the intact hull." | C85 | minor |
| 14 | vo L140 | "That is why Titan could still reach the Titanic twice more." | Our causal claim. The NTSB reasons the other way: the two dives "indicat[e] the initial delamination(s) ... were not sufficient to cause implosion" (pp. 59–60) | "Titan still reached the Titanic twice more, which the N - T - S - B said showed the first damage was not enough to make it implode." | C86 | should |
| 10 | vo L151, L153 | "the base quoted one thousand seven hundred and fifty dollars ... According to the Coast Guard board, the company did not respond." / "In September, the base wrote again: Titan still had not been covered." | The quote was **CA$1,750 plus tax**, a vendor's quote passed on by the base (USCG 4.35.3); a US viewer hears US dollars. The base "confirmed to the MBI that OceanGate never responded to their email" (4.35.3; the analysis in 5.20 says "reportedly"). Fairness: to the September email OceanGate's logistics director replied that it "would discuss the tarp"; "no actions were initiated" (4.35.4, 5.20) | "Two days later, the base passed on a quote for a protective cover: one thousand seven hundred and fifty Canadian dollars. The base told the Coast Guard board that OceanGate never answered that email." / "In September, the base wrote again: Titan still had not been covered. OceanGate's logistics director said it would be discussed. Nothing was done." | C18, C89 | must |
| 23 | vo L166 | "A director of engineering had once kept a damaged hull from an expedition." | This is the first director's sworn account, which the board relays (5.19) | "By his own account, a director of engineering had once kept a damaged hull from an expedition." | C67, C61 | minor |
| 11 | vo L168 | "the platform tipped over more than once on the way" | No record says it tipped over (capsized). Records: "multiple tipping/upset events" (Materials p. 8), "tipped downward" (NTSB fig. 10), once the bow "partially submerged while being towed" (USCG 4.38.22) | "and on the way, the platform tipped more than once." | C43 | must |
| 12 | vo L186, L188 | "...the outdoor storage likely accelerated the hull's degradation. That is the one question the record leaves open." / "Did every dive weaken it? The record does not say that. It dates two events: dive eighty, and something after dive eighty-two." | (a) The board wrote "likely accelerated **material** degradation, including **potential** weakening of the hull" (5.20), and its fuller view adds the towing and the dive 87 slamming (5.7). (b) "The one question" is an absolute no record supports. (c) **Canada's TSB final report (17 JUN 2026) reportedly found the cylinder "likely led ... to fail progressively, due to damage accumulating during each dive cycle"** (two press reports quote it; the primary is blocked here, C98). "The record does not say that" is then contradicted | "The Coast Guard board says the winter outdoors likely accelerated the degradation of its materials, and it points to the towing as well." / "Did every dive weaken it? Here the investigators differ. The N - T - S - B found no new change between dives eighty-one and eighty-two, and dates two events: dive eighty, and something after dive eighty-two." Then, **only after the TSB report is read**: "Canada's Transportation Safety Board, in its own report, found the damage likely built up with each dive." | C20, C86, C98 | must |
| 19 | vo L192 | "The damage reached the forward end of the cylinder." | The NTSB says this of the dive-80 damage, inferred from where the gauge sat (p. 59); in Act IV it reads as the final failure | "The damage from dive eighty, it found, had reached the forward end of the cylinder: that is where the gauge that showed the change sat." | C87 | minor |
| 17 | vo L194–196 | "Here is the whole dive record, from dive seventy-five to eighty-eight ... Thirteen times at three thousand eight hundred and forty metres." | Dives 75–88 hold only **six** dives to 3,840 m (75, 76, 79, 80, 81, 82). The thirteen were dives 63, 66–70 (2021) and 73, 75, 76, 79–82 (2022) (NTSB Tables 4–5) | Keep the 75–88 ledger: "Here is the dive record, from dive seventy-five to eighty-eight, with every decision beside the dive it followed. Six of these dives reached three thousand eight hundred and forty metres. Thirteen did, in all. Then one line that stops, about five hundred metres short." Or extend the ledger to dives sixty-one to eighty-eight and keep "Thirteen times" | C106, C27 | must |
| 13 | vo L209 | "delayed the first call to rescuers by about seven hours" | The board says "seven-hour" (5.21) and "approximately seven hours and 23 minutes" (4.1.65), but its own clock times are all Newfoundland time (ROI 1.10): 10:47 last message to the master's first call 6:27 p.m. = 7 h 40 min; NTSB 1855 call to JRCC Halifax = 8 h 08 min; 7:10 p.m. = 8 h 23 min | "delayed the first call to rescuers by more than seven hours" (true on every count) | C71 | must |
| 15 | vo L212 | "Its game controller: ... Neither report names the controller as a cause." | No record calls Titan's controller a game controller: the NTSB says "a wireless, battery-operated controller" (p. 11); the "Logitech PlayStation controller" the board photographed was in Cyclops I (fig. 65). There is now a third final report (TSB), not read | "Its controller: on dive eighty-one, the thruster controls were found to be mapped in reverse, and the pilot turned the controller around. Neither U - S report names the controller as a cause." | C93 | must |
| 16 | vo L212 | "Its window: the Coast Guard board criticised it as untested and uncertified, but the N - T - S - B placed the failure in the carbon cylinder." | The contrast suggests the board blamed the window. It did not: "it is unlikely that the acrylic window itself caused the implosion" (5.5); its most likely scenario is a buckling collapse of the carbon hull (5.7), failure point at the forward joint or the hull near the forward end (6.1.1) | "Its window: the Coast Guard board criticised it as untested and uncertified, but found it unlikely that the window caused the implosion. Both U - S reports place the failure in the hull." | C94, C95 | must |
| 25 | vo L60 | "emailed it to eight or ten people" | He said "possibly eight to ten" (printed p. 752) | Optional: "emailed it to about eight to ten people" | C58 | minor |
| — | vo L214 | "asked the U - S Coast Guard to push the International Maritime Organization" | M-25-015 says "Propose that the International Maritime Organization make MSC.1/Circ. 981 mandatory" | Optional: "asked the U - S Coast Guard to propose that the International Maritime Organization make its guidance for submersibles mandatory." | C72 | minor |
| 26 | treatment, signature 1 (gauge) | `< 3,000 M · SCALE MODELS, SAME METHOD: IMPLODED` | Wrong twice: the models used "a new method and materials" but were **not** co-bonded (NTSB p. 62), and one did not implode (the test was stopped at 2,500 m, p. 27). It also contradicts VO L37 | `< 3,000 M · SCALE MODELS, NEW MATERIAL: IMPLODED OR NEARLY` | C46 | must |
| 27 | treatment, signature 1 | `4,200 M · PROOF HOLD 20 MIN`; "metres with feet and psi beside" | "Proof" is not the record's word. The record gives psi only for 4,200 m (6,154), 4,000 m (5,862) and 3,840 m (5,627); any other psi is our arithmetic | `4,200 M · TEST HOLD 20 MIN`; show psi only for the record's three depths, or label computed values | C06, C56 | should |
| 28 | treatment, signature 2 | "Six dives' group-4 hoop traces ... Against time: six humps." | The NTSB figures (MIR fig. 21; Materials figs. 28–31) plot **five** dives: 75, 80, 81, 82, 83 (76 and 79 "not shown") | "Five dives' traces ... five humps", or digitise 76 and 79 from another source and say so | C84 | must |
| 29 | treatment, 13:15 beat | `$1,750` | Canadian dollars, plus tax (USCG 4.35.3) | `CA$1,750` | C18 | must |
| 30 | treatment, fairness flags | "Disputed rows never on screen as fact: C16 (dive 83's date)..." | Dive 83 = 23 JUL 2022 in five places (NTSB Table 5, App. C, 1.6; Materials 2.1; USCG 4.34.10); only NTSB 2.2 says 25 JUL, the expedition's end date. The bow distance is now disputed | Drop C16 from the list (the ledger's `23 JUL` may stay); add C38 | C16, C38 | should |
| 31 | treatment, 23:00 myths beat | window line cites USCG 5.5 only as criticism | The board's own conclusion is that the window was unlikely the cause | Carry fix #16 on screen too | C94 | should |
| 32 | treatment, 24:00 beat | "status on the upload date (to source)" | Now sourced: all four are `OPEN-- ACCEPTABLE RESPONSE` (NTSB, 22 OCT 2026); the Coast Guard partly disagreed (no expert panel) | Status chips: `OPEN · ACCEPTABLE RESPONSE · NTSB 22 OCT 2026`, re-checked on upload day. For the regulator-gets-the-same-scrutiny rule, consider: "The Coast Guard agreed to update its guidance, and partly agreed with the rest. As of October twenty twenty-six, all four remain open." | C96, C97 | should |
| 33 | treatment header, beat 0:28 | "the two final reports" | There is a third: Canada's TSB, M23A0169, 17 JUN 2026, six recommendations | Decide whether Act V gives the TSB one line (after it is read); "the reports" in VO L9 already covers it | C98 | should |
| 34 | treatment, 0:50 beat | "Text log at true times" | The reports differ on start time and depth (C50: 0900 / 9:14; 3,363 / 3,341 m); the board logs the final ping | Pick one record per readout and credit it; show the 10:47:08 ping if the log shows the last signals | C50, C73 | should |

## 2. Web checks

| Question | Finding | Source |
|---|---|---|
| **NTSB recommendations M-25-012 to -015** | Issued 15 OCT 2025 to the Acting Commandant, reply asked within 90 days. Coast Guard reply 14 JAN 2026 (Acting Deputy Commandant for Operations): **M-25-014 concur** ("Revisions to NVIC 5'-93 are necessary to reflect up-to-date statutory terms and passenger count thresholds"); **M-25-012 partially concur** ("I do not concur that commissioning a panel of industry experts is warranted"; it will use requests for information or a federal advisory committee); **M-25-013 partially concur** (will evaluate whether regulations, and new statutory authority, are needed); **M-25-015 partially concur** (will evaluate proposing mandatory international rules). NTSB reply 22 OCT 2026: all four **"OPEN-- ACCEPTABLE RESPONSE"**, and it urged the Coast Guard to "explore nontraditional avenues to find new voices and avoid blind spots". | NTSB CAROL, https://data.ntsb.gov/carol-main-public/sr-details/M-25-012 (and -013, -014, -015; data read from `data.ntsb.gov/carol-main-public/api/Query/GetSrRecord/M-25-012`); letter https://www.ntsb.gov/safety/safety-recs/recletters/M-25-012-015.pdf |
| **Commandant's Final Action Memorandum (FAM)** | **Not published** as of the NTSB's 22 OCT 2026 letter: "the Coast Guard has not yet published the commandant's final action memorandum in response to those recommendations." No later news found. uscg.mil refuses this container (HTTP 403), so it needs one more look before upload (Cowork, below). On air, only "had not been published as of" a stated date. | CAROL (above); the Coast Guard's release of the report (blocked here): https://www.news.uscg.mil/Press-Releases/Article/4265651/coast-guard-marine-board-of-investigation-releases-report-on-titan-submersible/ |
| **Canada's TSB** | Investigation **M23A0169** (Titan and the Canadian ship Polar Prince, which towed it from St. John's). **Final report released 17 JUN 2026, six recommendations** (mainly to Transport Canada, plus pushing the IMO on MSC.1/Circ. 981). As quoted by two outlets: the cylinder's reduced compressive strength and defects from manufacturing, operations, storage and transport "likely led the cylinder to fail progressively, due to damage accumulating during each dive cycle"; it "could have used more than 82 per cent of its fatigue life"; "The acoustic emission system was never tested to demonstrate it would provide sufficient advance warning"; Transport Canada gave Titan no oversight. **The TSB's own pages and PDF refuse this container (403): primary not read.** Canada was also a substantially interested state in both US investigations. | https://www.tsb.gc.ca/eng/enquetes-investigations/marine/2023/m23a0169/m23a0169.html ; PDF https://www.bst.gc.ca/sites/default/files/2026-06/M23A0169-ENG.pdf ; press: https://globalnews.ca/news/11909434/titan-submersible-report-tsb/ , https://www.thesafetymag.com/ca/news/general/titan-submersible-hull-strength-never-validated-tsb-finds/547627 , https://www.iims.org.uk/?p=60931 |
| **UK MAIB** | Neither US record names the MAIB. Both name the **United Kingdom**, with Canada and France, as a "Substantially Interested State" (USCG ROI 1.6; NTSB App. A). No MAIB investigation or report found. **Do not name the MAIB on air**; if needed, "Britain, France and Canada took part in the US investigations". | MBI PDF p. 9; NTSB PDF p. 77 |
| **OceanGate's status** | The board: OceanGate "has permanently ceased all maritime operations" (ROI 6.4, 04 AUG 2025). Whether the company still exists as a legal entity is unverified (2025 press: inactive, not dissolved). It still has a legal identity to protect: the fairness pass should treat it as a living company. | MBI PDF p. 329; press only beyond that |
| **Pending civil suits** | **Ortoli v. OceanGate et al.** (the estate of Paul-Henri Nargeolet), wrongful death, King County Superior Court, filed AUG 2024, over $50 million sought; removed to federal court by a co-defendant and remanded to state court by Judge Lauren King (W.D. Wash.). Reported as still active in 2026 by a secondary site only. **Docket not verified** (CourtListener refuses this container). Not in the narration; if it is ever used, say "pending" with the date of a docket check, the claims as allegations, and the defendants' response. | https://www.newsweek.com/oceangate-submarine-titan-implosion-victims-nargeolet-lawsuit-2026068 |
| **Who was aboard dives 81 and 82** | Dive 81 was crewed: a former OceanGate scientific director testified under oath that he was "listed as a crew member on Dive 81", and named the company pilot (CG 112 printed pp. 482–484); the board's 4.34.9 says "the TITAN and its crew". The local records do not list dive 82's occupants; exhibit CG-052 (the full dive list) is not in the local set and the NTSB docket listing could not be read from here. No individual should be named on air. | CG 112 PDF pp. 483–485 |

**Cowork request for the owner** (the four primary sources this container cannot reach; one round):

```text
Download these files and save them to Google Drive, folder Margin-of-Error/titan/records/cowork/ (create it if missing). Keep the original file names, no re-encoding.
1. https://www.bst.gc.ca/sites/default/files/2026-06/M23A0169-ENG.pdf : Transportation Safety Board of Canada final report M23A0169 on the Titan submersible (PDF, English)
2. https://www.tsb.gc.ca/eng/medias-media/communiques/marine/2026/m23a0169-20260617.html : TSB news release of 17 June 2026 (save the page as PDF)
3. https://www.news.uscg.mil/News-by-Region/Headquarters/Titan-Submersible/ : US Coast Guard Titan page (save as PDF), plus any "Final Action Memo" or "FAM" document linked from it
4. The docket of Ortoli v. OceanGate Inc. et al. (estate of Paul-Henri Nargeolet), King County Superior Court, Washington, filed August 2024: find it with the court's online case search and save the docket list as PDF
When done, also save list.csv in the same folder: file name, source page URL, title, author, date shown on the page.
```

## 3. What was confirmed (no change needed)

The specific checks asked for:

| Check | Result | Row |
|---|---|---|
| "Then nothing more came back"; did the ship reply? | The ship replied (10:48 acknowledgement, no response), but one automated ping came back after the message: fix #1 | C73, C37 |
| "Four days later ... tail cone and both titanium domes ... about five hundred metres from the bow" | Four days and the parts are right (NTSB 1.2; the board: forward cone, tail piece and the aft portion that morning); the distance is disputed: fix #2 | C38 |
| "about three hundred and eighty times the pressure at the surface" | Re-run: 5,627 psi × 6,894.757 Pa = 38.80 MPa (`5,627 PSI · 38.8 MPA` on screen is right); ÷ 101,325 Pa = 382.9 (383.9 absolute). "About three hundred and eighty" holds | C74, C07 |
| The CEO's carbon-fibre reasons (NTSB p. 25 verbatim) | First sentence right and attributed; second sentence wrong: fix #4 | C76 |
| "promoted from software engineer before that season" = Phil Brooks | Confirmed by his sworn testimony: "basically a Linux software engineer and then in the fall of 2021 ... I was promoted to engineering director" (printed pp. 732–733); USCG 4.34.1 | C62 |
| "the people inside heard a loud bang. So did the crew of a small boat" | Confirmed: NTSB pp. 36, 58; USCG 4.34.8.1, 5.7 | C81 |
| "In September, the base wrote again" | Confirmed: 28 SEP 2022 (USCG 4.35.4, 5.20); add OceanGate's reply: fix #10 | C89 |
| "freezing rain, sleet and snow" | Confirmed: the board's words (5.20) | C90 |
| "the platform tipped over more than once" | "Tipped", yes; "over", no: fix #11 | C43 |
| Dive 81 on 19 JUL, dive 82 "three days later" | Confirmed: 19 and 22 JUL 2022 (NTSB Table 5, App. C; USCG 4.34.9) | C83 |
| "The damage reached the forward end of the cylinder" | True of the dive-80 damage (NTSB p. 59): fix #19 makes that clear | C87 |
| The controller and window lines | Controller facts right, "game" unsourced: fix #15. Window: fix #16 | C93, C94 |
| "the N - T - S - B placed the failure in the carbon cylinder" | Fair: local buckling of the delaminated composite (NTSB 2.2, probable cause); the board also places it in the hull | C25, C95 |
| "about seven hours" | The board's figure does not fit its own clocks: fix #13 | C71 |

Also confirmed, line by line (row ids in brackets): the dive 80 date and the "burst of sound" and "sudden shift in strain"
(C08, NTSB p. 52); eleven months (338 days); the five names (C52); hard to inspect, so the monitor (C55); three of eight
sensors silent all 2022 (C09; NTSB p. 51 "did not register acoustic events for any of the 2022 dives"); criteria set on
hulls built another way (C31, C79); strain read against time (C30, C54); the NTSB re-plot against depth (C30); "America's
accident investigator" (C103); release about nine, first 2023 dive below ten metres (C37); 10:47 at about 3,350 m,
dropping two weights as a standard step (C49, C50); thirteen dives to 3,840 m and failing about 500 m shallower (C27,
C26: 477–499 m); not built the way deep submersibles usually are (C75); five one-inch layers, rings glued, domes bolted
(C03, NTSB p. 62 "titanium rings"); 6,000 m × 2.25 (C05); 7,500 m analysis (C45); scale models under 3,000 m (C46);
co-bonding never tried on a model, only the hull that carried people (C46); Maryland, the plan's 4,200 m on three of four
days, reached once on 01 MAR for twenty minutes, near 4,000 m and two four-hour holds at 3,840 m (C56, C06, C07);
the dome limit (C57); never tested to failure, "unlikely" (C47); eight acoustic sensors and sixteen strain gauges (C36);
data downloaded after each dive, acoustic data only from the dive (C80, C32); 18 JAN 2018 report, 26 items, the two
quotes (C23, C44); met the next day, fired four days later, "impasse" (C59); the letter never formally sent, received,
its author called (C60); the 2019 crack and the first director's testimony and the firing letter (C61); channel 2 above
25,000 mV and the co-located gauges at the same moment (C08, C82); Brooks's oath and every quote, verbatim (C13, C33,
C34, C63, C64, C65); the contractor's sworn account, attributed (C66, C51); OceanGate's "shifted in its frame" (C14);
the slopes 5.00, 4.74, 8.76, 8.09, 8.77 (C41); non-linear in the shallowest 500 m (C84); gauges unchanged, hull changed
(C48); long voids at layers 1–2 and 3–4 (C85); the NTSB's finding in L142, verbatim from its 2.4 conclusion (C12);
three more dives that July (C15); 26 JUL into an uncovered parking lot (C88); 1.4°F to 84.2°F (−17°C to 29°C) until
06 FEB (C19); $1.85 million advanced, salaries (C24, C91); Brooks left early 2023 (February, per his counsel) and his
words (C35); the post left vacant and the board's two sentences (C21, C67); Horizon Arctic unavailable, the smaller
Polar Prince (C29, C92); small passenger vessel, never registered, never inspected (C68); "mission specialists" (C53);
NVIC 05-93 July 1993, the December 1993 law, never updated, no specific standards (C69); rescue depth guidance (C70);
the insufficiency finding (C25); 2023's four shallow dives and the first deep dive in eleven months (C17); local
buckling (C25); the probable cause and contributing factors (C25); "preventable tragedy" (C02); the board's two
referral sentences, kept together (C39); a rescue was not possible, assets would likely have found Titan sooner (C71);
the four recommendations as described (C72, C96); the sign-off (C10, C11).

On screen and in the package, confirmed: the three titles; thumbnail A; thumbnail B's depths (dives 75–83, with 81
and 82 at 3,840 m); thumbnail C's `4.74 → 8.76 M/MV`; `15 JUL 2022 · DIVE 80`; `5,627 PSI · 38.8 MPA`; `HULL 1 · 18 JAN
2018`; 25,687 mV; `6,000 M × 2.25`; `≈7,500 M · ANALYSIS, PERFECT GEOMETRY`; `3,840 M · WORKING DEPTH · 240-MIN HOLDS`;
`NEVER TESTED TO FAILURE · NTSB`; `1.4°F to 84.2°F (−17°C to 29°C)`; the ledger dates `19 JUL · 22 JUL · 23 JUL`.

## 4. Merging with `fairness_v2.md` (committed by another session while this check ran)

The fairness pass reached the same fixes, independently, for L29 (its M1), L33 (M2), L62 (M4), L75 (M5), L79 (M6),
L109 (M8), L166 and L168 (M10), L186–L188 (M12), the controller's "Neither report" (M15), the scale-model label (M16)
and L214 (S13); its M3 wording for L7/L56 ("registered no acoustic events") is also fine on the record. Where the two
differ, or this check adds something:
- **M14 keeps "about seven hours" (L209): use "more than seven hours" (#13).** The board's own clocks give 7 h 40 min
  to 8 h 23 min.
- **M10's last sentence, "Before its first dive of the year, the platform tipped down at one end more than once",
  misdates it:** the first 2023 dive was dive 84 on 22 MAY; the tail-cone mishap was on 24 MAY (USCG 4.38.17–4.38.22),
  and the NTSB's two photographed tips were 20 and 27 MAY. Say "In twenty twenty-three, under tow, the platform tipped
  down at one end more than once."
- M8's "maybe just barely over it" checks out (CG 112 printed p. 801); #9 now uses it.
- **Not in the fairness pass:** #1 (the last message and the final ping), #2 (bow distance), #10 (Canadian dollars,
  and OceanGate's September reply), #15 ("game" controller), #16 (the window: the board found it unlikely the cause),
  #17 (thirteen dives in a ledger of six), #18 ("eightieth"), #19 (forward end), #28 (five dives, not six), #29
  (`CA$1,750` on screen), #30 (C16 off the disputed list, C38 on it).
- **Page numbers:** its CG 112 references, like the writer's, run one below the printed footer (it gives "eight to
  ten" as p. 751; the PDF page carrying that line is footed "Page 752 of 1651"). Rule: printed page = PDF page − 1.

## 5. For the fairness pass (found here, not errors)

- Brooks, in the same testimony: asked whether he was qualified to judge what the strain shift meant, "Probably not,
  no"; decisions were "primarily Stockton's call" (CG 112 printed p. 767). The dive 81 crew member testified
  that Brooks told him "this noise was a concern" and the team was working to find its source (printed p. 483).
- Brooks recalled ping tests showing all acoustic channels working (printed p. 762), against the board's finding.
- The salary request was for volunteers, and Brooks did not think anyone took it up (C91).
- The strength analyses applied knockdown factors (NTSB fn 46, C78).
- After the implosion, MTS leadership said its concerns had been "primarily based on technical disagreements" (USCG
  5.16, C60).
- The board also calls the switch to Polar Prince "The decision to charter the less expensive POLAR PRINCE" (6.1.1.11.2);
  the narration's "unavailable" is the softer finding of fact.

*Records not checked here:* the description (not written yet), the 30+ title variants beyond the three in the
treatment, and the rights to each figure (the source-exhibits pass).
