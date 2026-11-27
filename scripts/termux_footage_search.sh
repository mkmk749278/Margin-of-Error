#!/data/data/com.termux/files/usr/bin/bash
# Search YouTube for licence-clean footage on the owner's phone and put the candidate list on Drive (PLAYBOOK §11.1).
# YouTube refuses the cloud container; the phone's mobile IP works. yt-dlp reads the licence YouTube itself reports.
#
#   curl -sL https://raw.githubusercontent.com/mkmk749278/Margin-of-Error/<branch>/scripts/termux_footage_search.sh \
#     | bash -s -- <slug> <branch>
#
# Reads films/<slug>/scenes/footage_queries.txt from the same branch. Line format:  SHOT_ID|MODE|query
#   MODE cc  : YouTube search with the Creative Commons filter; kept only if the video's licence says Creative Commons.
#   MODE gov : plain YouTube search; kept only if the uploader is an official US federal channel (US federal works are
#              public domain whatever licence label they carry): the list is GOV_CHANNELS below.
# Writes ~/moe_fetch/<slug>/candidates/{candidates.csv, thumbs/*.jpg} and copies the folder to Drive
# Margin-of-Error/<slug>/footage/candidates/. Re-running skips videos already read. Needs the rclone remote "moe"
# (made by termux_fetch_to_drive.sh on its first run; this script makes it too if missing).
set -uo pipefail
SLUG="${1:?usage: termux_footage_search.sh <slug> [branch]}"; BRANCH="${2:-main}"
MOE_FOLDER_ID=1-_G3XZkhZNlziKrdMrc3baMqOFcxjcfn
RAW="https://raw.githubusercontent.com/mkmk749278/Margin-of-Error/$BRANCH"
PER_QUERY=12
GOV_CHANNELS='^(U\.?S\.? Coast Guard|United States Coast Guard|USCG|NTSB|NTSBgov|National Transportation Safety Board|NOAA Ocean Exploration|NOAA|NOAA Ocean Service|DVIDS|DVIDSHUB|U\.S\. Navy|Naval Sea Systems Command|NASA|U\.S\. Department of Energy|US Department of Energy|Energy\.gov|Office of Electricity|Bonneville Power Administration|BPA|Western Area Power Administration|WAPA|U\.S\. Army Corps of Engineers|USACE|U\.S\. Department of Commerce|Bureau of Reclamation)$'
NEWS='(news|tv|cnn|bbc|abc|cbs|nbc|fox|sky|reuters|associated press|\bap\b|guardian|times|post|global|ctv|cbc|7news|9news|wion|insider|vice|telegraph|independent|daily|channel ?4|itv|al jazeera|euronews|bloomberg|cnbc|msnbc|nyt|wsj|usa today|inside edition|60 minutes|dateline|documentary|no copyright|free footage)'
OUT="$HOME/moe_fetch/$SLUG/candidates"; mkdir -p "$OUT/thumbs" && cd "$OUT" || exit 1

command -v rclone >/dev/null && command -v python3 >/dev/null && command -v node >/dev/null \
  || { pkg update -y && pkg install -y python ffmpeg nodejs rclone; }
python3 -m pip show yt-dlp 2>/dev/null | grep -q "^Version: 2026.8.19" || python3 -m pip install -q "yt-dlp==2026.8.19"
if ! rclone listremotes | grep -q "^moe:$"; then
  echo "One-time Google Drive sign-in: a browser opens; choose the account that owns the Margin-of-Error folder and tap Allow."
  rclone config create moe drive scope=drive root_folder_id="$MOE_FOLDER_ID" || { echo "rclone sign-in failed" >&2; exit 3; }
fi

curl -sfL "$RAW/films/$SLUG/scenes/footage_queries.txt" -o queries.txt || { echo "no query list for $SLUG on $BRANCH" >&2; exit 2; }
[[ -f candidates.csv ]] || echo "shot,mode,query,id,url,title,channel,licence,duration_s,upload_date,views" > candidates.csv
touch seen.txt
total=$(grep -cv '^\s*\(#\|$\)' queries.txt); q=0; kept=0
while IFS='|' read -r shot mode query; do
  [[ -z "${shot// }" || "$shot" == \#* ]] && continue
  q=$((q + 1)); echo "== $q/$total [$shot/$mode] $query"
  enc=$(python3 -c 'import sys,urllib.parse;print(urllib.parse.quote_plus(sys.argv[1]))' "$query")
  if [[ "$mode" == cc ]]; then src="https://www.youtube.com/results?search_query=$enc&sp=EgIwAQ%253D%253D"
  else src="ytsearch$PER_QUERY:$query"; fi
  ids=$(yt-dlp --js-runtimes node --flat-playlist --playlist-end "$PER_QUERY" --print id --no-warnings "$src" 2>/dev/null)
  for id in $ids; do
    grep -qx "$id" seen.txt && continue; echo "$id" >> seen.txt
    meta=$(yt-dlp --js-runtimes node --skip-download --no-warnings \
      --print "%(title)s	%(channel)s	%(license)s	%(duration)s	%(upload_date)s	%(view_count)s	%(thumbnail)s" \
      "https://www.youtube.com/watch?v=$id" 2>/dev/null | head -1)
    [[ -z "$meta" ]] && continue
    IFS=$'\t' read -r title chan lic dur date views thumb <<< "$meta"
    keep=no
    if [[ "$mode" == cc ]]; then
      [[ "$lic" == *"Creative Commons"* ]] && ! echo "$chan" | grep -qiE "$NEWS" && keep=yes
    else
      echo "$chan" | grep -qE "$GOV_CHANNELS" && keep=yes
    fi
    [[ $keep == yes ]] || continue
    kept=$((kept + 1)); echo "   + $chan · $lic · ${dur}s · $title"
    curl -sfL -m 30 -o "thumbs/${shot}_$id.jpg" "$thumb" || true
    printf '%s,%s,"%s",%s,https://www.youtube.com/watch?v=%s,"%s","%s","%s",%s,%s,%s\n' \
      "$shot" "$mode" "${query//\"/\'}" "$id" "$id" "${title//\"/\'}" "${chan//\"/\'}" "$lic" "$dur" "$date" "$views" >> candidates.csv
  done
done < queries.txt
echo "kept $kept candidates from $q queries; uploading to Drive $SLUG/footage/candidates/"
rclone copy "$OUT" "moe:$SLUG/footage/candidates" --exclude seen.txt && echo "done: tell the session 'candidates are on Drive'"
