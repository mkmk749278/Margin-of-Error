#!/usr/bin/env python3
"""English SRT from the film's measured word times (PLAYBOOK §13.7: "English SRT from our script timing").

  python3 films/east-palestine/youtube/make_srt.py

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
    # the word aligner keeps the letters but drops the hyphens: match the letters as spoken
    ("N T S B's", "NTSB's"), ("N T S B", "NTSB"), ("A A R's", "AAR's"), ("A A R", "AAR"), ("F R A", "FRA"),
    ("G A T X", "GATX"), ("D O T one eleven", "DOT-111"), ("P V C", "PVC"),
    ("thirty-two N", "32N"),
    ("twenty twenty-three", "2023"), ("twenty twenty-four", "2024"), ("twenty twenty-five", "2025"),
    ("twenty twenty-six", "2026"), ("twenty twenty-two", "2022"), ("twenty twenty-one", "2021"),
    ("twenty twenty-nine", "2029"), ("twenty nineteen", "2019"), ("twenty eighteen", "2018"),
    ("nine thousand, three hundred and nine feet", "9,309 feet"),
    ("twenty-six thousand, six hundred and sixty-two", "26,662"), ("eighteen thousand, nine hundred", "18,900"),
    ("one thousand, one hundred and sixty feet", "1,160 feet"),
    ("one hundred and forty-nine", "149"), ("one hundred and fifty-three", "153"), ("one hundred and fifty-eight", "158"),
    ("one hundred and thirty-eight", "138"), ("one hundred and twenty-six", "126"), ("one hundred and eighty-seven", "187"),
    ("one hundred and seventy", "170"), ("one hundred and three", "103"),
    ("two hundred and fifty-three", "253"), ("two hundred and fifty-four million", "$254 million"),
    ("three hundred and twenty-five million", "$325 million"), ("six hundred million dollar", "$600 million"),
    ("one point one billion dollars", "$1.1 billion"), ("ten billion dollars", "$10 billion"),
    ("two hundred", "200"), ("two thousand", "2,000"),
    ("sixty-five point four", "65.4"), ("thirteen point nine", "13.9"), ("forty-nine point eight one", "49.81"),
    ("sixty percent", "60 percent"), ("twenty-nine percent", "29 percent"),
    ("ninety-second", "90-second"), ("four thirty-seven", "4:37"), ("Eight thirteen", "8:13"),
    ("thirty-nine minutes", "39 minutes"), ("thirty-eight seconds", "38 seconds"), ("thirteen minutes", "13 minutes"),
    ("thirty-eight cars", "38 cars"), ("thirty-eight degrees", "38 degrees"), ("Thirty-eight cars", "38 cars"),
    ("nineteen and forty-five", "19 and 45"), ("forty miles", "40 miles"), ("thirty miles", "30 miles"),
    ("nineteen miles", "19 miles"), ("eleven miles", "11 miles"), ("twelve miles", "12 miles"),
    ("Ninety degrees", "90 degrees"), ("Nineteen miles", "19 miles"),
    ("twenty-third", "23rd"), ("Car twenty-three", "Car 23"), ("twenty hours", "20 hours"),
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
    # the two NTSB hearing clips: the official transcript's words, timed on the clip audio (remotion/data/clip_captions.json),
    # placed where act3.tsx plays them (clipStart: centred in its hold), speaker named on each change of speaker
    cc = json.load(open(FILM / "remotion/data/clip_captions.json"))["clips"]
    holds = [h for h in t["holds"] if h["why"].startswith("CLIP")]
    who = {"MR. RUSH": "[AAR witness]", "MR. ARONIAN": "[NTSB panel]"}
    for key, h in zip(("clip1", "clip2"), holds):
        c = cc[key]
        f0 = h["filmStartFrame"] + round((round(h["s"] * 60) - c["dur"] * 60) / 2 + 1e-9)
        t0 = f0 / t["fps"]
        cur, spk = [], None
        for q in c["cues"]:
            text = q["text"].replace("’", "'").replace(" -- ", " — ")
            if q["speaker"] != spk:
                if cur:
                    cues.append(cur)
                cur, spk = [], q["speaker"]
                text = who[spk] + " " + text
            u = (text, t0 + q["start"], t0 + q["end"])
            if cur and (len(" ".join(x[0] for x in cur + [u])) > MAXC or u[2] - cur[0][1] > MAXDUR):
                cues.append(cur)
                cur = []
            cur.append(u)
        if cur:
            cues.append(cur)
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
    p = FILM / "youtube/east-palestine.en.srt"
    p.write_text("\n".join(out), encoding="utf-8")
    left = sorted({m for m in re.findall(r"\b(?:N -? ?T -? ?S|F -? ?A -? ?A)\b", p.read_text())})
    print(p, len(cues), "cues", "· leftover spaced acronyms:", left or "none")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
