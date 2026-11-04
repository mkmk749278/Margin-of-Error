# Choreography index: Acts II–V (sentences 23–176)

Word-level choreography (PLAYBOOK §10.6), **generated from the scene code** (`python3 scripts/choreo_index.py` from the film folder; re-run after
any edit) so it cannot drift from it. One row per word-locked event: the spoken trigger, its measured frame (60 fps) and offset
from the sentence start, the scene component, and what changes (the on-screen text that arrives, or the driving line of
code). Kit: `lib/remotion/Kinetic.tsx` and `remotion/beats.tsx` (`KeyLine` parts land on their words, `ChunkQuote` reveals a
record quote chunk by chunk, `WordLine` builds a title word by word). Hand-written tables: `act1.md`, `journey.md`.
Sync audit: 177/177 sentences pass (`review/sync_audit.md`).

**23** · The seven thirty-seven nine has an opening in each side of the fuselage, behind the wing, for an extra emergency exit.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `nine` | `F5880` (+1.08 s) | Opening | <div style={{position: 'absolute', left: 150, top: 952, display: 'flex', gap: 14 |
| `opening` | `F5922` (+1.78 s) | Opening | lead · const c1 = lead(f, O.opening, 24); |
| `each` | `F5959` (+2.40 s) | (scene list) | sound effect cue |
| `fuselage` | `F6002` (+3.12 s) | Opening | <span style={{opacity: on(f, O.each, 8), ...litStyle(f, O.fuselage, colors.cyan) |
| `behind` | `F6060` (+4.08 s) | Opening | {frame: O.behind - 6, r: OPEN}, |
| `wing` | `F6093` (+4.63 s) | Opening | {frame: O.wing + 16, r: WING}, |
| `emergency` | `F6172` (+5.95 s) | Opening | bump · <span style={{opacity: on(f, O.emergency, 8), ...litStyle(f, O.emergen |
| `exit` | `F6213` (+6.63 s) | Opening | bump · <span style={{opacity: on(f, O.emergency, 8), ...litStyle(f, O.emergen |

**24** · Airlines that do not need that exit get a plug instead — a lighter, simpler panel that fills the hole.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Airlines` | `F6292` (+0.03 s) | Opening | text: EXIT NOT NEEDED |
| `not` | `F6341` (+0.85 s) | Opening | text: EXIT NOT NEEDED |
| `exit` | `F6386` (+1.60 s) | Opening | const toPlug = O.exit2 - 10; |
| `plug` | `F6436` (+2.43 s) | Opening | <div style={{position: 'absolute', inset: 0, opacity: on(f, O.plug, 16)}}> |
| `instead` | `F6458` (+2.80 s) | Opening | <OpenDoorGhost start={toPlug} out={O.instead} /> |
| `lighter` | `F6529` (+3.98 s) | Opening | <span style={{opacity: on(f, O.lighter, 8), ...litStyle(f, O.lighter, colors.ink |
| `simpler` | `F6573` (+4.72 s) | Opening | <span style={{opacity: on(f, O.simpler, 8), ...litStyle(f, O.simpler, colors.ink |
| `fills` | `F6643` (+5.88 s) | Opening | flash · <PlugSvg cam={camAt(f, [{f: toPlug, yaw: 0, pitch: 0.02, dist: 170}, { |
| `hole` | `F6673` (+6.38 s) | Opening | bump · <span style={{opacity: on(f, O.fills, 8), ...litStyle(f, O.fills, colo |

**25** · The plug weighs sixty-three pounds.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `weighs` | `F6826` (+0.55 s) | Restraints | <div style={{position: 'absolute', left: 1340, top: 150, width: 420, opacity: en |
| `sixty-three` | `F6845` (+0.87 s) | Restraints | rollTo · const lb = Math.round(rollTo(f, [{frame: R.w63 - 18, value: 0}, {frame |
| `pounds` | `F6887` (+1.57 s) | Restraints | {lb} <span style={{opacity: on(f, R.pounds, 8)}}>LB</span> |

**26** · Two kinds of restraint hold it in place, and the difference between them is the whole story.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Two` | `F6968` (+0.02 s) | Restraints | <div style={{position: 'absolute', left: 150, top: 140, fontFamily: mono, fontSi |
| `restraint` | `F7009` (+0.70 s) | Restraints | <div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12, o |
| `place` | `F7073` (+1.77 s) | Restraints | bump · <div style={{display: 'flex', alignItems: 'center', gap: 12, opacity:  |
| `difference` | `F7135` (+2.80 s) | Restraints | text: OUTWARD |
| `whole` | `F7224` (+4.28 s) | Restraints | bump · <div style={{display: 'flex', alignItems: 'center', gap: 12, opacity:  |

**27** · Twelve stop fittings, six down each side, keep it from moving outward.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Twelve` | `F7326` (+0.03 s) | (scene list) | sound effect cue |
| `fittings` | `F7369` (+0.75 s) | Restraints | text: STOP FITTINGS · NTSB |
| `six` | `F7422` (+1.63 s) | Restraints | text: 6 EACH SIDE |
| `side` | `F7469` (+2.42 s) | Restraints | rollTo · const lit = rollTo(f, [{frame: R.twelve - 4, value: 0}, {frame: R.twel |
| `moving` | `F7549` (+3.75 s) | (scene list) | sound effect cue |
| `outward` | `F7571` (+4.12 s) | Restraints | <div style={{position: 'absolute', left: 150, top: 846, fontFamily: mono, fontSi |

**28** · Small pins on the plug bear against pads on the frame.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `pins` | `F7667` (+0.47 s) | Restraints | {f: R.pins, yaw: 0.8, pitch: 0.18, dist: 132}, |
| `bear` | `F7731` (+1.53 s) | Restraints | flash · const push = press + 0.15 * flash(f, R.bear, 0); |
| `pads` | `F7773` (+2.23 s) | Restraints | BracketLock · <BracketLock f={f} fps={fps} word={R.pads} x={padP.x - 20} y={padP.y - |
| `frame` | `F7809` (+2.83 s) | Restraints | <span style={{opacity: on(f, R.frame, 8), ...litStyle(f, R.frame, colors.cyan)}} |

**29** · But stops only work in one direction.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `stops` | `F7941` (+0.20 s) | OneDirection | <div style={{position: 'absolute', left: 150, top: 846, fontFamily: mono, fontSi |
| `one` | `F8028` (+1.65 s) | OneDirection | <g opacity={on(f, D.one, 10)}> |
| `direction` | `F8038` (+1.82 s) | OneDirection | <g opacity={on(f, D.direction, 10)}> |

**30** · Lift the plug about half an inch, and the pins slide clear of the pads.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Lift` | `F8120` (+0.07 s) | OneDirection | {f: D.lift, yaw: 1.02, pitch: 0.14, dist: 118, ty: 34}, |
| `half` | `F8180` (+1.07 s) | OneDirection | bump · {shown.toFixed(2)} <span style={{...litStyle(f, D.half, colors.amber), |
| `inch` | `F8204` (+1.47 s) | OneDirection | bump · {shown.toFixed(2)} <span style={{...litStyle(f, D.half, colors.amber), |
| `pins` | `F8256` (+2.33 s) | OneDirection | BracketLock · <BracketLock f={f} fps={fps} word={D.pins} x={pin.x - 26} y={pin.y - 2 |
| `clear` | `F8309` (+3.22 s) | (scene list) | sound effect cue |
| `pads` | `F8342` (+3.77 s) | OneDirection | rollTo · const lift = rollTo(f, [{frame: D.lift, value: 0}, {frame: D.clear + L |

**31** · Then the top of the plug can swing out.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `top` | `F8438` (+0.47 s) | OneDirection | {f: D.top, yaw: 1.08, pitch: 0.12, dist: 125, ty: 32}, |
| `swing` | `F8497` (+1.45 s) | OneDirection | tween · const swing = tween(f, D.swing, D.swing + 70, 0, (12 * Math.PI) / 180, |
| `out` | `F8517` (+1.78 s) | OneDirection | <span style={{opacity: on(f, D.swing, 8), ...litStyle(f, D.out, colors.red)}}> · |

**32** · That is why there are four bolts.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `four` | `F8688` (+1.07 s) | FourBolts | <div style={{position: 'absolute', left: 150, top: 150, fontFamily: mono, opacit |

**33** · Two at the top, through the guide tracks.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Two` | `F8771` (+0.02 s) | (scene list) | sound effect cue |
| `top` | `F8795` (+0.42 s) | FourBolts | {callout('upperFwd', 'UPPER GUIDE TRACK BOLT', B.top - 8)} |
| `guide` | `F8848` (+1.30 s) | FourBolts | BracketLock · return <BracketLock key={id} f={f} fps={fps} word={B.guide + i * 6} x= |

**34** · Two at the bottom, through the hinges.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Two` | `F8924` (+0.02 s) | (scene list) | sound effect cue |
| `bottom` | `F8947` (+0.40 s) | FourBolts | {callout('lowerFwd', 'ARRESTOR BOLT', B.bottom - 8)} |
| `hinges` | `F9008` (+1.42 s) | FourBolts | BracketLock · return <BracketLock key={id} f={f} fps={fps} word={B.hinges + i * 6} x |

**35** · Each one fitted with washers, a castle nut and a cotter pin.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Each` | `F9082` (+0.07 s) | FourBolts | const stackIn = wf(35, 'each'); |
| `one` | `F9101` (+0.38 s) | FourBolts | <BoltStack start={stackIn - 10} end={end} ons={[B.one - 4, wf(35, 'washers') - 6 |
| `washers` | `F9147` (+1.15 s) | FourBolts | <BoltStack start={stackIn - 10} end={end} ons={[B.one - 4, wf(35, 'washers') - 6 |
| `castle` | `F9200` (+2.03 s) | FourBolts | <BoltStack start={stackIn - 10} end={end} ons={[B.one - 4, wf(35, 'washers') - 6 |
| `cotter` | `F9268` (+3.17 s) | FourBolts | <BoltStack start={stackIn - 10} end={end} ons={[B.one - 4, wf(35, 'washers') - 6 |

**36** · Their only job is to stop the plug moving up.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `job` | `F9429` (+0.55 s) | FourBolts | const jobAt = B.job; |
| `stop` | `F9480` (+1.40 s) | FourBolts | <span style={{opacity: on(f, B.stop, 8), color: colors.amber}}> STOP</span> |
| `moving` | `F9532` (+2.27 s) | (scene list) | sound effect cue |
| `up` | `F9556` (+2.67 s) | FourBolts | <span style={{opacity: on(f, B.up, 8), color: colors.amber}}> UPWARD MOVEMENT</s |

**37** · And here is the margin.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `margin` | `F9679` (+0.93 s) | Margin | <div style={{position: 'absolute', left: 1340, top: 180, width: 420, opacity: en |

**38** · After the accident, Boeing's engineers worked out how many of those bolts were really needed.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `accident` | `F9795` (+0.50 s) | (scene list) | sound effect cue |
| `engineers` | `F9874` (+1.82 s) | Margin | <div style={{position: 'absolute', left: 150, top: 960, fontFamily: mono, fontSi |
| `worked` | `F9912` (+2.45 s) | Margin | highlights · <Exhibit page={{w: 1870, h: 2420}} start={docA} push={{from: M.worked  |
| `many` | `F9963` (+3.30 s) | (scene list) | sound effect cue |
| `bolts` | `F10004` (+3.98 s) | Margin | highlights · <Exhibit page={{w: 1870, h: 2420}} start={docA} push={{from: M.worked  |
| `needed` | `F10059` (+4.90 s) | Margin | highlights · <Exhibit page={{w: 1870, h: 2420}} start={docA} push={{from: M.worked  |

**39** · One lower bolt, on its own, would have held the plug down.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `One` | `F10137` (+0.12 s) | (scene list) | sound effect cue |
| `lower` | `F10152` (+0.37 s) | Margin | BracketLock · <BracketLock f={f} fps={fps} word={M.lower} x={lowF.x - 30} y={lowF.y  |
| `own` | `F10224` (+1.57 s) | (scene list) | sound effect cue |
| `held` | `F10276` (+2.43 s) | Margin | const sub = f >= M.four ? 'MARGIN: 4 WHERE 1 HOLDS' : f >= M.kept ? 'TWO UPPER A |
| `down` | `F10318` (+3.13 s) | Margin | text: HOLDS |

**40** · The two upper bolts, on their own, would have kept it on its stops.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `two` | `F10440` (+0.13 s) | Margin | if (f >= M.one - 10 && f < M.two - 10) bolts = {upperFwd: out(M.one - 6), upperA |
| `upper` | `F10460` (+0.47 s) | Margin | BracketLock · <BracketLock f={f} fps={fps} word={M.upper} x={upF.x - 30} y={upF.y -  |
| `own` | `F10535` (+1.72 s) | Margin | if (f >= M.two - 10 && f < M.four - 10) bolts = {upperFwd: back(M.two - 10), upp |
| `kept` | `F10585` (+2.55 s) | Margin | const sub = f >= M.four ? 'MARGIN: 4 WHERE 1 HOLDS' : f >= M.kept ? 'TWO UPPER A |
| `stops` | `F10628` (+3.27 s) | Margin | flash · const state: PlugState = {...defaultState, stopGlow: 0.35 + 0.65 * fla |

**41** · Four bolts, where a single lower bolt would have done.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Four` | `F10749` (+0.10 s) | (scene list) | sound effect cue |
| `single` | `F10833` (+1.50 s) | Margin | BracketLock · <BracketLock f={f} fps={fps} word={M.single} x={lowF.x - 30} y={lowF.y |
| `done` | `F10911` (+2.80 s) | (scene list) | sound effect cue |

**42** · A margin of error, built in steel.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `margin` | `F10984` (+0.13 s) | Margin | bump · <div style={{position: 'absolute', left: 1340, top: 560, fontFamily: s |
| `error` | `F11019` (+0.72 s) | Margin | text: A MARGIN OF ERROR, / BUILT |
| `built` | `F11057` (+1.35 s) | Margin | text: A MARGIN OF ERROR, / BUILT |
| `steel` | `F11089` (+1.88 s) | Margin | flash · const state: PlugState = {...defaultState, stopGlow: 0.35 + 0.65 * fla |

**43** · On this airplane, all four were missing.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `airplane` | `F11249` (+0.40 s) | Missing | const N = {airplane: wf(43, 'airplane'), missing: wf(43, 'missing')}; |
| `four` | `F11319` (+1.57 s) | (scene list) | sound effect cue |
| `missing` | `F11347` (+2.03 s) | Missing | const N = {airplane: wf(43, 'airplane'), missing: wf(43, 'missing')}; |

**44** · The investigators could tell from the holes.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `investigators` | `F11504` (+0.12 s) | Holes | <div style={{position: 'absolute', left: 72, top: 960, fontFamily: mono, fontSiz |
| `tell` | `F11561` (+1.07 s) | Holes | <span style={{opacity: on(f, H.tell, 8), color: colors.ink}}> · THE BOLT HOLES</ |
| `holes` | `F11596` (+1.65 s) | Holes | {frame: H.holes + 12, r: {x: 60, y: 160, w: 1170, h: 550}}, |

**45** · None of them carried a mark from a bolt.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `None` | `F11660` (+0.07 s) | Holes | <span style={{opacity: on(f, H.none, 8), color: colors.red}}> · NO BOLT CONTACT  |
| `mark` | `F11719` (+1.05 s) | Holes | BracketLock · <BracketLock key={i} f={f} fps={fps} word={H.holes + i * 6} arm={22} x |
| `bolt` | `F11757` (+1.68 s) | Holes | bump · <span style={{opacity: on(f, H.bolt, 8), color: colors.red, display: ' |

**46** · But faint rings around the upper holes showed that washers had once been there.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `faint` | `F11834` (+0.22 s) | Holes | const swap = H.faint - 14; |
| `upper` | `F11907` (+1.43 s) | Holes | {frame: H.upper + 10, r: {x: 0, y: 60, w: 560, h: 264}}, |
| `holes` | `F11922` (+1.68 s) | Holes | BracketLock · <BracketLock f={f} fps={fps} word={H.holes2} arm={26} x={sx(110)} y={s |
| `washers` | `F11994` (+2.88 s) | Holes | text: FAINT WASHER OUTLINES |
| `there` | `F12062` (+4.02 s) | Holes | <span style={{opacity: on(f, H.there, 8), color: colors.amber}}> · UPPER HOLES</ |

**47** · The bolts had been fitted—and then taken out.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `bolts` | `F12125` (+0.12 s) | Holes | text: THE BOLTS · |
| `fitted` | `F12167` (+0.82 s) | Holes | <span style={{opacity: on(f, H.fitted, 8), ...litStyle(f, H.fitted, colors.cyan) |
| `taken` | `F12240` (+2.03 s) | Holes | <span style={{opacity: on(f, H.taken, 8), ...litStyle(f, H.taken, colors.red)}}> |

**48** · So the question became: who took them out, and why were they never put back?

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `question` | `F12385` (+0.30 s) | Question | text: THE QUESTION |
| `became` | `F12412` (+0.75 s) | Question | <span style={{opacity: on(f, wf(48, 'became'), 10), color: colors.amber}}> BECAM |
| `who` | `F12476` (+1.82 s) | Question | text: WHO / TOOK |
| `took` | `F12489` (+2.03 s) | Question | text: WHO / TOOK |
| `them` | `F12502` (+2.25 s) | Question | text: WHO / TOOK |
| `out` | `F12516` (+2.48 s) | Question | text: WHO / TOOK |
| `and` | `F12561` (+3.23 s) | Question | text: AND / WHY |
| `why` | `F12572` (+3.42 s) | Question | text: AND / WHY |
| `were` | `F12589` (+3.70 s) | Question | text: AND / WHY |
| `they` | `F12598` (+3.85 s) | Question | text: AND / WHY |
| `never` | `F12607` (+4.00 s) | Question | text: AND / WHY |
| `put` | `F12624` (+4.28 s) | Question | text: AND / WHY |
| `back` | `F12638` (+4.52 s) | Question | text: AND / WHY |

**49** · The plug was made by Spirit AeroSystems, in Malaysia, in March twenty twenty-three.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `plug` | `F12951` (+0.13 s) | Journey | lead · plugAlpha: 0.25 + 0.75 * lead(f, B.plug, 16), |
| `made` | `F12981` (+0.63 s) | Journey | const head = interpolate(f, [a + 20, B.march, B.wichita, B.d28, B.july], [0, E.m |
| `Spirit` | `F13014` (+1.18 s) | Journey | text: SPIRIT / AEROSYSTEMS |
| `AeroSystems` | `F13042` (+1.65 s) | Journey | text: SPIRIT / AEROSYSTEMS |
| `Malaysia` | `F13118` (+2.92 s) | Journey | {d: E.made, label: 'MADE · MALAYSIA', tone: 'cyan', on: wf(49, 'malaysia')}, |
| `March` | `F13185` (+4.03 s) | Journey | const head = interpolate(f, [a + 20, B.march, B.wichita, B.d28, B.july], [0, E.m |
| `twenty-three` | `F13230` (+4.78 s) | Journey | DatePill · <DatePill f={f} fps={fps} day={24} fromDay={24} month={3} year={2023}  |

**50** · Spirit fitted it to the fuselage in Wichita, Kansas, and on the twenty-eighth of July it was closed with all four bolts in place.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `fitted` | `F13359` (+0.57 s) | Journey | const carry = beat(f, B.fitted, 30); |
| `fuselage` | `F13399` (+1.23 s) | Journey | lead · context: lead(f, B.fuselage, 18) * 0.9, |
| `Wichita` | `F13447` (+2.03 s) | Journey | const head = interpolate(f, [a + 20, B.march, B.wichita, B.d28, B.july], [0, E.m |
| `Kansas` | `F13482` (+2.62 s) | Journey | text: KANSAS |
| `twenty-eighth` | `F13569` (+4.07 s) | Journey | const head = interpolate(f, [a + 20, B.march, B.wichita, B.d28, B.july], [0, E.m |
| `July` | `F13611` (+4.77 s) | Journey | const head = interpolate(f, [a + 20, B.march, B.wichita, B.d28, B.july], [0, E.m |
| `closed` | `F13676` (+5.85 s) | Journey | const head = interpolate(f, [a + 20, B.march, B.wichita, B.d28, B.july], [0, E.m |
| `four` | `F13740` (+6.92 s) | (scene list) | sound effect cue |
| `place` | `F13789` (+7.73 s) | Journey | {d: E.closed, label: 'CLOSED · 4 BOLTS · WICHITA', tone: 'amber', on: wf(50, 'pl |

**51** · Spirit's Wichita plant used to be Boeing's.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Wichita` | `F13960` (+0.57 s) | Spirit | {t: "SPIRIT'S WICHITA PLANT", at: wf(51, 'wichita')}, |
| `used` | `F14018` (+1.53 s) | Spirit | text: · ONCE BOEING’S |

**52** · In two thousand and five, Boeing sold its operations in Wichita, and they became Spirit AeroSystems — a major supplier of seven thirty-seven fuselages.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `five` | `F14165` (+0.90 s) | (scene list) | sound effect cue |
| `sold` | `F14238` (+2.12 s) | Spirit | text: BOEING SOLD |
| `Wichita` | `F14312` (+3.35 s) | Spirit | text: WICHITA |
| `became` | `F14387` (+4.60 s) | Spirit | text: → IT BECAME |
| `AeroSystems` | `F14450` (+5.65 s) | Spirit | text: SPIRIT AEROSYSTEMS |
| `a` | `F14537` (+7.10 s) | Spirit | text: · |
| `major` | `F14545` (+7.23 s) | Spirit | text: A MAJOR SUPPLIER |
| `supplier` | `F14567` (+7.60 s) | Spirit | text: OF |
| `thirty-seven` | `F14635` (+8.73 s) | Spirit | text: 737 |
| `fuselages` | `F14677` (+9.43 s) | Spirit | text: FUSELAGES |

**53** · By twenty twenty-three, nearly two thirds of Spirit's revenue came from Boeing.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `twenty-three` | `F14808` (+0.53 s) | Spirit | text: BY 2023 |
| `nearly` | `F14870` (+1.57 s) | (scene list) | sound effect cue |
| `two` | `F14893` (+1.95 s) | Spirit | text: · NEARLY 2/3 |
| `revenue` | `F14972` (+3.27 s) | Spirit | {t: "OF SPIRIT'S REVENUE", at: wf(53, 'revenue')}, |
| `Boeing` | `F15030` (+4.23 s) | Spirit | text: · FROM BOEING |

**54** · The fuselage arrived at Boeing's factory in Renton, Washington, on the thirty-first of August.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `arrived` | `F15201` (+0.75 s) | Renton | text: FUSELAGE ARRIVES |
| `Boeing's` | `F15236` (+1.33 s) | Renton | text: BOEING / FACTORY · |
| `factory` | `F15260` (+1.73 s) | Renton | text: BOEING / FACTORY · |
| `Renton` | `F15301` (+2.42 s) | Renton | const head = interpolate(f, [a, R.d31, R.day], [E.closed, E.renton, E.rivets], { |
| `Washington` | `F15341` (+3.08 s) | Renton | text: WASHINGTON |
| `thirty-first` | `F15411` (+4.25 s) | Renton | const head = interpolate(f, [a, R.d31, R.day], [E.closed, E.renton, E.rivets], { |
| `August` | `F15461` (+5.08 s) | Renton | DatePill · <DatePill f={f} fps={fps} day={31} fromDay={1} month={8} year={2023} d |

**55** · The next day, Boeing workers found five damaged rivets in the frame just forward of the plug.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `day` | `F15556` (+0.43 s) | Renton | const head = interpolate(f, [a, R.d31, R.day], [E.closed, E.renton, E.rivets], { |
| `found` | `F15638` (+1.80 s) | Renton | text: 01 SEP · / DAMAGED |
| `five` | `F15660` (+2.17 s) | (scene list) | sound effect cue |
| `damaged` | `F15686` (+2.60 s) | Renton | text: 01 SEP · / DAMAGED |
| `rivets` | `F15715` (+3.08 s) | Renton | text: 01 SEP · / DAMAGED |
| `frame` | `F15751` (+3.68 s) | Renton | BracketLock · <PlugSvg cam={c} state={state} extra={<>{rivets}<BracketLock f={f} fps |
| `forward` | `F15811` (+4.68 s) | Renton | text: IN THE EDGE FRAME, / JUST FORWARD OF THE PLUG |
| `plug` | `F15847` (+5.28 s) | Renton | flash · const state: PlugState = {...defaultState, stopGlow: 0.2 + 0.6 * flash |

**56** · The rivets had been installed by one of Spirit's suppliers.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `rivets` | `F15974` (+0.13 s) | Renton | flash · const pulse = 1 + 0.3 * flash(f, R.rivets, 0); |
| `installed` | `F16014` (+0.80 s) | Renton | text: INSTALLED BY / ONE OF |
| `one` | `F16064` (+1.63 s) | Renton | text: INSTALLED BY / ONE OF |
| `suppliers` | `F16108` (+2.37 s) | Renton | text: SPIRIT'S SUPPLIERS |

**57** · But under Boeing's rules, Spirit's people were not allowed to take apart a finished installation.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Boeing's` | `F16217` (+0.42 s) | Renton | whoAt={R.boeings} |
| `rules` | `F16246` (+0.90 s) | Renton | BracketLock · <PlugSvg cam={c} state={state} extra={<>{rivets}<BracketLock f={f} fps |
| `Spirit's` | `F16295` (+1.72 s) | Renton | whereAt={R.spirits} |
| `people` | `F16322` (+2.17 s) | Renton | {t: "SPIRIT'S PEOPLE", at: wf(57, 'people')}, |
| `not` | `F16354` (+2.70 s) | Renton | text: NOT ALLOWED |
| `allowed` | `F16365` (+2.88 s) | Renton | text: were allowed |
| `apart` | `F16406` (+3.57 s) | Renton | text: to perform such work |
| `finished` | `F16437` (+4.08 s) | Renton | text: · A FINISHED |
| `installation` | `F16461` (+4.48 s) | Renton | text: INSTALLATION |

**58** · Only Boeing could open the plug.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Only` | `F16550` (+0.07 s) | Renton | end={R.only - 12} |
| `Boeing` | `F16569` (+0.38 s) | Renton | text: BOEING |
| `open` | `F16606` (+1.00 s) | Renton | text: COULD OPEN |
| `plug` | `F16629` (+1.38 s) | Renton | text: THE PLUG |

**59** · And opening it was not routine.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `opening` | `F16703` (+0.25 s) | Record | text: OPENING IT / WAS NOT |
| `not` | `F16762` (+1.23 s) | Record | text: OPENING IT / WAS NOT |
| `routine` | `F16775` (+1.45 s) | Record | text: OPENING IT / WAS NOT |

**60** · Boeing's own process required a removal record — a document that lists the steps to restore what was disturbed, and the quality sign-offs that prove it was done.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `process` | `F16906` (+0.75 s) | Record | {t: "BOEING'S OWN PROCESS", at: W.process}, |
| `required` | `F16940` (+1.32 s) | Record | text: REQUIRED |
| `removal` | `F16975` (+1.90 s) | Record | <RemovalForm start={sf(60) - 10} end={sf(61) + 10} titleAt={W.removal} lit={[wf( |
| `record` | `F17006` (+2.42 s) | Record | text: A REMOVAL RECORD |
| `document` | `F17072` (+3.52 s) | Record | text: A DOCUMENT |
| `lists` | `F17114` (+4.22 s) | Record | text: THAT LISTS |
| `steps` | `F17142` (+4.68 s) | Record | <RemovalForm start={sf(60) - 10} end={sf(61) + 10} titleAt={W.removal} lit={[wf( |
| `restore` | `F17172` (+5.18 s) | Record | start={W.restore - 12} |
| `disturbed` | `F17221` (+6.00 s) | Record | <RemovalForm start={sf(60) - 10} end={sf(61) + 10} titleAt={W.removal} lit={[wf( |
| `quality` | `F17295` (+7.23 s) | Record | <RemovalForm start={sf(60) - 10} end={sf(61) + 10} titleAt={W.removal} lit={[wf( |
| `sign-offs` | `F17324` (+7.72 s) | Record | <RemovalForm start={sf(60) - 10} end={sf(61) + 10} titleAt={W.removal} lit={[wf( |
| `prove` | `F17369` (+8.47 s) | Record | text: · FORCES AN INSPECTION |
| `done` | `F17405` (+9.07 s) | Record | text: · PROVES IT WAS DONE |

**61** · For more than two weeks, the rivets went back and forth.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `two` | `F17559` (+0.57 s) | Ledger | text: MORE THAN 2 WEEKS |
| `rivets` | `F17625` (+1.67 s) | Ledger | <span style={{opacity: on(f, L.rivets, 8), ...litStyle(f, L.rivets, colors.ink)} |
| `back` | `F17664` (+2.32 s) | Ledger | rollTo · const shuttle = rollTo(f, [{frame: L.back - 4, value: 0}, {frame: L.ba |
| `forth` | `F17688` (+2.72 s) | Ledger | rollTo · const shuttle = rollTo(f, [{frame: L.back - 4, value: 0}, {frame: L.ba |

**62** · A Spirit contract mechanic recorded them as replaced.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Spirit` | `F17760` (+0.15 s) | Ledger | text: RECORDED: / REPLACED |
| `recorded` | `F17844` (+1.55 s) | Ledger | text: RECORDED: / REPLACED |
| `replaced` | `F17913` (+2.70 s) | Ledger | text: RECORDED: / REPLACED |

**63** · The same day, Boeing's quality inspectors recorded that they had not been replaced, but just painted over.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `same` | `F18006` (+0.15 s) | Ledger | text: 06 SEP 2023 · THE SAME DAY |
| `quality` | `F18088` (+1.52 s) | Ledger | text: RECORDED: / NOT |
| `recorded` | `F18152` (+2.58 s) | Ledger | text: RECORDED: / NOT |
| `not` | `F18213` (+3.60 s) | Ledger | text: RECORDED: / NOT |
| `replaced` | `F18238` (+4.02 s) | Ledger | text: RECORDED: / NOT |
| `painted` | `F18313` (+5.27 s) | (scene list) | sound effect cue |

**64** · Spirit later said the mechanic had confused this airplane with another.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Spirit` | `F18412` (+0.08 s) | Ledger | whoAt={wf(64, 'spirit')} |
| `said` | `F18459` (+0.87 s) | Ledger | whereAt={wf(64, 'said')} |
| `confused` | `F18515` (+1.80 s) | Ledger | text: he had confused |
| `airplane` | `F18565` (+2.63 s) | Ledger | text: [the accident] airplane |
| `another` | `F18601` (+3.23 s) | Ledger | text: with another airplane he was working on that day |

**65** · The request for access was escalated twice.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `request` | `F18728` (+0.10 s) | Escalation | const ons = [wf(65, 'request'), wf(65, 'escalated'), wf(65, 'twice')]; |
| `access` | `F18767` (+0.75 s) | Escalation | text: REQUEST FOR ACCESS · BOEING SHIPSIDE ACTION TRACKER |
| `escalated` | `F18809` (+1.45 s) | Escalation | const ons = [wf(65, 'request'), wf(65, 'escalated'), wf(65, 'twice')]; |
| `twice` | `F18848` (+2.10 s) | Escalation | const ons = [wf(65, 'request'), wf(65, 'escalated'), wf(65, 'twice')]; |

**66** · On the seventeenth of September, a note in Boeing's tracking system read: if removal needed, a removal needs to be written first.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `seventeenth` | `F18938` (+0.27 s) | Note | text: 17 |
| `September` | `F18978` (+0.93 s) | Note | text: SEP |
| `note` | `F19041` (+1.98 s) | Note | text: · A NOTE |
| `tracking` | `F19096` (+2.90 s) | Note | {t: "IN BOEING'S TRACKING SYSTEM:", at: wf(66, 'tracking')}, |
| `read` | `F19149` (+3.78 s) | Note | hl= · <ReportPage page={62} start={sf(66) - 8} end={sf(69) + 4} hl={[{key: ' |
| `if` | `F19205` (+4.72 s) | Note | text: IF REMOVAL NEEDED, |
| `removal` | `F19216` (+4.90 s) | (scene list) | sound effect cue |
| `removal` | `F19299` (+6.28 s) | Note | text: A REMOVAL |
| `written` | `F19363` (+7.35 s) | Note | text: WRITTEN |
| `first` | `F19387` (+7.75 s) | Note | text: FIRST |

**67** · The next morning, a Boeing door manager reported that the door was being opened by a mechanic.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `morning` | `F19546` (+0.45 s) | Note | text: 18 SEP · MORNING |
| `manager` | `F19633` (+1.90 s) | Note | text: · A BOEING DOOR MANAGER |
| `reported` | `F19660` (+2.35 s) | Note | text: REPORTED |
| `door` | `F19710` (+3.18 s) | Note | text: THE DOOR |
| `opened` | `F19755` (+3.93 s) | (scene list) | sound effect cue |
| `mechanic` | `F19793` (+4.57 s) | Note | text: BY A MECHANIC |

**68** · Which mechanic, the record does not say.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Which` | `F19866` (+0.07 s) | Note | text: WHICH MECHANIC: |
| `record` | `F19938` (+1.27 s) | Note | text: THE RECORD |
| `not` | `F19973` (+1.85 s) | Note | text: DOES NOT SAY |

**69** · Only Boeing's door team was allowed to work on a plug.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Only` | `F20113` (+0.07 s) | DoorTeam | text: ONLY |
| `door` | `F20160` (+0.85 s) | DoorTeam | {t: "BOEING'S DOOR TEAM", at: wf(69, 'door')}, |
| `allowed` | `F20204` (+1.58 s) | DoorTeam | text: · ALLOWED |
| `plug` | `F20261` (+2.53 s) | DoorTeam | text: TO WORK ON A PLUG |

**70** · The man usually given that job had about twenty-five years on seven thirty-seven doors.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `man` | `F20335` (+0.12 s) | DoorTeam | D.man, |
| `job` | `F20406` (+1.30 s) | DoorTeam | D.job, |
| `twenty-five` | `F20465` (+2.28 s) | DoorTeam | rollTo · const yrs = Math.round(rollTo(f, [{frame: D.y25 - 16, value: 0}, {fram |
| `years` | `F20508` (+3.00 s) | DoorTeam | text: YEARS |
| `thirty-seven` | `F20563` (+3.92 s) | DoorTeam | text: ON 737 / DOORS |
| `doors` | `F20605` (+4.62 s) | DoorTeam | text: ON 737 / DOORS |

**71** · That day, and the next, he was on leave.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `day` | `F20694` (+0.30 s) | DoorTeam | text: 18 SEP |
| `next` | `F20748` (+1.20 s) | DoorTeam | text: 18 SEP |
| `leave` | `F20820` (+2.40 s) | DoorTeam | text: 18 SEP |

**72** · None of the door team on duty had ever opened a plug.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `None` | `F20894` (+0.07 s) | DoorTeam | D.none, |
| `duty` | `F20962` (+1.20 s) | DoorTeam | D.duty, |
| `ever` | `F21006` (+1.93 s) | DoorTeam | text: NONE HAD EVER |
| `opened` | `F21027` (+2.28 s) | DoorTeam | text: OPENED A PLUG |

**73** · The plug was opened.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `opened` | `F21214` (+0.72 s) | NoRecord | StatusFlip · <StatusFlip f={f} fps={fps} word={wf(73, 'opened')} from="THE PLUG · C |

**74** · No removal record was written.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `removal` | `F21288` (+0.32 s) | NoRecord | <RemovalForm start={sf(73) - 10} end={sf(76) + 6} stamp={wf(74, 'record') - 6} t |
| `record` | `F21320` (+0.85 s) | (scene list) | sound effect cue |

**75** · No one interviewed said they knew who opened it.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `one` | `F21434` (+0.32 s) | NoRecord | text: NO ONE INTERVIEWED |
| `knew` | `F21507` (+1.53 s) | NoRecord | text: SAID THEY KNEW |
| `opened` | `F21539` (+2.07 s) | NoRecord | text: WHO OPENED IT |

**76** · Later that day, a technician moving equipment found the plug lying open on a stand.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `day` | `F21694` (+0.58 s) | Strap | text: 18 SEP · LATER THAT DAY |
| `technician` | `F21736` (+1.28 s) | Strap | text: A TECHNICIAN |
| `moving` | `F21773` (+1.90 s) | Strap | text: MOVING EQUIPMENT |
| `found` | `F21829` (+2.83 s) | Strap | text: FOUND THE PLUG |
| `open` | `F21898` (+3.98 s) | Strap | text: OPEN |
| `stand` | `F21932` (+4.55 s) | Strap | text: ON A STAND |

**77** · He used a strap to pull it up off the stand, he said, and let it hang—with a gap all round it in the frame.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `He` | `F22003` (+0.00 s) | Strap | text: just strapped it up there / and let it hang |
| `strap` | `F22034` (+0.52 s) | Strap | const S = {strap: wf(77, 'strap'), pull: wf(77, 'pull'), up: wf(77, 'up'), hang: |
| `pull` | `F22068` (+1.08 s) | Strap | const S = {strap: wf(77, 'strap'), pull: wf(77, 'pull'), up: wf(77, 'up'), hang: |
| `up` | `F22087` (+1.40 s) | Strap | const S = {strap: wf(77, 'strap'), pull: wf(77, 'pull'), up: wf(77, 'up'), hang: |
| `said` | `F22155` (+2.53 s) | Strap | text: just strapped it up there / and let it hang |
| `hang` | `F22220` (+3.62 s) | Strap | const S = {strap: wf(77, 'strap'), pull: wf(77, 'pull'), up: wf(77, 'up'), hang: |
| `gap` | `F22287` (+4.73 s) | Strap | const S = {strap: wf(77, 'strap'), pull: wf(77, 'pull'), up: wf(77, 'up'), hang: |
| `round` | `F22326` (+5.38 s) | Strap | const S = {strap: wf(77, 'strap'), pull: wf(77, 'pull'), up: wf(77, 'up'), hang: |
| `frame` | `F22367` (+6.07 s) | Strap | const S = {strap: wf(77, 'strap'), pull: wf(77, 'pull'), up: wf(77, 'up'), hang: |

**78** · The next day, the rivet work was finished.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `day` | `F22520` (+0.43 s) | Closed | text: 19 SEP |
| `rivet` | `F22563` (+1.15 s) | Closed | text: · THE RIVET WORK |
| `finished` | `F22610` (+1.93 s) | Closed | text: FINISHED |

**79** · And sometime on the evening shift of the nineteenth of September, when no member of the door team was working, the plug was closed.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `sometime` | `F22689` (+0.22 s) | Closed | {span(24 * 60 + 17 * 60 + 10, 24 * 60 + 18 * 60 + 38, colors.sub, 'UNDETERMINED  |
| `evening` | `F22740` (+1.07 s) | Closed | {span(24 * 60 + 13 * 60 + 30, 24 * 60 + 23 * 60 + 30, f >= wf(79, 'no') ? colors |
| `nineteenth` | `F22797` (+2.02 s) | Closed | <text x={40 + W / 2} y={50} fill={f >= wf(79, 'september') ? colors.ink : f >= C |
| `September` | `F22834` (+2.63 s) | Closed | <text x={40 + W / 2} y={50} fill={f >= wf(79, 'september') ? colors.ink : f >= C |
| `no` | `F22909` (+3.88 s) | Closed | {span(24 * 60 + 13 * 60 + 30, 24 * 60 + 23 * 60 + 30, f >= wf(79, 'no') ? colors |
| `member` | `F22923` (+4.12 s) | Closed | text: NO DOOR TEAM |
| `working` | `F22998` (+5.37 s) | Closed | text: WORKING |
| `plug` | `F23060` (+6.40 s) | Closed | tween · const close = tween(f, C.plug - 20, C.closed + 10, 1, 0, ease.camera); |
| `closed` | `F23091` (+6.92 s) | (scene list) | sound effect cue |

**80** · At about twenty to seven that evening, Boeing workers were texting each other about putting the cabin interior back together.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `seven` | `F23282` (+0.97 s) | Texts | <div style={{opacity: on(f, T.seven, 8)}}> |
| `evening` | `F23316` (+1.53 s) | Texts | text: 19 SEP · ABOUT 18:40 |
| `workers` | `F23385` (+2.68 s) | Texts | text: TEXT MESSAGES · BOEING WORKERS |
| `texting` | `F23419` (+3.25 s) | Texts | const bub = [T.texting, T.each, T.other]; |
| `each` | `F23446` (+3.70 s) | Texts | const bub = [T.texting, T.each, T.other]; |
| `other` | `F23459` (+3.92 s) | Texts | const bub = [T.texting, T.each, T.other]; |
| `putting` | `F23491` (+4.45 s) | Texts | text: SUBJECT: PUTTING THE / CABIN INTERIOR |
| `cabin` | `F23516` (+4.87 s) | Texts | text: SUBJECT: PUTTING THE / CABIN INTERIOR |
| `back` | `F23575` (+5.85 s) | Texts | text: BACK TOGETHER |

**81** · One message carried a photograph.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `One` | `F23677` (+0.10 s) | Texts | const hot = i === 2 && f >= T.one; |
| `carried` | `F23716` (+0.75 s) | Texts | lead · <line x1={320} x2={320} y1={394} y2={394 + 46 * lead(f, T.carried, 14) |
| `photograph` | `F23741` (+1.17 s) | Texts | bump · <div style={{position: 'absolute', left: 30, top: 440, width: 460, hei |

**82** · It shows the plug, closed.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `plug` | `F23942` (+0.65 s) | Photograph | text: THE PLUG, / CLOSED · |
| `closed` | `F23992` (+1.48 s) | Photograph | text: THE PLUG, / CLOSED · |

**83** · Three of the four bolt positions are in view.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Three` | `F24062` (+0.02 s) | (scene list) | sound effect cue |
| `four` | `F24094` (+0.55 s) | Photograph | text: OF 4 |
| `positions` | `F24129` (+1.13 s) | Photograph | text: BOLT POSITIONS / IN VIEW |
| `view` | `F24181` (+2.00 s) | Photograph | text: BOLT POSITIONS / IN VIEW |

**84** · In each of them you can see—nothing.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `each` | `F24249` (+0.18 s) | Photograph | flash · const r = 44 * (1 + 0.15 * flash(f, P.each + i * 8, 0)); |
| `see` | `F24307` (+1.15 s) | Photograph | rollTo · const dist = rollTo(f, [{frame: P.see - 6, value: 128}, {frame: P.noth |
| `nothing` | `F24366` (+2.13 s) | Photograph | rollTo · const dist = rollTo(f, [{frame: P.see - 6, value: 128}, {frame: P.noth |

**85** · No bolts.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `No` | `F24474` (+0.08 s) | Photograph | text: BOLTS |
| `bolts` | `F24488` (+0.32 s) | Photograph | text: BOLTS |

**86** · No washers.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `No` | `F24540` (+0.07 s) | Photograph | text: WASHERS |
| `washers` | `F24553` (+0.28 s) | Photograph | text: WASHERS |

**87** · No nuts.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `No` | `F24608` (+0.07 s) | Photograph | text: NUTS |
| `nuts` | `F24620` (+0.27 s) | Photograph | text: NUTS |

**88** · No pins.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `No` | `F24671` (+0.07 s) | Photograph | text: PINS |
| `pins` | `F24684` (+0.28 s) | Photograph | text: PINS |

**89** · No one interviewed said they knew who closed it.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `one` | `F24874` (+0.30 s) | Video | text: NO ONE INTERVIEWED / SAID THEY KNEW |
| `knew` | `F24944` (+1.47 s) | Video | text: NO ONE INTERVIEWED / SAID THEY KNEW |
| `closed` | `F24973` (+1.95 s) | Video | text: WHO CLOSED IT |

**90** · As a matter of routine, Boeing kept its factory security video for thirty days.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `routine` | `F25095` (+0.65 s) | Video | text: FACTORY SECURITY VIDEO |
| `kept` | `F25171` (+1.92 s) | Video | rollTo · const left = Math.round(rollTo(f, [{frame: V.kept, value: 0}, {frame:  |
| `security` | `F25225` (+2.82 s) | Video | text: FACTORY SECURITY VIDEO |
| `thirty` | `F25297` (+4.02 s) | Video | rollTo · const left = Math.round(rollTo(f, [{frame: V.kept, value: 0}, {frame:  |
| `days` | `F25321` (+4.42 s) | Video | {left} <span style={{opacity: on(f, V.days, 8)}}>{left === 1 ? 'DAY' : 'DAYS'}</ |

**91** · The accident came long after.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `accident` | `F25395` (+0.17 s) | Video | rollTo · const left = Math.round(rollTo(f, [{frame: V.kept, value: 0}, {frame:  |
| `long` | `F25446` (+1.02 s) | Video | text: THE ACCIDENT CAME 108 DAYS AFTER · NTSB AIR-25-04 |
| `after` | `F25463` (+1.30 s) | Video | rollTo · const left = Math.round(rollTo(f, [{frame: V.kept, value: 0}, {frame:  |

**92** · On the twentieth of September, a quality inspector signed off the job.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `twentieth` | `F25602` (+0.25 s) | SignOff | text: 20 |
| `September` | `F25638` (+0.85 s) | SignOff | text: SEP |
| `inspector` | `F25728` (+2.35 s) | SignOff | text: · A QUALITY INSPECTOR |
| `signed` | `F25765` (+2.97 s) | SignOff | text: SIGNED OFF THE JOB |

**93** · Her sign-off, she told investigators, did not involve looking at the airplane.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `sign-off` | `F25882` (+0.25 s) | SignOff | text: HER SIGN-OFF |
| `investigators` | `F25955` (+1.47 s) | SignOff | text: · TO INVESTIGATORS: |
| `not` | `F26040` (+2.88 s) | SignOff | text: DID NOT INVOLVE |
| `involve` | `F26054` (+3.12 s) | (scene list) | sound effect cue |
| `looking` | `F26081` (+3.57 s) | SignOff | text: LOOKING AT |
| `airplane` | `F26114` (+4.12 s) | SignOff | text: THE AIRPLANE |

**94** · She checked that every step for the rivet work had been signed off.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `checked` | `F26197` (+0.25 s) | SignOff | text: SHE CHECKED |
| `every` | `F26230` (+0.80 s) | SignOff | text: EVERY STEP |
| `rivet` | `F26284` (+1.70 s) | SignOff | text: FOR THE RIVET WORK |
| `signed` | `F26342` (+2.67 s) | SignOff | text: · SIGNED OFF |

**95** · And with no removal record, the paperwork said nothing about the plug.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `no` | `F26440` (+0.33 s) | SignOff | text: NO |
| `removal` | `F26455` (+0.58 s) | SignOff | text: REMOVAL RECORD |
| `paperwork` | `F26535` (+1.92 s) | SignOff | text: · THE PAPERWORK |
| `nothing` | `F26589` (+2.82 s) | SignOff | text: SAID NOTHING |
| `plug` | `F26634` (+3.57 s) | SignOff | text: ABOUT THE PLUG |

**96** · By then, the cabin wall was already in place over it.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `cabin` | `F26816` (+0.93 s) | Wall | const W = {cabin: wf(96, 'cabin'), wall: wf(96, 'wall'), place: wf(96, 'place'), |
| `wall` | `F26841` (+1.35 s) | Wall | const W = {cabin: wf(96, 'cabin'), wall: wf(96, 'wall'), place: wf(96, 'place'), |
| `place` | `F26911` (+2.52 s) | Wall | const W = {cabin: wf(96, 'cabin'), wall: wf(96, 'wall'), place: wf(96, 'place'), |
| `over` | `F26937` (+2.95 s) | Wall | const W = {cabin: wf(96, 'cabin'), wall: wf(96, 'wall'), place: wf(96, 'place'), |

**97** · Forty-one days later, the airplane was delivered to Alaska Airlines.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Forty-one` | `F27013` (+0.03 s) | Wall | const W = {cabin: wf(96, 'cabin'), wall: wf(96, 'wall'), place: wf(96, 'place'), |
| `days` | `F27048` (+0.62 s) | Wall | const W = {cabin: wf(96, 'cabin'), wall: wf(96, 'wall'), place: wf(96, 'place'), |
| `airplane` | `F27117` (+1.77 s) | Wall | const W = {cabin: wf(96, 'cabin'), wall: wf(96, 'wall'), place: wf(96, 'place'), |
| `delivered` | `F27155` (+2.40 s) | Wall | const W = {cabin: wf(96, 'cabin'), wall: wf(96, 'wall'), place: wf(96, 'place'), |
| `Alaska` | `F27190` (+2.98 s) | Wall | const W = {cabin: wf(96, 'cabin'), wall: wf(96, 'wall'), place: wf(96, 'place'), |

**98** · It would be easy to stop there, with a missing document and a name no one can give.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `easy` | `F27377` (+0.50 s) | Fan | const lifts = [wf(98, 'easy'), wf(98, 'stop'), wf(98, 'missing'), wf(98, 'name') |
| `stop` | `F27405` (+0.97 s) | Fan | const lifts = [wf(98, 'easy'), wf(98, 'stop'), wf(98, 'missing'), wf(98, 'name') |
| `missing` | `F27472` (+2.08 s) | Fan | const lifts = [wf(98, 'easy'), wf(98, 'stop'), wf(98, 'missing'), wf(98, 'name') |
| `document` | `F27494` (+2.45 s) | Fan | text: A MISSING DOCUMENT |
| `name` | `F27554` (+3.45 s) | Fan | text: · A NAME |
| `one` | `F27595` (+4.13 s) | Fan | text: NO ONE CAN GIVE |
| `give` | `F27618` (+4.52 s) | Fan | const lifts = [wf(98, 'easy'), wf(98, 'stop'), wf(98, 'missing'), wf(98, 'name') |

**99** · The N - T - S - B did not stop there.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `N` | `F27716` (+0.40 s) | Fan | text: N |
| `T` | `F27740` (+0.80 s) | Fan | text: T |
| `S` | `F27779` (+1.45 s) | Fan | text: S |
| `B` | `F27787` (+1.58 s) | Fan | text: B |
| `did` | `F27821` (+2.15 s) | Fan | tween · const spread = tween(f, wf(99, 'did') - 6, wf(99, 'there') + 10, 0.25, |
| `not` | `F27834` (+2.37 s) | Fan | text: · DID NOT STOP THERE |
| `there` | `F27870` (+2.97 s) | Fan | text: · AIR-25-04 |

**100** · The instruction that told workers when a removal record was needed ran to more than fifty pages.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `instruction` | `F27996` (+0.12 s) | Bpi | text: THE INSTRUCTION |
| `workers` | `F28066` (+1.28 s) | Bpi | text: TOLD WORKERS |
| `removal` | `F28109` (+2.00 s) | Bpi | text: WHEN A REMOVAL RECORD |
| `needed` | `F28174` (+3.08 s) | Bpi | text: WAS NEEDED |
| `ran` | `F28218` (+3.82 s) | Bpi | text: · RAN TO |
| `fifty` | `F28270` (+4.68 s) | (scene list) | sound effect cue |

**101** · The N - T - S - B found it listed more exceptions than directions.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `N` | `F28395` (+0.35 s) | Bpi | text: NTSB |
| `found` | `F28461` (+1.45 s) | Bpi | text: FOUND: |
| `listed` | `F28485` (+1.85 s) | Bpi | text: IT LISTED |
| `exceptions` | `F28523` (+2.48 s) | (scene list) | sound effect cue |
| `directions` | `F28579` (+3.42 s) | Bpi | text: THAN DIRECTIONS |

**102** · Boeing had revised it eleven times in ten years.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `revised` | `F28700` (+0.53 s) | Bpi | const B = {revised: wf(102, 'revised'), eleven: wf(102, 'eleven'), ten: wf(102,  |
| `eleven` | `F28742` (+1.23 s) | (scene list) | sound effect cue |
| `ten` | `F28811` (+2.38 s) | Bpi | const B = {revised: wf(102, 'revised'), eleven: wf(102, 'eleven'), ten: wf(102,  |

**103** · It had come up in sixteen regulatory compliance cases since twenty eighteen.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `come` | `F28907` (+0.28 s) | Bpi | const B = {revised: wf(102, 'revised'), eleven: wf(102, 'eleven'), ten: wf(102,  |
| `sixteen` | `F28946` (+0.93 s) | Bpi | const B = {revised: wf(102, 'revised'), eleven: wf(102, 'eleven'), ten: wf(102,  |
| `regulatory` | `F28982` (+1.53 s) | Bpi | const B = {revised: wf(102, 'revised'), eleven: wf(102, 'eleven'), ten: wf(102,  |
| `cases` | `F29053` (+2.72 s) | Bpi | text: COMPLIANCE CASES |
| `eighteen` | `F29123` (+3.88 s) | Bpi | const B = {revised: wf(102, 'revised'), eleven: wf(102, 'eleven'), ten: wf(102,  |

**104** · Boeing's corrective actions were accepted by its regulator, the F - A - A. For at least ten years, the investigators found, those actions were ineffective.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `corrective` | `F29287` (+0.43 s) | Finding21 | {t: "BOEING'S CORRECTIVE ACTIONS", at: wf(104, 'corrective')}, |
| `accepted` | `F29355` (+1.57 s) | Finding21 | text: ACCEPTED |
| `regulator` | `F29410` (+2.48 s) | Finding21 | text: BY ITS REGULATOR, |
| `F` | `F29484` (+3.72 s) | Finding21 | text: THE FAA |
| `A` | `F29516` (+4.25 s) | Finding21 | text: (US) |
| `least` | `F29591` (+5.50 s) | Finding21 | text: FOR AT LEAST |
| `ten` | `F29609` (+5.80 s) | Finding21 | text: 10 YEARS |
| `investigators` | `F29669` (+6.80 s) | Finding21 | text: · THE INVESTIGATORS |
| `found` | `F29716` (+7.58 s) | Finding21 | text: FOUND: |
| `actions` | `F29779` (+8.63 s) | Finding21 | text: THOSE ACTIONS |
| `ineffective` | `F29821` (+9.33 s) | (scene list) | sound effect cue |

**105** · The F - A - A had five inspectors on the seven thirty-seven program while this fuselage was in the factory.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `F` | `F29933` (+0.32 s) | Regulator | text: FAA / INSPECTORS |
| `five` | `F29995` (+1.35 s) | Regulator | <div key={i} style={{width: 120, height: 160, border: `2px solid ${colors.cyan}` |
| `inspectors` | `F30015` (+1.68 s) | Regulator | text: FAA / INSPECTORS |
| `thirty-seven` | `F30088` (+2.90 s) | Regulator | text: ON THE 737 / PROGRAM |
| `program` | `F30128` (+3.57 s) | Regulator | text: ON THE 737 / PROGRAM |
| `fuselage` | `F30204` (+4.83 s) | Regulator | text: ON THE 737 / PROGRAM |
| `factory` | `F30266` (+5.87 s) | Regulator | text: ON THE 737 / PROGRAM |

**106** · In the twelve months up to the build, its audits at Renton logged sixty-eight alleged problems.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `twelve` | `F30364` (+0.25 s) | Regulator | <div style={{width: 760, opacity: on(f, G.twelve, 10)}}> |
| `build` | `F30430` (+1.35 s) | Regulator | text: OCT 2022 – SEP 2023 |
| `audits` | `F30493` (+2.40 s) | Regulator | text: ALLEGED NONCOMPLIANCES |
| `logged` | `F30556` (+3.45 s) | Regulator | rollTo · const n = Math.round(rollTo(f, [{frame: G.logged - 6, value: 0}, {fram |
| `sixty-eight` | `F30580` (+3.85 s) | Regulator | rollTo · const n = Math.round(rollTo(f, [{frame: G.logged - 6, value: 0}, {fram |
| `alleged` | `F30623` (+4.57 s) | Regulator | text: ALLEGED NONCOMPLIANCES |

**107** · Not one of them mentioned the removal instruction.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `one` | `F30739` (+0.38 s) | Regulator | const zero = f >= G.one + LAND; |
| `mentioned` | `F30768` (+0.87 s) | Regulator | text: MENTIONING |
| `removal` | `F30800` (+1.40 s) | Regulator | text: THE REMOVAL INSTRUCTION |

**108** · Then there were the people.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `people` | `F31022` (+0.95 s) | Line | <div style={{position: 'absolute', left: 60, top: 80, fontFamily: sans, fontWeig |

**109** · Before twenty eighteen, the seven thirty-seven line built about fifty-two airplanes a month.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `eighteen` | `F31148` (+0.75 s) | Line | text: BEFORE 2018 |
| `thirty-seven` | `F31224` (+2.02 s) | Line | text: BOEING 737 PRODUCTION |
| `built` | `F31285` (+3.03 s) | Line | text: BEFORE 2018 |
| `fifty-two` | `F31320` (+3.62 s) | Line | text: BEFORE 2018 |
| `month` | `F31397` (+4.90 s) | Line | text: BOEING 737 PRODUCTION |

**110** · After two fatal accidents involving the seven thirty-seven Max, Boeing cut production, stopped hiring, and did not replace the people who left.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `two` | `F31484` (+0.38 s) | Line | text: 2018–19 · |
| `accidents` | `F31528` (+1.12 s) | Line | text: TWO FATAL ACCIDENTS |
| `involving` | `F31562` (+1.68 s) | Line | text: · INVOLVING |
| `thirty-seven` | `F31621` (+2.67 s) | Line | text: THE 737 |
| `Max` | `F31662` (+3.35 s) | Line | text: MAX |
| `Boeing` | `F31712` (+4.18 s) | Line | text: · BOEING |
| `cut` | `F31738` (+4.62 s) | Line | text: CUT PRODUCTION |
| `stopped` | `F31811` (+5.83 s) | Line | text: · STOPPED |
| `hiring` | `F31833` (+6.20 s) | Line | text: HIRING |
| `replace` | `F31911` (+7.50 s) | Line | text: · LEAVERS NOT REPLACED |

**111** · The pandemic took more, particularly those eligible to retire.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `pandemic` | `F32051` (+0.10 s) | Line | text: THE PANDEMIC |
| `more` | `F32104` (+0.98 s) | Line | text: · MORE LEFT |
| `particularly` | `F32146` (+1.68 s) | Line | text: · PARTICULARLY |
| `eligible` | `F32214` (+2.82 s) | Line | text: THOSE ELIGIBLE TO RETIRE |

**112** · At the low point, the line built fewer than ten a month.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `low` | `F32348` (+0.37 s) | Line | text: PANDEMIC LOW |
| `built` | `F32432` (+1.77 s) | Line | text: PANDEMIC LOW |
| `ten` | `F32484` (+2.63 s) | Line | text: PANDEMIC LOW |

**113** · In twenty twenty-two, Boeing set out to return to its old rate, and it hired fast.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `twenty-two` | `F32598` (+0.50 s) | Line | text: 2022 |
| `Boeing` | `F32665` (+1.62 s) | Line | text: · BOEING SET OUT |
| `return` | `F32722` (+2.57 s) | Line | text: TO RETURN TO ITS OLD RATE |
| `rate` | `F32788` (+3.67 s) | Line | text: BEFORE THE ACCIDENT |
| `hired` | `F32843` (+4.58 s) | Line | text: · HIRING FAST |

**114** · Many of the new hires had never worked in manufacturing.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `hires` | `F32989` (+0.80 s) | Line | text: · MANY NEW HIRES |
| `never` | `F33024` (+1.38 s) | Line | text: HAD NEVER WORKED |
| `manufacturing` | `F33068` (+2.12 s) | Line | text: IN MANUFACTURING |

**115** · The head of the seven thirty-seven program put it this way.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `head` | `F33218` (+0.12 s) | Experience | text: THE HEAD |
| `thirty-seven` | `F33265` (+0.90 s) | Experience | text: OF THE 737 |
| `program` | `F33306` (+1.58 s) | Experience | text: PROGRAM |
| `put` | `F33337` (+2.10 s) | Experience | text: · TO INVESTIGATORS |

**116** · Ten years ago, close to half the workforce had more than ten years' experience.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Ten` | `F33430` (+0.02 s) | Experience | hl= · <ReportPage page={71} start={a} end={barOn + 10} hl={[{key: 'gm_quote' |
| `ago` | `F33463` (+0.57 s) | Experience | text: 10 YEARS AGO |
| `half` | `F33532` (+1.72 s) | Experience | text: · CLOSE TO HALF |
| `workforce` | `F33558` (+2.15 s) | Experience | text: THE WORKFORCE |
| `ten` | `F33634` (+3.42 s) | Experience | text: · MORE THAN 10 YEARS’ EXPERIENCE |

**117** · Today—twenty-five or thirty percent.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Today` | `F33751` (+0.02 s) | Experience | const X = {today: wf(117, 'today'), t25: wf(117, 'twenty-five'), t30: wf(117, 't |
| `twenty-five` | `F33804` (+0.90 s) | Experience | const X = {today: wf(117, 'today'), t25: wf(117, 'twenty-five'), t30: wf(117, 't |
| `thirty` | `F33859` (+1.82 s) | Experience | const X = {today: wf(117, 'today'), t25: wf(117, 'twenty-five'), t30: wf(117, 't |

**118** · Boeing did not assess what that loss of experience might do to quality.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `assess` | `F34052` (+0.78 s) | Finding20 | text: BOEING DID NOT ASSESS |
| `loss` | `F34105` (+1.67 s) | Finding20 | text: WHAT THAT LOSS OF EXPERIENCE |
| `might` | `F34170` (+2.75 s) | Finding20 | text: MIGHT DO |
| `quality` | `F34207` (+3.37 s) | Finding20 | text: TO QUALITY |

**119** · The N - T - S - B called it a missed opportunity.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `N` | `F34301` (+0.33 s) | Finding20 | text: NTSB: |
| `called` | `F34362` (+1.35 s) | Finding20 | text: CALLED IT |
| `missed` | `F34403` (+2.03 s) | (scene list) | sound effect cue |

**120** · So the margin that ran out at Renton was not steel.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `margin` | `F34595` (+0.33 s) | NotSteel | text: THE MARGIN / THAT RAN OUT |
| `ran` | `F34633` (+0.97 s) | NotSteel | text: THE MARGIN / THAT RAN OUT |
| `Renton` | `F34668` (+1.55 s) | NotSteel | text: THE MARGIN / THAT RAN OUT |
| `not` | `F34711` (+2.27 s) | NotSteel | text: THE MARGIN / THAT RAN OUT |

**121** · It was a document no one wrote—and the experience that would have known to write it.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `document` | `F34813` (+0.37 s) | NotSteel | text: A DOCUMENT / NO ONE WROTE |
| `one` | `F34866` (+1.25 s) | NotSteel | text: A DOCUMENT / NO ONE WROTE |
| `wrote` | `F34876` (+1.42 s) | (scene list) | sound effect cue |
| `experience` | `F34942` (+2.52 s) | NotSteel | text: A DOCUMENT / NO ONE WROTE |
| `known` | `F35009` (+3.63 s) | NotSteel | text: A DOCUMENT / NO ONE WROTE |
| `write` | `F35038` (+4.12 s) | NotSteel | text: A DOCUMENT / NO ONE WROTE |

**122** · There is one more record a film like this has to read, and read carefully.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `one` | `F35191` (+0.40 s) | Money | text: ONE |
| `record` | `F35218` (+0.85 s) | Money | text: MORE RECORD |
| `film` | `F35250` (+1.38 s) | Money | text: · A FILM LIKE THIS |
| `read` | `F35319` (+2.53 s) | Money | text: HAS TO READ |
| `carefully` | `F35385` (+3.63 s) | Money | text: · CAREFULLY |

**123** · In twenty eighteen, Boeing spent nine billion dollars buying back its own stock.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `eighteen` | `F35497` (+0.57 s) | Money | text: 2018 |
| `Boeing` | `F35548` (+1.42 s) | Money | text: · BOEING |
| `nine` | `F35592` (+2.15 s) | (scene list) | sound effect cue |
| `billion` | `F35615` (+2.53 s) | Money | <RecordDoc doc="boeing_27b" start={sf(122) + 30} end={sf(124) + 6} at={[wf(123,  |
| `buying` | `F35667` (+3.40 s) | Money | text: BUYING BACK ITS OWN STOCK |

**124** · That December, its board approved up to twenty billion more.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `December` | `F35799` (+0.20 s) | Money | text: DEC 2018 |
| `board` | `F35861` (+1.23 s) | Money | text: · THE BOARD |
| `approved` | `F35878` (+1.52 s) | Money | text: APPROVED |
| `twenty` | `F35926` (+2.32 s) | (scene list) | sound effect cue |
| `more` | `F35980` (+3.22 s) | Money | <RecordDoc doc="boeing_20b" start={sf(124) - 6} end={sf(125) + 30} at={[wf(124,  |

**125** · In twenty nineteen it bought back two point seven billion.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `nineteen` | `F36074` (+0.55 s) | Money | text: 2019 |
| `bought` | `F36137` (+1.60 s) | Money | <span style={{fontSize: 26, letterSpacing: 1.2, ...(i === 2 ? litStyle(f, wf(125 |
| `two` | `F36173` (+2.20 s) | Money | text: 2019 |

**126** · By the start of twenty twenty, the buybacks were suspended.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `twenty` | `F36370` (+1.10 s) | Money | text: BY JAN 2020 |
| `buybacks` | `F36422` (+1.97 s) | Money | text: BOEING SHARE REPURCHASES · AS FILED |
| `suspended` | `F36466` (+2.70 s) | Money | text: BY JAN 2020 |

**127** · The investigation report does not mention them.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `investigation` | `F36596` (+0.12 s) | NotCause | text: OUR SEARCH · NTSB AIR-25-04 · FULL TEXT |
| `report` | `F36643` (+0.90 s) | NotCause | const N = {report: wf(127, 'report'), mention: wf(127, 'mention')}; |
| `mention` | `F36695` (+1.77 s) | NotCause | const N = {report: wf(127, 'report'), mention: wf(127, 'mention')}; |

**128** · And the N - T - S - B said it could not assess whether adverse pressure existed on the production line.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `N` | `F36791` (+0.43 s) | NotCause | text: NTSB |
| `said` | `F36847` (+1.37 s) | NotCause | text: SAID IT |
| `assess` | `F36891` (+2.10 s) | (scene list) | sound effect cue |
| `adverse` | `F36942` (+2.95 s) | NotCause | text: WHETHER ADVERSE PRESSURE |
| `existed` | `F36997` (+3.87 s) | NotCause | text: EXISTED |
| `production` | `F37045` (+4.67 s) | NotCause | text: ON THE PRODUCTION LINE |

**129** · So the buybacks belong in this story as a fact about where Boeing's money went, not as a cause.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `buybacks` | `F37204` (+0.33 s) | NotCause | text: THE BUYBACKS: |
| `story` | `F37282` (+1.63 s) | NotCause | text: IN THIS STORY |
| `fact` | `F37324` (+2.33 s) | NotCause | text: AS A FACT |
| `money` | `F37404` (+3.67 s) | NotCause | text: ABOUT WHERE THE MONEY WENT |
| `not` | `F37460` (+4.60 s) | NotCause | text: · NOT |
| `cause` | `F37494` (+5.17 s) | NotCause | text: A CAUSE |

**130** · The cause the investigators found is in the factory record.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `cause` | `F37570` (+0.15 s) | NotCause | text: THE CAUSE |
| `found` | `F37649` (+1.47 s) | NotCause | text: THE INVESTIGATORS FOUND |
| `factory` | `F37702` (+2.35 s) | NotCause | text: IS IN THE FACTORY RECORD |

**131** · Now go back to the plug, closed in the factory with its bolts gone.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `plug` | `F38071` (+0.93 s) | Ground | flash · const state: PlugState = {...defaultState, bolts: none, emptyHoles: Ma |
| `closed` | `F38112` (+1.62 s) | Ground | text: CLOSED |
| `factory` | `F38150` (+2.25 s) | Ground | text: IN THE FACTORY |
| `bolts` | `F38201` (+3.10 s) | Ground | flash · const state: PlugState = {...defaultState, bolts: none, emptyHoles: Ma |
| `gone` | `F38225` (+3.50 s) | Ground | text: · BOLTS GONE |

**132** · On the ground, a plug like this is hard to lift.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `ground` | `F38305` (+0.30 s) | Ground | text: · ON THE GROUND |
| `plug` | `F38353` (+1.10 s) | Ground | flash · const state: PlugState = {...defaultState, bolts: none, emptyHoles: Ma |
| `hard` | `F38417` (+2.17 s) | Ground | text: HARD TO LIFT |
| `lift` | `F38445` (+2.63 s) | Ground | const strain = (f > G.pull && f < G.two ? shudder(f, fps, G.pull, 0.25, 9, 2.5)  |

**133** · On its sister plug, on the other side of the same airplane, with the bolts taken out on the ground, a one-hundred-and-twenty-pound upward pull did not move it.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `sister` | `F38521` (+0.37 s) | Ground | const strain = (f > G.pull && f < G.two ? shudder(f, fps, G.pull, 0.25, 9, 2.5)  |
| `side` | `F38607` (+1.80 s) | Ground | text: · OTHER SIDE |
| `airplane` | `F38655` (+2.60 s) | Ground | text: · SAME AIRPLANE |
| `taken` | `F38744` (+4.08 s) | Ground | text: · BOLTS OUT |
| `ground` | `F38789` (+4.83 s) | Ground | text: · ON THE GROUND |
| `one-hundred-and-twenty-pound` | `F38852` (+5.88 s) | Ground | rollTo · const gauge = rollTo(f, [{frame: G.n120 - 30, value: 0}, {frame: G.n12 |
| `upward` | `F38939` (+7.33 s) | Ground | bump · <Panel start={G.n120 - 30} end={end} title="UPWARD PULL · FORCE GAUGE" |
| `pull` | `F38963` (+7.73 s) | (scene list) | sound effect cue |
| `not` | `F38996` (+8.28 s) | Ground | bump · <Panel start={G.n120 - 30} end={end} title="UPWARD PULL · FORCE GAUGE" |
| `move` | `F39008` (+8.48 s) | Ground | bump · <Panel start={G.n120 - 30} end={end} title="UPWARD PULL · FORCE GAUGE" |

**134** · It took two people.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `two` | `F39093` (+0.48 s) | Ground | const strain = (f > G.pull && f < G.two ? shudder(f, fps, G.pull, 0.25, 9, 2.5)  |
| `people` | `F39111` (+0.78 s) | (scene list) | sound effect cue |

**135** · But an airplane in flight does not sit still.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `flight` | `F39285` (+0.95 s) | Flight | text: IN FLIGHT |
| `not` | `F39323` (+1.58 s) | Flight | text: IT DOES NOT |
| `still` | `F39355` (+2.12 s) | Flight | text: SIT STILL |

**136** · It vibrates.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `vibrates` | `F39419` (+0.22 s) | (scene list) | sound effect cue |

**137** · It flexes.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `flexes` | `F39489` (+0.22 s) | Flight | tween · const flex = f >= L.flexes ? 0.02 * Math.sin(((f - L.flexes) / 60) * 2 |

**138** · And for brief moments, the load on the plug drops below its own weight.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `brief` | `F39572` (+0.33 s) | Flight | const reveal = interpolate(f, [L.brief - 10, L.drops, L.fell, L.s25 + LAND, end] |
| `load` | `F39648` (+1.60 s) | Flight | <text x={x0} y={y0 - 30} fontFamily="JetBrains Mono" fontSize={26} letterSpacing |
| `drops` | `F39703` (+2.52 s) | Flight | const reveal = interpolate(f, [L.brief - 10, L.drops, L.fell, L.s25 + LAND, end] |
| `below` | `F39727` (+2.92 s) | Flight | <text x={x0 + W - 4} y={yG(1) - 10} textAnchor="end" fill={f >= L.below ? colors |
| `weight` | `F39776` (+3.73 s) | Flight | bump · <Panel start={a + 10} end={end} title="EFFECTIVE WEIGHT OF THE PLUG" t |

**139** · At the lowest point the analysis found, the plug's effective weight, the force holding it down, fell from sixty-three pounds to about twenty-five.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `lowest` | `F39863` (+0.33 s) | Flight | <g opacity={on(f, L.lowest, 10)}> |
| `analysis` | `F39909` (+1.10 s) | Flight | flash · <circle cx={lowX} cy={yG(0.4)} r={18 * (1 + 0.2 * flash(f, L.analysis, |
| `found` | `F39944` (+1.68 s) | Flight | flash · <circle cx={lowX} cy={yG(0.4)} r={18 * (1 + 0.2 * flash(f, L.analysis, |
| `effective` | `F40019` (+2.93 s) | Flight | bump · <Panel start={a + 10} end={end} title="EFFECTIVE WEIGHT OF THE PLUG" t |
| `weight` | `F40053` (+3.50 s) | Flight | bump · <Panel start={a + 10} end={end} title="EFFECTIVE WEIGHT OF THE PLUG" t |
| `force` | `F40099` (+4.27 s) | Flight | <g opacity={on(f, L.force, 10)}> |
| `down` | `F40148` (+5.08 s) | Flight | lead · const arrow = lead(f, L.down, 16); |
| `fell` | `F40198` (+5.92 s) | Flight | const reveal = interpolate(f, [L.brief - 10, L.drops, L.fell, L.s25 + LAND, end] |
| `sixty-three` | `F40228` (+6.42 s) | Flight | bump · <Panel start={a + 10} end={end} title="EFFECTIVE WEIGHT OF THE PLUG" t |
| `pounds` | `F40267` (+7.07 s) | Flight | bump · <Panel start={a + 10} end={end} title="EFFECTIVE WEIGHT OF THE PLUG" t |
| `twenty-five` | `F40334` (+8.18 s) | Flight | const reveal = interpolate(f, [L.brief - 10, L.drops, L.fell, L.s25 + LAND, end] |

**140** · Each moment like that could let it rise a little.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `moment` | `F40501` (+0.37 s) | (scene list) | sound effect cue |
| `rise` | `F40587` (+1.80 s) | Creep | <Panel start={c0} end={end} title="RISE TOWARD THE CLEARANCE THRESHOLD" titleAt= |
| `little` | `F40613` (+2.23 s) | Creep | text: · A LITTLE RISE |

**141** · Fractions of an inch.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Fractions` | `F40660` (+0.10 s) | Creep | text: · FRACTIONS |
| `inch` | `F40711` (+0.95 s) | Creep | text: OF AN INCH |

**142** · Across one hundred and fifty-four flights, it walked itself upward.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `hundred` | `F40802` (+0.68 s) | Creep | const k100 = wf(142, 'hundred') + LAND; |
| `fifty-four` | `F40829` (+1.13 s) | (scene list) | sound effect cue |
| `flights` | `F40866` (+1.75 s) | Creep | bump · <Panel start={a + 10} end={end} title="FLIGHT CYCLES SINCE DELIVERY" t |
| `walked` | `F40921` (+2.67 s) | Creep | const walk = wf(142, 'walked'); |
| `upward` | `F40973` (+3.53 s) | Creep | const up = wef(142, 'upward'); |

**143** · It left a record of the climb: parallel lines of dust, dirt and petroleum jelly along the seal, marking its steps.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `record` | `F41110` (+0.53 s) | Seal | const S = {record: wf(143, 'record'), climb: wf(143, 'climb'), parallel: wf(143, |
| `climb` | `F41149` (+1.18 s) | Seal | const S = {record: wf(143, 'record'), climb: wf(143, 'climb'), parallel: wf(143, |
| `parallel` | `F41203` (+2.08 s) | (scene list) | sound effect cue |
| `lines` | `F41239` (+2.68 s) | Seal | const S = {record: wf(143, 'record'), climb: wf(143, 'climb'), parallel: wf(143, |
| `dust` | `F41273` (+3.25 s) | Seal | const S = {record: wf(143, 'record'), climb: wf(143, 'climb'), parallel: wf(143, |
| `dirt` | `F41311` (+3.88 s) | Seal | const S = {record: wf(143, 'record'), climb: wf(143, 'climb'), parallel: wf(143, |
| `petroleum` | `F41347` (+4.48 s) | Seal | const S = {record: wf(143, 'record'), climb: wf(143, 'climb'), parallel: wf(143, |
| `seal` | `F41434` (+5.93 s) | Seal | const S = {record: wf(143, 'record'), climb: wf(143, 'climb'), parallel: wf(143, |
| `marking` | `F41474` (+6.60 s) | Seal | const S = {record: wf(143, 'record'), climb: wf(143, 'climb'), parallel: wf(143, |
| `steps` | `F41514` (+7.27 s) | Seal | const S = {record: wf(143, 'record'), climb: wf(143, 'climb'), parallel: wf(143, |

**144** · From the outside, the change at its lower edge was about half an inch.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `outside` | `F41646` (+0.33 s) | Gap | const ons = [wf(144, 'outside'), wf(144, 'change'), wf(144, 'edge')]; |
| `change` | `F41713` (+1.45 s) | Gap | const ons = [wf(144, 'outside'), wf(144, 'change'), wf(144, 'edge')]; |
| `lower` | `F41757` (+2.18 s) | Gap | text: CHANGE AT THE LOWER EDGE |
| `edge` | `F41779` (+2.55 s) | Gap | const ons = [wf(144, 'outside'), wf(144, 'change'), wf(144, 'edge')]; |
| `half` | `F41824` (+3.30 s) | Gap | text: · ABOUT 0.55 IN |
| `inch` | `F41851` (+3.75 s) | Gap | text: · ABOUT HALF AN INCH |

**145** · Too small, the N - T - S - B found, to catch on a walk-around.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `small` | `F41925` (+0.30 s) | Gap | text: TOO SMALL |
| `N` | `F41985` (+1.30 s) | Gap | text: · NTSB |
| `found` | `F42032` (+2.08 s) | Gap | text: FOUND: |
| `catch` | `F42085` (+2.97 s) | Gap | text: NOT READILY DETECTABLE |
| `walk-around` | `F42118` (+3.52 s) | Gap | text: ON A WALK-AROUND |

**146** · On the fifth of January, climbing out of Portland, the plug reached the top of its stops.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `fifth` | `F42268` (+0.30 s) | Separation | text: 05 |
| `January` | `F42294` (+0.73 s) | Separation | text: JAN 2024 |
| `climbing` | `F42343` (+1.55 s) | Separation | text: · CLIMBING OUT OF |
| `Portland` | `F42386` (+2.27 s) | Separation | text: PORTLAND |
| `plug` | `F42451` (+3.35 s) | Separation | <div style={{background: colors.card, border: `1px solid ${colors.border}`, padd |
| `top` | `F42503` (+4.22 s) | Separation | const lift = interpolate(f, [a, P.top + LAND, P.rode, P.pads + 20, go, go + 40,  |

**147** · The pins rode up off the pads.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `pins` | `F42614` (+0.15 s) | Separation | BracketLock · <BracketLock f={f} fps={fps} word={P.pins} x={pin.x - 30} y={pin.y - 3 |
| `rode` | `F42644` (+0.65 s) | Separation | const lift = interpolate(f, [a, P.top + LAND, P.rode, P.pads + 20, go, go + 40,  |
| `pads` | `F42691` (+1.43 s) | (scene list) | sound effect cue |

**148** · The upper fittings struck their rollers and split.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `upper` | `F42765` (+0.15 s) | Separation | BracketLock · <BracketLock f={f} fps={fps} word={P.pins} x={pin.x - 30} y={pin.y - 3 |
| `struck` | `F42810` (+0.90 s) | (scene list) | sound effect cue |
| `rollers` | `F42845` (+1.48 s) | Separation | text: THE ROLLERS |
| `split` | `F42885` (+2.15 s) | Separation | const split = P.split - 10; |

**149** · The lower hinges twisted.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `hinges` | `F42962` (+0.47 s) | Separation | KeyLine · <KeyLine f={f} fps={fps} start={P.hinges - 10} end={end} x={0} y={270} |
| `twisted` | `F42992` (+0.97 s) | (scene list) | sound effect cue |

**150** · And the plug left the airplane: up, out—and back.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `plug` | `F43063` (+0.25 s) | Separation | KeyLine · <KeyLine f={f} fps={fps} start={P.plug2 - 10} end={end} x={0} y={370}  |
| `left` | `F43090` (+0.70 s) | Separation | text: THE PLUG LEFT: |
| `up` | `F43175` (+2.12 s) | (scene list) | sound effect cue |
| `out` | `F43215` (+2.78 s) | Separation | const swing = interpolate(f, [twist, go, P.out + 10, P.back + 10], [0, 0.18, 1.3 |
| `back` | `F43265` (+3.62 s) | Separation | const swing = interpolate(f, [twist, go, P.out + 10, P.back + 10], [0, 0.18, 1.3 |

**151** · The N - T - S - B adopted its final report on the twenty-fourth of June, twenty twenty-five.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `N` | `F43626` (+0.30 s) | Verdict | text: N |
| `T` | `F43633` (+0.42 s) | Verdict | text: T |
| `S` | `F43654` (+0.77 s) | Verdict | text: S |
| `B` | `F43661` (+0.88 s) | Verdict | text: B |
| `adopted` | `F43680` (+1.20 s) | Verdict | text: ADOPTED |
| `report` | `F43743` (+2.25 s) | Verdict | text: ITS FINAL REPORT |
| `twenty-fourth` | `F43786` (+2.97 s) | Verdict | text: · 24 |
| `June` | `F43833` (+3.75 s) | Verdict | text: JUNE |
| `twenty-five` | `F43892` (+4.73 s) | Verdict | text: 2025 |

**152** · Its probable cause names a manufacturer and a regulator.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `probable` | `F43995` (+0.30 s) | Verdict | text: PROBABLE CAUSE |
| `names` | `F44053` (+1.27 s) | Verdict | text: NAMES |
| `manufacturer` | `F44076` (+1.65 s) | Verdict | text: A MANUFACTURER |
| `regulator` | `F44148` (+2.85 s) | Verdict | text: AND A REGULATOR |

**153** · Boeing's failure to provide adequate training, guidance, and oversight necessary to ensure that manufacturing personnel could consistently and correctly comply with its parts removal process.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `failure` | `F44307` (+0.50 s) | (scene list) | sound effect cue |
| `adequate` | `F44372` (+1.58 s) | Verdict | text: TO PROVIDE ADEQUATE |
| `training` | `F44397` (+2.00 s) | Verdict | text: TRAINING |
| `guidance` | `F44439` (+2.70 s) | Verdict | text: · GUIDANCE |
| `oversight` | `F44492` (+3.58 s) | Verdict | text: · OVERSIGHT |
| `necessary` | `F44548` (+4.52 s) | Verdict | text: NECESSARY |
| `manufacturing` | `F44632` (+5.92 s) | Verdict | text: SO THAT MANUFACTURING |
| `personnel` | `F44679` (+6.70 s) | Verdict | text: PERSONNEL |
| `consistently` | `F44744` (+7.78 s) | Verdict | text: CONSISTENTLY |
| `correctly` | `F44810` (+8.88 s) | Verdict | text: AND CORRECTLY |
| `comply` | `F44845` (+9.47 s) | Verdict | text: COMPLY |
| `parts` | `F44917` (+10.67 s) | Verdict | text: WITH ITS PARTS |
| `removal` | `F44940` (+11.05 s) | Verdict | text: REMOVAL PROCESS |

**154** · Contributing: the F - A - A's ineffective compliance enforcement surveillance and audit planning activities.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Contributing` | `F45103` (+0.05 s) | (scene list) | sound effect cue |
| `the` | `F45179` (+1.32 s) | Verdict | text: THE |
| `F` | `F45200` (+1.67 s) | Verdict | {t: "FAA'S", at: wf(154, 'f'), tone: colors.cyan}, |
| `ineffective` | `F45257` (+2.62 s) | Verdict | text: INEFFECTIVE |
| `compliance` | `F45298` (+3.30 s) | Verdict | text: COMPLIANCE |
| `enforcement` | `F45337` (+3.95 s) | Verdict | text: ENFORCEMENT |
| `surveillance` | `F45396` (+4.93 s) | Verdict | text: SURVEILLANCE |
| `audit` | `F45457` (+5.95 s) | Verdict | text: AND AUDIT PLANNING |

**155** · The day after the accident, the F - A - A grounded one hundred and seventy-one seven thirty-seven nines until their plugs were inspected.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `day` | `F45659` (+0.17 s) | Grounded | const G = {day: wf(155, 'day'), accident: wf(155, 'accident'), grounded: wf(155, |
| `accident` | `F45701` (+0.87 s) | Grounded | const G = {day: wf(155, 'day'), accident: wf(155, 'accident'), grounded: wf(155, |
| `F` | `F45772` (+2.05 s) | Grounded | text: FAA |
| `grounded` | `F45814` (+2.75 s) | (scene list) | sound effect cue |
| `seventy-one` | `F45888` (+3.98 s) | Grounded | const G = {day: wf(155, 'day'), accident: wf(155, 'accident'), grounded: wf(155, |
| `thirty-seven` | `F45963` (+5.23 s) | Grounded | const G = {day: wf(155, 'day'), accident: wf(155, 'accident'), grounded: wf(155, |
| `nines` | `F46007` (+5.97 s) | Grounded | const G = {day: wf(155, 'day'), accident: wf(155, 'accident'), grounded: wf(155, |
| `plugs` | `F46087` (+7.30 s) | Grounded | const G = {day: wf(155, 'day'), accident: wf(155, 'accident'), grounded: wf(155, |
| `inspected` | `F46122` (+7.88 s) | Grounded | const G = {day: wf(155, 'day'), accident: wf(155, 'accident'), grounded: wf(155, |

**156** · On the twenty-fourth of January, it told Boeing there would be no production expansion of the Max.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `twenty-fourth` | `F46217` (+0.28 s) | Grounded | text: 24 |
| `January` | `F46262` (+1.03 s) | Grounded | text: JAN 2024 |
| `told` | `F46324` (+2.07 s) | Grounded | text: · THE FAA TOLD BOEING |
| `no` | `F46397` (+3.28 s) | Grounded | text: NO PRODUCTION |
| `production` | `F46412` (+3.53 s) | Grounded | <RecordDoc doc="faa_halt" start={docA} end={end} at={[wf(156, 'production') - 10 |
| `expansion` | `F46444` (+4.07 s) | Grounded | text: EXPANSION |
| `Max` | `F46494` (+4.90 s) | Grounded | text: OF THE MAX |

**157** · This won't be back to business as usual for Boeing, the administrator said.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `won't` | `F46582` (+0.27 s) | Grounded | text: “THIS WON’T BE BACK |
| `business` | `F46625` (+0.98 s) | Grounded | text: TO BUSINESS AS USUAL |
| `Boeing` | `F46698` (+2.20 s) | Grounded | text: FOR BOEING” |
| `administrator` | `F46753` (+3.12 s) | Grounded | text: · THE FAA ADMINISTRATOR |

**158** · In June twenty twenty-four, Boeing's head of quality told a media briefing that the company knew the move crew had closed the plug.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `June` | `F46934` (+0.27 s) | Briefing | text: JUNE |
| `twenty-four` | `F46975` (+0.95 s) | Briefing | text: 2024 |
| `Boeing's` | `F47041` (+2.05 s) | Briefing | {t: "· BOEING'S", at: wf(158, "boeing's")}, |
| `quality` | `F47083` (+2.75 s) | Briefing | text: HEAD OF QUALITY |
| `media` | `F47138` (+3.67 s) | Briefing | text: · MEDIA |
| `briefing` | `F47160` (+4.03 s) | Briefing | text: BRIEFING |
| `company` | `F47223` (+5.08 s) | Briefing | text: · THE COMPANY |
| `knew` | `F47252` (+5.57 s) | (scene list) | sound effect cue |
| `move` | `F47277` (+5.98 s) | Briefing | text: THE MOVE CREW |
| `closed` | `F47325` (+6.78 s) | Briefing | text: HAD CLOSED THE PLUG |

**159** · The N - T - S - B said its interviews had identified no one, and cut Boeing off from its investigative information for releasing details without approval.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `N` | `F47447` (+0.37 s) | Briefing | text: NTSB: |
| `interviews` | `F47535` (+1.83 s) | Briefing | text: ITS INTERVIEWS |
| `identified` | `F47578` (+2.55 s) | Briefing | text: IDENTIFIED |
| `one` | `F47637` (+3.53 s) | Briefing | text: NO ONE |
| `cut` | `F47680` (+4.25 s) | (scene list) | sound effect cue |
| `off` | `F47720` (+4.92 s) | Briefing | text: BOEING OFF |
| `investigative` | `F47752` (+5.45 s) | Briefing | text: FROM ITS INVESTIGATIVE |
| `information` | `F47796` (+6.18 s) | Briefing | text: INFORMATION |
| `releasing` | `F47863` (+7.30 s) | Briefing | text: · FOR RELEASING DETAILS |
| `approval` | `F47952` (+8.78 s) | Briefing | text: WITHOUT APPROVAL |

**160** · At the end of that month, Boeing agreed to buy Spirit AeroSystems.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `month` | `F48125` (+0.82 s) | Again | text: 30 JUNE 2024 |
| `Boeing` | `F48168` (+1.53 s) | Again | text: · BOEING |
| `agreed` | `F48188` (+1.87 s) | Again | text: AGREED |
| `buy` | `F48219` (+2.38 s) | Again | text: TO BUY |
| `Spirit` | `F48240` (+2.73 s) | Again | text: SPIRIT AEROSYSTEMS |

**161** · The deal was completed on the eighth of December, twenty twenty-five.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `deal` | `F48361` (+0.15 s) | Again | text: THE DEAL |
| `completed` | `F48388` (+0.60 s) | Again | text: COMPLETED |
| `eighth` | `F48443` (+1.52 s) | Again | text: · 08 |
| `December` | `F48466` (+1.90 s) | Again | text: DEC |
| `twenty-five` | `F48538` (+3.10 s) | Again | text: 2025 |

**162** · Twenty years after Wichita was sold, it was part of Boeing again.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Twenty` | `F48612` (+0.03 s) | (scene list) | sound effect cue |
| `years` | `F48636` (+0.43 s) | Again | const A = {twenty: wf(162, 'twenty'), years: wf(162, 'years'), sold: wf(162, 'so |
| `sold` | `F48717` (+1.78 s) | Again | const A = {twenty: wf(162, 'twenty'), years: wf(162, 'years'), sold: wf(162, 'so |
| `part` | `F48778` (+2.80 s) | Again | const A = {twenty: wf(162, 'twenty'), years: wf(162, 'years'), sold: wf(162, 'so |
| `again` | `F48825` (+3.58 s) | Again | const A = {twenty: wf(162, 'twenty'), years: wf(162, 'years'), sold: wf(162, 'so |

**163** · The fix Boeing and Spirit designed is simple.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `fix` | `F48943` (+0.18 s) | Fix | text: THE FIX |
| `Boeing` | `F48965` (+0.55 s) | Fix | text: · BOEING |
| `Spirit` | `F48996` (+1.07 s) | Fix | text: AND SPIRIT |
| `designed` | `F49021` (+1.48 s) | Fix | text: DESIGNED |
| `simple` | `F49060` (+2.13 s) | Fix | text: · SIMPLE |

**164** · Two extra devices that stop the plug rising even with no bolts in.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Two` | `F49122` (+0.07 s) | Fix | text: 2 / DEVICES |
| `devices` | `F49161` (+0.72 s) | (scene list) | sound effect cue |
| `stop` | `F49210` (+1.53 s) | Fix | text: 2 / DEVICES |
| `rising` | `F49253` (+2.25 s) | Fix | text: 2 / DEVICES |
| `no` | `F49326` (+3.47 s) | Fix | tween · const bo = Math.max(1 - tween(f, X.no, X.no + 20, 0, 1), tween(f, X.la |

**165** · Cabin panels that cannot be fitted unless those devices are engaged.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `panels` | `F49435` (+0.42 s) | Fix | text: CABIN PANELS / WILL NOT FIT |
| `cannot` | `F49472` (+1.03 s) | Fix | text: CABIN PANELS / WILL NOT FIT |
| `unless` | `F49532` (+2.03 s) | Fix | text: CABIN PANELS / WILL NOT FIT |
| `engaged` | `F49608` (+3.30 s) | Fix | flash · const devGlow = flash(f, X.engaged, 0.3); |

**166** · And lanyards on the bolts, so a removed bolt hangs where everyone can see it.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `lanyards` | `F49690` (+0.27 s) | (scene list) | sound effect cue |
| `bolts` | `F49735` (+1.02 s) | Fix | text: LANYARDS / ON THE BOLTS: |
| `removed` | `F49802` (+2.13 s) | Fix | text: LANYARDS / ON THE BOLTS: |
| `hangs` | `F49855` (+3.02 s) | Fix | text: LANYARDS / ON THE BOLTS: |
| `see` | `F49938` (+4.40 s) | Fix | flash · <path key={i} d={`M ${b.x} ${b.y} q ${i % 2 ? -20 : 20} ${60 * lan} ${ |

**167** · In May twenty twenty-five, Boeing told investigators it expected to fit it to new airplanes in twenty twenty-six.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `twenty-five` | `F50049` (+0.85 s) | Fix | text: MAY 2025 · |
| `Boeing` | `F50119` (+2.02 s) | Fix | text: BOEING |
| `investigators` | `F50158` (+2.67 s) | Fix | text: TO INVESTIGATORS: |
| `expected` | `F50220` (+3.70 s) | Fix | text: EXPECTED |
| `new` | `F50291` (+4.88 s) | Fix | text: ON NEW AIRPLANES |
| `twenty-six` | `F50374` (+6.27 s) | Fix | text: IN 2026 |

**168** · But the fix is for one plug.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `fix` | `F50526` (+0.33 s) | EveryLine | text: THE FIX / IS FOR ONE |
| `one` | `F50594` (+1.47 s) | EveryLine | text: THE FIX / IS FOR ONE |
| `plug` | `F50610` (+1.73 s) | EveryLine | text: THE FIX / IS FOR ONE |

**169** · The question the investigation raised is about every disturbed installation on every line.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `question` | `F50679` (+0.17 s) | EveryLine | text: THE QUESTION / THE INVESTIGATION RAISED: |
| `raised` | `F50761` (+1.53 s) | EveryLine | text: THE QUESTION / THE INVESTIGATION RAISED: |
| `every` | `F50835` (+2.77 s) | EveryLine | text: THE QUESTION / THE INVESTIGATION RAISED: |
| `disturbed` | `F50857` (+3.13 s) | EveryLine | text: THE QUESTION / THE INVESTIGATION RAISED: |
| `installation` | `F50891` (+3.70 s) | EveryLine | text: THE QUESTION / THE INVESTIGATION RAISED: |
| `every` | `F50957` (+4.80 s) | EveryLine | text: THE QUESTION / THE INVESTIGATION RAISED: |

**170** · In March twenty twenty-four, two months after the accident, Boeing's own audits on other production lines were still recording repeated findings of unauthorized part removals.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `twenty-four` | `F51095` (+0.88 s) | EveryLine | text: MARCH 2024 |
| `two` | `F51160` (+1.97 s) | EveryLine | text: · 2 MONTHS AFTER |
| `accident` | `F51216` (+2.90 s) | EveryLine | text: THE ACCIDENT |
| `Boeing's` | `F51276` (+3.90 s) | EveryLine | {t: "· BOEING'S", at: wf(170, "boeing's")}, |
| `own` | `F51308` (+4.43 s) | EveryLine | text: OWN AUDITS |
| `audits` | `F51326` (+4.73 s) | EveryLine | whoAt={wf(170, 'audits')} |
| `other` | `F51362` (+5.33 s) | EveryLine | text: · OTHER |
| `lines` | `F51405` (+6.05 s) | EveryLine | text: PRODUCTION LINES |
| `still` | `F51454` (+6.87 s) | EveryLine | start={wf(170, 'still') - 12} |
| `repeated` | `F51502` (+7.67 s) | EveryLine | text: repeated findings |
| `findings` | `F51536` (+8.23 s) | EveryLine | text: for failure to prevent |
| `unauthorized` | `F51584` (+9.03 s) | EveryLine | text: unauthorized removals |
| `removals` | `F51648` (+10.10 s) | EveryLine | whereAt={wf(170, 'removals')} |

**171** · One board member wrote that he was skeptical Boeing's systems at the time could have caught errors like this at all.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `One` | `F51785` (+0.12 s) | Board | start={wf(171, 'one') - 12} |
| `member` | `F51813` (+0.58 s) | Board | whoAt={wf(171, 'member')} |
| `wrote` | `F51832` (+0.90 s) | Board | whereAt={wf(171, 'wrote')} |
| `skeptical` | `F51879` (+1.68 s) | Board | text: I am skeptical |
| `systems` | `F51941` (+2.72 s) | Board | text: Boeing’s systems |
| `time` | `F51983` (+3.42 s) | Board | text: at the time |
| `caught` | `F52042` (+4.40 s) | Board | text: were equipped to catch |
| `errors` | `F52063` (+4.75 s) | Board | text: these types of errors |

**172** · He also noted that Boeing had already taken at least twenty corrective actions.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `noted` | `F52209` (+0.53 s) | Board | text: ALSO NOTED: |
| `already` | `F52278` (+1.68 s) | Board | text: BOEING HAD ALREADY TAKEN |
| `twenty` | `F52352` (+2.92 s) | Board | text: AT LEAST 20 |
| `corrective` | `F52383` (+3.43 s) | Board | text: CORRECTIVE ACTIONS |

**173** · Another member said that, over the Pacific, it could have been a tragedy.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `member` | `F52507` (+0.43 s) | Board | whoAt={wf(173, 'member')} |
| `said` | `F52528` (+0.78 s) | Board | text: this could have resulted in tragedy |
| `over` | `F52578` (+1.62 s) | Board | text: if the event had taken place |
| `Pacific` | `F52599` (+1.97 s) | Board | text: over the Pacific |
| `could` | `F52665` (+3.07 s) | Board | whereAt={wf(173, 'could')} |

**174** · Four bolts, where a single lower bolt would have done.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Four` | `F52821` (+0.13 s) | Last | const L = {four: wf(174, 'four'), single: wf(174, 'single'), lower: wf(174, 'low |
| `single` | `F52899` (+1.43 s) | Last | const L = {four: wf(174, 'four'), single: wf(174, 'single'), lower: wf(174, 'low |
| `lower` | `F52927` (+1.90 s) | Last | const L = {four: wf(174, 'four'), single: wf(174, 'single'), lower: wf(174, 'low |
| `done` | `F52979` (+2.77 s) | Last | const L = {four: wf(174, 'four'), single: wf(174, 'single'), lower: wf(174, 'low |

**175** · The steel had margin to spare.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `steel` | `F53041` (+0.18 s) | (scene list) | sound effect cue |
| `spare` | `F53109` (+1.32 s) | Last | const L = {four: wf(174, 'four'), single: wf(174, 'single'), lower: wf(174, 'low |

**176** · The paperwork had none.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `paperwork` | `F53217` (+0.15 s) | Last | const L = {four: wf(174, 'four'), single: wf(174, 'single'), lower: wf(174, 'low |
| `none` | `F53265` (+0.95 s) | Last | const L = {four: wf(174, 'four'), single: wf(174, 'single'), lower: wf(174, 'low |

