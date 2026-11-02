# MARGIN OF ERROR

*Where accounting meets the laws of physics.*

Forensic investigations of industrial and infrastructure failures, built from the public record and rendered in
code with [Remotion](https://www.remotion.dev/): every document is a real exhibit with its source on screen, every
readout a sourced number or labelled illustrative.

- Rules for every session: [`CLAUDE.md`](CLAUDE.md)
- Everything else: [`docs/PLAYBOOK.md`](docs/PLAYBOOK.md)

```bash
npm ci                                                              # Remotion 4.0.534, React 19
npx tsc --noEmit                                                    # typecheck
npx remotion still src/index.ts EngineCheck out.jpg --frame=560 \
  --browser-executable=/opt/pw-browsers/chromium_headless_shell-1243/chrome-headless-shell-linux64/chrome-headless-shell --gl=swangle
node scripts/render_shards.mjs . EngineCheck out --scale 2/3        # a short 720p test render
python3 scripts/claims_check.py films/<slug>/claims.csv             # the fact gate
python3 scripts/vo_lint.py films/<slug>/script/vo.txt               # the narration text gate
```
