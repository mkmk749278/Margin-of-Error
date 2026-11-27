# Gemini handoff check: lpt-goes-steel (27 NOV 2026)

Gemini left 7 files in Drive `Margin-of-Error/lpt-goes-steel/` between 09:58 and 10:24 UTC on 27 NOV 2026: `brief.md`,
`claims.xlsx` (18 rows), `deep_research_dossier` (50 rows, C-01 to C-50, plus a fairness note), a partial draft
archive of the dossier, `narration.md`, `vo_blocks.md` and `claude_code_handoff_spec.md`. They came as Google Docs, not
through `scripts/gemini_handoff.sh` (no `handoff/` folder, no request from us). We treat them as a list of leads (§14.3,
§14.6). This file records what we checked ourselves.

## 1. Facts spot-checked against the primary records (opened by us today)

| Lead | Record opened | Result |
|---|---|---|
| 90% of US electricity passes through an LPT | DOE LPT Resilience Report, EXEC-2022-001242, 10 JUL 2024 | CONFIRMED ("DOE estimates that 90 percent of all electricity consumed in the U.S. passes…") |
| 2019: 137 LPTs (18%) built here, 617 (82%) imported; 4,900–6,799 in service (2022) | same report | CONFIRMED |
| Lead times over 36 months, up to 60 | same report | CONFIRMED |
| About 3 heavy transport cars in North America; route clearance about 9 months | same report | CONFIRMED |
| "38 to 40 years" average age traces to footnote 95, USITC hearing 731-TA-1189, 04 AUG 2011, pp. 147–148 | DOE LPT Study Update, APR 2014 | CONFIRMED; this is a real edge for the film |
| Butler Works master coils 914 mm standard, 920 mm (36.22 in) maximum | Cleveland-Cliffs TRAN-COR H product data, OCT 2024 | CONFIRMED |
| Laser domain refinement erased by annealing above 600 °C | same datasheet | CONFIRMED ("eradicated upon annealing at temperatures greater than 600 °C") |
| 0.23 mm DR grade, 1.01 W/kg (0.460 W/lb) at 1.7 T / 60 Hz | same datasheet | CONFIRMED |
| Sole US GOES producer; $200M investment, $75M DOE award, up to +25% volume, about 1,200 UAW Local 3303, $187M wages | Cleveland-Cliffs release, 05 OCT 2026 | CONFIRMED |
| Breakthrough Institute article (14 AUG 2026), JHU Hub release (17 NOV 2026) | both | NOT CONFIRMED: both sites refuse fetches from the cloud (403); needs an owner fetch |

Everything else (Section 232 report 86 FR 64606, 90 FR 40326, 90 FR 37727, the 2026 DOE RFI, JFE catalogue, Metglas
datasheet, OEM releases, J.P. Morgan, the JHU paper and preprint) is still unchecked and goes through `/fact-check`.

## 2. Problems found

**Facts and fairness**
- `claims.xlsx` (C01–C18) and the dossier (C-01–C-50) use different numbering; the narration cites the dossier ids, so
  most narration tags point at the wrong row of `claims.xlsx`. One `claims.csv` must be rebuilt from the records.
- Title and core framing come from an advocacy think tank's headline ("America makes the wrong steel…"). Saying it in
  our voice, unattributed, breaks "our own adjectives never" and is the main fairness risk toward Cleveland-Cliffs.
- "Roughly thirty times noisier": 27 ppm vs about 0.2–0.9 ppm is a magnetostriction ratio, not a noise ratio. Wrong as
  spoken.
- "Tariffs meant to protect American steel instead subsidized core assembly outside the United States": our reading,
  said as fact; "subsidized" is a loaded word.
- "It does not prove that Cleveland-Cliffs is neglecting Butler Works": raising a charge to deny it plants it.
- The 17–39% wound-core penalty and "only three companies" both rest on the think-tank article; the 232 report should
  carry them where it can.
- The brief's opening drops the wound-core qualifier ("loses up to thirty-nine percent more energy than Japanese steel");
  the narration restores it.

**Format and craft (CLAUDE.md, PLAYBOOK)**
- Length: 2,772 spoken words, about 17.5–19 min at 145–160 wpm, not the 13.5–14.5 min stated. The opening alone runs
  well past 0:45.
- No human through-line from the record, and no real person by 0:20 (§5.1).
- No dated decision for Act III beyond the 2018 tariff scope; the slate parked this case for exactly that (§17.4,
  `transformer-waiting-list`).
- "You might assume", "Today we are going to trace", "Here is the catch": fluff the playbook bans.
- `vo_lint.py`: 9 FAILs (TRAN-COR, CARLITE, LITE, POSCO need say-as-word or spacing; one semicolon) and 12 long sentences
  (one of 79 words).
- `title_lint.py`: FAIL (no case term a viewer types, e.g. "transformer"), 72 characters, thumbnail repeats the title's
  words. Only 3 titles, not 30+.
- Steps skipped: no `research/landscape.md` (what everyone says vs the record, our edge), no treatment, no 3+ angles or
  cold opens, and a "locked" title the owner has not approved. Writing narration is outside Gemini's seven gates.

**Pipeline details in the handoff spec that do not match this repo**
- Paths `episodes/<slug>/`, `src/tokens.ts`, `vo/words.json`: ours are `films/<slug>/`, `config/brand.yaml` →
  `lib/remotion/brand.ts`, `word_align.py` output.
- `modal_gpu.py`, `modal_blender.py`, `modal_render.py`: none exist yet (the Modal port is not built). "Resemble
  Enhance" is not part of our chain. Loudness is −14 LUFS / −1 dBTP (§12), not −1.5.

## 3. What we keep

The dossier is strong research: the record ids, the footnote-95 provenance of the "40-year" figure, the 920 mm and
600 °C lines in Cleveland-Cliffs' own datasheet, the 2018–2025 HTS loophole with its 650% and 400% figures, and the
Schnabel-car limits. It goes in as research leads. Title, narration, VO blocks and spec are not used as written; the
film follows our own path from the brief (§3a), after the owner decides how to proceed.
