# Choreography index: Act 3b

Word-level choreography (PLAYBOOK §10.6), **generated from the scene code** (`python3 scripts/choreo_index.py` from the film folder; re-run after
any edit) so it cannot drift from it. One row per word-locked event: the spoken trigger, its measured frame (60 fps) and offset
from the sentence start, the scene component, and what changes (the on-screen text that arrives, or the driving line of
code). Kit: `lib/remotion/Kinetic.tsx` and `remotion/beats.tsx` (`KeyLine` parts land on their words, `ChunkQuote` reveals a
record quote chunk by chunk, `WordLine` builds a title word by word). Kit for this film: `remotion/parts*.tsx`.
Sync audit: `review/sync_audit.md`.

**120** · Every dive has its own shape, its own pace, its own stops.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Every` | `F39695` (+0.02 s) | RePlot | text: EVERY DIVE: ITS OWN SHAPE, |
| `shape` | `F39777` (+1.38 s) | RePlot | text: EVERY DIVE: ITS OWN SHAPE, |
| `pace` | `F39832` (+2.30 s) | RePlot | text: ITS OWN PACE, |
| `stops` | `F39896` (+3.37 s) | RePlot | text: ITS OWN STOPS |

**121** · Laid side by side, the dives are hard to compare.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Laid` | `F39953` (+0.03 s) | RePlot | text: SIDE BY SIDE: |
| `side` | `F39970` (+0.32 s) | RePlot | text: SIDE BY SIDE: |
| `dives` | `F40042` (+1.52 s) | RePlot | text: THE DIVES: / HARD TO COMPARE |
| `hard` | `F40068` (+1.95 s) | RePlot | text: THE DIVES: / HARD TO COMPARE |
| `compare` | `F40090` (+2.32 s) | RePlot | text: THE DIVES: / HARD TO COMPARE |

