#!/usr/bin/env python3
"""VO text gate for the narrator (owner's spec §5, PLAYBOOK §7.5). Fails on anything the voice would read
wrongly or the spec forbids; warns on rhythm that drifts toward a flat read.

  python3 scripts/vo_lint.py films/<slug>/script/vo.txt [--say-as-word films/<slug>/script/say_as_word.txt]

Fails:
  - digits, currency or unit symbols, brackets, slashes, ampersands, quotes, semicolons, exclamation marks
  - bracketed emotion or sound tags ([sigh], [pause] ...)
  - a bare capitalised acronym (NTSB) that isn't pre-spaced with hyphens (N - T - S - B) or listed as said as a word
    (MAX in "seven thirty-seven MAX nine")
  - fluff openers and hype words (Zero Fluff, spec §7)
  - paragraphs not separated by a blank line (the acoustic tail needs the double break)
Warns:
  - sentences over 32 words; three sentences in a row within 3 words of each other's length
"""
import argparse
import re
import sys

FORBIDDEN_CHARS = {
    "$": "say 'dollars'", "%": "say 'percent'", "/": "say 'per' or 'or'", "&": "say 'and'", "#": "say 'number'",
    "@": "spell it", "+": "say 'plus'", "=": "say 'equals'", "<": "say 'less than'", ">": "say 'more than'",
    "(": "no brackets", ")": "no brackets", "{": "no brackets", "}": "no brackets", '"': "no quotes (spec §5)",
    "“": "no quotes", "”": "no quotes", ";": "no semicolons: a full stop or a dash", "!": "clinical voice: no '!'",
    "...": "no ellipses: use a dash or a colon (owner, 2026-11-03)", "…": "no ellipses: use a dash or a colon",
    "°": "say 'degrees'", "×": "say 'times'", "±": "say 'plus or minus'", "~": "say 'about'",
}
FLUFF = ["in today's video", "in this video", "welcome back", "welcome to", "imagine if", "hey guys", "let's dive",
         "let us dive", "smash that", "hit the bell", "don't forget to subscribe", "buckle up", "you won't believe",
         "shocking", "mind-blowing", "insane", "jaw-dropping", "in conclusion", "delve", "testament to", "unprecedented",
         "game-changer", "game changer", "little did they know"]
SPACED = re.compile(r"\b(?:[A-Z] - )+[A-Z]\b")
ACRONYM = re.compile(r"\b[A-Z]{2,}\b")
TAG = re.compile(r"\[[^\]]*\]")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("path")
    ap.add_argument("--say-as-word", help="file: one capitalised word per line that the voice says as a word")
    a = ap.parse_args()
    text = open(a.path, encoding="utf-8").read()
    allowed = set()
    if a.say_as_word:
        allowed = {w.strip() for w in open(a.say_as_word, encoding="utf-8") if w.strip() and not w.startswith("#")}
    fails, warns = [], []
    lines = text.split("\n")
    for n, line in enumerate(lines, 1):
        if TAG.search(line):
            fails.append(f"line {n}: bracketed tag {TAG.search(line).group(0)!r} (spec §5: none)")
        for ch, fix in FORBIDDEN_CHARS.items():
            if ch in line:
                fails.append(f"line {n}: {ch!r}: {fix}")
        if re.search(r"\d", line):
            fails.append(f"line {n}: digits {re.findall(r'[0-9][0-9.,:]*', line)}: write numbers as words")
        bare = ACRONYM.findall(SPACED.sub("", line))
        for w in bare:
            if w not in allowed:
                spaced = " - ".join(w)
                fails.append(f"line {n}: {w}: pre-space it ({spaced}) or list it in --say-as-word")
        low = line.lower()
        for f in FLUFF:
            if f in low:
                fails.append(f"line {n}: fluff or hype: {f!r}")
    # paragraphs: a non-empty line directly after another non-empty line means a single break
    for n in range(1, len(lines)):
        if lines[n].strip() and lines[n - 1].strip():
            fails.append(f"line {n + 1}: single line break: paragraphs need a blank line between them")
    # rhythm
    flat = re.sub(r"\s+", " ", SPACED.sub("X", text))
    sents = [s for s in re.split(r"(?<=[.?])\s+|\.\.\.\s+|\s—\s", flat) if re.search(r"[A-Za-z]", s)]
    lens = [len(re.findall(r"[A-Za-z'\-]+", s)) for s in sents]
    for i, (s, L) in enumerate(zip(sents, lens)):
        if L > 32:
            warns.append(f"long sentence ({L} words): {s[:70]}…")
        if i >= 2 and max(lens[i - 2:i + 1]) - min(lens[i - 2:i + 1]) <= 3 and min(lens[i - 2:i + 1]) > 6:
            warns.append(f"three sentences of the same length in a row, ending: {s[:60]}…")
    words = sum(lens)
    print(f"{words} words, {len(sents)} sentences, {len(text)} characters, ~{words / 140:.1f} min at 140 wpm")
    for w in warns:
        print("warn:", w)
    for f in fails:
        print("FAIL:", f)
    if fails:
        sys.exit(1)
    print("vo lint passed")


if __name__ == "__main__":
    main()
