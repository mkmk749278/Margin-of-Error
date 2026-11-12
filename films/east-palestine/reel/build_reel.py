#!/usr/bin/env python3
"""Build the East Palestine Instagram reel's media and props (owner, 12 NOV 2026).

Reads reel.json (segments of the approved master, in reel time) and vo/timing.json (the reel's own narration, words
measured), and writes:
  public/reel/ep_reel_pic.mp4   the master's segments butted on the reel timeline, 2560x1440, 60 fps, no sound
  public/reel/ep_reel_mix.wav   the narration over the library bed, -14 LUFS, true peak under -1.5 dBTP
  public/reel/ep_thumb_live.jpg the film's live YouTube thumbnail (D), for the end card
  films/east-palestine/reel/reel.props.json   props for the `Reel` composition

Usage: python3 films/east-palestine/reel/build_reel.py [--props-only]
"""
import json
import re
import shutil
import subprocess
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
ROOT = HERE.parents[2]
OUT = ROOT / "public/reel"
MUSIC = HERE / "assets/music/fx08_countdown.wav"
MUSIC_GAIN_DB = -19.0  # the bed under the voice
VO_END_LIFT_DB = 6.0  # the bed comes up after the last word


def run(cmd: list[str]) -> str:
    return subprocess.run(cmd, check=True, capture_output=True, text=True).stderr


def picture(cfg: dict) -> None:
    segs = [s for s in cfg["segments"] if "m" in s]
    ends = [s["t"] for s in cfg["segments"][1:]]
    parts = []
    for i, s in enumerate(segs):
        dur = ends[i] - s["t"]
        p = OUT / f"_seg{i:02d}.mp4"
        run(["ffmpeg", "-y", "-v", "error", "-ss", f"{s['m']:.3f}", "-i", str(ROOT / cfg["master"]), "-t", f"{dur:.3f}",
             "-an", "-vf", "scale=2560:1440:flags=lanczos,fps=60", "-c:v", "libx264", "-preset", "medium", "-crf", "16",
             "-maxrate", "30M", "-bufsize", "60M", "-pix_fmt", "yuv420p", str(p)])
        parts.append(p)
    lst = OUT / "_segs.txt"
    lst.write_text("".join(f"file '{p.name}'\n" for p in parts))
    run(["ffmpeg", "-y", "-v", "error", "-f", "concat", "-safe", "0", "-i", str(lst), "-c", "copy",
         str(OUT / "ep_reel_pic.mp4")])
    for p in parts:
        p.unlink()
    lst.unlink()


def mix(cfg: dict, vo_end: float) -> None:
    end = cfg["end"]
    vo = HERE / "assets/vo/film_vo.wav"
    lift = f"if(lt(t,{vo_end:.2f}),1,1+({10 ** (VO_END_LIFT_DB / 20) - 1:.4f})*min(1,(t-{vo_end:.2f})/0.6))"
    graph = (f"[1:a]aformat=sample_rates=48000:channel_layouts=stereo,atrim=0:{end},volume={MUSIC_GAIN_DB}dB,"
             f"volume='{lift}':eval=frame,afade=t=in:d=0.25,afade=t=out:st={end - 1.2:.2f}:d=1.2[m];"
             f"[0:a]aformat=sample_rates=48000:channel_layouts=stereo,apad=whole_dur={end}[v];"
             f"[v][m]amix=inputs=2:duration=first:normalize=0[x]")
    raw = OUT / "_mix_raw.wav"
    run(["ffmpeg", "-y", "-v", "error", "-i", str(vo), "-i", str(MUSIC), "-filter_complex", graph, "-map", "[x]",
         "-t", f"{end}", str(raw)])
    meas = run(["ffmpeg", "-v", "info", "-i", str(raw), "-af", "loudnorm=I=-14:TP=-1.5:LRA=11:print_format=json",
                "-f", "null", "-"])
    m = json.loads(meas[meas.rindex("{"):meas.rindex("}") + 1])
    ln = (f"loudnorm=I=-14:TP=-1.5:LRA=11:measured_I={m['input_i']}:measured_TP={m['input_tp']}:"
          f"measured_LRA={m['input_lra']}:measured_thresh={m['input_thresh']}:offset={m['target_offset']}:linear=true")
    run(["ffmpeg", "-y", "-v", "error", "-i", str(raw), "-af", ln, "-ar", "48000", str(OUT / "ep_reel_mix.wav")])
    raw.unlink()


def main() -> int:
    cfg = json.loads((HERE / "reel.json").read_text())
    t = json.loads((HERE / "vo/timing.json").read_text())
    OUT.mkdir(parents=True, exist_ok=True)
    vo_end = max(w["end"] for w in t["words"])
    if "--props-only" not in sys.argv:
        picture(cfg)
        mix(cfg, vo_end)
        shutil.copy(HERE.parent / "youtube/thumb_d_bearing_billing_rule.jpg", OUT / "ep_thumb_live.jpg")
    # words for captions: spelled acronyms ("N - T - S - B") joined back; dashes dropped
    words, acr = [], []
    for w in t["words"]:
        if w["w"] == "-":
            continue
        tok = re.sub(r"[^\w'’-]", "", w["w"]) if not re.fullmatch(r"[A-Z]['’]?s?[.,:?]?", w["w"]) else w["w"]
        if re.fullmatch(r"[A-Z]['’]?s?[.,:?]?", w["w"]) and words and words[-1].get("acr") and words[-1]["s"] == w["s"]:
            words[-1]["w"] += w["w"]
            words[-1]["t1"] = w["end"]
            continue
        words.append({"w": w["w"], "s": w["s"], "t0": w["start"], "t1": w["end"],
                      "acr": bool(re.fullmatch(r"[A-Z]", w["w"]))})
    # captions show numbers as figures (the voice says them as words)
    nums = [("one hundred and seventy", "170"), ("one hundred and three", "103"), ("twenty twenty-three", "2023"),
            ("forty", "40"), ("thirteen", "13")]
    i, merged = 0, []
    while i < len(words):
        for phrase, fig in nums:
            n = len(phrase.split())
            run_ = words[i:i + n]
            said = " ".join(re.sub(r"[.,:?]$", "", w["w"]).lower() for w in run_)
            if said == phrase and len({w["s"] for w in run_}) == 1:
                tail = re.search(r"[.,:?]$", run_[-1]["w"])
                merged.append(run_[0] | {"w": fig + (tail.group(0) if tail else ""), "t1": run_[-1]["t1"]})
                i += n
                break
        else:
            merged.append(words[i])
            i += 1
    words = merged
    segs = []
    for i, s in enumerate(cfg["segments"]):
        nxt = cfg["segments"][i + 1]["t"] if i + 1 < len(cfg["segments"]) else cfg["end"]
        segs.append({k: s[k] for k in ("t", "c0", "c1", "label")} | {"t1": nxt, "image": s.get("image")})
    props = {"duration": cfg["end"], "pic": "reel/ep_reel_pic.mp4", "mix": "reel/ep_reel_mix.wav", "segments": segs,
             "words": [{k: v for k, v in w.items() if k != "acr"} for w in words],
             "sentences": [s["text"] for s in t["sentences"]], "voEnd": vo_end}
    (HERE / "reel.props.json").write_text(json.dumps(props, indent=1, ensure_ascii=False))
    print(f"{len(segs)} segments, {len(words)} caption words, VO ends {vo_end:.2f} s, reel {cfg['end']} s")
    return 0


if __name__ == "__main__":
    sys.exit(main())
