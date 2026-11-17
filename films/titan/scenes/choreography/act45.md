# Choreography index: Act 45

Word-level choreography (PLAYBOOK §10.6), **generated from the scene code** (`python3 scripts/choreo_index.py` from the film folder; re-run after
any edit) so it cannot drift from it. One row per word-locked event: the spoken trigger, its measured frame (60 fps) and offset
from the sentence start, the scene component, and what changes (the on-screen text that arrives, or the driving line of
code). Kit: `lib/remotion/Kinetic.tsx` and `remotion/beats.tsx` (`KeyLine` parts land on their words, `ChunkQuote` reveals a
record quote chunk by chunk, `WordLine` builds a title word by word). Kit for this film: `remotion/parts*.tsx`.
Sync audit: `review/sync_audit.md`.

**200** · In twenty twenty-three, Titan's first four dives went no deeper than ten metres.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `twenty` | `F66950` (+0.17 s) | Year2023 | text: 2023: |
| `twenty-three` | `F66973` (+0.55 s) | Year2023 | text: 2023: |
| `Titan's` | `F67029` (+1.48 s) | Year2023 | text: THE FIRST / FOUR DIVES |
| `first` | `F67063` (+2.05 s) | Year2023 | text: THE FIRST / FOUR DIVES |
| `four` | `F67088` (+2.47 s) | Year2023 | text: THE FIRST / FOUR DIVES |
| `dives` | `F67105` (+2.75 s) | Year2023 | text: THE FIRST / FOUR DIVES |
| `deeper` | `F67164` (+3.73 s) | Year2023 | text: NO DEEPER THAN 10 M |
| `ten` | `F67201` (+4.35 s) | Year2023 | text: 10 M |
| `metres` | `F67220` (+4.67 s) | Year2023 | text: NO DEEPER THAN 10 M |

**201** · At some point after dive eighty-two, the hull was damaged again.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `some` | `F67289` (+0.23 s) | Year2023 | text: AT SOME POINT / AFTER DIVE 82: |
| `point` | `F67303` (+0.47 s) | Year2023 | text: AT SOME POINT / AFTER DIVE 82: |
| `after` | `F67329` (+0.90 s) | Year2023 | text: AT SOME POINT / AFTER DIVE 82: |
| `eighty-two` | `F67367` (+1.53 s) | Year2023 | text: AT SOME POINT / AFTER DIVE 82: |
| `hull` | `F67433` (+2.63 s) | Year2023 | text: THE HULL, / DAMAGED AGAIN |
| `damaged` | `F67463` (+3.13 s) | (scene list) | sound effect cue |
| `again` | `F67490` (+3.58 s) | Year2023 | text: THE HULL, / DAMAGED AGAIN |

**202** · The N - T - S - B calls that damage of unknown origin.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `N` | `F67555` (+0.28 s) | Year2023 | text: NTSB: |
| `calls` | `F67604` (+1.10 s) | Year2023 | text: NTSB: |
| `unknown` | `F67683` (+2.42 s) | Year2023 | <Wd f={f} at={wf(202, 'unknown')} lightAt={wf(202, 'origin')} tone={colors.ink}  |
| `origin` | `F67718` (+3.00 s) | Year2023 | <Wd f={f} at={wf(202, 'unknown')} lightAt={wf(202, 'origin')} tone={colors.ink}  |

**203** · The Coast Guard board says the damage from dive eighty was likely made worse by the winter outdoors, and points to the towing as well.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Coast` | `F67774` (+0.13 s) | Year2023 | text: COAST GUARD BOARD: |
| `board` | `F67809` (+0.72 s) | Year2023 | text: COAST GUARD BOARD: |
| `damage` | `F67851` (+1.42 s) | Year2023 | text: DIVE 80'S DAMAGE |
| `eighty` | `F67911` (+2.42 s) | Year2023 | text: DIVE 80'S DAMAGE |
| `likely` | `F67951` (+3.08 s) | Year2023 | text: LIKELY MADE WORSE |
| `worse` | `F67992` (+3.77 s) | Year2023 | text: LIKELY MADE WORSE |
| `winter` | `F68034` (+4.47 s) | Year2023 | text: BY THE WINTER OUTDOORS · |
| `outdoors` | `F68057` (+4.85 s) | Year2023 | text: BY THE WINTER OUTDOORS · |
| `points` | `F68117` (+5.85 s) | Year2023 | text: AND THE TOWING |
| `towing` | `F68152` (+6.43 s) | Year2023 | text: AND THE TOWING |

**204** · Did every dive weaken it?

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Did` | `F68237` (+0.02 s) | Year2023 | text: Did every dive |
| `weaken` | `F68295` (+0.98 s) | Year2023 | <Wd f={f} at={wf(204, 'weaken')} tone={colors.amber}>weaken it?</Wd> |

**205** · Here the investigators differ.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `investigators` | `F68391` (+0.60 s) | Year2023 | text: HERE THE INVESTIGATORS DIFFER |
| `differ` | `F68443` (+1.47 s) | (scene list) | sound effect cue |

