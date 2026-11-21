#!/usr/bin/env python3
"""English SRT from the film's measured word times (PLAYBOOK §13.7: "English SRT from our script timing").

  python3 films/titan/youtube/make_srt.py

Reads vo/timing.json (words with measured start/end, sentences), writes youtube/titan.en.srt.
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
    ("N T S B's", "NTSB's"), ("N T S B", "NTSB"), ("U S", "US"),
    ("twenty twenty-three", "2023"), ("twenty twenty-four", "2024"), ("twenty twenty-five", "2025"),
    ("twenty twenty-six", "2026"), ("twenty twenty-two", "2022"), ("twenty twenty-one", "2021"),
    ("twenty nineteen", "2019"), ("twenty eighteen", "2018"), ("nineteen ninety-three", "1993"),
    ("three thousand eight hundred and forty metres", "3,840 metres"),
    ("three thousand three hundred and fifty metres", "3,350 metres"),
    ("seven thousand five hundred metres", "7,500 metres"), ("four thousand two hundred metres", "4,200 metres"),
    ("six thousand metres", "6,000 metres"), ("four thousand metres", "4,000 metres"), ("three thousand metres", "3,000 metres"),
    ("five hundred metres", "500 metres"), ("ten metres", "10 metres"),
    ("twenty-five thousand millivolts", "25,000 millivolts"),
    ("one thousand seven hundred and fifty Canadian dollars", "C$1,750"),
    ("two point two five", "2.25"), ("one point two five", "1.25"),
    ("five point zero zero", "5.00"), ("four point seven four", "4.74"), ("eight point seven six", "8.76"),
    ("eight point zero nine", "8.09"), ("eight point seven seven", "8.77"),
    ("ten forty-seven", "10:47"),
]


def norm(w: str) -> str:
    return re.sub(r"[^\w'-]", "", w).lower()


def fits(text: str) -> bool:
    """True when the text fits two lines of at most 42 characters, split at a space."""
    if len(text) <= 42:
        return True
    return any(max(k, len(text) - k - 1) <= 42 for k, ch in enumerate(text) if ch == " ")


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
                    hit = (i + len(sp), text.replace(" ", "\u00a0") + trail)  # never split a figure across lines
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
        # no one-word tail on screen for a second: merge it back if two lines still fit, else move a word down
        while len(cues) > 1 and cues[-1] and cues[-2] and cues[-1][0][1] > cues[-2][0][1] and \
                len(" ".join(x[0] for x in cues[-1])) < 14 and cues[-2][-1][0][-1] not in ".?:;—":
            both = " ".join(x[0] for x in cues[-2] + cues[-1])
            if len(both) <= 84 and fits(both) and cues[-1][-1][2] - cues[-2][0][1] <= 7.5:
                tail = cues.pop()
                cues[-1] = cues[-1] + tail
            elif len(cues[-2]) > 2:
                cues[-1].insert(0, cues[-2].pop())
            else:
                break
    # the USCG hearing clips: the official transcript (CG 112) as shown on screen, across each clip's play time,
    # the witness named on the first line of each clip
    for c in t["clips"]:
        name = c.get("lower_third", {}).get("name", "").title()
        text = " ".join(c["caption"]).replace("\u2019", "'")
        if name:
            text = f"[{name}] " + text
        toks = text.split()
        n = max(1, -(-len(text) // MAXC))
        per = -(-len(toks) // n)
        dur = c["end"] - c["start"]
        for k in range(n):
            part = toks[k * per:(k + 1) * per]
            if part:
                t0 = c["start"] + dur * k / n
                cues.append([(" ".join(part), t0, c["start"] + dur * (k + 1) / n - 0.3)])
    cues.sort(key=lambda c: c[0][1])
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
        out.append(f"{n}\n{ts(a)} --> {ts(b)}\n{text.replace(chr(160), ' ')}\n")
    p = FILM / "youtube/titan.en.srt"
    p.write_text("\n".join(out), encoding="utf-8")
    left = sorted({m for m in re.findall(r"\b(?:N -? ?T -? ?S|F -? ?A -? ?A)\b", p.read_text())})
    print(p, len(cues), "cues", "· leftover spaced acronyms:", left or "none")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
