# Titan · viewer panel on cut v2, every point checked (PLAYBOOK §14.3), 17 NOV 2026

Report: `viewer_review_v2_720p.md` (independent session, no repo; four viewers: US engineer, UK pilot, US analyst,
UK TV viewer). Checked against the code, `vo/timing.json` and stills of the current build. Times are cut v2.

## Production defects (§10)
| v2 time | Point | Check | Outcome |
|---|---|---|---|
| 14:03.5 | burned-in title of the source video collides with the credit; empty box top-left | CONFIRMED on v2 | Title: FIXED in v3 (re-cut from 0:12). Empty box: CONFIRMED in v4 (the card faded in before its first word); FIXED for v5: every card over footage arrives with its first word (s11, s68, s159, s167) |
| 14:04–14:13 | postcard houses under "set down in a parking lot" | PARTLY: the strip says REFERENCE, NOT THE BASE, but the picture is generic | Honesty label now 36 px bold (below); no licence-clean picture of the base exists in our sources. Kept, labelled. |
| 19:29–19:49 | ledger tags cover dive numbers; "≈ 500 M SHORT" clipped | Tags: FIXED in v3. Clip: CONFIRMED in v4 | FIXED for v5: label and bracket sit left of the dive-88 bar |
| 11:56, 12:58, 14:40, 6:28, 19:01 | rolling counters pause on in-between values (+62%, +89%, 28.6°F, 8+) | CONFIRMED | FIXED for v5: numbers still roll (house rule: no number jumps) but read grey until they land; colour arrives with the true value. Dive 88's depth stays grey: it never lands on a sourced value |
| 0:49 | axis label flickers TIME → DEPTH → TIME | CONFIRMED (the crossfade in one place also garbles the two words) | FIXED for v5: TIME slides left and dims, "→ DEPTH" arrives beside it and stays; the promise is kept at 11:10 |
| throughout | credit strip ~10 px at 720p; "REFERENCE FOOTAGE, NOT THE DAY" unreadable on TV | CONFIRMED (26 px at 1080; the §6.7 floor for honesty labels is 36) | FIXED for v5: any REFERENCE / RECONSTRUCTION / ILLUSTRATION wording in a footage strip is 36 px bold |

## Attention and confusion (§3, §4)
| Point | Check | Outcome |
|---|---|---|
| 0:41–0:54 promise: caption says depth, chart still time | PARTLY: the narration promises the chart ("We will draw that chart"), it does not claim it is on screen | Axis label now reads as a promise (TIME → DEPTH). Showing the depth plot here would spend the 11:10 reveal (forensic 1.1 protected it); not done |
| 2:22–2:41 robotic layup footage reads as filler | PARTLY: it is labelled reference; Titan's own build is not in licence-clean sources | Kept, labelled; the viewer's wish to see the real hull is now met at s39 (fig. 149, the hull itself) |
| 2:41–4:37 one chart for two minutes | CONFIRMED (stills of the current build): one "HOW STRONG WAS IT?" frame for ~2 min; it builds word by word (goal, theory line, models, test log, NEVER TESTED) but the frame never changes and text piles up beside it | FIXED for v5 (in part): the record breaks the chart twice: Titan's hull in the Navy's test tank (USCG ROI fig. 149, 25 FEB 2021) on s39, and the facility's 1 MAR 2021 logbook with the board's arrow on 6,154 psi (fig. 151) on s41–s42, each with a 36 px finding bar. The gauge stays as the through-line between them |
| 5:00–5:38 near-black frames | PARTLY: "THE SYSTEM HAD LIMITS" card opens mostly empty, then fills (surface/dive/storage bar, the eight channels, the threshold trace) | OPEN, round 5: open on the eight-sensor ring from 4:42 and grey channels 1, 3, 5 as said |
| 14 tilted report pages ("homework") | PARTLY: pages are the film's evidence (the record, not the rumour); round 4 added four more, replacing text-only cards the forensic review flagged | Kept; each page now pushes in to one highlighted line with a 36 px finding bar (round 4) |
| 18:58–19:02 dive 88 counter stops at 1,280 m | FIXED in v3 (rolls toward 3,350 m under the cut) | — |
| 7:16 "dives fifty to eighty-eight", chart shows 75–80 | CONFIRMED | FIXED for v5: "· SHOWN HERE: 75 → 80, TO THE WRECK" |
| 10:33 Brooks "linearity with depth" vs 10:48 Kramer "plotted against time" | CONFIRMED as a viewer question; both are sworn testimony and both are in the record | **Narration: owner's decision.** Proposed line (after Kramer): "Both are on the record: Brooks said what he looked for; the N - T - S - B said how the company's plots were drawn." Needs a fact-check pass |
| +75% (NTSB) vs +98% (TSB) read as a disagreement | PARTLY: the narration says Canada's investigators compared the surface stretch with the whole dive | Picture: the TSB card already names its own measure; **narration line optional, owner** |
| Act III is 12.5 min and holds three stories | CONFIRMED (structure) | Not changed at this stage: act cards are part of the locked structure; noted for the owner |
| unnamed directors (2018 marine operations, first engineering director) | CONFIRMED | Kept unnamed by design (individuals only in their public role and as much as the story needs); roles are on screen |
| 13:10 physics of the bend (which way should the gauge move?) | PARTLY | **Narration: owner's decision**; needs a sourced NTSB sentence first |

## Fairness (§9)
| Point | Check | Outcome |
|---|---|---|
| 6:12–6:20 crude language on the CG-100 page | PARTLY: the highlights are the words narrated ("those are scraps", "acoustic monitoring … way before it fails"); the crude words are on the page, not highlighted | Kept: "the rest of it is crap … that's why you cut it off" is the line our narration paraphrases ("cut away for that reason", C116), so it stays highlighted as evidence; p. 5's crude phrase is never highlighted and the push centres on the acoustic-monitoring line |
| 12:33 hindsight of "would have shown the bend" | NOT CONFIRMED: flagged OUR READING on screen, and the USCG board's "all sufficient RTM data" page sits before it | none |
| OceanGate's jurisdiction position not stated | CONFIRMED as an open question | **Research lead** for the owner: ROI on OceanGate's stated view (Canadian/international waters); only with a source |
| Brooks's background said twice (7:46, 9:23) | PARTLY: 9:23 is a hearing clip (his own words) | Kept; his own voice, not our narration |

## Unanswered questions (§6): leads only, each needs a source before any line
Implosion timescale; the 2023 search "banging" noises; dive-88 monitor data; ticket price and revenue; who the five
were; OceanGate's position on jurisdiction; litigation. Listed for the owner with the package (pinned comment and
description can answer some with sources).
