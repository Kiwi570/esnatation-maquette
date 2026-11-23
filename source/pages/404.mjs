/* Page 404 : une planche jaune seule au milieu du bassin, le poisson pour remonter à l'accueil. */
import { html } from '../../outils/gabarit.mjs';

export const page = { cle: '404', fichier: '404', langues: ['fr'], partage: false };

export default (c) => html`
<section class="introuvable conteneur" id="debut">
  ${c.media({ nom: 'page-404', alt: c.s('introuvable.alt'), cadrage: '50% 50%', priorite: true, classe: 'introuvable-media', sizes: '(max-width: 760px) 92vw, 1240px', attrs: 'data-fx="parallaxe" data-iris-centre' })}
  <h1 class="titre-page" data-anime="gsap"><span class="ligne-masque"><span class="titre-ligne">${c.t('introuvable.titre')}</span></span></h1>
  <p data-anime="gsap">${c.t('introuvable.texte')}</p>
  <p data-anime="gsap">${c.lien('accueil', { classe: 'bouton', texte: c.t('introuvable.retour'), attrs: 'data-action-principale data-info-cle' })}</p>
</section>
`;
