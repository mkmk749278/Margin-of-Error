# Choreography index: Act 45

Word-level choreography (PLAYBOOK §10.6), **generated from the scene code** (`python3 scripts/choreo_index.py` from the film folder; re-run after
any edit) so it cannot drift from it. One row per word-locked event: the spoken trigger, its measured frame (60 fps) and offset
from the sentence start, the scene component, and what changes (the on-screen text that arrives, or the driving line of
code). Kit: `lib/remotion/Kinetic.tsx` and `remotion/beats.tsx` (`KeyLine` parts land on their words, `ChunkQuote` reveals a
record quote chunk by chunk, `WordLine` builds a title word by word). Kit for this film: `remotion/parts*.tsx`.
Sync audit: `review/sync_audit.md`.

**201** · In twenty twenty-three, Titan's first four dives went no deeper than ten metres.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `twenty` | `F67813` (+0.17 s) | Year2023 | text: 2023: |
| `twenty-three` | `F67835` (+0.53 s) | Year2023 | text: 2023: |
| `Titan's` | `F67906` (+1.72 s) | Year2023 | text: THE FIRST / FOUR DIVES |
| `first` | `F67926` (+2.05 s) | Year2023 | text: THE FIRST / FOUR DIVES |
| `four` | `F67950` (+2.45 s) | Year2023 | text: THE FIRST / FOUR DIVES |
| `dives` | `F67968` (+2.75 s) | Year2023 | text: THE FIRST / FOUR DIVES |
| `deeper` | `F68027` (+3.73 s) | Year2023 | text: NO DEEPER THAN 10 M |
| `ten` | `F68065` (+4.37 s) | Year2023 | text: 10 M |
| `metres` | `F68083` (+4.67 s) | Year2023 | text: NO DEEPER THAN 10 M |

**202** · At some point after dive eighty-two, the hull was damaged again.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `some` | `F68152` (+0.23 s) | Year2023 | text: AT SOME POINT / AFTER DIVE 82: |
| `point` | `F68166` (+0.47 s) | Year2023 | text: AT SOME POINT / AFTER DIVE 82: |
| `after` | `F68192` (+0.90 s) | Year2023 | text: AT SOME POINT / AFTER DIVE 82: |
| `eighty-two` | `F68230` (+1.53 s) | Year2023 | text: AT SOME POINT / AFTER DIVE 82: |
| `hull` | `F68296` (+2.63 s) | Year2023 | text: THE HULL, / DAMAGED AGAIN |
| `damaged` | `F68326` (+3.13 s) | (scene list) | sound effect cue |
| `again` | `F68353` (+3.58 s) | Year2023 | text: THE HULL, / DAMAGED AGAIN |

**203** · The N - T - S - B calls that damage of unknown origin.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `N` | `F68418` (+0.28 s) | Year2023 | text: NTSB: |
| `calls` | `F68467` (+1.10 s) | Year2023 | text: NTSB: |
| `unknown` | `F68546` (+2.42 s) | Year2023 | <Wd f={f} at={wf(203, 'unknown')} lightAt={wf(203, 'origin')} tone={colors.ink}  |
| `origin` | `F68581` (+3.00 s) | Year2023 | <Wd f={f} at={wf(203, 'unknown')} lightAt={wf(203, 'origin')} tone={colors.ink}  |

**204** · The Coast Guard board says the damage from dive eighty was likely made worse by the winter outdoors, and points to the towing as well.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Coast` | `F68637` (+0.13 s) | Year2023 | text: COAST GUARD BOARD: |
| `board` | `F68672` (+0.72 s) | Year2023 | text: COAST GUARD BOARD: |
| `damage` | `F68714` (+1.42 s) | Year2023 | text: DIVE 80'S DAMAGE |
| `eighty` | `F68774` (+2.42 s) | Year2023 | text: DIVE 80'S DAMAGE |
| `likely` | `F68814` (+3.08 s) | Year2023 | text: LIKELY MADE WORSE |
| `worse` | `F68855` (+3.77 s) | Year2023 | text: LIKELY MADE WORSE |
| `winter` | `F68897` (+4.47 s) | Year2023 | text: BY THE WINTER OUTDOORS · |
| `outdoors` | `F68920` (+4.85 s) | Year2023 | text: BY THE WINTER OUTDOORS · |
| `points` | `F68980` (+5.85 s) | Year2023 | text: AND THE TOWING |
| `towing` | `F69015` (+6.43 s) | Year2023 | text: AND THE TOWING |

**205** · Did every dive weaken it?

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Did` | `F69100` (+0.02 s) | Year2023 | text: Did every dive |
| `weaken` | `F69158` (+0.98 s) | Year2023 | <Wd f={f} at={wf(205, 'weaken')} tone={colors.amber}>weaken it?</Wd> |

**206** · Here the investigators differ.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `investigators` | `F69254` (+0.60 s) | Year2023 | text: HERE THE INVESTIGATORS DIFFER |
| `differ` | `F69306` (+1.47 s) | (scene list) | sound effect cue |

