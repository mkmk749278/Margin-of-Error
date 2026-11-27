# Check of Gemini's narration review (narration v1; 28 NOV 2026)

Source: `gemini_narration-review_v2.md` (no front matter; average 9.14 watch / 9.56 trust / 9.00 subscribe). Applied in
narration v2 together with the fairness pass (`fairness_v1.md`).

| Lead | Result | Fix in v2 |
|---|---|---|
| "the same official's written testimony" asks the viewer to remember an unnamed lower-third | CONFIRMED | "that Energy Department official's written testimony" |
| Cleveland-Cliffs first named at the datasheet without linking it to "the one mill" | CONFIRMED | "That one mill belongs to Cleveland-Cliffs, at Butler Works in Pennsylvania." (C10, C61) |
| UK glosses: the Congressional Research Service; the Defense Production Act; "the President" | CONFIRMED | "the research arm of Congress"; "a presidential determination under the Defense Production Act" (C57); "the U - S President"; USTR glossed too (fairness, C99) |
| 50% on steel content → 25% on full value reads as up or down | CONFIRMED | "Since April twenty twenty-six, the charge on cores has changed: twenty-five percent, on their full value." (C55) |
| "the circumvention claim" names a claim never stated | CONFIRMED (also fairness row 6) | who argued it (members of Congress, C98) and Canada's reasons (C48) |
| "units" after the number run | CONFIRMED | added |
| "Typical loss, one point zero one" is a fragment | CONFIRMED | "For the refined grades, typical loss is…" |
| A foreign-grade baseline "0.70–0.85 W/kg" on the card | NOT CONFIRMED: no source given or found | not used |
| "U - S." at a sentence end | CONFIRMED (TTS) | "United States" |
| "Commerce's survey" sibilants | CONFIRMED (TTS) | "according to the Commerce survey" |
| Sensors line sounds naive to substation engineers | PARTLY: the JHU release's own framing is "tracking actual temperature and load, rather than relying on conservative fixed ratings" | reworded to the release's framing (C22) |
| Clip boundaries in `vo.txt` | CONFIRMED (production) | the recording blocks split at both clips |
