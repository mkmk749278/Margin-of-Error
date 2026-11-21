#!/usr/bin/env python3
"""Read a film's audience-retention curve against its own timeline: where viewers left, and what was said and shown there.

  python3 scripts/retention_read.py films/<slug> --csv FILE      # Studio export (.csv, or the .zip Studio downloads)
  python3 scripts/retention_read.py films/<slug> --api [VIDEO_ID] # YouTube Analytics API (needs yt-analytics.readonly)
  options: --out FILE (default films/<slug>/youtube/retention_<YYYY-MM-DD>.md)   --top N (cliffs, default 5)   --json

The Studio export: Studio (desktop browser, so through Cowork on the laptop) → the video → Analytics → Advanced mode →
Audience retention → the download icon → CSV. Any file with a position column (percent, 0–1 ratio or seconds) and
an absolute-retention column (percent or 0–1 ratio) reads; headers are matched by name, otherwise the first two
numeric columns are used. VIDEO_ID for --api defaults to the youtu.be link in youtube/package.md.

The report (PLAYBOOK §13.6, the 7- and 28-day reads), every time on the film's own clock from vo/timing.json:
  - retention at 0:30, 1:00, the open question, each act turn and the end;
  - the first-30-second loss (the opening broke the package's promise, or the package oversold it);
  - the slide: the median loss per minute across the middle (pacing; the fix is cutting);
  - cliffs: the steepest drops beyond the slide, each with the act, the sentences spoken in that window and the
    scene on screen (from scenes/choreography/), so a drop reads as a line of the film, not a percentage;
  - rewinds: points where the curve rises (viewers went back to see something again).
Resolution: Studio and the API give about 100 points, so each point covers 1% of the film (14 s on a 24-minute film).
A cliff names a window, never a single word. Measured, not predicted; one film's curve is one data point.
"""
from __future__ import annotations

import csv
import io
import json
import os
import re
import statistics
import sys
import urllib.error
import urllib.parse
import urllib.request
import zipfile
from datetime import date
from pathlib import Path

Point = tuple[float, float]  # (seconds into the film, absolute retention %)


def _num(c: str) -> float | None:
    c = c.strip().replace("%", "").replace(",", "")
    m = re.fullmatch(r"(?:(\d+):)?(\d+):(\d+(?:\.\d+)?)", c)
    if m:
        return (int(m.group(1) or 0) * 3600 + int(m.group(2)) * 60 + float(m.group(3)))
    try:
        return float(c)
    except ValueError:
        return None


def _csv_texts(path: Path) -> list[tuple[str, str]]:
    if zipfile.is_zipfile(path):
        with zipfile.ZipFile(path) as z:
            names = sorted((n for n in z.namelist() if n.lower().endswith(".csv")),
                           key=lambda n: (0 if "chart" in n.lower() else 1, n))
            return [(n, z.read(n).decode("utf-8-sig", errors="replace")) for n in names]
    return [(path.name, path.read_text(encoding="utf-8-sig", errors="replace"))]


def parse_rows(text: str) -> tuple[list[tuple[float, float]], str, str] | None:
    """(position, retention) pairs, raw, plus the units guessed for each column."""
    rows = list(csv.reader(io.StringIO(text)))
    if not rows:
        return None
    head = [h.strip().lower() for h in rows[0]]
    pi = next((i for i, h in enumerate(head) if "position" in h or "elapsed" in h or h in ("time", "second")), None)
    ri = next((i for i, h in enumerate(head) if "absolute" in h and "retention" in h), None)
    if ri is None:
        ri = next((i for i, h in enumerate(head) if ("retention" in h or "watch ratio" in h or "audiencewatchratio" in h)
                   and "relative" not in h), None)
    pairs = []
    for r in rows[1:] if (pi is not None or ri is not None) else rows:
        nums = [_num(c) for c in r]
        if pi is not None and ri is not None and max(pi, ri) < len(nums):
            p, v = nums[pi], nums[ri]
        else:
            vals = [n for n in nums if n is not None]
            p, v = (vals[0], vals[1]) if len(vals) >= 2 else (None, None)
        if p is not None and v is not None:
            pairs.append((p, v))
    if len(pairs) < 8:
        return None
    pairs.sort()
    pmax = max(p for p, _ in pairs)
    punit = "ratio" if pmax <= 1.0001 else ("percent" if pmax <= 100.0001 and not any(":" in c for r in rows for c in r)
                                            else "seconds")
    vunit = "ratio" if max(v for _, v in pairs) <= 3.0 else "percent"
    return pairs, punit, vunit


