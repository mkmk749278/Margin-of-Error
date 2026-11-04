# The Four Missing Bolts: US and UK audience review of the 4K master (2026-11-04)

**What was reviewed:** the final master `renders/four-missing-bolts_master_4k.mp4` (Drive), 3840×2160, 60 fps,
15:05.26, as US and UK viewers will meet it: the browse tile (title + thumbnail), the first minute, the whole film on
a TV across the room and on a phone held sideways, the captions, the description and the outro.
**How:** one frame from each of the 177 narration sentences, taken from the master at 75% through each sentence and
read at 1080; sequential decodes (2 fps) of 0:00–0:32, 3:06–3:32 and the outro; 4K crops wherever a frame looked
wrong; the SRT checked cue by cue; the narration (`script/vo.txt`) read line by line through the eyes of the
audience in PLAYBOOK §4.1–§4.1c. Loudness and frame integrity were already measured on this file (−14.1 LUFS,
−1.3 dBTP, 0 black or frozen frames; `STATUS.md`).
**Note:** this review was done in the working session through the audience's eyes. It does not replace the independent
panel (`prompts/audience_review_v1.md`, a fresh session), which ran on the script (`audience_v1.md`).

## Verdict
**Ship it.** Nothing in the picture or the sound needs a re-render. The film does what this audience rewards: the
real exhibit with its record id on screen, the finding given as the NTSB's finding, the regulator held to the same
standard as the company, Spirit's and Boeing's side of the story given, and no partisan word anywhere. It reads as an
investigation, not an opinion piece. The weak points are all **in the package**, which is what a US or UK viewer
sees before deciding to click. Fixed in this round: P1–P7 below.

## What will win this audience (keep it for every film)
- **0:00–0:44:** date, then the FDR readout climbing to the NTSB's 14,830 ft, the pressure falling on "dropped" and
  the alarms lighting on their own words. No greeting, no logo. A US mechanic and a UK engineer both lean in here.
- **0:35 / 0:43:** the real NTSB photographs (the hole from outside; Fig. 1, seats 26A/25A) before any graphic.
- **3:13–3:24:** NTSB Figs. 13 and 12. "None of them carried a mark from a bolt": the evidence carries the line.
- **6:47–6:52:** "No bolts. No washers. No nuts. No pins." builds one line per word. This is the moment people will
  quote.
- **9:46–10:33:** the buybacks shown from the 10-K, and then *our own search* of the report showing "0 RESULTS", with
  "not as a cause" said out loud. For a split US audience this is the most trust-building minute in the film: the
  channel names the obvious suspicion and declines to make it a cause.
- **12:17–12:40:** the probable cause read from the record; the FAA's contributing cause gets equal weight.
- **14:27–14:40:** the NTSB members' own words, attributed on screen; Boeing's 20+ corrective actions included.

## Findings
Format: `[time / scene]: what is wrong → why it costs trust or clicks → the fix`.

### Package (fixed in this round)
- **P1 [title]: the recommended title never says "Boeing" or "MAX".** "The Four Missing Bolts: How Alaska 1282 Lost
  Its Door Plug" starts with our phrase, not the viewer's. US and UK viewers search and browse for *Boeing* and
  *Alaska Airlines door plug* (PLAYBOOK §13.1: the search phrase in the first ~40 characters). → **Fixed:** new
  recommended title *Boeing's Four Missing Bolts: The NTSB Final Report on Alaska 1282* (Boeing first; every word on
  the record: the bolts were removed in Boeing's factory and the probable cause names Boeing: `claims.csv` C23, C50).
  The original kept as option 3.
