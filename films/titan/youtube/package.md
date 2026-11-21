# Titan: YouTube package (PLAYBOOK §13.7)

Cut: `titan_master_4k.mp4` (Drive `titan/renders/`), 3840×2160, 60 fps, 23:41.3 (85,279 frames), v11's picture,
rendered 21 NOV 2026. Mix −14.0 LUFS. Chapters from `vo/timing.json`, the timing the master is rendered on.
Release: **Saturday 21 NOV 2026, 8:30 PM IST (15:00 UTC; 10:00 AM US Eastern, 3:00 PM UK)**, uploaded private and
scheduled by API (owner, 21 NOV 2026). Studio: "Altered or synthetic content" No, Science & Technology, not made for kids.

## Titles: the locked three (treatment.md, approved 13 NOV 2026; one promise)
The promise: Titan's own hull monitor recorded the damage on dive 80, 15 JUL 2022, eleven months before the implosion;
plotted against depth, as the NTSB later did, the change is there; OceanGate sent it back down. Sentence 1 of the film
confirms it ("This is the strain in Titan's hull on dive eighty…"), the chart on screen from frame 0.

| # | Title | Thumbnail | Record |
|---|---|---|---|
| 1 (main, uploaded) | The NTSB Graph That Shows Titan Was Damaged 11 Months Before It Imploded | A · SAME DATA | C01, C08, C11, C12 |
| 2 | Titan's Own Sensors Recorded the Damage. OceanGate Sent It Back Down. | B · SENT BACK DOWN | C08, C11, C13, C15 |
| 3 | Same Data, Different Axis: The Titan Damage OceanGate Missed | C · 4.74 → 8.76 | C11, C12, C41, C112 |

```
The NTSB Graph That Shows Titan Was Damaged 11 Months Before It Imploded
```

```
Titan's Own Sensors Recorded the Damage. OceanGate Sent It Back Down.
```

```
Same Data, Different Axis: The Titan Damage OceanGate Missed
```

Search-safe fallback (click-through low after 7 days):

```
Titan Submersible Implosion: What the NTSB and Coast Guard Reports Found
```

The 30+ variants are in `brief.md` (Package). Rejected from an outside schedule note: thumbnail text "THEY KNEW"
(an implied knowledge claim no report makes, §13.2).

## Thumbnails
Built in Canva on real record images: the US Coast Guard's photographs of Titan's recovered carbon fibre debris
(DVIDS 9057369, 9057368; US government works) and the film's own NTSB-data charts (`src/`). No generated imagery.
| File | Pairs with | Built on |
|---|---|---|
| `canva_a_same_data.jpg` (uploaded) | title 1 | debris photo 9057369 + the NTSB strain-vs-depth re-plot (`src/plot_depth_ntsb.jpg`) |
| `canva_b_sent_back_down.jpg` | title 2 | debris photo 9057369 + the film's dive record 75–88 (`src/dive_record.jpg`) |
| `canva_c_slope.jpg` | title 3 | debris photo 9057369 + the NTSB slopes 4.74 (dive 80) → 8.76 (dive 81), C41 |
Canva designs: A https://canva.link/hi1rc1qsq7p99em · B https://canva.link/va11pqwg56quf1f · C https://canva.link/fj8m9bxk70p9nx0.
**Rejected:** Canva's first B invented an "OceanGate dive record" table (made-up dates, durations and depths under
OceanGate's logo): a fabricated record. Every element of it was deleted and the film's real dive chart placed instead.
The first set, built from master frames, is kept: `make_thumbnails.py` (`thumb_a/b/c_*.jpg`).

## Description
`description.txt` (line 1: case name, record id, the core fact; chapters; sources; corrections line).

## Tags
titan submersible, oceangate, titan sub, titan implosion, ntsb titan report, coast guard titan report, oceangate
titan, titan dive 80, titan sub documentary, stockton rush, carbon fiber hull, titan submarine, titanic submersible

## Pinned comment (post within 60 s of going public)
```
Every finding in this film is from the NTSB report MIR-25-36, the US Coast Guard Marine Board report and hearing transcripts, and Canada's TSB report M23A0169; the sources are linked in the description. The strain charts are drawn from the NTSB's published data. If you know the record and see something we got wrong, reply with the source and we will pin the correction.
```

## Captions
`titan.en.srt` from `make_srt.py` (measured word times; the hearing clips captioned from the official transcript).
