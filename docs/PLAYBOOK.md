# Margin of Error: production playbook

The one reference doc for this repo. `CLAUDE.md` holds the short rules every session must follow; this file holds
everything else: full specs, how-tos, the reason behind each rule, and the owner's handoff spec word for word
(Part G), so a future session can tell when a rule applies and when it doesn't. Add new lessons here (with the
reason), never in new doc files.

**This repo is public.** Nothing here names the owner, another channel or another repo (owner, 2026-11-02). Lessons
carried over from earlier production work are written as our own, with the measured reason.

**Contents**
- Part A: How we work. 1 Owner and delivery · 2 Claude: creative director and lead investigator · 3 Sessions
- Part B: The channel. 4 Identity and audience · 5 Story architecture · 6 The look · 7 Narration ·
  8 Visual toolkit
- Part C: Production. 9 Facts, fairness and evidence · 10 Remotion engine · 11 Assets · 12 Sound ·
  13 Discovery and packaging · 14 Review gates · 15 Tools
- Part D: 16 Lessons log · 17 Decisions and open questions
- Part G: the owner's handoff spec, verbatim

---

# Part A: How we work

## 1. Owner and delivery
- **The owner works only from an Android phone** (GitHub app, Claude app, Termux, SSH to a VPS). *Why:* every step
  must run in a cloud session, GitHub Actions or the VPS, and every result must open on a phone: a Drive link, a JPG
  contact sheet, a code block in the chat.
- **Polished only.** The owner never receives a test render, draft cut, placeholder scene, rough thumbnail or sample.
  *Why:* the owner judges the channel by what they see; a rough sample wastes a review and lowers the bar.
- **Google Drive is the delivery shelf.** Channel folder **`Margin-of-Error`** at the top of My Drive, one folder per
  film (`Margin-of-Error/<slug>/`), channel art in `_Channel/`. `scripts/upload_gdrive.sh --sub <slug> FILE…` finds or
  creates the folder by name (set `GDRIVE_FOLDER_ID` once its id is known, to pin it). Never write in any other
  top-level folder. Deliver the 4K master and a 1080p copy (the phone plays the 1080p one smoothly).
- **Git:** all work lands on `main`. Each session uses its own branch, opens a PR to `main` and merges it the same
  day. Sessions can't delete branches: tell the owner which ones to delete. *Why:* stale session branches hide work.
- **Phases:** at the end of each, stop and report in plain words: what was built, what was checked, what is left.
- **Once the owner approves a cut, stop editing it.**
- **Ask, don't guess, on the owner's decisions** (case choice, voice, cadence, anything paid, anything legal-risky),
  with AskUserQuestion: 2–4 options, the recommended one first, one-line reason each.

## 2. Claude: creative director and lead investigator

### 2.1 Creative director
- **Craft rules are a floor.** When a better idea serves the viewer more, break the rule on purpose, write why in
  `treatment.md`, check it in review and log it in §16.
- **Hard lines never bend:** facts from records (§9), fair attribution (§9.6), honesty labels (§9.4), licences (§11),
  channel separation (CLAUDE.md), polished-only deliveries, the owner's decisions (§17).
- **Kill the first idea.** Three angles, three cold opens, three thumbnail concepts per film. Design 2–3 **signature
  moments**: the line on the exhibit that changes the case, the counter that crosses its threshold, the cutaway where
  the missing part is finally visible by its absence.
- **Benchmark against the best.** Before locking a treatment, study the 3 strongest existing films on the case (via
  transcripts, titles, thumbnails) and write what ours adds: usually the primary documents they paraphrased.

**The treatment** (`films/<slug>/treatment.md`, one page, after research, before the script): logline with its
tension; the margin in one line (what buffer existed, who removed it, how it failed); the angle (3 considered, 1
chosen); the evidence spine (the 6–10 exhibits the film is built on); signature moments; sound palette; the package
(title, thumbnail concepts, search phrases), written first because it is the promise.

### 2.2 Effort
`high`/`xhigh` for building, `max` for fact-checks, fairness passes and final reviews. Never lower effort or skip a QA
round to finish sooner. Knowledge stops at June 2026: every fact comes from collected sources (§9).

## 3. Sessions
- **One session does the work.** A new session only for an **independent review** (audience §7.8, fact-check,
  fairness §9.6, fresh-eyes picture review §14), archived when done. *Why:* every session eats the shared usage limit.
- Each cloud session is a VM of about 4 vCPU / 16 GB. Idle VMs pause and can be reclaimed: start long jobs detached
  (`setsid nohup … < /dev/null & disown`), watch with Monitor, make them resumable.
- **Full renders run on GitHub's runners, never in the session** (§10.5).

---

# Part B: The channel

## 4. Identity and audience
**MARGIN OF ERROR**: *Where accounting meets the laws of physics.* On Wall Street a margin measures quarterly
profit; in engineering it is the buffer that keeps an airliner in the air, a bridge standing, a grid stable. When
leadership optimizes the financial margin, it can remove the physical one, until the metal fails (Part G §1).

