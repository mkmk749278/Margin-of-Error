# Choreography: Act I · The Incident (sentences 0–31)

PLAYBOOK §10.6. Frames are the film's 60 fps, measured word starts (`vo/timing.json`, `scripts/word_align.py`); each cue in
`remotion/scenes/act1.tsx` is a literal `wf(sentence, 'word')`. Regenerate after any timing change:
`python3 scenes/choreography/act1_table.py`. Gate: `review/sync_audit.md` (Act I: 32/32 sentences pass).

## Salem (s0–s5) · base: the dateline, then the camera diagram (RECONSTRUCTION; pointer to NTSB fig. 5)

| Spoken trigger | Frame (offset) | On-screen state mutation | Eye target | Implementation |
| :--- | :--- | :--- | :--- | :--- |
| s0 `third` | `F12` (+0.20 s) | day rolls 01 → 03, lands amber | the date, top left | `Dateline` rollTo day |
| s0 `February` | `F37` (+0.62 s) | month snaps FEB | date | `Dateline` lit() |
| s0 `twenty` | `F83` (+1.38 s) | year shows 20·· | date | `Dateline` yearA |
| s0 `twenty-three` | `F104` (+1.73 s) | year completes 2023, bump | date | `Dateline` year |
| s1 `Eight` | `F182` (+0.05 s) | clock 8:·· | clock line, cyan | `Dateline` clock |
| s1 `thirteen` | `F196` (+0.28 s) | clock lands 8:13 P.M. EST, bump | clock | `Dateline` clockMin |
| s2 `Salem` | `F301` (+0.08 s) | SALEM, lights | place line | `Dateline` place |
| s2 `Ohio` | `F345` (+0.82 s) | OHIO, then MP 69.01 | place line | `Dateline` state |
| s3 `freight` | `F439` (+0.13 s) | dateline out; camera diagram mount slides on | the yard | `Mount` start, `offW` |
| s3 `train` | `F456` (+0.42 s) | FREIGHT TRAIN · EASTBOUND → | lower left | `Pop` |
| s3 `passing` | `F482` (+0.85 s) | the train rolls right and eases to a stop | the cars | `tween` x23 |
| s3 `factory` | `F510` (+1.32 s) | factory outline stroke-draws | right, the building | `strokeDashoffset` |
| s3 `surveillance` | `F577` (+2.43 s) | camera at half light | camera on the building | `camOn` |
| s3 `camera` | `F611` (+3.00 s) | camera and its view cone, label | cone to the track | `camOn` |
| s3 `records` | `F636` (+3.42 s) | cone pulses amber | cone | `flash` |
| s3 `fire` | `F669` (+3.97 s) | a fire glows at the leading wheelset of one car | the fire | `Hopper fire` |
| s3 `one` | `F714` (+4.72 s) | ONE OF ITS CARS over that car | the car | `Pop` |
| s4 `twenty-third` | `F812` (+0.10 s) | CAR count rolls to 23 and locks; amber brackets close on the car | car 23 | `BracketLock`, `rollTo` |
| s4 `covered` | `F898` (+1.53 s) | COVERED HOPPER · GPLX75465 | under the count | `Pop` |
| s5 `fire` | `F986` (+0.12 s) | camera pushes in on the leading wheelset | the wheel | `span` zoom |
| s5 `wheel` | `F1035` (+0.93 s) | WHEELSET; the leading wheel turns amber | wheel | `Pop`, `lightWheel` |
| s5 `bearing` | `F1094` (+1.92 s) | BEARING; brackets lock on the axle end | the bearing | `BracketLock` |
| s5 `leading` | `F1140` (+2.68 s) | LEADING AXLE · L1 | label card | `Pop` |
| s5 `axle` | `F1162` (+3.05 s) | FIRE ON THE L1 BEARING · NTSB P. 104 | label card | `Pop` |

## Detector (s6–s11) · base: the detector in elevation (ILLUSTRATION) and the gauge, then where the alert went

