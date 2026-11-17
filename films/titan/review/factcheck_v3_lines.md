# Titan: fact-check and fairness v3, three rewritten lines (17 NOV 2026, max effort, fresh context)

**Scope:** the rewritten S119, S147 and S148 in `script/narration.md` / `script/vo.txt`, plus the unchanged S149 read
after them. Method: `.claude/skills/fact-check/SKILL.md`, `.claude/skills/fairness-pass/SKILL.md`, PLAYBOOK §9–§9.6.
**Records read for this pass (primary text only, not memory):**
- NTSB MIR-25-36, fetched from ntsb.gov (87 pp.). §1.3.4, §1.6, figs. 19–21, §2.4.
- NTSB Materials Laboratory Factual Report 24-012 (D. Kramer), fetched from the NTSB docket (55 pp.). Table 1, §2.2,
  and figs. 26 and 31. The figures were looked at as rendered pages.
- TSB M23A0169, `assets/records/tsb/M23A0169-ENG.pdf` (136 pp.). §1.10.10, §1.10.10.1 and §2.1.1. In this file the PDF
  page number equals the printed page number.

Every quote below was matched in code after normalising quotes and whitespace. Three were read by eye: two break across a
line or a page, and the third is figure content. **CG 112 (the hearing transcript) was not re-read:** uscg.mil refuses
this container ("Access Denied"). The Brooks and Kramer words therefore rest on C111 and C130 as matched earlier.

| Line | Verdict | In one line |
| :--- | :--- | :--- |
| S119 | **FIX** | OceanGate drew depth **on the same chart** as the strain, not "on its own chart". "Against the clock" is supported. |
| S147 | **FIX** | "Not dive against dive" is false: the TSB did compare dives. "Measured the strain by depth" is loose. |
| S148 | **FIX** (precision) | "Nearly double" is right for 98%. But the line must say it is **one gauge**: not the NTSB's gauge. |
| S149 | **PASS** | Reads correctly after the fixed S147 and S148. The TSB's caveat is accurate. |

---

## S119: FIX

**Now:** "The depth was there, but on its own chart beside the strain, and both ran against the clock."

**Record:**
- NTSB MIR-25-36 §1.6, PDF p. 51 (printed 43): *"OceanGate analyzed hull strain by plotting it side-by-side with dive
  depth as a function of time."*
- NTSB MIR-25-36 §1.3.4, PDF p. 32 (printed 24): *"OceanGate staff plotted, for each v2 pressure vessel dive, pressure
  vessel strain side-by-side with dive depth as a function of time (see section 1.6)."*
- NTSB MIR-25-36 fig. 20, PDF p. 52. Caption: *"Strain gage output from dive 80, showing hoop strain (green) and
  longitudinal strain (purple) … (Background source: OceanGate)"*. **Read by eye:** this is one chart, titled "Strain
  071522021236 | Group 4". Its legend reads **Group 4 - A / Group 4 - R / Depth**. The left axis is milliVolts (mV), the
  right axis is **Depth (m)**, and the bottom axis is **Time** (07:00–17:00).
- NTSB Materials 24-012 p. 7: *"Plots for acoustic activity and strain as a function of time for Dive 80, prepared by
  OceanGate, are shown …"*. In fig. 26d (p. 36), OceanGate's own small legend lists "Group 4 - A, 4 - R, **Depth**",
  with the depth line on the strain chart. Fig. 26b (p. 35) shows the same layout for group 7.
- NTSB MIR-25-36 §2.4, PDF p. 64: *"OceanGate analyzed data from the strain gages against time. However, analyzing strain
  data in this way was flawed because it was difficult for OceanGate to compare data between dives."*

**Answers to the brief:**
- **"On its own chart beside the strain" is not a fair reading of "side-by-side".** The record's own reproductions of
  OceanGate's plot show the depth as a line **on the strain chart**, on its own right-hand axis. No record shows a
  separate depth chart.
- **Fairness to Brooks.** The line follows his sworn clip, in which he looked for whether the strain "went nonlinear with
  the depth profile". Putting the depth on another chart suggests he had to compare two charts. That weakens his account
  on a premise the record contradicts. The depth line ran across the very chart he read. What the NTSB faults is the
  **axis**, time and not depth, and the NTSB's critique is already attributed (Kramer's clip and S122).
