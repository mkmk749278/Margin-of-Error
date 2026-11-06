# Choreography index: Act 2

Word-level choreography (PLAYBOOK §10.6), **generated from the scene code** (`python3 scripts/choreo_index.py` from the film folder; re-run after
any edit) so it cannot drift from it. One row per word-locked event: the spoken trigger, its measured frame (60 fps) and offset
from the sentence start, the scene component, and what changes (the on-screen text that arrives, or the driving line of
code). Kit: `lib/remotion/Kinetic.tsx` and `remotion/beats.tsx` (`KeyLine` parts land on their words, `ChunkQuote` reveals a
record quote chunk by chunk, `WordLine` builds a title word by word). Kit for this film: `remotion/parts*.tsx`.
Sync audit: `review/sync_audit.md`.

**32** · Each end of each axle on a railcar turns inside a roller bearing, sealed and packed with grease.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `end` | `F8541` (+0.37 s) | Bearing | text: AXLE END |
| `axle` | `F8584` (+1.08 s) | (scene list) | {id: 'a2_bearing', from: sf(32) - 30, to: sf(35) + 14, C: Bearing, cues: [cue(wf |
| `railcar` | `F8620` (+1.68 s) | Bearing | <Pop f={f} fps={fps} on={wf(32, 'railcar')} style={{position: 'absolute', right: |
| `turns` | `F8672` (+2.55 s) | Bearing | rollersOn={wf(32, 'turns')} |
| `inside` | `F8696` (+2.95 s) | Bearing | cupOn={wf(32, 'inside')} |
| `roller` | `F8729` (+3.50 s) | Bearing | text: ROLLER BEARING |
| `sealed` | `F8797` (+4.63 s) | (scene list) | {id: 'a2_bearing', from: sf(32) - 30, to: sf(35) + 14, C: Bearing, cues: [cue(wf |
| `packed` | `F8834` (+5.25 s) | Bearing | greaseOn={wf(32, 'packed')} |
| `grease` | `F8867` (+5.80 s) | Bearing | text: GREASE |

**33** · When a bearing starts to fail, friction turns into heat.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `starts` | `F8974` (+0.67 s) | Bearing | lead · const jitter = lead(f, wf(33, 'starts'), 12); |
| `fail` | `F9004` (+1.17 s) | Bearing | <Pop f={f} fps={fps} on={wf(33, 'fail')} style={{position: 'absolute', right: 40 |
| `friction` | `F9050` (+1.93 s) | (scene list) | {id: 'a2_bearing', from: sf(32) - 30, to: sf(35) + 14, C: Bearing, cues: [cue(wf |
| `heat` | `F9117` (+3.05 s) | Bearing | lead · const heat = Math.max(0.3 * lead(f, wf(33, 'friction'), 16), lead(f, w |

**34** · So railroads line their tracks with detectors that look up at each bearing as it passes, and measure how much hotter it is than the air.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `So` | `F9179` (+0.05 s) | Bearing | tween · const shrink = tween(f, wf(34, 'so') - 6, wf(34, 'railroads') + 10, 0, |
| `railroads` | `F9193` (+0.28 s) | Bearing | tween · const shrink = tween(f, wf(34, 'so') - 6, wf(34, 'railroads') + 10, 0, |
| `tracks` | `F9257` (+1.35 s) | Bearing | text: DETECTORS ALONG THE TRACK |
| `detectors` | `F9291` (+1.92 s) | (scene list) | {id: 'a2_bearing', from: sf(32) - 30, to: sf(35) + 14, C: Bearing, cues: [cue(wf |
| `look` | `F9340` (+2.73 s) | Bearing | lead · <polygon points={`${dx - 10},228 ${dx - 34},${120} ${dx + 34},${120} $ |
| `each` | `F9374` (+3.30 s) | Bearing | {f >= wf(34, 'each') - 10 ? <rect x={wheelX - 18} y={142} width={36} height={36} |
| `passes` | `F9429` (+4.22 s) | Bearing | tween · const wheelX = tween(f, wf(34, 'each') - 10, wf(34, 'passes') + 20, 60 |
| `measure` | `F9496` (+5.33 s) | Bearing | text: HOW MUCH HOTTER |
| `hotter` | `F9544` (+6.13 s) | Bearing | text: HOW MUCH HOTTER |
| `air` | `F9607` (+7.18 s) | Bearing | text: THAN THE AIR |

**35** · On Norfolk Southern, three lines decided what happened next.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Norfolk` | `F9716` (+0.22 s) | LadderScene | text: NORFOLK SOUTHERN |
| `Southern` | `F9744` (+0.68 s) | LadderScene | text: NORFOLK SOUTHERN |
| `three` | `F9786` (+1.38 s) | LadderScene | text: 3 LINES |
| `lines` | `F9806` (+1.72 s) | LadderScene | axisOn={wf(35, 'lines')} |
| `decided` | `F9831` (+2.13 s) | LadderScene | <span style={T(36, {color: colors.ink, opacity: onW(f, wf(35, 'decided'), 10)})} |
| `next` | `F9902` (+3.32 s) | LadderScene | axisFlash={wf(35, 'next')} |

**36** · Ninety degrees above the air: an alert to the help desk, which watches the next readings.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Ninety` | `F9999` (+0.07 s) | (scene list) | {id: 'a2_ladder', from: sf(35) - 20, to: sf(45), C: LadderScene, cues: [cue(wf(3 |
| `air` | `F10076` (+1.35 s) | Bearing | text: NO MESSAGE TO THE CREW / THE DESK WATCHES THE NEXT READINGS |
| `alert` | `F10133` (+2.30 s) | Bearing | text: NO MESSAGE TO THE CREW / THE DESK WATCHES THE NEXT READINGS |
| `help` | `F10172` (+2.95 s) | Bearing | text: NO MESSAGE TO THE CREW / THE DESK WATCHES THE NEXT READINGS |
| `watches` | `F10238` (+4.05 s) | Bearing | text: NO MESSAGE TO THE CREW / THE DESK WATCHES THE NEXT READINGS |

**37** · One hundred and seventy: a message to the crew, who must slow down, and then stop to inspect.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `One` | `F10393` (+0.08 s) | Bearing | text: SLOW DOWN / THEN STOP TO INSPECT |
| `seventy` | `F10430` (+0.70 s) | (scene list) | {id: 'a2_ladder', from: sf(35) - 20, to: sf(45), C: LadderScene, cues: [cue(wf(3 |
| `message` | `F10513` (+2.08 s) | Bearing | text: SLOW DOWN / THEN STOP TO INSPECT |
| `crew` | `F10554` (+2.77 s) | Bearing | text: SLOW DOWN / THEN STOP TO INSPECT |
| `slow` | `F10614` (+3.77 s) | Bearing | text: SLOW DOWN / THEN STOP TO INSPECT |
| `stop` | `F10695` (+5.12 s) | Bearing | text: SLOW DOWN / THEN STOP TO INSPECT |

**38** · And a critical alarm, for which the crew must stop at once.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `critical` | `F10820` (+0.25 s) | (scene list) | {id: 'a2_ladder', from: sf(35) - 20, to: sf(45), C: LadderScene, cues: [cue(wf(3 |
| `alarm` | `F10849` (+0.73 s) | LadderScene | text: THE CREW: / STOP AT ONCE |
| `crew` | `F10928` (+2.05 s) | LadderScene | text: THE CREW: / STOP AT ONCE |
| `stop` | `F10963` (+2.63 s) | LadderScene | text: THE CREW: / STOP AT ONCE |

**39** · Before this accident, Norfolk Southern set that critical line at two hundred degrees.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Before` | `F11082` (+0.00 s) | LadderScene | <div style={{position: 'absolute', right: 140, top: 130, textAlign: 'right', opa |
| `accident` | `F11117` (+0.58 s) | LadderScene | text: THIS ACCIDENT |
| `Norfolk` | `F11174` (+1.53 s) | LadderScene | text: NORFOLK SOUTHERN SET |
| `critical` | `F11255` (+2.88 s) | LadderScene | {value: 200, at: wf(39, 'critical')}, |
| `two` | `F11313` (+3.85 s) | LadderScene | text: CRITICAL = 200°F |
| `hundred` | `F11330` (+4.13 s) | (scene list) | {id: 'a2_ladder', from: sf(35) - 20, to: sf(45), C: LadderScene, cues: [cue(wf(3 |
| `degrees` | `F11350` (+4.47 s) | LadderScene | text: THE CREW: / STOP AT ONCE |

**40** · At Salem the reading was one hundred and three.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Salem` | `F11442` (+0.22 s) | LadderScene | text: SALEM · 8:13 P.M. |
| `reading` | `F11494` (+1.08 s) | LadderScene | text: SALEM · 8:13 P.M. |
| `one` | `F11535` (+1.77 s) | Bearing | text: NO MESSAGE TO THE CREW / THE DESK WATCHES THE NEXT READINGS |
| `three` | `F11575` (+2.43 s) | (scene list) | {id: 'a2_ladder', from: sf(35) - 20, to: sf(45), C: LadderScene, cues: [cue(wf(3 |

**41** · Above the first line.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Above` | `F11657` (+0.05 s) | LadderScene | text: ABOVE THE FIRST LINE |
| `first` | `F11685` (+0.52 s) | LadderScene | {value: 90, at: wf(41, 'first')}, |

**42** · Below the second.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Below` | `F11754` (+0.00 s) | LadderScene | text: BELOW THE SECOND |
| `second` | `F11783` (+0.48 s) | LadderScene | {value: 170, at: wf(42, 'second')}, |

**43** · But the camera showed fire.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `camera` | `F11882` (+0.25 s) | LadderScene | <Card x={1270} y={640} w={520} h={250} o={onW(f, wf(43, 'camera'), 12)} accent={ |
| `showed` | `F11911` (+0.73 s) | LadderScene | text: SALEM CAMERA · FIRE ON THE L1 BEARING |
| `fire` | `F11935` (+1.13 s) | (scene list) | {id: 'a2_ladder', from: sf(35) - 20, to: sf(45), C: LadderScene, cues: [cue(wf(3 |

**44** · How could the bearing read so low?

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `How` | `F12015` (+0.02 s) | LadderScene | <div style={{position: 'absolute', right: 140, top: 130, textAlign: 'right', opa |
| `read` | `F12075` (+1.02 s) | LadderScene | text: READ |
| `low` | `F12108` (+1.57 s) | LadderScene | text: SO LOW? |

**45** · The detector is a pair of infrared sensors looking up from the track, and at Salem they read the inner edge of the bearing's outer cup.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `detector` | `F12202` (+0.12 s) | CupView | text: A PAIR OF |
| `pair` | `F12252` (+0.95 s) | CupView | text: A PAIR OF |
| `infrared` | `F12279` (+1.40 s) | CupView | text: INFRARED SENSORS |
| `sensors` | `F12314` (+1.98 s) | CupView | text: INFRARED SENSORS |
| `looking` | `F12347` (+2.53 s) | (scene list) | {id: 'a2_cup', from: sf(45) - 20, to: sf(47) + 14, C: CupView, cues: [cue(wf(45, |
| `up` | `F12365` (+2.83 s) | CupView | text: LOOKING UP |
| `track` | `F12393` (+3.30 s) | CupView | text: FROM THE TRACK |
| `Salem` | `F12465` (+4.50 s) | CupView | <Pop f={f} fps={fps} on={wf(45, 'salem')} style={{position: 'absolute', left: 40 |
| `inner` | `F12548` (+5.88 s) | CupView | text: INNER EDGE |
| `outer` | `F12636` (+7.35 s) | CupView | text: OUTER CUP |

**46** · A failing bearing heats from the inside, and the outside lags behind.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `A` | `F12729` (+0.02 s) | CupView | const figO = Math.min(onW(f, wf(45, 'inner'), 12), offW(f, wf(46, 'a') - 4, 14)) |
| `failing` | `F12737` (+0.15 s) | CupView | lead · const chart = lead(f, wf(46, 'failing'), 14); |
| `heats` | `F12793` (+1.08 s) | CupView | text: HEATS FROM THE INSIDE |
| `inside` | `F12831` (+1.72 s) | CupView | <LagChart f={f} x={0} y={60} w={720} h={420} insideAt={wf(46, 'inside')} outside |
| `outside` | `F12912` (+3.07 s) | CupView | <LagChart f={f} x={0} y={60} w={720} h={420} insideAt={wf(46, 'inside')} outside |
| `lags` | `F12949` (+3.68 s) | (scene list) | {id: 'a2_cup', from: sf(45) - 20, to: sf(47) + 14, C: CupView, cues: [cue(wf(45, |
| `behind` | `F12969` (+4.02 s) | CupView | text: NTSB FINDING 5 · P. 166 |

**47** · The N - T - S - B found that the Salem reading did not reflect the bearing's true temperature.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `B` | `F13148` (+1.42 s) | Findings | <Pop f={f} fps={fps} on={wf(47, 'b')} style={{position: 'absolute', left: 1160,  |
| `found` | `F13188` (+2.08 s) | Findings | hl= · <RecordPage set="rir" start={sf(47) - 12} end={ef(47) + 24} label="NTS |
| `Salem` | `F13226` (+2.72 s) | Findings | <Pop f={f} fps={fps} on={wf(47, 'salem')} style={{position: 'absolute', left: 11 |
| `reflect` | `F13301` (+3.97 s) | (scene list) | {id: 'a2_findings', from: sf(47) - 20, to: sf(49) + 14, C: Findings, cues: [cue( |
| `true` | `F13372` (+5.15 s) | Findings | hl= · <RecordPage set="rir" start={sf(47) - 12} end={ef(47) + 24} label="NTS |

**48** · And once a bearing is failing, the report notes, it can go from below an alarm temperature to seized in less than a minute.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `failing` | `F13547` (+1.12 s) | Findings | <Pop f={f} fps={fps} on={wf(48, 'failing')} style={{position: 'absolute', left:  |
| `report` | `F13595` (+1.92 s) | Findings | hl= · <RecordPage set="rir" start={ef(47) + 8} end={sf(49) + 14} label="NTSB |
| `notes` | `F13620` (+2.33 s) | Findings | <Pop f={f} fps={fps} on={wf(48, 'notes')} style={{position: 'absolute', left: 10 |
| `go` | `F13691` (+3.52 s) | Findings | hl= · <RecordPage set="rir" start={ef(47) + 8} end={sf(49) + 14} label="NTSB |
| `below` | `F13718` (+3.97 s) | Findings | <Pop f={f} fps={fps} on={wf(48, 'below')} style={{position: 'absolute', left: 10 |
| `alarm` | `F13747` (+4.45 s) | Findings | text: ALARM |
| `seized` | `F13832` (+5.87 s) | (scene list) | {id: 'a2_findings', from: sf(47) - 20, to: sf(49) + 14, C: Findings, cues: [cue( |
| `less` | `F13893` (+6.88 s) | Findings | <Pop f={f} fps={fps} on={wf(48, 'less')} style={{position: 'absolute', left: 106 |
| `minute` | `F13922` (+7.37 s) | Findings | hl= · <RecordPage set="rir" start={ef(47) + 8} end={sf(49) + 14} label="NTSB |

**49** · The analyst on the help desk did not see the Salem alert.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `analyst` | `F14016` (+0.15 s) | Desk | text: THE ANALYST ON DUTY · NTSB P. 40, P. 104 |
| `help` | `F14056` (+0.82 s) | Desk | text: WAYSIDE HELP DESK · ATLANTA |
| `see` | `F14122` (+1.92 s) | (scene list) | {id: 'a2_desk', from: sf(49) - 20, to: sf(52) + 14, C: Desk, cues: [cue(wf(49, ' |
| `Salem` | `F14146` (+2.32 s) | Desk | <div style={{position: 'absolute', left: 50, top: 220, width: 620, height: 160,  |
| `alert` | `F14167` (+2.67 s) | Desk | text: NOT SEEN |

**50** · He was working on other, higher-priority alerts.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `working` | `F14251` (+0.28 s) | Desk | text: WORKING ON |
| `other` | `F14287` (+0.88 s) | Desk | <div key={i} style={{marginTop: 14, opacity: onW(f, wf(50, 'other') + i * 10, 8) |
| `higher-priority` | `F14322` (+1.47 s) | Desk | <div key={i} style={{marginTop: 14, opacity: onW(f, wf(50, 'other') + i * 10, 8) |
| `alerts` | `F14379` (+2.42 s) | Desk | text: ILLUSTRATION · NO DETAIL IN THE RECORD |

**51** · The investigators found it would not have changed the outcome: the train derailed before the procedures required him to act.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `investigators` | `F14468` (+0.10 s) | (scene list) | {id: 'a2_desk', from: sf(49) - 20, to: sf(52) + 14, C: Desk, cues: [cue(wf(49, ' |
| `found` | `F14518` (+0.93 s) | Desk | hl= · <RecordPage set="rir" start={wf(51, 'investigators') - 10} end={sf(52) |
| `changed` | `F14576` (+1.90 s) | (scene list) | {id: 'a2_desk', from: sf(49) - 20, to: sf(52) + 14, C: Desk, cues: [cue(wf(49, ' |
| `outcome` | `F14611` (+2.48 s) | Desk | hl= · <RecordPage set="rir" start={wf(51, 'investigators') - 10} end={sf(52) |
| `train` | `F14687` (+3.75 s) | Desk | <div style={{position: 'absolute', left: 760, top: 900, display: 'flex', gap: 14 |
| `derailed` | `F14711` (+4.15 s) | Desk | text: DERAILED |
| `procedures` | `F14780` (+5.30 s) | Desk | text: BEFORE HIS PROCEDURES |
| `required` | `F14818` (+5.93 s) | Desk | <div style={{position: 'absolute', left: 760, top: 966, background: colors.card, |
| `act` | `F14872` (+6.83 s) | Desk | text: REQUIRED HIM TO ACT |

**52** · If you have read about this derailment, you may have heard a simple answer: a skipped repair, a bearing with no grease.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `read` | `F14985` (+0.47 s) | Grease | <div style={T(36, {color: colors.ink, opacity: onW(f, wf(52, 'read'), 10)})}> |
| `derailment` | `F15026` (+1.15 s) | Grease | text: THIS DERAILMENT |
| `may` | `F15095` (+2.30 s) | Grease | text: YOU MAY HAVE HEARD / THE SIMPLE |
| `heard` | `F15116` (+2.65 s) | Grease | text: YOU MAY HAVE HEARD / THE SIMPLE |
| `simple` | `F15140` (+3.05 s) | Grease | text: YOU MAY HAVE HEARD / THE SIMPLE |
| `answer` | `F15165` (+3.47 s) | Grease | text: YOU MAY HAVE HEARD / THE SIMPLE |
| `skipped` | `F15250` (+4.88 s) | Grease | <div style={T(64, {fontWeight: 700, color: colors.ink, opacity: onW(f, wf(52, 's |
| `repair` | `F15274` (+5.28 s) | Grease | text: REPAIR. |
| `bearing` | `F15341` (+6.40 s) | Grease | <div style={T(64, {fontWeight: 700, color: colors.amber, opacity: onW(f, wf(52,  |
| `grease` | `F15395` (+7.30 s) | (scene list) | {id: 'a2_grease', from: sf(52) - 20, to: ef(55) + 30, C: Grease, cues: [cue(wf(5 |

**53** · Hold that thought.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Hold` | `F15480` (+-0.02 s) | (scene list) | {id: 'a2_grease', from: sf(52) - 20, to: ef(55) + 30, C: Grease, cues: [cue(wf(5 |
| `thought` | `F15509` (+0.47 s) | Grease | tween · const flip = tween(f, wf(53, 'hold') - 6, wf(53, 'thought') + 10, 0, 1 |

**54** · The record can't confirm it.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `confirm` | `F15619` (+0.88 s) | (scene list) | {id: 'a2_grease', from: sf(52) - 20, to: ef(55) + 30, C: Grease, cues: [cue(wf(5 |

**55** · What it does show is stranger: where the warning line came from.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `show` | `F15737` (+0.60 s) | Grease | <div style={{position: 'absolute', left: 260, top: 790, opacity: onW(f, wf(55, ' |
| `stranger` | `F15765` (+1.07 s) | Grease | text: WHAT IT SHOWS: |
| `where` | `F15841` (+2.33 s) | Grease | text: WHERE / THE WARNING LINE |
| `warning` | `F15867` (+2.77 s) | Grease | text: WHERE / THE WARNING LINE |
| `line` | `F15891` (+3.17 s) | Grease | lead · const line = lead(f, wf(55, 'line'), 18); |
| `from` | `F15927` (+3.77 s) | Grease | text: 170°F ? |

**56** · The detectors themselves were miles apart.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `detectors` | `F15997` (+0.10 s) | Spacing | nodeOn={[wf(60, 'detector'), wf(56, 'detectors'), wf(56, 'detectors') + 12]} |
| `miles` | `F16084` (+1.55 s) | Spacing | text: DETECTORS |
| `apart` | `F16112` (+2.02 s) | Spacing | text: MILES APART |

**57** · From Salem to East Palestine, about nineteen miles.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Salem` | `F16197` (+0.28 s) | Spacing | lead · const s19 = lead(f, wf(57, 'salem'), 30); |
| `East` | `F16236` (+0.93 s) | Spacing | <Pop f={f} fps={fps} on={wf(57, 'east')} style={{position: 'absolute', left: 100 |
| `Palestine` | `F16252` (+1.20 s) | Spacing | text: SALEM → / EAST PALESTINE |
| `nineteen` | `F16328` (+2.47 s) | (scene list) | {id: 'a2_spacing', from: sf(56) - 20, to: ef(63) + 30, C: Spacing, cues: [cue(wf |

**58** · Norfolk Southern testified that its average spacing on key routes was thirteen point nine.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Norfolk` | `F16444` (+0.03 s) | Spacing | <Card x={0} y={0} w={820} h={134} o={onW(f, wf(58, 'norfolk'), 10)}> |
| `testified` | `F16495` (+0.88 s) | Spacing | text: NS AT THE NTSB HEARING · DAY 2 P. 259 |
| `average` | `F16558` (+1.93 s) | Spacing | text: AVERAGE, / KEY ROUTES |
| `routes` | `F16643` (+3.35 s) | Spacing | text: AVERAGE, / KEY ROUTES |
| `thirteen` | `F16694` (+4.20 s) | Spacing | text: AVERAGE, / KEY ROUTES |
| `nine` | `F16746` (+5.07 s) | (scene list) | {id: 'a2_spacing', from: sf(56) - 20, to: ef(63) + 30, C: Spacing, cues: [cue(wf |

**59** · The spacing met the industry's recommended practice, forty miles or less.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `spacing` | `F16825` (+0.12 s) | Spacing | <Card x={0} y={146} w={820} h={134} o={onW(f, wf(59, 'spacing'), 10)}> |
| `met` | `F16856` (+0.63 s) | Spacing | text: MET |
| `recommended` | `F16913` (+1.58 s) | Spacing | text: INDUSTRY RECOMMENDED / PRACTICE (AAR) |
| `practice` | `F16947` (+2.15 s) | Spacing | text: INDUSTRY RECOMMENDED / PRACTICE (AAR) |
| `forty` | `F17004` (+3.10 s) | (scene list) | {id: 'a2_spacing', from: sf(56) - 20, to: ef(63) + 30, C: Spacing, cues: [cue(wf |

**60** · At the detector before Salem, in Sebring, about eleven miles back, the same bearing read thirty-eight degrees, below the alert line.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `detector` | `F17155` (+0.32 s) | Spacing | nodeOn={[wf(60, 'detector'), wf(56, 'detectors'), wf(56, 'detectors') + 12]} |
| `before` | `F17186` (+0.83 s) | Spacing | <Pop f={f} fps={fps} on={wf(60, 'before')} style={{position: 'absolute', left: 2 |
| `Sebring` | `F17260` (+2.07 s) | Spacing | <Card x={0} y={0} w={800} h={134} o={onW(f, wf(60, 'sebring'), 10)} accent={colo |
| `eleven` | `F17330` (+3.23 s) | Spacing | <Pop f={f} fps={fps} on={wf(60, 'eleven')} style={{position: 'absolute', left: 2 |
| `back` | `F17377` (+4.02 s) | Spacing | text: BACK (BY MILEPOST) |
| `same` | `F17435` (+4.98 s) | Spacing | text: SEBRING · MP 79.8 · 7:37 P.M. · / SAME BEARING |
| `thirty-eight` | `F17499` (+6.05 s) | (scene list) | {id: 'a2_spacing', from: sf(56) - 20, to: ef(63) + 30, C: Spacing, cues: [cue(wf |
| `degrees` | `F17533` (+6.62 s) | Spacing | text: BELOW THE ALERT LINE · P. 5 |
| `below` | `F17594` (+7.63 s) | Spacing | text: BELOW THE ALERT LINE · P. 5 |

**61** · From there to a broken axle: about thirty miles.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `From` | `F17718` (+0.03 s) | Spacing | <Card x={0} y={146} w={800} h={134} o={onW(f, wf(61, 'from'), 10)} accent={color |
| `broken` | `F17767` (+0.85 s) | Spacing | lead · const s30 = lead(f, wf(61, 'broken'), 30); |
| `axle` | `F17796` (+1.33 s) | Spacing | text: BELOW ALERT LINE → / BROKEN AXLE |
| `thirty` | `F17868` (+2.53 s) | (scene list) | {id: 'a2_spacing', from: sf(56) - 20, to: ef(63) + 30, C: Spacing, cues: [cue(wf |

**62** · Both can be true at once: a slow build over many miles, then a failure in under a minute.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Both` | `F17968` (+0.00 s) | Spacing | <Card x={540} y={140} w={840} h={440} o={Math.min(onW(f, wf(62, 'both'), 12), of |
| `true` | `F18005` (+0.62 s) | Spacing | text: BOTH CAN BE TRUE |
| `slow` | `F18093` (+2.08 s) | Spacing | lead · const build = lead(f, wf(62, 'slow'), 40); |
| `many` | `F18151` (+3.05 s) | Spacing | text: MANY MILES |
| `failure` | `F18237` (+4.48 s) | (scene list) | {id: 'a2_spacing', from: sf(56) - 20, to: ef(63) + 30, C: Spacing, cues: [cue(wf |
| `minute` | `F18301` (+5.55 s) | Spacing | <text x={600} y={340} fontFamily={mono} fontSize={30} fill={colors.red} opacity= |

**63** · At Salem the reading was over the help desk line and under the crew line.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `At` | `F18386` (+0.03 s) | Spacing | <Card x={540} y={180} w={840} h={260} o={onW(f, wf(63, 'at'), 12)} accent={color |
| `Salem` | `F18398` (+0.23 s) | Spacing | text: SALEM · |
| `reading` | `F18449` (+1.08 s) | Spacing | text: SALEM · |
| `over` | `F18485` (+1.68 s) | Spacing | text: OVER / THE HELP-DESK LINE (90) |
| `help` | `F18509` (+2.08 s) | Spacing | text: OVER / THE HELP-DESK LINE (90) |
| `under` | `F18594` (+3.50 s) | Spacing | text: UNDER / THE CREW LINE (170) |
| `crew` | `F18619` (+3.92 s) | Spacing | text: UNDER / THE CREW LINE (170) |

**64** · Had the crew line been lower, the crew would have been told.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `crew` | `F18724` (+0.32 s) | Lower | text: HAD THE CREW LINE BEEN LOWER |
| `lower` | `F18770` (+1.08 s) | (scene list) | {id: 'a2_lower', from: sf(64) - 30, to: ef(65) + 40, C: Lower, cues: [cue(wf(64, |
| `crew` | `F18823` (+1.97 s) | Lower | text: THE CREW / TOLD |
| `told` | `F18867` (+2.70 s) | Lower | text: THE CREW / TOLD |

**65** · Whether that would have stopped this train in time, the N - T - S - B did not decide: it found that research is needed to tell whether lower alert and alarm thresholds would make a significant safety improvement.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `stopped` | `F18995` (+0.78 s) | Lower | <Pop f={f} fps={fps} on={wf(65, 'stopped')} style={{position: 'absolute', left:  |
| `time` | `F19055` (+1.78 s) | Lower | text: WOULD THAT HAVE STOPPED THIS TRAIN / IN TIME? |
| `N` | `F19122` (+2.90 s) | (scene list) | {id: 'a2_lower', from: sf(64) - 30, to: ef(65) + 40, C: Lower, cues: [cue(wf(64, |
| `decide` | `F19206` (+4.30 s) | Lower | <div style={{position: 'absolute', left: 900, top: 900, display: 'flex', gap: 14 |
| `found` | `F19284` (+5.60 s) | Lower | hl= · <RecordPage set="rir" start={pageAt - 10} end={ef(65) + 30} label="NTS |
| `research` | `F19312` (+6.07 s) | (scene list) | {id: 'a2_lower', from: sf(64) - 30, to: ef(65) + 40, C: Lower, cues: [cue(wf(64, |
| `needed` | `F19349` (+6.68 s) | Lower | text: RESEARCH NEEDED |
| `lower` | `F19420` (+7.87 s) | Lower | <Pop f={f} fps={fps} on={wf(65, 'lower')} style={{position: 'absolute', left: 90 |
| `thresholds` | `F19501` (+9.22 s) | Lower | hl= · <RecordPage set="rir" start={pageAt - 10} end={ef(65) + 30} label="NTS |
| `significant` | `F19585` (+10.62 s) | Lower | text: LOWER LINES: / A SIGNIFICANT SAFETY GAIN? |
| `improvement` | `F19654` (+11.77 s) | Lower | hl= · <RecordPage set="rir" start={pageAt - 10} end={ef(65) + 30} label="NTS |

**66** · Either way: where did one hundred and seventy come from?

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Either` | `F19744` (+0.07 s) | Turn | text: EITHER WAY |
| `where` | `F19820` (+1.33 s) | Turn | <div style={T(56, {fontWeight: 700, color: colors.ink, opacity: onW(f, wf(66, 'w |
| `one` | `F19849` (+1.82 s) | Turn | text: 170°F |
| `seventy` | `F19888` (+2.47 s) | (scene list) | {id: 'a2_turn', from: sf(66) - 20, to: sf(67) + 30, C: Turn, cues: [cue(wf(66, ' |
| `come` | `F19917` (+2.95 s) | Turn | text: COME FROM? |

