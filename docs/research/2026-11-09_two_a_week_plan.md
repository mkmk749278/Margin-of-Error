# Two films a week: how the channel sustains it (2026-11-09)

The owner's goal: more views, more earnings, which needs **two films a week** (Track A Tuesday, Track B Friday;
PLAYBOOK §17.1 item 10). This is the plan that makes the cadence real: where the cases come from, how each film gets
made in about three days, and how each film feeds the next one's views.

## 1. Supply: we are not short of cases
New NTSB final reports are a small part of the pool. The real pool is **every published record from fifty years of
investigations**, plus the bodies beside the NTSB. Classic cases carry **evergreen search demand** (people search
"Challenger O-ring", "Hyatt Regency walkway" every month, for years); new reports carry **news spikes**. We use both.

**Track A sources (forensic autopsy):**
| Body | What it gives us | Region |
|---|---|---|
| NTSB (air, rail, pipeline, highway, marine) | final reports, dockets, hearings, animations | US |
| CSB | chemical and refinery explosions, with videos and a decision layer in almost every report | US |
| FRA, PHMSA, FAA, NRC, DOE, FERC-NERC | enforcement, grid events, pipeline failures | US |
| AAIB, RAIB, MAIB, HSE, public inquiries, coroners' prevention-of-future-deaths reports | UK air, rail, sea, industry | UK |
| TSB Canada, ATSB | rail, air, marine | Canada, Australia |
| BEA, ESA/EU inquiry reports, ENTSO-E | air, grid | Europe |
| SEC filings, DOJ and court records, congressional reports | the Act III money trail for every case | all |

**Track B sources (Invisible Moats):** DOE, GAO, CRS, USGS mineral summaries, Commerce Section 232 investigations,
NIST, NERC reliability assessments, IEA, the EU Chips Act and Critical Raw Materials records, company 10-Ks and
annual reports, standards bodies (IEEE, ASME, AAR). These are public and deep, so a moats film doesn't wait on an
accident.

**The bank:** §4 lists 40 leads (each still needs its case sheet from the record). At eight a month that is five
months of work, and the bank refills faster than we spend it.

## 2. Throughput: about three days a film, two films in flight
East Palestine took about five working days, because we built every part for the first time: the detector map, the
document desk, the telemetry, the mix chain. From here most of that is reuse.

1. **The kit (one-time, week 1).** Turn Films 1–2 into reusable Remotion scenes in `lib/remotion/`: document desk with
   highlight, route map with markers, timeline bar, money chart (filings over years), telemetry readout and trace,
   exploded part, specimen on the bench, verdict card, outro. A new film then writes data and choreography, not
   components. Each film still gets **one new hero build** of its own so the catalogue doesn't look templated.
2. **Two formats.** Track A: 18–25 min, five acts. Track B: **12–16 min**, a tighter four-beat shape (the limit,
   the physics, the concentration and who decided it, what happens if it breaks), fewer exhibits and one hero build.
3. **Research runs four weeks ahead.** Case sheets and record pulls for the next eight films are batched, so a film
   starts with its documents already in Drive.
4. **The weekly line (per film, overlapping):** day 1 brief, package and treatment; day 2 facts, fairness and
   narration; day 3 voice, choreography and render on the runners; day 4 review cut, fixes, master and package.
   Track A for Tuesday starts the Wednesday before; Track B for Friday starts the Saturday before.
5. **Gates that stay:** facts from the record and the fairness pass. They are what keep a channel naming real
   companies off a strike or a legal letter, and they are what the audience research says US and UK viewers reward.
   **Gates that can merge:** the owner sees two things per film, the package and treatment, then the cut (§5).

## 3. Views: every film feeds the next one
- **Package first, tested:** three title-and-thumbnail pairs in Test & Compare on every upload (already the rule).
- **Retention:** a cold open on the exhibit by 0:07, an open loop by 0:30, re-hooks near 3 and 6 minutes, each act ending
  on the next act's question. The 24 h, 7 d and 28 d reads of each film's retention curve set the next film's edit:
  where viewers leave, we cut harder (§13.6).
- **Series and chaining:** playlists by type ("Rail", "Aviation", "Chemical", "The Invisible Moats"); the end screen
  points to the film in the same series. Suggested traffic is how a small channel grows, and series feed it.
- **Shorts:** two or three per film (the exhibit line, the threshold crossing, the number that lands), each linked to the
  film. At eight films a month that is 16–24 Shorts a month for discovery, from footage we already rendered.
- **News timing:** when a new final report lands on a case with interest, that film jumps the queue (the "final
  report" slot, §17.4). UPS 2976 and the Potomac midair kits get built ahead.
- **Evergreen titles:** classics carry the case name the viewer types ("Hyatt Regency", "Alaska 261") in the title,
  description line 1 and the first minute.

## 4. The case bank (leads, from memory; each needs its case sheet and record before it counts)
**Track A (forensic):** Baltimore Key Bridge / *Dali* (film 3); Potomac midair 2025; UPS 2976; Alaska 261 (jackscrew
lubrication interval extended); American 191 (engine removal shortcut); Aloha 243 (fatigue in high-cycle aircraft);
United 232 (titanium disk inclusion); Southwest 1380 (fan blade); Hyatt Regency walkway; I-35W bridge (gusset plates);
FIU pedestrian bridge; Silver Bridge; San Bruno pipeline (PG&E); Merrimack Valley gas explosions; Camp Fire (PG&E);
Texas City refinery (BP, CSB); Deepwater Horizon; West Fertilizer (CSB); Philadelphia Energy Solutions (CSB);
Challenger; Columbia; Lac-Mégantic (TSB Canada); Hatfield (UK rail, gauge-corner cracking); Carmont/Stonehaven (RAIB);
Buncefield (UK); Piper Alpha (Cullen inquiry); Heathrow North Hyde substation fire; Iberian blackout; Texas February
2021 outages; Optus Triple Zero; CrowdStrike July 2024 (airlines and hospitals stopped); Flint water switch; Titan
(USCG report). Grenfell, Post Office Horizon and Didcot stay on hold for the UK contempt check.

**Track B (Invisible Moats):** EUV mirrors and the single supplier; large power transformers and GOES steel; the
coupler knuckle and long-train slack; P&I clubs and the reinsurance tower; helium supply; jet-engine single-crystal
turbine blades and their casting houses; titanium sponge; rare-earth magnets; neon and specialty gases for chips;
high-purity quartz from one North Carolina town; aircraft fastener supply; HALEU nuclear fuel; undersea cable repair
ships; the grain-elevator and lock system on the Mississippi.

## 5. The owner's decisions (2026-11-09)
- **Four gates stay** (treatment, narration, audio, cut). To keep two a week with them, I send each gate the moment it's
  ready, as one message with click-to-copy blocks, and the next film's work runs while a gate waits.
- **First Invisible Moats film: transformers** (slate #3, `transformer-waiting-list`), from DOE, NERC and Commerce
  records. **Week 1:** the kit, Key Bridge (Track A) and transformers (Track B) in parallel.
