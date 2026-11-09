#!/usr/bin/env python3
"""Read this channel's public numbers (and Analytics, if the token carries that scope).

Uses only YT_CLIENT_ID, YT_CLIENT_SECRET and YT_REFRESH_TOKEN_MARGINOFERROR; never print them.
Run at the start of every session: python3 scripts/channel_stats.py
"""
import json, os, sys, urllib.error, urllib.parse, urllib.request
from datetime import date, timedelta

def _post(url, data):
    req = urllib.request.Request(url, data=urllib.parse.urlencode(data).encode())
    return json.load(urllib.request.urlopen(req, timeout=30))

def main() -> int:
    try:
        tok = _post("https://oauth2.googleapis.com/token", dict(
            client_id=os.environ["YT_CLIENT_ID"], client_secret=os.environ["YT_CLIENT_SECRET"],
            refresh_token=os.environ["YT_REFRESH_TOKEN_MARGINOFERROR"], grant_type="refresh_token"))
    except (KeyError, urllib.error.HTTPError) as e:
        print(f"auth failed: {e}"); return 1
    hdr = {"Authorization": "Bearer " + tok["access_token"]}

    def get(url, q):
        req = urllib.request.Request(url + "?" + urllib.parse.urlencode(q), headers=hdr)
        try:
            return json.load(urllib.request.urlopen(req, timeout=30))
        except urllib.error.HTTPError as e:
            return {"error": e.code}

    api = "https://www.googleapis.com/youtube/v3/"
    ch = get(api + "channels", dict(part="snippet,statistics,contentDetails", mine="true"))["items"][0]
    s = ch["statistics"]
    print(f"# {ch['snippet']['title']} on {date.today()}: {s['subscriberCount']} subscribers, "
          f"{s['viewCount']} views, {s['videoCount']} videos")
    up = ch["contentDetails"]["relatedPlaylists"]["uploads"]
    ids = [x["contentDetails"]["videoId"] for x in
           get(api + "playlistItems", dict(part="contentDetails", playlistId=up, maxResults=50)).get("items", [])]
    if ids:
        vids = get(api + "videos", dict(part="snippet,statistics,contentDetails,status", id=",".join(ids)))
        for v in vids.get("items", []):
            st = v["statistics"]
            print(f"- {v['snippet']['publishedAt'][:10]} {v['status']['privacyStatus']:8} "
                  f"{v['contentDetails']['duration']:10} views {st.get('viewCount', 0):>6}  "
                  f"likes {st.get('likeCount', 0):>4}  comments {st.get('commentCount', 0):>4}  "
                  f"{v['snippet']['title']}")
    end = date.today(); start = end - timedelta(days=365)
    r = get("https://youtubeanalytics.googleapis.com/v2/reports", dict(
        ids="channel==MINE", startDate=str(start), endDate=str(end),
        metrics="views,estimatedMinutesWatched,averageViewDuration,subscribersGained"))
    if "error" in r:
        print(f"Analytics: not readable (HTTP {r['error']}); the token lacks the yt-analytics.readonly scope. "
              "Watch hours, retention and CTR come from Studio until it is re-authorised.")
    else:
        row = (r.get("rows") or [[0, 0, 0, 0]])[0]
        print(f"Last 365 days: {row[0]} views, {row[1] / 60:.1f} watch hours (all, incl. any not YPP-qualified), "
              f"avg view {row[2]} s, +{row[3]} subscribers")
    return 0

if __name__ == "__main__":
    sys.exit(main())
