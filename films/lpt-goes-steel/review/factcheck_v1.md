# Transformer steel: fact-check v1 (27 NOV 2026)

Independent fact-check at `max` effort (PLAYBOOK §9.1–§9.6, skill `fact-check`) of `treatment.md` v2, the three
titles and thumbnail words in `brief.md`, and the writer's draft `claims.csv` (C01–C40). The checker did not write the
script. Every record named below was opened on 27 NOV 2026. Quotes were matched in code after normalising quotes and
whitespace; each miss was read by eye (footnote markers, line-break hyphens, scanned annexes read by OCR and then
checked against the page image).

**Verdict.** The spine holds on the record: the 920 mm datasheet, the 15 OCT 2020 finding, the 05 NOV 2020 Mexico
statement and the 18 AUG 2025 inclusion are all primary-sourced. "Until August 2025 no Section 232 tariff covered
cores" now rests on a full chain of records (C52). But 24 places in the treatment and package say more than the record,
or something different from it. Three of them touch the locked package's wording, not its promise (items 2, 12, 13).
Fix §1 before the opening is written.

**Gate.** `claims.csv` now has 93 rows: 67 confirmed, 23 claim, 3 disputed (C05, C26, C81).
`python3 scripts/claims_check.py films/lpt-goes-steel/claims.csv` passes. The gate checks the claims file, not the
treatment: the wrong lines below are recorded in `claims.csv` in their corrected form, with the fix in each row's note.
`brief.md` and `treatment.md` still say "C01–C40" and "35 rows"; update them with the revision.

## 1. What the treatment and package must change (most important first)

