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
| `twenty` | `F65897` (+0.18 s) | Year2023 | text: 2023: |
| `twenty-three` | `F65918` (+0.53 s) | Year2023 | text: 2023: |
| `Titan's` | `F65989` (+1.72 s) | Year2023 | text: THE FIRST / FOUR DIVES |
| `first` | `F66009` (+2.05 s) | Year2023 | text: THE FIRST / FOUR DIVES |
| `four` | `F66034` (+2.47 s) | Year2023 | text: THE FIRST / FOUR DIVES |
| `dives` | `F66051` (+2.75 s) | Year2023 | text: THE FIRST / FOUR DIVES |
| `deeper` | `F66111` (+3.75 s) | Year2023 | text: NO DEEPER THAN 10 M |
| `ten` | `F66147` (+4.35 s) | Year2023 | text: 10 M |
| `metres` | `F66165` (+4.65 s) | Year2023 | text: NO DEEPER THAN 10 M |

**201** · At some point after dive eighty-two, the hull was damaged again.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `some` | `F66235` (+0.23 s) | Year2023 | text: AT SOME POINT / AFTER DIVE 82: |
| `point` | `F66250` (+0.48 s) | Year2023 | text: AT SOME POINT / AFTER DIVE 82: |
| `after` | `F66275` (+0.90 s) | Year2023 | text: AT SOME POINT / AFTER DIVE 82: |
| `eighty-two` | `F66313` (+1.53 s) | Year2023 | text: AT SOME POINT / AFTER DIVE 82: |
| `hull` | `F66379` (+2.63 s) | Year2023 | text: THE HULL, / DAMAGED AGAIN |
| `damaged` | `F66409` (+3.13 s) | (scene list) | sound effect cue |
| `again` | `F66437` (+3.60 s) | Year2023 | text: THE HULL, / DAMAGED AGAIN |

**202** · The N - T - S - B calls that damage of unknown origin.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `N` | `F66502` (+0.30 s) | Year2023 | text: N-T-S-B: |
| `calls` | `F66550` (+1.10 s) | Year2023 | text: N-T-S-B: |
| `unknown` | `F66629` (+2.42 s) | Year2023 | <Wd f={f} at={wf(202, 'unknown')} lightAt={wf(202, 'origin')} tone={colors.ink}  |
| `origin` | `F66664` (+3.00 s) | Year2023 | <Wd f={f} at={wf(202, 'unknown')} lightAt={wf(202, 'origin')} tone={colors.ink}  |

**203** · The Coast Guard board says the damage from dive eighty was likely made worse by the winter outdoors, and points to the towing as well.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Coast` | `F66721` (+0.17 s) | Year2023 | text: COAST GUARD BOARD: |
| `board` | `F66755` (+0.73 s) | Year2023 | text: COAST GUARD BOARD: |
| `damage` | `F66798` (+1.45 s) | Year2023 | text: DIVE 80'S DAMAGE |
| `eighty` | `F66858` (+2.45 s) | Year2023 | text: DIVE 80'S DAMAGE |
| `likely` | `F66898` (+3.12 s) | Year2023 | text: LIKELY MADE WORSE |
| `worse` | `F66939` (+3.80 s) | Year2023 | text: LIKELY MADE WORSE |
| `winter` | `F66981` (+4.50 s) | Year2023 | text: BY THE WINTER OUTDOORS · |
| `outdoors` | `F67003` (+4.87 s) | Year2023 | text: BY THE WINTER OUTDOORS · |
| `points` | `F67063` (+5.87 s) | Year2023 | text: AND THE TOWING |
| `towing` | `F67098` (+6.45 s) | Year2023 | text: AND THE TOWING |

**204** · Did every dive weaken it?

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Did` | `F67184` (+0.03 s) | Year2023 | text: Did every dive |
| `weaken` | `F67241` (+0.98 s) | Year2023 | <Wd f={f} at={wf(204, 'weaken')} tone={colors.amber}>weaken it?</Wd> |

**205** · Here the investigators differ.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `investigators` | `F67338` (+0.63 s) | Year2023 | text: HERE THE INVESTIGATORS DIFFER |
| `differ` | `F67390` (+1.50 s) | (scene list) | sound effect cue |

