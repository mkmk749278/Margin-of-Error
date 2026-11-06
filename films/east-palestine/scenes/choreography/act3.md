# Choreography index: Act 3

Word-level choreography (PLAYBOOK §10.6), **generated from the scene code** (`python3 scripts/choreo_index.py` from the film folder; re-run after
any edit) so it cannot drift from it. One row per word-locked event: the spoken trigger, its measured frame (60 fps) and offset
from the sentence start, the scene component, and what changes (the on-screen text that arrives, or the driving line of
code). Kit: `lib/remotion/Kinetic.tsx` and `remotion/beats.tsx` (`KeyLine` parts land on their words, `ChunkQuote` reveals a
record quote chunk by chunk, `WordLine` builds a title word by word). Kit for this film: `remotion/parts*.tsx`.
Sync audit: `review/sync_audit.md`.

**67** · The answer is in the industry's rulebook.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `answer` | `F20179` (+0.28 s) | Rulebook | <div style={T(44, {color: colors.ink, opacity: onW(f, wf(67, 'answer'), 8)})}> |
| `industry's` | `F20235` (+1.22 s) | Rulebook | text: THE INDUSTRY'S / RULEBOOK |
| `rulebook` | `F20270` (+1.80 s) | Rulebook | text: THE INDUSTRY'S / RULEBOOK |

