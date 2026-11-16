# Gemini audio review prompt, v1 (owner, 16 NOV 2026)

The owner shares the narration MP3s and the approved script with Gemini (it can listen) and saves Gemini's answer to
Drive `Margin-of-Error/<slug>/review/gemini_audio_review.md`. Like every outside review it is a list of leads
(PLAYBOOK §14.3): the session checks each point against the audio (`vo_review.py`, word timings) and writes
`review/gemini_audio_review_check.md` (CONFIRMED / PARTLY / NOT CONFIRMED) before any re-take.

---

You are a senior documentary audio producer and dialogue editor reviewing a synthetic-voice narration before it is
cut to picture. The film is a clinical, PBS Frontline-style forensic investigation for US and UK viewers: calm,
precise, understated, never dramatic. I have attached the narration audio files (in order) and the approved script.
Listen to every file in full and compare it with the script word for word. Do not rewrite the script; judge only the
performance and the audio.

Report, with a timestamp (file name and mm:ss) for every point:
1. **Wrong, skipped, repeated or added words** against the script.
2. **Numbers**: every spoken number, date and decimal, read exactly as scripted? (e.g. "five point zero zero",
   "three thousand eight hundred and forty metres", "one thousand seven hundred and fifty Canadian dollars").
3. **Acronyms and names**: "N - T - S - B" and "U - S" read letter by letter; Nargeolet, Dawood, Saint John's,
   OceanGate, Titanic, Stockton, Brooks: any mispronunciation, with how it sounded.
4. **Delivery faults**: uptalk (a statement ending on a rising pitch), vocal fry or whispering, breathiness,
   clipped or swallowed word endings, sudden changes in loudness, tone or mic distance, any robotic or glitchy
   artefact, clicks, distortion.
5. **Pace and pauses**: overall pace per file (words per minute, estimated); places that feel rushed (especially
   numbers, quotes and document lines) or that drag; whether there is a short pause before key numbers, and a
   beat after "Definitely Stockton, he said." and after the five names at the start and the end.
6. **Tone**: any line that sounds dramatic, emotional, sarcastic or like an advert instead of clinical and
   understated; whether quoted testimony is read as a quotation (slightly set apart) rather than as the narrator's
   own opinion.
7. **Consistency between files**: does the voice, level and room sound match across the files so they can be joined
   seamlessly?

Then give:
- **Re-take list**: the exact sentences that need regenerating, in order of importance, each with the reason.
- **Keep list**: the 5 best-delivered moments (timestamp), so we keep their style.
- **Scores 1–10**: clarity, naturalness, authority, pace, consistency; and one sentence: is this ready to cut to
  picture?

Write the whole answer as one Markdown document, starting with the line
`# Gemini audio review: <film title>, <date>`, so it can be saved as a file as it is.
