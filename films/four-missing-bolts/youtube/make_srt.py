#!/usr/bin/env python3
"""English SRT from the film's measured word times (PLAYBOOK §13.7: "English SRT from our script timing").

  python3 films/four-missing-bolts/youtube/make_srt.py

Reads vo/timing.json (words with measured start/end, sentences), writes youtube/four-missing-bolts.en.srt.
Captions read as text, not as the narrator's script: acronyms written plainly (N - T - S - B -> NTSB) and the common
figures as digits. A replaced phrase is never split across two captions. At most 2 lines of 42 characters.
"""
import json
import re
from pathlib import Path

FILM = Path(__file__).resolve().parents[1]
MAXC, MAXDUR = 78, 6.5

# (spoken words, caption text): longest first
PHRASES = [
    ("seven thirty-seven nines", "737-9s"), ("seven thirty-seven nine", "737-9"), ("seven thirty-seven Max", "737 MAX"),
    ("seven thirty-seven", "737"), ("twelve eighty-two", "1282"),
    ("N - T - S - B", "NTSB"), ("F - A - A", "FAA"),
    ("twenty twenty-four", "2024"), ("twenty twenty-five", "2025"), ("twenty twenty-six", "2026"),
    ("twenty twenty-three", "2023"), ("twenty twenty-two", "2022"), ("twenty twenty", "2020"),
    ("twenty nineteen", "2019"), ("twenty eighteen", "2018"), ("two thousand and five", "2005"),
    ("fourteen thousand, eight hundred and thirty feet", "14,830 feet"),
    ("one hundred and seventy-one", "171"), ("one hundred and fifty-four", "154"), ("one hundred and eight", "108"),
    ("one-hundred-and-twenty-pound", "120-pound"),
    ("twenty-nine inches", "29 inches"), ("fifty-nine inches", "59 inches"), ("sixty-three pounds", "63 pounds"),
    ("nine billion dollars", "$9 billion"), ("twenty billion", "$20 billion"), ("two point seven billion", "$2.7 billion"),
    ("twenty-four", "24"), ("twenty-eighth", "28th"), ("thirty-first", "31st"), ("seventeenth", "17th"),
    ("nineteenth", "19th"), ("twentieth", "20th"), ("twenty-fourth", "24th"), ("eighth", "8th"),
]


def norm(w: str) -> str:
    return re.sub(r"[^\w'-]", "", w).lower()


def main() -> int:
    t = json.load(open(FILM / "vo/timing.json"))
    words = t["words"]
    by_s: dict[int, list[dict]] = {}
    for w in words:
        by_s.setdefault(w["s"], []).append(w)
    cues = []
    for s in t["sentences"]:
        ws = by_s.get(s["id"], [])
        if not ws:
            continue
        toks = [w["w"] for w in ws]
        # protected spans: [i, j) of a phrase, with its caption text
        spans: dict[int, tuple[int, str]] = {}
        i = 0
        while i < len(toks):
            hit = None
            for spoken, text in PHRASES:
                sp = spoken.split()
                if [norm(x) for x in toks[i:i + len(sp)]] == [norm(x) for x in sp]:
                    trail = re.match(r".*?([^\w]*)$", toks[i + len(sp) - 1]).group(1)
                    hit = (i + len(sp), text + trail)
                    break
            if hit:
                spans[i] = hit
                i = hit[0]
            else:
                i += 1
        units = []  # (text, start, end)
        i = 0
        while i < len(toks):
            if i in spans:
                j, text = spans[i]
                units.append((text, ws[i]["start"], ws[j - 1]["end"]))
                i = j
            else:
                units.append((toks[i], ws[i]["start"], ws[i]["end"]))
                i += 1
        cur: list[tuple[str, float, float]] = []
        for u in units:
            text = " ".join(x[0] for x in cur + [u])
            if cur and (len(text) > MAXC or u[2] - cur[0][1] > MAXDUR):
                cues.append(cur)
                cur = []
            cur.append(u)
            if re.search(r"[.?:;—]$", u[0]) and len(" ".join(x[0] for x in cur)) > 30:
                cues.append(cur)
                cur = []
        if cur:
            cues.append(cur)
    out = []
    for n, c in enumerate(cues, 1):
        a, b = c[0][1], c[-1][2]
        nxt = cues[n][0][1] if n < len(cues) else b + 1.0
        b = min(max(b + 0.3, a + 1.0), nxt - 0.04)
        text = " ".join(x[0] for x in c)
        if len(text) > 42:
            # the space nearest the middle, so both lines are as even as they can be
            sp = [k for k, ch in enumerate(text) if ch == " "]
            cut = min(sp, key=lambda k: max(k, len(text) - k - 1))
            text = text[:cut] + "\n" + text[cut + 1:]
        ts = lambda x: f"{int(x // 3600):02d}:{int(x % 3600 // 60):02d}:{int(x % 60):02d},{int(round(x % 1 * 1000)) % 1000:03d}"
        out.append(f"{n}\n{ts(a)} --> {ts(b)}\n{text}\n")
    p = FILM / "youtube/four-missing-bolts.en.srt"
    p.write_text("\n".join(out), encoding="utf-8")
    left = sorted({m for m in re.findall(r"\b(?:N - T|F - A)\b", p.read_text())})
    print(p, len(cues), "cues", "· leftover spaced acronyms:", left or "none")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
