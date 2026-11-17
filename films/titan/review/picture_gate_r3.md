# Titan · picture gate, round 3 (720p review cut v3, 17 NOV 2026)

Cut: Drive `titan/renders/titan_review_v3_720p.mp4` (run 44028845541, commit 1aee9de). It carries the round-3 picture
fixes (forensic review v2, `forensic_review_v2_720p_check.md`) on the narration as it stood before the four approved
re-takes. v4 carries the re-takes and the round-4 work below.

## Measured on v3
| Check | Result |
|---|---|
| Loudness | −14.0 LUFS integrated |
| Black frames (0.1 s, 480p) | none |
| Near-freezes ≥ 1.5 s (480p, n = 0.003, stricter than round 2) | 11; each looked at below |

| v3 time | Where | Verdict | Round 4 |
|---|---|---|---|
| 0:55.6 (1.8 s) | the date card, 18 JUN 2023 | dark open by design (date rolls on its words) | none |
| 4:37.1 (1.8 s) | "Then how would anyone know?" question card | act turn | none |
| 6:04.8 (2.5 s) | s63 meeting card: date pill, words reveal in a sparse card | weak, but the words land on cue | carried (low) |
| 7:11.5 (1.6 s) | s77 second hull | words land on cue | none |
| 9:43.0 (3.7 s) | s108 "Brooks testified": one line in a small card | **weak** | FIXED: his transcript page (CG 112 p. 768), "physical distance" and "relatively small movement" highlighted as said |
| 16:50.1 / 16:53.8 (1.5 / 2.8 s) | the question, then the law card (text only) | **weak** (forensic idea 1) | FIXED: question set large; the law on the NTSB's page (MIR p. 60, 2.6), highlighted on "even one passenger for hire" |
| 20:41.4 (1.6 s) | s224 "preventable" | the page holds on its highlight | none |
| 21:45.1 (1.5 s) | s236 company card | words land on cue | none |
| 21:59.1 (4.9 s) | **an empty frame, then a small "What now?"** | **fault** | FIXED: the company card holds to the question; "What now?" lands centre-screen at 84 px and rises over the four recommendations as they are said |
| 22:48.3 (1.8 s) | the five names | intended (signature) | none |

## Round 4 (into v4)
- The four approved narration re-takes spliced at their pauses (s73, s141, s188, s229); timing, measured words, every
  cue, card and choreography table rebuilt; sync audit 0 of 244 sentences.
- Forensic ideas 1–3 built: the law, the two myths (USCG 4.34.9 p. 227 and 5.5 p. 272) and the last findings (ROI
  executive summary, NTSB 2.5 p. 58) each on its record page, highlighted on the words said, with the finding bar at
  36 px.
- Mix: the hearing clips now take their frames from the timeline (a re-take had moved the narration under them;
  voice-stem peak 0.0 dBTP caught in `mix_report.md`, fixed back to −2.8); music slots and silences remapped.
  Master −14.0 LUFS, true peak −1.4 dBTP.
