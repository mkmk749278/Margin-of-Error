import re, sys, json
svg = open(sys.argv[1]).read()
col = {'58.399963%, 21.598816%, 20.799255%':'81','12.199402%, 28.599548%, 48.999023%':'75','33.299255%, 55.699158%, 83.499146%':'80','43.899536%, 18.798828%, 62.69989%':'83','100%, 0%, 0%':'82'}
pts = {}
for m in re.finditer(r'<path fill-rule="nonzero" fill="rgb\(([^)]*)\)"[^>]*?d="M ([\d.]+) ([\d.]+) C[^"]*"([^>]*)>', svg):
    c = m.group(1)
    if c not in col: continue
    x, y = float(m.group(2)) - 1.98, float(m.group(3))
    pts.setdefault(col[c], []).append((x, y))
print({k: len(v) for k, v in pts.items()})
json.dump(pts, open(sys.argv[2], 'w'))
