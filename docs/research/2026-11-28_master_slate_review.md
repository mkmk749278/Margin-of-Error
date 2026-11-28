# Master Episode Slate 2026–2027: review against the repo and the record (28 NOV 2026)

The owner sent "Margin of Error — Master Episode Slate (2026–2027)" (PDF, 12-film order plus three dossier pillars).
This file checks it against the channel's numbers, the owner's standing decisions (PLAYBOOK §17.1) and our own
confirmed claims. **Every figure in the slate is a lead, not a fact** (CLAUDE.md "Facts only from collected sources"):
none of it enters `claims.csv` until its record is opened. Nothing here changes the slate in §17.4 until the owner
answers the open questions at the end.

## 1. What the channel says today (`channel_stats.py`, 28 NOV 2026)
3 subscribers, 3,488 views, 10 videos. Shorts carry almost all of it (East Palestine Short 1,182; Alaska Shorts 840,
539, 464); the long films are at 97 (Titan, 7 days), 22 (East Palestine) and 10 (Alaska). Analytics still 403 (scope).
Read: the bottleneck is still demand for the long films, which is what §17.1 item 12 (three Track A to one Track B
until monetised) was set to fix. A slate that alternates A and B one to one moves Track B, the lower-demand track, to
half of the output.

## 2. Where the slate conflicts with the repo or the owner's decisions

