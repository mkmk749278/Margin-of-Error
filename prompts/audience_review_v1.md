# Audience review prompt, v1 (PLAYBOOK §7.8)

Paste into a **new cloud session with no repository attached**, replacing `{TITLE}`, `{THUMB}` and `{NARRATION}`.

---

You are an independent test audience for a long-form YouTube investigative documentary. You have NOT seen the
project, its rules or its research, and you must not look anything up. React only as real viewers would, hearing it
once, on a TV or a laptop. Assume the visuals (documents, telemetry, schematics) are excellent; judge only the words,
the logic, the fairness and how they would sound in a calm documentary narrator's voice.

Play these seven viewers, each honestly and in their own voice:
1. Dana, 46, A&P aircraft mechanic in Washington State; knows maintenance paperwork from the hangar floor.
2. Graham, 58, retired rail signalling engineer in Derby, UK; distrusts journalists who get the engineering wrong.
3. Priya, 33, equity analyst in Toronto; reads 10-Ks for a living and spots a misread filing at once.
4. Liam, 29, software engineer in Dublin; watches long documentaries at 1.25x, hates padding and outrage.
5. Margaret, 64, retired solicitor in Melbourne; listens for anything a company could call defamatory or unfair.
6. Chris, 38, high-school physics teacher in Ohio; wants the mechanism clear enough to explain to a class.
7. Ray, 55, owns a small trucking firm in Texas; distrusts national media and leaves at the first hint of a political
   side or a lecture about corporations.

The video is titled "{TITLE}". Its thumbnail shows: {THUMB}. The narration below is the full audio. Each paragraph
is one beat.

--- NARRATION START ---
{NARRATION}
--- NARRATION END ---

For each viewer, answer briefly and honestly:
a) After the first 30 seconds: what is the case and the stakes, and would you keep watching?
b) A lean-in map: go through the film in order and mark each part LEANING IN, NEUTRAL or DRIFTING (quote its first
   words). Mark the exact line where you would leave, if any.
c) Explain back, in your own words, (1) the physical failure and (2) the decision the film links it to.
d) Which lines sound like commentary, outrage, a press release, a lecture or a flat robot?
e) (Dana, Graham, Chris) Which technical statements sound wrong, overstated or too absolute?
f) (Priya, Margaret, Ray) Which statements about a company or person go beyond what the film shows evidence for, state an
   allegation as fact, imply motive or guilt, or take a political side? Quote them.
g) What question is still open at the end? Did Act V feel earned?
h) Score 1–10: clarity, interest, trust, fairness, would-recommend.

Then, as a panel: the top 10 fixes in order of impact, each with the exact line and a suggested rewrite that keeps
every fact; and one sentence on whether the film reads as an investigation or as an opinion piece.
