/* Composants propres à ESN, partagés par les pages : ligne d'eau, cycles de l'année, appel final, bande de photos.
   Les cycles sont calculés à la génération (texte lisible sans JavaScript), puis recalculés à l'heure de Zurich par site.js. */
import { html } from '../../outils/gabarit.mjs';

const MOIS = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];

/* Date du jour à Zurich (année, mois 1-12, jour). */
export function aujourdhui(d = new Date()) {
  const p = Object.fromEntries(new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Zurich', year: 'numeric', month: 'numeric', day: 'numeric' })
    .formatToParts(d).filter((x) => x.type !== 'literal').map((x) => [x.type, +x.value]));
  return { a: p.year, m: p.month, j: p.day };
}

/* Les trois cycles de l'année scolaire en cours (ou à venir pendant l'été), leur statut et le prochain. */
export function cycles(d = new Date()) {
  const { a, m } = aujourdhui(d);
  const debut = m >= 7 ? a : a - 1; /* année scolaire : de septembre à juin ; en juillet-août, celle qui vient */
  const liste = [
    { cle: 'automne', de: 9, a: 12, annee: debut, cleTexte: 'c1' },
    { cle: 'hiver', de: 1, a: 3, annee: debut + 1, cleTexte: 'c2' },
    { cle: 'printemps', de: 4, a: 6, annee: debut + 1, cleTexte: 'c3' },
  ];
  const courant = liste.find((c) => c.annee === a && m >= c.de && m <= c.a) || null;
  const i = courant ? liste.indexOf(courant) : -1;
  const prochain = i === -1 ? liste[0] : i < 2 ? liste[i + 1] : { cle: 'automne', de: 9, a: 12, annee: debut + 1, cleTexte: 'c1' };
  liste.forEach((c, k) => { c.statut = c === courant ? 'enCours' : c === prochain ? 'prochain' : k > i ? 'ensuite' : 'passe'; });
  const texte = (c) => `${MOIS[c.de - 1]} – ${MOIS[c.a - 1]} ${c.annee}`;
  return { liste, courant, prochain, prochainTexte: texte(prochain), prochainMois: MOIS[prochain.de - 1], texte };
}

/* Ligne d'eau : flotteurs rouge et blanc qui ondulent selon la vitesse de défilement (effet « ligne-d-eau »). */
export const ligneEau = (n = 20, classe = '') => html`<div class="ligne-eau ${classe}" data-ligne-eau data-effet="ligne-d-eau" aria-hidden="true">${Array.from({ length: n }, () => html`<span></span>`)}</div>`;

/* Bande de photos de groupes qui glisse à l'horizontale pendant que la section passe (sans épinglage). */
export const bandePhotos = (c, photos, region) => html`<div class="bande-photos" data-bande-photos data-galerie data-effet="bande-photos" tabindex="0" role="region" aria-label="${region}">
  <ul class="bande-piste">${photos.map((p) => html`<li>${c.media({ nom: p.image, alt: c.donnees.images[p.image]?.alt || p.legende, cadrage: p.cadrage, classe: 'bande-media', sizes: '(max-width: 760px) 78vw, 34vw', ratio: '4 / 3', legende: p.legende })}</li>`)}</ul>
</div>`;

/* Appel final : fond bleu bassin, reflets en WebGL (effet « caustiques »), action principale et téléphone. */
export const appel = (c, { titre, texte, vars = {} }) => html`<section class="appel" id="appel">
  <canvas class="caustiques" data-caustiques="appel" data-effet="caustiques" data-visuel aria-hidden="true"></canvas>
  <div class="conteneur appel-contenu">
    <img class="appel-poisson" src="/assets/images/logo-clair.svg" alt="" width="120" height="87" loading="lazy" data-anime>
    <h2 data-anime="lignes">${c.t(titre, vars)}</h2>
    <p data-anime>${c.t(texte)}</p>
    <p class="appel-actions" data-anime>
      ${c.lien('inscription', { classe: 'bouton bouton--blanc', texte: c.t('commun.demander'), attrs: 'data-survol="magnetique"' })}
      <a class="bouton bouton--contour-clair" href="tel:${c.site.contact.telephoneLien}">${c.t('commun.appeler')} ${c.site.contact.telephone}</a>
    </p>
  </div>
</section>`;

/* Barre de l'année scolaire (septembre à juin) et ses trois cycles (effet « cycles »). */
export const anneeCycles = (c) => {
  const cy = cycles();
  const mois = (x) => (x >= 9 ? x - 9 : x + 3); /* rang du mois depuis septembre */
  const libelles = JSON.stringify(Object.fromEntries(['enCours', 'prochain', 'ensuite', 'passe'].map((k) => [k, c.s(`cycles.${k}`)])));
  return html`<div class="cycles" data-cycles data-visuel data-effet="cycles" data-libelles="${libelles}">
  <div class="cycles-barre" aria-hidden="true"><span class="cycles-rempli" data-cycles-rempli></span><span class="cycles-auj" data-cycles-auj><span>${c.t('cycles.aujourdhui')}</span></span></div>
  <div class="cycles-bornes" aria-hidden="true"><span>${c.t('cycles.septembre')}</span><span>${c.t('cycles.juin')}</span></div>
  <ol class="cycles-liste">${cy.liste.map((x) => html`<li class="cycle" data-cycle="${x.cle}" data-statut="${x.statut}" style="grid-column:${mois(x.de) + 1} / ${mois(x.a) + 2}">
    <span class="cycle-statut" data-cycle-statut>${c.t(`cycles.${x.statut}`)}</span>
    <strong>${c.t(`accueil.annee.${x.cleTexte}`)}</strong>
    <span class="cycle-annee" data-cycle-annee>${x.annee}</span>
  </li>`)}</ol>
</div>`;
};
