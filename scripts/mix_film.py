#!/usr/bin/env python3
"""Mix a Margin of Error film to the owner's standard (PLAYBOOK §12, owner 2026-11-03).

  python3 scripts/mix_film.py films/<slug>

Inputs: assets/vo/film_vo.wav (scripts/film_timing.py), vo/timing.json (speech for ducking), sound/cues.json (every
SFX cue, exported from the picture code), sound/mix.json (music slots, room tone, SFX file map), assets/el/*.mp3
(ElevenLabs music and effects) and assets/sfx/*.wav (our seeded synthesised bank).
Standard: VO peaks −2 to −3 dBTP; an ambience bed always present at −28 to −32 dB (never digital silence); music low,
ducked under the voice; master −14 LUFS by ONE static gain, true peak ≤ −1 dBTP; stereo made before measuring;
measured twice. Writes assets/mix/{voice,bed,sfx,mix}.wav and sound/mix_report.md.
"""
import json
import re
import subprocess
import sys
from pathlib import Path

import numpy as np

SR = 48000


def run(args, **kw):
    return subprocess.run(args, check=True, capture_output=True, text=True, **kw)


def decode(path: Path, mono=False) -> np.ndarray:
    raw = subprocess.run(["ffmpeg", "-v", "error", "-i", str(path), "-f", "f32le", "-ac", "1" if mono else "2", "-ar", str(SR), "-"], check=True, capture_output=True).stdout
    x = np.frombuffer(raw, dtype=np.float32).copy()
    return x if mono else x.reshape(-1, 2)


def write(path: Path, x: np.ndarray) -> None:
    x = np.asarray(x, dtype=np.float32)
    ch = 1 if x.ndim == 1 else x.shape[1]
    subprocess.run(["ffmpeg", "-v", "error", "-y", "-f", "f32le", "-ac", str(ch), "-ar", str(SR), "-i", "-", "-c:a", "pcm_s24le", str(path)], input=x.tobytes(), check=True)


def measure(path: Path) -> dict:
    """Integrated loudness and true peak (ffmpeg ebur128, peak=true)."""
    out = subprocess.run(["ffmpeg", "-nostats", "-i", str(path), "-filter_complex", "ebur128=peak=true", "-f", "null", "-"], capture_output=True, text=True).stderr
    summ = out[out.rfind("Summary:"):]
    i = float(re.search(r"I:\s+(-?[\d.]+) LUFS", summ).group(1))
    tp = float(re.search(r"Peak:\s+(-?[\d.]+) dBFS", summ).group(1))
    lra = float(re.search(r"LRA:\s+(-?[\d.]+) LU", summ).group(1))
    return {"I": i, "TP": tp, "LRA": lra}


def tp_limit(x: np.ndarray, ceiling: float) -> np.ndarray:
    """Safety limiter on 4x-oversampled peaks: 1.5 ms look-ahead, 80 ms release. Touches only rare transients."""
    from scipy.signal import resample_poly
    from scipy.ndimage import maximum_filter1d, minimum_filter1d
    up = np.abs(resample_poly(x, 4, 1, axis=0)).max(axis=1)
    pk = up.reshape(-1, 4).max(axis=1)[: len(x)]
    pk = np.pad(pk, (0, len(x) - len(pk)))
    la = int(0.0015 * SR)
    pk = maximum_filter1d(pk, size=2 * la + 1)
    gain = np.minimum(1.0, ceiling / np.maximum(pk, 1e-9))
    rel = int(0.08 * SR)
    gain = minimum_filter1d(gain, size=la * 2 + 1)
    # release smoothing (one-pole, only upward)
    out = np.empty_like(gain)
    a = np.exp(-1.0 / rel)
    g = 1.0
    for i in range(0, len(gain), 64):
        tgt = gain[i: i + 64].min()
        g = tgt if tgt < g else g * a ** 64 + tgt * (1 - a ** 64)
        out[i: i + 64] = g
    return (x * out[:, None]).astype(np.float32)


