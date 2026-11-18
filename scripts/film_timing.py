#!/usr/bin/env python3
"""Lay the edit holds into the joined VO and write the film's timeline (PLAYBOOK §10.4).

  python3 scripts/film_timing.py films/<slug>

Reads assets/vo/timing.json and assets/vo/vo_full.wav (from scripts/vo_timing.py) and script/holds.json: seconds of
picture time inserted after a sentence (matched by its opening words, so a re-take never shifts a hold), plus a tail
for the outro. Each hold is cut into the middle of the pause after its sentence, so no word tail is clipped.
`clips` in holds.json replace narrated sentences with a real recording (owner, 16 NOV 2026: the witness's own voice
replaces our reading of the same quote): the sentences listed in `replace` (consecutive, matched by opening words) are
cut out from the middle of the pause before them to the middle of the pause after, and the gap becomes
pre + (out - in) + post seconds of picture. Each clip's audio is trimmed from `clips_dir`/<clip>.mp4 to
assets/clips/<clip>.wav (untouched: no processing, the mix sets its loudness); its film frames go into timing.json
`clips` for the picture and for sound/mix.json. A clip with `after_clip` (no `replace`) is inserted straight after
that clip's gap and replaces nothing (two witnesses back to back, then our sentence). A clip with `after` (a
sentence's opening words, no `replace`) is inserted in the middle of the pause after that sentence and replaces nothing
(a cold open's lead-in, then the witness). `file` names another clip's file when one hearing range is used twice
(a flash-forward in the opening, the full answer later).
Writes assets/vo/film_vo.wav (48 kHz mono, holds as digital silence: the mix's bed covers it) and vo/timing.json
(committed: the film's frames for Remotion and the render farm), with every sentence and word shifted, the holds
listed, and `durationInFrames` for the whole film. Fails if the open loop misses its window.
"""
import json
import re
import subprocess
import sys
from pathlib import Path

SR = 48000


def norm(t: str) -> str:
    return re.sub(r"\s+", " ", t).strip()


