# The Four Missing Bolts: YouTube package (PLAYBOOK §13.7)

Cut: `four-missing-bolts_master_4k.mp4` (Drive `four-missing-bolts/renders/`), 3840×2160, 60 fps, 15:05.
Chapters below are from `vo/timing.json`, the same timing the master is rendered on.

## Title (pick one; recommended first)
Recommended (audience review 2026-11-04, `review/audience_us_uk_4k.md` P1): US and UK viewers search and browse for
*Boeing* and *Alaska Airlines door plug*, so Boeing leads. Every word is on the record (C23, C50).

```
Boeing's Four Missing Bolts: The NTSB Final Report on Alaska 1282
```

```
The Alaska Airlines Door Plug: Four Missing Bolts and the Record No One Wrote
```

```
The Four Missing Bolts: How Alaska 1282 Lost Its Door Plug
```

## Thumbnails (Test & Compare: D, B, C)
| File | Reads | Built from |
|---|---|---|
| `thumb_d_the_hole.jpg` | NO BOLTS | NTSB AIR-25-04 Fig. 1 (public domain, on screen at 0:43): the hole, row 26, the oxygen masks. **Recommended**: the real exhibit this audience remembers |
| `thumb_b_zero_found.jpg` | 4 BOLTS. 0 FOUND. | NTSB AIR-25-04 Fig. 13, the bolt holes (public domain) |
| `thumb_c_no_paper.jpg` | NO PAPER | the film's removal-record card with its NO RECORD FOUND stamp (labelled RECONSTRUCTION) |
| `thumb_a_no_bolts.jpg` (kept, not in the test) | NO BOLTS | the film's reconstruction of the 19 Sep 2023 photograph; at browse size it does not read as an aircraft (review P5) |

Rebuild A–C: `python3 films/four-missing-bolts/youtube/make_thumbnails.py <stills> films/four-missing-bolts/youtube`;
D: `python3 films/four-missing-bolts/youtube/make_thumbnails.py --hole <fig01_interior_hole_row26.jpg> films/four-missing-bolts/youtube`
(the figure is in Drive `four-missing-bolts/render-media/img/`).

## Description

```
On 5 January 2024 a door plug left Alaska Airlines Flight 1282, a Boeing 737-9 MAX (737 MAX 9), over Portland, Oregon. The US National Transportation Safety Board (NTSB) found that all four bolts meant to hold it down had been removed in Boeing's Renton factory and never put back, and that no record of the removal was ever written.

This film follows the investigators' record: how the plug is held, the 108 days between a factory photograph and the accident, the removal instruction, the workforce and the US regulator (the FAA), and the NTSB's probable cause. Findings are the NTSB's; our own reading is said as ours.

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
Boeing door plug, Alaska Airlines 1282, 737 MAX 9, NTSB final report, AIR-25-04, missing bolts, Spirit AeroSystems, aviation accident investigation, Boeing Renton
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
