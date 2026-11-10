# The Four Missing Bolts: YouTube package (PLAYBOOK §13.7)

Cut: `four-missing-bolts_master_4k_marcus.mp4` (Drive `four-missing-bolts/renders/`), 3840×2160, 60 fps, 13:44.2
(re-voiced with Marcus, 2026-11-06; the voice-"1" master `four-missing-bolts_master_4k.mp4` is retired).
Chapters below are from `vo/timing.json`, the same timing the master is rendered on.

## Title (pick one; recommended first)
Curiosity-led for the US and UK (owner, 2026-11-04). Each title opens a question the film answers, starts with the
words this audience types (Boeing, Alaska, door plug), and stands on a confirmed row of `claims.csv`. No question
marks, no all-caps, no tabloid words (§13.2). Pair each title with its thumbnail.

| # | Title | The question it opens | Thumbnail | Record |
|---|---|---|---|---|
| 1 | The Boeing Door Plug That Flew 154 Flights With No Bolts | how did it stay in? (Act IV answers it) | G | C22, C20 |
| 2 | Alaska 1282: A Photo Showed No Bolts 108 Days Before the Door Plug Blew Out | why did no one catch it? (Act III) | F | C35, C69 |
| 3 | Boeing's Door Plug: Four Bolts Removed, No Record, No One Identified | who, and how could that happen? (Acts III, V) | D | C29, C32, C52 |

```
The Boeing Door Plug That Flew 154 Flights With No Bolts
```

```
Alaska 1282: A Photo Showed No Bolts 108 Days Before the Door Plug Blew Out
```

```
Boeing's Door Plug: Four Bolts Removed, No Record, No One Identified
```

Search-safe fallback (if Studio shows low click-through after 7 days):

```
Boeing's Four Missing Bolts: The NTSB Final Report on Alaska 1282
```

## Thumbnails (Test & Compare: G, F, D)
| File | Reads | Built from |
|---|---|---|
| `thumb_g_154_flights_broadcast.jpg` | 154 FLIGHTS · NO BOLTS | **Recommended**, pairs with title 1. Broadcast finish from the owner's mock-up (2026-11-04), rebuilt on the real NTSB Fig. 1 (public domain, on screen at 0:43): a plain crop below the report's label strip, light grade, heavy type with depth, a restrained glow on NO BOLTS, the film's plug schematic as a faint ghost, corner brackets. The mock-up's AI-regenerated photo, invented HUD readouts, red circle on a fitting and watermark were not used |
| `thumb_e_154_flights.jpg` (kept) | 154 FLIGHTS · NO BOLTS | the plain version of G |
| `thumb_f_108_days.jpg` | 108 DAYS | left: the film's reconstruction of the 19 Sep 2023 photograph, bolt positions circled and empty (labelled RECONSTRUCTION); right: NTSB Fig. 1, 05 Jan 2024. Pairs with title 2 |
| `thumb_d_the_hole.jpg` | NO BOLTS | NTSB Fig. 1 with the record id. Pairs with title 3 |
| `thumb_a_no_bolts.jpg`, `thumb_b_zero_found.jpg`, `thumb_c_no_paper.jpg` (kept, not in the test) | | earlier set; A and C are reconstructions that do not read as an aircraft at browse size |

Rebuild A–C: `python3 films/four-missing-bolts/youtube/make_thumbnails.py <stills> films/four-missing-bolts/youtube`;
D: `… make_thumbnails.py --hole <fig01_interior_hole_row26.jpg> <out>`; E and F: `… make_thumbnails.py --curious
<fig01_interior_hole_row26.jpg> <still at 6:45.9 (frame 24354)> <out>`; G: `… make_thumbnails.py --broadcast
<fig01_interior_hole_row26.jpg> <still at 3:01.4 (frame 10884)> <out>` (Fig. 1 is in Drive
`four-missing-bolts/render-media/img/`).

## Description

