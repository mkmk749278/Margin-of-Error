# East Palestine: design reference (PLAYBOOK §11, 2026-11-06)

Every drawn element, the record behind it, and what we copy. Report figures are NTSB RIR-24-05 (corrected 23 JUL
2024); `fig/…` files are in `public/films/east-palestine/fig/` (Drive `east-palestine/render-media/fig/`). Third-party
figures (fig. 5 Salem camera, fig. 17 SKF, fig. 23 Midland, figs. 6 and 28 on satellite imagery) are references
only, never on screen (`media_manifest.csv`). Labels per PLAYBOOK §9.4.

## Act I: the night of 03 FEB 2023
| Element | Reference | What we copy | Label |
|---|---|---|---|
| Salem camera view, car 23 burning | fig. 5 (REF, not shown): fixed camera "WWTP North Exterior", night, snow on the ground, train passing left to right, fire circled on wheelset #1; p. 104 "a fire on the L1 bearing" (C167) | high fixed camera, wide-angle, night grade, track crossing frame left→right, one small fire at the leading wheelset; nothing else invented (no faces, no signage) | `RECONSTRUCTION` + "THE REAL FRAME: NTSB RIR-24-05, FIG. 5" |
| Train 32N | p. 4 (C02): 3 locomotives, 149 cars, 9,309 ft; car 23 = GPLX75465, covered hopper (C82) | schematic consist bar, car 23 marked, never a photo-real train | `RECONSTRUCTION` |
| Readouts 38 / 103 / 253 | fig. 29 (`fig29_hbd_readings.png`): 38°F no alert (Sebring 7:37), 103°F non-critical alert to Wayside Help Desk, no alarm to crew (Salem 8:13), 253°F critical alarm (East Palestine 8:52) | our counters in their colours (103 amber, 253 red, "MAX" tag from p. 8 n. 15, C55); then fig. 29 itself as the exhibit | (record) |
| Route line, three detectors | fig. 3 (`fig03_hbd_map.png`): MP 79.8, 69.01, 49.81; Ohio–Pennsylvania line east of East Palestine; 5 mi scale | the route's shape traced from fig. 3 in cyan on the grid; MP labels; 19 miles Salem→East Palestine (C13, C114) | `RECONSTRUCTION` (route traced from NTSB fig. 3) |
| Alarm text | p. 8 (C53): "Critical alarm, critical alarm, critical alarm. Norfolk Southern milepost 49.8, track 1 hotbox, axle 101, south side" | TEXT only, typed out as the defect detector's words; never audio | `TRANSCRIPTION` (from NTSB p. 8) |
| Crew's response, speeds | event recorder CSV (`remotion/data/er_ns4178.json`): 20:52:45 43 mph, DB notch climbing, emergency 20:54:24 at 41 mph, stop 20:55:02 | the strip is the recorder's own data, 1 s resolution; distance is OUR CALCULATION | `NTSB EVENT RECORDER DATA` · `OUR CALCULATION` on distance |
| Site, 1-mile ring | fig. 6, fig. 28 (REF: satellite base); p. x (C34) | our own line map: track, point of derailment, the pileup extent, a 1-mile circle; no satellite imagery | `RECONSTRUCTION` |

## Act II: the mechanism
| Element | Reference | What we copy | Label |
|---|---|---|---|
| Wheelset and bearing positions | fig. 4 (`fig04_wheelset_diagram.png`): axles 1–4, R1–R4 / L1–L4, A end / B end, direction of travel | L1 = axle 1, left side, leading (B) end; our car drawn to this layout | (NTSB fig. on screen once) |
| The bearing (hero 2) | fig. 17 (SKF, REF): cup, two cones, two rows of tapered rollers, cage, spacer ring, wear ring, grease seals; p. 46 n. 75 (C175); hearing p. 195 (C127) | a tapered roller bearing in section: outer cup, inner cones on the journal, rollers, cage, seals; journal end of the axle pressed in; friction → heat (p. 4 n. 11, C118) | `ILLUSTRATION` · `NOT TO SCALE` where needed |
| The detector's two eyes | fig. 13 (`fig13_hbd_example.png`, NTSB photo): a box on the rail web; p. 4 n. 11: "a pair of upward-facing infrared cameras" (C116); fig. 14 (`fig14_hbd_scan_location.png`): scan at the bearing cup, 7.25 in from the inner edge of the rail | two upward cones of view from a box at the rail, each crossing the bearing cup's inner edge (p. 105, C117) | `ILLUSTRATION` |
| Heat lag | p. 105 finding 5 (C176): exterior temperature lags the interior; p. 111 "less than a minute" (C119) | two curves, inside and outside, the outside one late and lower | `ILLUSTRATIVE VALUES` |
| NS's ladder | NS rule 147 (docket item 68, `rule_p003.jpg`, quotation only, C78, C79); p. 7 90°F (C06); p. 43 Table 7 (C77): critical 200 → 170 after the derailment | three rungs: 90 alert to desk · 170 alarm to crew (reduce speed) · 200 critical (stop) as of 03 FEB 2023 | (record) |