- **P2 [description line 1]: "a Boeing 737-9" only, and the NTSB is never explained.** The public name is "737 MAX 9"
  (the FAA's own release, shown at 12:54, says "Boeing 737-9 MAX"). The narration never glosses the NTSB for UK
  viewers (PLAYBOOK §4.1c asks for it once). → **Fixed:** line 1 now reads "Boeing 737-9 MAX" with "737 MAX 9", and
  names the NTSB as "the US National Transportation Safety Board" and the FAA as "the US regulator".
- **P3 [6:38 / the photograph]: the promised photograph appears as a redraw.** At 1:09–1:19 the film promises "a
  photograph … it shows exactly what was missing". At 6:38 the viewer gets a clearly labelled RECONSTRUCTION
  (correct: Fig. 18 is a Boeing photograph inside the report, `media_manifest.csv` marks it reference-only). Some
  viewers will feel let down and say so in the comments. → **Fixed in the package:** the description and the pinned
  comment now point to the real photograph (NTSB AIR-25-04, Figure 18, p. 51) and say why we show it redrawn.
  That turns a possible complaint into a show of care.
- **P4 [captions]: "N T S B" and "F A A" in 14 captions, "the Max", 26 one-word cues** ("Oregon.", "there.",
  "done."). The caption builder's acronym rule never matched: the word aligner drops the hyphens. On a TV with
  captions on, "N T S B" looks like a machine's work. → **Fixed:** `youtube/make_srt.py` matches the spoken letters,
  writes "MAX", and merges or rebalances one-word tails. Rebuilt SRT: 223 cues, the same words as before (diffed),
  no overlaps, no line over 42 characters, no spaced acronyms. The short cues left are two-word tails or intentional
  beats ("No bolts.").
- **P5 [thumbnail A, "NO BOLTS"]: at phone-browse size the schematic reads as a cupboard or a fridge.** Nothing
  says aircraft. → **Fixed:** new `thumb_d_the_hole.jpg`: NTSB Fig. 1 (public domain, on screen at 0:43, the cabin
  image this audience remembers from January 2024: the hole, row 26, the oxygen masks) with "NO BOLTS" and its record
  id. Real exhibit, no reconstruction. Test & Compare now **D, B, C**; A kept on file.
- **P6 [chapters]: chapter names are labels, not search phrases, and "The money" teases a cause the film rejects.**
  → **Fixed:** search-phrase chapters on the same times (they match the master's sentence starts); "The money" is now
  "The buybacks, and what the report says".
- **P7 [14:52–15:05 / outro]: 13 s of a static title card with no end screen.** → **Fixed in the Studio
  checklist:** add a subscribe element in that window (and the next case once it's published, §13.6), placed between the title
  and the sources line.

### The cut (locked; no re-render; lessons for film 2, added to PLAYBOOK §4.1c and §7)
- **L1 [7:41 and every NTSB line]: the NTSB is never glossed out loud.** A UK viewer who knows the AAIB has to infer
  it. The on-screen gloss exists only for the FAA, as "THE FAA (US)" (8:15). → Next film: "the N - T - S - B,
  America's accident investigator" on its first spoken mention.
- **L2 [0:07, 1:36]: "seven thirty-seven nine" is the record's name; the public's is "seven thirty-seven Max nine".**
  The film says "Max" only once (8:44). → Say the record's name and the public name once, side by side.
- **L3 [14:22]: "One board member wrote…", by ear, right after "its board approved up to twenty billion" (9:56).** A
  TV viewer who looked away may hear Boeing's board. The screen says NTSB MEMBER GRAHAM, so the record is clear;
  the ear is not. → Say "one N - T - S - B board member" whenever another board has been mentioned.
- **L4 [6:27]: "about twenty to seven", and "all round" at 6:12, are British usage.** Most US viewers will follow, but
  a clock time is a number that matters. → Neutral forms: "about six forty", "all around".
- **L5 [1:09–1:22]: the first named open loop (the photograph) lands at 1:09–1:19,** later than the channel's
  "open loop in the first 60 s" rule. The voice-recorder beat at 0:56 holds attention until then, so this is minor.
  → Next film: name the loop before 0:60.
- **L6 [outro, 14:52–15:05]: the sources line runs from x 40 to 1875 at 1080** (cap height ≈ 20 px, measured on the
  4K frame), outside the 90% safe area, where TV overscan or an end-screen element can cover it. → Keep it inside
  x 96–1824 and above the end-screen zone.
- **L7 [9:46–10:33]: watch the retention curve here.** The buyback minute is honest and earns trust, but it is the
  one stretch that ends on "not as a cause". If Studio shows a dip at 48 h or 7 days, then next time put a non-causal
  money record after the cause is settled, or leave it to the description.

### Checked and fine (frames read, not assumed)
- **3:07–3:09 "all four were missing":** the panel reads "HOLDS" until 189.0 s, then "NONE · 0 OF 4 BOLTS" just
  before the word "missing" (189.11 s). It lands on its word. Fine.
- **4:39 "OPENING IT WAS NOT ROUTINE":** looked like "NOTROUTINE" in a downscaled frame mid-reveal; the 4K frame
  at 280.6 s is spaced and clean.
- **Fairness:** "SAID THE COMPANY KNEW" (13:07) attributed; the NTSB's response beside it (13:17); "Spirit later said"
  (5:09); "No one interviewed said they knew" (5:59, 6:56). No motive, no guilt, no partisan word; the FAA's
  failures given equal weight (8:07–8:33, 12:31).
- **Units and dates:** feet, inches and pounds with SI beside them where they carry the physics (63 LB · 28.6 KG;
  29 IN · 74 CM); `05 JAN 2024` everywhere; times with their zone (17:12:33 PST). Reads the same in both countries.
- **Honesty labels:** every reconstruction, illustration and illustrative value is labelled on its frame; real
  exhibits carry their figure and page.
- An early read of two frames (0:22, 0:26) showed Act III pages. That came from a broken grab in this session, not
  the film: the sequential decode of 0:00–0:32 is clean.

## Files changed in this round
- `youtube/package.md`: titles, description, chapters, thumbnails, pinned comment, Studio checklist (P1–P3, P5–P7).
- `youtube/make_srt.py`, `youtube/four-missing-bolts.en.srt` (P4).
- `youtube/make_thumbnails.py`, `youtube/thumb_d_the_hole.jpg` (P5).
- `docs/PLAYBOOK.md`: L1–L7 as lessons. `STATUS.md`.

## Round 2 (owner, 2026-11-04): the most curious package for the US and UK
Each title opens a question the film answers and stands on the record; each has its own thumbnail
(`youtube/package.md`):
1. **The Boeing Door Plug That Flew 154 Flights With No Bolts** + E (`154 FLIGHTS · NO BOLTS` on NTSB Fig. 1).
   It breaks an intuition (how did it stay in?), which is the channel's promise, and Act IV pays it off with the
   physics (stops, 0.40 g, walking up). Recommended.
2. **Alaska 1282: A Photo Showed No Bolts 108 Days Before the Door Plug Blew Out** + F (before/after: the labelled
   reconstruction of 19 SEP 2023 beside Fig. 1 on 05 JAN 2024).
3. **Boeing's Door Plug: Four Bolts Removed, No Record, No One Identified** + D.
Rejected: "Nobody knows who removed the bolts" (a false absolute; the record says the interviews identified no one);
"Boeing knew" (implies knowledge the record doesn't show); any question-mark title (§13.2).
Description lines 1–2 now open on the 154 flights and the 108-day photograph, with the search phrases kept.