def db(x):
    return 10 ** (x / 20)


def rms_db(x):
    return 20 * np.log10(np.sqrt(np.mean(np.square(x))) + 1e-12)


def fades(x: np.ndarray, fin: float, fout: float) -> np.ndarray:
    n = len(x)
    a = min(n, int(fin * SR))
    b = min(n, int(fout * SR))
    env = np.ones(n, dtype=np.float32)
    if a:
        env[:a] = np.sin(np.linspace(0, np.pi / 2, a)) ** 2
    if b:
        env[n - b:] = np.cos(np.linspace(0, np.pi / 2, b)) ** 2
    return x * env[:, None]


def loop_to(x: np.ndarray, n: int, xf: float = 2.0) -> np.ndarray:
    """Loop a stereo clip to n samples with equal-power crossfades of xf seconds."""
    k = int(xf * SR)
    fi = (np.sin(np.linspace(0, np.pi / 2, k)) ** 2)[:, None]
    fo = (np.cos(np.linspace(0, np.pi / 2, k)) ** 2)[:, None]
    out = np.zeros((n + len(x), 2), dtype=np.float32)
    pos = 0
    first = True
    while pos < n:
        seg = x.copy()
        if not first:
            seg[:k] *= fi
        seg[-k:] *= fo
        out[pos: pos + len(seg)] += seg
        pos += len(seg) - k
        first = False
    return out[:n]


