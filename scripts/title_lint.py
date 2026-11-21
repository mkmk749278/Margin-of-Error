#!/usr/bin/env python3
"""Lint a film's titles and thumbnail words against PLAYBOOK §13.2–§13.3 before they are locked or uploaded.

  python3 scripts/title_lint.py films/<slug>                      # the three titles in youtube/package.md (or brief.md)
  python3 scripts/title_lint.py films/<slug> --file variants.txt  # rank 30+ variants, one per line
  python3 scripts/title_lint.py films/<slug> --title "..." --thumb "SAME DATA"
  options: --case "Titan" (the case name the viewer types; default: read from brief.md's search phrases)
           --json   --strict (exit 1 on any FAIL; default exits 1 only when no title passes)

A variants file takes one title per line; `title || THUMB WORDS` pairs a thumbnail, `#` starts a comment.

What it checks, and why (each a trap we have fallen into or a rule in §13.2):
  FAIL  over 100 characters (YouTube refuses it); a question mark; tabloid or hype words; an all-caps word that is not
        a record acronym; "!", an ellipsis or an emoji; the case name missing (a new channel is matched on topic).
  WARN  the case name not inside the first 40 characters (YouTube publishes no cut-off point and it moves with the
        device and the font, so 40 is our conservative guide for a phone feed and 70 for a full line in search: the
        subject must survive the shortest cut); over 70 characters; no number, date or record id; a verdict word
        ("preventable") that needs an attributed claims.csv row; an implied motive ("knew"); a thumbnail over 4 words
        or repeating the title's words; a Record id missing from claims.csv or not confirmed; the same opening shape
        as a title already in the catalogue (§14.2a: a templated catalogue is a monetisation risk).
Scores are for ranking variants only: a high score is not a prediction of views.
"""
from __future__ import annotations

import csv
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
HARD, FULL, FRONT = 100, 70, 40

TABLOID = {"shocking", "deadly", "insane", "exposed", "horrifying", "terrifying", "unbelievable", "chilling",
           "disturbing", "scandal", "bombshell", "jaw-dropping", "mind-blowing", "nightmare", "evil", "greed",
           "greedy", "crazy", "epic", "horrific", "outrageous", "slammed", "destroyed"}
VERDICT = {"preventable", "negligent", "negligence", "reckless", "criminal", "illegal", "fraud", "cover-up",
           "coverup", "lied", "lies", "fault", "blame", "blamed", "caused"}
MOTIVE = {"knew", "ignored", "hid", "concealed", "wanted"}
ACRONYMS = {"NTSB", "FAA", "CSB", "FERC", "NERC", "DOE", "SEC", "ASME", "IEEE", "USCG", "MBI", "NASA", "EPA", "OSHA",
            "PHMSA", "FRA", "AAR", "NS", "UK", "US", "USA", "EU", "EASA", "CAA", "AAIB", "RAIB", "HSE", "TSB", "ATSB",
            "BEA", "MAX", "IT", "CEO", "CFO", "DOJ", "FBI", "NOAA", "NRC", "ERCOT", "PG&E", "BP", "GE", "AI", "ATC",
            "PSI", "MW", "GW", "KV", "LNG", "HVAC", "911", "000", "II", "III", "IV", "V"}
EMOJI = re.compile("[\U0001F000-\U0001FFFF☀-➿⬀-⯿]")
STOP = {"the", "a", "an", "of", "to", "in", "on", "at", "for", "and", "or", "it", "its", "that", "this", "was", "is",
        "with", "by", "from", "how", "what", "before", "after", "s"}


def words(t: str) -> list[str]:
    return re.findall(r"[A-Za-z0-9][A-Za-z0-9&'’.\-]*", t)


def norm(w: str) -> str:
    return re.sub(r"[’'](s)?$", "", w.lower()).strip(".-")


def case_from_brief(film: Path) -> str | None:
    b = film / "brief.md"
    if not b.exists():
        return None
    line = next((l for l in b.read_text(encoding="utf-8").splitlines() if re.search(r"search (phrase|term)", l, re.I)),
                "")
    phrases = re.findall(r"\*([^*]+)\*", line)
    if not phrases:
        return None
    count: dict[str, int] = {}
    for p in phrases:
        for w in {norm(x) for x in words(p)} - STOP:
            count[w] = count.get(w, 0) + 1
    best = max(count.items(), key=lambda kv: (kv[1], len(kv[0])))
    return best[0] if best[1] * 2 >= len(phrases) else None


