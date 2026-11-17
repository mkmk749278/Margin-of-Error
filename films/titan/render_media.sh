#!/usr/bin/env bash
# Builds public/films/titan/ (the render media) from the Drive footage pulled to assets/titan/footage.
# Excerpts only, 1920x1080 30 fps, bitrate-capped; then: scripts/upload_gdrive.sh --sub titan/render-media …
set -euo pipefail
cd "$(dirname "$0")/../.."
SRC=assets/titan/footage; OUT=public/films/titan/footage; mkdir -p "$OUT"
enc() { # name src start dur [extra vf]
  ffmpeg -v error -y -ss "$3" -i "$SRC/$2" -t "$4" -an -vf "${5:+$5,}scale=1920:1080,fps=30" \
    -c:v libx264 -preset medium -b:v 8M -maxrate 10M -bufsize 16M -pix_fmt yuv420p "$OUT/$1.mp4"; echo "$1"; }
# Act I
[[ -f "$OUT/atl_swell.mp4" ]] || enc atl_swell cc_atl_heavy.mp4 28 12 crop=1632:918:0:162      # crop keeps the channel's corner logo out
[[ -f "$OUT/rov_tailcone.mp4" ]] || enc rov_tailcone cowork/DOD_110569003.mp4 14 14
# Act II
enc noaa_bow gov_noaa_titanic.mp4 18 10 "crop=1440:810:0:135"      # NOAA / Ronald H. Brown, ROV Hercules, 2004
enc afp_place cc_afp_tecnalia.mp4 133 12 "crop=iw*0.82:ih*0.82:iw*0.09:0"   # bottom caption band cropped
enc afp_robot cc_afp_tecnalia.mp4 66 10 "crop=iw*0.82:ih*0.82:iw*0.09:0"
enc ndt_ring cc_ndt_canister1.mp4 101 12
enc ndt_wave cc_ndt_canister1.mp4 121 8
# Act III: hearing clips, picture only (sound comes from the mix), from 0.4 s before the cut to 0.4 s after
enc h_brooks_flashlight h_brooks_flashlight.mp4 55.085 4.650
enc h_brooks_decision h_brooks_decision.mp4 1.915 10.340
enc h_brooks_diveagain h_brooks_diveagain.mp4 2.005 15.030
enc h_brooks_linearity h_brooks_linearity.mp4 5.625 14.570
enc h_kramer_time h_kramer_time.mp4 9.985 6.950
enc h_brooks_cost h_brooks_cost.mp4 9.615 8.740
enc h_brooks_safety h_brooks_safety.mp4 14.095 8.510
enc h_brooks_oath h_brooks_oath.mp4 0 34
# photos (DVIDS, public domain): EXIF-rotated, 2400 px max
python3 - <<'PY'
from PIL import Image, ImageOps
import os
os.makedirs('public/films/titan/photos', exist_ok=True)
for n, name in [('9057367', 'hull1_2019'), ('9057369', 'cf_debris')]:
    im = ImageOps.exif_transpose(Image.open(f'assets/titan/footage/cowork/{n}.jpg')).convert('RGB'); im.thumbnail((2400, 2400))
    im.save(f'public/films/titan/photos/{name}.jpg', quality=88)
PY
enc atl_surface cc_atl_passage.mp4 61 18 "crop=1920:864:0:0"
# Act III: St. John's (CC BY), the winter
enc stj_narrows cc_stjohns_cruisein.mp4 6 14
enc stj_aerial cc_stjohns_harbour.mp4 92 14
enc stj_snow cc_stjohns_snow.mp4 63 14
enc stj_ice cc_stjohns_packice.mp4 69 14
enc rov_debris cowork/DOD_110571004.mp4 22 14