- **"Both ran against the clock" is supported.** The bottom axis is clock time, and the reports say "as a function of
  time" and "against time". There is a low risk that the idiom ("race against the clock") is heard as a hint of haste in
  a film about cost and time pressure. A neutral alternative is given below.

**Replacement (one sentence):**
> The depth was there, on the same chart as the strain, but both ran against the clock.

Alternative with no idiom: "The depth was there, on the same chart as the strain, but both were plotted against time."
`vo_lint` passes either version.

**Picture consequence:** the Kramer clip's picture is "NTSB 24-012 FIG. 26, TRACED". It uses
`<TimeTrace … showDepth={0} />` (`remotion/scenes/act3a.tsx`), so the trace leaves out the depth line that OceanGate's
plot carries. Under the corrected line, bring the depth line in on "depth" or "same chart" (`showDepth` already exists).

## S147: FIX

**Now:** "Canada's investigators later measured the strain by depth their own way: each dive against itself, not dive
against dive."

**Record (TSB M23A0169):**
- §1.10.10.1, p. 38: *"Strain levels for each gauge location were plotted against depth for each dive."*
- p. 38: *"When the data from each dive was plotted from 100 m to 4250 m (i.e. viewed from a macro level) to look at strain
  in relation to depth, the strain slopes for each dive were consistent with each other within a 7% range."*
- p. 39: *"In an attempt to understand these slope changes, the TSB compared the strain slope changes at different depths
  for this gauge over 2 dives (one on 05 August 2021 and one on 19 July 2022). Both dives went to 3840 m. When looking at
  the entire dive profiles (10 m to 3840 m) for these 2 dives, the strain slopes were nearly identical."*
- The NTSB method this line contrasts with, Materials 24-012 pp. 7–8: *"the slope of the depth/strain plots was calculated
  using a linear least squares fit to dive data between 15 m and 150 m of ocean depth. The slopes for Dives 75 and 80,
  prior to the event, were 5.00 m/mV and 4.74 m/mV … After the event, the slopes for Dives 81, 82, and 83 were 8.76 m/mV,
  8.09 m/mV, and 8.77 m/mV"*. The quote spans the page break and was read by eye.

**Answers to the brief:**
- **"Each dive against itself" is accurate for the TSB's headline numbers.** Each is one dive's 10–300 m slope set
  against that same dive's whole-profile slope. The NTSB's "about three quarters" is dive against dive: dives 81–83
  against 75 and 80, over the same 15–150 m band.
- **"Not dive against dive" is a false absolute (§9.3).** The TSB compared dives at the macro level (within 7%). It also
  compared its two dives directly, finding nearly identical whole-dive slopes, then 21% against 98%. The next sentence,
  S149 ("a smaller bend a year earlier"), is itself a dive-against-dive comparison, so the narration would contradict
  itself.
- **"Measured the strain by depth" is loose.** The TSB did not measure strain; OceanGate's gauges did. The TSB plotted the
  recorded strain against depth and measured slopes. "Measured … their own way" can be heard as new measurements or
  tests. Use the TSB's own verb, which is also the film's phrase ("against depth").
- **"Later" holds against the publication dates:** NTSB 24-012 in SEP 2024, MIR-25-36 in OCT 2025, TSB 17 JUN 2026. The
  TSB's lab reports carry 2023 and 2024 numbers (LP171/2023, LP061/2024; §1.34, p. 103), so the analysis may predate the
  NTSB's. Never sharpen "later" to "after the N - T - S - B".

**Replacement (one sentence):**
> Canada's investigators later plotted the strain against depth their own way, measuring each dive against itself.

Alternative: "…their own way, using each dive as its own yardstick." Neither denies that the TSB compared dives, and S148
then defines the measure.

## S148: FIX (precision; the number passes)

**Now:** "On the nineteenth of July, the slope from ten to three hundred metres was nearly double the slope for the whole
dive."

