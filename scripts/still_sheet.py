#!/usr/bin/env python3
"""Contact sheet of stills with the film time and the words being heard (PLAYBOOK §14.2 semantic lock).
  python3 scripts/still_sheet.py films/<slug> STILLS_DIR OUT.jpg [--cols 3]"""
import json, sys, glob, os
from PIL import Image, ImageDraw, ImageFont
film, d, out = sys.argv[1:4]
cols = int(sys.argv[sys.argv.index("--cols") + 1]) if "--cols" in sys.argv else 3
t = json.load(open(os.path.join(film, "vo/timing.json")))
fps = t["fps"]
F = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 15) if os.path.exists("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf") else ImageFont.load_default()
files = sorted(glob.glob(os.path.join(d, "f*.jpg")))
W = 640; H = 360; cap = 44
sheet = Image.new("RGB", (cols * W, ((len(files) + cols - 1) // cols) * (H + cap)), (20, 20, 20))
dr = ImageDraw.Draw(sheet)
for i, f in enumerate(files):
    fr = int(os.path.basename(f)[1:7]); s = fr / fps
    words = [w["w"] for w in t["words"] if w["start"] - 1.2 <= s <= w["end"] + 0.3][-9:]
    im = Image.open(f).convert("RGB").resize((W, H))
    x, y = (i % cols) * W, (i // cols) * (H + cap)
    sheet.paste(im, (x, y + cap))
    dr.text((x + 6, y + 3), f"{int(s//60)}:{s%60:05.2f}  f{fr}", fill=(255, 220, 0), font=F)
    dr.text((x + 6, y + 22), " ".join(words)[:80], fill=(200, 200, 200), font=F)
sheet.save(out, quality=86)
print(out, len(files))
