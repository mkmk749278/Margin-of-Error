import csv,re,sys
sys.path.insert(0,'')
def norm(s):
    s=s.replace('’',"'").replace('‘',"'").replace('“','"').replace('”','"').replace('—','-').replace('–','-')
    return re.sub(r'\s+',' ',s).strip().lower()
pages=open(sys.argv[1],errors='ignore').read().split('\f')
labels=[]
for p in pages:
    ls=[l.strip() for l in p.strip().splitlines() if l.strip()]
    lab=ls[-1] if ls and re.fullmatch(r'[0-9]+|[ivxl]+',ls[-1]) else '?'
    labels.append(lab)
np=[norm(p) for p in pages]
rows=list(csv.DictReader(open(sys.argv[2])))
for r in rows:
    if 'RIR2405' not in r['source_url']: continue
    q=norm(r['source_quote']); hit=[i for i,p in enumerate(np) if q in p]
    if not hit:
        hit=[i for i in range(len(np)-1) if q in np[i]+' '+np[i+1]]
    lab=labels[hit[0]] if hit else '?'
    r['note']=re.sub(r'^(p\. [0-9ivx–]+|finding \d+|p\. [0-9]+–[0-9]+)(; |$)', '', r['note'])
    prefix=f'p. {lab}'
    if r['note'].startswith('finding'): prefix=f'p. {lab}, '+r['note'].split(';')[0]; r['note']=';'.join(r['note'].split(';')[1:]).strip()
    r['note']=prefix+('; '+r['note'] if r['note'] else '')
    print(r['id'],r['note'][:90])
w=csv.DictWriter(open(sys.argv[2],'w',newline=''),fieldnames=rows[0].keys()); w.writeheader(); w.writerows(rows)