def table_titles(md: Path) -> list[dict]:
    """The titles table of a package.md or brief.md: | # | Title | ... | Thumbnail | Record |."""
    if not md.exists():
        return []
    out, cols = [], None
    for line in md.read_text(encoding="utf-8").splitlines():
        if not line.startswith("|"):
            cols = None if not line.strip() else cols
            continue
        cells = [c.strip() for c in line.strip().strip("|").split("|")]
        low = [c.lower() for c in cells]
        if "title" in low and cols is None:
            cols = {name: low.index(name) for name in ("title", "thumbnail", "record") if name in low}
            continue
        if cols is None or set(cells[0]) <= set("-: ") or not re.match(r"\d", cells[0]):
            continue
        get = lambda k: cells[cols[k]] if k in cols and cols[k] < len(cells) else ""
        title = re.sub(r"[*`_]", "", get("title")).strip()
        if title:
            thumb = get("thumbnail")
            thumb = thumb.split("·", 1)[1].strip() if "·" in thumb else ""
            out.append({"title": title, "thumb": re.sub(r"[*`]", "", thumb),
                        "record": re.findall(r"\bC\d+\b", get("record"))})
        if len(out) >= 3:
            break
    return out


def catalogue(skip: Path | None) -> list[tuple[str, str]]:
    out = []
    for pkg in sorted((ROOT / "films").glob("*/youtube/package.md")):
        if skip and pkg.parent.parent.resolve() == skip.resolve():
            continue
        out += [(pkg.parent.parent.name, r["title"]) for r in table_titles(pkg)]
    return out


def claims(film: Path) -> dict[str, str]:
    p = film / "claims.csv"
    if not p.exists():
        return {}
    with p.open(newline="", encoding="utf-8") as fh:
        return {r["id"].strip(): (r.get("status") or "").strip().lower() for r in csv.DictReader(fh)}


def shape(t: str) -> list[str]:
    return [norm(w) for w in words(t)][:3]


def lint(title: str, thumb: str, record: list[str], case: str | None, cat: list[tuple[str, str]],
         rows: dict[str, str]) -> dict:
    fails, warns = [], []
    ws = words(title)
    low = [norm(w) for w in ws]
    n = len(title)
    if n > HARD:
        fails.append(f"{n} characters: YouTube's limit is {HARD}")
    if "?" in title:
        fails.append("question mark (§13.2: concrete titles, no question bait)")
    if "!" in title or "..." in title or "…" in title or EMOJI.search(title):
        fails.append("'!', an ellipsis or an emoji")
    hype = sorted({w for w in low if w in TABLOID})
    if hype:
        fails.append("tabloid or hype word: " + ", ".join(hype))
    caps = [w for w in ws if len(re.sub(r"[^A-Za-z]", "", w)) >= 2 and w.upper() == w and re.search("[A-Z]", w)
            and w.strip(".,:;") not in ACRONYMS and not re.search(r"\d", w)]
    if caps:
        fails.append("all-caps word, not a record acronym: " + ", ".join(caps) + " (add it to ACRONYMS if it is one)")
    if case:
        hit = re.search(r"\b" + re.escape(case) + r"(?:[’']s)?\b", title, re.I)
        if not hit:
            fails.append(f"the case name '{case}' is not in the title (a new channel is matched on topic)")
        elif hit.end() > FRONT:
            warns.append(f"'{case}' ends at character {hit.end()}: outside the first {FRONT}, so a short phone cut "
                         f"can lose the subject (shown: '{title[:FRONT].rstrip()}…')")
    if FULL < n <= HARD:
        warns.append(f"{n} characters: over {FULL}, search may cut it (shown: '{title[:FULL].rstrip()}…')")
    if not re.search(r"\d|\b(?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*\b", title, re.I):
        warns.append("no number, date or record id (a number, name or date beats an adjective)")
    vw = sorted({w for w in low if w in VERDICT})
    if vw:
        warns.append("verdict word " + ", ".join(vw) + ": allowed only as the investigator's own word, attributed, "
                     "with a confirmed claims.csv row")
    mv = sorted({w for w in low if w in MOTIVE})
    if mv:
        warns.append("implies motive or knowledge: " + ", ".join(mv) + " (§13.2 rejected form unless the record says it)")
    if thumb:
        tw = [norm(w) for w in words(thumb)]
        if len(tw) > 4:
            warns.append(f"thumbnail has {len(tw)} words: 2–3 read at browse size (§13.3)")
        rep = sorted((set(tw) - STOP) & (set(low) - STOP) - {w for w in tw if w.isdigit()})
        if rep and len(rep) * 2 >= len(set(tw) - STOP):
            warns.append("thumbnail repeats the title's words: " + ", ".join(rep) + " (same promise, different words)")
    for cid in record:
        if cid not in rows:
            warns.append(f"Record {cid} is not in claims.csv")
        elif rows[cid] != "confirmed":
            warns.append(f"Record {cid} is '{rows[cid]}', not confirmed")
    for slug, other in cat:
        if shape(other) == shape(title):
            warns.append(f"opens like '{other}' ({slug}): the same title formula across films (§14.2a)")
            break
    score = 100 - 30 * len(fails) - 6 * len(warns) - max(0, n - FULL) // 3
    return {"title": title, "thumb": thumb, "chars": n, "score": score, "fail": fails, "warn": warns,
            "ok": not fails}


