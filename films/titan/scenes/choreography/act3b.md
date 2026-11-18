# Choreography index: Act 3b

Word-level choreography (PLAYBOOK §10.6), **generated from the scene code** (`python3 scripts/choreo_index.py` from the film folder; re-run after
any edit) so it cannot drift from it. One row per word-locked event: the spoken trigger, its measured frame (60 fps) and offset
from the sentence start, the scene component, and what changes (the on-screen text that arrives, or the driving line of
code). Kit: `lib/remotion/Kinetic.tsx` and `remotion/beats.tsx` (`KeyLine` parts land on their words, `ChunkQuote` reveals a
record quote chunk by chunk, `WordLine` builds a title word by word). Kit for this film: `remotion/parts*.tsx`.
Sync audit: `review/sync_audit.md`.

**121** · Every dive has its own shape, its own pace, its own stops.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Every` | `F40558` (+0.02 s) | RePlot | text: EVERY DIVE: ITS OWN SHAPE, |
| `shape` | `F40640` (+1.38 s) | RePlot | text: EVERY DIVE: ITS OWN SHAPE, |
| `pace` | `F40695` (+2.30 s) | RePlot | text: ITS OWN PACE, |
| `stops` | `F40759` (+3.37 s) | RePlot | text: ITS OWN STOPS |

**122** · Laid side by side, the dives are hard to compare.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Laid` | `F40816` (+0.03 s) | RePlot | text: SIDE BY SIDE: |
| `side` | `F40833` (+0.32 s) | RePlot | text: SIDE BY SIDE: |
| `dives` | `F40905` (+1.52 s) | RePlot | text: THE DIVES: / HARD TO COMPARE |
| `hard` | `F40931` (+1.95 s) | RePlot | text: THE DIVES: / HARD TO COMPARE |
| `compare` | `F40954` (+2.33 s) | RePlot | text: THE DIVES: / HARD TO COMPARE |

