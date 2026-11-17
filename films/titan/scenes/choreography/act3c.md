# Choreography index: Act 3c

Word-level choreography (PLAYBOOK §10.6), **generated from the scene code** (`python3 scripts/choreo_index.py` from the film folder; re-run after
any edit) so it cannot drift from it. One row per word-locked event: the spoken trigger, its measured frame (60 fps) and offset
from the sentence start, the scene component, and what changes (the on-screen text that arrives, or the driving line of
code). Kit: `lib/remotion/Kinetic.tsx` and `remotion/beats.tsx` (`KeyLine` parts land on their words, `ChunkQuote` reveals a
record quote chunk by chunk, `WordLine` builds a title word by word). Kit for this film: `remotion/parts*.tsx`.
Sync audit: `review/sync_audit.md`.

**159** · Then it had to spend the winter somewhere.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `spend` | `F50667` (+0.93 s) | Winter | text: THE WINTER: |
| `winter` | `F50691` (+1.33 s) | Winter | text: THE WINTER: |
| `somewhere` | `F50714` (+1.72 s) | Winter | text: SOMEWHERE |

**160** · On the twenty-sixth of July, Titan was set down in a parking lot at a marine base in Saint John's, Newfoundland.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `twenty-sixth` | `F50779` (+0.22 s) | Winter | DatePill · <DatePill f={f} fps={fps} day={26} month={7} year={2022} dayWord={wf(1 |
| `July` | `F50824` (+0.97 s) | Winter | DatePill · <DatePill f={f} fps={fps} day={26} month={7} year={2022} dayWord={wf(1 |
| `Titan` | `F50866` (+1.67 s) | Winter | text: TITAN, SET DOWN |
| `set` | `F50901` (+2.25 s) | Winter | text: TITAN, SET DOWN |
| `parking` | `F50943` (+2.95 s) | Winter | text: IN A PARKING LOT · |
| `lot` | `F50972` (+3.43 s) | Winter | text: IN A PARKING LOT · |
| `marine` | `F50998` (+3.87 s) | Winter | text: A MARINE BASE · |
| `base` | `F51024` (+4.30 s) | Winter | text: A MARINE BASE · |
| `Saint` | `F51057` (+4.85 s) | Winter | text: ST. JOHN'S |
| `Newfoundland` | `F51100` (+5.57 s) | Winter | text: ST. JOHN'S |

**161** · Uncovered.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Uncovered` | `F51168` (+0.03 s) | (scene list) | sound effect cue |

**162** · Two days later, the base passed on a quote for a protective cover: one thousand seven hundred and fifty Canadian dollars.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Two` | `F51235` (+0.02 s) | Winter | lead · <div style={{position: 'absolute', right: 96, top: 84, display: 'flex' |
| `later` | `F51263` (+0.48 s) | Winter | DatePill · <DatePill f={f} fps={fps} day={28} month={7} year={2022} dayWord={wf(1 |
| `base` | `F51306` (+1.20 s) | Winter | text: THE BASE PASSED ON |
| `passed` | `F51325` (+1.52 s) | Winter | text: THE BASE PASSED ON |
| `quote` | `F51359` (+2.08 s) | (scene list) | sound effect cue |
| `protective` | `F51396` (+2.70 s) | Winter | hl= · <RecordPage set="roi" start={sf(162) - 12} end={ef(166) + 20} page={32 |
| `cover` | `F51433` (+3.32 s) | Winter | text: A QUOTE FOR A COVER: |
| `one` | `F51481` (+4.12 s) | Winter | bump · <span style={{...T(44, {color: colors.amber, fontWeight: 700}), backgr |
| `thousand` | `F51492` (+4.30 s) | Winter | rollTo · const cad = Math.round(rollTo(f, [{frame: wf(162, 'one') - 10, value:  |
| `seven` | `F51523` (+4.82 s) | Winter | rollTo · const cad = Math.round(rollTo(f, [{frame: wf(162, 'one') - 10, value:  |
| `fifty` | `F51568` (+5.57 s) | (scene list) | sound effect cue |
| `Canadian` | `F51591` (+5.95 s) | Winter | text: CA$1,750 · |
| `dollars` | `F51623` (+6.48 s) | Winter | text: CA$1,750 · |

**163** · The base told the Coast Guard board that OceanGate never answered that email.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `told` | `F51702` (+0.42 s) | Winter | text: IT TOLD THE BOARD: |
| `board` | `F51758` (+1.35 s) | Winter | text: IT TOLD THE BOARD: |
| `OceanGate` | `F51789` (+1.87 s) | Winter | text: NEVER ANSWERED |
| `never` | `F51829` (+2.53 s) | Winter | hl= · <RecordPage set="roi" start={sf(162) - 12} end={ef(166) + 20} page={32 |
| `answered` | `F51851` (+2.90 s) | Winter | text: NEVER ANSWERED |
| `email` | `F51887` (+3.50 s) | Winter | <Wd f={f} at={wf(163, 'email')}> THAT EMAIL</Wd> |

**164** · In September, the base wrote again: Titan still had not been covered.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `September` | `F51948` (+0.17 s) | Winter | text: SEPTEMBER: |
| `wrote` | `F52016` (+1.30 s) | Winter | text: THE BASE WROTE AGAIN · |
| `again` | `F52032` (+1.57 s) | Winter | text: THE BASE WROTE AGAIN · |
| `still` | `F52109` (+2.85 s) | Winter | text: STILL NOT COVERED · |
| `covered` | `F52168` (+3.83 s) | Winter | text: STILL NOT COVERED · |

**165** · OceanGate's logistics director said it would be discussed.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `OceanGate's` | `F52223` (+0.07 s) | Winter | text: LOGISTICS DIRECTOR: |
| `director` | `F52293` (+1.23 s) | Winter | text: LOGISTICS DIRECTOR: |
| `discussed` | `F52372` (+2.55 s) | Winter | <Wd f={f} at={wf(165, 'discussed')} tone={colors.amber}>"WILL BE DISCUSSED" · </ |

**166** · The board found no action followed.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `board` | `F52444` (+0.12 s) | Winter | text: THE BOARD: |
| `found` | `F52473` (+0.60 s) | Winter | text: THE BOARD: |
| `no` | `F52495` (+0.97 s) | (scene list) | sound effect cue |
| `followed` | `F52533` (+1.60 s) | Winter | text: NO ACTION FOLLOWED |

**167** · It stayed outside until the sixth of February, through temperatures from one point four to eighty-four point two degrees Fahrenheit, about minus seventeen to twenty-nine Celsius, through freezing rain, sleet and snow.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `stayed` | `F52592` (+0.18 s) | Winter | text: OUTSIDE UNTIL |
| `outside` | `F52613` (+0.53 s) | Winter | text: OUTSIDE UNTIL |
| `sixth` | `F52674` (+1.55 s) | Winter | DatePill · <DatePill f={f} fps={fps} day={6} month={2} year={2023} dayWord={wf(16 |
| `February` | `F52700` (+1.98 s) | Winter | DatePill · <DatePill f={f} fps={fps} day={6} month={2} year={2023} dayWord={wf(16 |
| `temperatures` | `F52758` (+2.95 s) | Winter | text: TEMPERATURES |
| `one` | `F52813` (+3.87 s) | Winter | lead · <span style={{...T(56, {color: colors.cyan, fontWeight: 700}), opacity |
| `four` | `F52843` (+4.37 s) | (scene list) | sound effect cue |
| `to` | `F52866` (+4.75 s) | Winter | lead · <span style={{...T(40, {color: colors.ink}), opacity: lead(f, wf(167,  |
| `eighty-four` | `F52879` (+4.97 s) | Winter | flash · <span style={{...T(56, {color: colors.amber, fontWeight: 700}), opacit |
| `two` | `F52931` (+5.83 s) | Winter | rollTo · const highF = rollTo(f, [{frame: wf(167, 'eighty-four') - 12, value: 4 |
| `Fahrenheit` | `F52968` (+6.45 s) | Winter | flash · <span style={{...T(56, {color: colors.amber, fontWeight: 700}), opacit |
| `minus` | `F53043` (+7.70 s) | Winter | <Wd f={f} at={wf(167, 'minus')} lightAt={wf(167, 'seventeen')} tone={colors.cyan |
| `seventeen` | `F53066` (+8.08 s) | Winter | <Wd f={f} at={wf(167, 'minus')} lightAt={wf(167, 'seventeen')} tone={colors.cyan |
| `twenty-nine` | `F53114` (+8.88 s) | Winter | <Wd f={f} at={wf(167, 'twenty-nine')} lightAt={wf(167, 'celsius')} tone={colors. |
| `Celsius` | `F53152` (+9.52 s) | Winter | <Wd f={f} at={wf(167, 'twenty-nine')} lightAt={wf(167, 'celsius')} tone={colors. |
| `freezing` | `F53224` (+10.72 s) | Winter | text: FREEZING RAIN · |
| `rain` | `F53253` (+11.20 s) | Winter | text: FREEZING RAIN · |
| `sleet` | `F53288` (+11.78 s) | Winter | text: SLEET · |
| `snow` | `F53333` (+12.53 s) | Winter | text: SNOW |

**168** · Brooks testified that what they really wanted was to bring Titan back to Everett, pull the insert, and look inside the hull for cracks.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Brooks` | `F53379` (+-0.02 s) | Winter | text: BROOKS: |
| `testified` | `F53399` (+0.32 s) | Winter | text: BROOKS: |
| `what` | `F53446` (+1.10 s) | Winter | text: WHAT THEY REALLY / WANTED: BRING IT |
| `really` | `F53470` (+1.50 s) | Winter | text: WHAT THEY REALLY / WANTED: BRING IT |
| `wanted` | `F53492` (+1.87 s) | Winter | text: WHAT THEY REALLY / WANTED: BRING IT |
| `bring` | `F53538` (+2.63 s) | Winter | text: WHAT THEY REALLY / WANTED: BRING IT |
| `back` | `F53581` (+3.35 s) | Winter | text: BACK TO EVERETT, |
| `Everett` | `F53605` (+3.75 s) | Winter | text: BACK TO EVERETT, |
| `pull` | `F53644` (+4.40 s) | Winter | text: PULL THE INSERT, |
| `insert` | `F53668` (+4.80 s) | Winter | text: PULL THE INSERT, |
| `look` | `F53715` (+5.58 s) | Winter | text: LOOK INSIDE FOR CRACKS |
| `cracks` | `F53786` (+6.77 s) | Winter | text: LOOK INSIDE FOR CRACKS |

**170** · Was money behind these decisions?

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Was` | `F54368` (+0.00 s) | Money | text: Was |
| `money` | `F54382` (+0.23 s) | Money | <Wd f={f} at={wf(170, 'money')} tone={colors.amber}>money </Wd> |
| `behind` | `F54400` (+0.53 s) | Money | <Wd f={f} at={wf(170, 'behind')} lightAt={wf(170, 'decisions')} base={colors.ink |
| `decisions` | `F54434` (+1.10 s) | Money | <Wd f={f} at={wf(170, 'behind')} lightAt={wf(170, 'decisions')} base={colors.ink |

**171** · The Coast Guard board says it was: in its words, a troubling prioritization of cost and time-saving measures over safety.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Coast` | `F54508` (+0.12 s) | Money | text: THE COAST GUARD BOARD: |
| `board` | `F54542` (+0.68 s) | Money | text: THE COAST GUARD BOARD: |
| `says` | `F54562` (+1.02 s) | Money | text: YES · |
| `was` | `F54584` (+1.38 s) | Money | text: YES · |
| `words` | `F54645` (+2.40 s) | Money | hl= · <RecordPage set="roi" start={sf(171) - 14} end={ef(172) + 20} hl={[{ke |
| `troubling` | `F54693` (+3.20 s) | (scene list) | sound effect cue |
| `prioritization` | `F54723` (+3.70 s) | Money | <Wd f={f} at={wf(171, 'troubling')} lightAt={wf(171, 'prioritization')} tone={co |
| `cost` | `F54798` (+4.95 s) | Money | text: COST AND TIME-SAVING MEASURES |
| `measures` | `F54882` (+6.35 s) | Money | text: COST AND TIME-SAVING MEASURES |
| `over` | `F54912` (+6.85 s) | Money | text: OVER SAFETY" · |
| `safety` | `F54930` (+7.15 s) | Money | text: OVER SAFETY" · |

**172** · The N - T - S - B's findings do not address money.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `N` | `F54996` (+0.22 s) | Money | text: THE N-T-S-B'S FINDINGS: |
| `findings` | `F55041` (+0.97 s) | Money | text: THE N-T-S-B'S FINDINGS: |
| `not` | `F55095` (+1.87 s) | Money | text: DO NOT ADDRESS MONEY |
| `money` | `F55140` (+2.62 s) | Money | text: DO NOT ADDRESS MONEY |

**173** · From June twenty twenty-two to May twenty twenty-three, the board found, the chief executive advanced the company one point eight five million dollars.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `June` | `F55198` (+0.25 s) | Money | text: JUN 2022 |
| `twenty-two` | `F55238` (+0.92 s) | Money | text: JUN 2022 |
| `May` | `F55298` (+1.92 s) | Money | <Wd f={f} at={wf(173, 'may')} lightAt={wf(173, 'twenty-three')} tone={colors.ink |
| `twenty-three` | `F55336` (+2.55 s) | Money | <Wd f={f} at={wf(173, 'may')} lightAt={wf(173, 'twenty-three')} tone={colors.ink |
| `board` | `F55415` (+3.87 s) | Money | text: THE BOARD FOUND: |
| `found` | `F55434` (+4.18 s) | Money | text: THE BOARD FOUND: |
| `chief` | `F55489` (+5.10 s) | Money | text: THE CEO ADVANCED THE COMPANY |
| `advanced` | `F55541` (+5.97 s) | Money | text: THE CEO ADVANCED THE COMPANY |
| `one` | `F55615` (+7.20 s) | Money | <Wd f={f} at={wf(173, 'one')} lightAt={wf(173, 'dollars')} tone={colors.amber} b |
| `eight` | `F55650` (+7.78 s) | Money | rollTo · const m185 = rollTo(f, [{frame: wf(173, 'one') - 10, value: 0}, {frame |
| `five` | `F55663` (+8.00 s) | Money | rollTo · const m185 = rollTo(f, [{frame: wf(173, 'one') - 10, value: 0}, {frame |
| `million` | `F55687` (+8.40 s) | (scene list) | sound effect cue |
| `dollars` | `F55713` (+8.83 s) | Money | <Wd f={f} at={wf(173, 'one')} lightAt={wf(173, 'dollars')} tone={colors.amber} b |

**174** · The board found that employees were asked to temporarily forgo their salaries, with a promise of back pay.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `employees` | `F55828` (+0.82 s) | Money | <Wd f={f} at={wf(174, 'employees')}> · EMPLOYEES </Wd> |
| `asked` | `F55877` (+1.63 s) | Money | text: ASKED TO FORGO / SALARIES · |
| `forgo` | `F55952` (+2.88 s) | Money | text: ASKED TO FORGO / SALARIES · |
| `salaries` | `F55997` (+3.63 s) | Money | text: ASKED TO FORGO / SALARIES · |
| `promise` | `F56056` (+4.62 s) | Money | text: BACK PAY PROMISED |
| `pay` | `F56110` (+5.52 s) | Money | text: BACK PAY PROMISED |

**175** · The ship that had carried Titan was unavailable for twenty twenty-three, the board found.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `ship` | `F56163` (+0.17 s) | Money | text: THE SHIP THAT HAD CARRIED TITAN: |
| `carried` | `F56196` (+0.72 s) | Money | text: THE SHIP THAT HAD CARRIED TITAN: |
| `unavailable` | `F56262` (+1.82 s) | Money | text: UNAVAILABLE FOR 2023 |
| `twenty-three` | `F56331` (+2.97 s) | Money | text: UNAVAILABLE FOR 2023 |
| `board` | `F56392` (+3.98 s) | Money | <Wd f={f} at={wf(175, 'board')} lightAt={wf(175, 'found')}> · THE BOARD</Wd> |
| `found` | `F56409` (+4.27 s) | Money | <Wd f={f} at={wf(175, 'board')} lightAt={wf(175, 'found')}> · THE BOARD</Wd> |

**176** · Titan would be towed to the site on its launch platform, behind a smaller ship.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `towed` | `F56503` (+0.67 s) | (scene list) | sound effect cue |
| `site` | `F56540` (+1.28 s) | Money | text: TOWED TO THE SITE |
| `launch` | `F56576` (+1.88 s) | Money | text: ON ITS LAUNCH PLATFORM, |
| `platform` | `F56594` (+2.18 s) | Money | text: ON ITS LAUNCH PLATFORM, |
| `behind` | `F56639` (+2.93 s) | Money | text: BEHIND A SMALLER SHIP |
| `smaller` | `F56666` (+3.38 s) | Money | const pp = span(f, wf(176, 'smaller') - 10, wf(176, 'ship') + 10); |
| `ship` | `F56693` (+3.83 s) | Money | text: BEHIND A SMALLER SHIP |

**177** · Early in twenty twenty-three, Brooks left.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Early` | `F56744` (+0.03 s) | Money | text: EARLY 2023: |
| `twenty-three` | `F56791` (+0.82 s) | Money | text: EARLY 2023: |
| `Brooks` | `F56852` (+1.83 s) | Money | text: BROOKS LEFT |
| `left` | `F56875` (+2.22 s) | (scene list) | sound effect cue |

**178** · Under oath, he said his main reason was that plan to tow Titan, which meant working on its platform in open seas, and that the reasons for it were economic.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Under` | `F56936` (+0.02 s) | Money | text: UNDER OATH · |
| `oath` | `F56955` (+0.33 s) | Money | text: UNDER OATH · |
| `main` | `F57025` (+1.50 s) | Money | text: HIS MAIN REASON: |
| `reason` | `F57042` (+1.78 s) | Money | text: HIS MAIN REASON: |
| `plan` | `F57090` (+2.58 s) | Money | text: THE PLAN TO TOW TITAN · |
| `tow` | `F57121` (+3.10 s) | Money | text: THE PLAN TO TOW TITAN · |
| `which` | `F57191` (+4.27 s) | Money | text: MEANING: / WORKING ON ITS PLATFORM |
| `meant` | `F57203` (+4.47 s) | Money | text: MEANING: / WORKING ON ITS PLATFORM |
| `working` | `F57217` (+4.70 s) | Money | text: MEANING: / WORKING ON ITS PLATFORM |
| `platform` | `F57257` (+5.37 s) | Money | text: MEANING: / WORKING ON ITS PLATFORM |
| `open` | `F57302` (+6.12 s) | Money | text: IN OPEN SEAS |
| `seas` | `F57324` (+6.48 s) | Money | text: IN OPEN SEAS |
| `reasons` | `F57393` (+7.63 s) | Money | text: THE REASONS: "ECONOMIC" |
| `economic` | `F57451` (+8.60 s) | Money | text: THE REASONS: "ECONOMIC" |

**181** · He said he suggested they not go, and was told that wasn't possible: they had people that paid.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `suggested` | `F58072` (+0.50 s) | Money | text: HE SUGGESTED THEY NOT GO · |
| `go` | `F58136` (+1.57 s) | Money | text: HE SUGGESTED THEY NOT GO · |
| `told` | `F58186` (+2.40 s) | Money | <Wd f={f} at={wf(181, 'told')} lightAt={wf(181, 'possible')} tone={colors.red}>" |
| `possible` | `F58231` (+3.15 s) | Money | <Wd f={f} at={wf(181, 'told')} lightAt={wf(181, 'possible')} tone={colors.red}>" |
| `people` | `F58309` (+4.45 s) | Money | <Wd f={f} at={wf(181, 'people')} lightAt={wf(181, 'paid')} tone={colors.amber} b |
| `paid` | `F58345` (+5.05 s) | Money | <Wd f={f} at={wf(181, 'people')} lightAt={wf(181, 'paid')} tone={colors.amber} b |

**182** · The board found that the chief executive then left the director of engineering post vacant, in its words, to ensure the twenty twenty-three expedition proceeded unhindered.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `board` | `F58407` (+0.12 s) | Money | text: THE BOARD: |
| `found` | `F58427` (+0.45 s) | Money | text: THE BOARD: |
| `chief` | `F58460` (+1.00 s) | Money | text: THE CEO LEFT |
| `executive` | `F58477` (+1.28 s) | Money | text: THE CEO LEFT |
| `director` | `F58553` (+2.55 s) | Money | text: THE DIRECTOR OF ENGINEERING POST |
| `post` | `F58623` (+3.72 s) | Money | text: THE DIRECTOR OF ENGINEERING POST |
| `vacant` | `F58648` (+4.13 s) | (scene list) | sound effect cue |
| `words` | `F58712` (+5.20 s) | Money | text: IN ITS WORDS: / EXPEDITION |
| `ensure` | `F58763` (+6.05 s) | Money | text: IN ITS WORDS: / EXPEDITION |
| `twenty-three` | `F58818` (+6.97 s) | Money | text: IN ITS WORDS: / EXPEDITION |
| `expedition` | `F58854` (+7.57 s) | Money | text: IN ITS WORDS: / EXPEDITION |
| `proceeded` | `F58895` (+8.25 s) | Money | text: PROCEEDED UNHINDERED" |
| `unhindered` | `F58939` (+8.98 s) | Money | text: PROCEEDED UNHINDERED" |

**183** · And the board drew the line back to twenty nineteen, when, by his own testimony, the first director of engineering had kept a damaged hull from an expedition.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `drew` | `F59038` (+0.53 s) | Money | text: THE LINE BACK TO |
| `line` | `F59056` (+0.83 s) | Money | text: THE LINE BACK TO |
| `twenty` | `F59096` (+1.50 s) | Money | text: 2019: |
| `nineteen` | `F59117` (+1.85 s) | Money | text: 2019: |
| `by` | `F59202` (+3.27 s) | Money | text: BY HIS OWN TESTIMONY, / THE FIRST DIRECTOR OF ENGINEERING |
| `own` | `F59223` (+3.62 s) | Money | text: BY HIS OWN TESTIMONY, / THE FIRST DIRECTOR OF ENGINEERING |
| `testimony` | `F59235` (+3.82 s) | Money | bump · <Chip text="BY HIS OWN TESTIMONY (2019)" tone={colors.cyan} size={28}  |
| `first` | `F59304` (+4.97 s) | Money | text: BY HIS OWN TESTIMONY, / THE FIRST DIRECTOR OF ENGINEERING |
| `engineering` | `F59354` (+5.80 s) | Money | text: BY HIS OWN TESTIMONY, / THE FIRST DIRECTOR OF ENGINEERING |
| `kept` | `F59401` (+6.58 s) | Money | text: KEPT / A DAMAGED HULL |
| `damaged` | `F59425` (+6.98 s) | Money | text: KEPT / A DAMAGED HULL |
| `hull` | `F59457` (+7.52 s) | Money | text: KEPT / A DAMAGED HULL |
| `expedition` | `F59496` (+8.17 s) | Money | text: KEPT / A DAMAGED HULL |

**184** · Leaving the post empty, it wrote, removed the possibility of a replacement director blocking the expedition.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Leaving` | `F59567` (+0.03 s) | Money | text: THE EMPTY POST |
| `empty` | `F59618` (+0.88 s) | Money | text: THE EMPTY POST |
| `removed` | `F59697` (+2.20 s) | Money | text: REMOVED THE POSSIBILITY |
| `possibility` | `F59730` (+2.75 s) | Money | text: REMOVED THE POSSIBILITY |
| `replacement` | `F59785` (+3.67 s) | Money | text: OF A REPLACEMENT BLOCKING IT |
| `blocking` | `F59854` (+4.82 s) | Money | text: OF A REPLACEMENT BLOCKING IT |

**185** · That spring, at sea and in port, the platform tipped more than once.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `spring` | `F59979` (+0.25 s) | Tipping | text: SPRING 2023 · |
| `sea` | `F60035` (+1.18 s) | Tipping | text: AT SEA |
| `port` | `F60075` (+1.85 s) | Tipping | text: AND IN PORT: |
| `platform` | `F60120` (+2.60 s) | Tipping | text: THE PLATFORM TIPPED |
| `tipped` | `F60157` (+3.22 s) | (scene list) | sound effect cue |
| `more` | `F60183` (+3.65 s) | Tipping | text: MORE THAN ONCE |
| `once` | `F60210` (+4.10 s) | Tipping | text: MORE THAN ONCE |

**186** · Once, in May, its bow went partly under water, and Titan's tail cone was lost.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Once` | `F60261` (+0.10 s) | Tipping | const tilt = span(f, wf(185, 'tipped') - 4, wf(185, 'tipped') + 18) * (1 - span( |
| `May` | `F60300` (+0.75 s) | Tipping | DatePill · <DatePill f={f} fps={fps} day={24} month={5} year={2023} dayWord={wf(1 |
| `bow` | `F60349` (+1.57 s) | Tipping | text: ITS BOW PARTLY UNDER WATER · |
| `under` | `F60408` (+2.55 s) | Tipping | const under = span(f, wf(186, 'under') - 6, wf(186, 'water') + 12); |
| `water` | `F60422` (+2.78 s) | Tipping | text: ITS BOW PARTLY UNDER WATER · |
| `Titan's` | `F60465` (+3.50 s) | Tipping | text: TITAN'S TAIL CONE: |
| `cone` | `F60512` (+4.28 s) | Tipping | text: TITAN'S TAIL CONE: |
| `lost` | `F60544` (+4.82 s) | (scene list) | sound effect cue |

**187** · How was a hull like this allowed to carry passengers?

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `How` | `F60604` (+0.05 s) | Law | text: How was a hull like this |
| `allowed` | `F60693` (+1.53 s) | Law | <Wd f={f} at={wf(187, 'allowed')} tone={colors.amber}>allowed </Wd> |
| `carry` | `F60720` (+1.98 s) | Law | <Wd f={f} at={wf(187, 'carry')} lightAt={wf(187, 'passengers')} tone={colors.amb |
| `passengers` | `F60739` (+2.30 s) | Law | <Wd f={f} at={wf(187, 'carry')} lightAt={wf(187, 'passengers')} tone={colors.amb |

**188** · By the Coast Guard's reading of the law, it was not.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Coast` | `F60826` (+0.25 s) | Law | text: BY THE COAST GUARD'S READING OF THE LAW: |
| `reading` | `F60861` (+0.83 s) | Law | text: BY THE COAST GUARD'S READING OF THE LAW: |
| `not` | `F60943` (+2.20 s) | (scene list) | sound effect cue |

**189** · Under U - S law, the N - T - S - B notes, a submersible carrying even one passenger for hire is a small passenger vessel, and must be inspected by the Coast Guard.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `U` | `F61019` (+0.38 s) | Law | text: U.S. LAW, |
| `law` | `F61042` (+0.77 s) | Law | text: U.S. LAW, |
| `N` | `F61089` (+1.55 s) | Law | text: AS THE N-T-S-B NOTES: |
| `notes` | `F61130` (+2.23 s) | Law | text: AS THE N-T-S-B NOTES: |
| `submersible` | `F61178` (+3.03 s) | Law | text: A SUBMERSIBLE CARRYING |
| `carrying` | `F61217` (+3.68 s) | Law | text: A SUBMERSIBLE CARRYING |
| `even` | `F61249` (+4.22 s) | Law | text: EVEN ONE |
| `one` | `F61274` (+4.63 s) | Law | text: EVEN ONE |
| `passenger` | `F61286` (+4.83 s) | Law | text: PASSENGER FOR HIRE |
| `hire` | `F61329` (+5.55 s) | Law | text: PASSENGER FOR HIRE |
| `is` | `F61358` (+6.03 s) | Law | <Wd f={f} at={wf(189, 'is')} lightAt={wf(189, 'vessel')}>= A SMALL PASSENGER VES |
| `vessel` | `F61426` (+7.17 s) | Law | <Wd f={f} at={wf(189, 'is')} lightAt={wf(189, 'vessel')}>= A SMALL PASSENGER VES |
| `must` | `F61476` (+8.00 s) | Law | text: MUST BE INSPECTED |
| `inspected` | `F61497` (+8.35 s) | Law | text: MUST BE INSPECTED |
| `by` | `F61531` (+8.92 s) | Law | text: BY THE COAST GUARD |
| `Guard` | `F61563` (+9.45 s) | Law | text: BY THE COAST GUARD |

**190** · OceanGate never registered Titan, and never arranged an inspection.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `OceanGate` | `F61611` (+0.03 s) | Law | text: OCEANGATE · TITAN · USCG MBI REPORT; NTSB MIR-25-36 |
| `registered` | `F61672` (+1.05 s) | (scene list) | sound effect cue |
| `Titan` | `F61705` (+1.60 s) | Law | text: OCEANGATE · TITAN · USCG MBI REPORT; NTSB MIR-25-36 |
| `arranged` | `F61774` (+2.75 s) | Law | <Chip text={f >= wf(190, 'arranged') ? 'NO INSPECTION ARRANGED' : 'NO INSPECTION |
| `inspection` | `F61809` (+3.33 s) | Law | bump · <span style={{opacity: lead(f, wf(190, 'inspection'), 8), transform: ` |

**191** · The Coast Guard board found that OceanGate described its paying passengers as mission specialists, with mandatory duties, to conceal that they were paying passengers.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `board` | `F61917` (+0.68 s) | Law | text: THE BOARD FOUND: |
| `found` | `F61939` (+1.05 s) | Law | text: THE BOARD FOUND: |
| `OceanGate` | `F61965` (+1.48 s) | Law | text: OCEANGATE DESCRIBED / PAYING PASSENGERS AS |
| `described` | `F61999` (+2.05 s) | Law | text: OCEANGATE DESCRIBED / PAYING PASSENGERS AS |
| `paying` | `F62044` (+2.80 s) | Law | text: OCEANGATE DESCRIBED / PAYING PASSENGERS AS |
| `passengers` | `F62065` (+3.15 s) | Law | text: OCEANGATE DESCRIBED / PAYING PASSENGERS AS |
| `mission` | `F62136` (+4.33 s) | Law | <Wd f={f} at={wf(191, 'mission')} lightAt={wf(191, 'specialists')} tone={colors. |
| `specialists` | `F62164` (+4.80 s) | Law | <Wd f={f} at={wf(191, 'mission')} lightAt={wf(191, 'specialists')} tone={colors. |
| `mandatory` | `F62229` (+5.88 s) | Law | text: WITH MANDATORY DUTIES · |
| `duties` | `F62267` (+6.52 s) | Law | text: WITH MANDATORY DUTIES · |
| `conceal` | `F62321` (+7.42 s) | (scene list) | sound effect cue |
| `they` | `F62368` (+8.20 s) | Law | text: TO CONCEAL / THAT THEY WERE PAYING PASSENGERS |
| `passengers` | `F62411` (+8.92 s) | Law | text: TO CONCEAL / THAT THEY WERE PAYING PASSENGERS |

**192** · The regulator's own guidance gets the same scrutiny.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `regulator's` | `F62490` (+0.12 s) | Law | text: THE REGULATOR'S OWN GUIDANCE: |
| `guidance` | `F62545` (+1.03 s) | Law | text: THE REGULATOR'S OWN GUIDANCE: |
| `same` | `F62597` (+1.90 s) | Law | text: THE SAME SCRUTINY |
| `scrutiny` | `F62615` (+2.20 s) | Law | text: THE SAME SCRUTINY |

**193** · The Coast Guard's voluntary guidance for passenger submersibles was published in July nineteen ninety-three.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Coast` | `F62680` (+0.12 s) | Law | lead · <g opacity={lead(f, wf(193, 'coast'), 8)}> |
| `voluntary` | `F62719` (+0.77 s) | Law | text: VOLUNTARY GUIDANCE |
| `passenger` | `F62790` (+1.95 s) | Law | text: NVIC 05-93 · / PASSENGER SUBMERSIBLES |
| `submersibles` | `F62821` (+2.47 s) | Law | text: NVIC 05-93 · / PASSENGER SUBMERSIBLES |
| `published` | `F62879` (+3.43 s) | Law | text: PUBLISHED |
| `July` | `F62915` (+4.03 s) | Law | lead · <line x1={X(1993) - 20} x2={X(1993) + 60} y1={520} y2={520} stroke={co |
| `nineteen` | `F62940` (+4.45 s) | Law | text: JUL / 1993 |
| `ninety-three` | `F62969` (+4.93 s) | Law | text: JUL / 1993 |

**194** · That December, a new law changed the definition, to cover any submersible with one passenger for hire.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `December` | `F63050` (+0.20 s) | (scene list) | sound effect cue |
| `law` | `F63123` (+1.42 s) | Law | text: DEC 1993 · / A NEW LAW |
| `definition` | `F63169` (+2.18 s) | Law | text: DEC 1993 · / A NEW LAW |
| `cover` | `F63233` (+3.25 s) | Law | text: ANY / SUBMERSIBLE |
| `submersible` | `F63275` (+3.95 s) | Law | text: ANY / SUBMERSIBLE |
| `one` | `F63333` (+4.92 s) | Law | text: ANY / SUBMERSIBLE |

**195** · As of its report in October twenty twenty-five, the N - T - S - B found, the guidance had never been updated to match.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `October` | `F63497` (+0.98 s) | Law | lead · <g opacity={lead(f, wf(195, 'october'), 8)}> |
| `twenty-five` | `F63545` (+1.78 s) | Law | <line x1={X(1993)} x2={X(1993) + (X(2025) - X(1993)) * span(f, wf(195, 'october' |
| `N` | `F63623` (+3.08 s) | Law | text: N-T-S-B · |
| `found` | `F63665` (+3.78 s) | Law | text: N-T-S-B · |
| `never` | `F63750` (+5.20 s) | Law | text: GUIDANCE NEVER UPDATED |
| `updated` | `F63780` (+5.70 s) | Law | text: NOT UPDATED TO MATCH · |
| `match` | `F63819` (+6.35 s) | Law | text: NOT UPDATED TO MATCH · |

**196** · The Coast Guard, it found, had no specific inspection standards for how a submersible is designed or built.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Coast` | `F63879` (+0.10 s) | Law | text: THE COAST GUARD: / NO SPECIFIC |
| `found` | `F63931` (+0.97 s) | Law | text: THE COAST GUARD: / NO SPECIFIC |
| `no` | `F63983` (+1.83 s) | Law | text: THE COAST GUARD: / NO SPECIFIC |
| `specific` | `F63997` (+2.07 s) | Law | text: THE COAST GUARD: / NO SPECIFIC |
| `inspection` | `F64030` (+2.62 s) | Law | text: THE COAST GUARD: / NO SPECIFIC |
| `standards` | `F64065` (+3.20 s) | Law | text: THE COAST GUARD: / NO SPECIFIC |
| `how` | `F64106` (+3.88 s) | Law | text: THE COAST GUARD: / NO SPECIFIC |
| `designed` | `F64172` (+4.98 s) | Law | text: FOR HOW A SUBMERSIBLE IS DESIGNED OR BUILT |
| `built` | `F64221` (+5.80 s) | Law | text: FOR HOW A SUBMERSIBLE IS DESIGNED OR BUILT |

**197** · That guidance also recommended that a submersible dive no deeper than its rescue could reach.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `guidance` | `F64271` (+0.28 s) | Law | text: THE GUIDANCE RECOMMENDED: |
| `recommended` | `F64327` (+1.22 s) | Law | text: THE GUIDANCE RECOMMENDED: |
| `submersible` | `F64384` (+2.17 s) | Law | text: DIVE / NO DEEPER THAN RESCUE CAN REACH |
| `dive` | `F64431` (+2.95 s) | Law | text: DIVE / NO DEEPER THAN RESCUE CAN REACH |
| `deeper` | `F64478` (+3.73 s) | Law | text: DIVE / NO DEEPER THAN RESCUE CAN REACH |
| `rescue` | `F64525` (+4.52 s) | Law | text: 45 M · WHERE ITS RESCUE IS EFFECTIVE (NVIC 05-93) |
| `reach` | `F64568` (+5.23 s) | Law | text: DIVE / NO DEEPER THAN RESCUE CAN REACH |

**198** · The N - T - S - B found that Titan regularly dived to the Titanic with no rescue standing by that could reach it.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `N` | `F64637` (+0.32 s) | Law | text: N-T-S-B: |
| `found` | `F64698` (+1.33 s) | Law | text: N-T-S-B: |
| `Titan` | `F64725` (+1.78 s) | Law | text: TITAN REGULARLY DIVED THERE |
| `regularly` | `F64761` (+2.38 s) | Law | <rect x={1560} y={340} width={70} height={480 * span(f, wf(198, 'regularly') - 6 |
| `dived` | `F64795` (+2.95 s) | Law | text: TITAN REGULARLY DIVED THERE |
| `Titanic` | `F64831` (+3.55 s) | Law | text: 3,840 M · THE TITANIC |
| `no` | `F64889` (+4.52 s) | Law | text: WITH NO RESCUE |
| `rescue` | `F64906` (+4.80 s) | Law | text: WITH NO RESCUE |
| `standing` | `F64933` (+5.25 s) | Law | text: STANDING BY THAT COULD REACH IT |
| `reach` | `F65001` (+6.38 s) | Law | text: STANDING BY THAT COULD REACH IT |

**199** · The N - T - S - B found that voluntary guidance and the rules for small passenger vessels were insufficient to make OceanGate follow the industry's established standards.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `N` | `F65076` (+0.28 s) | Law | text: N-T-S-B: |
| `found` | `F65130` (+1.18 s) | Law | text: N-T-S-B: |
| `voluntary` | `F65160` (+1.68 s) | Law | text: VOLUNTARY GUIDANCE |
| `guidance` | `F65193` (+2.23 s) | Law | text: VOLUNTARY GUIDANCE |
| `rules` | `F65247` (+3.13 s) | Law | text: AND SMALL-PASSENGER-VESSEL RULES |
| `vessels` | `F65331` (+4.53 s) | Law | text: AND SMALL-PASSENGER-VESSEL RULES |
| `insufficient` | `F65375` (+5.27 s) | (scene list) | sound effect cue |
| `make` | `F65436` (+6.28 s) | Law | text: TO MAKE OCEANGATE |
| `OceanGate` | `F65452` (+6.55 s) | Law | text: TO MAKE OCEANGATE |
| `follow` | `F65491` (+7.20 s) | Law | text: FOLLOW THE INDUSTRY'S / STANDARDS |
| `industry's` | `F65520` (+7.68 s) | Law | text: FOLLOW THE INDUSTRY'S / STANDARDS |
| `established` | `F65553` (+8.23 s) | Law | text: FOLLOW THE INDUSTRY'S / STANDARDS |
| `standards` | `F65591` (+8.87 s) | Law | text: FOLLOW THE INDUSTRY'S / STANDARDS |

