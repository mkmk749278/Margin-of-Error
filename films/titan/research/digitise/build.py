import json, numpy as np
def load(p, x0, x1, xv0, xv1, y0, y1, yv0, yv1):
    raw = json.load(open(f'raw{p}.json')); out = {}
    for d, pts in raw.items():
        a = np.array(pts); X = xv0 + (a[:, 0] - x0) / (x1 - x0) * (xv1 - xv0); Y = yv0 + (a[:, 1] - y0) / (y1 - y0) * (yv1 - yv0)
        out[d] = np.c_[X, Y]
    return out
f31 = load(41, 136.53, 136.53 + 63.75 * 6, 2400, 2700, 342.0, 342.0 + 36.6 * 10, 0, 1000)
f30 = load(40, 147.57, 519.0, 2400, 3200, 341.07, 708.24, 0, 4000)
f29 = load(39, 148.57, 519.0, 2400, 3200, 341.07, 708.24, 0, 4000)
for k, v in f30.items(): print('f30', k, len(v), v[:, 0].min().round(), v[:, 0].max().round(), v[:, 1].max().round())
for k, v in f29.items(): print('f29', k, len(v), v[:, 0].min().round(), v[:, 0].max().round(), v[:, 1].max().round())
def thin(a, n):
    idx = np.linspace(0, len(a) - 1, min(n, len(a))).round().astype(int); return [[round(float(x), 2), round(float(y), 1)] for x, y in a[idx]]
def split(a):
    i = int(np.argmax(a[:, 1])); return a[:i + 1], a[i + 1:]
res = {'source': 'NTSB Materials Laboratory Factual Report 24-012 (DCA23FM036), figs. 29-31: the plotted points read from the PDF vector paths (exact positions), axes calibrated on the gridlines; group 4 hoop gauge, mV vs ocean depth m. Points in plotted (recorded) order.',
       'fig31': {}, 'full': {}}
for d, a in f31.items():
    de, asc = split(a)
    # drop isolated scatter: keep points within 6 mV of a running median in depth bins
    res['fig31'][d] = {'descent': thin(de, 420), 'ascent': thin(asc, 300)}
res['full']['80'] = thin(f30['80'], 900); res['full']['81'] = thin(f30['81'], 900); res['full']['75'] = thin(f29['75'], 900)
res['slopes_ntsb'] = {'75': 5.00, '80': 4.74, '81': 8.76, '82': 8.09, '83': 8.77}
json.dump(res, open('/home/user/Margin-of-Error/films/titan/remotion/data/replot.json', 'w'), separators=(',', ':'))
