# Choreography index: Act 3a

Word-level choreography (PLAYBOOK §10.6), **generated from the scene code** (`python3 scripts/choreo_index.py` from the film folder; re-run after
any edit) so it cannot drift from it. One row per word-locked event: the spoken trigger, its measured frame (60 fps) and offset
from the sentence start, the scene component, and what changes (the on-screen text that arrives, or the driving line of
code). Kit: `lib/remotion/Kinetic.tsx` and `remotion/beats.tsx` (`KeyLine` parts land on their words, `ChunkQuote` reveals a
record quote chunk by chunk, `WordLine` builds a title word by word). Kit for this film: `remotion/parts*.tsx`.
Sync audit: `review/sync_audit.md`.

**59** · Had anyone warned about this?

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Had` | `F21332` (+0.00 s) | Opening | text: Had anyone |
| `warned` | `F21369` (+0.62 s) | Opening | <Wd f={f} at={wf(59, 'warned')} tone={colors.amber}>warned </Wd> |
| `about` | `F21390` (+0.97 s) | Opening | <Wd f={f} at={wf(59, 'about')} base={colors.ink}>about this?</Wd> |

**60** · The eighteenth of January, twenty eighteen.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `eighteenth` | `F21483` (+0.17 s) | Report2018 | DatePill · <DatePill f={f} fps={fps} day={18} month={1} year={2018} dayWord={wf(6 |
| `January` | `F21517` (+0.73 s) | Report2018 | DatePill · <DatePill f={f} fps={fps} day={18} month={1} year={2018} dayWord={wf(6 |
| `eighteen` | `F21581` (+1.80 s) | Report2018 | DatePill · <DatePill f={f} fps={fps} day={18} month={1} year={2018} dayWord={wf(6 |

**61** · The company's director of marine operations filed an inspection report on Titan's first hull.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `director` | `F21673` (+0.58 s) | Report2018 | text: DIRECTOR OF MARINE OPERATIONS · |
| `operations` | `F21733` (+1.58 s) | Report2018 | text: DIRECTOR OF MARINE OPERATIONS · |
| `inspection` | `F21806` (+2.80 s) | Report2018 | text: INSPECTION REPORT · |
| `report` | `F21842` (+3.40 s) | Report2018 | text: INSPECTION REPORT · |
| `first` | `F21909` (+4.52 s) | Report2018 | text: FIRST HULL · |
| `hull` | `F21931` (+4.88 s) | Report2018 | text: FIRST HULL · |

**62** · It listed twenty-six items needing action.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `twenty-six` | `F22002` (+0.58 s) | (scene list) | sound effect cue |
| `items` | `F22057` (+1.50 s) | Report2018 | <Wd f={f} at={wf(62, 'items')} lightAt={wf(62, 'action')}> ITEMS NEEDING ACTION< |
| `action` | `F22098` (+2.18 s) | Report2018 | <Wd f={f} at={wf(62, 'items')} lightAt={wf(62, 'action')}> ITEMS NEEDING ACTION< |

**63** · On the hull, he wrote that the cut-off ends of the cylinder showed very visible signs of delamination, and he warned of potential inter-laminar fatigue due to pressure cycling.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `hull` | `F22163` (+0.30 s) | Report2018 | text: ON THE HULL: |
| `cut-off` | `F22235` (+1.50 s) | Report2018 | text: THE CUT-OFF ENDS · |
| `ends` | `F22262` (+1.95 s) | Report2018 | hl= · <RecordPage set="cg098" start={sf(63) - 16} end={photoIn + 6} hl={[{ke |
| `cylinder` | `F22291` (+2.43 s) | Report2018 | text: THE CUT-OFF ENDS · |
| `very` | `F22346` (+3.35 s) | Report2018 | text: DELAMINATION |
| `visible` | `F22369` (+3.73 s) | (scene list) | sound effect cue |
| `delamination` | `F22426` (+4.68 s) | Report2018 | text: DELAMINATION |
| `warned` | `F22512` (+6.12 s) | Report2018 | const backIn = wf(63, 'warned'); |
| `potential` | `F22539` (+6.57 s) | Report2018 | hl= · <RecordPage set="cg098" start={backIn - 4} end={ef(63) + 30} hl={[{key |
| `inter-laminar` | `F22579` (+7.23 s) | (scene list) | sound effect cue |
| `fatigue` | `F22620` (+7.92 s) | Report2018 | <Wd f={f} at={wf(63, 'fatigue')} lightAt={wf(63, 'cycling')} tone={colors.amber} |
| `cycling` | `F22699` (+9.23 s) | Report2018 | <Wd f={f} at={wf(63, 'fatigue')} lightAt={wf(63, 'cycling')} tone={colors.amber} |

**64** · The next day, he met the chief executive and argued for more testing of the hull.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `next` | `F22762` (+0.10 s) | Meeting | DatePill · <DatePill f={f} fps={fps} day={19} month={1} year={2018} dayWord={wf(6 |
| `day` | `F22779` (+0.38 s) | Meeting | DatePill · <DatePill f={f} fps={fps} day={19} month={1} year={2018} dayWord={wf(6 |
| `met` | `F22816` (+1.00 s) | Meeting | text: MEETING WITH THE CEO |
| `executive` | `F22850` (+1.57 s) | Meeting | text: MEETING WITH THE CEO |
| `argued` | `F22905` (+2.48 s) | Meeting | text: HE ARGUED FOR |
| `more` | `F22938` (+3.03 s) | Meeting | text: MORE TESTING |
| `testing` | `F22952` (+3.27 s) | Meeting | text: MORE TESTING |
| `hull` | `F22992` (+3.93 s) | Meeting | text: OF THE HULL |

**65** · The chief executive recorded the meeting.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `chief` | `F23041` (+0.13 s) | Meeting | text: THE CEO RECORDED THE MEETING · MBI EXHIBIT CG-100 |
| `recorded` | `F23090` (+0.95 s) | (scene list) | sound effect cue |
| `meeting` | `F23128` (+1.58 s) | Meeting | text: THE CEO RECORDED THE MEETING · MBI EXHIBIT CG-100 |

**66** · On that recording, he answered that the cut-off ends were scrap, cut away for that reason, and that acoustic monitoring would tell him way before the hull failed.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `On` | `F23179` (+0.05 s) | Meeting | <Note o={vis(f, wf(66, 'on'), ef(66) + 20)}> |
| `answered` | `F23258` (+1.37 s) | Meeting | text: THE CEO: |
| `cut-off` | `F23294` (+1.97 s) | Meeting | text: THE CUT-OFF ENDS WERE SCRAP |
| `scrap` | `F23348` (+2.87 s) | (scene list) | sound effect cue |
| `cut` | `F23395` (+3.65 s) | Meeting | hl= · <RecordPage set="cg100" start={pageIn} end={wf(66, 'acoustic') - 8} hl |
| `reason` | `F23446` (+4.50 s) | Meeting | hl= · <RecordPage set="cg100" start={pageIn} end={wf(66, 'acoustic') - 8} hl |
| `acoustic` | `F23500` (+5.40 s) | Meeting | <Wd f={f} at={wf(66, 'acoustic')} lightAt={wf(66, 'monitoring')} tone={colors.cy |
| `monitoring` | `F23532` (+5.93 s) | (scene list) | sound effect cue |
| `tell` | `F23573` (+6.62 s) | Meeting | text: WOULD TELL HIM WAY BEFORE |
| `failed` | `F23661` (+8.08 s) | Meeting | text: WOULD TELL HIM WAY BEFORE |

**67** · Four days later, the director was fired.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Four` | `F23716` (+0.02 s) | Fired | <div style={{position: 'absolute', right: 96, top: 84, opacity: vis(f, wf(67, 'f |
| `later` | `F23744` (+0.48 s) | Fired | DatePill · <DatePill f={f} fps={fps} day={23} month={1} year={2018} dayWord={wf(6 |
| `director` | `F23787` (+1.20 s) | Fired | text: THE DIRECTOR OF MARINE OPERATIONS · |
| `fired` | `F23828` (+1.88 s) | (scene list) | sound effect cue |

**68** · The termination letter said the two of them were at an impasse over the hull.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `termination` | `F23888` (+0.10 s) | Fired | hl= · <RecordPage set="roi" start={sf(67) - 16} end={ef(68) + 24} hl={[{key: |
| `letter` | `F23924` (+0.70 s) | Fired | text: THE LETTER: |
| `said` | `F23946` (+1.07 s) | Fired | text: THE LETTER: |
| `two` | `F23964` (+1.37 s) | Fired | text: AN IMPASSE |
| `impasse` | `F24023` (+2.35 s) | (scene list) | sound effect cue |
| `over` | `F24057` (+2.92 s) | Fired | text: OVER THE HULL |
| `hull` | `F24076` (+3.23 s) | Fired | text: OVER THE HULL |

**69** · In March, more than twenty submersible professionals signed a letter urging the chief executive to put safety first, and to follow the industry's established practices.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `March` | `F24134` (+0.18 s) | Fired | text: MARCH 2018 |
| `twenty` | `F24197` (+1.23 s) | (scene list) | sound effect cue |
| `submersible` | `F24227` (+1.73 s) | Fired | text: SUBMERSIBLE PROFESSIONALS SIGNED |
| `professionals` | `F24263` (+2.33 s) | Fired | text: SUBMERSIBLE PROFESSIONALS SIGNED |
| `signed` | `F24308` (+3.08 s) | Fired | text: A LETTER TO THE CEO |
| `letter` | `F24332` (+3.48 s) | Fired | text: A LETTER TO THE CEO |
| `urging` | `F24360` (+3.95 s) | Fired | text: URGING HIM |
| `put` | `F24449` (+5.43 s) | Fired | text: TO PUT SAFETY FIRST |
| `first` | `F24498` (+6.25 s) | Fired | text: TO PUT SAFETY FIRST |
| `follow` | `F24552` (+7.15 s) | Fired | text: AND FOLLOW THE INDUSTRY'S / ESTABLISHED PRACTICES |
| `industry's` | `F24580` (+7.62 s) | Fired | text: AND FOLLOW THE INDUSTRY'S / ESTABLISHED PRACTICES |
| `established` | `F24612` (+8.15 s) | Fired | text: AND FOLLOW THE INDUSTRY'S / ESTABLISHED PRACTICES |
| `practices` | `F24649` (+8.77 s) | Fired | text: AND FOLLOW THE INDUSTRY'S / ESTABLISHED PRACTICES |

**70** · It was never sent formally.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `never` | `F24730` (+0.28 s) | (scene list) | sound effect cue |
| `formally` | `F24767` (+0.90 s) | Fired | <Chip text={f >= wf(70, 'formally') ? 'NEVER SENT FORMALLY' : 'NEVER SENT'} tone |

**71** · He received it, called the head of the industry committee behind it, and said he was leaving the association.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `received` | `F24829` (+0.10 s) | Fired | text: HE RECEIVED IT · |
| `called` | `F24886` (+1.05 s) | Fired | text: CALLED THE HEAD OF THE INDUSTRY COMMITTEE · |
| `committee` | `F24958` (+2.25 s) | Fired | text: CALLED THE HEAD OF THE INDUSTRY COMMITTEE · |
| `said` | `F25038` (+3.58 s) | Fired | text: SAID HE WAS LEAVING |
| `leaving` | `F25068` (+4.08 s) | Fired | text: SAID HE WAS LEAVING |
| `association` | `F25094` (+4.52 s) | Fired | text: THE ASSOCIATION |

**72** · That was the first hull.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `first` | `F25224` (+0.67 s) | FirstHull | lead · <g transform="translate(150 230) scale(0.42)" opacity={lead(f, wf(72,  |
| `hull` | `F25246` (+1.03 s) | FirstHull | text: HULL 1 |

**73** · But the failure mode named in that report, delamination, is what the investigators would find in the second.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `failure` | `F25301` (+0.27 s) | FirstHull | text: THE FAILURE MODE |
| `mode` | `F25325` (+0.67 s) | FirstHull | text: THE FAILURE MODE |
| `named` | `F25343` (+0.97 s) | FirstHull | text: NAMED IN THE 2018 REPORT · |
| `report` | `F25378` (+1.55 s) | FirstHull | text: NAMED IN THE 2018 REPORT · |
| `delamination` | `F25421` (+2.27 s) | FirstHull | lead · <text x={interpolate(word, [0, 1], [150 + cx * 0.42, 1010 + cx * 0.42] |
| `what` | `F25497` (+3.53 s) | FirstHull | text: WHAT THE INVESTIGATORS |
| `investigators` | `F25514` (+3.82 s) | FirstHull | text: WHAT THE INVESTIGATORS |
| `find` | `F25569` (+4.73 s) | FirstHull | text: FOUND IN HULL 2 |
| `second` | `F25605` (+5.33 s) | (scene list) | sound effect cue |

**74** · In twenty nineteen, a crack was found in the first hull.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `twenty` | `F25671` (+0.15 s) | FirstHull | text: 2019 |
| `nineteen` | `F25695` (+0.55 s) | FirstHull | text: 2019 |
| `crack` | `F25758` (+1.60 s) | (scene list) | sound effect cue |
| `found` | `F25793` (+2.18 s) | FirstHull | bump · <span style={{opacity: lead(f, wf(74, 'crack'), 8), transform: `scale( |
| `first` | `F25826` (+2.73 s) | FirstHull | text: IN THE FIRST HULL |
| `hull` | `F25851` (+3.15 s) | FirstHull | text: IN THE FIRST HULL |

**75** · The company's first director of engineering testified that he refused to sign it off, and that his refusal kept it from that year's expedition.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `company's` | `F25900` (+0.10 s) | FirstHull | lead · <Card x={0} y={90} w={900} o={lead(f, wf(75, "company's"), 10)} accent |
| `first` | `F25931` (+0.62 s) | FirstHull | text: THE FIRST DIRECTOR OF ENGINEERING · / TESTIMONY |
| `engineering` | `F25980` (+1.43 s) | FirstHull | text: THE FIRST DIRECTOR OF ENGINEERING · / TESTIMONY |
| `testified` | `F26020` (+2.10 s) | FirstHull | text: THE FIRST DIRECTOR OF ENGINEERING · / TESTIMONY |
| `refused` | `F26079` (+3.08 s) | (scene list) | sound effect cue |
| `sign` | `F26123` (+3.82 s) | FirstHull | text: REFUSED / TO SIGN IT OFF |
| `off` | `F26146` (+4.20 s) | FirstHull | text: REFUSED / TO SIGN IT OFF |
| `his` | `F26189` (+4.92 s) | FirstHull | text: HIS REFUSAL / KEPT IT FROM |
| `refusal` | `F26199` (+5.08 s) | FirstHull | text: HIS REFUSAL / KEPT IT FROM |
| `kept` | `F26239` (+5.75 s) | FirstHull | text: HIS REFUSAL / KEPT IT FROM |
| `year's` | `F26289` (+6.58 s) | FirstHull | text: THE 2019 EXPEDITION |
| `expedition` | `F26306` (+6.87 s) | FirstHull | text: THE 2019 EXPEDITION |

**76** · He said it angered the chief executive, and led to his firing.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `angered` | `F26403` (+0.52 s) | FirstHull | text: IT ANGERED / THE CEO · |
| `chief` | `F26431` (+0.98 s) | FirstHull | text: IT ANGERED / THE CEO · |
| `executive` | `F26447` (+1.25 s) | FirstHull | text: IT ANGERED / THE CEO · |
| `led` | `F26498` (+2.10 s) | FirstHull | text: LED TO HIS FIRING |
| `firing` | `F26527` (+2.58 s) | FirstHull | text: LED TO HIS FIRING |

**77** · The company's letter to him cited the cancelled expedition.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `company's` | `F26584` (+0.10 s) | FirstHull | lead · <Card x={0} y={430} w={900} o={lead(f, wf(77, "company's"), 10)} accen |
| `letter` | `F26611` (+0.55 s) | FirstHull | text: THE COMPANY'S LETTER TO HIM |
| `cited` | `F26663` (+1.42 s) | FirstHull | text: CITED |
| `cancelled` | `F26692` (+1.90 s) | FirstHull | text: THE CANCELLED EXPEDITION |
| `expedition` | `F26719` (+2.35 s) | FirstHull | text: THE CANCELLED EXPEDITION |

**78** · A second hull was built: the one lost in twenty twenty-three.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `second` | `F26801` (+0.15 s) | Hull2 | text: HULL 2 |
| `hull` | `F26824` (+0.53 s) | Hull2 | text: HULL 2 |
| `built` | `F26850` (+0.97 s) | Hull2 | <Wd f={f} at={wf(78, 'built')} style={T(30, {})}>· BUILT</Wd> |
| `one` | `F26899` (+1.78 s) | Hull2 | text: LOST IN 2023 |
| `lost` | `F26910` (+1.97 s) | Hull2 | text: LOST IN 2023 |
| `twenty-three` | `F26958` (+2.77 s) | Hull2 | text: LOST IN 2023 |

**79** · Its dives were numbered fifty to eighty-eight.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `dives` | `F27039` (+0.28 s) | Hull2 | text: DIVES |
| `numbered` | `F27073` (+0.85 s) | Hull2 | text: DIVES |
| `fifty` | `F27097` (+1.25 s) | Hull2 | <Wd f={f} at={wf(79, 'fifty')} tone={colors.cyan} bold>50</Wd> |
| `to` | `F27129` (+1.78 s) | Hull2 | <Wd f={f} at={wf(79, 'to')}> → </Wd> |
| `eighty-eight` | `F27139` (+1.95 s) | Hull2 | rows={DIVES2.map((d, i) => ({dive: String(d), depth: 3840, at: wf(79, 'eighty-ei |

**80** · Now, dive eighty.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `eighty` | `F27366` (+1.20 s) | (scene list) | sound effect cue |

**81** · On the fifteenth of July, twenty twenty-two, Titan reached the Titanic and came back up.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `fifteenth` | `F27434` (+0.22 s) | Dive80 | DatePill · <DatePill f={f} fps={fps} day={15} month={7} year={2022} dayWord={wf(8 |
| `July` | `F27468` (+0.78 s) | Dive80 | DatePill · <DatePill f={f} fps={fps} day={15} month={7} year={2022} dayWord={wf(8 |
| `twenty-two` | `F27520` (+1.65 s) | Dive80 | DatePill · <DatePill f={f} fps={fps} day={15} month={7} year={2022} dayWord={wf(8 |
| `reached` | `F27604` (+3.05 s) | Dive80 | text: REACHED THE TITANIC · |
| `Titanic` | `F27627` (+3.43 s) | Dive80 | text: REACHED THE TITANIC · |
| `came` | `F27681` (+4.33 s) | Dive80 | text: BACK UP |
| `up` | `F27711` (+4.83 s) | Dive80 | text: BACK UP |

**82** · Near the surface, the people inside heard a loud bang.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Near` | `F27753` (+0.02 s) | Dive80 | text: NEAR THE SURFACE: |
| `surface` | `F27772` (+0.33 s) | Dive80 | text: NEAR THE SURFACE: |
| `people` | `F27821` (+1.15 s) | Dive80 | text: HEARD INSIDE · |
| `heard` | `F27874` (+2.03 s) | Dive80 | text: HEARD INSIDE · |
| `loud` | `F27892` (+2.33 s) | Dive80 | text: A LOUD BANG |
| `bang` | `F27920` (+2.80 s) | (scene list) | sound effect cue |

**83** · So did the crew of a small boat above.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `crew` | `F27996` (+0.47 s) | Dive80 | text: AND BY A SMALL BOAT'S CREW |
| `boat` | `F28045` (+1.28 s) | Dive80 | text: AND BY A SMALL BOAT'S CREW |

**84** · The records differ on exactly where it happened, but all place it near the surface.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `records` | `F28119` (+0.10 s) | Dive80 | text: RECORDS DIFFER |
| `differ` | `F28146` (+0.55 s) | Dive80 | text: RECORDS DIFFER |
| `exactly` | `F28175` (+1.03 s) | Dive80 | text: ON EXACTLY WHERE · |
| `where` | `F28207` (+1.57 s) | Dive80 | text: ON EXACTLY WHERE · |
| `all` | `F28279` (+2.77 s) | Dive80 | text: ALL PLACE IT |
| `place` | `F28290` (+2.95 s) | Dive80 | text: ALL PLACE IT |
| `near` | `F28318` (+3.42 s) | Dive80 | text: NEAR THE SURFACE |
| `surface` | `F28338` (+3.75 s) | Dive80 | text: NEAR THE SURFACE |

**85** · On channel two, the acoustic sensor peaked above twenty-five thousand millivolts.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `channel` | `F28402` (+0.17 s) | Dive80 | lead · <div style={{opacity: lead(f, wf(85, 'channel'), 8)}}> |
| `two` | `F28423` (+0.52 s) | Dive80 | bump · <Chip text={f >= wf(85, 'peaked') ? 'CHANNEL 2 · 25,687 mV' : f >= wf( |
| `acoustic` | `F28464` (+1.20 s) | Dive80 | text: THE ACOUSTIC SENSOR |
| `sensor` | `F28497` (+1.75 s) | Dive80 | text: THE ACOUSTIC SENSOR |
| `peaked` | `F28523` (+2.18 s) | (scene list) | sound effect cue |
| `above` | `F28542` (+2.50 s) | Dive80 | text: PEAKED ABOVE 25,000 |
| `twenty-five` | `F28560` (+2.80 s) | Dive80 | bump · <Chip text={f >= wf(85, 'peaked') ? 'CHANNEL 2 · 25,687 mV' : f >= wf( |
| `thousand` | `F28609` (+3.62 s) | Dive80 | text: PEAKED ABOVE 25,000 |
| `millivolts` | `F28637` (+4.08 s) | Dive80 | text: PEAKED ABOVE 25,000 |

**86** · At the same moment, the strain gauges beside it jumped.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `same` | `F28712` (+0.27 s) | Dive80 | text: SAME MOMENT: |
| `moment` | `F28726` (+0.50 s) | Dive80 | text: SAME MOMENT: |
| `strain` | `F28770` (+1.23 s) | Dive80 | text: THE STRAIN GAUGES |
| `gauges` | `F28794` (+1.63 s) | Dive80 | text: THE STRAIN GAUGES |
| `beside` | `F28817` (+2.02 s) | Dive80 | text: BESIDE IT |
| `jumped` | `F28857` (+2.68 s) | (scene list) | sound effect cue |

**87** · Phil Brooks was the director of engineering by then, promoted from software engineer before that season.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Phil` | `F28893` (+0.00 s) | Brooks | text: PHIL BROOKS |
| `Brooks` | `F28910` (+0.28 s) | Brooks | text: PHIL BROOKS |
| `director` | `F28950` (+0.95 s) | Brooks | text: DIRECTOR OF ENGINEERING, 2021–23 |
| `engineering` | `F28982` (+1.48 s) | Brooks | text: DIRECTOR OF ENGINEERING, 2021–23 |
| `promoted` | `F29060` (+2.78 s) | Brooks | text: PROMOTED FROM |
| `software` | `F29105` (+3.53 s) | Brooks | text: SOFTWARE ENGINEER |
| `engineer` | `F29135` (+4.03 s) | Brooks | text: SOFTWARE ENGINEER |
| `before` | `F29161` (+4.47 s) | Brooks | text: BEFORE THE 2022 SEASON |
| `season` | `F29197` (+5.07 s) | Brooks | text: BEFORE THE 2022 SEASON |

**88** · He testified that he had no background in mechanical engineering or materials, and that the agreement was that others, mainly the chief executive, would handle those tasks.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `testified` | `F29270` (+0.13 s) | Brooks | text: HE TESTIFIED: |
| `no` | `F29344` (+1.37 s) | Brooks | text: NO BACKGROUND IN |
| `background` | `F29360` (+1.63 s) | Brooks | text: NO BACKGROUND IN |
| `mechanical` | `F29399` (+2.28 s) | Brooks | text: MECHANICAL ENGINEERING OR MATERIALS |
| `materials` | `F29480` (+3.63 s) | Brooks | text: MECHANICAL ENGINEERING OR MATERIALS |
| `agreement` | `F29563` (+5.02 s) | Brooks | text: THE AGREEMENT: |
| `others` | `F29623` (+6.02 s) | Brooks | text: OTHERS, |
| `mainly` | `F29665` (+6.72 s) | Brooks | text: OTHERS, |
| `chief` | `F29694` (+7.20 s) | Brooks | text: MAINLY THE CEO, |
| `executive` | `F29709` (+7.45 s) | Brooks | text: MAINLY THE CEO, |
| `handle` | `F29767` (+8.42 s) | Brooks | text: WOULD HANDLE THOSE TASKS |
| `tasks` | `F29804` (+9.03 s) | Brooks | text: WOULD HANDLE THOSE TASKS |

**89** · Under oath, he described what they did after the bang.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `oath` | `F29897` (+0.35 s) | Brooks | lead · <div style={{marginTop: 26, opacity: lead(f, wf(89, 'oath'), 8)}}> |
| `described` | `F29932` (+0.93 s) | Brooks | bump · <Chip text={f >= wf(89, 'after') ? 'UNDER OATH · WHAT THEY DID AFTER T |
| `after` | `F30012` (+2.27 s) | Brooks | bump · <Chip text={f >= wf(89, 'after') ? 'UNDER OATH · WHAT THEY DID AFTER T |
| `bang` | `F30038` (+2.70 s) | Brooks | bump · <Chip text={f >= wf(89, 'after') ? 'UNDER OATH · WHAT THEY DID AFTER T |

**90** · They inspected the hull as best they could.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `hull` | `F30145` (+0.85 s) | Brooks | hl= · <RecordPage set="cg112" start={sf(90) - 14} end={sf(91) + 6} hl={[{key |
| `best` | `F30172` (+1.30 s) | (scene list) | sound effect cue |

**91** · But the inside was lined by an insert, and the outside was covered.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `inside` | `F30262` (+0.28 s) | Brooks | text: INSIDE: LINED BY AN INSERT |
| `insert` | `F30346` (+1.68 s) | Brooks | text: INSIDE: LINED BY AN INSERT |
| `outside` | `F30400` (+2.58 s) | Brooks | text: OUTSIDE: COVERED |
| `covered` | `F30441` (+3.27 s) | Brooks | text: OUTSIDE: COVERED |

**92** · You can take a flashlight, he said, and look down a small gap between the insert and the hull.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `flashlight` | `F30525` (+0.52 s) | (scene list) | sound effect cue |
| `and` | `F30608` (+1.90 s) | Brooks | text: AND THE HULL |
| `look` | `F30616` (+2.03 s) | Brooks | text: LOOK DOWN |
| `down` | `F30627` (+2.22 s) | Brooks | text: LOOK DOWN |
| `small` | `F30649` (+2.58 s) | Brooks | text: A SMALL GAP |
| `gap` | `F30672` (+2.97 s) | Brooks | text: A SMALL GAP |
| `between` | `F30693` (+3.32 s) | Brooks | text: BETWEEN THE INSERT |
| `insert` | `F30726` (+3.87 s) | Brooks | text: BETWEEN THE INSERT |
| `hull` | `F30767` (+4.55 s) | Brooks | text: AND THE HULL |

**94** · The insert, he said, was never removed.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `insert` | `F31101` (+0.15 s) | Brooks | text: THE INSERT: |
| `never` | `F31187` (+1.58 s) | (scene list) | sound effect cue |
| `removed` | `F31204` (+1.87 s) | Brooks | text: NEVER REMOVED · |

**95** · That was never done.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `never` | `F31268` (+0.33 s) | Brooks | text: NEVER DONE |
| `done` | `F31285` (+0.62 s) | Brooks | text: NEVER DONE |

**96** · So the main check was the data.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `main` | `F31351` (+0.30 s) | Brooks | text: THE MAIN CHECK: THE DATA · |
| `data` | `F31412` (+1.32 s) | Brooks | text: THE MAIN CHECK: THE DATA · |

**97** · The strain showed a shift in level, on two of the sixteen channels.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `shift` | `F31528` (+1.07 s) | (scene list) | sound effect cue |
| `level` | `F31557` (+1.55 s) | Brooks | text: A SHIFT IN LEVEL · |
| `two` | `F31603` (+2.32 s) | Brooks | text: 2 OF 16 |
| `sixteen` | `F31637` (+2.88 s) | Brooks | text: 2 OF 16 |
| `channels` | `F31667` (+3.38 s) | Brooks | text: CHANNELS |

**98** · A sudden shift, he said, is something to be concerned about, for sure.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `sudden` | `F31734` (+0.18 s) | Brooks | <Wd f={f} at={wf(98, 'sudden')} lightAt={wf(98, 'shift')} tone={colors.red}>"A S |
| `shift` | `F31756` (+0.55 s) | Brooks | <Wd f={f} at={wf(98, 'sudden')} lightAt={wf(98, 'shift')} tone={colors.red}>"A S |
| `said` | `F31793` (+1.17 s) | Brooks | <Wd f={f} at={wf(98, 'said')}>· HE SAID · </Wd> |
| `something` | `F31834` (+1.85 s) | Brooks | <Wd f={f} at={wf(98, 'something')} lightAt={wf(98, 'concerned')} tone={colors.re |
| `concerned` | `F31867` (+2.40 s) | Brooks | <Wd f={f} at={wf(98, 'something')} lightAt={wf(98, 'concerned')} tone={colors.re |
| `sure` | `F31931` (+3.47 s) | Brooks | text: FOR SURE" |

**99** · He added that he was not a strain expert, and that this one looked fairly minor.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `added` | `F31985` (+0.13 s) | Brooks | text: HE ADDED: |
| `not` | `F32032` (+0.92 s) | Brooks | text: NOT A STRAIN EXPERT · |
| `expert` | `F32076` (+1.65 s) | Brooks | text: NOT A STRAIN EXPERT · |
| `this` | `F32130` (+2.55 s) | Brooks | text: THIS ONE LOOKED |
| `one` | `F32147` (+2.83 s) | Brooks | text: THIS ONE LOOKED |
| `fairly` | `F32175` (+3.30 s) | Brooks | <Wd f={f} at={wf(99, 'fairly')} lightAt={wf(99, 'minor')} tone={colors.amber} bo |
| `minor` | `F32195` (+3.63 s) | (scene list) | sound effect cue |

**103** · What did they think the bang was?

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `What` | `F33838` (+0.00 s) | Theory | text: What did they think |
| `bang` | `F33891` (+0.88 s) | Theory | <Wd f={f} at={wf(103, 'bang')} tone={colors.amber}>the bang was?</Wd> |

**104** · Brooks testified that the chief executive's theory was the frame.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Brooks` | `F33971` (+-0.02 s) | Theory | text: BROOKS: |
| `testified` | `F33990` (+0.30 s) | Theory | text: BROOKS: |
| `chief` | `F34047` (+1.25 s) | Theory | text: THE CEO'S / THEORY WAS |
| `executive's` | `F34063` (+1.52 s) | Theory | text: THE CEO'S / THEORY WAS |
| `theory` | `F34102` (+2.17 s) | Theory | text: THE CEO'S / THEORY WAS |
| `frame` | `F34164` (+3.20 s) | Theory | text: THE FRAME |

**105** · The hull compresses slightly on the way down and the frame bolted to it does not, so on the way up the frame may have sprung, and snapped back into shape.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `hull` | `F34223` (+0.15 s) | Theory | text: DOWN: HULL COMPRESSES, |
| `compresses` | `F34239` (+0.42 s) | Theory | text: DOWN: HULL COMPRESSES, |
| `down` | `F34326` (+1.87 s) | Theory | const down = span(f, wf(105, 'compresses') - 6, wf(105, 'down') + 12) * (1 - spa |
| `frame` | `F34376` (+2.70 s) | Theory | text: FRAME DOES NOT · |
| `not` | `F34457` (+4.05 s) | Theory | text: FRAME DOES NOT · |
| `up` | `F34532` (+5.30 s) | Theory | text: UP: FRAME / MAY HAVE SPRUNG, |
| `may` | `F34583` (+6.15 s) | Theory | text: UP: FRAME / MAY HAVE SPRUNG, |
| `sprung` | `F34605` (+6.52 s) | (scene list) | sound effect cue |
| `snapped` | `F34657` (+7.38 s) | Theory | text: SNAPS BACK |
| `back` | `F34678` (+7.73 s) | Theory | const sprung = span(f, wf(105, 'sprung') - 6, wf(105, 'sprung') + 10) * (1 - spa |
| `shape` | `F34706` (+8.20 s) | Theory | text: SNAPS BACK |

**106** · Brooks said that, without being a qualified mechanical engineer, he found it plausible at the time.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Brooks` | `F34753` (+-0.02 s) | Theory | text: BROOKS, / NOT A QUALIFIED |
| `without` | `F34808` (+0.90 s) | Theory | text: BROOKS, / NOT A QUALIFIED |
| `qualified` | `F34847` (+1.55 s) | Theory | text: BROOKS, / NOT A QUALIFIED |
| `mechanical` | `F34878` (+2.07 s) | Theory | text: BROOKS, / NOT A QUALIFIED |
| `engineer` | `F34909` (+2.58 s) | Theory | text: BROOKS, / NOT A QUALIFIED |
| `found` | `F34965` (+3.52 s) | Theory | text: BROOKS, / NOT A QUALIFIED |
| `plausible` | `F34986` (+3.87 s) | Theory | <Wd f={f} at={wf(106, 'plausible')} lightAt={wf(106, 'time')} tone={colors.amber |
| `time` | `F35032` (+4.63 s) | Theory | <Wd f={f} at={wf(106, 'plausible')} lightAt={wf(106, 'time')} tone={colors.amber |

**107** · A contractor on that expedition testified that she asked him whether the data could show delamination.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `contractor` | `F35098` (+0.12 s) | Theory | text: A CONTRACTOR / TESTIFIED |
| `expedition` | `F35151` (+1.00 s) | Theory | text: A CONTRACTOR / TESTIFIED |
| `testified` | `F35190` (+1.65 s) | Theory | text: A CONTRACTOR / TESTIFIED |
| `she` | `F35236` (+2.42 s) | Theory | text: A CONTRACTOR / TESTIFIED |
| `asked` | `F35249` (+2.63 s) | Theory | text: A CONTRACTOR / TESTIFIED |
| `data` | `F35301` (+3.50 s) | Theory | text: COULD THE DATA SHOW DELAMINATION? · |
| `delamination` | `F35350` (+4.32 s) | Theory | text: COULD THE DATA SHOW DELAMINATION? · |

**108** · In her account, he said it was only a few microns, and that the next two dives would go ahead, with a visual inspection back in Seattle.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `account` | `F35451` (+0.37 s) | Theory | text: HE SAID: |
| `said` | `F35496` (+1.12 s) | Theory | text: HE SAID: |
| `only` | `F35519` (+1.50 s) | Theory | text: HE SAID: |
| `microns` | `F35557` (+2.13 s) | (scene list) | sound effect cue |
| `next` | `F35630` (+3.35 s) | Theory | text: NEXT TWO DIVES AHEAD · |
| `two` | `F35648` (+3.65 s) | Theory | hl= · <RecordPage set="cg112" start={sf(107) - 16} end={ef(108) + 20} hl={[{ |
| `ahead` | `F35702` (+4.55 s) | Theory | text: NEXT TWO DIVES AHEAD · |
| `visual` | `F35752` (+5.38 s) | Theory | text: LOOK IN SEATTLE |
| `Seattle` | `F35832` (+6.72 s) | Theory | text: LOOK IN SEATTLE |

**109** · Brooks himself testified that they had converted the shift into a physical distance, and judged it a relatively small movement.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Brooks` | `F35888` (+-0.02 s) | Theory | text: BROOKS TESTIFIED: |
| `testified` | `F35940` (+0.85 s) | Theory | text: BROOKS TESTIFIED: |
| `converted` | `F36003` (+1.90 s) | Theory | text: THE SHIFT / A PHYSICAL DISTANCE · |
| `shift` | `F36046` (+2.62 s) | Theory | text: THE SHIFT / A PHYSICAL DISTANCE · |
| `physical` | `F36089` (+3.33 s) | (scene list) | sound effect cue |
| `distance` | `F36117` (+3.80 s) | Theory | text: THE SHIFT / A PHYSICAL DISTANCE · |
| `judged` | `F36176` (+4.78 s) | Theory | text: JUDGED |
| `relatively` | `F36213` (+5.40 s) | (scene list) | sound effect cue |
| `movement` | `F36272` (+6.38 s) | Theory | text: JUDGED |

**110** · Titan dived again on the nineteenth of July.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `dived` | `F36370` (+0.48 s) | After80 | lead · <span style={{opacity: lead(f, wf(110, 'dived'), 8)}}> |
| `again` | `F36392` (+0.85 s) | After80 | <Chip text={f >= wf(110, 'again') ? 'DIVE 81 · BACK DOWN' : 'DIVE 81'} tone={col |
| `nineteenth` | `F36434` (+1.55 s) | (scene list) | sound effect cue |
| `July` | `F36476` (+2.25 s) | After80 | DatePill · <DatePill f={f} fps={fps} day={19} month={7} year={2022} dayWord={wf(1 |

**111** · Brooks testified that after that dive, they didn't see any further shifts in strain data.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Brooks` | `F36541` (+-0.03 s) | After80 | text: BROOKS: |
| `testified` | `F36561` (+0.30 s) | After80 | text: BROOKS: |
| `after` | `F36621` (+1.30 s) | After80 | text: AFTER THAT DIVE: / NO FURTHER |
| `dive` | `F36653` (+1.83 s) | After80 | text: AFTER THAT DIVE: / NO FURTHER |
| `didn't` | `F36700` (+2.62 s) | After80 | text: AFTER THAT DIVE: / NO FURTHER |
| `further` | `F36753` (+3.50 s) | After80 | text: AFTER THAT DIVE: / NO FURTHER |
| `shifts` | `F36778` (+3.92 s) | After80 | text: AFTER THAT DIVE: / NO FURTHER |
| `data` | `F36838` (+4.92 s) | After80 | text: AFTER THAT DIVE: / NO FURTHER |

**112** · No loud bangs.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `loud` | `F36901` (+0.27 s) | After80 | text: NO LOUD BANGS · |
| `bangs` | `F36919` (+0.57 s) | After80 | text: NO LOUD BANGS · |

**113** · Nothing in the acoustics that seemed out of the ordinary.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Nothing` | `F36968` (+0.05 s) | After80 | text: NOTHING / IN THE ACOUSTICS |
| `acoustics` | `F37002` (+0.62 s) | After80 | text: NOTHING / IN THE ACOUSTICS |
| `seemed` | `F37053` (+1.47 s) | After80 | text: NOTHING / IN THE ACOUSTICS |
| `out` | `F37071` (+1.77 s) | After80 | text: NOTHING / IN THE ACOUSTICS |
| `ordinary` | `F37098` (+2.22 s) | After80 | text: NOTHING / IN THE ACOUSTICS |

**114** · One acoustic sensor, he testified, did show activity on the dives that followed that they had not seen in twenty twenty-one, the kind of thing they wanted to be concerned about.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `One` | `F37178` (+0.12 s) | After80 | lead · <text x={200} y={868} style={T(28, lit(f, wf(114, 'sensor'), colors.cy |
| `acoustic` | `F37186` (+0.25 s) | After80 | lead · opacity={lead(f, wf(114, 'acoustic'), 10)} |
| `sensor` | `F37218` (+0.78 s) | After80 | lead · <text x={200} y={868} style={T(28, lit(f, wf(114, 'sensor'), colors.cy |
| `testified` | `F37260` (+1.48 s) | After80 | text: ACTIVITY |
| `show` | `F37332` (+2.68 s) | After80 | text: ACTIVITY |
| `activity` | `F37348` (+2.95 s) | After80 | lead · const ch4 = lead(f, wf(114, 'activity'), 16); |
| `followed` | `F37427` (+4.27 s) | After80 | text: THE DIVES THAT FOLLOWED |
| `seen` | `F37502` (+5.52 s) | After80 | text: ACTIVITY |
| `twenty` | `F37526` (+5.92 s) | After80 | text: NOT SEEN IN 2021 |
| `twenty-one` | `F37546` (+6.25 s) | After80 | text: NOT SEEN IN 2021 |
| `kind` | `F37616` (+7.42 s) | After80 | text: ACTIVITY |
| `concerned` | `F37698` (+8.78 s) | After80 | text: ACTIVITY |

**115** · He raised it with the chief executive.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `raised` | `F37790` (+0.12 s) | After80 | text: RAISED WITH THE CEO · |
| `executive` | `F37846` (+1.05 s) | After80 | text: RAISED WITH THE CEO · |

**116** · It stayed under the threshold they had set, he said, or maybe just barely over it, and it never got worse, so he did not think it was a concern.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `under` | `F37951` (+0.60 s) | After80 | text: UNDER THE THRESHOLD, |
| `threshold` | `F37975` (+1.00 s) | After80 | text: UNDER THE THRESHOLD, |
| `set` | `F38026` (+1.85 s) | After80 | lead · <text x={1720} y={thrY - 14} textAnchor="end" style={T(28, lit(f, wf(1 |
| `maybe` | `F38115` (+3.33 s) | After80 | <Wd f={f} at={wf(116, 'maybe')} lightAt={wf(116, 'barely')} tone={colors.red} bo |
| `barely` | `F38149` (+3.90 s) | (scene list) | sound effect cue |
| `never` | `F38227` (+5.20 s) | After80 | text: NEVER GOT WORSE · |
| `worse` | `F38254` (+5.65 s) | After80 | text: NEVER GOT WORSE · |
| `not` | `F38323` (+6.80 s) | After80 | <Wd f={f} at={wf(116, 'not')} lightAt={wf(116, 'concern')}>"NOT A CONCERN"</Wd> |
| `concern` | `F38367` (+7.53 s) | After80 | <Wd f={f} at={wf(116, 'not')} lightAt={wf(116, 'concern')}>"NOT A CONCERN"</Wd> |

**117** · The N - T - S - B found the sensors never produced the kind of signal that would have triggered an alert.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `N` | `F38453` (+0.27 s) | After80 | lead · <Card x={120} y={954} w={1680} o={lead(f, wf(117, 'n'), 10) * (1 - 0)} |
| `found` | `F38502` (+1.08 s) | After80 | text: NTSB: |
| `never` | `F38560` (+2.05 s) | After80 | text: THE SENSORS NEVER PRODUCED THE KIND OF SIGNAL |
| `signal` | `F38636` (+3.32 s) | After80 | text: THE SENSORS NEVER PRODUCED THE KIND OF SIGNAL |
| `triggered` | `F38685` (+4.13 s) | After80 | text: THAT WOULD HAVE TRIGGERED AN ALERT |
| `alert` | `F38715` (+4.63 s) | After80 | text: THAT WOULD HAVE TRIGGERED AN ALERT |

**118** · So, was the damage in the data?

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `was` | `F38806` (+0.57 s) | InTheData | text: So, was the |
| `damage` | `F38825` (+0.88 s) | InTheData | <Wd f={f} at={wf(118, 'damage')} tone={colors.red}>damage </Wd> |
| `in` | `F38847` (+1.25 s) | InTheData | <Wd f={f} at={wf(118, 'in')} base={colors.ink}>in the </Wd> |
| `data` | `F38862` (+1.50 s) | (scene list) | sound effect cue |

**120** · The depth was there, on the same chart as the strain, but both ran against the clock.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `depth` | `F40225` (+0.17 s) | (scene list) | sound effect cue |
| `same` | `F40313` (+1.63 s) | InTheData | <Pop f={f} fps={fps} at={wf(120, 'same')}> |
| `strain` | `F40370` (+2.58 s) | InTheData | <Chip text={f >= wf(120, 'strain') ? 'ON THE SAME CHART AS THE STRAIN' : 'ON THE |
| `both` | `F40439` (+3.73 s) | InTheData | <Pop f={f} fps={fps} at={wf(120, 'both')}> |
| `clock` | `F40499` (+4.73 s) | (scene list) | sound effect cue |