**123** · The N - T - S - B said a more appropriate way was to plot strain against depth directly, because depth sets the pressure.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `N` | `F41037` (+0.25 s) | RePlot | <div style={{position: 'absolute', top: 0, opacity: vis(f, wf(123, 'n'), wf(125, |
| `more` | `F41099` (+1.28 s) | RePlot | text: A MORE APPROPRIATE WAY: |
| `appropriate` | `F41111` (+1.48 s) | RePlot | text: A MORE APPROPRIATE WAY: |
| `plot` | `F41187` (+2.75 s) | RePlot | text: STRAIN |
| `strain` | `F41209` (+3.12 s) | RePlot | text: STRAIN |
| `against` | `F41237` (+3.58 s) | RePlot | text: AGAINST DEPTH |
| `depth` | `F41262` (+4.00 s) | RePlot | text: AGAINST DEPTH |
| `because` | `F41339` (+5.28 s) | RePlot | text: BECAUSE |
| `depth` | `F41360` (+5.63 s) | RePlot | text: DEPTH |
| `sets` | `F41387` (+6.08 s) | RePlot | text: SETS THE PRESSURE |
| `pressure` | `F41412` (+6.50 s) | RePlot | text: SETS THE PRESSURE |

**124** · So here is the same data, against depth.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `same` | `F41523` (+0.87 s) | RePlot | text: THE SAME DATA |
| `data` | `F41541` (+1.17 s) | RePlot | text: THE SAME DATA |
| `against` | `F41579` (+1.80 s) | RePlot | <Wd f={f} at={wf(124, 'against')} lightAt={wf(124, 'depth')} tone={colors.cyan}  |
| `depth` | `F41603` (+2.20 s) | (scene list) | sound effect cue |

**125** · Dive seventy-five, a straight line.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Dive` | `F41738` (+0.00 s) | RePlot | lead · <div style={{position: 'absolute', top: 0, opacity: lead(f, wf(125, 'd |
| `seventy-five` | `F41756` (+0.30 s) | RePlot | const named = [wf(125, 'seventy-five'), wf(126, 'eighty'), wf(127, 'eighty-one') |
| `straight` | `F41831` (+1.55 s) | RePlot | {i === 0 ? (f >= wf(125, 'straight') ? 'STRAIGHT' : '') : i === 1 ? (f >= wf(126 |

**126** · Dive eighty, the same straight line, until the event at its very end.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `eighty` | `F41920` (+0.38 s) | RePlot | const named = [wf(125, 'seventy-five'), wf(126, 'eighty'), wf(127, 'eighty-one') |
| `straight` | `F41990` (+1.55 s) | RePlot | {i === 0 ? (f >= wf(125, 'straight') ? 'STRAIGHT' : '') : i === 1 ? (f >= wf(126 |
| `event` | `F42072` (+2.92 s) | RePlot | lead · const event = lead(f, wf(126, 'event'), 8) * (1 - z); |
| `end` | `F42138` (+4.02 s) | RePlot | {i === 0 ? (f >= wf(125, 'straight') ? 'STRAIGHT' : '') : i === 1 ? (f >= wf(126 |

**127** · Dive eighty-one.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `eighty-one` | `F42193` (+0.35 s) | (scene list) | sound effect cue |

**128** · Dive eighty-two.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `eighty-two` | `F42272` (+0.32 s) | (scene list) | sound effect cue |

**129** · Dive eighty-three.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `eighty-three` | `F42351` (+0.32 s) | (scene list) | sound effect cue |

**130** · In the first five hundred metres, every one of them bends away.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `first` | `F42434` (+0.27 s) | RePlot | text: THE FIRST 500 M: |
| `five` | `F42458` (+0.67 s) | RePlot | lead · const band = lead(f, wf(130, 'five'), 14) * (1 - lead(f, wf(131, 'fitt |
| `hundred` | `F42475` (+0.95 s) | RePlot | text: THE FIRST 500 M: |
| `every` | `F42535` (+1.95 s) | RePlot | text: EVERY ONE OF THEM |
| `one` | `F42560` (+2.37 s) | RePlot | text: EVERY ONE OF THEM |
| `bends` | `F42589` (+2.85 s) | RePlot | text: BENDS AWAY |
| `away` | `F42610` (+3.20 s) | RePlot | text: BENDS AWAY |

**131** · To put a number on it, the N - T - S - B fitted a line to the shallowest stretch, from fifteen to a hundred and fifty metres: metres of depth for each millivolt from the gauge.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `number` | `F42685` (+0.40 s) | RePlot | lead · <div style={{...T(26, {color: colors.ink, letterSpacing: 2}), opacity: |
| `N` | `F42751` (+1.50 s) | RePlot | text: THE NTSB: / A LINE FITTED |
| `fitted` | `F42799` (+2.30 s) | RePlot | text: THE NTSB: / A LINE FITTED |
| `line` | `F42826` (+2.75 s) | RePlot | text: THE NTSB: / A LINE FITTED |
| `shallowest` | `F42860` (+3.32 s) | RePlot | text: TO THE SHALLOWEST STRETCH: |
| `stretch` | `F42893` (+3.87 s) | RePlot | text: TO THE SHALLOWEST STRETCH: |
| `fifteen` | `F42947` (+4.77 s) | RePlot | text: 15– / 50 M |
| `hundred` | `F42994` (+5.55 s) | RePlot | text: 15– / 50 M |
| `fifty` | `F43020` (+5.98 s) | RePlot | text: 15– / 50 M |
| `metres` | `F43088` (+7.12 s) | RePlot | <Wd f={f} at={wf(131, 'metres', 1)} lightAt={wf(131, 'depth')}> · METRES OF DEPT |
| `depth` | `F43118` (+7.62 s) | RePlot | <Wd f={f} at={wf(131, 'metres', 1)} lightAt={wf(131, 'depth')}> · METRES OF DEPT |
| `each` | `F43152` (+8.18 s) | RePlot | text: PER mV FROM THE GAUGE |
| `millivolt` | `F43168` (+8.45 s) | RePlot | text: M PER mV |
| `gauge` | `F43219` (+9.30 s) | RePlot | text: PER mV FROM THE GAUGE |

**132** · Before the event: five point zero zero, and four point seven four.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Before` | `F43269` (+0.00 s) | RePlot | lead · <div style={{position: 'absolute', left: 290, top: 140, width: 960, .. |
| `five` | `F43340` (+1.18 s) | RePlot | text: 75 / 5 |
| `point` | `F43359` (+1.50 s) | RePlot | text: 75 / 5 |
| `zero` | `F43377` (+1.80 s) | RePlot | text: 75 / 5 |
| `zero` | `F43399` (+2.17 s) | RePlot | text: 75 / 5 |
| `four` | `F43449` (+3.00 s) | RePlot | text: 80 / 4 |
| `point` | `F43465` (+3.27 s) | RePlot | text: 80 / 4 |
| `seven` | `F43481` (+3.53 s) | RePlot | text: 80 / 4 |
| `four` | `F43503` (+3.90 s) | RePlot | text: 80 / 4 |

**133** · After it: eight point seven six, eight point zero nine, eight point seven seven.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `After` | `F43550` (+0.07 s) | RePlot | text: AFTER IT |
| `eight` | `F43599` (+0.88 s) | RePlot | text: 81 / 8 |
| `point` | `F43611` (+1.08 s) | RePlot | text: 81 / 8 |
| `seven` | `F43628` (+1.37 s) | RePlot | text: 81 / 8 |
| `six` | `F43650` (+1.73 s) | (scene list) | sound effect cue |
| `eight` | `F43692` (+2.43 s) | RePlot | text: 82 / 8 |
| `point` | `F43703` (+2.62 s) | RePlot | text: 82 / 8 |
| `zero` | `F43720` (+2.90 s) | RePlot | text: 82 / 8 |
| `nine` | `F43742` (+3.27 s) | RePlot | text: 82 / 8 |
| `eight` | `F43782` (+3.93 s) | RePlot | text: 83 / 8 |
| `point` | `F43793` (+4.12 s) | RePlot | text: 83 / 8 |
| `seven` | `F43813` (+4.45 s) | RePlot | text: 83 / 8 |
| `seven` | `F43834` (+4.80 s) | RePlot | text: 83 / 8 |

**134** · Same gauge, same hull, same sea.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Same` | `F43888` (+0.10 s) | RePlot | lead · <div style={{marginTop: 22, ...T(30, {}), lineHeight: 1.4, opacity: le |
| `gauge` | `F43906` (+0.40 s) | RePlot | text: SAME GAUGE · |
| `hull` | `F43967` (+1.42 s) | RePlot | text: SAME HULL · |
| `sea` | `F44028` (+2.43 s) | RePlot | text: SAME SEA |

**135** · A response that had changed by about three quarters.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `response` | `F44120` (+0.10 s) | RePlot | text: RESPONSE CHANGED |
| `changed` | `F44173` (+0.98 s) | RePlot | text: RESPONSE CHANGED |
| `three` | `F44230` (+1.93 s) | RePlot | bump · <span style={{...T(64, {color: f >= wf(135, 'quarters') + LAND ? color |
| `quarters` | `F44249` (+2.25 s) | (scene list) | sound effect cue |

**136** · Could OceanGate have seen this at the time?

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Could` | `F44312` (+0.00 s) | Hindsight | text: COULD OCEANGATE HAVE SEEN THIS? · |
| `seen` | `F44371` (+0.98 s) | Hindsight | text: COULD OCEANGATE HAVE SEEN THIS? · |

**137** · The Coast Guard board found that OceanGate had all the data it needed to show the hull's behaviour had changed, and that analysing strain against elapsed time failed to reveal it.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Coast` | `F44485` (+0.12 s) | Hindsight | text: THE COAST GUARD BOARD: |
| `board` | `F44520` (+0.70 s) | Hindsight | text: THE COAST GUARD BOARD: |
| `found` | `F44542` (+1.07 s) | Hindsight | hl= · <RecordPage set="roi" start={sf(136) - 14} end={ef(137) + 24} hl={[{ke |
| `all` | `F44622` (+2.40 s) | Hindsight | text: ALL THE DATA / TO SHOW |
| `data` | `F44641` (+2.72 s) | Hindsight | text: ALL THE DATA / TO SHOW |
| `needed` | `F44670` (+3.20 s) | Hindsight | text: ALL THE DATA / TO SHOW |
| `show` | `F44705` (+3.78 s) | Hindsight | text: ALL THE DATA / TO SHOW |
| `hull's` | `F44728` (+4.17 s) | Hindsight | text: ALL THE DATA / TO SHOW |
| `changed` | `F44787` (+5.15 s) | Hindsight | text: ALL THE DATA / TO SHOW |
| `analysing` | `F44851` (+6.22 s) | Hindsight | text: ALL THE DATA / TO SHOW |
| `strain` | `F44889` (+6.85 s) | Hindsight | text: ALL THE DATA / TO SHOW |
| `elapsed` | `F44936` (+7.63 s) | (scene list) | sound effect cue |
| `time` | `F44961` (+8.05 s) | Hindsight | text: ELAPSED TIME |
| `failed` | `F44994` (+8.60 s) | Hindsight | text: FAILED TO REVEAL IT |
| `reveal` | `F45021` (+9.05 s) | Hindsight | text: FAILED TO REVEAL IT |

**138** · The timing that follows is our own reading of the record, not a finding of any report.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `timing` | `F45090` (+0.13 s) | Hindsight | text: THE TIMING THAT FOLLOWS: |
| `our` | `F45158` (+1.27 s) | (scene list) | sound effect cue |
| `reading` | `F45189` (+1.78 s) | Hindsight | text: OUR OWN READING |
| `not` | `F45261` (+2.98 s) | Hindsight | text: NOT A FINDING |
| `finding` | `F45277` (+3.25 s) | Hindsight | text: NOT A FINDING |
| `any` | `F45314` (+3.87 s) | Hindsight | text: OF ANY REPORT |
| `report` | `F45328` (+4.10 s) | Hindsight | text: OF ANY REPORT |

**139** · Brooks was right that there was no new jump.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Brooks` | `F45385` (+-0.03 s) | Hindsight | text: BROOKS WAS RIGHT: |
| `right` | `F45416` (+0.48 s) | Hindsight | text: BROOKS WAS RIGHT: |
| `no` | `F45464` (+1.28 s) | Hindsight | text: NO NEW JUMP |
| `jump` | `F45501` (+1.90 s) | Hindsight | text: NO NEW JUMP |

**140** · What changed was the slope, and against time a change in slope is hard to see.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `changed` | `F45555` (+0.20 s) | Hindsight | text: WHAT CHANGED WAS THE SLOPE · |
| `slope` | `F45613` (+1.17 s) | Hindsight | text: WHAT CHANGED WAS THE SLOPE · |
| `against` | `F45663` (+2.00 s) | Hindsight | text: AGAINST TIME, |
| `time` | `F45686` (+2.38 s) | Hindsight | text: AGAINST TIME, |
| `change` | `F45731` (+3.13 s) | Hindsight | text: A SLOPE CHANGE IS / HARD TO SEE |
| `slope` | `F45766` (+3.72 s) | Hindsight | text: A SLOPE CHANGE IS / HARD TO SEE |
| `hard` | `F45800` (+4.28 s) | Hindsight | text: A SLOPE CHANGE IS / HARD TO SEE |
| `see` | `F45829` (+4.77 s) | Hindsight | text: A SLOPE CHANGE IS / HARD TO SEE |

**141** · Dive eighty itself shows nothing until its last minutes.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Dive` | `F45874` (+0.00 s) | Hindsight | text: DIVE 80 ITSELF: |
| `eighty` | `F45897` (+0.38 s) | Hindsight | {d: '15 JUL', dive: '80', at: wf(141, 'eighty'), tone: '#7dd3fc', note: 'BANG ·  |
| `itself` | `F45915` (+0.68 s) | Hindsight | text: DIVE 80 ITSELF: |
| `nothing` | `F45973` (+1.65 s) | Hindsight | text: NOTHING UNTIL |
| `until` | `F45997` (+2.05 s) | Hindsight | text: NOTHING UNTIL |
| `last` | `F46023` (+2.48 s) | Hindsight | text: ITS LAST MINUTES · |
| `minutes` | `F46045` (+2.85 s) | Hindsight | text: ITS LAST MINUTES · |

**142** · In the N - T - S - B's plots, the bend first appears in dive eighty-one.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `N` | `F46118` (+0.48 s) | Hindsight | text: NTSB PLOTS: / BEND FIRST |
| `plots` | `F46176` (+1.45 s) | Hindsight | text: NTSB PLOTS: / BEND FIRST |
| `bend` | `F46237` (+2.47 s) | Hindsight | text: NTSB PLOTS: / BEND FIRST |
| `first` | `F46259` (+2.83 s) | Hindsight | text: NTSB PLOTS: / BEND FIRST |
| `appears` | `F46282` (+3.22 s) | Hindsight | text: NTSB PLOTS: / BEND FIRST |
| `eighty-one` | `F46347` (+4.30 s) | (scene list) | sound effect cue |

**143** · That data was on the company's computer after that dive.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `data` | `F46426` (+0.27 s) | Hindsight | text: THAT DATA: ON THE COMPANY'S COMPUTER |
| `computer` | `F46493` (+1.38 s) | Hindsight | text: THAT DATA: ON THE COMPANY'S COMPUTER |
| `after` | `F46537` (+2.12 s) | Hindsight | text: AFTER DIVE 81 |
| `dive` | `F46571` (+2.68 s) | Hindsight | text: AFTER DIVE 81 |

**144** · Plotted against depth, it would have shown the bend before dive eighty-two, three days later, and before dive eighty-three.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Plotted` | `F46616` (+0.00 s) | Hindsight | text: PLOTTED AGAINST DEPTH: |
| `depth` | `F46660` (+0.73 s) | Hindsight | text: PLOTTED AGAINST DEPTH: |
| `shown` | `F46718` (+1.70 s) | Hindsight | text: THE BEND, |
| `bend` | `F46741` (+2.08 s) | Hindsight | text: THE BEND, |
| `before` | `F46760` (+2.40 s) | Hindsight | text: BEFORE DIVE 82, |
| `eighty-two` | `F46811` (+3.25 s) | (scene list) | sound effect cue |
| `three` | `F46861` (+4.08 s) | Hindsight | text: 3 DAYS LATER, |
| `days` | `F46877` (+4.35 s) | Hindsight | text: 3 DAYS LATER, |
| `later` | `F46895` (+4.65 s) | Hindsight | {d: '22 JUL', dive: '82', at: wf(144, 'eighty-two'), tone: '#fb923c', note: 'DIV |
| `before` | `F46949` (+5.55 s) | Hindsight | text: AND BEFORE 83 |
| `eighty-three` | `F46991` (+6.25 s) | Hindsight | text: AND BEFORE 83 |

**145** · And it was not a faulty gauge.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `not` | `F47081` (+0.47 s) | Gauges | text: NOT A FAULTY |
| `faulty` | `F47102` (+0.82 s) | Gauges | text: NOT A FAULTY |
| `gauge` | `F47130` (+1.28 s) | Gauges | text: GAUGE |

**146** · Deeper down, the curves still match, which the N - T - S - B said shows the gauges had not changed.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Deeper` | `F47193` (+0.00 s) | Gauges | text: DEEPER DOWN: |
| `down` | `F47213` (+0.33 s) | Gauges | text: DEEPER DOWN: |
| `curves` | `F47253` (+1.00 s) | Gauges | text: THE CURVES STILL MATCH |
| `match` | `F47303` (+1.83 s) | Gauges | text: THE CURVES STILL MATCH |
| `which` | `F47356` (+2.72 s) | Gauges | <Note o={vis(f, wf(146, 'which') - 4, ef(147) + 14)} tone={colors.red}> |
| `N` | `F47385` (+3.20 s) | Gauges | text: NTSB: |
| `said` | `F47432` (+3.98 s) | Gauges | text: NTSB: |
| `gauges` | `F47484` (+4.85 s) | (scene list) | sound effect cue |
| `changed` | `F47540` (+5.78 s) | Gauges | text: THE GAUGES HAD NOT CHANGED · |

**147** · The hull had.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `hull` | `F47611` (+0.17 s) | Gauges | text: THE HULL HAD |
| `had` | `F47639` (+0.63 s) | (scene list) | sound effect cue |

**148** · Canada's investigators later plotted the strain against depth their own way, measuring each dive against itself.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Canada's` | `F47699` (+0.00 s) | Gauges | text: CANADA'S INVESTIGATORS, |
| `investigators` | `F47728` (+0.48 s) | Gauges | text: CANADA'S INVESTIGATORS, |
| `later` | `F47788` (+1.48 s) | Gauges | text: LATER: |
| `plotted` | `F47809` (+1.83 s) | Gauges | text: STRAIN / AGAINST DEPTH, |
| `strain` | `F47843` (+2.40 s) | Gauges | text: STRAIN / AGAINST DEPTH, |
| `against` | `F47869` (+2.83 s) | Gauges | text: STRAIN / AGAINST DEPTH, |
| `depth` | `F47896` (+3.28 s) | Gauges | text: STRAIN / AGAINST DEPTH, |
| `own` | `F47935` (+3.93 s) | Gauges | text: THEIR OWN WAY |
| `way` | `F47951` (+4.20 s) | Gauges | text: THEIR OWN WAY |
| `measuring` | `F47993` (+4.90 s) | Gauges | text: EACH DIVE / MEASURED AGAINST ITSELF |
| `dive` | `F48043` (+5.73 s) | Gauges | text: EACH DIVE / MEASURED AGAINST ITSELF |
| `against` | `F48066` (+6.12 s) | Gauges | text: EACH DIVE / MEASURED AGAINST ITSELF |
| `itself` | `F48090` (+6.52 s) | Gauges | text: EACH DIVE / MEASURED AGAINST ITSELF |

**149** · On the nineteenth of July, for one gauge at the top of the hull, the slope from ten to three hundred metres was nearly double its slope for the whole dive.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `nineteenth` | `F48175` (+0.22 s) | Gauges | DatePill · <DatePill f={f} fps={fps} day={19} month={7} year={2022} dayWord={wf(1 |
| `July` | `F48213` (+0.85 s) | Gauges | DatePill · <DatePill f={f} fps={fps} day={19} month={7} year={2022} dayWord={wf(1 |
| `one` | `F48272` (+1.83 s) | Gauges | text: ONE GAUGE · / TOP OF THE HULL · |
| `gauge` | `F48285` (+2.05 s) | Gauges | text: ONE GAUGE · / TOP OF THE HULL · |
| `top` | `F48319` (+2.62 s) | Gauges | text: ONE GAUGE · / TOP OF THE HULL · |
| `hull` | `F48349` (+3.12 s) | Gauges | text: ONE GAUGE · / TOP OF THE HULL · |
| `slope` | `F48400` (+3.97 s) | Gauges | text: SLOPE |
| `ten` | `F48438` (+4.60 s) | Gauges | text: SLOPE |
| `three` | `F48472` (+5.17 s) | Gauges | text: SLOPE |
| `metres` | `F48514` (+5.87 s) | Gauges | text: SLOPE |
| `nearly` | `F48567` (+6.75 s) | Gauges | bump · <span style={{...T(80, {color: f >= wf(149, 'double') + LAND ? colors. |
| `double` | `F48594` (+7.20 s) | (scene list) | sound effect cue |
| `its` | `F48617` (+7.58 s) | Gauges | text: NEARLY DOUBLE / ITS SLOPE FOR THE WHOLE DIVE |
| `dive` | `F48689` (+8.78 s) | Gauges | text: NEARLY DOUBLE / ITS SLOPE FOR THE WHOLE DIVE |

**150** · They also found a smaller bend a year earlier, in August twenty twenty-one, and could not determine whether the bang caused the change.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `smaller` | `F48804` (+0.97 s) | Gauges | text: A SMALLER BEND · |
| `bend` | `F48830` (+1.40 s) | Gauges | text: A SMALLER BEND · |
| `year` | `F48856` (+1.83 s) | Gauges | text: A YEAR EARLIER |
| `earlier` | `F48875` (+2.15 s) | Gauges | text: A YEAR EARLIER |
| `August` | `F48928` (+3.03 s) | Gauges | text: 05 AUG 2021 |
| `twenty-one` | `F48970` (+3.73 s) | Gauges | text: 05 AUG 2021 |
| `could` | `F49036` (+4.83 s) | Gauges | text: COULD NOT DETERMINE |
| `determine` | `F49060` (+5.23 s) | Gauges | text: COULD NOT DETERMINE |
| `whether` | `F49093` (+5.78 s) | Gauges | text: WHETHER THE BANG |
| `bang` | `F49120` (+6.23 s) | Gauges | text: WHETHER THE BANG |
| `caused` | `F49148` (+6.70 s) | Gauges | text: CAUSED THE CHANGE |
| `change` | `F49177` (+7.18 s) | Gauges | text: CAUSED THE CHANGE |

**151** · Why would a damaged hull bend only near the surface?

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Why` | `F49240` (+0.02 s) | Mechanism | text: Why would a |
| `damaged` | `F49274` (+0.58 s) | Mechanism | <Wd f={f} at={wf(151, 'damaged')} lightAt={wf(151, 'hull')} tone={colors.red}>da |
| `hull` | `F49305` (+1.10 s) | Mechanism | <Wd f={f} at={wf(151, 'damaged')} lightAt={wf(151, 'hull')} tone={colors.red}>da |
| `bend` | `F49334` (+1.58 s) | Mechanism | <Wd f={f} at={wf(151, 'bend')} tone={colors.amber}>bend </Wd> |
| `only` | `F49359` (+2.00 s) | Mechanism | <Wd f={f} at={wf(151, 'only')} lightAt={wf(151, 'surface')} base={colors.ink}>on |
| `surface` | `F49404` (+2.75 s) | Mechanism | <Wd f={f} at={wf(151, 'only')} lightAt={wf(151, 'surface')} base={colors.ink}>on |

**152** · The N - T - S - B found long voids in the bond between the first and second layers, and between the third and fourth.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `found` | `F49537` (+1.02 s) | Mechanism | text: NTSB: |
| `long` | `F49560` (+1.40 s) | Mechanism | text: LONG VOIDS IN THE BOND · |
| `voids` | `F49582` (+1.77 s) | (scene list) | sound effect cue |
| `bond` | `F49623` (+2.45 s) | Mechanism | hl= · <RecordPage set="mir" start={sf(152) - 14} end={ef(152) + 20} hl={[{ke |
| `first` | `F49677` (+3.35 s) | Mechanism | text: LAYERS 1–2 |
| `second` | `F49711` (+3.92 s) | Mechanism | text: LAYERS 1–2 |
| `layers` | `F49735` (+4.32 s) | Mechanism | text: LAYERS 1–2 |
| `third` | `F49813` (+5.62 s) | Mechanism | text: LAYERS 3–4 |
| `fourth` | `F49841` (+6.08 s) | Mechanism | text: LAYERS 3–4 |

**153** · Where a layer separates at the end of the cylinder, it can move on its own under light pressure.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Where` | `F49895` (+0.00 s) | Mechanism | text: WHERE A LAYER SEPARATES |
| `layer` | `F49915` (+0.33 s) | Mechanism | lead · <g key={j} opacity={lead(f, wf(153, 'layer'), 10)}> |
| `separates` | `F49937` (+0.70 s) | (scene list) | sound effect cue |
| `end` | `F49985` (+1.50 s) | Mechanism | text: AT THE CYLINDER'S END, |
| `cylinder` | `F50009` (+1.90 s) | Mechanism | text: AT THE CYLINDER'S END, |
| `move` | `F50075` (+3.00 s) | Mechanism | text: IT CAN MOVE ON ITS OWN |
| `own` | `F50113` (+3.63 s) | Mechanism | text: IT CAN MOVE ON ITS OWN |
| `light` | `F50145` (+4.17 s) | Mechanism | text: UNDER LIGHT PRESSURE |
| `pressure` | `F50163` (+4.47 s) | Mechanism | text: UNDER LIGHT PRESSURE |

**154** · Deeper down, it found, the layers respond like the intact hull.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Deeper` | `F50220` (+0.00 s) | Mechanism | text: DEEPER DOWN: |
| `down` | `F50242` (+0.37 s) | Mechanism | text: DEEPER DOWN: |
| `found` | `F50286` (+1.10 s) | Mechanism | text: THE LAYERS / RESPOND LIKE THE INTACT HULL |
| `layers` | `F50334` (+1.90 s) | Mechanism | text: THE LAYERS / RESPOND LIKE THE INTACT HULL |
| `respond` | `F50356` (+2.27 s) | Mechanism | text: THE LAYERS / RESPOND LIKE THE INTACT HULL |
| `intact` | `F50421` (+3.35 s) | Mechanism | text: THE LAYERS / RESPOND LIKE THE INTACT HULL |

**155** · Titan made three more dives that July.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Titan` | `F50503` (+0.00 s) | Mechanism | lead · <div style={{position: 'absolute', left: L, top: 690, width: 1320, ... |
| `three` | `F50549` (+0.77 s) | Mechanism | text: 3 MORE DIVES · / JULY 2022 |
| `dives` | `F50584` (+1.35 s) | Mechanism | text: 3 MORE DIVES · / JULY 2022 |
| `July` | `F50620` (+1.95 s) | Mechanism | text: 3 MORE DIVES · / JULY 2022 |

**156** · Two of them, eighty-one and eighty-two, still reached the Titanic, which the N - T - S - B said showed the first damage was not enough to make it implode.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Two` | `F50671` (+0.00 s) | Mechanism | text: TWO: / 81 |
| `eighty-one` | `F50721` (+0.83 s) | Mechanism | text: TWO: / 81 |
| `eighty-two` | `F50765` (+1.57 s) | Mechanism | <Wd f={f} at={wf(156, 'eighty-two')} tone={colors.amber}>· 82 </Wd> |
| `reached` | `F50842` (+2.85 s) | Mechanism | text: REACHED THE TITANIC |
| `Titanic` | `F50867` (+3.27 s) | Mechanism | text: REACHED THE TITANIC |
| `which` | `F50921` (+4.17 s) | Mechanism | text: NTSB: / FIRST DAMAGE |
| `said` | `F50991` (+5.33 s) | Mechanism | text: NTSB: / FIRST DAMAGE |
| `first` | `F51038` (+6.12 s) | Mechanism | text: NTSB: / FIRST DAMAGE |
| `damage` | `F51058` (+6.45 s) | Mechanism | text: NTSB: / FIRST DAMAGE |
| `not` | `F51097` (+7.10 s) | Mechanism | text: NOT ENOUGH TO IMPLODE |
| `implode` | `F51159` (+8.13 s) | Mechanism | text: NOT ENOUGH TO IMPLODE |

**157** · A delamination is not a crack through the wall.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `not` | `F51297` (+1.28 s) | Mechanism | text: NOT A CRACK THROUGH THE WALL |
| `wall` | `F51367` (+2.45 s) | Mechanism | text: NOT A CRACK THROUGH THE WALL |

**158** · But the wall was no longer what it had been.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `no` | `F51478` (+0.98 s) | Mechanism | text: NO LONGER WHAT IT HAD BEEN |
| `been` | `F51549` (+2.17 s) | Mechanism | text: NO LONGER WHAT IT HAD BEEN |

**159** · The N - T - S - B's finding: because its analysis was flawed, OceanGate was unable to identify that the Titan was damaged after dive eighty, and that it needed to be immediately removed from service.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `finding` | `F51662` (+1.07 s) | Mechanism | text: NTSB: / ANALYSIS |
| `because` | `F51721` (+2.05 s) | Mechanism | text: NTSB: / ANALYSIS |
| `analysis` | `F51753` (+2.58 s) | Mechanism | text: NTSB: / ANALYSIS |
| `flawed` | `F51802` (+3.40 s) | Mechanism | text: NTSB: / ANALYSIS |
| `OceanGate` | `F51850` (+4.20 s) | Mechanism | text: NTSB: / ANALYSIS |
| `unable` | `F51897` (+4.98 s) | Mechanism | text: UNABLE TO IDENTIFY |
| `identify` | `F51936` (+5.63 s) | Mechanism | text: UNABLE TO IDENTIFY |
| `Titan` | `F51993` (+6.58 s) | Mechanism | text: DAMAGE / AFTER DIVE 80 · |
| `damaged` | `F52028` (+7.17 s) | Mechanism | text: DAMAGE / AFTER DIVE 80 · |
| `after` | `F52064` (+7.77 s) | Mechanism | text: DAMAGE / AFTER DIVE 80 · |
| `eighty` | `F52114` (+8.60 s) | Mechanism | text: DAMAGE / AFTER DIVE 80 · |
| `needed` | `F52174` (+9.60 s) | Mechanism | text: REMOVE / FROM SERVICE, IMMEDIATELY |
| `immediately` | `F52211` (+10.22 s) | (scene list) | sound effect cue |
| `service` | `F52297` (+11.65 s) | Mechanism | text: REMOVE / FROM SERVICE, IMMEDIATELY |