**Record:**
- TSB p. 39: *"The strain gauge located on the centre top portion of the carbon fibre cylinder, was showing the most notable
  slope changes."*
- TSB p. 39: *"When looking at the gauge's strain slope on 19 July 2022 dive for the 10 m to 300 m range, the strain slope
  was found to be 98% greater than the slope for the entire dive profile."*
- TSB §2.1.1, p. 107: *"…significant non-linearity in one of the strain gauges at depths of 600 m or less…"*
- NTSB Materials 24-012 Table 1, p. 6. The NTSB's slope gauge, cluster 4, sits at *"Composite hull – 3.75 inch from FWD
  segment - 110° CCW from top"*. The TSB gauge's position, mid-span at the top, matches cluster 5: *"Composite hull – mid
  span - 0° (top dead center)"*.
- NTSB MIR-25-36 PDF p. 59 (C87): *"The sensor that produced the data shown in section 1.6 was located at the forward end
  of the composite cylinder"*.

**Answers to the brief:**
- **The numbers are fair.** "Nearly double" for 98% greater (1.98 times) is exact enough. Never round it up to "double".
  "From ten to three hundred metres" and "the whole dive" (the entire profile, 10–3,840 m) match the record. The date is
  dive 81, 19 JUL 2022 (C83), and the year is clear from context and the date pill.
- **Same gauge? No.** The TSB's gauge sits on the centre top of the cylinder. The NTSB's group 4 gauge sits near the
  forward end, 110° from the top. Act IV later tells viewers so: "that is where the gauge that showed the change sat"
  (`narration.md` line 251). S148's bare "the slope" follows "Same gauge, same hull, same sea" and "it was not a faulty
  gauge … the gauges had not changed". A viewer can fairly take it to be the same gauge's slope, and then set "nearly
  double" against "about three quarters" as one measure. They are different gauges and different measures.
  - "Different gauges" is our reading of the two stated locations, because neither report names the other's gauge. So
    the line should state only what the TSB says: one gauge, at the top of the hull.
- **No direction claim.** The TSB does not say which way its slope runs, and the line rightly does not say "more strain".

