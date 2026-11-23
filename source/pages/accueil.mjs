/* Accueil ESN : ouverture texte et image (carrelage, reflets WebGL, grand cadre du bassin, carte d'un vrai groupe),
   pour qui, les 5 groupes sur la ligne d'eau, la méthode, les quatre conseils et la bande de photos,
   l'année en trois cycles, l'équipe, la confiance, l'appel final. */
import { html } from '../../outils/gabarit.mjs';
import { cycles, ligneEau, bandePhotos, appel, anneeCycles } from '../gabarits/esn.mjs';

export const page = { cle: 'accueil', fichier: 'index', imagePartage: 'accueil-bassin-1280.webp' };

export default (c) => {
  const cy = cycles();
  const g = c.donnees.groupes;
  return html`
<section class="hero" id="debut">
  <canvas class="caustiques caustiques--hero" data-caustiques="hero" data-effet="caustiques" data-visuel aria-hidden="true"></canvas>
  <div class="hero-grille">
    <div class="hero-texte">
      <p class="surtitre hero-sur masque-ecran-bas" data-anime="gsap">${c.t('accueil.hero.surtitre')}</p>
      <h1 class="titre-ouverture" data-anime="gsap"><span class="ligne-masque"><span class="titre-ligne">${c.t('accueil.hero.titre1')}</span></span><span class="ligne-masque"><span class="titre-ligne titre-ligne--bleu">${c.t('accueil.hero.titre2')}</span></span></h1>
      <p class="hero-intro masque-ecran-tres-bas" data-anime="gsap">${c.t('accueil.hero.texte')}</p>
      <p class="hero-actions" data-anime="gsap">
        ${c.lien('inscription', { classe: 'bouton', texte: c.t('commun.demander'), attrs: 'data-action-principale data-survol="magnetique"' })}
        ${c.lien('cours', { classe: 'bouton bouton--contour hero-second', texte: c.t('commun.voirCours') })}
      </p>
      <p class="hero-info" data-info-cle data-anime="gsap"><span data-prochain data-modele="${c.s('accueil.hero.info')}">${c.t('accueil.hero.info', { prochain: cy.prochainTexte })}</span><span>${c.t('accueil.hero.infoPrix')}</span></p>
    </div>
    <div class="hero-visuel">
      ${c.media({ nom: 'accueil-bassin', alt: c.donnees.images['accueil-bassin'].alt, cadrage: '60% 40%', priorite: true, classe: 'hero-cadre', sizes: '(max-width: 760px) 92vw, 40vw', attrs: 'data-fx="parallaxe" data-fx-force="8" data-iris-centre' })}
      ${c.media({ nom: 'groupe-lundi-2026', alt: c.donnees.images['groupe-lundi-2026'].alt, cadrage: '50% 40%', classe: 'hero-carte', sizes: '(max-width: 760px) 50vw, 18vw', ratio: '4 / 3', legende: c.t('accueil.hero.carteLegende'), attrs: 'data-anime="gsap"' })}
    </div>
  </div>
  ${ligneEau(22, 'ligne-eau--hero')}
</section>

<section class="pourqui" id="pour-qui">
  <div class="conteneur pourqui-grille">
    <div class="pourqui-texte">
      <h2 data-anime="lignes">${c.t('accueil.pourqui.titre')}</h2>
      <p data-anime>${c.t('accueil.pourqui.texte')}</p>
      <ul class="pourqui-chiffres chiffres">
        <li data-anime><strong data-compteur="4">4</strong><span>${c.t('accueil.pourqui.c1')}</span></li>
        <li data-anime style="--delai:.08s"><strong data-compteur="12">12</strong><span>${c.t('accueil.pourqui.c2')}</span></li>
        <li data-anime style="--delai:.16s"><strong data-compteur="45">45</strong><span>${c.t('accueil.pourqui.c3')}</span></li>
        <li data-anime style="--delai:.24s"><strong data-compteur="10">10</strong><span>${c.t('accueil.pourqui.c4')}</span></li>
      </ul>
    </div>
    ${c.media({ nom: 'accueil-bonnets', alt: c.donnees.images['accueil-bonnets'].alt, cadrage: '50% 60%', classe: 'pourqui-media', sizes: '(max-width: 760px) 92vw, 38vw', attrs: 'data-fx="zoom"' })}
  </div>
</section>

<section class="groupes bande-bleue" id="groupes" data-groupes>
  <div class="conteneur">
    <div class="groupes-tete">
      <p class="surtitre surtitre--clair">${c.t('accueil.groupes.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('accueil.groupes.titre')}</h2>
      <p data-anime>${c.t('accueil.groupes.texte')}</p>
    </div>
    <div class="couloir" data-couloir data-visuel aria-label="${c.s('commun.ligneEau')}" role="img">
      <div class="couloir-flotteurs" data-ligne-eau data-effet="ligne-d-eau">${Array.from({ length: 10 }, (_, i) => html`<span class="flotteur"><b>${i + 1}</b></span>`)}</div>
      <div class="couloir-groupes">${g.map((x, i) => html`<span class="couloir-groupe" data-couloir-groupe="${i}" style="grid-column:${x.de} / ${x.a + 1}"><span class="couloir-nom">${x.nom}</span></span>`)}</div>
      <img class="couloir-poisson" data-couloir-poisson src="/assets/images/logo-clair.svg" alt="" width="64" height="46">
    </div>
    <ol class="groupes-liste">${g.map((x, i) => html`<li class="groupe-carte" data-groupe-carte="${i}" data-anime style="--delai:${(i * 0.07).toFixed(2)}s">
      <p class="groupe-levels">${x.levels}</p>
      <h3>${x.nom}</h3>
      <p class="groupe-contenu">${x.contenu}</p>
      <p class="groupe-meta">${c.t('commun.duree')} · ${c.t('commun.lecons')}</p>
      <p class="groupe-prix" data-prix>${c.site.prix}</p>
      ${c.lien('inscription', { params: `groupe=${x.cle}`, classe: 'lien-fleche', texte: c.t('commun.inscrire') })}
    </li>`)}</ol>
    <p class="groupes-plus" data-anime>${c.lien('cours', { classe: 'bouton bouton--blanc', texte: c.t('accueil.groupes.tous') })}</p>
  </div>
</section>

<section class="methode" id="methode">
  <div class="conteneur methode-grille">
    <div>
      <h2 data-anime="lignes">${c.t('accueil.methode.titre')}</h2>
      <p data-anime>${c.t('accueil.methode.texte')}</p>
      <div class="parcours">
        <svg class="parcours-trait" viewBox="0 0 40 400" preserveAspectRatio="none" aria-hidden="true" data-fx="trace"><path d="M20 4 C 36 54, 4 96, 20 146 S 36 246, 20 296 S 4 360, 20 396" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
        <ol class="parcours-etapes">
          ${[1, 2, 3, 4].map((n) => html`<li data-anime style="--delai:${((n - 1) * 0.1).toFixed(1)}s"><span class="parcours-num">${n}</span><div><h3>${c.t(`accueil.methode.e${n}t`)}</h3><p>${c.t(`accueil.methode.e${n}`)}</p></div></li>`)}
        </ol>
      </div>
    </div>
    ${c.media({ nom: 'plongeon', alt: c.donnees.images.plongeon.alt, cadrage: '40% 50%', classe: 'methode-media', sizes: '(max-width: 760px) 92vw, 44vw', ratio: '4 / 3', legende: c.t('accueil.methode.legende'), attrs: 'data-anime="rideau"' })}
  </div>
</section>

<section class="conseils" id="conseils">
  <div class="conteneur">
    <h2 class="conseils-titre" data-anime="lignes">${c.t('accueil.conseils.titre')}</h2>
    <ul class="visuellement-cache"><li>${c.t('accueil.conseils.mot1')}</li><li>${c.t('accueil.conseils.mot2')}</li><li>${c.t('accueil.conseils.mot3')}</li><li>${c.t('accueil.conseils.mot4')}</li></ul>
  </div>
  <div class="mots" data-fx="mots-geants" aria-hidden="true" data-ruban data-visuel data-audit-ignorer>
    <p data-fx-rangee>${[1, 2, 1, 2, 1, 2].map((n) => html`<span class="mot">${c.t(`accueil.conseils.mot${n}`)}</span><span class="mot-point"></span>`)}</p>
    <p data-fx-rangee data-sens="-1">${[3, 4, 3, 4, 3, 4].map((n) => html`<span class="mot mot--plein">${c.t(`accueil.conseils.mot${n}`)}</span><span class="mot-point"></span>`)}</p>
  </div>
  ${bandePhotos(c, c.donnees.photos.slice(1, 7), c.s('accueil.conseils.region'))}
  <p class="conteneur conseils-note" data-anime>${c.t('accueil.conseils.texte')}</p>
</section>

<section class="annee" id="annee">
  <div class="conteneur">
    <div class="annee-tete">
      <h2 data-anime="lignes">${c.t('accueil.annee.titre')}</h2>
      <p data-anime>${c.t('accueil.annee.texte')}</p>
    </div>
    ${anneeCycles(c)}
    <dl class="infos-pratiques">
      <div data-anime><dt>${c.t('accueil.annee.quand')}</dt><dd>${c.t('commun.horaires')}</dd></div>
      <div data-anime style="--delai:.08s"><dt>${c.t('accueil.annee.ou')}</dt><dd>${c.t('commun.lieu')}</dd></div>
      <div data-anime style="--delai:.16s"><dt>${c.t('accueil.annee.combien')}</dt><dd><span data-prix>${c.site.prix}</span> ${c.t('commun.prixLibelle')}</dd></div>
    </dl>
    <p class="rappel" data-anime>${c.t('commun.rappelConfirmation')}</p>
  </div>
</section>

<section class="equipe" id="equipe">
  <div class="conteneur">
    <div class="equipe-tete">
      <h2 data-anime="lignes">${c.t('accueil.equipe.titre')}</h2>
      <p data-anime>${c.t('accueil.equipe.texte')}</p>
    </div>
    <ul class="equipe-liste" data-anime="cascade">${c.donnees.equipe.map((p) => html`<li class="personne">
      ${c.media({ nom: p.image, alt: p.nom, cadrage: '50% 35%', classe: 'personne-photo', sizes: '160px', ratio: '1 / 1' })}
      <h3>${p.nom}</h3><p>${p.role}</p>
    </li>`)}</ul>
    <p data-anime>${c.lien('ecole', { ancre: 'equipe', classe: 'lien-fleche', texte: c.t('accueil.equipe.lien') })}</p>
  </div>
</section>

<section class="confiance" id="confiance">
  <div class="conteneur confiance-grille">
    <div class="confiance-chiffre chiffres" data-visuel>
      <img class="confiance-poisson" src="/assets/images/logo.svg" alt="" width="220" height="159" loading="lazy" data-fx="vitesse" data-fx-force="4">
      <p><strong data-compteur="${new Date().getFullYear() - c.site.fondation}">${new Date().getFullYear() - c.site.fondation}</strong> <span>${c.t('accueil.confiance.annees')}</span></p>
      <p class="confiance-depuis">${c.t('accueil.confiance.depuis')}</p>
    </div>
    <div>
      <h2 data-anime="lignes">${c.t('accueil.confiance.titre')}</h2>
      <p data-anime>${c.t('accueil.confiance.texte')}</p>
      <ul class="charte-mini" data-anime="cascade">${c.donnees.charte.slice(0, 3).map((x) => html`<li>${x}</li>`)}</ul>
      <p data-anime>${c.lien('ecole', { ancre: 'charte', classe: 'lien-fleche', texte: c.t('accueil.confiance.lien') })}</p>
    </div>
  </div>
</section>

${appel(c, { titre: 'accueil.appel.titre', texte: 'accueil.appel.texte', vars: { mois: cy.prochainMois } })}
`;
};
