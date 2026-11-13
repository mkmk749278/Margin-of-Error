# Titan: status (13 NOV 2026, end of session)

- **Done:** brief, landscape, treatment v2 **approved and promise locked** (owner, 13 NOV); independent treatment review +
  check; opening 0:00-0:45 written first, promise check passed (`script/opening.md`, `script/opening_vo.txt`);
  narration first draft `script/vo_draft.txt` (internal, about 2,160 words: about 15 min of voice).
- **In flight when the session ended:** a max-effort fact-check (fresh context) of the treatment was running; if
  `review/factcheck_treatment_v2.md` is absent, re-run `/fact-check` on `treatment.md` and `script/vo_draft.txt`.
- **Next:** add claim C55 (NTSB PDF p. 64, "Instead, OceanGate monitored the Titan pressure vessel's integrity using its
  RTM system"); expand the narration only with new record material (Brooks testimony, the 2018 MTS letter CG-068, the
  DOTF logbook, NVIC 05-93 and the 1993 passenger-vessel law, the 7-hour notification delay), then state the honest run
  time; creative pass, lean-in test, `vo_lint.py`, `/fairness-pass`, audience review (`prompts/audience_review_v1.md`);
  then the narration to the owner with recording blocks at most 10,000 characters (`vo_blocks.py --max 9500`).
- **Records:** Drive `titan/records/` (official USCG report, CG 112 hearing transcripts, CG-082, CG-100 scan); NTSB
  docket items download from data.ntsb.gov with ID + FileName (see `research/landscape.md`). Local copies in
  `assets/titan/records/` do not survive the session.
