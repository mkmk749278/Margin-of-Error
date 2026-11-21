#!/usr/bin/env python3
"""Titan: three 1280x720 thumbnails for Test & Compare (PLAYBOOK §13.3, §13.7), one per locked title (treatment.md).

Every picture is a frame of the 4K master itself (what is shown is in the film), cropped and scaled only; the
frames' own honesty labels and source strips stay on. Built at 2x (2560x1440) and downsampled.

  for t in 52 734 1213 145; do ffmpeg -ss $t -i titan_master_4k.mp4 -frames:v 1 FRAMES/k$t.png; done
  python3 films/titan/youtube/make_thumbnails.py FRAMES films/titan/youtube

A  SAME DATA        OceanGate's dive-80 plot against time (0:52) beside the NTSB's re-plot against depth (12:14)
B  SENT BACK DOWN   the dive record 75-88 with the dated decisions (20:13); dive 80 red, 81 and 82 full depth
C  4.74 -> 8.76     the hull (2:25, ILLUSTRATION) and the NTSB's fitted slope, before and after (C41)
Colours from config/brand.yaml. Facts: C08, C11, C12, C41, C112 (claims.csv).
"""
import sys
from pathlib import Path

from PIL import Image, ImageChops, ImageDraw, ImageFilter, ImageFont

ROOT = Path(__file__).resolve().parents[3]
BOLD = str(ROOT / "public/fonts/Inter-700.woff2")
MONO = str(ROOT / "public/fonts/JetBrainsMono-700.woff2")
VOID, RED, AMBER, CYAN, INK = (10, 13, 18), (239, 68, 68), (245, 158, 11), (56, 189, 248), (229, 231, 235)
W, H = 2560, 1440


def frame(src: Path, box) -> Image.Image:
    return Image.open(src).convert("RGBA").crop(box)


def fit_into(im: Image.Image, w: int, h: int) -> Image.Image:
    s = min(w / im.width, h / im.height)
    return im.resize((int(im.width * s), int(im.height * s)), Image.LANCZOS)


def base() -> Image.Image:
    out = Image.new("RGBA", (W, H), VOID + (255,))
    grid = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    gd = ImageDraw.Draw(grid)
    for x in range(0, W, 80):
        gd.line((x, 0, x, H), fill=CYAN + (13,), width=2)
    for y in range(0, H, 80):
        gd.line((0, y, W, y), fill=CYAN + (13,), width=2)
    out.alpha_composite(grid)
    return out


def vignette(out: Image.Image) -> None:
    vig = Image.new("L", (W, H), 0)
    vd = ImageDraw.Draw(vig)
    for i in range(60):
        vd.rectangle((i * 4, i * 4, W - i * 4, H - i * 4), outline=int(120 * (1 - i / 60)), width=4)
    dark = Image.new("RGBA", (W, H), (0, 0, 0, 255))
    dark.putalpha(vig.filter(ImageFilter.GaussianBlur(40)))
    out.alpha_composite(dark)


