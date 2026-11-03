#!/usr/bin/env python3
"""Synthesise the channel's foley bank (PLAYBOOK §12, names from lib/remotion/sfx.ts) as 48 kHz stereo WAVs.
Everything is generated from fixed seeds, so the bank is identical on every run and carries no licence: no recordings.
The cockpit chime is a synthetic tone, never a real alarm recording (CLAUDE.md, evidence integrity).

  python3 scripts/sfx_synth.py OUT_DIR
needs: numpy
"""
import sys
import wave
from pathlib import Path

import numpy as np

SR = 48_000


def t(sec):
    return np.arange(int(SR * sec)) / SR


def env(n, attack=0.002, release=0.2, shape=4.0):
    x = np.arange(n) / SR
    a = np.clip(x / max(attack, 1e-4), 0, 1)
    r = np.exp(-shape * x / max(release, 1e-4))
    return a * r


def noise(n, seed, colour=0.0):
    """White noise, optionally tilted toward pink/brown (colour 0..1)."""
    rng = np.random.default_rng(seed)
    w = rng.standard_normal(n)
    if colour > 0:
        b = np.cumsum(w)
        b -= np.convolve(b, np.ones(400) / 400, mode="same")
        w = (1 - colour) * w + colour * b / (np.std(b) + 1e-9)
    return w / (np.max(np.abs(w)) + 1e-9)


def lowpass(x, cutoff):
    a = np.exp(-2 * np.pi * cutoff / SR)
    y = np.empty_like(x)
    acc = 0.0
    for i, v in enumerate(x):
        acc = (1 - a) * v + a * acc
        y[i] = acc
    return y


def highpass(x, cutoff):
    return x - lowpass(x, cutoff)


def norm(x, peak_db=-3.0):
    return x / (np.max(np.abs(x)) + 1e-9) * 10 ** (peak_db / 20)


def stereo(x, width=0.0, seed=0):
    """Mono → stereo; width adds a tiny decorrelated delay on the right."""
    d = int(width * 0.0007 * SR)
    r = np.concatenate([np.zeros(d), x[: len(x) - d]]) if d else x
    return np.stack([x, r], axis=1)


def quartz_tick():
    n = int(SR * 0.06)
    x = noise(n, 1) * env(n, 0.0005, 0.008, 6) + np.sin(2 * np.pi * 3_800 * t(0.06)) * env(n, 0.0003, 0.01, 6) * 0.6
    return norm(highpass(x, 1_500), -10)


def relay_click():
    n = int(SR * 0.12)
    a = noise(n, 2) * env(n, 0.0005, 0.01, 5)
    b = np.roll(noise(n, 3) * env(n, 0.0005, 0.015, 5), int(0.018 * SR)) * 0.7
    return norm(highpass(a + b, 600), -8)


def pen_scratch():
    n = int(SR * 0.9)
    x = highpass(noise(n, 4), 2_500) * (0.6 + 0.4 * np.sin(2 * np.pi * 11 * t(0.9))) * env(n, 0.05, 0.9, 1.5)
    return norm(x, -16)


def paper_slide():
    n = int(SR * 0.7)
    x = lowpass(highpass(noise(n, 5, 0.3), 300), 6_000) * np.sin(np.pi * np.linspace(0, 1, n)) ** 1.5
    return norm(x, -12)


def stamp():
    n = int(SR * 0.35)
    thud = np.sin(2 * np.pi * 90 * t(0.35)) * env(n, 0.001, 0.08, 6)
    slap = highpass(noise(n, 6), 800) * env(n, 0.0005, 0.02, 6)
    return norm(thud + 0.8 * slap, -6)


def highlighter():
    n = int(SR * 0.8)
    x = lowpass(highpass(noise(n, 7), 1_200), 7_000) * (0.7 + 0.3 * np.sin(2 * np.pi * 4 * t(0.8)))
    x *= np.minimum(1, np.linspace(0, 8, n)) * np.minimum(1, np.linspace(8, 0, n))
    return norm(x, -18)


