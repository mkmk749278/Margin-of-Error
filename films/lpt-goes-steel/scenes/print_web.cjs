// Prints the web records the film shows to PDF (Chromium via Playwright), into assets/lpt-goes-steel/records/.
// usage: node films/lpt-goes-steel/scenes/print_web.cjs name=url ...
const {chromium} = require('playwright');
(async () => {
  const b = await chromium.launch();
  const ctx = await b.newContext({userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36'});
  for (const a of process.argv.slice(2)) {
    const i = a.indexOf('='); const name = a.slice(0, i); const url = a.slice(i + 1);
    try {
      const pg = await ctx.newPage();
      await pg.goto(url, {timeout: 60000, waitUntil: 'networkidle'}).catch(() => pg.waitForTimeout(3000));
      await pg.waitForTimeout(1500);
      await pg.pdf({path: `assets/lpt-goes-steel/records/${name}.pdf`, format: 'Letter', printBackground: true, margin: {top: '0.6in', bottom: '0.6in', left: '0.6in', right: '0.6in'}});
      console.log('WEB ', name, (await pg.title()).slice(0, 80)); await pg.close();
    } catch (e) { console.log('FAIL', name, String(e).slice(0, 120)); }
  }
  await b.close();
})();
