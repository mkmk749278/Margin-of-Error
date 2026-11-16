#!/data/data/com.termux/files/usr/bin/bash
# Fetch YouTube captions (and the .info.json) for long official videos, so the session can find each quote's timecode
# before asking for a clip range (PLAYBOOK §11.1, §11.2). No video is downloaded: a few hundred KB per video.
#   curl -sL https://raw.githubusercontent.com/mkmk749278/Margin-of-Error/<branch>/scripts/termux_captions_to_drive.sh \
#     | bash -s -- <slug> VIDEO_ID [VIDEO_ID ...]
# Puts the files in Drive Margin-of-Error/<slug>/captions/. Needs the rclone remote "moe" (see termux_fetch_to_drive.sh).
set -uo pipefail
SLUG="${1:?usage: termux_captions_to_drive.sh <slug> VIDEO_ID ...}"; shift
OUT="$HOME/moe_fetch/$SLUG/captions"; mkdir -p "$OUT" && cd "$OUT" || exit 1
command -v rclone >/dev/null && command -v python3 >/dev/null && command -v node >/dev/null \
  || { pkg update -y && pkg install -y python ffmpeg nodejs rclone; }
python3 -m pip show yt-dlp 2>/dev/null | grep -q "^Version: 2026.8.19" || python3 -m pip install -q "yt-dlp==2026.8.19"
rclone listremotes | grep -q "^moe:$" || { echo "Run termux_fetch_to_drive.sh once first (it sets up Drive)." >&2; exit 3; }
for id in "$@"; do
  echo "== $id"
  yt-dlp --js-runtimes node --skip-download --no-warnings --write-subs --write-auto-subs --sub-langs "en.*,en" \
    --sub-format vtt --write-info-json -o "%(id)s" "https://www.youtube.com/watch?v=$id" || echo "   failed: $id" >&2
done
rclone copy . "moe:$SLUG/captions" && echo "Done. Tell Claude: captions are on Drive ($SLUG/captions)."