| # | Where | As written | What the record says | Fix | Rows |
|---|---|---|---|---|---|
| 1 | 0:00 first words; logline | "The steel inside America's large power transformers is made at home by one mill." / "the steel at its core is made in the US by one mill" | Most LPT core steel is imported. DOE 2024: "U.S. LPT manufacturers primarily import GOES from Japan and South Korea"; the US option is "not commonly used by U.S. LPT manufacturers"; 82% of LPTs were imported in 2019. | "Only one mill in America makes the steel for transformer cores. Its widest coil is nine hundred and twenty millimetres." (matches title A) | C93, C25, C02, C10 |
| 2 | Brief promise and case sheet; logline | "the government's own investigators found that larger transformer cores need steel wider than 932 mm" | Commerce opens the paragraph with "Another concern expressed by domestic transformer manufacturers", then writes in its own voice "The company does not produce steel wide enough (>932mm)…" (Section VII, p. 104, not the formal Findings). | "wrote" or "recorded" (the cold-open draft's "wrote" is right); never "found" for the width. The promise's substance is unchanged. | C16 |
| 3 | 10:00; end of the 8:20 calendar | "'steel content' in laminations and cores comes under the 50% steel tariff" | True on 18 AUG 2025. The same notice also covered liquid-filled transformers over 10,000 kVA (8504.23.00, which includes large power transformers). Since 06 APR 2026 (Proclamation 11021) the tariff is on full value: laminations and cores 25% (Annex I-B); 8504.23.00 on a temporary reduced list to 31 DEC 2027 (Annex III). Unchanged by Proclamation 11032 (08 JUN 2026). | Date the 2025 regime on screen, add one line that it changed in April 2026, and say the August 2025 notice also covered the large transformers. | C18, C51, C54–C56 |
| 4 | 8:20 signature 2 (the calendar) | NOV 2020 → AUG 2025 run, "a date every second", no narration | Inside the window the record has: report posted JUL 2021 and published 18 NOV 2021; a 06 JUN 2022 presidential determination under the Defense Production Act on transformers and grid components (no appropriated funds as of SEP 2023); an AUG 2024 DOE award (Phase 1 $19.07M, up to $75M) to the Butler Works project. None is a tariff. | Put these four dates on the calendar. The supported sentence is "Until August 2025, no Section 232 tariff covered imported cores". Without them the run reads as five idle years and loads the blame on one administration (§9.6; the treatment's own "same scrutiny" rule). | C50, C52, C57, C58, C60 |
| 5 | Logline; 0:32 | "the trade office chose a monitoring regime over a tariff" | USTR: imports from Mexico "will not be subject to any action … under Section 232", "In light of" Mexico's monitoring. Mexico only. A Section 232 action is the President's. | "The US Trade Representative announced that cores from Mexico would not be subject to any Section 232 action, in light of a Mexican monitoring regime." | C17 |
| 6 | 7:00 | "some of those cores were cut from Cleveland-Cliffs' own steel, sent north" | ERMCO's own comment (17 SEP 2025): after buying Spire in 2022 it "now uses Cliffs' steel exclusively by exporting it to Canada for conversion to cores". For 2019, Commerce called US steel coming back as cores "likely minimal". | Remove from 7:00 (it does not describe the 2015–2019 figures). If kept, move to 10:00 as ERMCO's 2025 statement, noting the August 2025 tariff excepted cores made abroad from US-melted steel. | C40, C73, C51 |
| 7 | 9:30; fairness section | "a competitor's filing"; "1,400 tons a year above 920 mm"; Cliffs' answer "quoted in the same filing" | Howard Industries is a transformer maker that buys GOES, from Cliffs among others, opposing a tariff request in the BIS docket: not a competitor. The 2020 release gives no period: "only requires 1,400 tons of GOES in that width or greater". Cliffs' answer is in its own filing (29 SEP 2025). | "a transformer maker that buys this steel"; drop "a year"; "920 millimetres or wider"; quote Cliffs from its own filing. | C29, C30, C74, C75 |
| 8 | 5:40; brief case sheet | "wound cores `100%` imported in 2019" | DOE 2024 says 100% (citing Commerce p. 132). Commerce's public text: about 75% of wound-core and 54% of stacked-core purchases were imported in 2019, and the domestic makers of the rest have since shut their US plants. | Use Commerce's 2019 numbers, or "by DOE's count, all wound cores are imported" without the year. | C26 (disputed), C72 |
| 9 | 1:50 | "'only about three' of the heaviest cars"; "DOE 2014 photo of a Schnabel car (public domain)" | DOE 2024: "Only about three of these specialized transport cars" (sourced to a 2014 trade blog). DOE 2014: "only about 30 of them in North America". The DOE 2014 photo is credited "Source: ABB"; the DOE 2024 photo is a YouTube still credited to SofterImage. | Give both DOE figures, or drop the count and keep "nine months". Find another Schnabel photo (§11): neither DOE photo is public domain. | C05 (disputed) |
| 10 | 0:20 and 11:00; logline "while the wait … went from months to years" | The wait set beside the steel | The same DOE testimony: "three main chokepoints … labor, supply-demand mismatch, and material availability". The figures are for distribution transformers. | Say the three causes and "distribution transformers" wherever the wait sits beside the steel. | C34, C59 |
| 11 | 11:30–12:00 | The 2030 model; "baseline: likely enough transformers"; "the two-thirds line" | In the model copper binds first, then bulk steel and nickel; grain-oriented steel is never modelled (steel sourcing about 79% US by 2030). The release's baseline sentence and Dvorkin's quote in the same release ("likely to have transformer shortages even without the most aggressive power demand growth") point opposite ways. Two-thirds is of "all the expected equipment shortages", not transformers. | Don't present the model as a consequence of the mill; name its binding material; use the paper's "transformer demand remains fully met through 2029" or both release lines; scope the two-thirds. Numbers are from arXiv v2: check the published article (doi 10.1016/j.crsus.2026.100923). | C22, C80, C81 (disputed), C82 |
| 12 | Title B | "Transformer Shortage: America's Only Steel Mill Stops at 920 mm" | Read literally, it says America has one steel mill. | Needs "transformer steel" or "GOES" in it (e.g. "America's Only Transformer-Steel Mill Stops at 920 mm", with length and `title_lint.py` re-run), or another challenger. The promise does not change. Owner's call. | C10, C07 |
| 13 | Thumbnail B; title C; thumbnail A | "12 MM SHORT"; "America's Steel Stops at 920 mm"; "NEED 932+" | The need is ">932", so the gap is more than 12 mm. "America's steel" is all US steel. ">932" is exact; "932+" is close. | "12+ MM SHORT". Title C: "America's Transformer Steel…" if it fits. Thumbnail A may stay. | C35, C16 |
| 14 | 3:00 | "That is why one mill can't be swapped for another." | No record says so. DOE 2024: U.S. Steel "has the capability to produce GOES" through Big River Steel but makes non-oriented steel instead. | Commerce: GOES "requires dedicated equipment, advanced manufacturing process know-how, and well-trained, experienced employees". | C68, C69, C63 |
| 15 | 5:40; fairness section | "So is it bad steel? No: … 1.01 W/kg for stacked cores" | The table does not say "stacked cores". The company: its DR grades suit transformers "where a stress relief annealing treatment of the magnetic core is not used". 1.01 W/kg is the typical value (guaranteed maximum 1.06). | Use the company's framing; neither "good" nor "bad" in our voice. | C09, C67 |
| 16 | 2:30 | "120 times a second"; "the metal resists"; "3% silicon steel, thinner than a fingernail" | EIA: about 60 cycles a second (120 reversals is our arithmetic; EIA's own gloss counts 60). Commerce: losses from eddy currents and hysteresis. About 3.2% silicon (Commerce). 0.23–0.30 mm (datasheet). Nothing for the fingernail. | "sixty cycles a second, the current reversing twice in each"; "each time, a little energy is lost as heat in the core"; "about three percent silicon"; "about a quarter of a millimetre". | C63, C64, C70, C71 |
| 17 | 6:00 | "Every grid that needs this steel stands in the same queue" | No record. | Cut, or source it (a UK record included). | C39 |
| 18 | 10:30; 8:20 counter | The think tank's series | $126M → $524M is ×4.16 (+316%): "more than quadrupled", not "over 400%". It includes laminations; Commerce's $22M → $167M is cores only. 2025 is a full year, including months after the tariff. | Label each series' scope on screen; never "400 percent"; don't show the 2025 total as reached by 18 AUG 2025. | C21, C23 |
| 19 | 14:00 | "$75M DOE award" | DOE: "Total OCED Cost Share: Up to $75 million"; Phase 1 $19.07M (AUG 2024); the rest phase by phase. Completion "early 2028" is the company's expectation. | "up to seventy-five million dollars from DOE, in phases", or attribute $75M to the company. | C11, C60 |
| 20 | 15:50; the 3:40 promise to answer "why not roll it wider?" | "a modern wide mill or retrofit, $1–2B" | Breakthrough: "Butler Works retrofit or a modern greenfield GOES mill … $1-2 billion" (no source given; no "wide"). No record gives an engineering reason the mill cannot roll wider. DOE 2022, citing Commerce, ties "narrow width" complaints to technology it calls "outdated"; Commerce ties investment to years of poor profitability. | Drop "wide". Answer: "the records don't give an engineering reason", then Commerce's profitability finding and the think tank's price. DOE's "outdated" only if attributed with that context. | C79, C87, C88 |
| 21 | Sign-off 1 | "more than nine hundred and thirty-two for the largest cores. Until those numbers meet, the grid's margin is a queue." | Record: "larger transformers". The queue has three causes (item 10). | "…for the larger cores. Until those numbers meet, most of the steel for those cores comes from abroad." | C16, C59, C93 |
| 22 | 0:20 | Hearing video with "up to two years compared to 2 to 4 months in 2019" | Written testimony; not yet checked as spoken. | If the clip doesn't carry the line in his voice, show the testimony page, not his face under the quote. | C34 |
| 23 | 12:50 | "an industry estimate repeated as a census" | Supported: DOE 2014's body says "Various sources, including power equipment manufacturers, estimated"; its executive summary states the figure without the hedge; DOE 2022 and DOE 2024 repeat it. The 2011 matter is "Large Power Transformers from Korea". | Keep. "Census" is ours: "repeated as if it had been measured", labelled as our reading. | C06, C84–C86 |
| 24 | 14:40 | "named plant expansions (lead)" | Company releases opened: Hitachi Energy, about $457M, South Boston VA (04 SEP 2025; ground broken 29 JUN 2026); Siemens Energy, $150M, Charlotte NC (14 FEB 2024; first units planned early 2026, start not confirmed); HD Hyundai Electric, about $200M, Montgomery AL (ground broken 06 MAR 2026; target APR 2027). | Company statements with dates; no "largest" (two companies claim it); "planned" for Siemens. None says where its core steel will come from. | C76–C78 |

## 2. The leads: what the record settled

- **The 2018 proclamation's scope: CONFIRMED.** Proclamation 9705 defines "steel articles" by HTS ranges that include
  headings 7225 and 7226 (GOES coil is HS 7225.11); chapter 85 is outside. Commerce's own 2020 options say extending
  9705 to 8504.90.9634/.9638/.9642, or moving cores to chapter 72, is what "would" make 9705 "apply". DOE (JUL 2024):
  GOES pays the tariff "while laminations and cores are not". Korea and Brazil had quotas; Canada and Mexico were
  excluded from 20 MAY 2019. Say "from most countries". (C41–C44, C53, C90)
- **Canada: CLOSED as far as the record goes.** Canada's own 17 MAY 2019 joint statement with the US carries the same
  pledge as Mexico's to prevent transshipment and "consult together". Only Mexico's consultations were announced as concluded
  (05 NOV 2020). Canada contested the circumvention allegation in its 02 JUL 2020 submission. CRS (MAY 2021): "No other
  action against other countries was taken." Why only Mexico is named is in no record we hold: the film says so.
  Gemini's "85 FR 17775" is KILLED: that page is in an FDIC rule on industrial banks (85 FR 17771–17786), not a
  record about Canada. (C47–C49)
- **Any Section 232 action on cores, NOV 2020 to 18 AUG 2025: NONE FOUND, and the negative is held to its record.**
  All 20 steel Section 232 proclamations we found in the Federal Register from MAR 2018 to JUN 2025 (listed in C52)
  were read (text, and scanned annexes by OCR): no 8504 code. A Federal Register full-text search for "8504.90.9638" (2018–2026) returns only the
  2021 report publication and 90 FR 40326. CRS (2021), DOE (2024), BIS and Cleveland-Cliffs (AUG 2025) and ERMCO
  ("as of last month, these products are now included", SEP 2025) agree. Other federal action in the window is on
  record and belongs on the calendar (item 4). (C52, C57, C58, C60)
- **BIS 90 FR 40326 annex: CONFIRMED.** Lists 8504.90.9634, .9638, .9642 and 8504.23.00; effective 12:01 a.m.
  18 AUG 2025; tax on steel content; products processed abroad from US-melted-and-poured steel excepted. The regime
  changed on 06 APR 2026 and was amended 08 JUN 2026 (item 3). (C51, C54–C56)
- **Why the mill can't simply roll wider: KILLED as an engineering explanation.** No record found gives one. What the
  record does give: DOE 2022's "narrow width" complaint tied to "outdated" technology (DOE's word, citing Commerce),
  Commerce's finding that poor profitability impeded investment, and the think tank's $1–2B price. (C87, C88, C79)
- **Lamination thickness and silicon: CONFIRMED** (0.23, 0.27, 0.30 mm; about 3.2% silicon). "Thinner than a
  fingernail": KILLED (no source). (C63, C64)
- **Schnabel car count and the DOE 2014 photo: DISPUTED and KILLED respectively** (item 9). (C05)
- **OEM plant expansions: CONFIRMED as the companies' own statements** (item 24). (C76–C78)
- **$1–2B retrofit: CONFIRMED as the Breakthrough Institute's estimate**, in the owner-fetched reading copy (no source
  given in it). (C79)
- **Also strengthened:** the 600 °C beat now rests on Commerce's own description of laser-scribed versus heat-proof
  steel ("no known production … in the United States"), not only on the think tank. (C66, C67)

## 3. Existing rows: what changed and why

| Row | Change | Why |
|---|---|---|
| C01 | Quote corrected; LPT definition noted | The page reads "Department of Energy (DOE) estimates"; the old quote was not on the page as written |
| C02 | Attributed to Commerce; arithmetic and page added | DOE cites Commerce; Commerce's own base is 750 units ("over 82 percent", p. 198) |
| C04 | Quote widened | "36-month lead times being commonly quoted" belongs with "up to 60" |
| C05 | confirmed → **disputed** | DOE 2014 says about 30 Schnabel cars in North America; photo licences |
| C06 | Claim and quote widened | DOE's own hedge ("Various sources, including power equipment manufacturers, estimated") |
| C07 | Page-8 quote added | "Master coils are available in widths of 914 mm … and 920 mm"; conventional grades the same (C62) |
| C09 | Claim reworded | "Typical", as-sheared test; the table does not say "for stacked cores" |
| C10 | claim → confirmed; source upgraded | DOE (AUG 2024): "the only production facility for high-silicon grain oriented electrical steel (GOES) in the United States"; Zanesville finishing noted (C61) |
| C11 | Note | DOE: "up to $75 million", phased; completion "early 2028" (company) |
| C12 | Note | Facility-wide headcount, not GOES jobs |
| C13 | Note | Report dates; the formal findings also cover LPTs |
| C16 | Claim and quote reworded | The width point is introduced as transformer makers' concern |
| C17 | Note | Mexico only; "in light of"; Canada in C47–C49 |
| C18 | Note | Tied to BIS 90 FR 40326, the 50% rate (C54) and the 2026 changes |
| C21 | Note | "Over 400%" is wrong arithmetic (×4.16, +316%); scope differs from Commerce's series |
| C22 | Note | Model scope (copper first, bulk steel); published-version check |
| C23 | Note | 650% is Commerce's figure (659% from the rounded numbers) |
| C25 | Note | Commerce's original wording is softer than DOE's "no efficiency benefit" |
| C26 | confirmed → **disputed** | Commerce's 2019 shares are 75% (wound) and 54% (stacked) |
| C29 | Note | No "a year" in the release |
| C30 | Note | Howard is not a competitor; its 220 kt footnotes a 2020 capacity figure |
| C34 | Note | Written testimony; three chokepoints (C59) |
| C35 | Note | Thumbnail B wording |
| C37 | Claim reworded | Commerce cites "Public comments of Domestic Transformer Producers" |
| C39 | Note | The "same queue" line has no record |
| C40 | Source upgraded to ERMCO's own comment; dated | It describes ERMCO after 2022, not 2015–2019 |

C03, C08, C14, C15, C19, C20, C24, C27, C28, C31, C32, C33, C36 and C38 were re-opened, the quotes matched, the
claims unchanged (notes refreshed). C19–C21, C32, C33 rest on the owner-fetched reading copies in Drive
(`lpt-goes-steel/records/`), as before.

## 4. New rows (C41–C93)

Tariff scope and timeline: C41–C47, C50–C56, C90–C92. Canada: C48, C49. Federal action inside the window: C57, C58,
C60, C89. Physics and the steel: C61–C71. Import shares and re-imports: C72, C73. The docket parties: C74, C75.
Plants: C76–C78. Think tank and model: C79–C82. The 232 gloss: C83. The 40-year figure's travels: C84–C86. "Why not
wider": C87, C88. Where LPT steel comes from: C93.

## 5. Calculations re-run

| Calculation | Result | Verdict |
|---|---|---|
| 932 − 920 | 12; the need is ">932" | "more than twelve millimetres" (C35). 932 mm = 36.69 in (ours) |
| 15 OCT → 05 NOV 2020 | 21 days (from delivery on 16 OCT: 20) | "three weeks" holds (C91) |
| 15 OCT 2020 → 18 AUG 2025 | 4 y 10 m 3 d (1,768 days); from 05 NOV 2020: 4 y 9 m 13 d | "almost five years" holds (C92) |
| $22M → $167M | (167 − 22)/22 = 659% | Quote Commerce's "650 percent" as Commerce's (C23) |
| 617 of 754; 617 of 750 | 81.8%; 82.3% | 82% holds both ways (C02) |
| $126M → $524M | ×4.16, +316% | "over 400%" is wrong: "more than quadrupled" (C21) |
| 107.3/738.8; 184.7/738.8; 33.4/664.9 | 14.5%; 25.0%; 5.0% | The paper's numbers reproduce (C22) |
| 52% + 45% | 97% | Our sum: show the two shares (C23) |
| 60 Hz × 2 | 120 reversals a second | Holds; word it to avoid EIA's own gloss (C70) |
| 600 kg per 100 mm × 920 mm | about 5,520 kg per 920 mm master coil | For hero 1's proportions (datasheet p. 8) |

## 6. Fairness flags (§9.6)

| Line | Risk | Safe wording |
|---|---|---|
| 0:00 / logline "made at home by one mill" | Misstates where LPT steel comes from; overstates Cliffs' role | Item 1 |
| Width "found" | Puts on Commerce what Commerce attributes to transformer makers | "Commerce's report records…" (C16) |
| 7:00 Cliffs' steel in Canadian cores | Misdated; implies Cliffs' own steel fed the flows it denounced | Item 6 |
| 9:30 Howard "a competitor" | Mischaracterises a party | "a transformer maker that buys this steel". Never repeat Howard's "manipulates trade data", "disingenuous", or its second-hand CEO quote |
| "loophole", "circumvention", "transshipment" | Allegations against unnamed Canadian and Mexican firms | Attribute (Cleveland-Cliffs, the think tank; "transshipment" is USTR's own word in C17) and give Canada's answer (C48) |
| 5:40–6:00 steel quality | DOE's "no efficiency benefit" is DOE's paraphrase; the think tank calls the steel "inferior" | Attribute each; Commerce's softer original (C25); the company's own framing (C67); never "good", "bad", "inferior" in our voice |
| 8:20 calendar | Omits 2021–2024 federal actions; reads as one administration's idleness | Item 4 |
| Logline "the trade office chose" | Overstates what USTR's statement did | Item 5 |
| 15:50 DOE's "outdated" | Strong word about a named company | DOE's, with Commerce's profitability context and the company's project, or not at all |
| 14:00 "$75M DOE award" | Overstates public money paid | "up to", in phases (C60) |
| 14:40 "largest" | Two companies claim it | Use neither |
| 12:00 Dvorkin | The researcher's framing of utilities versus data centres | His words only, attributed; add nothing |
| Titles B and C | Literal overstatement | Item 12, item 13 |
| Treatment rationale: "no US transformer failure with a documented replacement wait is on the public record" | A false absolute if it reaches air | The landscape's "none found yet"; keep it off air |

## 7. Blocked sources and what stays open

Blocked from the cloud (noted, not routed around): thebreakthrough.org and hub.jhu.edu (read in the owner's reading
copies in Drive), eurekalert.org (empty 202), canada.ca (connection reset; the same joint statement opened as USTR's
PDF), crsreports.congress.gov and the congress.gov product page (403; the congress.gov PDF path opened),
brown.senate.gov (403), barchart.com (empty 202; the HD Hyundai release opened on PR Newswire). federalregister.gov
full-text pages return a "Request Access" page; its API and the govinfo PDFs work. The annexes of Proclamations 11021
and 11032 are scans: read by OCR, then every cited row checked on the page image.

Open before narration lock:
1. Owner fetch of the published article (Cell Reports Sustainability 4, 100923, doi 10.1016/j.crsus.2026.100923) to
   confirm the arXiv v2 numbers (C22, C80).
2. Owner print of the live Breakthrough page for the $1–2B sentence (C79): the Drive copy is re-rendered.
3. The hearing clip: is the "up to two years" line spoken (C34)?
4. Siemens Energy Charlotte: a company record of production start, or say "planned" (C77).
5. Optional: the USITC 731-TA-1189 conference transcript, pp. 147–148, for who gave the 38–40-year figure (DOE's hedge
   already supports "an industry estimate").
6. Before release: re-check the Federal Register for any change to the cores' tariff after 08 JUN 2026 (C56).
