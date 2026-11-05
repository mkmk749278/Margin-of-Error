---
name: parallel-render
description: Render a Margin of Error review cut (720p) or the approved 4K master on GitHub's runners with remotion-render.yml, inside the account's shared runner budget, and check the joined film. Use for every full render; the session authors and checks, the runners render.
---

# Parallel render on GitHub

Rules: PLAYBOOK §10.5. Never render a full film in the session, never with parallel sessions.

1. **Lock inputs on `main`** (or an open PR branch): script, `vo/timing.json`, compositions, cues, the mix in Drive
   `<slug>/mix/`, render media in Drive `<slug>/render-media/`. The workflow is registered from `main`.
2. **Gates before triggering:** `npx tsc --noEmit`; `claims_check.py`; `text_floor.py` reads 0; stills at the key
   frames looked at. A failure on a runner wastes the whole run.
3. **Budget:** GitHub MCP `actions_list` on the account's active repos; at most 6 runners (the default) unless nothing
   else is running.
4. **Trigger** `remotion-render.yml` (`actions_run_trigger`): `film`, `comp`, `scale` `2/3` for review cuts, `2` only
   for the owner-approved master, `name`. Re-join a run without re-rendering with `join_from`. Then end the turn.
5. **Check the result** from Drive `<slug>/renders/`: length = film length, frames from the runner (fonts, labels),
   a strip of three frames either side of every seam, then `/review-cut`.
