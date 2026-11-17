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
| `spend` | `F50861` (+0.93 s) | Winter | text: THE WINTER: |
| `winter` | `F50886` (+1.35 s) | Winter | text: THE WINTER: |
| `somewhere` | `F50909` (+1.73 s) | Winter | text: SOMEWHERE |

**160** · On the twenty-sixth of July, Titan was set down in a parking lot at a marine base in Saint John's, Newfoundland.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `twenty-sixth` | `F50974` (+0.23 s) | Winter | DatePill · <DatePill f={f} fps={fps} day={26} month={7} year={2022} dayWord={wf(1 |
| `July` | `F51018` (+0.97 s) | Winter | DatePill · <DatePill f={f} fps={fps} day={26} month={7} year={2022} dayWord={wf(1 |
| `Titan` | `F51060` (+1.67 s) | Winter | text: TITAN, SET DOWN |
| `set` | `F51095` (+2.25 s) | Winter | text: TITAN, SET DOWN |
| `parking` | `F51137` (+2.95 s) | Winter | text: IN A PARKING LOT · |
| `lot` | `F51166` (+3.43 s) | Winter | text: IN A PARKING LOT · |
| `marine` | `F51193` (+3.88 s) | Winter | text: A MARINE BASE · |
| `base` | `F51218` (+4.30 s) | Winter | text: A MARINE BASE · |
| `Saint` | `F51252` (+4.87 s) | Winter | text: ST. JOHN'S |
| `Newfoundland` | `F51294` (+5.57 s) | Winter | text: ST. JOHN'S |

**161** · Uncovered.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Uncovered` | `F51362` (+0.02 s) | (scene list) | sound effect cue |

**162** · Two days later, the base passed on a quote for a protective cover: one thousand seven hundred and fifty Canadian dollars.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Two` | `F51429` (+0.02 s) | Winter | lead · <div style={{position: 'absolute', right: 96, top: 84, display: 'flex' |
| `later` | `F51457` (+0.48 s) | Winter | DatePill · <DatePill f={f} fps={fps} day={28} month={7} year={2022} dayWord={wf(1 |
| `base` | `F51500` (+1.20 s) | Winter | text: THE BASE PASSED ON |
| `passed` | `F51519` (+1.52 s) | Winter | text: THE BASE PASSED ON |
| `quote` | `F51553` (+2.08 s) | (scene list) | sound effect cue |
| `protective` | `F51590` (+2.70 s) | Winter | hl= · <RecordPage set="roi" start={sf(162) - 12} end={ef(166) + 20} page={32 |
| `cover` | `F51628` (+3.33 s) | Winter | text: A QUOTE FOR A COVER: |
| `one` | `F51676` (+4.13 s) | Winter | bump · <span style={{...T(44, {color: colors.amber, fontWeight: 700}), backgr |
| `thousand` | `F51687` (+4.32 s) | Winter | rollTo · const cad = Math.round(rollTo(f, [{frame: wf(162, 'one') - 10, value:  |
| `seven` | `F51718` (+4.83 s) | Winter | rollTo · const cad = Math.round(rollTo(f, [{frame: wf(162, 'one') - 10, value:  |
| `fifty` | `F51762` (+5.57 s) | (scene list) | sound effect cue |
| `Canadian` | `F51785` (+5.95 s) | Winter | text: CA$1,750 · |
| `dollars` | `F51818` (+6.50 s) | Winter | text: CA$1,750 · |

**163** · The base told the Coast Guard board that OceanGate never answered that email.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `told` | `F51896` (+0.40 s) | Winter | text: IT TOLD THE BOARD: |
| `board` | `F51952` (+1.33 s) | Winter | text: IT TOLD THE BOARD: |
| `OceanGate` | `F51984` (+1.87 s) | Winter | text: NEVER ANSWERED |
| `never` | `F52024` (+2.53 s) | Winter | hl= · <RecordPage set="roi" start={sf(162) - 12} end={ef(166) + 20} page={32 |
| `answered` | `F52045` (+2.88 s) | Winter | text: NEVER ANSWERED |
| `email` | `F52081` (+3.48 s) | Winter | <Wd f={f} at={wf(163, 'email')}> THAT EMAIL</Wd> |

**164** · In September, the base wrote again: Titan still had not been covered.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `September` | `F52142` (+0.17 s) | Winter | text: SEPTEMBER: |
| `wrote` | `F52211` (+1.32 s) | Winter | text: THE BASE WROTE AGAIN · |
| `again` | `F52226` (+1.57 s) | Winter | text: THE BASE WROTE AGAIN · |
| `still` | `F52303` (+2.85 s) | Winter | text: STILL NOT COVERED · |
| `covered` | `F52362` (+3.83 s) | Winter | text: STILL NOT COVERED · |

**165** · OceanGate's logistics director said it would be discussed.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `OceanGate's` | `F52417` (+0.07 s) | Winter | text: LOGISTICS DIRECTOR: |
| `director` | `F52487` (+1.23 s) | Winter | text: LOGISTICS DIRECTOR: |
| `discussed` | `F52567` (+2.57 s) | Winter | <Wd f={f} at={wf(165, 'discussed')} tone={colors.amber}>"WILL BE DISCUSSED" · </ |

**166** · The board found no action followed.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `board` | `F52639` (+0.13 s) | Winter | text: THE BOARD: |
| `found` | `F52668` (+0.62 s) | Winter | text: THE BOARD: |
| `no` | `F52689` (+0.97 s) | (scene list) | sound effect cue |
| `followed` | `F52728` (+1.62 s) | Winter | text: NO ACTION FOLLOWED |

**167** · It stayed outside until the sixth of February, through temperatures from one point four to eighty-four point two degrees Fahrenheit, about minus seventeen to twenty-nine Celsius, through freezing rain, sleet and snow.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `stayed` | `F52786` (+0.17 s) | Winter | text: OUTSIDE UNTIL |
| `outside` | `F52807` (+0.52 s) | Winter | text: OUTSIDE UNTIL |
| `sixth` | `F52868` (+1.53 s) | Winter | DatePill · <DatePill f={f} fps={fps} day={6} month={2} year={2023} dayWord={wf(16 |
| `February` | `F52895` (+1.98 s) | Winter | DatePill · <DatePill f={f} fps={fps} day={6} month={2} year={2023} dayWord={wf(16 |
| `temperatures` | `F52952` (+2.93 s) | Winter | text: TEMPERATURES |
| `one` | `F53008` (+3.87 s) | Winter | lead · <span style={{...T(56, {color: colors.cyan, fontWeight: 700}), opacity |
| `four` | `F53038` (+4.37 s) | (scene list) | sound effect cue |
| `to` | `F53060` (+4.73 s) | Winter | lead · <span style={{...T(40, {color: colors.ink}), opacity: lead(f, wf(167,  |
| `eighty-four` | `F53074` (+4.97 s) | Winter | flash · <span style={{...T(56, {color: colors.amber, fontWeight: 700}), opacit |
| `two` | `F53125` (+5.82 s) | Winter | rollTo · const highF = rollTo(f, [{frame: wf(167, 'eighty-four') - 12, value: 4 |
| `Fahrenheit` | `F53163` (+6.45 s) | Winter | flash · <span style={{...T(56, {color: colors.amber, fontWeight: 700}), opacit |
| `minus` | `F53237` (+7.68 s) | Winter | <Wd f={f} at={wf(167, 'minus')} lightAt={wf(167, 'seventeen')} tone={colors.cyan |
| `seventeen` | `F53260` (+8.07 s) | Winter | <Wd f={f} at={wf(167, 'minus')} lightAt={wf(167, 'seventeen')} tone={colors.cyan |
| `twenty-nine` | `F53308` (+8.87 s) | Winter | <Wd f={f} at={wf(167, 'twenty-nine')} lightAt={wf(167, 'celsius')} tone={colors. |
| `Celsius` | `F53346` (+9.50 s) | Winter | <Wd f={f} at={wf(167, 'twenty-nine')} lightAt={wf(167, 'celsius')} tone={colors. |
| `freezing` | `F53418` (+10.70 s) | Winter | text: FREEZING RAIN · |
| `rain` | `F53447` (+11.18 s) | Winter | text: FREEZING RAIN · |
| `sleet` | `F53482` (+11.77 s) | Winter | text: SLEET · |
| `snow` | `F53528` (+12.53 s) | Winter | text: SNOW |

**168** · Brooks testified that what they really wanted was to bring Titan back to Everett, pull the insert, and look inside the hull for cracks.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Brooks` | `F53573` (+-0.02 s) | Winter | text: BROOKS: |
| `testified` | `F53594` (+0.33 s) | Winter | text: BROOKS: |
| `what` | `F53641` (+1.12 s) | Winter | text: WHAT THEY REALLY / WANTED: BRING IT |
| `really` | `F53665` (+1.52 s) | Winter | text: WHAT THEY REALLY / WANTED: BRING IT |
| `wanted` | `F53686` (+1.87 s) | Winter | text: WHAT THEY REALLY / WANTED: BRING IT |
| `bring` | `F53732` (+2.63 s) | Winter | text: WHAT THEY REALLY / WANTED: BRING IT |
| `back` | `F53774` (+3.33 s) | Winter | text: BACK TO EVERETT, |
| `Everett` | `F53800` (+3.77 s) | Winter | text: BACK TO EVERETT, |
| `pull` | `F53838` (+4.40 s) | Winter | text: PULL THE INSERT, |
| `insert` | `F53862` (+4.80 s) | Winter | text: PULL THE INSERT, |
| `look` | `F53909` (+5.58 s) | Winter | text: LOOK INSIDE FOR CRACKS |
| `cracks` | `F53980` (+6.77 s) | Winter | text: LOOK INSIDE FOR CRACKS |

**170** · Was money behind these decisions?

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Was` | `F54562` (+0.00 s) | Money | text: Was |
| `money` | `F54577` (+0.25 s) | Money | <Wd f={f} at={wf(170, 'money')} tone={colors.amber}>money </Wd> |
| `behind` | `F54595` (+0.55 s) | Money | <Wd f={f} at={wf(170, 'behind')} lightAt={wf(170, 'decisions')} base={colors.ink |
| `decisions` | `F54628` (+1.10 s) | Money | <Wd f={f} at={wf(170, 'behind')} lightAt={wf(170, 'decisions')} base={colors.ink |

**171** · The Coast Guard board says it was: in its words, a troubling prioritization of cost and time-saving measures over safety.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Coast` | `F54703` (+0.12 s) | Money | text: THE COAST GUARD BOARD: |
| `board` | `F54736` (+0.67 s) | Money | text: THE COAST GUARD BOARD: |
| `says` | `F54757` (+1.02 s) | Money | text: YES · |
| `was` | `F54778` (+1.37 s) | Money | text: YES · |
| `words` | `F54840` (+2.40 s) | Money | hl= · <RecordPage set="roi" start={sf(171) - 14} end={ef(172) + 20} hl={[{ke |
| `troubling` | `F54888` (+3.20 s) | (scene list) | sound effect cue |
| `prioritization` | `F54918` (+3.70 s) | Money | <Wd f={f} at={wf(171, 'troubling')} lightAt={wf(171, 'prioritization')} tone={co |
| `cost` | `F54992` (+4.93 s) | Money | text: COST AND TIME-SAVING MEASURES |
| `measures` | `F55076` (+6.33 s) | Money | text: COST AND TIME-SAVING MEASURES |
| `over` | `F55106` (+6.83 s) | Money | text: OVER SAFETY" · |
| `safety` | `F55124` (+7.13 s) | Money | text: OVER SAFETY" · |

**172** · The N - T - S - B's findings do not address money.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `N` | `F55191` (+0.22 s) | Money | text: THE N-T-S-B'S FINDINGS: |
| `findings` | `F55235` (+0.95 s) | Money | text: THE N-T-S-B'S FINDINGS: |
| `not` | `F55289` (+1.85 s) | Money | text: DO NOT ADDRESS MONEY |
| `money` | `F55334` (+2.60 s) | Money | text: DO NOT ADDRESS MONEY |

**173** · From June twenty twenty-two to May twenty twenty-three, the board found, the chief executive advanced the company one point eight five million dollars.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `June` | `F55393` (+0.27 s) | Money | text: JUN 2022 |
| `twenty-two` | `F55432` (+0.92 s) | Money | text: JUN 2022 |
| `May` | `F55492` (+1.92 s) | Money | <Wd f={f} at={wf(173, 'may')} lightAt={wf(173, 'twenty-three')} tone={colors.ink |
| `twenty-three` | `F55531` (+2.57 s) | Money | <Wd f={f} at={wf(173, 'may')} lightAt={wf(173, 'twenty-three')} tone={colors.ink |
| `board` | `F55609` (+3.87 s) | Money | text: THE BOARD FOUND: |
| `found` | `F55628` (+4.18 s) | Money | text: THE BOARD FOUND: |
| `chief` | `F55683` (+5.10 s) | Money | text: THE CEO ADVANCED THE COMPANY |
| `advanced` | `F55735` (+5.97 s) | Money | text: THE CEO ADVANCED THE COMPANY |
| `one` | `F55810` (+7.22 s) | Money | <Wd f={f} at={wf(173, 'one')} lightAt={wf(173, 'dollars')} tone={colors.amber} b |
| `eight` | `F55844` (+7.78 s) | Money | rollTo · const m185 = rollTo(f, [{frame: wf(173, 'one') - 10, value: 0}, {frame |
| `five` | `F55858` (+8.02 s) | Money | rollTo · const m185 = rollTo(f, [{frame: wf(173, 'one') - 10, value: 0}, {frame |
| `million` | `F55882` (+8.42 s) | (scene list) | sound effect cue |
| `dollars` | `F55907` (+8.83 s) | Money | <Wd f={f} at={wf(173, 'one')} lightAt={wf(173, 'dollars')} tone={colors.amber} b |

**174** · The board found that employees were asked to temporarily forgo their salaries, with a promise of back pay.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `employees` | `F56022` (+0.82 s) | Money | <Wd f={f} at={wf(174, 'employees')}> · EMPLOYEES </Wd> |
| `asked` | `F56072` (+1.65 s) | Money | text: ASKED TO FORGO / SALARIES · |
| `forgo` | `F56146` (+2.88 s) | Money | text: ASKED TO FORGO / SALARIES · |
| `salaries` | `F56191` (+3.63 s) | Money | text: ASKED TO FORGO / SALARIES · |
| `promise` | `F56250` (+4.62 s) | Money | text: BACK PAY PROMISED · |
| `pay` | `F56304` (+5.52 s) | Money | text: BROOKS: "THEY ASKED FOR VOLUNTEERS" · CG 112 P. 779 |

**175** · The ship that had carried Titan was unavailable for twenty twenty-three, the board found.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `ship` | `F56357` (+0.17 s) | Money | text: THE SHIP THAT HAD CARRIED TITAN: |
| `carried` | `F56391` (+0.73 s) | Money | text: THE SHIP THAT HAD CARRIED TITAN: |
| `unavailable` | `F56457` (+1.83 s) | Money | text: UNAVAILABLE FOR 2023 |
| `twenty-three` | `F56525` (+2.97 s) | Money | text: UNAVAILABLE FOR 2023 |
| `board` | `F56587` (+4.00 s) | Money | <Wd f={f} at={wf(175, 'board')} lightAt={wf(175, 'found')}> · THE BOARD</Wd> |
| `found` | `F56604` (+4.28 s) | Money | <Wd f={f} at={wf(175, 'board')} lightAt={wf(175, 'found')}> · THE BOARD</Wd> |

**176** · Titan would be towed to the site on its launch platform, behind a smaller ship.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `towed` | `F56697` (+0.67 s) | (scene list) | sound effect cue |
| `site` | `F56734` (+1.28 s) | Money | text: TOWED TO THE SITE |
| `launch` | `F56770` (+1.88 s) | Money | text: ON ITS LAUNCH PLATFORM, |
| `platform` | `F56789` (+2.20 s) | Money | text: ON ITS LAUNCH PLATFORM, |
| `behind` | `F56833` (+2.93 s) | Money | text: BEHIND A SMALLER SHIP |
| `smaller` | `F56861` (+3.40 s) | Money | const pp = span(f, wf(176, 'smaller') - 10, wf(176, 'ship') + 10); |
| `ship` | `F56887` (+3.83 s) | Money | text: BEHIND A SMALLER SHIP |

**177** · Early in twenty twenty-three, Brooks left.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Early` | `F56938` (+0.02 s) | Money | text: EARLY 2023: |
| `twenty-three` | `F56985` (+0.80 s) | Money | text: EARLY 2023: |
| `Brooks` | `F57046` (+1.82 s) | Money | text: BROOKS LEFT |
| `left` | `F57069` (+2.20 s) | (scene list) | sound effect cue |

**178** · Under oath, he said his main reason was that plan to tow Titan, which meant working on its platform in open seas, and that the reasons for it were economic.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Under` | `F57130` (+0.02 s) | Money | text: UNDER OATH · |
| `oath` | `F57149` (+0.33 s) | Money | text: UNDER OATH · |
| `main` | `F57219` (+1.50 s) | Money | text: HIS MAIN REASON: |
| `reason` | `F57236` (+1.78 s) | Money | text: HIS MAIN REASON: |
| `plan` | `F57284` (+2.58 s) | Money | text: THE PLAN TO TOW TITAN · |
| `tow` | `F57315` (+3.10 s) | Money | text: THE PLAN TO TOW TITAN · |
| `which` | `F57385` (+4.27 s) | Money | text: MEANING: / WORKING ON ITS PLATFORM |
| `meant` | `F57397` (+4.47 s) | Money | text: MEANING: / WORKING ON ITS PLATFORM |
| `working` | `F57411` (+4.70 s) | Money | text: MEANING: / WORKING ON ITS PLATFORM |
| `platform` | `F57451` (+5.37 s) | Money | text: MEANING: / WORKING ON ITS PLATFORM |
| `open` | `F57497` (+6.13 s) | Money | text: IN OPEN SEAS |
| `seas` | `F57518` (+6.48 s) | Money | text: IN OPEN SEAS |
| `reasons` | `F57587` (+7.63 s) | Money | text: THE REASONS: "ECONOMIC" |
| `economic` | `F57646` (+8.62 s) | Money | text: THE REASONS: "ECONOMIC" |

**181** · He said he suggested they not go, and was told that wasn't possible: they had people that paid.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `suggested` | `F58267` (+0.52 s) | Money | text: HE SUGGESTED THEY NOT GO · |
| `go` | `F58330` (+1.57 s) | Money | text: HE SUGGESTED THEY NOT GO · |
| `told` | `F58381` (+2.42 s) | Money | <Wd f={f} at={wf(181, 'told')} lightAt={wf(181, 'possible')} tone={colors.red}>" |
| `possible` | `F58425` (+3.15 s) | Money | <Wd f={f} at={wf(181, 'told')} lightAt={wf(181, 'possible')} tone={colors.red}>" |
| `people` | `F58504` (+4.47 s) | Money | <Wd f={f} at={wf(181, 'people')} lightAt={wf(181, 'paid')} tone={colors.amber} b |
| `paid` | `F58540` (+5.07 s) | Money | <Wd f={f} at={wf(181, 'people')} lightAt={wf(181, 'paid')} tone={colors.amber} b |

**182** · The board found that the chief executive then left the director of engineering post vacant, in its words, to ensure the twenty twenty-three expedition proceeded unhindered.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `board` | `F58602` (+0.12 s) | Money | text: THE BOARD: |
| `found` | `F58621` (+0.43 s) | Money | text: THE BOARD: |
| `chief` | `F58655` (+1.00 s) | Money | text: THE CEO LEFT |
| `executive` | `F58672` (+1.28 s) | Money | text: THE CEO LEFT |
| `director` | `F58747` (+2.53 s) | Money | text: THE DIRECTOR OF ENGINEERING POST |
| `post` | `F58816` (+3.68 s) | Money | text: THE DIRECTOR OF ENGINEERING POST |
| `vacant` | `F58842` (+4.12 s) | (scene list) | sound effect cue |
| `words` | `F58906` (+5.18 s) | Money | text: IN ITS WORDS: / EXPEDITION |
| `ensure` | `F58958` (+6.05 s) | Money | text: IN ITS WORDS: / EXPEDITION |
| `twenty-three` | `F59013` (+6.97 s) | Money | text: IN ITS WORDS: / EXPEDITION |
| `expedition` | `F59049` (+7.57 s) | Money | text: IN ITS WORDS: / EXPEDITION |
| `proceeded` | `F59090` (+8.25 s) | Money | text: PROCEEDED UNHINDERED" |
| `unhindered` | `F59133` (+8.97 s) | Money | text: PROCEEDED UNHINDERED" |

**183** · And the board drew the line back to twenty nineteen, when, by his own testimony, the first director of engineering had kept a damaged hull from an expedition.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `drew` | `F59232` (+0.52 s) | Money | text: THE LINE BACK TO |
| `line` | `F59250` (+0.82 s) | Money | text: THE LINE BACK TO |
| `twenty` | `F59291` (+1.50 s) | Money | text: 2019: |
| `nineteen` | `F59311` (+1.83 s) | Money | text: 2019: |
| `by` | `F59397` (+3.27 s) | Money | text: BY HIS OWN TESTIMONY, / THE FIRST DIRECTOR OF ENGINEERING |
| `own` | `F59417` (+3.60 s) | Money | text: BY HIS OWN TESTIMONY, / THE FIRST DIRECTOR OF ENGINEERING |
| `testimony` | `F59429` (+3.80 s) | Money | bump · <Chip text="BY HIS OWN TESTIMONY (2019)" tone={colors.cyan} size={28}  |
| `first` | `F59499` (+4.97 s) | Money | text: BY HIS OWN TESTIMONY, / THE FIRST DIRECTOR OF ENGINEERING |
| `engineering` | `F59548` (+5.78 s) | Money | text: BY HIS OWN TESTIMONY, / THE FIRST DIRECTOR OF ENGINEERING |
| `kept` | `F59594` (+6.55 s) | Money | text: KEPT / A DAMAGED HULL |
| `damaged` | `F59619` (+6.97 s) | Money | text: KEPT / A DAMAGED HULL |
| `hull` | `F59652` (+7.52 s) | Money | text: KEPT / A DAMAGED HULL |
| `expedition` | `F59690` (+8.15 s) | Money | text: KEPT / A DAMAGED HULL |

**184** · Leaving the post empty, it wrote, removed the possibility of a replacement director blocking the expedition.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Leaving` | `F59762` (+0.05 s) | Money | text: THE EMPTY POST |
| `empty` | `F59812` (+0.88 s) | Money | text: THE EMPTY POST |
| `removed` | `F59892` (+2.22 s) | Money | text: REMOVED THE POSSIBILITY |
| `possibility` | `F59924` (+2.75 s) | Money | text: REMOVED THE POSSIBILITY |
| `replacement` | `F59979` (+3.67 s) | Money | text: OF A REPLACEMENT BLOCKING IT |
| `blocking` | `F60048` (+4.82 s) | Money | text: OF A REPLACEMENT BLOCKING IT |

**185** · That spring, at sea and in port, the platform tipped more than once.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `spring` | `F60173` (+0.23 s) | Tipping | text: SPRING 2023 · |
| `sea` | `F60230` (+1.18 s) | Tipping | text: AT SEA |
| `port` | `F60268` (+1.82 s) | Tipping | text: AND IN PORT: |
| `platform` | `F60314` (+2.58 s) | Tipping | text: THE PLATFORM TIPPED |
| `tipped` | `F60351` (+3.20 s) | (scene list) | sound effect cue |
| `more` | `F60378` (+3.65 s) | Tipping | text: MORE THAN ONCE |
| `once` | `F60404` (+4.08 s) | Tipping | text: MORE THAN ONCE |

**186** · Once, in May, its bow went partly under water, and Titan's tail cone was lost.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Once` | `F60456` (+0.10 s) | Tipping | const tilt = span(f, wf(185, 'tipped') - 4, wf(185, 'tipped') + 18) * (1 - span( |
| `May` | `F60494` (+0.73 s) | Tipping | DatePill · <DatePill f={f} fps={fps} day={24} month={5} year={2023} dayWord={wf(1 |
| `bow` | `F60543` (+1.55 s) | Tipping | text: ITS BOW PARTLY UNDER WATER · |
| `under` | `F60602` (+2.53 s) | Tipping | const under = span(f, wf(186, 'under') - 6, wf(186, 'water') + 12); |
| `water` | `F60617` (+2.78 s) | Tipping | text: ITS BOW PARTLY UNDER WATER · |
| `Titan's` | `F60660` (+3.50 s) | Tipping | text: TITAN'S TAIL CONE: |
| `cone` | `F60707` (+4.28 s) | Tipping | text: TITAN'S TAIL CONE: |
| `lost` | `F60738` (+4.80 s) | (scene list) | sound effect cue |

**187** · How was a hull like this allowed to carry passengers?

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `How` | `F60798` (+0.03 s) | Law | text: How was a hull like this |
| `allowed` | `F60887` (+1.52 s) | Law | <Wd f={f} at={wf(187, 'allowed')} tone={colors.amber}>allowed </Wd> |
| `carry` | `F60914` (+1.97 s) | Law | <Wd f={f} at={wf(187, 'carry')} lightAt={wf(187, 'passengers')} tone={colors.amb |
| `passengers` | `F60934` (+2.30 s) | Law | <Wd f={f} at={wf(187, 'carry')} lightAt={wf(187, 'passengers')} tone={colors.amb |

**188** · By the N - T - S - B's reading of the law, it was not.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `N` | `F61040` (+0.57 s) | Law | text: BY THE NTSB'S READING / OF THE LAW: |
| `reading` | `F61097` (+1.52 s) | Law | text: BY THE NTSB'S READING / OF THE LAW: |
| `law` | `F61134` (+2.13 s) | Law | text: BY THE NTSB'S READING / OF THE LAW: |
| `not` | `F61193` (+3.12 s) | (scene list) | sound effect cue |

**189** · Under U - S law, the N - T - S - B notes, a submersible carrying even one passenger for hire is a small passenger vessel, and must be inspected by the Coast Guard.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `U` | `F61295` (+0.37 s) | Law | text: U.S. LAW, |
| `law` | `F61318` (+0.75 s) | Law | text: U.S. LAW, |
| `N` | `F61365` (+1.53 s) | Law | text: AS THE N-T-S-B NOTES: |
| `notes` | `F61406` (+2.22 s) | Law | text: AS THE N-T-S-B NOTES: |
| `submersible` | `F61454` (+3.02 s) | Law | text: A SUBMERSIBLE CARRYING |
| `carrying` | `F61494` (+3.68 s) | Law | text: A SUBMERSIBLE CARRYING |
| `even` | `F61525` (+4.20 s) | Law | text: EVEN ONE |
| `one` | `F61550` (+4.62 s) | Law | text: EVEN ONE |
| `passenger` | `F61562` (+4.82 s) | Law | text: PASSENGER FOR HIRE |
| `hire` | `F61605` (+5.53 s) | Law | text: PASSENGER FOR HIRE |
| `is` | `F61633` (+6.00 s) | Law | <Wd f={f} at={wf(189, 'is')} lightAt={wf(189, 'vessel')}>= A SMALL PASSENGER VES |
| `vessel` | `F61703` (+7.17 s) | Law | <Wd f={f} at={wf(189, 'is')} lightAt={wf(189, 'vessel')}>= A SMALL PASSENGER VES |
| `must` | `F61752` (+7.98 s) | Law | text: MUST BE INSPECTED |
| `inspected` | `F61774` (+8.35 s) | Law | text: MUST BE INSPECTED |
| `by` | `F61807` (+8.90 s) | Law | text: BY THE COAST GUARD |
| `Guard` | `F61840` (+9.45 s) | Law | text: BY THE COAST GUARD |

**190** · OceanGate never registered Titan, and never arranged an inspection.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `OceanGate` | `F61888` (+0.05 s) | Law | text: OCEANGATE · TITAN · USCG MBI REPORT; NTSB MIR-25-36 |
| `registered` | `F61948` (+1.05 s) | (scene list) | sound effect cue |
| `Titan` | `F61981` (+1.60 s) | Law | text: OCEANGATE · TITAN · USCG MBI REPORT; NTSB MIR-25-36 |
| `arranged` | `F62050` (+2.75 s) | Law | <Chip text={f >= wf(190, 'arranged') ? 'NO INSPECTION ARRANGED' : 'NO INSPECTION |
| `inspection` | `F62085` (+3.33 s) | Law | bump · <span style={{opacity: lead(f, wf(190, 'inspection'), 8), transform: ` |

**191** · The Coast Guard board found that OceanGate described its paying passengers as mission specialists, with mandatory duties, to conceal that they were paying passengers.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `board` | `F62194` (+0.68 s) | Law | text: THE BOARD FOUND: |
| `found` | `F62215` (+1.03 s) | Law | text: THE BOARD FOUND: |
| `OceanGate` | `F62242` (+1.48 s) | Law | text: OCEANGATE DESCRIBED / PAYING PASSENGERS AS |
| `described` | `F62275` (+2.03 s) | Law | text: OCEANGATE DESCRIBED / PAYING PASSENGERS AS |
| `paying` | `F62319` (+2.77 s) | Law | text: OCEANGATE DESCRIBED / PAYING PASSENGERS AS |
| `passengers` | `F62341` (+3.13 s) | Law | text: OCEANGATE DESCRIBED / PAYING PASSENGERS AS |
| `mission` | `F62412` (+4.32 s) | Law | <Wd f={f} at={wf(191, 'mission')} lightAt={wf(191, 'specialists')} tone={colors. |
| `specialists` | `F62440` (+4.78 s) | Law | <Wd f={f} at={wf(191, 'mission')} lightAt={wf(191, 'specialists')} tone={colors. |
| `mandatory` | `F62505` (+5.87 s) | Law | text: WITH MANDATORY DUTIES · |
| `duties` | `F62544` (+6.52 s) | Law | text: WITH MANDATORY DUTIES · |
| `conceal` | `F62598` (+7.42 s) | (scene list) | sound effect cue |
| `they` | `F62645` (+8.20 s) | Law | text: TO CONCEAL / THAT THEY WERE PAYING PASSENGERS |
| `passengers` | `F62688` (+8.92 s) | Law | text: TO CONCEAL / THAT THEY WERE PAYING PASSENGERS |

**192** · The regulator's own guidance gets the same scrutiny.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `regulator's` | `F62766` (+0.12 s) | Law | text: THE REGULATOR'S OWN GUIDANCE: |
| `guidance` | `F62822` (+1.05 s) | Law | text: THE REGULATOR'S OWN GUIDANCE: |
| `same` | `F62873` (+1.90 s) | Law | text: THE SAME SCRUTINY |
| `scrutiny` | `F62891` (+2.20 s) | Law | text: THE SAME SCRUTINY |

**193** · The Coast Guard's voluntary guidance for passenger submersibles was published in July nineteen ninety-three.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Coast` | `F62956` (+0.12 s) | Law | lead · <g opacity={lead(f, wf(193, 'coast'), 8)}> |
| `voluntary` | `F62995` (+0.77 s) | Law | text: VOLUNTARY GUIDANCE |
| `passenger` | `F63066` (+1.95 s) | Law | text: NVIC 05-93 · / PASSENGER SUBMERSIBLES |
| `submersibles` | `F63097` (+2.47 s) | Law | text: NVIC 05-93 · / PASSENGER SUBMERSIBLES |
| `published` | `F63154` (+3.42 s) | Law | text: PUBLISHED |
| `July` | `F63191` (+4.03 s) | Law | lead · <line x1={X(1993) - 20} x2={X(1993) + 60} y1={520} y2={520} stroke={co |
| `nineteen` | `F63216` (+4.45 s) | Law | text: JUL / 1993 |
| `ninety-three` | `F63245` (+4.93 s) | Law | text: JUL / 1993 |

**194** · That December, a new law changed the definition, to cover any submersible with one passenger for hire.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `December` | `F63327` (+0.20 s) | (scene list) | sound effect cue |
| `law` | `F63399` (+1.40 s) | Law | text: DEC 1993 · / A NEW LAW |
| `definition` | `F63446` (+2.18 s) | Law | text: DEC 1993 · / A NEW LAW |
| `cover` | `F63509` (+3.23 s) | Law | text: ANY / SUBMERSIBLE |
| `submersible` | `F63551` (+3.93 s) | Law | text: ANY / SUBMERSIBLE |
| `one` | `F63609` (+4.90 s) | Law | text: ANY / SUBMERSIBLE |

**195** · As of its report in October twenty twenty-five, the N - T - S - B found, the guidance had never been updated to match.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `October` | `F63773` (+0.98 s) | Law | lead · <g opacity={lead(f, wf(195, 'october'), 8)}> |
| `twenty-five` | `F63821` (+1.78 s) | Law | <line x1={X(1993)} x2={X(1993) + (X(2025) - X(1993)) * span(f, wf(195, 'october' |
| `N` | `F63899` (+3.08 s) | Law | text: N-T-S-B · |
| `found` | `F63941` (+3.78 s) | Law | text: N-T-S-B · |
| `never` | `F64026` (+5.20 s) | Law | text: GUIDANCE NEVER UPDATED |
| `updated` | `F64056` (+5.70 s) | Law | text: NOT UPDATED TO MATCH · |
| `match` | `F64095` (+6.35 s) | Law | text: NOT UPDATED TO MATCH · |

**196** · The Coast Guard, it found, had no specific inspection standards for how a submersible is designed or built.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Coast` | `F64155` (+0.10 s) | Law | text: THE COAST GUARD: / NO SPECIFIC |
| `found` | `F64207` (+0.97 s) | Law | text: THE COAST GUARD: / NO SPECIFIC |
| `no` | `F64259` (+1.83 s) | Law | text: THE COAST GUARD: / NO SPECIFIC |
| `specific` | `F64272` (+2.05 s) | Law | text: THE COAST GUARD: / NO SPECIFIC |
| `inspection` | `F64306` (+2.62 s) | Law | text: THE COAST GUARD: / NO SPECIFIC |
| `standards` | `F64341` (+3.20 s) | Law | text: THE COAST GUARD: / NO SPECIFIC |
| `how` | `F64381` (+3.87 s) | Law | text: THE COAST GUARD: / NO SPECIFIC |
| `designed` | `F64448` (+4.98 s) | Law | text: FOR HOW A SUBMERSIBLE IS DESIGNED OR BUILT |
| `built` | `F64497` (+5.80 s) | Law | text: FOR HOW A SUBMERSIBLE IS DESIGNED OR BUILT |

**197** · That guidance also recommended that a submersible dive no deeper than its rescue could reach.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `guidance` | `F64547` (+0.28 s) | Law | text: THE GUIDANCE RECOMMENDED: |
| `recommended` | `F64604` (+1.23 s) | Law | text: THE GUIDANCE RECOMMENDED: |
| `submersible` | `F64660` (+2.17 s) | Law | text: DIVE / NO DEEPER THAN RESCUE CAN REACH |
| `dive` | `F64707` (+2.95 s) | Law | text: DIVE / NO DEEPER THAN RESCUE CAN REACH |
| `deeper` | `F64754` (+3.73 s) | Law | text: DIVE / NO DEEPER THAN RESCUE CAN REACH |
| `rescue` | `F64801` (+4.52 s) | Law | text: 45 M · WHERE ITS RESCUE IS EFFECTIVE (NVIC 05-93) |
| `reach` | `F64844` (+5.23 s) | Law | text: DIVE / NO DEEPER THAN RESCUE CAN REACH |

**198** · The N - T - S - B found that Titan regularly dived to the Titanic with no rescue standing by that could reach it.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `N` | `F64913` (+0.32 s) | Law | text: N-T-S-B: |
| `found` | `F64974` (+1.33 s) | Law | text: N-T-S-B: |
| `Titan` | `F65001` (+1.78 s) | Law | text: TITAN REGULARLY DIVED THERE |
| `regularly` | `F65037` (+2.38 s) | Law | <rect x={1560} y={340} width={70} height={480 * span(f, wf(198, 'regularly') - 6 |
| `dived` | `F65072` (+2.97 s) | Law | text: TITAN REGULARLY DIVED THERE |
| `Titanic` | `F65108` (+3.57 s) | Law | text: 3,840 M · THE TITANIC |
| `no` | `F65165` (+4.52 s) | Law | text: WITH NO RESCUE |
| `rescue` | `F65182` (+4.80 s) | Law | text: WITH NO RESCUE |
| `standing` | `F65210` (+5.27 s) | Law | text: STANDING BY THAT COULD REACH IT |
| `reach` | `F65277` (+6.38 s) | Law | text: STANDING BY THAT COULD REACH IT |

**199** · The N - T - S - B found that voluntary guidance and the rules for small passenger vessels were insufficient to make OceanGate follow the industry's established standards.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `N` | `F65352` (+0.28 s) | Law | text: N-T-S-B: |
| `found` | `F65406` (+1.18 s) | Law | text: N-T-S-B: |
| `voluntary` | `F65436` (+1.68 s) | Law | text: VOLUNTARY GUIDANCE |
| `guidance` | `F65469` (+2.23 s) | Law | text: VOLUNTARY GUIDANCE |
| `rules` | `F65523` (+3.13 s) | Law | text: AND SMALL-PASSENGER-VESSEL RULES |
| `vessels` | `F65607` (+4.53 s) | Law | text: AND SMALL-PASSENGER-VESSEL RULES |
| `insufficient` | `F65652` (+5.28 s) | (scene list) | sound effect cue |
| `make` | `F65712` (+6.28 s) | Law | text: TO MAKE OCEANGATE |
| `OceanGate` | `F65728` (+6.55 s) | Law | text: TO MAKE OCEANGATE |
| `follow` | `F65766` (+7.18 s) | Law | text: FOLLOW THE INDUSTRY'S / STANDARDS |
| `industry's` | `F65796` (+7.68 s) | Law | text: FOLLOW THE INDUSTRY'S / STANDARDS |
| `established` | `F65829` (+8.23 s) | Law | text: FOLLOW THE INDUSTRY'S / STANDARDS |
| `standards` | `F65867` (+8.87 s) | Law | text: FOLLOW THE INDUSTRY'S / STANDARDS |

