# The Four Missing Bolts: status and handoff (2026-11-03)

Read this first in a new session, then `CLAUDE.md` and the playbook parts it names.

## Done (all merged to `main`)
- **Research:** NTSB AIR-25-04 read in full (`research/ntsb_AIR-25-04_notes.md`), money trail (`research/money_trail_notes.md`),
  `claims.csv` (88 rows, every quote verified against its source; gate passes).
- **Treatment** (`treatment.md`) approved by the owner, with the owner's calibration (2026-11-03) at the end.
- **Script v2.1** (`script/vo.txt`, 2,068 words, about 15 min of voice): independent audience review applied
  (`review/audience_v1.md`), fairness pass (`review/fairness_v1.md`), no ellipses, "Max" casing; `vo_lint.py` passes.
  Recording blocks: `vo/vo_blocks.md` (5 blocks, 12,096 characters).
- **Screenplay** (`script/screenplay.md`): 66 beats with pictures, claim ids, questions; open-loop lock 5:45–6:15
  after the promise.
- **Assets** (`media_manifest.csv`, 89 rows; files in Drive `Margin-of-Error/four-missing-bolts/assets/` and
  `footage/`, gitignored here): NTSB report figures and pages, 35 docket items (FDR CSVs, structures, materials,
  manufacturing records, hearing transcripts), 11 NTSB Flickr photos, FAA AD, SEC filings, 2 NTSB YouTube clips,
  synthesised SFX. Reference-only items are marked; the Spirit video stays reference only (owner, 2026-11-03).
- **Data:** `remotion/data/fdr_1282.json` (real FDR: altitude, cabin pressure, warnings, GPS);
  `remotion/telemetry.ts` (sourced values and labels, `checkOpenLoop`).
- **Design reference:** `scenes/design-reference.md`.

## Next, in order
1. **Voice (owner, 2026-11-03: custom ElevenLabs voice "1", George dropped).** Check `ELEVENLABS_API_KEY` is set
   (never print it). Run `python3 scripts/tts_elevenlabs.py films/four-missing-bolts --dry-run`, then `--blocks 1`.
   Measure block 1 (`scripts/vo_review.py`), listen for `N - T - S - B`, dashes and colons; tune `config/voice.yaml`
   if needed; then generate the rest. Upload: `scripts/upload_gdrive.sh --sub four-missing-bolts/vo films/four-missing-bolts/vo/*.mp3`.
   Send the owner block 1 first as an audio file before generating all five.
2. **Timing:** `scripts/vo_timing.py` → `vo/timing.json`; check the open loop with `checkOpenLoop` (5:45–6:15).
3. **Scenes in Remotion:** Act I on the real FDR data, Act II plug cutaway (true geometry, `design-reference.md`),
   then Acts III–V; every mount on exhibit paper (PLAYBOOK §6.5a); stills reviewed in the session.
4. **Mix** to the owner's standard (PLAYBOOK §12), 720p review cut on the render farm, picture gate (§14.2).
5. **Package** (§13.7) after the owner approves the cut.

## Open with the owner
- rclone's shared Google Drive client id is being retired during 2026; the owner should create their own client id
  and re-authorise (phone and the `GDRIVE_RCLONE_TOKEN` secret) before it breaks.
- Brand art (logo, avatar, banner) still to design.
- Before publication: the status of the plug design enhancement (C65).

## Branch
Work happened on `ccr-76270493-hjpb56`, fully merged; the owner can delete it.
