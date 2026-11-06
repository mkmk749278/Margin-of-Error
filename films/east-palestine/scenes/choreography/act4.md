# Choreography index: Act 4

Word-level choreography (PLAYBOOK §10.6), **generated from the scene code** (`python3 scripts/choreo_index.py` from the film folder; re-run after
any edit) so it cannot drift from it. One row per word-locked event: the spoken trigger, its measured frame (60 fps) and offset
from the sentence start, the scene component, and what changes (the on-screen text that arrives, or the driving line of
code). Kit: `lib/remotion/Kinetic.tsx` and `remotion/beats.tsx` (`KeyLine` parts land on their words, `ChunkQuote` reveals a
record quote chunk by chunk, `WordLine` builds a title word by word). Kit for this film: `remotion/parts*.tsx`.
Sync audit: `review/sync_audit.md`.

**112** · Back to the bearing.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `bearing` | `F41381` (+0.48 s) | BurnOff | text: THE L1 BEARING |

**113** · As it fails, the rollers and the cup grind and heat.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `fails` | `F41468` (+0.38 s) | BurnOff | text: FAILING |
| `rollers` | `F41521` (+1.27 s) | BurnOff | text: ROLLERS |
| `cup` | `F41565` (+2.00 s) | BurnOff | text: CUP |
| `grind` | `F41589` (+2.40 s) | (scene list) | {id: 'a4_burnoff', from: sf(112) - 30, to: sf(117) + 14, C: BurnOff, cues: [cue( |
| `heat` | `F41630` (+3.08 s) | BurnOff | text: HEAT |

**114** · The grease burns.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `grease` | `F41682` (+0.13 s) | BurnOff | text: GREASE BURNS |
| `burns` | `F41705` (+0.52 s) | (scene list) | {id: 'a4_burnoff', from: sf(112) - 30, to: sf(117) + 14, C: BurnOff, cues: [cue( |

**115** · The seals go.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `seals` | `F41765` (+0.18 s) | BurnOff | text: SEALS GO |
| `go` | `F41791` (+0.62 s) | BurnOff | lead · const seals = lead(f, wf(115, 'go'), 16); |

**116** · Then the end of the axle, the journal, breaks away, and the wheelset drops.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `end` | `F41870` (+0.40 s) | BurnOff | <Pop f={f} fps={fps} on={wf(116, 'end')} style={{position: 'absolute', right: 40 |
| `axle` | `F41897` (+0.85 s) | BurnOff | THE END OF THE AXLE <span style={{opacity: onW(f, wf(116, 'axle'), 6)}}>· AXLE 1 |
| `journal` | `F41947` (+1.68 s) | BurnOff | text: THE JOURNAL BREAKS AWAY |
| `breaks` | `F41991` (+2.42 s) | (scene list) | {id: 'a4_burnoff', from: sf(112) - 30, to: sf(117) + 14, C: BurnOff, cues: [cue( |
| `wheelset` | `F42071` (+3.75 s) | BurnOff | <Pop f={f} fps={fps} on={wf(116, 'wheelset')} style={{position: 'absolute', righ |
| `drops` | `F42106` (+4.33 s) | BurnOff | text: DROPS |

**117** · Watch the last nineteen miles.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Watch` | `F42171` (+0.03 s) | Blind | text: THE LAST |
| `last` | `F42198` (+0.48 s) | Blind | text: THE LAST |
| `nineteen` | `F42222` (+0.88 s) | Blind | <span style={T(44, {fontWeight: 700, color: colors.amber, opacity: onW(f, wf(117 |
| `miles` | `F42253` (+1.40 s) | Blind | text: MILES |

**118** · From Salem, the train runs east, at between nineteen and forty-five miles an hour.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `From` | `F42326` (+0.03 s) | Blind | <div style={{position: 'absolute', right: 150, top: 120, width: 520, background: |
| `Salem` | `F42342` (+0.30 s) | Blind | <div style={T(36, {opacity: onW(f, wf(118, 'salem'), 8), ...lit(f, wf(118, 'east |
| `train` | `F42389` (+1.08 s) | Blind | text: THE TRAIN RUNS EAST |
| `east` | `F42433` (+1.82 s) | Blind | <div style={T(36, {opacity: onW(f, wf(118, 'salem'), 8), ...lit(f, wf(118, 'east |
| `between` | `F42480` (+2.60 s) | Blind | tween · <span style={{fontWeight: 700, color: colors.cyan, opacity: onW(f, wf( |
| `nineteen` | `F42506` (+3.03 s) | Blind | text: MPH |
| `forty-five` | `F42558` (+3.90 s) | Blind | text: MPH |
| `hour` | `F42626` (+5.03 s) | Blind | text: MPH |

**119** · Between the detectors, nothing measures the bearing.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Between` | `F42688` (+0.02 s) | (scene list) | tween · {id: 'a4_blind', from: sf(117) - 20, to: sf(127) + 14, C: Blind, cues: |
| `nothing` | `F42776` (+1.48 s) | Blind | tween · <BlindStrip f={f} fps={fps} sec={sec} y={520} darkOn={wf(119, 'between |
| `measures` | `F42803` (+1.93 s) | Blind | text: NOTHING MEASURES THE BEARING |

**120** · Nineteen miles of track, and nothing reads it.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Nineteen` | `F42893` (+0.08 s) | Blind | <div style={T(36, {fontWeight: 700, color: colors.amber, marginTop: 10, opacity: |
| `track` | `F42953` (+1.08 s) | Blind | text: OF TRACK |
| `nothing` | `F43005` (+1.95 s) | Blind | {reading === null ? (f >= wf(120, 'nothing') ? 'NO READING' : '—') : `+${reading |
| `reads` | `F43030` (+2.37 s) | Blind | text: OF TRACK |

**121** · Milepost forty-nine point eight one.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Milepost` | `F43290` (+0.07 s) | (scene list) | tween · {id: 'a4_blind', from: sf(117) - 20, to: sf(127) + 14, C: Blind, cues: |
| `forty-nine` | `F43332` (+0.77 s) | Blind | text: MP 49. |
| `eight` | `F43394` (+1.80 s) | Blind | <span style={{opacity: onW(f, wf(121, 'eight'), 6)}}>8</span> |
| `one` | `F43412` (+2.10 s) | Blind | text: MAX / OF THE SCALE |

**122** · Two hundred and fifty-three degrees, the top of the scale.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Two` | `F43460` (+0.02 s) | Blind | rollTo · const reading = f < wf(122, 'two') - 6 ? null : Math.round(rollTo(f, [ |
| `fifty-three` | `F43502` (+0.72 s) | (scene list) | tween · {id: 'a4_blind', from: sf(117) - 20, to: sf(127) + 14, C: Blind, cues: |
| `degrees` | `F43538` (+1.32 s) | Blind | text: MAX / OF THE SCALE |
| `top` | `F43599` (+2.33 s) | Blind | text: MAX / OF THE SCALE |
| `scale` | `F43627` (+2.80 s) | Blind | text: MAX / OF THE SCALE |

**123** · Critical alarm.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Critical` | `F43690` (+0.02 s) | (scene list) | tween · {id: 'a4_blind', from: sf(117) - 20, to: sf(127) + 14, C: Blind, cues: |
| `alarm` | `F43718` (+0.48 s) | Blind | text: ALARM |

**124** · The crew begins to slow the train.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `crew` | `F43792` (+0.13 s) | Blind | <span style={T(36, {color: colors.amber, opacity: onW(f, wf(124, 'crew'), 8)})}> |
| `slow` | `F43841` (+0.95 s) | Blind | CREW <span style={{opacity: onW(f, wf(124, 'slow'), 6)}}>SLOWS · BRAKE {now.db}< |

**125** · Less than a minute later, the axle separates, and the brakes go into emergency on their own.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Less` | `F43927` (+0.05 s) | Blind | {emerg // f >= wf(125, 'less') - 8 ? ( |
| `minute` | `F43956` (+0.53 s) | Blind | <span style={T(36, {color: colors.ink, opacity: onW(f, wf(125, 'minute'), 6)})}> |
| `axle` | `F44026` (+1.70 s) | Blind | <span style={T(36, {fontWeight: 700, color: colors.red, opacity: onW(f, wf(125,  |
| `separates` | `F44052` (+2.13 s) | (scene list) | tween · {id: 'a4_blind', from: sf(117) - 20, to: sf(127) + 14, C: Blind, cues: |
| `brakes` | `F44123` (+3.32 s) | Blind | <span style={T(36, {fontWeight: 700, color: colors.void, background: colors.red, |
| `emergency` | `F44174` (+4.17 s) | (scene list) | tween · {id: 'a4_blind', from: sf(117) - 20, to: sf(127) + 14, C: Blind, cues: |
| `own` | `F44236` (+5.20 s) | Blind | text: EMERGENCY |

**126** · From the emergency, the lead locomotives travel another one thousand, one hundred and sixty feet, and stop thirty-eight seconds later.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `emergency` | `F44312` (+0.37 s) | Blind | <div style={T(30, {color: colors.ink, marginTop: 12, opacity: onW(f, wf(126, 'em |
| `lead` | `F44380` (+1.50 s) | Blind | text: THE LEAD LOCOMOTIVES / TRAVEL |
| `travel` | `F44441` (+2.52 s) | Blind | text: THE LEAD LOCOMOTIVES / TRAVEL |
| `one` | `F44495` (+3.42 s) | Blind | rollTo · const ft = Math.round(rollTo(f, [{frame: wf(126, 'one', 0) - 8, value: |
| `thousand` | `F44509` (+3.65 s) | Blind | rollTo · const ft = Math.round(rollTo(f, [{frame: wf(126, 'one', 0) - 8, value: |
| `one` | `F44548` (+4.30 s) | Blind | rollTo · const ft = Math.round(rollTo(f, [{frame: wf(126, 'one', 0) - 8, value: |
| `sixty` | `F44590` (+5.00 s) | Blind | rollTo · const ft = Math.round(rollTo(f, [{frame: wf(126, 'one', 0) - 8, value: |
| `stop` | `F44667` (+6.28 s) | Blind | <span style={{opacity: onW(f, wf(126, 'stop'), 6)}}> |
| `thirty-eight` | `F44691` (+6.68 s) | Blind | rollTo · const secs = Math.round(rollTo(f, [{frame: wf(126, 'stop') - 4, value: |
| `later` | `F44755` (+7.75 s) | Blind | text: LATER (NTSB P. 8) |

**127** · So was it the grease?

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `So` | `F44913` (+0.08 s) | Grease2 | text: A SKIPPED REPAIR. / NO |
| `was` | `F44926` (+0.30 s) | Grease2 | text: A SKIPPED REPAIR. / NO |
| `the` | `F44943` (+0.58 s) | Grease2 | text: A SKIPPED REPAIR. / NO |
| `grease` | `F44952` (+0.73 s) | Grease2 | text: A SKIPPED REPAIR. / NO |

**128** · The record can't say.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `record` | `F45018` (+0.13 s) | Grease2 | text: A SKIPPED REPAIR. / NO |
| `say` | `F45064` (+0.90 s) | (scene list) | {id: 'a4_grease', from: sf(127) - 20, to: sf(132) + 14, C: Grease2, cues: [cue(w |

**129** · The investigators found that the root cause of the bearing's failure remains unclear.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `investigators` | `F45126` (+0.12 s) | Grease2 | <Pop f={f} fps={fps} on={wf(129, 'investigators')} off={sf(130) - 6} style={{pos |
| `found` | `F45175` (+0.93 s) | Grease2 | hl= · <RecordPage set="rir" start={sf(129) - 10} end={sf(130) + 14} label="N |
| `root` | `F45211` (+1.53 s) | Grease2 | hl= · <RecordPage set="rir" start={sf(129) - 10} end={sf(130) + 14} label="N |
| `failure` | `F45297` (+2.97 s) | Grease2 | text: OF THE FAILURE: / UNCLEAR |
| `unclear` | `F45366` (+4.12 s) | Grease2 | text: OF THE FAILURE: / UNCLEAR |

**130** · Whatever started it, fatigue, a loss of lubrication, water, was erased by the heat of its own failure.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `started` | `F45471` (+0.40 s) | Grease2 | text: WHATEVER STARTED IT: |
| `fatigue` | `F45536` (+1.48 s) | Grease2 | text: FATIGUE |
| `lubrication` | `F45623` (+2.93 s) | Grease2 | text: LOSS OF LUBRICATION |
| `water` | `F45693` (+4.10 s) | Grease2 | text: WATER |
| `erased` | `F45762` (+5.25 s) | Grease2 | <span style={T(44, {fontWeight: 700, color: colors.red, opacity: onW(f, wf(130,  |
| `heat` | `F45811` (+6.07 s) | Grease2 | text: BY THE HEAT / OF ITS OWN FAILURE · NTSB P. 111 |
| `failure` | `F45858` (+6.85 s) | Grease2 | text: BY THE HEAT / OF ITS OWN FAILURE · NTSB P. 111 |

**131** · And the N - T - S - B noted that this is a pattern: a bearing that fails badly enough to derail a train tends to destroy the evidence of why.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `noted` | `F46010` (+1.28 s) | Grease2 | hl= · <RecordPage set="rir" start={sf(131) - 10} end={ef(131) + 30} label="N |
| `pattern` | `F46081` (+2.47 s) | Grease2 | <Pop f={f} fps={fps} on={wf(131, 'pattern')} off={ef(131) + 24} style={{position |
| `bearing` | `F46160` (+3.78 s) | Grease2 | hl= · <RecordPage set="rir" start={sf(131) - 10} end={ef(131) + 30} label="N |
| `fails` | `F46198` (+4.42 s) | Grease2 | text: FAILS BADLY / ENOUGH TO DERAIL |
| `derail` | `F46274` (+5.68 s) | Grease2 | text: FAILS BADLY / ENOUGH TO DERAIL |
| `tends` | `F46357` (+7.07 s) | Grease2 | text: FAILS BADLY / ENOUGH TO DERAIL |
| `destroy` | `F46382` (+7.48 s) | Grease2 | hl= · <RecordPage set="rir" start={sf(131) - 10} end={ef(131) + 30} label="N |
| `evidence` | `F46429` (+8.27 s) | Grease2 | text: FAILS BADLY / ENOUGH TO DERAIL |

**132** · Another claim: the burn, three days later, destroyed that evidence.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `claim` | `F46573` (+0.42 s) | Evidence | text: THE BURN, / THREE DAYS LATER, |
| `burn` | `F46647` (+1.65 s) | Evidence | text: THE BURN, / THREE DAYS LATER, |
| `three` | `F46691` (+2.38 s) | Evidence | text: THE BURN, / THREE DAYS LATER, |
| `destroyed` | `F46772` (+3.73 s) | Evidence | text: THE BURN, / THREE DAYS LATER, |
| `evidence` | `F46820` (+4.53 s) | Evidence | text: THE BURN, / THREE DAYS LATER, |

**133** · That is not in the record.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `not` | `F46918` (+0.45 s) | Evidence | text: THE BURN, / THREE DAYS LATER, |
| `record` | `F46950` (+0.98 s) | (scene list) | {id: 'a4_evidence', from: sf(132) - 20, to: sf(136) + 14, C: Evidence, cues: [cu |

**134** · Investigators recovered the bearing's pieces on the fifth of February, west of the wreck, where they had fallen in the first moments.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `recovered` | `F47101` (+0.93 s) | Evidence | <div style={T(36, {color: colors.ink, opacity: onW(f, wf(134, 'recovered'), 6)}) |
| `pieces` | `F47164` (+1.98 s) | Evidence | text: THE BEARING'S PIECES |
| `fifth` | `F47216` (+2.85 s) | (scene list) | {id: 'a4_evidence', from: sf(132) - 20, to: sf(136) + 14, C: Evidence, cues: [cu |
| `February` | `F47240` (+3.25 s) | Evidence | DatePill · <DatePill f={f} fps={fps} day={5} month={2} year={2023} dayWord={wf(13 |
| `west` | `F47295` (+4.17 s) | Evidence | <div style={T(36, {fontWeight: 700, color: colors.cyan, marginTop: 20, opacity:  |
| `wreck` | `F47327` (+4.70 s) | Evidence | text: OF THE WRECK |
| `fallen` | `F47397` (+5.87 s) | Evidence | <div style={T(30, {color: colors.ink, marginTop: 10, opacity: onW(f, wf(134, 'fa |
| `first` | `F47440` (+6.58 s) | Evidence | text: IN THE FIRST / MOMENTS |
| `moments` | `F47462` (+6.95 s) | Evidence | text: IN THE FIRST / MOMENTS |

**135** · The burn was on the sixth, on five other cars.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `burn` | `F47553` (+0.15 s) | Evidence | <div style={{marginTop: 60, opacity: onW(f, wf(135, 'burn'), 8)}}> |
| `sixth` | `F47602` (+0.97 s) | (scene list) | {id: 'a4_evidence', from: sf(132) - 20, to: sf(136) + 14, C: Evidence, cues: [cu |
| `five` | `F47660` (+1.93 s) | Evidence | <div style={T(36, {fontWeight: 700, color: colors.amber, marginTop: 14, opacity: |
| `other` | `F47687` (+2.38 s) | Evidence | text: OTHER / CARS |
| `cars` | `F47700` (+2.60 s) | Evidence | text: OTHER / CARS |

**136** · The fire, the N - T - S - B found, likely began with a tank car.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `fire` | `F47781` (+0.15 s) | Fire | hl= · <RecordPage set="rir" start={sf(136) - 10} end={sf(137) + 14} label="N |
| `N` | `F47841` (+1.15 s) | Fire | <Pop f={f} fps={fps} on={wf(136, 'n')} off={sf(137) - 6} style={{position: 'abso |
| `found` | `F47890` (+1.97 s) | Fire | hl= · <RecordPage set="rir" start={sf(136) - 10} end={sf(137) + 14} label="N |
| `likely` | `F47938` (+2.77 s) | Fire | hl= · <RecordPage set="rir" start={sf(136) - 10} end={sf(137) + 14} label="N |
| `began` | `F47960` (+3.13 s) | Fire | text: LIKELY BEGAN WITH A TANK CAR |
| `tank` | `F48001` (+3.82 s) | Fire | hl= · <RecordPage set="rir" start={sf(136) - 10} end={sf(137) + 14} label="N |

**137** · In the derailment, a D - O - T one eleven tank car carrying a flammable liquid was punctured, and its contents fed the fire.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `D` | `F48173` (+1.38 s) | Fire | <span style={{opacity: onW(f, wf(137, 'd'), 4)}}>D</span> |
| `O` | `F48191` (+1.68 s) | Fire | <span style={{opacity: onW(f, wf(137, 'o'), 4)}}>O</span> |
| `T` | `F48202` (+1.87 s) | Fire | <span style={{opacity: onW(f, wf(137, 't'), 4)}}>T</span> |
| `one` | `F48224` (+2.23 s) | Fire | <span style={{opacity: onW(f, wf(137, 'one'), 4)}}>-1</span> |
| `eleven` | `F48233` (+2.38 s) | Fire | <span style={{opacity: onW(f, wf(137, 'eleven'), 4)}}>11</span> |
| `tank` | `F48257` (+2.78 s) | Fire | <span style={{opacity: onW(f, wf(137, 'tank'), 4)}}> TANK CAR</span> |
| `carrying` | `F48314` (+3.73 s) | Fire | text: CARRYING / LIQUID |
| `liquid` | `F48379` (+4.82 s) | Fire | text: CARRYING / LIQUID |
| `punctured` | `F48418` (+5.47 s) | (scene list) | {id: 'a4_fire', from: sf(136) - 20, to: sf(142) + 14, C: Fire, cues: [cue(sf(136 |
| `contents` | `F48494` (+6.73 s) | Fire | text: FED THE FIRE |
| `fed` | `F48533` (+7.38 s) | Fire | text: FED THE FIRE |

**138** · In the same pile lay five pressure tank cars of vinyl chloride.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `pile` | `F48677` (+0.58 s) | Fire | <div style={T(44, {fontWeight: 700, color: colors.ink, opacity: onW(f, wf(138, ' |
| `five` | `F48721` (+1.32 s) | Fire | text: PRESSURE TANK CARS (DOT-105) |
| `pressure` | `F48748` (+1.77 s) | Fire | text: PRESSURE TANK CARS (DOT-105) |
| `vinyl` | `F48818` (+2.93 s) | Fire | text: OF VINYL CHLORIDE |

**139** · Heat from the fire set off the relief valves on four of them, the valves that open when the pressure inside a tank gets too high.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Heat` | `F48926` (+0.02 s) | Fire | <div style={T(44, {fontWeight: 700, color: colors.red, opacity: onW(f, wf(139, ' |
| `fire` | `F48959` (+0.57 s) | Fire | text: FROM THE FIRE / SET OFF THE RELIEF VALVES |
| `relief` | `F49018` (+1.55 s) | (scene list) | {id: 'a4_fire', from: sf(136) - 20, to: sf(142) + 14, C: Fire, cues: [cue(sf(136 |
| `four` | `F49078` (+2.55 s) | Fire | text: FROM THE FIRE / SET OFF THE RELIEF VALVES |
| `valves` | `F49153` (+3.80 s) | Fire | <div style={T(36, {color: colors.ink, marginTop: 14, opacity: onW(f, wf(139, 'va |
| `pressure` | `F49235` (+5.17 s) | Fire | text: WHEN THE PRESSURE / INSIDE |
| `inside` | `F49260` (+5.58 s) | Fire | text: WHEN THE PRESSURE / INSIDE |
| `high` | `F49344` (+6.98 s) | Fire | text: WHEN THE PRESSURE / INSIDE |

**140** · The responders did not yet know what was on the train.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `responders` | `F49429` (+0.12 s) | Fire | text: THE RESPONDERS |
| `know` | `F49506` (+1.40 s) | Fire | <div style={T(72, {fontWeight: 700, color: colors.amber, marginTop: 20, opacity: |
| `train` | `F49564` (+2.37 s) | Fire | text: WHAT WAS ON THE TRAIN |

**141** · The N - T - S - B found that Norfolk Southern's delay in sending the list of cars kept responders near the fire longer than they needed to be, and delayed the evacuation order.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `found` | `F49717` (+1.38 s) | Fire | hl= · <RecordPage set="rir" start={sf(141) - 10} end={ef(141) + 30} label="N |
| `delay` | `F49801` (+2.78 s) | Fire | hl= · <RecordPage set="rir" start={sf(141) - 10} end={ef(141) + 30} label="N |
| `list` | `F49872` (+3.97 s) | Fire | hl= · <RecordPage set="rir" start={sf(141) - 10} end={ef(141) + 30} label="N |
| `cars` | `F49893` (+4.32 s) | Fire | <Pop f={f} fps={fps} on={wf(141, 'cars')} off={ef(141) + 24} style={{position: ' |
| `kept` | `F49947` (+5.22 s) | Fire | text: NEAR THE FIRE / LONGER THAN NEEDED |
| `fire` | `F50026` (+6.53 s) | Fire | text: NEAR THE FIRE / LONGER THAN NEEDED |
| `longer` | `F50053` (+6.98 s) | Fire | hl= · <RecordPage set="rir" start={sf(141) - 10} end={ef(141) + 30} label="N |
| `needed` | `F50095` (+7.68 s) | Fire | text: NEAR THE FIRE / LONGER THAN NEEDED |
| `delayed` | `F50170` (+8.93 s) | Fire | text: NEAR THE FIRE / LONGER THAN NEEDED |
| `evacuation` | `F50205` (+9.52 s) | Fire | hl= · <RecordPage set="rir" start={sf(141) - 10} end={ef(141) + 30} label="N |

**142** · Vinyl chloride is the raw material of P - V - C, a plastic.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Vinyl` | `F50329` (+0.05 s) | Fear | text: VINYL CHLORIDE |
| `raw` | `F50410` (+1.40 s) | Fear | <span style={T(36, {color: colors.ink, opacity: onW(f, wf(142, 'raw'), 6)})}> |
| `P` | `F50475` (+2.48 s) | Fear | → THE RAW MATERIAL OF <span style={{opacity: onW(f, wf(142, 'p'), 4)}}>P</span> |
| `V` | `F50492` (+2.77 s) | Fear | <span style={{opacity: onW(f, wf(142, 'v'), 4)}}>V</span> |
| `C` | `F50512` (+3.10 s) | Fear | <span style={{opacity: onW(f, wf(142, 'c'), 4)}}>C</span> |
| `plastic` | `F50558` (+3.87 s) | Fear | <span style={{opacity: onW(f, wf(142, 'plastic'), 6)}}>, A PLASTIC</span> |

**143** · Its molecules can join into long chains, and that reaction gives off heat.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `molecules` | `F50647` (+0.27 s) | Fear | text: MOLECULES |
| `join` | `F50698` (+1.12 s) | (scene list) | {id: 'a4_fear', from: sf(142) - 20, to: sf(146) + 14, C: Fear, cues: [cue(wf(143 |
| `long` | `F50737` (+1.77 s) | Fear | text: JOIN INTO LONG CHAINS |
| `chains` | `F50756` (+2.08 s) | Fear | <Chains f={f} x={260} y={230} joinAt={wf(143, 'join')} chainAt={wf(143, 'chains' |
| `reaction` | `F50829` (+3.30 s) | Fear | text: THAT REACTION |
| `gives` | `F50863` (+3.87 s) | Fear | text: GIVES OFF HEAT |
| `heat` | `F50892` (+4.35 s) | Fear | <Chains f={f} x={260} y={230} joinAt={wf(143, 'join')} chainAt={wf(143, 'chains' |

**144** · In a closed tank, a runaway reaction could build pressure until the tank fails.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `closed` | `F50975` (+0.25 s) | Fear | <div style={T(36, {color: colors.ink, opacity: onW(f, wf(144, 'closed'), 6)})}> |
| `runaway` | `F51052` (+1.53 s) | Fear | text: A RUNAWAY REACTION |
| `build` | `F51129` (+2.82 s) | Fear | <div style={T(44, {fontWeight: 700, color: colors.red, marginTop: 10, opacity: o |
| `pressure` | `F51147` (+3.12 s) | Fear | rollTo · const p = rollTo(f, [{frame: wf(144, 'pressure') - 20, value: 0}, {fra |
| `tank` | `F51218` (+4.30 s) | Fear | text: UNTIL THE TANK / FAILS |
| `fails` | `F51242` (+4.70 s) | (scene list) | {id: 'a4_fear', from: sf(142) - 20, to: sf(146) + 14, C: Fear, cues: [cue(wf(143 |

**145** · That was the fear.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `fear` | `F51354` (+0.62 s) | Fear | text: THE FEAR |

**146** · Now the second number.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `second` | `F51460` (+0.50 s) | Plot | <div style={T(44, {fontWeight: 700, color: colors.amber, opacity: onW(f, wf(146, |
| `number` | `F51482` (+0.87 s) | Plot | text: NUMBER |

**147** · On the evening of the fourth of February, the shipper of the vinyl chloride, Oxy Vinyls, told Norfolk Southern and its contractors it saw a low probability of that reaction.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `evening` | `F51570` (+0.33 s) | (scene list) | {id: 'a4_plot', from: sf(146) - 20, to: sf(162) + 14, C: Plot, cues: [cue(wf(147 |
| `fourth` | `F51606` (+0.93 s) | Plot | text: FEB · EVENING |
| `February` | `F51631` (+1.35 s) | Plot | text: FEB · EVENING |
| `shipper` | `F51695` (+2.42 s) | Plot | text: THE SHIPPER / OF THE VINYL CHLORIDE, |
| `vinyl` | `F51730` (+3.00 s) | Plot | text: THE SHIPPER / OF THE VINYL CHLORIDE, |
| `Oxy` | `F51809` (+4.32 s) | Plot | text: THE SHIPPER / OF THE VINYL CHLORIDE, |
| `told` | `F51883` (+5.55 s) | Plot | text: TOLD / AND ITS CONTRACTORS |
| `Norfolk` | `F51903` (+5.88 s) | Plot | text: TOLD / AND ITS CONTRACTORS |
| `contractors` | `F51972` (+7.03 s) | Plot | text: TOLD / AND ITS CONTRACTORS |
| `saw` | `F52046` (+8.27 s) | Plot | text: TOLD / AND ITS CONTRACTORS |
| `low` | `F52069` (+8.65 s) | Plot | text: LOW / PROBABILITY |
| `probability` | `F52085` (+8.92 s) | Plot | text: LOW / PROBABILITY |
| `reaction` | `F52145` (+9.92 s) | Plot | text: OF THAT REACTION · NTSB P. 21 |

**148** · The hottest car's temperature, measured by those contractors, peaked at about one hundred and thirty-eight degrees Fahrenheit.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `hottest` | `F52238` (+0.15 s) | Plot | <Beat f={f} from={wf(148, 'hottest')} to={wf(151, 'afternoon')}> |
| `temperature` | `F52285` (+0.93 s) | Plot | THE HOTTEST CAR, OCPX80370 <span style={{opacity: onW(f, wf(148, 'temperature'), |
| `measured` | `F52340` (+1.85 s) | Plot | [wf(148, 'measured') - 10, wf(148, 'thirty-eight'), wf(149, 'air'), wf(150, 'aft |
| `contractors` | `F52386` (+2.62 s) | Plot | THE HOTTEST CAR, OCPX80370 <span style={{opacity: onW(f, wf(148, 'temperature'), |
| `peaked` | `F52458` (+3.82 s) | Plot | <div style={T(56, {fontWeight: 700, color: colors.cyan, opacity: onW(f, wf(148,  |
| `one` | `F52509` (+4.67 s) | Plot | PEAK ≈ <span style={{opacity: onW(f, wf(148, 'one'), 4)}}>1</span> |
| `thirty-eight` | `F52542` (+5.22 s) | (scene list) | {id: 'a4_plot', from: sf(146) - 20, to: sf(162) + 14, C: Plot, cues: [cue(wf(147 |
| `Fahrenheit` | `F52610` (+6.35 s) | Plot | <span style={{opacity: onW(f, wf(148, 'fahrenheit'), 4)}}>°F</span> |

**149** · This time that is the actual temperature, not a number above the air.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `time` | `F52718` (+0.28 s) | Plot | text: THIS TIME: / THE ACTUAL |
| `actual` | `F52794` (+1.55 s) | Plot | text: THIS TIME: / THE ACTUAL |
| `temperature` | `F52820` (+1.98 s) | Plot | text: THIS TIME: / THE ACTUAL |
| `number` | `F52895` (+3.23 s) | Plot | <div style={T(30, {color: colors.ink, marginTop: 6, opacity: onW(f, wf(149, 'num |
| `air` | `F52945` (+4.07 s) | Plot | text: ABOVE THE AIR |

**150** · By the afternoon of the sixth, it had fallen to about one hundred and twenty-six.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `afternoon` | `F53031` (+0.35 s) | Plot | <div style={T(44, {fontWeight: 700, color: colors.cyan, marginTop: 20, opacity:  |
| `sixth` | `F53077` (+1.12 s) | Plot | text: 06 FEB: / FALLEN TO ≈ |
| `fallen` | `F53138` (+2.13 s) | Plot | text: 06 FEB: / FALLEN TO ≈ |
| `one` | `F53195` (+3.08 s) | Plot | <span style={{opacity: onW(f, wf(150, 'one'), 4)}}>1</span> |
| `twenty-six` | `F53232` (+3.70 s) | (scene list) | {id: 'a4_plot', from: sf(146) - 20, to: sf(162) + 14, C: Plot, cues: [cue(wf(147 |

**151** · That afternoon the incident commander, the village's fire chief, met the governors of Ohio and Pennsylvania and dozens of other officials.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `afternoon` | `F53357` (+0.30 s) | Plot | <Beat f={f} from={wf(151, 'afternoon')} to={wf(155, 'two')}> |
| `incident` | `F53420` (+1.35 s) | Plot | text: THE INCIDENT / COMMANDER |
| `commander` | `F53447` (+1.80 s) | Plot | text: THE INCIDENT / COMMANDER |
| `fire` | `F53532` (+3.22 s) | Plot | text: THE INCIDENT / COMMANDER |
| `chief` | `F53554` (+3.58 s) | Plot | text: THE INCIDENT / COMMANDER |
| `governors` | `F53617` (+4.63 s) | Plot | text: THE GOVERNORS OF / OHIO |
| `Ohio` | `F53653` (+5.23 s) | Plot | text: THE GOVERNORS OF / OHIO |
| `Pennsylvania` | `F53697` (+5.97 s) | Plot | text: THE GOVERNORS OF / OHIO |
| `dozens` | `F53780` (+7.35 s) | Plot | text: THE GOVERNORS OF / OHIO |
| `officials` | `F53829` (+8.17 s) | Plot | text: THE GOVERNORS OF / OHIO |

**152** · Oxy Vinyls was not invited, the incident commander told investigators.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Oxy` | `F53921` (+0.07 s) | Plot | text: OXY VINYLS: / NOT |
| `not` | `F53988` (+1.18 s) | Plot | text: OXY VINYLS: / NOT |
| `invited` | `F54004` (+1.45 s) | Plot | text: OXY VINYLS: / NOT |
| `incident` | `F54071` (+2.57 s) | Plot | text: THE INCIDENT / COMMANDER |
| `commander` | `F54098` (+3.02 s) | Plot | text: THE INCIDENT / COMMANDER |
| `told` | `F54128` (+3.52 s) | Plot | text: THE INCIDENT / COMMANDER |

**153** · The N - T - S - B found no evidence that anyone outside Norfolk Southern and its contractors knew the shipper disagreed.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `found` | `F54321` (+1.35 s) | Plot | text: NTSB: / NO EVIDENCE |
| `evidence` | `F54363` (+2.05 s) | Plot | text: NTSB: / NO EVIDENCE |
| `outside` | `F54432` (+3.20 s) | Plot | text: NTSB: / NO EVIDENCE |
| `Norfolk` | `F54464` (+3.73 s) | Plot | text: NTSB: / NO EVIDENCE |
| `contractors` | `F54535` (+4.92 s) | Plot | text: NTSB: / NO EVIDENCE |
| `knew` | `F54596` (+5.93 s) | Plot | text: NTSB: / NO EVIDENCE |
| `disagreed` | `F54643` (+6.72 s) | Plot | text: NTSB: / NO EVIDENCE |

**154** · Then came a smaller meeting.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `smaller` | `F54767` (+0.73 s) | Plot | text: THEN A SMALLER / MEETING |
| `meeting` | `F54791` (+1.13 s) | Plot | text: THEN A SMALLER / MEETING |

**155** · Two contractor firms told him that if a car reached one hundred and fifty-three to one hundred and fifty-eight degrees, the reaction would run out of control.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Two` | `F54858` (+0.03 s) | Plot | text: CONTRACTOR / FIRMS (SPSI, SRS) |
| `contractor` | `F54873` (+0.28 s) | Plot | text: CONTRACTOR / FIRMS (SPSI, SRS) |
| `firms` | `F54910` (+0.90 s) | Plot | text: CONTRACTOR / FIRMS (SPSI, SRS) |
| `told` | `F54934` (+1.30 s) | Plot | text: CONTRACTOR / FIRMS (SPSI, SRS) |
| `reached` | `F55023` (+2.78 s) | Plot | text: IF A CAR REACHED 153 / TO 158 |
| `one` | `F55049` (+3.22 s) | Plot | <TankPlot f={f} upTo={upTo} bandAt={wf(155, 'one')} band153={wf(155, 'fifty-thre |
| `fifty-three` | `F55087` (+3.85 s) | (scene list) | {id: 'a4_plot', from: sf(146) - 20, to: sf(162) + 14, C: Plot, cues: [cue(wf(147 |
| `to` | `F55133` (+4.62 s) | Plot | text: IF A CAR REACHED 153 / TO 158 |
| `fifty-eight` | `F55183` (+5.45 s) | (scene list) | {id: 'a4_plot', from: sf(146) - 20, to: sf(162) + 14, C: Plot, cues: [cue(wf(147 |
| `degrees` | `F55215` (+5.98 s) | Plot | text: THE REACTION / WOULD RUN OUT OF |
| `reaction` | `F55285` (+7.15 s) | Plot | text: THE REACTION / WOULD RUN OUT OF |
| `run` | `F55330` (+7.90 s) | Plot | text: THE REACTION / WOULD RUN OUT OF |
| `control` | `F55361` (+8.42 s) | Plot | text: THE REACTION / WOULD RUN OUT OF |

**156** · The investigators did not find that range in the written guidance consulted at the scene, or in the shipper's messages.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `find` | `F55535` (+1.40 s) | Plot | text: NOT FOUND / IN THE WRITTEN GUIDANCE |
| `guidance` | `F55622` (+2.85 s) | Plot | text: NOT FOUND / IN THE WRITTEN GUIDANCE |
| `consulted` | `F55654` (+3.38 s) | Plot | text: NOT FOUND / IN THE WRITTEN GUIDANCE |
| `scene` | `F55706` (+4.25 s) | Plot | text: NOT FOUND / IN THE WRITTEN GUIDANCE |
| `shipper's` | `F55780` (+5.48 s) | Plot | text: OR IN THE SHIPPER'S / MESSAGES · P. 28 N. 55 |
| `messages` | `F55804` (+5.88 s) | Plot | text: OR IN THE SHIPPER'S / MESSAGES · P. 28 N. 55 |

**157** · The incident commander said he was given thirteen minutes to decide.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `incident` | `F55894` (+0.17 s) | Plot | <Beat f={f} from={wf(157, 'incident')} to={wf(158, 'burn')}> |
| `commander` | `F55921` (+0.62 s) | Plot | text: THE INCIDENT COMMANDER / WAS GIVEN |
| `given` | `F55985` (+1.68 s) | Plot | text: THE INCIDENT COMMANDER / WAS GIVEN |
| `thirteen` | `F56008` (+2.07 s) | (scene list) | {id: 'a4_plot', from: sf(146) - 20, to: sf(162) + 14, C: Plot, cues: [cue(wf(147 |
| `minutes` | `F56042` (+2.63 s) | Plot | bump · <div style={T(120, {fontWeight: 700, color: colors.amber, transform: ` |
| `decide` | `F56076` (+3.20 s) | Plot | text: TO DECIDE · P. 28 |

**158** · The burn, they told him, had to start before three in the afternoon, to finish in daylight and avoid a temperature inversion, a layer of air that would keep the vapor cloud from dispersing.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `burn` | `F56171` (+0.15 s) | Plot | <Beat f={f} from={wf(158, 'burn')} to={wf(159, 'incident')}> |
| `told` | `F56221` (+0.98 s) | Plot | text: THEY TOLD HIM, / MUST START |
| `start` | `F56292` (+2.17 s) | Plot | text: THEY TOLD HIM, / MUST START |
| `three` | `F56334` (+2.87 s) | (scene list) | {id: 'a4_plot', from: sf(146) - 20, to: sf(162) + 14, C: Plot, cues: [cue(wf(147 |
| `afternoon` | `F56367` (+3.42 s) | Plot | text: BEFORE 3:00 / P.M. |
| `finish` | `F56436` (+4.57 s) | Plot | text: TO FINISH / IN DAYLIGHT |
| `daylight` | `F56464` (+5.03 s) | Plot | text: TO FINISH / IN DAYLIGHT |
| `temperature` | `F56547` (+6.42 s) | Plot | text: TO FINISH / IN DAYLIGHT |
| `inversion` | `F56580` (+6.97 s) | Plot | text: TO FINISH / IN DAYLIGHT |
| `layer` | `F56655` (+8.22 s) | Plot | text: A LAYER / OF AIR |
| `air` | `F56686` (+8.73 s) | Plot | text: A LAYER / OF AIR |
| `vapor` | `F56746` (+9.73 s) | Plot | text: A LAYER / OF AIR |
| `dispersing` | `F56801` (+10.65 s) | Plot | text: A LAYER / OF AIR |

**159** · The incident commander consented.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `incident` | `F56912` (+0.17 s) | Plot | <Beat f={f} from={wf(159, 'incident')} to={sf(162) + 30}> |
| `consented` | `F56970` (+1.13 s) | Plot | text: THE INCIDENT COMMANDER CONSENTED |

**160** · The charges went off at four thirty-seven.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `charges` | `F57060` (+0.13 s) | Plot | text: THE CHARGES / WENT OFF |
| `off` | `F57105` (+0.88 s) | Plot | text: THE CHARGES / WENT OFF |
| `four` | `F57128` (+1.27 s) | Plot | <PlotEvent f={f} fps={fps} h={40.62} at={wf(160, 'four')} label={f >= wf(160, 't |
| `thirty-seven` | `F57144` (+1.53 s) | (scene list) | {id: 'a4_plot', from: sf(146) - 20, to: sf(162) + 14, C: Plot, cues: [cue(wf(147 |

**161** · Three in the afternoon, the N - T - S - B noted, was not a hard deadline.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Three` | `F57480` (+0.05 s) | Plot | <div style={T(36, {fontWeight: 700, color: colors.void, background: colors.cyan, |
| `afternoon` | `F57510` (+0.55 s) | Plot | text: P.M. / NOTED: |
| `N` | `F57577` (+1.67 s) | Plot | text: P.M. / NOTED: |
| `noted` | `F57619` (+2.37 s) | Plot | text: P.M. / NOTED: |
| `not` | `F57683` (+3.43 s) | Plot | text: P.M. / NOTED: |
| `hard` | `F57707` (+3.83 s) | Plot | {line('NTSB RIR-24-05 P. 154', wf(161, 'hard'), 26)} |

**162** · Two numbers decided this town's week.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Two` | `F57816` (+0.02 s) | TwoNumbers | <div style={{position: 'absolute', left: 0, right: 0, top: 150, textAlign: 'cent |
| `decided` | `F57858` (+0.72 s) | TwoNumbers | text: DECIDED / THIS TOWN'S WEEK |
| `week` | `F57931` (+1.93 s) | TwoNumbers | text: DECIDED / THIS TOWN'S WEEK |

**163** · One matched a definition written for billing.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `One` | `F57995` (+0.13 s) | TwoNumbers | <Card x={160} y={300} w={760} h={520} o={onW(f, wf(163, 'one'), 10)} accent={col |
| `matched` | `F58010` (+0.38 s) | TwoNumbers | text: 170°F |
| `definition` | `F58034` (+0.78 s) | TwoNumbers | <div style={T(36, {color: colors.ink, marginTop: 20, opacity: onW(f, wf(163, 'de |
| `written` | `F58070` (+1.38 s) | TwoNumbers | text: WRITTEN |
| `billing` | `F58100` (+1.88 s) | (scene list) | {id: 'a4_two', from: sf(162) - 20, to: sf(165) + 14, C: TwoNumbers, cues: [cue(w |

**164** · The other, investigators could not find in the guidance used at the scene.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `other` | `F58171` (+0.18 s) | TwoNumbers | <Card x={1000} y={300} w={760} h={520} o={onW(f, wf(164, 'other'), 10)} accent={ |
| `investigators` | `F58211` (+0.85 s) | TwoNumbers | text: INVESTIGATORS / IN THE GUIDANCE |
| `find` | `F58285` (+2.08 s) | TwoNumbers | <div style={T(36, {color: colors.ink, marginTop: 20, opacity: onW(f, wf(164, 'fi |
| `guidance` | `F58320` (+2.67 s) | TwoNumbers | text: INVESTIGATORS / IN THE GUIDANCE |
| `scene` | `F58385` (+3.75 s) | (scene list) | {id: 'a4_two', from: sf(162) - 20, to: sf(165) + 14, C: TwoNumbers, cues: [cue(w |

**165** · The N - T - S - B's finding: the temperatures on scene did not show that reaction, and examinations afterwards confirmed it.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `finding` | `F58633` (+1.20 s) | NotNecessary | hl= · <RecordPage set="rir" start={sf(165) - 10} end={sf(167) + 14} label="N |
| `temperatures` | `F58710` (+2.48 s) | NotNecessary | hl= · <RecordPage set="rir" start={sf(165) - 10} end={sf(167) + 14} label="N |
| `scene` | `F58757` (+3.27 s) | NotNecessary | text: ON SCENE: / NO REACTION |
| `reaction` | `F58836` (+4.58 s) | NotNecessary | text: ON SCENE: / NO REACTION |
| `examinations` | `F58904` (+5.72 s) | NotNecessary | text: ON SCENE: / NO REACTION |
| `confirmed` | `F58989` (+7.13 s) | NotNecessary | hl= · <RecordPage set="rir" start={sf(165) - 10} end={sf(167) + 14} label="N |

**166** · The vent and burn was not necessary.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `vent` | `F59079` (+0.13 s) | NotNecessary | hl= · <RecordPage set="rir" start={sf(165) - 10} end={sf(167) + 14} label="N |
| `not` | `F59162` (+1.52 s) | (scene list) | {id: 'a4_notnecessary', from: sf(165) - 20, to: sf(172) + 14, C: NotNecessary, c |
| `necessary` | `F59178` (+1.78 s) | NotNecessary | hl= · <RecordPage set="rir" start={sf(165) - 10} end={sf(167) + 14} label="N |

**167** · Norfolk Southern and its contractors, the board found, compromised the integrity of the decision by creating unwarranted urgency.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Norfolk` | `F59270` (+0.07 s) | NotNecessary | <Pop f={f} fps={fps} on={wf(167, 'norfolk')} off={sf(168) - 6} style={{position: |
| `contractors` | `F59344` (+1.30 s) | NotNecessary | text: AND ITS CONTRACTORS / OF THE DECISION |
| `board` | `F59413` (+2.45 s) | NotNecessary | hl= · <RecordPage set="rir" start={sf(167) - 10} end={sf(168) + 14} label="N |
| `compromised` | `F59479` (+3.55 s) | NotNecessary | hl= · <RecordPage set="rir" start={sf(167) - 10} end={sf(168) + 14} label="N |
| `integrity` | `F59527` (+4.35 s) | NotNecessary | text: AND ITS CONTRACTORS / OF THE DECISION |
| `decision` | `F59579` (+5.22 s) | NotNecessary | text: AND ITS CONTRACTORS / OF THE DECISION |
| `creating` | `F59635` (+6.15 s) | NotNecessary | text: AND ITS CONTRACTORS / OF THE DECISION |
| `unwarranted` | `F59673` (+6.78 s) | NotNecessary | text: AND ITS CONTRACTORS / OF THE DECISION |
| `urgency` | `F59724` (+7.63 s) | NotNecessary | hl= · <RecordPage set="rir" start={sf(167) - 10} end={sf(168) + 14} label="N |

**168** · The board also found that one industry guide consulted at the scene overstated the risk of that reaction.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `found` | `F59862` (+0.87 s) | NotNecessary | hl= · <RecordPage set="rir" start={sf(168) - 10} end={sf(169) + 14} label="N |
| `one` | `F59899` (+1.48 s) | NotNecessary | text: CONSULTED / AT THE SCENE |
| `guide` | `F59941` (+2.18 s) | NotNecessary | hl= · <RecordPage set="rir" start={sf(168) - 10} end={sf(169) + 14} label="N |
| `consulted` | `F59962` (+2.53 s) | NotNecessary | text: CONSULTED / AT THE SCENE |
| `scene` | `F60013` (+3.38 s) | NotNecessary | text: CONSULTED / AT THE SCENE |
| `overstated` | `F60056` (+4.10 s) | NotNecessary | hl= · <RecordPage set="rir" start={sf(168) - 10} end={sf(169) + 14} label="N |
| `risk` | `F60110` (+5.00 s) | NotNecessary | text: CONSULTED / AT THE SCENE |
| `reaction` | `F60147` (+5.62 s) | NotNecessary | hl= · <RecordPage set="rir" start={sf(168) - 10} end={sf(169) + 14} label="N |

**169** · Norfolk Southern's answer: the only motivation of the company and its contractors was the health and safety of the community and the first responders, and the incident command had been told about twenty hours ahead that a burn might be needed.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `answer` | `F60298` (+0.93 s) | NotNecessary | <RecordDoc doc="ns_release_motivation" start={sf(169) - 10} end={wf(169, 'incide |
| `only` | `F60379` (+2.28 s) | NotNecessary | text: ONLY MOTIVATION OF / THE COMPANY |
| `motivation` | `F60396` (+2.57 s) | NotNecessary | <RecordDoc doc="ns_release_motivation" start={sf(169) - 10} end={wf(169, 'incide |
| `company` | `F60447` (+3.42 s) | NotNecessary | text: ONLY MOTIVATION OF / THE COMPANY |
| `contractors` | `F60499` (+4.28 s) | NotNecessary | text: ONLY MOTIVATION OF / THE COMPANY |
| `health` | `F60582` (+5.67 s) | NotNecessary | text: ONLY MOTIVATION OF / THE COMPANY |
| `community` | `F60650` (+6.80 s) | NotNecessary | text: ONLY MOTIVATION OF / THE COMPANY |
| `first` | `F60719` (+7.95 s) | NotNecessary | text: ONLY MOTIVATION OF / THE COMPANY |
| `responders` | `F60739` (+8.28 s) | NotNecessary | text: ONLY MOTIVATION OF / THE COMPANY |
| `and` | `F60820` (+9.63 s) | NotNecessary | text: ONLY MOTIVATION OF / THE COMPANY |
| `incident` | `F60838` (+9.93 s) | NotNecessary | <RecordDoc doc="ns_release_20h" start={wf(169, 'incident') - 10} end={sf(170) +  |
| `command` | `F60864` (+10.37 s) | NotNecessary | <RecordDoc doc="ns_release_20h" start={wf(169, 'incident') - 10} end={sf(170) +  |
| `told` | `F60913` (+11.18 s) | NotNecessary | <RecordDoc doc="ns_release_20h" start={wf(169, 'incident') - 10} end={sf(170) +  |
| `twenty` | `F60951` (+11.82 s) | NotNecessary | text: ONLY MOTIVATION OF / THE COMPANY |
| `ahead` | `F60996` (+12.57 s) | NotNecessary | text: ONLY MOTIVATION OF / THE COMPANY |
| `burn` | `F61055` (+13.55 s) | NotNecessary | text: ONLY MOTIVATION OF / THE COMPANY |
| `needed` | `F61101` (+14.32 s) | NotNecessary | text: ONLY MOTIVATION OF / THE COMPANY |

**170** · The company does not agree that it withheld the shipper's views.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `company` | `F61196` (+0.13 s) | NotNecessary | <RecordDoc doc="ns_release_withheld" start={sf(170) - 10} end={sf(171) + 14} at= |
| `agree` | `F61250` (+1.03 s) | NotNecessary | <RecordDoc doc="ns_release_withheld" start={sf(170) - 10} end={sf(171) + 14} at= |
| `withheld` | `F61294` (+1.77 s) | NotNecessary | <Pop f={f} fps={fps} on={wf(170, 'withheld')} off={sf(171) - 6} style={{position |
| `views` | `F61361` (+2.88 s) | NotNecessary | text: THE SHIPPER'S VIEWS |

**171** · The incident commander told investigators that he bore the responsibility.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `commander` | `F61477` (+0.60 s) | NotNecessary | <Pop f={f} fps={fps} on={wf(171, 'commander')} off={ef(171) + 24} style={{positi |
| `told` | `F61510` (+1.15 s) | NotNecessary | hl= · <RecordPage set="rir" start={sf(171) - 10} end={ef(171) + 30} label="N |
| `investigators` | `F61528` (+1.45 s) | NotNecessary | text: TO THE NTSB |
| `bore` | `F61613` (+2.87 s) | NotNecessary | hl= · <RecordPage set="rir" start={sf(171) - 10} end={ef(171) + 30} label="N |
| `responsibility` | `F61637` (+3.27 s) | NotNecessary | hl= · <RecordPage set="rir" start={sf(171) - 10} end={ef(171) + 30} label="N |

**172** · One more claim you will often see: they burned it because it was the cheapest option.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `One` | `F61764` (+0.13 s) | Verdict4 | text: THEY BURNED IT / BECAUSE |
| `see` | `F61848` (+1.53 s) | Verdict4 | text: THEY BURNED IT / BECAUSE |
| `burned` | `F61927` (+2.85 s) | Verdict4 | text: THEY BURNED IT / BECAUSE |
| `because` | `F61967` (+3.52 s) | Verdict4 | text: THEY BURNED IT / BECAUSE |
| `cheapest` | `F62010` (+4.23 s) | Verdict4 | text: THEY BURNED IT / BECAUSE |
| `option` | `F62043` (+4.78 s) | Verdict4 | text: THEY BURNED IT / BECAUSE |

**173** · That is not in the record.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `not` | `F62140` (+0.43 s) | Verdict4 | text: THEY BURNED IT / BECAUSE |
| `record` | `F62173` (+0.98 s) | (scene list) | {id: 'a4_verdict4', from: sf(172) - 20, to: sf(176) + 30, C: Verdict4, cues: [cu |

**174** · What is in the record is the urgency, the information the incident commander was given, and the reason Norfolk Southern gives.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `What` | `F62245` (+0.02 s) | Verdict4 | <div style={T(36, {color: colors.ink, opacity: onW(f, wf(174, 'what'), 6)})}> |
| `record` | `F62286` (+0.70 s) | Verdict4 | text: IN THE RECORD |
| `urgency` | `F62349` (+1.75 s) | Verdict4 | text: THE URGENCY |
| `information` | `F62421` (+2.95 s) | Verdict4 | <div style={T(56, {fontWeight: 700, color: colors.ink, marginTop: 16, opacity: o |
| `commander` | `F62499` (+4.25 s) | Verdict4 | text: THE INCIDENT COMMANDER / WAS GIVEN |
| `given` | `F62536` (+4.87 s) | Verdict4 | text: THE INCIDENT COMMANDER / WAS GIVEN |
| `reason` | `F62595` (+5.85 s) | Verdict4 | <div style={T(56, {fontWeight: 700, color: colors.ink, marginTop: 16, opacity: o |
| `Norfolk` | `F62623` (+6.32 s) | Verdict4 | text: NORFOLK SOUTHERN / GIVES |
| `gives` | `F62675` (+7.18 s) | Verdict4 | text: NORFOLK SOUTHERN / GIVES |

**175** · The N - T - S - B itself could not determine the main reason for the company's preference for the burn.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `itself` | `F62804` (+1.00 s) | Verdict4 | hl= · <RecordPage set="rir" start={sf(175) - 10} end={ef(175) + 60} label="N |
| `determine` | `F62882` (+2.30 s) | Verdict4 | hl= · <RecordPage set="rir" start={sf(175) - 10} end={ef(175) + 60} label="N |
| `main` | `F62923` (+2.98 s) | Verdict4 | <Pop f={f} fps={fps} on={wf(175, 'main')} off={ef(175) + 54} style={{position: ' |
| `reason` | `F62942` (+3.30 s) | Verdict4 | hl= · <RecordPage set="rir" start={sf(175) - 10} end={ef(175) + 60} label="N |
| `preference` | `F63009` (+4.42 s) | Verdict4 | text: NOT DETERMINED |
| `burn` | `F63056` (+5.20 s) | Verdict4 | hl= · <RecordPage set="rir" start={sf(175) - 10} end={ef(175) + 60} label="N |