**68** · The A - A - R, the Association of American Railroads, defines an overheated bearing as one at least one hundred and seventy degrees above the air.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `A` | `F20346` (+0.25 s) | Rulebook | text: A |
| `A` | `F20364` (+0.55 s) | Rulebook | text: A |
| `R` | `F20389` (+0.97 s) | (scene list) | {id: 'a3_rulebook', from: sf(67) - 30, to: C1 + 10, C: Rulebook, cues: [cue(wf(6 |
| `Association` | `F20418` (+1.45 s) | Rulebook | <div style={T(44, {color: colors.ink, marginTop: 20, opacity: onW(f, wf(68, 'ass |
| `American` | `F20465` (+2.23 s) | Rulebook | text: AMERICAN RAILROADS |
| `defines` | `F20548` (+3.62 s) | (scene list) | {id: 'a3_rulebook', from: sf(67) - 30, to: C1 + 10, C: Rulebook, cues: [cue(wf(6 |
| `overheated` | `F20591` (+4.33 s) | (scene list) | {id: 'a3_rulebook', from: sf(67) - 30, to: C1 + 10, C: Rulebook, cues: [cue(wf(6 |
| `bearing` | `F20631` (+5.00 s) | Rulebook | hl= · <RecordPage set="hearing" start={wf(68, 'defines') - 20} end={sf(69) + |
| `one` | `F20681` (+5.83 s) | Rulebook | <Pop f={f} fps={fps} on={wf(68, 'one', 0)} off={sf(69) - 6} style={{position: 'a |
| `least` | `F20699` (+6.13 s) | Rulebook | text: AT LEAST / ABOVE THE AIR |
| `one` | `F20722` (+6.52 s) | Rulebook | text: AT LEAST / ABOVE THE AIR |
| `seventy` | `F20763` (+7.20 s) | Rulebook | text: AT LEAST / ABOVE THE AIR |
| `air` | `F20849` (+8.63 s) | Rulebook | text: AT LEAST / ABOVE THE AIR |

**69** · The N - T - S - B found that this definition is based on what makes a repair billable to the railcar's owner.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `B` | `F20961` (+0.88 s) | Rulebook | <Pop f={f} fps={fps} on={wf(69, 'b')} off={sf(70) - 6} style={{position: 'absolu |
| `found` | `F20998` (+1.50 s) | Rulebook | hl= · <RecordPage set="rir" start={sf(69) - 10} end={sf(70) + 14} label="NTS |
| `definition` | `F21034` (+2.10 s) | Rulebook | hl= · <RecordPage set="rir" start={sf(69) - 10} end={sf(70) + 14} label="NTS |
| `makes` | `F21119` (+3.52 s) | Rulebook | <div style={{position: 'absolute', right: 120, top: 940, ...T(36, {color: colors |
| `billable` | `F21171` (+4.38 s) | Rulebook | text: BILLABLE / TO THE OWNER |
| `owner` | `F21255` (+5.78 s) | Rulebook | text: BILLABLE / TO THE OWNER |

**70** · It relates, the board wrote, to billing for repairs, not directly to safety.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `relates` | `F21324` (+0.18 s) | Rulebook | hl= · <RecordPage set="rir" start={sf(70) - 10} end={sf(71) + 14} label="NTS |
| `board` | `F21374` (+1.02 s) | Rulebook | <Pop f={f} fps={fps} on={wf(70, 'board')} off={sf(71) - 6} style={{position: 'ab |
| `wrote` | `F21391` (+1.30 s) | Rulebook | text: THE BOARD / WROTE |
| `billing` | `F21441` (+2.13 s) | Rulebook | hl= · <RecordPage set="rir" start={sf(70) - 10} end={sf(71) + 14} label="NTS |
| `not` | `F21530` (+3.62 s) | Rulebook | <Pop f={f} fps={fps} on={wf(70, 'not')} off={sf(71) - 6} style={{position: 'abso |
| `safety` | `F21592` (+4.65 s) | Rulebook | hl= · <RecordPage set="rir" start={sf(70) - 10} end={sf(71) + 14} label="NTS |

**71** · In June twenty twenty-three, at a public hearing in East Palestine, the board's technical panel put that to the A - A - R's senior vice president for safety and operations.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `June` | `F21689` (+0.23 s) | Rulebook | text: JUN |
| `twenty-three` | `F21731` (+0.93 s) | Rulebook | text: 2023 |
| `public` | `F21801` (+2.10 s) | Rulebook | text: NTSB PUBLIC HEARING |
| `hearing` | `F21824` (+2.48 s) | Rulebook | text: NTSB PUBLIC HEARING |
| `East` | `F21857` (+3.03 s) | Rulebook | text: EAST PALESTINE HIGH SCHOOL · / EAST PALESTINE, OHIO |
| `Palestine` | `F21871` (+3.27 s) | Rulebook | text: EAST PALESTINE HIGH SCHOOL · / EAST PALESTINE, OHIO |
| `board's` | `F21943` (+4.47 s) | Rulebook | <div style={{marginTop: 70, opacity: onW(f, wf(71, "board's"), 10)}}> |
| `panel` | `F21995` (+5.33 s) | Rulebook | text: THE BOARD'S TECHNICAL PANEL |
| `A` | `F22068` (+6.55 s) | Rulebook | <div style={{marginTop: 40, opacity: onW(f, wf(71, 'a', 1), 10)}}> |
| `senior` | `F22130` (+7.58 s) | Rulebook | text: SENIOR VICE PRESIDENT |
| `safety` | `F22211` (+8.93 s) | Rulebook | <div style={T(36, {color: colors.ink, opacity: onW(f, wf(71, 'safety'), 8)})}> |
| `operations` | `F22245` (+9.50 s) | Rulebook | text: AND OPERATIONS · NTSB P. 44 |

**72** · Then a member of the N - T - S - B's technical panel asked whether these thresholds are limits for safe operation at all.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `member` | `F25460` (+0.75 s) | Question | <Pop f={f} fps={fps} on={wf(72, 'member')} off={C2 - 6} style={{position: 'absol |
| `N` | `F25504` (+1.48 s) | Question | text: TECHNICAL PANEL |
| `technical` | `F25560` (+2.42 s) | Question | text: TECHNICAL PANEL |
| `panel` | `F25589` (+2.90 s) | Question | text: TECHNICAL PANEL |
| `asked` | `F25635` (+3.67 s) | Question | hl= · <RecordPage set="hearing" start={sf(72) - 10} end={C2 + 10} label="THE |
| `thresholds` | `F25684` (+4.48 s) | (scene list) | {id: 'a3_question', from: sf(72) - 16, to: C2 + 10, C: Question, cues: [cue(sf(7 |
| `limits` | `F25736` (+5.35 s) | Question | hl= · <RecordPage set="hearing" start={sf(72) - 10} end={C2 + 10} label="THE |
| `safe` | `F25769` (+5.90 s) | Question | hl= · <RecordPage set="hearing" start={sf(72) - 10} end={C2 + 10} label="THE |
| `operation` | `F25786` (+6.18 s) | Question | hl= · <RecordPage set="hearing" start={sf(72) - 10} end={C2 + 10} label="THE |
| `all` | `F25832` (+6.95 s) | Question | hl= · <RecordPage set="hearing" start={sf(72) - 10} end={C2 + 10} label="THE |

**73** · A billing standard.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `billing` | `F28171` (+0.18 s) | Billing | text: A BILLING STANDARD. |
| `standard` | `F28196` (+0.60 s) | (scene list) | {id: 'a3_billing', from: sf(73) - 16, to: sf(76) + 14, C: Billing, cues: [cue(wf |

**74** · And, in the same breath, the industry's point: no railroad wants a derailment.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `same` | `F28325` (+0.90 s) | Billing | <Card x={260} y={380} w={1400} h={330} o={Math.min(onW(f, wf(74, 'same'), 12), o |
| `breath` | `F28342` (+1.18 s) | Billing | text: IN THE SAME BREATH · HEARING DAY 2 P. 216 |
| `point` | `F28423` (+2.53 s) | Billing | text: of the operating railroad |
| `railroad` | `F28507` (+3.93 s) | Billing | text: not to have derailments |
| `derailment` | `F28564` (+4.88 s) | Billing | text: attributable to hot bearings |

**75** · The witness went on to explain that the association can set standards only for cars passed between railroads, not for what a railroad does on its own track.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `The` | `F28666` (+0.00 s) | Billing | <div style={{position: 'absolute', left: 0, right: 0, top: 150, textAlign: 'cent |
| `explain` | `F28725` (+0.98 s) | Billing | THE WITNESS WENT ON <span style={{opacity: onW(f, wf(75, 'explain'), 8)}}>· HEAR |
| `association` | `F28773` (+1.78 s) | Billing | <Card x={260} y={380} w={1400} h={330} o={Math.min(onW(f, wf(74, 'same'), 12), o |
| `standards` | `F28849` (+3.05 s) | Billing | text: STANDARDS / ONLY |
| `only` | `F28891` (+3.75 s) | Billing | text: STANDARDS / ONLY |
| `cars` | `F28919` (+4.22 s) | Billing | text: FOR CARS PASSED |
| `passed` | `F28944` (+4.63 s) | Billing | lead · <rect x={20 + 400 * lead(f, wf(75, 'passed'), 40)} y={66} width={70} h |
| `between` | `F28965` (+4.98 s) | Billing | text: BETWEEN RAILROADS |
| `not` | `F29052` (+6.43 s) | Billing | <Card x={980} y={240} w={800} h={560} o={onW(f, wf(75, 'not'), 10)} accent={colo |
| `does` | `F29120` (+7.57 s) | Billing | text: DOES ON ITS |
| `own` | `F29156` (+8.17 s) | Billing | text: OWN TRACK |
| `track` | `F29168` (+8.37 s) | Billing | <div style={T(30, {color: colors.ink, marginTop: 40, opacity: onW(f, wf(75, 'tra |

**76** · Norfolk Southern testified that it based its own thresholds on its experience and on the industry's standards.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `testified` | `F29294` (+0.85 s) | NSLine | hl= · <RecordPage set="rir" start={sf(76) - 10} end={sf(77) + 14} label="NTS |
| `based` | `F29350` (+1.78 s) | NSLine | hl= · <RecordPage set="rir" start={sf(76) - 10} end={sf(77) + 14} label="NTS |
| `thresholds` | `F29398` (+2.58 s) | NSLine | hl= · <RecordPage set="rir" start={sf(76) - 10} end={sf(77) + 14} label="NTS |
| `experience` | `F29456` (+3.55 s) | NSLine | <Pop f={f} fps={fps} on={wf(76, 'experience')} off={sf(77) - 6} style={{position |
| `and` | `F29523` (+4.67 s) | NSLine | text: INDUSTRY STANDARDS |
| `industry's` | `F29548` (+5.08 s) | NSLine | text: INDUSTRY STANDARDS |

**77** · Its critical alarm, before the accident, was two hundred.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `critical` | `F29674` (+0.23 s) | NSLine | text: NORFOLK SOUTHERN · CRITICAL ALARM |
| `before` | `F29736` (+1.27 s) | NSLine | text: BEFORE THE ACCIDENT |
| `two` | `F29826` (+2.77 s) | NSLine | text: 200°F |
| `hundred` | `F29840` (+3.00 s) | (scene list) | {id: 'a3_nsline', from: sf(76) - 20, to: sf(81) + 14, C: NSLine, cues: [cue(wf(7 |

**78** · After it, one hundred and seventy.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `After` | `F29896` (+0.05 s) | NSLine | <div style={{textAlign: 'center', opacity: onW(f, wf(78, 'after'), 10)}}> |
| `seventy` | `F29984` (+1.52 s) | (scene list) | {id: 'a3_nsline', from: sf(76) - 20, to: sf(81) + 14, C: NSLine, cues: [cue(wf(7 |

**79** · At the same hearing, the industry's witness said the railroads were now all committed to using one hundred and seventy.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `hearing` | `F30103` (+0.60 s) | NSLine | <Pop f={f} fps={fps} on={wf(79, 'hearing')} off={sf(80) - 6} style={{position: ' |
| `witness` | `F30186` (+1.98 s) | NSLine | text: THE INDUSTRY'S WITNESS |
| `said` | `F30214` (+2.45 s) | NSLine | hl= · <RecordPage set="hearing" start={sf(79) - 10} end={sf(80) + 14} label= |
| `now` | `F30275` (+3.47 s) | NSLine | <Pop f={f} fps={fps} on={wf(79, 'now')} off={sf(80) - 6} style={{position: 'abso |
| `all` | `F30294` (+3.78 s) | NSLine | text: ALL / USING 170 |
| `committed` | `F30308` (+4.02 s) | NSLine | hl= · <RecordPage set="hearing" start={sf(79) - 10} end={sf(80) + 14} label= |
| `using` | `F30347` (+4.67 s) | NSLine | text: ALL / USING 170 |
| `seventy` | `F30413` (+5.77 s) | NSLine | hl= · <RecordPage set="hearing" start={sf(79) - 10} end={sf(80) + 14} label= |

**80** · So after East Palestine, on this railroad, the number in the billing definition became the line at which a train must stop at once.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `So` | `F30491` (+0.08 s) | NSLine | text: 170°F |
| `Palestine` | `F30568` (+1.37 s) | NSLine | text: EAST PALESTINE / ON NORFOLK SOUTHERN |
| `railroad` | `F30650` (+2.73 s) | NSLine | text: EAST PALESTINE / ON NORFOLK SOUTHERN |
| `number` | `F30715` (+3.82 s) | NSLine | <div style={{opacity: onW(f, wf(80, 'number'), 8)}}> |
| `billing` | `F30749` (+4.38 s) | NSLine | text: THE BILLING |
| `definition` | `F30767` (+4.68 s) | NSLine | text: DEFINITION |
| `became` | `F30803` (+5.28 s) | NSLine | lead · <div style={{width: 200 * lead16(f, wf(80, 'became')), height: 6, back |
| `line` | `F30834` (+5.80 s) | NSLine | <div style={{opacity: onW(f, wf(80, 'line'), 8)}}> |
| `stop` | `F30919` (+7.22 s) | NSLine | <div style={T(56, {fontWeight: 700, color: colors.red, opacity: onW(f, wf(80, 's |
| `once` | `F30951` (+7.75 s) | (scene list) | {id: 'a3_nsline', from: sf(76) - 20, to: sf(81) + 14, C: NSLine, cues: [cue(wf(7 |

**81** · Every line like this is a trade.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Every` | `F31024` (+0.03 s) | Trade | <div style={{position: 'absolute', left: 0, right: 0, top: 120, textAlign: 'cent |
| `trade` | `F31112` (+1.50 s) | Trade | text: IS A TRADE |

**82** · Set it too low, and trains stop for nothing.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Set` | `F31179` (+0.08 s) | Trade | <div style={{position: 'absolute', left: 220, top: 760, opacity: onW(f, wf(82, ' |
| `low` | `F31216` (+0.70 s) | (scene list) | {id: 'a3_trade', from: sf(81) - 20, to: sf(85) + 14, C: Trade, cues: [cue(wf(82, |
| `trains` | `F31260` (+1.43 s) | Trade | <div style={T(44, {fontWeight: 700, opacity: onW(f, wf(82, 'trains'), 8), ...lit |
| `nothing` | `F31314` (+2.33 s) | Trade | text: FOR NOTHING |

**83** · Set it too high, and a failing bearing keeps rolling.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Set` | `F31376` (+0.07 s) | Trade | <div style={{position: 'absolute', right: 220, top: 250, textAlign: 'right', opa |
| `high` | `F31409` (+0.62 s) | (scene list) | {id: 'a3_trade', from: sf(81) - 20, to: sf(85) + 14, C: Trade, cues: [cue(wf(82, |
| `failing` | `F31465` (+1.55 s) | Trade | <div style={T(44, {fontWeight: 700, opacity: onW(f, wf(83, 'failing'), 8), ...li |
| `keeps` | `F31519` (+2.45 s) | Trade | text: KEEPS ROLLING |
| `rolling` | `F31540` (+2.80 s) | Trade | <div style={T(44, {fontWeight: 700, opacity: onW(f, wf(83, 'failing'), 8), ...li |

**84** · In the N - T - S - B's words, railroads choose their thresholds by balancing between preventing bearing failures and avoiding unnecessary stops.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `In` | `F31620` (+0.05 s) | Trade | const pageAt = wf(84, 'in'); |
| `words` | `F31693` (+1.27 s) | Trade | hl= · <RecordPage set="rir" start={pageAt - 10} end={ef(84) + 30} label="NTS |
| `railroads` | `F31746` (+2.15 s) | Trade | <Pop f={f} fps={fps} on={wf(84, 'railroads')} off={ef(84) + 20} style={{position |
| `choose` | `F31785` (+2.80 s) | Trade | text: CHOOSE / THRESHOLDS |
| `thresholds` | `F31817` (+3.33 s) | Trade | text: CHOOSE / THRESHOLDS |
| `balancing` | `F31868` (+4.18 s) | (scene list) | {id: 'a3_trade', from: sf(81) - 20, to: sf(85) + 14, C: Trade, cues: [cue(wf(82, |
| `preventing` | `F31927` (+5.17 s) | Trade | <div style={{position: 'absolute', right: 120, top: 950, ...T(36, {color: colors |
| `failures` | `F31987` (+6.17 s) | Trade | text: BEARING FAILURES |
| `avoiding` | `F32044` (+7.12 s) | Trade | text: BEARING FAILURES |
| `unnecessary` | `F32081` (+7.73 s) | Trade | hl= · <RecordPage set="rir" start={pageAt - 10} end={ef(84) + 30} label="NTS |

**85** · No investigator links what follows to this bearing.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `investigator` | `F32228` (+0.27 s) | Plan | <div style={T(44, {fontWeight: 700, color: colors.ink, marginTop: 120, opacity:  |
| `links` | `F32275` (+1.05 s) | Plan | text: LINKS WHAT FOLLOWS |
| `bearing` | `F32353` (+2.35 s) | Plan | text: TO THIS BEARING |

**86** · But it is how the railroad was being run.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `how` | `F32448` (+0.43 s) | Plan | <div style={T(36, {color: colors.amber, marginTop: 40, opacity: onW(f, wf(86, 'h |
| `run` | `F32537` (+1.92 s) | Plan | text: WAS BEING RUN |

**87** · In February twenty nineteen, Norfolk Southern told investors its plan.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `February` | `F32619` (+0.18 s) | Plan | DatePill · <DatePill f={f} fps={fps} day={11} month={2} year={2019} dayWord={wf(8 |
| `nineteen` | `F32672` (+1.07 s) | Plan | DatePill · <DatePill f={f} fps={fps} day={11} month={2} year={2019} dayWord={wf(8 |
| `Norfolk` | `F32733` (+2.08 s) | (scene list) | {id: 'a3_plan', from: sf(85) - 20, to: sf(92) + 14, C: Plan, cues: [cue(wf(87, ' |
| `investors` | `F32798` (+3.17 s) | Plan | <RecordDoc doc="ns_8k_psr" start={wf(87, 'norfolk') - 14} end={sf(89) + 14} at={ |
| `plan` | `F32844` (+3.93 s) | Plan | <Pop f={f} fps={fps} on={wf(87, 'plan')} off={sf(89) - 6} style={{position: 'abs |

**88** · Precision scheduled railroading.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Precision` | `F32910` (+0.00 s) | Plan | <RecordDoc doc="ns_8k_psr" start={sf(91) - 10} end={ef(91) + 30} at={[wf(88, 'pr |
| `scheduled` | `F32953` (+0.72 s) | Plan | text: SCHEDULED / RAILROADING |
| `railroading` | `F32984` (+1.23 s) | Plan | text: SCHEDULED / RAILROADING |

**89** · An operating ratio, the share of revenue spent running the railroad, of sixty percent by twenty twenty-one, down from sixty-five point four.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `operating` | `F33076` (+0.18 s) | Plan | <Card x={1160} y={640} w={640} h={330} o={onW(f, wf(89, 'operating'), 10)} accen |
| `ratio` | `F33109` (+0.73 s) | Plan | <RecordDoc doc="ns_8k_or60" start={sf(89) - 10} end={sf(90) + 14} at={[wf(89, 'p |
| `share` | `F33166` (+1.68 s) | Plan | <div style={T(26, {color: colors.ink, opacity: onW(f, wf(89, 'share'), 8)})}> |
| `running` | `F33237` (+2.87 s) | Plan | text: SPENT RUNNING THE RAILROAD |
| `sixty` | `F33324` (+4.32 s) | (scene list) | {id: 'a3_plan', from: sf(85) - 20, to: sf(92) + 14, C: Plan, cues: [cue(wf(87, ' |
| `percent` | `F33346` (+4.68 s) | Plan | <RecordDoc doc="ns_8k_or60" start={sf(89) - 10} end={sf(90) + 14} at={[wf(89, 'p |
| `twenty-one` | `F33408` (+5.72 s) | Plan | text: TARGET BY 2021 / 65.4% (2018) |
| `down` | `F33469` (+6.73 s) | Plan | text: TARGET BY 2021 / 65.4% (2018) |
| `sixty-five` | `F33501` (+7.27 s) | Plan | text: TARGET BY 2021 / 65.4% (2018) |
| `four` | `F33558` (+8.22 s) | Plan | <RecordDoc doc="ns_8k_or60" start={sf(89) - 10} end={sf(90) + 14} at={[wf(89, 'p |

**90** · Continued share buybacks, using free cash flow and borrowing capacity.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `share` | `F33660` (+0.65 s) | Plan | <RecordDoc doc="ns_8k_buyback" start={sf(90) - 10} end={sf(91) + 14} at={[wf(90, |
| `buybacks` | `F33678` (+0.95 s) | (scene list) | {id: 'a3_plan', from: sf(85) - 20, to: sf(92) + 14, C: Plan, cues: [cue(wf(87, ' |
| `using` | `F33742` (+2.02 s) | Plan | <Pop f={f} fps={fps} on={wf(90, 'using')} off={sf(91) - 6} style={{position: 'ab |
| `free` | `F33761` (+2.33 s) | Plan | text: FREE CASH FLOW / CAPACITY |
| `borrowing` | `F33832` (+3.52 s) | Plan | text: FREE CASH FLOW / CAPACITY |
| `capacity` | `F33858` (+3.95 s) | Plan | text: FREE CASH FLOW / CAPACITY |

**91** · Its five principles included working safely.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `five` | `F33960` (+0.23 s) | Plan | <Pop f={f} fps={fps} on={wf(91, 'five')} off={ef(91) + 20} style={{position: 'ab |
| `principles` | `F33982` (+0.60 s) | Plan | <RecordDoc doc="ns_8k_psr" start={sf(91) - 10} end={ef(91) + 30} at={[wf(88, 'pr |
| `included` | `F34020` (+1.23 s) | Plan | text: INCLUDED |
| `working` | `F34074` (+2.13 s) | Plan | <RecordDoc doc="ns_8k_psr" start={sf(91) - 10} end={ef(91) + 30} at={[wf(88, 'pr |
| `safely` | `F34106` (+2.67 s) | Plan | text: INCLUDED |

**92** · The filings show what followed.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `filings` | `F34190` (+0.13 s) | Filings | <div style={{position: 'absolute', left: 140, top: 130, ...T(36, {color: colors. |
| `followed` | `F34255` (+1.22 s) | Filings | text: SHOW WHAT FOLLOWED |

**93** · Average employees fell from twenty-six thousand, six hundred and sixty-two in twenty eighteen, the year before the plan, to eighteen thousand, nine hundred in twenty twenty-two: by our calculation, twenty-nine percent.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Average` | `F34328` (+0.05 s) | Filings | const empO = Math.min(onW(f, wf(93, 'average'), 10), offW(f, sf(94) - 6, 14)); |
| `employees` | `F34349` (+0.40 s) | Filings | text: NORFOLK SOUTHERN · AVERAGE EMPLOYEES |
| `twenty-six` | `F34419` (+1.57 s) | Filings | <div style={T(150, {fontWeight: 700, color: colors.ink, marginTop: 30})}>{f < wf |
| `thousand` | `F34458` (+2.22 s) | Filings | {frame: wf(93, 'thousand', 0) + LAND, value: 26000}, |
| `six` | `F34492` (+2.78 s) | Filings | {frame: wf(93, 'six') - 4, value: 26000}, |
| `sixty-two` | `F34534` (+3.48 s) | (scene list) | {id: 'a3_filings', from: sf(92) - 20, to: sf(95) + 14, C: Filings, cues: [cue(wf |
| `eighteen` | `F34606` (+4.68 s) | Filings | text: 2018 · 26,662 / THE PLAN) |
| `before` | `F34679` (+5.90 s) | Filings | text: 2018 · 26,662 / THE PLAN) |
| `plan` | `F34707` (+6.37 s) | Filings | text: 2018 · 26,662 / THE PLAN) |
| `eighteen` | `F34770` (+7.42 s) | Filings | {frame: wf(93, 'eighteen', 1) - 10, value: 26662}, |
| `hundred` | `F34839` (+8.57 s) | (scene list) | {id: 'a3_filings', from: sf(92) - 20, to: sf(95) + 14, C: Filings, cues: [cue(wf |
| `twenty-two` | `F34896` (+9.52 s) | Filings | text: 2022 · 18,900 |
| `by` | `F34970` (+10.75 s) | Filings | text: OUR CALCULATION |
| `twenty-nine` | `F35053` (+12.13 s) | Filings | rollTo · const pct = Math.round(rollTo(f, [{frame: wf(93, 'twenty-nine') - 12,  |
| `percent` | `F35089` (+12.73 s) | (scene list) | {id: 'a3_filings', from: sf(92) - 20, to: sf(95) + 14, C: Filings, cues: [cue(wf |

**94** · From twenty nineteen to twenty twenty-two, the company spent ten billion dollars buying back its own shares.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `twenty` | `F35178` (+0.20 s) | Filings | text: 2019 |
| `nineteen` | `F35201` (+0.58 s) | Filings | {label: '2020', value: 1439, at: wf(94, 'nineteen') + 12}, |
| `twenty` | `F35243` (+1.28 s) | Filings | {label: '2021', value: 3390, at: wf(94, 'twenty', 1)}, |
| `twenty-two` | `F35265` (+1.65 s) | Filings | {label: '2022', value: 3110, at: wf(94, 'twenty-two')}, |
| `company` | `F35332` (+2.77 s) | Filings | <div style={T(30, {color: colors.ink, opacity: onW(f, wf(94, 'company'), 8)})}> |
| `spent` | `F35358` (+3.20 s) | Filings | text: SPENT |
| `ten` | `F35380` (+3.57 s) | Filings | <div style={{position: 'absolute', right: 60, top: 160, textAlign: 'right', opac |
| `billion` | `F35401` (+3.92 s) | (scene list) | {id: 'a3_filings', from: sf(92) - 20, to: sf(95) + 14, C: Filings, cues: [cue(wf |
| `dollars` | `F35425` (+4.32 s) | Filings | bump · <div style={T(150, {fontWeight: 700, color: colors.amber, transform: ` |
| `buying` | `F35455` (+4.82 s) | Filings | <div style={T(36, {color: colors.ink, opacity: onW(f, wf(94, 'buying'), 8)})}> |
| `shares` | `F35518` (+5.87 s) | Filings | text: ITS OWN SHARES |

**95** · Did that cause this derailment?

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `cause` | `F35616` (+0.47 s) | Car | <div style={T(72, {fontWeight: 700, color: colors.ink, opacity: onW(f, wf(95, 'c |
| `derailment` | `F35650` (+1.03 s) | Car | text: THIS DERAILMENT? |

**96** · Here is where the record stops.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Here` | `F35721` (+0.00 s) | Car | <div style={{display: 'flex', alignItems: 'center', marginTop: 80, opacity: onW( |
| `record` | `F35764` (+0.72 s) | Car | text: THE RECORD |
| `stops` | `F35791` (+1.17 s) | (scene list) | {id: 'a3_car', from: sf(95) - 20, to: sf(103) + 14, C: Car, cues: [cue(wf(96, 's |

**97** · The twenty-third car was not Norfolk Southern's.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `twenty-third` | `F35864` (+0.12 s) | Car | <div style={{position: 'absolute', left: 140, top: 140, ...T(44, {fontWeight: 70 |
| `not` | `F35939` (+1.37 s) | Car | CAR 23 · GPLX75465 <span style={{color: colors.ink, opacity: onW(f, wf(97, 'not' |

**98** · It belonged to G - A - T - X, and was leased to Braskem America.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `belonged` | `F36051` (+0.15 s) | Car | <Card x={140} y={240} w={500} h={320} o={onW(f, wf(98, 'belonged'), 10)} accent= |
| `G` | `F36086` (+0.73 s) | Car | text: G |
| `A` | `F36101` (+0.98 s) | Car | text: A |
| `T` | `F36113` (+1.18 s) | Car | text: T |
| `X` | `F36141` (+1.65 s) | Car | text: X |
| `leased` | `F36189` (+2.45 s) | Car | <Card x={700} y={240} w={500} h={320} o={onW(f, wf(98, 'leased'), 10)} accent={c |
| `Braskem` | `F36215` (+2.88 s) | Car | text: BRASKEM |
| `America` | `F36242` (+3.33 s) | Car | text: AMERICA |

**99** · It joined the train at a yard in Illinois run by a terminal railroad, part-owned by several large railroads, Norfolk Southern among them.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `joined` | `F36346` (+0.17 s) | Car | <Card x={1260} y={240} w={520} h={320} o={onW(f, wf(99, 'joined'), 10)} accent={ |
| `yard` | `F36406` (+1.17 s) | Car | text: A YARD |
| `Illinois` | `F36438` (+1.70 s) | Car | text: MADISON, ILLINOIS |
| `terminal` | `F36522` (+3.10 s) | Car | text: TERMINAL RAILROAD (TRRA) |
| `part-owned` | `F36608` (+4.53 s) | Car | <div style={T(26, {color: colors.ink, marginTop: 10, opacity: onW(f, wf(99, 'par |
| `several` | `F36662` (+5.43 s) | Car | text: SEVERAL / LARGE RAILROADS, |
| `large` | `F36687` (+5.85 s) | Car | text: SEVERAL / LARGE RAILROADS, |
| `Norfolk` | `F36770` (+7.23 s) | Car | text: SEVERAL / LARGE RAILROADS, |
| `among` | `F36820` (+8.07 s) | Car | text: SEVERAL / LARGE RAILROADS, |

**100** · That railroad's inspectors checked it.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `railroad's` | `F36921` (+0.25 s) | Car | <Card x={140} y={620} w={800} h={260} o={onW(f, wf(100, "railroad's"), 10)} acce |
| `inspectors` | `F36954` (+0.80 s) | Car | text: TRRA INSPECTORS |
| `checked` | `F36996` (+1.50 s) | (scene list) | {id: 'a3_car', from: sf(95) - 20, to: sf(103) + 14, C: Car, cues: [cue(wf(96, 's |

**101** · Norfolk Southern's inspectors did not.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Norfolk` | `F37060` (+0.03 s) | Car | <Card x={980} y={620} w={800} h={260} o={onW(f, wf(101, 'norfolk'), 10)} accent= |
| `inspectors` | `F37112` (+0.90 s) | Car | text: NS INSPECTORS |
| `did` | `F37149` (+1.52 s) | Car | text: DID NOT · NTSB P. 87 |
| `not` | `F37163` (+1.75 s) | (scene list) | {id: 'a3_car', from: sf(95) - 20, to: sf(103) + 14, C: Car, cues: [cue(wf(96, 's |

**102** · Whether that inspection missed anything, the investigators could not determine.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `inspection` | `F37249` (+0.52 s) | Car | hl= · <RecordPage set="rir" start={pageAt} end={ef(102) + 30} label="NTSB FI |
| `missed` | `F37287` (+1.15 s) | Car | <Pop f={f} fps={fps} on={wf(102, 'missed')} style={{position: 'absolute', right: |
| `investigators` | `F37360` (+2.37 s) | Car | text: THE INVESTIGATORS: / NOT DETERMINED |
| `not` | `F37423` (+3.42 s) | Car | text: THE INVESTIGATORS: / NOT DETERMINED |
| `determine` | `F37435` (+3.62 s) | Car | hl= · <RecordPage set="rir" start={pageAt} end={ef(102) + 30} label="NTSB FI |

**103** · After the derailment, the N - T - S - B checked the cars that stayed on the rails, and found reportable defects on about a quarter of them, most of them minor.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `After` | `F37503` (+0.05 s) | OtherCars | <Pop f={f} fps={fps} on={wf(103, 'after')} off={sf(105) - 6} style={{position: ' |
| `derailment` | `F37528` (+0.47 s) | OtherCars | text: THE DERAILMENT |
| `N` | `F37604` (+1.73 s) | OtherCars | text: THE DERAILMENT |
| `checked` | `F37661` (+2.68 s) | OtherCars | hl= · <RecordPage set="rir" start={sf(103) - 10} end={sf(105) + 14} label="N |
| `stayed` | `F37721` (+3.68 s) | OtherCars | text: STAYED / ON THE RAILS |
| `rails` | `F37756` (+4.27 s) | OtherCars | text: STAYED / ON THE RAILS |
| `found` | `F37812` (+5.20 s) | OtherCars | <Card x={1160} y={540} w={660} h={470} o={Math.min(onW(f, wf(103, 'found'), 10), |
| `reportable` | `F37830` (+5.50 s) | OtherCars | hl= · <RecordPage set="rir" start={sf(103) - 10} end={sf(105) + 14} label="N |
| `defects` | `F37868` (+6.13 s) | OtherCars | text: WITH REPORTABLE DEFECTS |
| `quarter` | `F37939` (+7.32 s) | (scene list) | {id: 'a3_othercars', from: sf(103) - 20, to: sf(108) + 14, C: OtherCars, cues: [ |
| `most` | `F38014` (+8.57 s) | OtherCars | <div style={T(30, {color: colors.ink, opacity: onW(f, wf(103, 'most'), 6)})}> |
| `minor` | `F38051` (+9.18 s) | OtherCars | text: MINOR |

**104** · It obtained a Norfolk Southern foreman's email that appeared to set a ninety-second target for each car's inspection in Norfolk Southern's own yards.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `obtained` | `F38125` (+0.13 s) | OtherCars | text: OBTAINED: / AN NS FOREMAN'S |
| `foreman's` | `F38208` (+1.52 s) | OtherCars | text: OBTAINED: / AN NS FOREMAN'S |
| `email` | `F38241` (+2.07 s) | OtherCars | text: OBTAINED: / AN NS FOREMAN'S |
| `appeared` | `F38290` (+2.88 s) | OtherCars | text: OBTAINED: / AN NS FOREMAN'S |
| `ninety-second` | `F38343` (+3.77 s) | OtherCars | <div style={T(44, {fontWeight: 700, color: colors.amber, opacity: onW(f, wf(104, |
| `target` | `F38392` (+4.58 s) | OtherCars | text: TARGET / A CAR |
| `inspection` | `F38473` (+5.93 s) | OtherCars | text: TARGET / A CAR |
| `Norfolk` | `F38541` (+7.07 s) | OtherCars | text: TARGET / A CAR |
| `yards` | `F38612` (+8.25 s) | OtherCars | text: TARGET / A CAR |

**105** · Car twenty-three was inspected elsewhere.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Car` | `F38682` (+0.00 s) | OtherCars | <div style={T(72, {fontWeight: 700, color: colors.amber, opacity: onW(f, wf(105, |
| `twenty-three` | `F38700` (+0.30 s) | OtherCars | CAR <span style={{opacity: onW(f, wf(105, 'twenty-three'), 6)}}>23</span> |
| `inspected` | `F38756` (+1.23 s) | OtherCars | <div style={T(56, {fontWeight: 700, color: colors.ink, opacity: onW(f, wf(105, ' |
| `elsewhere` | `F38793` (+1.85 s) | OtherCars | text: ELSEWHERE · TRRA |

**106** · And it could not determine whether inspection time goals contributed to the defects that went unreported.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `not` | `F38899` (+0.48 s) | OtherCars | hl= · <RecordPage set="rir" start={sf(106) - 10} end={sf(107) + 14} label="N |
| `determine` | `F38910` (+0.67 s) | OtherCars | hl= · <RecordPage set="rir" start={sf(106) - 10} end={sf(107) + 14} label="N |
| `time` | `F38998` (+2.13 s) | OtherCars | text: TIME GOALS / DEFECTS? |
| `goals` | `F39017` (+2.45 s) | OtherCars | hl= · <RecordPage set="rir" start={sf(106) - 10} end={sf(107) + 14} label="N |
| `contributed` | `F39050` (+3.00 s) | OtherCars | text: TIME GOALS / DEFECTS? |
| `defects` | `F39108` (+3.97 s) | OtherCars | text: TIME GOALS / DEFECTS? |
| `unreported` | `F39170` (+5.00 s) | OtherCars | hl= · <RecordPage set="rir" start={sf(106) - 10} end={sf(107) + 14} label="N |

**107** · In March twenty twenty-three, the N - T - S - B opened a special investigation into Norfolk Southern's safety culture.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `March` | `F39285` (+0.20 s) | OtherCars | <Pop f={f} fps={fps} on={wf(107, 'march')} off={ef(107) + 20} style={{position:  |
| `twenty-three` | `F39330` (+0.95 s) | OtherCars | text: 2023 / SPECIAL INVESTIGATION: |
| `the` | `F39408` (+2.25 s) | OtherCars | <RecordDoc doc="ntsb_nr_special" start={sf(107) - 10} end={ef(107) + 30} at={[wf |
| `N` | `F39420` (+2.45 s) | OtherCars | text: 2023 / SPECIAL INVESTIGATION: |
| `opened` | `F39488` (+3.58 s) | OtherCars | <RecordDoc doc="ntsb_nr_special" start={sf(107) - 10} end={ef(107) + 30} at={[wf |
| `investigation` | `F39539` (+4.43 s) | OtherCars | text: 2023 / SPECIAL INVESTIGATION: |
| `Norfolk` | `F39614` (+5.68 s) | OtherCars | text: 2023 / SPECIAL INVESTIGATION: |
| `culture` | `F39692` (+6.98 s) | OtherCars | text: 2023 / SPECIAL INVESTIGATION: |

**108** · That is our reading of the record: no investigator links the plan to this bearing.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `reading` | `F39800` (+0.57 s) | Reading | <Honesty text="OUR READING OF THE RECORD" x={160} y={150} o={onW(f, wf(108, 'rea |
| `record` | `F39834` (+1.13 s) | Reading | text: THE RECORD, AS FILED · NTSB · SEC |
| `investigator` | `F39911` (+2.42 s) | Reading | <div style={T(44, {fontWeight: 700, color: colors.ink, opacity: onW(f, wf(108, ' |
| `links` | `F39961` (+3.25 s) | Reading | text: LINKS THE PLAN / TO THIS BEARING |
| `bearing` | `F40028` (+4.37 s) | Reading | text: LINKS THE PLAN / TO THIS BEARING |

**109** · What the record does show is where the stop line was drawn: at a number the industry wrote for billing, which Norfolk Southern says it combined with its own experience.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `show` | `F40166` (+1.05 s) | Reading | <div style={T(36, {color: colors.ink, marginTop: 50, opacity: onW(f, wf(109, 'sh |
| `stop` | `F40231` (+2.13 s) | Reading | text: WHERE THE STOP LINE / WAS DRAWN |
| `drawn` | `F40276` (+2.88 s) | Reading | text: WHERE THE STOP LINE / WAS DRAWN |
| `number` | `F40351` (+4.13 s) | Reading | <div style={T(64, {fontWeight: 700, color: colors.amber, marginTop: 20, opacity: |
| `wrote` | `F40410` (+5.12 s) | Reading | text: WROTE / FOR BILLING |
| `billing` | `F40437` (+5.57 s) | Reading | text: WROTE / FOR BILLING |
| `Norfolk` | `F40496` (+6.55 s) | Reading | <div style={T(36, {color: colors.ink, marginTop: 40, opacity: onW(f, wf(109, 'no |
| `says` | `F40547` (+7.40 s) | Reading | text: SAYS IT COMBINED IT / WITH ITS OWN EXPERIENCE · NTSB P. 106 |
| `experience` | `F40633` (+8.83 s) | Reading | text: SAYS IT COMBINED IT / WITH ITS OWN EXPERIENCE · NTSB P. 106 |

**110** · A claim you will find in many comment sections: cost cutting caused this.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `claim` | `F40727` (+0.12 s) | Reading | headAt={wf(110, 'claim')} |
| `comment` | `F40813` (+1.55 s) | Reading | head2At={wf(110, 'comment')} |
| `cost` | `F40902` (+3.03 s) | Reading | text: COST |
| `cutting` | `F40925` (+3.42 s) | Reading | text: CUTTING |
| `caused` | `F40951` (+3.85 s) | Reading | text: CAUSED |
| `this` | `F40977` (+4.28 s) | Reading | text: THIS. |

**111** · The record can't say.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `record` | `F41038` (+0.12 s) | Reading | recordAt={wf(111, 'record')} |
| `say` | `F41088` (+0.95 s) | (scene list) | {id: 'a3_reading', from: sf(108) - 20, to: sf(112) + 30, C: Reading, cues: [cue( |

