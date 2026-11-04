import json,re
# Choreography index (PLAYBOOK §10.6): run from films/<slug>/ ; writes scenes/choreography/acts2-5.md from the scene code.
from pathlib import Path
film=Path('.')
t=json.load(open('vo/timing.json'))
by={}
for w in t['words']: by.setdefault(w['s'],[]).append(w)
CUE=re.compile(r"""\bw(?:e)?f\(\s*(\d+)\s*,\s*(?:'([^']+)'|"([^"]+)")\s*(?:,\s*(\d+))?\s*\)""")
clean=lambda w: re.sub(r"[^a-z0-9']","",w.lower())
cues={}
for act in ['act2','act3','act4','act5']:
    lines=(film/f'remotion/scenes/{act}.tsx').read_text().splitlines()
    scene='?'
    starts=[i for i,l in enumerate(lines) if re.match(r'^const (\w+): React\.FC',l)]+[len(lines)]
    comp_of={}
    for a_,b_ in zip(starts,starts[1:]):
        for i in range(a_,b_): comp_of[i]=(a_,b_)
    def describe(i, ln):
        if 'sfx:' in ln: return 'sound effect cue'
        m=re.match(r"\s*(\w+): wf\(", ln)
        if m and i in comp_of:
            a_,b_=comp_of[i]
            pat=re.compile(r'\b[A-Z]\.'+m.group(1)+r'\b')
            for j in range(i+1,b_):
                if pat.search(lines[j]):
                    return snippet(lines[j])
        return snippet(ln)
    def snippet(ln):
        lab=re.findall(r"\{t: '([^']+)'|\['([^']+)', |>([A-Z0-9][^<>{}]{2,60})<", ln)
        lab=[a or b or c for a,b,c in lab]
        if lab: return 'text: ' + ' / '.join(x.strip() for x in lab[:2])
        for key in ['BracketLock','StatusFlip','DatePill','Arrive','ChunkQuote','KeyLine','rollTo','bump','flash','lead','tween','path','highlights','hl=']:
            if key in ln: return key + ' · ' + re.sub(r'\s+',' ',ln.strip())[:70]
        return re.sub(r'\s+',' ',ln.strip())[:80]
    for i,ln in enumerate(lines):
        m=re.match(r'^const (\w+): React\.FC',ln)
        if m: scene=m.group(1)
        if re.match(r'^export const act', ln): scene='(scene list)'
        for c in CUE.finditer(ln):
            s=int(c.group(1)); w=c.group(2) or c.group(3); n=int(c.group(4) or 0)
            hits=[x for x in by.get(s,[]) if clean(x['w'])==clean(w)]
            if len(hits)<=n: continue
            x=hits[n]
            # what the line does: the quoted label text if any, else the property it drives
            what=describe(i, ln)
            cues.setdefault(s,{})[(clean(w),n)]=(x['startFrame'],x['w'],scene,what.replace('|','/'))
out=['# Choreography index: Acts II–V (sentences 23–176)','',
 'Word-level choreography (PLAYBOOK §10.6), **generated from the scene code** (`python3 scripts/choreo_index.py` from the film folder; re-run after',
 'any edit) so it cannot drift from it. One row per word-locked event: the spoken trigger, its measured frame (60 fps) and offset',
 'from the sentence start, the scene component, and what changes (the on-screen text that arrives, or the driving line of',
 'code). Kit: `lib/remotion/Kinetic.tsx` and `remotion/beats.tsx` (`KeyLine` parts land on their words, `ChunkQuote` reveals a',
 'record quote chunk by chunk, `WordLine` builds a title word by word). Hand-written tables: `act1.md`, `journey.md`.',
 'Sync audit: 177/177 sentences pass (`review/sync_audit.md`).','']
for s in sorted(cues):
    if s<23: continue
    S=t['sentences'][s]
    out+=[f"**{s}** · {S['text']}", '', '| Trigger | Frame (offset) | Scene | Change |','| :--- | :--- | :--- | :--- |']
    for k,(fr,w,sc,what) in sorted(cues[s].items(), key=lambda kv: kv[1][0]):
        out.append(f"| `{w.strip(',.:;?')}` | `F{fr}` (+{(fr-S['startFrame'])/60:.2f} s) | {sc} | {what} |")
    out.append('')
Path('scenes/choreography/acts2-5.md').write_text('\n'.join(out)+'\n')
print(len(out))
