#!/usr/bin/env python3
"""Three 1280x720 thumbnails for Test & Compare (PLAYBOOK §13.3, §13.7), one per title.

  ffmpeg -ss 5 -i public/films/east-palestine/footage/ntsb_drone_wreck_fire.mp4 -frames:v 1 OUT/drone.png
  python3 films/east-palestine/youtube/make_thumbnails.py OUT/drone.png films/east-palestine/youtube

All three stand on the film's opening exhibit, on screen 0:00-0:07: the NTSB's drone video of the wreck burning,
05 FEB 2023 (US government work, public domain; media_manifest.csv). The picture is the real frame, graded only
(no object added or removed); every number is the record's (claims C05, C07, C13, C37).
Colours from config/brand.yaml: void #0a0d12, cyan #38bdf8, amber #f59e0b, red #ef4444, ink #e5e7eb.
"""
import sys
from pathlib import Path

from PIL import Image, ImageDraw, ImageEnhance, ImageFilter, ImageFont

ROOT = Path(__file__).resolve().parents[3]
BOLD = str(ROOT / "public/fonts/Inter-700.woff2")
MONO = str(ROOT / "public/fonts/JetBrainsMono-700.woff2")
VOID, CYAN, AMBER, RED, INK = (10, 13, 18), (56, 189, 248), (245, 158, 11), (239, 68, 68), (229, 231, 235)
W, H = 1280, 720


def width(text, font, tracking=0):
    return sum(font.getlength(c) + tracking for c in text) - tracking