**206** · The N - T - S - B dates two events: dive eighty, and something after dive eighty-two.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `N` | `F68509` (+0.30 s) | Year2023 | lead · <Card x={220} y={340} w={700} o={lead(f, wf(206, 'n'), 10)} accent={co |
| `dates` | `F68561` (+1.17 s) | Year2023 | text: DATES TWO EVENTS: |
| `two` | `F68585` (+1.57 s) | Year2023 | text: DATES TWO EVENTS: |
| `dive` | `F68653` (+2.70 s) | Year2023 | <Wd f={f} at={wf(206, 'dive')} lightAt={wf(206, 'eighty')}>— DIVE 80</Wd> |
| `eighty` | `F68675` (+3.07 s) | Year2023 | <Wd f={f} at={wf(206, 'dive')} lightAt={wf(206, 'eighty')}>— DIVE 80</Wd> |
| `something` | `F68730` (+3.98 s) | Year2023 | <Wd f={f} at={wf(206, 'something')} lightAt={wf(206, 'eighty-two')}>— SOMETHING  |
| `eighty-two` | `F68807` (+5.27 s) | Year2023 | <Wd f={f} at={wf(206, 'something')} lightAt={wf(206, 'eighty-two')}>— SOMETHING  |

**207** · Canada's Transportation Safety Board found the cylinder likely failed progressively, with damage accumulating during each dive.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Canada's` | `F68865` (+0.02 s) | Year2023 | lead · <Card x={1000} y={340} w={700} o={lead(f, wf(207, "canada's"), 10)} ac |
| `Transportation` | `F68896` (+0.53 s) | Year2023 | text: TRANSPORTATION SAFETY BOARD |
| `Board` | `F68974` (+1.83 s) | Year2023 | text: TRANSPORTATION SAFETY BOARD |
| `found` | `F68997` (+2.22 s) | Year2023 | text: THE CYLINDER |
| `cylinder` | `F69019` (+2.58 s) | Year2023 | text: THE CYLINDER |
| `likely` | `F69050` (+3.10 s) | Year2023 | text: LIKELY FAILED PROGRESSIVELY |
| `progressively` | `F69099` (+3.92 s) | Year2023 | text: LIKELY FAILED PROGRESSIVELY |
| `damage` | `F69176` (+5.20 s) | Year2023 | text: DAMAGE ACCUMULATING |
| `accumulating` | `F69199` (+5.58 s) | Year2023 | text: DAMAGE ACCUMULATING |
| `each` | `F69278` (+6.90 s) | Year2023 | text: DURING EACH DIVE |
| `dive` | `F69294` (+7.17 s) | Year2023 | text: DURING EACH DIVE |

**208** · On the eighteenth of June, Titan made its first deep dive in eleven months.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `eighteenth` | `F69361` (+0.28 s) | (scene list) | sound effect cue |
| `June` | `F69396` (+0.87 s) | LastDive | DatePill · <DatePill f={f} fps={fps} day={18} month={6} year={2023} dayWord={wf(2 |
| `Titan` | `F69432` (+1.47 s) | LastDive | rollTo · const depth = rollTo(f, [{frame: wf(208, 'titan'), value: 0}, {frame:  |
| `made` | `F69457` (+1.88 s) | LastDive | lead · <div style={{...T(72, {color: depth >= 3350 ? colors.ink : colors.sub, |
| `first` | `F69485` (+2.35 s) | LastDive | text: THE FIRST DEEP DIVE |
| `deep` | `F69510` (+2.77 s) | LastDive | text: THE FIRST DEEP DIVE |
| `eleven` | `F69558` (+3.57 s) | LastDive | text: IN ELEVEN MONTHS |
| `months` | `F69587` (+4.05 s) | LastDive | text: IN ELEVEN MONTHS |

**209** · The N - T - S - B found that the existing delaminations and the later damage likely led to a local buckling failure.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `N` | `F69649` (+0.32 s) | LastDive | text: NTSB: |
| `found` | `F69699` (+1.15 s) | LastDive | text: NTSB: |
| `existing` | `F69732` (+1.70 s) | LastDive | text: THE EXISTING DELAMINATIONS |
| `delaminations` | `F69765` (+2.25 s) | (scene list) | sound effect cue |
| `later` | `F69845` (+3.58 s) | LastDive | text: AND THE LATER DAMAGE |
| `damage` | `F69865` (+3.92 s) | LastDive | text: AND THE LATER DAMAGE |
| `likely` | `F69900` (+4.50 s) | LastDive | text: LIKELY LED TO |
| `led` | `F69925` (+4.92 s) | LastDive | text: LIKELY LED TO |
| `local` | `F69958` (+5.47 s) | LastDive | text: A LOCAL BUCKLING FAILURE |
| `buckling` | `F69985` (+5.92 s) | LastDive | hl= · <RecordPage set="mir" start={sf(209) - 14} end={ef(209) + 20} hl={[{ke |
| `failure` | `F70015` (+6.42 s) | LastDive | text: A LOCAL BUCKLING FAILURE |

**210** · A delamination splits one thick layer into two thinner ones, and thinner layers buckle more easily.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `delamination` | `F70072` (+0.15 s) | LastDive | text: A DELAMINATION SPLITS |
| `splits` | `F70130` (+1.12 s) | (scene list) | sound effect cue |
| `one` | `F70163` (+1.67 s) | LastDive | text: ONE THICK LAYER |
| `layer` | `F70199` (+2.27 s) | LastDive | text: ONE THICK LAYER |
| `into` | `F70223` (+2.67 s) | LastDive | text: INTO TWO THINNER ONES |
| `two` | `F70240` (+2.95 s) | LastDive | text: SPLIT INTO TWO THINNER LAYERS |
| `ones` | `F70285` (+3.70 s) | LastDive | text: INTO TWO THINNER ONES |
| `thinner` | `F70335` (+4.53 s) | LastDive | text: THINNER LAYERS BUCKLE MORE EASILY |
| `buckle` | `F70375` (+5.20 s) | LastDive | text: THINNER LAYERS BUCKLE MORE EASILY |
| `easily` | `F70415` (+5.87 s) | LastDive | const load = span(f, wf(210, 'buckle') - 6, wf(210, 'easily') + 10); |

**211** · In a local buckle, one part of the wall changes shape, and gives way.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `local` | `F70478` (+0.25 s) | LastDive | text: A LOCAL BUCKLE: |
| `buckle` | `F70501` (+0.63 s) | LastDive | text: A LOCAL BUCKLE: |
| `one` | `F70546` (+1.38 s) | LastDive | text: ONE PART OF THE WALL |
| `wall` | `F70588` (+2.08 s) | LastDive | text: ONE PART OF THE WALL |
| `changes` | `F70607` (+2.40 s) | LastDive | text: CHANGES SHAPE, |
| `shape` | `F70640` (+2.95 s) | LastDive | text: CHANGES SHAPE, |
| `gives` | `F70682` (+3.65 s) | LastDive | text: GIVES WAY |
| `way` | `F70699` (+3.93 s) | LastDive | text: GIVES WAY |

**212** · The damage from dive eighty, it found, had reached the forward end of the cylinder: that is where the gauge that showed the change sat.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `damage` | `F70748` (+0.15 s) | LastDive | text: DIVE 80'S DAMAGE |
| `eighty` | `F70806` (+1.12 s) | LastDive | text: DIVE 80'S DAMAGE |
| `reached` | `F70895` (+2.60 s) | LastDive | text: HAD REACHED THE FORWARD END / OF THE CYLINDER · |
| `forward` | `F70924` (+3.08 s) | LastDive | text: FORWARD END |
| `end` | `F70953` (+3.57 s) | LastDive | text: HAD REACHED THE FORWARD END / OF THE CYLINDER · |
| `cylinder` | `F70982` (+4.05 s) | LastDive | text: HAD REACHED THE FORWARD END / OF THE CYLINDER · |
| `where` | `F71060` (+5.35 s) | LastDive | text: HAD REACHED THE FORWARD END / OF THE CYLINDER · |
| `gauge` | `F71078` (+5.65 s) | LastDive | text: WHERE THE GAUGE THAT SHOWED THE CHANGE |
| `change` | `F71134` (+6.58 s) | LastDive | text: WHERE THE GAUGE THAT SHOWED THE CHANGE |
| `sat` | `F71168` (+7.15 s) | LastDive | text: SAT |

**213** · Here is the dive record, from dive seventy-five to eighty-eight, with each dated decision beside the dive it followed.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `dive` | `F71253` (+0.58 s) | Record | text: THE DIVE RECORD · |
| `record` | `F71272` (+0.90 s) | Record | text: THE DIVE RECORD · |
| `seventy-five` | `F71346` (+2.13 s) | (scene list) | sound effect cue |
| `to` | `F71394` (+2.93 s) | Record | <Wd f={f} at={wf(213, 'to')} tone={colors.cyan} bold>→ </Wd> |
| `eighty-eight` | `F71406` (+3.13 s) | Record | text: 88 · |
| `each` | `F71474` (+4.27 s) | Record | text: EACH DATED DECISION |
| `dated` | `F71492` (+4.57 s) | Record | text: WINTER |
| `decision` | `F71515` (+4.95 s) | Record | text: EACH DATED DECISION |
| `beside` | `F71548` (+5.50 s) | Record | text: BESIDE THE DIVE IT FOLLOWED |
| `followed` | `F71609` (+6.52 s) | Record | text: BESIDE THE DIVE IT FOLLOWED |

**214** · Six of these dives reached three thousand eight hundred and forty metres.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Six` | `F71665` (+0.15 s) | Record | lead · <div style={{position: 'absolute', left: 1420, top: 186, width: 330, d |
| `three` | `F71754` (+1.63 s) | Record | text: 0 M · THE WRECK |
| `thousand` | `F71771` (+1.92 s) | Record | text: 0 M · THE WRECK |
| `eight` | `F71803` (+2.45 s) | Record | text: 0 M · THE WRECK |
| `hundred` | `F71811` (+2.58 s) | Record | text: 0 M · THE WRECK |
| `forty` | `F71845` (+3.15 s) | Record | text: 0 M · THE WRECK |

**215** · Thirteen did, in all.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Thirteen` | `F71921` (+0.05 s) | (scene list) | sound effect cue |
| `all` | `F71988` (+1.17 s) | Record | <span style={T(26, {color: colors.ink})}>{f >= wf(215, 'all') ? 'TO 3,840 M · IN |

**216** · Then one line that stops, about five hundred metres short.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `one` | `F72062` (+0.63 s) | Record | lead · <g opacity={lead(f, wf(216, 'one'), 8)}> |
| `line` | `F72074` (+0.83 s) | Record | const d88 = span(f, wf(216, 'line') - 4, wf(216, 'stops') + LAND); |
| `stops` | `F72104` (+1.33 s) | Record | const d88 = span(f, wf(216, 'line') - 4, wf(216, 'stops') + LAND); |
| `five` | `F72173` (+2.48 s) | Record | lead · const gap = lead(f, wf(216, 'five'), 14); |
| `hundred` | `F72192` (+2.80 s) | Record | <text x={xOf(13) - 30} y={yD(3600) + 10} textAnchor="end" style={T(28, lit(f, wf |

**217** · Two things often said about Titan.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Two` | `F72421` (+0.10 s) | Verdict | text: Two things |
| `things` | `F72434` (+0.32 s) | Verdict | text: Two things |
| `often` | `F72459` (+0.73 s) | Verdict | <Wd f={f} at={wf(217, 'often')} lightAt={wf(217, 'said')} base={colors.ink}>ofte |
| `said` | `F72481` (+1.10 s) | Verdict | <Wd f={f} at={wf(217, 'often')} lightAt={wf(217, 'said')} base={colors.ink}>ofte |

**218** · Its controller: on dive eighty-one, the thruster controls were found to be mapped in reverse, and the pilot turned the controller around.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `controller` | `F72580` (+0.22 s) | Verdict | text: THE CONTROLLER · / DIVE 81: |
| `dive` | `F72660` (+1.55 s) | Verdict | text: THE CONTROLLER · / DIVE 81: |
| `eighty-one` | `F72682` (+1.92 s) | Verdict | text: THE CONTROLLER · / DIVE 81: |
| `thruster` | `F72740` (+2.88 s) | Verdict | text: THRUSTER CONTROLS |
| `controls` | `F72766` (+3.32 s) | Verdict | text: THRUSTER CONTROLS |
| `mapped` | `F72838` (+4.52 s) | (scene list) | sound effect cue |
| `reverse` | `F72864` (+4.95 s) | Verdict | text: MAPPED IN REVERSE · |
| `pilot` | `F72934` (+6.12 s) | Verdict | text: THE PILOT TURNED / IT AROUND |
| `turned` | `F72963` (+6.60 s) | (scene list) | sound effect cue |
| `controller` | `F72983` (+6.93 s) | Verdict | text: THE PILOT TURNED / IT AROUND |
| `around` | `F73018` (+7.52 s) | Verdict | text: THE PILOT TURNED / IT AROUND |

**219** · None of the three reports names the controller as a cause.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `None` | `F73090` (+0.07 s) | (scene list) | sound effect cue |
| `three` | `F73117` (+0.52 s) | Verdict | text: NONE OF THE THREE / REPORTS |
| `reports` | `F73133` (+0.78 s) | Verdict | text: NONE OF THE THREE / REPORTS |
| `names` | `F73170` (+1.40 s) | Verdict | text: NAMES THE CONTROLLER / AS A CAUSE |
| `controller` | `F73195` (+1.82 s) | Verdict | text: NAMES THE CONTROLLER / AS A CAUSE |
| `cause` | `F73253` (+2.78 s) | Verdict | text: NAMES THE CONTROLLER / AS A CAUSE |

**220** · Its window: the Coast Guard board criticised it as untested and uncertified, but found it unlikely that the window caused the implosion.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Coast` | `F73400` (+1.30 s) | Verdict | text: THE COAST GUARD BOARD: |
| `board` | `F73435` (+1.88 s) | Verdict | text: THE COAST GUARD BOARD: |
| `criticised` | `F73453` (+2.18 s) | Verdict | hl= · <RecordPage set="roi" start={sf(220) - 14} end={ef(221) + 20} page={28 |
| `untested` | `F73520` (+3.30 s) | Verdict | text: UNTESTED, UNCERTIFIED · |
| `uncertified` | `F73575` (+4.22 s) | Verdict | text: UNTESTED, UNCERTIFIED · |
| `found` | `F73656` (+5.57 s) | Verdict | text: UNLIKELY / THE WINDOW CAUSED |
| `unlikely` | `F73680` (+5.97 s) | (scene list) | sound effect cue |
| `window` | `F73738` (+6.93 s) | Verdict | text: UNLIKELY / THE WINDOW CAUSED |
| `caused` | `F73766` (+7.40 s) | Verdict | text: UNLIKELY / THE WINDOW CAUSED |
| `implosion` | `F73792` (+7.83 s) | Verdict | text: UNLIKELY / THE WINDOW CAUSED |

**221** · All three reports place the failure in the hull.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `All` | `F73862` (+0.07 s) | Verdict | text: ALL THREE / REPORTS: |
| `three` | `F73873` (+0.25 s) | Verdict | text: ALL THREE / REPORTS: |
| `reports` | `F73888` (+0.50 s) | Verdict | text: ALL THREE / REPORTS: |
| `place` | `F73923` (+1.08 s) | Verdict | text: THE FAILURE WAS IN THE HULL |
| `hull` | `F73991` (+2.22 s) | Verdict | text: THE FAILURE WAS IN THE HULL |

**222** · The N - T - S - B's probable cause was OceanGate's inadequate engineering process, which failed to establish the actual strength and durability of the Titan pressure vessel.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `probable` | `F74198` (+1.07 s) | Verdict | text: PROBABLE CAUSE: |
| `cause` | `F74228` (+1.57 s) | Verdict | text: PROBABLE CAUSE: |
| `inadequate` | `F74317` (+3.05 s) | (scene list) | sound effect cue |
| `process` | `F74389` (+4.25 s) | Verdict | text: AN INADEQUATE ENGINEERING PROCESS |
| `failed` | `F74455` (+5.35 s) | Verdict | text: THAT FAILED TO ESTABLISH |
| `establish` | `F74480` (+5.77 s) | Verdict | text: THAT FAILED TO ESTABLISH |
| `actual` | `F74527` (+6.55 s) | Verdict | text: THE ACTUAL STRENGTH AND DURABILITY / OF TITAN'S PRESSURE VESSEL |
| `durability` | `F74592` (+7.63 s) | Verdict | text: THE ACTUAL STRENGTH AND DURABILITY / OF TITAN'S PRESSURE VESSEL |
| `Titan` | `F74657` (+8.72 s) | Verdict | text: THE ACTUAL STRENGTH AND DURABILITY / OF TITAN'S PRESSURE VESSEL |
| `vessel` | `F74702` (+9.47 s) | Verdict | text: THE ACTUAL STRENGTH AND DURABILITY / OF TITAN'S PRESSURE VESSEL |

**223** · Contributing were the guidance and the rules that did not make OceanGate meet the industry's standards, and the company's flawed analysis of its own monitoring data.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Contributing` | `F74748` (+0.02 s) | Verdict | text: CONTRIBUTING: |
| `guidance` | `F74811` (+1.07 s) | Verdict | text: THE GUIDANCE AND THE RULES / THAT DID NOT MAKE OCEANGATE MEET |
| `rules` | `F74859` (+1.87 s) | Verdict | text: THE GUIDANCE AND THE RULES / THAT DID NOT MAKE OCEANGATE MEET |
| `make` | `F74920` (+2.88 s) | Verdict | text: THE GUIDANCE AND THE RULES / THAT DID NOT MAKE OCEANGATE MEET |
| `meet` | `F74976` (+3.82 s) | Verdict | text: THE GUIDANCE AND THE RULES / THAT DID NOT MAKE OCEANGATE MEET |
| `industry's` | `F74998` (+4.18 s) | Verdict | text: THE GUIDANCE AND THE RULES / THAT DID NOT MAKE OCEANGATE MEET |
| `standards` | `F75030` (+4.72 s) | Verdict | text: THE GUIDANCE AND THE RULES / THAT DID NOT MAKE OCEANGATE MEET |
| `company's` | `F75097` (+5.83 s) | Verdict | text: THE COMPANY'S FLAWED / ANALYSIS |
| `flawed` | `F75129` (+6.37 s) | Verdict | text: THE COMPANY'S FLAWED / ANALYSIS |
| `analysis` | `F75152` (+6.75 s) | Verdict | text: THE COMPANY'S FLAWED / ANALYSIS |
| `own` | `F75212` (+7.75 s) | Verdict | text: OF ITS OWN MONITORING DATA |
| `data` | `F75262` (+8.58 s) | Verdict | text: OF ITS OWN MONITORING DATA |

**224** · The Coast Guard's Marine Board called it a preventable tragedy.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Coast` | `F75317` (+0.13 s) | Verdict | text: THE COAST GUARD'S MARINE BOARD: |
| `Marine` | `F75355` (+0.77 s) | Verdict | hl= · <RecordPage set="roi" start={sf(224) - 14} end={ef(224) + 16} hl={[{ke |
| `Board` | `F75379` (+1.17 s) | Verdict | text: THE COAST GUARD'S MARINE BOARD: |
| `preventable` | `F75441` (+2.20 s) | (scene list) | sound effect cue |
| `tragedy` | `F75487` (+2.97 s) | Verdict | <Wd f={f} at={wf(224, 'preventable')} lightAt={wf(224, 'tragedy')} tone={colors. |

**225** · Canada's Transportation Safety Board found that Titan received no oversight from Transport Canada, though it sailed from Saint John's with Canadian ships.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Canada's` | `F75553` (+0.05 s) | Verdict | text: CANADA'S / TRANSPORTATION SAFETY |
| `Transportation` | `F75583` (+0.55 s) | Verdict | text: CANADA'S / TRANSPORTATION SAFETY |
| `Safety` | `F75637` (+1.45 s) | Verdict | text: CANADA'S / TRANSPORTATION SAFETY |
| `Board` | `F75661` (+1.85 s) | Verdict | text: CANADA'S / TRANSPORTATION SAFETY |
| `found` | `F75685` (+2.25 s) | Verdict | text: CANADA'S / TRANSPORTATION SAFETY |
| `Titan` | `F75710` (+2.67 s) | Verdict | text: TITAN RECEIVED |
| `received` | `F75735` (+3.08 s) | Verdict | text: TITAN RECEIVED |
| `no` | `F75766` (+3.60 s) | Verdict | text: NO OVERSIGHT |
| `oversight` | `F75786` (+3.93 s) | Verdict | text: NO OVERSIGHT |
| `from` | `F75818` (+4.47 s) | Verdict | text: FROM TRANSPORT CANADA |
| `Canada` | `F75858` (+5.13 s) | Verdict | text: FROM TRANSPORT CANADA |
| `though` | `F75905` (+5.92 s) | Verdict | text: THOUGH IT SAILED FROM |
| `sailed` | `F75924` (+6.23 s) | Verdict | text: THOUGH IT SAILED FROM |
| `Saint` | `F75959` (+6.82 s) | Verdict | text: ST. JOHN'S |
| `John's` | `F75973` (+7.05 s) | Verdict | text: ST. JOHN'S |
| `Canadian` | `F76009` (+7.65 s) | Verdict | text: WITH CANADIAN SHIPS |
| `ships` | `F76044` (+8.23 s) | Verdict | text: WITH CANADIAN SHIPS |

**226** · The Coast Guard board also wrote this, about Mr.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Coast` | `F76104` (+0.15 s) | Verdict | text: THE COAST GUARD BOARD / ALSO WROTE, |
| `board` | `F76138` (+0.72 s) | Verdict | text: THE COAST GUARD BOARD / ALSO WROTE, |
| `also` | `F76161` (+1.10 s) | Verdict | text: THE COAST GUARD BOARD / ALSO WROTE, |
| `wrote` | `F76182` (+1.45 s) | Verdict | text: THE COAST GUARD BOARD / ALSO WROTE, |
| `about` | `F76234` (+2.32 s) | Verdict | text: ON MR. RUSH: |
| `Mr` | `F76249` (+2.57 s) | Verdict | text: ON MR. RUSH: |

**227** · Rush, who was both the company's chief executive and its pilot.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `both` | `F76323` (+0.25 s) | Verdict | text: CHIEF EXECUTIVE |
| `executive` | `F76390` (+1.37 s) | Verdict | text: CHIEF EXECUTIVE |
| `pilot` | `F76466` (+2.63 s) | Verdict | text: AND PILOT |

**228** · Had he survived the incident, the board would have recommended that the Commandant refer the matter to the Department of Justice, for its consideration on whether to pursue a separate criminal investigation.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Had` | `F76530` (+0.07 s) | Verdict | text: HAD HE SURVIVED: |
| `survived` | `F76550` (+0.40 s) | (scene list) | sound effect cue |
| `incident` | `F76588` (+1.03 s) | Verdict | text: THE BOARD / WOULD HAVE RECOMMENDED |
| `board` | `F76639` (+1.88 s) | Verdict | text: THE BOARD / WOULD HAVE RECOMMENDED |
| `would` | `F76656` (+2.17 s) | Verdict | text: THE BOARD / WOULD HAVE RECOMMENDED |
| `recommended` | `F76673` (+2.45 s) | Verdict | text: THE BOARD / WOULD HAVE RECOMMENDED |
| `Commandant` | `F76726` (+3.33 s) | Verdict | text: THE BOARD / WOULD HAVE RECOMMENDED |
| `refer` | `F76763` (+3.95 s) | Verdict | text: REFER THE MATTER / TO THE DEPARTMENT OF JUSTICE, |
| `Department` | `F76832` (+5.10 s) | Verdict | text: REFER THE MATTER / TO THE DEPARTMENT OF JUSTICE, |
| `Justice` | `F76873` (+5.78 s) | Verdict | text: REFER THE MATTER / TO THE DEPARTMENT OF JUSTICE, |
| `consideration` | `F76942` (+6.93 s) | Verdict | text: TO CONSIDER WHETHER / TO PURSUE A SEPARATE |
| `whether` | `F77004` (+7.97 s) | Verdict | text: TO CONSIDER WHETHER / TO PURSUE A SEPARATE |
| `pursue` | `F77027` (+8.35 s) | Verdict | text: TO CONSIDER WHETHER / TO PURSUE A SEPARATE |
| `separate` | `F77066` (+9.00 s) | Verdict | text: TO CONSIDER WHETHER / TO PURSUE A SEPARATE |
| `criminal` | `F77095` (+9.48 s) | Verdict | text: TO CONSIDER WHETHER / TO PURSUE A SEPARATE |
| `investigation` | `F77120` (+9.90 s) | Verdict | text: TO CONSIDER WHETHER / TO PURSUE A SEPARATE |

**229** · Whether any crime was committed, the board wrote, was for the Justice Department to decide, and that will not happen, because Mr.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Whether` | `F77198` (+0.07 s) | Verdict | text: WHETHER ANY CRIME WAS COMMITTED, / THE BOARD WROTE, |
| `crime` | `F77232` (+0.63 s) | Verdict | hl= · <RecordPage set="roi" start={sf(226) - 14} end={ef(230) + 20} hl={[{ke |
| `committed` | `F77267` (+1.22 s) | Verdict | text: WHETHER ANY CRIME WAS COMMITTED, / THE BOARD WROTE, |
| `board` | `F77331` (+2.28 s) | Verdict | text: WHETHER ANY CRIME WAS COMMITTED, / THE BOARD WROTE, |
| `wrote` | `F77348` (+2.57 s) | Verdict | text: WHETHER ANY CRIME WAS COMMITTED, / THE BOARD WROTE, |
| `Justice` | `F77417` (+3.72 s) | Verdict | text: FOR THE DEPARTMENT OF JUSTICE TO DECIDE · |
| `decide` | `F77485` (+4.85 s) | Verdict | text: FOR THE DEPARTMENT OF JUSTICE TO DECIDE · |
| `will` | `F77572` (+6.30 s) | Verdict | text: THAT WILL NOT HAPPEN, / BECAUSE |
| `happen` | `F77604` (+6.83 s) | Verdict | text: THAT WILL NOT HAPPEN, / BECAUSE |
| `because` | `F77623` (+7.15 s) | Verdict | text: THAT WILL NOT HAPPEN, / BECAUSE |

**230** · Rush died.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Rush` | `F77689` (+0.72 s) | Verdict | text: MR. RUSH DIED |
| `died` | `F77713` (+1.12 s) | Verdict | text: MR. RUSH DIED |

**231** · One more finding concerns the eighteenth of June itself.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `One` | `F77793` (+0.12 s) | Verdict | text: ONE MORE FINDING |
| `finding` | `F77816` (+0.50 s) | Verdict | text: ONE MORE FINDING |
| `concerns` | `F77843` (+0.95 s) | Verdict | text: ONE MORE FINDING |
| `eighteenth` | `F77884` (+1.63 s) | Verdict | DatePill · <DatePill f={f} fps={fps} day={18} month={6} year={2023} dayWord={wf(2 |
| `June` | `F77917` (+2.18 s) | Verdict | DatePill · <DatePill f={f} fps={fps} day={18} month={6} year={2023} dayWord={wf(2 |

**232** · The board found that the company's own communications plan delayed the first call to rescuers by more than seven hours, and that no deep-water rescue vehicle was standing by.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `board` | `F78006` (+0.15 s) | Verdict | text: THE BOARD: |
| `found` | `F78026` (+0.48 s) | Verdict | text: THE BOARD: |
| `company's` | `F78058` (+1.02 s) | Verdict | text: THE COMPANY'S OWN COMMUNICATIONS PLAN |
| `communications` | `F78106` (+1.82 s) | Verdict | text: 10:47 · LAST MESSAGE |
| `plan` | `F78159` (+2.70 s) | Verdict | text: THE COMPANY'S OWN COMMUNICATIONS PLAN |
| `delayed` | `F78182` (+3.08 s) | Verdict | text: DELAYED THE FIRST / CALL |
| `first` | `F78218` (+3.68 s) | Verdict | text: DELAYED THE FIRST / CALL |
| `call` | `F78237` (+4.00 s) | Verdict | text: DELAYED THE FIRST / CALL |
| `rescuers` | `F78261` (+4.40 s) | Verdict | text: DELAYED THE FIRST / CALL |
| `by` | `F78296` (+4.98 s) | Verdict | text: NO DEEP-WATER / RESCUE VEHICLE |
| `more` | `F78308` (+5.18 s) | Verdict | text: BY MORE THAN 7 HOURS · |
| `seven` | `F78337` (+5.67 s) | Verdict | text: FIRST CALL TO RESCUERS: 7+ HOURS |
| `hours` | `F78360` (+6.05 s) | Verdict | text: BY MORE THAN 7 HOURS · |
| `no` | `F78429` (+7.20 s) | Verdict | text: NO DEEP-WATER / RESCUE VEHICLE |
| `deep-water` | `F78446` (+7.48 s) | Verdict | text: NO DEEP-WATER / RESCUE VEHICLE |
| `rescue` | `F78481` (+8.07 s) | Verdict | text: NO DEEP-WATER / RESCUE VEHICLE |
| `vehicle` | `F78503` (+8.43 s) | Verdict | text: NO DEEP-WATER / RESCUE VEHICLE |
| `standing` | `F78540` (+9.05 s) | Verdict | text: NO DEEP-WATER / RESCUE VEHICLE |

**233** · It also found that the implosion caused the immediate loss of all lives on board, before any distress call.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `implosion` | `F78684` (+1.15 s) | Verdict | text: THE IMPLOSION CAUSED |
| `caused` | `F78725` (+1.83 s) | Verdict | text: THE IMPLOSION CAUSED |
| `immediate` | `F78752` (+2.28 s) | (scene list) | sound effect cue |
| `loss` | `F78787` (+2.87 s) | Verdict | text: THE IMMEDIATE LOSS / OF ALL LIVES · |
| `all` | `F78824` (+3.48 s) | Verdict | text: THE IMMEDIATE LOSS / OF ALL LIVES · |
| `lives` | `F78838` (+3.72 s) | Verdict | text: THE IMMEDIATE LOSS / OF ALL LIVES · |
| `before` | `F78903` (+4.80 s) | Verdict | text: BEFORE ANY DISTRESS CALL |
| `call` | `F78985` (+6.17 s) | Verdict | text: BEFORE ANY DISTRESS CALL |

**234** · The N - T - S - B found that search and rescue could not have saved them.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `N` | `F79044` (+0.23 s) | Verdict | text: THE NTSB: |
| `found` | `F79090` (+1.00 s) | Verdict | text: THE NTSB: |
| `search` | `F79117` (+1.45 s) | Verdict | text: SEARCH AND RESCUE |
| `rescue` | `F79143` (+1.88 s) | Verdict | text: SEARCH AND RESCUE |
| `not` | `F79190` (+2.67 s) | (scene list) | sound effect cue |
| `saved` | `F79218` (+3.13 s) | Verdict | text: COULD NOT HAVE SAVED THEM |

**235** · With assets ready, it found, Titan would likely have been found sooner.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `assets` | `F79288` (+0.22 s) | Verdict | text: WITH ASSETS READY, |
| `ready` | `F79314` (+0.65 s) | Verdict | text: WITH ASSETS READY, |
| `Titan` | `F79398` (+2.05 s) | Verdict | text: TITAN / WOULD LIKELY HAVE BEEN FOUND |
| `likely` | `F79440` (+2.75 s) | (scene list) | sound effect cue |
| `found` | `F79483` (+3.47 s) | Verdict | text: TITAN / WOULD LIKELY HAVE BEEN FOUND |
| `sooner` | `F79507` (+3.87 s) | Verdict | text: TITAN / WOULD LIKELY HAVE BEEN FOUND |

**236** · OceanGate suspended its operations in July twenty twenty-three.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `OceanGate` | `F79575` (+0.07 s) | Verdict | text: OCEANGATE SUSPENDED / OPERATIONS · |
| `suspended` | `F79611` (+0.67 s) | Verdict | text: OCEANGATE SUSPENDED / OPERATIONS · |
| `operations` | `F79656` (+1.42 s) | Verdict | text: OCEANGATE SUSPENDED / OPERATIONS · |
| `July` | `F79707` (+2.27 s) | Verdict | text: JUL 2023 |
| `twenty-three` | `F79737` (+2.77 s) | Verdict | text: JUL 2023 |

**237** · When the Coast Guard report came out, a company spokesperson said OceanGate had been wound down, was fully cooperating with the investigation, and offered condolences to the families.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `When` | `F79831` (+0.03 s) | Verdict | text: AUG 2025, WHEN THE COAST GUARD REPORT / CAME OUT · |
| `report` | `F79877` (+0.80 s) | Verdict | text: AUG 2025, WHEN THE COAST GUARD REPORT / CAME OUT · |
| `came` | `F79900` (+1.18 s) | Verdict | text: AUG 2025, WHEN THE COAST GUARD REPORT / CAME OUT · |
| `out` | `F79917` (+1.47 s) | Verdict | text: AUG 2025, WHEN THE COAST GUARD REPORT / CAME OUT · |
| `company` | `F79947` (+1.97 s) | Verdict | text: AUG 2025, WHEN THE COAST GUARD REPORT / CAME OUT · |
| `spokesperson` | `F79972` (+2.38 s) | Verdict | text: AUG 2025, WHEN THE COAST GUARD REPORT / CAME OUT · |
| `said` | `F80020` (+3.18 s) | Verdict | text: AUG 2025, WHEN THE COAST GUARD REPORT / CAME OUT · |
| `wound` | `F80094` (+4.42 s) | Verdict | <Wd f={f} at={wf(237, 'wound')} lightAt={wf(237, 'down')}>— THE COMPANY HAD BEEN |
| `down` | `F80116` (+4.78 s) | Verdict | <Wd f={f} at={wf(237, 'wound')} lightAt={wf(237, 'down')}>— THE COMPANY HAD BEEN |
| `fully` | `F80169` (+5.67 s) | Verdict | <Wd f={f} at={wf(237, 'fully')} lightAt={wf(237, 'investigation')}>— FULLY COOPE |
| `investigation` | `F80239` (+6.83 s) | Verdict | <Wd f={f} at={wf(237, 'fully')} lightAt={wf(237, 'investigation')}>— FULLY COOPE |
| `offered` | `F80317` (+8.13 s) | Verdict | <Wd f={f} at={wf(237, 'offered')} lightAt={wf(237, 'families')}>— CONDOLENCES TO |
| `families` | `F80396` (+9.45 s) | Verdict | <Wd f={f} at={wf(237, 'offered')} lightAt={wf(237, 'families')}>— CONDOLENCES TO |

**238** · What now?

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `What` | `F80481` (+0.07 s) | Verdict | lead · <div style={{position: 'absolute', left: 0, right: 0, top: interpolate |

**239** · The N - T - S - B made four recommendations to the U - S Coast Guard.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `N` | `F80566` (+0.42 s) | Verdict | text: THE NTSB: |
| `made` | `F80625` (+1.40 s) | Verdict | text: THE NTSB: |
| `four` | `F80646` (+1.75 s) | (scene list) | sound effect cue |
| `recommendations` | `F80664` (+2.05 s) | Verdict | text: 4 RECOMMENDATIONS |
| `U` | `F80741` (+3.33 s) | Verdict | text: TO THE U.S. COAST GUARD |
| `Guard` | `F80782` (+4.02 s) | Verdict | text: TO THE U.S. COAST GUARD |

**240** · One: propose that the International Maritime Organization make its guidance for submersibles mandatory.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `One` | `F80838` (+0.17 s) | Verdict | text: M-25-015 / IMO |
| `propose` | `F80881` (+0.88 s) | Verdict | <Wd f={f} at={wf(240, 'propose')} lightAt={wf(240, 'organization')}>(1) VIA THE  |
| `International` | `F80931` (+1.72 s) | Verdict | text: M-25-015 / IMO |
| `Organization` | `F81006` (+2.97 s) | Verdict | <Wd f={f} at={wf(240, 'propose')} lightAt={wf(240, 'organization')}>(1) VIA THE  |
| `make` | `F81053` (+3.75 s) | Verdict | text: M-25-015 / IMO |
| `submersibles` | `F81117` (+4.82 s) | Verdict | text: M-25-015 / IMO |
| `mandatory` | `F81166` (+5.63 s) | Verdict | text: M-25-015 / IMO |

**241** · Two: study pressure vessels that carry people.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Two` | `F81241` (+0.05 s) | Verdict | text: M-25-012 / STUDY |
| `study` | `F81293` (+0.92 s) | Verdict | text: M-25-012 / STUDY |
| `pressure` | `F81316` (+1.30 s) | Verdict | text: M-25-012 / STUDY |
| `carry` | `F81377` (+2.32 s) | Verdict | text: M-25-012 / STUDY |
| `people` | `F81399` (+2.68 s) | Verdict | text: M-25-012 / STUDY |

**242** · Three: write rules for them.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Three` | `F81458` (+0.05 s) | Verdict | text: M-25-013 / WRITE |
| `write` | `F81510` (+0.92 s) | Verdict | text: M-25-013 / WRITE |
| `rules` | `F81531` (+1.27 s) | Verdict | text: M-25-013 / WRITE |
| `them` | `F81563` (+1.80 s) | Verdict | text: M-25-013 / WRITE |

**243** · Four: bring its nineteen ninety-three guidance up to date with the law passed that same year.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Four` | `F81613` (+0.22 s) | Verdict | text: M-25-014 / BRING |
| `bring` | `F81656` (+0.93 s) | Verdict | text: M-25-014 / BRING |
| `nineteen` | `F81684` (+1.40 s) | Verdict | text: M-25-014 / BRING |
| `guidance` | `F81744` (+2.40 s) | Verdict | text: M-25-014 / BRING |
| `date` | `F81799` (+3.32 s) | Verdict | text: M-25-014 / BRING |
| `law` | `F81837` (+3.95 s) | Verdict | text: M-25-014 / BRING |
| `year` | `F81913` (+5.22 s) | Verdict | text: M-25-014 / BRING |

**244** · The Coast Guard agreed to update its guidance, and partly agreed with the rest.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `agreed` | `F81995` (+0.82 s) | Verdict | text: THE COAST GUARD AGREED TO UPDATE / ITS GUIDANCE, |
| `update` | `F82031` (+1.42 s) | Verdict | text: THE COAST GUARD AGREED TO UPDATE / ITS GUIDANCE, |
| `guidance` | `F82065` (+1.98 s) | Verdict | text: THE COAST GUARD AGREED TO UPDATE / ITS GUIDANCE, |
| `partly` | `F82133` (+3.12 s) | Verdict | text: PARTLY AGREED WITH THE REST |
| `rest` | `F82194` (+4.13 s) | Verdict | text: PARTLY AGREED WITH THE REST |

**245** · As of October twenty twenty-six, all four recommendations remain open.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `October` | `F82276` (+0.37 s) | Verdict | text: AS OF OCT 2026: |
| `twenty-six` | `F82324` (+1.17 s) | Verdict | text: AS OF OCT 2026: |
| `all` | `F82399` (+2.42 s) | Verdict | text: ALL FOUR / OPEN · NTSB LETTER, 22 OCT 2026 |
| `four` | `F82417` (+2.72 s) | Verdict | text: ALL FOUR / OPEN · NTSB LETTER, 22 OCT 2026 |
| `recommendations` | `F82433` (+2.98 s) | Verdict | text: ALL FOUR / OPEN · NTSB LETTER, 22 OCT 2026 |
| `remain` | `F82489` (+3.92 s) | Verdict | lead · <span style={{opacity: lead(f, wf(245, 'remain'), 8)}}> |
| `open` | `F82517` (+4.38 s) | (scene list) | sound effect cue |

**246** · On the fifteenth of July, twenty twenty-two, Titan's hull changed, and its own sensors recorded it.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `fifteenth` | `F82604` (+0.28 s) | SignOff | DatePill · <DatePill f={f} fps={fps} day={15} month={7} year={2022} dayWord={wf(2 |
| `July` | `F82640` (+0.88 s) | SignOff | DatePill · <DatePill f={f} fps={fps} day={15} month={7} year={2022} dayWord={wf(2 |
| `twenty-two` | `F82718` (+2.18 s) | SignOff | DatePill · <DatePill f={f} fps={fps} day={15} month={7} year={2022} dayWord={wf(2 |
| `Titan's` | `F82774` (+3.12 s) | SignOff | text: TITAN'S HULL / CHANGED · |
| `hull` | `F82794` (+3.45 s) | SignOff | text: TITAN'S HULL / CHANGED · |
| `changed` | `F82816` (+3.82 s) | (scene list) | sound effect cue |
| `sensors` | `F82902` (+5.25 s) | SignOff | text: ITS OWN SENSORS RECORDED IT |
| `recorded` | `F82929` (+5.70 s) | SignOff | text: ITS OWN SENSORS RECORDED IT |

**247** · Eleven months later, on its first deep dive since, five people were aboard.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Eleven` | `F83011` (+0.03 s) | SignOff | text: ELEVEN MONTHS LATER · |
| `later` | `F83053` (+0.73 s) | SignOff | text: ELEVEN MONTHS LATER · |
| `first` | `F83112` (+1.72 s) | SignOff | text: ITS FIRST DEEP DIVE SINCE · |
| `since` | `F83174` (+2.75 s) | SignOff | text: ITS FIRST DEEP DIVE SINCE · |
| `five` | `F83222` (+3.55 s) | SignOff | text: FIVE PEOPLE ABOARD |
| `aboard` | `F83276` (+4.45 s) | SignOff | text: FIVE PEOPLE ABOARD |

**248** · Stockton Rush.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Stockton` | `F83401` (+0.10 s) | SignOff | text: STOCKTON RUSH |

**249** · Paul-Henri Nargeolet.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Paul-Henri` | `F83508` (+0.03 s) | SignOff | text: PAUL-HENRI NARGEOLET |

**250** · Shahzada Dawood.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Shahzada` | `F83647` (+0.08 s) | SignOff | text: SHAHZADA DAWOOD |

**251** · Suleman Dawood.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Suleman` | `F83764` (+0.12 s) | SignOff | text: SULEMAN DAWOOD |

**252** · Hamish Harding.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Hamish` | `F83873` (+0.03 s) | SignOff | text: HAMISH HARDING |
| `Harding` | `F83899` (+0.47 s) | SignOff | text: 18 JUN 2023 |

