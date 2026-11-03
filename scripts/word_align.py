#!/usr/bin/env python3
"""Measure every word's start and end on the recorded narration (PLAYBOOK §10.4, §10.6).

  python3 scripts/word_align.py films/<slug>

Runs after scripts/vo_timing.py and scripts/film_timing.py. Those place sentences on the audio's real pauses but
spread the words inside a sentence by spoken length, so a word could sit 100–400 ms from where it is said. This
script replaces those estimates with measured times: CTC forced alignment (torchaudio's MMS_FA model, wav2vec2
trained for alignment) of the locked script against assets/vo/film_vo.wav, one sentence at a time inside that
sentence's own span. Still no transcription: the script is the truth; the model only says where each letter is.

Writes vo/timing.json in place: every word gets measured start/end (seconds and frames), `score` (mean letter
probability, 0..1), and the file gets `words_source`. Words joined by an em dash ("wrote—and") become two words.
Sentence times are kept (scenes are cut on them). Words scoring under 0.35 are listed in vo/word_align.md for a
listen. Pins: torch 2.8.0 and torchaudio 2.8.0 (CPU wheels from download.pytorch.org/whl/cpu); the model
downloads from dl.fbaipublicfiles.com on first use. About 1 min for a 16-minute film on 4 CPUs.
"""
import json
import re
import subprocess
import sys
from pathlib import Path

import numpy as np
import torch
import torchaudio

SR = 16000
PAD = 0.12  # seconds of context either side of a sentence's span


def letters(w: str) -> str:
    return re.sub(r"[^a-z']", "", w.lower().replace("-", ""))


def main() -> None:
    film = Path(sys.argv[1])
    tpath = film / "vo/timing.json"
    t = json.loads(tpath.read_text())
    fps = t["fps"]
    raw = subprocess.run(["ffmpeg", "-v", "error", "-i", str(film / "assets/vo/film_vo.wav"), "-f", "f32le", "-ac", "1",
                          "-ar", str(SR), "-"], check=True, capture_output=True).stdout
    audio = torch.from_numpy(np.frombuffer(raw, dtype=np.float32).copy())
    bundle = torchaudio.pipelines.MMS_FA
    model = bundle.get_model(with_star=False).eval()
    tokenizer, aligner = bundle.get_tokenizer(), bundle.get_aligner()
    torch.set_num_threads(4)

    by_s: dict[int, list[dict]] = {}
    for w in t["words"]:
        for part in [p for p in w["w"].split("—") if p]:
            by_s.setdefault(w["s"], []).append({"s": w["s"], "w": part, "est": w["start"]})
    sents = t["sentences"]
    out, weak, shifts = [], [], []
    for i, s in enumerate(sents):
        ws = by_s.get(s["id"], [])
        if not ws:
            continue
        lo = max(s["start"] - PAD, sents[i - 1]["end"] if i else 0.0)
        hi = min(s["end"] + PAD, sents[i + 1]["start"] if i + 1 < len(sents) else s["end"] + PAD)
        seg = audio[int(lo * SR):int(hi * SR)]
        keyed = [(k, letters(w["w"])) for k, w in enumerate(ws)]
        spoken = [(k, x) for k, x in keyed if x]
        with torch.inference_mode():
            em, _ = model(seg.unsqueeze(0))
        spans = aligner(em[0], tokenizer([x for _, x in spoken]))
        step = seg.shape[0] / em.shape[1] / SR  # seconds per emission frame
        timed: dict[int, tuple[float, float, float]] = {}
        for (k, _), sp in zip(spoken, spans):
            a, b = lo + sp[0].start * step, lo + sp[-1].end * step
            timed[k] = (a, b, float(np.mean([x.score for x in sp])))
        prev_end = s["start"]
        for k, w in enumerate(ws):
            a, b, sc = timed.get(k, (prev_end, prev_end, 1.0))  # a token with no letters takes zero time
            prev_end = b
            rec = {"s": w["s"], "w": w["w"], "start": round(a, 3), "end": round(b, 3),
                   "startFrame": round(a * fps), "endFrame": round(b * fps), "score": round(sc, 3)}
            out.append(rec)
            shifts.append(abs(a - w["est"]))
            if sc < 0.35:
                weak.append((rec, s["text"]))
    t["words"] = out
    t["words_source"] = "measured: CTC forced alignment (torchaudio 2.8.0 MMS_FA) on assets/vo/film_vo.wav, scripts/word_align.py"
    tpath.write_text(json.dumps(t, indent=1, ensure_ascii=False))
    sh = np.array(shifts)
    rep = [f"# Word alignment: {film.name}", "",
           f"{len(out)} words measured. Shift from the old estimates: median {np.median(sh) * 1000:.0f} ms, "
           f"90th percentile {np.percentile(sh, 90) * 1000:.0f} ms, max {sh.max() * 1000:.0f} ms.", "",
           "## Words to check by ear (score under 0.35)"]
    rep += [f"- {r['start']:.2f}s `{r['w']}` score {r['score']}: {txt[:80]}" for r, txt in weak] or ["- none"]
    (film / "vo/word_align.md").write_text("\n".join(rep) + "\n")
    print("\n".join(rep[:3]))
    print(f"{len(weak)} words to check")


if __name__ == "__main__":
    main()