| Spoken trigger | Frame (offset) | On-screen state mutation | Eye target | Implementation |
| :--- | :--- | :--- | :--- | :--- |
| s6 `train` | `F1310` (+1.28 s) | CAR 23 · AXLE 1 over the wheelset | the wheel | `text` |
| s6 `crosses` | `F1333` (+1.67 s) | the wheelset rolls in over the detector | wheel | `tween` wx |
| s6 `detector` | `F1407` (+2.90 s) | detector box and HOT BEARING DETECTOR; gauge card waits with — | box at the rail | `lead` |
| s6 `infrared` | `F1478` (+4.08 s) | two upward infrared cones | cones to the bearing | `lead` |
| s6 `sensor` | `F1514` (+4.68 s) | 2 INFRARED EYES | cones | `text` |
| s6 `beside` | `F1540` (+5.12 s) | cyan brackets lock on the box beside the rail | box | `BracketLock` |
| s7 `reads` | `F1647` (+0.17 s) | cones flash | cones | `flash` |
| s7 `bearing` | `F1680` (+0.72 s) | L1 BEARING; the cup turns amber | bearing | `text` |
| s7 `one` | `F1718` (+1.35 s) | reading starts rolling up | gauge bar and number (one driver) | `Gauge` keys |
| s7 `three` | `F1750` (+1.88 s) | +103°F lands | gauge | `Gauge` keys |
| s7 `Fahrenheit` | `F1795` (+2.63 s) | unit glows | °F | `unitAt` |
| s7 `air` | `F1858` (+3.68 s) | ABOVE AMBIENT lights (Δ57°C) | sub line | `subAt` |
| s8 `line` | `F1952` (+0.13 s) | the stop line draws across the gauge | amber line | `stopLine` |
| s8 `crew` | `F1999` (+0.92 s) | AT THE LINE, THE CREW: | top of the diagram | `lit` |
| s8 `slow` | `F2059` (+1.92 s) | SLOW DOWN | amber | `lit` |
| s8 `stop` | `F2108` (+2.73 s) | STOP | amber | `lit` |
| s8 `one` | `F2164` (+3.67 s) | stop number starts | STOP LINE label | `stopKeys` |
| s8 `hundred` | `F2174` (+3.83 s) | lands 100 | label | `stopKeys` |
| s8 `seventy` | `F2203` (+4.32 s) | lands 170 | label | `stopKeys` |
| s9 `so` | `F2274` (+0.02 s) | elevation out, alert flow in | flow card | `offW`/`lead` |
| s9 `detector` | `F2291` (+0.30 s) | DETECTOR · MP 69.01 lights | top left | `lit` |
| s9 `alert` | `F2352` (+1.32 s) | ALERT chip | chip on the path | `Pop` |
| s10 `not` | `F2414` (+0.03 s) | the path to the train goes grey | dashed path | stroke colour |
| s10 `train` | `F2439` (+0.45 s) | TRAIN CREW · IN THE CAB | left | `onW` |
| s10 `help` | `F2506` (+1.57 s) | path draws to WAYSIDE HELP DESK | right | `lead` line |
| s10 `desk` | `F2524` (+1.87 s) | WAYSIDE HELP DESK lights amber | right box | `lit` |
| s11 `cab` | `F2597` (+0.23 s) | TRAIN CREW turns ink | left box | colour |
| s11 `nothing` | `F2649` (+1.10 s) | NO ALARM lands | left box | `bump` |

## Consist (s12) · base: the train as a bar of 3 locomotives and 149 cars, car 23 amber

| Spoken trigger | Frame (offset) | On-screen state mutation | Eye target | Implementation |
| :--- | :--- | :--- | :--- | :--- |
| s12 `train` | `F2728` (+0.10 s) | three locomotives | bar, left | `onW` |
| s12 `Norfolk` | `F2764` (+0.70 s) | NORFOLK SOUTHERN | title | `lit` |
| s12 `thirty-two` | `F2818` (+1.60 s) | TRAIN 32N lands | title | `bump` |
| s12 `One` | `F2851` (+2.15 s) | car count starts; cars fill the bar as it counts | bar | `rollTo` n |
| s12 `forty-nine` | `F2940` (+3.63 s) | 149 lands | count | `rollTo` |
| s12 `cars` | `F2977` (+4.25 s) | count bumps | count | `bump` |
| s12 `nine` | `F3026` (+5.07 s) | dimension line draws; feet start | under the bar | `lead` |
| s12 `thousand` | `F3044` (+5.37 s) | 9,000 | feet | `rollTo` |
| s12 `nine` | `F3117` (+6.58 s) | 9,309 FT lands | feet | `rollTo` |
| s12 `feet` | `F3136` (+6.90 s) | bump; 2,837 M · NTSB P. 4 | feet | `bump` |

