#!/usr/bin/env python3
"""Upload one video to this channel with the YouTube Data API (resumable), optionally scheduled.

Uses only YT_CLIENT_ID, YT_CLIENT_SECRET and YT_REFRESH_TOKEN_MARGINOFERROR (scope youtube.force-ssl); never print them.

  python3 scripts/yt_upload.py FILE --sheet films/shorts_upload.md --key EP1 [--publish-at 2026-11-10T17:00:00Z]
      title and description = the first two code blocks under the sheet heading that starts "## <KEY> ·"
  python3 scripts/yt_upload.py FILE --title T --description-file D [--publish-at …] [--thumbnail JPG]

Without --publish-at the video goes up public at once. Always: category Science & Technology (28), English, not made
for kids, "altered or synthetic content" No (owner, 10 NOV 2026).
The Shorts "Related video" field is not in the API: the film link in the description carries it.
"""
import argparse, json, os, re, sys, time, urllib.error, urllib.parse, urllib.request


def token() -> str:
    data = urllib.parse.urlencode(dict(client_id=os.environ["YT_CLIENT_ID"], client_secret=os.environ["YT_CLIENT_SECRET"],
                                       refresh_token=os.environ["YT_REFRESH_TOKEN_MARGINOFERROR"],
                                       grant_type="refresh_token")).encode()
    return json.load(urllib.request.urlopen(urllib.request.Request("https://oauth2.googleapis.com/token", data=data)))["access_token"]


def from_sheet(sheet: str, key: str) -> tuple[str, str]:
    text = open(sheet, encoding="utf-8").read()
    m = re.search(rf"^## {re.escape(key)} ·.*?$(.*?)(?=^## |\Z)", text, re.S | re.M)
    if not m:
        raise SystemExit(f"no section '## {key} ·' in {sheet}")
    blocks = re.findall(r"```\n(.*?)\n```", m.group(1), re.S)
    if len(blocks) < 2:
        raise SystemExit(f"section {key}: needs a title block and a description block")
    title, desc = blocks[0].strip(), blocks[1].strip()
    if "<" in desc:
        raise SystemExit(f"section {key}: the description still has a placeholder")
    return title, desc


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("file")
    ap.add_argument("--sheet"); ap.add_argument("--key")
    ap.add_argument("--title"); ap.add_argument("--description-file")
    ap.add_argument("--publish-at", help="RFC3339 UTC, e.g. 2026-11-10T17:00:00Z (uploads private, then publishes)")
    ap.add_argument("--thumbnail")
    a = ap.parse_args()
    if a.sheet:
        title, desc = from_sheet(a.sheet, a.key)
    else:
        title, desc = a.title, open(a.description_file, encoding="utf-8").read().strip()
    if len(title) > 100:
        raise SystemExit(f"title is {len(title)} characters (limit 100)")
    if "calibrated synthetic voice model (Marcus)" not in desc:
        raise SystemExit("description lacks the voice note (CLAUDE.md, word for word)")
    tags = re.findall(r"#(\w+)", desc)
    status = {"privacyStatus": "private" if a.publish_at else "public", "selfDeclaredMadeForKids": False,
              "containsSyntheticMedia": False, "embeddable": True}
    if a.publish_at:
        status["publishAt"] = a.publish_at
    body = {"snippet": {"title": title, "description": desc, "tags": tags, "categoryId": "28",
                        "defaultLanguage": "en", "defaultAudioLanguage": "en"}, "status": status}
    hdr = {"Authorization": "Bearer " + token()}
    size = os.path.getsize(a.file)
    init = urllib.request.Request(
        "https://www.googleapis.com/upload/youtube/v3/videos?uploadType=resumable&part=snippet,status",
        data=json.dumps(body).encode(), method="POST",
        headers={**hdr, "Content-Type": "application/json; charset=UTF-8",
                 "X-Upload-Content-Type": "video/mp4", "X-Upload-Content-Length": str(size)})
    url = urllib.request.urlopen(init).headers["Location"]
    for attempt in range(5):
        try:
            with open(a.file, "rb") as fh:
                # streamed from disk (a 4K master is gigabytes); a retry restarts the whole file
                put = urllib.request.Request(url, data=fh, method="PUT",
                                             headers={**hdr, "Content-Type": "video/mp4", "Content-Length": str(size)})
                vid = json.load(urllib.request.urlopen(put, timeout=3600))
            break
        except (urllib.error.URLError, TimeoutError) as e:
            if attempt == 4:
                raise
            print(f"upload retry {attempt + 1}: {e}", file=sys.stderr); time.sleep(2 ** (attempt + 1))
    print(f"{vid['id']}  https://youtu.be/{vid['id']}  {vid['status']['privacyStatus']}"
          f"{'  publishes ' + a.publish_at if a.publish_at else ''}  upload {vid['status'].get('uploadStatus')}  {title}")
    if a.thumbnail:
        req = urllib.request.Request(
            f"https://www.googleapis.com/upload/youtube/v3/thumbnails/set?videoId={vid['id']}",
            data=open(a.thumbnail, "rb").read(), method="POST", headers={**hdr, "Content-Type": "image/jpeg"})
        try:
            urllib.request.urlopen(req); print("thumbnail set")
        except urllib.error.HTTPError as e:
            print(f"thumbnail not set (HTTP {e.code}): {e.read()[:300]!r}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
