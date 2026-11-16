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