def main() -> None:
    film = Path(sys.argv[1])
    out = film / "assets/mix"
    out.mkdir(parents=True, exist_ok=True)
    cfg = json.loads((film / "sound/mix.json").read_text())
    timing = json.loads((film / "vo/timing.json").read_text())
    cues = json.loads((film / "sound/cues.json").read_text())
    fps = cues["fps"]
    n = int(round(cues["frames"] / fps * SR))

    # ---- voice: high-pass, gentle compression, peak-limited to −2.5 dBTP (a stem process; the master stays linear)
    vo_proc = out / "voice_proc.wav"
    vcfg = cfg["voice"]
    run(["ffmpeg", "-v", "error", "-y", "-i", str(film / "assets/vo/film_vo.wav"), "-af",
         f"highpass=f=70,acompressor=threshold={db(vcfg['comp_threshold_db']):.5f}:ratio={vcfg['comp_ratio']}:attack=8:release=160:makeup={db(vcfg['makeup_db']):.4f}:knee=3,"
         f"alimiter=limit={db(vcfg['peak_dbtp']):.4f}:attack=2:release=60:level=disabled",
         "-ar", str(SR), "-ac", "2", "-c:a", "pcm_s24le", str(vo_proc)])
    voice = decode(vo_proc)[:n]
    voice = np.pad(voice, ((0, n - len(voice)), (0, 0)))
    # stem level: static gain to the voice target, then a true-peak limit at the voice ceiling (−2.5 dBTP)
    for _ in range(3):
        write(out / "voice.wav", voice)
        mv = measure(out / "voice.wav")
        voice = tp_limit(voice * db(vcfg["target_lufs"] - mv["I"]), db(vcfg["peak_dbtp"]))

    # ---- speech mask → duck envelope (0.5 s ramps)
    speech = np.zeros(n, dtype=bool)
    for s in timing["sentences"]:
        a, b = int((s["start"] - 0.05) * SR), int((s["end"] + 0.15) * SR)
        speech[max(0, a): min(n, b)] = True
    duck_db = np.where(speech, -cfg["music_duck_db"], 0.0).astype(np.float32)
    hop = 480
    d = duck_db[::hop]
    ramp = int(0.5 * SR / hop)
    d = np.convolve(np.pad(d, ramp, mode="edge"), np.ones(ramp) / ramp, mode="same")[ramp:-ramp]
    duck = np.repeat(db(d), hop)[:n].astype(np.float32)
    duck = np.pad(duck, (0, n - len(duck)), mode="edge")

    # ---- bed: room tone everywhere (never silence), music slots ducked under speech
    bed = np.zeros((n, 2), dtype=np.float32)
    room = decode(film / cfg["room"]["file"])
    room = room / (np.sqrt(np.mean(np.square(room))) + 1e-9) * db(cfg["room"]["rms_db"])
    bed += loop_to(room, n, 3.0)
    music = np.zeros((n, 2), dtype=np.float32)
    for sl in cfg["music"]:
        x = decode(film / sl["file"])
        x = x[int(sl.get("from", 0) * SR):]
        dur = sl["end"] - sl["start"]
        x = x[: int(dur * SR)]
        x = x / (np.sqrt(np.mean(np.square(x))) + 1e-9) * db(sl["rms_db"])
        x = fades(x, sl.get("fade_in", 3), sl.get("fade_out", 4))
        a = int(sl["start"] * SR)
        music[a: a + len(x)] += x[: max(0, min(len(x), n - a))]
    for h in cfg.get("silences", []):  # music out (room tone stays) before a key exhibit
        a, b = int(h["start"] * SR), int(h["end"] * SR)
        r = int(1.0 * SR)
        env = np.ones(n, dtype=np.float32)
        env[a:b] = 0
        env[max(0, a - r): a] = np.linspace(1, 0, a - max(0, a - r))
        env[b: b + r] = np.linspace(0, 1, min(r, n - b))
        music *= env[:, None]
    music *= duck[:, None]
    bed += music

    # ---- SFX from the picture's cues; gainDb = the effect's peak level
    sfx = np.zeros((n, 2), dtype=np.float32)
    cache = {}
    for c in cues["cues"] + cfg.get("extra_cues", []):
        name = c["sfx"]
        f = cfg["sfx_files"].get(name)
        if not f:
            continue
        if f not in cache:
            x = decode(film / f)
            cache[f] = x / (np.max(np.abs(x)) + 1e-9)
        x = cache[f] * db(c["gainDb"] + cfg.get("sfx_trim_db", 0))
        t = c.get("t", c.get("frame", 0) / fps)
        a = int(t * SR)
        if a >= n:
            continue
        pan = c.get("pan", 0)
        x = x * np.array([min(1, 1 - pan), min(1, 1 + pan)], dtype=np.float32)
        sfx[a: a + len(x)] += x[: n - a]

    write(out / "voice.wav", voice)
    write(out / "bed.wav", bed)
    write(out / "sfx.wav", sfx)
    # one static gain on voice + bed, found by measuring (twice converges); effects sit at their own absolute peaks
    g = 0.0
    for _ in range(3):
        write(out / "premaster.wav", (voice + bed) * db(g) + sfx)
        m0 = measure(out / "premaster.wav")
        g += cfg["target_lufs"] - m0["I"]
    master = (voice + bed) * db(g) + sfx
    master = tp_limit(master, db(cfg["max_tp"] - 0.4))
    final = out / "mix.wav"
    write(final, master)
    m2 = measure(final)
    m3 = measure(final)
    vo_m = measure(out / "voice.wav")
    rep = [
        f"# Mix report: {film.name}",
        "",
        f"- Voice stem: {vo_m['I']:.1f} LUFS, true peak {vo_m['TP']:.1f} dBTP (target −2 to −3 before master gain)",
        f"- Room bed {cfg['room']['rms_db']} dB RMS, always present; music slots {len(cfg['music'])}, duck {cfg['music_duck_db']} dB under speech",
        f"- Static gain on voice + bed: {g:+.2f} dB; effects at their own peak levels",
        f"- Master: {m2['I']:.2f} LUFS, true peak {m2['TP']:.2f} dBTP, LRA {m2['LRA']:.1f} LU (second measure {m3['I']:.2f} / {m3['TP']:.2f})",
        f"- Voice peaks in the master ≈ {vo_m['TP'] + g:.1f} dBTP",
    ]
    (film / "sound/mix_report.md").write_text("\n".join(rep) + "\n")
    print("\n".join(rep))


if __name__ == "__main__":
    main()