## Act III: the boardroom
| Element | Reference | What we copy | Label |
|---|---|---|---|
| RIR pp. 106–107 | `pages/rir_p121.jpg`, `rir_p122.jpg`; highlights C23, C24, C72, C114, C16 | Exhibit desk pose; highlight on the located words | (record) |
| The hearing | `excerpts/hearing_clip1.mp4`, `hearing_clip2.mp4`; captions `remotion/data/clip_captions.json`; transcript pages `hearing_p041-042.jpg` | full frame, live-caption band (y > 860) cropped by framing, our captions from the transcript with the speaker's name and role | `NTSB HEARING · 23 JUN 2023` |
| 8-K, 10-Ks, proxy | `docs/ns_8k_*.png`, `ns_10k*_*.png`, `ns_proxy21_or.png` | Exhibit desk pose (paper token, tilt kept); counters drawn from the rows; totals tagged | `OUR CALCULATION` on sums (C161, C162) |
| Car's papers | p. 45 (C82), p. 3 n. 6 (C170) | three plain tags GATX · BRASKEM · TRRA | (record) |

## Act IV: the cascade
| Element | Reference | What we copy | Label |
|---|---|---|---|
| Burn-off, journal separates | figs. 15, 16, 18, 19 (NTSB photos); p. 48 (C177), p. 101 (C81) | the real photos after the drawing: cup melted and galled, journal rubbed; our sequence ends on the photos | `ILLUSTRATION` · `NOT TO SCALE`, then (record) |
| The blind nineteen miles | `er_ns4178.json` + fig. 29 | the strip runs on the recorder data; detector ticks only at MP 69.01 and 49.81; "NO HOT BEARING DETECTOR" across the gap (C13, C114) | `NTSB EVENT RECORDER DATA` |
| DOT-111 punctured | fig. 20 (`fig20_head_punctures.png`, NTSB photo, UTLX205907) | the photo itself | (record) |
| Relief valves | fig. 8 (NTSB photos, PRDs venting); fig. 23 (Midland diagram, REF); p. 17 (C181) | our simplified PRD: spring, stem, opening at set pressure | `ILLUSTRATION` |
| The five VCM cars | fig. 7 (`fig07_pileup_vcm_cars.png`): OCPX80370, OCPX80235, OCPX80179, GATX95098, TILX402025 labelled; DOT-105 (C178) | five outlines, reporting marks as the report spells them | `RECONSTRUCTION` |
| The one plot | Table 3 (`remotion/data/table3_ocpx80370.json`); fig. 32 (`fig32_ocpx80370_temps.png`); band 153–158°F (p. 28, C63, C64) | our plot from Table 3: the measured points, the 2–4 a.m. gap left empty, the 139 footnote; the 153–158 band drawn above. **The report's own axis stops at 145°F: the band does not fit on its chart.** Our y axis extends to 160 so both are seen once; then hand off to fig. 32 | `RECONSTRUCTION` (from NTSB Table 3) |
| Vent and burn | fig. 9 (NTSB illustration); `excerpts/plume_item57.mp4` (Columbiana County drone, 4 s) | fig. 9 as the exhibit for "how"; the drone excerpt for "what it looked like" | credit "COLUMBIANA COUNTY COMMISSIONER'S OFFICE · NTSB DOCKET ITEM 57" |
| Vapor pressure | fig. 30 (`fig30_vcm_vapor_pressure.png`) | only if Act IV needs it (C94, C150); else cut | (record) |

## Act V: the verdict
| Element | Reference | What we copy | Label |
|---|---|---|---|
| Probable cause | `pages/rir_p013.jpg` (p. xii; C42, C130–C134) | first clause highlighted; the rest held as the page | (record) |
| Court orders | `pages/decree_p001.jpg`, `p011`; `classfund_p003.jpg`, `p029` | dated tags `09 MAR 2026`, `01 MAY 2026`; status re-checked on upload day | (record) |
| CRS line, R-24-003 | `pages/crs_p013.jpg` (C84); `recs_p016.jpg` (C87) | the sentence and the status, dated | (record) |
| NS's response | `docs/ns_release_*.png` | the company's words, attributed, beside the finding | (record) |
