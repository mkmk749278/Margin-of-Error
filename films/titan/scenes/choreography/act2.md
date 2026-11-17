# Choreography index: Act 2

Word-level choreography (PLAYBOOK §10.6), **generated from the scene code** (`python3 scripts/choreo_index.py` from the film folder; re-run after
any edit) so it cannot drift from it. One row per word-locked event: the spoken trigger, its measured frame (60 fps) and offset
from the sentence start, the scene component, and what changes (the on-screen text that arrives, or the driving line of
code). Kit: `lib/remotion/Kinetic.tsx` and `remotion/beats.tsx` (`KeyLine` parts land on their words, `ChunkQuote` reveals a
record quote chunk by chunk, `WordLine` builds a title word by word). Kit for this film: `remotion/parts*.tsx`.
Sync audit: `review/sync_audit.md`.

**22** · At three thousand eight hundred and forty metres, the ocean presses on every surface with about three hundred and eighty times the pressure at the surface.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `three` | `F7079` (+0.15 s) | Pressure | lead · <Card x={1390} y={120} w={434} o={Math.min(lead(f, wf(22, 'three'), 10 |
| `thousand` | `F7095` (+0.42 s) | Pressure | rollTo · const depth = rollTo(f, [{frame: wf(22, 'three') - 10, value: 0}, {fra |
| `eight` | `F7125` (+0.92 s) | Pressure | rollTo · const depth = rollTo(f, [{frame: wf(22, 'three') - 10, value: 0}, {fra |
| `hundred` | `F7136` (+1.10 s) | Pressure | rollTo · const depth = rollTo(f, [{frame: wf(22, 'three') - 10, value: 0}, {fra |
| `forty` | `F7161` (+1.52 s) | (scene list) | sound effect cue |
| `ocean` | `F7232` (+2.70 s) | Pressure | lead · <div style={{marginTop: 26, ...T(26, {letterSpacing: 3}), ...lit(f, wf |
| `presses` | `F7253` (+3.05 s) | Pressure | lead · <div style={{marginTop: 26, ...T(26, {letterSpacing: 3}), ...lit(f, wf |
| `surface` | `F7313` (+4.05 s) | Pressure | lead · <div style={{marginTop: 26, ...T(26, {letterSpacing: 3}), ...lit(f, wf |
| `three` | `F7372` (+5.03 s) | Pressure | rollTo · const times = rollTo(f, [{frame: wf(22, 'three', 1) - 12, value: 1}, { |
| `hundred` | `F7390` (+5.33 s) | Pressure | rollTo · const times = rollTo(f, [{frame: wf(22, 'three', 1) - 12, value: 1}, { |
| `eighty` | `F7423` (+5.88 s) | (scene list) | sound effect cue |
| `times` | `F7443` (+6.22 s) | Pressure | text: THE PRESSURE AT THE SURFACE |
| `pressure` | `F7476` (+6.77 s) | Pressure | lead · const psi = lead(f, wf(22, 'pressure'), 10); |

**23** · Titan was not built the way deep submersibles usually are.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Titan` | `F7576` (+0.00 s) | Build | lead · const titan = lead(f, wf(23, 'titan'), 12) * span(f, wf(24, 'cylinder' |
| `built` | `F7624` (+0.80 s) | Build | text: NOT BUILT THE USUAL WAY · |
| `deep` | `F7663` (+1.45 s) | Build | text: DEEP SUBMERSIBLES: USUALLY A SPHERE |
| `usually` | `F7725` (+2.48 s) | Build | text: DEEP SUBMERSIBLES: USUALLY A SPHERE |

**24** · Its pressure hull was a cylinder of carbon fibre, five layers, each about an inch thick, bonded one onto the next.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `cylinder` | `F7857` (+1.18 s) | (scene list) | sound effect cue |
| `carbon` | `F7893` (+1.78 s) | Build | bump · <Chip text="CARBON FIBRE" tone={colors.cyan} size={30} style={{transfo |
| `five` | `F7969` (+3.05 s) | (scene list) | sound effect cue |
| `layers` | `F7991` (+3.42 s) | Build | text: 5 LAYERS |
| `inch` | `F8066` (+4.67 s) | Build | lead · <span style={{...T(28, lit(f, wf(24, 'inch'), colors.ink)), opacity: l |
| `bonded` | `F8119` (+5.55 s) | (scene list) | sound effect cue |
| `one` | `F8153` (+6.12 s) | Build | text: ONE ONTO THE NEXT |
| `next` | `F8183` (+6.62 s) | Build | text: ONE ONTO THE NEXT |

**25** · Titanium rings were bonded to each end, and titanium domes were bolted to the rings.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `rings` | `F8279` (+0.67 s) | Build | lead · const ringsO = lead(f, wf(25, 'rings'), 12); |
| `bonded` | `F8311` (+1.20 s) | Build | lead · const ringBond = lead(f, wf(25, 'bonded'), 10); |
| `end` | `F8362` (+2.05 s) | Build | <Chip text={f >= wf(25, 'end') ? 'TITANIUM RINGS · BONDED TO EACH END' : 'TITANI |
| `domes` | `F8436` (+3.28 s) | Build | lead · const domesO = lead(f, wf(25, 'domes'), 12); |
| `bolted` | `F8475` (+3.93 s) | (scene list) | sound effect cue |

**26** · According to a former director of marine operations, the company's chief executive chose carbon fibre because he believed it was better in compression than in tension.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `According` | `F8577` (+0.00 s) | (scene list) | sound effect cue |
| `former` | `F8615` (+0.63 s) | WhyCarbon | {f >= wf(26, 'former') ? 'A FORMER DIRECTOR OF MARINE OPERATIONS · NTSB P. 25' : |
| `operations` | `F8688` (+1.85 s) | WhyCarbon | <div style={{...T(26, {letterSpacing: 2}), ...lit(f, wf(26, 'operations'), color |
| `company's` | `F8749` (+2.87 s) | WhyCarbon | text: THE CEO |
| `executive` | `F8794` (+3.62 s) | WhyCarbon | text: THE CEO |
| `chose` | `F8835` (+4.30 s) | WhyCarbon | text: CHOSE |
| `carbon` | `F8857` (+4.67 s) | WhyCarbon | text: CARBON FIBRE |
| `fibre` | `F8880` (+5.05 s) | WhyCarbon | text: CARBON FIBRE |
| `believed` | `F8939` (+6.03 s) | WhyCarbon | text: HE BELIEVED: |
| `compression` | `F9004` (+7.12 s) | WhyCarbon | text: BETTER IN COMPRESSION |
| `tension` | `F9065` (+8.13 s) | WhyCarbon | lead · <span style={{opacity: lead(f, wf(26, 'tension'), 8), ...lit(f, wf(26, |

**27** · He also believed that, because it was lighter, it would need less buoyancy, could be launched from many more kinds of ship instead of a purpose-built one, and could carry more people.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `also` | `F9139` (+0.13 s) | WhyCarbon | lead · <div style={{marginTop: 16, display: f >= wf(27, 'also') - 12 ? 'flex' |
| `believed` | `F9158` (+0.45 s) | WhyCarbon | text: HE ALSO BELIEVED |
| `lighter` | `F9236` (+1.75 s) | WhyCarbon | text: LIGHTER |
| `buoyancy` | `F9323` (+3.20 s) | WhyCarbon | text: LESS BUOYANCY NEEDED |
| `launched` | `F9393` (+4.37 s) | WhyCarbon | text: LAUNCHED FROM MANY MORE KINDS OF SHIP |
| `kinds` | `F9455` (+5.40 s) | WhyCarbon | text: LAUNCHED FROM MANY MORE KINDS OF SHIP |
| `purpose-built` | `F9535` (+6.73 s) | WhyCarbon | text: NOT A PURPOSE-BUILT ONE |
| `one` | `F9579` (+7.47 s) | WhyCarbon | text: NOT A PURPOSE-BUILT ONE |
| `carry` | `F9622` (+8.18 s) | WhyCarbon | text: CARRY MORE PEOPLE |
| `people` | `F9658` (+8.78 s) | WhyCarbon | text: CARRY MORE PEOPLE |

**28** · How strong was it?

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `How` | `F9694` (+0.02 s) | Margin | text: HOW STRONG WAS IT? |
| `strong` | `F9710` (+0.28 s) | Margin | text: HOW STRONG WAS IT? |

**29** · The company's original goal was a hull rated to six thousand metres, with a safety factor of two point two five: a hull that should not fail until about thirteen and a half thousand metres.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `company's` | `F9801` (+0.12 s) | Margin | text: THE COMPANY'S / ORIGINAL GOAL |
| `original` | `F9831` (+0.62 s) | Margin | text: THE COMPANY'S / ORIGINAL GOAL |
| `goal` | `F9865` (+1.18 s) | Margin | text: THE COMPANY'S / ORIGINAL GOAL |
| `hull` | `F9904` (+1.83 s) | Margin | text: A HULL / RATED TO |
| `rated` | `F9922` (+2.13 s) | Margin | text: A HULL / RATED TO |
| `six` | `F9960` (+2.77 s) | (scene list) | sound effect cue |
| `thousand` | `F9980` (+3.10 s) | Margin | <GaugeLine f={f} fps={fps} m={6000} at={wf(29, 'six')} label={f >= wf(29, 'thous |
| `metres` | `F10008` (+3.57 s) | Margin | text: A HULL / RATED TO |
| `with` | `F10052` (+4.30 s) | Margin | text: WITH / A SAFETY FACTOR OF |
| `safety` | `F10068` (+4.57 s) | Margin | text: WITH / A SAFETY FACTOR OF |
| `two` | `F10125` (+5.52 s) | Margin | text: WITH / A SAFETY FACTOR OF |
| `point` | `F10139` (+5.75 s) | Margin | text: WITH / A SAFETY FACTOR OF |
| `two` | `F10155` (+6.02 s) | Margin | text: WITH / A SAFETY FACTOR OF |
| `five` | `F10171` (+6.28 s) | Margin | text: WITH / A SAFETY FACTOR OF |
| `hull` | `F10241` (+7.45 s) | Margin | text: SHOULD / NOT |
| `not` | `F10283` (+8.15 s) | Margin | text: SHOULD / NOT |
| `fail` | `F10301` (+8.45 s) | Margin | text: SHOULD / NOT |
| `thirteen` | `F10361` (+9.45 s) | Margin | text: SHOULD / NOT |
| `half` | `F10402` (+10.13 s) | (scene list) | sound effect cue |
| `thousand` | `F10421` (+10.45 s) | Margin | text: SHOULD / NOT |
| `metres` | `F10444` (+10.83 s) | Margin | text: 6,000 × 2.25 = 13,500 · OUR ARITHMETIC |

**30** · Canada's Transportation Safety Board found that OceanGate later changed that safety factor to one point two five.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Canada's` | `F10509` (+0.00 s) | Margin | <Pop f={f} fps={fps} at={wf(30, "canada's")}> |
| `Transportation` | `F10539` (+0.50 s) | Margin | text: TRANSPORTATION SAFETY BOARD |
| `Safety` | `F10592` (+1.38 s) | Margin | text: CHANGED / THE SAFETY FACTOR |
| `Board` | `F10616` (+1.78 s) | Margin | text: TRANSPORTATION SAFETY BOARD |
| `found` | `F10638` (+2.15 s) | Margin | text: FOUND / OCEANGATE |
| `OceanGate` | `F10666` (+2.62 s) | Margin | text: FOUND / OCEANGATE |
| `later` | `F10706` (+3.28 s) | Margin | text: FOUND / OCEANGATE |
| `changed` | `F10729` (+3.67 s) | Margin | text: CHANGED / THE SAFETY FACTOR |
| `factor` | `F10793` (+4.73 s) | Margin | text: CHANGED / THE SAFETY FACTOR |
| `one` | `F10840` (+5.52 s) | (scene list) | sound effect cue |
| `point` | `F10852` (+5.72 s) | Margin | <div style={{marginTop: 18, ...T(64, {}), fontWeight: 700}}><Wd f={f} at={wf(30, |
| `two` | `F10873` (+6.07 s) | Margin | <div style={{marginTop: 18, ...T(64, {}), fontWeight: 700}}><Wd f={f} at={wf(30, |
| `five` | `F10891` (+6.37 s) | Margin | <div style={{marginTop: 18, ...T(64, {}), fontWeight: 700}}><Wd f={f} at={wf(30, |

**31** · The analysis for this hull said the carbon cylinder would hold to about seven thousand five hundred metres: six thousand, times one point two five.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `analysis` | `F10954` (+0.10 s) | Margin | <div style={{position: 'absolute', left: P.x, top: P.y, width: P.w, opacity: pan |
| `hull` | `F11011` (+1.05 s) | Margin | text: THE ANALYSIS / FOR THIS HULL: |
| `carbon` | `F11050` (+1.70 s) | Margin | text: THE CARBON / CYLINDER |
| `cylinder` | `F11079` (+2.18 s) | Margin | text: THE CARBON / CYLINDER |
| `hold` | `F11118` (+2.83 s) | Margin | text: THE CARBON / CYLINDER |
| `seven` | `F11168` (+3.67 s) | Margin | text: 500 M |
| `thousand` | `F11189` (+4.02 s) | Margin | text: 500 M |
| `five` | `F11219` (+4.52 s) | Margin | text: 500 M |
| `hundred` | `F11239` (+4.85 s) | (scene list) | sound effect cue |
| `six` | `F11322` (+6.23 s) | Margin | text: 6,000 / 1.2 |
| `thousand` | `F11338` (+6.50 s) | Margin | text: 6,000 / 1.2 |
| `times` | `F11381` (+7.22 s) | Margin | text: 6,000 / 1.2 |
| `one` | `F11404` (+7.60 s) | Margin | text: 6,000 / 1.2 |
| `two` | `F11433` (+8.08 s) | Margin | text: 6,000 / 1.2 |
| `five` | `F11449` (+8.35 s) | Margin | text: 6,000 / 1.2 |

**32** · Less than twice the depth of the Titanic.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Less` | `F11502` (+0.02 s) | Margin | text: LESS THAN / TWICE |
| `twice` | `F11528` (+0.45 s) | Margin | text: LESS THAN / TWICE |
| `depth` | `F11567` (+1.10 s) | Margin | text: LESS THAN / TWICE |
| `Titanic` | `F11599` (+1.63 s) | Margin | text: LESS THAN / TWICE |

**33** · And, the N - T - S - B noted, that analysis assumed perfect geometry and perfectly aligned fibres, not the hull that was actually built.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `N` | `F11718` (+0.93 s) | Margin | <Pop f={f} fps={fps} at={wf(33, 'n')}> |
| `noted` | `F11754` (+1.53 s) | Margin | text: NOTED: |
| `analysis` | `F11817` (+2.58 s) | Margin | text: THE ANALYSIS ASSUMED: |
| `assumed` | `F11856` (+3.23 s) | Margin | text: THE ANALYSIS ASSUMED: |
| `perfect` | `F11886` (+3.73 s) | Margin | lead · const ghost = lead(f, wf(33, 'perfect'), 14); |
| `geometry` | `F11915` (+4.22 s) | Margin | lead · <span style={{opacity: lead(f, wf(33, 'geometry'), 8), ...lit(f, wf(33 |
| `aligned` | `F12004` (+5.70 s) | Margin | lead · <span style={{opacity: lead(f, wf(33, 'fibres'), 8), ...lit(f, wf(33,  |
| `fibres` | `F12030` (+6.13 s) | Margin | lead · <span style={{opacity: lead(f, wf(33, 'fibres'), 8), ...lit(f, wf(33,  |
| `hull` | `F12113` (+7.52 s) | Margin | text: NOT THE HULL / ACTUALLY |
| `actually` | `F12151` (+8.15 s) | Margin | text: NOT THE HULL / ACTUALLY |
| `built` | `F12177` (+8.58 s) | Margin | text: NOT THE HULL / ACTUALLY |

**34** · Scale models built with the new materials imploded, or nearly imploded, shallower than three thousand metres.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Scale` | `F12229` (+0.08 s) | Margin | text: SCALE MODELS / NEW MATERIALS |
| `models` | `F12250` (+0.43 s) | Margin | text: SCALE MODELS / NEW MATERIALS |
| `built` | `F12277` (+0.88 s) | Margin | text: SCALE MODELS / NEW MATERIALS |
| `new` | `F12305` (+1.35 s) | Margin | text: SCALE MODELS / NEW MATERIALS |
| `materials` | `F12318` (+1.57 s) | Margin | text: SCALE MODELS / NEW MATERIALS |
| `imploded` | `F12359` (+2.25 s) | (scene list) | sound effect cue |
| `nearly` | `F12429` (+3.42 s) | Margin | <g opacity={models(1, wf(34, 'nearly'))}> |
| `shallower` | `F12504` (+4.67 s) | Margin | text: BOTH FAILED SHALLOWER THAN / 3,000 M |
| `three` | `F12547` (+5.38 s) | Margin | text: BOTH FAILED SHALLOWER THAN / 3,000 M |
| `thousand` | `F12566` (+5.70 s) | Margin | text: BOTH FAILED SHALLOWER THAN / 3,000 M |

**35** · OceanGate traced those failures to wrinkles in the carbon, and changed its method to prevent them.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `OceanGate` | `F12650` (+0.03 s) | Margin | text: OCEANGATE / TRACED |
| `traced` | `F12684` (+0.60 s) | Margin | text: OCEANGATE / TRACED |
| `failures` | `F12722` (+1.23 s) | Margin | text: OCEANGATE / TRACED |
| `wrinkles` | `F12759` (+1.85 s) | Margin | text: WRINKLES / IN THE CARBON |
| `carbon` | `F12802` (+2.57 s) | Margin | text: WRINKLES / IN THE CARBON |
| `changed` | `F12853` (+3.42 s) | Margin | text: NEW METHOD / LAYERS BONDED |
| `method` | `F12888` (+4.00 s) | Margin | text: NEW METHOD / LAYERS BONDED |

**36** · That new method, bonding the layers one onto the next, was never tested on a model.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `new` | `F12991` (+0.23 s) | Margin | lead · <div style={{marginTop: 22, display: 'flex', gap: 18, alignItems: 'bas |
| `method` | `F13006` (+0.48 s) | Margin | text: NEW METHOD / LAYERS BONDED |
| `bonding` | `F13050` (+1.22 s) | Margin | text: NEW METHOD / LAYERS BONDED |
| `one` | `F13106` (+2.15 s) | Margin | text: NEW METHOD / LAYERS BONDED |
| `next` | `F13137` (+2.67 s) | Margin | text: MODELS / BUILT THAT WAY |
| `never` | `F13193` (+3.60 s) | Margin | text: MODELS / BUILT THAT WAY |
| `tested` | `F13213` (+3.93 s) | Margin | text: MODELS / BUILT THAT WAY |
| `model` | `F13251` (+4.57 s) | (scene list) | sound effect cue |

**37** · Canada's investigators found that a scale model built that way was discussed, and was not built, in order to save money.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Canada's` | `F13298` (+0.00 s) | Margin | lead · <Card x={0} y={0} w={P.w} o={lead(f, wf(37, "canada's"), 10)} accent={ |
| `investigators` | `F13326` (+0.47 s) | Margin | text: TSB CANADA FOUND |
| `found` | `F13377` (+1.32 s) | Margin | text: A SCALE / MODEL BUILT THAT WAY |
| `scale` | `F13408` (+1.83 s) | Margin | text: A SCALE / MODEL BUILT THAT WAY |
| `model` | `F13431` (+2.22 s) | Margin | text: A SCALE / MODEL BUILT THAT WAY |
| `built` | `F13453` (+2.58 s) | Margin | text: NOT BUILT, |
| `discussed` | `F13503` (+3.42 s) | Margin | text: WAS DISCUSSED, |
| `not` | `F13580` (+4.70 s) | Margin | text: NOT BUILT, |
| `save` | `F13667` (+6.15 s) | Margin | text: TO SAVE MONEY |
| `money` | `F13689` (+6.52 s) | (scene list) | sound effect cue |

**38** · The only one ever built was the hull that carried people.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `only` | `F13743` (+0.15 s) | Margin | lead · <div style={{position: 'absolute', left: 0, top: 280, display: 'flex', |
| `one` | `F13761` (+0.45 s) | Margin | bump · <span style={{...T(64, {color: colors.ink, fontWeight: 700}), display: |
| `built` | `F13791` (+0.95 s) | Margin | text: BUILT: |
| `hull` | `F13844` (+1.83 s) | Margin | text: THE HULL THAT / CARRIED |
| `carried` | `F13872` (+2.30 s) | Margin | text: THE HULL THAT / CARRIED |
| `people` | `F13897` (+2.72 s) | Margin | text: THE HULL THAT / CARRIED |

**39** · In early twenty twenty-one, that hull went to a pressure test facility in Maryland.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `In` | `F13954` (+0.02 s) | Tests | const o = vis(f, wf(39, 'in') - 6, wf(45, 'never') - 24, 12, 14); |
| `early` | `F13964` (+0.18 s) | Tests | text: EARLY 2021 |
| `twenty-one` | `F14002` (+0.82 s) | Tests | text: EARLY 2021 |
| `hull` | `F14073` (+2.00 s) | Tests | text: THE HULL |
| `went` | `F14090` (+2.28 s) | Tests | <Wd f={f} at={wf(39, 'went')} tone={colors.cyan}>→ </Wd> |
| `pressure` | `F14116` (+2.72 s) | Tests | text: PRESSURE TEST FACILITY |
| `facility` | `F14152` (+3.32 s) | Tests | text: PRESSURE TEST FACILITY |
| `Maryland` | `F14193` (+4.00 s) | Tests | text: BETHESDA, MARYLAND |

**40** · The test plan had it going to the pressure of four thousand two hundred metres on three of the four days.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `test` | `F14256` (+0.12 s) | Tests | lead · const tableO = lead(f, wf(40, 'test'), 10); |
| `plan` | `F14274` (+0.42 s) | Tests | text: PLAN |
| `pressure` | `F14339` (+1.50 s) | Tests | text: PLANNED PRESSURE: |
| `four` | `F14373` (+2.07 s) | Tests | <span style={lit(f, wf(40, 'four'), colors.amber)}>4,</span> |
| `two` | `F14419` (+2.83 s) | Tests | <span style={lit(f, wf(40, 'two'), colors.amber)}>2</span> |
| `hundred` | `F14433` (+3.07 s) | Tests | <span style={lit(f, wf(40, 'hundred'), colors.amber)}>00</span> |
| `metres` | `F14454` (+3.42 s) | Tests | <span style={lit(f, wf(40, 'metres'), colors.amber)}> M </span> |
| `three` | `F14498` (+4.15 s) | Tests | text: OF 4 / DAYS |
| `four` | `F14533` (+4.73 s) | Tests | text: OF 4 / DAYS |
| `days` | `F14549` (+5.00 s) | Tests | text: OF 4 / DAYS |

**41** · The facility's logbook shows it reached that pressure once.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `logbook` | `F14644` (+0.75 s) | Tests | text: LOGBOOK |
| `shows` | `F14676` (+1.28 s) | Tests | lead · <div style={{display: 'flex', gap: 14, alignItems: 'baseline', whiteSp |
| `reached` | `F14701` (+1.70 s) | Tests | text: REACHED |
| `pressure` | `F14728` (+2.15 s) | Tests | text: REACHED |
| `once` | `F14763` (+2.73 s) | (scene list) | sound effect cue |

**42** · The first of March, for twenty minutes.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `first` | `F14819` (+0.15 s) | Tests | DatePill · <DatePill f={f} fps={fps} day={1} month={3} year={2021} dayWord={wf(42 |
| `March` | `F14846` (+0.60 s) | Tests | DatePill · <DatePill f={f} fps={fps} day={1} month={3} year={2021} dayWord={wf(42 |
| `twenty` | `F14896` (+1.43 s) | Tests | rollTo · <span style={{...T(30, lit(f, wf(42, 'minutes'), colors.ink)), opacity |
| `minutes` | `F14922` (+1.87 s) | Tests | rollTo · <span style={{...T(30, lit(f, wf(42, 'minutes'), colors.ink)), opacity |

**43** · According to analysis done for the company, the test depth was limited by a titanium dome, not by the carbon.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `According` | `F14976` (+0.02 s) | Tests | lead · <div style={{position: 'absolute', top: 0, ...T(28, {}), lineHeight: 1 |
| `analysis` | `F15009` (+0.57 s) | Tests | text: ANALYSIS |
| `company` | `F15066` (+1.52 s) | Tests | text: FOR THE COMPANY: |
| `test` | `F15122` (+2.45 s) | Margin | lead · const testLine = lead(f, wf(43, 'test'), 12); |
| `limited` | `F15171` (+3.27 s) | Tests | text: TEST DEPTH LIMITED BY |
| `titanium` | `F15211` (+3.93 s) | Tests | text: A TITANIUM DOME, |
| `dome` | `F15259` (+4.73 s) | Tests | text: A TITANIUM DOME, |
| `carbon` | `F15332` (+5.95 s) | (scene list) | sound effect cue |

**44** · On the other days, the hull was held near four thousand metres, and then at three thousand eight hundred and forty, for four hours, twice.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `other` | `F15403` (+0.23 s) | Tests | text: OTHER DAYS: |
| `days` | `F15416` (+0.45 s) | Tests | text: OTHER DAYS: |
| `hull` | `F15459` (+1.17 s) | Tests | text: THE HULL |
| `held` | `F15484` (+1.58 s) | Tests | text: HELD |
| `near` | `F15502` (+1.88 s) | Tests | text: NEAR |
| `four` | `F15520` (+2.18 s) | Tests | text: 4,000 M |
| `thousand` | `F15537` (+2.47 s) | Tests | text: 4,000 M |
| `then` | `F15615` (+3.77 s) | Tests | text: THEN |
| `three` | `F15655` (+4.43 s) | Tests | <Wd f={f} at={wf(44, 'three')} lightAt={wf(44, 'thousand', 1)} tone={colors.cyan |
| `thousand` | `F15671` (+4.70 s) | Tests | <Wd f={f} at={wf(44, 'three')} lightAt={wf(44, 'thousand', 1)} tone={colors.cyan |
| `eight` | `F15697` (+5.13 s) | Tests | <Wd f={f} at={wf(44, 'eight')} lightAt={wf(44, 'hundred')} tone={colors.cyan} bo |
| `hundred` | `F15706` (+5.28 s) | Tests | <Wd f={f} at={wf(44, 'eight')} lightAt={wf(44, 'hundred')} tone={colors.cyan} bo |
| `forty` | `F15733` (+5.73 s) | Tests | text: 40 M |
| `four` | `F15789` (+6.67 s) | Tests | <Wd f={f} at={wf(44, 'four', 1)} lightAt={wf(44, 'hours')} tone={colors.amber} b |
| `hours` | `F15807` (+6.97 s) | Tests | <Wd f={f} at={wf(44, 'four', 1)} lightAt={wf(44, 'hours')} tone={colors.amber} b |
| `twice` | `F15843` (+7.57 s) | Tests | <Wd f={f} at={wf(44, 'twice')} tone={colors.amber} bold>, TWICE</Wd> |

**45** · It was never tested to failure.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `never` | `F15923` (+0.43 s) | Tests | const o = vis(f, wf(39, 'in') - 6, wf(45, 'never') - 24, 12, 14); |
| `tested` | `F15943` (+0.77 s) | Margin | const neverLine = interpolate(f, [wf(45, 'tested') - 10, wf(45, 'failure') + 20, |
| `failure` | `F15981` (+1.40 s) | (scene list) | sound effect cue |

**46** · The N - T - S - B found it unlikely that the hull ever had the strength the analysis predicted, and that the company did not know its actual strength.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `N` | `F16121` (+0.23 s) | Margin | lead · <div style={{marginTop: 34, opacity: lead(f, wf(46, 'n'), 8)}}> |
| `unlikely` | `F16195` (+1.47 s) | Margin | text: UNLIKELY / THE HULL |
| `hull` | `F16249` (+2.37 s) | Margin | text: UNLIKELY / THE HULL |
| `ever` | `F16272` (+2.75 s) | Margin | text: UNLIKELY / THE HULL |
| `strength` | `F16308` (+3.35 s) | Margin | text: THE PREDICTED STRENGTH |
| `predicted` | `F16369` (+4.37 s) | Margin | text: THE PREDICTED STRENGTH |
| `company` | `F16444` (+5.62 s) | Margin | text: THE COMPANY DID NOT KNOW |
| `know` | `F16501` (+6.57 s) | Margin | text: THE COMPANY DID NOT KNOW |
| `actual` | `F16531` (+7.07 s) | Margin | text: ITS ACTUAL STRENGTH |
| `strength` | `F16559` (+7.53 s) | Margin | text: ITS ACTUAL STRENGTH |

**47** · Then how would anyone know if it was failing?

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `how` | `F16622` (+0.18 s) | Listen | text: How would anyone |
| `know` | `F16671` (+1.00 s) | Listen | lead · <span style={{opacity: lead(f, wf(47, 'know'), 8), color: f >= wf(47,  |
| `failing` | `F16710` (+1.65 s) | Listen | lead · <span style={{opacity: lead(f, wf(47, 'know'), 8), color: f >= wf(47,  |

**48** · OceanGate's answer was to listen to it.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `OceanGate's` | `F16767` (+0.05 s) | Listen | <Pop f={f} fps={fps} at={wf(48, "oceangate's")}> |
| `answer` | `F16805` (+0.68 s) | Listen | <Chip text={f >= wf(48, 'listen') ? "OCEANGATE'S ANSWER: LISTEN TO IT" : f >= wf |
| `listen` | `F16865` (+1.68 s) | Listen | <Chip text={f >= wf(48, 'listen') ? "OCEANGATE'S ANSWER: LISTEN TO IT" : f >= wf |

**49** · Eight acoustic sensors and sixteen strain gauges, fixed inside the hull.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Eight` | `F16935` (+0.03 s) | (scene list) | sound effect cue |
| `sensors` | `F16984` (+0.85 s) | Listen | lead · <span style={{opacity: lead(f, wf(49, 'eight'), 8), ...lit(f, wf(49, ' |
| `sixteen` | `F17034` (+1.68 s) | Listen | const at = wf(49, 'sixteen') + i * 2; |
| `gauges` | `F17093` (+2.67 s) | Listen | lead · <span style={{opacity: lead(f, wf(49, 'sixteen'), 8), ...lit(f, wf(49, |
| `inside` | `F17160` (+3.78 s) | Listen | text: INSIDE THE HULL |
| `hull` | `F17196` (+4.38 s) | Listen | text: INSIDE THE HULL |

**50** · A carbon hull, the theory went, would crackle as it weakened, and the company would retire it in time.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `theory` | `F17306` (+1.15 s) | Listen | text: THE THEORY: |
| `crackle` | `F17367` (+2.17 s) | (scene list) | sound effect cue |
| `weakened` | `F17413` (+2.93 s) | Listen | text: AS IT WEAKENED |
| `company` | `F17470` (+3.88 s) | Listen | text: THE COMPANY WOULD |
| `retire` | `F17506` (+4.48 s) | Listen | lead · <span style={{opacity: lead(f, wf(50, 'retire'), 8)}}> |
| `time` | `F17553` (+5.27 s) | Listen | <Chip text={f >= wf(50, 'time') ? 'RETIRE IT IN TIME' : 'RETIRE IT'} tone={color |

**51** · The system had limits.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `system` | `F17610` (+0.17 s) | Listen | lead · <div style={{position: 'absolute', left: 200, top: 140, ...T(40, lit(f |
| `limits` | `F17652` (+0.87 s) | Listen | lead · <div style={{position: 'absolute', left: 200, top: 140, ...T(40, lit(f |

**52** · The pilot saw live readings, but the full data were downloaded only after each dive.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `pilot` | `F17711` (+0.12 s) | Listen | lead · const pilot = lead(f, wf(52, 'pilot'), 10); |
| `live` | `F17755` (+0.85 s) | Listen | bump · <Chip text="PILOT · LIVE READINGS" tone={colors.cyan} size={30} style= |
| `full` | `F17835` (+2.18 s) | Listen | text: FULL DATA: |
| `data` | `F17852` (+2.47 s) | Listen | text: FULL DATA: |
| `downloaded` | `F17882` (+2.97 s) | Listen | lead · const after = lead(f, wf(52, 'downloaded'), 10); |
| `only` | `F17923` (+3.65 s) | Listen | <Chip text={f >= wf(52, 'dive') ? 'DOWNLOADED ONLY AFTER EACH DIVE' : f >= wf(52 |
| `dive` | `F17977` (+4.55 s) | Listen | <Chip text={f >= wf(52, 'dive') ? 'DOWNLOADED ONLY AFTER EACH DIVE' : f >= wf(52 |

**53** · Acoustic data were analysed only from the dive itself, so damage at the surface, or in storage, could not raise an alert.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Acoustic` | `F18029` (+0.02 s) | Listen | lead · <g opacity={lead(f, wf(53, 'acoustic'), 10)}> |
| `analysed` | `F18092` (+1.07 s) | Listen | text: ACOUSTIC DATA ANALYSED: |
| `dive` | `F18163` (+2.25 s) | Listen | lead · const win = lead(f, wf(53, 'dive'), 12); |
| `damage` | `F18246` (+3.63 s) | Listen | text: DAMAGE AT THE SURFACE OR IN STORAGE? |
| `surface` | `F18282` (+4.23 s) | (scene list) | sound effect cue |
| `storage` | `F18345` (+5.28 s) | Listen | text: IN STORAGE |
| `raise` | `F18417` (+6.48 s) | Listen | lead · <text x={200} y={462} style={T(30, lit(f, wf(53, 'alert'), colors.red) |
| `alert` | `F18439` (+6.85 s) | Listen | lead · <text x={200} y={462} style={T(30, lit(f, wf(53, 'alert'), colors.red) |

**54** · In twenty twenty-two, three of the eight acoustic channels registered no acoustic events all season.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `twenty` | `F18500` (+0.15 s) | Listen | lead · <g opacity={lead(f, wf(54, 'twenty'), 10)}> |
| `twenty-two` | `F18520` (+0.48 s) | Listen | text: 2022 · |
| `three` | `F18580` (+1.48 s) | (scene list) | sound effect cue |
| `eight` | `F18619` (+2.13 s) | Listen | text: 8 ACOUSTIC CHANNELS |
| `registered` | `F18689` (+3.30 s) | Listen | text: REGISTERED: |
| `no` | `F18725` (+3.90 s) | Listen | lead · <text x={770} y={600} style={T(30, lit(f, wf(54, 'events'), colors.red |
| `events` | `F18769` (+4.63 s) | Listen | lead · <text x={770} y={600} style={T(30, lit(f, wf(54, 'events'), colors.red |
| `season` | `F18790` (+4.98 s) | Listen | {f >= wf(54, 'season') ? 'CH 1, 3, 5: NO ACOUSTIC EVENTS · ALL SEASON' : 'CH 1,  |

**55** · After each dive, the engineering director looked at the data first, and emailed it to about eight to ten people, the chief executive among them.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `After` | `F18863` (+1.03 s) | Listen | lead · <g opacity={lead(f, wf(55, 'after'), 10)}> |
| `dive` | `F18897` (+1.60 s) | Listen | text: AFTER EACH DIVE |
| `engineering` | `F18947` (+2.43 s) | Listen | text: ENGINEERING DIRECTOR |
| `director` | `F18979` (+2.97 s) | Listen | text: ENGINEERING DIRECTOR |
| `looked` | `F19009` (+3.47 s) | Listen | text: LOOKS FIRST |
| `first` | `F19059` (+4.30 s) | Listen | text: LOOKS FIRST |
| `emailed` | `F19115` (+5.23 s) | (scene list) | sound effect cue |
| `eight` | `F19178` (+6.28 s) | Listen | lead · <text x={720} y={820} style={T(28, lit(f, wf(55, 'people'), colors.ink |
| `ten` | `F19198` (+6.62 s) | Listen | EMAILED TO ≈ 8–<tspan style={lit(f, wf(55, 'ten'), colors.ink)}>10</tspan> PEOPL |
| `people` | `F19216` (+6.92 s) | Listen | lead · <text x={720} y={820} style={T(28, lit(f, wf(55, 'people'), colors.ink |
| `chief` | `F19267` (+7.77 s) | Listen | text: THE CEO |
| `executive` | `F19283` (+8.03 s) | Listen | text: THE CEO |

**56** · And the alert criteria had been set on the sounds of earlier hulls and scale models, built a different way.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `alert` | `F19379` (+0.22 s) | Listen | lead · <AbsoluteFill style={{opacity: 1 - lead(f, wf(56, 'alert'), 12)}}> |
| `criteria` | `F19398` (+0.53 s) | Listen | text: ALERT THRESHOLD |
| `set` | `F19458` (+1.53 s) | Listen | text: SET ON |
| `sounds` | `F19486` (+2.00 s) | Listen | text: THE SOUNDS OF |
| `earlier` | `F19519` (+2.55 s) | Listen | text: EARLIER HULLS |
| `hulls` | `F19546` (+3.00 s) | Listen | text: EARLIER HULLS |
| `scale` | `F19580` (+3.57 s) | Listen | <Wd f={f} at={wf(56, 'scale')} lightAt={wf(56, 'models')} tone={colors.amber} bo |
| `models` | `F19601` (+3.92 s) | Listen | <Wd f={f} at={wf(56, 'scale')} lightAt={wf(56, 'models')} tone={colors.amber} bo |
| `built` | `F19637` (+4.52 s) | Listen | text: BUILT |
| `different` | `F19655` (+4.82 s) | Listen | text: A DIFFERENT WAY |
| `way` | `F19678` (+5.20 s) | Listen | text: A DIFFERENT WAY |

**57** · No model had ever been built this hull's way, so, the N - T - S - B found, OceanGate had no data on how this one would sound as it failed.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `No` | `F19722` (+0.07 s) | Listen | text: MODELS |
| `model` | `F19734` (+0.27 s) | Listen | text: MODELS |
| `built` | `F19800` (+1.37 s) | Listen | text: BUILT |
| `hull's` | `F19831` (+1.88 s) | Listen | text: THIS HULL'S WAY: |
| `way` | `F19850` (+2.20 s) | Listen | text: THIS HULL'S WAY: |
| `N` | `F19938` (+3.67 s) | Listen | lead · <span style={{opacity: lead(f, wf(57, 'n'), 8)}}> |
| `OceanGate` | `F20024` (+5.10 s) | Listen | text: OCEANGATE HAD |
| `no` | `F20073` (+5.92 s) | Listen | text: NO DATA |
| `data` | `F20090` (+6.20 s) | (scene list) | sound effect cue |
| `how` | `F20123` (+6.75 s) | Listen | text: ON HOW THIS ONE |
| `one` | `F20155` (+7.28 s) | Listen | text: ON HOW THIS ONE |
| `sound` | `F20176` (+7.63 s) | Listen | text: WOULD SOUND AS IT FAILED |
| `failed` | `F20212` (+8.23 s) | Listen | text: WOULD SOUND AS IT FAILED |

