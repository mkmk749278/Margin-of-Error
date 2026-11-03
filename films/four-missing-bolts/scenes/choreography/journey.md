# Choreography: the journey (Act III, sentences 49–50)

Word-level kinetic choreography (PLAYBOOK §10.6). Frames are the film's 60 fps, on measured word starts
(`vo/timing.json`, `scripts/word_align.py`); offsets from the sentence's start. Code: `remotion/scenes/act3.tsx`
`Journey`, kit `lib/remotion/Kinetic.tsx`. Sources: C55 (made 24 MAR 2023, Malaysia), C23 (final closure 28 JUL 2023,
Wichita, two upper guide track bolts and two vertical movement arrestor bolts). The plug is our ILLUSTRATION after
NTSB AIR-25-04 Figs 3–6 (labelled on the plate).

> 49 · The plug was made by Spirit AeroSystems, in Malaysia, in March twenty twenty-three.
> 50 · Spirit fitted it to the fuselage in Wichita, Kansas, and on the twenty-eighth of July it was closed with all four bolts in place.

| Spoken trigger word(s) | Frame offset (60 fps) | On-screen visual state mutation | Eye-trace and kinetic target | Remotion implementation |
| :--- | :--- | :--- | :--- | :--- |
| `plug` | `F12951–F12980` (`+0.13s`) | Title THE LIFE OF A PART lights; the plug model fills in from its outline (face alpha 0.25 → 1) | Title, then the plug on the right plate; cyan | `lead(f, wf(49,'plug'), 16)` on `plugAlpha`; `lit()` text-shadow flash |
| `made` | `F12981–F13013` (`+0.63s`) | MADE card rises 14 px and fades in; its border turns cyan | Left column, first card | `card(B.made)`: `beat()` translateY, `tween()` opacity |
| `by Spirit AeroSystems` | `F13014–F13117` (`+1.18s`) | SPIRIT AEROSYSTEMS brightens from `sub` to `ink` | Company line | `lit(B.spirit)`: colour switch + `flash()` glow |
| `in Malaysia` | `F13118–F13184` (`+2.92s`) | MALAYSIA fades up in cyan; the life line drops its MADE · MALAYSIA dot | Card, then the life line | `tween(f, B.malaysia-8, B.malaysia+4)`; `LifeLine` event `on` |
| `in March` | `F13185–F13229` (`+4.03s`) | Date pill 24 MAR snaps in with a 1.00 → 1.08 → 1.00 bump; the life-line head runs to 24 MAR | Amber pill, right of the card | `DatePill` monthWord; `bump()` spring damping 12 / stiffness 220 |
| `twenty twenty-three` | `F13230–F13358` (`+4.78s`) | The year rolls 2020 → 2023 and lands on the word | Year digits | `rollTo()` keys `[yearWord-18 → 2020, yearWord+2 → 2023]` |
| `Spirit fitted it` | `F13359–F13398` (`+0.57s`) | FITTED TO THE FUSELAGE card arrives; the camera starts to carry the plug in (dist 190 → 150, yaw 0.32 → 0.20) | Second card; the plate | `beat(f, B.fitted, 30)` drives `cam()` |
| `to the fuselage` | `F13399–F13446` (`+1.23s`) | The fuselage frame and skin draw in around the plug (context 0 → 0.9) | The plate, around the plug | `lead(f, B.fuselage, 18)` on `state.context` |
| `in Wichita,` | `F13447–F13481` (`+2.03s`) | WICHITA, lights; the life-line head travels toward July | Card's place line | `lit(B.wichita)`; `interpolate(head)` keyed on the word |
| `Kansas,` | `F13482–F13568` (`+2.62s`) | KANSAS lights | Place line | `lit(B.kansas)` |
| `on the twenty-eighth` | `F13569–F13610` (`+4.07s`) | Date pill: the day rolls 01 → 28 and lands on the word | Amber pill, right | `DatePill` dayWord: `rollTo()` 20 frames, step to integers |
| `of July` | `F13611–F13675` (`+4.77s`) | Month snaps to JUL with the bump and an amber flash; life-line head lands on 28 JUL | Pill, then the life line | `DatePill` monthWord; `flash()`; `head` key |
| `it was closed` | `F13676–F13739` (`+5.85s`) | The plug swings shut on its hinges (0.42 rad → 0) | The plate: the plug | `interpolate(f, [closed-4, closed+22], [0.42, 0])` on `state.swing` |
| `with all four bolts` | `F13740–F13788` (`+6.92s`) | Four brackets close from 1.7× and lock on each bolt, Top-L, Top-R, Bottom-L, Bottom-R, 12 frames apart; each bolt appears in its hole; the count reads BOLTS 1/4 … 4/4 | Eye jumps bolt to bolt on the plug; cyan | `BracketLock` word = `four + i·STAGGER`; `beat()` on `state.bolts[id]` |
| `in place.` | `F13789–F13836` (`+7.73s`) | Four badges flip OPEN → IN, 4 frames apart; then BOLTS 4/4 flips to SECURED · 4/4 with the bump; brackets and card border turn amber; life line drops CLOSED · 4 BOLTS · WICHITA | Badges, the summary, then the life line; amber | `StatusFlip` (scaleY flip + `bump()`), word = `place + i·4`, summary `place + 14` |

Lead and land: a highlight starts 15 frames early and completes on its word (`lead`); a snap, flip or lock lands
2 frames (33 ms) after the word's measured start (`LAND`). Staggered parts step 12 frames (`STAGGER`).
