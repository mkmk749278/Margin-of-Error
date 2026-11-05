---
name: choreograph
description: Build a Margin of Error scene so the picture moves on the measured words - scene handoff, choreography table, Remotion code on wf() cues, stills at every cue, the sync audit and the sentence pass. Use for every scripted or revised narration block, after the audio is approved and word_align.py has run.
---

# Word-level choreography

Rules: PLAYBOOK §10.3 (handoff, sync rules), §10.6 (the four laws, the table, the gate), §6.4 (visible motion), §6.6–§6.7
(desk pose, legibility), §9.4 (labels), §10.2 (coding standard). This is the major part of the film.

1. **Measured words first:** `vo/timing.json` must say `words_source` measured (`scripts/word_align.py`).
2. **Scene handoff** → `films/<slug>/scenes/<scene>.md`: frames, the words the picture reacts to, exhibits with record
   ids, readout rows with claim ids, colours by meaning, labels, SFX cues, the semantic-lock line.
3. **Plan each sentence as a small scene:** a base picture that carries the whole sentence; every number, part, verb,
   place and record id changes something on its word (30–100 ms); the cues together say the sentence (law 4). Where
   no exhibit exists, draw what the words say, labelled. Ask the creative question: what makes the viewer *see* the
   margin shrink here?
4. **Choreography table** → `scenes/choreography/<scene>.md` (trigger words · 60 fps frames · state change · eye target ·
   implementation), then the code on literal `wf(id, 'word')` cues (`lib/remotion/Kinetic.tsx`). Highlights start ~15
   frames early; locks land on the word +2 frames; numbers roll and land as said; a readout and its trace share one
   driver; plan the next move after every landing.
5. **Check in code:** `npx tsc --noEmit`; `python3 scripts/text_floor.py films/<slug>/remotion lib/remotion` reads 0;
   every name in a word table is used by something visible (grep).
6. **Stills at every cue** (`node scripts/stills.mjs <Comp> <out> <frames> --scale 1`, browser per PLAYBOOK §10.5);
   look at every image: the word's target lit, nothing clipped, nothing on a grid line, nothing floating on the void,
   labels on.
7. **Gate:** `python3 scripts/sync_audit.py films/<slug> --md films/<slug>/review/sync_audit.md`: no stretch over
   1.5 s, no uncued number. Re-run `python3 scripts/choreo_index.py` from the film folder. Export cues for the mix
   (PLAYBOOK §12) after any cue change.