```
A Boeing 737-9 MAX (737 MAX 9) door plug flew 154 flights with none of the four bolts meant to hold it down. On 5 January 2024, climbing out of Portland, Oregon, it left Alaska Airlines Flight 1282.

A photograph taken in Boeing's Renton factory 108 days earlier showed no bolts in the three positions it could see. This film reads the final report of the US National Transportation Safety Board (NTSB), record by record: how a 63-pound plug is held, why no removal record was written, why the investigation identified no one who opened or closed the plug, what the US regulator (the FAA) missed, and how the plug walked itself up off its stops. Findings are the NTSB's; our own reading is said as ours.

The photograph at 5:56 is a Boeing photograph reproduced in the NTSB report (Figure 18, page 51, linked below). We show it redrawn and labelled RECONSTRUCTION; the original is in the report.

0:00 Alaska Airlines 1282: the incident
1:27 How a 737-9 door plug is held
3:13 From Spirit AeroSystems to Boeing Renton
5:14 The plug was opened with no removal record
5:56 The photograph: no bolts
6:54 Boeing's removal instruction and the FAA
7:42 The workforce: experience lost
8:46 The buybacks, and what the report says
9:29 154 flights: how the plug walked up
10:56 The NTSB's probable cause
12:18 The fix, and what is still open

Sources
NTSB Aviation Investigation Report AIR-25-04, In-Flight Separation of Left Mid Exit Door Plug, Alaska Airlines Flight 1282 (adopted 24 June 2025): https://www.ntsb.gov/investigations/AccidentReports/Reports/AIR2504.pdf
NTSB public docket DCA24MA063: Structures Group factual report and flight data recorder data: https://data.ntsb.gov/Docket/Document/docBLOB?ID=17305257&FileExtension=pdf&FileName=DCA24MA063%20Structures%20Factual-Rel.pdf
FAA news release, 24 January 2024: https://www.faa.gov/newsroom/faa-halts-boeing-max-production-expansion-improve-quality-control-also-lays-out-extensive
Spirit AeroSystems Form 10-K, FY2023: https://www.sec.gov/Archives/edgar/data/1364885/000162828024006331/spr-20231231.htm
Boeing Form 10-K, FY2019: https://www.sec.gov/Archives/edgar/data/12927/000001292720000014/a201912dec3110k.htm
Boeing Form 8-K, 1 July 2024 (agreement to acquire Spirit AeroSystems): https://www.sec.gov/Archives/edgar/data/12927/000119312524172676/d838733d8k.htm
Boeing Form 8-K, 8 December 2025 (acquisition completed): https://www.sec.gov/Archives/edgar/data/12927/000162828025055825/ba-20251208.htm

Reconstructions and illustrations are labelled on screen; values not from a record are marked ILLUSTRATIVE.
Narrated using the studio's calibrated synthetic voice model (Marcus) for forensic clarity.
```

## Tags (Studio "Tags" field)

```
Boeing door plug, Alaska Airlines door plug blowout, Alaska Airlines 1282, 737 MAX 9, NTSB final report, AIR-25-04, missing bolts, Spirit AeroSystems, aviation accident investigation, Boeing Renton
```

## Pinned opening comment (§13.8)

```
If you've worked on a production line or in aircraft maintenance: when a part is opened and closed again, how does anyone know it happened where you work? We'd like to hear how it's done in practice.
```

## Captions
`four-missing-bolts.en.srt` (223 cues; rebuilt 2026-11-04: NTSB/FAA/MAX written as text, no one-word tails, from the measured word times; acronyms and the common figures written as
text). Upload as English, "Upload file → With timing". Rebuild: `python3 films/four-missing-bolts/youtube/make_srt.py`.

## Uploaded (10 NOV 2026, by API: `scripts/yt_upload.py`)
https://youtu.be/2IEMyDxu4yU, title 1, thumbnail G, description above, tags, English SRT (serving), Science &
Technology, English, not made for kids, altered or synthetic content No. Private, **public 12 NOV 2026 19:00 UTC**
(Thursday 14:00 ET, the default window). Left for Studio (not in the API): Test & Compare (G, F, D with titles 1–3),
end screen, check the synthetic-content box, pin the opening comment once public.

## Studio checklist (the owner)
- [ ] Upload **Unlisted** first; wait **at least 3 hours** (4K processing, copyright checks, captions indexed).
- [ ] Altered or synthetic content: No (owner, 10 NOV 2026; set by the API).
- [ ] Category: Science & Technology (or Education). Made for kids: **No**. Language: English.
- [ ] Captions: upload the SRT. Chapters: from the description (first line 0:00).
- [ ] Test & Compare: thumbnails D, B, C (A stays on file).
- [ ] End screen (13:31–13:44, the outro card): a subscribe element, plus the next case once it is published
      (§13.6), placed between the channel title and the sources line.
- [ ] Public in the default window: **Thursday 14:00–16:00 US Eastern (19:00–21:00 UK)** (§13.6).
- [ ] After public: pin the opening comment.