**207** · The N - T - S - B dates two events: dive eighty, and something after dive eighty-two.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `N` | `F69372` (+0.30 s) | Year2023 | lead · <Card x={220} y={340} w={700} o={lead(f, wf(207, 'n'), 10)} accent={co |
| `dates` | `F69424` (+1.17 s) | Year2023 | text: DATES TWO EVENTS: |
| `two` | `F69448` (+1.57 s) | Year2023 | text: DATES TWO EVENTS: |
| `dive` | `F69516` (+2.70 s) | Year2023 | <Wd f={f} at={wf(207, 'dive')} lightAt={wf(207, 'eighty')}>— DIVE 80</Wd> |
| `eighty` | `F69538` (+3.07 s) | Year2023 | <Wd f={f} at={wf(207, 'dive')} lightAt={wf(207, 'eighty')}>— DIVE 80</Wd> |
| `something` | `F69593` (+3.98 s) | Year2023 | <Wd f={f} at={wf(207, 'something')} lightAt={wf(207, 'eighty-two')}>— SOMETHING  |
| `eighty-two` | `F69670` (+5.27 s) | Year2023 | <Wd f={f} at={wf(207, 'something')} lightAt={wf(207, 'eighty-two')}>— SOMETHING  |

**208** · Canada's Transportation Safety Board found the cylinder likely failed progressively, with damage accumulating during each dive.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Canada's` | `F69728` (+0.02 s) | Year2023 | lead · <Card x={1000} y={340} w={700} o={lead(f, wf(208, "canada's"), 10)} ac |
| `Transportation` | `F69759` (+0.53 s) | Year2023 | text: TRANSPORTATION SAFETY BOARD |
| `Board` | `F69837` (+1.83 s) | Year2023 | text: TRANSPORTATION SAFETY BOARD |
| `found` | `F69860` (+2.22 s) | Year2023 | text: THE CYLINDER |
| `cylinder` | `F69882` (+2.58 s) | Year2023 | text: THE CYLINDER |
| `likely` | `F69913` (+3.10 s) | Year2023 | text: LIKELY FAILED PROGRESSIVELY |
| `progressively` | `F69962` (+3.92 s) | Year2023 | text: LIKELY FAILED PROGRESSIVELY |
| `damage` | `F70039` (+5.20 s) | Year2023 | text: DAMAGE ACCUMULATING |
| `accumulating` | `F70062` (+5.58 s) | Year2023 | text: DAMAGE ACCUMULATING |
| `each` | `F70141` (+6.90 s) | Year2023 | text: DURING EACH DIVE |
| `dive` | `F70157` (+7.17 s) | Year2023 | text: DURING EACH DIVE |

**209** · On the eighteenth of June, Titan made its first deep dive in eleven months.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `eighteenth` | `F70224` (+0.28 s) | (scene list) | sound effect cue |
| `June` | `F70259` (+0.87 s) | LastDive | DatePill · <DatePill f={f} fps={fps} day={18} month={6} year={2023} dayWord={wf(2 |
| `Titan` | `F70294` (+1.45 s) | LastDive | rollTo · const depth = rollTo(f, [{frame: wf(209, 'titan'), value: 0}, {frame:  |
| `made` | `F70320` (+1.88 s) | LastDive | lead · <div style={{...T(72, {color: depth >= 3350 ? colors.ink : colors.sub, |
| `first` | `F70348` (+2.35 s) | LastDive | text: THE FIRST DEEP DIVE |
| `deep` | `F70373` (+2.77 s) | LastDive | text: THE FIRST DEEP DIVE |
| `eleven` | `F70421` (+3.57 s) | LastDive | text: IN ELEVEN MONTHS |
| `months` | `F70450` (+4.05 s) | LastDive | text: IN ELEVEN MONTHS |

**210** · The N - T - S - B found that the existing delaminations and the later damage likely led to a local buckling failure.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `N` | `F70512` (+0.30 s) | LastDive | text: NTSB: |
| `found` | `F70562` (+1.13 s) | LastDive | text: NTSB: |
| `existing` | `F70595` (+1.68 s) | LastDive | text: THE EXISTING DELAMINATIONS |
| `delaminations` | `F70628` (+2.23 s) | (scene list) | sound effect cue |
| `later` | `F70708` (+3.57 s) | LastDive | text: AND THE LATER DAMAGE |
| `damage` | `F70728` (+3.90 s) | LastDive | text: AND THE LATER DAMAGE |
| `likely` | `F70763` (+4.48 s) | LastDive | text: LIKELY LED TO |
| `led` | `F70788` (+4.90 s) | LastDive | text: LIKELY LED TO |
| `local` | `F70821` (+5.45 s) | LastDive | text: A LOCAL BUCKLING FAILURE |
| `buckling` | `F70848` (+5.90 s) | LastDive | hl= · <RecordPage set="mir" start={sf(210) - 14} end={ef(210) + 20} hl={[{ke |
| `failure` | `F70878` (+6.40 s) | LastDive | text: A LOCAL BUCKLING FAILURE |

**211** · A delamination splits one thick layer into two thinner ones, and thinner layers buckle more easily.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `delamination` | `F70936` (+0.17 s) | LastDive | text: A DELAMINATION SPLITS |
| `splits` | `F70993` (+1.12 s) | (scene list) | sound effect cue |
| `one` | `F71026` (+1.67 s) | LastDive | text: ONE THICK LAYER |
| `layer` | `F71062` (+2.27 s) | LastDive | text: ONE THICK LAYER |
| `into` | `F71086` (+2.67 s) | LastDive | text: INTO TWO THINNER ONES |
| `two` | `F71103` (+2.95 s) | LastDive | text: SPLIT INTO TWO THINNER LAYERS |
| `ones` | `F71148` (+3.70 s) | LastDive | text: INTO TWO THINNER ONES |
| `thinner` | `F71198` (+4.53 s) | LastDive | text: THINNER LAYERS BUCKLE MORE EASILY |
| `buckle` | `F71238` (+5.20 s) | LastDive | text: THINNER LAYERS BUCKLE MORE EASILY |
| `easily` | `F71278` (+5.87 s) | LastDive | const load = span(f, wf(211, 'buckle') - 6, wf(211, 'easily') + 10); |

**212** · In a local buckle, one part of the wall changes shape, and gives way.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `local` | `F71341` (+0.25 s) | LastDive | text: A LOCAL BUCKLE: |
| `buckle` | `F71364` (+0.63 s) | LastDive | text: A LOCAL BUCKLE: |
| `one` | `F71408` (+1.37 s) | LastDive | text: ONE PART OF THE WALL |
| `wall` | `F71451` (+2.08 s) | LastDive | text: ONE PART OF THE WALL |
| `changes` | `F71470` (+2.40 s) | LastDive | text: CHANGES SHAPE, |
| `shape` | `F71503` (+2.95 s) | LastDive | text: CHANGES SHAPE, |
| `gives` | `F71545` (+3.65 s) | LastDive | text: GIVES WAY |
| `way` | `F71562` (+3.93 s) | LastDive | text: GIVES WAY |

**213** · The damage from dive eighty, it found, had reached the forward end of the cylinder: that is where the gauge that showed the change sat.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `damage` | `F71612` (+0.17 s) | LastDive | text: DIVE 80'S DAMAGE |
| `eighty` | `F71668` (+1.10 s) | LastDive | text: DIVE 80'S DAMAGE |
| `reached` | `F71758` (+2.60 s) | LastDive | text: HAD REACHED THE FORWARD END / OF THE CYLINDER · |
| `forward` | `F71787` (+3.08 s) | LastDive | text: FORWARD END |
| `end` | `F71816` (+3.57 s) | LastDive | text: HAD REACHED THE FORWARD END / OF THE CYLINDER · |
| `cylinder` | `F71845` (+4.05 s) | LastDive | text: HAD REACHED THE FORWARD END / OF THE CYLINDER · |
| `where` | `F71923` (+5.35 s) | LastDive | text: HAD REACHED THE FORWARD END / OF THE CYLINDER · |
| `gauge` | `F71941` (+5.65 s) | LastDive | text: WHERE THE GAUGE THAT SHOWED THE CHANGE |
| `change` | `F71997` (+6.58 s) | LastDive | text: WHERE THE GAUGE THAT SHOWED THE CHANGE |
| `sat` | `F72031` (+7.15 s) | LastDive | text: SAT |

**214** · Here is the dive record, from dive seventy-five to eighty-eight, with each dated decision beside the dive it followed.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `dive` | `F72115` (+0.57 s) | Record | text: THE DIVE RECORD · |
| `record` | `F72135` (+0.90 s) | Record | text: THE DIVE RECORD · |
| `seventy-five` | `F72209` (+2.13 s) | (scene list) | sound effect cue |
| `to` | `F72257` (+2.93 s) | Record | <Wd f={f} at={wf(214, 'to')} tone={colors.cyan} bold>→ </Wd> |
| `eighty-eight` | `F72268` (+3.12 s) | Record | text: 88 · |
| `each` | `F72337` (+4.27 s) | Record | text: EACH DATED DECISION |
| `dated` | `F72355` (+4.57 s) | Record | text: WINTER |
| `decision` | `F72378` (+4.95 s) | Record | text: EACH DATED DECISION |
| `beside` | `F72411` (+5.50 s) | Record | text: BESIDE THE DIVE IT FOLLOWED |
| `followed` | `F72472` (+6.52 s) | Record | text: BESIDE THE DIVE IT FOLLOWED |

**215** · Six of these dives reached three thousand eight hundred and forty metres.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Six` | `F72528` (+0.15 s) | Record | lead · <div style={{position: 'absolute', left: 1420, top: 186, width: 330, d |
| `three` | `F72618` (+1.65 s) | Record | text: 0 M · THE WRECK |
| `thousand` | `F72634` (+1.92 s) | Record | text: 0 M · THE WRECK |
| `eight` | `F72666` (+2.45 s) | Record | text: 0 M · THE WRECK |
| `hundred` | `F72674` (+2.58 s) | Record | text: 0 M · THE WRECK |
| `forty` | `F72708` (+3.15 s) | Record | text: 0 M · THE WRECK |

**216** · Thirteen did, in all.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Thirteen` | `F72784` (+0.05 s) | (scene list) | sound effect cue |
| `all` | `F72851` (+1.17 s) | Record | <span style={T(26, {color: colors.ink})}>{f >= wf(216, 'all') ? 'TO 3,840 M · IN |

**217** · Then one line that stops, about five hundred metres short.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `one` | `F72925` (+0.63 s) | Record | lead · <g opacity={lead(f, wf(217, 'one'), 8)}> |
| `line` | `F72937` (+0.83 s) | Record | const d88 = span(f, wf(217, 'line') - 4, wf(217, 'stops') + LAND); |
| `stops` | `F72967` (+1.33 s) | Record | const d88 = span(f, wf(217, 'line') - 4, wf(217, 'stops') + LAND); |
| `five` | `F73036` (+2.48 s) | Record | lead · const gap = lead(f, wf(217, 'five'), 14); |
| `hundred` | `F73055` (+2.80 s) | Record | <text x={xOf(13) - 30} y={yD(3600) + 10} textAnchor="end" style={T(28, lit(f, wf |

**218** · Two things often said about Titan.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Two` | `F73284` (+0.10 s) | Verdict | text: Two things |
| `things` | `F73297` (+0.32 s) | Verdict | text: Two things |
| `often` | `F73322` (+0.73 s) | Verdict | <Wd f={f} at={wf(218, 'often')} lightAt={wf(218, 'said')} base={colors.ink}>ofte |
| `said` | `F73344` (+1.10 s) | Verdict | <Wd f={f} at={wf(218, 'often')} lightAt={wf(218, 'said')} base={colors.ink}>ofte |

**219** · Its controller: on dive eighty-one, the thruster controls were found to be mapped in reverse, and the pilot turned the controller around.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `controller` | `F73443` (+0.22 s) | Verdict | text: THE CONTROLLER · / DIVE 81: |
| `dive` | `F73523` (+1.55 s) | Verdict | text: THE CONTROLLER · / DIVE 81: |
| `eighty-one` | `F73545` (+1.92 s) | Verdict | text: THE CONTROLLER · / DIVE 81: |
| `thruster` | `F73603` (+2.88 s) | Verdict | text: THRUSTER CONTROLS |
| `controls` | `F73629` (+3.32 s) | Verdict | text: THRUSTER CONTROLS |
| `mapped` | `F73701` (+4.52 s) | (scene list) | sound effect cue |
| `reverse` | `F73728` (+4.97 s) | Verdict | text: MAPPED IN REVERSE · |
| `pilot` | `F73797` (+6.12 s) | Verdict | text: THE PILOT TURNED / IT AROUND |
| `turned` | `F73826` (+6.60 s) | (scene list) | sound effect cue |
| `controller` | `F73846` (+6.93 s) | Verdict | text: THE PILOT TURNED / IT AROUND |
| `around` | `F73881` (+7.52 s) | Verdict | text: THE PILOT TURNED / IT AROUND |

**220** · None of the three reports names the controller as a cause.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `None` | `F73953` (+0.07 s) | (scene list) | sound effect cue |
| `three` | `F73980` (+0.52 s) | Verdict | text: NONE OF THE THREE / REPORTS |
| `reports` | `F73996` (+0.78 s) | Verdict | text: NONE OF THE THREE / REPORTS |
| `names` | `F74033` (+1.40 s) | Verdict | text: NAMES THE CONTROLLER / AS A CAUSE |
| `controller` | `F74058` (+1.82 s) | Verdict | text: NAMES THE CONTROLLER / AS A CAUSE |
| `cause` | `F74116` (+2.78 s) | Verdict | text: NAMES THE CONTROLLER / AS A CAUSE |

**221** · Its window: the Coast Guard board criticised it as untested and uncertified, but found it unlikely that the window caused the implosion.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Coast` | `F74263` (+1.30 s) | Verdict | text: THE COAST GUARD BOARD: |
| `board` | `F74298` (+1.88 s) | Verdict | text: THE COAST GUARD BOARD: |
| `criticised` | `F74315` (+2.17 s) | Verdict | hl= · <RecordPage set="roi" start={sf(221) - 14} end={ef(222) + 20} page={28 |
| `untested` | `F74384` (+3.32 s) | Verdict | text: UNTESTED, UNCERTIFIED · |
| `uncertified` | `F74436` (+4.18 s) | Verdict | text: UNTESTED, UNCERTIFIED · |
| `found` | `F74519` (+5.57 s) | Verdict | text: UNLIKELY / THE WINDOW CAUSED |
| `unlikely` | `F74543` (+5.97 s) | (scene list) | sound effect cue |
| `window` | `F74601` (+6.93 s) | Verdict | text: UNLIKELY / THE WINDOW CAUSED |
| `caused` | `F74629` (+7.40 s) | Verdict | text: UNLIKELY / THE WINDOW CAUSED |
| `implosion` | `F74655` (+7.83 s) | Verdict | text: UNLIKELY / THE WINDOW CAUSED |

**222** · All three reports place the failure in the hull.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `All` | `F74725` (+0.07 s) | Verdict | text: ALL THREE / REPORTS: |
| `three` | `F74736` (+0.25 s) | Verdict | text: ALL THREE / REPORTS: |
| `reports` | `F74751` (+0.50 s) | Verdict | text: ALL THREE / REPORTS: |
| `place` | `F74786` (+1.08 s) | Verdict | text: THE FAILURE WAS IN THE HULL |
| `hull` | `F74854` (+2.22 s) | Verdict | text: THE FAILURE WAS IN THE HULL |

**223** · The N - T - S - B's probable cause was OceanGate's inadequate engineering process, which failed to establish the actual strength and durability of the Titan pressure vessel.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `probable` | `F75061` (+1.07 s) | Verdict | text: PROBABLE CAUSE: |
| `cause` | `F75091` (+1.57 s) | Verdict | text: PROBABLE CAUSE: |
| `inadequate` | `F75180` (+3.05 s) | (scene list) | sound effect cue |
| `process` | `F75252` (+4.25 s) | Verdict | text: AN INADEQUATE ENGINEERING PROCESS |
| `failed` | `F75318` (+5.35 s) | Verdict | text: THAT FAILED TO ESTABLISH |
| `establish` | `F75343` (+5.77 s) | Verdict | text: THAT FAILED TO ESTABLISH |
| `actual` | `F75390` (+6.55 s) | Verdict | text: THE ACTUAL STRENGTH AND DURABILITY / OF TITAN'S PRESSURE VESSEL |
| `durability` | `F75455` (+7.63 s) | Verdict | text: THE ACTUAL STRENGTH AND DURABILITY / OF TITAN'S PRESSURE VESSEL |
| `Titan` | `F75520` (+8.72 s) | Verdict | text: THE ACTUAL STRENGTH AND DURABILITY / OF TITAN'S PRESSURE VESSEL |
| `vessel` | `F75563` (+9.43 s) | Verdict | text: THE ACTUAL STRENGTH AND DURABILITY / OF TITAN'S PRESSURE VESSEL |

**224** · Contributing were the guidance and the rules that did not make OceanGate meet the industry's standards, and the company's flawed analysis of its own monitoring data.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Contributing` | `F75612` (+0.03 s) | Verdict | text: CONTRIBUTING: |
| `guidance` | `F75674` (+1.07 s) | Verdict | text: THE GUIDANCE AND THE RULES / THAT DID NOT MAKE OCEANGATE MEET |
| `rules` | `F75722` (+1.87 s) | Verdict | text: THE GUIDANCE AND THE RULES / THAT DID NOT MAKE OCEANGATE MEET |
| `make` | `F75783` (+2.88 s) | Verdict | text: THE GUIDANCE AND THE RULES / THAT DID NOT MAKE OCEANGATE MEET |
| `meet` | `F75839` (+3.82 s) | Verdict | text: THE GUIDANCE AND THE RULES / THAT DID NOT MAKE OCEANGATE MEET |
| `industry's` | `F75862` (+4.20 s) | Verdict | text: THE GUIDANCE AND THE RULES / THAT DID NOT MAKE OCEANGATE MEET |
| `standards` | `F75893` (+4.72 s) | Verdict | text: THE GUIDANCE AND THE RULES / THAT DID NOT MAKE OCEANGATE MEET |
| `company's` | `F75960` (+5.83 s) | Verdict | text: THE COMPANY'S FLAWED / ANALYSIS |
| `flawed` | `F75993` (+6.38 s) | Verdict | text: THE COMPANY'S FLAWED / ANALYSIS |
| `analysis` | `F76015` (+6.75 s) | Verdict | text: THE COMPANY'S FLAWED / ANALYSIS |
| `own` | `F76075` (+7.75 s) | Verdict | text: OF ITS OWN MONITORING DATA |
| `data` | `F76125` (+8.58 s) | Verdict | text: OF ITS OWN MONITORING DATA |

**225** · The Coast Guard's Marine Board called it a preventable tragedy.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Coast` | `F76180` (+0.13 s) | Verdict | text: THE COAST GUARD'S MARINE BOARD: |
| `Marine` | `F76218` (+0.77 s) | Verdict | hl= · <RecordPage set="roi" start={sf(225) - 14} end={ef(225) + 16} hl={[{ke |
| `Board` | `F76242` (+1.17 s) | Verdict | text: THE COAST GUARD'S MARINE BOARD: |
| `preventable` | `F76304` (+2.20 s) | (scene list) | sound effect cue |
| `tragedy` | `F76350` (+2.97 s) | Verdict | <Wd f={f} at={wf(225, 'preventable')} lightAt={wf(225, 'tragedy')} tone={colors. |

**226** · Canada's Transportation Safety Board found that Titan received no oversight from Transport Canada, though it sailed from Saint John's with Canadian ships.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Canada's` | `F76416` (+0.05 s) | Verdict | text: CANADA'S / TRANSPORTATION SAFETY |
| `Transportation` | `F76446` (+0.55 s) | Verdict | text: CANADA'S / TRANSPORTATION SAFETY |
| `Safety` | `F76500` (+1.45 s) | Verdict | text: CANADA'S / TRANSPORTATION SAFETY |
| `Board` | `F76524` (+1.85 s) | Verdict | text: CANADA'S / TRANSPORTATION SAFETY |
| `found` | `F76548` (+2.25 s) | Verdict | text: CANADA'S / TRANSPORTATION SAFETY |
| `Titan` | `F76573` (+2.67 s) | Verdict | text: TITAN RECEIVED |
| `received` | `F76598` (+3.08 s) | Verdict | text: TITAN RECEIVED |
| `no` | `F76630` (+3.62 s) | Verdict | text: NO OVERSIGHT |
| `oversight` | `F76649` (+3.93 s) | Verdict | text: NO OVERSIGHT |
| `from` | `F76681` (+4.47 s) | Verdict | text: FROM TRANSPORT CANADA |
| `Canada` | `F76721` (+5.13 s) | Verdict | text: FROM TRANSPORT CANADA |
| `though` | `F76768` (+5.92 s) | Verdict | text: THOUGH IT SAILED FROM |
| `sailed` | `F76787` (+6.23 s) | Verdict | text: THOUGH IT SAILED FROM |
| `Saint` | `F76822` (+6.82 s) | Verdict | text: ST. JOHN'S |
| `John's` | `F76836` (+7.05 s) | Verdict | text: ST. JOHN'S |
| `Canadian` | `F76872` (+7.65 s) | Verdict | text: WITH CANADIAN SHIPS |
| `ships` | `F76907` (+8.23 s) | Verdict | text: WITH CANADIAN SHIPS |

**227** · The Coast Guard board also wrote this, about Mr.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Coast` | `F76966` (+0.13 s) | Verdict | text: THE COAST GUARD BOARD / ALSO WROTE, |
| `board` | `F77001` (+0.72 s) | Verdict | text: THE COAST GUARD BOARD / ALSO WROTE, |
| `also` | `F77024` (+1.10 s) | Verdict | text: THE COAST GUARD BOARD / ALSO WROTE, |
| `wrote` | `F77045` (+1.45 s) | Verdict | text: THE COAST GUARD BOARD / ALSO WROTE, |
| `about` | `F77097` (+2.32 s) | Verdict | text: ON MR. RUSH: |
| `Mr` | `F77112` (+2.57 s) | Verdict | text: ON MR. RUSH: |

**228** · Rush, who was both the company's chief executive and its pilot.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `both` | `F77187` (+0.27 s) | Verdict | text: CHIEF EXECUTIVE |
| `executive` | `F77253` (+1.37 s) | Verdict | text: CHIEF EXECUTIVE |
| `pilot` | `F77329` (+2.63 s) | Verdict | text: AND PILOT |

**229** · Had he survived the incident, the board would have recommended that the Commandant refer the matter to the Department of Justice, for its consideration on whether to pursue a separate criminal investigation.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Had` | `F77393` (+0.07 s) | Verdict | text: HAD HE SURVIVED: |
| `survived` | `F77413` (+0.40 s) | (scene list) | sound effect cue |
| `incident` | `F77451` (+1.03 s) | Verdict | text: THE BOARD / WOULD HAVE RECOMMENDED |
| `board` | `F77502` (+1.88 s) | Verdict | text: THE BOARD / WOULD HAVE RECOMMENDED |
| `would` | `F77519` (+2.17 s) | Verdict | text: THE BOARD / WOULD HAVE RECOMMENDED |
| `recommended` | `F77536` (+2.45 s) | Verdict | text: THE BOARD / WOULD HAVE RECOMMENDED |
| `Commandant` | `F77589` (+3.33 s) | Verdict | text: THE BOARD / WOULD HAVE RECOMMENDED |
| `refer` | `F77626` (+3.95 s) | Verdict | text: REFER THE MATTER / TO THE DEPARTMENT OF JUSTICE, |
| `Department` | `F77695` (+5.10 s) | Verdict | text: REFER THE MATTER / TO THE DEPARTMENT OF JUSTICE, |
| `Justice` | `F77736` (+5.78 s) | Verdict | text: REFER THE MATTER / TO THE DEPARTMENT OF JUSTICE, |
| `consideration` | `F77805` (+6.93 s) | Verdict | text: TO CONSIDER WHETHER / TO PURSUE A SEPARATE |
| `whether` | `F77867` (+7.97 s) | Verdict | text: TO CONSIDER WHETHER / TO PURSUE A SEPARATE |
| `pursue` | `F77890` (+8.35 s) | Verdict | text: TO CONSIDER WHETHER / TO PURSUE A SEPARATE |
| `separate` | `F77929` (+9.00 s) | Verdict | text: TO CONSIDER WHETHER / TO PURSUE A SEPARATE |
| `criminal` | `F77958` (+9.48 s) | Verdict | text: TO CONSIDER WHETHER / TO PURSUE A SEPARATE |
| `investigation` | `F77983` (+9.90 s) | Verdict | text: TO CONSIDER WHETHER / TO PURSUE A SEPARATE |

**230** · Whether any crime was committed, the board wrote, was for the Justice Department to decide, and that will not happen, because Mr.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Whether` | `F78060` (+0.05 s) | Verdict | text: WHETHER ANY CRIME WAS COMMITTED, / THE BOARD WROTE, |
| `crime` | `F78095` (+0.63 s) | Verdict | hl= · <RecordPage set="roi" start={sf(227) - 14} end={ef(231) + 20} hl={[{ke |
| `committed` | `F78130` (+1.22 s) | Verdict | text: WHETHER ANY CRIME WAS COMMITTED, / THE BOARD WROTE, |
| `board` | `F78195` (+2.30 s) | Verdict | text: WHETHER ANY CRIME WAS COMMITTED, / THE BOARD WROTE, |
| `wrote` | `F78211` (+2.57 s) | Verdict | text: WHETHER ANY CRIME WAS COMMITTED, / THE BOARD WROTE, |
| `Justice` | `F78280` (+3.72 s) | Verdict | text: FOR THE DEPARTMENT OF JUSTICE TO DECIDE · |
| `decide` | `F78348` (+4.85 s) | Verdict | text: FOR THE DEPARTMENT OF JUSTICE TO DECIDE · |
| `will` | `F78435` (+6.30 s) | Verdict | text: THAT WILL NOT HAPPEN, / BECAUSE |
| `happen` | `F78468` (+6.85 s) | Verdict | text: THAT WILL NOT HAPPEN, / BECAUSE |
| `because` | `F78486` (+7.15 s) | Verdict | text: THAT WILL NOT HAPPEN, / BECAUSE |

**231** · Rush died.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Rush` | `F78553` (+0.73 s) | Verdict | text: MR. RUSH DIED |
| `died` | `F78576` (+1.12 s) | Verdict | text: MR. RUSH DIED |

**232** · One more finding concerns the eighteenth of June itself.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `One` | `F78656` (+0.12 s) | Verdict | text: ONE MORE FINDING |
| `finding` | `F78679` (+0.50 s) | Verdict | text: ONE MORE FINDING |
| `concerns` | `F78706` (+0.95 s) | Verdict | text: ONE MORE FINDING |
| `eighteenth` | `F78747` (+1.63 s) | Verdict | DatePill · <DatePill f={f} fps={fps} day={18} month={6} year={2023} dayWord={wf(2 |
| `June` | `F78780` (+2.18 s) | Verdict | DatePill · <DatePill f={f} fps={fps} day={18} month={6} year={2023} dayWord={wf(2 |

**233** · The board found that the company's own communications plan delayed the first call to rescuers by more than seven hours, and that no deep-water rescue vehicle was standing by.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `board` | `F78869` (+0.15 s) | Verdict | text: THE BOARD: |
| `found` | `F78889` (+0.48 s) | Verdict | text: THE BOARD: |
| `company's` | `F78921` (+1.02 s) | Verdict | text: THE COMPANY'S OWN COMMUNICATIONS PLAN |
| `communications` | `F78969` (+1.82 s) | Verdict | text: 10:47 · LAST MESSAGE |
| `plan` | `F79022` (+2.70 s) | Verdict | text: THE COMPANY'S OWN COMMUNICATIONS PLAN |
| `delayed` | `F79045` (+3.08 s) | Verdict | text: DELAYED THE FIRST / CALL |
| `first` | `F79081` (+3.68 s) | Verdict | text: DELAYED THE FIRST / CALL |
| `call` | `F79100` (+4.00 s) | Verdict | text: DELAYED THE FIRST / CALL |
| `rescuers` | `F79124` (+4.40 s) | Verdict | text: DELAYED THE FIRST / CALL |
| `by` | `F79159` (+4.98 s) | Verdict | text: NO DEEP-WATER / RESCUE VEHICLE |
| `more` | `F79171` (+5.18 s) | Verdict | text: BY MORE THAN 7 HOURS · |
| `seven` | `F79200` (+5.67 s) | Verdict | text: FIRST CALL TO RESCUERS: 7+ HOURS |
| `hours` | `F79223` (+6.05 s) | Verdict | text: BY MORE THAN 7 HOURS · |
| `no` | `F79292` (+7.20 s) | Verdict | text: NO DEEP-WATER / RESCUE VEHICLE |
| `deep-water` | `F79309` (+7.48 s) | Verdict | text: NO DEEP-WATER / RESCUE VEHICLE |
| `rescue` | `F79344` (+8.07 s) | Verdict | text: NO DEEP-WATER / RESCUE VEHICLE |
| `vehicle` | `F79366` (+8.43 s) | Verdict | text: NO DEEP-WATER / RESCUE VEHICLE |
| `standing` | `F79402` (+9.03 s) | Verdict | text: NO DEEP-WATER / RESCUE VEHICLE |

**234** · It also found that the implosion caused the immediate loss of all lives on board, before any distress call.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `implosion` | `F79547` (+1.15 s) | Verdict | text: THE IMPLOSION CAUSED |
| `caused` | `F79588` (+1.83 s) | Verdict | text: THE IMPLOSION CAUSED |
| `immediate` | `F79615` (+2.28 s) | (scene list) | sound effect cue |
| `loss` | `F79650` (+2.87 s) | Verdict | text: THE IMMEDIATE LOSS / OF ALL LIVES · |
| `all` | `F79687` (+3.48 s) | Verdict | text: THE IMMEDIATE LOSS / OF ALL LIVES · |
| `lives` | `F79701` (+3.72 s) | Verdict | text: THE IMMEDIATE LOSS / OF ALL LIVES · |
| `before` | `F79766` (+4.80 s) | Verdict | text: BEFORE ANY DISTRESS CALL |
| `call` | `F79848` (+6.17 s) | Verdict | text: BEFORE ANY DISTRESS CALL |

**235** · The N - T - S - B found that search and rescue could not have saved them.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `N` | `F79908` (+0.25 s) | Verdict | text: THE NTSB: |
| `found` | `F79953` (+1.00 s) | Verdict | text: THE NTSB: |
| `search` | `F79980` (+1.45 s) | Verdict | text: SEARCH AND RESCUE |
| `rescue` | `F80006` (+1.88 s) | Verdict | text: SEARCH AND RESCUE |
| `not` | `F80053` (+2.67 s) | (scene list) | sound effect cue |
| `saved` | `F80081` (+3.13 s) | Verdict | text: COULD NOT HAVE SAVED THEM |

**236** · With assets ready, it found, Titan would likely have been found sooner.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `assets` | `F80151` (+0.22 s) | Verdict | text: WITH ASSETS READY, |
| `ready` | `F80178` (+0.67 s) | Verdict | text: WITH ASSETS READY, |
| `Titan` | `F80261` (+2.05 s) | Verdict | text: TITAN / WOULD LIKELY HAVE BEEN FOUND |
| `likely` | `F80303` (+2.75 s) | (scene list) | sound effect cue |
| `found` | `F80346` (+3.47 s) | Verdict | text: TITAN / WOULD LIKELY HAVE BEEN FOUND |
| `sooner` | `F80370` (+3.87 s) | Verdict | text: TITAN / WOULD LIKELY HAVE BEEN FOUND |

**237** · OceanGate suspended its operations in July twenty twenty-three.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `OceanGate` | `F80438` (+0.07 s) | Verdict | text: OCEANGATE SUSPENDED / OPERATIONS · |
| `suspended` | `F80474` (+0.67 s) | Verdict | text: OCEANGATE SUSPENDED / OPERATIONS · |
| `operations` | `F80519` (+1.42 s) | Verdict | text: OCEANGATE SUSPENDED / OPERATIONS · |
| `July` | `F80570` (+2.27 s) | Verdict | text: JUL 2023 |
| `twenty-three` | `F80600` (+2.77 s) | Verdict | text: JUL 2023 |

**238** · When the Coast Guard report came out, a company spokesperson said OceanGate had been wound down, was fully cooperating with the investigation, and offered condolences to the families.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `When` | `F80694` (+0.03 s) | Verdict | text: AUG 2025, WHEN THE COAST GUARD REPORT / CAME OUT · |
| `report` | `F80740` (+0.80 s) | Verdict | text: AUG 2025, WHEN THE COAST GUARD REPORT / CAME OUT · |
| `came` | `F80763` (+1.18 s) | Verdict | text: AUG 2025, WHEN THE COAST GUARD REPORT / CAME OUT · |
| `out` | `F80780` (+1.47 s) | Verdict | text: AUG 2025, WHEN THE COAST GUARD REPORT / CAME OUT · |
| `company` | `F80810` (+1.97 s) | Verdict | text: AUG 2025, WHEN THE COAST GUARD REPORT / CAME OUT · |
| `spokesperson` | `F80835` (+2.38 s) | Verdict | text: AUG 2025, WHEN THE COAST GUARD REPORT / CAME OUT · |
| `said` | `F80883` (+3.18 s) | Verdict | text: AUG 2025, WHEN THE COAST GUARD REPORT / CAME OUT · |
| `wound` | `F80957` (+4.42 s) | Verdict | <Wd f={f} at={wf(238, 'wound')} lightAt={wf(238, 'down')}>— THE COMPANY HAD BEEN |
| `down` | `F80980` (+4.80 s) | Verdict | <Wd f={f} at={wf(238, 'wound')} lightAt={wf(238, 'down')}>— THE COMPANY HAD BEEN |
| `fully` | `F81032` (+5.67 s) | Verdict | <Wd f={f} at={wf(238, 'fully')} lightAt={wf(238, 'investigation')}>— FULLY COOPE |
| `investigation` | `F81101` (+6.82 s) | Verdict | <Wd f={f} at={wf(238, 'fully')} lightAt={wf(238, 'investigation')}>— FULLY COOPE |
| `offered` | `F81180` (+8.13 s) | Verdict | <Wd f={f} at={wf(238, 'offered')} lightAt={wf(238, 'families')}>— CONDOLENCES TO |
| `families` | `F81259` (+9.45 s) | Verdict | <Wd f={f} at={wf(238, 'offered')} lightAt={wf(238, 'families')}>— CONDOLENCES TO |

**239** · What now?

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `What` | `F81344` (+0.07 s) | Verdict | lead · <div style={{position: 'absolute', left: 0, right: 0, top: interpolate |

**240** · The N - T - S - B made four recommendations to the U - S Coast Guard.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `N` | `F81430` (+0.43 s) | Verdict | text: THE NTSB: |
| `made` | `F81488` (+1.40 s) | Verdict | text: THE NTSB: |
| `four` | `F81509` (+1.75 s) | (scene list) | sound effect cue |
| `recommendations` | `F81527` (+2.05 s) | Verdict | text: 4 RECOMMENDATIONS |
| `U` | `F81604` (+3.33 s) | Verdict | text: TO THE U.S. COAST GUARD |
| `Guard` | `F81645` (+4.02 s) | Verdict | text: TO THE U.S. COAST GUARD |

**241** · One: propose that the International Maritime Organization make its guidance for submersibles mandatory.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `One` | `F81701` (+0.15 s) | Verdict | text: M-25-015 / IMO |
| `propose` | `F81744` (+0.87 s) | Verdict | <Wd f={f} at={wf(241, 'propose')} lightAt={wf(241, 'organization')}>(1) VIA THE  |
| `International` | `F81794` (+1.70 s) | Verdict | text: M-25-015 / IMO |
| `Organization` | `F81869` (+2.95 s) | Verdict | <Wd f={f} at={wf(241, 'propose')} lightAt={wf(241, 'organization')}>(1) VIA THE  |
| `make` | `F81916` (+3.73 s) | Verdict | text: M-25-015 / IMO |
| `submersibles` | `F81980` (+4.80 s) | Verdict | text: M-25-015 / IMO |
| `mandatory` | `F82029` (+5.62 s) | Verdict | text: M-25-015 / IMO |

**242** · Two: study pressure vessels that carry people.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Two` | `F82104` (+0.03 s) | Verdict | text: M-25-012 / STUDY |
| `study` | `F82156` (+0.90 s) | Verdict | text: M-25-012 / STUDY |
| `pressure` | `F82179` (+1.28 s) | Verdict | text: M-25-012 / STUDY |
| `carry` | `F82240` (+2.30 s) | Verdict | text: M-25-012 / STUDY |
| `people` | `F82262` (+2.67 s) | Verdict | text: M-25-012 / STUDY |

**243** · Three: write rules for them.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Three` | `F82321` (+0.05 s) | Verdict | text: M-25-013 / WRITE |
| `write` | `F82373` (+0.92 s) | Verdict | text: M-25-013 / WRITE |
| `rules` | `F82394` (+1.27 s) | Verdict | text: M-25-013 / WRITE |
| `them` | `F82426` (+1.80 s) | Verdict | text: M-25-013 / WRITE |

**244** · Four: bring its nineteen ninety-three guidance up to date with the law passed that same year.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Four` | `F82476` (+0.22 s) | Verdict | text: M-25-014 / BRING |
| `bring` | `F82519` (+0.93 s) | Verdict | text: M-25-014 / BRING |
| `nineteen` | `F82547` (+1.40 s) | Verdict | text: M-25-014 / BRING |
| `guidance` | `F82607` (+2.40 s) | Verdict | text: M-25-014 / BRING |
| `date` | `F82662` (+3.32 s) | Verdict | text: M-25-014 / BRING |
| `law` | `F82700` (+3.95 s) | Verdict | text: M-25-014 / BRING |
| `year` | `F82777` (+5.23 s) | Verdict | text: M-25-014 / BRING |

**245** · The Coast Guard agreed to update its guidance, and partly agreed with the rest.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `agreed` | `F82858` (+0.82 s) | Verdict | text: THE COAST GUARD AGREED TO UPDATE / ITS GUIDANCE, |
| `update` | `F82894` (+1.42 s) | Verdict | text: THE COAST GUARD AGREED TO UPDATE / ITS GUIDANCE, |
| `guidance` | `F82928` (+1.98 s) | Verdict | text: THE COAST GUARD AGREED TO UPDATE / ITS GUIDANCE, |
| `partly` | `F82996` (+3.12 s) | Verdict | text: PARTLY AGREED WITH THE REST |
| `rest` | `F83057` (+4.13 s) | Verdict | text: PARTLY AGREED WITH THE REST |

**246** · As of October twenty twenty-six, all four recommendations remain open.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `October` | `F83139` (+0.37 s) | Verdict | text: AS OF OCT 2026: |
| `twenty-six` | `F83187` (+1.17 s) | Verdict | text: AS OF OCT 2026: |
| `all` | `F83262` (+2.42 s) | Verdict | text: ALL FOUR / OPEN · NTSB LETTER, 22 OCT 2026 |
| `four` | `F83280` (+2.72 s) | Verdict | text: ALL FOUR / OPEN · NTSB LETTER, 22 OCT 2026 |
| `recommendations` | `F83296` (+2.98 s) | Verdict | text: ALL FOUR / OPEN · NTSB LETTER, 22 OCT 2026 |
| `remain` | `F83352` (+3.92 s) | Verdict | lead · <span style={{opacity: lead(f, wf(246, 'remain'), 8)}}> |
| `open` | `F83380` (+4.38 s) | (scene list) | sound effect cue |

**247** · On the fifteenth of July, twenty twenty-two, Titan's hull changed, and its own sensors recorded it.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `fifteenth` | `F83467` (+0.28 s) | SignOff | DatePill · <DatePill f={f} fps={fps} day={15} month={7} year={2022} dayWord={wf(2 |
| `July` | `F83503` (+0.88 s) | SignOff | DatePill · <DatePill f={f} fps={fps} day={15} month={7} year={2022} dayWord={wf(2 |
| `twenty-two` | `F83581` (+2.18 s) | SignOff | DatePill · <DatePill f={f} fps={fps} day={15} month={7} year={2022} dayWord={wf(2 |
| `Titan's` | `F83637` (+3.12 s) | SignOff | text: TITAN'S HULL / CHANGED · |
| `hull` | `F83657` (+3.45 s) | SignOff | text: TITAN'S HULL / CHANGED · |
| `changed` | `F83680` (+3.83 s) | (scene list) | sound effect cue |
| `sensors` | `F83765` (+5.25 s) | SignOff | text: ITS OWN SENSORS RECORDED IT |
| `recorded` | `F83792` (+5.70 s) | SignOff | text: ITS OWN SENSORS RECORDED IT |

**248** · Eleven months later, on its first deep dive since, five people were aboard.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Eleven` | `F83874` (+0.03 s) | SignOff | text: ELEVEN MONTHS LATER · |
| `later` | `F83916` (+0.73 s) | SignOff | text: ELEVEN MONTHS LATER · |
| `first` | `F83975` (+1.72 s) | SignOff | text: ITS FIRST DEEP DIVE SINCE · |
| `since` | `F84037` (+2.75 s) | SignOff | text: ITS FIRST DEEP DIVE SINCE · |
| `five` | `F84085` (+3.55 s) | SignOff | text: FIVE PEOPLE ABOARD |
| `aboard` | `F84139` (+4.45 s) | SignOff | text: FIVE PEOPLE ABOARD |

**249** · Stockton Rush.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Stockton` | `F84264` (+0.10 s) | SignOff | text: STOCKTON RUSH |

**250** · Paul-Henri Nargeolet.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Paul-Henri` | `F84371` (+0.03 s) | SignOff | text: PAUL-HENRI NARGEOLET |

**251** · Shahzada Dawood.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Shahzada` | `F84510` (+0.07 s) | SignOff | text: SHAHZADA DAWOOD |

**252** · Suleman Dawood.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Suleman` | `F84627` (+0.12 s) | SignOff | text: SULEMAN DAWOOD |

**253** · Hamish Harding.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Hamish` | `F84736` (+0.03 s) | SignOff | text: HAMISH HARDING |
| `Harding` | `F84762` (+0.47 s) | SignOff | text: 18 JUN 2023 |

