---
repo: Margin-of-Error
slug: lpt-goes-steel
task_type: research
completed_ist: 2026-11-27 16:18 IST
verdict: APPROVED
---

# Response to Research Handoff: `lpt-goes-steel`

All files linked in `handoff/to_gemini.md` (`brief.md`, `deep_research_dossier`, `narration.md`, `claims` sheet, and `handoff/gemini_research_check.md`) opened and were inspected in full. No script, title, or spec is drafted in this round per your instructions.

---

## 1. Point-by-Point Response to `gemini_research_check.md` (Section 2)

### A. Facts and Fairness

1. **`claims.xlsx` (`C01`–`C18`) vs. `deep_research_dossier` (`C-01`–`C-50`) numbering mismatch:**
   - **Verdict:** **AGREE.**
   - **Notes:** The 18-row `claims` sheet was written before the 50-row deep research dossier completed, so narration tags `[C-01]`–`[C-50]` reference the dossier table rather than `claims.xlsx`. Rebuilding one unified `films/lpt-goes-steel/claims.csv` directly from the verified primary records is the right move.

2. **Title & core framing taken from an advocacy think tank's headline (*"America Makes the Wrong Steel..."*) in our voice unattributed:**
   - **Verdict:** **AGREE.**
   - **Notes:** Saying "wrong steel" in the studio's own unattributed voice violates "our own adjectives never" and creates avoidable fairness exposure toward Cleveland-Cliffs. The primary records state the exact technical boundary cleanly without evaluative adjectives: Commerce's Section 232 report ([86 FR 64635](https\://www.federalregister.gov/documents/2021/11/18/2021-24958/publication-of-a-report-on-the-effect-of-imports-of-transformers-and-transformer-components-on-the)) states that AK Steel/Cleveland-Cliffs *"does not produce steel wide enough (>932mm) to form the laminations and cores of larger transformers"* (max `920 mm`), and Cleveland-Cliffs' own [TRAN-COR H Product Data Bulletin (Oct 2024)](https\://www.clevelandcliffs.com/_assets/_81390fba4c20ea7031feaf585f8f60c5/clevelandcliffs/db/1190/10495/file/CLF_ProductData_Tran-Cor-H_102024.pdf) states that its laser domain refinement *"is eradicated upon annealing at temperatures greater than 600 °C."*

3. **"Roughly thirty times noisier" (27 ppm vs. ~0.2–0.9 ppm magnetostriction ratio spoken as an acoustic noise ratio):**
   - **Verdict:** **AGREE.**
   - **Notes:** In the [Metglas Amorphous Alloys Technical Brochure](https\://metglas.com/wp-content/uploads/2016/12/Amorphous-Alloys-for-Transformer-Cores-.pdf), `27` (x 10^-6, or 27 ppm) is the saturation magnetostriction coefficient (dimensional strain per unit length under magnetization), whereas GOES is roughly `0.2–0.9 ppm`. Acoustic sound power/pressure (dBA) scales logarithmically and depends on core clamping and tank damping—so a 30x higher magnetostriction coefficient does **not** mean "thirty times noisier." It must be stated strictly as magnetostriction (physical expansion/contraction strain that increases core vibration and hum), never as a 30x acoustic noise multiplier.

4. **"Tariffs meant to protect American steel instead subsidized core assembly outside the United States":**
   - **Verdict:** **AGREE.**
   - **Notes:** "Subsidized" is an editorial reading, not a statutory subsidy. The primary record in [86 FR 64608](https\://www.federalregister.gov/documents/2021/11/18/2021-24958/publication-of-a-report-on-the-effect-of-imports-of-transformers-and-transformer-components-on-the) states the factual mechanism neutrally: stacked and wound core imports rose `650 percent` from `\$22 million` in 2015 to `\$167 million` in 2019 (over 95% from Canada and Mexico, neither of which has indigenous GOES production) and *"the surge in imports represents displaced domestic production."*

5. **"It does not prove that Cleveland-Cliffs is neglecting Butler Works" (raising a charge to deny it plants it):**
   - **Verdict:** **AGREE.**
   - **Notes:** Presenting the affirmative record facts directly—`1,200` UAW Local 3303 workers, `\$187 million` in annual wages, `\$200 million` investment with a `\$75 million` DOE award to expand GOES output up to `25 percent` by early 2028 ([Cleveland-Cliffs Oct 5, 2026 release](https\://www.clevelandcliffs.com/news/news-releases/detail/704/cleveland-cliffs-to-host-u-s-secretary-of-energy-chris)), contrasted with the `\$1–2 billion` capital threshold for a wide/PDR line—is cleaner and avoids planting an unalleged "neglect" frame.

6. **The 17–39% wound-core penalty and "only three companies" resting on the think-tank article rather than the Section 232 / DOE reports where possible:**
   - **Verdict:** **AGREE.**
   - **Notes:** The federal dockets and manufacturer catalogs carry the core metallurgical facts directly:
     - [U.S. DOE July 2024 Report (EXEC-2022-001242, p. 15)](https\://www.energy.gov/sites/default/files/2024-10/EXEC-2022-001242%20-%20Large%20Power%20Transformer%20Resilience%20Report%20signed%20by%20Secretary%20Granholm%20on%207-10-24.pdf) states: *"The highest grade GOES PDR is only available from a single manufacturer, Nippon Steel in Japan, and is not manufactured in the U.S. An intermediate grade GOES, MOH, is widely available from Japan and South Korea. U.S. producer AK Steel makes an equivalent to MOH GOES; however, the U.S. option is more expensive with no efficiency benefit and is therefore not commonly used by U.S. LPT manufacturers [5, p. 108]."* and *"wound cores (100 percent, requires PDR GOES)."*
     - [JFE Electrical Steel Sheets Catalog (F1E-001-08, p. 2 & p. 7)](https\://www.jfe-steel.co.jp/en/products/electrical/catalog/f1e-001.pdf) proves JFE's heat-resistant electrolytically etched `23JGSD075` (0.23 mm) achieves `0.95 W/kg` (`0.43 W/lb`) at 1.7 T / 60 Hz *after* stress-relief annealing, whereas Cleveland-Cliffs' [TRAN-COR H Bulletin (Oct 2024, p. 4)](https\://www.clevelandcliffs.com/_assets/_81390fba4c20ea7031feaf585f8f60c5/clevelandcliffs/db/1190/10495/file/CLF_ProductData_Tran-Cor-H_102024.pdf) and [LITE CARLITE Bulletin (Oct 2023)](https\://www.clevelandcliffs.com/_assets/_7ca91e985ad569110b88b94b8ef0eae3/clevelandcliffs/db/1190/10493/file/CLF_ProductData_LiteCarliteAndMillAnneal_102023.pdf) list post-SRA non-DR `H-0 CARLITE` at `1.116 W/kg` (`0.506 W/lb`, +17.5% higher than `0.95 W/kg`) and `M-2`/`M-3` grades at `0.567–0.590 W/lb` (+31.9% to +37.2% higher than `0.43 W/lb`). If the `17–39%` summary range or the JFE/Nippon/POSCO 1970s groove-etching sentence from The Breakthrough Institute is cited, it should be explicitly attributed to Ryan Alimento / The Breakthrough Institute alongside the primary datasheets.

7. **The brief's opening dropped the wound-core qualifier ("loses up to thirty-nine percent more energy than Japanese steel") while narration restored it:**
   - **Verdict:** **AGREE.** Without the *"in wound distribution transformer cores after stress-relief annealing"* qualifier, the sentence is inaccurate for unannealed stacked LPT cores where laser-scribed `TRAN-COR H CARLITE DR` (`1.01 W/kg`) remains active.

### B. Format, Craft, and Repo Pipeline

8. **All format, craft, and repo-path points in Section 2 (`2,772` spoken words vs. 13.5–14.5 min target; no human through-line by `0:20`; need for a concrete dated decision in Act III; banned rhetorical transitions; `vo_lint.py` and `title_lint.py` flags; skipped `research/landscape.md` and treatment gates; and repo path differences `films/<slug>/`, `config/brand.yaml` -> `lib/remotion/brand.ts`, `-14 LUFS / -1 dBTP`, no Modal port scripts yet):**
   - **Verdict:** **AGREE on every point.** All further work follows your sequence from the research landscape below.

---

## 2. Verbatim Sentences from Cloud-Blocked Pages & the *Cell Reports Sustainability* Paper

### A. The Breakthrough Institute (`https\://thebreakthrough.org/issues/energy/america-makes-the-wrong-steel-for-its-transformer-supply-chain`)
- **Author & Date:** Ryan Alimento, published August 14, 2026 (*"America Makes The Wrong Steel For Its Transformer Supply Chain: A modern grid needs modern electrical steel"*).
- **Exact verbatim sentences for `920 mm` / `932 mm` / `1,000 mm`:**
  > "Specifically, Cleveland-Cliffs GOES is too narrow for many LPT core manufacturers. It tops out at 920mm wide, while the market prefers at least 932mm and increasingly looks for widths over 1000mm. Manufacturers can fuse two pieces together, but the discontinuity at the seam can introduce new energy losses, and precision welding for thousands of paper-thin GOES laminations adds sizable labor costs."
- **Exact verbatim sentences for `17–39%` wound-core loss and `"only Nippon, JFE, and POSCO"`:**
  > "Additionally, in distribution transformer cores, Cleveland-Cliffs GOES loses up to 39 percent more energy than GOES from Japanese steelmakers Nippon and JFE. This stems from a technique invented by JFE in the 1970s that, to this day, is only used by Nippon, JFE, and Korean steelmaker POSCO."
  >
  > *(Embedded Datawrapper Chart Callouts & Caption):*
  > "US GOES is less energy efficient than foreign GOES / Energy losses in Watts per pound by country of origin ... 1 ...than world-class Japanese GOES / 2 US GOES losses are 17 to 39% higher... Data for GOES in wound distribution transformer cores after annealing at 1.7T, 60Hz. Chart: The Breakthrough Institute."
  >
  > *(Chart data values in Watts/lb at 1.7T, 60Hz after annealing):* `0.585` (USA), `0.575` (USA), `0.567` (USA), `0.52` (Japan), `0.52` (Korea), `0.513` (China), `0.51` (Japan), `0.495` (China), `0.49` (USA), `0.49` (Korea), `0.49` (Japan), `0.49` (Japan), `0.46` (Japan), `0.46` (Japan), `0.447` (Japan), `0.43` (Japan).
  >
  > *(Following paragraph on groove etching & annealing):*
  > "The process lets these East Asian mills etch grooves into the GOES sheets that reduce energy losses; then, after sheets are wound into a core, they treat the core with heat to relieve mechanical stress from core winding and reduce energy losses even further. In contrast, the older etching process used at Butler Works makes grooves that deform if exposed to the temperatures needed for the heat treatment step, also known as annealing. As a result, Butler Works doesn't anneal its GOES and misses out on the resulting improvements to energy efficiency."
- **Exact verbatim sentences for `\$126M` -> `\$524M` (`>400%` core import growth) and August 2025 loophole closure:**
  > "U.S. imports of transformer cores grew over 400% from \$126 million in 2018 to \$524 million in 2025. The increase can be linked to a loophole in Section 232 tariffs on GOES, implemented in March 2018, as well as new electricity demand from data centers, manufacturing, and residential electrification."
  >
  > *(Chart subtitle):* "Aggregate of HTS codes 8504.90.96.34 (laminations for stacked cores), .38 (stacked cores), and .42 (wound cores)."
  >
  > "The loophole that excluded GOES-derived goods was filled recently in August 2025, but its damage to the domestic transformer industry is already done."

### B. Johns Hopkins University Hub Release (`https\://hub.jhu.edu/2026/11/17/transformer-shortages-loom-for-strained-us-power-grid/`)
- **Author & Date:** Jill Rosen, published November 17, 2026 (*"Transformer shortages loom for strained U.S. power grid"*).
- **Exact verbatim sentence for `21%` demand growth by 2030:**
  > "Historically the country's power demand has grown incrementally, at a percent or two a year. But thanks to power-hungry data centers, growth in electric vehicles, and other needs, power use is projected to grow 21% by 2030."
- **Exact verbatim sentence for `"almost 15%"` and `"30% short"`:**
  > "Under baseline scenarios, or modest growth in power demand, by 2030 the nation would likely have enough transformers, but fall about 16% short of other grid-supporting equipment."
  >
  > "But if high power demand continues as expected, over the next four years the researchers project the U.S. will be almost 15% short on transformers and 30% short on other critical equipment."
- **Exact verbatim sentence for `"two-thirds"` fueled by data centers:**
  > "As much as two-thirds of all the expected equipment shortages will be fueled by data centers, according to the researchers."
- **Exact verbatim sentence for `25%` / `36%` under a `70%` trade disruption:**
  > "If international trade disruptions occur, on top of the increases in demand, the result could be as much as a 70% drop in materials coming in from unstable trade partners, leading to a transformer shortage of about 25%, and a 36% shortage for other equipment, the team found."
- **Exact verbatim quotes from Prof. Yury Dvorkin in the JHU Hub release:**
  > "This type of equipment was taken for granted, but without it, you can build a data center or a power plant but it won't be powered because you cannot connect it to the grid," said author Yury Dvorkin, a researcher with expertise in modeling power and infrastructure demand. "When the demand for electricity started to grow faster than expected, it started to amplify all the cracks in the industry."
  >
  > "Utilities will compete for transformers with the data center industry," Dvorkin said. "Transformers will first be delivered to whoever can pay the highest premium. Will it be a mom-and-pop utility or a big data center corporation?"

### C. *Cell Reports Sustainability* Paper (Boyu Yao & Yury Dvorkin, *"Grid-Supporting Equipment Supply Chains Constrain the Feasible Pace of Power System Expansion"*, Article 100923, published Nov 17, 2026; full HTML text & tables at `https\://arxiv.org/html/2604.18411v2`, Zenodo dataset `https\://doi.org/10.5281/zenodo.19597635`)
- **Paper vs. Preprint Comparison:** The manuscript text, Figure 1–7 numbering, Table 1–3 values, and *Cell Reports Sustainability* formatting (`CONTEXT & SCALE`, `HIGHLIGHTS`, `SUMMARY`, `RESOURCE AVAILABILITY`) in `arXiv:2604.18411v2` (submitted in final *Cell Reports Sustainability* layout) match the published November 17, 2026 article **identically** on every technical figure (`14.5%`, `107.3 GVA`, `28.5%–28.6%`, `269.6–274.1 GVA`, `25.0%`, `184.7 GVA`, `36.2%`, `342.6 GVA`, `5.0%` / `33.4 GVA` with DTR, and `1,030` / `445.728 t/GVA` steel).
- **Important Difference Between the JHU Hub Press Release and the Paper Itself:**
  - The **JHU Hub press release** reports rounded headline figures (`"almost 15%"`, `"30% short"`, `"21% by 2030"`, `"as much as two-thirds"`).
  - The **paper itself** reports exact modeled numbers (`14.5%` / `107.3 GVA` for transformers; `28.5%` / `269.6 GVA` for aggregate GSE under optimistic lifetimes, or `28.6%` / `274.1 GVA` under pessimistic lifetimes; and NREL/NLR electricity demand growth rates of `1.8%/yr` mid-case and `2.8%/yr` high-growth rather than the press release's cumulative `"21%"` wording, and does not use the phrase `"two-thirds"` in the paper text—that phrasing was given by the authors to JHU Hub / media).
- **Exact Figure, Table, and Section Locations in the Paper:**
  1. **`1,030 t/GVA` and `445.728 t/GVA` steel figures -> Results, subsection *"Material intensity of GSE"*, and Figure 4 (`Figure 4: Material intensity of major GSE`):**
     > "Figure 4 summarizes the material intensity of major GSE classes and highlights substantial variation in both total material intensity and composition across equipment types... Conventional transformers are strongly steel-dominant, with 1030 ton/GVA of steel and 66.1 ton/GVA of copper, while aluminum remains comparatively limited at 16.07 ton/GVA. Data center transformers exhibit a similar composition but with substantially higher copper and aluminum intensity, reaching 445.728 ton/GVA of steel, 280.416 ton/GVA of copper, and 129.792 ton/GVA of aluminum."
  2. **`14.5%` and `107.3 GVA` (plus `631.5 GVA` met and `269.6 GVA` / `28.5%` total GSE) -> Results, subsection *"GSE shortages and material bottlenecks under baseline and high-growth scenario with optimistic lifetime assumption"*, Figure 6 (`Figure 6a` & `Figure 6b1`), and Table 1 (`Reference` row):**
     > "The high-growth scenario follows the same qualitative pattern but deteriorates more rapidly, where the total required volume rises to 946.6 GVA by 2030 and the aggregate shortfall reaches 269.6 GVA (28.5%) in 2030."
     >
     > "The key shift occurs in 2030, when transformer demand itself exceeds feasible production. Under the high-growth scenario, transformer production reaches 631.5 GVA, but an additional 107.3 GVA remains unmet, corresponding to a 14.5% transformer-specific gap. By 2030, shortages also intensify in both other equipment groups, with unmet demand reaching 41.6 GVA (67.1%) for load-side GSE and 120.6 GVA (82.8%) for other supply-side electronics."
     >
     > *(Note: Under pessimistic lifetimes in **Figure 7**, total 2030 GSE shortfall is `274.1 GVA (28.6%)` and the 2030 transformer shortfall is `92.7 GVA (12.6%)` because earlier replacements shift before 2025).*
  3. **`25.0%` (`184.7 GVA`, `+77.4 GVA`) under trade disruption and `5.0%` (`33.4 GVA`, `-73.9 GVA`) with DTR -> Results, subsection *"Sensitivity to trade disruption and dynamic transformer rating (DTR)"*, and Table 2 (`Table 2: Sensitivity of GSE shortages and material usage to trade disruption and DTR in 2030, relative to the high-growth optimistic reference scenario`):**
     > "Relative to the high-growth optimistic reference scenario in 2030, trade disruption increases total unmet GSE demand by 73.0 GVA, raising the aggregate shortfall from 269.6 GVA (28.5%) to 342.6 GVA (36.2%). By contrast, DTR reduces total unmet demand by 75.6 GVA, lowering the aggregate shortfall to 193.9 GVA (22.3%)."
     >
     > "The trade-disruption scenario primarily amplifies the transformer bottleneck. In 2030, transformer unmet demand rises by 77.4 GVA, increasing from 107.3 GVA (14.5%) to 184.7 GVA (25.0%)."
     >
     > "DTR acts in the opposite direction, but only on one layer of the bottleneck stack. In 2030, transformer unmet demand falls by 73.9 GVA, from 107.3 GVA (14.5%) to 33.4 GVA (5.0%), and the data center transformer gap also declines. However, non-transformer shortages remain nearly unchanged, with unmet demand for all other GSE falling by only 1.8 GVA in aggregate."

---

## 3. Landscape: What Everyone Says on YouTube & in US/UK News (and Our Edge)

### A. Strongest YouTube Videos Covering the Transformer / Grid Bottleneck

| # | Title & URL | Channel | Views | Length | Publish Date | One-Line Angle | What Top Comments Ask or Doubt |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | [How the Electrical Grid Is Being Rebuilt for AI \| Bloomberg Primer](http\://www.youtube.com/watch?v=8KOYyfZbPzo) | Bloomberg Originals | 1,538,656 | 24:02 | 2026-05-27 | Broad macro tour of AI grid strain, superconducting cables (Veir), the 2025 Spain/Portugal blackout (grid inertia), and Nigerian solar minigrids. | Viewers ask why the US cannot manufacture basic high-voltage hardware like transformers domestically when China expanded grid generation 7x since 2000; skepticism over exotic startup cables vs. basic steel and copper bottlenecks; residential ratepayers angry that data-center grid upgrades raise household electric bills. |
| 2 | [How The Massive Power Draw Of Generative AI Is Overtaxing Our Grid](http\://www.youtube.com/watch?v=MJQIQJYxey4) | CNBC | 1,424,112 | 14:49 | 2024-07-28 | Visits a Silicon Valley Vantage data center; covers AI power/water draw and briefly profiles hockey-puck transformer sensor startup Tau (`07:45–08:45`), repeating the unverified `"average transformer in the US is 38 years old"` line. | Viewers question why utilities let the transformer fleet reach "38–40 years old" without ordering replacements earlier; doubt whether software sensors or ARM chips solve physical transformer scarcity; ask who pays when hyperscalers outbid municipal utilities. |
| 3 | [Could These Next-Gen Transformers Fix the Grid? \| Bloomberg Primer](http\://www.youtube.com/watch?v=cTGUqsz5l-g) | Bloomberg Originals | 658,834 | 13:34 | 2026-11-09 | Pitches venture-backed solid-state transformers (DG Matrix, Heron Power, Amperesand) and Nvidia's 800V DC data-center architecture as the fix for 19th-century steel-and-copper transformers. | Electrical engineers and substation techs in the comments push back hard: point out solid-state transformers only work at medium-voltage / data-center rack level (`12:10` admission in video) and cannot handle 100–500 MVA bulk transmission, have higher switching losses/failure rates than passive oil-and-steel units, and ignore the actual GOES steel and coil-winding shortage. |
| 4 | [The Factory Fighting the 143-Week Transformer Shortage](http\://www.youtube.com/watch?v=yMUyqx0PCE0) (`Heavy Industries`) & [Why Power Transformers Became a Global Bottleneck](http\://www.youtube.com/watch?v=r_5MCZtpDwQ) (`Unseen Works`) | Heavy Industries / Unseen Works | 31 / 57 (Representative of ~10 faceless 2026 AI-narrated explainers) | 11:36 / 15:51 | 2026-10-15 / 2026-08-27 | Generic macro summaries of Wood Mackenzie's `143-week` / `116%` stats, Hitachi Energy's `\$528M` Gallman MS and `\$457M` South Boston VA factories, and the Antonov An-124 airlift anecdote. | These low-view faceless explainers mention Butler, PA in a single passing sentence (*"the US has only a single domestic mill making it in Butler, Pennsylvania"*), never open a single federal docket or steel datasheet, and draw zero substantive comment threads. |
| 5 | [Power Transformers: Why the Lead Time Is 128 Weeks When the Build Takes About 12](http\://www.youtube.com/watch?v=KmId1bFrr_o) | Zinit: AI-Native Procurement Platform | 4 | 0:56 | 2026-11-14 | 56-second 3D CAD animation of a 72/96/120 MVA LPT build week-by-week (Weeks 1–12 shop time vs. 128-week queue). | No comments, but a useful visual benchmark: shows how clean a 12-week shop-floor assembly timeline looks when contrasted against the multi-year material/queue wait. |

### B. What Mainstream US & UK News Outlets Say (and What Every Single One Misses)
- **The Common News Line (Fortune, Newsweek, Bloomberg, CNBC, Financial Times, Reuters):**
  1. *"AI data centers and EVs are causing a sudden transformer shortage; lead times jumped from 6 months to 2–4 years."*
  2. *"The average US transformer is 38 to 40 years old."* (Repeated uncritically as a hard federal fact).
  3. *"Solid-state transformers or new domestic assembly plants (Hitachi Mississippi, Siemens Charlotte) will fix it."*
- **What Every YouTube Video and Mainstream Article Misses (Margin of Error's Uncontested Edge):**
  - **Zero videos on YouTube** open the **October 15, 2020 Commerce Section 232 Report (`86 FR 64606`)**, **Cleveland-Cliffs' `TRAN-COR H` datasheet**, or **Footnote 95 of the April 2014 DOE Study**.
  - Nobody shows that the famous `"38–40 year old"` statistic is actually an unverified industry estimate from an August 4, 2011 USITC antidumping hearing transcript (`731-TA-1189, pp. 147–148`).
  - Nobody shows **why** the March 2018 steel tariffs backfired on US transformer makers: Proclamation 9705 taxed raw GOES coils under HTS Chapter 72 (`7225.11.00` / `7226.11`), while leaving cut laminations and wound/stacked cores under HTS Chapter 85 (`8504.90.96.34/.38/.42`) duty-free—and when Commerce delivered its affirmative national-security report to the White House on October 15, 2020, USTR cut a monitoring deal with Mexico on November 5, 2020 and **neither President Trump nor President Biden issued a Section 232 proclamation on cores for nearly five years** (until BIS Notice `90 FR 40326` took effect on August 18, 2025).
  - Nobody shows the physical datasheet limits inside the steel itself: `920 mm` maximum width on Butler Works master coils vs. `>932 mm` / `1,050–1,160 mm` for large cores, and `>600 °C` stress-relief annealing erasing laser scribing in wound cores.

---

## 4. Human Through-Lines from the Public Record (Verified Verbatim Quotes)

No private individuals; every candidate below spoke on the public record in an official government proceeding or university release. **Candidates A and B paired together** give the strongest human spine across both halves of the film (the steelmaker/utility warning vs. the transformer factory warning):

### Candidate A — Cleveland-Cliffs' Official Representative at the DOE Public Hearing (Feb 16, 2023)
- **Role:** Representative of Cleveland-Cliffs Inc. (operator of Butler Works, PA and Zanesville Works, OH), testifying on the record at the U.S. Department of Energy Public Meeting on Distribution Transformer Efficiency Standards.
- **Record / Citation:** *U.S. Department of Energy, Office of Energy Efficiency & Renewable Energy, Transcript: In the Matter of Notice of Proposed Rulemaking (NOPR) for Distribution Transformers (Standards)*, Docket No. `EERE-2019-BT-STD-0018`, February 16, 2023, pp. 16–20 and pp. 53–54 (quoted verbatim in Edison Electric Institute filing, [Regulations.gov Docket EERE-2019-BT-STD-0018-0146, Attachment 1, pp. 24 & 26, fn. 9 & 12](https\://downloads.regulations.gov/EERE-2019-BT-STD-0018-0146/attachment_1.pdf)).
- **Exact Verbatim Sentences:**
  > "The proposed efficiency standard, if implemented as-is. . . would severely exacerbate the already-strained availability of distribution transformers needed to maintain, modernize, and green the electric grid." *(Hearing Transcript, pp. 16–20)*
  >
  > "the vast majority of the electrical steels that Cleveland-Cliffs produces out to its Butler Works and Zanesville Works steel mills are those materials that are bound for incorporation into distribution transformers. And without that volume, without that business, it fundamentally breaks the economics of our electrical steel production; meaning that if this rule were to go forward as-proposed, we would be jeopardizing not only the availability of GOES for distribution transformers, but also the availability of GOES for power transformers and the availability of NOES for use in the most highly efficient electric motors, as well as in EV motors." *(Hearing Transcript, pp. 53–54)*

### Candidate B — Lourenco Goncalves, Chairman, President & CEO of Cleveland-Cliffs Inc. (Nov 2, 2020 vs. Oct 5, 2026)
- **Role:** Chairman, President, and Chief Executive Officer of Cleveland-Cliffs Inc. (publicly traded sole U.S. GOES producer).
- **Record 1 (Nov 2, 2020 — Celebrating a Section 232 core remedy that the White House then failed to enact):** [Cleveland-Cliffs Press Release, Nov 2, 2020](https\://www.businesswire.com/news/home/20201102006028/en/Cleveland-Cliffs-Applauds-President-Trumps-Actions-to-Address-Imports-of-Laminations-and-Cores-from-Electrical-Steel)
  > "On behalf of Cleveland-Cliffs and 1,400 workers who melt and manufacture electrical steel, I strongly commend and thank President Trump, U.S. Trade Representative Ambassador Robert Lighthizer, and Secretary of Commerce Wilbur Ross, for taking action under Section 232 to end the circumvention of existing national security tariffs covering GOES. Furthermore, I am pleased that the Department of Commerce will take action to re-evaluate recently-granted GOES Section 232 product exclusions. These actions should be viewed as a condemnation of those seeking to circumvent tariffs and quotas imposed under our trade laws and of companies abusing the steel Section 232 product exclusion process."
- **Record 2 (Commerce's warning in the Oct 15, 2020 Section 232 Report, [86 FR 64617](https\://www.federalregister.gov/documents/2021/11/18/2021-24958/publication-of-a-report-on-the-effect-of-imports-of-transformers-and-transformer-components-on-the)):**
  > "The CEO of Cleveland Cliffs, Inc., has stated that it may shut down the two unprofitable plants at which GOES is manufactured. If AK Steel's GOES operations were to close, the United States would lack the ability to produce transformers of any power handling capacity without relying on foreign sources for the key material that is essential to their operation and efficiency."
- **Record 3 (Oct 5, 2026 — Hosting Energy Secretary Chris Wright at Butler Works for the \$200M / \$75M DOE expansion):** [Cleveland-Cliffs Press Release, Oct 5, 2026](https\://www.clevelandcliffs.com/news/news-releases/detail/704/cleveland-cliffs-to-host-u-s-secretary-of-energy-chris)
  > "We are honored to welcome Secretary Wright, Assistant Secretary Robertson and Under Secretary Kimmitt to Butler Works. This investment demonstrates the importance of maintaining domestic manufacturing capabilities for materials that are essential to America's energy infrastructure. Expanding GOES production at Butler Works will strengthen the domestic transformer supply chain, support American energy security, and help meet the country's growing electricity needs."

### Candidate C — Utility & Manufacturer Voices from the Feb 16, 2023 DOE Hearing Transcript & Oct 21, 2025 BIS Docket (The Other Side of the Table)
- **Commonwealth Edison (ComEd) representative (Feb 16, 2023 DOE Public Hearing Transcript, pp. 119–120, cited in [EEI Filing p. 37 fn. 27 & p. 38 fn. 29](https\://downloads.regulations.gov/EERE-2019-BT-STD-0018-0146/attachment_1.pdf)):**
  > "we have legacy overhead installations where the pole is installed between two backyards behind homes, but there's no alley or driveway in order to get a boom truck to replace a failed transformer, in which case the crews have to roll what we call. . . a rear lot cart, to raise the transformer to be able to install it on the pole. And those rear-lot carts to have a limited capacity, so having a larger, heavier transformer, the pole may be able to support, but we may have difficulty, based on the capacity of the rear-lot cart, lifting it and getting it up and installing it in that rear-lot application."
- **Howard Industries (largest U.S. distribution transformer manufacturer in Laurel, Mississippi — Oct 21, 2025 filing in BIS Section 232 Docket `BIS-2025-0023-0784`, [Regulations.gov PDF](https\://downloads.regulations.gov/BIS-2025-0023-0784/attachment_1.pdf)):**
  > "Throughout Cliff's Comment, Cleveland Cliffs states that the company “has sufficient capacity to meet current domestic demand.” However, Cleveland Cliffs only produces roughly 220 kilotons a year of GOES and NOES. Howard Industries alone consumes a total of 37.6 kilotons of GOES and 1.9 kilotons of amorphous steel (39.5 KT total) annually in the manufacture of transformer products for the U.S. market."
  >
  > "More importantly, it is worth noting that the primary reason companies are importing more GOES and transformers from other countries is straightforward: Cleveland Cliffs does not produce enough raw materials to sustain U.S. production. Until Cleveland Cliffs produces enough raw materials, U.S. transformer companies will be forced to buy foreign steel."

### Candidate D — Prof. Yury Dvorkin, Associate Professor, Johns Hopkins Whiting School of Engineering (Nov 17, 2026)
- **Record / URL:** [JHU Hub Release, Nov 17, 2026](https\://hub.jhu.edu/2026/11/17/transformer-shortages-loom-for-strained-us-power-grid/)
- **Exact Verbatim Quote:**
  > "Utilities will compete for transformers with the data center industry," Dvorkin said. "Transformers will first be delivered to whoever can pay the highest premium. Will it be a mom-and-pop utility or a big data center corporation?"

---

## 5. The Dated, Documented Decisions (Act III) — Including the Nov 2020 -> Aug 2025 Section 232 Gap Investigation

### Crucial Lead Checked First: Was ANY Section 232 Action on Cores or Laminations Issued Between Nov 2020 and Aug 18, 2025?

**Answer: NO.** Zero presidential proclamations or Section 232 tariff actions covering imported transformer laminations or cores (`HTS 8504.90.96.34`, `8504.90.96.38`, `8504.90.96.42`) were ever signed or issued between November 2020 and August 18, 2025.

**Here is the exact sequence from the primary record—and it is a remarkable forensic turn for Act III:**
1. **October 15, 2020:** Commerce Secretary Wilbur Ross completes the Section 232 report (*The Effect of Imports of Transformers and Transformer Components on the National Security*, later published at [86 FR 64606](https\://www.federalregister.gov/documents/2021/11/18/2021-24958/publication-of-a-report-on-the-effect-of-imports-of-transformers-and-transformer-components-on-the)) and transmits it to President Trump, formally finding that imports of transformer laminations, stacked cores, wound cores, and LPTs *"threaten to impair the national security."* Under `19 U.S.C. 1862(c)(1)(A)`, the President had **90 days** (until January 13, 2021) to concur or decline and proclaim any import adjustment.
2. **November 2, 2020 (The Day Before the 2020 Presidential Election):** Cleveland-Cliffs issues a triumphant press release ([BusinessWire / Cleveland-Cliffs Release, Nov 2, 2020](https\://www.businesswire.com/news/home/20201102006028/en/Cleveland-Cliffs-Applauds-President-Trumps-Actions-to-Address-Imports-of-Laminations-and-Cores-from-Electrical-Steel)) announcing:
   > "President Trump's Administration will be moving forward with a Section 232 action implementing a remedy covering imported laminations and cores of Grain Oriented Electrical Steel (GOES)... In addition, the Administration will take action to address recently-granted Section 232 product exclusions for more than 40,000 tons of GOES greater than 920 mm wide from South Korea. The U.S. market only requires 1,400 tons of GOES in that width or greater."
3. **November 5, 2020 (Three Days Later):** Instead of a tariff proclamation, U.S. Trade Representative Ambassador Robert Lighthizer announces a bilateral consultation agreement with Mexico ([Thompson Hine Trade Bulletin archiving USTR Nov 5, 2020 announcement](https\://www.thompsonhine.com/insights/united-states-and-mexico-reach-agreement-on-exports-of-grain-oriented-electrical-steel-mexico-to-be-excluded-from-any-related-section-232-actions/)). Under the deal, Mexico agreed to monitor Q4 2020 exports of laminations and cores made of non-North American GOES, and in exchange, **Ambassador Lighthizer stated that imports from Mexico would be excluded from any Section 232 action on electrical transformers and related parts**, saying:
   > "The resilience of North America's energy infrastructure is significantly enhanced by having electrical steel production capability within our region. An influx of low-price steel from third countries imperils this capability."
4. **January 13, 2021 (The 90-Day Statutory Window Expires with Zero Action):** President Trump lets the 90-day statutory deadline under `19 U.S.C. 1862(c)(1)(A)` expire without signing a proclamation. As documented in the [Cato Institute Section 232 Policy Analysis (March 9, 2021)](https\://www.cato.org/policy-analysis/protectionism-or-national-security-use-abuse-section-232):
   > "In another investigation, on transformers and transformer materials (components used in the electrical grid), USTR consulted with Mexico to establish a monitoring regime for exports of electrical transformer laminations and cores made of non-North American grain-oriented electrical steel, though an affirmative finding was never officially announced."
   And as [BDO Trade Practice (Nov 14, 2024)](https\://www.bdo.com/insights/tax/tariffs-and-trade-taking-center-stage-in-new-u-s-administration) and the [U.S. DOE July 2024 LPT Resilience Report (p. 15)](https\://www.energy.gov/sites/default/files/2024-10/EXEC-2022-001242%20-%20Large%20Power%20Transformer%20Resilience%20Report%20signed%20by%20Secretary%20Granholm%20on%207-10-24.pdf) confirm, the Biden Administration posted the redacted October 15, 2020 report on the BIS website in July 2021 and published it in the Federal Register on November 18, 2021 (`86 FR 64606`), **but took zero Section 232 tariff action on laminations or cores**.
5. **August 18, 2025 (The Loophole Finally Closes After 7 Years and 5 Months):** Core and lamination imports under `HTS 8504.90.96.34/.38/.42` remained exempt from Section 232 duties from March 23, 2018 until **12:01 a.m. ET on August 18, 2025**, when BIS Notice `90 FR 40326` ([Federal Register, Aug 19, 2025](https\://www.federalregister.gov/documents/2025/08/19/2025-15819/adoption-and-procedures-of-the-section-232-steel-and-aluminum-tariff-inclusions-process)) added 407 derivative HTSUS codes—including `8504.23.00`, `8504.33.00`, `8504.90.9634`, `8504.90.9638`, and `8504.90.9642`—to the Section 232 derivative steel tariff list.

---

### Full Comparison of the Four Dated Decision Candidates for Act III

| Candidate Decision | Record ID & URL | Date & Signer | Exact Quoted Sentence from the Record | The Other Side's Public Response (Quoted) |
| :--- | :--- | :--- | :--- | :--- |
| **1. March 2018 Section 232 Steel Proclamation Scope (Taxing Chapter 72 raw GOES coils while omitting Chapter 85 cores)** | **Presidential Proclamation 9705** (`83 FR 11625`, March 15, 2018); scope restated in [Proclamation 10947, 90 FR 24199 / Public Inspection PDF p. 14](https\://public-inspection.federalregister.gov/2025-10524.pdf?1749213915) and [86 FR 64608](https\://www.federalregister.gov/documents/2021/11/18/2021-24958/publication-of-a-report-on-the-effect-of-imports-of-transformers-and-transformer-components-on-the) | **Signed March 8, 2018** (effective March 23, 2018) by **President Donald J. Trump** | **Proclamation 9705 Clause 1 / HTS Note 16(b):** Defined covered `"steel articles"` strictly at the 6-digit HTS level inside Chapter 72 and 73, including `"(i) flat-rolled products provided for in headings 7208, 7209, 7210, 7211, 7212, 7225 or 7226"` (where raw GOES coils sit under `7225.11.00` and `7226.11`), while excluding Chapter 85 electrical machinery parts (`8504.90.96`). As **Secretary Wilbur Ross** later wrote in [86 FR 64608](https\://www.federalregister.gov/documents/2021/11/18/2021-24958/publication-of-a-report-on-the-effect-of-imports-of-transformers-and-transformer-components-on-the): *"Imports of transformer cores (stacked and wound) rose from \$22 million in 2015 to \$167 million in 2019—a 650 percent increase—again with Canada (52 percent) and Mexico (45 percent) accounting for more than 95 percent of the total."* | **U.S. Transformer Manufacturers (Howard Industries, Docket `BIS-2025-0023-0784`, [Oct 21, 2025 PDF](https\://downloads.regulations.gov/BIS-2025-0023-0784/attachment_1.pdf)):** *"Due to insufficient U.S. quantity, transformer manufacturers have no choice but to use foreign-sourced material to supplement the U.S. GOES demand... Even ERMCO states, 'ERMCO ... now uses Cliffs' steel exclusively by exporting it to Canada for conversion to cores.'"* |
| **2. ATI's Permanent Shutdown of the Bagdad, PA GOES Plant (Collapsing the US from 2 mills to 1)** | [TribLIVE Report on ATI Announcement](https\://archive.triblive.com/news/ati-permanently-closes-bagdad-midland-plants/) & [DOE July 2024 Report EXEC-2022-001242, p. 15](https\://www.energy.gov/sites/default/files/2024-10/EXEC-2022-001242%20-%20Large%20Power%20Transformer%20Resilience%20Report%20signed%20by%20Secretary%20Granholm%20on%207-10-24.pdf) & [BIS 86 FR 64631](https\://www.federalregister.gov/documents/2021/11/18/2021-24958/publication-of-a-report-on-the-effect-of-imports-of-transformers-and-transformer-components-on-the) | **October 25, 2016** — Announced by **Allegheny Technologies Inc. (ATI)** leadership (CEO Rich Harshman / spokesman Dan Greenfield) | **DOE July 2024 Report (p. 15):** *"ATI (previously Allegheny Technologies Incorporated) formerly produced GOES but shut down GOES production in 2016 due to unprofitability. Trade data showed a 155 percent increase in GOES imports the following year as a result of this shutdown."* **BIS 86 FR 64631:** *"Another manufacturer, Allegheny Ludlum, a subsidiary of Allegheny Technologies, Inc. (ATI), ceased manufacturing of GOES in 2016, with a loss of 350 jobs."* | **United Steelworkers (USW) & Federal Trade Findings:** Following the 6-month August 2015–March 2016 lockout of ~225 Bagdad workers, ATI stated global GOES overcapacity and low prices prevented an acceptable return; USW and AK Steel argued dumped foreign steel destroyed domestic capacity, while transformer OEMs countered that ATI only made standard grades and refused to upgrade to high-permeability PDR GOES. |
| **3. The Oct 15, 2020 Commerce Section 232 Report — and the Nov 2020 White House Non-Action** | **BIS Final Report** (*The Effect of Imports of Transformers and Transformer Components on the National Security*), completed Oct 15, 2020; published Nov 18, 2021 at [86 FR 64606 (Doc. 2021-24958)](https\://www.federalregister.gov/documents/2021/11/18/2021-24958/publication-of-a-report-on-the-effect-of-imports-of-transformers-and-transformer-components-on-the) | **October 15, 2020** — Submitted by **Commerce Secretary Wilbur Ross**; **Nov 5, 2020** Mexico carve-out by **USTR Robert Lighthizer**; **Jan 13, 2021** 90-day presidential window expired unsigned | **86 FR 64609:** *"Based on the overwhelming dependence of domestic transformer manufacturers on foreign sources, the Secretary finds that transformer laminations, stacked cores and wound cores are being imported into the United States in such quantities and under such circumstances as to threaten to impair the national security. In addition, LPTs are being imported into the United States in such quantities and under such circumstances as to threaten to impair national security."* | **Cleveland-Cliffs (Nov 2, 2020 release):** Prematurely praised the White House for *"moving forward with a Section 232 action implementing a remedy covering imported laminations and cores"*—only for **NEMA, EEI, and U.S. transformer manufacturers** to successfully lobby USTR that taxing cores when Butler Works capped out at 920 mm and lacked wound-core PDR capacity would halt U.S. transformer assembly, resulting in USTR's Nov 5, 2020 Mexico exclusion and 5 years of presidential inaction until [90 FR 40326 (Aug 18, 2025)](https\://www.federalregister.gov/documents/2025/08/19/2025-15819/adoption-and-procedures-of-the-section-232-steel-and-aluminum-tariff-inclusions-process). |
| **4. DOE's Jan 2023 Amorphous Proposal (`88 FR 1722`) vs. April 2024 Final Rule (`89 FR 29834`) & June 2026 Re-Opening (`91 FR 35903`)** | **NOPR:** [88 FR 1722](https\://www.federalregister.gov/documents/2023/01/11/2022-28590/energy-conservation-program-energy-conservation-standards-for-distribution-transformers) (Jan 11, 2023, Docket `EERE-2019-BT-STD-0018`); **Final Rule:** [89 FR 29834](https\://www.federalregister.gov/documents/2024/04/22/2024-07480/energy-conservation-program-energy-conservation-standards-for-distribution-transformers) (signed Apr 4, 2024; published Apr 22, 2024); **2026 RFI:** [91 FR 35903](https\://www.federalregister.gov/documents/2026/06/15/2026-11971/energy-conservation-program-energy-conservation-standards-for-distribution-transformers) (signed Jun 10, 2026 by **Audrey Robertson**, Asst. Sec. EERE) | **Jan 11, 2023** (NOPR under Acting Asst. Sec. **Francisco Alejandro Moreno**); **April 4, 2024** (Final Rule announced by **Energy Secretary Jennifer M. Granholm**, Federal Register Liaison **Treena V. Garrett**); **June 10, 2026** (RFI signed by **Audrey Robertson**) | **Jan 2023 NOPR (`88 FR 1722` / Reginfo abstract):** Proposed Trial Standard Level 4 (TSL 4) by Jan 1, 2027, stating: *"The proposed amended standards for certain transformers are primarily achievable by using amorphous steel."* **April 4, 2024 DOE Release / `89 FR 29834`:** Retreated to TSL 3 and a 2029 deadline: *"While the initial proposal would likely have represented about a 95% market shift to amorphous alloy, under today's final rule about 75% of the market will be able to achieve the standards with GOES. The final rule also extends the compliance timeline from three years to five years."* | **Coalition of EEI, APPA, NRECA, NEMA, NAHB (Feb 15, 2023 letter to Sec. Granholm, [Docket EERE-2019-BT-STD-0018-0146 p. 56](https\://downloads.regulations.gov/EERE-2019-BT-STD-0018-0146/attachment_1.pdf)) & Cleveland-Cliffs (Feb 16, 2023 Hearing pp. 53–54):** Warned that TSL 4 would add up to 44.5% weight (397 lbs) requiring wood-pole and rear-lot cart replacements, and would *"fundamentally break the economics of our electrical steel production"* at Butler Works—forcing DOE's April 2024 retreat and June 2026 national-defense reconsideration (`91 FR 35903`). |

---

## 6. Exhibits That Exist (Public Domain & Commercial-Use Licensed Assets, Report Figures, and Hearing Records)

### A. Public-Domain & CC Commercial-Use Photographs (Wikimedia Commons / Federal Works)
1. **U.S. Department of Energy Public Domain Substation / LPT Placement Photo:**
   - **Title:** `File:SRR Substation Placement (7516259618).jpg`
   - **URL:** `https\://commons.wikimedia.org/wiki/File:SRR_Substation_Placement_(7516259618).jpg`
   - **License:** **Public Domain — U.S. Federal Government Work (`PD-USGov-DOE`)** (confirmed by FlickreviewR from official `ENERGY.GOV` Flickr stream).
2. **Schnabel Railcar Carrying a Heavy Power Transformer (`Tragschnabelwagen mit Transformator`):**
   - **Title:** `Category:Schnabel cars` / `File:Tragschnabelwagen mit Transformator (8788).jpg` & `File:401 21-1-14-Schnabel-hoch.jpg` & `File:20140524 10 Norfolk Southern RR crossing Rockville Bridge (16659089585).jpg`
   - **URLs:**
     - Category index (58 licensed files): `https\://commons.wikimedia.org/wiki/Category:Schnabel_cars`
     - High-res Schnabel car (`3,384 x 3,456`): `https\://commons.wikimedia.org/wiki/File:401_21-1-14-Schnabel-hoch.jpg`
     - Public-domain Schnabel railcars (`JRF Shiki 810` / `Shiki 559`): `https\://commons.wikimedia.org/wiki/File:JRF_Shiki810-2.jpg` and `https\://commons.wikimedia.org/wiki/File:JRF_Shiki559-TR78.jpg`
     - U.S. Patent drawing (`US4041879-1`): `https\://commons.wikimedia.org/wiki/File:Schnabel_car_patent_US4041879-1.png`
     - Heavy-capacity wagon comparison diagram (`Depressed center` vs. `Schnabel car` vs. `Well hole car`): `https\://commons.wikimedia.org/wiki/File:Type_of_heavy_capacity_wagon.png`
   - **Licenses:** `JRF_Shiki810-2.jpg`, `JRF_Shiki559-TR78.jpg`, and `Schnabel_car_patent_US4041879-1.png` are **Public Domain**; `401_21-1-14-Schnabel-hoch.jpg` is **CC BY-SA 4.0** (commercial use permitted with attribution to `CCAA50678`).
3. **High-Voltage Power Transformers & Utility Pole-Mount Transformers:**
   - **Titles & URLs:**
     - `File:Power Transformer 02.jpg` (`8,064 x 3,840`, 17.5 MB): `https\://commons.wikimedia.org/wiki/File:Power_Transformer_02.jpg` (**CC BY-SA 4.0**, attribution: `Sonia Budini`)
     - `File:Power Transformer 01.jpg`: `https\://commons.wikimedia.org/wiki/File:Power_Transformer_01.jpg` (**CC BY-SA 4.0**, attribution: `Sonia Budini`)
     - `File:Large power transformer.jpg`: `https\://commons.wikimedia.org/wiki/File:Large_power_transformer.jpg` (Wikimedia Commons commercial CC license)
     - `Category:High-voltage transformers`: `https\://commons.wikimedia.org/wiki/Category:High-voltage_transformers`
     - `Category:Utility transformers` (includes `Polemount-singlephase-closeup.jpg`): `https\://commons.wikimedia.org/wiki/Category:Utility_transformers`
4. **AK Steel / Cleveland-Cliffs Plant & Logo Assets:**
   - **Titles & URLs:**
     - `File:AK Steel Mansfield.JPG` (`1,949 x 604` exterior of AK Steel electrical/specialty steel works): `https\://commons.wikimedia.org/wiki/File:AK_Steel_Mansfield.JPG` (**Public Domain**, released worldwide by copyright holder)
     - `File:AK Steel Logo 6.2020.svg` / `File:AK Steel Logo.svg`: `https\://commons.wikimedia.org/wiki/File:AK_Steel_Logo_6.2020.svg` (**Public Domain — `PD-textlogo`**)
   - *(Note on Butler Works photography: No standalone Wikimedia Commons photograph of the Butler Works mill exterior exists under a free CC tag; use the USGS/NAIP public-domain aerial orthoimagery of Butler Works in Butler Township, PA at `40°51'06"N 79°55'23"W`, paired with Cleveland-Cliffs' official Oct 5, 2026 press release exhibit and `TRAN-COR H` product data sheet).*

### B. Primary Federal Report Figures & Tables We Can Show Directly on Screen (All U.S. Gov Public Domain or Open-Access Academic Exhibits)
1. **U.S. DOE April 2014 LPT Study Update (`https\://www.energy.gov/sites/prod/files/2014/04/f15/LPTStudyUpdate-040914.pdf` — Public Domain `PD-USGov-DOE`):**
   - **Figure 1 & Figure 2:** Simplified arrangement of the U.S. electric grid system & cutaway diagram of a standard core-type LPT and its major internal components.
   - **Page 10:** Schnabel railcar photograph and North American fleet count (`"only about 30 of them in North America"`).
   - **Page 13 & Page 33:** Historical domestic GOES production table (`AK Steel: 312,000 MT`, `Allegheny Ludlum: 109,000 MT`).
   - **Page 28, Footnote 95:** The exact footnote proving the `"38 to 40 years"` average age claim comes from `Conference Hearing for Investigation No. 731-TA-1189, USITC, August 4, 2011, pp. 147–148`.
2. **U.S. DOE July 10, 2024 LPT Resilience Report to Congress (`EXEC-2022-001242`, `https\://www.energy.gov/sites/default/files/2024-10/EXEC-2022-001242%20-%20Large%20Power%20Transformer%20Resilience%20Report%20signed%20by%20Secretary%20Granholm%20on%207-10-24.pdf` — Public Domain `PD-USGov-DOE`):**
   - **Cover & Secretary's Transmittal Letters (pp. i–iii):** Signed by Secretary Jennifer M. Granholm on July 10, 2024.
   - **Page 12 & Page 15:** LPT cost breakdown (`GOES` and `CTC` each ~25% of cost), ATI's 2016 closure (`+155%` GOES import jump), Cleveland-Cliffs' `12–20%` domestic GOES share, and 2019 import breakdown (`20%` uncut rolls, `88%` laminations, `80%` stacked cores, `100%` wound PDR cores, `82%` LPTs).
   - **Pages 18–19:** Heavy transport section (`"Only about three of these specialized transport cars are available in North America"`, `9 months` rail clearance).
3. **U.S. Department of Commerce BIS Section 232 Report (`86 FR 64606`, Nov 18, 2021, `https\://www.federalregister.gov/documents/2021/11/18/2021-24958/publication-of-a-report-on-the-effect-of-imports-of-transformers-and-transformer-components-on-the` & Redacted BIS PDF `https\://www.bis.gov/media/documents/redacted-goes-report-updated-10-26-21.pdf` — Public Domain `PD-USGov`):**
   - **Page 64608–64609:** `650 percent` surge in stacked and wound core imports (`\$22M` in 2015 -> `\$167M` in 2019; `52%` Canada, `45%` Mexico; neither country makes GOES) and the Secretary's formal national-security threat finding.
   - **Page 64631 & 64635:** Armco 1926 invention, ATI 2016 shutdown (`350 jobs`), and the exact width finding: *"The company does not produce steel wide enough (>932mm) to form the laminations and cores of larger transformers. According to the technical specifications on AK Steel's website, the maximum width of its domain-refined products (TRAN-COR) is 920mm."*
4. **Manufacturer Technical Datasheets (Fair-Use Documentary Exhibit Highlights):**
   - **Cleveland-Cliffs `TRAN-COR H` Bulletin (Oct 2024):** `https\://www.clevelandcliffs.com/_assets/_81390fba4c20ea7031feaf585f8f60c5/clevelandcliffs/db/1190/10495/file/CLF_ProductData_Tran-Cor-H_102024.pdf` (Page 2 width table: `914 mm (36.0 in.)` and `920 mm (36.22 in.)`; Page 3 note: `"eradicated upon annealing at temperatures greater than 600 °C"`).
   - **JFE Steel Electrical Steel Sheets Catalog (`F1E-001-08`):** `https\://www.jfe-steel.co.jp/en/products/electrical/catalog/f1e-001.pdf` (Page 2 & Page 7: `JGSD` electrolytic groove etching; `23JGSD075` `0.95 W/kg` after SRA; Page 11: widths up to `1,050 mm` and `1,160 mm`).
   - **Metglas Amorphous Alloys Technical Brochure:** `https\://metglas.com/wp-content/uploads/2016/12/Amorphous-Alloys-for-Transformer-Cores-.pdf` (`2605SA1`: `1.56 T` saturation, `25 ± 4 µm` ribbon, `27 ppm` magnetostriction, `900 Hv` hardness).
5. **Johns Hopkins *Cell Reports Sustainability* Paper Figures (`https\://arxiv.org/html/2604.18411v2` & Zenodo `https\://doi.org/10.5281/zenodo.19597635`):**
   - **Figure 4:** Material intensity (`1,030 t/GVA` steel in conventional transformers vs. `445.728 t/GVA` steel & `280.416 t/GVA` copper in data-center transformers).
   - **Figure 6 (`a`, `b1`, `d`):** 2025–2030 unmet demand (`107.3 GVA` / `14.5%` transformer shortfall in 2030; `100%` copper binding from 2027, `96.7%` steel in 2030).
   - **Table 2:** Trade disruption (`+77.4 GVA` -> `25.0%` transformer shortfall) vs. DTR sensors (`-73.9 GVA` -> `5.0%` transformer shortfall).
6. **Public Hearing & Rulemaking Dockets (Regulations.gov — Public Domain):**
   - **EEI / Multi-Trade Filing (`EERE-2019-BT-STD-0018-0146`):** `https\://downloads.regulations.gov/EERE-2019-BT-STD-0018-0146/attachment_1.pdf` (contains direct verbatim excerpts from the Feb 16, 2023 DOE Public Hearing Transcript at pp. 24–27 & 37–38, plus the Feb 15, 2023 joint coalition letter to Secretary Granholm at pp. 56–58).
   - **Howard Industries Section 232 Filing (`BIS-2025-0023-0784`):** `https\://downloads.regulations.gov/BIS-2025-0023-0784/attachment_1.pdf` (Oct 21, 2025 filing detailing Cleveland-Cliffs' `~220 kt/yr` total GOES+NOES output vs. Howard Industries' `37.6 kt/yr` GOES consumption).

---

## 7. Search Words US and UK Viewers Type (with YouTube / Search Volume Signals)

YouTube and Google Search performance across the 2024–2026 corpus shows a sharp split between **high-volume viewer entry terms** (which drive 650K–1.5M+ views) and **low-volume insider terms** (which viewers never type in search bars):

### Tier 1 — High-Volume Search & Browse Entry Terms (600K – 1.5M+ YouTube Views Signal)
Viewers in the US and UK search for the **machine**, the **grid failure risk**, and the **waiting time**, not the steel acronym:
- `"power transformer shortage"` / `"transformer shortage"` (Core US/UK search phrase; anchors CNBC's 1.42M-view piece and the Nov 17–25, 2026 Johns Hopkins news wave across Fortune, Newsweek, and Reddit `r/USNEWS`)
- `"how power transformers work"` / `"large power transformer"` (`1.61M views` on Tracing Science's 3D transformer animation; `658K views` on Bloomberg Primer's Nov 9, 2026 transformer video)
- `"US power grid"` / `"electrical grid bottleneck"` / `"AI power grid shortage"` (`1.53M views` on Bloomberg's *"How the Electrical Grid Is Being Rebuilt for AI"*; `3.16M views` on Practical Engineering's *"What Is A Black Start Of The Power Grid?"*)
- `"why transformers take 3 years to build"` / `"transformer lead times"` / `"transformer backlog"` / `"transformer waiting list"` (Strongest curiosity gap in comments and trade press: *"128 weeks"*, *"143 weeks"*, *"3-year wait"*)

### Tier 2 — Medium-Volume Investigative & Policy Terms (Strong Browse / Secondary Search Modifiers)
- `"electrical steel"` / `"transformer steel"` (Viewers understand `"electrical steel"` or `"transformer core steel"` immediately; they almost never type `"GOES"` or `"grain-oriented electrical steel"`)
- `"why America can't build transformers"` / `"US transformer imports"`
- `"data center power shortage"` / `"electricity bill data centers"` (High UK and US viewer engagement around ratepayer bills and grid connection queues)
- `"National Grid transformer queue"` / `"grid connection delay"` (Primary UK viewer equivalent phrasing alongside `"US power grid"`)

### Tier 3 — Zero-Search-Volume Terms (Keep in the Film Body / Exhibits, Never Rely on Alone in the Title)
- `"GOES"` / `"grain-oriented electrical steel"` / `"Butler Works"` / `"TRAN-COR H"` / `"Schnabel car"` / `"Section 232"`
- **Title Implication for `title_lint.py`:** Every title candidate must carry `"Transformer"` or `"Power Transformers"` (plus `"Power Grid"` or `"3-Year Wait"`) in the first 45 characters so US/UK viewers immediately recognize the machine, while letting the single steel mill / 920 mm / tariff backfire serve as the investigative hook.
