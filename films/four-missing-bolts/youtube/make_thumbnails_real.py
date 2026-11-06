#!/usr/bin/env python3
"""Three 1920x1080 thumbnails on real NTSB photographs (CTR fix, 2026-11-06).

  python3 films/four-missing-bolts/youtube/make_thumbnails_real.py FIG01 FLICKR OUTDIR

FIG01  = NTSB AIR-25-04 Figure 1 (page 21, `pdfimages -j`): tried, but a crop clear of the figure's own labels
         loses the opening, so all three use the Flickr photo; the argument is kept for later variants.
FLICKR = NTSB photo 53450363008 (flickr.com/photos/ntsb, Public Domain Work), the opening from the aisle.
Both are US government works, shown unaltered apart from crop, scale and a light grade, and credited on the frame.
Text facts: four bolts missing (finding 11), 154 cycles (C22).
"""
import sys
from pathlib import Path

from PIL import Image, ImageDraw, ImageEnhance, ImageFilter, ImageFont

ROOT = Path(__file__).resolve().parents[3]
BOLD = str(ROOT / "public/fonts/Inter-700.woff2")
MONO = str(ROOT / "public/fonts/JetBrainsMono-700.woff2")
W, H = 1920, 1080
WHITE, YELLOW, RED, INK = (255, 255, 255), (250, 204, 21), (220, 38, 38), (10, 13, 18)


def cover(img, box):
    """Crop `box` from the source, then scale it to fill 1920x1080."""
    c = img.crop(box).resize((W, H), Image.LANCZOS)
    c = c.filter(ImageFilter.UnsharpMask(radius=2, percent=60, threshold=2))
    return c


def grade(img, contrast=1.12, colour=0.92, bright=0.96):
    img = ImageEnhance.Contrast(img).enhance(contrast)
    img = ImageEnhance.Color(img).enhance(colour)
    return ImageEnhance.Brightness(img).enhance(bright)


def gradient(img, side, reach, alpha=235):
    """Dark ramp from one edge so heavy type holds on a busy photo."""
    g = Image.new("L", (W, H), 0)
    d = ImageDraw.Draw(g)
    span = int((W if side in ("left", "right") else H) * reach)
    for i in range(span):
        a = int(alpha * (1 - i / span) ** 1.6)
        if side == "left":
            d.line([(i, 0), (i, H)], fill=a)
        elif side == "right":
            d.line([(W - 1 - i, 0), (W - 1 - i, H)], fill=a)
        elif side == "bottom":
            d.line([(0, H - 1 - i), (W, H - 1 - i)], fill=a)
        else:
            d.line([(0, i), (W, i)], fill=a)
    black = Image.new("RGBA", (W, H), (6, 8, 12, 255))
    black.putalpha(g)
    img.alpha_composite(black)


def vignette(img, strength=150):
    m = Image.new("L", (W, H), 0)
    ImageDraw.Draw(m).ellipse([-W * 0.15, -H * 0.2, W * 1.15, H * 1.2], fill=255)
    m = m.filter(ImageFilter.GaussianBlur(160))
    inv = Image.eval(m, lambda v: int((255 - v) * strength / 255))
    black = Image.new("RGBA", (W, H), (0, 0, 0, 255))
    black.putalpha(inv)
    img.alpha_composite(black)


def text_w(t, f, tr=0):
    return sum(f.getlength(c) + tr for c in t) - tr


def heavy(img, xy, t, size, fill, tr=0, stroke=0, glow=None):
    """Heavy type with a deep soft shadow (holds at phone-browse size and on a TV home row)."""
    f = ImageFont.truetype(BOLD, size)
    sh = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    d = ImageDraw.Draw(sh)
    x, y = xy
    for c in t:
        d.text((x + size * 0.03, y + size * 0.05), c, font=f, fill=(0, 0, 0, 245))
        x += f.getlength(c) + tr
    img.alpha_composite(sh.filter(ImageFilter.GaussianBlur(size * 0.07)))
    if glow:
        gl = Image.new("RGBA", (W, H), (0, 0, 0, 0))
        d = ImageDraw.Draw(gl)
        x = xy[0]
        for c in t:
            d.text((x, y), c, font=f, fill=glow + (120,))
            x += f.getlength(c) + tr
        img.alpha_composite(gl.filter(ImageFilter.GaussianBlur(size * 0.12)))
    d = ImageDraw.Draw(img)
    x = xy[0]
    for c in t:
        d.text((x, y), c, font=f, fill=fill, stroke_width=stroke, stroke_fill=(0, 0, 0))
        x += f.getlength(c) + tr
    return text_w(t, f, tr)


def pill(img, xy, t, size=58, bg=RED, fg=WHITE, tr=4):
    f = ImageFont.truetype(BOLD, size)
    w = text_w(t, f, tr)
    x, y = xy
    padx, h = size * 0.6, size * 1.55
    sh = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    ImageDraw.Draw(sh).rounded_rectangle([x + 4, y + 8, x + w + 2 * padx + 4, y + h + 8], h / 2, fill=(0, 0, 0, 200))
    img.alpha_composite(sh.filter(ImageFilter.GaussianBlur(10)))
    d = ImageDraw.Draw(img)
    d.rounded_rectangle([x, y, x + w + 2 * padx, y + h], h / 2, fill=bg)
    cx = x + padx
    for c in t:
        d.text((cx, y + (h - size * 1.2) / 2), c, font=f, fill=fg)
        cx += f.getlength(c) + tr


