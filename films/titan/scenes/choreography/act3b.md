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
| `Every` | `F39350` (+0.02 s) | RePlot | text: EVERY DIVE: ITS OWN SHAPE, |
| `shape` | `F39432` (+1.38 s) | RePlot | text: EVERY DIVE: ITS OWN SHAPE, |
| `pace` | `F39487` (+2.30 s) | RePlot | text: ITS OWN PACE, |
| `stops` | `F39551` (+3.37 s) | RePlot | text: ITS OWN STOPS |

**121** · Laid side by side, the dives are hard to compare.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Laid` | `F39608` (+0.03 s) | RePlot | text: SIDE BY SIDE: |
| `side` | `F39625` (+0.32 s) | RePlot | text: SIDE BY SIDE: |
| `dives` | `F39697` (+1.52 s) | RePlot | text: THE DIVES: / HARD TO COMPARE |
| `hard` | `F39723` (+1.95 s) | RePlot | text: THE DIVES: / HARD TO COMPARE |
| `compare` | `F39745` (+2.32 s) | RePlot | text: THE DIVES: / HARD TO COMPARE |

**122** · The N - T - S - B said a more appropriate way was to plot strain against depth directly, because depth sets the pressure.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `N` | `F39829` (+0.25 s) | RePlot | <div style={{position: 'absolute', top: 0, opacity: vis(f, wf(122, 'n'), wf(124, |
| `more` | `F39891` (+1.28 s) | RePlot | text: A MORE APPROPRIATE WAY: |
| `appropriate` | `F39903` (+1.48 s) | RePlot | text: A MORE APPROPRIATE WAY: |
| `plot` | `F39979` (+2.75 s) | RePlot | text: STRAIN |
| `strain` | `F40001` (+3.12 s) | RePlot | text: STRAIN |
| `against` | `F40028` (+3.57 s) | RePlot | text: AGAINST DEPTH |
| `depth` | `F40054` (+4.00 s) | RePlot | text: AGAINST DEPTH |
| `because` | `F40131` (+5.28 s) | RePlot | text: BECAUSE |
| `depth` | `F40152` (+5.63 s) | RePlot | text: DEPTH |
| `sets` | `F40179` (+6.08 s) | RePlot | text: SETS THE PRESSURE |
| `pressure` | `F40204` (+6.50 s) | RePlot | text: SETS THE PRESSURE |

**123** · So here is the same data, against depth.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `same` | `F40315` (+0.87 s) | RePlot | text: THE SAME DATA |
| `data` | `F40333` (+1.17 s) | RePlot | text: THE SAME DATA |
| `against` | `F40370` (+1.78 s) | RePlot | <Wd f={f} at={wf(123, 'against')} lightAt={wf(123, 'depth')} tone={colors.cyan}  |
| `depth` | `F40395` (+2.20 s) | (scene list) | sound effect cue |

**124** · Dive seventy-five, a straight line.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Dive` | `F40530` (+0.00 s) | RePlot | lead · <div style={{position: 'absolute', top: 0, opacity: lead(f, wf(124, 'd |
| `seventy-five` | `F40548` (+0.30 s) | RePlot | const named = [wf(124, 'seventy-five'), wf(125, 'eighty'), wf(126, 'eighty-one') |
| `straight` | `F40623` (+1.55 s) | RePlot | {i === 0 ? (f >= wf(124, 'straight') ? 'STRAIGHT' : '') : i === 1 ? (f >= wf(125 |

**125** · Dive eighty, the same straight line, until the event at its very end.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `eighty` | `F40712` (+0.38 s) | RePlot | const named = [wf(124, 'seventy-five'), wf(125, 'eighty'), wf(126, 'eighty-one') |
| `straight` | `F40782` (+1.55 s) | RePlot | {i === 0 ? (f >= wf(124, 'straight') ? 'STRAIGHT' : '') : i === 1 ? (f >= wf(125 |
| `event` | `F40864` (+2.92 s) | RePlot | lead · const event = lead(f, wf(125, 'event'), 8) * (1 - z); |
| `end` | `F40930` (+4.02 s) | RePlot | {i === 0 ? (f >= wf(124, 'straight') ? 'STRAIGHT' : '') : i === 1 ? (f >= wf(125 |

**126** · Dive eighty-one.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `eighty-one` | `F40985` (+0.35 s) | (scene list) | sound effect cue |

**127** · Dive eighty-two.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `eighty-two` | `F41063` (+0.30 s) | (scene list) | sound effect cue |

**128** · Dive eighty-three.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `eighty-three` | `F41143` (+0.32 s) | (scene list) | sound effect cue |

**129** · In the first five hundred metres, every one of them bends away.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `first` | `F41226` (+0.27 s) | RePlot | text: THE FIRST 500 M: |
| `five` | `F41250` (+0.67 s) | RePlot | lead · const band = lead(f, wf(129, 'five'), 14) * (1 - lead(f, wf(130, 'fitt |
| `hundred` | `F41268` (+0.97 s) | RePlot | text: THE FIRST 500 M: |
| `every` | `F41327` (+1.95 s) | RePlot | text: EVERY ONE OF THEM |
| `one` | `F41352` (+2.37 s) | RePlot | text: EVERY ONE OF THEM |
| `bends` | `F41381` (+2.85 s) | RePlot | text: BENDS AWAY |
| `away` | `F41402` (+3.20 s) | RePlot | text: BENDS AWAY |

**130** · To put a number on it, the N - T - S - B fitted a line to the shallowest stretch, from fifteen to a hundred and fifty metres: metres of depth for each millivolt from the gauge.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `number` | `F41477` (+0.40 s) | RePlot | lead · <div style={{...T(26, {color: colors.ink, letterSpacing: 2}), opacity: |
| `N` | `F41544` (+1.52 s) | RePlot | text: THE NTSB: / A LINE FITTED |
| `fitted` | `F41591` (+2.30 s) | RePlot | text: THE NTSB: / A LINE FITTED |
| `line` | `F41617` (+2.73 s) | RePlot | text: THE NTSB: / A LINE FITTED |
| `shallowest` | `F41652` (+3.32 s) | RePlot | text: TO THE SHALLOWEST STRETCH: |
| `stretch` | `F41684` (+3.85 s) | RePlot | text: TO THE SHALLOWEST STRETCH: |
| `fifteen` | `F41738` (+4.75 s) | RePlot | text: 15– / 50 M |
| `hundred` | `F41785` (+5.53 s) | RePlot | text: 15– / 50 M |
| `fifty` | `F41812` (+5.98 s) | RePlot | text: 15– / 50 M |
| `metres` | `F41879` (+7.10 s) | RePlot | <Wd f={f} at={wf(130, 'metres', 1)} lightAt={wf(130, 'depth')}> · METRES OF DEPT |
| `depth` | `F41909` (+7.60 s) | RePlot | <Wd f={f} at={wf(130, 'metres', 1)} lightAt={wf(130, 'depth')}> · METRES OF DEPT |
| `each` | `F41943` (+8.17 s) | RePlot | text: PER mV FROM THE GAUGE |
| `millivolt` | `F41959` (+8.43 s) | RePlot | text: M PER mV |
| `gauge` | `F42010` (+9.28 s) | RePlot | text: PER mV FROM THE GAUGE |

**131** · Before the event: five point zero zero, and four point seven four.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Before` | `F42061` (+0.00 s) | RePlot | lead · <div style={{position: 'absolute', left: 290, top: 140, width: 960, .. |
| `five` | `F42132` (+1.18 s) | RePlot | text: 75 / 5 |
| `point` | `F42151` (+1.50 s) | RePlot | text: 75 / 5 |
| `zero` | `F42169` (+1.80 s) | RePlot | text: 75 / 5 |
| `zero` | `F42190` (+2.15 s) | RePlot | text: 75 / 5 |
| `four` | `F42241` (+3.00 s) | RePlot | text: 80 / 4 |
| `point` | `F42257` (+3.27 s) | RePlot | text: 80 / 4 |
| `seven` | `F42273` (+3.53 s) | RePlot | text: 80 / 4 |
| `four` | `F42295` (+3.90 s) | RePlot | text: 80 / 4 |

**132** · After it: eight point seven six, eight point zero nine, eight point seven seven.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `After` | `F42342` (+0.07 s) | RePlot | text: AFTER IT |
| `eight` | `F42391` (+0.88 s) | RePlot | text: 81 / 8 |
| `point` | `F42403` (+1.08 s) | RePlot | text: 81 / 8 |
| `seven` | `F42420` (+1.37 s) | RePlot | text: 81 / 8 |
| `six` | `F42442` (+1.73 s) | (scene list) | sound effect cue |
| `eight` | `F42484` (+2.43 s) | RePlot | text: 82 / 8 |
| `point` | `F42495` (+2.62 s) | RePlot | text: 82 / 8 |
| `zero` | `F42512` (+2.90 s) | RePlot | text: 82 / 8 |
| `nine` | `F42533` (+3.25 s) | RePlot | text: 82 / 8 |
| `eight` | `F42574` (+3.93 s) | RePlot | text: 83 / 8 |
| `point` | `F42585` (+4.12 s) | RePlot | text: 83 / 8 |
| `seven` | `F42605` (+4.45 s) | RePlot | text: 83 / 8 |
| `seven` | `F42626` (+4.80 s) | RePlot | text: 83 / 8 |

**133** · Same gauge, same hull, same sea.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Same` | `F42679` (+0.10 s) | RePlot | lead · <div style={{marginTop: 22, ...T(30, {}), lineHeight: 1.4, opacity: le |
| `gauge` | `F42698` (+0.42 s) | RePlot | text: SAME GAUGE · |
| `hull` | `F42759` (+1.43 s) | RePlot | text: SAME HULL · |
| `sea` | `F42820` (+2.45 s) | RePlot | text: SAME SEA |

**134** · A response that had changed by about three quarters.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `response` | `F42913` (+0.12 s) | RePlot | text: RESPONSE CHANGED |
| `changed` | `F42965` (+0.98 s) | RePlot | text: RESPONSE CHANGED |
| `three` | `F43022` (+1.93 s) | RePlot | bump · <span style={{...T(64, {color: f >= wf(134, 'quarters') + LAND ? color |
| `quarters` | `F43041` (+2.25 s) | (scene list) | sound effect cue |

**135** · Could OceanGate have seen this at the time?

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Could` | `F43104` (+0.00 s) | Hindsight | text: COULD OCEANGATE HAVE SEEN THIS? · |
| `seen` | `F43163` (+0.98 s) | Hindsight | text: COULD OCEANGATE HAVE SEEN THIS? · |

**136** · The Coast Guard board found that OceanGate had all the data it needed to show the hull's behaviour had changed, and that analysing strain against elapsed time failed to reveal it.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Coast` | `F43277` (+0.12 s) | Hindsight | text: THE COAST GUARD BOARD: |
| `board` | `F43312` (+0.70 s) | Hindsight | text: THE COAST GUARD BOARD: |
| `found` | `F43333` (+1.05 s) | Hindsight | hl= · <RecordPage set="roi" start={sf(135) - 14} end={ef(136) + 24} hl={[{ke |
| `all` | `F43414` (+2.40 s) | Hindsight | text: ALL THE DATA / TO SHOW |
| `data` | `F43433` (+2.72 s) | Hindsight | text: ALL THE DATA / TO SHOW |
| `needed` | `F43462` (+3.20 s) | Hindsight | text: ALL THE DATA / TO SHOW |
| `show` | `F43497` (+3.78 s) | Hindsight | text: ALL THE DATA / TO SHOW |
| `hull's` | `F43520` (+4.17 s) | Hindsight | text: ALL THE DATA / TO SHOW |
| `changed` | `F43579` (+5.15 s) | Hindsight | text: ALL THE DATA / TO SHOW |
| `analysing` | `F43642` (+6.20 s) | Hindsight | text: ALL THE DATA / TO SHOW |
| `strain` | `F43681` (+6.85 s) | Hindsight | text: ALL THE DATA / TO SHOW |
| `elapsed` | `F43728` (+7.63 s) | (scene list) | sound effect cue |
| `time` | `F43753` (+8.05 s) | Hindsight | text: ELAPSED TIME |
| `failed` | `F43786` (+8.60 s) | Hindsight | text: FAILED TO REVEAL IT |
| `reveal` | `F43813` (+9.05 s) | Hindsight | text: FAILED TO REVEAL IT |

**137** · The timing that follows is our own reading of the record, not a finding of any report.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `timing` | `F43882` (+0.13 s) | Hindsight | text: THE TIMING THAT FOLLOWS: |
| `our` | `F43950` (+1.27 s) | (scene list) | sound effect cue |
| `reading` | `F43980` (+1.77 s) | Hindsight | text: OUR OWN READING |
| `not` | `F44053` (+2.98 s) | Hindsight | text: NOT A FINDING |
| `finding` | `F44069` (+3.25 s) | Hindsight | text: NOT A FINDING |
| `any` | `F44106` (+3.87 s) | Hindsight | text: OF ANY REPORT |
| `report` | `F44120` (+4.10 s) | Hindsight | text: OF ANY REPORT |

**138** · Brooks was right that there was no new jump.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Brooks` | `F44177` (+-0.02 s) | Hindsight | text: BROOKS WAS RIGHT: |
| `right` | `F44208` (+0.50 s) | Hindsight | text: BROOKS WAS RIGHT: |
| `no` | `F44257` (+1.32 s) | Hindsight | text: NO NEW JUMP |
| `jump` | `F44293` (+1.92 s) | Hindsight | text: NO NEW JUMP |

**139** · What changed was the slope, and against time a change in slope is hard to see.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `changed` | `F44347` (+0.20 s) | Hindsight | text: WHAT CHANGED WAS THE SLOPE · |
| `slope` | `F44405` (+1.17 s) | Hindsight | text: WHAT CHANGED WAS THE SLOPE · |
| `against` | `F44455` (+2.00 s) | Hindsight | text: AGAINST TIME, |
| `time` | `F44477` (+2.37 s) | Hindsight | text: AGAINST TIME, |
| `change` | `F44523` (+3.13 s) | Hindsight | text: A SLOPE CHANGE IS / HARD TO SEE |
| `slope` | `F44558` (+3.72 s) | Hindsight | text: A SLOPE CHANGE IS / HARD TO SEE |
| `hard` | `F44592` (+4.28 s) | Hindsight | text: A SLOPE CHANGE IS / HARD TO SEE |
| `see` | `F44621` (+4.77 s) | Hindsight | text: A SLOPE CHANGE IS / HARD TO SEE |

**140** · Dive eighty itself shows nothing until its last minutes.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Dive` | `F44666` (+0.00 s) | Hindsight | text: DIVE 80 ITSELF: |
| `eighty` | `F44689` (+0.38 s) | Hindsight | {d: '15 JUL', dive: '80', at: wf(140, 'eighty'), tone: '#7dd3fc', note: 'BANG ·  |
| `itself` | `F44707` (+0.68 s) | Hindsight | text: DIVE 80 ITSELF: |
| `nothing` | `F44765` (+1.65 s) | Hindsight | text: NOTHING UNTIL |
| `until` | `F44789` (+2.05 s) | Hindsight | text: NOTHING UNTIL |
| `last` | `F44815` (+2.48 s) | Hindsight | text: ITS LAST MINUTES · |
| `minutes` | `F44837` (+2.85 s) | Hindsight | text: ITS LAST MINUTES · |

**141** · In the N - T - S - B's plots, the bend first appears in dive eighty-one.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `N` | `F44910` (+0.48 s) | Hindsight | text: NTSB PLOTS: / BEND FIRST |
| `plots` | `F44968` (+1.45 s) | Hindsight | text: NTSB PLOTS: / BEND FIRST |
| `bend` | `F45029` (+2.47 s) | Hindsight | text: NTSB PLOTS: / BEND FIRST |
| `first` | `F45051` (+2.83 s) | Hindsight | text: NTSB PLOTS: / BEND FIRST |
| `appears` | `F45073` (+3.20 s) | Hindsight | text: NTSB PLOTS: / BEND FIRST |
| `eighty-one` | `F45138` (+4.28 s) | (scene list) | sound effect cue |

**142** · That data was on the company's computer after that dive.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `data` | `F45218` (+0.27 s) | Hindsight | text: THAT DATA: ON THE COMPANY'S COMPUTER |
| `computer` | `F45285` (+1.38 s) | Hindsight | text: THAT DATA: ON THE COMPANY'S COMPUTER |
| `after` | `F45329` (+2.12 s) | Hindsight | text: AFTER DIVE 81 |
| `dive` | `F45363` (+2.68 s) | Hindsight | text: AFTER DIVE 81 |

**143** · Plotted against depth, it would have shown the bend before dive eighty-two, three days later, and before dive eighty-three.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Plotted` | `F45407` (+0.00 s) | Hindsight | text: PLOTTED AGAINST DEPTH: |
| `depth` | `F45452` (+0.75 s) | Hindsight | text: PLOTTED AGAINST DEPTH: |
| `shown` | `F45511` (+1.73 s) | Hindsight | text: THE BEND, |
| `bend` | `F45532` (+2.08 s) | Hindsight | text: THE BEND, |
| `before` | `F45552` (+2.42 s) | Hindsight | text: BEFORE DIVE 82, |
| `eighty-two` | `F45602` (+3.25 s) | (scene list) | sound effect cue |
| `three` | `F45652` (+4.08 s) | Hindsight | text: 3 DAYS LATER, |
| `days` | `F45669` (+4.37 s) | Hindsight | text: 3 DAYS LATER, |
| `later` | `F45686` (+4.65 s) | Hindsight | {d: '22 JUL', dive: '82', at: wf(143, 'eighty-two'), tone: '#fb923c', note: 'DIV |
| `before` | `F45740` (+5.55 s) | Hindsight | text: AND BEFORE 83 |
| `eighty-three` | `F45782` (+6.25 s) | Hindsight | text: AND BEFORE 83 |

**144** · And it was not a faulty gauge.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `not` | `F45873` (+0.47 s) | Gauges | text: NOT A FAULTY |
| `faulty` | `F45894` (+0.82 s) | Gauges | text: NOT A FAULTY |
| `gauge` | `F45922` (+1.28 s) | Gauges | text: GAUGE |

**145** · Deeper down, the curves still match, which the N - T - S - B said shows the gauges had not changed.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Deeper` | `F45985` (+0.00 s) | Gauges | text: DEEPER DOWN: |
| `down` | `F46005` (+0.33 s) | Gauges | text: DEEPER DOWN: |
| `curves` | `F46045` (+1.00 s) | Gauges | text: THE CURVES STILL MATCH |
| `match` | `F46095` (+1.83 s) | Gauges | text: THE CURVES STILL MATCH |
| `which` | `F46148` (+2.72 s) | Gauges | <Note o={vis(f, wf(145, 'which') - 4, ef(146) + 14)} tone={colors.red}> |
| `N` | `F46177` (+3.20 s) | Gauges | text: NTSB: |
| `said` | `F46224` (+3.98 s) | Gauges | text: NTSB: |
| `gauges` | `F46275` (+4.83 s) | (scene list) | sound effect cue |
| `changed` | `F46332` (+5.78 s) | Gauges | text: THE GAUGES HAD NOT CHANGED · |

**146** · The hull had.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `hull` | `F46404` (+0.18 s) | Gauges | text: THE HULL HAD |
| `had` | `F46431` (+0.63 s) | (scene list) | sound effect cue |

**147** · Canada's investigators later ran the same test on their own.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Canada's` | `F46492` (+0.00 s) | Gauges | text: CANADA'S INVESTIGATORS, |
| `investigators` | `F46521` (+0.48 s) | Gauges | text: CANADA'S INVESTIGATORS, |
| `later` | `F46577` (+1.42 s) | Gauges | text: LATER, |
| `ran` | `F46599` (+1.78 s) | Gauges | text: RAN THE SAME TEST ON THEIR OWN |
| `own` | `F46685` (+3.22 s) | Gauges | text: RAN THE SAME TEST ON THEIR OWN |

**148** · They found the slope near the surface on the nineteenth of July nearly double the slope for the whole dive.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `slope` | `F46766` (+0.58 s) | Gauges | text: SLOPE NEAR THE SURFACE |
| `surface` | `F46813` (+1.37 s) | Gauges | text: SLOPE NEAR THE SURFACE |
| `nineteenth` | `F46854` (+2.05 s) | Gauges | DatePill · <DatePill f={f} fps={fps} day={19} month={7} year={2022} dayWord={wf(1 |
| `July` | `F46893` (+2.70 s) | Gauges | DatePill · <DatePill f={f} fps={fps} day={19} month={7} year={2022} dayWord={wf(1 |
| `nearly` | `F46931` (+3.33 s) | Gauges | bump · <span style={{...T(80, {color: f >= wf(148, 'double') + LAND ? colors. |
| `double` | `F46961` (+3.83 s) | (scene list) | sound effect cue |
| `whole` | `F47034` (+5.05 s) | Gauges | text: NEARLY DOUBLE / THE WHOLE-DIVE SLOPE |
| `dive` | `F47054` (+5.38 s) | Gauges | text: NEARLY DOUBLE / THE WHOLE-DIVE SLOPE |

**149** · They also found a smaller bend a year earlier, in August twenty twenty-one, and could not determine whether the bang caused the change.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `smaller` | `F47162` (+0.95 s) | Gauges | text: A SMALLER BEND · |
| `bend` | `F47189` (+1.40 s) | Gauges | text: A SMALLER BEND · |
| `year` | `F47214` (+1.82 s) | Gauges | text: A YEAR EARLIER |
| `earlier` | `F47233` (+2.13 s) | Gauges | text: A YEAR EARLIER |
| `August` | `F47286` (+3.02 s) | Gauges | text: 05 AUG 2021 |
| `twenty-one` | `F47328` (+3.72 s) | Gauges | text: 05 AUG 2021 |
| `could` | `F47395` (+4.83 s) | Gauges | text: COULD NOT DETERMINE |
| `determine` | `F47419` (+5.23 s) | Gauges | text: COULD NOT DETERMINE |
| `whether` | `F47451` (+5.77 s) | Gauges | text: WHETHER THE BANG |
| `bang` | `F47479` (+6.23 s) | Gauges | text: WHETHER THE BANG |
| `caused` | `F47507` (+6.70 s) | Gauges | text: CAUSED THE CHANGE |
| `change` | `F47535` (+7.17 s) | Gauges | text: CAUSED THE CHANGE |

**150** · Why would a damaged hull bend only near the surface?

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Why` | `F47599` (+0.02 s) | Mechanism | text: Why would a |
| `damaged` | `F47632` (+0.57 s) | Mechanism | <Wd f={f} at={wf(150, 'damaged')} lightAt={wf(150, 'hull')} tone={colors.red}>da |
| `hull` | `F47664` (+1.10 s) | Mechanism | <Wd f={f} at={wf(150, 'damaged')} lightAt={wf(150, 'hull')} tone={colors.red}>da |
| `bend` | `F47693` (+1.58 s) | Mechanism | <Wd f={f} at={wf(150, 'bend')} tone={colors.amber}>bend </Wd> |
| `only` | `F47718` (+2.00 s) | Mechanism | <Wd f={f} at={wf(150, 'only')} lightAt={wf(150, 'surface')} base={colors.ink}>on |
| `surface` | `F47762` (+2.73 s) | Mechanism | <Wd f={f} at={wf(150, 'only')} lightAt={wf(150, 'surface')} base={colors.ink}>on |

**151** · The N - T - S - B found long voids in the bond between the first and second layers, and between the third and fourth.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `found` | `F47896` (+1.03 s) | Mechanism | text: NTSB: |
| `long` | `F47919` (+1.42 s) | Mechanism | text: LONG VOIDS IN THE BOND · |
| `voids` | `F47940` (+1.77 s) | (scene list) | sound effect cue |
| `bond` | `F47983` (+2.48 s) | Mechanism | hl= · <RecordPage set="mir" start={sf(151) - 14} end={ef(151) + 20} hl={[{ke |
| `first` | `F48036` (+3.37 s) | Mechanism | text: LAYERS 1–2 |
| `second` | `F48069` (+3.92 s) | Mechanism | text: LAYERS 1–2 |
| `layers` | `F48093` (+4.32 s) | Mechanism | text: LAYERS 1–2 |
| `third` | `F48172` (+5.63 s) | Mechanism | text: LAYERS 3–4 |
| `fourth` | `F48199` (+6.08 s) | Mechanism | text: LAYERS 3–4 |

**152** · Where a layer separates at the end of the cylinder, it can move on its own under light pressure.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Where` | `F48253` (+0.00 s) | Mechanism | text: WHERE A LAYER SEPARATES |
| `layer` | `F48274` (+0.35 s) | Mechanism | lead · <g key={j} opacity={lead(f, wf(152, 'layer'), 10)}> |
| `separates` | `F48295` (+0.70 s) | (scene list) | sound effect cue |
| `end` | `F48344` (+1.52 s) | Mechanism | text: AT THE CYLINDER'S END, |
| `cylinder` | `F48368` (+1.92 s) | Mechanism | text: AT THE CYLINDER'S END, |
| `move` | `F48434` (+3.02 s) | Mechanism | text: IT CAN MOVE ON ITS OWN |
| `own` | `F48470` (+3.62 s) | Mechanism | text: IT CAN MOVE ON ITS OWN |
| `light` | `F48504` (+4.18 s) | Mechanism | text: UNDER LIGHT PRESSURE |
| `pressure` | `F48522` (+4.48 s) | Mechanism | text: UNDER LIGHT PRESSURE |

**153** · Deeper down, it found, the layers respond like the intact hull.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Deeper` | `F48579` (+0.00 s) | Mechanism | text: DEEPER DOWN: |
| `down` | `F48600` (+0.35 s) | Mechanism | text: DEEPER DOWN: |
| `found` | `F48645` (+1.10 s) | Mechanism | text: THE LAYERS / RESPOND LIKE THE INTACT HULL |
| `layers` | `F48693` (+1.90 s) | Mechanism | text: THE LAYERS / RESPOND LIKE THE INTACT HULL |
| `respond` | `F48715` (+2.27 s) | Mechanism | text: THE LAYERS / RESPOND LIKE THE INTACT HULL |
| `intact` | `F48780` (+3.35 s) | Mechanism | text: THE LAYERS / RESPOND LIKE THE INTACT HULL |

**154** · Titan made three more dives that July.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Titan` | `F48861` (+0.00 s) | Mechanism | lead · <div style={{position: 'absolute', left: L, top: 690, width: 1320, ... |
| `three` | `F48907` (+0.77 s) | Mechanism | text: 3 MORE DIVES · / JULY 2022 |
| `dives` | `F48942` (+1.35 s) | Mechanism | text: 3 MORE DIVES · / JULY 2022 |
| `July` | `F48979` (+1.97 s) | Mechanism | text: 3 MORE DIVES · / JULY 2022 |

**155** · Two of them, eighty-one and eighty-two, still reached the Titanic, which the N - T - S - B said showed the first damage was not enough to make it implode.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Two` | `F49030` (+0.00 s) | Mechanism | text: TWO: / 81 |
| `eighty-one` | `F49080` (+0.83 s) | Mechanism | text: TWO: / 81 |
| `eighty-two` | `F49125` (+1.58 s) | Mechanism | <Wd f={f} at={wf(155, 'eighty-two')} tone={colors.amber}>· 82 </Wd> |
| `reached` | `F49200` (+2.83 s) | Mechanism | text: REACHED THE TITANIC |
| `Titanic` | `F49226` (+3.27 s) | Mechanism | text: REACHED THE TITANIC |
| `which` | `F49280` (+4.17 s) | Mechanism | text: NTSB: / FIRST DAMAGE |
| `said` | `F49349` (+5.32 s) | Mechanism | text: NTSB: / FIRST DAMAGE |
| `first` | `F49396` (+6.10 s) | Mechanism | text: NTSB: / FIRST DAMAGE |
| `damage` | `F49417` (+6.45 s) | Mechanism | text: NTSB: / FIRST DAMAGE |
| `not` | `F49455` (+7.08 s) | Mechanism | text: NOT ENOUGH TO IMPLODE |
| `implode` | `F49518` (+8.13 s) | Mechanism | text: NOT ENOUGH TO IMPLODE |

**156** · A delamination is not a crack through the wall.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `not` | `F49656` (+1.28 s) | Mechanism | text: NOT A CRACK THROUGH THE WALL |
| `wall` | `F49726` (+2.45 s) | Mechanism | text: NOT A CRACK THROUGH THE WALL |

**157** · But the wall was no longer what it had been.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `no` | `F49837` (+0.98 s) | Mechanism | text: NO LONGER WHAT IT HAD BEEN |
| `been` | `F49908` (+2.17 s) | Mechanism | text: NO LONGER WHAT IT HAD BEEN |

**158** · The N - T - S - B's finding: because its analysis was flawed, OceanGate was unable to identify that the Titan was damaged after dive eighty, and that it needed to be immediately removed from service.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `finding` | `F50020` (+1.05 s) | Mechanism | text: NTSB: / ANALYSIS |
| `because` | `F50079` (+2.03 s) | Mechanism | text: NTSB: / ANALYSIS |
| `analysis` | `F50112` (+2.58 s) | Mechanism | text: NTSB: / ANALYSIS |
| `flawed` | `F50161` (+3.40 s) | Mechanism | text: NTSB: / ANALYSIS |
| `OceanGate` | `F50209` (+4.20 s) | Mechanism | text: NTSB: / ANALYSIS |
| `unable` | `F50256` (+4.98 s) | Mechanism | text: UNABLE TO IDENTIFY |
| `identify` | `F50294` (+5.62 s) | Mechanism | text: UNABLE TO IDENTIFY |
| `Titan` | `F50352` (+6.58 s) | Mechanism | text: DAMAGE / AFTER DIVE 80 · |
| `damaged` | `F50387` (+7.17 s) | Mechanism | text: DAMAGE / AFTER DIVE 80 · |
| `after` | `F50423` (+7.77 s) | Mechanism | text: DAMAGE / AFTER DIVE 80 · |
| `eighty` | `F50472` (+8.58 s) | Mechanism | text: DAMAGE / AFTER DIVE 80 · |
| `needed` | `F50532` (+9.58 s) | Mechanism | text: REMOVE / FROM SERVICE, IMMEDIATELY |
| `immediately` | `F50570` (+10.22 s) | (scene list) | sound effect cue |
| `service` | `F50656` (+11.65 s) | Mechanism | text: REMOVE / FROM SERVICE, IMMEDIATELY |

