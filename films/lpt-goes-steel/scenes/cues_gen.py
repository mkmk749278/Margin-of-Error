#!/usr/bin/env python3
"""Export sound/cues.json from the scene code (PLAYBOOK §12: a cue on every visual event). Reads the act files and
evaluates each event's own frame expression (sf/ef/wf/hold on vo/timing.json), so the sound moves with the picture:
  <Doc start=…> / Calendar and Tray pages → paper_slide · highlight at/ats → highlighter (15 frames early)
  <Pop at=…> → relay_click · Num keys → quartz_tick on the landing key · <HeroShot start=…> → whoosh, low
Run from the repo root after any scene change."""
import glob, json, re
F = "films/lpt-goes-steel"
t = json.load(open(f"{F}/vo/timing.json"))
fps = t["fps"]
cl = lambda w: re.sub(r"[^a-z0-9']", "", w.lower())
S = {s["id"]: s for s in t["sentences"]}
W = {}
for w in t["words"]:
    for p in [x for x in w["w"].split("—") if x]:
        W.setdefault(w["s"], []).append((cl(p), w["startFrame"]))
H = {h["after"]: h for h in t["holds"]}
C = {c["clip"]: c for c in t["clips"]}
class Hd:
    def __init__(self, h): self.frm = h["filmStartFrame"]; self.frames = round(h["s"] * fps)
def wf(s, w, n=0): return [f for x, f in W[s] if x == cl(w)][n]
env = {"sf": lambda s: S[s]["startFrame"], "ef": lambda s: S[s]["endFrame"], "wf": wf, "hold": lambda s: Hd(H[s]),
       "FILM_FRAMES": t["durationInFrames"], "clipOf": lambda c: type("C", (), {"gapStartFrame": C[c]["gapStartFrame"], "gapEndFrame": C[c]["gapEndFrame"]})}
def ev(expr, hid):
    e = expr.replace(".from", ".frm").replace("hold(", "hold(")
    if hid is not None:
        env["h"] = Hd(H[hid])
    try:
        return int(round(eval(e, {}, env)))
    except Exception:
        return None
cues = []
def add(fr, sfx, db):
    if fr is not None and 0 <= fr < t["durationInFrames"]:
        cues.append({"frame": fr, "sfx": sfx, "gainDb": db})
for path in sorted(glob.glob(f"{F}/remotion/scenes/act*.tsx")):
    src = open(path).read()
    blocks = re.split(r"\n(?=const \w+: React\.FC)", src)
    for b in blocks:
        m = re.search(r"const h = hold\((\d+)\)", b); hid = int(m.group(1)) if m else None
        for m in re.finditer(r"<Doc [^>]*?start=\{([^}]*)\}", b): add(ev(m.group(1), hid) and ev(m.group(1), hid) + 8, "paper_slide", -26)
        for m in re.finditer(r"<HeroShot [^>]*?start=\{([^}]*)\}", b): add(ev(m.group(1), hid), "whoosh", -32)
        for m in re.finditer(r"<Photo [^>]*?start=\{([^}]*)\}", b): add(ev(m.group(1), hid), "whoosh", -34)
        for m in re.finditer(r"<Pop f=\{f\} at=\{([^}]*)\}", b): add(ev(m.group(1), hid), "relay_click", -28)
        for m in re.finditer(r"\{key: '[^']+', at: (wf\([^)]*\))", b): add(ev(m.group(1), hid) - 15, "highlighter", -30)
        for m in re.finditer(r"ats: \[([^\]]*)\]", b):
            for x in re.findall(r"wf\([^)]*\)[^,\]]*", m.group(1)): add(ev(x, hid), "highlighter", -30)
        for m in re.finditer(r"keys=\{\[(.*?)\]\}", b, re.S):
            last = re.findall(r"frame: (.*?), value", m.group(1))
            if last: add(ev(last[-1], hid), "quartz_tick", -26)
        for m in re.finditer(r"\bat: ((?:wf|sf|ef)\([^)]*\)[^,}]*)", b):
            if "key:" not in b[max(0, m.start() - 30):m.start()]: add(ev(m.group(1), hid), "paper_slide", -29)
cues.sort(key=lambda c: c["frame"])
thin = []
for c in cues:  # never two cues of one kind within 8 frames
    if not any(c["sfx"] == d["sfx"] and abs(c["frame"] - d["frame"]) < 8 for d in thin[-6:]):
        thin.append(c)
json.dump({"fps": fps, "frames": t["durationInFrames"], "cues": thin}, open(f"{F}/sound/cues.json", "w"))
from collections import Counter
print(len(thin), "cues", Counter(c["sfx"] for c in thin))