def to_points(pairs: list[tuple[float, float]], punit: str, vunit: str, dur: float) -> list[Point]:
    k = {"ratio": dur, "percent": dur / 100.0, "seconds": 1.0}[punit]
    m = 100.0 if vunit == "ratio" else 1.0
    return [(p * k, v * m) for p, v in pairs]


def load_csv(path: Path, dur: float) -> list[Point]:
    for name, text in _csv_texts(path):
        got = parse_rows(text)
        if got:
            pts = to_points(*got, dur)
            print(f"read {len(pts)} points from {name} (position as {got[1]}, retention as {got[2]})", file=sys.stderr)
            return pts
    raise SystemExit(f"no retention curve found in {path}: need a position and an absolute-retention column, 8+ rows")


def load_api(video: str, dur: float) -> list[Point]:
    def post(url: str, data: dict) -> dict:
        return json.load(urllib.request.urlopen(urllib.request.Request(url, data=urllib.parse.urlencode(data).encode()),
                                                timeout=30))
    try:
        tok = post("https://oauth2.googleapis.com/token", dict(
            client_id=os.environ["YT_CLIENT_ID"], client_secret=os.environ["YT_CLIENT_SECRET"],
            refresh_token=os.environ["YT_REFRESH_TOKEN_MARGINOFERROR"], grant_type="refresh_token"))
    except (KeyError, urllib.error.HTTPError) as e:
        raise SystemExit(f"auth failed: {e}")
    q = dict(ids="channel==MINE", startDate="2026-01-01", endDate=str(date.today()), dimensions="elapsedVideoTimeRatio",
             metrics="audienceWatchRatio", filters=f"video=={video}", sort="elapsedVideoTimeRatio")
    req = urllib.request.Request("https://youtubeanalytics.googleapis.com/v2/reports?" + urllib.parse.urlencode(q),
                                 headers={"Authorization": "Bearer " + tok["access_token"]})
    try:
        r = json.load(urllib.request.urlopen(req, timeout=30))
    except urllib.error.HTTPError as e:
        raise SystemExit(f"Analytics API refused (HTTP {e.code}): the token needs the yt-analytics.readonly scope. "
                         "Use the Studio export with --csv until it is re-authorised.")
    rows = [(float(a), float(b)) for a, b in (r.get("rows") or [])]
    if len(rows) < 8:
        raise SystemExit(f"the API returned {len(rows)} points for {video}: too few views yet for a curve")
    return to_points(rows, "ratio", "ratio", dur)


def video_id(film: Path) -> str | None:
    p = film / "youtube" / "package.md"
    m = re.search(r"youtu\.be/([A-Za-z0-9_-]{11})", p.read_text(encoding="utf-8")) if p.exists() else None
    return m.group(1) if m else None


def scene_marks(film: Path) -> list[tuple[int, str]]:
    """(frame, scene) for every word-locked event in the choreography tables."""
    out = []
    for md in sorted((film / "scenes" / "choreography").glob("*.md")):
        for m in re.finditer(r"^\|\s*`[^`]*`\s*\|\s*`F(\d+)`[^|]*\|\s*([^|]+?)\s*\|", md.read_text(encoding="utf-8"),
                             re.M):
            scene = m.group(2)
            if not scene.startswith("("):
                out.append((int(m.group(1)), scene))
    return sorted(out)


