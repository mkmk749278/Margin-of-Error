#!/usr/bin/env python3
"""Find phrases on rendered report pages and write their highlight rectangles (PLAYBOOK §6.6, Exhibit highlights).

  python3 scripts/page_phrases.py PDF SPEC.json OUT.json [--width 1870] [--min-x PTS] [--min-y PTS] [--sort-lines]

SPEC: {"key": {"page": 62, "phrase": "If removal needed"}, …}. Uses pdftotext -bbox (word boxes in points), finds the
phrase as a word sequence (case and quotes normalised), and returns one rectangle per line in page-image pixels
(the page renders are `--width` px wide). Fails loud on a phrase that is not found: a highlight never lands on the
wrong words. --min-x / --min-y drop words left of / above a line in points (a transcript's line numbers and running
page number, which otherwise break a phrase that wraps). --sort-lines reads words line by line, left to right
(pdftotext emits some transcript lines out of order).
"""
import json
import re
import subprocess
import sys
import xml.etree.ElementTree as ET

pdf, spec_p, out_p = sys.argv[1:4]
arg = lambda f, d: float(sys.argv[sys.argv.index(f) + 1]) if f in sys.argv else d  # noqa: E731
width = int(arg("--width", 1870))
min_x, min_y = arg("--min-x", 0.0), arg("--min-y", 0.0)
spec = json.load(open(spec_p))
norm = lambda w: re.sub(r"[^a-z0-9%$]", "", w.lower().replace("’", "'"))  # noqa: E731
cache = {}
out = {}
for key, s in spec.items():
    pg = s["page"]
    if pg not in cache:
        x = subprocess.run(["pdftotext", "-f", str(pg), "-l", str(pg), "-bbox", pdf, "-"], capture_output=True, text=True, check=True).stdout
        x = re.sub(r"<!DOCTYPE[^>]*>", "", x).replace("&nbsp;", " ")
        root = ET.fromstring(re.sub(r' xmlns="[^"]+"', "", x))
        page = root.find(".//page")
        pw = float(page.get("width"))
        words = [(norm(w.text or ""), float(w.get("xMin")), float(w.get("yMin")), float(w.get("xMax")), float(w.get("yMax")))
                 for w in page.iter("word") if float(w.get("xMin")) >= min_x and float(w.get("yMin")) >= min_y]
        if "--sort-lines" in sys.argv:
            words.sort(key=lambda w: (round(w[2] / 3), w[1]))
        cache[pg] = ([w for w in words if w[0]], width / pw)
    words, k = cache[pg]
    target = [norm(t) for t in s["phrase"].split() if norm(t)]
    seq = [w[0] for w in words]
    hit = next((i for i in range(len(seq)) if seq[i:i + len(target)] == target), None)
    if hit is None:
        sys.exit(f"{key}: phrase not found on page {pg}: {s['phrase']!r}")
    ws = words[hit:hit + len(target)]
    lines = []
    for w in ws:
        if lines and abs(w[2] - lines[-1][1]) < 4:
            l = lines[-1]
            lines[-1] = [min(l[0], w[1]), min(l[1], w[2]), max(l[2], w[3]), max(l[3], w[4])]
        else:
            lines.append([w[1], w[2], w[3], w[4]])
    pad = 3
    out[key] = {"page": pg, "rects": [{"x": round((a - pad) * k), "y": round((b - pad) * k), "w": round((c - a + 2 * pad) * k),
                                       "h": round((d - b + 2 * pad) * k)} for a, b, c, d in lines]}
json.dump(out, open(out_p, "w"), indent=1)
print(f"{len(out)} phrases located")
