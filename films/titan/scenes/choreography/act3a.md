# Choreography index: Act 3a

Word-level choreography (PLAYBOOK §10.6), **generated from the scene code** (`python3 scripts/choreo_index.py` from the film folder; re-run after
any edit) so it cannot drift from it. One row per word-locked event: the spoken trigger, its measured frame (60 fps) and offset
from the sentence start, the scene component, and what changes (the on-screen text that arrives, or the driving line of
code). Kit: `lib/remotion/Kinetic.tsx` and `remotion/beats.tsx` (`KeyLine` parts land on their words, `ChunkQuote` reveals a
record quote chunk by chunk, `WordLine` builds a title word by word). Kit for this film: `remotion/parts*.tsx`.
Sync audit: `review/sync_audit.md`.

**58** · Had anyone warned about this?

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Had` | `F20468` (+0.00 s) | Opening | text: Had anyone |
| `warned` | `F20506` (+0.63 s) | Opening | <Wd f={f} at={wf(58, 'warned')} tone={colors.amber}>warned </Wd> |
| `about` | `F20527` (+0.98 s) | Opening | <Wd f={f} at={wf(58, 'about')} base={colors.ink}>about this?</Wd> |

**59** · The eighteenth of January, twenty eighteen.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `eighteenth` | `F20621` (+0.18 s) | Report2018 | DatePill · <DatePill f={f} fps={fps} day={18} month={1} year={2018} dayWord={wf(5 |
| `January` | `F20654` (+0.73 s) | Report2018 | DatePill · <DatePill f={f} fps={fps} day={18} month={1} year={2018} dayWord={wf(5 |
| `eighteen` | `F20718` (+1.80 s) | Report2018 | DatePill · <DatePill f={f} fps={fps} day={18} month={1} year={2018} dayWord={wf(5 |

**60** · The company's director of marine operations filed an inspection report on Titan's first hull.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `director` | `F20810` (+0.58 s) | Report2018 | text: DIRECTOR OF MARINE OPERATIONS · |
| `operations` | `F20870` (+1.58 s) | Report2018 | text: DIRECTOR OF MARINE OPERATIONS · |
| `inspection` | `F20943` (+2.80 s) | Report2018 | text: INSPECTION REPORT · |
| `report` | `F20979` (+3.40 s) | Report2018 | text: INSPECTION REPORT · |
| `first` | `F21046` (+4.52 s) | Report2018 | text: FIRST HULL · |
| `hull` | `F21068` (+4.88 s) | Report2018 | text: FIRST HULL · |

**61** · It listed twenty-six items needing action.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `twenty-six` | `F21139` (+0.58 s) | (scene list) | sound effect cue |
| `items` | `F21194` (+1.50 s) | Report2018 | <Wd f={f} at={wf(61, 'items')} lightAt={wf(61, 'action')}> ITEMS NEEDING ACTION< |
| `action` | `F21235` (+2.18 s) | Report2018 | <Wd f={f} at={wf(61, 'items')} lightAt={wf(61, 'action')}> ITEMS NEEDING ACTION< |

**62** · On the hull, he wrote that the cut-off ends of the cylinder showed very visible signs of delamination, and he warned of potential inter-laminar fatigue due to pressure cycling.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `hull` | `F21300` (+0.30 s) | Report2018 | text: ON THE HULL: |
| `cut-off` | `F21372` (+1.50 s) | Report2018 | text: THE CUT-OFF ENDS · |
| `ends` | `F21399` (+1.95 s) | Report2018 | hl= · <RecordPage set="cg098" start={sf(62) - 16} end={photoIn + 6} hl={[{ke |
| `cylinder` | `F21428` (+2.43 s) | Report2018 | text: THE CUT-OFF ENDS · |
| `very` | `F21483` (+3.35 s) | Report2018 | text: DELAMINATION |
| `visible` | `F21506` (+3.73 s) | (scene list) | sound effect cue |
| `delamination` | `F21563` (+4.68 s) | Report2018 | text: DELAMINATION |
| `warned` | `F21649` (+6.12 s) | Report2018 | const backIn = wf(62, 'warned'); |
| `potential` | `F21677` (+6.58 s) | Report2018 | hl= · <RecordPage set="cg098" start={backIn - 4} end={ef(62) + 30} hl={[{key |
| `inter-laminar` | `F21716` (+7.23 s) | (scene list) | sound effect cue |
| `fatigue` | `F21757` (+7.92 s) | Report2018 | <Wd f={f} at={wf(62, 'fatigue')} lightAt={wf(62, 'cycling')} tone={colors.amber} |
| `cycling` | `F21836` (+9.23 s) | Report2018 | <Wd f={f} at={wf(62, 'fatigue')} lightAt={wf(62, 'cycling')} tone={colors.amber} |

**63** · The next day, he met the chief executive and argued for more testing of the hull.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `next` | `F21899` (+0.10 s) | Meeting | DatePill · <DatePill f={f} fps={fps} day={19} month={1} year={2018} dayWord={wf(6 |
| `day` | `F21916` (+0.38 s) | Meeting | DatePill · <DatePill f={f} fps={fps} day={19} month={1} year={2018} dayWord={wf(6 |
| `met` | `F21953` (+1.00 s) | Meeting | text: MEETING WITH THE CEO |
| `executive` | `F21988` (+1.58 s) | Meeting | text: MEETING WITH THE CEO |
| `argued` | `F22042` (+2.48 s) | Meeting | text: HE ARGUED FOR |
| `more` | `F22075` (+3.03 s) | Meeting | text: MORE TESTING |
| `testing` | `F22089` (+3.27 s) | Meeting | text: MORE TESTING |
| `hull` | `F22129` (+3.93 s) | Meeting | text: OF THE HULL |

**64** · The chief executive recorded the meeting.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `chief` | `F22178` (+0.13 s) | Meeting | text: THE CEO RECORDED THE MEETING · MBI EXHIBIT CG-100 |
| `recorded` | `F22227` (+0.95 s) | (scene list) | sound effect cue |
| `meeting` | `F22265` (+1.58 s) | Meeting | text: THE CEO RECORDED THE MEETING · MBI EXHIBIT CG-100 |

**65** · On that recording, he answered that the cut-off ends were scrap, cut away for that reason, and that acoustic monitoring would tell him way before the hull failed.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `On` | `F22316` (+0.05 s) | Meeting | <Note o={vis(f, wf(65, 'on'), ef(65) + 20)}> |
| `answered` | `F22394` (+1.35 s) | Meeting | text: THE CEO: |
| `cut-off` | `F22431` (+1.97 s) | Meeting | text: THE CUT-OFF ENDS WERE SCRAP |
| `scrap` | `F22485` (+2.87 s) | (scene list) | sound effect cue |
| `cut` | `F22531` (+3.63 s) | Meeting | hl= · <RecordPage set="cg100" start={pageIn} end={wf(65, 'acoustic') - 8} hl |
| `reason` | `F22583` (+4.50 s) | Meeting | hl= · <RecordPage set="cg100" start={pageIn} end={wf(65, 'acoustic') - 8} hl |
| `acoustic` | `F22637` (+5.40 s) | Meeting | <Wd f={f} at={wf(65, 'acoustic')} lightAt={wf(65, 'monitoring')} tone={colors.cy |
| `monitoring` | `F22669` (+5.93 s) | (scene list) | sound effect cue |
| `tell` | `F22709` (+6.60 s) | Meeting | text: WOULD TELL HIM WAY BEFORE |
| `failed` | `F22798` (+8.08 s) | Meeting | text: WOULD TELL HIM WAY BEFORE |

**66** · Four days later, the director was fired.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Four` | `F22852` (+0.02 s) | Fired | <div style={{position: 'absolute', right: 96, top: 84, opacity: vis(f, wf(66, 'f |
| `later` | `F22881` (+0.50 s) | Fired | DatePill · <DatePill f={f} fps={fps} day={23} month={1} year={2018} dayWord={wf(6 |
| `director` | `F22924` (+1.22 s) | Fired | text: THE DIRECTOR OF MARINE OPERATIONS · |
| `fired` | `F22965` (+1.90 s) | (scene list) | sound effect cue |

**67** · The termination letter said the two of them were at an impasse over the hull.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `termination` | `F23026` (+0.12 s) | Fired | hl= · <RecordPage set="roi" start={sf(66) - 16} end={ef(67) + 24} hl={[{key: |
| `letter` | `F23062` (+0.72 s) | Fired | text: THE LETTER: |
| `said` | `F23083` (+1.07 s) | Fired | text: THE LETTER: |
| `two` | `F23101` (+1.37 s) | Fired | text: AN IMPASSE |
| `impasse` | `F23160` (+2.35 s) | (scene list) | sound effect cue |
| `over` | `F23194` (+2.92 s) | Fired | text: OVER THE HULL |
| `hull` | `F23213` (+3.23 s) | Fired | text: OVER THE HULL |

**68** · In March, more than twenty submersible professionals signed a letter urging the chief executive to put safety first, and to follow the industry's established practices.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `March` | `F23271` (+0.18 s) | Fired | text: MARCH 2018 |
| `twenty` | `F23333` (+1.22 s) | (scene list) | sound effect cue |
| `submersible` | `F23364` (+1.73 s) | Fired | text: SUBMERSIBLE PROFESSIONALS SIGNED |
| `professionals` | `F23400` (+2.33 s) | Fired | text: SUBMERSIBLE PROFESSIONALS SIGNED |
| `signed` | `F23445` (+3.08 s) | Fired | text: A LETTER TO THE CEO |
| `letter` | `F23469` (+3.48 s) | Fired | text: A LETTER TO THE CEO |
| `urging` | `F23497` (+3.95 s) | Fired | text: URGING HIM |
| `put` | `F23586` (+5.43 s) | Fired | text: TO PUT SAFETY FIRST |
| `first` | `F23635` (+6.25 s) | Fired | text: TO PUT SAFETY FIRST |
| `follow` | `F23689` (+7.15 s) | Fired | text: AND FOLLOW THE INDUSTRY'S / ESTABLISHED PRACTICES |
| `industry's` | `F23717` (+7.62 s) | Fired | text: AND FOLLOW THE INDUSTRY'S / ESTABLISHED PRACTICES |
| `established` | `F23749` (+8.15 s) | Fired | text: AND FOLLOW THE INDUSTRY'S / ESTABLISHED PRACTICES |
| `practices` | `F23785` (+8.75 s) | Fired | text: AND FOLLOW THE INDUSTRY'S / ESTABLISHED PRACTICES |

**69** · It was never sent formally.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `never` | `F23867` (+0.28 s) | (scene list) | sound effect cue |
| `formally` | `F23904` (+0.90 s) | Fired | <Chip text={f >= wf(69, 'formally') ? 'NEVER SENT FORMALLY' : 'NEVER SENT'} tone |

**70** · He received it, called the head of the industry committee behind it, and said he was leaving the association.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `received` | `F23967` (+0.12 s) | Fired | text: HE RECEIVED IT · |
| `called` | `F24024` (+1.07 s) | Fired | text: CALLED THE HEAD OF THE INDUSTRY COMMITTEE · |
| `committee` | `F24095` (+2.25 s) | Fired | text: CALLED THE HEAD OF THE INDUSTRY COMMITTEE · |
| `said` | `F24175` (+3.58 s) | Fired | text: SAID HE WAS LEAVING |
| `leaving` | `F24205` (+4.08 s) | Fired | text: SAID HE WAS LEAVING |
| `association` | `F24231` (+4.52 s) | Fired | text: THE ASSOCIATION |

**71** · That was the first hull.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `first` | `F24361` (+0.68 s) | FirstHull | lead · <g transform="translate(150 230) scale(0.42)" opacity={lead(f, wf(71,  |
| `hull` | `F24382` (+1.03 s) | FirstHull | text: HULL 1 |

**72** · But the failure mode named in that report, delamination, is what the investigators would find in the second.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `failure` | `F24438` (+0.27 s) | FirstHull | text: THE FAILURE MODE |
| `mode` | `F24462` (+0.67 s) | FirstHull | text: THE FAILURE MODE |
| `named` | `F24480` (+0.97 s) | FirstHull | text: NAMED IN THE 2018 REPORT · |
| `report` | `F24515` (+1.55 s) | FirstHull | text: NAMED IN THE 2018 REPORT · |
| `delamination` | `F24558` (+2.27 s) | FirstHull | lead · <text x={interpolate(word, [0, 1], [150 + cx * 0.42, 1010 + cx * 0.42] |
| `what` | `F24634` (+3.53 s) | FirstHull | text: WHAT THE INVESTIGATORS |
| `investigators` | `F24651` (+3.82 s) | FirstHull | text: WHAT THE INVESTIGATORS |
| `find` | `F24706` (+4.73 s) | FirstHull | text: FOUND IN HULL 2 |
| `second` | `F24742` (+5.33 s) | (scene list) | sound effect cue |

**73** · In twenty nineteen, a crack was found in the first hull.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `twenty` | `F24808` (+0.17 s) | FirstHull | text: 2019 |
| `nineteen` | `F24833` (+0.58 s) | FirstHull | text: 2019 |
| `crack` | `F24895` (+1.62 s) | (scene list) | sound effect cue |
| `found` | `F24930` (+2.20 s) | FirstHull | bump · <span style={{opacity: lead(f, wf(73, 'crack'), 8), transform: `scale( |
| `first` | `F24963` (+2.75 s) | FirstHull | text: IN THE FIRST HULL |
| `hull` | `F24988` (+3.17 s) | FirstHull | text: IN THE FIRST HULL |

**74** · The company's first director of engineering testified that he refused to sign it off, and that his refusal kept it from that year's expedition.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `company's` | `F25037` (+0.10 s) | FirstHull | lead · <Card x={0} y={90} w={900} o={lead(f, wf(74, "company's"), 10)} accent |
| `first` | `F25068` (+0.62 s) | FirstHull | text: THE FIRST DIRECTOR OF ENGINEERING · / TESTIMONY |
| `engineering` | `F25117` (+1.43 s) | FirstHull | text: THE FIRST DIRECTOR OF ENGINEERING · / TESTIMONY |
| `testified` | `F25157` (+2.10 s) | FirstHull | text: THE FIRST DIRECTOR OF ENGINEERING · / TESTIMONY |
| `refused` | `F25216` (+3.08 s) | (scene list) | sound effect cue |
| `sign` | `F25260` (+3.82 s) | FirstHull | text: REFUSED / TO SIGN IT OFF |
| `off` | `F25284` (+4.22 s) | FirstHull | text: REFUSED / TO SIGN IT OFF |
| `his` | `F25326` (+4.92 s) | FirstHull | text: HIS REFUSAL / KEPT IT FROM |
| `refusal` | `F25336` (+5.08 s) | FirstHull | text: HIS REFUSAL / KEPT IT FROM |
| `kept` | `F25375` (+5.73 s) | FirstHull | text: HIS REFUSAL / KEPT IT FROM |
| `year's` | `F25426` (+6.58 s) | FirstHull | text: THE 2019 EXPEDITION |
| `expedition` | `F25443` (+6.87 s) | FirstHull | text: THE 2019 EXPEDITION |

**75** · He said it angered the chief executive, and led to his firing.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `angered` | `F25540` (+0.52 s) | FirstHull | text: IT ANGERED / THE CEO · |
| `chief` | `F25568` (+0.98 s) | FirstHull | text: IT ANGERED / THE CEO · |
| `executive` | `F25583` (+1.23 s) | FirstHull | text: IT ANGERED / THE CEO · |
| `led` | `F25634` (+2.08 s) | FirstHull | text: LED TO HIS FIRING |
| `firing` | `F25663` (+2.57 s) | FirstHull | text: LED TO HIS FIRING |

**76** · The company's letter to him cited the cancelled expedition.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `company's` | `F25721` (+0.10 s) | FirstHull | lead · <Card x={0} y={430} w={900} o={lead(f, wf(76, "company's"), 10)} accen |
| `letter` | `F25750` (+0.58 s) | FirstHull | text: THE COMPANY'S LETTER TO HIM |
| `cited` | `F25800` (+1.42 s) | FirstHull | text: CITED |
| `cancelled` | `F25829` (+1.90 s) | FirstHull | text: THE CANCELLED EXPEDITION |
| `expedition` | `F25856` (+2.35 s) | FirstHull | text: THE CANCELLED EXPEDITION |

**77** · A second hull was built: the one lost in twenty twenty-three.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `second` | `F25938` (+0.17 s) | Hull2 | text: HULL 2 |
| `hull` | `F25961` (+0.55 s) | Hull2 | text: HULL 2 |
| `built` | `F25986` (+0.97 s) | Hull2 | <Wd f={f} at={wf(77, 'built')} style={T(30, {})}>· BUILT</Wd> |
| `one` | `F26036` (+1.80 s) | Hull2 | text: LOST IN 2023 |
| `lost` | `F26047` (+1.98 s) | Hull2 | text: LOST IN 2023 |
| `twenty-three` | `F26095` (+2.78 s) | Hull2 | text: LOST IN 2023 |

**78** · Its dives were numbered fifty to eighty-eight.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `dives` | `F26176` (+0.28 s) | Hull2 | text: DIVES |
| `numbered` | `F26210` (+0.85 s) | Hull2 | text: DIVES |
| `fifty` | `F26234` (+1.25 s) | Hull2 | <Wd f={f} at={wf(78, 'fifty')} tone={colors.cyan} bold>50</Wd> |
| `to` | `F26266` (+1.78 s) | Hull2 | <Wd f={f} at={wf(78, 'to')}> → </Wd> |
| `eighty-eight` | `F26276` (+1.95 s) | Hull2 | rows={DIVES2.map((d, i) => ({dive: String(d), depth: 3840, at: wf(78, 'eighty-ei |

**79** · Now, dive eighty.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `eighty` | `F26502` (+1.18 s) | (scene list) | sound effect cue |

**80** · On the fifteenth of July, twenty twenty-two, Titan reached the Titanic and came back up.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `fifteenth` | `F26571` (+0.22 s) | Dive80 | DatePill · <DatePill f={f} fps={fps} day={15} month={7} year={2022} dayWord={wf(8 |
| `July` | `F26605` (+0.78 s) | Dive80 | DatePill · <DatePill f={f} fps={fps} day={15} month={7} year={2022} dayWord={wf(8 |
| `twenty-two` | `F26657` (+1.65 s) | Dive80 | DatePill · <DatePill f={f} fps={fps} day={15} month={7} year={2022} dayWord={wf(8 |
| `reached` | `F26741` (+3.05 s) | Dive80 | text: REACHED THE TITANIC · |
| `Titanic` | `F26764` (+3.43 s) | Dive80 | text: REACHED THE TITANIC · |
| `came` | `F26819` (+4.35 s) | Dive80 | text: BACK UP |
| `up` | `F26849` (+4.85 s) | Dive80 | text: BACK UP |

**81** · Near the surface, the people inside heard a loud bang.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Near` | `F26890` (+0.02 s) | Dive80 | text: NEAR THE SURFACE: |
| `surface` | `F26909` (+0.33 s) | Dive80 | text: NEAR THE SURFACE: |
| `people` | `F26958` (+1.15 s) | Dive80 | text: HEARD INSIDE · |
| `heard` | `F27011` (+2.03 s) | Dive80 | text: HEARD INSIDE · |
| `loud` | `F27029` (+2.33 s) | Dive80 | text: A LOUD BANG |
| `bang` | `F27057` (+2.80 s) | (scene list) | sound effect cue |

**82** · So did the crew of a small boat above.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `crew` | `F27133` (+0.47 s) | Dive80 | text: AND BY A SMALL BOAT'S CREW |
| `boat` | `F27182` (+1.28 s) | Dive80 | text: AND BY A SMALL BOAT'S CREW |

**83** · The records differ on exactly where it happened, but all place it near the surface.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `records` | `F27256` (+0.10 s) | Dive80 | text: RECORDS DIFFER |
| `differ` | `F27283` (+0.55 s) | Dive80 | text: RECORDS DIFFER |
| `exactly` | `F27312` (+1.03 s) | Dive80 | text: ON EXACTLY WHERE · |
| `where` | `F27344` (+1.57 s) | Dive80 | text: ON EXACTLY WHERE · |
| `all` | `F27416` (+2.77 s) | Dive80 | text: ALL PLACE IT |
| `place` | `F27427` (+2.95 s) | Dive80 | text: ALL PLACE IT |
| `near` | `F27456` (+3.43 s) | Dive80 | text: NEAR THE SURFACE |
| `surface` | `F27475` (+3.75 s) | Dive80 | text: NEAR THE SURFACE |

**84** · On channel two, the acoustic sensor peaked above twenty-five thousand millivolts.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `channel` | `F27539` (+0.17 s) | Dive80 | lead · <div style={{opacity: lead(f, wf(84, 'channel'), 8)}}> |
| `two` | `F27562` (+0.55 s) | Dive80 | bump · <Chip text={f >= wf(84, 'peaked') ? 'CHANNEL 2 · 25,687 mV' : f >= wf( |
| `acoustic` | `F27601` (+1.20 s) | Dive80 | text: THE ACOUSTIC SENSOR |
| `sensor` | `F27634` (+1.75 s) | Dive80 | text: THE ACOUSTIC SENSOR |
| `peaked` | `F27660` (+2.18 s) | (scene list) | sound effect cue |
| `above` | `F27679` (+2.50 s) | Dive80 | text: PEAKED ABOVE 25,000 |
| `twenty-five` | `F27697` (+2.80 s) | Dive80 | bump · <Chip text={f >= wf(84, 'peaked') ? 'CHANNEL 2 · 25,687 mV' : f >= wf( |
| `thousand` | `F27745` (+3.60 s) | Dive80 | text: PEAKED ABOVE 25,000 |
| `millivolts` | `F27774` (+4.08 s) | Dive80 | text: PEAKED ABOVE 25,000 |

**85** · At the same moment, the strain gauges beside it jumped.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `same` | `F27848` (+0.25 s) | Dive80 | text: SAME MOMENT: |
| `moment` | `F27863` (+0.50 s) | Dive80 | text: SAME MOMENT: |
| `strain` | `F27906` (+1.22 s) | Dive80 | text: THE STRAIN GAUGES |
| `gauges` | `F27931` (+1.63 s) | Dive80 | text: THE STRAIN GAUGES |
| `beside` | `F27954` (+2.02 s) | Dive80 | text: BESIDE IT |
| `jumped` | `F27993` (+2.67 s) | (scene list) | sound effect cue |

**86** · Phil Brooks was the director of engineering by then, promoted from software engineer before that season.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Phil` | `F28030` (+0.00 s) | Brooks | text: PHIL BROOKS |
| `Brooks` | `F28047` (+0.28 s) | Brooks | text: PHIL BROOKS |
| `director` | `F28087` (+0.95 s) | Brooks | text: DIRECTOR OF ENGINEERING, 2021–23 |
| `engineering` | `F28119` (+1.48 s) | Brooks | text: DIRECTOR OF ENGINEERING, 2021–23 |
| `promoted` | `F28197` (+2.78 s) | Brooks | text: PROMOTED FROM |
| `software` | `F28242` (+3.53 s) | Brooks | text: SOFTWARE ENGINEER |
| `engineer` | `F28270` (+4.00 s) | Brooks | text: SOFTWARE ENGINEER |
| `before` | `F28298` (+4.47 s) | Brooks | text: BEFORE THE 2022 SEASON |
| `season` | `F28334` (+5.07 s) | Brooks | text: BEFORE THE 2022 SEASON |

**87** · He testified that he had no background in mechanical engineering or materials, and that the agreement was that others, mainly the chief executive, would handle those tasks.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `testified` | `F28407` (+0.13 s) | Brooks | text: HE TESTIFIED: |
| `no` | `F28481` (+1.37 s) | Brooks | text: NO BACKGROUND IN |
| `background` | `F28497` (+1.63 s) | Brooks | text: NO BACKGROUND IN |
| `mechanical` | `F28536` (+2.28 s) | Brooks | text: MECHANICAL ENGINEERING OR MATERIALS |
| `materials` | `F28618` (+3.65 s) | Brooks | text: MECHANICAL ENGINEERING OR MATERIALS |
| `agreement` | `F28699` (+5.00 s) | Brooks | text: THE AGREEMENT: |
| `others` | `F28760` (+6.02 s) | Brooks | text: OTHERS, |
| `mainly` | `F28803` (+6.73 s) | Brooks | text: OTHERS, |
| `chief` | `F28831` (+7.20 s) | Brooks | text: MAINLY THE CEO, |
| `executive` | `F28846` (+7.45 s) | Brooks | text: MAINLY THE CEO, |
| `handle` | `F28904` (+8.42 s) | Brooks | text: WOULD HANDLE THOSE TASKS |
| `tasks` | `F28941` (+9.03 s) | Brooks | text: WOULD HANDLE THOSE TASKS |

**88** · Under oath, he described what they did after the bang.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `oath` | `F29034` (+0.35 s) | Brooks | lead · <div style={{marginTop: 26, opacity: lead(f, wf(88, 'oath'), 8)}}> |
| `described` | `F29069` (+0.93 s) | Brooks | bump · <Chip text={f >= wf(88, 'after') ? 'UNDER OATH · WHAT THEY DID AFTER T |
| `after` | `F29149` (+2.27 s) | Brooks | bump · <Chip text={f >= wf(88, 'after') ? 'UNDER OATH · WHAT THEY DID AFTER T |
| `bang` | `F29175` (+2.70 s) | Brooks | bump · <Chip text={f >= wf(88, 'after') ? 'UNDER OATH · WHAT THEY DID AFTER T |

**89** · They inspected the hull as best they could.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `hull` | `F29282` (+0.85 s) | Brooks | hl= · <RecordPage set="cg112" start={sf(89) - 14} end={sf(90) + 6} hl={[{key |
| `best` | `F29308` (+1.28 s) | (scene list) | sound effect cue |

**90** · But the inside was lined by an insert, and the outside was covered.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `inside` | `F29399` (+0.28 s) | Brooks | text: INSIDE: LINED BY AN INSERT |
| `insert` | `F29483` (+1.68 s) | Brooks | text: INSIDE: LINED BY AN INSERT |
| `outside` | `F29539` (+2.62 s) | Brooks | text: OUTSIDE: COVERED |
| `covered` | `F29578` (+3.27 s) | Brooks | text: OUTSIDE: COVERED |

**91** · You can take a flashlight, he said, and look down a small gap between the insert and the hull.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `flashlight` | `F29662` (+0.52 s) | (scene list) | sound effect cue |
| `and` | `F29745` (+1.90 s) | Brooks | text: AND THE HULL |
| `look` | `F29753` (+2.03 s) | Brooks | text: LOOK DOWN |
| `down` | `F29764` (+2.22 s) | Brooks | text: LOOK DOWN |
| `small` | `F29786` (+2.58 s) | Brooks | text: A SMALL GAP |
| `gap` | `F29809` (+2.97 s) | Brooks | text: A SMALL GAP |
| `between` | `F29830` (+3.32 s) | Brooks | text: BETWEEN THE INSERT |
| `insert` | `F29863` (+3.87 s) | Brooks | text: BETWEEN THE INSERT |
| `hull` | `F29904` (+4.55 s) | Brooks | text: AND THE HULL |

**93** · The insert, he said, was never removed.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `insert` | `F30238` (+0.15 s) | Brooks | text: THE INSERT: |
| `never` | `F30324` (+1.58 s) | (scene list) | sound effect cue |
| `removed` | `F30341` (+1.87 s) | Brooks | text: NEVER REMOVED · |

**94** · That was never done.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `never` | `F30405` (+0.33 s) | Brooks | text: NEVER DONE |
| `done` | `F30422` (+0.62 s) | Brooks | text: NEVER DONE |

**95** · So the main check was the data.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `main` | `F30487` (+0.28 s) | Brooks | text: THE MAIN CHECK: THE DATA · |
| `data` | `F30549` (+1.32 s) | Brooks | text: THE MAIN CHECK: THE DATA · |

**96** · The strain showed a shift in level, on two of the sixteen channels.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `shift` | `F30665` (+1.07 s) | (scene list) | sound effect cue |
| `level` | `F30694` (+1.55 s) | Brooks | text: A SHIFT IN LEVEL · |
| `two` | `F30740` (+2.32 s) | Brooks | text: 2 OF 16 |
| `sixteen` | `F30774` (+2.88 s) | Brooks | text: 2 OF 16 |
| `channels` | `F30804` (+3.38 s) | Brooks | text: CHANNELS |

**97** · A sudden shift, he said, is something to be concerned about, for sure.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `sudden` | `F30871` (+0.18 s) | Brooks | <Wd f={f} at={wf(97, 'sudden')} lightAt={wf(97, 'shift')} tone={colors.red}>"A S |
| `shift` | `F30893` (+0.55 s) | Brooks | <Wd f={f} at={wf(97, 'sudden')} lightAt={wf(97, 'shift')} tone={colors.red}>"A S |
| `said` | `F30930` (+1.17 s) | Brooks | <Wd f={f} at={wf(97, 'said')}>· HE SAID · </Wd> |
| `something` | `F30971` (+1.85 s) | Brooks | <Wd f={f} at={wf(97, 'something')} lightAt={wf(97, 'concerned')} tone={colors.re |
| `concerned` | `F31004` (+2.40 s) | Brooks | <Wd f={f} at={wf(97, 'something')} lightAt={wf(97, 'concerned')} tone={colors.re |
| `sure` | `F31068` (+3.47 s) | Brooks | text: FOR SURE" |

**98** · He added that he was not a strain expert, and that this one looked fairly minor.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `added` | `F31122` (+0.13 s) | Brooks | text: HE ADDED: |
| `not` | `F31169` (+0.92 s) | Brooks | text: NOT A STRAIN EXPERT · |
| `expert` | `F31213` (+1.65 s) | Brooks | text: NOT A STRAIN EXPERT · |
| `this` | `F31267` (+2.55 s) | Brooks | text: THIS ONE LOOKED |
| `one` | `F31284` (+2.83 s) | Brooks | text: THIS ONE LOOKED |
| `fairly` | `F31312` (+3.30 s) | Brooks | <Wd f={f} at={wf(98, 'fairly')} lightAt={wf(98, 'minor')} tone={colors.amber} bo |
| `minor` | `F31332` (+3.63 s) | (scene list) | sound effect cue |

**102** · What did they think the bang was?

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `What` | `F32975` (+0.00 s) | Theory | text: What did they think |
| `bang` | `F33028` (+0.88 s) | Theory | <Wd f={f} at={wf(102, 'bang')} tone={colors.amber}>the bang was?</Wd> |

**103** · Brooks testified that the chief executive's theory was the frame.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Brooks` | `F33108` (+-0.02 s) | Theory | text: BROOKS: |
| `testified` | `F33127` (+0.30 s) | Theory | text: BROOKS: |
| `chief` | `F33184` (+1.25 s) | Theory | text: THE CEO'S / THEORY WAS |
| `executive's` | `F33199` (+1.50 s) | Theory | text: THE CEO'S / THEORY WAS |
| `theory` | `F33239` (+2.17 s) | Theory | text: THE CEO'S / THEORY WAS |
| `frame` | `F33301` (+3.20 s) | Theory | text: THE FRAME |

**104** · The hull compresses slightly on the way down and the frame bolted to it does not, so on the way up the frame may have sprung, and snapped back into shape.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `hull` | `F33360` (+0.15 s) | Theory | text: DOWN: HULL COMPRESSES, |
| `compresses` | `F33375` (+0.40 s) | Theory | text: DOWN: HULL COMPRESSES, |
| `down` | `F33463` (+1.87 s) | Theory | const down = span(f, wf(104, 'compresses') - 6, wf(104, 'down') + 12) * (1 - spa |
| `frame` | `F33512` (+2.68 s) | Theory | text: FRAME DOES NOT · |
| `not` | `F33594` (+4.05 s) | Theory | text: FRAME DOES NOT · |
| `up` | `F33669` (+5.30 s) | Theory | text: UP: FRAME / MAY HAVE SPRUNG, |
| `may` | `F33720` (+6.15 s) | Theory | text: UP: FRAME / MAY HAVE SPRUNG, |
| `sprung` | `F33742` (+6.52 s) | (scene list) | sound effect cue |
| `snapped` | `F33794` (+7.38 s) | Theory | text: SNAPS BACK |
| `back` | `F33815` (+7.73 s) | Theory | const sprung = span(f, wf(104, 'sprung') - 6, wf(104, 'sprung') + 10) * (1 - spa |
| `shape` | `F33843` (+8.20 s) | Theory | text: SNAPS BACK |

**105** · Brooks said that, without being a qualified mechanical engineer, he found it plausible at the time.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Brooks` | `F33890` (+-0.02 s) | Theory | text: BROOKS, / NOT A QUALIFIED |
| `without` | `F33945` (+0.90 s) | Theory | text: BROOKS, / NOT A QUALIFIED |
| `qualified` | `F33984` (+1.55 s) | Theory | text: BROOKS, / NOT A QUALIFIED |
| `mechanical` | `F34015` (+2.07 s) | Theory | text: BROOKS, / NOT A QUALIFIED |
| `engineer` | `F34046` (+2.58 s) | Theory | text: BROOKS, / NOT A QUALIFIED |
| `found` | `F34102` (+3.52 s) | Theory | text: BROOKS, / NOT A QUALIFIED |
| `plausible` | `F34123` (+3.87 s) | Theory | <Wd f={f} at={wf(105, 'plausible')} lightAt={wf(105, 'time')} tone={colors.amber |
| `time` | `F34169` (+4.63 s) | Theory | <Wd f={f} at={wf(105, 'plausible')} lightAt={wf(105, 'time')} tone={colors.amber |

**106** · A contractor on that expedition testified that she asked him whether the data could show delamination.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `contractor` | `F34235` (+0.12 s) | Theory | text: A CONTRACTOR / TESTIFIED |
| `expedition` | `F34288` (+1.00 s) | Theory | text: A CONTRACTOR / TESTIFIED |
| `testified` | `F34327` (+1.65 s) | Theory | text: A CONTRACTOR / TESTIFIED |
| `she` | `F34373` (+2.42 s) | Theory | text: A CONTRACTOR / TESTIFIED |
| `asked` | `F34386` (+2.63 s) | Theory | text: A CONTRACTOR / TESTIFIED |
| `data` | `F34438` (+3.50 s) | Theory | text: COULD THE DATA SHOW DELAMINATION? · |
| `delamination` | `F34487` (+4.32 s) | Theory | text: COULD THE DATA SHOW DELAMINATION? · |

**107** · In her account, he said it was only a few microns, and that the next two dives would go ahead, with a visual inspection back in Seattle.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `account` | `F34588` (+0.37 s) | Theory | text: HE SAID: |
| `said` | `F34633` (+1.12 s) | Theory | text: HE SAID: |
| `only` | `F34656` (+1.50 s) | Theory | text: HE SAID: |
| `microns` | `F34693` (+2.12 s) | (scene list) | sound effect cue |
| `next` | `F34768` (+3.37 s) | Theory | text: NEXT TWO DIVES AHEAD · |
| `two` | `F34785` (+3.65 s) | Theory | hl= · <RecordPage set="cg112" start={sf(106) - 16} end={ef(107) + 20} hl={[{ |
| `ahead` | `F34838` (+4.53 s) | Theory | text: NEXT TWO DIVES AHEAD · |
| `visual` | `F34889` (+5.38 s) | Theory | text: LOOK IN SEATTLE |
| `Seattle` | `F34969` (+6.72 s) | Theory | text: LOOK IN SEATTLE |

**108** · Brooks himself testified that they had converted the shift into a physical distance, and judged it a relatively small movement.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Brooks` | `F35024` (+-0.03 s) | Theory | text: BROOKS TESTIFIED: |
| `testified` | `F35077` (+0.85 s) | Theory | text: BROOKS TESTIFIED: |
| `converted` | `F35140` (+1.90 s) | Theory | text: THE SHIFT / A PHYSICAL DISTANCE · |
| `shift` | `F35183` (+2.62 s) | Theory | text: THE SHIFT / A PHYSICAL DISTANCE · |
| `physical` | `F35226` (+3.33 s) | (scene list) | sound effect cue |
| `distance` | `F35254` (+3.80 s) | Theory | text: THE SHIFT / A PHYSICAL DISTANCE · |
| `judged` | `F35313` (+4.78 s) | Theory | text: JUDGED |
| `relatively` | `F35350` (+5.40 s) | (scene list) | sound effect cue |
| `movement` | `F35409` (+6.38 s) | Theory | text: JUDGED |

**109** · Titan dived again on the nineteenth of July.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `dived` | `F35507` (+0.48 s) | After80 | lead · <span style={{opacity: lead(f, wf(109, 'dived'), 8)}}> |
| `again` | `F35530` (+0.87 s) | After80 | <Chip text={f >= wf(109, 'again') ? 'DIVE 81 · BACK DOWN' : 'DIVE 81'} tone={col |
| `nineteenth` | `F35571` (+1.55 s) | (scene list) | sound effect cue |
| `July` | `F35613` (+2.25 s) | After80 | DatePill · <DatePill f={f} fps={fps} day={19} month={7} year={2022} dayWord={wf(1 |

**110** · Brooks testified that after that dive, they didn't see any further shifts in strain data.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Brooks` | `F35678` (+-0.03 s) | After80 | text: BROOKS: |
| `testified` | `F35698` (+0.30 s) | After80 | text: BROOKS: |
| `after` | `F35758` (+1.30 s) | After80 | text: AFTER THAT DIVE: / NO FURTHER |
| `dive` | `F35790` (+1.83 s) | After80 | text: AFTER THAT DIVE: / NO FURTHER |
| `didn't` | `F35837` (+2.62 s) | After80 | text: AFTER THAT DIVE: / NO FURTHER |
| `further` | `F35890` (+3.50 s) | After80 | text: AFTER THAT DIVE: / NO FURTHER |
| `shifts` | `F35915` (+3.92 s) | After80 | text: AFTER THAT DIVE: / NO FURTHER |
| `data` | `F35975` (+4.92 s) | After80 | text: AFTER THAT DIVE: / NO FURTHER |

**111** · No loud bangs.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `loud` | `F36038` (+0.27 s) | After80 | text: NO LOUD BANGS · |
| `bangs` | `F36056` (+0.57 s) | After80 | text: NO LOUD BANGS · |

**112** · Nothing in the acoustics that seemed out of the ordinary.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Nothing` | `F36105` (+0.05 s) | After80 | text: NOTHING / IN THE ACOUSTICS |
| `acoustics` | `F36138` (+0.60 s) | After80 | text: NOTHING / IN THE ACOUSTICS |
| `seemed` | `F36190` (+1.47 s) | After80 | text: NOTHING / IN THE ACOUSTICS |
| `out` | `F36208` (+1.77 s) | After80 | text: NOTHING / IN THE ACOUSTICS |
| `ordinary` | `F36235` (+2.22 s) | After80 | text: NOTHING / IN THE ACOUSTICS |

**113** · One acoustic sensor, he testified, did show activity on the dives that followed that they had not seen in twenty twenty-one, the kind of thing they wanted to be concerned about.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `One` | `F36315` (+0.12 s) | After80 | lead · <text x={200} y={868} style={T(28, lit(f, wf(113, 'sensor'), colors.cy |
| `acoustic` | `F36323` (+0.25 s) | After80 | lead · opacity={lead(f, wf(113, 'acoustic'), 10)} |
| `sensor` | `F36355` (+0.78 s) | After80 | lead · <text x={200} y={868} style={T(28, lit(f, wf(113, 'sensor'), colors.cy |
| `testified` | `F36397` (+1.48 s) | After80 | text: ACTIVITY |
| `show` | `F36469` (+2.68 s) | After80 | text: ACTIVITY |
| `activity` | `F36485` (+2.95 s) | After80 | lead · const ch4 = lead(f, wf(113, 'activity'), 16); |
| `followed` | `F36564` (+4.27 s) | After80 | text: THE DIVES THAT FOLLOWED |
| `seen` | `F36639` (+5.52 s) | After80 | text: ACTIVITY |
| `twenty` | `F36663` (+5.92 s) | After80 | text: NOT SEEN IN 2021 |
| `twenty-one` | `F36683` (+6.25 s) | After80 | text: NOT SEEN IN 2021 |
| `kind` | `F36753` (+7.42 s) | After80 | text: ACTIVITY |
| `concerned` | `F36835` (+8.78 s) | After80 | text: ACTIVITY |

**114** · He raised it with the chief executive.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `raised` | `F36927` (+0.12 s) | After80 | text: RAISED WITH THE CEO · |
| `executive` | `F36983` (+1.05 s) | After80 | text: RAISED WITH THE CEO · |

**115** · It stayed under the threshold they had set, he said, or maybe just barely over it, and it never got worse, so he did not think it was a concern.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `under` | `F37088` (+0.62 s) | After80 | text: UNDER THE THRESHOLD, |
| `threshold` | `F37112` (+1.02 s) | After80 | text: UNDER THE THRESHOLD, |
| `set` | `F37163` (+1.87 s) | After80 | lead · <text x={1720} y={thrY - 14} textAnchor="end" style={T(28, lit(f, wf(1 |
| `maybe` | `F37252` (+3.35 s) | After80 | <Wd f={f} at={wf(115, 'maybe')} lightAt={wf(115, 'barely')} tone={colors.red} bo |
| `barely` | `F37286` (+3.92 s) | (scene list) | sound effect cue |
| `never` | `F37364` (+5.22 s) | After80 | text: NEVER GOT WORSE · |
| `worse` | `F37391` (+5.67 s) | After80 | text: NEVER GOT WORSE · |
| `not` | `F37460` (+6.82 s) | After80 | <Wd f={f} at={wf(115, 'not')} lightAt={wf(115, 'concern')}>"NOT A CONCERN"</Wd> |
| `concern` | `F37504` (+7.55 s) | After80 | <Wd f={f} at={wf(115, 'not')} lightAt={wf(115, 'concern')}>"NOT A CONCERN"</Wd> |

**116** · The N - T - S - B found the sensors never produced the kind of signal that would have triggered an alert.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `N` | `F37590` (+0.27 s) | After80 | lead · <Card x={120} y={954} w={1680} o={lead(f, wf(116, 'n'), 10) * (1 - 0)} |
| `found` | `F37639` (+1.08 s) | After80 | text: NTSB: |
| `never` | `F37698` (+2.07 s) | After80 | text: THE SENSORS NEVER PRODUCED THE KIND OF SIGNAL |
| `signal` | `F37773` (+3.32 s) | After80 | text: THE SENSORS NEVER PRODUCED THE KIND OF SIGNAL |
| `triggered` | `F37822` (+4.13 s) | After80 | text: THAT WOULD HAVE TRIGGERED AN ALERT |
| `alert` | `F37852` (+4.63 s) | After80 | text: THAT WOULD HAVE TRIGGERED AN ALERT |

**117** · So, was the damage in the data?

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `was` | `F37943` (+0.57 s) | InTheData | text: So, was the |
| `damage` | `F37962` (+0.88 s) | InTheData | <Wd f={f} at={wf(117, 'damage')} tone={colors.red}>damage </Wd> |
| `in` | `F37984` (+1.25 s) | InTheData | <Wd f={f} at={wf(117, 'in')} base={colors.ink}>in the </Wd> |
| `data` | `F38000` (+1.52 s) | (scene list) | sound effect cue |

**119** · The depth was there, on the same chart as the strain, but both ran against the clock.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `depth` | `F39362` (+0.17 s) | (scene list) | sound effect cue |
| `same` | `F39451` (+1.65 s) | InTheData | <Pop f={f} fps={fps} at={wf(119, 'same')}> |
| `strain` | `F39507` (+2.58 s) | InTheData | <Chip text={f >= wf(119, 'strain') ? 'ON THE SAME CHART AS THE STRAIN' : 'ON THE |
| `both` | `F39576` (+3.73 s) | InTheData | <Pop f={f} fps={fps} at={wf(119, 'both')}> |
| `clock` | `F39636` (+4.73 s) | (scene list) | sound effect cue |