**206** · The N - T - S - B dates two events: dive eighty, and something after dive eighty-two.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `N` | `F67455` (+0.30 s) | Year2023 | lead · <Card x={220} y={340} w={700} o={lead(f, wf(206, 'n'), 10)} accent={co |
| `dates` | `F67508` (+1.18 s) | Year2023 | text: DATES TWO EVENTS: |
| `two` | `F67532` (+1.58 s) | Year2023 | text: DATES TWO EVENTS: |
| `dive` | `F67598` (+2.68 s) | Year2023 | <Wd f={f} at={wf(206, 'dive')} lightAt={wf(206, 'eighty')}>— DIVE 80</Wd> |
| `eighty` | `F67622` (+3.08 s) | Year2023 | <Wd f={f} at={wf(206, 'dive')} lightAt={wf(206, 'eighty')}>— DIVE 80</Wd> |
| `something` | `F67676` (+3.98 s) | Year2023 | <Wd f={f} at={wf(206, 'something')} lightAt={wf(206, 'eighty-two')}>— SOMETHING  |
| `eighty-two` | `F67752` (+5.25 s) | Year2023 | <Wd f={f} at={wf(206, 'something')} lightAt={wf(206, 'eighty-two')}>— SOMETHING  |

**207** · Canada's Transportation Safety Board found the cylinder likely failed progressively, with damage accumulating during each dive.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Canada's` | `F67812` (+0.03 s) | Year2023 | lead · <Card x={1000} y={340} w={700} o={lead(f, wf(207, "canada's"), 10)} ac |
| `Transportation` | `F67841` (+0.52 s) | Year2023 | text: TRANSPORTATION SAFETY BOARD |
| `Board` | `F67919` (+1.82 s) | Year2023 | text: TRANSPORTATION SAFETY BOARD |
| `found` | `F67942` (+2.20 s) | Year2023 | text: THE CYLINDER |
| `cylinder` | `F67966` (+2.60 s) | Year2023 | text: THE CYLINDER |
| `likely` | `F67995` (+3.08 s) | Year2023 | text: LIKELY FAILED PROGRESSIVELY |
| `progressively` | `F68046` (+3.93 s) | Year2023 | text: LIKELY FAILED PROGRESSIVELY |
| `damage` | `F68123` (+5.22 s) | Year2023 | text: DAMAGE ACCUMULATING |
| `accumulating` | `F68145` (+5.58 s) | Year2023 | text: DAMAGE ACCUMULATING |
| `each` | `F68224` (+6.90 s) | Year2023 | text: DURING EACH DIVE |
| `dive` | `F68239` (+7.15 s) | Year2023 | text: DURING EACH DIVE |

**208** · On the eighteenth of June, Titan made its first deep dive in eleven months.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `eighteenth` | `F68306` (+0.28 s) | (scene list) | sound effect cue |
| `June` | `F68342` (+0.88 s) | LastDive | DatePill · <DatePill f={f} fps={fps} day={18} month={6} year={2023} dayWord={wf(2 |
| `Titan` | `F68377` (+1.47 s) | LastDive | rollTo · const depth = rollTo(f, [{frame: wf(208, 'titan'), value: 0}, {frame:  |
| `made` | `F68403` (+1.90 s) | LastDive | lead · <div style={{...T(72, {color: colors.ink, fontWeight: 700}), opacity:  |
| `first` | `F68431` (+2.37 s) | LastDive | text: THE FIRST DEEP DIVE |
| `deep` | `F68455` (+2.77 s) | LastDive | text: THE FIRST DEEP DIVE |
| `eleven` | `F68504` (+3.58 s) | LastDive | text: IN ELEVEN MONTHS |
| `months` | `F68532` (+4.05 s) | LastDive | text: IN ELEVEN MONTHS |

**209** · The N - T - S - B found that the existing delaminations and the later damage likely led to a local buckling failure.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `N` | `F68594` (+0.30 s) | LastDive | text: N-T-S-B: |
| `found` | `F68646` (+1.17 s) | LastDive | text: N-T-S-B: |
| `existing` | `F68677` (+1.68 s) | LastDive | text: THE EXISTING DELAMINATIONS |
| `delaminations` | `F68712` (+2.27 s) | (scene list) | sound effect cue |
| `later` | `F68790` (+3.57 s) | LastDive | text: AND THE LATER DAMAGE |
| `damage` | `F68811` (+3.92 s) | LastDive | text: AND THE LATER DAMAGE |
| `likely` | `F68847` (+4.52 s) | LastDive | text: LIKELY LED TO |
| `led` | `F68871` (+4.92 s) | LastDive | text: LIKELY LED TO |
| `local` | `F68904` (+5.47 s) | LastDive | text: A LOCAL BUCKLING FAILURE |
| `failure` | `F68961` (+6.42 s) | LastDive | text: A LOCAL BUCKLING FAILURE |

**210** · A delamination splits one thick layer into two thinner ones, and thinner layers buckle more easily.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `delamination` | `F69019` (+0.18 s) | LastDive | text: A DELAMINATION SPLITS |
| `splits` | `F69076` (+1.13 s) | (scene list) | sound effect cue |
| `one` | `F69109` (+1.68 s) | LastDive | text: ONE THICK LAYER |
| `layer` | `F69145` (+2.28 s) | LastDive | text: ONE THICK LAYER |
| `into` | `F69168` (+2.67 s) | LastDive | text: INTO TWO THINNER ONES |
| `two` | `F69185` (+2.95 s) | LastDive | text: SPLIT INTO TWO THINNER LAYERS |
| `ones` | `F69232` (+3.73 s) | LastDive | text: INTO TWO THINNER ONES |
| `thinner` | `F69280` (+4.53 s) | LastDive | text: THINNER LAYERS BUCKLE MORE EASILY |
| `buckle` | `F69322` (+5.23 s) | LastDive | text: THINNER LAYERS BUCKLE MORE EASILY |
| `easily` | `F69361` (+5.88 s) | LastDive | const load = span(f, wf(210, 'buckle') - 6, wf(210, 'easily') + 10); |

**211** · In a local buckle, one part of the wall changes shape, and gives way.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `local` | `F69425` (+0.28 s) | LastDive | text: A LOCAL BUCKLE: |
| `buckle` | `F69448` (+0.67 s) | LastDive | text: A LOCAL BUCKLE: |
| `one` | `F69491` (+1.38 s) | LastDive | text: ONE PART OF THE WALL |
| `wall` | `F69535` (+2.12 s) | LastDive | text: ONE PART OF THE WALL |
| `changes` | `F69554` (+2.43 s) | LastDive | text: CHANGES SHAPE, |
| `shape` | `F69585` (+2.95 s) | LastDive | text: CHANGES SHAPE, |
| `gives` | `F69627` (+3.65 s) | LastDive | text: GIVES WAY |
| `way` | `F69645` (+3.95 s) | LastDive | text: GIVES WAY |

**212** · The damage from dive eighty, it found, had reached the forward end of the cylinder: that is where the gauge that showed the change sat.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `damage` | `F69695` (+0.18 s) | LastDive | text: DIVE 80'S DAMAGE |
| `eighty` | `F69752` (+1.13 s) | LastDive | text: DIVE 80'S DAMAGE |
| `reached` | `F69841` (+2.62 s) | LastDive | text: HAD REACHED THE FORWARD END / OF THE CYLINDER · |
| `forward` | `F69871` (+3.12 s) | LastDive | text: FORWARD END |
| `end` | `F69900` (+3.60 s) | LastDive | text: HAD REACHED THE FORWARD END / OF THE CYLINDER · |
| `cylinder` | `F69927` (+4.05 s) | LastDive | text: HAD REACHED THE FORWARD END / OF THE CYLINDER · |
| `where` | `F70005` (+5.35 s) | LastDive | text: HAD REACHED THE FORWARD END / OF THE CYLINDER · |
| `gauge` | `F70025` (+5.68 s) | LastDive | text: WHERE THE GAUGE THAT SHOWED THE CHANGE |
| `change` | `F70080` (+6.60 s) | LastDive | text: WHERE THE GAUGE THAT SHOWED THE CHANGE |
| `sat` | `F70114` (+7.17 s) | LastDive | text: SAT |

**213** · Here is the dive record, from dive seventy-five to eighty-eight, with each dated decision beside the dive it followed.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `dive` | `F70198` (+0.58 s) | Record | text: THE DIVE RECORD · |
| `record` | `F70219` (+0.93 s) | Record | text: THE DIVE RECORD · |
| `seventy-five` | `F70289` (+2.10 s) | (scene list) | sound effect cue |
| `to` | `F70339` (+2.93 s) | Record | <Wd f={f} at={wf(213, 'to')} tone={colors.cyan} bold>→ </Wd> |
| `eighty-eight` | `F70351` (+3.13 s) | Record | text: 88 · |
| `each` | `F70420` (+4.28 s) | Record | text: EACH DATED DECISION |
| `dated` | `F70439` (+4.60 s) | Record | text: WINTER |
| `decision` | `F70462` (+4.98 s) | Record | text: EACH DATED DECISION |
| `beside` | `F70493` (+5.50 s) | Record | text: BESIDE THE DIVE IT FOLLOWED |
| `followed` | `F70556` (+6.55 s) | Record | text: BESIDE THE DIVE IT FOLLOWED |

**214** · Six of these dives reached three thousand eight hundred and forty metres.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Six` | `F70612` (+0.18 s) | Record | lead · <div style={{position: 'absolute', left: 1420, top: 186, width: 330, d |
| `three` | `F70700` (+1.65 s) | Record | text: 0 M · THE WRECK |
| `thousand` | `F70717` (+1.93 s) | Record | text: 0 M · THE WRECK |
| `eight` | `F70748` (+2.45 s) | Record | text: 0 M · THE WRECK |
| `hundred` | `F70763` (+2.70 s) | Record | text: 0 M · THE WRECK |
| `forty` | `F70790` (+3.15 s) | Record | text: 0 M · THE WRECK |

**215** · Thirteen did, in all.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Thirteen` | `F70868` (+0.07 s) | (scene list) | sound effect cue |
| `all` | `F70935` (+1.18 s) | Record | <span style={T(26, {color: colors.ink})}>{f >= wf(215, 'all') ? 'TO 3,840 M · IN |

**216** · Then one line that stops, about five hundred metres short.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `one` | `F71009` (+0.65 s) | Record | lead · <g opacity={lead(f, wf(216, 'one'), 8)}> |
| `line` | `F71021` (+0.85 s) | Record | const d88 = span(f, wf(216, 'line') - 4, wf(216, 'stops') + LAND); |
| `stops` | `F71050` (+1.33 s) | Record | const d88 = span(f, wf(216, 'line') - 4, wf(216, 'stops') + LAND); |
| `five` | `F71120` (+2.50 s) | Record | lead · const gap = lead(f, wf(216, 'five'), 14); |
| `hundred` | `F71138` (+2.80 s) | Record | <text x={xOf(13) + 56} y={yD(3600) + 10} style={T(28, lit(f, wf(216, 'hundred'), |

**217** · Two things often said about Titan.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Two` | `F71366` (+0.10 s) | Verdict | text: TWO THINGS |
| `things` | `F71381` (+0.35 s) | Verdict | text: TWO THINGS |
| `often` | `F71405` (+0.75 s) | Verdict | text: OFTEN SAID ABOUT TITAN |
| `said` | `F71427` (+1.12 s) | Verdict | text: OFTEN SAID ABOUT TITAN |

**218** · Its controller: on dive eighty-one, the thruster controls were found to be mapped in reverse, and the pilot turned the controller around.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `controller` | `F71527` (+0.25 s) | Verdict | lead · <Card x={200} y={260} w={720} o={lead(f, wf(218, 'controller'), 10)} a |
| `dive` | `F71606` (+1.57 s) | Verdict | text: DIVE 81: |
| `eighty-one` | `F71629` (+1.95 s) | Verdict | text: DIVE 81: |
| `thruster` | `F71686` (+2.90 s) | Verdict | text: THRUSTER CONTROLS |
| `controls` | `F71712` (+3.33 s) | Verdict | text: THRUSTER CONTROLS |
| `mapped` | `F71784` (+4.53 s) | Verdict | text: MAPPED IN REVERSE · |
| `reverse` | `F71811` (+4.98 s) | Verdict | text: MAPPED IN REVERSE · |
| `pilot` | `F71880` (+6.13 s) | Verdict | text: THE PILOT TURNED IT AROUND |
| `around` | `F71965` (+7.55 s) | Verdict | text: THE PILOT TURNED IT AROUND |

**219** · None of the three reports names the controller as a cause.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `None` | `F72037` (+0.10 s) | (scene list) | sound effect cue |
| `three` | `F72063` (+0.53 s) | Verdict | text: NONE OF THE THREE / REPORTS |
| `reports` | `F72078` (+0.78 s) | Verdict | text: NONE OF THE THREE / REPORTS |
| `names` | `F72117` (+1.43 s) | Verdict | text: NAMES IT AS A CAUSE |
| `cause` | `F72199` (+2.80 s) | Verdict | text: NAMES IT AS A CAUSE |

**220** · Its window: the Coast Guard board criticised it as untested and uncertified, but found it unlikely that the window caused the implosion.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `window` | `F72284` (+0.27 s) | Verdict | lead · <Card x={1000} y={260} w={720} o={lead(f, wf(220, 'window'), 10)} acce |
| `Coast` | `F72347` (+1.32 s) | Verdict | text: COAST GUARD BOARD: |
| `board` | `F72381` (+1.88 s) | Verdict | text: COAST GUARD BOARD: |
| `untested` | `F72466` (+3.30 s) | Verdict | text: UNTESTED, UNCERTIFIED · |
| `uncertified` | `F72520` (+4.20 s) | Verdict | text: UNTESTED, UNCERTIFIED · |
| `found` | `F72602` (+5.57 s) | Verdict | text: FOUND IT UNLIKELY / THE WINDOW CAUSED |
| `unlikely` | `F72626` (+5.97 s) | Verdict | text: FOUND IT UNLIKELY / THE WINDOW CAUSED |
| `window` | `F72685` (+6.95 s) | Verdict | text: FOUND IT UNLIKELY / THE WINDOW CAUSED |
| `caused` | `F72711` (+7.38 s) | Verdict | text: FOUND IT UNLIKELY / THE WINDOW CAUSED |
| `implosion` | `F72738` (+7.83 s) | Verdict | text: FOUND IT UNLIKELY / THE WINDOW CAUSED |

**221** · All three reports place the failure in the hull.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `All` | `F72808` (+0.07 s) | Verdict | text: ALL THREE / REPORTS: |
| `three` | `F72818` (+0.23 s) | Verdict | text: ALL THREE / REPORTS: |
| `reports` | `F72835` (+0.52 s) | Verdict | text: ALL THREE / REPORTS: |
| `place` | `F72869` (+1.08 s) | Verdict | text: THE FAILURE WAS IN THE HULL |
| `hull` | `F72938` (+2.23 s) | Verdict | text: THE FAILURE WAS IN THE HULL |

**222** · The N - T - S - B's probable cause was OceanGate's inadequate engineering process, which failed to establish the actual strength and durability of the Titan pressure vessel.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `probable` | `F73144` (+1.07 s) | Verdict | text: PROBABLE CAUSE: |
| `cause` | `F73175` (+1.58 s) | Verdict | text: PROBABLE CAUSE: |
| `inadequate` | `F73263` (+3.05 s) | (scene list) | sound effect cue |
| `process` | `F73336` (+4.27 s) | Verdict | text: AN INADEQUATE ENGINEERING PROCESS |
| `failed` | `F73402` (+5.37 s) | Verdict | text: THAT FAILED TO ESTABLISH |
| `establish` | `F73427` (+5.78 s) | Verdict | text: THAT FAILED TO ESTABLISH |
| `actual` | `F73474` (+6.57 s) | Verdict | text: THE ACTUAL STRENGTH AND DURABILITY / OF TITAN'S PRESSURE VESSEL |
| `durability` | `F73539` (+7.65 s) | Verdict | text: THE ACTUAL STRENGTH AND DURABILITY / OF TITAN'S PRESSURE VESSEL |
| `Titan` | `F73603` (+8.72 s) | Verdict | text: THE ACTUAL STRENGTH AND DURABILITY / OF TITAN'S PRESSURE VESSEL |
| `vessel` | `F73647` (+9.45 s) | Verdict | text: THE ACTUAL STRENGTH AND DURABILITY / OF TITAN'S PRESSURE VESSEL |

**223** · Contributing were the guidance and the rules that did not make OceanGate meet the industry's standards, and the company's flawed analysis of its own monitoring data.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Contributing` | `F73695` (+0.03 s) | Verdict | text: CONTRIBUTING: |
| `guidance` | `F73758` (+1.08 s) | Verdict | text: THE GUIDANCE AND THE RULES / THAT DID NOT MAKE OCEANGATE MEET |
| `rules` | `F73805` (+1.87 s) | Verdict | text: THE GUIDANCE AND THE RULES / THAT DID NOT MAKE OCEANGATE MEET |
| `make` | `F73867` (+2.90 s) | Verdict | text: THE GUIDANCE AND THE RULES / THAT DID NOT MAKE OCEANGATE MEET |
| `meet` | `F73921` (+3.80 s) | Verdict | text: THE GUIDANCE AND THE RULES / THAT DID NOT MAKE OCEANGATE MEET |
| `industry's` | `F73944` (+4.18 s) | Verdict | text: THE GUIDANCE AND THE RULES / THAT DID NOT MAKE OCEANGATE MEET |
| `standards` | `F73975` (+4.70 s) | Verdict | text: THE GUIDANCE AND THE RULES / THAT DID NOT MAKE OCEANGATE MEET |
| `company's` | `F74043` (+5.83 s) | Verdict | text: THE COMPANY'S FLAWED / ANALYSIS |
| `flawed` | `F74076` (+6.38 s) | Verdict | text: THE COMPANY'S FLAWED / ANALYSIS |
| `analysis` | `F74098` (+6.75 s) | Verdict | text: THE COMPANY'S FLAWED / ANALYSIS |
| `own` | `F74159` (+7.77 s) | Verdict | text: OF ITS OWN MONITORING DATA |
| `data` | `F74207` (+8.57 s) | Verdict | text: OF ITS OWN MONITORING DATA |

**224** · The Coast Guard's Marine Board called it a preventable tragedy.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Coast` | `F74264` (+0.17 s) | Verdict | text: THE COAST GUARD'S MARINE BOARD: |
| `Marine` | `F74300` (+0.77 s) | Verdict | hl= · <RecordPage set="roi" start={sf(224) - 14} end={ef(224) + 16} hl={[{ke |
| `Board` | `F74325` (+1.18 s) | Verdict | text: THE COAST GUARD'S MARINE BOARD: |
| `preventable` | `F74387` (+2.22 s) | (scene list) | sound effect cue |
| `tragedy` | `F74433` (+2.98 s) | Verdict | <Wd f={f} at={wf(224, 'preventable')} lightAt={wf(224, 'tragedy')} tone={colors. |

**225** · Canada's Transportation Safety Board found that Titan received no oversight from Transport Canada, though it sailed from Saint John's with Canadian ships.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Canada's` | `F74498` (+0.03 s) | Verdict | text: CANADA'S / TRANSPORTATION SAFETY |
| `Transportation` | `F74529` (+0.55 s) | Verdict | text: CANADA'S / TRANSPORTATION SAFETY |
| `Safety` | `F74583` (+1.45 s) | Verdict | text: CANADA'S / TRANSPORTATION SAFETY |
| `Board` | `F74606` (+1.83 s) | Verdict | text: CANADA'S / TRANSPORTATION SAFETY |
| `found` | `F74632` (+2.27 s) | Verdict | text: CANADA'S / TRANSPORTATION SAFETY |
| `Titan` | `F74657` (+2.68 s) | Verdict | text: TITAN RECEIVED |
| `received` | `F74681` (+3.08 s) | Verdict | text: TITAN RECEIVED |
| `no` | `F74712` (+3.60 s) | Verdict | text: NO OVERSIGHT |
| `oversight` | `F74731` (+3.92 s) | Verdict | text: NO OVERSIGHT |
| `from` | `F74764` (+4.47 s) | Verdict | text: FROM TRANSPORT CANADA |
| `Canada` | `F74805` (+5.15 s) | Verdict | text: FROM TRANSPORT CANADA |
| `though` | `F74851` (+5.92 s) | Verdict | text: THOUGH IT SAILED FROM |
| `sailed` | `F74871` (+6.25 s) | Verdict | text: THOUGH IT SAILED FROM |
| `Saint` | `F74906` (+6.83 s) | Verdict | text: ST. JOHN'S |
| `John's` | `F74920` (+7.07 s) | Verdict | text: ST. JOHN'S |
| `Canadian` | `F74955` (+7.65 s) | Verdict | text: WITH CANADIAN SHIPS |
| `ships` | `F74991` (+8.25 s) | Verdict | text: WITH CANADIAN SHIPS |

**226** · The Coast Guard board also wrote this, about Mr.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Coast` | `F75050` (+0.17 s) | Verdict | text: THE COAST GUARD BOARD / ALSO WROTE, |
| `board` | `F75084` (+0.73 s) | Verdict | text: THE COAST GUARD BOARD / ALSO WROTE, |
| `also` | `F75107` (+1.12 s) | Verdict | text: THE COAST GUARD BOARD / ALSO WROTE, |
| `wrote` | `F75128` (+1.47 s) | Verdict | text: THE COAST GUARD BOARD / ALSO WROTE, |
| `about` | `F75180` (+2.33 s) | Verdict | text: ON MR. RUSH: |
| `Mr` | `F75196` (+2.60 s) | Verdict | text: ON MR. RUSH: |

**227** · Rush, who was both the company's chief executive and its pilot.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `both` | `F75269` (+0.27 s) | Verdict | text: CHIEF EXECUTIVE |
| `executive` | `F75335` (+1.37 s) | Verdict | text: CHIEF EXECUTIVE |
| `pilot` | `F75412` (+2.65 s) | Verdict | text: AND PILOT |

**228** · Had he survived the incident, the board would have recommended that the Commandant refer the matter to the Department of Justice, for its consideration on whether to pursue a separate criminal investigation.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Had` | `F75475` (+0.05 s) | Verdict | text: HAD HE SURVIVED: |
| `survived` | `F75497` (+0.42 s) | (scene list) | sound effect cue |
| `incident` | `F75534` (+1.03 s) | Verdict | text: THE BOARD / WOULD HAVE RECOMMENDED |
| `board` | `F75586` (+1.90 s) | Verdict | text: THE BOARD / WOULD HAVE RECOMMENDED |
| `would` | `F75603` (+2.18 s) | Verdict | text: THE BOARD / WOULD HAVE RECOMMENDED |
| `recommended` | `F75620` (+2.47 s) | Verdict | text: THE BOARD / WOULD HAVE RECOMMENDED |
| `Commandant` | `F75671` (+3.32 s) | Verdict | text: THE BOARD / WOULD HAVE RECOMMENDED |
| `refer` | `F75710` (+3.97 s) | Verdict | text: REFER THE MATTER / TO THE DEPARTMENT OF JUSTICE, |
| `Department` | `F75777` (+5.08 s) | Verdict | text: REFER THE MATTER / TO THE DEPARTMENT OF JUSTICE, |
| `Justice` | `F75819` (+5.78 s) | Verdict | text: REFER THE MATTER / TO THE DEPARTMENT OF JUSTICE, |
| `consideration` | `F75889` (+6.95 s) | Verdict | text: TO CONSIDER WHETHER / TO PURSUE A SEPARATE |
| `whether` | `F75949` (+7.95 s) | Verdict | text: TO CONSIDER WHETHER / TO PURSUE A SEPARATE |
| `pursue` | `F75973` (+8.35 s) | Verdict | text: TO CONSIDER WHETHER / TO PURSUE A SEPARATE |
| `separate` | `F76013` (+9.02 s) | Verdict | text: TO CONSIDER WHETHER / TO PURSUE A SEPARATE |
| `criminal` | `F76041` (+9.48 s) | Verdict | text: TO CONSIDER WHETHER / TO PURSUE A SEPARATE |
| `investigation` | `F76066` (+9.90 s) | Verdict | text: TO CONSIDER WHETHER / TO PURSUE A SEPARATE |

**229** · That investigation, the board noted, will not occur, because Mr.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `investigation` | `F76156` (+0.25 s) | Verdict | text: THAT INVESTIGATION, THE BOARD NOTED, |
| `noted` | `F76238` (+1.62 s) | Verdict | text: THAT INVESTIGATION, THE BOARD NOTED, |
| `will` | `F76279` (+2.30 s) | Verdict | text: WILL NOT OCCUR · |
| `occur` | `F76307` (+2.77 s) | Verdict | text: WILL NOT OCCUR · |

**230** · Rush died.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Rush` | `F76394` (+0.68 s) | Verdict | text: MR. RUSH DIED |
| `died` | `F76414` (+1.02 s) | Verdict | text: MR. RUSH DIED |

**231** · One more finding concerns the eighteenth of June itself.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `One` | `F76492` (+0.13 s) | Verdict | text: ONE MORE FINDING |
| `finding` | `F76516` (+0.53 s) | Verdict | text: ONE MORE FINDING |
| `concerns` | `F76544` (+1.00 s) | Verdict | text: ONE MORE FINDING |
| `eighteenth` | `F76585` (+1.68 s) | Verdict | DatePill · <DatePill f={f} fps={fps} day={18} month={6} year={2023} dayWord={wf(2 |
| `June` | `F76617` (+2.22 s) | Verdict | DatePill · <DatePill f={f} fps={fps} day={18} month={6} year={2023} dayWord={wf(2 |

**232** · The board found that the company's own communications plan delayed the first call to rescuers by more than seven hours, and that no deep-water rescue vehicle was standing by.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `board` | `F76705` (+0.15 s) | Verdict | text: THE BOARD: |
| `found` | `F76725` (+0.48 s) | Verdict | text: THE BOARD: |
| `company's` | `F76758` (+1.03 s) | Verdict | text: THE COMPANY'S OWN COMMUNICATIONS PLAN |
| `communications` | `F76805` (+1.82 s) | Verdict | text: 10:47 · LAST MESSAGE |
| `plan` | `F76858` (+2.70 s) | Verdict | text: THE COMPANY'S OWN COMMUNICATIONS PLAN |
| `delayed` | `F76881` (+3.08 s) | Verdict | text: DELAYED THE FIRST / CALL |
| `first` | `F76917` (+3.68 s) | Verdict | text: DELAYED THE FIRST / CALL |
| `call` | `F76937` (+4.02 s) | Verdict | text: DELAYED THE FIRST / CALL |
| `rescuers` | `F76960` (+4.40 s) | Verdict | text: DELAYED THE FIRST / CALL |
| `by` | `F76996` (+5.00 s) | Verdict | text: NO DEEP-WATER / RESCUE VEHICLE |
| `more` | `F77007` (+5.18 s) | Verdict | text: BY MORE THAN 7 HOURS · |
| `seven` | `F77036` (+5.67 s) | Verdict | text: FIRST CALL TO RESCUERS: 7+ HOURS |
| `hours` | `F77059` (+6.05 s) | Verdict | text: BY MORE THAN 7 HOURS · |
| `no` | `F77130` (+7.23 s) | Verdict | text: NO DEEP-WATER / RESCUE VEHICLE |
| `deep-water` | `F77146` (+7.50 s) | Verdict | text: NO DEEP-WATER / RESCUE VEHICLE |
| `rescue` | `F77180` (+8.07 s) | Verdict | text: NO DEEP-WATER / RESCUE VEHICLE |
| `vehicle` | `F77203` (+8.45 s) | Verdict | text: NO DEEP-WATER / RESCUE VEHICLE |
| `standing` | `F77239` (+9.05 s) | Verdict | text: NO DEEP-WATER / RESCUE VEHICLE |

**233** · It also found that the implosion caused the immediate loss of all lives on board, before any distress call.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `implosion` | `F77383` (+1.15 s) | Verdict | text: THE IMPLOSION CAUSED |
| `caused` | `F77425` (+1.85 s) | Verdict | text: THE IMPLOSION CAUSED |
| `immediate` | `F77452` (+2.30 s) | Verdict | text: THE IMMEDIATE LOSS / OF ALL LIVES |
| `loss` | `F77487` (+2.88 s) | Verdict | text: THE IMMEDIATE LOSS / OF ALL LIVES |
| `all` | `F77524` (+3.50 s) | Verdict | text: THE IMMEDIATE LOSS / OF ALL LIVES |
| `lives` | `F77538` (+3.73 s) | Verdict | text: THE IMMEDIATE LOSS / OF ALL LIVES |
| `on` | `F77560` (+4.10 s) | Verdict | text: THE IMMEDIATE LOSS / OF ALL LIVES |
| `board` | `F77571` (+4.28 s) | Verdict | text: THE IMMEDIATE LOSS / OF ALL LIVES |
| `before` | `F77602` (+4.80 s) | Verdict | text: BEFORE ANY DISTRESS CALL |
| `call` | `F77684` (+6.17 s) | Verdict | text: BEFORE ANY DISTRESS CALL |

**234** · The N - T - S - B found that search and rescue could not have saved them.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `N` | `F77743` (+0.23 s) | Verdict | text: N-T-S-B: |
| `found` | `F77789` (+1.00 s) | Verdict | text: N-T-S-B: |
| `search` | `F77817` (+1.47 s) | Verdict | text: SEARCH AND RESCUE |
| `rescue` | `F77843` (+1.90 s) | Verdict | text: SEARCH AND RESCUE |
| `not` | `F77889` (+2.67 s) | Verdict | text: COULD NOT HAVE SAVED THEM · |
| `saved` | `F77917` (+3.13 s) | Verdict | text: COULD NOT HAVE SAVED THEM · |

**235** · With assets ready, it found, Titan would likely have been found sooner.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `assets` | `F77988` (+0.23 s) | Verdict | text: WITH ASSETS READY, |
| `ready` | `F78015` (+0.68 s) | Verdict | text: WITH ASSETS READY, |
| `Titan` | `F78098` (+2.07 s) | Verdict | text: TITAN / LIKELY FOUND |
| `likely` | `F78139` (+2.75 s) | Verdict | text: TITAN / LIKELY FOUND |
| `found` | `F78182` (+3.47 s) | Verdict | text: TITAN / LIKELY FOUND |
| `sooner` | `F78206` (+3.87 s) | Verdict | text: TITAN / LIKELY FOUND |

**236** · OceanGate suspended its operations in July twenty twenty-three.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `OceanGate` | `F78275` (+0.08 s) | Verdict | text: OCEANGATE SUSPENDED / OPERATIONS · |
| `suspended` | `F78311` (+0.68 s) | Verdict | text: OCEANGATE SUSPENDED / OPERATIONS · |
| `operations` | `F78356` (+1.43 s) | Verdict | text: OCEANGATE SUSPENDED / OPERATIONS · |
| `July` | `F78407` (+2.28 s) | Verdict | text: JUL 2023 |
| `twenty-three` | `F78436` (+2.77 s) | Verdict | text: JUL 2023 |

**237** · When the Coast Guard report came out, a company spokesperson said OceanGate had been wound down, was fully cooperating with the investigation, and offered condolences to the families.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `When` | `F78530` (+0.03 s) | Verdict | text: AUG 2025, WHEN THE COAST GUARD REPORT / CAME OUT · |
| `report` | `F78578` (+0.83 s) | Verdict | text: AUG 2025, WHEN THE COAST GUARD REPORT / CAME OUT · |
| `came` | `F78600` (+1.20 s) | Verdict | text: AUG 2025, WHEN THE COAST GUARD REPORT / CAME OUT · |
| `out` | `F78616` (+1.47 s) | Verdict | text: AUG 2025, WHEN THE COAST GUARD REPORT / CAME OUT · |
| `company` | `F78646` (+1.97 s) | Verdict | text: AUG 2025, WHEN THE COAST GUARD REPORT / CAME OUT · |
| `spokesperson` | `F78671` (+2.38 s) | Verdict | text: AUG 2025, WHEN THE COAST GUARD REPORT / CAME OUT · |
| `said` | `F78719` (+3.18 s) | Verdict | text: AUG 2025, WHEN THE COAST GUARD REPORT / CAME OUT · |
| `wound` | `F78793` (+4.42 s) | Verdict | <Wd f={f} at={wf(237, 'wound')} lightAt={wf(237, 'down')}>— THE COMPANY HAD BEEN |
| `down` | `F78815` (+4.78 s) | Verdict | <Wd f={f} at={wf(237, 'wound')} lightAt={wf(237, 'down')}>— THE COMPANY HAD BEEN |
| `fully` | `F78869` (+5.68 s) | Verdict | <Wd f={f} at={wf(237, 'fully')} lightAt={wf(237, 'investigation')}>— FULLY COOPE |
| `investigation` | `F78938` (+6.83 s) | Verdict | <Wd f={f} at={wf(237, 'fully')} lightAt={wf(237, 'investigation')}>— FULLY COOPE |
| `offered` | `F79017` (+8.15 s) | Verdict | <Wd f={f} at={wf(237, 'offered')} lightAt={wf(237, 'families')}>— CONDOLENCES TO |
| `families` | `F79095` (+9.45 s) | Verdict | <Wd f={f} at={wf(237, 'offered')} lightAt={wf(237, 'families')}>— CONDOLENCES TO |

**238** · What now?

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `What` | `F79180` (+0.07 s) | Verdict | lead · <div style={{position: 'absolute', left: 0, right: 0, top: 140, textAl |

**239** · The N - T - S - B made four recommendations to the U - S Coast Guard.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `N` | `F79267` (+0.45 s) | Verdict | text: THE N-T-S-B: |
| `made` | `F79326` (+1.43 s) | Verdict | text: THE N-T-S-B: |
| `four` | `F79346` (+1.77 s) | (scene list) | sound effect cue |
| `recommendations` | `F79363` (+2.05 s) | Verdict | text: 4 RECOMMENDATIONS |
| `U` | `F79441` (+3.35 s) | Verdict | text: TO THE U.S. COAST GUARD |
| `Guard` | `F79482` (+4.03 s) | Verdict | text: TO THE U.S. COAST GUARD |

**240** · One: propose that the International Maritime Organization make its guidance for submersibles mandatory.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `One` | `F79538` (+0.18 s) | Verdict | text: M-25-015 / IMO |
| `propose` | `F79580` (+0.88 s) | Verdict | <Wd f={f} at={wf(240, 'propose')} lightAt={wf(240, 'organization')}>(1) VIA THE  |
| `International` | `F79631` (+1.73 s) | Verdict | text: M-25-015 / IMO |
| `Organization` | `F79705` (+2.97 s) | Verdict | <Wd f={f} at={wf(240, 'propose')} lightAt={wf(240, 'organization')}>(1) VIA THE  |
| `make` | `F79753` (+3.77 s) | Verdict | text: M-25-015 / IMO |
| `submersibles` | `F79817` (+4.83 s) | Verdict | text: M-25-015 / IMO |
| `mandatory` | `F79865` (+5.63 s) | Verdict | text: M-25-015 / IMO |

**241** · Two: study pressure vessels that carry people.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Two` | `F79941` (+0.05 s) | Verdict | text: M-25-012 / STUDY |
| `study` | `F79992` (+0.90 s) | Verdict | text: M-25-012 / STUDY |
| `pressure` | `F80015` (+1.28 s) | Verdict | text: M-25-012 / STUDY |
| `carry` | `F80076` (+2.30 s) | Verdict | text: M-25-012 / STUDY |
| `people` | `F80098` (+2.67 s) | Verdict | text: M-25-012 / STUDY |

**242** · Three: write rules for them.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Three` | `F80158` (+0.07 s) | Verdict | text: M-25-013 / WRITE |
| `write` | `F80210` (+0.93 s) | Verdict | text: M-25-013 / WRITE |
| `rules` | `F80231` (+1.28 s) | Verdict | text: M-25-013 / WRITE |
| `them` | `F80263` (+1.82 s) | Verdict | text: M-25-013 / WRITE |

**243** · Four: bring its nineteen ninety-three guidance up to date with the law passed that same year.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Four` | `F80312` (+0.22 s) | Verdict | text: M-25-014 / BRING |
| `bring` | `F80356` (+0.95 s) | Verdict | text: M-25-014 / BRING |
| `nineteen` | `F80384` (+1.42 s) | Verdict | text: M-25-014 / BRING |
| `guidance` | `F80444` (+2.42 s) | Verdict | text: M-25-014 / BRING |
| `date` | `F80499` (+3.33 s) | Verdict | text: M-25-014 / BRING |
| `law` | `F80535` (+3.93 s) | Verdict | text: M-25-014 / BRING |
| `year` | `F80612` (+5.22 s) | Verdict | text: M-25-014 / BRING |

**244** · The Coast Guard agreed to update its guidance, and partly agreed with the rest.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `agreed` | `F80695` (+0.83 s) | Verdict | text: THE COAST GUARD AGREED TO UPDATE / ITS GUIDANCE, |
| `update` | `F80730` (+1.42 s) | Verdict | text: THE COAST GUARD AGREED TO UPDATE / ITS GUIDANCE, |
| `guidance` | `F80764` (+1.98 s) | Verdict | text: THE COAST GUARD AGREED TO UPDATE / ITS GUIDANCE, |
| `partly` | `F80833` (+3.13 s) | Verdict | text: PARTLY AGREED WITH THE REST |
| `rest` | `F80894` (+4.15 s) | Verdict | text: PARTLY AGREED WITH THE REST |

**245** · As of October twenty twenty-six, all four recommendations remain open.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `October` | `F80975` (+0.37 s) | Verdict | text: AS OF OCT 2026: |
| `twenty-six` | `F81024` (+1.18 s) | Verdict | text: AS OF OCT 2026: |
| `all` | `F81098` (+2.42 s) | Verdict | text: ALL FOUR / OPEN · NTSB LETTER, 22 OCT 2026 |
| `four` | `F81116` (+2.72 s) | Verdict | text: ALL FOUR / OPEN · NTSB LETTER, 22 OCT 2026 |
| `recommendations` | `F81132` (+2.98 s) | Verdict | text: ALL FOUR / OPEN · NTSB LETTER, 22 OCT 2026 |
| `remain` | `F81189` (+3.93 s) | Verdict | lead · <span style={{opacity: lead(f, wf(245, 'remain'), 8)}}> |
| `open` | `F81216` (+4.38 s) | (scene list) | sound effect cue |

**246** · On the fifteenth of July, twenty twenty-two, Titan's hull changed, and its own sensors recorded it.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `fifteenth` | `F81304` (+0.30 s) | SignOff | DatePill · <DatePill f={f} fps={fps} day={15} month={7} year={2022} dayWord={wf(2 |
| `July` | `F81340` (+0.90 s) | SignOff | DatePill · <DatePill f={f} fps={fps} day={15} month={7} year={2022} dayWord={wf(2 |
| `twenty-two` | `F81393` (+1.78 s) | SignOff | DatePill · <DatePill f={f} fps={fps} day={15} month={7} year={2022} dayWord={wf(2 |
| `Titan's` | `F81459` (+2.88 s) | SignOff | text: TITAN'S HULL / CHANGED · |
| `hull` | `F81493` (+3.45 s) | SignOff | text: TITAN'S HULL / CHANGED · |
| `changed` | `F81517` (+3.85 s) | (scene list) | sound effect cue |
| `sensors` | `F81602` (+5.27 s) | SignOff | text: ITS OWN SENSORS RECORDED IT |
| `recorded` | `F81630` (+5.73 s) | SignOff | text: ITS OWN SENSORS RECORDED IT |

**247** · Eleven months later, on its first deep dive since, five people were aboard.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Eleven` | `F81711` (+0.05 s) | SignOff | text: ELEVEN MONTHS LATER · |
| `later` | `F81752` (+0.73 s) | SignOff | text: ELEVEN MONTHS LATER · |
| `first` | `F81811` (+1.72 s) | SignOff | text: ITS FIRST DEEP DIVE SINCE · |
| `since` | `F81874` (+2.77 s) | SignOff | text: ITS FIRST DEEP DIVE SINCE · |
| `five` | `F81922` (+3.57 s) | SignOff | text: FIVE PEOPLE ABOARD |
| `aboard` | `F81975` (+4.45 s) | SignOff | text: FIVE PEOPLE ABOARD |

**248** · Stockton Rush.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Stockton` | `F82100` (+0.10 s) | SignOff | text: STOCKTON RUSH |

**249** · Paul-Henri Nargeolet.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Paul-Henri` | `F82207` (+0.03 s) | SignOff | text: PAUL-HENRI NARGEOLET |

**250** · Shahzada Dawood.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Shahzada` | `F82348` (+0.12 s) | SignOff | text: SHAHZADA DAWOOD |

**251** · Suleman Dawood.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Suleman` | `F82463` (+0.13 s) | SignOff | text: SULEMAN DAWOOD |

**252** · Hamish Harding.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Hamish` | `F82574` (+0.07 s) | SignOff | text: HAMISH HARDING |
| `Harding` | `F82598` (+0.47 s) | SignOff | text: 18 JUN 2023 |

