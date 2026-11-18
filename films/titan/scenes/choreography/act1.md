# Choreography index: Act 1

Word-level choreography (PLAYBOOK §10.6), **generated from the scene code** (`python3 scripts/choreo_index.py` from the film folder; re-run after
any edit) so it cannot drift from it. One row per word-locked event: the spoken trigger, its measured frame (60 fps) and offset
from the sentence start, the scene component, and what changes (the on-screen text that arrives, or the driving line of
code). Kit: `lib/remotion/Kinetic.tsx` and `remotion/beats.tsx` (`KeyLine` parts land on their words, `ChunkQuote` reveals a
record quote chunk by chunk, `WordLine` builds a title word by word). Kit for this film: `remotion/parts*.tsx`.
Sync audit: `review/sync_audit.md`.

**11** · The eighteenth of June, twenty twenty-three.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `eighteenth` | `F4167` (+0.17 s) | (scene list) | sound effect cue |
| `June` | `F4199` (+0.70 s) | LastDive | DatePill · <DatePill f={f} fps={fps} day={18} month={6} year={2023} dayWord={wf(1 |
| `twenty-three` | `F4253` (+1.60 s) | LastDive | DatePill · <DatePill f={f} fps={fps} day={18} month={6} year={2023} dayWord={wf(1 |

**12** · At about nine in the morning, Titan was released from its launch platform.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `At` | `F4326` (+0.00 s) | LastDive | <RealFootage f={f} start={wf(12, 'at') - 10} end={ef(13) + 30} src="footage/atl_ |
| `nine` | `F4353` (+0.45 s) | LastDive | lead · <span style={{...T(44, lit(f, wf(12, 'nine'))), fontWeight: 700, opaci |
| `Titan` | `F4421` (+1.58 s) | LastDive | text: TITAN |
| `released` | `F4458` (+2.20 s) | LastDive | text: RELEASED |
| `platform` | `F4523` (+3.28 s) | LastDive | text: FROM ITS LAUNCH PLATFORM |

**13** · It was the first dive of that year's expedition to go deeper than ten metres.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `first` | `F4613` (+0.40 s) | LastDive | text: FIRST DIVE |
| `year's` | `F4675` (+1.43 s) | LastDive | text: OF 2023 |
| `deeper` | `F4752` (+2.72 s) | LastDive | text: BELOW |
| `ten` | `F4786` (+3.28 s) | LastDive | text: 10 M |

**14** · At ten forty-seven, at about three thousand three hundred and fifty metres, Titan sent a routine message: it was dropping two weights, a standard step at that depth to slow the descent.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `At` | `F4870` (+0.02 s) | LastDive | lead · <div style={{position: 'absolute', left: 60, top: 196, ...T(30, {color |
| `ten` | `F4879` (+0.17 s) | LastDive | flash · <span style={{textShadow: `0 0 ${(18 * Math.max(flash(f, wf(14, 'ten') |
| `forty-seven` | `F4893` (+0.40 s) | (scene list) | sound effect cue |
| `three` | `F4977` (+1.80 s) | LastDive | flash · <span style={{textShadow: `0 0 ${(18 * Math.max(flash(f, wf(14, 'ten') |
| `hundred` | `F5040` (+2.85 s) | LastDive | flash · <span style={{textShadow: `0 0 ${(18 * Math.max(flash(f, wf(14, 'ten') |
| `fifty` | `F5066` (+3.28 s) | LastDive | flash · <span style={{textShadow: `0 0 ${(18 * Math.max(flash(f, wf(14, 'ten') |
| `Titan` | `F5135` (+4.43 s) | LastDive | lead · const k = lead(f, i === 0 ? wf(14, 'titan') : m.at, 10); |
| `routine` | `F5185` (+5.27 s) | LastDive | lead · {isTitan ? <span style={{opacity: lead(f, wf(14, 'routine'), 8) * (1 - |
| `message` | `F5212` (+5.72 s) | LastDive | lead · {isTitan ? <span style={{opacity: lead(f, wf(14, 'routine'), 8) * (1 - |
| `dropping` | `F5280` (+6.85 s) | (scene list) | sound effect cue |
| `two` | `F5306` (+7.28 s) | LastDive | <span style={{...T(34, {color: m.tone, fontWeight: 700}), opacity: kText, whiteS |
| `weights` | `F5322` (+7.55 s) | LastDive | <span style={{...T(34, {color: m.tone, fontWeight: 700}), opacity: kText, whiteS |
| `standard` | `F5373` (+8.40 s) | LastDive | text: STANDARD / AT THAT DEPTH |
| `depth` | `F5435` (+9.43 s) | LastDive | text: STANDARD / AT THAT DEPTH |
| `slow` | `F5469` (+10.00 s) | LastDive | text: TO SLOW THE DESCENT |

**15** · It was the last message Titan sent.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `last` | `F5580` (+0.40 s) | LastDive | bump · <Chip text="THE LAST MESSAGE TITAN SENT" tone={colors.amber} size={28} |
| `sent` | `F5661` (+1.75 s) | LastDive | flash · <div style={{marginTop: 4, opacity: last, boxShadow: `0 0 ${(30 * flas |

**16** · A minute later, the support ship acknowledged it, and kept sending messages for hours.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `later` | `F5742` (+0.38 s) | LastDive | CLOCK <span style={{fontWeight: 700, ...lit(f, wf(16, 'later'), colors.cyan, col |
| `acknowledged` | `F5821` (+1.70 s) | (scene list) | sound effect cue |
| `sending` | `F5902` (+3.05 s) | LastDive | {t: '', text: 'MESSAGE SENT', who: 'POLAR PRINCE', at: wf(16, 'sending'), tone:  |
| `messages` | `F5921` (+3.37 s) | LastDive | {t: '', text: 'MESSAGE SENT', who: 'POLAR PRINCE', at: wf(16, 'messages'), tone: |
| `hours` | `F5963` (+4.07 s) | LastDive | lead · <div style={{marginTop: 18, opacity: lead(f, wf(16, 'hours'), 8), ...T |

**17** · No reply came.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `reply` | `F6042` (+0.23 s) | LastDive | lead · const noReply = lead(f, wf(17, 'reply'), 10); |

**18** · Four days later, a remotely operated vehicle found the tail cone and both titanium domes on the sea floor, a few hundred metres from the Titanic's bow.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Four` | `F6136` (+0.02 s) | Rov | <Pop f={f} fps={fps} at={wf(18, 'four')}> |
| `later` | `F6166` (+0.52 s) | Rov | <Chip text={f >= wf(18, 'later') ? 'FOUR DAYS LATER' : 'FOUR DAYS'} tone={colors |
| `operated` | `F6237` (+1.70 s) | Rov | <Pop f={f} fps={fps} at={wf(18, 'operated')}> |
| `found` | `F6299` (+2.73 s) | Rov | text: FOUND: |
| `tail` | `F6323` (+3.13 s) | (scene list) | sound effect cue |
| `both` | `F6378` (+4.05 s) | Rov | <Pop f={f} fps={fps} at={wf(18, 'both')}> |
| `domes` | `F6434` (+4.98 s) | Rov | <Chip text={f >= wf(18, 'domes') ? 'BOTH TITANIUM DOMES' : 'BOTH TITANIUM'} tone |
| `sea` | `F6471` (+5.60 s) | Rov | <Pop f={f} fps={fps} at={wf(18, 'sea')}> |
| `hundred` | `F6540` (+6.75 s) | Rov | <Pop f={f} fps={fps} at={wf(18, 'hundred')}> |
| `Titanic's` | `F6599` (+7.73 s) | Rov | text: FROM THE TITANIC'S BOW |
| `bow` | `F6636` (+8.35 s) | Rov | text: FROM THE TITANIC'S BOW |

**19** · By its dive log, Titan had reached the wreck, three thousand eight hundred and forty metres down, thirteen times.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `dive` | `F6713` (+0.35 s) | Thirteen | text: TITAN'S |
| `log` | `F6734` (+0.70 s) | Thirteen | text: TITAN'S |
| `Titan` | `F6763` (+1.18 s) | Thirteen | text: TITAN'S |
| `wreck` | `F6819` (+2.12 s) | Thirteen | text: THE WRECK |
| `three` | `F6849` (+2.62 s) | Thirteen | rollTo · <text x={X0 - 70} y={yOf(3840) + 9} textAnchor="end" style={T(30, lit( |
| `eight` | `F6901` (+3.48 s) | Thirteen | rollTo · <text x={X0 - 70} y={yOf(3840) + 9} textAnchor="end" style={T(30, lit( |
| `forty` | `F6939` (+4.12 s) | Thirteen | rollTo · <text x={X0 - 70} y={yOf(3840) + 9} textAnchor="end" style={T(30, lit( |
| `thirteen` | `F7027` (+5.58 s) | (scene list) | sound effect cue |
| `times` | `F7069` (+6.28 s) | Thirteen | <span style={{...T(30, lit(f, wf(19, 'times')))}}>× TO THE WRECK</span> |

**20** · On its last dive, it failed about five hundred metres shallower.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `last` | `F7155` (+0.30 s) | Thirteen | text: DIVE 88 |
| `failed` | `F7220` (+1.38 s) | (scene list) | sound effect cue |
| `five` | `F7269` (+2.20 s) | Thirteen | lead · const gap = lead(f, wf(20, 'five'), 14); |
| `hundred` | `F7290` (+2.55 s) | Thirteen | bump · <div style={{position: 'absolute', left: x88 + 84, top: yOf(3600) - 22 |

**21** · So where did the margin of error run out?

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `margin` | `F7440` (+0.72 s) | Thirteen | flash · const margin = flash(f, wf(21, 'margin'), 0.45); |

**22** · And when did the hull start to go?

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `start` | `F7639` (+1.05 s) | Thirteen | bump · <Chip text="DIVE 80 · 15 JUL 2022" tone={colors.ink} size={30} style={ |
| `go` | `F7664` (+1.47 s) | Thirteen | text: WHEN DID THE HULL START TO GO? |

