#!/usr/bin/env python3
"""One comparison sheet for the channel-art concepts (PLAYBOOK §6.2), sized to read on a phone.

  python3 scripts/brand_sheet.py assets/brand OUT.jpg

Per concept: the avatar as YouTube crops it (a circle) large, at channel-page size and at comment size; the watermark
on a void video corner; the banner's 1546x423 safe area (what a phone shows) and the full 2560 strip (desktop).
"""
import sys
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
BOLD = str(ROOT / "public/fonts/Inter-700.woff2")
MONO = str(ROOT / "public/fonts/JetBrainsMono-500.woff2")
VOID, CARD, BORDER, INK, SUB = (10, 13, 18), (18, 24, 36), (30, 41, 59), (229, 231, 235), (148, 163, 184)
CONCEPTS = [("a_redline", "A · REDLINE", "The gauge: the needle sits in the last band before the red."),
            ("b_trace", "B · TRACE", "The M as a load trace: one peak short of the limit, one through it."),
            ("c_tolerance", "C · TOLERANCE", "The ± of a margin of error and a tolerance; the minus has fractured.")]


def circle(im: Image.Image, d: int) -> Image.Image:
    im = im.resize((d, d), Image.LANCZOS)
    m = Image.new("L", (d * 4, d * 4), 0)
    ImageDraw.Draw(m).ellipse((0, 0, d * 4 - 1, d * 4 - 1), fill=255)
    out = Image.new("RGBA", (d, d), (0, 0, 0, 0))
    out.paste(im, (0, 0), m.resize((d, d), Image.LANCZOS))
    return out


def main(src: Path, dst: Path) -> None:
    W, RH = 2200, 880
    sheet = Image.new("RGB", (W, 140 + RH * 3), VOID)
    d = ImageDraw.Draw(sheet)
    d.text((60, 46), "MARGIN OF ERROR · CHANNEL ART · 3 CONCEPTS", font=ImageFont.truetype(BOLD, 48), fill=INK)
    for i, (key, name, line) in enumerate(CONCEPTS):
        y = 140 + i * RH
        d.rounded_rectangle((40, y, W - 40, y + RH - 40), 18, fill=CARD, outline=BORDER, width=2)
        d.text((80, y + 30), name, font=ImageFont.truetype(BOLD, 44), fill=INK)
        d.text((80, y + 90), line, font=ImageFont.truetype(MONO, 30), fill=SUB)
        av = Image.open(src / f"{key}_avatar_800.png").convert("RGB")
        sheet.paste(circle(av, 420), (80, y + 160), circle(av, 420))
        for j, s in enumerate((98, 40)):
            c = circle(av, s)
            sheet.paste(c, (530, y + 200 + j * 150), c)
            d.text((530 + s + 20, y + 200 + j * 150 + s // 2 - 16), f"{s} px", font=ImageFont.truetype(MONO, 26), fill=SUB)
        corner = Image.new("RGB", (300, 200), (40, 48, 60))
        wm = Image.open(src / f"{key}_watermark_150.png").convert("RGBA").resize((60, 60), Image.LANCZOS)
        corner.paste(wm, (220, 120), wm)
        sheet.paste(corner, (530, y + 440))
        d.text((530, y + 650), "watermark", font=ImageFont.truetype(MONO, 26), fill=SUB)
        bn = Image.open(src / f"{key}_banner_2560x1440.jpg").convert("RGB")
        f = ImageFont.truetype(MONO, 26)
        d.text((870, y + 150), "banner · phone (1546 x 423 safe area)", font=f, fill=SUB)
        safe = bn.crop((507, 508, 2053, 931)).resize((1240, 339), Image.LANCZOS)
        sheet.paste(safe, (870, y + 190))
        d.text((870, y + 560), "banner · desktop (full 2560 strip)", font=f, fill=SUB)
        strip = bn.crop((0, 508, 2560, 931)).resize((1240, 205), Image.LANCZOS)
        sheet.paste(strip, (870, y + 600))
        for (a, b) in ((190, 529), (600, 805)):
            d.rectangle((869, y + a - 1, 870 + 1240, y + b), outline=BORDER, width=2)
    sheet.save(dst, quality=90)


if __name__ == "__main__":
    main(Path(sys.argv[1]), Path(sys.argv[2]))
