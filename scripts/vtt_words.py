#!/usr/bin/env python3
"""Turn a YouTube auto-caption VTT (word-timed <c> tags) into one word per line with its start time,
and search it for phrases. Used to find quote timecodes in public hearing videos (PLAYBOOK §11).

Usage: vtt_words.py FILE.vtt [--find "phrase" ...] [--context 25]
"""
import argparse, re, sys

TS = r"(\d+):(\d\d):(\d\d)\.(\d{3})"

def secs(h, m, s, ms):
    return int(h) * 3600 + int(m) * 60 + int(s) + int(ms) / 1000

def words(path):
    out, seen_line = [], set()
    cue_start = None
    for line in open(path, encoding="utf-8"):
        m = re.match(TS + r" --> ", line)
        if m:
            cue_start = secs(*m.groups()); continue
        if "<c>" not in line and "<" not in line:
            continue  # plain lines repeat the previous cue's text
        line = line.strip()
        if line in seen_line:
            continue
        seen_line.add(line)
        # first word has the cue start; later words carry <hh:mm:ss.mmm><c> word</c>
        first = re.match(r"([^<]+)", line)
        if first and first.group(1).strip():
            for w in first.group(1).split():
                out.append((cue_start, w))
        for t, w in re.findall(r"<" + r"(\d+:\d\d:\d\d\.\d{3})" + r"><c>\s*([^<]*)</c>", line):
            h, mi, s = t.split(":"); s, ms = s.split(".")
            for ww in w.split():
                out.append((secs(h, mi, s, ms), ww))
    return out

def fmt(t):
    return f"{int(t//3600)}:{int(t%3600//60):02d}:{t%60:05.2f}"

def norm(w):
    return re.sub(r"[^a-z0-9']", "", w.lower())

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("vtt"); ap.add_argument("--find", action="append", default=[])
    ap.add_argument("--context", type=int, default=25)
    a = ap.parse_args()
    ws = words(a.vtt); n = [norm(w) for _, w in ws]
    if not a.find:
        for t, w in ws: print(fmt(t), w)
        return
    for phrase in a.find:
        p = [norm(x) for x in phrase.split()]
        hits = [i for i in range(len(n) - len(p) + 1) if n[i:i + len(p)] == p]
        print(f"## '{phrase}': {len(hits)} hit(s)")
        for i in hits:
            lo, hi = max(0, i - a.context), min(len(ws), i + len(p) + a.context)
            print(f"  {fmt(ws[i][0])}: " + " ".join(w for _, w in ws[lo:hi]))
if __name__ == "__main__":
    sys.exit(main())
