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


def fit(lines, max_w, start=200):
    """The largest Inter bold size (<= start) at which every line fits max_w with 4 px tracking."""
    size = start
    while size > 40 and max(width(t, ImageFont.truetype(BOLD, size), 4) for t in lines) > max_w:
        size -= 2
    return ImageFont.truetype(BOLD, size)


def flights(src: Path) -> Image.Image:
    """Title A's thumbnail: NTSB Fig. 1 (the hole, row 26) and the number that breaks the intuition:
    154 flights with no bolts (C22: 154 cycles at the accident; all four bolts missing since the factory)."""
    im = Image.open(src).convert("RGBA")
    photo = im.resize((int(im.width * H / im.height), H), Image.LANCZOS)
    out = Image.new("RGBA", (W, H), VOID + (255,))
    out.alpha_composite(photo, (-150, 0))  # keeps the report's "Seat 26A" call-out whole
    shade = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    ImageDraw.Draw(shade).rectangle((770, 0, W, H), fill=VOID + (255,))
    out.alpha_composite(shade.filter(ImageFilter.GaussianBlur(50)))
    x0, right = 790, 1250
    big = fit(["154"], right - x0, 230)
    mid = fit(["FLIGHTS", "NO BOLTS"], right - x0, 120)
    shadowed(out, (x0, 70), "154", big, AMBER, tracking=4)
    shadowed(out, (x0, 300), "FLIGHTS", mid, INK, tracking=4)
    shadowed(out, (x0, 300 + int(mid.size * 1.12)), "NO BOLTS", mid, RED, tracking=4)
    f2 = ImageFont.truetype(MONO, 26)
    shadowed(out, (x0 + 4, 640), "NTSB AIR-25-04 · FIG. 1", f2, INK, spread=6)
    return out


def days(still: Path, fig01: Path) -> Image.Image:
    """Title B's thumbnail: before and after, nothing on top of either picture. Left, the film's labelled
    reconstruction of the 19 Sep 2023 photograph (bolt positions circled, empty); right, NTSB Fig. 1 on 05 Jan 2024.
    The number between them is the 108 days (C69)."""
    top, ph = 200, H - 200
    out = Image.new("RGBA", (W, H), VOID + (255,))
    rec = Image.open(still).convert("RGBA").crop((150, 90, 1150, 860))  # the plug, above the frame's own captions
    rec = rec.resize((int(rec.width * ph / rec.height), ph), Image.LANCZOS)
    cx = rec.width // 2 - 60
    rec = rec.crop((cx - 315, 0, cx + 315, ph))
    out.alpha_composite(rec, (0, top))
    hole = Image.open(fig01).convert("RGBA").crop((150, 170, 1000, 848))  # below the call-outs
    hole = hole.resize((int(hole.width * ph / hole.height), ph), Image.LANCZOS).crop((0, 0, 630, ph))
    out.alpha_composite(hole, (650, top))
    f1 = ImageFont.truetype(BOLD, 128)
    shadowed(out, ((W - width("108 DAYS", f1, 4)) // 2, 6), "108 DAYS", f1, INK, tracking=4)
    f2 = ImageFont.truetype(MONO, 30)
    f3 = ImageFont.truetype(MONO, 22)
    shadowed(out, (20, 150), "19 SEP 2023 · NO BOLTS", f2, AMBER, spread=6)
    shadowed(out, (W - 20 - width("05 JAN 2024", f2), 150), "05 JAN 2024", f2, RED, spread=6)
    shadowed(out, (20, H - 40), "RECONSTRUCTION", f3, AMBER, spread=6)
    shadowed(out, (W - 20 - width("NTSB AIR-25-04 · FIG. 1", f3), H - 40), "NTSB AIR-25-04 · FIG. 1", f3, INK, spread=6)
    return out


def main() -> int:
    if sys.argv[1] == "--curious":  # make_thumbnails.py --curious FIG01.jpg STILL_6m45s.png OUTDIR
        fig01, still, out = Path(sys.argv[2]), Path(sys.argv[3]), Path(sys.argv[4])
        flights(fig01).convert("RGB").save(out / "thumb_e_154_flights.jpg", quality=90, optimize=True)
        days(still, fig01).convert("RGB").save(out / "thumb_f_108_days.jpg", quality=90, optimize=True)
        print(out / "thumb_e_154_flights.jpg", out / "thumb_f_108_days.jpg")
        return 0
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