### 4.1 Audience
Tier-1 Anglosphere first (US, UK, Canada, Australia), then European tech hubs. Engineers, pilots, mechanics, finance
and legal professionals, and curious adults who distrust both PR and outrage. They watch on desktop and TV, long-form.
- **Language:** precise international English, read by a British narrator. **On-screen text in American spelling**
  (most records we show are American; one spelling everywhere looks deliberate). No slang.
- **Units:** as the record states them (feet, knots, psi, °F, short tons) with SI in a smaller second line on screen
  ("16,000 ft · 4,877 m"). Narration says the record's unit. Currency `$`, millions and billions.

### 4.2 What we make, and what we never make
- **Make:** one case per film, followed from the physics of the failure to the documented decision behind it and
  back, so a viewer can explain both the mechanism and the money afterwards.
- **Never:** speculation dressed as finding, "they knew and didn't care" without a document, villain music, mocking
  victims or workers, conspiracy framing, hot takes on breaking news before a record exists, absolutes the record
  doesn't support.

### 4.3 Topics
A failure with (1) an official investigation or court record, (2) a physical mechanism that can be drawn, and (3) a
documented financial or managerial decision that touched the margin. If (3) is only an allegation, the film says so
or the case waits. The launch trilogy is in §17.3 with its fact flags.

## 5. Story architecture
The five acts (Part G §3) are the spine; times are guides, the evidence sets the length (about 16–22 minutes).

### 5.1 Act I: the incident (0:00–2:30)
- **In media res on the record:** the first frame is the event's own data (a timestamp, an altitude, a detector
  reading, a dispatch line that is public). No greeting, no logo, no channel name.
- Real audio only when it is public and licensed (§9.5). Otherwise the record is shown, not heard: a transcript line
  typing out against a clock is stronger than a fake voice.
- **Name the open loop in the first 60 s** (what we will find, and roughly when), and end the act on the question
  *where did the margin of error run out?* (said or shown, not every film word for word).

### 5.2 Act II: the mechanism (2:30–6:00)
How the system was designed to work under ideal conditions: the load path, the redundancy factor, the interlock, the
inspection gate. Every number from the standard, certificate or report. The viewer must understand the margin before
they can feel it shrink.

### 5.3 Act III: the boardroom (6:00–11:00)
The investigative turn. Exhibits: SEC filings (10-K, 8-K, proxy), buyback authorizations, contracts, memos produced
in litigation or to Congress, testimony, regulator findings. **The act must identify a dated, documented decision**
and show, with the record, how it reached the factory floor or the inspection gate. Where the link is our reading,
the narration says so ("Read together, these documents suggest…"), and the fairness pass (§9.6) checks it.

### 5.4 Act IV: the cascade (11:00–16:00)
The physical consequence, down to the mechanism: crack growth, thermal runaway in a bearing, a missing fastener, a
sensor saturating, a ticket never opened. This is the most technical act and the one we draw best: cutaways, load
paths, readouts crossing thresholds in Failure Red.

### 5.5 Act V: the verdict (16:00–end)
Findings, penalties, litigation (with status and date), regulatory change or its absence. Then the unresolved risk:
where the same failure mode is still in service, **sourced** (fleet counts, audits, regulator statements). An
understated sign-off: one line, the channel name, nothing more.

### 5.6 Story deliverables per film
`brief.md` (package first) → `research/` → `treatment.md` → `claims.csv` → `script/screenplay.md` (TIME | AUDIO |
VISUAL | Q) and `script/vo.txt` → `vo/` → `scenes/` → `remotion/` → `review/` → `youtube/`.

## 6. The look

### 6.1 Palette and type (`config/brand.yaml` → `lib/remotion/brand.ts`)
| Token | Hex | Meaning |
|---|---|---|
| `void` | `#0a0d12` | the desk; never `#000000` |
| `card` / `border` | `#121824` / `#1e293b` | panels, exhibit tags, readouts |
| `cyan` | `#38bdf8` | nominal systems, schematics, vector paths |
| `amber` | `#f59e0b` | thresholds, sensor drift, financial callouts |
| `red` | `#ef4444` | fracture zones, telemetry cutoffs, collapse |
| `paper` | `#f3f4f6` | the audited document surface |
| `highlight` | `rgba(250,204,21,0.25)` | the highlighter on a document |

Type: **JetBrains Mono** (OFL) for telemetry; **Inter** (OFL) bold, tracked uppercase for structural titles. The spec
allows DIN Pro; it is a paid licence, so Inter until the owner decides otherwise. Real documents keep their own
scanned type.

### 6.2 Brand assets
Not built yet (logo, avatar, banner, watermark: §17.2). They are code-built like everything else, kept in
`assets/brand/`, originals in Drive `_Channel/`.

### 6.3 Layers in every frame
The desk (void, coordinate grid at 0.05 opacity, pooled light) → the evidence (exhibit, schematic, telemetry trace) →
kinetic accents (exhibit tag, readout, timeline bar) → atmosphere (grain, vignette).

### 6.4 Motion rules
- Numbers never jump: counters, pressures and timelines interpolate (`Telemetry.tsx`).
- Documents arrive on the settle spring and pull in from the letterhead to the line (`Exhibit.tsx`, log zoom so the
  push feels constant).
- Nothing static over 2.5 s; a visual change about every 4 s (slower than an explainer: the viewer is reading).
- Real geometry and real kinematics for every mechanism; a numeric check in code for anything drawn from an equation.

