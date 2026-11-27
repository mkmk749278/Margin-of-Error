repo: Margin-of-Error
slug: lpt-goes-steel
task_type: narration-review
completed_ist: 2026-11-27 23:51 IST
verdict: APPROVED

# **Narration v2 Pre-Recording Gate Review (Five-Viewer, Fairness & TTS Prosody Audit): `lpt-goes-steel`**

All files linked in handoff/to_gemini.md (narration.md v2, vo.txt v2, `fairness_v1.md`, and `gemini_narration-review_v2_check.md`) opened and were inspected in full. No new facts are added in this review.

# **1. Did the v2 Fixes Cost Anything? (Check 1: Any Line Slower, Vaguer, or Harder to Follow than v1?)**

Across the 51 paragraphs, 29 of the 32 fairness edits and all 11 v1 narration-review fixes actually **sharpen** the script (`#13` introducing Cleveland-Cliffs at Butler Works, `#16–#20` separating non-refined wound-core grades from laser-refined DR grades per the [TRAN-COR H Product Data Bulletin](https://www.clevelandcliffs.com/_assets/_81390fba4c20ea7031feaf585f8f60c5/clevelandcliffs/db/1190/10495/file/CLF_ProductData_Tran-Cor-H_102024.pdf), `#27` naming members of Congress and Canada's integrated-supply-chain answer, and `#48` using the JHU paper's exact `"actual temperature and load, instead of conservative fixed ratings"` framing).

Only 3 lines pay a small pacing or breath cost compared to v1 — none is a blocker, and each can be tightened by 1–3 words or a punctuation split without losing a single syllable of fairness:

1. **Paragraph #35 (`8:50`, `C30, C75, C74`) — Two 26- and 29-word nested relative-clause sentences back to back:**
   * **Quote (`vo.txt` / `narration.md` #35):**`"In twenty twenty-five, in a tariff docket, Howard Industries, a transformer maker that buys this steel and opposed adding transformers to the tariff, wrote that Cleveland-Cliffs does not produce enough. Cleveland-Cliffs, which had asked for distribution transformers to be added, had said in its own filing three weeks earlier that it has sufficient capacity to meet current domestic demand."`
   * **Why it is slower/harder to follow than v1:** Adding both parties' docket stakes and the three-week filing order (`fairness_v1.md` Row 9) stretches `#35` to 55 words, embedding a relative clause inside the subject of both sentences and putting a double `"had asked... had said"` in Sentence 2.
   * **Fix (Lead — keeps Cleveland-Cliffs' answer last and removes the nested `"which had asked... had said"`):**`"Cleveland-Cliffs had asked for distribution transformers to be added. In its own filing three weeks earlier, it said it has sufficient capacity to meet current domestic demand."`
2. **Paragraph #33 (`8:25`, `C52`) — Double pronoun `"one"` after `"twenty twenty"` / `"twenty twenty-five"`:**
   * **Quote (`vo.txt` / `narration.md` #33):**`"Until August twenty twenty-five, no Section two thirty-two tariff covered imported cores. Why the twenty twenty finding ended without one, and why one came in twenty twenty-five, the record we read does not say."`
   * **Fix (Lead — optional 1-word swap if `"one"` sounds crowded in the take):**`"Why the twenty twenty finding ended without a tariff, and why one came in twenty twenty-five, the record we read does not say."`
3. **Paragraph #3 (`0:18`, `C01, C93`) — Prepositional lead-in before the `90%` stakes number:**
   * **Quote (`vo.txt` / `narration.md` #3):**`"By the Energy Department's estimate, ninety percent of America's electricity passes through large power transformers. Most of their core steel is imported."`
   * **Fix (Lead — totally optional):** Both the VO attribution and the on-screen `90% · DOE ESTIMATE` tag (`fairness_v1.md` Row 29) pass fairness; keep as written unless the measured cold-open audio pushes the open loop past `0:40`.

# **2. Where Each Viewer Would Stop Watching Now (Check 2: Five-Viewer Stress Test)**

None of the five viewers has a hard drop-off point anymore:

| Viewer Persona | Where Attention Is Tested Now (# & Time) | Quoted Line from narration.md v2 / vo.txt v2 | Why & Exact Lead (If Any) |
| :---- | :---- | :---- | :---- |
| **1. US Utility Substation Engineer** | **#19–#20 (`4:25–4:40`)** | **#19:** `"The company presents these refined grades for transformers whose cores are not stress-relief annealed, and its other grades for cores that are."` | v2 completely fixes the wound-core grade distinction (`fairness_v1.md` Rows 1–3). Ensure the visual card at `#19–#20` labels the two columns clearly (`Non-Refined Grades -> Survive Anneal` vs. `Laser-Refined DR Grades -> Lose Treatment >600 °C`). |
| **2. UK Transmission Engineer** | **#21 (`5:00`)** | **#21:** `"Commerce wrote that a limited number of suppliers, such as those from Japan and South Korea, can make the high-permeability grades the market demands in response to the Energy Department's standards."` | All US bodies (`USTR`, `CRS`, `DPA`, `U - S President`) are now cleanly glossed in `#24`, `#30`, `#31`, and `#32`. |
| **3. US Finance Analyst** | **#35 (`8:50`)** | **#35:** `"Cleveland-Cliffs, which had asked for distribution transformers to be added, had said in its own filing three weeks earlier that it has sufficient capacity to meet current domestic demand."` | Split Sentence 2 into two short sentences (`"Cleveland-Cliffs had asked for distribution transformers to be added. In its own filing three weeks earlier, it said..."`) for crisp audio delivery. |
| **4. Canadian Manufacturing Manager** | **#27 (`6:45`)** & **#31 (`7:50`)** | **#27:** `"Some members of Congress had argued that firms were using those imports to avoid the steel tariff. Canada, in its submission to the investigation, contested that: the North American supply chain was highly integrated, it said, and Canadian core makers bought some of their steel from American suppliers."` | Naming `"Some members of Congress"` and stating both halves of Canada's defence makes Act III airtight across the border. Zero drop-off risk. |
| **5. Curious German Software Developer** | **#48 (`12:50`)** | **#48:** `"In the Johns Hopkins model, utilities use sensors that track a transformer's actual temperature and load, instead of conservative fixed ratings, and load the units they already have closer to their true limit."` | Repeats `"load"` as a noun and a verb 5 words apart. **Lead (#48):** Change the second `"load"` to `"run"` (`"...and run the units they already have closer to their true limit."`). |

# **3. Commentary, Outrage, PR, AI-Script, Partisan Words & Gloss Audit (Check 3)**

* **Commentary / Outrage / PR / AI-Script Check:** **100% CLEAN.**
* **Partisan Words Check:** **100% CLEAN.**
* **Unglossed Bodies Check:** **100% CLEAN** (`U - S President` in `#24`, `USTR` in `#30`, `CRS` in `#31`, `DPA` in `#32`, `Breakthrough Institute` in `#36`).

# **4. Spoken-Word & ElevenLabs v4 (Marcus) Audit (Check 4)**

* **Longest Sentences:** `#48` (30 words — swap second `"load"` to `"run"`), `#35` (26 + 29 words — split Sentence 2 at `"to be added."`), `#27` (28 words — clean colon/comma pauses), `#21` (27 words — clean comma pause).
* **Number Runs & `"four hundred and seven product codes"` (`#36`):** Splitting `#36` into two sentences keeps `"four hundred and seven product codes"` cleanly separated from `"fifty percent"`. `#7` now resolves cleanly on `"six thousand seven hundred and ninety-nine units"`.
* **`"Section two thirty-two"` (`#23`, `#24`, `#30`, `#33`):** Natural and `vo_lint.py`-clean across all four occurrences.

# **5. Five-Viewer Scores (`1–10`): v2 Compared with v1 (Check 5)**

| Viewer Persona | Watch to the End (v1 → v2) | Trust (v1 → v2) | Subscribe (v1 → v2) |
| :---- | :---- | :---- | :---- |
| **1. US Utility Substation Engineer** | 9.3 → **9.5** | 9.6 → **9.8** | 9.2 → **9.4** |
| **2. UK Transmission Engineer** | 8.8 → **9.2** | 9.4 → **9.7** | 8.6 → **9.0** |
| **3. US Finance Analyst** | 9.4 → **9.5** | 9.7 → **9.9** | 9.3 → **9.5** |
| **4. Canadian Manufacturing Manager** | 9.2 → **9.5** | 9.6 → **9.8** | 9.0 → **9.3** |
| **5. Curious German Software Developer** | 9.0 → **9.1** | 9.5 → **9.7** | 8.9 → **9.1** |
| **Portfolio Average** | 9.14 → **9.36 / 10** | 9.56 → **9.78 / 10** | 9.00 → **9.26 / 10** |

# **6. Verdict for Owner Approval (Check 6)**

* **Verdict:** **APPROVED — READY FOR THE OWNER TO APPROVE FOR RECORDING (0 blocking lines).**
* **Optional 2-word/punctuation polish before TTS generation:**
  1. `#35`: Split `"Cleveland-Cliffs, which had asked for distribution transformers to be added, had said in its own filing three weeks earlier..."` into `"Cleveland-Cliffs had asked for distribution transformers to be added. In its own filing three weeks earlier, it said..."`
  2. `#48`: Swap the second `"load"` to `"run"` (`"...track a transformer's actual temperature and load, instead of conservative fixed ratings, and run the units they already have closer to their true limit."`).

