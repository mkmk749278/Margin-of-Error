# Act I · The Incident: scene handoff (PLAYBOOK §10.3, 2026-11-06)

Sentences 0–31, F0–F8559 (0:00–2:22.6; Act II's first word at F8521). Code: `remotion/scenes/act1.tsx`, parts in
`remotion/parts.tsx`. Every word cue, frame by frame: `scenes/choreography/act1.md`. Colour = meaning: cyan nominal
(detector, clock, route), amber thresholds and the burning car, red failure (253, the alarm, the broken axle), ink the
record. Composition `EastPalestine`.

| Scene | Frames | Base picture | Record (claims) | Labels | Sound cues | Semantic lock |
|---|---|---|---|---|---|---|
| Salem | 0–1237 | dateline (03 FEB 2023 · 8:13 P.M. EST · SALEM, OHIO · MP 69.01), then the camera diagram: factory, camera and view cone, the train passing, car 23 | C01, C04, C05, C82, C167; NTSB fig. 5 named on the strip | RECONSTRUCTION (36 px); "THE REAL FRAME: NTSB RIR-24-05, FIG. 5" | quartz ticks on the date and clock, relay on OHIO, pen on the factory, whoosh on the fire, relays on car 23 and the bearing | at "fire" a fire glows at the leading wheelset; at "twenty-third" the count lands on 23 and brackets lock on that car; at "bearing" brackets lock on the axle end |
| Detector | 1213–2703 | the wheelset over the detector in elevation (after NTSB figs. 13–14), the gauge 0–260 °F above ambient | C05, C07, C08, C116, C117, C184 | ILLUSTRATION | relay on the detector, hum under the infrared, ticks on 103 and 170, desk chime on ALERT | at "three" the bar and the number land on +103°F together; at "seventy" the stop line's number lands on 170, above the bar; at "nothing" NO ALARM |
| Consist | 2702–3202 | the train as a bar: 3 locomotives, 149 cars filling as they are counted, car 23 amber | C02 | — | stamp on 32N, ticks on 149 and the feet | at "forty-nine" 149 lands; at "nine" (the second) 9,309 FT lands |
| Loop 1 | 3196–3827 | 170°F card; the hearing transcript face down | C25, C173 | — | tick on 170, paper on the transcript | at "record" the transcript arrives face down; it turns face up at the Act II→III turn |
| East Palestine | 3824–4848 | the route traced from NTSB fig. 3 (`data/route_fig3.json`); the gauge | C11, C55, C106, C112 | ROUTE AFTER NTSB FIGS. 3, 29 (strip) | tick on 8:52, relay on the detector, tick on 253, stamp on MAX | at "minutes" the clock lands on 8:52, +39 MIN; at "fifty-three" +253°F lands red above the line; at "highest" MAX READING |
| Cab | 4845–5439 | the cab card: the alarm as text only, then the event recorder's own speed and brake | C53, C10, C108; event recorder NS 4178 | TRANSCRIPTION · TEXT ONLY; TIME COMPRESSED | synthesised chime on each "critical" | each CRITICAL and ALARM lands on its own word; never audio |
| Finding 1 | 5414–6018 | NTSB RIR-24-05 p. 166, finding 1 | C15 | — | paper, highlighter | the three highlighted lines draw on "handled", "properly", "alarm" |
| Derailment | 6005–6717 | plan view, the train and the 1-mile zone on one scale | C01, C14, C34 | RECONSTRUCTION; PILEUP ARRANGEMENT ILLUSTRATIVE | sub snap on "came apart", ticks on 38 and 2,000 | at "came" a red ring at car 23's axle; at "thirty-eight" 38 lands and the cars fold off the line; at "leave" the ring draws |
| Scope | 6709–7185 | three cards: the warning system, the decisions, health and environment | — | — | relays | at "separate" the third card slides aside and dims |
| Loop 2 | 7184–8116 | five tank outlines under an amber band, then the two numbers | C63, C64, C183 | ILLUSTRATION | tick on 06 FEB, relay on ?°F, stamp on TWO NUMBERS | the band is ?°F: the number (153–158) is not said until Act IV |
| Question | 8109–8559 | the route, the 19 miles between Salem and East Palestine lit amber | C13, C114 | RECONSTRUCTION (strip) | pen on "margin", relay on "run out" | at "margin" the 19 miles start to light; at "run out" East Palestine turns red |

**Act II title** in the 2 s hold after s31 (F8328–F8551): ACT II · THE MECHANISM · HOW THE SYSTEM WAS MEANT TO CATCH IT.

Checks: `npx tsc --noEmit` clean; `scripts/text_floor.py` reads 0; `scripts/sync_audit.py`: Act I 32/32 sentences
pass (Acts II–V not yet built); stills at every cue looked at (session, 2026-11-06).
