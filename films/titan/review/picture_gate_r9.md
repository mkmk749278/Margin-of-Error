# Titan · picture gate, round 9 (720p review cuts v10 and v11, 19–20 NOV 2026)

Round 9 answers the owner's notes on v9 (19 NOV 2026): the 3D hull isn't cinematic; the camera should move like a real
camera; most of the film was "zoom in, zoom out", documents included.

## What changed (PRs #108, #110)
- **No zoom pumping.** About 20 scenes scaled in and out on nearly every word (`beatScale`, `dolly`); every scene added
  a 3% push and an 8 s sine wobble; 3D keyframes eased to a stop at every key. Now: one continuous move per shot.
  The hull orbits at a steady ~1.3°/s with a crane and a small push, never reversing, through its keys with continuous
  velocity (Catmull-Rom). Every 2D shot gets an eased lateral track plus a slow circular float. Documents use a rostrum
  glide down the page at reading distance (`Exhibit move="rostrum"`). Footage pans at a fixed overscan.
- **Hull.** Dark resin carbon with the tows in relief and a glossy specular, satin titanium rings and domes, bolt
  circles on the flanges, studio reflections, a cool rim light, a lens vignette.
- **Act label** on for 5 s per act, riding the scene camera (no overlap with record chips).

## v10 (runs 44495321760 + rescue 44560340443): FAIL, not sent
Slide audit 1% · 4 s · 0:00 · 2% (pass); length and loudness pass. **Stillness: 24 holds of 3–8 s** (2:57–3:25 hull and
chart, 11:20–12:17 re-plot, 17:59–18:36 guidance, 22:54–23:09, and others); 69 near-freezes, 168 s in all. The moves
were sized per shot, so in long shots they crawled. Render: the clearcoat carbon ran 70–240 min per 30 s shard; two
half-blocks hit the 350 min job limit and were re-rendered as single shards.

## v11 (run 44622430558, 24 one-minute blocks, max 6 at once): PASS
Fix (PR #110): moves with a minimum speed (orbit rate, circular float, faster rostrum creep); carbon on one specular
lobe (same look, render back to 16–170 min per minute of film). Checked first on 4 fps stills over four v10 still
windows (2–13% of pixels change per step; the still line is 0.4%).

| Check | v9 | v10 | v11 | Gate |
|---|---|---|---|---|
| Length | 1,421.32 s | 1,421.32 s | 1,421.32 s picture and audio | pass |
| Loudness | −14.0 LUFS, −1.2 dBTP | same | −14.0 LUFS, LRA 2.8, −1.2 dBTP | pass |
| Slide audit (`slide_audit_v11.md`) | 1% · 4 s · 0:00 · 2% | same | 1% · 4 s · 0:00 · 2% | pass |
| Stillness (≥ 3 s) | 0 | **24** | **0** | pass |
| Near-freezes ≥ 1.5 s | 0 | 69 | 0 | pass |
| Black dips (0.1–0.57 s) | 13 + outro | same | 15 + outro, the designed dissolves through the desk (v8–v9 notes) | pass |

Camera, read on 1 fps tiles of the decoded cut: 2:58–3:08 (hull and depth chart) the hull orbits slowly, framing
steady, no in/out; 18:12–18:22 (guidance timeline, then the Marine Board photo) a slow drift, no zoom; 1:52–2:02 (dive
record over the NOAA bow) the footage pans under the chart. Hull frames: dark glossy carbon, satin titanium, bolt
circles, the lit floor.

**No open blocker: v11 goes to the owner.**
