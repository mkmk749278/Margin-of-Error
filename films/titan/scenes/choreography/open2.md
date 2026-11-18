# Choreography index: open2

Word-level choreography (PLAYBOOK §10.6), **generated from the scene code** (`python3 scripts/choreo_index.py` from the film folder; re-run after
any edit) so it cannot drift from it. One row per word-locked event: the spoken trigger, its measured frame (60 fps) and offset
from the sentence start, the scene component, and what changes (the on-screen text that arrives, or the driving line of
code). Kit: `lib/remotion/Kinetic.tsx` and `remotion/beats.tsx` (`KeyLine` parts land on their words, `ChunkQuote` reveals a
record quote chunk by chunk, `WordLine` builds a title word by word). Kit for this film: `remotion/parts*.tsx`.
Sync audit: `review/sync_audit.md`.

**0** · This is the strain in Titan's hull on dive eighty, the fifteenth of July, twenty twenty-two.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `This` | `F5` (+0.08 s) | OpenHull | lead · const g4 = Math.max(lead(f, wf(0, 'this'), 10) * 0.6, lead(f, wf(0, 's |
| `strain` | `F36` (+0.60 s) | Push | sound effect cue |
| `hull` | `F102` (+1.70 s) | OpenHull | const cut = interpolate(f, [wf(0, 'hull') - 10, wf(0, 'hull') + 40], [0, 0.6], { |
| `dive` | `F138` (+2.30 s) | OpenHull | bump · <div style={{opacity: lead(f, wf(0, 'dive'), 8), transform: `scale(${b |
| `eighty` | `F166` (+2.77 s) | OpenHull | bump · <div style={{opacity: lead(f, wf(0, 'dive'), 8), transform: `scale(${b |
| `fifteenth` | `F220` (+3.67 s) | Push | sound effect cue |
| `July` | `F259` (+4.32 s) | OpenHull | DatePill · <DatePill f={f} fps={fps} day={15} month={7} year={2022} dayWord={wf(0 |
| `twenty-two` | `F316` (+5.27 s) | OpenHull | DatePill · <DatePill f={f} fps={fps} day={15} month={7} year={2022} dayWord={wf(0 |

**1** · That afternoon, the four people inside heard a loud bang.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `afternoon` | `F420` (+0.20 s) | OpenHull | text: NDT |
| `four` | `F477` (+1.15 s) | OpenHull | bump · <div style={{position: 'absolute', left: TR.x + 20, top: TR.y + TR.h + |
| `inside` | `F513` (+1.75 s) | OpenHull | {f: wf(1, 'inside'), cam: {pos: [19, 13, 22.5], look: [0, 0.1, 1.9], fov: 30}}, |
| `heard` | `F548` (+2.33 s) | OpenHull | lead · <Hull3D width={HW} height={1080} cam={cam} cut={cut} g4={g4} sensors={ |
| `bang` | `F605` (+3.28 s) | Push | sound effect cue |

**2** · And the line jumped.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `jumped` | `F708` (+0.72 s) | Push | sound effect cue |

**3** · OceanGate's director of engineering later testified that Stockton Rush, the chief executive, wanted to keep diving.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `director` | `F823` (+0.60 s) | Oath | lead · <div style={{position: 'absolute', left: 96, top: 110, width: 760, pad |
| `later` | `F900` (+1.88 s) | Oath | <div style={{position: 'absolute', inset: 0, transform: `scale(${(1 + 0.03 * spa |
| `testified` | `F920` (+2.22 s) | Push | sound effect cue |
| `Stockton` | `F977` (+3.17 s) | Oath | lead · <div style={{marginTop: 18, opacity: lead(f, wf(3, 'stockton'), 8)}}> |
| `executive` | `F1062` (+4.58 s) | Oath | bump · <Chip text="ON STOCKTON RUSH, OCEANGATE CEO" tone={f >= wf(3, 'executi |
| `wanted` | `F1120` (+5.55 s) | Oath | <div style={{position: 'absolute', inset: 0, transform: `scale(${(1 + 0.03 * spa |
| `diving` | `F1167` (+6.33 s) | Oath | <div style={{position: 'absolute', inset: 0, transform: `scale(${(1 + 0.03 * spa |

**4** · Titan dived twice more to the Titanic.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `dived` | `F1754` (+0.47 s) | Twice | const a = wf(4, 'dived'); |
| `twice` | `F1778` (+0.87 s) | Push | sound effect cue |
| `more` | `F1810` (+1.40 s) | Push | sound effect cue |

**5** · Eleven months later, on its first deep dive of twenty twenty-three, the hull failed, and all five people on board died.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `Eleven` | `F1932` (+0.00 s) | Seabed | lead · <div style={{position: 'absolute', right: 96, top: 86, display: 'flex' |
| `later` | `F1974` (+0.70 s) | Push | sound effect cue |
| `first` | `F2032` (+1.67 s) | Seabed | bump · <div style={{opacity: lead(f, wf(5, 'first'), 8), transform: `scale(${ |
| `twenty-three` | `F2117` (+3.08 s) | Seabed | StatusFlip · <StatusFlip f={f} fps={fps} word={wf(5, 'twenty-three')} from="15 JUL  |
| `hull` | `F2196` (+4.40 s) | Seabed | <div style={{position: 'absolute', inset: 0, transform: `scale(${(1 + 0.035 * sp |
| `failed` | `F2220` (+4.80 s) | Push | sound effect cue |
| `all` | `F2283` (+5.85 s) | Seabed | const quiet = interpolate(f, [wf(5, 'all'), wf(5, 'five') + 10, wf(5, 'died'), w |
| `five` | `F2299` (+6.12 s) | Seabed | const quiet = interpolate(f, [wf(5, 'all'), wf(5, 'five') + 10, wf(5, 'died'), w |
| `died` | `F2376` (+7.40 s) | Seabed | const quiet = interpolate(f, [wf(5, 'all'), wf(5, 'five') + 10, wf(5, 'died'), w |

**6** · It is often said the warning worked, and was ignored.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `often` | `F2474` (+0.23 s) | Record | {f: wf(6, 'often'), cam: {pos: [16, 9, 17], look: [-3.5, -0.6, 0], fov: 32}}, |
| `warning` | `F2521` (+1.02 s) | Push | sound effect cue |
| `ignored` | `F2611` (+2.52 s) | Record | {f: wf(6, 'ignored'), cam: {pos: [15, 9.5, 17], look: [-3.8, -0.9, 0.2], fov: 32 |

**7** · The record is more complicated.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `record` | `F2704` (+0.12 s) | Push | sound effect cue |
| `complicated` | `F2760` (+1.05 s) | Record | <Cover f={f} at={wf(7, 'complicated')} src="pages/roi_cover.jpg" x={530} rot={3} |

**8** · OceanGate plotted this strain, and the depth beside it, against time.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `OceanGate` | `F2863` (+0.02 s) | OgPlot | bump · <div style={{position: 'absolute', left: 200, top: 64, opacity: lead(f |
| `plotted` | `F2901` (+0.65 s) | OgPlot | stroke={f >= wf(8, 'plotted') ? colors.ink : colors.sub} |
| `strain` | `F2942` (+1.33 s) | OgPlot | <Chip text="OCEANGATE'S OWN DIVE 80 PLOT" tone={f >= wf(8, 'strain') ? colors.am |
| `depth` | `F3000` (+2.30 s) | OgPlot | bump · <div style={{opacity: lead(f, wf(8, 'depth'), 8), transform: `scale(${ |
| `beside` | `F3018` (+2.60 s) | OgPlot | lead · showDepth={0.4 * lead(f, wf(8, 'depth'), 10) + 0.6 * lead(f, wf(8, 'be |
| `against` | `F3068` (+3.43 s) | OgPlot | const timeOn = f >= wf(8, 'against'); |
| `time` | `F3094` (+3.87 s) | Push | sound effect cue |

**9** · After the implosion, the N - T - S - B, America's accident investigator, plotted the same numbers against depth.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `implosion` | `F3187` (+0.43 s) | Turn | lead · <div style={{position: 'absolute', inset: 0, transform: `translateY(${ |
| `N` | `F3263` (+1.70 s) | Turn | bump · <div style={{position: 'absolute', left: 140, top: 86, opacity: lead(f |
| `America's` | `F3333` (+2.87 s) | Turn | bump · <Chip text="NTSB · U.S. NATIONAL TRANSPORTATION SAFETY BOARD" tone={f  |
| `investigator` | `F3394` (+3.88 s) | Turn | bump · <Chip text="NTSB · U.S. NATIONAL TRANSPORTATION SAFETY BOARD" tone={f  |
| `plotted` | `F3458` (+4.95 s) | Turn | const m = span(f, wf(9, 'plotted') - 6, wf(9, 'depth') + 14); |
| `same` | `F3492` (+5.52 s) | Turn | lead · <Replot m={m} z={0} show={{'80': 1}} hi={{'80': lead(f, wf(9, 'same'), |
| `depth` | `F3561` (+6.67 s) | Push | sound effect cue |

**10** · We will draw that chart from their numbers, and ask why a company that read this data after dive eighty did not know its hull was damaged.

| Trigger | Frame (offset) | Scene | Change |
| :--- | :--- | :--- | :--- |
| `draw` | `F3647` (+0.32 s) | Push | {f: wf(10, 'draw'), cam: {pos: [9, 8.6, 13], look: [0, 0.8, 2.5], fov: 30}}, |
| `numbers` | `F3722` (+1.57 s) | Push | {f: wf(10, 'numbers'), cam: {pos: [8.2, 8.7, 12.4], look: [0, 0.9, 2.7], fov: 30 |
| `why` | `F3793` (+2.75 s) | Push | {f: wf(10, 'why'), cam: {pos: [7.4, 8.8, 11.8], look: [0, 1, 2.9], fov: 29}}, |
| `company` | `F3815` (+3.12 s) | Push | {f: wf(10, 'company'), cam: {pos: [6.5, 9, 11], look: [0, 1.1, 3.1], fov: 29}}, |
| `read` | `F3855` (+3.78 s) | Push | lead · <Hull3D width={1920} height={1080} cam={cam} cut={0.6} g4={0.5 + 0.5 * |
| `data` | `F3882` (+4.23 s) | Push | lead · <Hull3D width={1920} height={1080} cam={cam} cut={0.6} g4={0.5 + 0.5 * |
| `eighty` | `F3952` (+5.40 s) | Push | lead · const g = lead(f, wf(10, 'eighty'), 10); |
| `not` | `F4001` (+6.22 s) | Push | lead · <AbsoluteFill style={{background: colors.void, opacity: 0.25 * lead(f, |
| `know` | `F4014` (+6.43 s) | Push | lead · <Hull3D width={1920} height={1080} cam={cam} cut={0.6} g4={0.5 + 0.5 * |
| `damaged` | `F4073` (+7.42 s) | Push | sound effect cue |

