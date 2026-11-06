#!/usr/bin/env python3
"""Derive the routine sound cues from a film's scene code (PLAYBOOK §12: a cue on every visual event).

  python3 scripts/cues_auto.py films/<slug>

Reads remotion/scenes/act*.tsx and writes remotion/cues_auto.ts: one cue per routine visual event, each carrying the
event's own frame expression copied from the code (so a timing change moves the sound with the picture):
  <RecordPage start=…> / <RecordDoc start=…>  → paper_slide  (the exhibit lands on the desk)
  highlight `at: …` / RecordDoc `at={[…]}`     → highlighter, 15 frames early (the stroke completes on its word)
  <Pop on=…>                                   → relay_click, soft (a chip locks on its word)
  <DatePill dayWord=…>                         → quartz_tick (the date rolls)
  <Card o={onW(f, …)}>                         → paper_slide, soft (a card is laid down on its word)
  <Beat from=…>                                → relay_click, soft (a new caption panel)
Only expressions built from the film clock (sf, ef, wf, wef, s2f, numbers) are taken; anything that uses a local
variable is skipped and counted. The film's allCues() merges these with the hand-placed cues and drops an auto cue
that lands within 10 frames of a hand-placed one, so a scene's own sound design always wins.
Re-run after any scene edit, then export sound/cues.json (PLAYBOOK §12).
"""
import re
import sys
from pathlib import Path

ALLOWED = re.compile(r"^(?:\s|\d|[-+*/().,]|'[^']*'|\"[^\"]*\"|\b(?:sf|ef|wf|wef|s2f)\b)*$")


def balanced(src: str, i: int, open_ch: str, close_ch: str) -> tuple[str, int]:
    """Return the text inside the bracket that opens at src[i] and the index after its close."""
    depth, j = 0, i
    while j < len(src):
        c = src[j]
        if c == open_ch:
            depth += 1
        elif c == close_ch:
            depth -= 1
            if depth == 0:
                return src[i + 1: j], j + 1
        j += 1
    raise ValueError("unbalanced")


def split_top(s: str) -> list[str]:
    out, depth, cur = [], 0, ""
    for c in s:
        if c in "([{":
            depth += 1
        elif c in ")]}":
            depth -= 1
        if c == "," and depth == 0:
            out.append(cur)
            cur = ""
        else:
            cur += c
    if cur.strip():
        out.append(cur)
    return [x.strip() for x in out]


def main() -> None:
    film = Path(sys.argv[1])
    cues, skipped = [], 0

    def add(expr: str, sfx: str, gain: int, offset: int = 0, src: str = "") -> None:
        nonlocal skipped
        expr = expr.strip()
        if not expr or not ALLOWED.match(expr):
            skipped += 1
            return
        e = f"({expr}) - {-offset}" if offset < 0 else f"({expr})"
        cues.append((e, sfx, gain, src))

    for p in sorted((film / "remotion/scenes").glob("act*.tsx")):
        s = p.read_text()
        for m in re.finditer(r"<(RecordPage|RecordDoc|Pop|DatePill|Card|Beat)\b", s):
            tag = m.group(1)
            # the element's attributes run to the first '>' at brace depth 0
            j, depth = m.end(), 0
            while j < len(s):
                if s[j] == "{":
                    depth += 1
                elif s[j] == "}":
                    depth -= 1
                elif s[j] == ">" and depth == 0:
                    break
                j += 1
            attrs = s[m.end(): j]
            line = s.count("\n", 0, m.start()) + 1
            src = f"{p.name}:{line}"

            def attr(name: str) -> str | None:
                a = re.search(rf"\b{name}=\{{", attrs)
                if not a:
                    return None
                body, _ = balanced(attrs, a.end() - 1, "{", "}")
                return body

            if tag in ("RecordPage", "RecordDoc"):
                st = attr("start")
                if st is not None:
                    add(st, "paper_slide", -20, 0, src)
            if tag == "RecordPage":
                hl = attr("hl")
                if hl:
                    for h in re.finditer(r"\bat:\s*", hl):
                        k = h.end()
                        depth, e = 0, k
                        while e < len(hl) and not (depth == 0 and hl[e] in ",}"):
                            depth += hl[e] in "([" and 1 or 0
                            depth -= hl[e] in ")]" and 1 or 0
                            e += 1
                        add(hl[k:e], "highlighter", -24, -15, src)
            if tag == "RecordDoc":
                at = attr("at")
                if at and at.strip().startswith("["):
                    for x in split_top(at.strip()[1:-1]):
                        add(x, "highlighter", -24, -15, src)
            if tag == "Pop":
                on = attr("on")
                if on is not None:
                    add(on, "relay_click", -28, 0, src)
            if tag == "Card":
                o = attr("o")
                mo = re.match(r"\s*onW\(f,\s*(.+?),\s*\d+\)\s*$", o or "")
                if mo:
                    add(mo.group(1), "paper_slide", -26, 0, src)
            if tag == "Beat":
                fr = attr("from")
                if fr is not None:
                    add(fr, "relay_click", -24, 0, src)
            if tag == "DatePill":
                dw = attr("dayWord")
                if dw is not None:
                    add(dw, "quartz_tick", -22, 0, src)

    used = [n for n in ("ef", "s2f", "sf", "wef", "wf") if any(re.search(r"\b" + n + r"\(", e) for e, *_ in cues)]
    lines = [
        "// GENERATED by scripts/cues_auto.py from scenes/act*.tsx: do not edit; re-run after any scene change.",
        "// Routine cues (exhibit lands, highlight strokes, chips, date rolls); the film merges them under its hand-placed cues.",
        "import {SfxCue} from '../../../lib/remotion/sfx';",
        "import {" + ", ".join(used) + "} from './timing';",
        "",
        "export const autoCues = (): SfxCue[] => [",
    ]
    for e, sfx, g, src in cues:
        lines.append(f"\t{{frame: {e}, sfx: '{sfx}', gainDb: {g}}}, // {src}")
    lines += ["];", ""]
    (film / "remotion/cues_auto.ts").write_text("\n".join(lines))
    print(f"{len(cues)} auto cues written, {skipped} skipped (local variables)")


if __name__ == "__main__":
    main()
