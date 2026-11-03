# The Four Missing Bolts: design reference (PLAYBOOK §11)

Every drawn element, the real reference behind it, and what we copy. Geometry is redrawn by us (labelled ILLUSTRATION or
RECONSTRUCTION); Boeing-owned drawings are references only (`media_manifest.csv`, `REFERENCE_ONLY`).

## The plug (Act II, Act IV)
| Element | Reference | What we copy |
|---|---|---|
| Outline and size | Report p. 1 fn; Structures Factual §1.1 ("about 29 inches wide by 59 inches high") | 29 × 59 in rectangle with rounded corners; one full-size passenger window (report p. 14) |
| Position on the airplane | Report Fig. 2 (NTSB, on-screen OK); Structures §1.1 ("behind the wing … centerlines at Station 727") | side-view placement aft of the wing, left side, row 26 |
| 12 stop fittings | Report Figs 3–5 (REF), Fig. 11 (NTSB photo); Structures §1.1: "12 stop fittings on the MED plug, 6 on each side, that engage with 6 stop pads on a fuselage frame forward of the opening and 6 … aft"; numbered 1–6 from the top, F/A (Structures fn 1) | 6 per vertical edge, labelled 1F…6F / 1A…6A; stop pin on the plug fitting bearing on the pad face |
| What the stops carry | Structures §1.1: "The pressure loads (radially outward) are carried through 12 stop fittings" | cyan load arrows outward onto the pads when pressurised |
| Upper guide fittings and rollers | Figs 3–4 (REF), Fig. 12 (NTSB photo); Structures §1.1 | 1 forward, 1 aft on the upper half; roller on the fuselage frame runs in the plug's guide track |
| Upper guide track bolts (2) | Report p. 12; Structures Fig. 4 (REF) | through each upper guide fitting below the roller; two washers, castle nut, cotter pin |
| Lower hinge fittings and guide fittings (2) | Figs 3–4 (REF), Fig. 13 (NTSB photo) | on the lower sill, forward and aft; pivot for opening |
| Vertical movement arrestor bolts (2) | Report p. 12; Fig. 13 (bolt holes, NTSB) | through the lower hinge guide fitting and hinge fitting shaft; washers, castle nut, cotter pin |
| Lift-assist springs (2) | Report p. 14 ("about 50 lbs of force when fully compressed") | one in each lower hinge assembly |
| Opening motion | Structures §1.1: "vertically upward at a slight inclination inboard such that the plug stops will clear the fuselage stop pads. Once clear, the MED plug pivots outboard about the lower hinge fitting bolts"; report p. 15 (stops clear "by about half an inch") | lift (0.5 in, `CRITICAL CLEARANCE THRESHOLD`) → pivot outboard about the lower hinges |
| Opening limit | Report pp. 16–17; Structures §1.1 ("no further than 15°", straps below the second stop from the top) | strap assemblies, max 15° |
| Gap at the lower edge | Report Fig. 14 (NTSB photo, exemplar right plug): 0.079 / 0.315 / 0.630 in | exterior gap ruler; never confused with the 0.5 in threshold (`remotion/telemetry.ts`) |
| Separation damage | Figs 10–13 (NTSB photos); report pp. 84–85 | sliding marks on stop pins and pads; upper guide fittings split by the rollers; lower hinge guide fittings twisted |
| Post-accident fix | Docket "MED Plug Enhancements" (Boeing copyright, REF): two retention arm assemblies, bolts on safety-wire lanyards, sidewall interference if not stowed | redraw as ILLUSTRATION, "SUBJECT TO FINAL CERTIFICATION" label until status is checked |

## The airplane and cabin (Act I)
| Element | Reference | What we copy |
|---|---|---|
| Exterior, N704AL | NTSB Flickr 53449315887, 53450558949, 53450656285 (public domain) | real photos, credited NTSB; Ken-Burns push only |
| Cabin hole, row 26 | Report Fig. 1; Flickr 53450362723, 53450363008, 53450363078 | real photos; seat labels 25A/26A from Fig. 1 |
| Investigators at work | Flickr 53449316062, 53450243266, 53450558959, 53450362993 | real photos for Act V (the investigation); no victims shown |
| Flight track and readouts | Docket FDR attachment 1 (`remotion/data/fdr_1282.json`) | real altitude, cabin pressure (CPC1/CPC2), warning and master-caution events, GPS track |

## The factory (Act III)
| Element | Reference | What we copy |
|---|---|---|
| Flow days | Report Fig. 16 (REF, adapted from Boeing) | our own 10-position line diagram, labelled ILLUSTRATION |
| Open / closed timeline | Report Fig. 17 (REF: contains Boeing photos) | our own timeline bar with the report's periods (closed 18 Sep 0516–0758; open 18 Sep 1053 – 19 Sep 1709; closed from 19 Sep 1839) |
| The 18:39 photograph | Report Fig. 18 (Boeing, REF; owner 2026-11-02: redraw) | RECONSTRUCTION on exhibit paper: plug closed, three hardware positions in view and empty |
| Removal record | BPI excerpts (docket 11-O) | our own blank form, labelled TRANSCRIPTION/RECONSTRUCTION, never a fake Boeing document |

## Sound
`assets/sfx/` from `scripts/sfx_synth.py` (synthesised, seeded, no licence): quartz_tick, relay_click, pen_scratch,
paper_slide, stamp, highlighter, cockpit_chime (synthetic tone, not a real alarm), pressure_drop, metal_snap_sub,
transformer_hum, whoosh, and room_bed (the −30 dB under-speech bed).
