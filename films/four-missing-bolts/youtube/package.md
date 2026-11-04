# The Four Missing Bolts: YouTube package (PLAYBOOK §13.7)

Cut: `four-missing-bolts_master_4k.mp4` (Drive `four-missing-bolts/renders/`), 3840×2160, 60 fps, 15:05.
Chapters below are from `vo/timing.json`, the same timing the master is rendered on.

## Title (pick one; recommended first)
Curiosity-led for the US and UK (owner, 2026-11-04). Each title opens a question the film answers, starts with the
words this audience types (Boeing, Alaska, door plug), and stands on a confirmed row of `claims.csv`. No question
marks, no all-caps, no tabloid words (§13.2). Pair each title with its thumbnail.

| # | Title | The question it opens | Thumbnail | Record |
|---|---|---|---|---|
| 1 | The Boeing Door Plug That Flew 154 Flights With No Bolts | how did it stay in? (Act IV answers it) | E | C22, C20 |
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

## Thumbnails (Test & Compare: E, F, D)
| File | Reads | Built from |
|---|---|---|
| `thumb_e_154_flights.jpg` | 154 FLIGHTS · NO BOLTS | NTSB AIR-25-04 Fig. 1 (public domain, on screen at 0:43): the hole, row 26, the oxygen masks. **Recommended**, pairs with title 1 |
| `thumb_f_108_days.jpg` | 108 DAYS | left: the film's reconstruction of the 19 Sep 2023 photograph, bolt positions circled and empty (labelled RECONSTRUCTION); right: NTSB Fig. 1, 05 Jan 2024. Pairs with title 2 |
| `thumb_d_the_hole.jpg` | NO BOLTS | NTSB Fig. 1 with the record id. Pairs with title 3 |
| `thumb_a_no_bolts.jpg`, `thumb_b_zero_found.jpg`, `thumb_c_no_paper.jpg` (kept, not in the test) | | earlier set; A and C are reconstructions that do not read as an aircraft at browse size |

Rebuild A–C: `python3 films/four-missing-bolts/youtube/make_thumbnails.py <stills> films/four-missing-bolts/youtube`;
D: `… make_thumbnails.py --hole <fig01_interior_hole_row26.jpg> <out>`; E and F: `… make_thumbnails.py --curious
<fig01_interior_hole_row26.jpg> <still at 6:45.9 (frame 24354)> <out>` (Fig. 1 is in Drive
`four-missing-bolts/render-media/img/`).

## Description

```
A Boeing 737-9 MAX (737 MAX 9) door plug flew 154 flights with none of the four bolts meant to hold it down. On 5 January 2024, climbing out of Portland, Oregon, it left Alaska Airlines Flight 1282.

A photograph taken in Boeing's Renton factory 108 days earlier showed no bolts in the three positions it could see. This film reads the final report of the US National Transportation Safety Board (NTSB), record by record: how a 63-pound plug is held, why no removal record was written, why the investigation identified no one who opened or closed the plug, what the US regulator (the FAA) missed, and how the plug walked itself up off its stops. Findings are the NTSB's; our own reading is said as ours.

The photograph at 6:38 is a Boeing photograph reproduced in the NTSB report (Figure 18, page 51, linked below). We show it redrawn and labelled RECONSTRUCTION; the original is in the report.

0:00 Alaska Airlines 1282: the incident
1:36 How a 737-9 door plug is held
3:35 From Spirit AeroSystems to Boeing Renton
5:52 The plug was opened with no removal record
6:38 The photograph: no bolts
7:41 Boeing's removal instruction and the FAA
8:36 The workforce: experience lost
9:46 The buybacks, and what the report says
10:33 154 flights: how the plug walked up
12:06 The NTSB's probable cause
13:35 The fix, and what is still open

Sources
NTSB Aviation Investigation Report AIR-25-04, In-Flight Separation of Left Mid Exit Door Plug, Alaska Airlines Flight 1282 (adopted 24 June 2025): https://www.ntsb.gov/investigations/AccidentReports/Reports/AIR2504.pdf
NTSB public docket DCA24MA063: Structures Group factual report and flight data recorder data: https://data.ntsb.gov/Docket/Document/docBLOB?ID=17305257&FileExtension=pdf&FileName=DCA24MA063%20Structures%20Factual-Rel.pdf
FAA news release, 24 January 2024: https://www.faa.gov/newsroom/faa-halts-boeing-max-production-expansion-improve-quality-control-also-lays-out-extensive
Spirit AeroSystems Form 10-K, FY2023: https://www.sec.gov/Archives/edgar/data/1364885/000162828024006331/spr-20231231.htm
Boeing Form 10-K, FY2019: https://www.sec.gov/Archives/edgar/data/12927/000001292720000014/a201912dec3110k.htm
Boeing Form 8-K, 1 July 2024 (agreement to acquire Spirit AeroSystems): https://www.sec.gov/Archives/edgar/data/12927/000119312524172676/d838733d8k.htm
Boeing Form 8-K, 8 December 2025 (acquisition completed): https://www.sec.gov/Archives/edgar/data/12927/000162828025055825/ba-20251208.htm

Reconstructions and illustrations are labelled on screen; values not from a record are marked ILLUSTRATIVE.
```

## Tags (Studio "Tags" field)

```
Boeing door plug, Alaska Airlines door plug blowout, Alaska Airlines 1282, 737 MAX 9, NTSB final report, AIR-25-04, missing bolts, Spirit AeroSystems, aviation accident investigation, Boeing Renton
```

## Pinned opening comment (§13.8)

```
Four bolts held the plug down; one lower bolt alone would have done. The NTSB named Boeing's parts-removal process and the FAA's oversight. Which layer, in your view, should have caught it first: the instruction, the inspection, or the audit?

The factory photograph at 6:38 is shown redrawn: the original is a Boeing photograph, Figure 18 on page 51 of the NTSB report (link in the description).
```

## Captions
`four-missing-bolts.en.srt` (223 cues; rebuilt 2026-11-04: NTSB/FAA/MAX written as text, no one-word tails, from the measured word times; acronyms and the common figures written as
text). Upload as English, "Upload file → With timing". Rebuild: `python3 films/four-missing-bolts/youtube/make_srt.py`.

## Studio checklist (the owner)
- [ ] Upload **Unlisted** first; wait **at least 3 hours** (4K processing, copyright checks, captions indexed).
- [ ] Altered or synthetic content: the owner's setting (the narration voice is synthetic).
- [ ] Category: Science & Technology (or Education). Made for kids: **No**. Language: English.
- [ ] Captions: upload the SRT. Chapters: from the description (first line 0:00).
- [ ] Test & Compare: thumbnails D, B, C (A stays on file).
- [ ] End screen (14:52–15:05, the outro card): a subscribe element, plus the next case once it is published
      (§13.6), placed between the channel title and the sources line.
- [ ] Public in the default window: **Thursday 14:00–16:00 US Eastern (19:00–21:00 UK)** (§13.6).
- [ ] After public: pin the opening comment.
