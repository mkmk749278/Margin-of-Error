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
| `twenty` | `F66171` (+0.15 s) | Year2023 | text: 2023: |
| `twenty-three` | `F66192` (+0.50 s) | Year2023 | text: 2023: |
| `Titan's` | `F66263` (+1.68 s) | Year2023 | text: THE FIRST / FOUR DIVES |
| `first` | `F66282` (+2.00 s) | Year2023 | text: THE FIRST / FOUR DIVES |
| `four` | `F66308` (+2.43 s) | Year2023 | text: THE FIRST / FOUR DIVES |
| `dives` | `F66326` (+2.73 s) | Year2023 | text: THE FIRST / FOUR DIVES |
| `deeper` | `F66385` (+3.72 s) | Year2023 | text: NO DEEPER THAN 10 M |
| `ten` | `F66422` (+4.33 s) | Year2023 | text: 10 M |
| `metres` | `F66439` (+4.62 s) | Year2023 | text: NO DEEPER THAN 10 M |

**201** · At some point after dive eighty-two, the hull was damaged again.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `some` | `F66509` (+0.20 s) | Year2023 | text: AT SOME POINT / AFTER DIVE 82: |
| `point` | `F66523` (+0.43 s) | Year2023 | text: AT SOME POINT / AFTER DIVE 82: |
| `after` | `F66550` (+0.88 s) | Year2023 | text: AT SOME POINT / AFTER DIVE 82: |
| `eighty-two` | `F66587` (+1.50 s) | Year2023 | text: AT SOME POINT / AFTER DIVE 82: |
| `hull` | `F66653` (+2.60 s) | Year2023 | text: THE HULL, / DAMAGED AGAIN |
| `damaged` | `F66683` (+3.10 s) | (scene list) | sound effect cue |
| `again` | `F66711` (+3.57 s) | Year2023 | text: THE HULL, / DAMAGED AGAIN |

**202** · The N - T - S - B calls that damage of unknown origin.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `N` | `F66776` (+0.27 s) | Year2023 | text: NTSB: |
| `calls` | `F66824` (+1.07 s) | Year2023 | text: NTSB: |
| `unknown` | `F66903` (+2.38 s) | Year2023 | <Wd f={f} at={wf(202, 'unknown')} lightAt={wf(202, 'origin')} tone={colors.ink}  |
| `origin` | `F66938` (+2.97 s) | Year2023 | <Wd f={f} at={wf(202, 'unknown')} lightAt={wf(202, 'origin')} tone={colors.ink}  |

**203** · The Coast Guard board says the damage from dive eighty was likely made worse by the winter outdoors, and points to the towing as well.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Coast` | `F66995` (+0.12 s) | Year2023 | text: COAST GUARD BOARD: |
| `board` | `F67030` (+0.70 s) | Year2023 | text: COAST GUARD BOARD: |
| `damage` | `F67072` (+1.40 s) | Year2023 | text: DIVE 80'S DAMAGE |
| `eighty` | `F67132` (+2.40 s) | Year2023 | text: DIVE 80'S DAMAGE |
| `likely` | `F67171` (+3.05 s) | Year2023 | text: LIKELY MADE WORSE |
| `worse` | `F67212` (+3.73 s) | Year2023 | text: LIKELY MADE WORSE |
| `winter` | `F67254` (+4.43 s) | Year2023 | text: BY THE WINTER OUTDOORS · |
| `outdoors` | `F67277` (+4.82 s) | Year2023 | text: BY THE WINTER OUTDOORS · |
| `points` | `F67337` (+5.82 s) | Year2023 | text: AND THE TOWING |
| `towing` | `F67372` (+6.40 s) | Year2023 | text: AND THE TOWING |

**204** · Did every dive weaken it?

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Did` | `F67458` (+0.00 s) | Year2023 | text: Did every dive |
| `weaken` | `F67516` (+0.97 s) | Year2023 | <Wd f={f} at={wf(204, 'weaken')} tone={colors.amber}>weaken it?</Wd> |

**205** · Here the investigators differ.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `investigators` | `F67612` (+0.60 s) | Year2023 | text: HERE THE INVESTIGATORS DIFFER |
| `differ` | `F67664` (+1.47 s) | (scene list) | sound effect cue |

