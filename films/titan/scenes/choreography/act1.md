# Choreography index: Act 1

Word-level choreography (PLAYBOOK §10.6), **generated from the scene code** (`python3 scripts/choreo_index.py` from the film folder; re-run after
any edit) so it cannot drift from it. One row per word-locked event: the spoken trigger, its measured frame (60 fps) and offset
from the sentence start, the scene component, and what changes (the on-screen text that arrives, or the driving line of
code). Kit: `lib/remotion/Kinetic.tsx` and `remotion/beats.tsx` (`KeyLine` parts land on their words, `ChunkQuote` reveals a
record quote chunk by chunk, `WordLine` builds a title word by word). Kit for this film: `remotion/parts*.tsx`.
Sync audit: `review/sync_audit.md`.

**0** · The fifteenth of July, twenty twenty-two.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `fifteenth` | `F11` (+0.18 s) | (scene list) | sound effect cue |
| `July` | `F46` (+0.77 s) | ColdOpen | DatePill · <DatePill f={f} fps={fps} day={15} month={7} year={2022} dayWord={wf(0 |
| `twenty-two` | `F106` (+1.77 s) | ColdOpen | DatePill · <DatePill f={f} fps={fps} day={15} month={7} year={2022} dayWord={wf(0 |

**1** · On dive eighty, the Titan submersible's hull monitor recorded a burst of sound, and a sudden shift in strain.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `eighty` | `F219` (+0.60 s) | ColdOpen | bump · <div style={{opacity: lead(f, wf(1, 'eighty'), 8) * (1 - back), transf |
| `Titan` | `F266` (+1.38 s) | ColdOpen | text: TITAN |
| `hull` | `F335` (+2.53 s) | ColdOpen | {frame: wf(1, 'hull'), value: 14.9}, |
| `monitor` | `F351` (+2.80 s) | ColdOpen | bump · <Chip text="HULL MONITOR" tone={colors.cyan} size={30} style={{transfo |
| `burst` | `F421` (+3.97 s) | (scene list) | sound effect cue |
| `sound` | `F453` (+4.50 s) | ColdOpen | bump · <Chip text="ACOUSTIC CH 2 · 25,687 mV" tone={colors.red} style={{trans |
| `shift` | `F535` (+5.87 s) | (scene list) | sound effect cue |
| `strain` | `F569` (+6.43 s) | ColdOpen | bump · <Chip text="STRAIN SHIFT · 15:26:45" tone={colors.amber} style={{trans |

**2** · Eleven months later, on the way down to the Titanic, the hull failed.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Eleven` | `F639` (+0.00 s) | ColdOpen | const back = span(f, wf(2, 'eleven') - 6, wf(2, 'later') + 10); |
| `later` | `F678` (+0.65 s) | (scene list) | sound effect cue |
| `way` | `F727` (+1.47 s) | ColdOpen | const descent = span(f, wf(2, 'way') - 4, wf(2, 'failed') + LAND); |
| `Titanic` | `F771` (+2.20 s) | ColdOpen | text: THE TITANIC |
| `failed` | `F856` (+3.62 s) | (scene list) | sound effect cue |

**3** · Stockton Rush, Paul-Henri Nargeolet, Shahzada Dawood, Suleman Dawood and Hamish Harding died.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Stockton` | `F921` (+0.05 s) | Names | text: STOCKTON RUSH |
| `Paul-Henri` | `F987` (+1.15 s) | Names | text: PAUL-HENRI NARGEOLET |
| `Shahzada` | `F1076` (+2.63 s) | Names | text: SHAHZADA DAWOOD |
| `Suleman` | `F1153` (+3.92 s) | Names | text: SULEMAN DAWOOD |
| `Hamish` | `F1227` (+5.15 s) | Names | text: HAMISH HARDING |
| `died` | `F1288` (+6.17 s) | Names | text: 18 JUN 2023 |

**4** · Titan's hull was hard to inspect, so OceanGate relied on this monitor to warn it when the hull was weakening.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Titan's` | `F1410` (+-0.02 s) | Monitor | const draw = span(f, wf(4, "titan's") - 10, wf(4, 'hull') + 30); |
| `hull` | `F1440` (+0.48 s) | (scene list) | sound effect cue |
| `hard` | `F1473` (+1.03 s) | Monitor | bump · <Chip text="HARD TO INSPECT" style={{transform: `scale(${bump(f, fps,  |
| `inspect` | `F1497` (+1.43 s) | Monitor | lead · const wall = lead(f, wf(4, 'inspect'), 12); |
| `OceanGate` | `F1565` (+2.57 s) | Monitor | lead · <div style={{opacity: lead(f, wf(4, 'oceangate'), 8), ...T(30, lit(f,  |
| `relied` | `F1600` (+3.15 s) | Monitor | text: RELIED ON THIS |
| `monitor` | `F1644` (+3.88 s) | (scene list) | sound effect cue |
| `warn` | `F1683` (+4.53 s) | (scene list) | sound effect cue |
| `weakening` | `F1751` (+5.67 s) | Monitor | bump · <Chip text={f >= wf(4, 'weakening') ? 'TO WARN · HULL WEAKENING' : 'TO |

**5** · It is often said the warning worked, and was ignored.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `often` | `F1829` (+0.20 s) | (scene list) | sound effect cue |
| `warning` | `F1871` (+0.90 s) | Monitor | text: The warning |
| `worked` | `F1897` (+1.33 s) | Monitor | lead · <span style={{opacity: lead(f, wf(5, 'worked'), 8)}}>worked, </span> |
| `ignored` | `F1959` (+2.37 s) | Monitor | lead · <span style={{opacity: lead(f, wf(5, 'ignored'), 8)}}>and was ignored. |

**6** · The record is more complicated.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `record` | `F2032` (+0.13 s) | (scene list) | sound effect cue |
| `complicated` | `F2085` (+1.02 s) | Monitor | <span style={{...T(34, lit(f, wf(6, 'complicated'))), fontWeight: 700}}>{f >= wf |

**7** · The monitor had gaps, its alerts were set on other hulls, and its strain was read against time.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `monitor` | `F2166` (+0.08 s) | Monitor | const myth = vis(f, wf(5, 'often'), wf(7, 'monitor') - 10); |
| `gaps` | `F2203` (+0.70 s) | (scene list) | sound effect cue |
| `alerts` | `F2258` (+1.62 s) | Monitor | lead · <div style={{opacity: lead(f, wf(7, 'alerts'), 8)}}> |
| `other` | `F2320` (+2.65 s) | Monitor | bump · <Chip text={f >= wf(7, 'other') ? 'ALERT CRITERIA · FROM OTHER HULLS'  |
| `hulls` | `F2335` (+2.90 s) | Monitor | bump · <Chip text={f >= wf(7, 'other') ? 'ALERT CRITERIA · FROM OTHER HULLS'  |
| `strain` | `F2392` (+3.85 s) | Monitor | lead · const traceO = Math.min(lead(f, wf(7, 'strain'), 10), 1); |
| `time` | `F2479` (+5.30 s) | (scene list) | sound effect cue |

**8** · After the implosion, the N - T - S - B, America's accident investigator, plotted the same numbers against depth.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `After` | `F2543` (+0.03 s) | Monitor | BracketLock · <BracketLock f={f} fps={fps} word={wf(7, 'time')} x={W / 2 - 120} y={H |
| `implosion` | `F2567` (+0.43 s) | Monitor | const toTrace = span(f, wf(7, 'strain') - 10, wf(8, 'implosion') + 10); |
| `N` | `F2636` (+1.58 s) | Monitor | bump · <Chip text="N-T-S-B" tone={colors.cyan} size={34} style={{transform: ` |
| `America's` | `F2722` (+3.02 s) | Monitor | text: U.S. NATIONAL TRANSPORTATION SAFETY BOARD |
| `investigator` | `F2786` (+4.08 s) | Monitor | text: U.S. NATIONAL TRANSPORTATION SAFETY BOARD |
| `plotted` | `F2846` (+5.08 s) | Monitor | flash · const same = Math.max(flash(f, wf(8, 'plotted'), 0), flash(f, wf(8, 's |
| `same` | `F2878` (+5.62 s) | Monitor | text: THE SAME NUMBERS · PLOTTED AGAINST DEPTH |
| `against` | `F2927` (+6.43 s) | Monitor | const depthTease = interpolate(f, [wf(8, 'against') - 2, wf(8, 'depth') + LAND,  |
| `depth` | `F2953` (+6.87 s) | (scene list) | sound effect cue |

**9** · We will draw that chart with them, from the reports and the sworn testimony.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `draw` | `F3023` (+0.28 s) | Monitor | const draw9 = span(f, wf(9, 'draw') - 6, wf(9, 'chart') + 20); |
| `chart` | `F3052` (+0.77 s) | Monitor | const draw9 = span(f, wf(9, 'draw') - 6, wf(9, 'chart') + 20); |
| `reports` | `F3131` (+2.08 s) | (scene list) | sound effect cue |
| `sworn` | `F3185` (+2.98 s) | Monitor | text: USCG HEARING · SWORN TESTIMONY · SEP 2024 |

**10** · The eighteenth of June, twenty twenty-three.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `eighteenth` | `F3303` (+0.15 s) | (scene list) | sound effect cue |
| `June` | `F3336` (+0.70 s) | LastDive | DatePill · <DatePill f={f} fps={fps} day={18} month={6} year={2023} dayWord={wf(1 |
| `twenty-three` | `F3390` (+1.60 s) | LastDive | DatePill · <DatePill f={f} fps={fps} day={18} month={6} year={2023} dayWord={wf(1 |

**11** · At about nine in the morning, Titan was released from its launch platform.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `At` | `F3463` (+0.00 s) | LastDive | <RealFootage f={f} start={wf(11, 'at') - 10} end={ef(12) + 30} src="footage/atl_ |
| `nine` | `F3490` (+0.45 s) | LastDive | lead · <span style={{...T(44, lit(f, wf(11, 'nine'))), fontWeight: 700, opaci |
| `Titan` | `F3558` (+1.58 s) | LastDive | text: TITAN |
| `released` | `F3594` (+2.18 s) | LastDive | text: RELEASED |
| `platform` | `F3660` (+3.28 s) | LastDive | text: FROM ITS LAUNCH PLATFORM |

**12** · It was the first dive of that year's expedition to go deeper than ten metres.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `first` | `F3750` (+0.40 s) | LastDive | text: FIRST DIVE |
| `year's` | `F3812` (+1.43 s) | LastDive | text: OF 2023 |
| `deeper` | `F3889` (+2.72 s) | LastDive | text: BELOW |
| `ten` | `F3923` (+3.28 s) | LastDive | text: 10 M |

**13** · At ten forty-seven, at about three thousand three hundred and fifty metres, Titan sent a routine message: it was dropping two weights, a standard step at that depth to slow the descent.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `At` | `F4007` (+0.02 s) | LastDive | lead · <div style={{position: 'absolute', left: 60, top: 196, ...T(30, {color |
| `ten` | `F4016` (+0.17 s) | LastDive | flash · <span style={{textShadow: `0 0 ${(18 * Math.max(flash(f, wf(13, 'ten') |
| `forty-seven` | `F4030` (+0.40 s) | (scene list) | sound effect cue |
| `three` | `F4114` (+1.80 s) | LastDive | flash · <span style={{textShadow: `0 0 ${(18 * Math.max(flash(f, wf(13, 'ten') |
| `hundred` | `F4177` (+2.85 s) | LastDive | flash · <span style={{textShadow: `0 0 ${(18 * Math.max(flash(f, wf(13, 'ten') |
| `fifty` | `F4203` (+3.28 s) | LastDive | flash · <span style={{textShadow: `0 0 ${(18 * Math.max(flash(f, wf(13, 'ten') |
| `Titan` | `F4272` (+4.43 s) | LastDive | lead · const k = lead(f, i === 0 ? wf(13, 'titan') : m.at, 10); |
| `routine` | `F4322` (+5.27 s) | LastDive | lead · {isTitan ? <span style={{opacity: lead(f, wf(13, 'routine'), 8) * (1 - |
| `message` | `F4349` (+5.72 s) | LastDive | lead · {isTitan ? <span style={{opacity: lead(f, wf(13, 'routine'), 8) * (1 - |
| `dropping` | `F4417` (+6.85 s) | (scene list) | sound effect cue |
| `two` | `F4442` (+7.27 s) | LastDive | <span style={{...T(34, {color: m.tone, fontWeight: 700}), opacity: kText, whiteS |
| `weights` | `F4459` (+7.55 s) | LastDive | <span style={{...T(34, {color: m.tone, fontWeight: 700}), opacity: kText, whiteS |
| `standard` | `F4510` (+8.40 s) | LastDive | text: STANDARD / AT THAT DEPTH |
| `depth` | `F4572` (+9.43 s) | LastDive | text: STANDARD / AT THAT DEPTH |
| `slow` | `F4606` (+10.00 s) | LastDive | text: TO SLOW THE DESCENT |

**14** · It was the last message Titan sent.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `last` | `F4717` (+0.40 s) | LastDive | bump · <Chip text="THE LAST MESSAGE TITAN SENT" tone={colors.amber} size={28} |
| `sent` | `F4798` (+1.75 s) | LastDive | flash · <div style={{marginTop: 4, opacity: last, boxShadow: `0 0 ${(30 * flas |

**15** · A minute later, the support ship acknowledged it, and kept sending messages for hours.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `later` | `F4879` (+0.38 s) | LastDive | CLOCK <span style={{fontWeight: 700, ...lit(f, wf(15, 'later'), colors.cyan, col |
| `acknowledged` | `F4958` (+1.70 s) | (scene list) | sound effect cue |
| `sending` | `F5039` (+3.05 s) | LastDive | {t: '', text: 'MESSAGE SENT', who: 'POLAR PRINCE', at: wf(15, 'sending'), tone:  |
| `messages` | `F5058` (+3.37 s) | LastDive | {t: '', text: 'MESSAGE SENT', who: 'POLAR PRINCE', at: wf(15, 'messages'), tone: |
| `hours` | `F5100` (+4.07 s) | LastDive | lead · <div style={{marginTop: 18, opacity: lead(f, wf(15, 'hours'), 8), ...T |

**16** · No reply came.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `reply` | `F5179` (+0.23 s) | LastDive | lead · const noReply = lead(f, wf(16, 'reply'), 10); |

**17** · Four days later, a remotely operated vehicle found the tail cone and both titanium domes on the sea floor, a few hundred metres from the Titanic's bow.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Four` | `F5273` (+0.03 s) | Rov | <Pop f={f} fps={fps} at={wf(17, 'four')}> |
| `later` | `F5303` (+0.53 s) | Rov | <Chip text={f >= wf(17, 'later') ? 'FOUR DAYS LATER' : 'FOUR DAYS'} tone={colors |
| `operated` | `F5374` (+1.72 s) | Rov | <Pop f={f} fps={fps} at={wf(17, 'operated')}> |
| `found` | `F5436` (+2.75 s) | Rov | text: FOUND: |
| `tail` | `F5460` (+3.15 s) | (scene list) | sound effect cue |
| `both` | `F5514` (+4.05 s) | Rov | <Pop f={f} fps={fps} at={wf(17, 'both')}> |
| `domes` | `F5571` (+5.00 s) | Rov | <Chip text={f >= wf(17, 'domes') ? 'BOTH TITANIUM DOMES' : 'BOTH TITANIUM'} tone |
| `sea` | `F5608` (+5.62 s) | Rov | <Pop f={f} fps={fps} at={wf(17, 'sea')}> |
| `hundred` | `F5677` (+6.77 s) | Rov | <Pop f={f} fps={fps} at={wf(17, 'hundred')}> |
| `Titanic's` | `F5736` (+7.75 s) | Rov | text: FROM THE TITANIC'S BOW |
| `bow` | `F5773` (+8.37 s) | Rov | text: FROM THE TITANIC'S BOW |

**18** · By its dive log, Titan had reached the wreck, three thousand eight hundred and forty metres down, thirteen times.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `dive` | `F5850` (+0.37 s) | Thirteen | text: TITAN'S |
| `log` | `F5870` (+0.70 s) | Thirteen | text: TITAN'S |
| `Titan` | `F5899` (+1.18 s) | Thirteen | text: TITAN'S |
| `wreck` | `F5956` (+2.13 s) | Thirteen | text: THE WRECK |
| `three` | `F5986` (+2.63 s) | Thirteen | rollTo · <text x={X0 - 70} y={yOf(3840) + 9} textAnchor="end" style={T(30, lit( |
| `eight` | `F6038` (+3.50 s) | Thirteen | rollTo · <text x={X0 - 70} y={yOf(3840) + 9} textAnchor="end" style={T(30, lit( |
| `forty` | `F6076` (+4.13 s) | Thirteen | rollTo · <text x={X0 - 70} y={yOf(3840) + 9} textAnchor="end" style={T(30, lit( |
| `thirteen` | `F6164` (+5.60 s) | (scene list) | sound effect cue |
| `times` | `F6206` (+6.30 s) | Thirteen | <span style={{...T(30, lit(f, wf(18, 'times')))}}>× TO THE WRECK</span> |

**19** · On its last dive, it failed about five hundred metres shallower.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `last` | `F6292` (+0.32 s) | Thirteen | text: DIVE 88 |
| `failed` | `F6357` (+1.40 s) | (scene list) | sound effect cue |
| `five` | `F6406` (+2.22 s) | Thirteen | lead · const gap = lead(f, wf(19, 'five'), 14); |
| `hundred` | `F6427` (+2.57 s) | Thirteen | bump · <div style={{position: 'absolute', left: x88 + 84, top: yOf(3600) - 22 |

**20** · So where did the margin of error run out?

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `margin` | `F6577` (+0.73 s) | Thirteen | flash · const margin = flash(f, wf(20, 'margin'), 0.45); |

**21** · And when did the hull start to go?

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `start` | `F6776` (+1.05 s) | Thirteen | bump · <Chip text="DIVE 80 · 15 JUL 2022" tone={colors.ink} size={30} style={ |
| `go` | `F6801` (+1.47 s) | Thirteen | text: WHEN DID THE HULL START TO GO? |

