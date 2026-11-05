---
name: source-exhibits
description: Find, fetch, vet, label and log the exhibits and footage for a Margin of Error film - report figures, docket files and data, filings, public footage, licence-clean stock, reference photos - down the record-first chain, with a Termux line or Cowork request for anything blocked. Produces contact sheets, media_manifest.csv rows and design-reference.md.
---

# Source exhibits

Rules: PLAYBOOK §11 (chain, owner routes, vetting), §9.4–§9.5 (labels, evidence integrity), §6.6 (one desk pose).
One sourcing session per film (all sessions share one IP). Fact-check before sourcing.

For each beat in the treatment's beat sheet:
1. **The film's Drive `footage/` folder first** (`scripts/gdrive_pull.sh <slug>/footage films/<slug>/assets/footage`).
2. **The record's own exhibits:** report PDFs (pages rendered, highlights on the words' own boxes with
   `scripts/page_phrases.py`), the docket's item list (data files such as FDR CSVs are records, not reconstructions),
   agency photo albums, filings shot from their own HTML (`scripts/doc_shots.mjs`), hearing records.
3. **Then** official public footage (short, credited), then licence-clean stock and archive (Pixabay API, Commons,
   Openverse `license_type=commercial`, archive.org), then our own drawing, labelled. Never AI imagery of a real place,
   person, aircraft or vehicle. Never route around a block.
4. **Blocked:** YouTube → one complete Termux line; anything else → one complete Cowork request (PLAYBOOK §11.1),
   batched, one per round. Pull, then look.
5. **Rights:** US federal works are public domain (credit anyway). **Public docket ≠ public domain:** scan every docket
   PDF for copyright or proprietary marks ("Reproduced with permission", "Copyright ©") and classify the item before
   use. Commercial licences only, no NC/ND; check each file's own page.
6. **Vet:** `python3 scripts/contact_sheet.py <folder> --out <qa>` (two frames a clip); look at every tile; read signs,
   screens and liveries; strip third-party clips end to end for tickers, captions and logos and log the clean spans;
   probe frame rates (conform to 60 fps). `what_it_shows` must be literally true.
7. **References for anything we draw:** the report's figures and real photos into `films/<slug>/assets/ref/`, a
   contact sheet, `design-reference.md` (element → reference → what to copy).
8. **Log** every file in `media_manifest.csv` (file, what it shows, source page, licence, credit line, where used);
   media to Drive `<slug>/`, never to git.
9. **Report:** contact sheets, what is real vs reconstructed (and its label), what failed and why, the owner's asks.