def main() -> int:
    a = sys.argv[1:]
    if not a or a[0] in ("-h", "--help"):
        print(__doc__)
        return 0

    def opt(k: str) -> str | None:
        if k in a:
            i = a.index(k)
            v = a[i + 1]
            del a[i:i + 2]
            return v
        return None

    as_json, strict = "--json" in a, "--strict" in a
    a = [x for x in a if x not in ("--json", "--strict")]
    case, file_, title, thumb = opt("--case"), opt("--file"), opt("--title"), opt("--thumb") or ""
    film = Path(a[0]) if a else None
    if film and not film.is_dir():
        print(f"not a film folder: {film}")
        return 2
    if film and not case:
        case = case_from_brief(film)
    if title:
        items = [{"title": title, "thumb": thumb, "record": []}]
    elif file_:
        items = []
        for line in Path(file_).read_text(encoding="utf-8").splitlines():
            line = line.strip()
            if line and not line.startswith("#"):
                t, _, th = line.partition("||")
                items.append({"title": t.strip(), "thumb": th.strip(), "record": []})
    elif film:
        items = table_titles(film / "youtube" / "package.md") or table_titles(film / "brief.md")
    else:
        items = []
    if not items:
        print("no titles found: pass --title, --file, or a film whose package.md/brief.md has a titles table")
        return 2
    cat, rows = catalogue(film), claims(film) if film else {}
    res = [lint(i["title"], i["thumb"], i["record"], case, cat, rows) for i in items]
    ranked = sorted(res, key=lambda r: -r["score"]) if file_ else res
    if as_json:
        print(json.dumps({"case": case, "results": ranked}, indent=2, ensure_ascii=False))
    else:
        print(f"# Title lint{' · ' + film.name if film else ''} · case name: {case or '(none: pass --case)'}\n")
        for r in ranked:
            mark = "PASS" if r["ok"] and not r["warn"] else ("WARN" if r["ok"] else "FAIL")
            print(f"{mark}  {r['score']:>3}  {r['chars']:>3} ch  {r['title']}" + (f"   [thumb: {r['thumb']}]" if r["thumb"] else ""))
            for f in r["fail"]:
                print(f"        FAIL  {f}")
            for w in r["warn"]:
                print(f"        warn  {w}")
        print(f"\n{sum(r['ok'] for r in res)}/{len(res)} without a FAIL. Scores rank variants; they do not predict views.")
    if strict:
        return 1 if any(not r["ok"] for r in res) else 0
    return 0 if any(r["ok"] for r in res) else 1


if __name__ == "__main__":
    sys.exit(main())
