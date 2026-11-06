#!/usr/bin/env python3
"""Thumbnail H, 1920x1080: a drawn door-plug callout (left) and MISSING / 4 BOLTS (right).

  python3 films/four-missing-bolts/youtube/make_thumbnail_h.py [OUT.jpg]

Facts on it: four bolts missing (NTSB AIR-25-04 finding 11), 154 cycles (C22), not readily detectable (C21).
The drawing is ours, so it carries RECONSTRUCTION, and the badge says NTSB FINDING, not EXHIBIT.
Bolt layout per the report (p. 33): 2 upper guide track bolts, 2 lower vertical movement arrestor bolts.
"""
import math
import sys
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = Path(__file__).resolve().parents[3]
BOLD = str(ROOT / "public/fonts/Inter-700.woff2")
MONO = str(ROOT / "public/fonts/JetBrainsMono-700.woff2")
W, H = 1920, 1080
BG = (10, 15, 29)          # #0A0F1D
GRID = (56, 189, 248)      # technical cyan
CYAN = (56, 189, 248)
RED = (220, 38, 38)        # #DC2626
YELLOW = (250, 204, 21)    # #FACC15
WHITE = (255, 255, 255)
SLATE = (148, 163, 184)    # #94A3B8


class BlendDraw:
    """ImageDraw on an RGBA canvas overwrites alpha instead of blending; this draws each shape on its own
    layer and composites it, so translucent fills and lines really are translucent."""

    def __init__(self, img):
        self.img = img

    def __getattr__(self, name):
        def call(*args, **kwargs):
            layer = Image.new("RGBA", self.img.size, (0, 0, 0, 0))
            getattr(ImageDraw.Draw(layer), name)(*args, **kwargs)
            self.img.alpha_composite(layer)
        return call


def font(path, size):
    return ImageFont.truetype(path, size)


def tracked_width(text, f, tr):
    return sum(f.getlength(c) + tr for c in text) - tr


def draw_tracked(d, xy, text, f, fill, tr=0):
    x, y = xy
    for c in text:
        d.text((x, y), c, font=f, fill=fill)
        x += f.getlength(c) + tr


