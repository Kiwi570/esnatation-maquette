// Captures de travail : node captures.mjs <racine> <sortie> [pages] [formats]
import { pathToFileURL } from 'node:url';
import path from 'node:path';
import fs from 'node:fs';
const [racine, sortie, pagesArg = '/', formatsArg = '1440x900,390x844'] = process.argv.slice(2);
const { demarrerServeur: servir } = await import(pathToFileURL(path.join(racine, '_audit/serveur.mjs')).href);
const { chromium } = await import('/usr/local/lib/node_modules_global/playwright/index.mjs');
const s = await servir(racine);
const nav = await chromium.launch();
fs.mkdirSync(sortie, { recursive: true });
for (const f of formatsArg.split(',')) {
  const [w, h] = f.split('x').map(Number);
  const ctx = await nav.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1, hasTouch: w < 800, isMobile: w < 800 });
  for (const p of pagesArg.split(',')) {
    const page = await ctx.newPage();
    const erreurs = [];
    page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') erreurs.push(m.type() + ': ' + m.text()); });
    page.on('pageerror', (e) => erreurs.push('pageerror: ' + e.message));
    await page.goto(s.adresse + p, { waitUntil: 'load' });
    await page.waitForTimeout(600);
    const nom = (p === '/' ? 'accueil' : p.replace(/\//g, '')) + '-' + f;
    await page.screenshot({ path: path.join(sortie, nom + '-intro.png') });
    await page.waitForTimeout(2600);
    await page.screenshot({ path: path.join(sortie, nom + '-ecran.png') });
    // défilement complet pour déclencher les apparitions
    const H = await page.evaluate(() => document.documentElement.scrollHeight);
    for (let y = 0; y < H; y += Math.round(h * 0.6)) { await page.mouse.wheel(0, Math.round(h * 0.6)); await page.waitForTimeout(120); }
    await page.waitForTimeout(900);
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(500);
    await page.screenshot({ path: path.join(sortie, nom + '-page.png'), fullPage: true });
    if (erreurs.length) console.log(nom, erreurs.slice(0, 8).join('\n  '));
    await page.close();
  }
  await ctx.close();
}
await nav.close();
await s.fermer();
console.log('fini');
