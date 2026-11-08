---
name: deliver
description: Hand a finished Margin of Error cut or master to the phone-only owner - Drive links, contact sheet, check files, and for the final film the YouTube package (3 thumbnails, title, description with chapters and sources, SRT, pinned comment, Studio checklist), the release window and the after-release reads. Use when a review cut or the 4K master is ready.
---

# Deliver to the owner

Rules: `CLAUDE.md`; PLAYBOOK §1 (delivery), §13 (package, launch, comments), §13.7 (checklist).

1. **Video to Drive:** `scripts/upload_gdrive.sh --sub <slug> FILE…` (needs `GDRIVE_RCLONE_TOKEN`; if missing, say so
   and stop). Review cuts at 720p; the final as the 4K master plus a 1080p copy. Links private.
2. **Files with SendUserFile:** the contact sheet, the round's `_check.md` or picture gate, the SRT.
3. **YouTube package (final films)** in `films/<slug>/youtube/`:
   - the three locked titles, one per angle and one shared promise (re-run the promise check, §5.1), each word on a
     confirmed `claims.csv` row, plus a search-safe fallback (§13.2);
   - three 1280×720 thumbnails, one per title, built from the locked concepts on the real exhibit, gated at 168 px wide (§13.3);
   - the description: 2–3 plain lines with the searched names, chapters from `0:00` taken from the exact uploaded
     file, the sources with record ids (§13.4); no AI line, no cross-promotion;
   - the English SRT from the locked script and timing; the pinned opening comment (§13.8);
   - title and description also in the chat as click-to-copy blocks.
4. **Release plan in the reply** (§13.6): Unlisted at least 3 hours ahead, the window, Studio's "Altered or synthetic
   content" setting for the owner, Test & Compare with the three thumbnails, the pinned comment within 60 s, no
   self-views, the 24 h / 7 d / 28 d reads and the challenger rule.
5. **Report in plain words:** what changed since the last cut, what is reconstructed or illustrative, rights risks
   (docket items with owners' marks, third-party clips), what you need from the owner.
6. **Close-out:** commit (no large media), push, PR to `main`, merge, name the branch to delete, archive review
   sessions. Once the owner approves a cut, stop editing it.
