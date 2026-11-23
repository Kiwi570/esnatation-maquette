/* Inscription : le formulaire d'abord (module « formulaire par étapes » de la bibliothèque), à côté une carte
   (sac de piscine, objet d'ouverture) et l'essentiel à retenir. Demande simulée, mention nLPD. */
import { html } from '../../outils/gabarit.mjs';
import { cycles } from '../gabarits/esn.mjs';

export const page = { cle: 'inscription', fichier: 'inscription', imagePartage: 'inscription-sac-1280.webp' };

export default (c) => {
  const cy = cycles();
  const g = c.donnees.groupes;
  const choixCycles = cy.liste.filter((x) => x.statut === 'enCours' || x.statut === 'prochain' || x.statut === 'ensuite');
  return html`
<section class="inscr" id="debut">
  <div class="conteneur inscr-grille">
      <div class="inscr-tete">
        <p class="surtitre masque-ecran-tres-bas" data-anime="gsap">${c.t('inscription.ouverture.surtitre')}</p>
        <h1 class="titre-page" data-anime="gsap"><span class="ligne-masque"><span class="titre-ligne">${c.t('inscription.ouverture.titre')}</span></span></h1>
        <p class="intro" data-anime="gsap">${c.t('inscription.ouverture.texte')}</p>
        <p class="hero-actions" data-anime="gsap"><a class="bouton" href="#formulaire" data-action-principale data-sans-transition>${c.t('inscription.continuer')}</a></p>
        <p class="hero-info" data-info-cle data-anime="gsap"><span data-prochain data-modele="${c.s('inscription.ouverture.info')}">${c.t('inscription.ouverture.info', { prochain: cy.prochainTexte })}</span></p>
        <p class="simule" data-anime="gsap">${c.t('inscription.ouverture.simule')}</p>
      </div>
    <aside class="inscr-aside">
      ${c.media({ nom: 'inscription-sac', alt: c.donnees.images['inscription-sac'].alt, cadrage: '45% 62%', cadrageMobile: '45% 65%', priorite: true, classe: 'inscr-media', sizes: '(max-width: 760px) 92vw, 30vw', attrs: 'data-fx="zoom" data-iris-centre' })}
      <div class="retenir">
        <h2>${c.t('inscription.aside.titre')}</h2>
        <ul><li>${c.t('inscription.aside.l1')}</li><li>${c.t('inscription.aside.l2')}</li><li>${c.t('inscription.aside.l3')}</li></ul>
        <p>${c.t('commun.rappelConfirmation')}</p>
        <p>${c.t('inscription.aside.telTexte')} <a href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a></p>
      </div>
    </aside>

      <section class="fpe" data-module="formulaire-par-etapes" id="formulaire" aria-label="${c.s('pages.inscription.nav')}">
        <div class="fpe__carton" data-anime>
          <form class="fpe__form" novalidate action="#">
            <fieldset class="fpe__etape" data-etape="${c.s('inscription.etape1')}">
              <legend class="fpe__legende"><h2 class="fpe__titre" tabindex="-1">${c.t('inscription.q1')}</h2></legend>
              <div class="fpe__champs">
                <div class="fpe__champ"><label for="i-prenom">${c.t('inscription.prenom')}</label><input id="i-prenom" name="prenom" autocomplete="off" required data-libelle="${c.s('inscription.prenom')}"></div>
                <div class="fpe__champ"><label for="i-age">${c.t('inscription.age')}</label><input id="i-age" name="age" type="number" inputmode="numeric" min="4" max="17" required aria-describedby="i-age-aide" data-libelle="${c.s('inscription.age')}" data-message="Dès 4 ans révolus."><small id="i-age-aide">${c.t('inscription.ageAide')}</small></div>
              </div>
              <fieldset class="fpe__groupe fpe__cartes" data-libelle="${c.s('inscription.groupe')}">
                <legend class="fpe__groupe-titre">${c.t('inscription.groupe')}</legend>
                ${g.map((x) => html`<label class="fpe__carte"><input type="radio" name="groupe" value="${x.cle}" required><span class="fpe__icone" aria-hidden="true">${x.de === x.a ? x.de : `${x.de}–${x.a}`}</span><span class="fpe__carte-titre">${x.nom}</span><span class="fpe__carte-texte">${x.levels} · ${x.contenu}</span></label>`)}
                <label class="fpe__carte"><input type="radio" name="groupe" value="a-choisir" required><span class="fpe__icone" aria-hidden="true">?</span><span class="fpe__carte-titre">${c.t('inscription.groupeHesite')}</span><span class="fpe__carte-texte">${c.t('inscription.groupeHesiteTexte')}</span></label>
              </fieldset>
            </fieldset>
            <fieldset class="fpe__etape" data-etape="${c.s('inscription.etape2')}">
              <legend class="fpe__legende"><h2 class="fpe__titre" tabindex="-1">${c.t('inscription.q2')}</h2></legend>
              <fieldset class="fpe__groupe fpe__cartes" data-libelle="${c.s('inscription.jour')}">
                <legend class="fpe__groupe-titre">${c.t('inscription.jour')}</legend>
                <label class="fpe__carte"><input type="radio" name="jour" value="lundi" required><span class="fpe__icone" aria-hidden="true">L</span><span class="fpe__carte-titre">${c.t('inscription.lundi')}</span><span class="fpe__carte-texte">${c.t('contact.horaires.heures')}</span></label>
                <label class="fpe__carte"><input type="radio" name="jour" value="jeudi" required><span class="fpe__icone" aria-hidden="true">J</span><span class="fpe__carte-titre">${c.t('inscription.jeudi')}</span><span class="fpe__carte-texte">${c.t('contact.horaires.heures')}</span></label>
                <label class="fpe__carte"><input type="radio" name="jour" value="egal" required><span class="fpe__icone" aria-hidden="true">=</span><span class="fpe__carte-titre">${c.t('inscription.egal')}</span><span class="fpe__carte-texte">${c.t('inscription.egalTexte')}</span></label>
              </fieldset>
              <fieldset class="fpe__groupe fpe__cartes" data-libelle="${c.s('inscription.cycle')}">
                <legend class="fpe__groupe-titre">${c.t('inscription.cycle')}</legend>
                ${choixCycles.map((x, i) => html`<label class="fpe__carte"><input type="radio" name="cycle" value="${x.cle}-${x.annee}" required${x.statut === 'prochain' ? html` checked` : ''}><span class="fpe__icone" aria-hidden="true">${i + 1}</span><span class="fpe__carte-titre">${c.t(`accueil.annee.${x.cleTexte}`)} ${x.annee}</span><span class="fpe__carte-texte">${c.t(`cycles.${x.statut}`)}</span></label>`)}
              </fieldset>
            </fieldset>
            <fieldset class="fpe__etape" data-etape="${c.s('inscription.etape3')}">
              <legend class="fpe__legende"><h2 class="fpe__titre" tabindex="-1">${c.t('inscription.q3')}</h2></legend>
              <div class="fpe__champs">
                <div class="fpe__champ"><label for="i-nom">${c.t('inscription.nom')}</label><input id="i-nom" name="nom" autocomplete="name" required data-libelle="${c.s('inscription.nom')}"></div>
                <div class="fpe__champ"><label for="i-email">${c.t('inscription.email')}</label><input id="i-email" name="email" type="email" autocomplete="email" required data-libelle="${c.s('inscription.email')}"></div>
                <div class="fpe__champ"><label for="i-tel">${c.t('inscription.tel')}</label><input id="i-tel" name="tel" type="tel" autocomplete="tel" required pattern="[0-9+ ().-]{9,}" data-libelle="${c.s('inscription.tel')}"></div>
                <div class="fpe__champ"><label for="i-message">${c.t('inscription.message')}</label><textarea id="i-message" name="message" rows="3" data-libelle="${c.s('inscription.message')}"></textarea></div>
              </div>
              <p class="fpe__note">${c.t('inscription.avs')}</p>
              <label class="fpe__case"><input type="checkbox" name="accord" required data-hors-recap><span>${c.t('inscription.accord')}</span></label>
              <p class="mention-donnees">${c.tb('inscription.donnees')}</p>
            </fieldset>
            <fieldset class="fpe__etape" data-etape="${c.s('inscription.etape4')}" data-recap>
              <legend class="fpe__legende"><h2 class="fpe__titre" tabindex="-1">${c.t('inscription.q4')}</h2></legend>
              <div class="fpe__recap"></div>
            </fieldset>
            <div class="fpe__nav">
              <button type="button" class="bouton bouton--contour" data-precedent>${c.t('inscription.retour')}</button>
              <button type="button" class="bouton" data-suivant>${c.t('inscription.continuer')}</button>
              <button type="submit" class="bouton">${c.t('inscription.envoyer')}</button>
            </div>
          </form>
          <div class="fpe__fin" hidden tabindex="-1">
            <h2>${c.t('inscription.finTitre')}</h2>
            <p>${c.t('inscription.finTexte')}</p>
            <p data-resume></p>
            <button type="button" class="bouton bouton--contour" data-recommencer>${c.t('inscription.recommencer')}</button>
          </div>
        </div>
      </section>
  </div>
</section>
`;
};
