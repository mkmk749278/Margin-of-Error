#!/usr/bin/env python3
"""Three 1280x720 thumbnails (PLAYBOOK §13.3, §13.7) built from 1920x1080 stills of the film itself.

  node scripts/stills.mjs FourMissingBolts OUT 24720,11640,21480 --scale 1
  python3 films/four-missing-bolts/youtube/make_thumbnails.py OUT films/four-missing-bolts/youtube

Every picture is a frame of the film (what is shown is in the film); honesty labels stay on the frame.
Colours from config/brand.yaml: void #0a0d12, failure red #ef4444, warning amber #f59e0b, ink #e5e7eb.
"""
import sys
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = Path(__file__).resolve().parents[3]
BOLD = str(ROOT / "public/fonts/Inter-700.woff2")
MONO = str(ROOT / "public/fonts/JetBrainsMono-700.woff2")
VOID, RED, AMBER, INK = (10, 13, 18), (239, 68, 68), (245, 158, 11), (229, 231, 235)
W, H = 1280, 720


def shadowed(base: Image.Image, xy, text, font, fill, spread=10, tracking=0):
    """Text with a soft dark drop shadow so it holds on a TV home screen and at phone-browse size."""
    layer = Image.new("RGBA", base.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(layer)
    x, y = xy
    for ch in text:
        d.text((x + 4, y + 6), ch, font=font, fill=(0, 0, 0, 230))
        x += font.getlength(ch) + tracking
    layer = layer.filter(ImageFilter.GaussianBlur(spread))
    base.alpha_composite(layer)
    d = ImageDraw.Draw(base)
    x, y = xy
    for ch in text:
        d.text((x, y), ch, font=font, fill=fill)
        x += font.getlength(ch) + tracking


def width(text, font, tracking=0):
    return sum(font.getlength(c) + tracking for c in text) - tracking


def no_bolts(src: Path) -> Image.Image:
    """The reconstruction of the 19 Sep 2023 photograph: three bolt positions circled, nothing in them."""
    im = Image.open(src).convert("RGBA")
    plug = im.crop((200, 100, 1000, 862))
    plug = plug.resize((int(plug.width * 700 / plug.height), 700), Image.LANCZOS)
    out = Image.new("RGBA", (W, H), VOID + (255,))
    out.alpha_composite(plug, (10, 10))
    f1 = ImageFont.truetype(BOLD, 150)
    shadowed(out, (690, 150), "NO", f1, RED, tracking=4)
    shadowed(out, (690, 310), "BOLTS", f1, RED, tracking=4)
    f2 = ImageFont.truetype(MONO, 28)
    shadowed(out, (696, 510), "19 SEP 2023 · RENTON", f2, AMBER, spread=6)
    shadowed(out, (696, 556), "RECONSTRUCTION", f2, AMBER, spread=6)
    return out


def all_four(src: Path) -> Image.Image:
    """NTSB Figure 13 (public domain): the arrestor bolt holes, clean, no bolt marks."""
    im = Image.open(src).convert("RGBA")
    photo = im.crop((140, 114, 1762, 874))
    photo = photo.resize((W, int(W * photo.height / photo.width)), Image.LANCZOS)
    out = Image.new("RGBA", (W, H), VOID + (255,))
    out.alpha_composite(photo, (0, 0))
    shade = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    ImageDraw.Draw(shade).rectangle((0, 430, W, H), fill=VOID + (235,))
    out.alpha_composite(shade.filter(ImageFilter.GaussianBlur(30)))
    f1 = ImageFont.truetype(BOLD, 116)
    t = "4 BOLTS. 0 FOUND."
    # two colours: the count in ink, the finding in red
    x = (W - width(t, f1, 4)) // 2
    shadowed(out, (x, 540), "4 BOLTS.", f1, INK, tracking=4)
    shadowed(out, (x + width("4 BOLTS. ", f1, 4), 540), "0 FOUND.", f1, RED, tracking=4)
    f2 = ImageFont.truetype(MONO, 28)
    shadowed(out, (24, 22), "NTSB AIR-25-04 · FIG. 13", f2, INK, spread=6)
    return out


def no_record(src: Path) -> Image.Image:
    """The removal record that was never written (reconstruction, labelled as in the film)."""
    im = Image.open(src).convert("RGBA")
    card = im.crop((404, 96, 1424, 874))
    card = card.resize((int(card.width * 0.7), int(card.height * 0.7)), Image.LANCZOS).rotate(-3, expand=True, resample=Image.BICUBIC, fillcolor=(0, 0, 0, 0))
    out = Image.new("RGBA", (W, H), VOID + (255,))
    out.alpha_composite(card, (20, (H - card.height) // 2))
    f1 = ImageFont.truetype(BOLD, 132)
    shadowed(out, (790, 170), "NO", f1, INK, tracking=4)
    shadowed(out, (790, 320), "PAPER", f1, RED, tracking=4)
    f2 = ImageFont.truetype(MONO, 26)
    shadowed(out, (796, 500), "THE RECORD NO ONE WROTE", f2, AMBER, spread=6)
    return out


def the_hole(src: Path) -> Image.Image:
    """NTSB Figure 1 (public domain, shown at 0:43): row 26 and the hole, the image US and UK viewers know from the
    news. The real exhibit, so the honesty line is its record id, not a RECONSTRUCTION label."""
    im = Image.open(src).convert("RGBA")
    photo = im  # whole figure, with the report's own seat call-outs: it reads as the record
    scale = H / photo.height
    photo = photo.resize((int(photo.width * scale), H), Image.LANCZOS)
    out = Image.new("RGBA", (W, H), VOID + (255,))
    out.alpha_composite(photo, (-150, 0))
    shade = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    ImageDraw.Draw(shade).rectangle((820, 0, W, H), fill=VOID + (255,))
    out.alpha_composite(shade.filter(ImageFilter.GaussianBlur(50)))
    f1 = ImageFont.truetype(BOLD, 128)
    x = 1240 - width("BOLTS", f1, 4)
    shadowed(out, (x, 170), "NO", f1, INK, tracking=4)
    shadowed(out, (x, 310), "BOLTS", f1, RED, tracking=4)
    f2 = ImageFont.truetype(MONO, 28)
    shadowed(out, (x + 4, 490), "NTSB AIR-25-04 · FIG. 1", f2, AMBER, spread=6)
    return out


def main() -> int:
    if sys.argv[1] == "--hole":  # thumbnail D from the NTSB figure itself: make_thumbnails.py --hole FIG01.jpg OUTDIR
        out = Path(sys.argv[3])
        the_hole(Path(sys.argv[2])).convert("RGB").save(out / "thumb_d_the_hole.jpg", quality=90, optimize=True)
        print(out / "thumb_d_the_hole.jpg")
        return 0
    stills, out = Path(sys.argv[1]), Path(sys.argv[2])
    out.mkdir(parents=True, exist_ok=True)
    for name, fn, frame in (("thumb_a_no_bolts", no_bolts, 24720), ("thumb_b_zero_found", all_four, 11640), ("thumb_c_no_paper", no_record, 21480)):
        fn(stills / f"f{frame:06d}.jpg").convert("RGB").save(out / f"{name}.jpg", quality=90, optimize=True)
        print(out / f"{name}.jpg")
    return 0


if __name__ == "__main__":
    sys.exit(main())
