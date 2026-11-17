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
| `Every` | `F39296` (+0.02 s) | RePlot | text: EVERY DIVE: ITS OWN SHAPE, |
| `shape` | `F39378` (+1.38 s) | RePlot | text: EVERY DIVE: ITS OWN SHAPE, |
| `pace` | `F39433` (+2.30 s) | RePlot | text: ITS OWN PACE, |
| `stops` | `F39497` (+3.37 s) | RePlot | text: ITS OWN STOPS |

**121** · Laid side by side, the dives are hard to compare.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Laid` | `F39554` (+0.03 s) | RePlot | text: SIDE BY SIDE: |
| `side` | `F39571` (+0.32 s) | RePlot | text: SIDE BY SIDE: |
| `dives` | `F39644` (+1.53 s) | RePlot | text: THE DIVES: / HARD TO COMPARE |
| `hard` | `F39669` (+1.95 s) | RePlot | text: THE DIVES: / HARD TO COMPARE |
| `compare` | `F39692` (+2.33 s) | RePlot | text: THE DIVES: / HARD TO COMPARE |

**122** · The N - T - S - B said a more appropriate way was to plot strain against depth directly, because depth sets the pressure.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `N` | `F39775` (+0.23 s) | RePlot | <div style={{position: 'absolute', top: 0, opacity: vis(f, wf(122, 'n'), wf(124, |
| `more` | `F39838` (+1.28 s) | RePlot | text: A MORE APPROPRIATE WAY: |
| `appropriate` | `F39851` (+1.50 s) | RePlot | text: A MORE APPROPRIATE WAY: |
| `plot` | `F39925` (+2.73 s) | RePlot | text: STRAIN |
| `strain` | `F39947` (+3.10 s) | RePlot | text: STRAIN |
| `against` | `F39975` (+3.57 s) | RePlot | text: AGAINST DEPTH |
| `depth` | `F40001` (+4.00 s) | RePlot | text: AGAINST DEPTH |
| `because` | `F40077` (+5.27 s) | RePlot | text: BECAUSE |
| `depth` | `F40099` (+5.63 s) | RePlot | text: DEPTH |
| `sets` | `F40125` (+6.07 s) | RePlot | text: SETS THE PRESSURE |
| `pressure` | `F40150` (+6.48 s) | RePlot | text: SETS THE PRESSURE |

**123** · So here is the same data, against depth.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `same` | `F40261` (+0.85 s) | RePlot | text: THE SAME DATA |
| `data` | `F40279` (+1.15 s) | RePlot | text: THE SAME DATA |
| `against` | `F40318` (+1.80 s) | RePlot | <Wd f={f} at={wf(123, 'against')} lightAt={wf(123, 'depth')} tone={colors.cyan}  |
| `depth` | `F40341` (+2.18 s) | (scene list) | sound effect cue |

**124** · Dive seventy-five, a straight line.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Dive` | `F40476` (+0.00 s) | RePlot | lead · <div style={{position: 'absolute', top: 0, opacity: lead(f, wf(124, 'd |
| `seventy-five` | `F40494` (+0.30 s) | RePlot | const named = [wf(124, 'seventy-five'), wf(125, 'eighty'), wf(126, 'eighty-one') |
| `straight` | `F40569` (+1.55 s) | RePlot | {i === 0 ? (f >= wf(124, 'straight') ? 'STRAIGHT' : '') : i === 1 ? (f >= wf(125 |

**125** · Dive eighty, the same straight line, until the event at its very end.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `eighty` | `F40658` (+0.38 s) | RePlot | const named = [wf(124, 'seventy-five'), wf(125, 'eighty'), wf(126, 'eighty-one') |
| `straight` | `F40728` (+1.55 s) | RePlot | {i === 0 ? (f >= wf(124, 'straight') ? 'STRAIGHT' : '') : i === 1 ? (f >= wf(125 |
| `event` | `F40810` (+2.92 s) | RePlot | lead · const event = lead(f, wf(125, 'event'), 8) * (1 - z); |
| `end` | `F40876` (+4.02 s) | RePlot | {i === 0 ? (f >= wf(124, 'straight') ? 'STRAIGHT' : '') : i === 1 ? (f >= wf(125 |

**126** · Dive eighty-one.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `eighty-one` | `F40931` (+0.33 s) | (scene list) | sound effect cue |

**127** · Dive eighty-two.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `eighty-two` | `F41010` (+0.32 s) | (scene list) | sound effect cue |

**128** · Dive eighty-three.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `eighty-three` | `F41089` (+0.32 s) | (scene list) | sound effect cue |

**129** · In the first five hundred metres, every one of them bends away.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `first` | `F41172` (+0.27 s) | RePlot | text: THE FIRST 500 M: |
| `five` | `F41196` (+0.67 s) | RePlot | lead · const band = lead(f, wf(129, 'five'), 14) * (1 - lead(f, wf(130, 'fitt |
| `hundred` | `F41214` (+0.97 s) | RePlot | text: THE FIRST 500 M: |
| `every` | `F41273` (+1.95 s) | RePlot | text: EVERY ONE OF THEM |
| `one` | `F41298` (+2.37 s) | RePlot | text: EVERY ONE OF THEM |
| `bends` | `F41327` (+2.85 s) | RePlot | text: BENDS AWAY |
| `away` | `F41348` (+3.20 s) | RePlot | text: BENDS AWAY |

**130** · To put a number on it, the N - T - S - B fitted a line to the shallowest stretch, from fifteen to a hundred and fifty metres: metres of depth for each millivolt from the gauge.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `number` | `F41423` (+0.40 s) | RePlot | lead · <div style={{...T(26, {color: colors.ink, letterSpacing: 2}), opacity: |
| `N` | `F41490` (+1.52 s) | RePlot | text: THE N-T-S-B: / A LINE FITTED |
| `fitted` | `F41537` (+2.30 s) | RePlot | text: THE N-T-S-B: / A LINE FITTED |
| `line` | `F41563` (+2.73 s) | RePlot | text: THE N-T-S-B: / A LINE FITTED |
| `shallowest` | `F41598` (+3.32 s) | RePlot | text: TO THE SHALLOWEST STRETCH: |
| `stretch` | `F41631` (+3.87 s) | RePlot | text: TO THE SHALLOWEST STRETCH: |
| `fifteen` | `F41685` (+4.77 s) | RePlot | text: 15– / 50 M |
| `hundred` | `F41731` (+5.53 s) | RePlot | text: 15– / 50 M |
| `fifty` | `F41758` (+5.98 s) | RePlot | text: 15– / 50 M |
| `metres` | `F41825` (+7.10 s) | RePlot | <Wd f={f} at={wf(130, 'metres', 1)} lightAt={wf(130, 'depth')}> · METRES OF DEPT |
| `depth` | `F41855` (+7.60 s) | RePlot | <Wd f={f} at={wf(130, 'metres', 1)} lightAt={wf(130, 'depth')}> · METRES OF DEPT |
| `each` | `F41889` (+8.17 s) | RePlot | text: PER mV FROM THE GAUGE |
| `millivolt` | `F41906` (+8.45 s) | RePlot | text: M PER mV |
| `gauge` | `F41956` (+9.28 s) | RePlot | text: PER mV FROM THE GAUGE |

**131** · Before the event: five point zero zero, and four point seven four.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Before` | `F42007` (+0.00 s) | RePlot | lead · <div style={{position: 'absolute', left: 290, top: 140, width: 960, .. |
| `five` | `F42078` (+1.18 s) | RePlot | text: 75 / 5 |
| `point` | `F42097` (+1.50 s) | RePlot | text: 75 / 5 |
| `zero` | `F42115` (+1.80 s) | RePlot | text: 75 / 5 |
| `zero` | `F42137` (+2.17 s) | RePlot | text: 75 / 5 |
| `four` | `F42187` (+3.00 s) | RePlot | text: 80 / 4 |
| `point` | `F42203` (+3.27 s) | RePlot | text: 80 / 4 |
| `seven` | `F42220` (+3.55 s) | RePlot | text: 80 / 4 |
| `four` | `F42241` (+3.90 s) | RePlot | text: 80 / 4 |

**132** · After it: eight point seven six, eight point zero nine, eight point seven seven.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `After` | `F42288` (+0.07 s) | RePlot | text: AFTER IT |
| `eight` | `F42337` (+0.88 s) | RePlot | text: 81 / 8 |
| `point` | `F42350` (+1.10 s) | RePlot | text: 81 / 8 |
| `seven` | `F42366` (+1.37 s) | RePlot | text: 81 / 8 |
| `six` | `F42388` (+1.73 s) | (scene list) | sound effect cue |
| `eight` | `F42430` (+2.43 s) | RePlot | text: 82 / 8 |
| `point` | `F42441` (+2.62 s) | RePlot | text: 82 / 8 |
| `zero` | `F42458` (+2.90 s) | RePlot | text: 82 / 8 |
| `nine` | `F42480` (+3.27 s) | RePlot | text: 82 / 8 |
| `eight` | `F42521` (+3.95 s) | RePlot | text: 83 / 8 |
| `point` | `F42531` (+4.12 s) | RePlot | text: 83 / 8 |
| `seven` | `F42551` (+4.45 s) | RePlot | text: 83 / 8 |
| `seven` | `F42572` (+4.80 s) | RePlot | text: 83 / 8 |

**133** · Same gauge, same hull, same sea.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Same` | `F42626` (+0.10 s) | RePlot | lead · <div style={{marginTop: 22, ...T(30, {}), lineHeight: 1.4, opacity: le |
| `gauge` | `F42644` (+0.40 s) | RePlot | text: SAME GAUGE · |
| `hull` | `F42705` (+1.42 s) | RePlot | text: SAME HULL · |
| `sea` | `F42766` (+2.43 s) | RePlot | text: SAME SEA |

**134** · A response that had changed by about three quarters.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `response` | `F42860` (+0.13 s) | RePlot | text: RESPONSE CHANGED |
| `changed` | `F42912` (+1.00 s) | RePlot | text: RESPONSE CHANGED |
| `three` | `F42968` (+1.93 s) | RePlot | bump · <span style={{...T(64, {color: colors.red, fontWeight: 700}), display: |
| `quarters` | `F42988` (+2.27 s) | (scene list) | sound effect cue |

**135** · Could OceanGate have seen this at the time?

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Could` | `F43050` (+0.00 s) | Hindsight | text: COULD OCEANGATE HAVE SEEN THIS? · |
| `seen` | `F43109` (+0.98 s) | Hindsight | text: COULD OCEANGATE HAVE SEEN THIS? · |

**136** · The Coast Guard board found that OceanGate had all the data it needed to show the hull's behaviour had changed, and that analysing strain against elapsed time failed to reveal it.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Coast` | `F43223` (+0.12 s) | Hindsight | text: THE COAST GUARD BOARD: |
| `board` | `F43258` (+0.70 s) | Hindsight | text: THE COAST GUARD BOARD: |
| `found` | `F43280` (+1.07 s) | Hindsight | hl= · <RecordPage set="roi" start={sf(135) - 14} end={ef(136) + 24} hl={[{ke |
| `all` | `F43360` (+2.40 s) | Hindsight | text: ALL THE DATA / TO SHOW |
| `data` | `F43380` (+2.73 s) | Hindsight | text: ALL THE DATA / TO SHOW |
| `needed` | `F43408` (+3.20 s) | Hindsight | text: ALL THE DATA / TO SHOW |
| `show` | `F43443` (+3.78 s) | Hindsight | text: ALL THE DATA / TO SHOW |
| `hull's` | `F43466` (+4.17 s) | Hindsight | text: ALL THE DATA / TO SHOW |
| `changed` | `F43525` (+5.15 s) | Hindsight | text: ALL THE DATA / TO SHOW |
| `analysing` | `F43589` (+6.22 s) | Hindsight | text: ALL THE DATA / TO SHOW |
| `strain` | `F43627` (+6.85 s) | Hindsight | text: ALL THE DATA / TO SHOW |
| `elapsed` | `F43674` (+7.63 s) | (scene list) | sound effect cue |
| `time` | `F43699` (+8.05 s) | Hindsight | text: ELAPSED TIME |
| `failed` | `F43732` (+8.60 s) | Hindsight | text: FAILED TO REVEAL IT |
| `reveal` | `F43759` (+9.05 s) | Hindsight | text: FAILED TO REVEAL IT |

**137** · The timing that follows is our own reading of the record, not a finding of any report.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `timing` | `F43828` (+0.12 s) | Hindsight | text: THE TIMING THAT FOLLOWS: |
| `our` | `F43898` (+1.28 s) | (scene list) | sound effect cue |
| `reading` | `F43927` (+1.77 s) | Hindsight | text: OUR OWN READING |
| `not` | `F43999` (+2.97 s) | Hindsight | text: NOT A FINDING |
| `finding` | `F44015` (+3.23 s) | Hindsight | text: NOT A FINDING |
| `any` | `F44052` (+3.85 s) | Hindsight | text: OF ANY REPORT |
| `report` | `F44067` (+4.10 s) | Hindsight | text: OF ANY REPORT |

**138** · Brooks was right that there was no new jump.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Brooks` | `F44124` (+0.00 s) | Hindsight | text: BROOKS WAS RIGHT: |
| `right` | `F44155` (+0.52 s) | Hindsight | text: BROOKS WAS RIGHT: |
| `no` | `F44203` (+1.32 s) | Hindsight | text: NO NEW JUMP |
| `jump` | `F44239` (+1.92 s) | Hindsight | text: NO NEW JUMP |

**139** · What changed was the slope, and against time a change in slope is hard to see.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `changed` | `F44294` (+0.22 s) | Hindsight | text: WHAT CHANGED WAS THE SLOPE · |
| `slope` | `F44351` (+1.17 s) | Hindsight | text: WHAT CHANGED WAS THE SLOPE · |
| `against` | `F44401` (+2.00 s) | Hindsight | text: AGAINST TIME, |
| `time` | `F44424` (+2.38 s) | Hindsight | text: AGAINST TIME, |
| `change` | `F44469` (+3.13 s) | Hindsight | text: A SLOPE CHANGE IS / HARD TO SEE |
| `slope` | `F44504` (+3.72 s) | Hindsight | text: A SLOPE CHANGE IS / HARD TO SEE |
| `hard` | `F44538` (+4.28 s) | Hindsight | text: A SLOPE CHANGE IS / HARD TO SEE |
| `see` | `F44568` (+4.78 s) | Hindsight | text: A SLOPE CHANGE IS / HARD TO SEE |

**140** · Dive eighty itself shows nothing until its last minutes.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Dive` | `F44612` (+0.00 s) | Hindsight | text: DIVE 80 ITSELF: |
| `eighty` | `F44635` (+0.38 s) | Hindsight | {d: '15 JUL', dive: '80', at: wf(140, 'eighty'), tone: '#7dd3fc', note: 'BANG ·  |
| `itself` | `F44653` (+0.68 s) | Hindsight | text: DIVE 80 ITSELF: |
| `nothing` | `F44711` (+1.65 s) | Hindsight | text: NOTHING UNTIL |
| `until` | `F44735` (+2.05 s) | Hindsight | text: NOTHING UNTIL |
| `last` | `F44761` (+2.48 s) | Hindsight | text: ITS LAST MINUTES · |
| `minutes` | `F44783` (+2.85 s) | Hindsight | text: ITS LAST MINUTES · |

**141** · The bend first appears in dive eighty-one.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `bend` | `F44836` (+0.15 s) | Hindsight | text: THE BEND FIRST / APPEARS IN 81 |
| `first` | `F44862` (+0.58 s) | Hindsight | text: THE BEND FIRST / APPEARS IN 81 |
| `appears` | `F44882` (+0.92 s) | Hindsight | text: THE BEND FIRST / APPEARS IN 81 |
| `eighty-one` | `F44942` (+1.92 s) | (scene list) | sound effect cue |

**142** · That data was on the company's computer after that dive.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `data` | `F45023` (+0.27 s) | Hindsight | text: THAT DATA: ON THE COMPANY'S COMPUTER |
| `computer` | `F45091` (+1.40 s) | Hindsight | text: THAT DATA: ON THE COMPANY'S COMPUTER |
| `after` | `F45134` (+2.12 s) | Hindsight | text: AFTER DIVE 81 |
| `dive` | `F45168` (+2.68 s) | Hindsight | text: AFTER DIVE 81 |

**143** · Plotted against depth, it would have shown the bend before dive eighty-two, three days later, and before dive eighty-three.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Plotted` | `F45213` (+0.00 s) | Hindsight | text: PLOTTED AGAINST DEPTH: |
| `depth` | `F45258` (+0.75 s) | Hindsight | text: PLOTTED AGAINST DEPTH: |
| `shown` | `F45316` (+1.72 s) | Hindsight | text: THE BEND, |
| `bend` | `F45338` (+2.08 s) | Hindsight | text: THE BEND, |
| `before` | `F45357` (+2.40 s) | Hindsight | text: BEFORE DIVE 82, |
| `eighty-two` | `F45408` (+3.25 s) | (scene list) | sound effect cue |
| `three` | `F45458` (+4.08 s) | Hindsight | text: 3 DAYS LATER, |
| `days` | `F45475` (+4.37 s) | Hindsight | text: 3 DAYS LATER, |
| `later` | `F45492` (+4.65 s) | Hindsight | {d: '22 JUL', dive: '82', at: wf(143, 'eighty-two'), tone: '#fb923c', note: 'DIV |
| `before` | `F45546` (+5.55 s) | Hindsight | text: AND BEFORE 83 |
| `eighty-three` | `F45588` (+6.25 s) | Hindsight | text: AND BEFORE 83 |

**144** · And it was not a faulty gauge.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `not` | `F45678` (+0.45 s) | Gauges | text: NOT A FAULTY |
| `faulty` | `F45700` (+0.82 s) | Gauges | text: NOT A FAULTY |
| `gauge` | `F45728` (+1.28 s) | Gauges | text: GAUGE |

**145** · Deeper down, the curves still match, which the N - T - S - B said shows the gauges had not changed.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Deeper` | `F45790` (+0.00 s) | Gauges | text: DEEPER DOWN: |
| `down` | `F45811` (+0.35 s) | Gauges | text: DEEPER DOWN: |
| `curves` | `F45850` (+1.00 s) | Gauges | text: THE CURVES STILL MATCH |
| `match` | `F45901` (+1.85 s) | Gauges | text: THE CURVES STILL MATCH |
| `which` | `F45954` (+2.73 s) | Gauges | <Note o={vis(f, wf(145, 'which') - 4, ef(146) + 14)} tone={colors.red}> |
| `N` | `F45984` (+3.23 s) | Gauges | text: N-T-S-B: |
| `said` | `F46029` (+3.98 s) | Gauges | text: N-T-S-B: |
| `gauges` | `F46081` (+4.85 s) | (scene list) | sound effect cue |
| `changed` | `F46138` (+5.80 s) | Gauges | text: THE GAUGES HAD NOT CHANGED · |

**146** · The hull had.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `hull` | `F46209` (+0.18 s) | Gauges | text: THE HULL HAD |
| `had` | `F46236` (+0.63 s) | (scene list) | sound effect cue |

**147** · Canada's investigators later ran the same test on their own.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Canada's` | `F46298` (+0.00 s) | Gauges | text: CANADA'S INVESTIGATORS, |
| `investigators` | `F46327` (+0.48 s) | Gauges | text: CANADA'S INVESTIGATORS, |
| `later` | `F46382` (+1.40 s) | Gauges | text: LATER, |
| `ran` | `F46404` (+1.77 s) | Gauges | text: RAN THE SAME TEST ON THEIR OWN |
| `own` | `F46491` (+3.22 s) | Gauges | text: RAN THE SAME TEST ON THEIR OWN |

**148** · They found the slope near the surface on the nineteenth of July nearly double the slope for the whole dive.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `slope` | `F46571` (+0.58 s) | Gauges | text: SLOPE NEAR THE SURFACE |
| `surface` | `F46618` (+1.37 s) | Gauges | text: SLOPE NEAR THE SURFACE |
| `nineteenth` | `F46659` (+2.05 s) | Gauges | DatePill · <DatePill f={f} fps={fps} day={19} month={7} year={2022} dayWord={wf(1 |
| `July` | `F46699` (+2.72 s) | Gauges | DatePill · <DatePill f={f} fps={fps} day={19} month={7} year={2022} dayWord={wf(1 |
| `nearly` | `F46736` (+3.33 s) | Gauges | bump · <span style={{...T(80, {color: colors.red, fontWeight: 700}), display: |
| `double` | `F46767` (+3.85 s) | (scene list) | sound effect cue |
| `whole` | `F46840` (+5.07 s) | Gauges | text: NEARLY DOUBLE / THE WHOLE-DIVE SLOPE |
| `dive` | `F46859` (+5.38 s) | Gauges | text: NEARLY DOUBLE / THE WHOLE-DIVE SLOPE |

**149** · They also found a smaller bend a year earlier, in August twenty twenty-one, and could not determine whether the bang caused the change.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `smaller` | `F46968` (+0.97 s) | Gauges | text: A SMALLER BEND · |
| `bend` | `F46995` (+1.42 s) | Gauges | text: A SMALLER BEND · |
| `year` | `F47020` (+1.83 s) | Gauges | text: A YEAR EARLIER |
| `earlier` | `F47039` (+2.15 s) | Gauges | text: A YEAR EARLIER |
| `August` | `F47092` (+3.03 s) | Gauges | text: 05 AUG 2021 |
| `twenty-one` | `F47134` (+3.73 s) | Gauges | text: 05 AUG 2021 |
| `could` | `F47200` (+4.83 s) | Gauges | text: COULD NOT DETERMINE |
| `determine` | `F47224` (+5.23 s) | Gauges | text: COULD NOT DETERMINE |
| `whether` | `F47257` (+5.78 s) | Gauges | text: WHETHER THE BANG |
| `bang` | `F47285` (+6.25 s) | Gauges | text: WHETHER THE BANG |
| `caused` | `F47312` (+6.70 s) | Gauges | text: CAUSED THE CHANGE |
| `change` | `F47341` (+7.18 s) | Gauges | text: CAUSED THE CHANGE |

**150** · Why would a damaged hull bend only near the surface?

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Why` | `F47404` (+0.02 s) | Mechanism | text: Why would a |
| `damaged` | `F47438` (+0.58 s) | Mechanism | <Wd f={f} at={wf(150, 'damaged')} lightAt={wf(150, 'hull')} tone={colors.red}>da |
| `hull` | `F47471` (+1.13 s) | Mechanism | <Wd f={f} at={wf(150, 'damaged')} lightAt={wf(150, 'hull')} tone={colors.red}>da |
| `bend` | `F47498` (+1.58 s) | Mechanism | <Wd f={f} at={wf(150, 'bend')} tone={colors.amber}>bend </Wd> |
| `only` | `F47523` (+2.00 s) | Mechanism | <Wd f={f} at={wf(150, 'only')} lightAt={wf(150, 'surface')} base={colors.ink}>on |
| `surface` | `F47568` (+2.75 s) | Mechanism | <Wd f={f} at={wf(150, 'only')} lightAt={wf(150, 'surface')} base={colors.ink}>on |

**151** · The N - T - S - B found long voids in the bond between the first and second layers, and between the third and fourth.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `found` | `F47702` (+1.03 s) | Mechanism | text: N-T-S-B: |
| `long` | `F47726` (+1.43 s) | Mechanism | text: LONG VOIDS IN THE BOND · |
| `voids` | `F47746` (+1.77 s) | (scene list) | sound effect cue |
| `bond` | `F47788` (+2.47 s) | Mechanism | hl= · <RecordPage set="mir" start={sf(151) - 14} end={ef(151) + 20} hl={[{ke |
| `first` | `F47841` (+3.35 s) | Mechanism | text: LAYERS 1–2 |
| `second` | `F47875` (+3.92 s) | Mechanism | text: LAYERS 1–2 |
| `layers` | `F47899` (+4.32 s) | Mechanism | text: LAYERS 1–2 |
| `third` | `F47977` (+5.62 s) | Mechanism | text: LAYERS 3–4 |
| `fourth` | `F48005` (+6.08 s) | Mechanism | text: LAYERS 3–4 |

**152** · Where a layer separates at the end of the cylinder, it can move on its own under light pressure.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Where` | `F48060` (+0.02 s) | Mechanism | text: WHERE A LAYER SEPARATES |
| `layer` | `F48079` (+0.33 s) | Mechanism | lead · <g key={j} opacity={lead(f, wf(152, 'layer'), 10)}> |
| `separates` | `F48101` (+0.70 s) | (scene list) | sound effect cue |
| `end` | `F48149` (+1.50 s) | Mechanism | text: AT THE CYLINDER'S END, |
| `cylinder` | `F48173` (+1.90 s) | Mechanism | text: AT THE CYLINDER'S END, |
| `move` | `F48240` (+3.02 s) | Mechanism | text: IT CAN MOVE ON ITS OWN |
| `own` | `F48277` (+3.63 s) | Mechanism | text: IT CAN MOVE ON ITS OWN |
| `light` | `F48309` (+4.17 s) | Mechanism | text: UNDER LIGHT PRESSURE |
| `pressure` | `F48327` (+4.47 s) | Mechanism | text: UNDER LIGHT PRESSURE |

**153** · Deeper down, it found, the layers respond like the intact hull.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Deeper` | `F48384` (+0.00 s) | Mechanism | text: DEEPER DOWN: |
| `down` | `F48406` (+0.37 s) | Mechanism | text: DEEPER DOWN: |
| `found` | `F48451` (+1.12 s) | Mechanism | text: THE LAYERS / RESPOND LIKE THE INTACT HULL |
| `layers` | `F48499` (+1.92 s) | Mechanism | text: THE LAYERS / RESPOND LIKE THE INTACT HULL |
| `respond` | `F48520` (+2.27 s) | Mechanism | text: THE LAYERS / RESPOND LIKE THE INTACT HULL |
| `intact` | `F48585` (+3.35 s) | Mechanism | text: THE LAYERS / RESPOND LIKE THE INTACT HULL |

**154** · Titan made three more dives that July.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Titan` | `F48667` (+0.00 s) | Mechanism | lead · <div style={{position: 'absolute', left: L, top: 690, width: 1320, ... |
| `three` | `F48713` (+0.77 s) | Mechanism | text: 3 MORE DIVES · / JULY 2022 |
| `dives` | `F48748` (+1.35 s) | Mechanism | text: 3 MORE DIVES · / JULY 2022 |
| `July` | `F48784` (+1.95 s) | Mechanism | text: 3 MORE DIVES · / JULY 2022 |

**155** · Two of them, eighty-one and eighty-two, still reached the Titanic, which the N - T - S - B said showed the first damage was not enough to make it implode.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Two` | `F48836` (+0.02 s) | Mechanism | text: TWO: / 81 |
| `eighty-one` | `F48886` (+0.85 s) | Mechanism | text: TWO: / 81 |
| `eighty-two` | `F48930` (+1.58 s) | Mechanism | <Wd f={f} at={wf(155, 'eighty-two')} tone={colors.amber}>· 82 </Wd> |
| `reached` | `F49006` (+2.85 s) | Mechanism | text: REACHED THE TITANIC |
| `Titanic` | `F49031` (+3.27 s) | Mechanism | text: REACHED THE TITANIC |
| `which` | `F49085` (+4.17 s) | Mechanism | text: N-T-S-B: / FIRST DAMAGE |
| `said` | `F49155` (+5.33 s) | Mechanism | text: N-T-S-B: / FIRST DAMAGE |
| `first` | `F49202` (+6.12 s) | Mechanism | text: N-T-S-B: / FIRST DAMAGE |
| `damage` | `F49222` (+6.45 s) | Mechanism | text: N-T-S-B: / FIRST DAMAGE |
| `not` | `F49261` (+7.10 s) | Mechanism | text: NOT ENOUGH TO IMPLODE |
| `implode` | `F49323` (+8.13 s) | Mechanism | text: NOT ENOUGH TO IMPLODE |

**156** · A delamination is not a crack through the wall.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `not` | `F49461` (+1.28 s) | Mechanism | text: NOT A CRACK THROUGH THE WALL |
| `wall` | `F49531` (+2.45 s) | Mechanism | text: NOT A CRACK THROUGH THE WALL |

**157** · But the wall was no longer what it had been.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `no` | `F49643` (+0.98 s) | Mechanism | text: NO LONGER WHAT IT HAD BEEN |
| `been` | `F49714` (+2.17 s) | Mechanism | text: NO LONGER WHAT IT HAD BEEN |

**158** · The N - T - S - B's finding: because its analysis was flawed, OceanGate was unable to identify that the Titan was damaged after dive eighty, and that it needed to be immediately removed from service.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `finding` | `F49826` (+1.07 s) | Mechanism | text: N-T-S-B: / ANALYSIS |
| `because` | `F49885` (+2.05 s) | Mechanism | text: N-T-S-B: / ANALYSIS |
| `analysis` | `F49917` (+2.58 s) | Mechanism | text: N-T-S-B: / ANALYSIS |
| `flawed` | `F49967` (+3.42 s) | Mechanism | text: N-T-S-B: / ANALYSIS |
| `OceanGate` | `F50015` (+4.22 s) | Mechanism | text: N-T-S-B: / ANALYSIS |
| `unable` | `F50062` (+5.00 s) | Mechanism | text: UNABLE TO IDENTIFY |
| `identify` | `F50100` (+5.63 s) | Mechanism | text: UNABLE TO IDENTIFY |
| `Titan` | `F50158` (+6.60 s) | Mechanism | text: DAMAGE / AFTER DIVE 80 · |
| `damaged` | `F50192` (+7.17 s) | Mechanism | text: DAMAGE / AFTER DIVE 80 · |
| `after` | `F50229` (+7.78 s) | Mechanism | text: DAMAGE / AFTER DIVE 80 · |
| `eighty` | `F50278` (+8.60 s) | Mechanism | text: DAMAGE / AFTER DIVE 80 · |
| `needed` | `F50338` (+9.60 s) | Mechanism | text: REMOVE / FROM SERVICE, IMMEDIATELY |
| `immediately` | `F50375` (+10.22 s) | (scene list) | sound effect cue |
| `service` | `F50462` (+11.67 s) | Mechanism | text: REMOVE / FROM SERVICE, IMMEDIATELY |