**122** · The N - T - S - B said a more appropriate way was to plot strain against depth directly, because depth sets the pressure.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `N` | `F40174` (+0.25 s) | RePlot | <div style={{position: 'absolute', top: 0, opacity: vis(f, wf(122, 'n'), wf(124, |
| `more` | `F40236` (+1.28 s) | RePlot | text: A MORE APPROPRIATE WAY: |
| `appropriate` | `F40248` (+1.48 s) | RePlot | text: A MORE APPROPRIATE WAY: |
| `plot` | `F40324` (+2.75 s) | RePlot | text: STRAIN |
| `strain` | `F40346` (+3.12 s) | RePlot | text: STRAIN |
| `against` | `F40373` (+3.57 s) | RePlot | text: AGAINST DEPTH |
| `depth` | `F40399` (+4.00 s) | RePlot | text: AGAINST DEPTH |
| `because` | `F40476` (+5.28 s) | RePlot | text: BECAUSE |
| `depth` | `F40497` (+5.63 s) | RePlot | text: DEPTH |
| `sets` | `F40524` (+6.08 s) | RePlot | text: SETS THE PRESSURE |
| `pressure` | `F40549` (+6.50 s) | RePlot | text: SETS THE PRESSURE |

**123** · So here is the same data, against depth.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `same` | `F40660` (+0.87 s) | RePlot | text: THE SAME DATA |
| `data` | `F40678` (+1.17 s) | RePlot | text: THE SAME DATA |
| `against` | `F40715` (+1.78 s) | RePlot | <Wd f={f} at={wf(123, 'against')} lightAt={wf(123, 'depth')} tone={colors.cyan}  |
| `depth` | `F40740` (+2.20 s) | (scene list) | sound effect cue |

**124** · Dive seventy-five, a straight line.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Dive` | `F40875` (+0.00 s) | RePlot | lead · <div style={{position: 'absolute', top: 0, opacity: lead(f, wf(124, 'd |
| `seventy-five` | `F40893` (+0.30 s) | RePlot | const named = [wf(124, 'seventy-five'), wf(125, 'eighty'), wf(126, 'eighty-one') |
| `straight` | `F40968` (+1.55 s) | RePlot | {i === 0 ? (f >= wf(124, 'straight') ? 'STRAIGHT' : '') : i === 1 ? (f >= wf(125 |

**125** · Dive eighty, the same straight line, until the event at its very end.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `eighty` | `F41057` (+0.38 s) | RePlot | const named = [wf(124, 'seventy-five'), wf(125, 'eighty'), wf(126, 'eighty-one') |
| `straight` | `F41127` (+1.55 s) | RePlot | {i === 0 ? (f >= wf(124, 'straight') ? 'STRAIGHT' : '') : i === 1 ? (f >= wf(125 |
| `event` | `F41209` (+2.92 s) | RePlot | lead · const event = lead(f, wf(125, 'event'), 8) * (1 - z); |
| `end` | `F41275` (+4.02 s) | RePlot | {i === 0 ? (f >= wf(124, 'straight') ? 'STRAIGHT' : '') : i === 1 ? (f >= wf(125 |

**126** · Dive eighty-one.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `eighty-one` | `F41330` (+0.35 s) | (scene list) | sound effect cue |

**127** · Dive eighty-two.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `eighty-two` | `F41408` (+0.30 s) | (scene list) | sound effect cue |

**128** · Dive eighty-three.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `eighty-three` | `F41488` (+0.32 s) | (scene list) | sound effect cue |

**129** · In the first five hundred metres, every one of them bends away.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `first` | `F41571` (+0.27 s) | RePlot | text: THE FIRST 500 M: |
| `five` | `F41595` (+0.67 s) | RePlot | lead · const band = lead(f, wf(129, 'five'), 14) * (1 - lead(f, wf(130, 'fitt |
| `hundred` | `F41613` (+0.97 s) | RePlot | text: THE FIRST 500 M: |
| `every` | `F41672` (+1.95 s) | RePlot | text: EVERY ONE OF THEM |
| `one` | `F41697` (+2.37 s) | RePlot | text: EVERY ONE OF THEM |
| `bends` | `F41726` (+2.85 s) | RePlot | text: BENDS AWAY |
| `away` | `F41747` (+3.20 s) | RePlot | text: BENDS AWAY |

**130** · To put a number on it, the N - T - S - B fitted a line to the shallowest stretch, from fifteen to a hundred and fifty metres: metres of depth for each millivolt from the gauge.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `number` | `F41822` (+0.40 s) | RePlot | lead · <div style={{...T(26, {color: colors.ink, letterSpacing: 2}), opacity: |
| `N` | `F41889` (+1.52 s) | RePlot | text: THE NTSB: / A LINE FITTED |
| `fitted` | `F41936` (+2.30 s) | RePlot | text: THE NTSB: / A LINE FITTED |
| `line` | `F41962` (+2.73 s) | RePlot | text: THE NTSB: / A LINE FITTED |
| `shallowest` | `F41997` (+3.32 s) | RePlot | text: TO THE SHALLOWEST STRETCH: |
| `stretch` | `F42030` (+3.87 s) | RePlot | text: TO THE SHALLOWEST STRETCH: |
| `fifteen` | `F42084` (+4.77 s) | RePlot | text: 15– / 50 M |
| `hundred` | `F42131` (+5.55 s) | RePlot | text: 15– / 50 M |
| `fifty` | `F42157` (+5.98 s) | RePlot | text: 15– / 50 M |
| `metres` | `F42225` (+7.12 s) | RePlot | <Wd f={f} at={wf(130, 'metres', 1)} lightAt={wf(130, 'depth')}> · METRES OF DEPT |
| `depth` | `F42255` (+7.62 s) | RePlot | <Wd f={f} at={wf(130, 'metres', 1)} lightAt={wf(130, 'depth')}> · METRES OF DEPT |
| `each` | `F42288` (+8.17 s) | RePlot | text: PER mV FROM THE GAUGE |
| `millivolt` | `F42305` (+8.45 s) | RePlot | text: M PER mV |
| `gauge` | `F42356` (+9.30 s) | RePlot | text: PER mV FROM THE GAUGE |

**131** · Before the event: five point zero zero, and four point seven four.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Before` | `F42406` (+0.00 s) | RePlot | lead · <div style={{position: 'absolute', left: 290, top: 140, width: 960, .. |
| `five` | `F42477` (+1.18 s) | RePlot | text: 75 / 5 |
| `point` | `F42496` (+1.50 s) | RePlot | text: 75 / 5 |
| `zero` | `F42514` (+1.80 s) | RePlot | text: 75 / 5 |
| `zero` | `F42535` (+2.15 s) | RePlot | text: 75 / 5 |
| `four` | `F42586` (+3.00 s) | RePlot | text: 80 / 4 |
| `point` | `F42602` (+3.27 s) | RePlot | text: 80 / 4 |
| `seven` | `F42618` (+3.53 s) | RePlot | text: 80 / 4 |
| `four` | `F42640` (+3.90 s) | RePlot | text: 80 / 4 |

**132** · After it: eight point seven six, eight point zero nine, eight point seven seven.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `After` | `F42687` (+0.07 s) | RePlot | text: AFTER IT |
| `eight` | `F42736` (+0.88 s) | RePlot | text: 81 / 8 |
| `point` | `F42748` (+1.08 s) | RePlot | text: 81 / 8 |
| `seven` | `F42765` (+1.37 s) | RePlot | text: 81 / 8 |
| `six` | `F42787` (+1.73 s) | (scene list) | sound effect cue |
| `eight` | `F42829` (+2.43 s) | RePlot | text: 82 / 8 |
| `point` | `F42840` (+2.62 s) | RePlot | text: 82 / 8 |
| `zero` | `F42857` (+2.90 s) | RePlot | text: 82 / 8 |
| `nine` | `F42878` (+3.25 s) | RePlot | text: 82 / 8 |
| `eight` | `F42919` (+3.93 s) | RePlot | text: 83 / 8 |
| `point` | `F42930` (+4.12 s) | RePlot | text: 83 / 8 |
| `seven` | `F42950` (+4.45 s) | RePlot | text: 83 / 8 |
| `seven` | `F42971` (+4.80 s) | RePlot | text: 83 / 8 |

**133** · Same gauge, same hull, same sea.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Same` | `F43024` (+0.10 s) | RePlot | lead · <div style={{marginTop: 22, ...T(30, {}), lineHeight: 1.4, opacity: le |
| `gauge` | `F43043` (+0.42 s) | RePlot | text: SAME GAUGE · |
| `hull` | `F43104` (+1.43 s) | RePlot | text: SAME HULL · |
| `sea` | `F43165` (+2.45 s) | RePlot | text: SAME SEA |

**134** · A response that had changed by about three quarters.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `response` | `F43258` (+0.12 s) | RePlot | text: RESPONSE CHANGED |
| `changed` | `F43310` (+0.98 s) | RePlot | text: RESPONSE CHANGED |
| `three` | `F43367` (+1.93 s) | RePlot | bump · <span style={{...T(64, {color: f >= wf(134, 'quarters') + LAND ? color |
| `quarters` | `F43386` (+2.25 s) | (scene list) | sound effect cue |

**135** · Could OceanGate have seen this at the time?

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Could` | `F43449` (+0.00 s) | Hindsight | text: COULD OCEANGATE HAVE SEEN THIS? · |
| `seen` | `F43508` (+0.98 s) | Hindsight | text: COULD OCEANGATE HAVE SEEN THIS? · |

**136** · The Coast Guard board found that OceanGate had all the data it needed to show the hull's behaviour had changed, and that analysing strain against elapsed time failed to reveal it.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Coast` | `F43622` (+0.12 s) | Hindsight | text: THE COAST GUARD BOARD: |
| `board` | `F43657` (+0.70 s) | Hindsight | text: THE COAST GUARD BOARD: |
| `found` | `F43678` (+1.05 s) | Hindsight | hl= · <RecordPage set="roi" start={sf(135) - 14} end={ef(136) + 24} hl={[{ke |
| `all` | `F43759` (+2.40 s) | Hindsight | text: ALL THE DATA / TO SHOW |
| `data` | `F43778` (+2.72 s) | Hindsight | text: ALL THE DATA / TO SHOW |
| `needed` | `F43807` (+3.20 s) | Hindsight | text: ALL THE DATA / TO SHOW |
| `show` | `F43842` (+3.78 s) | Hindsight | text: ALL THE DATA / TO SHOW |
| `hull's` | `F43865` (+4.17 s) | Hindsight | text: ALL THE DATA / TO SHOW |
| `changed` | `F43924` (+5.15 s) | Hindsight | text: ALL THE DATA / TO SHOW |
| `analysing` | `F43987` (+6.20 s) | Hindsight | text: ALL THE DATA / TO SHOW |
| `strain` | `F44026` (+6.85 s) | Hindsight | text: ALL THE DATA / TO SHOW |
| `elapsed` | `F44073` (+7.63 s) | (scene list) | sound effect cue |
| `time` | `F44098` (+8.05 s) | Hindsight | text: ELAPSED TIME |
| `failed` | `F44131` (+8.60 s) | Hindsight | text: FAILED TO REVEAL IT |
| `reveal` | `F44158` (+9.05 s) | Hindsight | text: FAILED TO REVEAL IT |

**137** · The timing that follows is our own reading of the record, not a finding of any report.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `timing` | `F44227` (+0.13 s) | Hindsight | text: THE TIMING THAT FOLLOWS: |
| `our` | `F44295` (+1.27 s) | (scene list) | sound effect cue |
| `reading` | `F44325` (+1.77 s) | Hindsight | text: OUR OWN READING |
| `not` | `F44398` (+2.98 s) | Hindsight | text: NOT A FINDING |
| `finding` | `F44414` (+3.25 s) | Hindsight | text: NOT A FINDING |
| `any` | `F44451` (+3.87 s) | Hindsight | text: OF ANY REPORT |
| `report` | `F44465` (+4.10 s) | Hindsight | text: OF ANY REPORT |

**138** · Brooks was right that there was no new jump.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Brooks` | `F44522` (+-0.02 s) | Hindsight | text: BROOKS WAS RIGHT: |
| `right` | `F44552` (+0.48 s) | Hindsight | text: BROOKS WAS RIGHT: |
| `no` | `F44601` (+1.30 s) | Hindsight | text: NO NEW JUMP |
| `jump` | `F44638` (+1.92 s) | Hindsight | text: NO NEW JUMP |

**139** · What changed was the slope, and against time a change in slope is hard to see.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `changed` | `F44692` (+0.20 s) | Hindsight | text: WHAT CHANGED WAS THE SLOPE · |
| `slope` | `F44750` (+1.17 s) | Hindsight | text: WHAT CHANGED WAS THE SLOPE · |
| `against` | `F44800` (+2.00 s) | Hindsight | text: AGAINST TIME, |
| `time` | `F44822` (+2.37 s) | Hindsight | text: AGAINST TIME, |
| `change` | `F44868` (+3.13 s) | Hindsight | text: A SLOPE CHANGE IS / HARD TO SEE |
| `slope` | `F44903` (+3.72 s) | Hindsight | text: A SLOPE CHANGE IS / HARD TO SEE |
| `hard` | `F44937` (+4.28 s) | Hindsight | text: A SLOPE CHANGE IS / HARD TO SEE |
| `see` | `F44966` (+4.77 s) | Hindsight | text: A SLOPE CHANGE IS / HARD TO SEE |

**140** · Dive eighty itself shows nothing until its last minutes.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Dive` | `F45011` (+0.00 s) | Hindsight | text: DIVE 80 ITSELF: |
| `eighty` | `F45034` (+0.38 s) | Hindsight | {d: '15 JUL', dive: '80', at: wf(140, 'eighty'), tone: '#7dd3fc', note: 'BANG ·  |
| `itself` | `F45052` (+0.68 s) | Hindsight | text: DIVE 80 ITSELF: |
| `nothing` | `F45109` (+1.63 s) | Hindsight | text: NOTHING UNTIL |
| `until` | `F45134` (+2.05 s) | Hindsight | text: NOTHING UNTIL |
| `last` | `F45160` (+2.48 s) | Hindsight | text: ITS LAST MINUTES · |
| `minutes` | `F45182` (+2.85 s) | Hindsight | text: ITS LAST MINUTES · |

**141** · In the N - T - S - B's plots, the bend first appears in dive eighty-one.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `N` | `F45255` (+0.48 s) | Hindsight | text: NTSB PLOTS: / BEND FIRST |
| `plots` | `F45313` (+1.45 s) | Hindsight | text: NTSB PLOTS: / BEND FIRST |
| `bend` | `F45374` (+2.47 s) | Hindsight | text: NTSB PLOTS: / BEND FIRST |
| `first` | `F45396` (+2.83 s) | Hindsight | text: NTSB PLOTS: / BEND FIRST |
| `appears` | `F45418` (+3.20 s) | Hindsight | text: NTSB PLOTS: / BEND FIRST |
| `eighty-one` | `F45483` (+4.28 s) | (scene list) | sound effect cue |

**142** · That data was on the company's computer after that dive.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `data` | `F45563` (+0.27 s) | Hindsight | text: THAT DATA: ON THE COMPANY'S COMPUTER |
| `computer` | `F45630` (+1.38 s) | Hindsight | text: THAT DATA: ON THE COMPANY'S COMPUTER |
| `after` | `F45674` (+2.12 s) | Hindsight | text: AFTER DIVE 81 |
| `dive` | `F45708` (+2.68 s) | Hindsight | text: AFTER DIVE 81 |

**143** · Plotted against depth, it would have shown the bend before dive eighty-two, three days later, and before dive eighty-three.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Plotted` | `F45753` (+0.00 s) | Hindsight | text: PLOTTED AGAINST DEPTH: |
| `depth` | `F45797` (+0.73 s) | Hindsight | text: PLOTTED AGAINST DEPTH: |
| `shown` | `F45855` (+1.70 s) | Hindsight | text: THE BEND, |
| `bend` | `F45878` (+2.08 s) | Hindsight | text: THE BEND, |
| `before` | `F45897` (+2.40 s) | Hindsight | text: BEFORE DIVE 82, |
| `eighty-two` | `F45948` (+3.25 s) | (scene list) | sound effect cue |
| `three` | `F45998` (+4.08 s) | Hindsight | text: 3 DAYS LATER, |
| `days` | `F46014` (+4.35 s) | Hindsight | text: 3 DAYS LATER, |
| `later` | `F46032` (+4.65 s) | Hindsight | {d: '22 JUL', dive: '82', at: wf(143, 'eighty-two'), tone: '#fb923c', note: 'DIV |
| `before` | `F46086` (+5.55 s) | Hindsight | text: AND BEFORE 83 |
| `eighty-three` | `F46128` (+6.25 s) | Hindsight | text: AND BEFORE 83 |

**144** · And it was not a faulty gauge.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `not` | `F46218` (+0.47 s) | Gauges | text: NOT A FAULTY |
| `faulty` | `F46239` (+0.82 s) | Gauges | text: NOT A FAULTY |
| `gauge` | `F46267` (+1.28 s) | Gauges | text: GAUGE |

**145** · Deeper down, the curves still match, which the N - T - S - B said shows the gauges had not changed.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Deeper` | `F46330` (+0.00 s) | Gauges | text: DEEPER DOWN: |
| `down` | `F46350` (+0.33 s) | Gauges | text: DEEPER DOWN: |
| `curves` | `F46390` (+1.00 s) | Gauges | text: THE CURVES STILL MATCH |
| `match` | `F46440` (+1.83 s) | Gauges | text: THE CURVES STILL MATCH |
| `which` | `F46493` (+2.72 s) | Gauges | <Note o={vis(f, wf(145, 'which') - 4, ef(146) + 14)} tone={colors.red}> |
| `N` | `F46523` (+3.22 s) | Gauges | text: NTSB: |
| `said` | `F46569` (+3.98 s) | Gauges | text: NTSB: |
| `gauges` | `F46620` (+4.83 s) | (scene list) | sound effect cue |
| `changed` | `F46677` (+5.78 s) | Gauges | text: THE GAUGES HAD NOT CHANGED · |

**146** · The hull had.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `hull` | `F46749` (+0.18 s) | Gauges | text: THE HULL HAD |
| `had` | `F46776` (+0.63 s) | (scene list) | sound effect cue |

**147** · Canada's investigators later plotted the strain against depth their own way, measuring each dive against itself.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Canada's` | `F46836` (+0.00 s) | Gauges | text: CANADA'S INVESTIGATORS, |
| `investigators` | `F46864` (+0.47 s) | Gauges | text: CANADA'S INVESTIGATORS, |
| `later` | `F46924` (+1.47 s) | Gauges | text: LATER: |
| `plotted` | `F46946` (+1.83 s) | Gauges | text: STRAIN / AGAINST DEPTH, |
| `strain` | `F46980` (+2.40 s) | Gauges | text: STRAIN / AGAINST DEPTH, |
| `against` | `F47006` (+2.83 s) | Gauges | text: STRAIN / AGAINST DEPTH, |
| `depth` | `F47033` (+3.28 s) | Gauges | text: STRAIN / AGAINST DEPTH, |
| `own` | `F47073` (+3.95 s) | Gauges | text: THEIR OWN WAY |
| `way` | `F47088` (+4.20 s) | Gauges | text: THEIR OWN WAY |
| `measuring` | `F47130` (+4.90 s) | Gauges | text: EACH DIVE / MEASURED AGAINST ITSELF |
| `dive` | `F47180` (+5.73 s) | Gauges | text: EACH DIVE / MEASURED AGAINST ITSELF |
| `against` | `F47203` (+6.12 s) | Gauges | text: EACH DIVE / MEASURED AGAINST ITSELF |
| `itself` | `F47227` (+6.52 s) | Gauges | text: EACH DIVE / MEASURED AGAINST ITSELF |

**148** · On the nineteenth of July, for one gauge at the top of the hull, the slope from ten to three hundred metres was nearly double its slope for the whole dive.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `nineteenth` | `F47312` (+0.22 s) | Gauges | DatePill · <DatePill f={f} fps={fps} day={19} month={7} year={2022} dayWord={wf(1 |
| `July` | `F47350` (+0.85 s) | Gauges | DatePill · <DatePill f={f} fps={fps} day={19} month={7} year={2022} dayWord={wf(1 |
| `one` | `F47409` (+1.83 s) | Gauges | text: ONE GAUGE · / TOP OF THE HULL · |
| `gauge` | `F47422` (+2.05 s) | Gauges | text: ONE GAUGE · / TOP OF THE HULL · |
| `top` | `F47456` (+2.62 s) | Gauges | text: ONE GAUGE · / TOP OF THE HULL · |
| `hull` | `F47486` (+3.12 s) | Gauges | text: ONE GAUGE · / TOP OF THE HULL · |
| `slope` | `F47536` (+3.95 s) | Gauges | text: SLOPE |
| `ten` | `F47575` (+4.60 s) | Gauges | text: SLOPE |
| `three` | `F47609` (+5.17 s) | Gauges | text: SLOPE |
| `metres` | `F47651` (+5.87 s) | Gauges | text: SLOPE |
| `nearly` | `F47703` (+6.73 s) | Gauges | bump · <span style={{...T(80, {color: f >= wf(148, 'double') + LAND ? colors. |
| `double` | `F47731` (+7.20 s) | (scene list) | sound effect cue |
| `its` | `F47754` (+7.58 s) | Gauges | text: NEARLY DOUBLE / ITS SLOPE FOR THE WHOLE DIVE |
| `dive` | `F47826` (+8.78 s) | Gauges | text: NEARLY DOUBLE / ITS SLOPE FOR THE WHOLE DIVE |

**149** · They also found a smaller bend a year earlier, in August twenty twenty-one, and could not determine whether the bang caused the change.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `smaller` | `F47941` (+0.97 s) | Gauges | text: A SMALLER BEND · |
| `bend` | `F47967` (+1.40 s) | Gauges | text: A SMALLER BEND · |
| `year` | `F47992` (+1.82 s) | Gauges | text: A YEAR EARLIER |
| `earlier` | `F48012` (+2.15 s) | Gauges | text: A YEAR EARLIER |
| `August` | `F48065` (+3.03 s) | Gauges | text: 05 AUG 2021 |
| `twenty-one` | `F48107` (+3.73 s) | Gauges | text: 05 AUG 2021 |
| `could` | `F48173` (+4.83 s) | Gauges | text: COULD NOT DETERMINE |
| `determine` | `F48197` (+5.23 s) | Gauges | text: COULD NOT DETERMINE |
| `whether` | `F48229` (+5.77 s) | Gauges | text: WHETHER THE BANG |
| `bang` | `F48257` (+6.23 s) | Gauges | text: WHETHER THE BANG |
| `caused` | `F48285` (+6.70 s) | Gauges | text: CAUSED THE CHANGE |
| `change` | `F48314` (+7.18 s) | Gauges | text: CAUSED THE CHANGE |

**150** · Why would a damaged hull bend only near the surface?

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Why` | `F48377` (+0.02 s) | Mechanism | text: Why would a |
| `damaged` | `F48411` (+0.58 s) | Mechanism | <Wd f={f} at={wf(150, 'damaged')} lightAt={wf(150, 'hull')} tone={colors.red}>da |
| `hull` | `F48442` (+1.10 s) | Mechanism | <Wd f={f} at={wf(150, 'damaged')} lightAt={wf(150, 'hull')} tone={colors.red}>da |
| `bend` | `F48471` (+1.58 s) | Mechanism | <Wd f={f} at={wf(150, 'bend')} tone={colors.amber}>bend </Wd> |
| `only` | `F48496` (+2.00 s) | Mechanism | <Wd f={f} at={wf(150, 'only')} lightAt={wf(150, 'surface')} base={colors.ink}>on |
| `surface` | `F48540` (+2.73 s) | Mechanism | <Wd f={f} at={wf(150, 'only')} lightAt={wf(150, 'surface')} base={colors.ink}>on |

**151** · The N - T - S - B found long voids in the bond between the first and second layers, and between the third and fourth.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `found` | `F48674` (+1.02 s) | Mechanism | text: NTSB: |
| `long` | `F48698` (+1.42 s) | Mechanism | text: LONG VOIDS IN THE BOND · |
| `voids` | `F48719` (+1.77 s) | (scene list) | sound effect cue |
| `bond` | `F48761` (+2.47 s) | Mechanism | hl= · <RecordPage set="mir" start={sf(151) - 14} end={ef(151) + 20} hl={[{ke |
| `first` | `F48814` (+3.35 s) | Mechanism | text: LAYERS 1–2 |
| `second` | `F48848` (+3.92 s) | Mechanism | text: LAYERS 1–2 |
| `layers` | `F48872` (+4.32 s) | Mechanism | text: LAYERS 1–2 |
| `third` | `F48950` (+5.62 s) | Mechanism | text: LAYERS 3–4 |
| `fourth` | `F48978` (+6.08 s) | Mechanism | text: LAYERS 3–4 |

**152** · Where a layer separates at the end of the cylinder, it can move on its own under light pressure.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Where` | `F49032` (+0.00 s) | Mechanism | text: WHERE A LAYER SEPARATES |
| `layer` | `F49052` (+0.33 s) | Mechanism | lead · <g key={j} opacity={lead(f, wf(152, 'layer'), 10)}> |
| `separates` | `F49074` (+0.70 s) | (scene list) | sound effect cue |
| `end` | `F49122` (+1.50 s) | Mechanism | text: AT THE CYLINDER'S END, |
| `cylinder` | `F49146` (+1.90 s) | Mechanism | text: AT THE CYLINDER'S END, |
| `move` | `F49212` (+3.00 s) | Mechanism | text: IT CAN MOVE ON ITS OWN |
| `own` | `F49248` (+3.60 s) | Mechanism | text: IT CAN MOVE ON ITS OWN |
| `light` | `F49282` (+4.17 s) | Mechanism | text: UNDER LIGHT PRESSURE |
| `pressure` | `F49300` (+4.47 s) | Mechanism | text: UNDER LIGHT PRESSURE |

**153** · Deeper down, it found, the layers respond like the intact hull.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Deeper` | `F49357` (+0.00 s) | Mechanism | text: DEEPER DOWN: |
| `down` | `F49379` (+0.37 s) | Mechanism | text: DEEPER DOWN: |
| `found` | `F49423` (+1.10 s) | Mechanism | text: THE LAYERS / RESPOND LIKE THE INTACT HULL |
| `layers` | `F49471` (+1.90 s) | Mechanism | text: THE LAYERS / RESPOND LIKE THE INTACT HULL |
| `respond` | `F49493` (+2.27 s) | Mechanism | text: THE LAYERS / RESPOND LIKE THE INTACT HULL |
| `intact` | `F49558` (+3.35 s) | Mechanism | text: THE LAYERS / RESPOND LIKE THE INTACT HULL |

**154** · Titan made three more dives that July.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Titan` | `F49640` (+0.00 s) | Mechanism | lead · <div style={{position: 'absolute', left: L, top: 690, width: 1320, ... |
| `three` | `F49686` (+0.77 s) | Mechanism | text: 3 MORE DIVES · / JULY 2022 |
| `dives` | `F49721` (+1.35 s) | Mechanism | text: 3 MORE DIVES · / JULY 2022 |
| `July` | `F49757` (+1.95 s) | Mechanism | text: 3 MORE DIVES · / JULY 2022 |

**155** · Two of them, eighty-one and eighty-two, still reached the Titanic, which the N - T - S - B said showed the first damage was not enough to make it implode.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Two` | `F49808` (+0.00 s) | Mechanism | text: TWO: / 81 |
| `eighty-one` | `F49858` (+0.83 s) | Mechanism | text: TWO: / 81 |
| `eighty-two` | `F49902` (+1.57 s) | Mechanism | <Wd f={f} at={wf(155, 'eighty-two')} tone={colors.amber}>· 82 </Wd> |
| `reached` | `F49979` (+2.85 s) | Mechanism | text: REACHED THE TITANIC |
| `Titanic` | `F50004` (+3.27 s) | Mechanism | text: REACHED THE TITANIC |
| `which` | `F50058` (+4.17 s) | Mechanism | text: NTSB: / FIRST DAMAGE |
| `said` | `F50128` (+5.33 s) | Mechanism | text: NTSB: / FIRST DAMAGE |
| `first` | `F50175` (+6.12 s) | Mechanism | text: NTSB: / FIRST DAMAGE |
| `damage` | `F50195` (+6.45 s) | Mechanism | text: NTSB: / FIRST DAMAGE |
| `not` | `F50234` (+7.10 s) | Mechanism | text: NOT ENOUGH TO IMPLODE |
| `implode` | `F50296` (+8.13 s) | Mechanism | text: NOT ENOUGH TO IMPLODE |

**156** · A delamination is not a crack through the wall.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `not` | `F50434` (+1.28 s) | Mechanism | text: NOT A CRACK THROUGH THE WALL |
| `wall` | `F50504` (+2.45 s) | Mechanism | text: NOT A CRACK THROUGH THE WALL |

**157** · But the wall was no longer what it had been.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `no` | `F50615` (+0.98 s) | Mechanism | text: NO LONGER WHAT IT HAD BEEN |
| `been` | `F50686` (+2.17 s) | Mechanism | text: NO LONGER WHAT IT HAD BEEN |

**158** · The N - T - S - B's finding: because its analysis was flawed, OceanGate was unable to identify that the Titan was damaged after dive eighty, and that it needed to be immediately removed from service.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `finding` | `F50799` (+1.07 s) | Mechanism | text: NTSB: / ANALYSIS |
| `because` | `F50857` (+2.03 s) | Mechanism | text: NTSB: / ANALYSIS |
| `analysis` | `F50890` (+2.58 s) | Mechanism | text: NTSB: / ANALYSIS |
| `flawed` | `F50939` (+3.40 s) | Mechanism | text: NTSB: / ANALYSIS |
| `OceanGate` | `F50987` (+4.20 s) | Mechanism | text: NTSB: / ANALYSIS |
| `unable` | `F51034` (+4.98 s) | Mechanism | text: UNABLE TO IDENTIFY |
| `identify` | `F51073` (+5.63 s) | Mechanism | text: UNABLE TO IDENTIFY |
| `Titan` | `F51130` (+6.58 s) | Mechanism | text: DAMAGE / AFTER DIVE 80 · |
| `damaged` | `F51165` (+7.17 s) | Mechanism | text: DAMAGE / AFTER DIVE 80 · |
| `after` | `F51201` (+7.77 s) | Mechanism | text: DAMAGE / AFTER DIVE 80 · |
| `eighty` | `F51250` (+8.58 s) | Mechanism | text: DAMAGE / AFTER DIVE 80 · |
| `needed` | `F51311` (+9.60 s) | Mechanism | text: REMOVE / FROM SERVICE, IMMEDIATELY |
| `immediately` | `F51348` (+10.22 s) | (scene list) | sound effect cue |
| `service` | `F51434` (+11.65 s) | Mechanism | text: REMOVE / FROM SERVICE, IMMEDIATELY |

