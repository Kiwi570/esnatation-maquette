/* Les cours : ouverture « prix en très grand » (disque bleu, objet d'ouverture), sélecteur de level sur la ligne d'eau,
   bandeau de planches ; fiches des 5 groupes, déroulé d'une inscription, bon à savoir, appel final. */
import { html } from '../../outils/gabarit.mjs';
import { cycles, appel } from '../gabarits/esn.mjs';

export const page = { cle: 'cours', fichier: 'cours', imagePartage: 'cours-planches-1280.webp' };

export default (c) => {
  const cy = cycles();
  const g = c.donnees.groupes;
  const groupeDe = (n) => g.findIndex((x) => n >= x.de && n <= x.a);
  return html`
<section class="cours-tete" id="debut">
  <div class="conteneur cours-tete-grille">
    <div>
      <p class="surtitre masque-ecran-tres-bas" data-anime="gsap">${c.t('cours.ouverture.surtitre')}</p>
      <h1 class="titre-page" data-anime="gsap"><span class="ligne-masque"><span class="titre-ligne">${c.t('cours.ouverture.titre1')}</span></span><span class="ligne-masque"><span class="titre-ligne titre-ligne--bleu">${c.t('cours.ouverture.titre2')}</span></span></h1>
      <p class="intro masque-ecran-tres-bas" data-anime="gsap">${c.t('cours.ouverture.texte')}</p>
      <p class="hero-actions" data-anime="gsap">${c.lien('inscription', { classe: 'bouton', texte: c.t('commun.inscrire'), attrs: 'data-action-principale data-survol="magnetique"' })}</p>
      <p class="hero-info masque-ecran-bas" data-anime="gsap"><span data-prochain data-modele="${c.s('cours.ouverture.info')}">${c.t('cours.ouverture.info', { prochain: cy.prochainTexte })}</span></p>
    </div>
    <p class="prix-geant" data-iris-centre="disque" data-info-cle data-prix><svg class="hublot-eau" data-hublot data-effet="hublot" viewBox="0 0 400 140" preserveAspectRatio="none" aria-hidden="true"><path class="vague vague--1" d="M0 40 V140 H400 V40 Z"/><path class="vague vague--2" d="M0 50 V140 H400 V50 Z"/></svg><span class="bulle" aria-hidden="true"></span><span class="bulle bulle--2" aria-hidden="true"></span><span class="bulle bulle--3" aria-hidden="true"></span><span class="prix-devise">${c.t('cours.ouverture.devise')}</span><strong>${c.t('cours.ouverture.prix')}</strong><span>${c.t('cours.ouverture.prixLibelle')}</span></p>
  </div>
  <div class="conteneur selecteur" data-selecteur id="levels">
    <p class="selecteur-aide selecteur-aide--toucher">${c.t('cours.ouverture.choisir')}</p>
    <p class="selecteur-aide selecteur-aide--souris">${c.t('cours.ouverture.choisirSouris')}</p>
    <div class="selecteur-flotteurs" data-ligne-eau data-effet="ligne-d-eau">${Array.from({ length: 10 }, (_, i) => html`<button type="button" data-level="${i + 1}" data-groupe="${g[groupeDe(i + 1)].cle}" aria-pressed="${i === 0 ? 'true' : 'false'}" aria-label="Level ${i + 1}">${i + 1}</button>`)}</div>
    <div aria-live="polite">${g.map((x, i) => html`<div class="selecteur-panneau" data-panneau="${x.cle}"${i ? html` hidden` : ''}>
      <p class="groupe-levels">${x.levels}</p>
      <div><h2>${x.nom}</h2><p>${x.contenu} · ${c.t('commun.duree')} · ${c.t('commun.lecons')}</p></div>
      <p data-prix>${c.site.prix}</p>
    </div>`)}</div>
  </div>
  <div class="conteneur">${c.media({ nom: 'cours-planches', alt: c.donnees.images['cours-planches'].alt, cadrage: '45% 55%', cadrageMobile: '50% 60%', classe: 'cours-bandeau', sizes: '(max-width: 760px) 92vw, 1240px', attrs: 'data-fx="parallaxe" data-fx-force="12"' })}</div>
</section>

<section class="fiches" id="groupes">
  <div class="conteneur">
    <div class="fiches-tete">
      <h2 data-anime="lignes">${c.t('cours.fiches.titre')}</h2>
      <p data-anime>${c.t('cours.fiches.texte')}</p>
    </div>
    <ul class="fiches-liste">${g.map((x, i) => html`<li id="${x.cle}">
      <article class="fiche" data-anime style="--delai:${(i % 2) * 0.08}s">
        <span class="fiche-num" aria-hidden="true">${x.de === x.a ? x.de : `${x.de}–${x.a}`}</span>
        <p class="groupe-levels">${x.levels}</p>
        <h3>${x.nom}</h3>
        <p class="groupe-contenu">${x.contenu}</p>
        <span class="jauge jauge--claire" aria-hidden="true">${Array.from({ length: 10 }, (_, k) => html`<i${k + 1 >= x.de && k + 1 <= x.a ? html` class="on"` : ''}></i>`)}</span>
        <p>${c.t('commun.duree')} · ${c.t('commun.lecons')} · <span class="groupe-prix" data-prix>${c.site.prix}</span></p>
        ${c.lien('inscription', { params: `groupe=${x.cle}`, classe: 'lien-fleche', texte: c.t('commun.inscrire') })}
      </article>
    </li>`)}</ul>
  </div>
</section>

<section class="deroule" id="deroule">
  <div class="conteneur">
    <h2 data-anime="lignes">${c.t('cours.deroule.titre')}</h2>
    <ol class="deroule-etapes">
      <svg data-visuel class="deroule-trait" viewBox="0 0 400 40" preserveAspectRatio="none" aria-hidden="true" data-fx="trace"><path d="M2 20 C 60 2, 90 38, 140 20 S 230 2, 270 20 S 350 38, 398 20" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>
      ${[1, 2, 3, 4].map((n) => html`<li data-anime style="--delai:${((n - 1) * 0.1).toFixed(1)}s"><span class="parcours-num">${n}</span><h3>${c.t(`cours.deroule.e${n}t`)}</h3><p>${c.t(`cours.deroule.e${n}`)}</p></li>`)}
    </ol>
  </div>
</section>

<section class="faq" id="faq">
  <div class="conteneur faq-grille">
    <div>
      <h2 data-anime="lignes">${c.t('cours.faq.titre')}</h2>
      ${[1, 2, 3, 4, 5, 6].map((n) => html`<details class="faq-item" data-anime><summary>${c.t(`cours.faq.q${n}`)}</summary><p>${c.t(`cours.faq.r${n}`)}</p></details>`)}
    </div>
    ${c.media({ nom: 'groupe-jeudi-automne-2025', alt: c.donnees.images['groupe-jeudi-automne-2025'].alt, cadrage: '50% 50%', classe: 'faq-media', sizes: '(max-width: 760px) 92vw, 34vw', legende: 'Jeudi, 4e trimestre 2025', attrs: 'data-fx="zoom"' })}
  </div>
</section>

${appel(c, { titre: 'cours.appel.titre', texte: 'cours.appel.texte' })}
`;
};
