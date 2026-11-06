#!/usr/bin/env python3
"""Time a real recording's words from its official transcript (PLAYBOOK §9.5, §10.4): captions for a hearing clip.

  python3 scripts/clip_align.py CLIP.mp4 TEXT.txt OUT.json [--from S] [--to S]

CTC forced alignment (torchaudio 2.8.0 MMS_FA, as scripts/word_align.py) of the transcript's words against the clip's
audio between --from and --to (seconds in the clip). The transcript is the text shown; the model only says where each
word falls. An official transcript is lightly edited ("just to make some context" for "just some context"), so a
word the speaker did not say still gets a slot: every word scoring under 0.35 is listed for a look and a listen, and
the caption cut points are chosen on well-scored words only. Speaker labels ("MR. RUSH:") stay in the text file and
are given zero time; they become the caption's speaker line.

Writes {"clip", "from", "to", "words": [{"w", "start", "end", "score", "speaker"}]} with times in clip seconds.
"""
import json
import re
import subprocess
import sys

import numpy as np
import torch
import torchaudio

SR = 16000
args = sys.argv[1:]
clip, text_p, out_p = args[:3]
opt = lambda f, d: float(args[args.index(f) + 1]) if f in args else d  # noqa: E731
lo, hi = opt("--from", 0.0), opt("--to", -1.0)

raw = subprocess.run(["ffmpeg", "-v", "error", "-i", clip, "-f", "f32le", "-ac", "1", "-ar", str(SR), "-"],
                     check=True, capture_output=True).stdout
audio = torch.from_numpy(np.frombuffer(raw, dtype=np.float32).copy())
if hi < 0:
    hi = audio.shape[0] / SR
seg = audio[int(lo * SR):int(hi * SR)]

speaker = ""
# speaker labels: "MR. RUSH:" -> two tokens, the second ending in ':' and all caps
toks = open(text_p).read().split()
out: list[dict] = []
i = 0
while i < len(toks):
    t = toks[i]
    if re.fullmatch(r"(MR|MS|DR|MRS)\.", t) and i + 1 < len(toks) and re.fullmatch(r"[A-Z'\-]+:", toks[i + 1]):
        speaker = f"{t} {toks[i + 1][:-1]}"
        i += 2
        continue
    out.append({"w": t, "speaker": speaker})
    i += 1

letters = lambda w: re.sub(r"[^a-z']", "", w.lower().replace("’", "'").replace("-", ""))  # noqa: E731
bundle = torchaudio.pipelines.MMS_FA
model = bundle.get_model(with_star=False).eval()
tokenizer, aligner = bundle.get_tokenizer(), bundle.get_aligner()
torch.set_num_threads(4)
spoken = [(k, letters(w["w"])) for k, w in enumerate(out) if letters(w["w"])]
with torch.inference_mode():
    em, _ = model(seg.unsqueeze(0))
spans = aligner(em[0], tokenizer([x for _, x in spoken]))
step = seg.shape[0] / em.shape[1] / SR
prev = lo
timed = {k: (lo + sp[0].start * step, lo + sp[-1].end * step, float(np.mean([x.score for x in sp])))
         for (k, _), sp in zip(spoken, spans)}
for k, w in enumerate(out):
    a, b, sc = timed.get(k, (prev, prev, 1.0))
    prev = b
    w.update(start=round(a, 3), end=round(b, 3), score=round(sc, 3))
json.dump({"clip": clip, "from": lo, "to": hi, "words": out}, open(out_p, "w"), indent=1, ensure_ascii=False)
weak = [w for w in out if w["score"] < 0.35]
print(f"{len(out)} words timed, {len(weak)} under 0.35")
for w in weak:
    print(f"  {w['start']:7.2f}  {w['w']}  {w['score']}")