### 6.5 Looks to avoid
Glass cards, neon dashboards, glitch transitions, "hacker" green text, red-string conspiracy boards, stock footage of
office workers or traders, AI imagery of real aircraft, trains, places or people, dramatic lens flares.

### 6.6 Overlays on a document (measured 2026-11-02)
When an exhibit fills the frame the page is near-white, and bare mono text over it disappears. **Every overlay that can
sit over paper is on a card** (`card` + 1 px `border`): clocks, readouts, timeline bars, titles. While the camera is
inside a document, show at most the exhibit tag and one readout.

## 7. Narration
The narration holds the viewer through 20 minutes; the voice is calm, so the writing carries the tension.

### 7.1 The voice
Clinical, forensic, objective, authoritative: an inquiry, not a commentary. Understatement is the weapon. "Four bolts
were missing." is stronger than any adjective. No sarcasm, no outrage, no "shocking".

### 7.2 What makes a viewer lean in
1. **Start inside the record**, in motion: one time, one place, one reading.
2. **Specific beats general:** one fitting, one ticket, one line in a filing.
3. **Chain with "but" and "so":** each beat is caused by the last or cuts against it.
4. **Curiosity loops** at film, act and minute scale; never open one the film doesn't close.
5. **Ask the investigator's question out loud**, then answer it from the record.
6. **Let the exhibit speak.** Read the line on screen word for word when it is the evidence; never paraphrase a
   quote into something stronger.
7. **Leave room for the picture:** don't describe what is visible; say what it means.

### 7.3 Words and rhythm
- Plain, exact words. Technical terms are welcome when the picture explains them; list them in
  `script/terms.txt`.
- The breath test: nothing over about 30 words; never three sentences of the same length in a row.
- Banned: "In today's video", "Welcome back", "Imagine if", "Let's dive in", "little did they know", "shocking",
  "insane", "unprecedented" (unless a source says so), "game-changer", "delve", "testament to", "in conclusion".

### 7.4 The lean-in test
`script/screenplay.md` has a **Q column**: the question the viewer is holding in that paragraph. Empty Q = cut or
rewrite.

### 7.5 TTS text for George (owner's spec §5)
- **Voice:** ElevenLabs library voice **George**; model Multilingual v2 (Turbo v2.5 as the fallback); stability
  0.60–0.65, similarity 0.78–0.82, style exaggeration 0.00.
- No bracketed emotion or sound tags. Pauses: commas (short), em-dashes (shifts), `...` (tense halts), a blank line
  between paragraphs (tail decay).
- Numbers as words (`sixteen thousand feet`, `four point eight billion dollars`, `two hundred and fifty-three
  degrees`); acronyms pre-spaced with hyphens (`N - T - S - B`, `F - A - A`, `S - E - C`); words said as words
  (`MAX`) go in `script/say_as_word.txt`.
- `scripts/vo_lint.py script/vo.txt --say-as-word script/say_as_word.txt` must pass.
- **To measure before the first full recording** (earlier work found a different ElevenLabs voice and model gave
  `...` almost no pause, and tags changed the voice): record one test paragraph with George on Multilingual v2 and
  measure the pause each mark gives (`scripts/vo_review.py`). If `...` or `—` give no pause, the exact beats are cut
  in the edit from the word timings instead. Also listen for how `N - T - S - B` is read.

### 7.6 Recording blocks
Whenever a VO is ready or changes, the reply carries every block as its own fenced code block (one-tap copy on the
phone), headed with block number, character count, voice, model, settings and file name; plus `vo/vo_blocks.md` sent
with SendUserFile. Name the blocks to re-record with every change. Keep each block under 2,500 characters (a clean
take is easier to redo than a long one).

### 7.7 Every take is checked
After alignment, run `scripts/vo_review.py` (pace, pauses, drift, loudness) and listen to every flag. *Why:* spliced
re-takes once shipped doubled phrases, and a trim cut the last sentence off blocks.

### 7.8 Checks before the owner hears a narration
1. Fact gate: every factual line maps to a confirmed or attributed `claims.csv` row.
2. Fairness pass (§9.6).
3. The lean-in test and `vo_lint.py`.
4. **Independent audience review:** a new cloud session with no repo gets `prompts/audience_review_v1.md`. Apply
   fact-safe fixes, re-check, save `films/<slug>/review/audience_vN.md`.

## 8. Visual toolkit (`lib/remotion/`)
- `Desk.tsx`: the void, the drifting coordinate grid (0.05 opacity, major lines every 5 cells, coordinate anchors),
  pooled light, grain, vignette.
- `Exhibit.tsx`: a page in 2.5D (`perspective: 1000px`) that slides onto the desk, pulls in to a focus rectangle and
  draws highlights; the tag names the source (docket, filing, record id). Real scans as `<Img>` children; our own
  transcriptions are labelled `TRANSCRIPTION`.
- `Telemetry.tsx`: `Readout` (rows with `warn`/`fail` thresholds that turn amber and red, every row sourced or
  ILLUSTRATIVE), `Clock` (a running timestamp), `TimelineBar` (events lighting up as the head passes).
