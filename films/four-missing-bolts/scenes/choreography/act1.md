# Choreography: Act I, The Incident (sentences 0–22)

Word-level kinetic choreography (PLAYBOOK §10.6). Frames are the film's 60 fps, on measured word starts
(`vo/timing.json`, `scripts/word_align.py`); offsets from the sentence's start. Code: `remotion/scenes/act1.tsx`
(`FdrOpen`, `Crew`, `Hole`, `Seats`, `Track`, `Paper`, `PendingExhibit`, `Loop`, `Layers`), kit
`lib/remotion/Kinetic.tsx`. Sync audit: all 23 sentences pass (longest uncued stretch ≤ 1.5 s, every number cued).

**The FDR replay is anchored to "dropped" (round 3).** The real flight data runs at real time until the pressure
drop, then at ×0.25. The drop is placed 6 frames before "dropped" (F1002). At that rate the recorded cabin altitude
warning (+0.587 s, FDR discrete) lands on F1143 ("warning" F1137) and the master caution (+1.447 s) on F1349
("caution" F1344). Both are within 100 ms of their words *because of the record*, not by moving the record. The
pressure-drop and chime effects moved with them; the mix was patched (`mix/mix.wav`, previous kept as
`mix/mix_round3a.wav`).

Sources: C01–C10, C35, C51, C69, C70, C82. Honesty labels stay: RECONSTRUCTION and PLAYBACK ×rate on the FDR and track
plates; ILLUSTRATION · NOT TO SCALE on the recorder tape; the photographs are NTSB's, unaltered (crop and push only).

## 0–4 · The record (FDR plate, `FdrOpen`)

> 0 · Fifth of January, twenty twenty-four.
> 1 · At twelve minutes and thirty-three seconds past five in the afternoon, a Boeing seven thirty-seven nine climbed through fourteen thousand, eight hundred and thirty feet over Portland, Oregon.
> 2 · Then the cabin pressure dropped.
> 3 · The cabin altitude warning sounded.
> 4 · One second later, the master caution.