def main() -> None:
    film = Path(sys.argv[1])
    t = json.loads((film / "assets/vo/timing.json").read_text())
    cfg = json.loads((film / "script/holds.json").read_text())
    fps = t["fps"]
    sents = t["sentences"]

    def find(prefix: str, nth: int | None = None) -> int:
        hits = [s["id"] for s in sents if norm(s["text"]).startswith(norm(prefix))]
        if nth is not None:  # a sentence said more than once: pick its occurrence (0-based), never guess
            if nth >= len(hits):
                sys.exit(f"hold anchor {prefix!r}: occurrence {nth} of {len(hits)}")
            return hits[nth]
        if len(hits) != 1:
            sys.exit(f"hold anchor {prefix!r}: {len(hits)} sentence matches (add \"nth\")")
        return hits[0]

    edits = []  # at: cut point in vo_full; c: seconds cut out there; s: seconds of picture put in
    removed: set[int] = set()
    clips = []
    for c in cfg.get("clips", []):
        if "after_clip" in c:  # inserted, replacing nothing: it plays straight after another clip's gap
            prev = next((e for _, e, _ in clips if e["clip"] == c["after_clip"]), None)
            if prev is None:
                sys.exit(f"clip {c['clip']}: after_clip {c['after_clip']!r} must be an earlier entry in clips")
            length = round(c["out"] - c["in"], 3)
            pre, post = c.get("pre", 0.4), c.get("post", 0.4)
            e = {"at": round(prev["at"] + prev["c"], 3), "c": 0.0, "s": round(pre + length + post, 3), "clip": c["clip"],
                 "pre": pre, "len": length}
            edits.append(e)
            clips.append((c, e, []))
            continue
        if "after" in c:  # inserted after a sentence, replacing nothing
            i = find(c["after"], c.get("nth"))
            nxt = sents[i + 1]["start"] if i + 1 < len(sents) else sents[i]["end"] + 0.3
            length = round(c["out"] - c["in"], 3)
            pre, post = c.get("pre", 0.4), c.get("post", 0.4)
            e = {"at": round((sents[i]["end"] + nxt) / 2, 3), "c": 0.0, "s": round(pre + length + post, 3), "clip": c["clip"],
                 "pre": pre, "len": length}
            edits.append(e)
            clips.append((c, e, []))
            continue
        ids = [find(x) for x in c["replace"]]
        if ids != list(range(ids[0], ids[0] + len(ids))):
            sys.exit(f"clip {c['clip']}: replaced sentences are not consecutive: {ids}")
        i, j = ids[0], ids[-1]
        a = round((sents[i - 1]["end"] + sents[i]["start"]) / 2, 3) if i > 0 else 0.0
        b = round((sents[j]["end"] + sents[j + 1]["start"]) / 2, 3) if j + 1 < len(sents) else sents[j]["end"] + 0.3
        pre, post = c.get("pre", 0.4), c.get("post", 0.4)
        length = round(c["out"] - c["in"], 3)
        e = {"at": a, "c": round(b - a, 3), "s": round(pre + length + post, 3), "clip": c["clip"], "pre": pre, "len": length}
        edits.append(e)
        removed.update(ids)
        clips.append((c, e, [sents[k]["text"] for k in ids]))
    for h in cfg["holds"]:
        i = find(h["after"], h.get("nth"))
        if i in removed:
            sys.exit(f"hold anchor {h['after']!r} is a sentence a clip replaces: anchor it to the clip with 'post'")
        nxt = sents[i + 1]["start"] if i + 1 < len(sents) else sents[i]["end"] + 0.3
        at = round((sents[i]["end"] + nxt) / 2, 3) if i + 1 < len(sents) else round(sents[i]["end"] + 0.3, 3)
        edits.append({"at": at, "c": 0.0, "s": h["s"], "after": i, "why": h.get("why", "")})
    edits.sort(key=lambda e: (e["at"], e["c"] == 0))  # at a shared cut point the replacing clip comes first
    run = 0.0
    for e in edits:  # film time each edit's gap opens (shift() alone is ambiguous when two edits share a cut point)
        e["gap"] = round(e["at"] + run, 3)
        run += e["s"] - e["c"]
    for x, y in zip(edits, edits[1:]):
        if x["at"] + x["c"] > y["at"] + 0.0015:  # back-to-back clips share a cut point (rounded to ms)
            sys.exit(f"edits overlap at {y['at']} s")

    def shift(x: float) -> float:
        return round(x + sum(e["s"] - e["c"] for e in edits if e["at"] + e["c"] <= x), 3)

    # audio: cut vo_full at each hold point, insert silence
    src = film / "assets/vo/vo_full.wav"
    raw = subprocess.run(["ffmpeg", "-v", "error", "-i", str(src), "-f", "s16le", "-ac", "1", "-ar", str(SR), "-"],
                         check=True, capture_output=True).stdout
    pcm = bytearray()
    prev = 0
    for e in edits:
        k = int(e["at"] * SR) * 2
        pcm += raw[prev:k] + bytes(int(e["s"] * SR) * 2)
        prev = int((e["at"] + e["c"]) * SR) * 2
    pcm += raw[prev:] + bytes(int(cfg["tail"] * SR) * 2)
    out = film / "assets/vo/film_vo.wav"
    subprocess.run(["ffmpeg", "-v", "error", "-y", "-f", "s16le", "-ac", "1", "-ar", str(SR), "-i", "-", str(out)],
                   input=bytes(pcm), check=True)
    total = len(pcm) / 2 / SR

    ft = {"fps": fps, "source": "assets/vo/timing.json + script/holds.json", "duration": round(total, 3),
          "durationInFrames": round(total * fps), "holds": [], "clips": [], "chapters": [], "sentences": [], "words": []}
    holds = [e for e in edits if "clip" not in e]
    for h in holds:
        fs = round(shift(h["at"]) - h["s"], 3)
        ft["holds"].append({"after": h["after"], "at": h["at"], "s": h["s"], "why": h["why"], "filmStart": fs,
                            "filmStartFrame": round(fs * fps)})
    clips_dir = Path(cfg.get("clips_dir", "."))
    (film / "assets/clips").mkdir(parents=True, exist_ok=True)
    for c, e, texts in clips:
        gap = e["gap"]  # film time the gap opens
        a = round(gap + e["pre"], 3)
        b = round(a + e["len"], 3)
        wav = film / "assets/clips" / f"{c['clip']}.wav"
        subprocess.run(["ffmpeg", "-v", "error", "-y", "-ss", str(c["in"]), "-to", str(c["out"]), "-i",
                        str(clips_dir / f"{c.get('file', c['clip'])}.mp4"), "-vn", "-ac", "1", "-ar", str(SR), str(wav)], check=True)
        ft["clips"].append({"clip": c["clip"], "in": c["in"], "out": c["out"], "gapStart": gap, "gapStartFrame": round(gap * fps),
                            "start": a, "end": b, "startFrame": round(a * fps), "endFrame": round(b * fps),
                            "gapEndFrame": round((gap + e["s"]) * fps), "file": f"assets/clips/{c['clip']}.wav",
                            "replaces": texts, **{k: c[k] for k in ("caption", "lower_third", "credit", "why") if k in c}})
    for c in t["chapters"]:
        ft["chapters"].append({"title": c["title"], "start": shift(c["start"]), "startFrame": round(shift(c["start"]) * fps)})
    for s in sents:
        if s["id"] in removed:
            continue
        a, b = shift(s["start"]), shift(s["end"])
        ft["sentences"].append({"id": s["id"], "text": s["text"], "chapter": s["chapter"], "start": a, "end": b,
                                "startFrame": round(a * fps), "endFrame": round(b * fps)})
    for w in t["words"]:
        if w["s"] in removed:
            continue
        a, b = shift(w["start"]), shift(w["end"])
        ft["words"].append({"s": w["s"], "w": w["w"], "start": a, "end": b, "startFrame": round(a * fps), "endFrame": round(b * fps)})

    ol = cfg["open_loop"]
    by_id = {x["id"]: x for x in ft["sentences"]}
    p, r = by_id[find(ol["promise"])], by_id[find(ol["reveal"])]
    gap = r["start"] - p["end"]
    ft["openLoop"] = {"promiseEnd": p["end"], "revealStart": r["start"], "gap": round(gap, 2)}
    (film / "vo/timing.json").write_text(json.dumps(ft, indent=1, ensure_ascii=False))
    print(f"film {total:.1f} s ({total // 60:.0f}:{total % 60:04.1f}) · {len(holds)} holds, {sum(h['s'] for h in holds):.1f} s"
          f" · {len(clips)} clips replace {len(removed)} sentences, net {sum(e['s'] - e['c'] for e in edits if 'clip' in e):+.1f} s"
          f" · tail {cfg['tail']} s · open loop {gap:.1f} s (window {ol['min']}-{ol['max']})")
    for c in ft["chapters"]:
        print(f"  {int(c['start'] // 60)}:{c['start'] % 60:04.1f}  {c['title']}")
    if not ol["min"] <= gap <= ol["max"]:
        sys.exit(f"open loop misses its window: {gap:.1f} s")


if __name__ == "__main__":
    main()
