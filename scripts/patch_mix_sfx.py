#!/usr/bin/env python3
"""Move sound effects in a finished mix without rebuilding it (PLAYBOOK §12).

  python3 scripts/patch_mix_sfx.py films/<slug> OLD_CUES.json

scripts/mix_film.py builds master = (voice + bed) × one static gain + sfx (effects at their own absolute peaks), then
a true-peak safety limiter. So when only cues change (sound/cues.json re-exported from the picture, timing.json
unchanged), the new mix is old − render(removed cues) + render(added cues), through the same limiter. Reads
assets/mix/mix.wav (pull it from Drive <slug>/mix/) and the effect files in sound/mix.json; writes
assets/mix/mix_patched.wav and prints both measurements and the span of samples that changed.
Use mix_film.py instead whenever timing.json, the voice or the music slots change.
"""
import json
import sys
from pathlib import Path

import numpy as np

sys.path.insert(0, str(Path(__file__).parent))
import mix_film as M  # noqa: E402


def main() -> None:
    film = Path(sys.argv[1])
    old = json.loads(Path(sys.argv[2]).read_text())
    new = json.loads((film / "sound/cues.json").read_text())
    cfg = json.loads((film / "sound/mix.json").read_text())
    if old["frames"] != new["frames"] or old["fps"] != new["fps"]:
        raise SystemExit("the film's length changed: rebuild the mix with scripts/mix_film.py")
    key = lambda c: (c["sfx"], c["frame"], c["gainDb"], c.get("pan", 0))  # noqa: E731
    a = {key(c): c for c in old["cues"]}
    b = {key(c): c for c in new["cues"]}
    removed = [a[k] for k in a.keys() - b.keys()]
    added = [b[k] for k in b.keys() - a.keys()]
    mix = M.decode(film / "assets/mix/mix.wav")
    n = len(mix)

    def render(cues: list[dict]) -> np.ndarray:
        out = np.zeros((n, 2), dtype=np.float32)
        for c in cues:
            f = cfg["sfx_files"].get(c["sfx"])
            if not f:
                continue
            x = M.decode(film / f)
            x = x / (np.max(np.abs(x)) + 1e-9) * M.db(c["gainDb"] + cfg.get("sfx_trim_db", 0))
            pan = c.get("pan", 0)
            x = x * np.array([min(1, 1 - pan), min(1, 1 + pan)], dtype=np.float32)
            s = int(c["frame"] / new["fps"] * M.SR)
            if s < n:
                out[s: s + len(x)] += x[: n - s]
        return out

    patched = M.tp_limit(mix - render(removed) + render(added), M.db(cfg["max_tp"] - 0.4))
    dst = film / "assets/mix/mix_patched.wav"
    M.write(dst, patched)
    changed = np.nonzero(np.abs(patched - mix).max(axis=1) > 1e-4)[0]
    span = f"{changed.min() / M.SR:.1f}–{changed.max() / M.SR:.1f} s" if len(changed) else "none"
    print(f"cues removed {len(removed)}, added {len(added)}; samples changed: {span}")
    print("before", M.measure(film / "assets/mix/mix.wav"))
    print("after ", M.measure(dst))


if __name__ == "__main__":
    main()
