# Choreography index: Act 3c

Word-level choreography (PLAYBOOK §10.6), **generated from the scene code** (`python3 scripts/choreo_index.py` from the film folder; re-run after
any edit) so it cannot drift from it. One row per word-locked event: the spoken trigger, its measured frame (60 fps) and offset
from the sentence start, the scene component, and what changes (the on-screen text that arrives, or the driving line of
code). Kit: `lib/remotion/Kinetic.tsx` and `remotion/beats.tsx` (`KeyLine` parts land on their words, `ChunkQuote` reveals a
record quote chunk by chunk, `WordLine` builds a title word by word). Kit for this film: `remotion/parts*.tsx`.
Sync audit: `review/sync_audit.md`.

**160** · Then it had to spend the winter somewhere.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `spend` | `F52502` (+0.92 s) | Winter | text: THE WINTER: |
| `winter` | `F52527` (+1.33 s) | Winter | text: THE WINTER: |
| `somewhere` | `F52550` (+1.72 s) | Winter | text: SOMEWHERE |

**161** · On the twenty-sixth of July, Titan was set down in a parking lot at a marine base in Saint John's, Newfoundland.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `twenty-sixth` | `F52615` (+0.22 s) | Winter | DatePill · <DatePill f={f} fps={fps} day={26} month={7} year={2022} dayWord={wf(1 |
| `July` | `F52660` (+0.97 s) | Winter | DatePill · <DatePill f={f} fps={fps} day={26} month={7} year={2022} dayWord={wf(1 |
| `Titan` | `F52702` (+1.67 s) | Winter | text: TITAN, SET DOWN |
| `set` | `F52737` (+2.25 s) | Winter | text: TITAN, SET DOWN |
| `parking` | `F52779` (+2.95 s) | Winter | text: IN A PARKING LOT · |
| `lot` | `F52808` (+3.43 s) | Winter | text: IN A PARKING LOT · |
| `marine` | `F52834` (+3.87 s) | Winter | text: A MARINE BASE · |
| `base` | `F52859` (+4.28 s) | Winter | text: A MARINE BASE · |
| `Saint` | `F52893` (+4.85 s) | Winter | text: ST. JOHN'S |
| `Newfoundland` | `F52935` (+5.55 s) | Winter | text: ST. JOHN'S |

**162** · Uncovered.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Uncovered` | `F53003` (+0.02 s) | (scene list) | sound effect cue |

**163** · Two days later, the base passed on a quote for a protective cover: one thousand seven hundred and fifty Canadian dollars.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Two` | `F53069` (+0.00 s) | Winter | lead · <div style={{position: 'absolute', right: 96, top: 84, display: 'flex' |
| `later` | `F53098` (+0.48 s) | Winter | DatePill · <DatePill f={f} fps={fps} day={28} month={7} year={2022} dayWord={wf(1 |
| `base` | `F53142` (+1.22 s) | Winter | text: THE BASE PASSED ON |
| `passed` | `F53161` (+1.53 s) | Winter | text: THE BASE PASSED ON |
| `quote` | `F53194` (+2.08 s) | (scene list) | sound effect cue |
| `protective` | `F53232` (+2.72 s) | Winter | hl= · <RecordPage set="roi" start={sf(163) - 12} end={ef(167) + 20} page={32 |
| `cover` | `F53269` (+3.33 s) | Winter | text: A QUOTE FOR A COVER: |
| `one` | `F53317` (+4.13 s) | Winter | bump · <span style={{...T(44, {color: f >= wf(163, 'fifty') + LAND ? colors.a |
| `thousand` | `F53328` (+4.32 s) | Winter | rollTo · const cad = Math.round(rollTo(f, [{frame: wf(163, 'one') - 10, value:  |
| `seven` | `F53359` (+4.83 s) | Winter | rollTo · const cad = Math.round(rollTo(f, [{frame: wf(163, 'one') - 10, value:  |
| `fifty` | `F53404` (+5.58 s) | (scene list) | sound effect cue |
| `Canadian` | `F53426` (+5.95 s) | Winter | text: CA$1,750 · |
| `dollars` | `F53459` (+6.50 s) | Winter | text: CA$1,750 · |

**164** · The base told the Coast Guard board that OceanGate never answered that email.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `told` | `F53537` (+0.40 s) | Winter | text: IT TOLD THE BOARD: |
| `board` | `F53594` (+1.35 s) | Winter | text: IT TOLD THE BOARD: |
| `OceanGate` | `F53625` (+1.87 s) | Winter | text: NEVER ANSWERED |
| `never` | `F53665` (+2.53 s) | Winter | hl= · <RecordPage set="roi" start={sf(163) - 12} end={ef(167) + 20} page={32 |
| `answered` | `F53687` (+2.90 s) | Winter | text: NEVER ANSWERED |
| `email` | `F53723` (+3.50 s) | Winter | <Wd f={f} at={wf(164, 'email')}> THAT EMAIL</Wd> |

**165** · In September, the base wrote again: Titan still had not been covered.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `September` | `F53783` (+0.15 s) | Winter | text: SEPTEMBER: |
| `wrote` | `F53852` (+1.30 s) | Winter | text: THE BASE WROTE AGAIN · |
| `again` | `F53868` (+1.57 s) | Winter | text: THE BASE WROTE AGAIN · |
| `still` | `F53944` (+2.83 s) | Winter | text: STILL NOT COVERED · |
| `covered` | `F54003` (+3.82 s) | Winter | text: STILL NOT COVERED · |

**166** · OceanGate's logistics director said it would be discussed.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `OceanGate's` | `F54058` (+0.05 s) | Winter | text: LOGISTICS DIRECTOR: |
| `director` | `F54128` (+1.22 s) | Winter | text: LOGISTICS DIRECTOR: |
| `discussed` | `F54208` (+2.55 s) | Winter | <Wd f={f} at={wf(166, 'discussed')} tone={colors.amber}>"WILL BE DISCUSSED" · </ |

**167** · The board found no action followed.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `board` | `F54280` (+0.12 s) | Winter | text: THE BOARD: |
| `found` | `F54309` (+0.60 s) | Winter | text: THE BOARD: |
| `no` | `F54331` (+0.97 s) | (scene list) | sound effect cue |
| `followed` | `F54369` (+1.60 s) | Winter | text: NO ACTION FOLLOWED |

**168** · It stayed outside until the sixth of February, through temperatures from one point four to eighty-four point two degrees Fahrenheit, about minus seventeen to twenty-nine Celsius, through freezing rain, sleet and snow.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `stayed` | `F54428` (+0.18 s) | Winter | text: OUTSIDE UNTIL |
| `outside` | `F54448` (+0.52 s) | Winter | text: OUTSIDE UNTIL |
| `sixth` | `F54510` (+1.55 s) | Winter | DatePill · <DatePill f={f} fps={fps} day={6} month={2} year={2023} dayWord={wf(16 |
| `February` | `F54536` (+1.98 s) | Winter | DatePill · <DatePill f={f} fps={fps} day={6} month={2} year={2023} dayWord={wf(16 |
| `temperatures` | `F54594` (+2.95 s) | Winter | text: TEMPERATURES |
| `one` | `F54649` (+3.87 s) | Winter | lead · <span style={{...T(56, {color: f >= wf(168, 'four') + LAND ? colors.cy |
| `four` | `F54679` (+4.37 s) | (scene list) | sound effect cue |
| `to` | `F54702` (+4.75 s) | Winter | lead · <span style={{...T(40, {color: colors.ink}), opacity: lead(f, wf(168,  |
| `eighty-four` | `F54715` (+4.97 s) | Winter | flash · <span style={{...T(56, {color: f >= wf(168, 'two') + LAND ? colors.amb |
| `two` | `F54767` (+5.83 s) | Winter | flash · <span style={{...T(56, {color: f >= wf(168, 'two') + LAND ? colors.amb |
| `Fahrenheit` | `F54804` (+6.45 s) | Winter | flash · <span style={{...T(56, {color: f >= wf(168, 'two') + LAND ? colors.amb |
| `minus` | `F54878` (+7.68 s) | Winter | <Wd f={f} at={wf(168, 'minus')} lightAt={wf(168, 'seventeen')} tone={colors.cyan |
| `seventeen` | `F54901` (+8.07 s) | Winter | <Wd f={f} at={wf(168, 'minus')} lightAt={wf(168, 'seventeen')} tone={colors.cyan |
| `twenty-nine` | `F54949` (+8.87 s) | Winter | <Wd f={f} at={wf(168, 'twenty-nine')} lightAt={wf(168, 'celsius')} tone={colors. |
| `Celsius` | `F54988` (+9.52 s) | Winter | <Wd f={f} at={wf(168, 'twenty-nine')} lightAt={wf(168, 'celsius')} tone={colors. |
| `freezing` | `F55060` (+10.72 s) | Winter | text: FREEZING RAIN · |
| `rain` | `F55089` (+11.20 s) | Winter | text: FREEZING RAIN · |
| `sleet` | `F55124` (+11.78 s) | Winter | text: SLEET · |
| `snow` | `F55169` (+12.53 s) | Winter | text: SNOW |

**169** · Brooks testified that what they really wanted was to bring Titan back to Everett, pull the insert, and look inside the hull for cracks.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Brooks` | `F55215` (+-0.02 s) | Winter | text: BROOKS: |
| `testified` | `F55235` (+0.32 s) | Winter | text: BROOKS: |
| `what` | `F55282` (+1.10 s) | Winter | text: WHAT THEY REALLY / WANTED: BRING IT |
| `really` | `F55306` (+1.50 s) | Winter | text: WHAT THEY REALLY / WANTED: BRING IT |
| `wanted` | `F55328` (+1.87 s) | Winter | text: WHAT THEY REALLY / WANTED: BRING IT |
| `bring` | `F55373` (+2.62 s) | Winter | text: WHAT THEY REALLY / WANTED: BRING IT |
| `back` | `F55416` (+3.33 s) | Winter | text: BACK TO EVERETT, |
| `Everett` | `F55441` (+3.75 s) | Winter | text: BACK TO EVERETT, |
| `pull` | `F55479` (+4.38 s) | Winter | text: PULL THE INSERT, |
| `insert` | `F55503` (+4.78 s) | Winter | text: PULL THE INSERT, |
| `look` | `F55550` (+5.57 s) | Winter | text: LOOK INSIDE FOR CRACKS |
| `cracks` | `F55621` (+6.75 s) | Winter | text: LOOK INSIDE FOR CRACKS |

**171** · Was money behind these decisions?

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Was` | `F56204` (+0.00 s) | Money | text: Was |
| `money` | `F56218` (+0.23 s) | Money | <Wd f={f} at={wf(171, 'money')} tone={colors.amber}>money </Wd> |
| `behind` | `F56236` (+0.53 s) | Money | <Wd f={f} at={wf(171, 'behind')} lightAt={wf(171, 'decisions')} base={colors.ink |
| `decisions` | `F56270` (+1.10 s) | Money | <Wd f={f} at={wf(171, 'behind')} lightAt={wf(171, 'decisions')} base={colors.ink |

**172** · The Coast Guard board says it was: in its words, a troubling prioritization of cost and time-saving measures over safety.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Coast` | `F56344` (+0.12 s) | Money | text: THE COAST GUARD BOARD: |
| `board` | `F56377` (+0.67 s) | Money | text: THE COAST GUARD BOARD: |
| `says` | `F56398` (+1.02 s) | Money | text: YES · |
| `was` | `F56420` (+1.38 s) | Money | text: YES · |
| `words` | `F56481` (+2.40 s) | Money | hl= · <RecordPage set="roi" start={sf(172) - 14} end={ef(173) + 20} hl={[{ke |
| `troubling` | `F56529` (+3.20 s) | (scene list) | sound effect cue |
| `prioritization` | `F56559` (+3.70 s) | Money | <Wd f={f} at={wf(172, 'troubling')} lightAt={wf(172, 'prioritization')} tone={co |
| `cost` | `F56634` (+4.95 s) | Money | text: COST AND TIME-SAVING MEASURES |
| `measures` | `F56718` (+6.35 s) | Money | text: COST AND TIME-SAVING MEASURES |
| `over` | `F56748` (+6.85 s) | Money | text: OVER SAFETY" · |
| `safety` | `F56766` (+7.15 s) | Money | text: OVER SAFETY" · |

**173** · The N - T - S - B's findings do not address money.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `N` | `F56832` (+0.22 s) | Money | text: THE NTSB'S FINDINGS: |
| `findings` | `F56877` (+0.97 s) | Money | text: THE NTSB'S FINDINGS: |
| `not` | `F56931` (+1.87 s) | Money | text: DO NOT ADDRESS MONEY |
| `money` | `F56975` (+2.60 s) | Money | text: DO NOT ADDRESS MONEY |

**174** · From June twenty twenty-two to May twenty twenty-three, the board found, the chief executive advanced the company one point eight five million dollars.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `June` | `F57034` (+0.27 s) | Money | text: JUN 2022 |
| `twenty-two` | `F57074` (+0.93 s) | Money | text: JUN 2022 |
| `May` | `F57134` (+1.93 s) | Money | <Wd f={f} at={wf(174, 'may')} lightAt={wf(174, 'twenty-three')} tone={colors.ink |
| `twenty-three` | `F57172` (+2.57 s) | Money | <Wd f={f} at={wf(174, 'may')} lightAt={wf(174, 'twenty-three')} tone={colors.ink |
| `board` | `F57250` (+3.87 s) | Money | text: THE BOARD FOUND: |
| `found` | `F57269` (+4.18 s) | Money | text: THE BOARD FOUND: |
| `chief` | `F57325` (+5.12 s) | Money | text: THE CEO ADVANCED THE COMPANY |
| `advanced` | `F57376` (+5.97 s) | Money | text: THE CEO ADVANCED THE COMPANY |
| `one` | `F57451` (+7.22 s) | Money | <Wd f={f} at={wf(174, 'one')} lightAt={wf(174, 'dollars')} tone={colors.amber} b |
| `eight` | `F57486` (+7.80 s) | Money | rollTo · const m185 = rollTo(f, [{frame: wf(174, 'one') - 10, value: 0}, {frame |
| `five` | `F57499` (+8.02 s) | Money | rollTo · const m185 = rollTo(f, [{frame: wf(174, 'one') - 10, value: 0}, {frame |
| `million` | `F57523` (+8.42 s) | (scene list) | sound effect cue |
| `dollars` | `F57548` (+8.83 s) | Money | <Wd f={f} at={wf(174, 'one')} lightAt={wf(174, 'dollars')} tone={colors.amber} b |

**175** · The board found that employees were asked to temporarily forgo their salaries, with a promise of back pay.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `employees` | `F57664` (+0.83 s) | Money | <Wd f={f} at={wf(175, 'employees')}> · EMPLOYEES </Wd> |
| `asked` | `F57713` (+1.65 s) | Money | text: ASKED TO FORGO / SALARIES · |
| `forgo` | `F57788` (+2.90 s) | Money | text: ASKED TO FORGO / SALARIES · |
| `salaries` | `F57832` (+3.63 s) | Money | text: ASKED TO FORGO / SALARIES · |
| `promise` | `F57891` (+4.62 s) | Money | text: BACK PAY PROMISED · |
| `pay` | `F57945` (+5.52 s) | Money | text: BROOKS: "THEY ASKED FOR VOLUNTEERS" · CG 112 P. 779 |

**176** · The ship that had carried Titan was unavailable for twenty twenty-three, the board found.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `ship` | `F57998` (+0.15 s) | Money | text: THE SHIP THAT HAD CARRIED TITAN: |
| `carried` | `F58031` (+0.70 s) | Money | text: THE SHIP THAT HAD CARRIED TITAN: |
| `unavailable` | `F58098` (+1.82 s) | Money | text: UNAVAILABLE FOR 2023 |
| `twenty-three` | `F58167` (+2.97 s) | Money | text: UNAVAILABLE FOR 2023 |
| `board` | `F58228` (+3.98 s) | Money | <Wd f={f} at={wf(176, 'board')} lightAt={wf(176, 'found')}> · THE BOARD</Wd> |
| `found` | `F58245` (+4.27 s) | Money | <Wd f={f} at={wf(176, 'board')} lightAt={wf(176, 'found')}> · THE BOARD</Wd> |

**177** · Titan would be towed to the site on its launch platform, behind a smaller ship.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `towed` | `F58338` (+0.65 s) | (scene list) | sound effect cue |
| `site` | `F58376` (+1.28 s) | Money | text: TOWED TO THE SITE |
| `launch` | `F58412` (+1.88 s) | Money | text: ON ITS LAUNCH PLATFORM, |
| `platform` | `F58430` (+2.18 s) | Money | text: ON ITS LAUNCH PLATFORM, |
| `behind` | `F58474` (+2.92 s) | Money | text: BEHIND A SMALLER SHIP |
| `smaller` | `F58502` (+3.38 s) | Money | const pp = span(f, wf(177, 'smaller') - 10, wf(177, 'ship') + 10); |
| `ship` | `F58529` (+3.83 s) | Money | text: BEHIND A SMALLER SHIP |

**178** · Early in twenty twenty-three, Brooks left.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Early` | `F58579` (+0.02 s) | Money | text: EARLY 2023: |
| `twenty-three` | `F58626` (+0.80 s) | Money | text: EARLY 2023: |
| `Brooks` | `F58688` (+1.83 s) | Money | text: BROOKS LEFT |
| `left` | `F58711` (+2.22 s) | (scene list) | sound effect cue |

**179** · Under oath, he said his main reason was that plan to tow Titan, which meant working on its platform in open seas, and that the reasons for it were economic.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Under` | `F58772` (+0.03 s) | Money | text: UNDER OATH · |
| `oath` | `F58791` (+0.35 s) | Money | text: UNDER OATH · |
| `main` | `F58860` (+1.50 s) | Money | text: HIS MAIN REASON: |
| `reason` | `F58877` (+1.78 s) | Money | text: HIS MAIN REASON: |
| `plan` | `F58925` (+2.58 s) | Money | text: THE PLAN TO TOW TITAN · |
| `tow` | `F58957` (+3.12 s) | Money | text: THE PLAN TO TOW TITAN · |
| `which` | `F59026` (+4.27 s) | Money | text: MEANING: / WORKING ON ITS PLATFORM |
| `meant` | `F59038` (+4.47 s) | Money | text: MEANING: / WORKING ON ITS PLATFORM |
| `working` | `F59053` (+4.72 s) | Money | text: MEANING: / WORKING ON ITS PLATFORM |
| `platform` | `F59092` (+5.37 s) | Money | text: MEANING: / WORKING ON ITS PLATFORM |
| `open` | `F59138` (+6.13 s) | Money | text: IN OPEN SEAS |
| `seas` | `F59160` (+6.50 s) | Money | text: IN OPEN SEAS |
| `reasons` | `F59228` (+7.63 s) | Money | text: THE REASONS: "ECONOMIC" |
| `economic` | `F59287` (+8.62 s) | Money | text: THE REASONS: "ECONOMIC" |

**182** · He said he suggested they not go, and was told that wasn't possible: they had people that paid.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `suggested` | `F59908` (+0.50 s) | Money | text: HE SUGGESTED THEY NOT GO · |
| `go` | `F59972` (+1.57 s) | Money | text: HE SUGGESTED THEY NOT GO · |
| `told` | `F60022` (+2.40 s) | Money | <Wd f={f} at={wf(182, 'told')} lightAt={wf(182, 'possible')} tone={colors.red}>" |
| `possible` | `F60067` (+3.15 s) | Money | <Wd f={f} at={wf(182, 'told')} lightAt={wf(182, 'possible')} tone={colors.red}>" |
| `people` | `F60145` (+4.45 s) | Money | <Wd f={f} at={wf(182, 'people')} lightAt={wf(182, 'paid')} tone={colors.amber} b |
| `paid` | `F60181` (+5.05 s) | Money | <Wd f={f} at={wf(182, 'people')} lightAt={wf(182, 'paid')} tone={colors.amber} b |

**183** · The board found that the chief executive then left the director of engineering post vacant, in its words, to ensure the twenty twenty-three expedition proceeded unhindered.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `board` | `F60243` (+0.12 s) | Money | text: THE BOARD: |
| `found` | `F60262` (+0.43 s) | Money | text: THE BOARD: |
| `chief` | `F60296` (+1.00 s) | Money | text: THE CEO LEFT |
| `executive` | `F60313` (+1.28 s) | Money | text: THE CEO LEFT |
| `director` | `F60389` (+2.55 s) | Money | text: THE DIRECTOR OF ENGINEERING POST |
| `post` | `F60457` (+3.68 s) | Money | text: THE DIRECTOR OF ENGINEERING POST |
| `vacant` | `F60484` (+4.13 s) | (scene list) | sound effect cue |
| `words` | `F60547` (+5.18 s) | Money | text: IN ITS WORDS: / EXPEDITION |
| `ensure` | `F60599` (+6.05 s) | Money | text: IN ITS WORDS: / EXPEDITION |
| `twenty-three` | `F60654` (+6.97 s) | Money | text: IN ITS WORDS: / EXPEDITION |
| `expedition` | `F60690` (+7.57 s) | Money | text: IN ITS WORDS: / EXPEDITION |
| `proceeded` | `F60731` (+8.25 s) | Money | text: PROCEEDED UNHINDERED" |
| `unhindered` | `F60774` (+8.97 s) | Money | text: PROCEEDED UNHINDERED" |

**184** · And the board drew the line back to twenty nineteen, when, by his own testimony, the first director of engineering had kept a damaged hull from an expedition.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `drew` | `F60873` (+0.52 s) | Money | text: THE LINE BACK TO |
| `line` | `F60891` (+0.82 s) | Money | text: THE LINE BACK TO |
| `twenty` | `F60932` (+1.50 s) | Money | text: 2019: |
| `nineteen` | `F60953` (+1.85 s) | Money | text: 2019: |
| `by` | `F61038` (+3.27 s) | Money | text: BY HIS OWN TESTIMONY, / THE FIRST DIRECTOR OF ENGINEERING |
| `own` | `F61058` (+3.60 s) | Money | text: BY HIS OWN TESTIMONY, / THE FIRST DIRECTOR OF ENGINEERING |
| `testimony` | `F61070` (+3.80 s) | Money | bump · <Chip text="BY HIS OWN TESTIMONY (2019)" tone={colors.cyan} size={28}  |
| `first` | `F61140` (+4.97 s) | Money | text: BY HIS OWN TESTIMONY, / THE FIRST DIRECTOR OF ENGINEERING |
| `engineering` | `F61189` (+5.78 s) | Money | text: BY HIS OWN TESTIMONY, / THE FIRST DIRECTOR OF ENGINEERING |
| `kept` | `F61235` (+6.55 s) | Money | text: KEPT / A DAMAGED HULL |
| `damaged` | `F61260` (+6.97 s) | Money | text: KEPT / A DAMAGED HULL |
| `hull` | `F61293` (+7.52 s) | Money | text: KEPT / A DAMAGED HULL |
| `expedition` | `F61331` (+8.15 s) | Money | text: KEPT / A DAMAGED HULL |

**185** · Leaving the post empty, it wrote, removed the possibility of a replacement director blocking the expedition.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Leaving` | `F61403` (+0.03 s) | Money | text: THE EMPTY POST |
| `empty` | `F61454` (+0.88 s) | Money | text: THE EMPTY POST |
| `removed` | `F61533` (+2.20 s) | Money | text: REMOVED THE POSSIBILITY |
| `possibility` | `F61566` (+2.75 s) | Money | text: REMOVED THE POSSIBILITY |
| `replacement` | `F61621` (+3.67 s) | Money | text: OF A REPLACEMENT BLOCKING IT |
| `blocking` | `F61690` (+4.82 s) | Money | text: OF A REPLACEMENT BLOCKING IT |

**186** · That spring, at sea and in port, the platform tipped more than once.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `spring` | `F61815` (+0.25 s) | Tipping | text: SPRING 2023 · |
| `sea` | `F61871` (+1.18 s) | Tipping | text: AT SEA |
| `port` | `F61910` (+1.83 s) | Tipping | text: AND IN PORT: |
| `platform` | `F61955` (+2.58 s) | Tipping | text: THE PLATFORM TIPPED |
| `tipped` | `F61993` (+3.22 s) | (scene list) | sound effect cue |
| `more` | `F62019` (+3.65 s) | Tipping | text: MORE THAN ONCE |
| `once` | `F62046` (+4.10 s) | Tipping | text: MORE THAN ONCE |

**187** · Once, in May, its bow went partly under water, and Titan's tail cone was lost.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Once` | `F62097` (+0.10 s) | Tipping | const tilt = span(f, wf(186, 'tipped') - 4, wf(186, 'tipped') + 18) * (1 - span( |
| `May` | `F62136` (+0.75 s) | Tipping | DatePill · <DatePill f={f} fps={fps} day={24} month={5} year={2023} dayWord={wf(1 |
| `bow` | `F62185` (+1.57 s) | Tipping | text: ITS BOW PARTLY UNDER WATER · |
| `under` | `F62243` (+2.53 s) | Tipping | const under = span(f, wf(187, 'under') - 6, wf(187, 'water') + 12); |
| `water` | `F62259` (+2.80 s) | Tipping | text: ITS BOW PARTLY UNDER WATER · |
| `Titan's` | `F62302` (+3.52 s) | Tipping | text: TITAN'S TAIL CONE: |
| `cone` | `F62349` (+4.30 s) | Tipping | text: TITAN'S TAIL CONE: |
| `lost` | `F62379` (+4.80 s) | (scene list) | sound effect cue |

**188** · How was a hull like this allowed to carry passengers?

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `How` | `F62440` (+0.05 s) | Law | text: How was a hull like this |
| `allowed` | `F62528` (+1.52 s) | Law | <Wd f={f} at={wf(188, 'allowed')} tone={colors.amber}>allowed </Wd> |
| `carry` | `F62556` (+1.98 s) | Law | <Wd f={f} at={wf(188, 'carry')} lightAt={wf(188, 'passengers')} tone={colors.amb |
| `passengers` | `F62575` (+2.30 s) | Law | <Wd f={f} at={wf(188, 'carry')} lightAt={wf(188, 'passengers')} tone={colors.amb |

**189** · By the N - T - S - B's reading of the law, it was not.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `N` | `F62681` (+0.55 s) | Law | text: By the NTSB's reading |
| `reading` | `F62738` (+1.50 s) | Law | text: By the NTSB's reading |
| `law` | `F62775` (+2.12 s) | Law | <Wd f={f} at={wf(189, 'law')} base={colors.ink} tone={colors.cyan}>of the law,</ |
| `not` | `F62834` (+3.10 s) | (scene list) | sound effect cue |

**190** · Under U - S law, the N - T - S - B notes, a submersible carrying even one passenger for hire is a small passenger vessel, and must be inspected by the Coast Guard.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `U` | `F62935` (+0.35 s) | Law | text: U.S. LAW, / THE NTSB NOTES: |
| `law` | `F62959` (+0.75 s) | Law | text: U.S. LAW, / THE NTSB NOTES: |
| `N` | `F63006` (+1.53 s) | Law | text: U.S. LAW, / THE NTSB NOTES: |
| `notes` | `F63047` (+2.22 s) | Law | text: U.S. LAW, / THE NTSB NOTES: |
| `submersible` | `F63095` (+3.02 s) | (scene list) | sound effect cue |
| `carrying` | `F63135` (+3.68 s) | Law | text: A SUBMERSIBLE CARRYING |
| `even` | `F63166` (+4.20 s) | Law | text: EVEN ONE |
| `one` | `F63191` (+4.62 s) | Law | text: EVEN ONE |
| `passenger` | `F63203` (+4.82 s) | Law | text: PASSENGER FOR HIRE |
| `hire` | `F63247` (+5.55 s) | Law | text: PASSENGER FOR HIRE |
| `is` | `F63274` (+6.00 s) | Law | text: IS A SMALL PASSENGER VESSEL |
| `vessel` | `F63344` (+7.17 s) | Law | text: IS A SMALL PASSENGER VESSEL |
| `must` | `F63393` (+7.98 s) | Law | text: MUST BE INSPECTED |
| `inspected` | `F63415` (+8.35 s) | Law | text: MUST BE INSPECTED |
| `by` | `F63448` (+8.90 s) | Law | text: BY THE COAST GUARD |
| `Guard` | `F63481` (+9.45 s) | Law | text: BY THE COAST GUARD |

**191** · OceanGate never registered Titan, and never arranged an inspection.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `OceanGate` | `F63529` (+0.05 s) | Law | text: OCEANGATE · TITAN: |
| `registered` | `F63589` (+1.05 s) | (scene list) | sound effect cue |
| `Titan` | `F63623` (+1.62 s) | Law | text: OCEANGATE · TITAN: |
| `arranged` | `F63691` (+2.75 s) | Law | <Chip text={f >= wf(191, 'arranged') ? 'NO INSPECTION ARRANGED' : 'NO INSPECTION |
| `inspection` | `F63726` (+3.33 s) | Law | bump · <span style={{opacity: lead(f, wf(191, 'inspection'), 8), transform: ` |

**192** · The Coast Guard board found that OceanGate described its paying passengers as mission specialists, with mandatory duties, to conceal that they were paying passengers.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `board` | `F63835` (+0.68 s) | Law | text: THE BOARD FOUND: |
| `found` | `F63856` (+1.03 s) | Law | text: THE BOARD FOUND: |
| `OceanGate` | `F63883` (+1.48 s) | Law | text: OCEANGATE DESCRIBED / PAYING PASSENGERS AS |
| `described` | `F63917` (+2.05 s) | Law | text: OCEANGATE DESCRIBED / PAYING PASSENGERS AS |
| `paying` | `F63960` (+2.77 s) | Law | text: OCEANGATE DESCRIBED / PAYING PASSENGERS AS |
| `passengers` | `F63983` (+3.15 s) | Law | text: OCEANGATE DESCRIBED / PAYING PASSENGERS AS |
| `mission` | `F64054` (+4.33 s) | Law | <Wd f={f} at={wf(192, 'mission')} lightAt={wf(192, 'specialists')} tone={colors. |
| `specialists` | `F64081` (+4.78 s) | Law | <Wd f={f} at={wf(192, 'mission')} lightAt={wf(192, 'specialists')} tone={colors. |
| `mandatory` | `F64146` (+5.87 s) | Law | text: WITH MANDATORY DUTIES · |
| `duties` | `F64185` (+6.52 s) | Law | text: WITH MANDATORY DUTIES · |
| `conceal` | `F64239` (+7.42 s) | (scene list) | sound effect cue |
| `they` | `F64286` (+8.20 s) | Law | text: TO CONCEAL / THAT THEY WERE PAYING PASSENGERS |
| `passengers` | `F64329` (+8.92 s) | Law | text: TO CONCEAL / THAT THEY WERE PAYING PASSENGERS |

**193** · The regulator's own guidance gets the same scrutiny.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `regulator's` | `F64407` (+0.12 s) | Law | text: THE REGULATOR'S OWN GUIDANCE: |
| `guidance` | `F64463` (+1.05 s) | Law | text: THE REGULATOR'S OWN GUIDANCE: |
| `same` | `F64515` (+1.92 s) | Law | text: THE SAME SCRUTINY |
| `scrutiny` | `F64533` (+2.22 s) | Law | text: THE SAME SCRUTINY |

**194** · The Coast Guard's voluntary guidance for passenger submersibles was published in July nineteen ninety-three.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Coast` | `F64598` (+0.12 s) | Law | lead · <g opacity={lead(f, wf(194, 'coast'), 8)}> |
| `voluntary` | `F64636` (+0.75 s) | Law | text: VOLUNTARY GUIDANCE |
| `passenger` | `F64707` (+1.93 s) | Law | text: NVIC 05-93 · / PASSENGER SUBMERSIBLES |
| `submersibles` | `F64739` (+2.47 s) | Law | text: NVIC 05-93 · / PASSENGER SUBMERSIBLES |
| `published` | `F64795` (+3.40 s) | Law | text: PUBLISHED |
| `July` | `F64833` (+4.03 s) | Law | lead · <line x1={X(1993) - 20} x2={X(1993) + 60} y1={520} y2={520} stroke={co |
| `nineteen` | `F64858` (+4.45 s) | Law | text: JUL / 1993 |
| `ninety-three` | `F64887` (+4.93 s) | Law | text: JUL / 1993 |

**195** · That December, a new law changed the definition, to cover any submersible with one passenger for hire.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `December` | `F64968` (+0.20 s) | (scene list) | sound effect cue |
| `law` | `F65040` (+1.40 s) | Law | text: DEC 1993 · / A NEW LAW |
| `definition` | `F65087` (+2.18 s) | Law | text: DEC 1993 · / A NEW LAW |
| `cover` | `F65151` (+3.25 s) | Law | text: ANY / SUBMERSIBLE |
| `submersible` | `F65193` (+3.95 s) | Law | text: ANY / SUBMERSIBLE |
| `one` | `F65250` (+4.90 s) | Law | text: ANY / SUBMERSIBLE |

**196** · As of its report in October twenty twenty-five, the N - T - S - B found, the guidance had never been updated to match.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `October` | `F65414` (+0.98 s) | Law | lead · <g opacity={lead(f, wf(196, 'october'), 8)}> |
| `twenty-five` | `F65462` (+1.78 s) | Law | <line x1={X(1993)} x2={X(1993) + (X(2025) - X(1993)) * span(f, wf(196, 'october' |
| `N` | `F65540` (+3.08 s) | Law | text: NTSB · |
| `found` | `F65582` (+3.78 s) | Law | text: NTSB · |
| `never` | `F65668` (+5.22 s) | Law | text: GUIDANCE NEVER UPDATED |
| `updated` | `F65698` (+5.72 s) | Law | text: NOT UPDATED TO MATCH · |
| `match` | `F65736` (+6.35 s) | Law | text: NOT UPDATED TO MATCH · |

**197** · The Coast Guard, it found, had no specific inspection standards for how a submersible is designed or built.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Coast` | `F65797` (+0.10 s) | Law | text: THE COAST GUARD: / NO SPECIFIC |
| `found` | `F65848` (+0.95 s) | Law | text: THE COAST GUARD: / NO SPECIFIC |
| `no` | `F65900` (+1.82 s) | Law | text: THE COAST GUARD: / NO SPECIFIC |
| `specific` | `F65913` (+2.03 s) | Law | text: THE COAST GUARD: / NO SPECIFIC |
| `inspection` | `F65947` (+2.60 s) | Law | text: THE COAST GUARD: / NO SPECIFIC |
| `standards` | `F65982` (+3.18 s) | Law | text: THE COAST GUARD: / NO SPECIFIC |
| `how` | `F66023` (+3.87 s) | Law | text: THE COAST GUARD: / NO SPECIFIC |
| `designed` | `F66089` (+4.97 s) | Law | text: FOR HOW A SUBMERSIBLE IS DESIGNED OR BUILT |
| `built` | `F66138` (+5.78 s) | Law | text: FOR HOW A SUBMERSIBLE IS DESIGNED OR BUILT |

**198** · That guidance also recommended that a submersible dive no deeper than its rescue could reach.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `guidance` | `F66188` (+0.28 s) | Law | text: THE GUIDANCE RECOMMENDED: |
| `recommended` | `F66245` (+1.23 s) | Law | text: THE GUIDANCE RECOMMENDED: |
| `submersible` | `F66302` (+2.18 s) | Law | text: DIVE / NO DEEPER THAN RESCUE CAN REACH |
| `dive` | `F66349` (+2.97 s) | Law | text: DIVE / NO DEEPER THAN RESCUE CAN REACH |
| `deeper` | `F66395` (+3.73 s) | Law | text: DIVE / NO DEEPER THAN RESCUE CAN REACH |
| `rescue` | `F66442` (+4.52 s) | Law | text: 45 M · WHERE ITS RESCUE IS EFFECTIVE (NVIC 05-93) |
| `reach` | `F66486` (+5.25 s) | Law | text: DIVE / NO DEEPER THAN RESCUE CAN REACH |

**199** · The N - T - S - B found that Titan regularly dived to the Titanic with no rescue standing by that could reach it.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `N` | `F66554` (+0.32 s) | Law | text: NTSB: |
| `found` | `F66616` (+1.35 s) | Law | text: NTSB: |
| `Titan` | `F66642` (+1.78 s) | Law | text: TITAN REGULARLY DIVED THERE |
| `regularly` | `F66678` (+2.38 s) | Law | <rect x={1560} y={340} width={70} height={480 * span(f, wf(199, 'regularly') - 6 |
| `dived` | `F66713` (+2.97 s) | Law | text: TITAN REGULARLY DIVED THERE |
| `Titanic` | `F66750` (+3.58 s) | Law | text: 3,840 M · THE TITANIC |
| `no` | `F66807` (+4.53 s) | Law | text: WITH NO RESCUE |
| `rescue` | `F66824` (+4.82 s) | Law | text: WITH NO RESCUE |
| `standing` | `F66852` (+5.28 s) | Law | text: STANDING BY THAT COULD REACH IT |
| `reach` | `F66919` (+6.40 s) | Law | text: STANDING BY THAT COULD REACH IT |

**200** · The N - T - S - B found that voluntary guidance and the rules for small passenger vessels were insufficient to make OceanGate follow the industry's established standards.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `N` | `F66994` (+0.28 s) | Law | text: NTSB: |
| `found` | `F67048` (+1.18 s) | Law | text: NTSB: |
| `voluntary` | `F67078` (+1.68 s) | Law | text: VOLUNTARY GUIDANCE |
| `guidance` | `F67110` (+2.22 s) | Law | text: VOLUNTARY GUIDANCE |
| `rules` | `F67164` (+3.12 s) | Law | text: AND SMALL-PASSENGER-VESSEL RULES |
| `vessels` | `F67248` (+4.52 s) | Law | text: AND SMALL-PASSENGER-VESSEL RULES |
| `insufficient` | `F67293` (+5.27 s) | (scene list) | sound effect cue |
| `make` | `F67352` (+6.25 s) | Law | text: TO MAKE OCEANGATE |
| `OceanGate` | `F67370` (+6.55 s) | Law | text: TO MAKE OCEANGATE |
| `follow` | `F67407` (+7.17 s) | Law | text: FOLLOW THE INDUSTRY'S / STANDARDS |
| `industry's` | `F67437` (+7.67 s) | Law | text: FOLLOW THE INDUSTRY'S / STANDARDS |
| `established` | `F67471` (+8.23 s) | Law | text: FOLLOW THE INDUSTRY'S / STANDARDS |
| `standards` | `F67508` (+8.85 s) | Law | text: FOLLOW THE INDUSTRY'S / STANDARDS |

