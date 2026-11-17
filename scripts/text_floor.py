#!/usr/bin/env python3
"""Lint a film's Remotion code against the legibility floors (PLAYBOOK §6.7).

  python3 scripts/text_floor.py films/<slug>/remotion lib/remotion [--floor 26]

Reports every literal `fontSize` below the floor (26 px at the 1920×1080 authoring size), every text colour that
is the `muted` token (3.7:1 on a card: never a fact), every hard-coded hex text colour (tokens only, from
config/brand.yaml), and any acronym in the narration's spelling ("N-T-S-B"): on screen it is "NTSB". A line can opt out with a trailing `// floor-ok: <reason>` (decoration that carries no fact,
such as grid coordinates). Exit 1 if anything is reported.
"""
import re
import sys
from pathlib import Path

FS = re.compile(r"fontSize[=:]\s*\{?\s*(\d+(?:\.\d+)?)")
MUTED = re.compile(r"(?:color|fill)[=:]\s*\{?\s*colors\.muted")
HEX = re.compile(r"""color:\s*['"]#[0-9a-fA-F]{3,8}['"]""")  # a text colour off the tokens (shape fills are materials)
# the narration's spelling of an acronym ("N - T - S - B" in vo.txt, PLAYBOOK §7) must never reach the screen: the
# record and the viewer read "NTSB" (Titan v5 carried "N-T-S-B" in 19 labels)
SPELLED = re.compile(r"\b[A-Z](?:\s?-\s?[A-Z]){2,}\b")


def main() -> int:
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    floor = float(sys.argv[sys.argv.index("--floor") + 1]) if "--floor" in sys.argv else 26
    if "--floor" in sys.argv:
        args.remove(sys.argv[sys.argv.index("--floor") + 1])
    bad = 0
    for root in args:
        for f in sorted(Path(root).rglob("*.tsx")):
            for n, line in enumerate(f.read_text().splitlines(), 1):
                if "floor-ok" in line:
                    continue
                notes = [f"{v} px" for v in FS.findall(line) if float(v) < floor]
                if MUTED.search(line):
                    notes.append("muted text")
                if HEX.search(line) and "brand" not in f.name:
                    notes.append("hard-coded colour")
                code = re.sub(r"wf\([^)]*\)", "", re.sub(r"//.*$", "", line))  # word cues and comments aren't screen text
                if SPELLED.search(code):
                    notes.append(f"voice spelling on screen: {SPELLED.search(code).group(0)}")
                if notes:
                    bad += 1
                    print(f"{f}:{n}: {', '.join(notes)}")
    print(f"{bad} line(s) below the floor or off the tokens")
    return 1 if bad else 0


if __name__ == "__main__":
    sys.exit(main())