| # | Slate says | Repo / record says | Proposed handling |
|---|---|---|---|
| 1 | Alternate Track A and Track B | Owner, 10 NOV (§17.1 item 12): 3 Track A : 1 Track B until monetised | Owner's call (Q1) |
| 2 | Next after `lpt-goes-steel`: `key-bridge-dali` | Owner, 27 NOV (`lpt-goes-steel/STATUS.md`): next is **North Hyde** (Heathrow substation fire); `films/key-bridge/` holds research only | Owner's call (Q2) |
| 3 | Order #10: Alaska 1282 final-report film, "4 MISSING BOLTS" | Already made: Film 1 `four-missing-bolts` is built from NTSB AIR-25-04 (claims C51) and is public with three Shorts | Drop from the order; the slot's demand is better served by a re-edited compilation (§17.1 item 13, booster 2) |
| 4 | Pillar 3 #8: East Palestine, "HBD read 103°F (below Norfolk Southern's 200°F alarm threshold)" | Already made (`east-palestine`, public). Our confirmed claims C07/C25: **103°F above ambient**, below the **170°F-above-ambient** threshold (AAR Rule 36); 253°F above ambient at the last detector (C11) | Drop; the slate's "200°F" is wrong and must not be reused anywhere (comment replies use `claims.csv` only) |
| 5 | "Pillar 2 — China Industrial & Supply-Chain Choke Points" as a named track | CLAUDE.md domain: US, UK, Canada, Australia, Europe; "no geopolitics from other regions"; §17.1 item 10: Track B allowed as a physical limit or single supply point **the economy rests on**, with **no national-rivalry framing** | Keep the physics films that a US/UK/European economy visibly rests on (gallium, heavy rare earths, graphite anodes), told from the dependency and the chemistry, never as "China's" track; bench the ones with no US/European stake or a security frame (Q3) |
| 6 | ±1,100 kV Changji–Guquan UHVDC (order #11) | No US/UK/European failure, decision or dependency in the dossier; closest to the "physics-trivia detour" the domain rule excludes | Bench, unless a European/US line (e.g. a grid operator's HVDC plan citing it) gives it a stake |
| 7 | ZPMC port cranes (China #8), anchored in House Homeland Security testimony | A security/geopolitics frame by its source | Bench (domain rule) |
| 8 | "Resemble Enhance on Modal T4" in the locked voice spec | Not in the repo's audio chain (`config/voice.yaml`, §7.5); the owner records in the ElevenLabs app; renders are back on GitHub runners (28 NOV) | Not adopted; would be a new paid GPU step (ground rule 1: ask with cost first) |
| 9 | "$8–$15+ Tier-1 RPM" from Engineering & Finance classification | No source given; YouTube does not publish a category-to-RPM rule | Not used as a planning fact; the title rule itself (lead with the physical constraint) already matches §13.2 |
| 10 | Track A at 18–25 min, Track B at 12–16 min | Owner, 06 NOV: the story sets the length, no band; Track B 12–16 min is in the two-a-week plan as a guide | Keep as guides only |
| 11 | Titles such as "The $300,000 Budget Cut That Dropped a 447-Foot Bridge", "Bankrupted America's Largest East Coast Refinery" | Titles must state the record's decision and number; causal verbs ("dropped", "bankrupted") need the investigator's own finding | Each title re-checked at its brief; working titles only |

## 3. The new Track A cases: leads to check first (none verified yet)
Each needs its case sheet (`brief.md`) from the primary report. What to open first:

- **Fern Hollow Bridge (Pittsburgh, 28 JAN 2022).** Slate cites "NTSB HIR-24-02". Check the real report number (the
  NTSB's highway reports are numbered HAR/HIR; open the PDF), the K-frame section-loss finding, and whether "$300,000
  budget cut" or "$1.199M total maintenance 2018–2021" appears in the report or the docket at all; the city's
  decisions and PennDOT's inspection role get equal scrutiny (regulator same as owner). Strong Act III if the
  inspection-recommendation history is in the docket.
- **UGI / R.M. Palmer (West Reading, PA, 24 MAR 2023).** Slate cites NTSB PIR-25-01: check the number, the "retired
  1982 Aldyl A tee with Delrin insert", the steam-line heating finding, and the 7 fatalities. Pending civil litigation:
  said as pending.
- **Freeport LNG (Quintana, TX, 08 JUN 2022).** Slate cites a PHMSA / IFO Group RCFA. Check whether the RCFA is public
  in full, and whether the event is described as a BLEVE by the record (do not use the word unless it does); the
  "20% of US LNG exports" and "$6–$8B" need named sources (EIA, FERC, company filings).
- **PES refinery (Philadelphia, 21 JUN 2019).** CSB report: check the elbow wall thickness (0.322 in to 0.011 in), the
  drum fragment's weight and distance, and the Chapter 11 timing from court records. The bankruptcy link is a strong
  Act III only if the CSB or a filing ties inspection scope to it; otherwise the timing is shown, not the cause.
- **Winter Storm Elliott (DEC 2022).** FERC-NERC report: check the 90,500 MW figure and its definition, the causes
  table, and the PJM penalty total (PJM / FERC filings, with the complaint and settlement status).
- **Grande Costa d'Avorio (Port Newark, 05 JUL 2023).** Check the NTSB report number, the cargo-pusher vehicle
  finding, the fire-door/CO₂ finding, the damage figure. Two firefighters died: their names only as the record and
  the department give them; no faces.

Ranked for demand first (§17.1 item 12) and fit to the five acts: **North Hyde** (owner's next), **PES**, **Freeport
LNG**, **Fern Hollow**, **UGI/Palmer**, **Elliott**, **Grande Costa d'Avorio**. Key Bridge stays in the bank with its
research (`films/key-bridge/research/notes.md`).

## 4. Track B dossiers: what survives the domain rule
- **Keep (subject to records):** subsea HVDC cable and vessels (Europe; strong bridge from `lpt-goes-steel`); the
  reactor-vessel forging press (US nuclear build-out rests on it; WNA and JSW filings); ABF substrate (every AI
  accelerator rests on it; company filings); Spruce Pine quartz (US site; USGS); gallium from Bayer liquor; heavy
  rare-earth solvent extraction; graphite anodes (USGS/IEA, told as the dependency and the chemistry).
- **Bench:** UHVDC Changji–Guquan, ZPMC cranes (above); CATL cell-to-pack (a product story, no failure or limit);
  Jones Act wind ship (a Track A candidate if Dominion's filings show a dated cost decision instead).
- Every figure in the pillar (Prysmian €17B backlog, NKT €13.0B, JSW 14,000-tonne presses, Ajinomoto ">95%", the
  83% quartz crucible price fall, the Quartz Corp closure) comes from a filing we open; TrendForce and similar market
  trackers are leads, never the source of a number on screen.

## 5. Open questions for the owner (asked in the session, 28 NOV 2026)
Q1 ratio (3:1 vs alternating), Q2 the next film (North Hyde vs Key Bridge), Q3 the "China" pillar framing, Q4 whether
to adopt the slate's new Track A cases into §17.4. Answers go into PLAYBOOK §17.1 and §17.4, with the reason.
