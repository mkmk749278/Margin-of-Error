#!/usr/bin/env python3
"""Word-level sync audit (PLAYBOOK §10.6): where does the picture stop reacting to the narration?

  python3 scripts/sync_audit.py films/<slug> [--max-gap 1.5] [--md films/<slug>/review/sync_audit.md]

Reads every word cue the picture code places on the narration, wf(<sentence>, '<word>'[, nth]) (single or double quotes) and
wef(...), in films/<slug>/remotion/**/*.ts(x), and resolves it to measured frames from vo/timing.json (word times from
scripts/word_align.py). For every spoken sentence it reports the cued words and the longest stretch of speech with no
word-locked visual event (sentence start and end count as edges, not as events). A sentence fails when that stretch
is longer than --max-gap seconds, or when it carries a spoken number, date or bolt count that no cue lands on.
A cue written with a variable sentence id (wf(S, ...)) is not seen: write literal ids.
Exit status 0 always (an audit, not a gate); the summary line says how many sentences fail.
"""
import argparse
import json
import re
from pathlib import Path

CUE = re.compile(r"""\bw(?:e)?f\(\s*(\d+)\s*,\s*(?:'([^']+)'|"([^"]+)")\s*(?:,\s*(\d+))?\s*\)""")
NUM = {"one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen",
       "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "thirty", "forty", "fifty",
       "sixty", "seventy", "eighty", "ninety", "hundred", "thousand", "million", "billion", "first", "second", "third",
       "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth", "january", "february", "march", "april",
       "may", "june", "july", "august", "september", "october", "november", "december", "half", "percent", "zero"}


def clean(w: str) -> str:
    return re.sub(r"[^a-z0-9']", "", w.lower())


def is_metric(w: str) -> bool:
    return any(p in NUM for p in clean(w.replace("-", " ")).split()) or any(p in NUM for p in w.lower().replace("-", " ").split())


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("film", type=Path)
    ap.add_argument("--max-gap", type=float, default=1.5)
    ap.add_argument("--md", type=Path)
    a = ap.parse_args()
    t = json.loads((a.film / "vo/timing.json").read_text())
    by_s: dict[int, list[dict]] = {}
    for w in t["words"]:
        by_s.setdefault(w["s"], []).append(w)
    cued: dict[int, set[int]] = {}
    for src in sorted((a.film / "remotion").rglob("*.ts*")):
        for m in CUE.finditer(src.read_text()):
            sid, word, nth = int(m.group(1)), clean(m.group(2) or m.group(3)), int(m.group(4) or 0)
            hits = [k for k, w in enumerate(by_s.get(sid, [])) if clean(w["w"]) == word]
            if len(hits) > nth:
                cued.setdefault(sid, set()).add(hits[nth])
    rows, fails, tot_gap = [], 0, 0.0
    for s in t["sentences"]:
        ws = by_s.get(s["id"], [])
        ks = sorted(cued.get(s["id"], set()))
        marks = [s["start"]] + [ws[k]["start"] for k in ks] + [s["end"]]
        gap = max(b - x for x, b in zip(marks, marks[1:]))
        metrics = [k for k, w in enumerate(ws) if is_metric(w["w"])]
        # a multi-word number ("one hundred and eight") is covered if any of its words is cued
        groups, cur = [], []
        for k in metrics:
            if cur and k - cur[-1] > 2:
                groups.append(cur)
                cur = []
            cur.append(k)
        if cur:
            groups.append(cur)
        missed = [" ".join(ws[k]["w"] for k in g) for g in groups if not set(range(g[0], g[-1] + 1)) & set(ks)]
        bad = gap > a.max_gap or bool(missed)
        fails += bad
        tot_gap += max(0.0, gap - a.max_gap)
        rows.append((s, len(ks), len(ws), gap, missed, bad))
    head = (f"{len(rows)} sentences · {sum(r[1] for r in rows)} word cues on {sum(r[2] for r in rows)} words · "
            f"{fails} sentences fail (longest uncued stretch > {a.max_gap} s, or a spoken number with no cue)")
    print(head)
    if a.md:
        out = [f"# Sync audit: {a.film.name}", "", head, "",
               "| s | time | cues/words | longest uncued | numbers with no cue | sentence |", "|---|---|---|---|---|---|"]
        for s, nc, nw, gap, missed, bad in rows:
            mark = "**FAIL**" if bad else "ok"
            mm = f"{int(s['start'] // 60)}:{s['start'] % 60:04.1f}"
            out.append(f"| {s['id']} | {mm} | {nc}/{nw} | {gap:.1f} s {mark} | {'; '.join(missed)} | {s['text'][:70]} |")
        a.md.write_text("\n".join(out) + "\n")


if __name__ == "__main__":
    main()
