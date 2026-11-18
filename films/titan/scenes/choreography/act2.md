# Choreography index: Act 2

Word-level choreography (PLAYBOOK §10.6), **generated from the scene code** (`python3 scripts/choreo_index.py` from the film folder; re-run after
any edit) so it cannot drift from it. One row per word-locked event: the spoken trigger, its measured frame (60 fps) and offset
from the sentence start, the scene component, and what changes (the on-screen text that arrives, or the driving line of
code). Kit: `lib/remotion/Kinetic.tsx` and `remotion/beats.tsx` (`KeyLine` parts land on their words, `ChunkQuote` reveals a
record quote chunk by chunk, `WordLine` builds a title word by word). Kit for this film: `remotion/parts*.tsx`.
Sync audit: `review/sync_audit.md`.

**23** · At three thousand eight hundred and forty metres, the ocean presses on every surface with about three hundred and eighty times the pressure at the surface.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `three` | `F7942` (+0.15 s) | Pressure | lead · <Card x={1390} y={120} w={434} o={Math.min(lead(f, wf(23, 'three'), 10 |
| `thousand` | `F7958` (+0.42 s) | Pressure | rollTo · const depth = rollTo(f, [{frame: wf(23, 'three') - 10, value: 0}, {fra |
| `eight` | `F7988` (+0.92 s) | Pressure | rollTo · const depth = rollTo(f, [{frame: wf(23, 'three') - 10, value: 0}, {fra |
| `hundred` | `F7999` (+1.10 s) | Pressure | rollTo · const depth = rollTo(f, [{frame: wf(23, 'three') - 10, value: 0}, {fra |
| `forty` | `F8024` (+1.52 s) | (scene list) | sound effect cue |
| `ocean` | `F8095` (+2.70 s) | Pressure | lead · <div style={{marginTop: 26, ...T(26, {letterSpacing: 3}), ...lit(f, wf |
| `presses` | `F8116` (+3.05 s) | Pressure | lead · <div style={{marginTop: 26, ...T(26, {letterSpacing: 3}), ...lit(f, wf |
| `surface` | `F8176` (+4.05 s) | Pressure | lead · <div style={{marginTop: 26, ...T(26, {letterSpacing: 3}), ...lit(f, wf |
| `three` | `F8235` (+5.03 s) | Pressure | rollTo · const times = rollTo(f, [{frame: wf(23, 'three', 1) - 12, value: 1}, { |
| `hundred` | `F8253` (+5.33 s) | Pressure | rollTo · const times = rollTo(f, [{frame: wf(23, 'three', 1) - 12, value: 1}, { |
| `eighty` | `F8286` (+5.88 s) | (scene list) | sound effect cue |
| `times` | `F8306` (+6.22 s) | Pressure | text: THE PRESSURE AT THE SURFACE |
| `pressure` | `F8339` (+6.77 s) | Pressure | lead · const psi = lead(f, wf(23, 'pressure'), 10); |

**24** · Titan was not built the way deep submersibles usually are.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Titan` | `F8439` (+0.00 s) | Build | lead · const titan = lead(f, wf(24, 'titan'), 12) * span(f, wf(25, 'cylinder' |
| `built` | `F8486` (+0.78 s) | Build | text: NOT BUILT THE USUAL WAY · |
| `deep` | `F8526` (+1.45 s) | Build | text: DEEP SUBMERSIBLES: USUALLY A SPHERE |
| `usually` | `F8588` (+2.48 s) | Build | text: DEEP SUBMERSIBLES: USUALLY A SPHERE |

**25** · Its pressure hull was a cylinder of carbon fibre, five layers, each about an inch thick, bonded one onto the next.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `cylinder` | `F8720` (+1.18 s) | (scene list) | sound effect cue |
| `carbon` | `F8756` (+1.78 s) | Build | bump · <Chip text="CARBON FIBRE" tone={colors.cyan} size={30} style={{transfo |
| `five` | `F8832` (+3.05 s) | (scene list) | sound effect cue |
| `layers` | `F8854` (+3.42 s) | Build | text: 5 LAYERS |
| `inch` | `F8929` (+4.67 s) | Build | lead · <span style={{...T(28, lit(f, wf(25, 'inch'), colors.ink)), opacity: l |
| `bonded` | `F8982` (+5.55 s) | (scene list) | sound effect cue |
| `one` | `F9016` (+6.12 s) | Build | text: ONE ONTO THE NEXT |
| `next` | `F9046` (+6.62 s) | Build | text: ONE ONTO THE NEXT |

**26** · Titanium rings were bonded to each end, and titanium domes were bolted to the rings.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `rings` | `F9142` (+0.67 s) | Build | lead · const ringsO = lead(f, wf(26, 'rings'), 12); |
| `bonded` | `F9174` (+1.20 s) | Build | lead · const ringBond = lead(f, wf(26, 'bonded'), 10); |
| `end` | `F9224` (+2.03 s) | Build | <Chip text={f >= wf(26, 'end') ? 'TITANIUM RINGS · BONDED TO EACH END' : 'TITANI |
| `domes` | `F9299` (+3.28 s) | Build | lead · const domesO = lead(f, wf(26, 'domes'), 12); |
| `bolted` | `F9337` (+3.92 s) | (scene list) | sound effect cue |

**27** · According to a former director of marine operations, the company's chief executive chose carbon fibre because he believed it was better in compression than in tension.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `According` | `F9440` (+0.00 s) | (scene list) | sound effect cue |
| `former` | `F9478` (+0.63 s) | WhyCarbon | {f >= wf(27, 'former') ? 'A FORMER DIRECTOR OF MARINE OPERATIONS · NTSB P. 25' : |
| `operations` | `F9552` (+1.87 s) | WhyCarbon | <div style={{...T(26, {letterSpacing: 2}), ...lit(f, wf(27, 'operations'), color |
| `company's` | `F9612` (+2.87 s) | WhyCarbon | text: THE CEO |
| `executive` | `F9657` (+3.62 s) | WhyCarbon | text: THE CEO |
| `chose` | `F9698` (+4.30 s) | WhyCarbon | text: CHOSE |
| `carbon` | `F9720` (+4.67 s) | WhyCarbon | text: CARBON FIBRE |
| `fibre` | `F9743` (+5.05 s) | WhyCarbon | text: CARBON FIBRE |
| `believed` | `F9800` (+6.00 s) | WhyCarbon | text: HE BELIEVED: |
| `compression` | `F9867` (+7.12 s) | WhyCarbon | text: BETTER IN COMPRESSION |
| `tension` | `F9928` (+8.13 s) | WhyCarbon | lead · <span style={{opacity: lead(f, wf(27, 'tension'), 8), ...lit(f, wf(27, |

**28** · He also believed that, because it was lighter, it would need less buoyancy, could be launched from many more kinds of ship instead of a purpose-built one, and could carry more people.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `also` | `F10002` (+0.13 s) | WhyCarbon | lead · <div style={{marginTop: 16, display: f >= wf(28, 'also') - 12 ? 'flex' |
| `believed` | `F10021` (+0.45 s) | WhyCarbon | text: HE ALSO BELIEVED |
| `lighter` | `F10099` (+1.75 s) | WhyCarbon | text: LIGHTER |
| `buoyancy` | `F10186` (+3.20 s) | WhyCarbon | text: LESS BUOYANCY NEEDED |
| `launched` | `F10257` (+4.38 s) | WhyCarbon | text: LAUNCHED FROM MANY MORE KINDS OF SHIP |
| `kinds` | `F10317` (+5.38 s) | WhyCarbon | text: LAUNCHED FROM MANY MORE KINDS OF SHIP |
| `purpose-built` | `F10399` (+6.75 s) | WhyCarbon | text: NOT A PURPOSE-BUILT ONE |
| `one` | `F10442` (+7.47 s) | WhyCarbon | text: NOT A PURPOSE-BUILT ONE |
| `carry` | `F10485` (+8.18 s) | WhyCarbon | text: CARRY MORE PEOPLE |
| `people` | `F10520` (+8.77 s) | WhyCarbon | text: CARRY MORE PEOPLE |

**29** · How strong was it?

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `How` | `F10557` (+0.02 s) | Margin | text: HOW STRONG WAS IT? |
| `strong` | `F10573` (+0.28 s) | Margin | text: HOW STRONG WAS IT? |

**30** · The company's original goal was a hull rated to six thousand metres, with a safety factor of two point two five: a hull that should not fail until about thirteen and a half thousand metres.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `company's` | `F10664` (+0.12 s) | Margin | text: THE COMPANY'S / ORIGINAL GOAL |
| `original` | `F10694` (+0.62 s) | Margin | text: THE COMPANY'S / ORIGINAL GOAL |
| `goal` | `F10728` (+1.18 s) | Margin | text: THE COMPANY'S / ORIGINAL GOAL |
| `hull` | `F10766` (+1.82 s) | Margin | text: A HULL / RATED TO |
| `rated` | `F10786` (+2.15 s) | Margin | text: A HULL / RATED TO |
| `six` | `F10823` (+2.77 s) | (scene list) | sound effect cue |
| `thousand` | `F10842` (+3.08 s) | Margin | <GaugeLine f={f} fps={fps} m={6000} at={wf(30, 'six')} label={f >= wf(30, 'thous |
| `metres` | `F10871` (+3.57 s) | Margin | text: A HULL / RATED TO |
| `with` | `F10915` (+4.30 s) | Margin | text: WITH / A SAFETY FACTOR OF |
| `safety` | `F10931` (+4.57 s) | Margin | text: WITH / A SAFETY FACTOR OF |
| `two` | `F10987` (+5.50 s) | Margin | text: WITH / A SAFETY FACTOR OF |
| `point` | `F11002` (+5.75 s) | Margin | text: WITH / A SAFETY FACTOR OF |
| `two` | `F11019` (+6.03 s) | Margin | text: WITH / A SAFETY FACTOR OF |
| `five` | `F11034` (+6.28 s) | Margin | text: WITH / A SAFETY FACTOR OF |
| `hull` | `F11104` (+7.45 s) | Margin | text: SHOULD / NOT |
| `not` | `F11145` (+8.13 s) | Margin | text: SHOULD / NOT |
| `fail` | `F11164` (+8.45 s) | Margin | text: SHOULD / NOT |
| `thirteen` | `F11224` (+9.45 s) | Margin | text: SHOULD / NOT |
| `half` | `F11265` (+10.13 s) | (scene list) | sound effect cue |
| `thousand` | `F11284` (+10.45 s) | Margin | text: SHOULD / NOT |
| `metres` | `F11307` (+10.83 s) | Margin | text: 6,000 × 2.25 = 13,500 · OUR ARITHMETIC |

**31** · Canada's Transportation Safety Board found that OceanGate later changed that safety factor to one point two five.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Canada's` | `F11372` (+0.00 s) | Margin | <Pop f={f} fps={fps} at={wf(31, "canada's")}> |
| `Transportation` | `F11402` (+0.50 s) | Margin | text: TRANSPORTATION SAFETY BOARD |
| `Safety` | `F11455` (+1.38 s) | Margin | text: CHANGED / THE SAFETY FACTOR |
| `Board` | `F11479` (+1.78 s) | Margin | text: TRANSPORTATION SAFETY BOARD |
| `found` | `F11502` (+2.17 s) | Margin | text: FOUND / OCEANGATE |
| `OceanGate` | `F11530` (+2.63 s) | Margin | text: FOUND / OCEANGATE |
| `later` | `F11569` (+3.28 s) | Margin | text: FOUND / OCEANGATE |
| `changed` | `F11592` (+3.67 s) | Margin | text: CHANGED / THE SAFETY FACTOR |
| `factor` | `F11657` (+4.75 s) | Margin | text: CHANGED / THE SAFETY FACTOR |
| `one` | `F11704` (+5.53 s) | (scene list) | sound effect cue |
| `point` | `F11716` (+5.73 s) | Margin | <div style={{marginTop: 18, ...T(64, {}), fontWeight: 700}}><Wd f={f} at={wf(31, |
| `two` | `F11737` (+6.08 s) | Margin | <div style={{marginTop: 18, ...T(64, {}), fontWeight: 700}}><Wd f={f} at={wf(31, |
| `five` | `F11755` (+6.38 s) | Margin | <div style={{marginTop: 18, ...T(64, {}), fontWeight: 700}}><Wd f={f} at={wf(31, |

**32** · The analysis for this hull said the carbon cylinder would hold to about seven thousand five hundred metres: six thousand, times one point two five.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `analysis` | `F11817` (+0.10 s) | Margin | <div style={{position: 'absolute', left: P.x, top: P.y, width: P.w, opacity: pan |
| `hull` | `F11874` (+1.05 s) | Margin | text: THE ANALYSIS / FOR THIS HULL: |
| `carbon` | `F11914` (+1.72 s) | Margin | text: THE CARBON / CYLINDER |
| `cylinder` | `F11942` (+2.18 s) | Margin | text: THE CARBON / CYLINDER |
| `hold` | `F11981` (+2.83 s) | Margin | text: THE CARBON / CYLINDER |
| `seven` | `F12031` (+3.67 s) | Margin | text: 500 M |
| `thousand` | `F12052` (+4.02 s) | Margin | text: 500 M |
| `five` | `F12082` (+4.52 s) | Margin | text: 500 M |
| `hundred` | `F12102` (+4.85 s) | (scene list) | sound effect cue |
| `six` | `F12185` (+6.23 s) | Margin | text: 6,000 / 1.2 |
| `thousand` | `F12201` (+6.50 s) | Margin | text: 6,000 / 1.2 |
| `times` | `F12243` (+7.20 s) | Margin | text: 6,000 / 1.2 |
| `one` | `F12267` (+7.60 s) | Margin | text: 6,000 / 1.2 |
| `two` | `F12296` (+8.08 s) | Margin | text: 6,000 / 1.2 |
| `five` | `F12312` (+8.35 s) | Margin | text: 6,000 / 1.2 |

**33** · Less than twice the depth of the Titanic.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Less` | `F12365` (+0.02 s) | Margin | text: LESS THAN / TWICE |
| `twice` | `F12391` (+0.45 s) | Margin | text: LESS THAN / TWICE |
| `depth` | `F12430` (+1.10 s) | Margin | text: LESS THAN / TWICE |
| `Titanic` | `F12462` (+1.63 s) | Margin | text: LESS THAN / TWICE |

**34** · And, the N - T - S - B noted, that analysis assumed perfect geometry and perfectly aligned fibres, not the hull that was actually built.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `N` | `F12581` (+0.93 s) | Margin | <Pop f={f} fps={fps} at={wf(34, 'n')}> |
| `noted` | `F12617` (+1.53 s) | Margin | text: NOTED: |
| `analysis` | `F12681` (+2.60 s) | Margin | text: THE ANALYSIS ASSUMED: |
| `assumed` | `F12719` (+3.23 s) | Margin | text: THE ANALYSIS ASSUMED: |
| `perfect` | `F12749` (+3.73 s) | Margin | lead · const ghost = lead(f, wf(34, 'perfect'), 14); |
| `geometry` | `F12778` (+4.22 s) | Margin | lead · <span style={{opacity: lead(f, wf(34, 'geometry'), 8), ...lit(f, wf(34 |
| `aligned` | `F12867` (+5.70 s) | Margin | lead · <span style={{opacity: lead(f, wf(34, 'fibres'), 8), ...lit(f, wf(34,  |
| `fibres` | `F12893` (+6.13 s) | Margin | lead · <span style={{opacity: lead(f, wf(34, 'fibres'), 8), ...lit(f, wf(34,  |
| `hull` | `F12976` (+7.52 s) | Margin | text: NOT THE HULL / ACTUALLY |
| `actually` | `F13014` (+8.15 s) | Margin | text: NOT THE HULL / ACTUALLY |
| `built` | `F13040` (+8.58 s) | Margin | text: NOT THE HULL / ACTUALLY |

**35** · Scale models built with the new materials imploded, or nearly imploded, shallower than three thousand metres.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Scale` | `F13092` (+0.08 s) | Margin | text: SCALE MODELS / NEW MATERIALS |
| `models` | `F13113` (+0.43 s) | Margin | text: SCALE MODELS / NEW MATERIALS |
| `built` | `F13140` (+0.88 s) | Margin | text: SCALE MODELS / NEW MATERIALS |
| `new` | `F13168` (+1.35 s) | Margin | text: SCALE MODELS / NEW MATERIALS |
| `materials` | `F13181` (+1.57 s) | Margin | text: SCALE MODELS / NEW MATERIALS |
| `imploded` | `F13222` (+2.25 s) | (scene list) | sound effect cue |
| `nearly` | `F13292` (+3.42 s) | Margin | <g opacity={models(1, wf(35, 'nearly'))}> |
| `shallower` | `F13368` (+4.68 s) | Margin | text: BOTH FAILED SHALLOWER THAN / 3,000 M |
| `three` | `F13410` (+5.38 s) | Margin | text: BOTH FAILED SHALLOWER THAN / 3,000 M |
| `thousand` | `F13429` (+5.70 s) | Margin | text: BOTH FAILED SHALLOWER THAN / 3,000 M |

**36** · OceanGate traced those failures to wrinkles in the carbon, and changed its method to prevent them.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `OceanGate` | `F13512` (+0.02 s) | Margin | text: OCEANGATE / TRACED |
| `traced` | `F13547` (+0.60 s) | Margin | text: OCEANGATE / TRACED |
| `failures` | `F13585` (+1.23 s) | Margin | text: OCEANGATE / TRACED |
| `wrinkles` | `F13623` (+1.87 s) | Margin | text: WRINKLES / IN THE CARBON |
| `carbon` | `F13665` (+2.57 s) | Margin | text: WRINKLES / IN THE CARBON |
| `changed` | `F13716` (+3.42 s) | Margin | text: NEW METHOD / LAYERS BONDED |
| `method` | `F13751` (+4.00 s) | Margin | text: NEW METHOD / LAYERS BONDED |

**37** · That new method, bonding the layers one onto the next, was never tested on a model.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `new` | `F13854` (+0.23 s) | Margin | lead · <div style={{marginTop: 22, display: 'flex', gap: 18, alignItems: 'bas |
| `method` | `F13867` (+0.45 s) | Margin | text: NEW METHOD / LAYERS BONDED |
| `bonding` | `F13913` (+1.22 s) | Margin | text: NEW METHOD / LAYERS BONDED |
| `one` | `F13969` (+2.15 s) | Margin | text: NEW METHOD / LAYERS BONDED |
| `next` | `F14000` (+2.67 s) | Margin | text: MODELS / BUILT THAT WAY |
| `never` | `F14057` (+3.62 s) | Margin | text: MODELS / BUILT THAT WAY |
| `tested` | `F14076` (+3.93 s) | Margin | text: MODELS / BUILT THAT WAY |
| `model` | `F14114` (+4.57 s) | (scene list) | sound effect cue |

**38** · Canada's investigators found that a scale model built that way was discussed, and was not built, in order to save money.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Canada's` | `F14161` (+0.00 s) | Margin | lead · <Card x={0} y={0} w={P.w} o={lead(f, wf(38, "canada's"), 10)} accent={ |
| `investigators` | `F14190` (+0.48 s) | Margin | text: TSB CANADA FOUND |
| `found` | `F14240` (+1.32 s) | Margin | text: A SCALE / MODEL BUILT THAT WAY |
| `scale` | `F14271` (+1.83 s) | Margin | text: A SCALE / MODEL BUILT THAT WAY |
| `model` | `F14294` (+2.22 s) | Margin | text: A SCALE / MODEL BUILT THAT WAY |
| `built` | `F14315` (+2.57 s) | Margin | text: NOT BUILT, |
| `discussed` | `F14366` (+3.42 s) | Margin | text: WAS DISCUSSED, |
| `not` | `F14443` (+4.70 s) | Margin | text: NOT BUILT, |
| `save` | `F14530` (+6.15 s) | Margin | text: TO SAVE MONEY |
| `money` | `F14552` (+6.52 s) | (scene list) | sound effect cue |

**39** · The only one ever built was the hull that carried people.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `only` | `F14606` (+0.15 s) | Margin | lead · <div style={{position: 'absolute', left: 0, top: 280, display: 'flex', |
| `one` | `F14624` (+0.45 s) | Margin | bump · <span style={{...T(64, {color: colors.ink, fontWeight: 700}), display: |
| `built` | `F14654` (+0.95 s) | Margin | text: BUILT: |
| `hull` | `F14707` (+1.83 s) | Margin | text: THE HULL THAT / CARRIED |
| `carried` | `F14735` (+2.30 s) | Margin | text: THE HULL THAT / CARRIED |
| `people` | `F14760` (+2.72 s) | Margin | text: THE HULL THAT / CARRIED |

**40** · In early twenty twenty-one, that hull went to a pressure test facility in Maryland.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `In` | `F14817` (+0.02 s) | Tests | const o = vis(f, wf(40, 'in') - 6, wf(46, 'never') - 24, 12, 14); |
| `early` | `F14827` (+0.18 s) | Tests | text: EARLY 2021 |
| `twenty-one` | `F14865` (+0.82 s) | Tests | text: EARLY 2021 |
| `hull` | `F14936` (+2.00 s) | Tests | text: THE HULL |
| `went` | `F14953` (+2.28 s) | Tests | <Wd f={f} at={wf(40, 'went')} tone={colors.cyan}>→ </Wd> |
| `pressure` | `F14979` (+2.72 s) | Tests | text: PRESSURE TEST FACILITY |
| `facility` | `F15015` (+3.32 s) | Tests | text: PRESSURE TEST FACILITY |
| `Maryland` | `F15056` (+4.00 s) | Tests | text: BETHESDA, MARYLAND |

**41** · The test plan had it going to the pressure of four thousand two hundred metres on three of the four days.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `test` | `F15119` (+0.12 s) | Tests | lead · const tableO = lead(f, wf(41, 'test'), 10); |
| `plan` | `F15137` (+0.42 s) | Tests | text: PLAN |
| `pressure` | `F15202` (+1.50 s) | Tests | text: PLANNED PRESSURE: |
| `four` | `F15236` (+2.07 s) | Tests | <span style={lit(f, wf(41, 'four'), colors.amber)}>4,</span> |
| `two` | `F15282` (+2.83 s) | Tests | <span style={lit(f, wf(41, 'two'), colors.amber)}>2</span> |
| `hundred` | `F15296` (+3.07 s) | Tests | <span style={lit(f, wf(41, 'hundred'), colors.amber)}>00</span> |
| `metres` | `F15316` (+3.40 s) | Tests | <span style={lit(f, wf(41, 'metres'), colors.amber)}> M </span> |
| `three` | `F15361` (+4.15 s) | Tests | text: OF 4 / DAYS |
| `four` | `F15396` (+4.73 s) | Tests | text: OF 4 / DAYS |
| `days` | `F15411` (+4.98 s) | Tests | text: OF 4 / DAYS |

**42** · The facility's logbook shows it reached that pressure once.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `logbook` | `F15507` (+0.75 s) | Tests | text: LOGBOOK |
| `shows` | `F15540` (+1.30 s) | Tests | lead · <div style={{display: 'flex', gap: 14, alignItems: 'baseline', whiteSp |
| `reached` | `F15564` (+1.70 s) | Tests | text: REACHED |
| `pressure` | `F15591` (+2.15 s) | Tests | text: REACHED |
| `once` | `F15626` (+2.73 s) | (scene list) | sound effect cue |

**43** · The first of March, for twenty minutes.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `first` | `F15682` (+0.15 s) | Tests | DatePill · <DatePill f={f} fps={fps} day={1} month={3} year={2021} dayWord={wf(43 |
| `March` | `F15709` (+0.60 s) | Tests | DatePill · <DatePill f={f} fps={fps} day={1} month={3} year={2021} dayWord={wf(43 |
| `twenty` | `F15759` (+1.43 s) | Tests | rollTo · <span style={{...T(30, lit(f, wf(43, 'minutes'), colors.ink)), opacity |
| `minutes` | `F15785` (+1.87 s) | Tests | rollTo · <span style={{...T(30, lit(f, wf(43, 'minutes'), colors.ink)), opacity |

**44** · According to analysis done for the company, the test depth was limited by a titanium dome, not by the carbon.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `According` | `F15839` (+0.02 s) | Tests | lead · <div style={{position: 'absolute', top: 0, ...T(28, {}), lineHeight: 1 |
| `analysis` | `F15872` (+0.57 s) | Tests | text: ANALYSIS |
| `company` | `F15929` (+1.52 s) | Tests | text: FOR THE COMPANY: |
| `test` | `F15985` (+2.45 s) | Margin | lead · const testLine = lead(f, wf(44, 'test'), 12); |
| `limited` | `F16034` (+3.27 s) | Tests | text: TEST DEPTH LIMITED BY |
| `titanium` | `F16074` (+3.93 s) | Tests | text: A TITANIUM DOME, |
| `dome` | `F16122` (+4.73 s) | Tests | text: A TITANIUM DOME, |
| `carbon` | `F16196` (+5.97 s) | (scene list) | sound effect cue |

**45** · On the other days, the hull was held near four thousand metres, and then at three thousand eight hundred and forty, for four hours, twice.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `other` | `F16266` (+0.23 s) | Tests | text: OTHER DAYS: |
| `days` | `F16280` (+0.47 s) | Tests | text: OTHER DAYS: |
| `hull` | `F16322` (+1.17 s) | Tests | text: THE HULL |
| `held` | `F16347` (+1.58 s) | Tests | text: HELD |
| `near` | `F16365` (+1.88 s) | Tests | text: NEAR |
| `four` | `F16383` (+2.18 s) | Tests | text: 4,000 M |
| `thousand` | `F16399` (+2.45 s) | Tests | text: 4,000 M |
| `then` | `F16478` (+3.77 s) | Tests | text: THEN |
| `three` | `F16518` (+4.43 s) | Tests | <Wd f={f} at={wf(45, 'three')} lightAt={wf(45, 'thousand', 1)} tone={colors.cyan |
| `thousand` | `F16535` (+4.72 s) | Tests | <Wd f={f} at={wf(45, 'three')} lightAt={wf(45, 'thousand', 1)} tone={colors.cyan |
| `eight` | `F16560` (+5.13 s) | Tests | <Wd f={f} at={wf(45, 'eight')} lightAt={wf(45, 'hundred')} tone={colors.cyan} bo |
| `hundred` | `F16569` (+5.28 s) | Tests | <Wd f={f} at={wf(45, 'eight')} lightAt={wf(45, 'hundred')} tone={colors.cyan} bo |
| `forty` | `F16596` (+5.73 s) | Tests | text: 40 M |
| `four` | `F16652` (+6.67 s) | Tests | <Wd f={f} at={wf(45, 'four', 1)} lightAt={wf(45, 'hours')} tone={colors.amber} b |
| `hours` | `F16669` (+6.95 s) | Tests | <Wd f={f} at={wf(45, 'four', 1)} lightAt={wf(45, 'hours')} tone={colors.amber} b |
| `twice` | `F16707` (+7.58 s) | Tests | <Wd f={f} at={wf(45, 'twice')} tone={colors.amber} bold>, TWICE</Wd> |

**46** · It was never tested to failure.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `never` | `F16786` (+0.43 s) | Tests | const o = vis(f, wf(40, 'in') - 6, wf(46, 'never') - 24, 12, 14); |
| `tested` | `F16805` (+0.75 s) | Margin | const neverLine = interpolate(f, [wf(46, 'tested') - 10, wf(46, 'failure') + 20, |
| `failure` | `F16844` (+1.40 s) | (scene list) | sound effect cue |

**47** · The N - T - S - B found it unlikely that the hull ever had the strength the analysis predicted, and that the company did not know its actual strength.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `N` | `F16984` (+0.23 s) | Margin | lead · <div style={{marginTop: 34, opacity: lead(f, wf(47, 'n'), 8)}}> |
| `unlikely` | `F17058` (+1.47 s) | Margin | text: UNLIKELY / THE HULL |
| `hull` | `F17112` (+2.37 s) | Margin | text: UNLIKELY / THE HULL |
| `ever` | `F17134` (+2.73 s) | Margin | text: UNLIKELY / THE HULL |
| `strength` | `F17171` (+3.35 s) | Margin | text: THE PREDICTED STRENGTH |
| `predicted` | `F17232` (+4.37 s) | Margin | text: THE PREDICTED STRENGTH |
| `company` | `F17306` (+5.60 s) | Margin | text: THE COMPANY DID NOT KNOW |
| `know` | `F17364` (+6.57 s) | Margin | text: THE COMPANY DID NOT KNOW |
| `actual` | `F17394` (+7.07 s) | Margin | text: ITS ACTUAL STRENGTH |
| `strength` | `F17421` (+7.52 s) | Margin | text: ITS ACTUAL STRENGTH |

**48** · Then how would anyone know if it was failing?

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `how` | `F17485` (+0.18 s) | Listen | text: How would anyone |
| `know` | `F17534` (+1.00 s) | Listen | lead · <span style={{opacity: lead(f, wf(48, 'know'), 8), color: f >= wf(48,  |
| `failing` | `F17573` (+1.65 s) | Listen | lead · <span style={{opacity: lead(f, wf(48, 'know'), 8), color: f >= wf(48,  |

**49** · OceanGate's answer was to listen to it.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `OceanGate's` | `F17630` (+0.05 s) | Listen | <Pop f={f} fps={fps} at={wf(49, "oceangate's")}> |
| `answer` | `F17669` (+0.70 s) | Listen | <Chip text={f >= wf(49, 'listen') ? "OCEANGATE'S ANSWER: LISTEN TO IT" : f >= wf |
| `listen` | `F17728` (+1.68 s) | Listen | <Chip text={f >= wf(49, 'listen') ? "OCEANGATE'S ANSWER: LISTEN TO IT" : f >= wf |

**50** · Eight acoustic sensors and sixteen strain gauges, fixed inside the hull.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Eight` | `F17798` (+0.03 s) | (scene list) | sound effect cue |
| `sensors` | `F17848` (+0.87 s) | Listen | lead · <span style={{opacity: lead(f, wf(50, 'eight'), 8), ...lit(f, wf(50, ' |
| `sixteen` | `F17897` (+1.68 s) | Listen | const at = wf(50, 'sixteen') + i * 2; |
| `gauges` | `F17955` (+2.65 s) | Listen | lead · <span style={{opacity: lead(f, wf(50, 'sixteen'), 8), ...lit(f, wf(50, |
| `inside` | `F18023` (+3.78 s) | Listen | text: INSIDE THE HULL |
| `hull` | `F18060` (+4.40 s) | Listen | text: INSIDE THE HULL |

**51** · A carbon hull, the theory went, would crackle as it weakened, and the company would retire it in time.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `theory` | `F18169` (+1.15 s) | Listen | text: THE THEORY: |
| `crackle` | `F18230` (+2.17 s) | (scene list) | sound effect cue |
| `weakened` | `F18276` (+2.93 s) | Listen | text: AS IT WEAKENED |
| `company` | `F18333` (+3.88 s) | Listen | text: THE COMPANY WOULD |
| `retire` | `F18369` (+4.48 s) | Listen | lead · <span style={{opacity: lead(f, wf(51, 'retire'), 8)}}> |
| `time` | `F18416` (+5.27 s) | Listen | <Chip text={f >= wf(51, 'time') ? 'RETIRE IT IN TIME' : 'RETIRE IT'} tone={color |

**52** · The system had limits.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `system` | `F18473` (+0.17 s) | Listen | lead · <div style={{position: 'absolute', left: 200, top: 140, ...T(40, lit(f |
| `limits` | `F18515` (+0.87 s) | Listen | lead · <div style={{position: 'absolute', left: 200, top: 140, ...T(40, lit(f |

**53** · The pilot saw live readings, but the full data were downloaded only after each dive.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `pilot` | `F18575` (+0.13 s) | Listen | lead · const pilot = lead(f, wf(53, 'pilot'), 10); |
| `live` | `F18618` (+0.85 s) | Listen | bump · <Chip text="PILOT · LIVE READINGS" tone={colors.cyan} size={30} style= |
| `full` | `F18698` (+2.18 s) | Listen | text: FULL DATA: |
| `data` | `F18715` (+2.47 s) | Listen | text: FULL DATA: |
| `downloaded` | `F18745` (+2.97 s) | Listen | lead · const after = lead(f, wf(53, 'downloaded'), 10); |
| `only` | `F18786` (+3.65 s) | Listen | <Chip text={f >= wf(53, 'dive') ? 'DOWNLOADED ONLY AFTER EACH DIVE' : f >= wf(53 |
| `dive` | `F18840` (+4.55 s) | Listen | <Chip text={f >= wf(53, 'dive') ? 'DOWNLOADED ONLY AFTER EACH DIVE' : f >= wf(53 |

**54** · Acoustic data were analysed only from the dive itself, so damage at the surface, or in storage, could not raise an alert.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Acoustic` | `F18892` (+0.02 s) | Listen | lead · <g opacity={lead(f, wf(54, 'acoustic'), 10)}> |
| `analysed` | `F18955` (+1.07 s) | Listen | text: ACOUSTIC DATA ANALYSED: |
| `dive` | `F19026` (+2.25 s) | Listen | lead · const win = lead(f, wf(54, 'dive'), 12); |
| `damage` | `F19109` (+3.63 s) | Listen | text: DAMAGE AT THE SURFACE OR IN STORAGE? |
| `surface` | `F19145` (+4.23 s) | (scene list) | sound effect cue |
| `storage` | `F19208` (+5.28 s) | Listen | text: IN STORAGE |
| `raise` | `F19280` (+6.48 s) | Listen | lead · <text x={200} y={462} style={T(30, lit(f, wf(54, 'alert'), colors.red) |
| `alert` | `F19302` (+6.85 s) | Listen | lead · <text x={200} y={462} style={T(30, lit(f, wf(54, 'alert'), colors.red) |

**55** · In twenty twenty-two, three of the eight acoustic channels registered no acoustic events all season.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `twenty` | `F19363` (+0.15 s) | Listen | lead · <g opacity={lead(f, wf(55, 'twenty'), 10)}> |
| `twenty-two` | `F19383` (+0.48 s) | Listen | text: 2022 · |
| `three` | `F19444` (+1.50 s) | (scene list) | sound effect cue |
| `eight` | `F19482` (+2.13 s) | Listen | text: 8 ACOUSTIC CHANNELS |
| `registered` | `F19552` (+3.30 s) | Listen | text: REGISTERED: |
| `no` | `F19588` (+3.90 s) | Listen | lead · <text x={770} y={600} style={T(30, lit(f, wf(55, 'events'), colors.red |
| `events` | `F19633` (+4.65 s) | Listen | lead · <text x={770} y={600} style={T(30, lit(f, wf(55, 'events'), colors.red |
| `season` | `F19683` (+5.48 s) | Listen | {f >= wf(55, 'season') ? 'CH 1, 3, 5: NO ACOUSTIC EVENTS · ALL SEASON' : 'CH 1,  |

**56** · After each dive, the engineering director looked at the data first, and emailed it to about eight to ten people, the chief executive among them.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `After` | `F19726` (+0.03 s) | Listen | lead · <g opacity={lead(f, wf(56, 'after'), 10)}> |
| `dive` | `F19760` (+0.60 s) | Listen | text: AFTER EACH DIVE |
| `engineering` | `F19810` (+1.43 s) | Listen | text: ENGINEERING DIRECTOR |
| `director` | `F19842` (+1.97 s) | Listen | text: ENGINEERING DIRECTOR |
| `looked` | `F19872` (+2.47 s) | Listen | text: LOOKS FIRST |
| `first` | `F19922` (+3.30 s) | Listen | text: LOOKS FIRST |
| `emailed` | `F19978` (+4.23 s) | (scene list) | sound effect cue |
| `eight` | `F20041` (+5.28 s) | Listen | lead · <text x={720} y={820} style={T(28, lit(f, wf(56, 'people'), colors.ink |
| `ten` | `F20061` (+5.62 s) | Listen | EMAILED TO ≈ 8–<tspan style={lit(f, wf(56, 'ten'), colors.ink)}>10</tspan> PEOPL |
| `people` | `F20079` (+5.92 s) | Listen | lead · <text x={720} y={820} style={T(28, lit(f, wf(56, 'people'), colors.ink |
| `chief` | `F20130` (+6.77 s) | Listen | text: THE CEO |
| `executive` | `F20146` (+7.03 s) | Listen | text: THE CEO |

**57** · And the alert criteria had been set on the sounds of earlier hulls and scale models, built a different way.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `alert` | `F20241` (+0.20 s) | Listen | lead · <AbsoluteFill style={{opacity: 1 - lead(f, wf(57, 'alert'), 12)}}> |
| `criteria` | `F20261` (+0.53 s) | Listen | text: ALERT THRESHOLD |
| `set` | `F20321` (+1.53 s) | Listen | text: SET ON |
| `sounds` | `F20349` (+2.00 s) | Listen | text: THE SOUNDS OF |
| `earlier` | `F20382` (+2.55 s) | Listen | text: EARLIER HULLS |
| `hulls` | `F20409` (+3.00 s) | Listen | text: EARLIER HULLS |
| `scale` | `F20443` (+3.57 s) | Listen | <Wd f={f} at={wf(57, 'scale')} lightAt={wf(57, 'models')} tone={colors.amber} bo |
| `models` | `F20464` (+3.92 s) | Listen | <Wd f={f} at={wf(57, 'scale')} lightAt={wf(57, 'models')} tone={colors.amber} bo |
| `built` | `F20500` (+4.52 s) | Listen | text: BUILT |
| `different` | `F20519` (+4.83 s) | Listen | text: A DIFFERENT WAY |
| `way` | `F20541` (+5.20 s) | Listen | text: A DIFFERENT WAY |

**58** · No model had ever been built this hull's way, so, the N - T - S - B found, OceanGate had no data on how this one would sound as it failed.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `No` | `F20585` (+0.07 s) | Listen | text: MODELS |
| `model` | `F20597` (+0.27 s) | Listen | text: MODELS |
| `built` | `F20663` (+1.37 s) | Listen | text: BUILT |
| `hull's` | `F20694` (+1.88 s) | Listen | text: THIS HULL'S WAY: |
| `way` | `F20714` (+2.22 s) | Listen | text: THIS HULL'S WAY: |
| `N` | `F20801` (+3.67 s) | Listen | lead · <span style={{opacity: lead(f, wf(58, 'n'), 8)}}> |
| `OceanGate` | `F20887` (+5.10 s) | Listen | text: OCEANGATE HAD |
| `no` | `F20936` (+5.92 s) | Listen | text: NO DATA |
| `data` | `F20952` (+6.18 s) | (scene list) | sound effect cue |
| `how` | `F20986` (+6.75 s) | Listen | text: ON HOW THIS ONE |
| `one` | `F21018` (+7.28 s) | Listen | text: ON HOW THIS ONE |
| `sound` | `F21038` (+7.62 s) | Listen | text: WOULD SOUND AS IT FAILED |
| `failed` | `F21075` (+8.23 s) | Listen | text: WOULD SOUND AS IT FAILED |

