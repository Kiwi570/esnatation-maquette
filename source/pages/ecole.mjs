/* L'école : ouverture plein cadre sous l'eau (titre blanc en bas), histoire, pédagogie, équipe, charte, Jeunesse+Sport,
   photos des trimestres, appel final. */
import { html, brut } from '../../outils/gabarit.mjs';
import { bandePhotos, appel } from '../gabarits/esn.mjs';

export const page = { cle: 'ecole', fichier: 'ecole', imagePartage: 'ecole-sous-l-eau-1280.webp' };

const ICONES = [
  '<svg viewBox="0 0 44 44" aria-hidden="true"><circle cx="22" cy="22" r="18" fill="none" stroke="currentColor" stroke-width="3"/><path d="M14 23l6 6 11-13" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  '<svg viewBox="0 0 44 44" aria-hidden="true"><path d="M4 26c5 0 5-5 10-5s5 5 10 5 5-5 10-5 5 5 6 5M4 34c5 0 5-5 10-5s5 5 10 5 5-5 10-5 5 5 6 5" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><circle cx="30" cy="11" r="4" fill="currentColor"/></svg>',
  '<svg viewBox="0 0 44 44" aria-hidden="true"><path d="M6 36h8V26h8V16h8V6h8" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  '<svg viewBox="0 0 44 44" aria-hidden="true"><circle cx="14" cy="16" r="5" fill="none" stroke="currentColor" stroke-width="3"/><circle cx="30" cy="16" r="5" fill="none" stroke="currentColor" stroke-width="3"/><path d="M5 36c1-7 5-10 9-10s8 3 9 10M21 36c1-7 5-10 9-10s8 3 9 10" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>',
];

export default (c) => html`
<section class="ecole-tete" id="debut">
  ${c.media({ nom: 'ecole-sous-l-eau', alt: c.donnees.images['ecole-sous-l-eau'].alt, cadrage: '50% 45%', cadrageMobile: '50% 50%', priorite: true, classe: 'ecole-tete-media', sizes: '100vw', attrs: 'data-fx="parallaxe" data-fx-force="10" data-iris-centre' })}
  <div class="conteneur ecole-tete-texte">
    <p class="surtitre masque-ecran-tres-bas" data-anime="gsap">${c.t('ecole.ouverture.surtitre')}</p>
    <h1 class="titre-page" data-anime="gsap"><span class="ligne-masque"><span class="titre-ligne">${c.t('ecole.ouverture.titre1')}</span></span><span class="ligne-masque"><span class="titre-ligne titre-ligne--bleu">${c.t('ecole.ouverture.titre2')}</span></span></h1>
    <p class="intro" data-anime="gsap">${c.t('ecole.ouverture.texte')}</p>
    <p class="hero-actions" data-anime="gsap">${c.lien('inscription', { classe: 'bouton', texte: c.t('commun.demander'), attrs: 'data-action-principale data-survol="magnetique"' })}</p>
    <p class="ecole-tete-info" data-info-cle data-anime="gsap">${c.t('ecole.ouverture.info')}</p>
  </div>
</section>

<section class="histoire" id="histoire">
  <div class="conteneur histoire-grille">
    <div>
      <p class="histoire-annee chiffres" data-anime="lettres">1995</p>
      <h2 data-anime="lignes">${c.t('ecole.histoire.titre')}</h2>
      <p data-anime>${c.t('ecole.histoire.texte1')}</p>
      <p data-anime>${c.t('ecole.histoire.texte2')}</p>
    </div>
    ${c.media({ nom: 'groupe-lundi-hiver-2026', alt: c.donnees.images['groupe-lundi-hiver-2026'].alt, cadrage: '40% 50%', classe: 'histoire-media', sizes: '(max-width: 760px) 92vw, 44vw', legende: 'Lundi, 1er trimestre 2026', attrs: 'data-anime="rideau"' })}
  </div>
</section>

<section class="pedagogie" id="pedagogie">
  <div class="conteneur">
    <h2 data-anime="lignes">${c.t('ecole.pedagogie.titre')}</h2>
    <ul class="pedagogie-liste" data-anime="cascade">${[1, 2, 3, 4].map((n) => html`<li>${brut(ICONES[n - 1])}<h3>${c.t(`ecole.pedagogie.p${n}t`)}</h3><p>${c.t(`ecole.pedagogie.p${n}`)}</p></li>`)}</ul>
  </div>
</section>

<section class="equipe equipe--clair" id="equipe">
  <div class="conteneur">
    <div class="equipe-tete">
      <h2 data-anime="lignes">${c.t('ecole.equipe.titre')}</h2>
      <p data-anime>${c.t('ecole.equipe.texte')}</p>
    </div>
    <ul class="equipe-liste" data-anime="cascade" data-bouees>${c.donnees.equipe.map((p) => html`<li class="personne">
      <span class="bouee" aria-hidden="true"></span>${c.media({ nom: p.image, alt: p.nom, cadrage: '50% 35%', classe: 'personne-photo', sizes: '160px', ratio: '1 / 1' })}
      <h3>${p.nom}</h3><p>${p.role}</p>
    </li>`)}</ul>
  </div>
</section>

<section class="charte" id="charte">
  <div class="conteneur charte-grille">
    <div>
      <h2 data-anime="lignes">${c.t('ecole.charte.titre')}</h2>
      <p data-anime>${c.t('ecole.charte.texte')}</p>
      <img class="charte-poisson" src="/assets/images/logo.svg" alt="" width="420" height="304" loading="lazy" data-fx="vitesse" data-fx-force="3" data-visuel>
    </div>
    <div>
      <ol class="charte-liste" data-anime="cascade">${c.donnees.charte.map((x) => html`<li>${x}</li>`)}</ol>
      <p class="charte-roles" data-anime>${c.t('ecole.charte.roles')}</p>
    </div>
  </div>
</section>

<section class="soutien" id="jeunesse-sport">
  <div class="conteneur soutien-grille">
    <p class="soutien-sigle" data-anime="lettres" aria-hidden="true" data-visuel>J+S</p>
    <div>
      <h2 data-anime="lignes">${c.t('ecole.soutien.titre')}</h2>
      <p data-anime>${c.t('ecole.soutien.texte')}</p>
      <p data-anime><a class="lien-fleche" href="https://www.jugendundsport.ch/fr/home.html" target="_blank" rel="noopener">${c.t('ecole.soutien.lien')}</a></p>
    </div>
  </div>
</section>

<section class="photos" id="photos">
  <h2 class="conteneur" data-anime="lignes">${c.t('ecole.photos.titre')}</h2>
  ${bandePhotos(c, [c.donnees.photos[0], c.donnees.photos[7], c.donnees.photos[3], c.donnees.photos[1], c.donnees.photos[4], c.donnees.photos[6]], c.s('ecole.photos.region'))}
</section>

${appel(c, { titre: 'ecole.appel.titre', texte: 'ecole.appel.texte' })}
`;