def heavy(out: Image.Image, text: str, size: int, colour, x: int, y: int, glow=None, anchor="l") -> int:
    """Heavy Inter with a short hard extrusion, a soft shadow, an optional restrained glow and a top light."""
    font = ImageFont.truetype(BOLD, size)
    stroke = max(2, size // 40)
    tw = int(font.getlength(text) + stroke * 2)
    if anchor == "r":
        x -= tw
    elif anchor == "c":
        x -= tw // 2
    sh = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    sd = ImageDraw.Draw(sh)
    for k in range(1, 9):
        sd.text((x + k * 2, y + k * 3), text, font=font, fill=(0, 0, 0, 255), stroke_width=stroke, stroke_fill=(0, 0, 0, 255))
    out.alpha_composite(sh.filter(ImageFilter.GaussianBlur(3)))
    soft = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    ImageDraw.Draw(soft).text((x + 10, y + 22), text, font=font, fill=(0, 0, 0, 210), stroke_width=stroke)
    out.alpha_composite(soft.filter(ImageFilter.GaussianBlur(28)))
    if glow:
        g = Image.new("RGBA", (W, H), (0, 0, 0, 0))
        ImageDraw.Draw(g).text((x, y), text, font=font, fill=glow + (140,), stroke_width=stroke * 3, stroke_fill=glow + (140,))
        out.alpha_composite(g.filter(ImageFilter.GaussianBlur(34)))
    ImageDraw.Draw(out).text((x, y), text, font=font, fill=colour, stroke_width=stroke, stroke_fill=colour)
    hl = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    ImageDraw.Draw(hl).text((x, y), text, font=font, fill=(255, 255, 255, 46), stroke_width=stroke)
    bb = font.getbbox(text, stroke_width=stroke)
    top, tall = y + bb[1], bb[3] - bb[1]
    col = Image.new("L", (1, H), 0)
    for yy in range(H):
        t = (yy - top) / (tall * 0.6)
        col.putpixel((0, yy), int(255 * max(0.0, 1 - t)) if 0 <= t else 0)
    hl.putalpha(ImageChops.multiply(hl.getchannel("A"), col.resize((W, H))))
    out.alpha_composite(hl)
    return tw


def chip(out: Image.Image, text: str, x: int, y: int, colour=INK, size=46, right=False) -> None:
    mono = ImageFont.truetype(MONO, size)
    tw = mono.getlength(text)
    if right:
        x = int(x - tw - 40)
    d = ImageDraw.Draw(out)
    d.rectangle((x, y, x + tw + 40, y + size + 30), fill=(10, 13, 18, 225), outline=(30, 41, 59, 255), width=2)
    d.text((x + 20, y + 12), text, font=mono, fill=colour)


def brackets(out: Image.Image) -> None:
    d = ImageDraw.Draw(out)
    L, T = 90, 6
    d.line((W - 60 - L, 60, W - 60, 60), fill=RED, width=T); d.line((W - 60, 60, W - 60, 60 + L), fill=RED, width=T)
    d.line((60, H - 60 - L, 60, H - 60), fill=RED, width=T); d.line((60, H - 60, 60 + L, H - 60), fill=RED, width=T)


def panel(out: Image.Image, im: Image.Image, x: int, y: int, edge=(30, 41, 59)) -> None:
    sh = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    ImageDraw.Draw(sh).rectangle((x + 14, y + 22, x + im.width + 14, y + im.height + 22), fill=(0, 0, 0, 200))
    out.alpha_composite(sh.filter(ImageFilter.GaussianBlur(24)))
    out.alpha_composite(im, (x, y))
    ImageDraw.Draw(out).rectangle((x, y, x + im.width, y + im.height), outline=edge + (255,), width=3)


def same_data(frames: Path) -> Image.Image:
    """Main (title: The NTSB Graph That Shows Titan Was Damaged 11 Months Before It Imploded)."""
    out = base()
    # left: OceanGate's own dive-80 plot, strain and depth against time (C112); its source strip stays on
    left = fit_into(frame(frames / "k52.png", (300, 220, 3620, 1880)), 1180, 980)
    # right: the NTSB's points re-plotted against depth, the slopes landed (C11, C41); source strip stays on
    # the plot only (the slope column is in thumbnail C), so the bend reads at browse size
    right = fit_into(frame(frames / "k734.png", (180, 220, 2560, 1980)), 1180, 960)
    y0 = 400
    panel(out, left, 60, y0 + right.height - left.height)
    panel(out, right, W - 60 - right.width, y0, edge=RED)
    heavy(out, "SAME DATA", 300, INK, W // 2, 40, anchor="c")
    chip(out, "AGAINST TIME", 70, y0 + right.height - left.height - 100, colour=CYAN, size=52)
    chip(out, "AGAINST DEPTH", W - 70, y0 - 100, colour=RED, size=52, right=True)
    chip(out, "TITAN · DIVE 80 · 15 JUL 2022", 160, y0 + right.height - left.height - 200, colour=AMBER, size=44)
    vignette(out)
    brackets(out)
    return out.resize((1280, 720), Image.LANCZOS)


def sent_back_down(frames: Path) -> Image.Image:
    """Challenger 1 (title: Titan's Own Sensors Recorded the Damage. OceanGate Sent It Back Down.).
    The dive record with the dated decisions, depths to scale, dive 80 red; no dive 88 (treatment)."""
    out = base()
    rec = fit_into(frame(frames / "k1213.png", (190, 150, 3660, 1930)), 1560, 1100)
    panel(out, rec, 60, (H - rec.height) // 2 + 40)
    x = W - 80
    heavy(out, "TITAN", 150, INK, x, 90, anchor="r")
    heavy(out, "SENT", 250, AMBER, x, 300, anchor="r")
    heavy(out, "BACK", 250, AMBER, x, 580, anchor="r")
    heavy(out, "DOWN", 250, RED, x, 860, glow=RED, anchor="r")
    chip(out, "AFTER THE DIVE 80 BANG", x, H - 230, colour=INK, size=44, right=True)
    chip(out, "NTSB MIR-25-36 · USCG MBI", x, H - 130, colour=INK, size=40, right=True)
    vignette(out)
    brackets(out)
    return out.resize((1280, 720), Image.LANCZOS)


def the_slope(frames: Path) -> Image.Image:
    """Challenger 2 (title: Same Data, Different Axis: The Titan Damage OceanGate Missed).
    The hull (ILLUSTRATION, as labelled in the film) and the NTSB's fitted slope of the same gauge, dive 80 then 81."""
    out = base()
    hull = frame(frames / "k145.png", (0, 240, 3040, 2160))
    hull = hull.resize((int(hull.width * H / hull.height), H), Image.LANCZOS)
    out.alpha_composite(hull, (-120, 0))
    grad = Image.new("L", (W, 1))
    for xx in range(W):
        grad.putpixel((xx, 0), int(255 * min(1, max(0, (xx - 1250) / 420))))
    p = Image.new("RGBA", (W, H), VOID + (255,))
    p.putalpha(grad.resize((W, H)))
    out.alpha_composite(p)
    x = W - 90
    heavy(out, "4.74", 300, CYAN, x, 120, anchor="r")
    heavy(out, "8.76", 300, RED, x, 560, glow=RED, anchor="r")
    f = ImageFont.truetype(BOLD, 150)
    arrow_w = int(f.getlength("↓"))
    d = ImageDraw.Draw(out)
    d.text((x - 520 - arrow_w // 2, 405), "↓", font=f, fill=AMBER)
    chip(out, "DIVE 80", x, 470, colour=CYAN, size=44, right=True)
    chip(out, "DIVE 81", x, 910, colour=RED, size=44, right=True)
    chip(out, "SAME GAUGE · M PER mV · NTSB", x, 1040, colour=INK, size=40, right=True)
    heavy(out, "TITAN", 170, INK, 130, 110)
    vignette(out)
    brackets(out)
    return out.resize((1280, 720), Image.LANCZOS)


def main() -> int:
    frames, dst = Path(sys.argv[1]), Path(sys.argv[2])
    dst.mkdir(parents=True, exist_ok=True)
    for name, fn in (("thumb_a_same_data", same_data), ("thumb_b_sent_back_down", sent_back_down), ("thumb_c_slope", the_slope)):
        img = fn(frames).convert("RGB")
        img.save(dst / f"{name}.jpg", quality=94, optimize=True)
        img.resize((168, 94), Image.LANCZOS).save(frames / f"{name}_168.png")
        print(dst / f"{name}.jpg", (dst / f"{name}.jpg").stat().st_size)
    return 0


if __name__ == "__main__":
    sys.exit(main())
