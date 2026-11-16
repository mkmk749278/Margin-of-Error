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
enc atl_swell cc_atl_heavy.mp4 28 12 crop=1632:918:0:162      # crop keeps the channel's corner logo out
enc rov_tailcone cowork/DOD_110569003.mp4 14 14
