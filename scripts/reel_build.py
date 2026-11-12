#!/usr/bin/env python3
"""Build an Instagram reel's media and props (PLAYBOOK §13.5a; first used 12 NOV 2026).

Reads <reel>/reel.json (picture segments in reel time: `m` = seconds into the film's approved master, `video` +
`from` = a public-domain clip, `still` = a public-domain photo, `image` = the end card drawn by the composition) and
<reel>/vo/timing.json (the reel's own narration, words measured), and writes:
  public/reel/<name>_pic.mp4   the segments butted on the reel timeline, 2560x1440, 60 fps, no sound
  public/reel/<name>_mix.wav   the narration over the library bed, -14 LUFS, true peak under -1.5 dBTP
  public/reel/<thumb file>     the film's live YouTube thumbnail, for the end card
  <reel>/reel.props.json       props for the `Reel` / `ReelMyths` composition

Usage: python3 scripts/reel_build.py films/<slug>/<reel dir> [--props-only]
"""
import json
import re
import shutil
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
HERE = (ROOT / sys.argv[1]).resolve() if len(sys.argv) > 1 and not sys.argv[1].startswith("-") else ROOT / "films/east-palestine/reel"
OUT = ROOT / "public/reel"
MUSIC_GAIN_DB = -19.0  # the bed under the voice
VO_END_LIFT_DB = 6.0  # the bed comes up after the last word


def run(cmd: list[str]) -> str:
    return subprocess.run(cmd, check=True, capture_output=True, text=True).stderr


def picture(cfg: dict) -> None:
    segs = [s for s in cfg["segments"] if "image" not in s]
    ends = [s["t"] for s in cfg["segments"][1:]] + [cfg["end"]]
    parts = []
    fit = "scale=2560:1440:force_original_aspect_ratio=decrease:flags=lanczos,pad=2560:1440:(ow-iw)/2:(oh-ih)/2:color=0x0a0d12,setsar=1,fps=60"
    for i, s in enumerate(segs):
        dur = ends[i] - s["t"]
        p = OUT / f"_seg{i:02d}.mp4"
        if "m" in s:
            src = ["-ss", f"{s['m']:.3f}", "-i", str(ROOT / cfg["master"])]
        elif "video" in s:
            src = ["-ss", f"{s.get('from', 0):.3f}", "-i", str(ROOT / s["video"])]
        else:
            src = ["-loop", "1", "-framerate", "60", "-i", str(ROOT / s["still"])]
        run(["ffmpeg", "-y", "-v", "error", *src, "-t", f"{dur:.3f}",
             "-an", "-vf", fit, "-c:v", "libx264", "-preset", "medium", "-crf", "16",
             "-maxrate", "30M", "-bufsize", "60M", "-pix_fmt", "yuv420p", str(p)])
        parts.append(p)
    lst = OUT / "_segs.txt"
    lst.write_text("".join(f"file '{p.name}'\n" for p in parts))
    run(["ffmpeg", "-y", "-v", "error", "-f", "concat", "-safe", "0", "-i", str(lst), "-c", "copy",
         str(OUT / f"{cfg['name']}_pic.mp4")])
    for p in parts:
        p.unlink()
    lst.unlink()


def mix(cfg: dict, vo_end: float) -> None:
    end = cfg["end"]
    MUSIC = HERE / cfg["music"]
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
    run(["ffmpeg", "-y", "-v", "error", "-i", str(raw), "-af", ln, "-ar", "48000", str(OUT / f"{cfg['name']}_mix.wav")])
    raw.unlink()


def main() -> int:
    cfg = json.loads((HERE / "reel.json").read_text())
    t = json.loads((HERE / "vo/timing.json").read_text())
    OUT.mkdir(parents=True, exist_ok=True)
    vo_end = max(w["end"] for w in t["words"])
    if "--props-only" not in sys.argv:
        for f in OUT.glob("_*"):
            f.unlink()
        picture(cfg)
        mix(cfg, vo_end)
        shutil.copy(ROOT / cfg["thumb_src"], OUT / Path(cfg["thumb"]).name)
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
    props = {"duration": cfg["end"], "pic": f"reel/{cfg['name']}_pic.mp4", "mix": f"reel/{cfg['name']}_mix.wav", "segments": segs,
             "words": [{k: v for k, v in w.items() if k != "acr"} for w in words],
             "sentences": [s["text"] for s in t["sentences"]], "voEnd": vo_end}
    (HERE / "reel.props.json").write_text(json.dumps(props, indent=1, ensure_ascii=False))
    print(f"{len(segs)} segments, {len(words)} caption words, VO ends {vo_end:.2f} s, reel {cfg['end']} s")
    return 0


if __name__ == "__main__":
    sys.exit(main())