**206** · The N - T - S - B dates two events: dive eighty, and something after dive eighty-two.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `N` | `F67730` (+0.28 s) | Year2023 | lead · <Card x={220} y={340} w={700} o={lead(f, wf(206, 'n'), 10)} accent={co |
| `dates` | `F67782` (+1.15 s) | Year2023 | text: DATES TWO EVENTS: |
| `two` | `F67806` (+1.55 s) | Year2023 | text: DATES TWO EVENTS: |
| `dive` | `F67873` (+2.67 s) | Year2023 | <Wd f={f} at={wf(206, 'dive')} lightAt={wf(206, 'eighty')}>— DIVE 80</Wd> |
| `eighty` | `F67896` (+3.05 s) | Year2023 | <Wd f={f} at={wf(206, 'dive')} lightAt={wf(206, 'eighty')}>— DIVE 80</Wd> |
| `something` | `F67950` (+3.95 s) | Year2023 | <Wd f={f} at={wf(206, 'something')} lightAt={wf(206, 'eighty-two')}>— SOMETHING  |
| `eighty-two` | `F68026` (+5.22 s) | Year2023 | <Wd f={f} at={wf(206, 'something')} lightAt={wf(206, 'eighty-two')}>— SOMETHING  |

**207** · Canada's Transportation Safety Board found the cylinder likely failed progressively, with damage accumulating during each dive.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Canada's` | `F68086` (+0.00 s) | Year2023 | lead · <Card x={1000} y={340} w={700} o={lead(f, wf(207, "canada's"), 10)} ac |
| `Transportation` | `F68116` (+0.50 s) | Year2023 | text: TRANSPORTATION SAFETY BOARD |
| `Board` | `F68194` (+1.80 s) | Year2023 | text: TRANSPORTATION SAFETY BOARD |
| `found` | `F68217` (+2.18 s) | Year2023 | text: THE CYLINDER |
| `cylinder` | `F68240` (+2.57 s) | Year2023 | text: THE CYLINDER |
| `likely` | `F68269` (+3.05 s) | Year2023 | text: LIKELY FAILED PROGRESSIVELY |
| `progressively` | `F68319` (+3.88 s) | Year2023 | text: LIKELY FAILED PROGRESSIVELY |
| `damage` | `F68396` (+5.17 s) | Year2023 | text: DAMAGE ACCUMULATING |
| `accumulating` | `F68419` (+5.55 s) | Year2023 | text: DAMAGE ACCUMULATING |
| `each` | `F68499` (+6.88 s) | Year2023 | text: DURING EACH DIVE |
| `dive` | `F68514` (+7.13 s) | Year2023 | text: DURING EACH DIVE |

**208** · On the eighteenth of June, Titan made its first deep dive in eleven months.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `eighteenth` | `F68580` (+0.25 s) | (scene list) | sound effect cue |
| `June` | `F68616` (+0.85 s) | LastDive | DatePill · <DatePill f={f} fps={fps} day={18} month={6} year={2023} dayWord={wf(2 |
| `Titan` | `F68651` (+1.43 s) | LastDive | rollTo · const depth = rollTo(f, [{frame: wf(208, 'titan'), value: 0}, {frame:  |
| `made` | `F68678` (+1.88 s) | LastDive | lead · <div style={{...T(72, {color: depth >= 3350 ? colors.ink : colors.sub, |
| `first` | `F68705` (+2.33 s) | LastDive | text: THE FIRST DEEP DIVE |
| `deep` | `F68729` (+2.73 s) | LastDive | text: THE FIRST DEEP DIVE |
| `eleven` | `F68779` (+3.57 s) | LastDive | text: IN ELEVEN MONTHS |
| `months` | `F68807` (+4.03 s) | LastDive | text: IN ELEVEN MONTHS |

**209** · The N - T - S - B found that the existing delaminations and the later damage likely led to a local buckling failure.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `N` | `F68869` (+0.28 s) | LastDive | text: NTSB: |
| `found` | `F68920` (+1.13 s) | LastDive | text: NTSB: |
| `existing` | `F68951` (+1.65 s) | LastDive | text: THE EXISTING DELAMINATIONS |
| `delaminations` | `F68986` (+2.23 s) | (scene list) | sound effect cue |
| `later` | `F69064` (+3.53 s) | LastDive | text: AND THE LATER DAMAGE |
| `damage` | `F69086` (+3.90 s) | LastDive | text: AND THE LATER DAMAGE |
| `likely` | `F69120` (+4.47 s) | LastDive | text: LIKELY LED TO |
| `led` | `F69146` (+4.90 s) | LastDive | text: LIKELY LED TO |
| `local` | `F69178` (+5.43 s) | LastDive | text: A LOCAL BUCKLING FAILURE |
| `buckling` | `F69206` (+5.90 s) | LastDive | hl= · <RecordPage set="mir" start={sf(209) - 14} end={ef(209) + 20} hl={[{ke |
| `failure` | `F69236` (+6.40 s) | LastDive | text: A LOCAL BUCKLING FAILURE |

**210** · A delamination splits one thick layer into two thinner ones, and thinner layers buckle more easily.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `delamination` | `F69293` (+0.13 s) | LastDive | text: A DELAMINATION SPLITS |
| `splits` | `F69351` (+1.10 s) | (scene list) | sound effect cue |
| `one` | `F69383` (+1.63 s) | LastDive | text: ONE THICK LAYER |
| `layer` | `F69419` (+2.23 s) | LastDive | text: ONE THICK LAYER |
| `into` | `F69443` (+2.63 s) | LastDive | text: INTO TWO THINNER ONES |
| `two` | `F69460` (+2.92 s) | LastDive | text: SPLIT INTO TWO THINNER LAYERS |
| `ones` | `F69506` (+3.68 s) | LastDive | text: INTO TWO THINNER ONES |
| `thinner` | `F69554` (+4.48 s) | LastDive | text: THINNER LAYERS BUCKLE MORE EASILY |
| `buckle` | `F69596` (+5.18 s) | LastDive | text: THINNER LAYERS BUCKLE MORE EASILY |
| `easily` | `F69636` (+5.85 s) | LastDive | const load = span(f, wf(210, 'buckle') - 6, wf(210, 'easily') + 10); |

**211** · In a local buckle, one part of the wall changes shape, and gives way.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `local` | `F69699` (+0.25 s) | LastDive | text: A LOCAL BUCKLE: |
| `buckle` | `F69722` (+0.63 s) | LastDive | text: A LOCAL BUCKLE: |
| `one` | `F69765` (+1.35 s) | LastDive | text: ONE PART OF THE WALL |
| `wall` | `F69808` (+2.07 s) | LastDive | text: ONE PART OF THE WALL |
| `changes` | `F69828` (+2.40 s) | LastDive | text: CHANGES SHAPE, |
| `shape` | `F69860` (+2.93 s) | LastDive | text: CHANGES SHAPE, |
| `gives` | `F69901` (+3.62 s) | LastDive | text: GIVES WAY |
| `way` | `F69919` (+3.92 s) | LastDive | text: GIVES WAY |

**212** · The damage from dive eighty, it found, had reached the forward end of the cylinder: that is where the gauge that showed the change sat.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `damage` | `F69969` (+0.13 s) | LastDive | text: DIVE 80'S DAMAGE |
| `eighty` | `F70026` (+1.08 s) | LastDive | text: DIVE 80'S DAMAGE |
| `reached` | `F70114` (+2.55 s) | LastDive | text: HAD REACHED THE FORWARD END / OF THE CYLINDER · |
| `forward` | `F70145` (+3.07 s) | LastDive | text: FORWARD END |
| `end` | `F70173` (+3.53 s) | LastDive | text: HAD REACHED THE FORWARD END / OF THE CYLINDER · |
| `cylinder` | `F70201` (+4.00 s) | LastDive | text: HAD REACHED THE FORWARD END / OF THE CYLINDER · |
| `where` | `F70279` (+5.30 s) | LastDive | text: HAD REACHED THE FORWARD END / OF THE CYLINDER · |
| `gauge` | `F70298` (+5.62 s) | LastDive | text: WHERE THE GAUGE THAT SHOWED THE CHANGE |
| `change` | `F70354` (+6.55 s) | LastDive | text: WHERE THE GAUGE THAT SHOWED THE CHANGE |
| `sat` | `F70389` (+7.13 s) | LastDive | text: SAT |

**213** · Here is the dive record, from dive seventy-five to eighty-eight, with each dated decision beside the dive it followed.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `dive` | `F70472` (+0.53 s) | Record | text: THE DIVE RECORD · |
| `record` | `F70493` (+0.88 s) | Record | text: THE DIVE RECORD · |
| `seventy-five` | `F70566` (+2.10 s) | (scene list) | sound effect cue |
| `to` | `F70614` (+2.90 s) | Record | <Wd f={f} at={wf(213, 'to')} tone={colors.cyan} bold>→ </Wd> |
| `eighty-eight` | `F70625` (+3.08 s) | Record | text: 88 · |
| `each` | `F70695` (+4.25 s) | Record | text: EACH DATED DECISION |
| `dated` | `F70713` (+4.55 s) | Record | text: WINTER |
| `decision` | `F70736` (+4.93 s) | Record | text: EACH DATED DECISION |
| `beside` | `F70768` (+5.47 s) | Record | text: BESIDE THE DIVE IT FOLLOWED |
| `followed` | `F70830` (+6.50 s) | Record | text: BESIDE THE DIVE IT FOLLOWED |

**214** · Six of these dives reached three thousand eight hundred and forty metres.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Six` | `F70886` (+0.15 s) | Record | lead · <div style={{position: 'absolute', left: 1420, top: 186, width: 330, d |
| `three` | `F70975` (+1.63 s) | Record | text: 0 M · THE WRECK |
| `thousand` | `F70991` (+1.90 s) | Record | text: 0 M · THE WRECK |
| `eight` | `F71023` (+2.43 s) | Record | text: 0 M · THE WRECK |
| `hundred` | `F71032` (+2.58 s) | Record | text: 0 M · THE WRECK |
| `forty` | `F71065` (+3.13 s) | Record | text: 0 M · THE WRECK |

**215** · Thirteen did, in all.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Thirteen` | `F71141` (+0.02 s) | (scene list) | sound effect cue |
| `all` | `F71208` (+1.13 s) | Record | <span style={T(26, {color: colors.ink})}>{f >= wf(215, 'all') ? 'TO 3,840 M · IN |

**216** · Then one line that stops, about five hundred metres short.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `one` | `F71282` (+0.60 s) | Record | lead · <g opacity={lead(f, wf(216, 'one'), 8)}> |
| `line` | `F71294` (+0.80 s) | Record | const d88 = span(f, wf(216, 'line') - 4, wf(216, 'stops') + LAND); |
| `stops` | `F71325` (+1.32 s) | Record | const d88 = span(f, wf(216, 'line') - 4, wf(216, 'stops') + LAND); |
| `five` | `F71393` (+2.45 s) | Record | lead · const gap = lead(f, wf(216, 'five'), 14); |
| `hundred` | `F71413` (+2.78 s) | Record | <text x={xOf(13) - 30} y={yD(3600) + 10} textAnchor="end" style={T(28, lit(f, wf |

**217** · Two things often said about Titan.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Two` | `F71641` (+0.08 s) | Verdict | text: Two things |
| `things` | `F71655` (+0.32 s) | Verdict | text: Two things |
| `often` | `F71680` (+0.73 s) | Verdict | <Wd f={f} at={wf(217, 'often')} lightAt={wf(217, 'said')} base={colors.ink}>ofte |
| `said` | `F71702` (+1.10 s) | Verdict | <Wd f={f} at={wf(217, 'often')} lightAt={wf(217, 'said')} base={colors.ink}>ofte |

**218** · Its controller: on dive eighty-one, the thruster controls were found to be mapped in reverse, and the pilot turned the controller around.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `controller` | `F71800` (+0.20 s) | Verdict | text: THE CONTROLLER · / DIVE 81: |
| `dive` | `F71881` (+1.55 s) | Verdict | text: THE CONTROLLER · / DIVE 81: |
| `eighty-one` | `F71902` (+1.90 s) | Verdict | text: THE CONTROLLER · / DIVE 81: |
| `thruster` | `F71960` (+2.87 s) | Verdict | text: THRUSTER CONTROLS |
| `controls` | `F71987` (+3.32 s) | Verdict | text: THRUSTER CONTROLS |
| `mapped` | `F72059` (+4.52 s) | (scene list) | sound effect cue |
| `reverse` | `F72085` (+4.95 s) | Verdict | text: MAPPED IN REVERSE · |
| `pilot` | `F72155` (+6.12 s) | Verdict | text: THE PILOT TURNED / IT AROUND |
| `turned` | `F72184` (+6.60 s) | (scene list) | sound effect cue |
| `controller` | `F72204` (+6.93 s) | Verdict | text: THE PILOT TURNED / IT AROUND |
| `around` | `F72239` (+7.52 s) | Verdict | text: THE PILOT TURNED / IT AROUND |

**219** · None of the three reports names the controller as a cause.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `None` | `F72311` (+0.07 s) | (scene list) | sound effect cue |
| `three` | `F72338` (+0.52 s) | Verdict | text: NONE OF THE THREE / REPORTS |
| `reports` | `F72352` (+0.75 s) | Verdict | text: NONE OF THE THREE / REPORTS |
| `names` | `F72391` (+1.40 s) | Verdict | text: NAMES THE CONTROLLER / AS A CAUSE |
| `controller` | `F72416` (+1.82 s) | Verdict | text: NAMES THE CONTROLLER / AS A CAUSE |
| `cause` | `F72473` (+2.77 s) | Verdict | text: NAMES THE CONTROLLER / AS A CAUSE |

**220** · Its window: the Coast Guard board criticised it as untested and uncertified, but found it unlikely that the window caused the implosion.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Coast` | `F72621` (+1.28 s) | Verdict | text: THE COAST GUARD BOARD: |
| `board` | `F72656` (+1.87 s) | Verdict | text: THE COAST GUARD BOARD: |
| `criticised` | `F72672` (+2.13 s) | Verdict | hl= · <RecordPage set="roi" start={sf(220) - 14} end={ef(221) + 20} page={28 |
| `untested` | `F72741` (+3.28 s) | Verdict | text: UNTESTED, UNCERTIFIED · |
| `uncertified` | `F72794` (+4.17 s) | Verdict | text: UNTESTED, UNCERTIFIED · |
| `found` | `F72877` (+5.55 s) | Verdict | text: UNLIKELY / THE WINDOW CAUSED |
| `unlikely` | `F72901` (+5.95 s) | (scene list) | sound effect cue |
| `window` | `F72959` (+6.92 s) | Verdict | text: UNLIKELY / THE WINDOW CAUSED |
| `caused` | `F72986` (+7.37 s) | Verdict | text: UNLIKELY / THE WINDOW CAUSED |
| `implosion` | `F73012` (+7.80 s) | Verdict | text: UNLIKELY / THE WINDOW CAUSED |

**221** · All three reports place the failure in the hull.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `All` | `F73082` (+0.03 s) | Verdict | text: ALL THREE / REPORTS: |
| `three` | `F73093` (+0.22 s) | Verdict | text: ALL THREE / REPORTS: |
| `reports` | `F73109` (+0.48 s) | Verdict | text: ALL THREE / REPORTS: |
| `place` | `F73144` (+1.07 s) | Verdict | text: THE FAILURE WAS IN THE HULL |
| `hull` | `F73211` (+2.18 s) | Verdict | text: THE FAILURE WAS IN THE HULL |

**222** · The N - T - S - B's probable cause was OceanGate's inadequate engineering process, which failed to establish the actual strength and durability of the Titan pressure vessel.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `probable` | `F73417` (+1.02 s) | Verdict | text: PROBABLE CAUSE: |
| `cause` | `F73449` (+1.55 s) | Verdict | text: PROBABLE CAUSE: |
| `inadequate` | `F73538` (+3.03 s) | (scene list) | sound effect cue |
| `process` | `F73610` (+4.23 s) | Verdict | text: AN INADEQUATE ENGINEERING PROCESS |
| `failed` | `F73676` (+5.33 s) | Verdict | text: THAT FAILED TO ESTABLISH |
| `establish` | `F73701` (+5.75 s) | Verdict | text: THAT FAILED TO ESTABLISH |
| `actual` | `F73748` (+6.53 s) | Verdict | text: THE ACTUAL STRENGTH AND DURABILITY / OF TITAN'S PRESSURE VESSEL |
| `durability` | `F73813` (+7.62 s) | Verdict | text: THE ACTUAL STRENGTH AND DURABILITY / OF TITAN'S PRESSURE VESSEL |
| `Titan` | `F73878` (+8.70 s) | Verdict | text: THE ACTUAL STRENGTH AND DURABILITY / OF TITAN'S PRESSURE VESSEL |
| `vessel` | `F73921` (+9.42 s) | Verdict | text: THE ACTUAL STRENGTH AND DURABILITY / OF TITAN'S PRESSURE VESSEL |

**223** · Contributing were the guidance and the rules that did not make OceanGate meet the industry's standards, and the company's flawed analysis of its own monitoring data.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Contributing` | `F73969` (+0.00 s) | Verdict | text: CONTRIBUTING: |
| `guidance` | `F74032` (+1.05 s) | Verdict | text: THE GUIDANCE AND THE RULES / THAT DID NOT MAKE OCEANGATE MEET |
| `rules` | `F74080` (+1.85 s) | Verdict | text: THE GUIDANCE AND THE RULES / THAT DID NOT MAKE OCEANGATE MEET |
| `make` | `F74141` (+2.87 s) | Verdict | text: THE GUIDANCE AND THE RULES / THAT DID NOT MAKE OCEANGATE MEET |
| `meet` | `F74195` (+3.77 s) | Verdict | text: THE GUIDANCE AND THE RULES / THAT DID NOT MAKE OCEANGATE MEET |
| `industry's` | `F74218` (+4.15 s) | Verdict | text: THE GUIDANCE AND THE RULES / THAT DID NOT MAKE OCEANGATE MEET |
| `standards` | `F74249` (+4.67 s) | Verdict | text: THE GUIDANCE AND THE RULES / THAT DID NOT MAKE OCEANGATE MEET |
| `company's` | `F74318` (+5.82 s) | Verdict | text: THE COMPANY'S FLAWED / ANALYSIS |
| `flawed` | `F74350` (+6.35 s) | Verdict | text: THE COMPANY'S FLAWED / ANALYSIS |
| `analysis` | `F74373` (+6.73 s) | Verdict | text: THE COMPANY'S FLAWED / ANALYSIS |
| `own` | `F74433` (+7.73 s) | Verdict | text: OF ITS OWN MONITORING DATA |
| `data` | `F74482` (+8.55 s) | Verdict | text: OF ITS OWN MONITORING DATA |

**224** · The Coast Guard's Marine Board called it a preventable tragedy.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Coast` | `F74538` (+0.13 s) | Verdict | text: THE COAST GUARD'S MARINE BOARD: |
| `Marine` | `F74575` (+0.75 s) | Verdict | hl= · <RecordPage set="roi" start={sf(224) - 14} end={ef(224) + 16} hl={[{ke |
| `Board` | `F74599` (+1.15 s) | Verdict | text: THE COAST GUARD'S MARINE BOARD: |
| `preventable` | `F74661` (+2.18 s) | (scene list) | sound effect cue |
| `tragedy` | `F74707` (+2.95 s) | Verdict | <Wd f={f} at={wf(224, 'preventable')} lightAt={wf(224, 'tragedy')} tone={colors. |

**225** · Canada's Transportation Safety Board found that Titan received no oversight from Transport Canada, though it sailed from Saint John's with Canadian ships.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Canada's` | `F74773` (+0.02 s) | Verdict | text: CANADA'S / TRANSPORTATION SAFETY |
| `Transportation` | `F74803` (+0.52 s) | Verdict | text: CANADA'S / TRANSPORTATION SAFETY |
| `Safety` | `F74857` (+1.42 s) | Verdict | text: CANADA'S / TRANSPORTATION SAFETY |
| `Board` | `F74881` (+1.82 s) | Verdict | text: CANADA'S / TRANSPORTATION SAFETY |
| `found` | `F74905` (+2.22 s) | Verdict | text: CANADA'S / TRANSPORTATION SAFETY |
| `Titan` | `F74931` (+2.65 s) | Verdict | text: TITAN RECEIVED |
| `received` | `F74956` (+3.07 s) | Verdict | text: TITAN RECEIVED |
| `no` | `F74987` (+3.58 s) | Verdict | text: NO OVERSIGHT |
| `oversight` | `F75006` (+3.90 s) | Verdict | text: NO OVERSIGHT |
| `from` | `F75039` (+4.45 s) | Verdict | text: FROM TRANSPORT CANADA |
| `Canada` | `F75078` (+5.10 s) | Verdict | text: FROM TRANSPORT CANADA |
| `though` | `F75125` (+5.88 s) | Verdict | text: THOUGH IT SAILED FROM |
| `sailed` | `F75144` (+6.20 s) | Verdict | text: THOUGH IT SAILED FROM |
| `Saint` | `F75179` (+6.78 s) | Verdict | text: ST. JOHN'S |
| `John's` | `F75194` (+7.03 s) | Verdict | text: ST. JOHN'S |
| `Canadian` | `F75230` (+7.63 s) | Verdict | text: WITH CANADIAN SHIPS |
| `ships` | `F75266` (+8.23 s) | Verdict | text: WITH CANADIAN SHIPS |

**226** · The Coast Guard board also wrote this, about Mr.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Coast` | `F75324` (+0.13 s) | Verdict | text: THE COAST GUARD BOARD / ALSO WROTE, |
| `board` | `F75359` (+0.72 s) | Verdict | text: THE COAST GUARD BOARD / ALSO WROTE, |
| `also` | `F75382` (+1.10 s) | Verdict | text: THE COAST GUARD BOARD / ALSO WROTE, |
| `wrote` | `F75402` (+1.43 s) | Verdict | text: THE COAST GUARD BOARD / ALSO WROTE, |
| `about` | `F75454` (+2.30 s) | Verdict | text: ON MR. RUSH: |
| `Mr` | `F75470` (+2.57 s) | Verdict | text: ON MR. RUSH: |

**227** · Rush, who was both the company's chief executive and its pilot.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `both` | `F75544` (+0.23 s) | Verdict | text: CHIEF EXECUTIVE |
| `executive` | `F75610` (+1.33 s) | Verdict | text: CHIEF EXECUTIVE |
| `pilot` | `F75686` (+2.60 s) | Verdict | text: AND PILOT |

**228** · Had he survived the incident, the board would have recommended that the Commandant refer the matter to the Department of Justice, for its consideration on whether to pursue a separate criminal investigation.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Had` | `F75750` (+0.03 s) | Verdict | text: HAD HE SURVIVED: |
| `survived` | `F75771` (+0.38 s) | (scene list) | sound effect cue |
| `incident` | `F75808` (+1.00 s) | Verdict | text: THE BOARD / WOULD HAVE RECOMMENDED |
| `board` | `F75860` (+1.87 s) | Verdict | text: THE BOARD / WOULD HAVE RECOMMENDED |
| `would` | `F75877` (+2.15 s) | Verdict | text: THE BOARD / WOULD HAVE RECOMMENDED |
| `recommended` | `F75894` (+2.43 s) | Verdict | text: THE BOARD / WOULD HAVE RECOMMENDED |
| `Commandant` | `F75946` (+3.30 s) | Verdict | text: THE BOARD / WOULD HAVE RECOMMENDED |
| `refer` | `F75984` (+3.93 s) | Verdict | text: REFER THE MATTER / TO THE DEPARTMENT OF JUSTICE, |
| `Department` | `F76052` (+5.07 s) | Verdict | text: REFER THE MATTER / TO THE DEPARTMENT OF JUSTICE, |
| `Justice` | `F76093` (+5.75 s) | Verdict | text: REFER THE MATTER / TO THE DEPARTMENT OF JUSTICE, |
| `consideration` | `F76163` (+6.92 s) | Verdict | text: TO CONSIDER WHETHER / TO PURSUE A SEPARATE |
| `whether` | `F76224` (+7.93 s) | Verdict | text: TO CONSIDER WHETHER / TO PURSUE A SEPARATE |
| `pursue` | `F76247` (+8.32 s) | Verdict | text: TO CONSIDER WHETHER / TO PURSUE A SEPARATE |
| `separate` | `F76287` (+8.98 s) | Verdict | text: TO CONSIDER WHETHER / TO PURSUE A SEPARATE |
| `criminal` | `F76316` (+9.47 s) | Verdict | text: TO CONSIDER WHETHER / TO PURSUE A SEPARATE |
| `investigation` | `F76341` (+9.88 s) | Verdict | text: TO CONSIDER WHETHER / TO PURSUE A SEPARATE |

**229** · Whether any crime was committed, the board wrote, was for the Justice Department to decide, and that will not happen, because Mr.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Whether` | `F76417` (+0.02 s) | Verdict | text: WHETHER ANY CRIME WAS COMMITTED, / THE BOARD WROTE, |
| `crime` | `F76451` (+0.58 s) | Verdict | hl= · <RecordPage set="roi" start={sf(226) - 14} end={ef(230) + 20} hl={[{ke |
| `committed` | `F76487` (+1.18 s) | Verdict | text: WHETHER ANY CRIME WAS COMMITTED, / THE BOARD WROTE, |
| `board` | `F76552` (+2.27 s) | Verdict | text: WHETHER ANY CRIME WAS COMMITTED, / THE BOARD WROTE, |
| `wrote` | `F76569` (+2.55 s) | Verdict | text: WHETHER ANY CRIME WAS COMMITTED, / THE BOARD WROTE, |
| `Justice` | `F76637` (+3.68 s) | Verdict | text: FOR THE DEPARTMENT OF JUSTICE TO DECIDE · |
| `decide` | `F76706` (+4.83 s) | Verdict | text: FOR THE DEPARTMENT OF JUSTICE TO DECIDE · |
| `will` | `F76791` (+6.25 s) | Verdict | text: THAT WILL NOT HAPPEN, / BECAUSE |
| `happen` | `F76825` (+6.82 s) | Verdict | text: THAT WILL NOT HAPPEN, / BECAUSE |
| `because` | `F76844` (+7.13 s) | Verdict | text: THAT WILL NOT HAPPEN, / BECAUSE |

**230** · Rush died.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Rush` | `F76910` (+0.72 s) | Verdict | text: MR. RUSH DIED |
| `died` | `F76933` (+1.10 s) | Verdict | text: MR. RUSH DIED |

**231** · One more finding concerns the eighteenth of June itself.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `One` | `F77012` (+0.08 s) | Verdict | text: ONE MORE FINDING |
| `finding` | `F77036` (+0.48 s) | Verdict | text: ONE MORE FINDING |
| `concerns` | `F77064` (+0.95 s) | Verdict | text: ONE MORE FINDING |
| `eighteenth` | `F77105` (+1.63 s) | Verdict | DatePill · <DatePill f={f} fps={fps} day={18} month={6} year={2023} dayWord={wf(2 |
| `June` | `F77138` (+2.18 s) | Verdict | DatePill · <DatePill f={f} fps={fps} day={18} month={6} year={2023} dayWord={wf(2 |

**232** · The board found that the company's own communications plan delayed the first call to rescuers by more than seven hours, and that no deep-water rescue vehicle was standing by.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `board` | `F77227` (+0.15 s) | Verdict | text: THE BOARD: |
| `found` | `F77246` (+0.47 s) | Verdict | text: THE BOARD: |
| `company's` | `F77279` (+1.02 s) | Verdict | text: THE COMPANY'S OWN COMMUNICATIONS PLAN |
| `communications` | `F77327` (+1.82 s) | Verdict | text: 10:47 · LAST MESSAGE |
| `plan` | `F77378` (+2.67 s) | Verdict | text: THE COMPANY'S OWN COMMUNICATIONS PLAN |
| `delayed` | `F77402` (+3.07 s) | Verdict | text: DELAYED THE FIRST / CALL |
| `first` | `F77438` (+3.67 s) | Verdict | text: DELAYED THE FIRST / CALL |
| `call` | `F77458` (+4.00 s) | Verdict | text: DELAYED THE FIRST / CALL |
| `rescuers` | `F77480` (+4.37 s) | Verdict | text: DELAYED THE FIRST / CALL |
| `by` | `F77517` (+4.98 s) | Verdict | text: NO DEEP-WATER / RESCUE VEHICLE |
| `more` | `F77529` (+5.18 s) | Verdict | text: BY MORE THAN 7 HOURS · |
| `seven` | `F77557` (+5.65 s) | Verdict | text: FIRST CALL TO RESCUERS: 7+ HOURS |
| `hours` | `F77580` (+6.03 s) | Verdict | text: BY MORE THAN 7 HOURS · |
| `no` | `F77650` (+7.20 s) | Verdict | text: NO DEEP-WATER / RESCUE VEHICLE |
| `deep-water` | `F77667` (+7.48 s) | Verdict | text: NO DEEP-WATER / RESCUE VEHICLE |
| `rescue` | `F77702` (+8.07 s) | Verdict | text: NO DEEP-WATER / RESCUE VEHICLE |
| `vehicle` | `F77723` (+8.42 s) | Verdict | text: NO DEEP-WATER / RESCUE VEHICLE |
| `standing` | `F77759` (+9.02 s) | Verdict | text: NO DEEP-WATER / RESCUE VEHICLE |

**233** · It also found that the implosion caused the immediate loss of all lives on board, before any distress call.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `implosion` | `F77905` (+1.15 s) | Verdict | text: THE IMPLOSION CAUSED |
| `caused` | `F77946` (+1.83 s) | Verdict | text: THE IMPLOSION CAUSED |
| `immediate` | `F77972` (+2.27 s) | (scene list) | sound effect cue |
| `loss` | `F78007` (+2.85 s) | Verdict | text: THE IMMEDIATE LOSS / OF ALL LIVES · |
| `all` | `F78044` (+3.47 s) | Verdict | text: THE IMMEDIATE LOSS / OF ALL LIVES · |
| `lives` | `F78059` (+3.72 s) | Verdict | text: THE IMMEDIATE LOSS / OF ALL LIVES · |
| `before` | `F78124` (+4.80 s) | Verdict | text: BEFORE ANY DISTRESS CALL |
| `call` | `F78204` (+6.13 s) | Verdict | text: BEFORE ANY DISTRESS CALL |

**234** · The N - T - S - B found that search and rescue could not have saved them.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `N` | `F78264` (+0.20 s) | Verdict | text: THE NTSB: |
| `found` | `F78311` (+0.98 s) | Verdict | text: THE NTSB: |
| `search` | `F78337` (+1.42 s) | Verdict | text: SEARCH AND RESCUE |
| `rescue` | `F78364` (+1.87 s) | Verdict | text: SEARCH AND RESCUE |
| `not` | `F78411` (+2.65 s) | (scene list) | sound effect cue |
| `saved` | `F78438` (+3.10 s) | Verdict | text: COULD NOT HAVE SAVED THEM |

**235** · With assets ready, it found, Titan would likely have been found sooner.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `assets` | `F78509` (+0.22 s) | Verdict | text: WITH ASSETS READY, |
| `ready` | `F78535` (+0.65 s) | Verdict | text: WITH ASSETS READY, |
| `Titan` | `F78618` (+2.03 s) | Verdict | text: TITAN / WOULD LIKELY HAVE BEEN FOUND |
| `likely` | `F78659` (+2.72 s) | (scene list) | sound effect cue |
| `found` | `F78704` (+3.47 s) | Verdict | text: TITAN / WOULD LIKELY HAVE BEEN FOUND |
| `sooner` | `F78728` (+3.87 s) | Verdict | text: TITAN / WOULD LIKELY HAVE BEEN FOUND |

**236** · OceanGate suspended its operations in July twenty twenty-three.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `OceanGate` | `F78795` (+0.03 s) | Verdict | text: OCEANGATE SUSPENDED / OPERATIONS · |
| `suspended` | `F78832` (+0.65 s) | Verdict | text: OCEANGATE SUSPENDED / OPERATIONS · |
| `operations` | `F78876` (+1.38 s) | Verdict | text: OCEANGATE SUSPENDED / OPERATIONS · |
| `July` | `F78927` (+2.23 s) | Verdict | text: JUL 2023 |
| `twenty-three` | `F78957` (+2.73 s) | Verdict | text: JUL 2023 |

**237** · When the Coast Guard report came out, a company spokesperson said OceanGate had been wound down, was fully cooperating with the investigation, and offered condolences to the families.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `When` | `F79051` (+0.00 s) | Verdict | text: AUG 2025, WHEN THE COAST GUARD REPORT / CAME OUT · |
| `report` | `F79098` (+0.78 s) | Verdict | text: AUG 2025, WHEN THE COAST GUARD REPORT / CAME OUT · |
| `came` | `F79121` (+1.17 s) | Verdict | text: AUG 2025, WHEN THE COAST GUARD REPORT / CAME OUT · |
| `out` | `F79136` (+1.42 s) | Verdict | text: AUG 2025, WHEN THE COAST GUARD REPORT / CAME OUT · |
| `company` | `F79168` (+1.95 s) | Verdict | text: AUG 2025, WHEN THE COAST GUARD REPORT / CAME OUT · |
| `spokesperson` | `F79193` (+2.37 s) | Verdict | text: AUG 2025, WHEN THE COAST GUARD REPORT / CAME OUT · |
| `said` | `F79241` (+3.17 s) | Verdict | text: AUG 2025, WHEN THE COAST GUARD REPORT / CAME OUT · |
| `wound` | `F79313` (+4.37 s) | Verdict | <Wd f={f} at={wf(237, 'wound')} lightAt={wf(237, 'down')}>— THE COMPANY HAD BEEN |
| `down` | `F79337` (+4.77 s) | Verdict | <Wd f={f} at={wf(237, 'wound')} lightAt={wf(237, 'down')}>— THE COMPANY HAD BEEN |
| `fully` | `F79390` (+5.65 s) | Verdict | <Wd f={f} at={wf(237, 'fully')} lightAt={wf(237, 'investigation')}>— FULLY COOPE |
| `investigation` | `F79458` (+6.78 s) | Verdict | <Wd f={f} at={wf(237, 'fully')} lightAt={wf(237, 'investigation')}>— FULLY COOPE |
| `offered` | `F79538` (+8.12 s) | Verdict | <Wd f={f} at={wf(237, 'offered')} lightAt={wf(237, 'families')}>— CONDOLENCES TO |
| `families` | `F79617` (+9.43 s) | Verdict | <Wd f={f} at={wf(237, 'offered')} lightAt={wf(237, 'families')}>— CONDOLENCES TO |

**238** · What now?

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `What` | `F79700` (+0.03 s) | Verdict | lead · <div style={{position: 'absolute', left: 0, right: 0, top: interpolate |

**239** · The N - T - S - B made four recommendations to the U - S Coast Guard.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `N` | `F79787` (+0.40 s) | Verdict | text: THE NTSB: |
| `made` | `F79846` (+1.38 s) | Verdict | text: THE NTSB: |
| `four` | `F79868` (+1.75 s) | (scene list) | sound effect cue |
| `recommendations` | `F79884` (+2.02 s) | Verdict | text: 4 RECOMMENDATIONS |
| `U` | `F79961` (+3.30 s) | Verdict | text: TO THE U.S. COAST GUARD |
| `Guard` | `F80002` (+3.98 s) | Verdict | text: TO THE U.S. COAST GUARD |

**240** · One: propose that the International Maritime Organization make its guidance for submersibles mandatory.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `One` | `F80059` (+0.15 s) | Verdict | text: M-25-015 / IMO |
| `propose` | `F80101` (+0.85 s) | Verdict | <Wd f={f} at={wf(240, 'propose')} lightAt={wf(240, 'organization')}>(1) VIA THE  |
| `International` | `F80151` (+1.68 s) | Verdict | text: M-25-015 / IMO |
| `Organization` | `F80227` (+2.95 s) | Verdict | <Wd f={f} at={wf(240, 'propose')} lightAt={wf(240, 'organization')}>(1) VIA THE  |
| `make` | `F80274` (+3.73 s) | Verdict | text: M-25-015 / IMO |
| `submersibles` | `F80337` (+4.78 s) | Verdict | text: M-25-015 / IMO |
| `mandatory` | `F80385` (+5.58 s) | Verdict | text: M-25-015 / IMO |

**241** · Two: study pressure vessels that carry people.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Two` | `F80461` (+0.02 s) | Verdict | text: M-25-012 / STUDY |
| `study` | `F80512` (+0.87 s) | Verdict | text: M-25-012 / STUDY |
| `pressure` | `F80536` (+1.27 s) | Verdict | text: M-25-012 / STUDY |
| `carry` | `F80597` (+2.28 s) | Verdict | text: M-25-012 / STUDY |
| `people` | `F80618` (+2.63 s) | Verdict | text: M-25-012 / STUDY |

**242** · Three: write rules for them.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Three` | `F80678` (+0.02 s) | Verdict | text: M-25-013 / WRITE |
| `write` | `F80730` (+0.88 s) | Verdict | text: M-25-013 / WRITE |
| `rules` | `F80752` (+1.25 s) | Verdict | text: M-25-013 / WRITE |
| `them` | `F80783` (+1.77 s) | Verdict | text: M-25-013 / WRITE |

**243** · Four: bring its nineteen ninety-three guidance up to date with the law passed that same year.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Four` | `F80833` (+0.20 s) | Verdict | text: M-25-014 / BRING |
| `bring` | `F80877` (+0.93 s) | Verdict | text: M-25-014 / BRING |
| `nineteen` | `F80904` (+1.38 s) | Verdict | text: M-25-014 / BRING |
| `guidance` | `F80964` (+2.38 s) | Verdict | text: M-25-014 / BRING |
| `date` | `F81020` (+3.32 s) | Verdict | text: M-25-014 / BRING |
| `law` | `F81056` (+3.92 s) | Verdict | text: M-25-014 / BRING |
| `year` | `F81134` (+5.22 s) | Verdict | text: M-25-014 / BRING |

**244** · The Coast Guard agreed to update its guidance, and partly agreed with the rest.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `agreed` | `F81215` (+0.80 s) | Verdict | text: THE COAST GUARD AGREED TO UPDATE / ITS GUIDANCE, |
| `update` | `F81251` (+1.40 s) | Verdict | text: THE COAST GUARD AGREED TO UPDATE / ITS GUIDANCE, |
| `guidance` | `F81285` (+1.97 s) | Verdict | text: THE COAST GUARD AGREED TO UPDATE / ITS GUIDANCE, |
| `partly` | `F81354` (+3.12 s) | Verdict | text: PARTLY AGREED WITH THE REST |
| `rest` | `F81415` (+4.13 s) | Verdict | text: PARTLY AGREED WITH THE REST |

**245** · As of October twenty twenty-six, all four recommendations remain open.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `October` | `F81495` (+0.32 s) | Verdict | text: AS OF OCT 2026: |
| `twenty-six` | `F81545` (+1.15 s) | Verdict | text: AS OF OCT 2026: |
| `all` | `F81618` (+2.37 s) | Verdict | text: ALL FOUR / OPEN · NTSB LETTER, 22 OCT 2026 |
| `four` | `F81636` (+2.67 s) | Verdict | text: ALL FOUR / OPEN · NTSB LETTER, 22 OCT 2026 |
| `recommendations` | `F81653` (+2.95 s) | Verdict | text: ALL FOUR / OPEN · NTSB LETTER, 22 OCT 2026 |
| `remain` | `F81710` (+3.90 s) | Verdict | lead · <span style={{opacity: lead(f, wf(245, 'remain'), 8)}}> |
| `open` | `F81736` (+4.33 s) | (scene list) | sound effect cue |

**246** · On the fifteenth of July, twenty twenty-two, Titan's hull changed, and its own sensors recorded it.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `fifteenth` | `F81824` (+0.25 s) | SignOff | DatePill · <DatePill f={f} fps={fps} day={15} month={7} year={2022} dayWord={wf(2 |
| `July` | `F81860` (+0.85 s) | SignOff | DatePill · <DatePill f={f} fps={fps} day={15} month={7} year={2022} dayWord={wf(2 |
| `twenty-two` | `F81938` (+2.15 s) | SignOff | DatePill · <DatePill f={f} fps={fps} day={15} month={7} year={2022} dayWord={wf(2 |
| `Titan's` | `F81995` (+3.10 s) | SignOff | text: TITAN'S HULL / CHANGED · |
| `hull` | `F82014` (+3.42 s) | SignOff | text: TITAN'S HULL / CHANGED · |
| `changed` | `F82037` (+3.80 s) | (scene list) | sound effect cue |
| `sensors` | `F82122` (+5.22 s) | SignOff | text: ITS OWN SENSORS RECORDED IT |
| `recorded` | `F82150` (+5.68 s) | SignOff | text: ITS OWN SENSORS RECORDED IT |

**247** · Eleven months later, on its first deep dive since, five people were aboard.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Eleven` | `F82232` (+0.02 s) | SignOff | text: ELEVEN MONTHS LATER · |
| `later` | `F82273` (+0.70 s) | SignOff | text: ELEVEN MONTHS LATER · |
| `first` | `F82333` (+1.70 s) | SignOff | text: ITS FIRST DEEP DIVE SINCE · |
| `since` | `F82394` (+2.72 s) | SignOff | text: ITS FIRST DEEP DIVE SINCE · |
| `five` | `F82442` (+3.52 s) | SignOff | text: FIVE PEOPLE ABOARD |
| `aboard` | `F82495` (+4.40 s) | SignOff | text: FIVE PEOPLE ABOARD |

**248** · Stockton Rush.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Stockton` | `F82621` (+0.08 s) | SignOff | text: STOCKTON RUSH |

**249** · Paul-Henri Nargeolet.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Paul-Henri` | `F82728` (+0.00 s) | SignOff | text: PAUL-HENRI NARGEOLET |

**250** · Shahzada Dawood.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Shahzada` | `F82868` (+0.07 s) | SignOff | text: SHAHZADA DAWOOD |

**251** · Suleman Dawood.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Suleman` | `F82984` (+0.10 s) | SignOff | text: SULEMAN DAWOOD |

**252** · Hamish Harding.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Hamish` | `F83094` (+0.02 s) | SignOff | text: HAMISH HARDING |
| `Harding` | `F83119` (+0.43 s) | SignOff | text: 18 JUN 2023 |

