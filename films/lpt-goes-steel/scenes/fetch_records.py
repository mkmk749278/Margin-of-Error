#!/usr/bin/env python3
"""Fetch every record the film shows (claims.csv source URLs) into assets/lpt-goes-steel/records/ (PLAYBOOK §11).
PDFs as published; web pages printed to PDF by Chromium (Playwright), so highlights land on located words."""
import csv, os, re, subprocess, sys, hashlib
R = "assets/lpt-goes-steel/records"; os.makedirs(R, exist_ok=True)
NAMES = {  # url fragment -> local name
 "EXEC-2022-001242": "doe2024", "LPTStudyUpdate": "doe2014", "Tran-Cor-H": "trancorh", "Little%20Cliffs": "doe_oced",
 "cleveland-cliffs-to-host": "cliffs_2026", "redacted-goes-report": "goes232", "ustr-statement-successful": "ustr_mexico",
 "2025-08-18_Cleveland": "cliffs_2025", "america-makes-the-wrong-steel": "breakthrough", "2604.18411": "jhu_paper",
 "2020-11-02_Cleveland": "cliffs_2020", "BIS-2025-0023-0784": "howard", "EERE-2019": "eere_2019", "hub.jhu.edu": "jhu_hub",
 "September%2013%202023": "testimony", "BIS-2025-0023-0643": "ermco", "FR-2018-03-15": "fr2018", "Electric%20Grid%20Supply": "doe2022",
 "R45249": "crs", "Joint_Statement_by_the_United_States_and_Canada": "joint_canada", "FR-2021-11-18": "fr2021",
 "FR-2025-08-19": "fr2025", "FR-2025-06-09": "fr2025jun", "FR-2026-04-09": "fr2026apr", "FR-2026-06-04": "fr2026jun",
 "FR-2022-06-09": "fr2022", "LiteCarlite": "cliffs_lite", "eia.gov": "eia", "BIS-2025-0023-0647": "cliffs_filing",
 "hitachi.com": "hitachi", "siemens-energy": "siemens", "prnewswire": "hdhyundai", "FR-2019-05-23": "fr2019", "about-ustr": "ustr_about"}
urls = sorted({r["source_url"] for r in csv.DictReader(open("films/lpt-goes-steel/claims.csv")) if r["source_url"].startswith("http") and "youtube" not in r["source_url"]})
web = []
for u in urls:
    name = next((v for k, v in NAMES.items() if k in u), None)
    if not name: print("no name:", u); continue
    out = f"{R}/{name}.pdf"
    if os.path.exists(out) and os.path.getsize(out) > 2000: continue
    if u.lower().split("?")[0].endswith(".pdf"):
        subprocess.run(["curl", "-sSL", "-m", "180", "-A", "Mozilla/5.0", "-o", out, u])
        ok = open(out, "rb").read(5) == b"%PDF-" if os.path.exists(out) else False
        print(("OK  " if ok else "FAIL"), name, u[:90])
        if not ok: web.append((name, u))
    else:
        web.append((name, u))
if web:
    from playwright.sync_api import sync_playwright
    with sync_playwright() as p:
        b = p.chromium.launch(); ctx = b.new_context(user_agent="Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/124 Safari/537.36")
        for name, u in web:
            try:
                pg = ctx.new_page(); pg.goto(u, timeout=60000, wait_until="networkidle"); pg.wait_for_timeout(1500)
                pg.pdf(path=f"{R}/{name}.pdf", format="Letter", print_background=True, margin={"top": "0.6in", "bottom": "0.6in", "left": "0.6in", "right": "0.6in"})
                print("WEB ", name, pg.title()[:70]); pg.close()
            except Exception as e:
                print("FAIL", name, u[:90], str(e)[:80])
        b.close()