## Loop 1 (s13–s14) · base: the 170 card and the hearing transcript, face down

| Spoken trigger | Frame (offset) | On-screen state mutation | Eye target | Implementation |
| :--- | :--- | :--- | :--- | :--- |
| s13 `why` | `F3216` (+0.00 s) | WHY THE LINE SAT AT | card | `lit` |
| s13 `one` | `F3296` (+1.33 s) | 170°F arrives | card | `onW` |
| s13 `seventy` | `F3331` (+1.92 s) | 170°F bumps | card | `bump` |
| s13 `record` | `F3391` (+2.92 s) | the transcript slides onto the desk, face down | right | `lead` |
| s13 `railroad` | `F3457` (+4.02 s) | IN THE RAILROAD | card | `lit` |
| s13 `own` | `F3526` (+5.17 s) | INDUSTRY'S OWN WORDS | card | `lit` |
| s13 `federal` | `F3600` (+6.40 s) | NTSB INVESTIGATIVE HEARING card | under the paper | `onW` |
| s13 `hearing` | `F3626` (+6.83 s) | card title lights | card | `lit` |
| s14 `later` | `F3733` (+0.70 s) | LATER IN THIS FILM | top right | `Pop` |
| s14 `film` | `F3777` (+1.43 s) | the paper lifts slightly | paper | `flash` tilt |

## East Palestine (s15–s18) · base: the route traced from NTSB fig. 3 and the gauge

| Spoken trigger | Frame (offset) | On-screen state mutation | Eye target | Implementation |
| :--- | :--- | :--- | :--- | :--- |
| s15 `thirty-nine` | `F3846` (+0.03 s) | clock rolls 8:13 → 8:52; the head of the train appears at Salem | clock | `rollTo` mm |
| s15 `minutes` | `F3883` (+0.65 s) | 8:52 P.M. lands, +39 MIN | clock | `bump` |
| s15 `Salem` | `F3921` (+1.28 s) | route finishes drawing; SALEM node | Salem | `RouteLine` nodeOn |
| s15 `crosses` | `F3998` (+2.57 s) | the head runs MP 69.01 → 49.81 | the route | `head` |
| s15 `detector` | `F4050` (+3.43 s) | EAST PALESTINE node, red | east end | `nodeOn` |
| s15 `East` | `F4113` (+4.48 s) | EAST PALESTINE, OHIO · MP 49.81 | under the map | `onW` |
| s15 `Palestine` | `F4128` (+4.73 s) | it lights | label | `lit` |
| s16 `reading` | `F4262` (+0.72 s) | READING AT MP 49.81 | over the gauge | `Pop` |
| s16 `two` | `F4295` (+1.27 s) | gauge rolls up from 103 | gauge | `Gauge` keys |
| s16 `fifty-three` | `F4335` (+1.93 s) | +253°F lands red, above the stop line | gauge | `Gauge` keys |
| s16 `degrees` | `F4373` (+2.57 s) | unit glows | °F | `unitAt` |
| s16 `air` | `F4433` (+3.57 s) | ABOVE AMBIENT lights (Δ141°C) | sub line | `subAt` |
| s17 `highest` | `F4517` (+0.48 s) | MAX READING locks | under the stop line | `maxAt` |
| s17 `detector` | `F4599` (+1.85 s) | THE TOP OF THIS DETECTOR'S RANGE | under the gauge | `Pop` |
| s18 `may` | `F4761` (+1.02 s) | ▲ ACTUAL MAY HAVE BEEN HIGHER | gauge | `higherAt` |
| s18 `higher` | `F4794` (+1.57 s) | NTSB P. 8 N. 15 | under the gauge | `Pop` |

## Cab (s19–s21) · base: the cab card (TRANSCRIPTION · TEXT ONLY; never audio)

