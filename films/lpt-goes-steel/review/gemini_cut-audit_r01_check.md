# Gemini cut audit of r01 (720p, 14:27): checked (28 NOV 2026)

Gemini's note: `gemini_cut-audit_r01.md`. Audio (-14.0 LUFS / -1.7 dBTP) and pacing approved by Gemini; neither is
touched in r02. Each point checked in the code and on 720p stills rendered from the fixed code.

| # | Point | Our check | Verdict | Fix in r02 |
|---|---|---|---|---|
| 1 | 14:20–14:27 end card: the coil behind the lockup hurts the tagline | Outro drew the lockup straight over the lit coil; tagline in `sub` grey | CONFIRMED | Dark radial scrim (void, 0.92 at centre) fades in with the lockup; tagline in `ink`. Still at f52040: tagline crisp, coil a dim shape |
| 2 | 07:33–07:40 USTR reveal opens on the blank red ARCHIVE page | `Announce08` opened `ustr_mexico` p. 1 (the archive notice) before p. 2 | CONFIRMED | Opens on p. 2, focused on the headline and the 05 NOV 2020 body (`focus y 240`); the highlighted p. 2 follows on the same page |
| 3 | 08:59–09:01 Cliffs 02 NOV 2020: "condemnation" sentence peeks in behind the 1,400 TONS counter | The rostrum camera's slow creep reached page y ~1706 (the CEO quote) | CONFIRMED | New `cropH` on `Doc`: the page is cut at y 1400, the end of paragraph 2 ("Zanesville, Ohio."); the sentence can't enter the frame |
| 4a | 02:05–02:19 "232 REPORT PP. 41–42" clipped right | Strip text wider than its row (RECONSTRUCTION at 36 px + 86 chars) | CONFIRMED | Source shortened ("SLOWED: …"); ends inside the frame at 720p |
| 4b | 03:10–03:19 "GAP NOT TO SCALE" clipped | Same: 101-char source | CONFIRMED | Honesty words moved into the large label: "RECONSTRUCTION · GAP NOT TO SCALE"; source "232 REPORT P. 104 · TRAN-COR H TABLE 7" (the widths are on the calipers) |
| 4c | 09:09–09:19 Howard pill clips | Pill ran ~2,000 px wide | CONFIRMED | Source "HOWARD INDUSTRIES · BIS-2025-0023-0784 · 21 OCT 2025", title "CROPPED TO ITS FINDING"; fits with margin |
| 4+ | (ours) other strips and pills near the edge | Width audit of every `Strip`/`Photo`/`Doc` label | — | Two photo strips (1:31 Schnabel cars) dated to the year; DOE 2014 pill "THE BODY · P. 35" printed the page twice, now "THE BODY" |
| 5a | 10:31 caption "A COOPERATIVE'S SUBSTATION" | PARTLY: the photo's sign is NOVEC's (a cooperative, `media_manifest.csv`), so the caption was true, but over the South Carolina co-op's testimony it reads as that co-op's substation | PARTLY | "A US UTILITY SUBSTATION · MANASSAS PARK, VIRGINIA, 2016" |
| 5b | 13:38 2030 GAP counter should glide down 14.5 → 5.0 | It rolled 0 → 14.5 then dropped to 5 in 0.85 s | CONFIRMED | Appears at 14.5% on "fourteen point five", glides to 5.0% from "percent" to "five" (+14 frames) |

Gates after the fixes: `tsc` clean, `claims_check.py` passes, `text_floor.py` 0, `sync_audit.py` 0 fails.