- `motion.ts`: `tween`, `envelope`, `settle` (the channel spring), `microPush`, `shudder`. `sfx.ts`: cue names.
- To build when the first film needs them: a schematic line-drawer (SVG paths drawn on), a radar/ADS-B trace plotter,
  a stress-field shader for fracture, a filing table that builds row by row, a redaction-safe quote card.

---

# Part C: Production

## 9. Facts, fairness and evidence

### 9.1 What must be true
Every fact, number, date, name and quote in the narration, on screen or in the description has a `claims.csv` row:
`id,claim,on_screen,timecode,status,source_url,source_quote,note`. Statuses: `confirmed` (a primary record, or two
independent reputable reports), `claim` (said as someone's claim, attributed in the VO), `disputed` (sources disagree:
the VO says so; note required), `unverified`, `wrong`. `scripts/claims_check.py` fails on `unverified`/`wrong` or a row
without URL and quote. It runs before every render.

### 9.2 Primary sources first
NTSB (reports, dockets, board meeting materials), FAA (ADs, orders, enforcement letters), CSB, FRA, PHMSA, DOE,
FERC/NERC, national labs, SEC EDGAR, court dockets (PACER/CourtListener), congressional hearing records, GAO and
Inspector General reports, standards (ASME, IEEE, AAR). Press only to find records or for the companies' own public
statements. Wikipedia only to find sources.

### 9.3 No absolutes the record contradicts
"Permanent", "zero", "never", "always", "the only" are claims and need a source. A risk is described with its
documented likelihood, never as certainty.

### 9.4 Labels
- `RECONSTRUCTION`: any rendered scene of a real event (cabin, factory floor, rail yard), and any telemetry drawn from
  a report's table rather than the raw data file.
- `ILLUSTRATIVE VALUES`: a readout whose numbers have no source row.
- `TRANSCRIPTION`: a document we set in type from a record (the real scan is preferred).
- `NOT TO SCALE` where scale is exaggerated.

### 9.5 Evidence integrity
- A real document, photo or recording is shown unaltered (crop and highlight are fine; never edit words), with its
  source on screen.
- Never fake, re-voice or synthesise a real recording, a real person's voice or a real person's face. Cockpit voice
  recorder audio is generally not released in the US; check what the record allows before planning an Act I around
  audio. Public dispatch or ATC audio is used only when its release and licence are confirmed; LiveATC-style archives
  have their own terms.
- Victims: no faces, no names unless they are already public and relevant; their story told with dignity.

### 9.6 Fairness (real companies and real people)
These films name large companies and sometimes executives, in countries where defamation law is serious (the UK
especially). Before any narration reaches the owner, a fairness pass at `max` effort checks every line about a
company or person:
1. **Attribution:** findings are said as "the N-T-S-B found"; allegations as "a lawsuit alleges", with the
   defendant's public response if one exists.
2. **Status and date:** pending cases are said as pending, as of a stated date; settlements are not admissions.
3. **No guilt without a verdict:** no "criminal", "fraud", "cover-up" unless a court or regulator found it.
4. **Individuals** only in their public role and only for what the record shows them doing.
5. **Our analysis is labelled as ours** ("Read together, these filings suggest…"), and it must be a fair reading.
6. **No motive invented:** we show decisions and their documented effects, not what someone "wanted".
The pass writes `review/fairness_vN.md` (line → risk → fix). Anything still doubtful goes to the owner as a choice.

## 10. Remotion engine

### 10.1 Setup and pins
One workspace for every film at the repo root. `remotion` and every `@remotion/*` at **4.0.534**; React **19.2.3**,
three **0.178.0**, @react-three/fiber **9.2.0**, TypeScript **5.9.3**, fonts from fontsource 5.3.0. Exact versions.
Upgrade between films, never mid-film. Licence: free for individuals and companies with up to 3 employees.

### 10.2 Coding standard
Strict TypeScript, no `any`; `npx tsc --noEmit` before any render. Every animation from `useCurrentFrame()` with
clamped `interpolate()` or `spring()`; no CSS `@keyframes`, `Math.random`, `Date.now`, network or external URLs.
Assets via `staticFile()`. Fonts via `loadBrandFonts()`. `<Sequence>`s on frames from `vo/timing.json`. Every visual
event exports an SFX cue. Brand tokens from `brand.ts` only (`python3 scripts/brand_ts.py` regenerates it).

### 10.3 The scene handoff document
`films/<slug>/scenes/<scene_id>.md` before code: duration in frames, the words the picture reacts to (with times),
the exhibits and their source ids, readout rows with claim ids, colours by meaning, labels, SFX cues, and the
semantic-lock line ("at 'four bolts' the four empty holes light red").

### 10.4 VO timing
`scripts/vo_timing.py` (silence-to-script alignment + word spreader) writes `vo/timing.json`. No speech recognition.

### 10.5 Rendering
- **720p review cuts first** (`scale` `2/3`, written as a fraction), **4K master** (`scale` 2) only after approval.
- **Full renders on GitHub's runners** (`.github/workflows/remotion-render.yml`: up to 20 runners, 30 s shards,
  joined, mix laid under, film to Drive `<film>/renders/`). Needs the repo secret `GDRIVE_RCLONE_TOKEN`.