| Spoken trigger | Frame (offset) | On-screen state mutation | Eye target | Implementation |
| :--- | :--- | :--- | :--- | :--- |
| s19 `cab` | `F4880` (+0.25 s) | IN THE CAB lights | title | `lit` |
| s19 `speakers` | `F4927` (+1.03 s) | speaker icon; IN-CAB AUDIO, AS THE NTSB TRANSCRIBED IT | title row | `onW` |
| s19 `announce` | `F4954` (+1.48 s) | speaker waves | icon | `lead` |
| s20 `critical` | `F5027` (+-0.02 s) | CRITICAL | line 1 | `onW`, `bump` |
| s20 `alarm` | `F5054` (+0.43 s) | ALARM,; waves pulse | line 1 | `onW` |
| s20 `critical` | `F5097` (+1.15 s) | CRITICAL | line 2 | `onW` |
| s20 `alarm` | `F5124` (+1.60 s) | ALARM, | line 2 | `onW` |
| s20 `critical` | `F5169` (+2.35 s) | CRITICAL | line 3 | `onW` |
| s20 `alarm` | `F5198` (+2.83 s) | ALARM.; then the full alarm text from NTSB p. 8 | line 3 | `onW` |
| s21 `engineer` | `F5272` (+0.12 s) | ENGINEER · speed from the event recorder | bottom row | `onW` |
| s21 `slow` | `F5336` (+1.18 s) | DYNAMIC BRAKE turns amber and steps DB2 → DB5 (recorder 20:53:30–20:54:20, TIME COMPRESSED) | brake readout | ER data index |

## Finding 1 (s22) · base: RIR-24-05 p. 166, findings

| Spoken trigger | Frame (offset) | On-screen state mutation | Eye target | Implementation |
| :--- | :--- | :--- | :--- | :--- |
| s22 `N` | `F5453` (+0.32 s) | N | gloss card | `onW` |
| s22 `T` | `F5474` (+0.67 s) | T | gloss card | `onW` |
| s22 `S` | `F5506` (+1.20 s) | S | gloss card | `onW` |
| s22 `B` | `F5514` (+1.33 s) | B | gloss card | `onW` |
| s22 `America's` | `F5553` (+1.98 s) | U.S. | gloss | `onW` |
| s22 `accident` | `F5590` (+2.60 s) | NATIONAL TRANSPORTATION SAFETY BOARD | gloss | `onW` |
| s22 `investigator` | `F5622` (+3.13 s) | gloss lights | gloss | `lit` |
| s22 `find` | `F5702` (+4.47 s) | the page push lands on finding 1 | page | `pushTo` |
| s22 `handled` | `F5758` (+5.40 s) | highlight line 1 (“the train crew’s”) | page | `ats` |
| s22 `properly` | `F5808` (+6.23 s) | highlight line 2 (“proper train handling and appropriate response to the bearing alarm”) | page | `ats` |
| s22 `responded` | `F5865` (+7.18 s) | CREW: DID NOT CONTRIBUTE | over the page | `Pop` |
| s22 `alarm` | `F5914` (+8.00 s) | highlight line 3 (“derailment”) | page | `ats` |

## Derailment (s23–s25) · base: plan view, train and 1-mile zone on one scale (RECONSTRUCTION)

| Spoken trigger | Frame (offset) | On-screen state mutation | Eye target | Implementation |
| :--- | :--- | :--- | :--- | :--- |
| s23 `minute` | `F6057` (+0.53 s) | < 1 MINUTE | top left | `Pop` |
| s23 `alarm` | `F6103` (+1.30 s) | AFTER THE ALARM (red) | top left | `Pop` |
| s23 `axle` | `F6154` (+2.15 s) | car 23 turns red | the car | colour |
| s23 `came` | `F6179` (+2.57 s) | a red ring snaps at the axle | the car | `flash` |
| s23 `apart` | `F6193` (+2.80 s) | THE AXLE SEPARATES · NTSB P. 106 | top left | `Pop` |
| s24 `thirty-eight` | `F6261` (+0.03 s) | count rolls to 38 and locks | bottom left | `rollTo` step |
| s24 `left` | `F6327` (+1.13 s) | 38 cars fold into the pileup, amber | the pileup | `tween` scatter |
| s24 `track` | `F6348` (+1.48 s) | OFF THE TRACK | under the count | `onW` |
| s24 `wreckage` | `F6402` (+2.38 s) | the pileup starts to glow | pileup | `fire` |
| s24 `fire` | `F6450` (+3.18 s) | fire full | pileup | `fire` |
| s25 `about` | `F6517` (+0.03 s) | residents card | top right | `onW` |
| s25 `two` | `F6535` (+0.33 s) | count starts | card | `rollTo` |
| s25 `thousand` | `F6549` (+0.57 s) | ~2,000 lands | card | `bump` |
| s25 `leave` | `F6633` (+1.97 s) | the 1-mile ring draws; 1-MILE EVACUATION ZONE | ring around the pileup | `strokeDashoffset` |