def cockpit_chime():
    """A synthetic two-tone alert, not a recording of any aircraft's horn."""
    tt = t(1.2)
    x = np.zeros_like(tt)
    for i, f in enumerate((980.0, 980.0, 980.0)):
        s = int(i * 0.4 * SR)
        seg = tt[: int(0.3 * SR)]
        tone = (np.sin(2 * np.pi * f * seg) + 0.3 * np.sin(2 * np.pi * 2 * f * seg)) * env(len(seg), 0.005, 0.25, 3)
        x[s : s + len(seg)] += tone
    return norm(x, -10)


def pressure_drop():
    n = int(SR * 3.0)
    x = noise(n, 8, 0.5)
    sweep = np.linspace(9_000, 400, n)
    y = np.empty(n)
    acc = 0.0
    for i in range(n):
        a = np.exp(-2 * np.pi * sweep[i] / SR)
        acc = (1 - a) * x[i] + a * acc
        y[i] = acc
    y *= np.concatenate([np.linspace(0, 1, int(0.04 * SR)), np.exp(-1.2 * np.linspace(0, 3, n - int(0.04 * SR)))])
    boom = np.sin(2 * np.pi * 45 * t(3.0)) * env(n, 0.002, 0.6, 4)
    return norm(y + 0.8 * boom, -3)


def metal_snap_sub():
    n = int(SR * 1.5)
    snap = highpass(noise(n, 9), 3_000) * env(n, 0.0003, 0.015, 6)
    shriek = np.sin(2 * np.pi * (2_200 + 600 * np.sin(2 * np.pi * 9 * t(1.5))) * t(1.5)) * env(n, 0.005, 0.25, 4) * 0.25
    boom = np.sin(2 * np.pi * 45 * t(1.5)) * env(n, 0.003, 0.9, 3)
    return norm(snap + shriek + boom, -4)


def transformer_hum():
    tt = t(6.0)
    x = sum(a * np.sin(2 * np.pi * f * tt) for f, a in ((60, 1.0), (120, 0.6), (180, 0.25), (240, 0.12)))
    x += 0.05 * lowpass(noise(len(tt), 10), 300)
    fade = int(0.05 * SR)
    x[:fade] *= np.linspace(0, 1, fade)
    x[-fade:] *= np.linspace(1, 0, fade)
    return norm(x, -20)


def whoosh():
    n = int(SR * 1.0)
    x = lowpass(highpass(noise(n, 11, 0.4), 200), 4_000) * np.sin(np.pi * np.linspace(0, 1, n)) ** 2
    return norm(x, -14)


def room_bed():
    """The under-speech bed (owner's mix standard: −28 to −32 dB under the VO). 20 s, loops seamlessly."""
    n = int(SR * 20)
    x = lowpass(noise(n, 12, 0.8), 500) + 0.3 * np.sin(2 * np.pi * 60 * t(20)) * 0.05
    fade = int(0.5 * SR)
    loop = x.copy()
    loop[:fade] = x[:fade] * np.linspace(0, 1, fade) + x[-fade:] * np.linspace(1, 0, fade)
    return norm(loop[: n - fade], -30)


BANK = {
    "quartz_tick": quartz_tick, "relay_click": relay_click, "pen_scratch": pen_scratch, "paper_slide": paper_slide,
    "stamp": stamp, "highlighter": highlighter, "cockpit_chime": cockpit_chime, "pressure_drop": pressure_drop,
    "metal_snap_sub": metal_snap_sub, "transformer_hum": transformer_hum, "whoosh": whoosh, "room_bed": room_bed,
}


def write(path, x, width):
    s = stereo(x, width)
    pcm = (np.clip(s, -1, 1) * 32767).astype("<i2")
    with wave.open(str(path), "wb") as w:
        w.setnchannels(2)
        w.setsampwidth(2)
        w.setframerate(SR)
        w.writeframes(pcm.tobytes())


def main():
    out = Path(sys.argv[1] if len(sys.argv) > 1 else "public/sfx")
    out.mkdir(parents=True, exist_ok=True)
    for name, fn in BANK.items():
        x = fn()
        write(out / f"{name}.wav", x, 0.0 if name in ("stamp", "quartz_tick") else 1.0)
        peak = 20 * np.log10(np.max(np.abs(x)) + 1e-12)
        print(f"{name:16s} {len(x) / SR:5.2f} s  peak {peak:6.1f} dBFS")


if __name__ == "__main__":
    main()