- **In the session:** Remotion's own browser download (`remotion.media`) is blocked, so stills need
  `--browser-executable=/opt/pw-browsers/chromium_headless_shell-1243/chrome-headless-shell-linux64/chrome-headless-shell --gl=swangle`;
  `scripts/render_shards.mjs` picks that shell up by itself (override with `REMOTION_BROWSER`).
- Measured 2026-11-02 (session VM): `EngineCheck` (desk, exhibit, readouts) at 720p60: 393 ms a frame.

## 11. Assets
- **Code first:** schematics, mechanisms, telemetry and reconstructions are written, not downloaded.
- **Real records:** US federal documents and photos are public domain (credit them anyway); company filings are
  public records; court exhibits as filed. Log every asset in `media_manifest.csv` (file, source URL, licence,
  credit line, where used).
- **Design from real references:** before drawing a real part (a door plug, a bogie, a transformer core), collect the
  report's figures and real photos into `films/<slug>/assets/ref/` (gitignored), make a contact sheet
  (`scripts/contact_sheet.py`) and write `design-reference.md`.
- Third-party photos and footage: commercial-use licences only (no NC/ND), short credited excerpts where fair use
  applies and the owner agrees.
- **Blocked from the cloud:** `downloads.rclone.org`, Remotion's browser download, YouTube (intermittent), Vimeo,
  Mixkit, the Pexels/Pixabay websites (the Pixabay API works). Never route around blocks; the owner fetches on the
  phone with `scripts/termux_fetch_to_drive.sh` (rclone remote `moe`).

## 12. Sound
- Dialogue −14 LUFS integrated, −1 dBTP; music low, sparse and cold (drones, single piano notes, room tone), ducked
  under the voice; SFX from `sfx.ts` (ticks, paper, stamp, highlighter, synthesised alarm chimes, the grid's 60 Hz
  hum). Silence before a key exhibit line.
- Master measured twice, stereo made before measuring, checked per channel in the final MP4 (`scripts/score_mix.py`).
- Never use a real alarm or cockpit recording that isn't released and licensed; synthesised tones are labelled in
  the manifest as synthesised.

## 13. Discovery and packaging

### 13.1 How YouTube finds videos (applies to us)
Recommendations are pulled per viewer and each video is judged on its own; search ranks by relevance (title,
description, captions, spoken words), engagement and quality; browse is won by the thumbnail and title, suggested by
what people watch together; satisfaction counts beside watch time; tags barely matter; Test & Compare picks by
watch-time share. So: the main search phrase in the title's first ~40 characters and said in the first minute;
description line 1 carries it; chapter names are search phrases; upload our exact SRT; three thumbnails in Test &
Compare; read Studio at 48 h, 7 days and 28 days.

### 13.2 Title
The case + the margin, factual, curiosity without clickbait: *The Four Missing Bolts* works because it is exactly
true. No question-mark bait, no "EXPOSED", no all-caps.

### 13.3 Thumbnail
One object or one line of evidence, one question. Two elements at most (the part and the number; the exhibit line and
the redaction). Readable on a phone in one second. Honest: what is shown is in the film.

### 13.4 Description
Two or three plain lines on the case, then chapters (`0:00` first), then **sources** (the records the film is built
on, with links): for a forensic channel the source list is part of the trust. No AI disclosure line (the Studio
setting carries it), no hashtags spam, no cross-promotion.

### 13.5 Shorts
2–3 per film: one exhibit line, one threshold crossing, one mechanism. Same fairness and fact rules.

### 13.6 Launch
The trilogy (§17.3) goes out in order; each end screen points to the next case only.

### 13.7 The YouTube package, every final film
- [ ] 3 thumbnails (1280×720 JPG) for Test & Compare
- [ ] title and description in click-to-copy blocks; chapters from the exact uploaded cut
- [ ] English SRT from our script timing
- [ ] Studio checklist for the owner: "Altered or synthetic content" setting, category, made-for-kids No
- [ ] all saved in `films/<slug>/youtube/`, PR merged

## 14. Review gates

### 14.1 Script gate
- [ ] `claims.csv` complete, the gate passes; every changed line re-checked.
- [ ] Fairness pass written and clean.
- [ ] The record on screen within 5 s; open loop named by 1:00; the act-I question by 2:30; channel name only in the outro.
- [ ] Act III names a dated, documented decision; Act V's "still in service" is sourced.
- [ ] Lean-in test, `vo_lint.py`, audience review.

### 14.2 Picture gate (every cut)
- Two frames a second with the words heard under each; every sheet read; every frame shows what is said.
- No flash frames (`render_shards.mjs` checks every shard), nothing frozen over 2.5 s, no black frames.
- Every exhibit carries its source tag; every readout its claim id or ILLUSTRATIVE; reconstructions labelled.
- Text readable on a phone; nothing important under YouTube's overlays.
- −14 LUFS, −1 dBTP; picture length = film length (the shard script fails loud if not).
- Independent viewer review in a new session for final cuts.