**Replacement (one sentence, 31 words, under the lint's 32-word warning):**
> On the nineteenth of July, for one gauge at the top of the hull, the slope from ten to three hundred metres was nearly
> double its slope for the whole dive.

For the most precise version, "at the top of the hull, midway along" separates it outright from the NTSB's forward-end
gauge in Act IV.

## S149 (unchanged): PASS

"They also found a smaller bend a year earlier, in August twenty twenty-one, and could not determine whether the bang
caused the change."

**Record:**
- TSB p. 39: *"However, when looking at the gauge's strain slope on the 05 August 2021 dive for the 10 m to 300 m range, the
  strain slope was found to be 21% greater than the slope for the entire dive profile."*
- TSB pp. 39 and 107: *"OceanGate did not conduct a thorough inspection of the pressure hull following this event, so it
  cannot be determined whether this event precipitated the non-linear readings on 19 July 2022."*

**Why it passes:**
- "A smaller bend" is a fair plain-English rendering of 21% against 98% at the same gauge ("this gauge over 2 dives").
- 05 AUG 2021 to 19 JUL 2022 is 348 days, which is "a year earlier".
- "Could not determine whether the bang caused the change" is a fair rendering of "cannot be determined whether this
  event precipitated".

After the fixed S147 ("each dive against itself") and S148 ("for one gauge"), the line reads correctly: same gauge, a
smaller within-dive bend. Under the written S147 it contradicted "not dive against dive".

---

## Fairness (US and UK defamation, attribution, individuals)

- **No imputation of wrongdoing in any of the four lines.** They describe a plotting method and two investigators' analyses.
  The one real exposure was S119 stating a false fact about OceanGate's practice, in the passage that faults that practice.
  OceanGate's own lawyer could point to the NTSB's figure 20 and call it inaccurate. In both jurisdictions, a commentary
  defence rests on accurate underlying facts. The fix removes the exposure. (This is a care check, not legal advice.)
- **Attribution.** The criticism of plotting against time belongs to the NTSB. Kramer says it in his own voice, S122 says
  "the N - T - S - B said", and C30 is §2.4's "flawed". S147–S149 are attributed to "Canada's investigators". The TSB's
  caveat is voiced, and its 2021 finding cuts against a simple "the bang did it" story, so the record's complication is
  kept.
- **Brooks:** named only in his public role (OceanGate director of engineering), only through his own sworn words, played
  unaltered. The corrected S119 reconciles his testimony with Kramer's: the depth was on his chart; the axis was time. No
  state of mind is given to him. The later "Brooks was right that there was no new jump" sits inside the labelled "our own
  reading".
- **Kramer:** public role (NTSB senior materials engineer), public hearing testimony.
- **Regulators and investigators** are described by their methods only. The fix for S147 protects the TSB from being
  misdescribed. No partisan words.
- **UK contempt:** no allegation, charge or pending-case statement in these lines.
- **Picture.** The fairness duty extends to these screen items:
  - The traced fig. 26 hides a line OceanGate drew; restore it (S119).
  - The TSB card still reads **"RAN THE SAME TEST ON THEIR OWN"** (`remotion/scenes/act3b.tsx`). That is now contrary to
    the narration and to the record, because the test was not the same. Change it to, for example, "STRAIN AGAINST DEPTH ·
    EACH DIVE AGAINST ITSELF".
  - Add "ONE GAUGE · TOP OF THE HULL" and "10–300 M" beside "+98%".

## claims.csv

**Which row supports each line:**

| Line | Rows that support it |
| :--- | :--- |
| S119 | **C112** (edit below), with C130 (Kramer, "as a function of time"), C111 (Brooks, context) and C30 (NTSB §2.4) |
| S147 | **C123** (edit below) |
| S148 | **C123**, with new **C131** (the gauge) |
| S149 | **C123** |
| NTSB contrast | C41 and C127 (unchanged numbers, note additions below) |

**Proposed rows (exact CSV).** Applied to a temporary copy of `claims.csv` in the scratchpad, `claims_check.py` passes:
131 claims, confirmed 124, claim 4, disputed 3. `claims.csv` itself was not edited.

```csv
C112,"OceanGate plotted hull strain side by side with dive depth, both as a function of time; in OceanGate's own dive-80 strain plot, as the NTSB reproduces it, depth is a line on the same chart as the strain (its own right-hand axis), with clock time along the bottom",yes,,confirmed,https://www.ntsb.gov/investigations/AccidentReports/Reports/MIR2536.pdf,"OceanGate analyzed hull strain by plotting it side-by-side with dive depth as a function of time. | OceanGate staff plotted, for each v2 pressure vessel dive, pressure vessel strain side-by-side with dive depth as a function of time | Strain gage output from dive 80, showing hoop strain (green) and longitudinal strain (purple)","NTSB 1.6, PDF p. 51 (printed 43); 1.3.4, PDF p. 32 (printed 24; 'side-/by-side' breaks across a line). Fig. 20, PDF p. 52, 'Background source: OceanGate', read by eye: legend Group 4 - A, Group 4 - R, Depth; left axis milliVolts (mV), right axis Depth (m), bottom axis Time 07:00-17:00. Same in Materials 24-012 figs. 26b and 26d (pp. 35-36), 'prepared by OceanGate', whose own legend lists Depth. Supports S119 'on the same chart as the strain ... against the clock'. Never 'on its own chart' (review/factcheck_v3_lines.md). Kramer at the USCG hearing: 'typically and perhaps always plotted as a function of time' (C130). On screen: the traced fig. 26 behind the Kramer clip must show the depth line"
C123,"TSB plotted the strain against depth for each dive; for one gauge, on the centre top of the carbon fibre cylinder, it set each dive's 10-300 m slope against that dive's own whole-dive slope (10-3,840 m): 98% greater on 19 JUL 2022 (nearly double), 21% greater on 05 AUG 2021; the two dives' whole-dive slopes were nearly identical; it cannot be determined whether the 15 JUL 2022 event precipitated the non-linear readings",yes,,confirmed,https://www.tsb.gc.ca/eng/rapports-reports/marine/2023/m23a0169/m23a0169.html,"Strain levels for each gauge location were plotted against depth for each dive. | The strain gauge located on the centre top portion of the carbon fibre cylinder, was showing the most notable slope changes. | When looking at the entire dive profiles (10 m to 3840 m) for these 2 dives, the strain slopes were nearly identical. | the strain slope was found to be 98% greater than the slope for the entire dive profile | the strain slope was found to be 21% greater than the slope for the entire dive profile | it cannot be determined whether this event precipitated the non-linear readings on 19 July 2022.","TSB M23A0169 1.10.10.1, official PDF (M23A0169-ENG.pdf) pp. 38-39, PDF page = printed page (was 'pp. 39-40'); 2.1.1 p. 107: 'significant non-linearity in one of the strain gauges'. Supports S147 'plotted the strain against depth ... measuring each dive against itself', S148, S149. The 98% is within one dive, unlike the NTSB's dive-against-dive slopes (C41, C127); but the TSB also compared dives ('consistent with each other within a 7% range', p. 38; 2021 vs 2022, p. 39), so never 'not dive against dive'. 98% greater = 1.98 times: 'nearly double', never 'double'. The TSB does not say which way its slope runs: never 'more strain'. Different gauge from the NTSB's group 4 (C131). Fairness: the TSB's caveat is voiced (S149)"
C131,"The TSB's slope figures are for one gauge, on the centre top of the carbon fibre cylinder; the NTSB's slope figures (C41) are for gauge group 4, near the forward end of the cylinder, 110 degrees from the top",yes,,confirmed,https://www.tsb.gc.ca/eng/rapports-reports/marine/2023/m23a0169/m23a0169.html | https://data.ntsb.gov/Docket/Document/docBLOB?ID=17683484&FileExtension=pdf&FileName=Materials%20Laboratory%20Factual%20Report%2024-012-Rel.pdf,"The strain gauge located on the centre top portion of the carbon fibre cylinder, was showing the most notable slope changes. | (NTSB 24-012 Table 1, cluster 4) Composite hull – 3.75 inch from FWD segment - 110° CCW from top | (NTSB MIR-25-36) The sensor that produced the data shown in section 1.6 was located at the forward end of the composite cylinder","TSB p. 39; NTSB Materials 24-012 Table 1, p. 6 (cluster 5 is 'Composite hull – mid span - 0° (top dead center)', the TSB gauge's position); MIR PDF p. 59 (C87). Two different gauges is our reading of the two locations: neither report names the other's gauge, so the VO says only 'one gauge at the top of the hull' and never compares the 98% with the NTSB's 'about three quarters' as one measure. Supports S148"
```

**Note additions only (claim, quote and status unchanged):**
- **C41 and C127.** Append: "Gauge group 4 = composite hull, 3.75 inch from FWD segment, 110° CCW from top (24-012
  Table 1, p. 6), not the TSB's centre-top gauge (C131). 'About three quarters' is dive against dive in the 15–150 m band;
  the TSB's 98% is within one dive (C123): never present them as one measure."
- **C111.** Append: "S119 (v3) reconciles: OceanGate's plots put the depth line on the strain chart (C112), so 'nonlinear
  with the depth profile' could be judged there; the NTSB's point is the time axis."
- **C130.** Append: "Not re-matched in v3: uscg.mil refuses the container; the 16 NOV re-check is still open."

## Follow-ups (files not edited in this pass)

1. **`script/holds.json` → `h_kramer_time`.** Its `replace` still names the old S119 opening words, "But OceanGate's plots
   put strain and depth side by side". `film_timing.py` matches sentences by their opening words, so this needs
   `after_clip: "h_brooks_linearity"` and no `replace`, so that the new S119 is spoken after both clips. The narration
   header (lines 11–12) still lists the old sentence as the one replaced by Kramer.
2. **Picture.**
   - Show the depth line on the traced fig. 26 during S119.
   - Change the TSB card wording (see Fairness).
   - Re-run `choreo_index.py` and `sync_audit.py` once the pick-ups are cut in.
3. **Owner.** S119, S147 and S148 change narration the owner approved on 16 NOV. The pick-ups (one sentence each, §10.4)
   go to the owner with the fixed wording above.
