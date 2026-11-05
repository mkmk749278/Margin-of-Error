---
name: review-cut
description: Review a rendered Margin of Error cut before anyone sees it - measured checks (flash, freeze, stillness, judder, legibility, loudness, lengths), the shot-word audit and sentence pass, honesty labels and source tags, frames against the audio, and a creative pass - and write the round's picture gate file. Use after every render.
---

# Review a cut

Rules: PLAYBOOK §14.2 (picture gate), §6.4, §6.7, §9.4, §10.6, §12. `high` effort or above; final cuts at `max`.

1. **Measure the decoded cut:** flash frames (darker than 45% of both neighbours; 1–9-frame shots at cuts), frozen
   holds (`freezedetect=n=0.002:d=1.5` at 480p), `python3 scripts/stillness_audit.py <cut.mp4>` reads 0, judder
   (`tblend` difference), black frames, loudness (`ebur128`: −14 LUFS ±1, −1 dBTP), picture = film length, audio
   within 0.15 s.
2. **Frames against the words:** `python3 scripts/contact_sheet.py <cut.mp4> --out <qa> --every 0.5` (two frames a
   second), each read beside the words heard at its timecode in `vo/timing.json`, at 720p size. Text: 36 / 26 px floors, no fact in `muted`, inside the 90%
   area, off grid lines, not clipped, clear of the player's overlays.
3. **Shot-word audit and sentence pass:** every shot with its words, graded WRONG / WEAK / OK; one strip per sentence
   read against the sentence. Record ids, names, years, places and numbers are the hard cases.
4. **Evidence:** every exhibit has its source strip, every readout its claim id or ILLUSTRATIVE VALUES,
   reconstructions labelled, real records unaltered, one desk pose, on-screen numbers match the voice and
   `claims.csv`.
5. **Act checks:** the record in the first 5 s; open loop by 1:00 and paid when promised; the act-I question by 2:30;
   channel name only in the outro.
6. **Creative pass** over the whole film: what would make each weak moment unforgettable, inside the hard lines?
7. Write `films/<slug>/review/picture_gate_rN.md` (issue → time and scene → fix). Fix everything in one round, render
   the next cut, review again. Nothing goes to the owner with an open blocker. Outside notes: check each first
   (§14.3), close the round in the `_check.md`.
