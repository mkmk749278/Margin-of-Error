# The Four Missing Bolts: Shorts S1-S3 in the reel form (12 NOV 2026)

Owner, 12 NOV 2026: re-make the three scheduled Shorts in the reel approach (PLAYBOOK §13.5, §13.5a) and schedule
them; the old three deleted. Scripts approved by the owner. One change after approval, for accuracy: S2's "Here it
is" became "Here is what it showed", because the factory photo is Boeing's (reference only in our licence log) and is
shown as the film's labelled RECONSTRUCTION, not as the photo itself.

| Short | Folder | Hook | Length | YouTube |
|---|---|---|---|---|
| S1 (FMB4) | `short_s1/` | the myth: "a design flaw" vs four bolts where one would do | 24.2 s | https://youtu.be/wAqQ46A5VMU, 13 NOV 17:00 UTC |
| S2 (FMB5) | `short_s2/` | the photo: no bolts, no washers, no nuts, no pins | 23.6 s | https://youtu.be/dlogilXaxnc, 14 NOV 17:00 UTC |
| S3 (FMB6) | `short_s3/` | 154 flights, half an inch | 27.4 s | https://youtu.be/WWA2GlRqnkA, 15 NOV 17:00 UTC |

- **Voice:** Marcus, Eleven v4; every take 100% of words as written (`vo/review/`). Takes were 161-169 wpm, above
  the 145-160 band, so the voice was slowed 6% (S2 4%) with ffmpeg `atempo`, pitch kept.
- **Facts:** S1 C14, C15 (one lower bolt would have held; all four missing); C01. S2 C35, C69 (the texted photo,
  108 days), C15. S3 C20, C21, C22 (likely walked upward, 154 cycles, about half an inch, not detectable on a
  walk-around). Report pages: AIR-25-04 cover (adopted 24 JUN 2025), p. 67, probable cause.
- **Pictures:** NTSB photos from Flickr (public domain), report figs 1, 2, 13, 14, pages; the master's illustrations
  and the fig. 18 reconstruction, every one labelled.
- **Checks:** −14.2 to −14.3 LUFS, −1.4/−1.5 dBTP; no black or frozen frames; frames looked at every cut and cue.
- **Build:** `python3 scripts/reel_build.py films/four-missing-bolts/short_sN`, render `ReelMyths` with its
  `reel.props.json`.