def bracket(img, box, colour=RED, L=110, wdt=12):
    """Corner brackets on the opening; drawn with a glow so it reads at browse size."""
    x0, y0, x1, y1 = box
    def draw(d, col):
        for cx, cy, sx, sy in ((x0, y0, 1, 1), (x1, y0, -1, 1), (x0, y1, 1, -1), (x1, y1, -1, -1)):
            d.line([(cx, cy), (cx + sx * L, cy)], fill=col, width=wdt)
            d.line([(cx, cy), (cx, cy + sy * L)], fill=col, width=wdt)
    gl = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    draw(ImageDraw.Draw(gl), colour + (220,))
    img.alpha_composite(gl.filter(ImageFilter.GaussianBlur(14)))
    draw(ImageDraw.Draw(img), colour + (255,))


def credit(img, t, xy=(40, 36)):
    f = ImageFont.truetype(MONO, 30)
    w = text_w(t, f, 2)
    x, y = xy
    d = ImageDraw.Draw(img)
    d.rounded_rectangle([x, y, x + w + 32, y + 52], 8, fill=(0, 0, 0, 190))
    cx = x + 16
    for c in t:
        d.text((cx, y + 9), c, font=f, fill=(229, 231, 235))
        cx += f.getlength(c) + 2


def save(img, path):
    rgb = img.convert("RGB")
    for q in (95, 92, 88, 84):  # YouTube caps thumbnails at 2 MB
        rgb.save(path, "JPEG", quality=q, subsampling=0, optimize=True, progressive=True)
        if path.stat().st_size < 2_000_000:
            break
    print(f"{path} {path.stat().st_size // 1024} KB")


def thumb_i(flickr, out):
    """NTSB photo from the aisle, full frame: the opening, then NO BOLTS across the bottom."""
    src = Image.open(flickr).convert("RGB")            # 1024x683
    img = grade(cover(src, (0, 0, 1024, 576)), contrast=1.1, bright=0.95).convert("RGBA")
    gradient(img, "bottom", 0.5, 245)
    vignette(img, 110)
    sx, sy = W / 1024, H / 576
    bracket(img, (int(150 * sx), int(40 * sy), int(560 * sx), int(470 * sy)))
    pill(img, (1180, 120), "154 FLIGHTS", 64)
    f = ImageFont.truetype(BOLD, 280)
    heavy(img, ((W - text_w("NO BOLTS", f, -4)) / 2, 742), "NO BOLTS", 280, YELLOW, tr=-4, glow=YELLOW)
    credit(img, "NTSB PHOTO · 07 JAN 2024")
    save(img, out / "thumb_i_hole_no_bolts.jpg")


def thumb_j(flickr, out):
    """NTSB photo from the aisle: the opening left, ALL 4 BOLTS / MISSING right."""
    src = Image.open(flickr).convert("RGB")            # 1024x683
    img = grade(cover(src, (0, 40, 1024, 40 + 576)), contrast=1.1, bright=0.94).convert("RGBA")
    gradient(img, "right", 0.62, 245)
    vignette(img, 110)
    sx, sy = W / 1024, H / 576
    bracket(img, (int(150 * sx), int(20 * sy), int(560 * sx), int(520 * sy)))
    x = 1010
    heavy(img, (x, 250), "ALL 4", 210, WHITE, tr=-2)
    heavy(img, (x, 470), "BOLTS", 210, WHITE, tr=-2)
    pill(img, (x + 6, 730), "MISSING", 92, tr=8)
    credit(img, "NTSB PHOTO · 07 JAN 2024")
    save(img, out / "thumb_j_all4_missing.jpg")


def thumb_k(flickr, out):
    """Tight on the opening: giant 154 / FLIGHTS, and 0 BOLTS in red."""
    src = Image.open(flickr).convert("RGB")
    img = grade(cover(src, (90, 0, 90 + 800, 450)), contrast=1.12, bright=0.92).convert("RGBA")
    gradient(img, "right", 0.6, 245)
    vignette(img, 120)
    sx, sy = W / 800, H / 450
    bracket(img, (int((150 - 90) * sx) + 30, 40, int((560 - 90) * sx), int(440 * sy) - 40))
    x = 1130
    heavy(img, (x - 10, 150), "154", 400, YELLOW, tr=-10, glow=YELLOW)
    heavy(img, (x, 560), "FLIGHTS", 150, WHITE, tr=0)
    pill(img, (x + 4, 770), "0 BOLTS", 96, tr=6)
    credit(img, "NTSB PHOTO · 07 JAN 2024")
    save(img, out / "thumb_k_154_zero.jpg")


def main():
    fig01, flickr, out = Path(sys.argv[1]), Path(sys.argv[2]), Path(sys.argv[3])
    thumb_i(flickr, out)
    thumb_j(flickr, out)
    thumb_k(flickr, out)


if __name__ == "__main__":
    main()
