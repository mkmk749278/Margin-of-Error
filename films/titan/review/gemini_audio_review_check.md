# Titan: Gemini audio review, each point checked (16 NOV 2026; PLAYBOOK §7.5, §14.3)

Gemini listened to `titan_vo_full.mp3` (the three owner-generated blocks joined, **1,318.7 s = 21:59**) with
`narration.md`. Its text: `gemini_audio_review.md` (from the owner's PDF).

**Reliability first:** Gemini reports the file as **26:59** and the script as **3,703 words**. Both are wrong (21:59;
3,567 words). Its timestamps after about 9:30 are therefore unreliable (it puts "Definitely Stockton" at 10:16, but
that line is in block 1, which ends at 9:26; several points sit past the end of the file). Every point below is
checked by measurement, not by its timestamp. Speech-to-text was not run (not installed; owner's choice this round),
so word-level claims rest on Gemini plus the structure checks below.

| # | Gemini's point | Verdict | Measured / reasoning | Action |
|---|---|---|---|---|
| 1 | No skipped, repeated or added words; every number exact; N-T-S-B and names read correctly | **PARTLY** (not measured) | Block durations match the text at ~150 wpm (566 s / 1,431 words; 570 s / 1,406; 182 s / 455), so no paragraph is missing; word-level not machine-checked | Word diff at the choreography step (`word_align.py` needs the transcript anyway) |
| 2 | Join levels: part 2 and 3 enter louder and brighter | **CONFIRMED on level, NOT CONFIRMED on brightness** | Speech RMS: end of b01 −24.1 dBFS → start of b02 −21.3 (+2.8 dB); end of b02 −23.0 → start of b03 −20.8 (+2.3 dB). Spectral centroid is *lower* after each join (973→910 Hz; 931→864 Hz). Integrated: −25.3 / −24.8 / −24.3 LUFS | Fix in the mix: sentence-level gain matching across both joins (no re-take) |
| 3 | No beat after the five names at the open (~0.6 s) | **CONFIRMED** | 0.70 s silence after "died" (b01 22.5 s) | Cut in a 1.2 s hold in the edit (§10.4) |
| 4 | Closing names too brisk | **CONFIRMED** | Gaps between the five names at the close: 0.50, 0.52, 0.41, 0.47 s | Edit: open each gap to about 0.9 s, 2 s room tone after the last name |
| 5 | "Definitely Stockton, he said." too brisk, no beat after | **PARTLY** | Position given wrongly (it is in block 1, near its end); the beat is planned in the edit anyway (treatment signature 3: the two words held one second) | Edit beat; optional re-take (R3) for weight |
| 6 | "crewed" heard as "crude" | **CONFIRMED in principle** | "crewed" and "crude" are near-homophones in speech; in "study crewed pressure vessels" the context does not rescue it | **Re-take R1** with "pressure vessels that carry people" (same meaning as the NTSB's "pressure vessel for human occupancy") |
| 7 | Brooks's "I felt that the safety was … At least for myself" sounds acted and emotional | **PLAUSIBLE** (tone cannot be measured) | A quotation from a living witness must not be performed (fairness §9.6) | **Re-take R2**, a flat, reported read |
| 8 | Quotes ("You can take a flashlight, he said…") blend into the narrator's voice | PARTLY | The script already attributes mid-sentence; on screen the transcript card sets the quote apart | Edit: 0.2 s before each quoted phrase; no re-take |
| 9 | Vocal fry on "as it failed", "delamination", "pressure cycling"; breathy "start to go?" | NOT CONFIRMED (not measurable here) | Minor per Gemini; no tool run | Listen at the 720p review; re-take only if it shows |
| 10 | Pace ~137 wpm, steady | NOT CONFIRMED | Measured from durations: about 150 wpm (inside the 145–160 target) | None |
| 11 | Theatrical weight on "thirteen times", "preventable tragedy", the Act I question | PLAUSIBLE, minor | Music and picture under these lines carry restraint | Check at the 720p review |

**Re-takes requested (3 sentences, about 600 characters in all):** R1 the recommendation line (wording "that carry
people"), R2 Brooks's quoted words, R3 (optional) "Definitely Stockton, he said." Each is cut in at its pauses.
