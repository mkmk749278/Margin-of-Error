---
name: fairness-pass
description: Line-by-line fairness and legal-risk pass over every sentence about a real company, regulator or person in a Margin of Error film (narration, screen text, title, thumbnail, description, comment replies), at max effort, against US and UK defamation and UK contempt rules. Use before the narration goes to the owner and after any change to those lines.
---

# Fairness pass

Rules: PLAYBOOK §9.6, the UK column of §4.1c, §4.1b (a split US audience). `max` effort. This is a care check, not
legal advice: anything still doubtful goes to the owner as a choice (AskUserQuestion).

For every line that names or implies a company, regulator, board, executive, worker or group:
1. **Attribution:** a finding is said as the investigator's ("the N - T - S - B found"); an allegation as an
   allegation ("a lawsuit alleges"), with the other side's public response if one exists, sourced in `claims.csv`.
2. **Status and date:** pending cases said as pending, "as of" a stated date; a settlement is not an admission.
   UK: if an arrest or charge has happened, proceedings may be active (Contempt of Court Act 1981): stop and ask.
3. **No guilt without a verdict:** no "criminal", "fraud", "cover-up", "negligent" unless a court or regulator found it.
4. **Individuals:** only in their public role, only what the record shows them doing; no motive, no state of mind
   ("knew", "wanted", "ignored") without a document that says so.
5. **Our reading labelled as ours** ("Read together, these filings suggest…") and it must be a fair reading: would
   the company's own lawyer call it accurate, if unwelcome?
6. **Even-handed:** the regulator's decisions get the same scrutiny; no partisan words; no sneer at workers, crews,
   unions or a country; victims with dignity.
7. **Pictures and package count too:** a red circle on a part implies a finding; a title implies knowledge; a
   thumbnail word is a claim.

Write `films/<slug>/review/fairness_vN.md` (line → risk → fix → status), make the fixes, re-run `/fact-check` on the
changed lines.
