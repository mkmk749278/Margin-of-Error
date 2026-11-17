#!/usr/bin/env python3
"""Remove the old voice-note line from every description on this channel (owner, 17 NOV 2026).

Uses only YT_CLIENT_ID, YT_CLIENT_SECRET and YT_REFRESH_TOKEN_MARGINOFERROR; never print them.

  python3 scripts/yt_strip_voice_note.py           # dry run: lists what would change
  python3 scripts/yt_strip_voice_note.py --apply   # saves the edited descriptions

Only the description changes; title, tags, category and languages are sent back as they are.
"""
import argparse, json, re, sys, urllib.parse, urllib.request

sys.path.insert(0, __file__.rsplit("/", 1)[0])
from yt_upload import token  # noqa: E402

API = "https://www.googleapis.com/youtube/v3/"
LINE = re.compile(r"\n*[ \t]*Narrated using the studio's calibrated synthetic voice model \(Marcus\) for forensic clarity\.[ \t]*")


def call(hdr: dict, path: str, params: dict, body: dict | None = None) -> dict:
    url = API + path + "?" + urllib.parse.urlencode(params)
    req = urllib.request.Request(url, headers={**hdr, "Content-Type": "application/json"},
                                 data=json.dumps(body).encode() if body else None, method="PUT" if body else "GET")
    return json.load(urllib.request.urlopen(req))


def strip(desc: str) -> str:
    out = LINE.sub("\n", desc)
    out = re.sub(r"\n{3,}", "\n\n", out)
    # keep a blank line before a trailing hashtag line
    out = re.sub(r"([^\n])\n(#\w+(?: #\w+)*\s*)$", r"\1\n\n\2", out)
    return out.strip()


def main() -> int:
    ap = argparse.ArgumentParser(); ap.add_argument("--apply", action="store_true"); a = ap.parse_args()
    hdr = {"Authorization": "Bearer " + token()}
    ch = call(hdr, "channels", {"part": "contentDetails,snippet", "mine": "true"})["items"][0]
    uploads = ch["contentDetails"]["relatedPlaylists"]["uploads"]
    print(f"channel: {ch['snippet']['title']}")
    ids, page = [], None
    while True:
        p = {"part": "contentDetails", "playlistId": uploads, "maxResults": 50}
        if page:
            p["pageToken"] = page
        r = call(hdr, "playlistItems", p)
        ids += [i["contentDetails"]["videoId"] for i in r["items"]]
        page = r.get("nextPageToken")
        if not page:
            break
    changed = 0
    for k in range(0, len(ids), 50):
        for v in call(hdr, "videos", {"part": "snippet", "id": ",".join(ids[k:k + 50])})["items"]:
            sn = v["snippet"]
            new = strip(sn["description"])
            if new == sn["description"].strip() and not LINE.search(sn["description"]):
                print(f"  ok       {v['id']}  {sn['title']}")
                continue
            changed += 1
            print(f"  {'EDITED ' if a.apply else 'would edit'} {v['id']}  {sn['title']}")
            if a.apply:
                keep = {f: sn[f] for f in ("title", "categoryId", "tags", "defaultLanguage", "defaultAudioLanguage") if f in sn}
                call(hdr, "videos", {"part": "snippet"}, {"id": v["id"], "snippet": {**keep, "description": new}})
    print(f"{len(ids)} videos, {changed} {'edited' if a.apply else 'to edit'}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