def mmss(t: float) -> str:
    return f"{int(t // 60)}:{int(t % 60):02d}"


def at(pts: list[Point], t: float) -> float:
    if t <= pts[0][0]:
        return pts[0][1]
    for (t0, v0), (t1, v1) in zip(pts, pts[1:]):
        if t0 <= t <= t1:
            return v0 + (v1 - v0) * ((t - t0) / (t1 - t0) if t1 > t0 else 0)
    return pts[-1][1]


def main() -> int:
    a = sys.argv[1:]
    if not a or a[0] in ("-h", "--help") or not Path(a[0]).is_dir():
        print(__doc__)
        return 0 if a and a[0] in ("-h", "--help") else 2
    film = Path(a[0])

    def opt(k: str, default: str | None = None) -> str | None:
        if k not in a:
            return default
        i = a.index(k)
        return a[i + 1] if i + 1 < len(a) and not a[i + 1].startswith("--") else ""

    tl = json.loads((film / "vo" / "timing.json").read_text(encoding="utf-8"))
    dur = float(tl["duration"])
    fps = int(tl.get("fps", 60))
    if opt("--csv"):
        pts, source = load_csv(Path(opt("--csv")), dur), f"Studio export `{Path(opt('--csv')).name}`"
    elif "--api" in a:
        vid = opt("--api") or video_id(film)
        if not vid:
            raise SystemExit("no video id: pass --api VIDEO_ID or put the youtu.be link in youtube/package.md")
        pts, source = load_api(vid, dur), f"YouTube Analytics API, video {vid}"
    else:
        print("pass --csv FILE or --api [VIDEO_ID]")
        return 2
    top = int(opt("--top", "5") or 5)
    sents, chapters = tl["sentences"], tl.get("chapters", [])
    marks = scene_marks(film)
    step = statistics.median(b[0] - a_[0] for a_, b in zip(pts, pts[1:])) or 1.0

    # checkpoints
    checks = [("0:30", 30.0), ("1:00", 60.0)]
    oq = next((h for h in tl.get("holds", []) if "open question" in h.get("why", "")), None)
    if oq:
        checks.append(("the open question", float(oq["filmStart"])))
    checks += [(c["title"], float(c["start"])) for c in chapters if c["start"] > 0]
    checks.append(("the end", dur))
    checks.sort(key=lambda c: c[1])

    # drops per step, the slide across the middle (after 1:00, before the last 5%), cliffs beyond it
    steps = [(t0, t1, v0 - v1) for (t0, v0), (t1, v1) in zip(pts, pts[1:])]
    mid = [d / (t1 - t0) * 60 for t0, t1, d in steps if t0 >= 60 and t1 <= dur * 0.95 and t1 > t0]
    slide = statistics.median(mid) if mid else 0.0
    cands = []
    for t0, t1, d in steps:
        if t0 < 30 or t1 > dur * 0.97 or t1 <= t0:
            continue
        excess = d - slide * (t1 - t0) / 60
        if excess > 0.5:
            cands.append((excess, t0, t1, d))
    cands.sort(reverse=True)
    cliffs = sorted(cands[:top], key=lambda c: c[1])
    rewinds = [(t0, t1, -d) for t0, t1, d in steps if d < -0.3]

    def window(t0: float, t1: float) -> dict:
        said = [s for s in sents if s["end"] > t0 and s["start"] < t1]
        act = next((c["title"] for c in reversed(chapters) if c["start"] <= t0), "")
        f0, f1 = int(t0 * fps), int(t1 * fps)
        scenes = []
        for f, sc in marks:
            if f0 <= f <= f1 and sc not in scenes:
                scenes.append(sc)
        if not scenes:
            before = [sc for f, sc in marks if f < f0]
            scenes = before[-1:]
        holds = [h for h in tl.get("holds", []) if t0 <= h["filmStart"] <= t1]
        return {"act": act, "sentences": [{"id": s["id"], "start": s["start"], "text": s["text"]} for s in said],
                "scenes": scenes, "holds": [h.get("why", "") for h in holds]}

    hook = pts[0][1] - at(pts, 30.0)
    report = {
        "film": film.name, "source": source, "points": len(pts), "seconds_per_point": round(step, 1),
        "duration": dur, "checkpoints": [{"at": n, "t": round(t, 1), "retention": round(at(pts, t), 1)}
                                         for n, t in checks],
        "first_30s_loss": round(hook, 1), "slide_per_min": round(slide, 2),
        "cliffs": [dict(t0=round(t0, 1), t1=round(t1, 1), lost=round(d, 1), beyond_slide=round(ex, 1), **window(t0, t1))
                   for ex, t0, t1, d in cliffs],
        "rewinds": [dict(t0=round(t0, 1), t1=round(t1, 1), gained=round(g, 1), **window(t0, t1))
                    for t0, t1, g in rewinds],
        "average_retention": round(statistics.fmean(v for _, v in pts), 1),
    }
    if "--json" in a:
        print(json.dumps(report, indent=2, ensure_ascii=False))
        return 0

    L = [f"# Retention read: {film.name}, {date.today().strftime('%d %b %Y').upper()}", "",
         f"Source: {source}. {len(pts)} points, one every {step:.0f} s of a {mmss(dur)} film, so each finding names a "
         f"window, not a word. Average retention {report['average_retention']}%. Measured from viewers, not a "
         "prediction; one film's curve is one data point (PLAYBOOK §13.6).", "",
         "## Checkpoints", "", "| Where | Time | Still watching |", "| :--- | ---: | ---: |"]
    L += [f"| {c['at']} | {mmss(c['t'])} | {c['retention']}% |" for c in report["checkpoints"]]
    L += ["", "## The opening and the slide", "",
          f"- **First 30 seconds: {hook:.1f} points lost.** A heavy loss here means sentence 1 did not confirm what the "
          "title and thumbnail promised, or the package promised something the film does not open on (§5.1).",
          f"- **Slide across the middle: {slide:.2f} points a minute** (median, 1:00 to 95%). A steep, even slide is "
          "pacing: the fix is cutting minutes that carry nothing new.", "", "## Cliffs (drops beyond the slide)", ""]
    if not cliffs:
        L.append("None stands out beyond the slide.")
    for c in report["cliffs"]:
        L.append(f"### {mmss(c['t0'])}–{mmss(c['t1'])} · {c['lost']} points ({c['beyond_slide']} beyond the slide) · "
                 f"{c['act']}")
        if c["scenes"]:
            L.append(f"On screen: {', '.join(c['scenes'])}.")
        if c["holds"]:
            L.append(f"Holds in the window: {'; '.join(c['holds'])}.")
        L += [f"- `{mmss(s['start'])}` s{s['id']}: {s['text']}" for s in c["sentences"]] or ["- (no narration: a hold or a clip)"]
        L.append("")
    L += ["## Rewinds (the curve rises)", ""]
    if not rewinds:
        L.append("None.")
    for r in report["rewinds"]:
        first = r["sentences"][0]["text"] if r["sentences"] else "(no narration)"
        L.append(f"- {mmss(r['t0'])}–{mmss(r['t1'])}: +{r['gained']} points · {', '.join(r['scenes']) or r['act']} · "
                 f"\"{first}\"")
    L += ["", "## What to change", "",
          "Write the lesson here: which cliff is the film's fault (a recap, a long setup, a turn with no signpost, a "
          "number not said), which is the package's (the first-30-second loss), and the rule it changes in the "
          "playbook (§16). Low click-through with good retention: the package failed the film (§13.2 fallback title)."]
    out = Path(opt("--out") or film / "youtube" / f"retention_{date.today().isoformat()}.md")
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text("\n".join(L) + "\n", encoding="utf-8")
    print("\n".join(L))
    print(f"\nwritten: {out}", file=sys.stderr)
    return 0


if __name__ == "__main__":
    sys.exit(main())
