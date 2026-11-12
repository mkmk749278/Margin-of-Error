# East Palestine: Instagram reel (12 NOV 2026)

**Owner's brief (12 NOV 2026):** one Instagram reel with its own script, to bring viewers to the YouTube film. The
owner chose East Palestine over The Four Missing Bolts. The first draft gave the answers away; the owner asked for
"more curious to click to the full video", so the reel sets up both numbers and keeps back what the film answers:
the hearing, what was decided on the second number, and the NTSB's verdict on it. **Narration approved by the owner
(12 NOV 2026).**

- **Narration:** `script/vo.txt` (174 words, vo_lint passes). Marcus, Eleven v4, stability 0.5: 65.2 s, 155 wpm,
  `vo_review.py --model medium.en` 100% of words as written (one zero-length "history" insert at 24.6 s, an STT artefact),
  no flat windows. Take: `vo/reel_vo_b01.mp3` (gitignored; Drive `east-palestine/reel/`).
- **Word times:** measured by CTC forced alignment (`vo/timing.json`, `vo/word_align.md`: 174 words, none under 0.35).
  The usual MMS_FA model could not be fetched (its host, dl.fbaipublicfiles.com, served an expired certificate on
  12 NOV 2026), so the same `word_align.py` ran with torchaudio's English `WAV2VEC2_ASR_BASE_960H` model
  (download.pytorch.org) and `torchaudio.functional.forced_align`.
- **Picture:** the approved 4K master's own shots, 14 segments (`reel.json`), each cropped to the readout or document
  line the narration points to, with a push across the segment; the end card is the film's live thumbnail (D).
  Every reconstruction or illustration keeps its label in the window (36 px). Above: a ledger of the two numbers
  that fills in on their words (170 rolls in on "seventy"; "MATCHES A BILLING RULE" on "billing"; 153–158°F on
  "reached"; "NOT IN THE GUIDANCE" on "find"). Below: the measured words as captions (numbers as figures).
- **Sound:** narration over the library bed `fx08_countdown` (−19 dB, up 6 dB after the last word, 1.2 s fade);
  −14.2 LUFS, −1.5 dBTP. No effects layer.
- **Layout:** 1080×1920, 60 fps, H.264 + AAC. Clear of Instagram's UI: nothing below y = 1500, nothing in the top 160 px.
- **Build:** `python3 films/east-palestine/reel/build_reel.py` (needs the master in `assets/reel_src/`), then
  `npx remotion render src/index.ts Reel out/east-palestine_reel_instagram.mp4 --props=films/east-palestine/reel/reel.props.json`
  (with `--browser-executable` in the session, PLAYBOOK §10.5). Composition `Reel` in `lib/remotion/Reel.tsx`.

**File:** Drive `east-palestine/reel/east-palestine_reel_instagram.mp4` ([open](https://drive.google.com/file/d/1zYb8J_llAK39VoMrAokKMb5QV6Xg4Ll0/view)):
1080×1920, 60 fps, 66.3 s, 6.9 Mb/s, −14.2 LUFS, −1.4 dBTP; no black or frozen frames; frames checked at every cut.

## Every spoken fact, on the film's `claims.csv`
| Line | Rows |
|---|---|
| A detector beside the track read a bearing on fire at 103 degrees above the air | C04, C167, C05 |
| The crew would only be told at 170 | C07 |
| An industry definition that, the NTSB found, relates to billing for repairs | C72 (C26, C28) |
| Norfolk Southern says it also drew on its own experience | C73 |
| About forty minutes later, the axle came apart | C112, C14 |
| Three days later, contractors told the incident commander 153–158°F would mean a runaway reaction | C63, C92 |
| He said he was given thirteen minutes to decide | C62 |
| The investigators could not find it in the guidance used at the scene | C64 |
| One matched a definition written for billing | C72, C26 (the film's own closing line) |

## Instagram caption (click to copy)
```
Two numbers decided East Palestine's week.

The first, 170°F, was the line at which the train crew would be told about an overheating bearing. The NTSB found it matches an industry definition that relates to billing for repairs. Norfolk Southern says it also drew on its own experience.

The second, 153–158°F, the investigators could not find in the guidance used at the scene.

What was decided on it is in the full investigation on YouTube: Margin of Error (link in bio).
From NTSB report RIR-24-05.

Narrated using the studio's calibrated synthetic voice model (Marcus) for forensic clarity.

#EastPalestine #NTSB #TrainDerailment #Railroad #Engineering #Investigation
```
Link in bio: https://youtu.be/PzY0teB3Pdc
