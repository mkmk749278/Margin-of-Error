# The Four Missing Bolts: what existing films on the case got wrong, and what viewers asked (2026-11-03)

Owner's ask (2026-11-03): "go through YouTube, what if all did wrong". Method: the YouTube Data API (read-only, the
existing channel access) for the most-viewed videos on the case, and the 100 most relevant top-level comments on six of
them, read in full; plus two web searches for published critiques (thin: no fact-check of a specific video was found).
Channels are described, not named (repo rule). Study data only: nothing from these videos goes into our film.

## The field
| Kind | Length | Published | Views (2026-11-03) |
|---|---|---|---|
| Pilot-educator deep dive | 41 min | Mar 2024 | 1.95 M |
| Pilot/mechanic news channel, first-day video | 8 min | Jan 2024 | 0.51 M |
| Same channel, preliminary report | 19 min | Feb 2024 | 0.24 M |
| Newspaper business explainer | 7 min | Jan 2024 | 0.33 M |
| Short explainer (vertical) | 1 min | Jan 2024 | 0.41 M |
| Aviation news site | 5 min | Mar 2024 | 0.05 M |
Every high-view film was made **between January and March 2024**, before the NTSB's final report (24 June 2025) and
its docket. The search results hold no comparable long-form film built on the final report.

## What went wrong, or was missing
1. **Built before the record.** First-week videos blamed the airline (pressurisation warnings, restricted routes); the
   final report found those unrelated. Viewers said it themselves: "many stories premature, not completely correct,
   often incomplete". → *Our edge is the final report and the docket. Say so in the package ("The Final Report").*
2. **The plug-door paradox left unanswered.** The most common puzzled comments: "plug doors are larger than the frame,
   pressure forces them in, so how could it come out?", "it doesn't even fit out the hole", "coming off so cleanly is
   puzzling". Several films said "the bolts were missing" without showing *why* bolts matter on a pressure-held plug.
   → *Act II must make that visible: pressure pushes outward onto the 12 stops (cyan arrows); the stops cannot stop
   an upward move; half an inch up, the pins clear the pads and the top can swing out. The bolts are the only thing
   against "up". Picture first, then the sentence.*
3. **"What", not "why".** A short explainer was told "great job on the what, the why was lacking"; another "failed to
   explain the bolts". → *Act III is the why, from the record, and it stops where the record stops (finding 27).*
4. **Wrong expansions of factory terms.** A former Boeing worker corrected one film: NCR is a NonConformance
   **Report**, SAT the **Shipside** Action Tracker. → *On screen, any document name is spelled exactly as the report
   spells it, or not at all. Our narration avoids the acronyms.*
5. **Speculation and conspiracy filled the gaps.** Comment threads drift to a whistleblower's death, "Boeing ad
   disguised as news", "the zip tie had magical qualities". → *We never fill the gap the record leaves (who opened, who
   closed). We say "the record does not say", and show the silence. That restraint is the brand.*
6. **Crew blame.** A deep dive's top comment (815 likes) defends the pilots against the film's criticism. → *Our film
   makes no judgement of the crew; the overwritten voice recorder is stated as a fact, no blame.*
7. **Tone.** The best-liked praise is for "crystal clear, logical, unbiased, factual", "superb graphics", "telling the
   whole story with new details". Viewers punish bias in either direction. → *Clinical voice, every number sourced on
   screen, the other side's words where they exist.*

## What we apply in the build
- Act II's opening schematic shows the pressure-holds-it-in intuition first, then breaks it (rows 11–13).
- A source strip on every exhibit and readout; the record ids in the description.
- The film's own question at 2:30, answered by the record, not by opinion.
- Package: lead with the final report (title B in `treatment.md`), because the field is two years old.