## 15. Tools
- `scripts/brand_ts.py`: `config/brand.yaml` → `lib/remotion/brand.ts`.
- `scripts/claims_check.py`: the fact gate. `scripts/vo_lint.py`: the George text gate (new, 2026-11-02).
- `scripts/vo_timing.py` + `scripts/align_script.py`: VO timing. `scripts/vo_review.py`: measures each take.
- `scripts/score_mix.py`: the mixer. `scripts/contact_sheet.py`: timecoded sheets. `scripts/shoot.mjs`: HTML/SVG → image.
- `scripts/render_shards.mjs`: sharded renders, flash-frame and length checks.
- `scripts/upload_gdrive.sh`, `scripts/gdrive_pull.sh`, `scripts/termux_fetch_to_drive.sh`: Drive.
- `.github/workflows/remotion-render.yml`: the render farm.
- Python needs: `pyyaml` (brand), `numpy`, `pillow`; the VO tools list theirs in their headers.

---

# Part D

## 16. Lessons log
*(Newest first. Each: what happened, the rule, why.)*

**Channel foundation (2026-11-02).**
- *The repo is public.* A rules file naming the owner and other channels would tie the "independent studio" to
  them for anyone who looks. Owner's choice: stay public (free runners), name nobody. **Rule:** no owner name, no other
  channel or repo named anywhere in this repo. Note: the GitHub account name itself is public and shared.
- *ffprobe can print `10.000000,`*: `Number()` of that is NaN, and a NaN length check passes silently. **Rule:** parse
  the first field and fail loud on NaN (fixed in `render_shards.mjs`).
- *White paper swallows overlays* (§6.6). **Rule:** overlays on cards.
- *Remotion's browser download is blocked in the container.* Use the pre-installed headless shell (§10.5).
- *The rclone binary download is blocked in the container*, so the Drive folder couldn't be made from this session;
  the upload script now creates `Margin-of-Error/` by name on first use (from the render farm or a session where the
  download works).

## 17. Decisions and open questions

### 17.1 Owner's decisions
1. **2026-11-02: the repo stays public; nothing in it names the owner or other channels.**
2. Handoff spec received 2026-11-02 (Part G): brand, five-act structure, look, George, the launch trilogy.

### 17.2 Open (to settle before or during Film 1)
1. **Handle:** `config/brand.yaml` holds `@marginoferror` as a placeholder until the owner confirms the real one.
2. **Brand art** (logo, avatar, banner, watermark): to design in its own phase, 3 concepts each.
3. **Acronym format for George:** the spec's hyphen spacing (`N - T - S - B`) is the default; measure it on the
   first test paragraph (§7.5).
4. **Drive folder:** created on the first upload; record its id here and in `upload_gdrive.sh` afterwards.
5. Repo secret `GDRIVE_RCLONE_TOKEN` for the render farm (owner: Settings → Secrets and variables → Actions).

### 17.3 The launch trilogy: what research must check first
The spec's case summaries (Part G §6) were written before research. Each point below is a claim to check against
the primary record before it shapes a script. Where we remember something different, it is noted as **unverified
memory**, a reason to look, never a fact.

**Episode 1, *The Four Missing Bolts* (Alaska Airlines 1282, 737-9 mid-exit door plug).**
- The plug's retention: the spec says "stop fittings and 4 locating/retaining pins". Check the NTSB final report for
  the exact hardware (bolts vs. pins, stop pads, guide fittings) and what each does.
- Where the plug was opened: the spec ties the failure to Spirit AeroSystems/Wichita. Unverified memory: the NTSB
  placed the opening and the missing reinstallation at Boeing's Renton factory, during rework of damaged rivets
  that came from the supplier. The film must locate each step exactly as the report does.
- "Piecework quota pressure": find a documented source (report, testimony, filing) or drop it.
- "Traveled work", the ticket that was never opened, and the 2005 divestiture: dates and terms from the record.
- The NTSB probable cause, verbatim, and the FAA's actions after it.
- Any Boeing reacquisition of Spirit and its status at the date of publication.

**Episode 2, *The 4-Year Waiting List for Power* (large power transformers and GOES).**
- "A single domestic GOES mill": check the current number of US producers (DOE, Commerce/Section 232 records).
- Lead times "3 to 4 years": check DOE, NREL, NIAC or industry reports and the year they describe.
- How much of the US large-transformer fleet and GOES is imported: if most is imported, "the entire grid depends on
  a single mill" is overstated and must be reframed.
- "Permanent blackout conditions": a false absolute. Replace with the documented recovery-time estimates.
- Deregulation and just-in-time spares: find the specific records (FERC, NERC spare-equipment programs, utility
  filings) that support the Act III link.

**Episode 3, *The Thirty-Mile Train* (Norfolk Southern 32N, East Palestine, Ohio).**
- **The title:** unverified memory puts the train at under two miles long (about 150 cars). "Thirty-mile" must be
  checked; if false, the title changes.
- The detector readings and thresholds: the spec says the alarm threshold was "calibrated artificially high to prevent
  train stoppage" and the axle sheared "before the crew received an alarm". Unverified memory: the last detector did
  alarm and the crew braked, and the NTSB discussed the threshold settings. Use the NTSB's exact findings, readings
  and words only.
- "Slashing inspection times from 3 minutes per car to 30 seconds": find the source (union testimony, FRA, a filing)
  and attribute it as a claim, or drop it.
- "PSR demanded by activist hedge funds": check which railroads, which investors, which dates; Norfolk Southern's own
  adoption timeline from its filings.