| Spoken trigger word(s) | Frame offset (60 fps) | On-screen visual state mutation | Eye-trace and kinetic target | Remotion implementation |
| :--- | :--- | :--- | :--- | :--- |
| `Fifth` | `F5` (`+0.08 s`) | **05** rises 12 px and fades in, bump | Centre of the empty desk | `Arrive` = `lead(f, w, 8)` + `bump()` |
| `January` | `F29` (`+0.48 s`) | **JAN** arrives beside it | Date line | `Arrive` |
| `twenty` | `F81` (`+1.35 s`) | **20** arrives | Date line | `Arrive` |
| `twenty-four` | `F103` (`+1.72 s`) | **24** lands; the flight line ALASKA AIRLINES FLIGHT 1282 · BOEING 737-9 · N704AL fades up | Year, then under it | `Arrive`; `tween(year+10 → +40)` |
| `twelve` | `F211` (`+0.13 s`) | The FDR plate is up; the clock panel lights cyan; EVENT tag reads `--:12:--` (amber minutes) | Clock panel, top left | `Panel on`; `litStyle()` |
| `thirty-three` | `F264` (`+1.02 s`) | EVENT reads `--:12:33` | Event tag | `litStyle()` |
| `five` | `F352` (`+2.48 s`) | EVENT reads **17:12:33** | Event tag | `litStyle()` |
| `afternoon` | `F386` (`+3.05 s`) | **5:12 PM** fades in under it | Event tag | `lead()` |
| `Boeing` | `F456` (`+4.22 s`) | Aircraft strip appears: **BOEING** takes the light | Strip under the discretes | `lead()`; `litStyle()` |
| `seven` | `F484` (`+4.68 s`) | **737** lights cyan | Strip | `litStyle()` |
| `nine` | `F543` (`+5.67 s`) | **-9** lights, bump; **N704AL** lights 12 frames later | Strip | `bump()`; `STAGGER` |
| `climbed` | `F586` (`+6.38 s`) | Altitude panel border lights; **CLIMBING** flashes and bumps | Altitude panel | `Panel on`; `flash()`, `bump()` |
| `fourteen thousand` | `F630–F688` (`+7.12 s`) | An amber dashed line starts across the trace graph; its label reads **14,000** | Graph, right of the readout | `interpolate01(fourteen−12 → thirty)`; `rollTo()` |
| `eight hundred and thirty` | `F697–F751` (`+8.23 s`) | Label rolls 14,000 → 14,800 → **14,830**, landing on "thirty"; the line reaches NOW | Line label | `rollTo()` keys on `eight`, `thirty` |
| `feet` | `F758` (`+9.25 s`) | **FT · NTSB** joins the label (the NTSB's figure, beside the live FDR readout) | Line label | `lead(f, feet, 8)` |
| `Portland, Oregon` | `F801`, `F843` (`+9.97 s`) | **OVER PORTLAND,** then **OREGON** arrive on the strip | Strip | `Arrive` ×2 |
| `cabin` | `F962` (`+0.63 s`) | Cabin pressure panel border lights cyan | Right panel | `Panel on` |
| `pressure` | `F985` (`+1.02 s`) | Cyan brackets close on the **14.09 PSI** reading | The reading | `BracketLock` |
| `dropped` | `F1002 / F1008` (`+1.40 s`) | The real drop starts (F1002): the reading turns red and falls 14.08 → 9.08 PSI over 2 s of data (8 s at ×0.25); the plate shudders; NOMINAL flips to **PRESSURE LOSS**; PLAYBACK ×1.00 → ×0.25 | Reading, then the status chip | `F_EVENT = wf(2,'dropped') − 6`; `StatusFlip`; shake |
| `altitude` | `F1106` (`+0.52 s`) | Red brackets close on the CABIN ALT WARNING tile | Discrete tiles, lower left | `BracketLock` (red) |
| `warning` | `F1137` → data `F1143` | The tile lights red (recorded discrete), bump; chime | Tile | `Annunciator on={F_WARN}` |
| `One second` | `F1236–F1266` (`+0.08 s`) | An amber interval line runs from the warning tile toward the caution tile and **+1 S** locks at its end, bump | Between the tiles | `lead(f, second, 18)`; `bump()` |
| `master` | `F1318` (`+1.45 s`) | Amber brackets close on MASTER CAUTION | Caution tile | `BracketLock` (amber) |
| `caution` | `F1344` → data `F1349` | The tile lights amber (recorded discrete); chime | Tile | `Annunciator on={F_CAUT}` |

## 5–6 · The crew's words (`Crew`, NTSB Fig. 9 behind)

> 5 · The captain would describe it as an explosive experience.
> 6 · The first officer said simply: it was chaos.

| Spoken trigger word(s) | Frame offset (60 fps) | On-screen visual state mutation | Eye-trace and kinetic target | Remotion implementation |
| :--- | :--- | :--- | :--- | :--- |
| `captain` | `F1432` (`+0.08 s`) | Quote card rises; the amber rule draws down; **THE CAPTAIN** lights amber | Card, upper left | `WordQuote whoAt`; `lead()` on the rule |
| `describe` | `F1468` (`+0.68 s`) | AS REPORTED IN NTSB AIR-25-04 fades in | Attribution line | `whereAt` |
| `an explosive` | `F1545`, `F1552` (`+1.97 s`) | “an”, then **explosive** arrive word by word | Quote line | `Arrive` per word |
| `experience` | `F1599` (`+2.87 s`) | **experience”** arrives and bumps; the photo push is at its first key | Quote line | `Arrive`; `Photo path` |
| `first officer` | `F1700` (`+0.08 s`) | Second card rises; **THE FIRST OFFICER** lights amber | Lower card | `whoAt` |
| `said` | `F1746` (`+0.85 s`) | Attribution line fades in | Lower card | `whereAt` |
| `it was chaos` | `F1820–F1839` (`+2.08 s`) | “it”, “was”, **chaos”** arrive, the last with a bump; the photo pushes in | Lower card | `Arrive` ×3 |

## 7–9 · The hole and the seats (NTSB photographs, `Hole`, `Seats`)

> 7 · Behind the wing, on the left side, there was now a hole in the fuselage.
> 8 · A rectangle about twenty-nine inches wide and fifty-nine inches high.
> 9 · The two seats beside it were empty.

| Spoken trigger word(s) | Frame offset (60 fps) | On-screen visual state mutation | Eye-trace and kinetic target | Remotion implementation |
| :--- | :--- | :--- | :--- | :--- |
| `Behind` | `F1937` (`−0.03 s`) | The camera starts down-left from the full side | The photo | `Photo path` key |
| `the wing` | `F1969` (`+0.50 s`) | Camera lands on the wing root; cyan brackets lock on the fairing; **BEHIND THE WING** caption | Lower left of the photo, then caption | `path` key `wing+14`; `BracketLock` |
| `left side` | `F2012–F2052` (`+1.22 s`) | Camera pulls back to the whole left side; **· LEFT SIDE** joins the caption; wing brackets leave | Whole fuselage | `path` key `side+18`; `lead()` |
| `hole` | `F2109` (`+2.83 s`) | Camera pushes to the opening; red brackets lock on it | The opening | `path` key `hole+10`; `BracketLock` (red) |
| `fuselage` | `F2142` (`+3.38 s`) | **· FUSELAGE** joins the caption in red | Caption | `lead()`; `litStyle()` |
| `rectangle` | `F2229` (`+0.12 s`) | A red outline strokes round the opening, completing on the word | The opening | `strokeDashoffset` on `lead(f, rect, 22)` |
| `twenty-nine` | `F2281` (`+0.98 s`) | Width line draws; label rolls 0 → **29 IN** | Above the opening | `lead()`; `rollTo()` |
| `inches` · `wide` | `F2320`, `F2340` (`+1.63 s`) | **· 74 CM** joins; label bumps on "wide" | Width label | `tspan lead()`; `bump()` |
| `fifty-nine` | `F2386` (`+2.73 s`) | Height line draws; label rolls 0 → **59 IN** | Left of the opening | `lead()`; `rollTo()` |
| `inches` · `high` | `F2422`, `F2442` (`+3.33 s`) | **· 150 CM** joins; bump on "high"; caption flips to MID EXIT DOOR PLUG · APPROX. OUTLINE | Height label, caption | `tspan lead()`; `bump()`; envelope |
| `two` | `F2519` (`+0.10 s`) | Two chips lock, 12 frames apart: **SEAT 26A**, **SEAT 26B** | Lower left of Fig. 1 | `lead()`; `STAGGER` |
| `seats` | `F2535` (`+0.37 s`) | Camera eases to the row (NTSB's own seat labels kept in frame); cyan brackets on seat 26A | Seat 26A | `path`; `BracketLock` |
| `beside it` | `F2556` (`+0.72 s`) | Red brackets lock on the opening beside the seat | The opening | `BracketLock` (red) |
| `empty` | `F2603` (`+1.50 s`) | Both chips flip to **26A UNOCCUPIED**, **26B UNOCCUPIED** (the record's word, C08) | Chips | `StatusFlip` ×2, 4 frames apart |

## 10–12 · Back on the ground (FDR GPS track, `Track`)

> 10 · Fourteen minutes later, Alaska Airlines flight twelve eighty-two was back on the ground in Portland.
> 11 · Eight people had minor injuries.
> 12 · No one was seriously hurt.

| Spoken trigger word(s) | Frame offset (60 fps) | On-screen visual state mutation | Eye-trace and kinetic target | Remotion implementation |
| :--- | :--- | :--- | :--- | :--- |
| `Fourteen` | `F2684` (`+0.02 s`) | **+14** locks with a bump (the interval, stated, not a running counter) | Right column | `lead()`; `bump()` |
| `minutes` · `later` | `F2710`, `F2731` (`+0.45 s`) | **MIN** lights amber; **AFTER 17:12:33** fades in | Same line | `litStyle()`; `lead()` |
| `Alaska Airlines` | `F2779` (`+1.60 s`) | **ALASKA AIRLINES** lights; FLIGHT fades in | Right column, top | `lead()`; `litStyle()` |
| `twelve eighty-two` | `F2859`, `F2882` (`+2.93 s`) | **12**, then **82** arrive | Flight number | `Arrive` ×2 |
| `back` → `ground` | `F2929–F2956` (`+4.10 s`) | The track has run from take-off (the event point red on the way) and touches down on "ground"; RETURNING flips to **LANDED 17:26:46**; relay click | Track head, then status | `rollTo()` to `GEAR_GROUND_T` at `ground+2`; `StatusFlip` |
| `Portland` | `F2986` (`+5.05 s`) | Cyan brackets lock on the PDX dot; its label turns cyan | Airport dot | `BracketLock`; fill switch |
| `Eight` | `F3066` (`+0.03 s`) | INJURIES block fades up; the count rolls 0 → **8**, landing on the word, bump | Right column, lower | `rollTo()` (step) |
| `minor` | `F3121` (`+0.95 s`) | **MINOR** lights amber | Under the 8 | `litStyle()` |
| `injuries` | `F3144` (`+1.33 s`) | **1 FLIGHT ATTENDANT · 7 PASSENGERS** fades in (C05) | Under the counts | `lead()` |
| `one` | `F3229` (`+0.33 s`) | **0** arrives with a bump | Beside the 8 | `lead()`; `bump()` |
| `seriously` | `F3250` (`+0.68 s`) | **SERIOUS** takes the light | Under the 0 | `litStyle()` |

## 13–16 · No voices; paper (`Paper`)

> 13 · There is no recording of what was said in the cockpit.
> 14 · The voice recorder kept running after landing, and recorded over the flight.
> 15 · So this investigation was not built on voices.
> 16 · It was built on paper.

| Spoken trigger word(s) | Frame offset (60 fps) | On-screen visual state mutation | Eye-trace and kinetic target | Remotion implementation |
| :--- | :--- | :--- | :--- | :--- |
| `no` | `F3380` (`+0.27 s`) | **NO AUDIO** arrives, bump | Card, lower line | `Arrive` |
| `recording` | `F3392` (`+0.47 s`) | COCKPIT VOICE RECORDER takes the light | Card title | `litStyle()` |
| `said` | `F3453` (`+1.48 s`) | A flat line (no audio) draws along the flight's stretch of the tape | The tape | `lead(f, said, 40)` |
| `cockpit` | `F3480` (`+1.93 s`) | The flight stretch outlines cyan; **ACCIDENT FLIGHT** chip; FROM THE ACCIDENT FLIGHT completes the line | Tape, chip | stroke switch; `lead()` |
| `recorder` | `F3578` (`+0.38 s`) | A playhead appears at the end of the flight stretch; source line fades in | Tape | `rollTo()` head |
| `running` | `F3624` (`+1.15 s`) | The head runs on into the AFTER LANDING stretch | Tape, right | `rollTo()` keys |
| `landing` | `F3662` (`+1.78 s`) | AFTER LANDING outlines amber; **▼ LANDING 17:26:46** marks the boundary | Boundary | stroke switch; `lead()` |
| `recorded over` | `F3715–F3746` (`+2.67 s`) | The head wraps to the start and a red overwrite runs back over the flight stretch | Tape, left | `rollTo()` wrap; red rect |
| `flight` | `F3764` (`+3.48 s`) | The overwrite reaches the boundary; ACCIDENT FLIGHT flips to **OVERWRITTEN** (red) | Chip | `StatusFlip` |
| `investigation` | `F3865` (`+0.38 s`) | **NTSB INVESTIGATION · DCA24MA063** lights above the card | Above the card | `lead()`; `litStyle()` |
| `not` | `F3927` (`+1.42 s`) | A red strike draws through COCKPIT VOICE RECORDER | Card title | `lead(f, not, 20)` scaleX |
| `voices` | `F3972` (`+2.17 s`) | The card sinks 40 px and dims | Whole card | `beat(f, voices, 24)` |
| `built` | `F4051` (`+0.33 s`) | The report's title page slides onto the desk (paper sound) | Centre | `Exhibit start = built − 8` |
| `paper` | `F4092` (`+1.02 s`) | The title is highlighted, completing on the word, and the page pulls in | Title block | `highlights start = paper − 15`; `push` |

## 17–19 · The photograph, 108 days earlier (`Paper`, `PendingExhibit`, `Loop`)

> 17 · And the paper leads to a photograph, taken on a factory floor one hundred and eight days before that afternoon.
> 18 · It shows exactly what was missing.
> 19 · We will come to it in about five minutes.

| Spoken trigger word(s) | Frame offset (60 fps) | On-screen visual state mutation | Eye-trace and kinetic target | Remotion implementation |
| :--- | :--- | :--- | :--- | :--- |
| `paper` | `F4185` (`+0.25 s`) | The page slides left and shrinks, making room | Page, left | `beat(f, paper, 50)` |
| `leads` | `F4223` (`+0.88 s`) | An evidence envelope slides in from the right | Right of the page | `slideIn = 1 − lead(f, photograph, photograph − leads)` |
| `photograph` | `F4254` (`+1.40 s`) | The envelope lands with a bump: EXHIBIT · PHOTOGRAPH | Envelope | `bump()` |
| `taken` | `F4318` (`+2.47 s`) | **19 SEP 2023 · ABOUT 18:39** appears on it | Envelope | `lead()` |
| `factory` | `F4351` (`+3.02 s`) | **BOEING · RENTON, WASHINGTON** appears | Envelope | `lead()` |
| `one hundred and eight` | `F4409–F4459` (`+3.98 s`) | The timeline card fades up; the amber bar runs and its counter rolls 0 → **108**, landing on "eight" | Timeline, bottom | `tween(one−14 → eight+2)`; `rollTo()` (step) |
| `days` | `F4462` (`+4.87 s`) | **DAYS** joins, bump | Counter | `bump()` |
| `before` | `F4486` (`+5.27 s`) | **19 SEP 2023 · RENTON** turns amber | Bar, left end | fill switch |
| `afternoon` | `F4521` (`+5.85 s`) | **05 JAN 2024 · PORTLAND** and its dot turn red | Bar, right end | fill switch |
| `shows` | `F4616` (`+0.15 s`) | A sheen crosses the envelope | Envelope | `tween(shows−6 → +60)` |
| `exactly` | `F4636` (`+0.48 s`) | Cyan brackets lock round the envelope | Envelope | `BracketLock` |
| `missing` | `F4695` (`+1.47 s`) | **SEALED** stamps on in red (stamp sound); a red **WHAT WAS MISSING** chip under it | Envelope, then chip | `Stamp`; `lead()` |
| `come` | `F4778` (`+0.28 s`) | The envelope starts toward the corner where it waits (the PENDING chip from Act II on) | Envelope moving up-right | `beat(f, come, 70)` |
| `five` | `F4839` (`+1.30 s`) | The chip flips to **IN ABOUT 5 MIN** (amber), bump | Chip | `StatusFlip` |

## 20–22 · The question (`Layers`)

> 20 · The question was never only why a door plug failed.
> 21 · It was why every layer built to stop it had failed first.
> 22 · Where did the margin of error run out?

| Spoken trigger word(s) | Frame offset (60 fps) | On-screen visual state mutation | Eye-trace and kinetic target | Remotion implementation |
| :--- | :--- | :--- | :--- | :--- |
| `question` | `F4948` (`+0.08 s`) | **THE QUESTION** takes the light | Header | `litStyle()` |
| `never only` | `F4987` (`+0.73 s`) | **· NOT ONLY** joins in amber | Header | `lead()` |
| `why` | `F5032` (`+1.48 s`) | **WHY THE PLUG FAILED** joins | Header | `lead()` |
| `door plug` | `F5066–F5082` (`+2.05 s`) | THE DOOR PLUG card fades up, cyan | Right end of the row | `lead(f, door, 12)` |
| `failed` | `F5101` (`+2.63 s`) | The plug card turns red, bump | Plug card | colour switch; `bump()` |
| `why` | `F5178` (`+0.25 s`) | Second header line **WHY EVERY LAYER FAILED FIRST** (red) | Header | `lead()` |
| `every` | `F5204` (`+0.68 s`) | The four layer cards rise one by one, 12 frames apart: BOLTS, REMOVAL RECORD, INSPECTION, REGULATOR | Row, left to right | `settle()`; `STAGGER` |
| `built` | `F5248` (`+1.42 s`) | Card borders turn cyan | Row | colour switch |
| `stop` | `F5273` (`+1.83 s`) | Each card's barrier ring lights cyan, 6 frames apart | Rings | `flash()`; stagger 6 |
| `failed` | `F5324` (`+2.68 s`) | A red thread runs through the rings; each turns red as it passes (metal sound) | Thread, left to right | `tween(failed−10 → first+10)`; rings `failed+4+i·7` |
| `first` | `F5349` (`+3.10 s`) | All four cards turn red together, bump | Whole row | colour switch; `bump()` |
| `Where … out?` | `F5433–F5536` (`+0.02 s`) | The row dims; **WHERE DID THE MARGIN OF ERROR RUN OUT?** builds one word per spoken word | Centre, lower | `Arrive` per word |

Lead and land: a highlight starts 15 frames early and completes on its word (`lead`); a snap, flip or lock lands
2 frames (33 ms) after the word's measured start (`LAND`). Staggered parts step 12 frames (`STAGGER`).