## Scope (s26–s27)

| Spoken trigger | Frame (offset) | On-screen state mutation | Eye target | Implementation |
| :--- | :--- | :--- | :--- | :--- |
| s26 `film` | `F6743` (+0.23 s) | THIS FILM FOLLOWS | top | `lit` |
| s26 `warning` | `F6798` (+1.15 s) | THE WARNING SYSTEM card | left | `onW` |
| s26 `system` | `F6823` (+1.57 s) | it lights cyan | left | `lit` |
| s26 `decisions` | `F6874` (+2.42 s) | THE DECISIONS card | right | `onW` |
| s26 `followed` | `F6920` (+3.18 s) | THAT FOLLOWED | right | `onW` |
| s27 `health` | `F6987` (+0.12 s) | HEALTH … | bottom card | `onW` |
| s27 `environmental` | `F7014` (+0.57 s) | AND ENVIRONMENTAL | bottom card | `onW` |
| s27 `effects` | `F7058` (+1.30 s) | EFFECTS | bottom card | `onW` |
| s27 `separate` | `F7103` (+2.05 s) | the card slides aside and dims; A SEPARATE STORY | bottom card | `tween` aside |
| s27 `story` | `F7128` (+2.47 s) | bump | bottom card | `bump` |

## Loop 2 (s28–s30) · base: five tank cars (ILLUSTRATION) under an amber band, then the two numbers

| Spoken trigger | Frame (offset) | On-screen state mutation | Eye target | Implementation |
| :--- | :--- | :--- | :--- | :--- |
| s28 `three` | `F7204` (+0.00 s) | +3 DAYS | top | `Pop` |
| s28 `later` | `F7237` (+0.55 s) | date rolls 03 → 06 FEB 2023 | date pill | `DatePill` |
| s28 `second` | `F7290` (+1.43 s) | the amber band draws across | band | `lead` |
| s28 `number` | `F7311` (+1.78 s) | ?°F lands; A SECOND NUMBER lights | band | `bump` |
| s28 `decide` | `F7340` (+2.27 s) | band pulses | band | `flash` |
| s28 `five` | `F7413` (+3.48 s) | five tank outlines, one by one | tanks | `onW` stagger |
| s28 `tank` | `F7436` (+3.87 s) | reporting marks under each (NTSB fig. 7) | tanks | `onW` stagger |
| s28 `vinyl` | `F7484` (+4.67 s) | tanks turn amber; 5 TANK CARS OF VINYL CHLORIDE | under the tanks | colour |
| s29 `find` | `F7671` (+1.32 s) | NOT FOUND IN THE WRITTEN GUIDANCE | band | `onW` |
| s29 `guidance` | `F7732` (+2.33 s) | it lights | band | `lit` |
| s29 `scene` | `F7800` (+3.47 s) | USED AT THE SCENE · NTSB RIR-24-05 P. 28 N. 55 | band | `onW` |
| s30 `two` | `F7864` (+0.00 s) | cut to the two numbers; TWO NUMBERS | title | `lead` |
| s30 `numbers` | `F7877` (+0.22 s) | it lights | title | `lit` |
| s30 `one` | `F7936` (+1.20 s) | 170°F card | left | `onW` |
| s30 `first` | `F7959` (+1.58 s) | 03 FEB 2023 · THE FIRST NIGHT | left card | `onW` |
| s30 `night` | `F7980` (+1.93 s) | lights | left card | `lit` |
| s30 `one` | `F8022` (+2.63 s) | ?°F card | right | `onW` |
| s30 `fourth` | `F8045` (+3.02 s) | 06 FEB 2023 · THE FOURTH DAY | right card | `onW` |
| s30 `day` | `F8066` (+3.37 s) | lights | right card | `lit` |

## Act question (s31) and Act II title

| Spoken trigger | Frame (offset) | On-screen state mutation | Eye target | Implementation |
| :--- | :--- | :--- | :--- | :--- |
| s31 `margin` | `F8176` (+0.78 s) | the 19 miles Salem → East Palestine start lighting amber | the route between the two detectors | `stretch` |
| s31 `error` | `F8212` (+1.38 s) | the amber stretch reaches East Palestine; 19 MILES lands | top right | `stretch`, `bump` |
| s31 `run` | `F8233` (+1.73 s) | East Palestine node turns red; +253°F | east end | `nodeTone` |

