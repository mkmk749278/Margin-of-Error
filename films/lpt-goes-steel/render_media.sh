#!/usr/bin/env bash
# Builds public/films/lpt-goes-steel/ (the render media) from Drive: footage pulled to films/lpt-goes-steel/assets/footage,
# record pages from assets/lpt-goes-steel/records (the PDFs, fetched from their federal and company URLs in claims.csv).
# Excerpts only, 1920x1080 30 fps, bitrate-capped. Pages 1870 px wide (scripts/page_phrases.py's default).
set -euo pipefail
cd "$(dirname "$0")/../.."
SRC=films/lpt-goes-steel/assets/footage; OUT=public/films/lpt-goes-steel/footage; mkdir -p "$OUT"
enc() { # name src start dur
  ffmpeg -v error -y -ss "$3" -i "$SRC/$2" -t "$4" -an -vf "scale=1920:1080,fps=30" \
    -c:v libx264 -preset medium -b:v 8M -maxrate 10M -bufsize 16M -pix_fmt yuv420p "$OUT/$1.mp4"; echo "$1"; }
# hearing clips, picture only (the mix lays the sound from assets/clips), gap before to gap after (holds.json pre/post)
enc clip01 clip01.mp4 29.28 7.70
enc clip02 clip02.mp4 18.20 15.50
PG=public/films/lpt-goes-steel/pages; mkdir -p "$PG"
for p in 1 17 104; do
  pdftoppm -f $p -l $p -scale-to-x 1870 -scale-to-y -1 -jpeg -jpegopt quality=90 -singlefile assets/lpt-goes-steel/records/goes232.pdf "$PG/g232_p$(printf %03d $p)"
done
# photos (Drive lpt-goes-steel/assets/, licences in media_manifest.csv): EXIF-rotated, 2600 px max
python3 - <<'PY'
from PIL import Image, ImageOps
import os
os.makedirs('public/films/lpt-goes-steel/photos', exist_ok=True)
for f in ['lpt_substation_cc0', 'schnabel_rail_16x9_ccbysa4', 'schnabel_rail_side_ccbysa4', 'transformer_core_workshop_ccbysa4']:
    im = ImageOps.exif_transpose(Image.open(f'films/lpt-goes-steel/assets/drive/assets/{f}.jpg')).convert('RGB'); im.thumbnail((2600, 2600))
    im.save(f'public/films/lpt-goes-steel/photos/{f}.jpg', quality=88)
PY