def shadow_text(img, xy, text, f, fill, tr=0, blur=14, off=(6, 9), glow=None):
    """Soft drop shadow (and an optional restrained glow) under heavy type, for phone-browse contrast."""
    layer = Image.new("RGBA", img.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(layer)
    draw_tracked(d, (xy[0] + off[0], xy[1] + off[1]), text, f, (0, 0, 0, 235), tr)
    img.alpha_composite(layer.filter(ImageFilter.GaussianBlur(blur)))
    if glow:
        g = Image.new("RGBA", img.size, (0, 0, 0, 0))
        draw_tracked(ImageDraw.Draw(g), xy, text, f, glow + (110,), tr)
        img.alpha_composite(g.filter(ImageFilter.GaussianBlur(22)))
    draw_tracked(ImageDraw.Draw(img), xy, text, f, fill, tr)


def dashed_line(d, a, b, fill, width=4, dash=18, gap=12):
    (x0, y0), (x1, y1) = a, b
    length = math.hypot(x1 - x0, y1 - y0)
    ux, uy = (x1 - x0) / length, (y1 - y0) / length
    t = 0.0
    while t < length:
        e = min(t + dash, length)
        d.line([(x0 + ux * t, y0 + uy * t), (x0 + ux * e, y0 + uy * e)], fill=fill, width=width)
        t = e + gap


def arrow_head(d, tip, frm, fill, size=22):
    ang = math.atan2(tip[1] - frm[1], tip[0] - frm[0])
    pts = [tip]
    for s in (-1, 1):
        a = ang + math.pi + s * 0.45
        pts.append((tip[0] + size * math.cos(a), tip[1] + size * math.sin(a)))
    d.polygon(pts, fill=fill)


def glow_layer(img, draw_fn, colour, blur=16, alpha=150):
    g = Image.new("RGBA", img.size, (0, 0, 0, 0))
    draw_fn(ImageDraw.Draw(g), colour + (alpha,))
    img.alpha_composite(g.filter(ImageFilter.GaussianBlur(blur)))
    draw_fn(ImageDraw.Draw(img), colour + (255,))


def background(img):
    d = BlendDraw(img)
    for x in range(0, W, 40):
        d.line([(x, 0), (x, H)], fill=GRID + (26 if x % 200 == 0 else 11,), width=1)
    for y in range(0, H, 40):
        d.line([(0, y), (W, y)], fill=GRID + (26 if y % 200 == 0 else 11,), width=1)
    # faint blueprint cross-hatch
    for k in range(-H, W, 56):
        d.line([(k, 0), (k + H, H)], fill=GRID + (6,), width=1)
        d.line([(k + H, 0), (k, H)], fill=GRID + (6,), width=1)


def diagram(img):
    d = BlendDraw(img)
    mono_s, mono_m = font(MONO, 26), font(MONO, 30)

    # fuselage skin section with frames and stringers (side elevation, looking at the left side)
    sx0, sy0, sx1, sy1 = 90, 150, 960, 930
    d.rounded_rectangle([sx0, sy0, sx1, sy1], 18, fill=(18, 24, 36, 235), outline=CYAN + (120,), width=2)
    for x in range(sx0 + 70, sx1, 110):
        d.line([(x, sy0 + 8), (x, sy1 - 8)], fill=CYAN + (22,), width=3)
    for y in range(sy0 + 60, sy1, 90):
        d.line([(sx0 + 8, y), (sx1 - 8, y)], fill=CYAN + (14,), width=2)
    # cabin windows either side of the plug
    for wx in (180, 830):
        for wy in (330,):
            d.rounded_rectangle([wx - 42, wy - 62, wx + 42, wy + 62], 34, outline=CYAN + (150,), width=4)

    # the door plug
    px0, py0, px1, py1 = 330, 200, 690, 860
    def plug(dd, col):
        dd.rounded_rectangle([px0, py0, px1, py1], 46, outline=col, width=7)
    d.rounded_rectangle([px0, py0, px1, py1], 46, fill=(24, 34, 52, 255))
    glow_layer(img, plug, CYAN, blur=10, alpha=120)
    d = BlendDraw(img)
    d.rounded_rectangle([px0 + 128, 300, px1 - 128, 470], 50, outline=CYAN + (200,), width=5)  # plug window
    # stop pads / stop pins along both edges
    for y in range(260, 820, 52):
        for x in (px0 - 4, px1 - 14):
            d.rectangle([x, y, x + 18, y + 22], fill=CYAN + (110,))
    draw_tracked(d, (px0 + 64, 560), "MID EXIT", mono_m, CYAN + (210,), 2)
    draw_tracked(d, (px0 + 52, 600), "DOOR PLUG", mono_m, CYAN + (210,), 2)

    # the 4 bolt positions: 2 upper guide track, 2 lower vertical movement arrestor; all empty
    bolts = [(px0 + 34, 236), (px1 - 34, 236), (px0 + 34, 790), (px1 - 34, 790)]
    for bx, by in bolts:
        def ring(dd, col, bx=bx, by=by):
            dd.ellipse([bx - 30, by - 30, bx + 30, by + 30], outline=col, width=7)
            dd.line([(bx - 15, by - 15), (bx + 15, by + 15)], fill=col, width=7)
            dd.line([(bx - 15, by + 15), (bx + 15, by - 15)], fill=col, width=7)
        d.ellipse([bx - 30, by - 30, bx + 30, by + 30], fill=BG + (255,))
        glow_layer(img, ring, RED, blur=14, alpha=200)
    d = BlendDraw(img)

    # warning bracket around the plug (yellow, neon)
    def bracket(dd, col):
        m, L = 44, 120
        x0, y0, x1, y1 = px0 - m, py0 - m + 10, px1 + m, py1 + m - 10
        for (cx, cy, hx, vy) in ((x0, y0, 1, 1), (x1, y0, -1, 1), (x0, y1, 1, -1), (x1, y1, -1, -1)):
            dd.line([(cx, cy), (cx + hx * L, cy)], fill=col, width=9)
            dd.line([(cx, cy), (cx, cy + vy * L)], fill=col, width=9)
    glow_layer(img, bracket, YELLOW, blur=18, alpha=170)
    d = BlendDraw(img)

    # label + dashed guide arrows to each empty bolt hole
    lab_f = font(BOLD, 54)
    label = "4 MISSING BOLTS"
    lw = tracked_width(label, lab_f, 3)
    lx, ly = 510 - lw / 2, 960
    d.rounded_rectangle([lx - 28, ly - 14, lx + lw + 28, ly + 74], 12, fill=(0, 0, 0, 200), outline=YELLOW, width=4)
    shadow_text(img, (lx, ly), label, lab_f, YELLOW, tr=3, blur=8, off=(3, 4))
    d = BlendDraw(img)
    # elbow guides run outside the plug: from the label, out, up, then in to each empty hole
    lane_l, lane_r = px0 - 110, px1 + 110
    for (bx, by) in bolts:
        left = bx < (px0 + px1) / 2
        lane = lane_l if left else lane_r
        start = (lx - 28, ly + 30) if left else (lx + lw + 28, ly + 30)
        corner = (lane, ly + 30)
        bend = (lane, by)
        tip = (bx - 42, by) if left else (bx + 42, by)
        dashed_line(d, start, corner, YELLOW + (235,), width=4)
        dashed_line(d, corner, bend, YELLOW + (235,), width=4)
        dashed_line(d, bend, tip, YELLOW + (235,), width=4)
        arrow_head(d, tip, bend, YELLOW + (255,))

    # honesty label and source tag
    tag = "RECONSTRUCTION"
    tf = font(MONO, 36)
    tw = tracked_width(tag, tf, 3)
    d.rounded_rectangle([sx0 + 18, sy0 - 74, sx0 + 18 + tw + 36, sy0 - 18], 8, fill=(0, 0, 0, 210),
                        outline=SLATE + (200,), width=2)
    draw_tracked(d, (sx0 + 36, sy0 - 69), tag, tf, WHITE, 3)
    draw_tracked(d, (sx0 + tw + 92, sy0 - 62), "737-9 · LEFT MID EXIT DOOR PLUG", mono_s, SLATE, 1)


def right_panel(img):
    # dark translucent vignette from the right edge
    v = Image.new("RGBA", img.size, (0, 0, 0, 0))
    vd = ImageDraw.Draw(v)
    start = 900
    for x in range(start, W):
        a = int(225 * min(1.0, ((x - start) / 300) ** 0.8))
        vd.line([(x, 0), (x, H)], fill=(4, 7, 15, a))
    img.alpha_composite(v)
    d = BlendDraw(img)
    x0 = 1060

    # pill badge
    bf = font(BOLD, 44)
    badge = "NTSB FINDING"
    bw = tracked_width(badge, bf, 5)
    sh = Image.new("RGBA", img.size, (0, 0, 0, 0))
    ImageDraw.Draw(sh).rounded_rectangle([x0 + 4, 184, x0 + bw + 84, 266], 41, fill=(0, 0, 0, 200))
    img.alpha_composite(sh.filter(ImageFilter.GaussianBlur(10)))
    d.rounded_rectangle([x0, 176, x0 + bw + 80, 258], 41, fill=RED)
    draw_tracked(d, (x0 + 40, 190), badge, bf, WHITE, 5)

    shadow_text(img, (x0 - 6, 300), "MISSING", font(BOLD, 168), WHITE, tr=2)
    shadow_text(img, (x0 - 8, 500), "4 BOLTS", font(BOLD, 188), YELLOW, tr=0, blur=16, glow=YELLOW)
    shadow_text(img, (x0, 772), "154 FLIGHTS UNNOTICED", font(BOLD, 62), SLATE, tr=3, blur=8, off=(3, 5))
    d = BlendDraw(img)
    d.line([(x0, 870), (x0 + 220, 870)], fill=RED, width=6)
    draw_tracked(d, (x0, 896), "ALASKA 1282 · 05 JAN 2024", font(MONO, 36), WHITE + (230,), 2)


def main():
    out = Path(sys.argv[1]) if len(sys.argv) > 1 else Path(__file__).with_name("thumb_h_missing_4_bolts.jpg")
    img = Image.new("RGBA", (W, H), BG + (255,))
    background(img)
    diagram(img)
    right_panel(img)
    rgb = img.convert("RGB")
    for q in (95, 92, 88, 84, 80):  # YouTube caps thumbnails at 2 MB
        rgb.save(out, "JPEG", quality=q, subsampling=0, optimize=True, progressive=True)
        if out.stat().st_size < 2_000_000:
            break
    print(f"{out} {out.stat().st_size // 1024} KB q={q}")


if __name__ == "__main__":
    main()
