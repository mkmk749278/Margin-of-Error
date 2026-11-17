# Digitising the NTSB strain figures (16 NOV 2026)

Source: NTSB Materials Laboratory Factual Report 24-012 (docket DCA23FM036), `assets/titan/records/mat24012.pdf`.

- **Figs. 28–31 (strain vs depth) are vector graphics.** `pdftocairo -svg -f N -l N` writes each plotted point as a
  circle path; `digit.py pN.svg rawN.json` reads every point's centre and series colour (pages 38–41). `build.py`
  calibrates each axis on the figure's own gridlines and writes `remotion/data/replot.json`. The points are the NTSB's
  plotted points, exact, in plotted (recorded) order; depth peaks at 3,835 m, matching the dives' 3,840 m.
- Check: a least-squares fit, 15–150 m, of the plotted descent points gives 4.92 / 4.57 / 8.79 m/mV for dives 75 / 80 /
  81 (NTSB, on the full data: 5.00 / 4.74 / 8.76). Dives 82 and 83 lie under other series in places, so their plotted
  points fit less well (8.18, 9.77 after outlier removal); **the numbers on screen are the NTSB's (C41), never ours.**
- **Fig. 26d (dive 80, group 4 strain vs time) is a raster image** (pdfimages page 36, 1259×709): traced per pixel
  column (median of each trace colour), axes from the gridlines (hourly, 100 mV). Writes `remotion/data/dive80_time.json`.
  The jump sits at 15:26–15:27 NDT, matching the record's 3:26:45 p.m. (C08).