- Trains over 10,000 feet: check the FRA/GAO records on train length.
- The vent-and-burn decision and its findings belong in Act V only if the record supports the link to the margin.

---

# Part G: the owner's handoff spec, verbatim

## G.1 MARGIN OF ERROR, Channel Specification & Strategic Handoff (received 2026-11-02)

Kept word for word below, except that the names of the owner's other channels and their voice and flagship details
in §2 are removed, because this repo is public (owner, 2026-11-02). The full original is in the owner's own files.

> ## 1. Executive Identity & Core Premise
>
> * **Channel Brand:** MARGIN OF ERROR
> * **Tagline:** *Where accounting meets the laws of physics.*
> * **Editorial Thesis:** On Wall Street, "Margin" measures quarterly profit. In engineering, "Margin" is the buffer
>   that keeps an airliner in the air, a bridge standing, or a power grid stable. When corporate leadership optimizes
>   for the financial margin, they systematically eliminate the physical margin of error—until the metal fails.
> * **Target Audience:** Tier-1 Anglosphere (United States, United Kingdom, Canada, Australia, European tech hubs).
> * **Tone & Persona:** Clinical, forensic, objective, and authoritative. Structured like an unsparing NTSB/FAA
>   investigative inquiry rather than commentary or corporate news gossip.
>
> ## 2. The 3-Channel Strategic Architecture
>
> To prevent algorithmic cross-contamination and protect seed-audience click-through rates (CTR), production is
> strictly partitioned into three independent channels. [Other channels removed from the public copy.]
> MARGIN OF ERROR: Domain: US/UK/Anglosphere · Scope: Systemic Industrial & Corporate Forensics, Infrastructure
> Fragility · Voice: George (Clinical British) · Launch: Boeing 737 MAX 9 Plug · Currency: $, Millions/Billions.
>
> ### Operational Rules of Separation:
> 1. **Never cross-promote directly on-air:** The Western audience must perceive *MARGIN OF ERROR* as an independent,
>    faceless investigative studio.
> 2. **Never mix currency or localized terms:** *MARGIN OF ERROR* exclusively utilizes international notations (`$`,
>    `Millions`, `Billions`, `Metric Tons`, `Feet`, `Pascals/PSI`).
> 3. **No AI disclosure in public descriptions:** Viewer immersion is paramount. Disclosure is handled strictly through
>    YouTube Studio's backend upload settings (`Altered or synthetic content` → `Yes`).
>
> ## 3. The 5-Act Forensic Scripting Structure
>
> Every documentary follows an uncompromising 5-act investigation blueprint optimized for desktop and Smart TV
> retention:
>
> ```
> [Act I: The Incident] ──> [Act II: The Mechanism] ──> [Act III: The Boardroom] ──> [Act IV: The Cascade] ──> [Act V: The Verdict]
>  (0:00 - 2:30)             (2:30 - 6:00)               (6:00 - 11:00)               (11:00 - 16:00)           (16:00 - End)
>  Telemetry Countdown       Designed Redundancy         The Margin Extraction        Microscopic Physics       The Unresolved Risk
> ```
>
> * **Act I: The Incident / Black-Box Opening (0:00 – 2:30):**
>   * Opens in media res with timestamped black-box audio, radar traces, dispatch recordings, or sensor telemetry.
>   * Establishes life-or-death physical stakes without channel introductions or promotional fluff.
>   * Closes with the central question: *Where did the margin of error run out?*
> * **Act II: The Mechanism (2:30 – 6:00):**
>   * Explains how the system was engineered to function under ideal conditions.
>   * Demonstrates the multi-layer fail-safes and redundancy factors (1.5× design loads, dual sensor channels,
>     mechanical interlocks).
> * **Act III: The Boardroom Extraction (6:00 – 11:00):**
>   * The investigative turn: Wall Street accounting overrides the factory floor.
>   * Audited exhibits: SEC Form 10-K filings, stock buyback authorizations, private equity dividend
>     recapitalizations, internal cost-cutting memos, piecework quotas.
>   * Identifies the exact managerial decision that traded safety buffers for financial margins.
> * **Act IV: The Cascade (11:00 – 16:00):**
>   * The physical consequence of the boardroom compromise.
>   * Deep engineering analysis: stress corrosion cracking, thermal fatigue striations, sensor saturation, bypassed
>     inspection gates, or unwritten maintenance tickets.
> * **Act V: The Verdict & The Unresolved Threat (16:00 – End):**
>   * Criminal indictments, civil litigation, and systemic regulatory capture.
>   * The chilling conclusion: Demonstrating that the identical failure mode remains deployed across the wider sector
>     today.
>   * Understated, clinical sign-off.
>
> ## 4. Visual Language & Motion Specification (Remotion)
>
> The visual environment rejects generic AI stock imagery. Every scene is rendered as an audited technical exhibit on
> an investigator's desk.
>
> ### Color Tokens
> * **Void Background:** `#0a0d12` (Cold ballistic slate; never `#000000`).
> * **Card Surface:** `#121824` with a 1px border of `#1e293b`.
> * **Technical Cyan:** `#38bdf8` (Nominal systems, schematics, vector paths).
> * **Warning Amber:** `#f59e0b` (Stress thresholds, sensor drift, financial callouts).
> * **Failure Red:** `#ef4444` (Fracture zones, telemetry cutoffs, structural collapse).
> * **Audited Document Surface:** `#f3f4f6` with authenticated translucent yellow highlight overlays
>   (`rgba(250, 204, 21, 0.25)`).
>
> ### Typography & Data Styling
> * **Telemetry & Readouts:** JetBrains Mono or Roboto Mono (Timestamps, strain gauge readouts, airspeed, coordinates).
> * **Structural Titles:** Inter or DIN Pro (Bold, tracked uppercase, clean technical hierarchy).
> * **Document Exhibits:** Unaltered scanned serif/monospaced fonts from declassified records, NTSB public dockets, or
>   court depositions.
>
> ### Motion Principles
> * **Coordinate Anchors:** All animated schematics sit on a measured coordinate grid with `0.05` opacity.
> * **Continuous Interpolation:** Sensor counters, pressures, and timeline bars interpolate dynamically via Remotion's
>   `spring` and `interpolate` APIs—no abrupt digital cuts on numerical values.
> * **Camera Depth:** Documents are staged in 2.5D space (`perspective: 1000px`), pulling inward from a full letterhead
>   down to the highlighted violation.
>
> ## 5. Voice Synthesis & Audio Pipeline
>
> * **Primary Voice:** ElevenLabs **George** (Warm, authoritative British documentary narrator).
> * **Model Configuration:** ElevenLabs Multilingual V2 / Turbo V2.5.
>   * Stability: `0.60` – `0.65` (steady, controlled pacing).
>   * Similarity: `0.78` – `0.82`.
>   * Style Exaggeration: `0.00` (flat, unemotional, clinical delivery).
> * **Syntax & Breath Directives:**
>   * No bracketed emotion/sound tags (`[sigh]`, `[whisper]`, `[pause]`).
>   * Breath timing controlled via punctuation: commas (`,`) for brief 0.25s cadence breaks, em-dashes (`—`) for
>     explanatory shifts, ellipses (`...`) for tense investigative halts.
>   * Double paragraph breaks to allow natural acoustic tail decay.
> * **Pre-Formatted Pronunciation Syntax:**
>   * Acronyms: Pre-spaced with hyphens (`F - A - A`, `N - T - S - B`, `N - S`, `S - E - C`).
>   * Numerical Values: Pre-converted to words in text buffers (`sixteen thousand feet`, `four point eight billion
>     dollars`, `two hundred and fifty-three degrees`).
>
> ## 6. The Launch Trilogy (Episodes 1–3)
>
> ### Episode 1: *The Four Missing Bolts*
> * **Case Study:** Alaska Airlines Flight 1282 (Boeing 737 MAX 9 door plug blowout).
> * **The Engineering:** Semi-plug door design relying on stop fittings and 4 locating/retaining pins.
> * **The Boardroom Decision:** The divestiture of Boeing Wichita to Spirit AeroSystems; piecework quota pressure and
>   the "traveled work" management system.
> * **The Failure Mode:** Workers opened the plug to repair misaligned rivets without creating an enterprise tracking
>   ticket; the aircraft was sealed and delivered with zero retaining bolts installed.
>
> ### Episode 2: *The 4-Year Waiting List for Power*
> * **Case Study:** The systemic fragility of the US bulk power grid and high-voltage step-up (GSU) transformers.
> * **The Engineering:** High-permeability Grain-Oriented Electrical Steel (GOES) transformer cores managing high
>   magnetic flux.
> * **The Boardroom Decision:** Decades of deregulation, just-in-time utility spares inventories, and the closure of
>   domestic specialty metallurgy foundries.
> * **The Failure Mode:** The entire North American transmission grid depends on a single domestic GOES mill, creating
>   3- to 4-year lead times where a single coordinated storm or physical sabotage event creates permanent blackout
>   conditions.
>
> ### Episode 3: *The Thirty-Mile Train*
> * **Case Study:** The Norfolk Southern chemical derailment in East Palestine, Ohio.
> * **The Engineering:** Tapered roller-bearing bogies monitored by trackside infrared Hot Bearing Detectors (HBDs).
> * **The Boardroom Decision:** Precision Scheduled Railroading (PSR) demanded by activist hedge funds; slashing
>   inspection times from 3 minutes per car to 30 seconds while assembling trains over 10,000 feet long.
> * **The Failure Mode:** Overheated bearing temperatures rose beyond critical thresholds (253°F over ambient), but
>   alarm thresholds had been calibrated artificially high to prevent train stoppage, shearing the axle before the
>   crew received an alarm.
>
> ## 7. Directives for Claude & Automated Workflows
>
> When processing scripts, data models, or visual code for *MARGIN OF ERROR*:
> 1. **Zero Fluff:** Eliminate all introductory conversational openings ("In today's video," "Welcome back," "Imagine
>    if").
> 2. **Primary Sources Only:** Verify technical failures against official government and academic dockets (NTSB, FAA,
>    CSB, SEC, ASME, IEEE).
> 3. **Strict Domain Isolation:** Keep the forensic gaze locked on systemic corporate, regulatory, and mechanical
>    breakdowns. [One clause naming another region's geopolitics is summarised in CLAUDE.md.]
