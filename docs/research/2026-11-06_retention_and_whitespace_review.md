# Review of two reports: "Narrative Retention Engineering" and "White-Space and Demand Analysis" (received 2026-11-06)

The owner shared two reports (16 and 19 pages, not kept in the repo): one on voice, pacing, hooks and retention for
investigative video essays, one on under-supplied high-RPM topics and a code-driven production model. This file
records what we adopt, what we check before use, and what we reject, with the reason. The reports cite vendor blogs,
Reddit threads and tool sites, not primary research: every number in them (RPMs, retention percentages, drop-off
times) is a lead, never a fact, until our own Studio data or a primary source confirms it (PLAYBOOK §9).

## 1. Agrees with what we already do (confirmed direction)
- **The "analyst workbench" format** (desktop of real documents, terminal readouts, highlighted lines, programmatic
  charts, a measured voice, tactile foley) is our investigator's desk (§6).
- **Code-driven production** (Remotion, forced alignment to a word-level timing map, programmatic highlights, ffmpeg
  mixing) is our pipeline (§10).
- **A claims matrix** mapping every assertion to file, page and line, and excluding what can't be anchored, is our
  `claims.csv` gate (§9).
- **Mastering** at −14 LUFS integrated, −1 dBTP: our standard (§12).
- **Distrust of PR, outrage and synthetic-sounding narration** in US/UK audiences: our audience research (§4.1b).
- **Thumbnails:** one subject, three or four words, legible at 180 px wide, three variants in Test & Compare (§13).

## 2. Adopt (added to the playbook)
1. **Pace targets for the narration (§7.5b).** Measured on every take with `vo_review.py`: about 145–160 words a
   minute overall; slower (about 125–135) where a document, a number or a transcript is read; a short pause
   (0.2–0.35 s) before a key number or part name; 0.5–0.8 s after the line that shows a primary exhibit. Where the
   voice doesn't give the pause, the edit cuts it in at the word (§10.4). Declaratives end on a falling pitch; a
   rising end (uptalk) on a statement is a re-take.
2. **The opening in three beats (§5).** 0:00–0:10 the anomaly on the record (the exhibit, not a greeting); 0:10–0:25
   the stakes (why this one failure matters beyond itself); 0:25–0:45 the method (which records we read, so the
   viewer knows what the film will audit). It sits inside Act I and keeps the open loop in the first 60 s.
3. **Act turns as a three-step hand-off (§5).** Close the act with its finding; show the new contradiction the
   finding exposes; turn it into the next act's question. Our acts already end on a question; this names the middle
   step.
4. **Sentence mix (§7).** Vary the rhythm on purpose: short declaratives (4–7 words) as anchors, tension clauses
   (12–18), explanatory sentences (22–32) for mechanisms and chains of custody, and a short downbeat (8–12) to close a
   point. Active voice with the actor named, where the record names one (fairness rules still apply, §9.6).
5. **The ambience bed lower (§12, to test).** The report puts the room bed 34–38 dB under the voice and document foley
   24–28 dB under it; ours sits about 17 dB under. Next mix: measure both against the voice and try the room bed at
   −34 dB relative, by ear on a phone and on headphones, before changing the standard.
6. **Voice polish chain (§12), only if a take needs it:** high-pass at 80 Hz, a narrow cut of 2–3 dB at 250–350 Hz
   for boxiness, a gentle +1.5 to +2 dB near 3.2 kHz for consonants on phone speakers, a de-esser at 5.5–7.8 kHz.
   Never a pitch shift.

## 3. Check before use
- **Retention and satisfaction mechanics** ("dip-and-rebound" curves from viewers scrubbing back to a document,
  7-to-30-day return rate, survey-based "valued watch time"): plausible and consistent with YouTube's own public
  statements on satisfaction, but the numbers in the report are unsourced. Read our own Studio retention graphs at
  24 h / 7 d / 28 d (§13.6) and keep what they show.
- **RPM ranges by topic** ($14–$45): vendor estimates. Not a reason to choose a case; the record and our edge are.

## 4. Reject, with the reason
- **`...` ellipses, ALL-CAPS for emphasis, bracketed emotion tags, SSML break tags.** Owner's rulings (2026-11-03):
  the voice reads `...` as vocal fry or a whisper, words in capitals get spelled, tags change the voice. Our pauses
  come from commas, colons, em-dashes, paragraph breaks and the edit (§7.5). `vo_lint.py` enforces it.
- **Stability 55–72% on Multilingual v2 or Turbo v2.5.** The owner chose Eleven v4 (2026-11-03) and, for the new
  voice, stability Natural 0.5 (2026-11-06).
- **The sample hook scripts' facts** (dollar figures, aircraft counts, "never installed" wording, quartz and
  defence numbers): unsourced. Our Film 1 used only what the NTSB record says.
- **Topic verticals outside our domain:** sanctions shadow fleets, defence procurement and war attrition, mineral
  concessions in other regions, and the "Global South to Global North" framing. CLAUDE.md: corporate, regulatory and
  mechanical failures in the US, UK, Canada, Australia and Europe only; no geopolitics from other regions.
- **Framing foreign events as threats to "domestic Western" viewers** ("The Single Chinese Refinery Capable of
  Grounding…"). Fear framing and an outsider's voice; our titles state the exact true margin (§13.2).
- **Hard cuts to absolute silence** for drama. Owner, 2026-11-03: no dead air; a dip, never a dropout (§12).
- **Corporate Docket "lawfare" as a vertical with prison-predicting titles** ("…That Will Send This Tech CEO to
  Prison"). No criminal guilt without a conviction; pending cases said as pending (§9.6). Court records remain our
  primary sources within our domain.
