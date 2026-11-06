# Choreography index: Act 5

Word-level choreography (PLAYBOOK §10.6), **generated from the scene code** (`python3 scripts/choreo_index.py` from the film folder; re-run after
any edit) so it cannot drift from it. One row per word-locked event: the spoken trigger, its measured frame (60 fps) and offset
from the sentence start, the scene component, and what changes (the on-screen text that arrives, or the driving line of
code). Kit: `lib/remotion/Kinetic.tsx` and `remotion/beats.tsx` (`KeyLine` parts land on their words, `ChunkQuote` reveals a
record quote chunk by chunk, `WordLine` builds a title word by word). Kit for this film: `remotion/parts*.tsx`.
Sync audit: `review/sync_audit.md`.

**176** · In June twenty twenty-four, the N - T - S - B adopted its final report.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `June` | `F63356` (+0.23 s) | Report | DatePill · <DatePill f={f} fps={fps} day={25} month={6} year={2024} dayWord={wf(1 |
| `twenty-four` | `F63397` (+0.92 s) | Report | DatePill · <DatePill f={f} fps={fps} day={25} month={6} year={2024} dayWord={wf(1 |
| `N` | `F63475` (+2.22 s) | Report | <span style={T(36, {fontWeight: 700, color: colors.void, background: colors.cyan |
| `adopted` | `F63534` (+3.20 s) | Report | text: ADOPTS / ITS FINAL REPORT |
| `final` | `F63580` (+3.97 s) | Report | text: ADOPTS / ITS FINAL REPORT |
| `report` | `F63604` (+4.37 s) | Report | hl= · <RecordPage set="rir" page={1} start={sf(176) - 20} end={sf(177) + 14} |

**177** · The probable cause: the failure of the bearing on the twenty-third car, which overheated and caused the axle to separate.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `probable` | `F63699` (+0.17 s) | Report | hl= · <RecordPage set="rir" start={sf(177) - 10} end={sf(178) + 14} label="N |
| `cause` | `F63730` (+0.68 s) | Report | <Pop f={f} fps={fps} on={wf(177, 'cause')} off={sf(178) - 6} style={{position: ' |
| `failure` | `F63808` (+1.98 s) | (scene list) | {id: 'a5_report', from: sf(176) - 30, to: sf(178) + 14, C: Report, cues: [cue(sf |
| `bearing` | `F63850` (+2.68 s) | Report | <Pop f={f} fps={fps} on={wf(177, 'bearing')} off={sf(178) - 6} style={{position: |
| `twenty-third` | `F63893` (+3.40 s) | Report | hl= · <RecordPage set="rir" start={sf(177) - 10} end={sf(178) + 14} label="N |
| `car` | `F63936` (+4.12 s) | Report | text: THE AXLE TO SEPARATE |
| `overheated` | `F63995` (+5.10 s) | Report | text: THE AXLE TO SEPARATE |
| `caused` | `F64062` (+6.22 s) | Report | text: THE AXLE TO SEPARATE |
| `axle` | `F64095` (+6.77 s) | Report | text: THE AXLE TO SEPARATE |
| `separate` | `F64130` (+7.35 s) | Report | hl= · <RecordPage set="rir" start={sf(177) - 10} end={sf(178) + 14} label="N |

**178** · Norfolk Southern's annual reports put its net cost from the derailment, after insurance, at about one point one billion dollars in twenty twenty-three, and three hundred and twenty-five million in twenty twenty-four.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Norfolk` | `F64208` (+0.07 s) | Paid | text: NORFOLK SOUTHERN'S / ANNUAL |
| `annual` | `F64264` (+1.00 s) | Paid | text: NORFOLK SOUTHERN'S / ANNUAL |
| `reports` | `F64284` (+1.33 s) | Paid | text: NORFOLK SOUTHERN'S / ANNUAL |
| `net` | `F64360` (+2.60 s) | Paid | text: NORFOLK SOUTHERN'S / ANNUAL |
| `derailment` | `F64415` (+3.52 s) | Paid | text: NORFOLK SOUTHERN'S / ANNUAL |
| `insurance` | `F64493` (+4.82 s) | Paid | {row('2023', wf(178, 'twenty-three'), `${f >= wf(178, 'about') ? '≈' : ''}$${y23 |
| `about` | `F64564` (+6.00 s) | Paid | {row('2023', wf(178, 'twenty-three'), `${f >= wf(178, 'about') ? '≈' : ''}$${y23 |
| `one` | `F64588` (+6.40 s) | Paid | {row('2023', wf(178, 'twenty-three'), `${f >= wf(178, 'about') ? '≈' : ''}$${y23 |
| `billion` | `F64640` (+7.27 s) | (scene list) | {id: 'a5_paid', from: sf(178) - 20, to: sf(180) + 14, C: Paid, cues: [cue(wf(178 |
| `twenty-three` | `F64719` (+8.58 s) | Paid | {row('2023', wf(178, 'twenty-three'), `${f >= wf(178, 'about') ? '≈' : ''}$${y23 |
| `three` | `F64800` (+9.93 s) | Paid | {row('2024', wf(178, 'twenty-four'), `$${y24}M`, wf(178, 'three'), 'AFTER INSURA |
| `twenty-five` | `F64842` (+10.63 s) | (scene list) | {id: 'a5_paid', from: sf(178) - 20, to: sf(180) + 14, C: Paid, cues: [cue(wf(178 |
| `million` | `F64884` (+11.33 s) | Paid | {row('2024', wf(178, 'twenty-four'), `$${y24}M`, wf(178, 'three'), 'AFTER INSURA |
| `twenty-four` | `F64950` (+12.43 s) | Paid | {row('2024', wf(178, 'twenty-four'), `$${y24}M`, wf(178, 'three'), 'AFTER INSURA |

**179** · In twenty twenty-five, insurance and other recoveries were larger than new costs, by two hundred and fifty-four million.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `twenty-five` | `F65081` (+0.55 s) | Paid | {row('2025', wf(179, 'twenty-five'), `−$${y25}M`, wf(179, 'two'), 'RECOVERIES EX |
| `insurance` | `F65152` (+1.73 s) | Paid | <div style={T(26, {color: colors.ink, marginTop: 40, opacity: onW(f, wf(179, 'in |
| `other` | `F65202` (+2.57 s) | Paid | text: AND OTHER RECOVERIES / WERE |
| `recoveries` | `F65216` (+2.80 s) | Paid | {row('2025', wf(179, 'twenty-five'), `−$${y25}M`, wf(179, 'two'), 'RECOVERIES EX |
| `larger` | `F65279` (+3.85 s) | Paid | text: AND OTHER RECOVERIES / WERE |
| `costs` | `F65331` (+4.72 s) | Paid | text: AND OTHER RECOVERIES / WERE |
| `two` | `F65399` (+5.85 s) | Paid | {row('2025', wf(179, 'twenty-five'), `−$${y25}M`, wf(179, 'two'), 'RECOVERIES EX |
| `fifty-four` | `F65442` (+6.57 s) | (scene list) | {id: 'a5_paid', from: sf(178) - 20, to: sf(180) + 14, C: Paid, cues: [cue(wf(178 |
| `million` | `F65479` (+7.18 s) | Paid | text: AND OTHER RECOVERIES / WERE |

**180** · A class action settlement created a six hundred million dollar fund for residents and businesses.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `class` | `F65572` (+0.13 s) | Courts | <Pop f={f} fps={fps} on={wf(180, 'class')} off={sf(181) - 6} style={{position: ' |
| `settlement` | `F65618` (+0.90 s) | Courts | hl= · <RecordPage set="classfund" start={sf(180) - 10} end={sf(181) + 14} la |
| `six` | `F65702` (+2.30 s) | Courts | hl= · <RecordPage set="classfund" start={sf(180) - 10} end={sf(181) + 14} la |
| `million` | `F65741` (+2.95 s) | Courts | text: AND BUSINESSES |
| `fund` | `F65785` (+3.68 s) | Courts | hl= · <RecordPage set="classfund" start={sf(180) - 10} end={sf(181) + 14} la |
| `residents` | `F65834` (+4.50 s) | Courts | text: AND BUSINESSES |
| `businesses` | `F65876` (+5.20 s) | Courts | text: AND BUSINESSES |

**181** · The appeals against the settlement were dismissed.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `appeals` | `F65978` (+0.15 s) | Courts | <div style={T(44, {color: colors.ink, opacity: onW(f, wf(181, 'appeals'), 6)})}> |
| `settlement` | `F66036` (+1.12 s) | Courts | text: AGAINST THE SETTLEMENT |
| `dismissed` | `F66077` (+1.80 s) | (scene list) | {id: 'a5_courts', from: sf(180) - 20, to: sf(185) + 14, C: Courts, cues: [cue(sf |

**182** · An appeal over residents' personal injury releases was still pending in October twenty twenty-six.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `appeal` | `F66165` (+0.15 s) | Courts | <Pop f={f} fps={fps} on={wf(182, 'appeal')} off={sf(183) - 6} style={{position:  |
| `personal` | `F66244` (+1.47 s) | Courts | text: OVER PERSONAL-INJURY / RELEASES |
| `releases` | `F66304` (+2.47 s) | Courts | text: OVER PERSONAL-INJURY / RELEASES |
| `still` | `F66366` (+3.50 s) | Courts | text: OVER PERSONAL-INJURY / RELEASES |
| `pending` | `F66384` (+3.80 s) | Courts | <RecordDoc doc="ns_10q26_appeal" start={sf(182) - 10} end={sf(183) + 14} at={[wf |
| `October` | `F66420` (+4.40 s) | Courts | text: OVER PERSONAL-INJURY / RELEASES |
| `twenty-six` | `F66478` (+5.37 s) | Courts | text: OVER PERSONAL-INJURY / RELEASES |

**183** · A separate settlement with the federal government still awaited the court's approval at that date.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `separate` | `F66593` (+0.18 s) | Courts | <Pop f={f} fps={fps} on={wf(183, 'separate')} off={sf(184) - 6} style={{position |
| `settlement` | `F66619` (+0.62 s) | Courts | <RecordDoc doc="ns_10q26_decree" start={sf(183) - 10} end={sf(184) + 14} at={[wf |
| `government` | `F66688` (+1.77 s) | Courts | THE FEDERAL SETTLEMENT <span style={{opacity: onW(f, wf(183, 'government'), 6)}} |
| `awaited` | `F66753` (+2.85 s) | Courts | THE FEDERAL SETTLEMENT <span style={{opacity: onW(f, wf(183, 'government'), 6)}} |
| `approval` | `F66810` (+3.80 s) | Courts | <RecordDoc doc="ns_10q26_decree" start={sf(183) - 10} end={sf(184) + 14} at={[wf |
| `date` | `F66863` (+4.68 s) | Courts | THE FEDERAL SETTLEMENT <span style={{opacity: onW(f, wf(183, 'government'), 6)}} |

**184** · In March twenty twenty-six, letting residents join that case, the judge's order repeated words from an earlier hearing: this is not a rubber stamp court.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `March` | `F66949` (+0.20 s) | Courts | <Pop f={f} fps={fps} on={wf(184, 'march')} off={ef(184) + 24} style={{position:  |
| `twenty-six` | `F66995` (+0.97 s) | Courts | text: 2026 / RESIDENTS JOIN |
| `letting` | `F67067` (+2.17 s) | Courts | text: 2026 / RESIDENTS JOIN |
| `residents` | `F67088` (+2.52 s) | Courts | text: 2026 / RESIDENTS JOIN |
| `case` | `F67156` (+3.65 s) | Courts | text: 2026 / RESIDENTS JOIN |
| `judge's` | `F67218` (+4.68 s) | Courts | text: THE JUDGE, / QUOTING |
| `order` | `F67248` (+5.18 s) | Courts | hl= · <RecordPage set="decree" start={sf(184) - 10} end={ef(184) + 30} label |
| `repeated` | `F67267` (+5.50 s) | Courts | <Pop f={f} fps={fps} on={wf(184, 'repeated')} off={ef(184) + 24} style={{positio |
| `words` | `F67301` (+6.07 s) | Courts | text: THE JUDGE, / QUOTING |
| `earlier` | `F67348` (+6.85 s) | Courts | text: THE JUDGE, / QUOTING |
| `hearing` | `F67375` (+7.30 s) | Courts | text: THE JUDGE, / QUOTING |
| `this` | `F67450` (+8.55 s) | Courts | text: THE JUDGE, / QUOTING |
| `not` | `F67476` (+8.98 s) | Courts | text: THE JUDGE, / QUOTING |
| `rubber` | `F67515` (+9.63 s) | Courts | hl= · <RecordPage set="decree" start={sf(184) - 10} end={ef(184) + 30} label |
| `court` | `F67557` (+10.33 s) | Courts | text: THE JUDGE, / QUOTING |

**185** · Could it happen again?

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Could` | `F67634` (+0.03 s) | Again | <div style={T(96, {fontWeight: 700, color: colors.ink, opacity: onW(f, wf(185, ' |
| `happen` | `F67653` (+0.35 s) | Again | text: HAPPEN AGAIN? |

**186** · As of July twenty twenty-six, federal rules did not require trackside detectors at all, or set the temperature at which a car must be stopped.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `July` | `F67767` (+0.37 s) | Again | <Pop f={f} fps={fps} on={wf(186, 'july')} off={sf(187) - 6} style={{position: 'a |
| `twenty-six` | `F67814` (+1.15 s) | Again | text: 2026 / AT ALL |
| `federal` | `F67887` (+2.37 s) | Again | hl= · <RecordPage set="crs" start={sf(186) - 10} end={sf(187) + 14} label="C |
| `require` | `F67959` (+3.57 s) | Again | hl= · <RecordPage set="crs" start={sf(186) - 10} end={sf(187) + 14} label="C |
| `detectors` | `F68021` (+4.60 s) | Again | text: 2026 / AT ALL |
| `all` | `F68067` (+5.37 s) | Again | text: 2026 / AT ALL |
| `set` | `F68130` (+6.42 s) | Again | text: 2026 / AT ALL |
| `temperature` | `F68150` (+6.75 s) | Again | hl= · <RecordPage set="crs" start={sf(186) - 10} end={sf(187) + 14} label="C |
| `car` | `F68210` (+7.75 s) | Again | text: 2026 / AT ALL |
| `stopped` | `F68251` (+8.43 s) | Again | text: 2026 / AT ALL |

**187** · The N - T - S - B has recommended that the F - R - A, the federal railroad regulator, set minimum requirements, including alarm thresholds and the distance between detectors.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `N` | `F68342` (+0.23 s) | Again | hl= · <RecordPage set="recs" start={sf(187) - 10} end={sf(188) + 14} label=" |
| `recommended` | `F68398` (+1.17 s) | Again | hl= · <RecordPage set="recs" start={sf(187) - 10} end={sf(188) + 14} label=" |
| `F` | `F68467` (+2.32 s) | Again | <Pop f={f} fps={fps} on={wf(187, 'f')} off={sf(188) - 6} style={{position: 'abso |
| `federal` | `F68537` (+3.48 s) | Again | text: REGULATOR / INCLUDING |
| `regulator` | `F68595` (+4.45 s) | Again | text: REGULATOR / INCLUDING |
| `minimum` | `F68679` (+5.85 s) | Again | hl= · <RecordPage set="recs" start={sf(187) - 10} end={sf(188) + 14} label=" |
| `requirements` | `F68703` (+6.25 s) | Again | text: REGULATOR / INCLUDING |
| `including` | `F68770` (+7.37 s) | Again | text: REGULATOR / INCLUDING |
| `alarm` | `F68798` (+7.83 s) | Again | text: REGULATOR / INCLUDING |
| `thresholds` | `F68822` (+8.23 s) | Again | hl= · <RecordPage set="recs" start={sf(187) - 10} end={sf(188) + 14} label=" |
| `distance` | `F68897` (+9.48 s) | Again | hl= · <RecordPage set="recs" start={sf(187) - 10} end={sf(188) + 14} label=" |
| `detectors` | `F68952` (+10.40 s) | Again | text: REGULATOR / INCLUDING |

**188** · Norfolk Southern said in twenty twenty-four that it was installing one hundred and eighty-seven more detectors, to bring the average spacing on its core network to about twelve miles.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `said` | `F69106` (+0.92 s) | Again | <Pop f={f} fps={fps} on={wf(188, 'said')} off={sf(189) - 6} style={{position: 'a |
| `twenty-four` | `F69148` (+1.62 s) | Again | text: DETECTORS / SPACING |
| `installing` | `F69236` (+3.08 s) | Again | <RecordDoc doc="ns_release_187" start={sf(188) - 10} end={sf(189) + 14} at={[wf( |
| `eighty-seven` | `F69320` (+4.48 s) | Again | text: DETECTORS / SPACING |
| `detectors` | `F69377` (+5.43 s) | Again | text: DETECTORS / SPACING |
| `bring` | `F69442` (+6.52 s) | Again | text: DETECTORS / SPACING |
| `average` | `F69466` (+6.92 s) | Again | text: DETECTORS / SPACING |
| `core` | `F69536` (+8.08 s) | Again | text: DETECTORS / SPACING |
| `network` | `F69552` (+8.35 s) | Again | text: DETECTORS / SPACING |
| `twelve` | `F69621` (+9.50 s) | Again | text: DETECTORS / SPACING |
| `miles` | `F69648` (+9.95 s) | Again | text: DETECTORS / SPACING |

**189** · And the kind of tank car the investigators found likely started the fire stays legal in flammable service until the first of May, twenty twenty-nine.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `tank` | `F69791` (+0.67 s) | Again | <Pop f={f} fps={fps} on={wf(189, 'tank')} off={sf(190) - 6} style={{position: 'a |
| `investigators` | `F69835` (+1.40 s) | Again | text: LIKELY STARTED / THE FIRE) |
| `likely` | `F69922` (+2.85 s) | Again | text: LIKELY STARTED / THE FIRE) |
| `fire` | `F69982` (+3.85 s) | Again | text: LIKELY STARTED / THE FIRE) |
| `legal` | `F70053` (+5.03 s) | Again | text: LIKELY STARTED / THE FIRE) |
| `flammable` | `F70086` (+5.58 s) | Again | text: LIKELY STARTED / THE FIRE) |
| `until` | `F70167` (+6.93 s) | Again | text: LIKELY STARTED / THE FIRE) |
| `first` | `F70193` (+7.37 s) | Again | DatePill · <DatePill f={f} fps={fps} day={1} month={5} year={2029} dayWord={wf(18 |
| `May` | `F70223` (+7.87 s) | Again | DatePill · <DatePill f={f} fps={fps} day={1} month={5} year={2029} dayWord={wf(18 |
| `twenty-nine` | `F70278` (+8.78 s) | Again | DatePill · <DatePill f={f} fps={fps} day={1} month={5} year={2029} dayWord={wf(18 |

**190** · Retiring them sooner, the investigators found, is feasible, but unlikely, because of economic and business disincentives.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Retiring` | `F70383` (+0.05 s) | Again | <Pop f={f} fps={fps} on={wf(190, 'retiring')} off={ef(190) + 24} style={{positio |
| `sooner` | `F70433` (+0.88 s) | Again | text: SOONER / FEASIBLE, |
| `investigators` | `F70478` (+1.63 s) | Again | text: SOONER / FEASIBLE, |
| `found` | `F70527` (+2.45 s) | Again | hl= · <RecordPage set="rir" start={sf(190) - 10} end={ef(190) + 30} label="N |
| `feasible` | `F70588` (+3.47 s) | Again | text: SOONER / FEASIBLE, |
| `unlikely` | `F70645` (+4.42 s) | Again | text: SOONER / FEASIBLE, |
| `because` | `F70706` (+5.43 s) | Again | text: SOONER / FEASIBLE, |
| `economic` | `F70736` (+5.93 s) | Again | text: SOONER / FEASIBLE, |
| `disincentives` | `F70818` (+7.30 s) | Again | hl= · <RecordPage set="rir" start={sf(190) - 10} end={ef(190) + 30} label="N |

**191** · Two last claims.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Two` | `F70930` (+0.05 s) | Verdict5 | text: TWO / LAST |
| `last` | `F70953` (+0.43 s) | Verdict5 | text: TWO / LAST |
| `claims` | `F70979` (+0.87 s) | Verdict5 | text: TWO / LAST |

**192** · The brake rule repealed in twenty eighteen: it applied to a different kind of train, and this train did not qualify.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `brake` | `F71068` (+0.17 s) | Verdict5 | <div style={{fontFamily: sans, fontWeight: 700, fontSize: 64, color: colors.ink, |
| `repealed` | `F71106` (+0.80 s) | Verdict5 | text: REPEALED / IN 2018” |
| `eighteen` | `F71169` (+1.85 s) | Verdict5 | text: REPEALED / IN 2018” |
| `applied` | `F71243` (+3.08 s) | Verdict5 | <div style={T(30, {color: colors.ink, marginTop: 10, opacity: onW(f, wf(192, 'ap |
| `different` | `F71283` (+3.75 s) | Verdict5 | text: A DIFFERENT KIND / OF TRAIN |
| `train` | `F71330` (+4.53 s) | Verdict5 | text: A DIFFERENT KIND / OF TRAIN |
| `this` | `F71385` (+5.45 s) | Verdict5 | text: A DIFFERENT KIND / OF TRAIN |
| `qualify` | `F71447` (+6.48 s) | (scene list) | {id: 'a5_verdict5', from: sf(191) - 20, to: sf(194) + 14, C: Verdict5, cues: [cu |

**193** · Too few crew: there were three people in the cab.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Too` | `F71530` (+0.03 s) | Verdict5 | <div style={{fontFamily: sans, fontWeight: 700, fontSize: 64, color: colors.ink, |
| `few` | `F71546` (+0.30 s) | Verdict5 | text: FEW / CREW” |
| `crew` | `F71564` (+0.60 s) | Verdict5 | text: FEW / CREW” |
| `three` | `F71641` (+1.88 s) | (scene list) | {id: 'a5_verdict5', from: sf(191) - 20, to: sf(194) + 14, C: Verdict5, cues: [cu |
| `people` | `F71661` (+2.22 s) | Verdict5 | text: AN ENGINEER, A CONDUCTOR AND A CONDUCTOR TRAINEE · NTSB P. 4 |

**194** · As of July twenty twenty-six, no federal rule sets the temperature at which a train must stop.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `July` | `F71793` (+0.33 s) | SignOff | <div style={T(36, {color: colors.ink, opacity: Math.min(onW(f, wf(194, 'july'),  |
| `twenty-six` | `F71836` (+1.05 s) | SignOff | text: 2026 / FEDERAL RULE |
| `no` | `F71907` (+2.23 s) | SignOff | text: 2026 / FEDERAL RULE |
| `federal` | `F71926` (+2.55 s) | SignOff | text: 2026 / FEDERAL RULE |
| `temperature` | `F72001` (+3.80 s) | SignOff | text: 2026 / FEDERAL RULE |
| `train` | `F72060` (+4.78 s) | SignOff | text: 2026 / FEDERAL RULE |
| `stop` | `F72095` (+5.37 s) | SignOff | text: 2026 / FEDERAL RULE |

**195** · The N - T - S - B has asked for one.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `N` | `F72182` (+0.28 s) | SignOff | <div style={T(36, {color: colors.cyan, marginTop: 14, opacity: Math.min(onW(f, w |
| `asked` | `F72243` (+1.30 s) | SignOff | text: HAS ASKED FOR / ONE · R-24-003 |
| `one` | `F72275` (+1.83 s) | SignOff | text: HAS ASKED FOR / ONE · R-24-003 |

**196** · From below the alert line to a broken axle: about thirty miles.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `From` | `F72346` (+0.03 s) | SignOff | <RouteLine f={f} fps={fps} box={{x: 180, y: 380, w: 1560}} draw={1} nodeOn={[sf( |
| `below` | `F72358` (+0.23 s) | SignOff | <div style={T(44, {fontWeight: 700, color: colors.red, opacity: Math.min(onW(f,  |
| `broken` | `F72446` (+1.70 s) | SignOff | text: AXLE: |
| `axle` | `F72475` (+2.18 s) | SignOff | text: AXLE: |
| `thirty` | `F72557` (+3.55 s) | (scene list) | {id: 'a5_signoff', from: sf(194) - 20, to: ef(197) + 200, C: SignOff, cues: [cue |

**197** · The last two detectors were nineteen miles apart.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `The` | `F72643` (+0.02 s) | SignOff | const stretch = f >= wf(197, 'the') - 4 ? {s0: sSal, s1: sSal + (sEP - sSal) * k |
| `last` | `F72651` (+0.15 s) | SignOff | <div style={T(44, {fontWeight: 700, color: colors.amber, marginTop: -54, opacity |
| `two` | `F72671` (+0.48 s) | SignOff | lead · const k19 = lead(f, wf(197, 'two'), 40); |
| `nineteen` | `F72729` (+1.45 s) | (scene list) | {id: 'a5_signoff', from: sf(194) - 20, to: ef(197) + 200, C: SignOff, cues: [cue |
| `apart` | `F72786` (+2.40 s) | SignOff | text: APART |