def shadowed(base, xy, text, font, fill, spread=10, tracking=0):
    """Text with a soft dark shadow so it holds on a TV home screen and at phone-browse size."""
    layer = Image.new("RGBA", base.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(layer)
    x, y = xy
    for ch in text:
        d.text((x + 4, y + 6), ch, font=font, fill=(0, 0, 0, 235))
        x += font.getlength(ch) + tracking
    base.alpha_composite(layer.filter(ImageFilter.GaussianBlur(spread)))
    d = ImageDraw.Draw(base)
    x, y = xy
    for ch in text:
        d.text((x, y), ch, font=font, fill=fill)
        x += font.getlength(ch) + tracking


def photo(src: Path, size, centre=(0.5, 0.5), zoom=1.0) -> Image.Image:
    """The drone frame, cropped to `size` around `centre`, graded a touch darker and cooler (nothing added)."""
    im = Image.open(src).convert("RGB")
    tw, th = size
    s = max(tw / im.width, th / im.height) * zoom
    im = im.resize((round(im.width * s), round(im.height * s)), Image.LANCZOS)
    cx, cy = centre[0] * im.width, centre[1] * im.height
    x0 = min(max(0, round(cx - tw / 2)), im.width - tw)
    y0 = min(max(0, round(cy - th / 2)), im.height - th)
    im = im.crop((x0, y0, x0 + tw, y0 + th))
    im = ImageEnhance.Contrast(ImageEnhance.Brightness(im).enhance(0.82)).enhance(1.12)
    return im.convert("RGBA")


def fade(out, box, direction, strength=255):
    """A void gradient over part of the frame so type sits on a calm field."""
    x0, y0, x1, y1 = box
    g = Image.new("L", (x1 - x0, y1 - y0))
    n = (x1 - x0) if direction in "lr" else (y1 - y0)
    for i in range(n):
        a = round(strength * (i / max(1, n - 1)) ** 1.4)
        if direction == "l":
            a = round(strength * ((n - 1 - i) / max(1, n - 1)) ** 1.4)
        if direction in "lr":
            ImageDraw.Draw(g).line((i, 0, i, y1 - y0), fill=a)
        else:
            ImageDraw.Draw(g).line((0, i, x1 - x0, i), fill=a)
    layer = Image.new("RGBA", (x1 - x0, y1 - y0), VOID + (255,))
    layer.putalpha(g)
    out.alpha_composite(layer, (x0, y0))


def credit(out, text, xy=(28, 676)):
    shadowed(out, xy, text, ImageFont.truetype(MONO, 22), INK, spread=5, tracking=1)


def billing_line(src: Path) -> Image.Image:
    """A: the wreck, and beside it the Salem reading stopped well short of the line that stops a train."""
    out = Image.new("RGBA", (W, H), VOID + (255,))
    out.alpha_composite(photo(src, (760, H), centre=(0.42, 0.55), zoom=1.15), (0, 0))
    fade(out, (480, 0, 760, H), "r")
    d = ImageDraw.Draw(out)
    # the meter: 0-250 degrees above ambient, the bar filled to 103, the stop line at 170 (Salem, NTSB p. 6)
    mx, top, bot = 740, 70, 650
    yv = lambda v: bot - (bot - top) * v / 250
    d.rectangle((mx, top, mx + 90, bot), fill=(18, 24, 36, 255), outline=(30, 41, 59, 255), width=2)
    d.rectangle((mx + 8, yv(103), mx + 82, bot - 8), fill=AMBER + (255,))
    d.rectangle((mx - 24, yv(170) - 4, 1250, yv(170) + 4), fill=INK + (255,))
    f_line = ImageFont.truetype(MONO, 64)
    shadowed(out, (mx + 120, yv(170) - 86), "STOP 170°", f_line, INK, spread=6)
    f_big = ImageFont.truetype(BOLD, 190)
    shadowed(out, (mx + 112, yv(103) - 70), "103°", f_big, AMBER, tracking=2)
    credit(out, "NTSB DRONE VIDEO · EAST PALESTINE · 05 FEB 2023")
    return out


def not_necessary(src: Path) -> Image.Image:
    """B: the wreck full frame; the NTSB's own finding on the burn, attributed."""
    out = photo(src, (W, H), centre=(0.5, 0.48), zoom=1.05)
    fade(out, (0, 300, W, H), "d", 245)
    f_kick = ImageFont.truetype(MONO, 52)
    shadowed(out, (60, 372), "NTSB ON THE BURN:", f_kick, INK, spread=6, tracking=2)
    f_big = ImageFont.truetype(BOLD, 128)
    shadowed(out, (52, 440), "NOT NECESSARY", f_big, RED, tracking=2)
    credit(out, "NTSB DRONE VIDEO · 05 FEB 2023 · FINDING: NTSB RIR-24-05", (60, 620))
    return out


def nineteen_miles(src: Path) -> Image.Image:
    """C: the gap. Two detector ticks on the route, nothing between them, the wreck at the end of it."""
    out = Image.new("RGBA", (W, H), VOID + (255,))
    out.alpha_composite(photo(src, (720, H), centre=(0.55, 0.55), zoom=1.3), (W - 720, 0))
    fade(out, (W - 720, 0, W - 420, H), "l")
    d = ImageDraw.Draw(out)
    y = 520
    x0, x1 = 70, 760
    d.line((x0, y, x1, y), fill=(30, 41, 59, 255), width=6)
    for x in range(x0 + 20, x1 - 10, 34):  # the blind strip, dashed amber
        d.line((x, y, x + 18, y), fill=AMBER + (255,), width=6)
    for x, c in ((x0, CYAN), (x1, RED)):
        d.rectangle((x - 9, y - 34, x + 9, y + 34), fill=c + (255,))
    f_big = ImageFont.truetype(BOLD, 190)
    shadowed(out, (54, 150), "19 MILES", f_big, INK, tracking=2)
    f_lbl = ImageFont.truetype(MONO, 40)
    shadowed(out, (x0 - 10, y + 52), "SALEM", f_lbl, CYAN, spread=6)
    t = "EAST PALESTINE"
    shadowed(out, (x1 - width(t, f_lbl) + 20, y + 52), t, f_lbl, RED, spread=6)
    shadowed(out, (x0 + 120, y - 92), "NO DETECTOR BETWEEN", ImageFont.truetype(MONO, 40), AMBER, spread=6)
    credit(out, "NTSB DRONE VIDEO · 05 FEB 2023 · ROUTE AFTER NTSB FIG. 3", (60, 676))
    return out


def main() -> int:
    src, dst = Path(sys.argv[1]), Path(sys.argv[2])
    for name, fn in (("thumb_a_billing_line", billing_line), ("thumb_b_not_necessary", not_necessary),
                     ("thumb_c_19_miles", nineteen_miles)):
        im = fn(src).convert("RGB")
        im.save(dst / f"{name}.jpg", quality=92)
        im.resize((168, 94), Image.LANCZOS).save(dst / f"{name}_168.png")  # the browse-size gate (§13.3)
        print(dst / f"{name}.jpg")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
