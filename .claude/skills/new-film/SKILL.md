---
name: new-film
description: Make a Margin of Error forensic film from a slate case or the owner's idea - case sheet, research (what everyone says vs the record, our edge), the treatment with its beat sheet (owner approves), facts, fairness, narration (owner approves), voice "1" audio (owner approves), exhibits, word-level choreography, GitHub renders, sound, the 720p cut, independent reviews (owner approves), the 4K master, the YouTube package, release. Stops for the owner at each gate.
---

# New film

Rules: `CLAUDE.md`. Each step in full: `docs/PLAYBOOK.md` §3a, the acts in §5. `high`/`xhigh` effort for building,
`max` for facts, fairness and final reviews. Every step has a creative question; the obvious answer is the floor.
Only finished work goes to the owner. At session start: unmerged branches check (§3).

**Phase A: find the case**
1. **Case** → `films/<slug>/brief.md`: the case sheet (decision · failure mode · smoking-gun document · length) and
   the package first (title ideas, thumbnail concept, search phrases). The slate's fact flags: §17.3.
2. **Research** → `research/landscape.md`: what everyone says (news, statements, regulator releases, the 3–5
   strongest films and what their comments say they missed), what the record says (draft `claims.csv` as you go),
   **our edge in one sentence**, what exhibits exist and their licence. No edge or no dated decision: the case waits.

**Phase B: decide everything**
3. **Treatment** → `treatment.md`: logline, the margin in one line, 3+ angles / cold opens / sign-offs, the viewers'
   real questions, the beat sheet (time · act · Q · turn · exhibit + record id · sound · bed), 2–3 signature moments
   in full, hero builds, fairness flags, what was cut. Independent treatment review (§14.5, new session, no repo) →
   `review/treatment_review_vN.md` → fixes. **[owner approves the treatment]**

**Phase C: words; pictures start in parallel**
4. **Facts:** `/fact-check` on everything the treatment claims.
5. **Narration** → `script/vo.txt`, `script/screenplay.md` (TIME | AUDIO | VISUAL | Q): creative pass, lean-in test,
   `vo_lint.py`, `/fairness-pass`, audience review (§7.8) → `script/narration.md` with SendUserFile and the recording
   blocks in the chat. **[owner approves the narration]**
   In parallel from treatment approval: `/source-exhibits`, owner fetch requests, reference sheets, hero builds in stills.
6. **Audio:** `vo_blocks.py` → `tts_elevenlabs.py --dry-run` → `--blocks 1` → `vo_review.py` and listen → all
   blocks → Drive `<slug>/vo/`. Then `vo_timing.py` → `film_timing.py` → `word_align.py`. **[owner approves the audio]**

**Phase D: the picture**
7. **Exhibits and footage** (`/source-exhibits`): the record first; every file looked at and logged.
8. **Choreography** (`/choreograph`): scene handoffs, code, stills at every cue, `sync_audit.py`, the sentence pass.
9. **Render** (`/parallel-render`): 720p first, at most 6 runners.
10. **Sound** (PLAYBOOK §12): library beds per act, cues exported from the picture, `mix_film.py`, −14 LUFS / −1 dBTP.

**Phase E: review and finish**
11. **720p cut:** `/review-cut` until a round finds nothing; to Drive.
12. **Independent reviews:** the viewer review (§14.5) and the forensic review (§14.4, `prompts/forensic_review_v1.md`);
    every point checked (§14.3) → fixes → `_check.md` with outcomes to the owner. **[owner approves the cut]**
    Then nobody edits it.
13. **4K master** once (`/parallel-render`, scale 2).
14. **Package and release** (`/deliver`).
After the film: each lesson into the rule it belongs to, with its reason (§16).
