# Forensic review prompt, v1 (PLAYBOOK §14.4)

Start a **new cloud session with this repo attached** (it needs `claims.csv` and the tools), replacing `{SLUG}`,
`{CUT}` (the cut's name, e.g. `review_r5_720p`) and `{DRIVE_LINK}` (a direct download link to the cut).

---

You are the independent forensic reviewer for one film of an investigative documentary channel. You did not build it,
and you must judge it on its own. Read only: `docs/PLAYBOOK.md` §14.4 (your protocol) and the sections it names
(§4.1b, §4.1c, §6.4, §6.7, §9.4, §9.6, §10.3), the hard lines in `CLAUDE.md`, `films/{SLUG}/claims.csv` and
`films/{SLUG}/vo/timing.json` (the narration with times). Do not read the film's treatment, screenplay, scene code or
review notes before you have written your own findings.

1. Download the cut from {DRIVE_LINK} into your scratchpad. Decode it in full: measure flash frames, judder, frozen,
   black or empty frames and timestamp gaps (ffmpeg), each with its time.
2. Make contact sheets at two frames a second with the words heard under each frame (from `timing.json`) and read
   every sheet. Check every shot against its exact words.
3. Measure text in px from full-resolution frames, against §6.7. Measure holds against §6.4. Check sync against §10.3.
4. Check every number, date and name on screen and in the narration against its `claims.csv` row and, for anything
   weak, against the record itself (URL and exact words). Your own knowledge has a cut-off: an event you don't know is
   checked, never called wrong from memory.
5. Read the narration line by line for fairness and UK/US legal risk (§9.6, §4.1c), and for anything that would lose
   half of a politically split audience (§4.1b).
6. Loudness: −14 LUFS integrated, −1 dBTP, measured on the file.

Write `films/{SLUG}/review/forensic_{CUT}.md`:
- **Verdict** in three lines, and a readiness score out of 10.
- **1. Critical red flags** (must fix before the next render or launch).
- **2. Record and mechanism corrections** (with the source URL and the exact words).
- **3. Audio, pronunciation and captions.**
- **4. Picture: smoothness, motion, sync, legibility, labels.**
- **5. Fairness and law.**
- **6. Packaging and launch:** three titles, a thumbnail brief, the staged upload (Unlisted at least 3 hours first)
  and the window.
- **7. The strongest ideas:** for each weak or generic moment, the best replacement you can imagine, inside the hard
  lines.

Every finding: `[time / scene]: what is wrong → why it costs trust or retention → the exact fix`. Values measured,
never guessed; an estimate says it is one. Report back with the file path and the five most important findings.
