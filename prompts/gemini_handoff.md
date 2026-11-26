# Gemini handoff request templates

`scripts/gemini_handoff.sh new <slug> <task>` copies one section below into `films/<slug>/handoff/to_gemini.md`
under its front matter. Fill every `<fill: …>` line (push refuses a file that still has one), cut what does not
apply, add what this film needs. Never name anyone or anything outside this channel in a request. Gemini's answer is
a list of leads: each point is checked and logged (PLAYBOOK §14.3).

## task: research
## Files in Drive to inspect
- Case brief: <fill: Drive link to brief.md>

## Specific checks requested
1. Run Deep Research (really run it; open every page you cite) on the case: <fill: case in one line>.
2. What everyone says: the 3–5 strongest YouTube films on it (views, length, angle, what their top comments ask) and
   the common news line.
3. What the record says: NTSB / CSB / FAA / FERC-NERC / DOE / HSE / TSB / ATSB reports, dockets, SEC filings, court
   records, hearing transcripts; each point with its URL, record id and the exact sentence.
4. The dated, documented decision that traded a safety margin for a financial one, if the record shows one; the
   other side's public response.
5. Exhibits that exist (report figures, docket photos, public hearing video, released radio calls) with links.
6. Search words US and UK viewers type.
Do not write a script or a title.

## task: fact-check
## Files in Drive to inspect
- Narration: <fill: Drive link to narration.md>
- Claims file: <fill: Drive link to claims.csv>

## Specific checks requested
1. For every row of claims.csv: open the source URL. Is the quote on the page? Does it support the narration line
   exactly (number, unit, date, name, tense, who found it)? Answer per row: OK / WRONG / UNSUPPORTED / SOURCE DEAD,
   with the correct figure and a better primary record where you find one.
2. Any factual line without a row; any allegation said as fact; any pending case said as settled; any absolute
   ("never", "zero", "permanent") the record does not support.
3. Fairness: any line about a real company or person a US or UK lawyer would flag, and why.

## task: fresh-facts
## Files in Drive to inspect
- Claims file: <fill: Drive link to claims.csv>
- Package: <fill: Drive link to youtube/metadata.json>

## Specific checks requested
1. Anything new in the last 30 days (final reports, rulings, settlements, recalls, statements) that changes or dates a
   line, the title or the description? Give the page and its date.
2. Every "now", "still", "currently" row: still true today?

## task: narration-review
## Files in Drive to inspect
- Narration: <fill: Drive link to narration.md>
- Locked promise (title + thumbnail concept): <fill: one line>

## Specific checks requested
Read it as five viewers: a US airline pilot, a UK civil engineer, a Canadian finance analyst, an Australian
mechanic, and a curious German software developer watching in English.
1. Does sentence 1 keep the thumbnail's promise? Open loop by 0:30, the question by 2:30, re-hooks near 3 and 6 min?
2. Where would each viewer stop watching? Quote the line.
3. Any line that sounds like commentary, outrage, PR or an AI voice-over script; any partisan word; any US body not
   glossed for UK viewers or UK body not glossed for US viewers.
4. Scores 1–10 per viewer: watch to the end, trust, subscribe.

## task: audio-audit
## Files in Drive to inspect
- Takes (in order): <fill: Drive links to the enhanced takes>
- Script: <fill: Drive link to narration.md or vo.txt>

## Specific checks requested
Listen to every file in full against the script. The voice is clinical, precise, understated, never dramatic.
1. Wrong, skipped, repeated or added words.
2. Every number, date and decimal read exactly as scripted; acronyms letter by letter as written.
3. Names and places: any mispronunciation, with how it sounded.
4. Delivery: uptalk, vocal fry or whisper, breathiness, swallowed endings, robotic or glitchy spots, clicks,
   loudness, tone or room changes between files.
5. Pace: rushed numbers, quotes or document lines; missing pause before a key number or after an exhibit line.
6. Re-take list (exact sentences, in order of importance) and a keep list (5 best moments). Scores 1–10: clarity,
   naturalness, authority, pace, consistency.

## task: cut-audit
## Files in Drive to inspect
- 720p review cut: <fill: Drive link>
- Narration: <fill: Drive link to narration.md>

## Specific checks requested
Watch it in full as a US viewer on a TV across the room, then as a phone viewer holding it sideways.
1. Any still or hold over 1.5 s, any stretch that looks like slides (dark cards, text panels, names on black), any
   frame with nothing real in it.
2. Every critical noun, number and verb: does its picture land on its word? Drift over 100 ms?
3. Text too small to read on a phone; honesty labels (RECONSTRUCTION, ILLUSTRATION) missing where a viewer could be
   misled; on-screen dates not in `05 JAN 2024` form.
4. Music or sound clashing with the voice, dropouts, dead air.
5. The first 30 seconds: would you keep watching? Where in the film would you leave, and why?
6. Return a fix list as a Claude Code spec: timestamp, what is wrong, the exact change.

## task: analytics-audit
## Files in Drive to inspect
- Studio export or screenshots: <fill: Drive link>

## Specific checks requested
1. Read impressions, CTR, average view duration, retention dips, traffic sources, countries, devices, subscribers per
   film; progress to 1,000 subscribers and 4,000 public watch hours.
2. Where viewers leave (timestamps) and why, from the film itself.
3. Three changes for the next film, most valuable first.

## task: second-opinion
## Files in Drive to inspect
- <fill: Drive links>

## Specific checks requested
1. <fill: the exact question>

## How to answer (every task)
Save the answer as `from_gemini.md` (a file or a Google Doc named from_gemini) at the `return_path` above. If you
cannot write to Drive, email the whole answer instead, subject `[GEMINI-RESULT] <repo> <slug> <task_type>`.
Start with this front matter, then the sections:
```
---
repo: <repo>
slug: <slug>
task_type: <task_type>
completed_ist: YYYY-MM-DD HH:MM IST
verdict: APPROVED | FIXES_REQUIRED | DO_NOT_PROCEED
---
```
1. Verdict in one sentence. 2. Findings, most serious first, each with a timestamp (file, mm:ss) or line, what you
saw or heard, why it matters to the viewer, and the exact fix. 3. What is good and must be kept. 4. Anything you
could not open or check (say so; never guess). Every fact you report carries the URL of the page you opened.
