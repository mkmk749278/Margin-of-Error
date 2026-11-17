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
| `spend` | `F51639` (+0.92 s) | Winter | text: THE WINTER: |
| `winter` | `F51664` (+1.33 s) | Winter | text: THE WINTER: |
| `somewhere` | `F51687` (+1.72 s) | Winter | text: SOMEWHERE |

**160** · On the twenty-sixth of July, Titan was set down in a parking lot at a marine base in Saint John's, Newfoundland.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `twenty-sixth` | `F51752` (+0.22 s) | Winter | DatePill · <DatePill f={f} fps={fps} day={26} month={7} year={2022} dayWord={wf(1 |
| `July` | `F51797` (+0.97 s) | Winter | DatePill · <DatePill f={f} fps={fps} day={26} month={7} year={2022} dayWord={wf(1 |
| `Titan` | `F51839` (+1.67 s) | Winter | text: TITAN, SET DOWN |
| `set` | `F51874` (+2.25 s) | Winter | text: TITAN, SET DOWN |
| `parking` | `F51916` (+2.95 s) | Winter | text: IN A PARKING LOT · |
| `lot` | `F51945` (+3.43 s) | Winter | text: IN A PARKING LOT · |
| `marine` | `F51971` (+3.87 s) | Winter | text: A MARINE BASE · |
| `base` | `F51996` (+4.28 s) | Winter | text: A MARINE BASE · |
| `Saint` | `F52030` (+4.85 s) | Winter | text: ST. JOHN'S |
| `Newfoundland` | `F52072` (+5.55 s) | Winter | text: ST. JOHN'S |

**161** · Uncovered.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Uncovered` | `F52140` (+0.02 s) | (scene list) | sound effect cue |

**162** · Two days later, the base passed on a quote for a protective cover: one thousand seven hundred and fifty Canadian dollars.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Two` | `F52208` (+0.03 s) | Winter | lead · <div style={{position: 'absolute', right: 96, top: 84, display: 'flex' |
| `later` | `F52235` (+0.48 s) | Winter | DatePill · <DatePill f={f} fps={fps} day={28} month={7} year={2022} dayWord={wf(1 |
| `base` | `F52278` (+1.20 s) | Winter | text: THE BASE PASSED ON |
| `passed` | `F52298` (+1.53 s) | Winter | text: THE BASE PASSED ON |
| `quote` | `F52331` (+2.08 s) | (scene list) | sound effect cue |
| `protective` | `F52369` (+2.72 s) | Winter | hl= · <RecordPage set="roi" start={sf(162) - 12} end={ef(166) + 20} page={32 |
| `cover` | `F52406` (+3.33 s) | Winter | text: A QUOTE FOR A COVER: |
| `one` | `F52454` (+4.13 s) | Winter | bump · <span style={{...T(44, {color: f >= wf(162, 'fifty') + LAND ? colors.a |
| `thousand` | `F52465` (+4.32 s) | Winter | rollTo · const cad = Math.round(rollTo(f, [{frame: wf(162, 'one') - 10, value:  |
| `seven` | `F52496` (+4.83 s) | Winter | rollTo · const cad = Math.round(rollTo(f, [{frame: wf(162, 'one') - 10, value:  |
| `fifty` | `F52540` (+5.57 s) | (scene list) | sound effect cue |
| `Canadian` | `F52563` (+5.95 s) | Winter | text: CA$1,750 · |
| `dollars` | `F52596` (+6.50 s) | Winter | text: CA$1,750 · |

**163** · The base told the Coast Guard board that OceanGate never answered that email.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `told` | `F52674` (+0.40 s) | Winter | text: IT TOLD THE BOARD: |
| `board` | `F52731` (+1.35 s) | Winter | text: IT TOLD THE BOARD: |
| `OceanGate` | `F52762` (+1.87 s) | Winter | text: NEVER ANSWERED |
| `never` | `F52802` (+2.53 s) | Winter | hl= · <RecordPage set="roi" start={sf(162) - 12} end={ef(166) + 20} page={32 |
| `answered` | `F52823` (+2.88 s) | Winter | text: NEVER ANSWERED |
| `email` | `F52860` (+3.50 s) | Winter | <Wd f={f} at={wf(163, 'email')}> THAT EMAIL</Wd> |

**164** · In September, the base wrote again: Titan still had not been covered.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `September` | `F52920` (+0.15 s) | Winter | text: SEPTEMBER: |
| `wrote` | `F52989` (+1.30 s) | Winter | text: THE BASE WROTE AGAIN · |
| `again` | `F53004` (+1.55 s) | Winter | text: THE BASE WROTE AGAIN · |
| `still` | `F53081` (+2.83 s) | Winter | text: STILL NOT COVERED · |
| `covered` | `F53140` (+3.82 s) | Winter | text: STILL NOT COVERED · |

**165** · OceanGate's logistics director said it would be discussed.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `OceanGate's` | `F53195` (+0.05 s) | Winter | text: LOGISTICS DIRECTOR: |
| `director` | `F53265` (+1.22 s) | Winter | text: LOGISTICS DIRECTOR: |
| `discussed` | `F53345` (+2.55 s) | Winter | <Wd f={f} at={wf(165, 'discussed')} tone={colors.amber}>"WILL BE DISCUSSED" · </ |

**166** · The board found no action followed.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `board` | `F53417` (+0.12 s) | Winter | text: THE BOARD: |
| `found` | `F53446` (+0.60 s) | Winter | text: THE BOARD: |
| `no` | `F53467` (+0.95 s) | (scene list) | sound effect cue |
| `followed` | `F53506` (+1.60 s) | Winter | text: NO ACTION FOLLOWED |

**167** · It stayed outside until the sixth of February, through temperatures from one point four to eighty-four point two degrees Fahrenheit, about minus seventeen to twenty-nine Celsius, through freezing rain, sleet and snow.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `stayed` | `F53565` (+0.18 s) | Winter | text: OUTSIDE UNTIL |
| `outside` | `F53585` (+0.52 s) | Winter | text: OUTSIDE UNTIL |
| `sixth` | `F53646` (+1.53 s) | Winter | DatePill · <DatePill f={f} fps={fps} day={6} month={2} year={2023} dayWord={wf(16 |
| `February` | `F53673` (+1.98 s) | Winter | DatePill · <DatePill f={f} fps={fps} day={6} month={2} year={2023} dayWord={wf(16 |
| `temperatures` | `F53731` (+2.95 s) | Winter | text: TEMPERATURES |
| `one` | `F53786` (+3.87 s) | Winter | lead · <span style={{...T(56, {color: f >= wf(167, 'four') + LAND ? colors.cy |
| `four` | `F53816` (+4.37 s) | (scene list) | sound effect cue |
| `to` | `F53839` (+4.75 s) | Winter | lead · <span style={{...T(40, {color: colors.ink}), opacity: lead(f, wf(167,  |
| `eighty-four` | `F53852` (+4.97 s) | Winter | flash · <span style={{...T(56, {color: f >= wf(167, 'two') + LAND ? colors.amb |
| `two` | `F53904` (+5.83 s) | Winter | flash · <span style={{...T(56, {color: f >= wf(167, 'two') + LAND ? colors.amb |
| `Fahrenheit` | `F53941` (+6.45 s) | Winter | flash · <span style={{...T(56, {color: f >= wf(167, 'two') + LAND ? colors.amb |
| `minus` | `F54015` (+7.68 s) | Winter | <Wd f={f} at={wf(167, 'minus')} lightAt={wf(167, 'seventeen')} tone={colors.cyan |
| `seventeen` | `F54038` (+8.07 s) | Winter | <Wd f={f} at={wf(167, 'minus')} lightAt={wf(167, 'seventeen')} tone={colors.cyan |
| `twenty-nine` | `F54086` (+8.87 s) | Winter | <Wd f={f} at={wf(167, 'twenty-nine')} lightAt={wf(167, 'celsius')} tone={colors. |
| `Celsius` | `F54125` (+9.52 s) | Winter | <Wd f={f} at={wf(167, 'twenty-nine')} lightAt={wf(167, 'celsius')} tone={colors. |
| `freezing` | `F54197` (+10.72 s) | Winter | text: FREEZING RAIN · |
| `rain` | `F54226` (+11.20 s) | Winter | text: FREEZING RAIN · |
| `sleet` | `F54260` (+11.77 s) | Winter | text: SLEET · |
| `snow` | `F54306` (+12.53 s) | Winter | text: SNOW |

**168** · Brooks testified that what they really wanted was to bring Titan back to Everett, pull the insert, and look inside the hull for cracks.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Brooks` | `F54351` (+-0.03 s) | Winter | text: BROOKS: |
| `testified` | `F54372` (+0.32 s) | Winter | text: BROOKS: |
| `what` | `F54419` (+1.10 s) | Winter | text: WHAT THEY REALLY / WANTED: BRING IT |
| `really` | `F54443` (+1.50 s) | Winter | text: WHAT THEY REALLY / WANTED: BRING IT |
| `wanted` | `F54465` (+1.87 s) | Winter | text: WHAT THEY REALLY / WANTED: BRING IT |
| `bring` | `F54510` (+2.62 s) | Winter | text: WHAT THEY REALLY / WANTED: BRING IT |
| `back` | `F54552` (+3.32 s) | Winter | text: BACK TO EVERETT, |
| `Everett` | `F54578` (+3.75 s) | Winter | text: BACK TO EVERETT, |
| `pull` | `F54616` (+4.38 s) | Winter | text: PULL THE INSERT, |
| `insert` | `F54640` (+4.78 s) | Winter | text: PULL THE INSERT, |
| `look` | `F54687` (+5.57 s) | Winter | text: LOOK INSIDE FOR CRACKS |
| `cracks` | `F54758` (+6.75 s) | Winter | text: LOOK INSIDE FOR CRACKS |

**170** · Was money behind these decisions?

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Was` | `F55341` (+0.00 s) | Money | text: Was |
| `money` | `F55355` (+0.23 s) | Money | <Wd f={f} at={wf(170, 'money')} tone={colors.amber}>money </Wd> |
| `behind` | `F55373` (+0.53 s) | Money | <Wd f={f} at={wf(170, 'behind')} lightAt={wf(170, 'decisions')} base={colors.ink |
| `decisions` | `F55407` (+1.10 s) | Money | <Wd f={f} at={wf(170, 'behind')} lightAt={wf(170, 'decisions')} base={colors.ink |

**171** · The Coast Guard board says it was: in its words, a troubling prioritization of cost and time-saving measures over safety.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Coast` | `F55481` (+0.12 s) | Money | text: THE COAST GUARD BOARD: |
| `board` | `F55515` (+0.68 s) | Money | text: THE COAST GUARD BOARD: |
| `says` | `F55535` (+1.02 s) | Money | text: YES · |
| `was` | `F55557` (+1.38 s) | Money | text: YES · |
| `words` | `F55618` (+2.40 s) | Money | hl= · <RecordPage set="roi" start={sf(171) - 14} end={ef(172) + 20} hl={[{ke |
| `troubling` | `F55666` (+3.20 s) | (scene list) | sound effect cue |
| `prioritization` | `F55696` (+3.70 s) | Money | <Wd f={f} at={wf(171, 'troubling')} lightAt={wf(171, 'prioritization')} tone={co |
| `cost` | `F55770` (+4.93 s) | Money | text: COST AND TIME-SAVING MEASURES |
| `measures` | `F55855` (+6.35 s) | Money | text: COST AND TIME-SAVING MEASURES |
| `over` | `F55885` (+6.85 s) | Money | text: OVER SAFETY" · |
| `safety` | `F55903` (+7.15 s) | Money | text: OVER SAFETY" · |

**172** · The N - T - S - B's findings do not address money.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `N` | `F55969` (+0.22 s) | Money | text: THE NTSB'S FINDINGS: |
| `findings` | `F56014` (+0.97 s) | Money | text: THE NTSB'S FINDINGS: |
| `not` | `F56068` (+1.87 s) | Money | text: DO NOT ADDRESS MONEY |
| `money` | `F56112` (+2.60 s) | Money | text: DO NOT ADDRESS MONEY |

**173** · From June twenty twenty-two to May twenty twenty-three, the board found, the chief executive advanced the company one point eight five million dollars.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `June` | `F56171` (+0.27 s) | Money | text: JUN 2022 |
| `twenty-two` | `F56211` (+0.93 s) | Money | text: JUN 2022 |
| `May` | `F56271` (+1.93 s) | Money | <Wd f={f} at={wf(173, 'may')} lightAt={wf(173, 'twenty-three')} tone={colors.ink |
| `twenty-three` | `F56309` (+2.57 s) | Money | <Wd f={f} at={wf(173, 'may')} lightAt={wf(173, 'twenty-three')} tone={colors.ink |
| `board` | `F56387` (+3.87 s) | Money | text: THE BOARD FOUND: |
| `found` | `F56406` (+4.18 s) | Money | text: THE BOARD FOUND: |
| `chief` | `F56462` (+5.12 s) | Money | text: THE CEO ADVANCED THE COMPANY |
| `advanced` | `F56513` (+5.97 s) | Money | text: THE CEO ADVANCED THE COMPANY |
| `one` | `F56588` (+7.22 s) | Money | <Wd f={f} at={wf(173, 'one')} lightAt={wf(173, 'dollars')} tone={colors.amber} b |
| `eight` | `F56623` (+7.80 s) | Money | rollTo · const m185 = rollTo(f, [{frame: wf(173, 'one') - 10, value: 0}, {frame |
| `five` | `F56636` (+8.02 s) | Money | rollTo · const m185 = rollTo(f, [{frame: wf(173, 'one') - 10, value: 0}, {frame |
| `million` | `F56660` (+8.42 s) | (scene list) | sound effect cue |
| `dollars` | `F56685` (+8.83 s) | Money | <Wd f={f} at={wf(173, 'one')} lightAt={wf(173, 'dollars')} tone={colors.amber} b |

**174** · The board found that employees were asked to temporarily forgo their salaries, with a promise of back pay.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `employees` | `F56801` (+0.83 s) | Money | <Wd f={f} at={wf(174, 'employees')}> · EMPLOYEES </Wd> |
| `asked` | `F56849` (+1.63 s) | Money | text: ASKED TO FORGO / SALARIES · |
| `forgo` | `F56925` (+2.90 s) | Money | text: ASKED TO FORGO / SALARIES · |
| `salaries` | `F56969` (+3.63 s) | Money | text: ASKED TO FORGO / SALARIES · |
| `promise` | `F57028` (+4.62 s) | Money | text: BACK PAY PROMISED · |
| `pay` | `F57082` (+5.52 s) | Money | text: BROOKS: "THEY ASKED FOR VOLUNTEERS" · CG 112 P. 779 |

**175** · The ship that had carried Titan was unavailable for twenty twenty-three, the board found.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `ship` | `F57135` (+0.15 s) | Money | text: THE SHIP THAT HAD CARRIED TITAN: |
| `carried` | `F57169` (+0.72 s) | Money | text: THE SHIP THAT HAD CARRIED TITAN: |
| `unavailable` | `F57235` (+1.82 s) | Money | text: UNAVAILABLE FOR 2023 |
| `twenty-three` | `F57304` (+2.97 s) | Money | text: UNAVAILABLE FOR 2023 |
| `board` | `F57365` (+3.98 s) | Money | <Wd f={f} at={wf(175, 'board')} lightAt={wf(175, 'found')}> · THE BOARD</Wd> |
| `found` | `F57382` (+4.27 s) | Money | <Wd f={f} at={wf(175, 'board')} lightAt={wf(175, 'found')}> · THE BOARD</Wd> |

**176** · Titan would be towed to the site on its launch platform, behind a smaller ship.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `towed` | `F57475` (+0.67 s) | (scene list) | sound effect cue |
| `site` | `F57513` (+1.30 s) | Money | text: TOWED TO THE SITE |
| `launch` | `F57549` (+1.90 s) | Money | text: ON ITS LAUNCH PLATFORM, |
| `platform` | `F57567` (+2.20 s) | Money | text: ON ITS LAUNCH PLATFORM, |
| `behind` | `F57611` (+2.93 s) | Money | text: BEHIND A SMALLER SHIP |
| `smaller` | `F57639` (+3.40 s) | Money | const pp = span(f, wf(176, 'smaller') - 10, wf(176, 'ship') + 10); |
| `ship` | `F57666` (+3.85 s) | Money | text: BEHIND A SMALLER SHIP |

**177** · Early in twenty twenty-three, Brooks left.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Early` | `F57716` (+0.02 s) | Money | text: EARLY 2023: |
| `twenty-three` | `F57763` (+0.80 s) | Money | text: EARLY 2023: |
| `Brooks` | `F57825` (+1.83 s) | Money | text: BROOKS LEFT |
| `left` | `F57848` (+2.22 s) | (scene list) | sound effect cue |

**178** · Under oath, he said his main reason was that plan to tow Titan, which meant working on its platform in open seas, and that the reasons for it were economic.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Under` | `F57908` (+0.02 s) | Money | text: UNDER OATH · |
| `oath` | `F57928` (+0.35 s) | Money | text: UNDER OATH · |
| `main` | `F57997` (+1.50 s) | Money | text: HIS MAIN REASON: |
| `reason` | `F58014` (+1.78 s) | Money | text: HIS MAIN REASON: |
| `plan` | `F58062` (+2.58 s) | Money | text: THE PLAN TO TOW TITAN · |
| `tow` | `F58094` (+3.12 s) | Money | text: THE PLAN TO TOW TITAN · |
| `which` | `F58163` (+4.27 s) | Money | text: MEANING: / WORKING ON ITS PLATFORM |
| `meant` | `F58175` (+4.47 s) | Money | text: MEANING: / WORKING ON ITS PLATFORM |
| `working` | `F58190` (+4.72 s) | Money | text: MEANING: / WORKING ON ITS PLATFORM |
| `platform` | `F58229` (+5.37 s) | Money | text: MEANING: / WORKING ON ITS PLATFORM |
| `open` | `F58275` (+6.13 s) | Money | text: IN OPEN SEAS |
| `seas` | `F58297` (+6.50 s) | Money | text: IN OPEN SEAS |
| `reasons` | `F58365` (+7.63 s) | Money | text: THE REASONS: "ECONOMIC" |
| `economic` | `F58424` (+8.62 s) | Money | text: THE REASONS: "ECONOMIC" |

**181** · He said he suggested they not go, and was told that wasn't possible: they had people that paid.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `suggested` | `F59045` (+0.50 s) | Money | text: HE SUGGESTED THEY NOT GO · |
| `go` | `F59109` (+1.57 s) | Money | text: HE SUGGESTED THEY NOT GO · |
| `told` | `F59159` (+2.40 s) | Money | <Wd f={f} at={wf(181, 'told')} lightAt={wf(181, 'possible')} tone={colors.red}>" |
| `possible` | `F59204` (+3.15 s) | Money | <Wd f={f} at={wf(181, 'told')} lightAt={wf(181, 'possible')} tone={colors.red}>" |
| `people` | `F59282` (+4.45 s) | Money | <Wd f={f} at={wf(181, 'people')} lightAt={wf(181, 'paid')} tone={colors.amber} b |
| `paid` | `F59318` (+5.05 s) | Money | <Wd f={f} at={wf(181, 'people')} lightAt={wf(181, 'paid')} tone={colors.amber} b |

**182** · The board found that the chief executive then left the director of engineering post vacant, in its words, to ensure the twenty twenty-three expedition proceeded unhindered.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `board` | `F59380` (+0.12 s) | Money | text: THE BOARD: |
| `found` | `F59399` (+0.43 s) | Money | text: THE BOARD: |
| `chief` | `F59433` (+1.00 s) | Money | text: THE CEO LEFT |
| `executive` | `F59450` (+1.28 s) | Money | text: THE CEO LEFT |
| `director` | `F59526` (+2.55 s) | Money | text: THE DIRECTOR OF ENGINEERING POST |
| `post` | `F59595` (+3.70 s) | Money | text: THE DIRECTOR OF ENGINEERING POST |
| `vacant` | `F59621` (+4.13 s) | (scene list) | sound effect cue |
| `words` | `F59684` (+5.18 s) | Money | text: IN ITS WORDS: / EXPEDITION |
| `ensure` | `F59736` (+6.05 s) | Money | text: IN ITS WORDS: / EXPEDITION |
| `twenty-three` | `F59791` (+6.97 s) | Money | text: IN ITS WORDS: / EXPEDITION |
| `expedition` | `F59827` (+7.57 s) | Money | text: IN ITS WORDS: / EXPEDITION |
| `proceeded` | `F59868` (+8.25 s) | Money | text: PROCEEDED UNHINDERED" |
| `unhindered` | `F59911` (+8.97 s) | Money | text: PROCEEDED UNHINDERED" |

**183** · And the board drew the line back to twenty nineteen, when, by his own testimony, the first director of engineering had kept a damaged hull from an expedition.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `drew` | `F60010` (+0.52 s) | Money | text: THE LINE BACK TO |
| `line` | `F60028` (+0.82 s) | Money | text: THE LINE BACK TO |
| `twenty` | `F60069` (+1.50 s) | Money | text: 2019: |
| `nineteen` | `F60090` (+1.85 s) | Money | text: 2019: |
| `by` | `F60175` (+3.27 s) | Money | text: BY HIS OWN TESTIMONY, / THE FIRST DIRECTOR OF ENGINEERING |
| `own` | `F60195` (+3.60 s) | Money | text: BY HIS OWN TESTIMONY, / THE FIRST DIRECTOR OF ENGINEERING |
| `testimony` | `F60207` (+3.80 s) | Money | bump · <Chip text="BY HIS OWN TESTIMONY (2019)" tone={colors.cyan} size={28}  |
| `first` | `F60277` (+4.97 s) | Money | text: BY HIS OWN TESTIMONY, / THE FIRST DIRECTOR OF ENGINEERING |
| `engineering` | `F60326` (+5.78 s) | Money | text: BY HIS OWN TESTIMONY, / THE FIRST DIRECTOR OF ENGINEERING |
| `kept` | `F60372` (+6.55 s) | Money | text: KEPT / A DAMAGED HULL |
| `damaged` | `F60397` (+6.97 s) | Money | text: KEPT / A DAMAGED HULL |
| `hull` | `F60430` (+7.52 s) | Money | text: KEPT / A DAMAGED HULL |
| `expedition` | `F60468` (+8.15 s) | Money | text: KEPT / A DAMAGED HULL |

**184** · Leaving the post empty, it wrote, removed the possibility of a replacement director blocking the expedition.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Leaving` | `F60540` (+0.05 s) | Money | text: THE EMPTY POST |
| `empty` | `F60590` (+0.88 s) | Money | text: THE EMPTY POST |
| `removed` | `F60670` (+2.22 s) | Money | text: REMOVED THE POSSIBILITY |
| `possibility` | `F60702` (+2.75 s) | Money | text: REMOVED THE POSSIBILITY |
| `replacement` | `F60758` (+3.68 s) | Money | text: OF A REPLACEMENT BLOCKING IT |
| `blocking` | `F60827` (+4.83 s) | Money | text: OF A REPLACEMENT BLOCKING IT |

**185** · That spring, at sea and in port, the platform tipped more than once.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `spring` | `F60952` (+0.25 s) | Tipping | text: SPRING 2023 · |
| `sea` | `F61008` (+1.18 s) | Tipping | text: AT SEA |
| `port` | `F61047` (+1.83 s) | Tipping | text: AND IN PORT: |
| `platform` | `F61092` (+2.58 s) | Tipping | text: THE PLATFORM TIPPED |
| `tipped` | `F61130` (+3.22 s) | (scene list) | sound effect cue |
| `more` | `F61156` (+3.65 s) | Tipping | text: MORE THAN ONCE |
| `once` | `F61183` (+4.10 s) | Tipping | text: MORE THAN ONCE |

**186** · Once, in May, its bow went partly under water, and Titan's tail cone was lost.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Once` | `F61234` (+0.10 s) | Tipping | const tilt = span(f, wf(185, 'tipped') - 4, wf(185, 'tipped') + 18) * (1 - span( |
| `May` | `F61273` (+0.75 s) | Tipping | DatePill · <DatePill f={f} fps={fps} day={24} month={5} year={2023} dayWord={wf(1 |
| `bow` | `F61322` (+1.57 s) | Tipping | text: ITS BOW PARTLY UNDER WATER · |
| `under` | `F61380` (+2.53 s) | Tipping | const under = span(f, wf(186, 'under') - 6, wf(186, 'water') + 12); |
| `water` | `F61396` (+2.80 s) | Tipping | text: ITS BOW PARTLY UNDER WATER · |
| `Titan's` | `F61439` (+3.52 s) | Tipping | text: TITAN'S TAIL CONE: |
| `cone` | `F61486` (+4.30 s) | Tipping | text: TITAN'S TAIL CONE: |
| `lost` | `F61516` (+4.80 s) | (scene list) | sound effect cue |

**187** · How was a hull like this allowed to carry passengers?

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `How` | `F61577` (+0.05 s) | Law | text: How was a hull like this |
| `allowed` | `F61666` (+1.53 s) | Law | <Wd f={f} at={wf(187, 'allowed')} tone={colors.amber}>allowed </Wd> |
| `carry` | `F61693` (+1.98 s) | Law | <Wd f={f} at={wf(187, 'carry')} lightAt={wf(187, 'passengers')} tone={colors.amb |
| `passengers` | `F61712` (+2.30 s) | Law | <Wd f={f} at={wf(187, 'carry')} lightAt={wf(187, 'passengers')} tone={colors.amb |

**188** · By the N - T - S - B's reading of the law, it was not.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `N` | `F61818` (+0.55 s) | Law | text: By the NTSB's reading |
| `reading` | `F61875` (+1.50 s) | Law | text: By the NTSB's reading |
| `law` | `F61912` (+2.12 s) | Law | <Wd f={f} at={wf(188, 'law')} base={colors.ink} tone={colors.cyan}>of the law,</ |
| `not` | `F61971` (+3.10 s) | (scene list) | sound effect cue |

**189** · Under U - S law, the N - T - S - B notes, a submersible carrying even one passenger for hire is a small passenger vessel, and must be inspected by the Coast Guard.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `U` | `F62074` (+0.38 s) | Law | text: U.S. LAW, / THE NTSB NOTES: |
| `law` | `F62096` (+0.75 s) | Law | text: U.S. LAW, / THE NTSB NOTES: |
| `N` | `F62143` (+1.53 s) | Law | text: U.S. LAW, / THE NTSB NOTES: |
| `notes` | `F62184` (+2.22 s) | Law | text: U.S. LAW, / THE NTSB NOTES: |
| `submersible` | `F62232` (+3.02 s) | (scene list) | sound effect cue |
| `carrying` | `F62272` (+3.68 s) | Law | text: A SUBMERSIBLE CARRYING |
| `even` | `F62303` (+4.20 s) | Law | text: EVEN ONE |
| `one` | `F62328` (+4.62 s) | Law | text: EVEN ONE |
| `passenger` | `F62340` (+4.82 s) | Law | text: PASSENGER FOR HIRE |
| `hire` | `F62384` (+5.55 s) | Law | text: PASSENGER FOR HIRE |
| `is` | `F62411` (+6.00 s) | Law | text: IS A SMALL PASSENGER VESSEL |
| `vessel` | `F62481` (+7.17 s) | Law | text: IS A SMALL PASSENGER VESSEL |
| `must` | `F62530` (+7.98 s) | Law | text: MUST BE INSPECTED |
| `inspected` | `F62552` (+8.35 s) | Law | text: MUST BE INSPECTED |
| `by` | `F62585` (+8.90 s) | Law | text: BY THE COAST GUARD |
| `Guard` | `F62618` (+9.45 s) | Law | text: BY THE COAST GUARD |

**190** · OceanGate never registered Titan, and never arranged an inspection.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `OceanGate` | `F62666` (+0.05 s) | Law | text: OCEANGATE · TITAN: |
| `registered` | `F62726` (+1.05 s) | (scene list) | sound effect cue |
| `Titan` | `F62760` (+1.62 s) | Law | text: OCEANGATE · TITAN: |
| `arranged` | `F62828` (+2.75 s) | Law | <Chip text={f >= wf(190, 'arranged') ? 'NO INSPECTION ARRANGED' : 'NO INSPECTION |
| `inspection` | `F62863` (+3.33 s) | Law | bump · <span style={{opacity: lead(f, wf(190, 'inspection'), 8), transform: ` |

**191** · The Coast Guard board found that OceanGate described its paying passengers as mission specialists, with mandatory duties, to conceal that they were paying passengers.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `board` | `F62972` (+0.68 s) | Law | text: THE BOARD FOUND: |
| `found` | `F62993` (+1.03 s) | Law | text: THE BOARD FOUND: |
| `OceanGate` | `F63020` (+1.48 s) | Law | text: OCEANGATE DESCRIBED / PAYING PASSENGERS AS |
| `described` | `F63054` (+2.05 s) | Law | text: OCEANGATE DESCRIBED / PAYING PASSENGERS AS |
| `paying` | `F63097` (+2.77 s) | Law | text: OCEANGATE DESCRIBED / PAYING PASSENGERS AS |
| `passengers` | `F63120` (+3.15 s) | Law | text: OCEANGATE DESCRIBED / PAYING PASSENGERS AS |
| `mission` | `F63191` (+4.33 s) | Law | <Wd f={f} at={wf(191, 'mission')} lightAt={wf(191, 'specialists')} tone={colors. |
| `specialists` | `F63218` (+4.78 s) | Law | <Wd f={f} at={wf(191, 'mission')} lightAt={wf(191, 'specialists')} tone={colors. |
| `mandatory` | `F63283` (+5.87 s) | Law | text: WITH MANDATORY DUTIES · |
| `duties` | `F63322` (+6.52 s) | Law | text: WITH MANDATORY DUTIES · |
| `conceal` | `F63376` (+7.42 s) | (scene list) | sound effect cue |
| `they` | `F63423` (+8.20 s) | Law | text: TO CONCEAL / THAT THEY WERE PAYING PASSENGERS |
| `passengers` | `F63466` (+8.92 s) | Law | text: TO CONCEAL / THAT THEY WERE PAYING PASSENGERS |

**192** · The regulator's own guidance gets the same scrutiny.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `regulator's` | `F63544` (+0.12 s) | Law | text: THE REGULATOR'S OWN GUIDANCE: |
| `guidance` | `F63600` (+1.05 s) | Law | text: THE REGULATOR'S OWN GUIDANCE: |
| `same` | `F63651` (+1.90 s) | Law | text: THE SAME SCRUTINY |
| `scrutiny` | `F63670` (+2.22 s) | Law | text: THE SAME SCRUTINY |

**193** · The Coast Guard's voluntary guidance for passenger submersibles was published in July nineteen ninety-three.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Coast` | `F63735` (+0.12 s) | Law | lead · <g opacity={lead(f, wf(193, 'coast'), 8)}> |
| `voluntary` | `F63773` (+0.75 s) | Law | text: VOLUNTARY GUIDANCE |
| `passenger` | `F63844` (+1.93 s) | Law | text: NVIC 05-93 · / PASSENGER SUBMERSIBLES |
| `submersibles` | `F63876` (+2.47 s) | Law | text: NVIC 05-93 · / PASSENGER SUBMERSIBLES |
| `published` | `F63932` (+3.40 s) | Law | text: PUBLISHED |
| `July` | `F63969` (+4.02 s) | Law | lead · <line x1={X(1993) - 20} x2={X(1993) + 60} y1={520} y2={520} stroke={co |
| `nineteen` | `F63995` (+4.45 s) | Law | text: JUL / 1993 |
| `ninety-three` | `F64024` (+4.93 s) | Law | text: JUL / 1993 |

**194** · That December, a new law changed the definition, to cover any submersible with one passenger for hire.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `December` | `F64105` (+0.20 s) | (scene list) | sound effect cue |
| `law` | `F64177` (+1.40 s) | Law | text: DEC 1993 · / A NEW LAW |
| `definition` | `F64224` (+2.18 s) | Law | text: DEC 1993 · / A NEW LAW |
| `cover` | `F64288` (+3.25 s) | Law | text: ANY / SUBMERSIBLE |
| `submersible` | `F64330` (+3.95 s) | Law | text: ANY / SUBMERSIBLE |
| `one` | `F64387` (+4.90 s) | Law | text: ANY / SUBMERSIBLE |

**195** · As of its report in October twenty twenty-five, the N - T - S - B found, the guidance had never been updated to match.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `October` | `F64551` (+0.98 s) | Law | lead · <g opacity={lead(f, wf(195, 'october'), 8)}> |
| `twenty-five` | `F64599` (+1.78 s) | Law | <line x1={X(1993)} x2={X(1993) + (X(2025) - X(1993)) * span(f, wf(195, 'october' |
| `N` | `F64677` (+3.08 s) | Law | text: NTSB · |
| `found` | `F64719` (+3.78 s) | Law | text: NTSB · |
| `never` | `F64805` (+5.22 s) | Law | text: GUIDANCE NEVER UPDATED |
| `updated` | `F64835` (+5.72 s) | Law | text: NOT UPDATED TO MATCH · |
| `match` | `F64873` (+6.35 s) | Law | text: NOT UPDATED TO MATCH · |

**196** · The Coast Guard, it found, had no specific inspection standards for how a submersible is designed or built.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Coast` | `F64934` (+0.10 s) | Law | text: THE COAST GUARD: / NO SPECIFIC |
| `found` | `F64985` (+0.95 s) | Law | text: THE COAST GUARD: / NO SPECIFIC |
| `no` | `F65037` (+1.82 s) | Law | text: THE COAST GUARD: / NO SPECIFIC |
| `specific` | `F65050` (+2.03 s) | Law | text: THE COAST GUARD: / NO SPECIFIC |
| `inspection` | `F65084` (+2.60 s) | Law | text: THE COAST GUARD: / NO SPECIFIC |
| `standards` | `F65119` (+3.18 s) | Law | text: THE COAST GUARD: / NO SPECIFIC |
| `how` | `F65160` (+3.87 s) | Law | text: THE COAST GUARD: / NO SPECIFIC |
| `designed` | `F65226` (+4.97 s) | Law | text: FOR HOW A SUBMERSIBLE IS DESIGNED OR BUILT |
| `built` | `F65275` (+5.78 s) | Law | text: FOR HOW A SUBMERSIBLE IS DESIGNED OR BUILT |

**197** · That guidance also recommended that a submersible dive no deeper than its rescue could reach.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `guidance` | `F65325` (+0.28 s) | Law | text: THE GUIDANCE RECOMMENDED: |
| `recommended` | `F65382` (+1.23 s) | Law | text: THE GUIDANCE RECOMMENDED: |
| `submersible` | `F65439` (+2.18 s) | Law | text: DIVE / NO DEEPER THAN RESCUE CAN REACH |
| `dive` | `F65485` (+2.95 s) | Law | text: DIVE / NO DEEPER THAN RESCUE CAN REACH |
| `deeper` | `F65532` (+3.73 s) | Law | text: DIVE / NO DEEPER THAN RESCUE CAN REACH |
| `rescue` | `F65579` (+4.52 s) | Law | text: 45 M · WHERE ITS RESCUE IS EFFECTIVE (NVIC 05-93) |
| `reach` | `F65623` (+5.25 s) | Law | text: DIVE / NO DEEPER THAN RESCUE CAN REACH |

**198** · The N - T - S - B found that Titan regularly dived to the Titanic with no rescue standing by that could reach it.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `N` | `F65691` (+0.32 s) | Law | text: NTSB: |
| `found` | `F65753` (+1.35 s) | Law | text: NTSB: |
| `Titan` | `F65779` (+1.78 s) | Law | text: TITAN REGULARLY DIVED THERE |
| `regularly` | `F65815` (+2.38 s) | Law | <rect x={1560} y={340} width={70} height={480 * span(f, wf(198, 'regularly') - 6 |
| `dived` | `F65850` (+2.97 s) | Law | text: TITAN REGULARLY DIVED THERE |
| `Titanic` | `F65886` (+3.57 s) | Law | text: 3,840 M · THE TITANIC |
| `no` | `F65943` (+4.52 s) | Law | text: WITH NO RESCUE |
| `rescue` | `F65960` (+4.80 s) | Law | text: WITH NO RESCUE |
| `standing` | `F65988` (+5.27 s) | Law | text: STANDING BY THAT COULD REACH IT |
| `reach` | `F66055` (+6.38 s) | Law | text: STANDING BY THAT COULD REACH IT |

**199** · The N - T - S - B found that voluntary guidance and the rules for small passenger vessels were insufficient to make OceanGate follow the industry's established standards.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `N` | `F66131` (+0.28 s) | Law | text: NTSB: |
| `found` | `F66185` (+1.18 s) | Law | text: NTSB: |
| `voluntary` | `F66215` (+1.68 s) | Law | text: VOLUNTARY GUIDANCE |
| `guidance` | `F66247` (+2.22 s) | Law | text: VOLUNTARY GUIDANCE |
| `rules` | `F66301` (+3.12 s) | Law | text: AND SMALL-PASSENGER-VESSEL RULES |
| `vessels` | `F66385` (+4.52 s) | Law | text: AND SMALL-PASSENGER-VESSEL RULES |
| `insufficient` | `F66430` (+5.27 s) | (scene list) | sound effect cue |
| `make` | `F66490` (+6.27 s) | Law | text: TO MAKE OCEANGATE |
| `OceanGate` | `F66507` (+6.55 s) | Law | text: TO MAKE OCEANGATE |
| `follow` | `F66544` (+7.17 s) | Law | text: FOLLOW THE INDUSTRY'S / STANDARDS |
| `industry's` | `F66574` (+7.67 s) | Law | text: FOLLOW THE INDUSTRY'S / STANDARDS |
| `established` | `F66608` (+8.23 s) | Law | text: FOLLOW THE INDUSTRY'S / STANDARDS |
| `standards` | `F66645` (+8.85 s) | Law | text: FOLLOW THE INDUSTRY'S / STANDARDS |

