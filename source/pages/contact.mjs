/* Contact : le numéro en très grand, une carte du bassin au soir (objet d'ouverture), plan indicatif de Puidoux,
   horaires, formulaire court simulé. */
import { html } from '../../outils/gabarit.mjs';

export const page = { cle: 'contact', fichier: 'contact', imagePartage: 'contact-bassin-soir-1280.webp' };

export default (c) => html`
<section class="contact-tete" id="debut">
  <div class="conteneur contact-grille">
    <div>
      <p class="surtitre masque-ecran-tres-bas" data-anime="gsap">${c.t('contact.ouverture.surtitre')}</p>
      <h1 class="titre-page" data-anime="gsap"><span class="ligne-masque"><span class="titre-ligne">${c.t('contact.ouverture.titre')}</span></span></h1>
      <p class="intro" data-anime="gsap">${c.t('contact.ouverture.texte')}</p>
      <p data-anime="gsap"><a class="tel-geant" href="tel:${c.site.contact.telephoneLien}" data-action-principale><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z"/></svg>${c.site.contact.telephone}</a></p>
      <p class="courriel-geant courriel" data-anime="gsap">${c.site.contact.email}</p>
      <p class="contact-info" data-info-cle data-anime="gsap">${c.t('contact.ouverture.info')}</p>
    </div>
    ${c.media({ nom: 'contact-bassin-soir', alt: c.donnees.images['contact-bassin-soir'].alt, cadrage: '55% 55%', priorite: true, classe: 'contact-media', sizes: '(max-width: 760px) 92vw, 42vw', attrs: 'data-fx="parallaxe" data-iris-centre' })}
  </div>
</section>

<section class="lieu" id="lieu">
  <div class="conteneur lieu-grille">
    <div>
      <h2 data-anime="lignes">${c.t('contact.lieu.titre')}</h2>
      <p data-anime>${c.t('contact.lieu.texte')}</p>
      <p data-anime><strong>${c.t('commun.lieu')}</strong></p>
    </div>
    <div class="plan" data-visuel>
      <p class="plan-note">${c.t('contact.lieu.plan')}</p>
      <svg viewBox="0 0 600 400" role="img" aria-label="${c.s('contact.lieu.plan')} : ${c.s('contact.lieu.piscine')}, ${c.s('contact.lieu.puidoux')}" data-fx="trace">
        <path d="M0 292 C 110 268, 220 312, 330 292 S 520 246, 600 272 V 400 H 0 Z" fill="#E3F1F4"/>
        <g data-vague-lac fill="none" stroke-linecap="round">
          <path class="lac-vague" d="M0 292 C 110 268, 220 312, 330 292 S 520 246, 600 272" stroke="#0A62A8" stroke-width="2.5"/>
          <path class="lac-vague lac-vague--2" d="M20 330 C 120 318, 220 342, 330 328 S 520 300, 590 312" stroke="#7fb6dc" stroke-width="2"/>
          <path class="lac-vague lac-vague--3" d="M60 362 C 150 352, 240 372, 340 360 S 500 340, 570 348" stroke="#a9cfe7" stroke-width="2"/>
        </g>
        <g fill="none" stroke="#86ad62" stroke-width="2.5" stroke-linecap="round">
          <path d="M40 252 C 120 232, 190 238, 250 216" data-fx-trait/>
          <path d="M58 222 C 130 204, 196 206, 262 184" data-fx-trait/>
          <path d="M80 192 C 146 176, 206 176, 274 152" data-fx-trait/>
          <path d="M104 162 C 166 148, 220 146, 286 122" data-fx-trait/>
        </g>
        <path d="M250 262 C 300 236, 340 190, 395 120" fill="none" stroke="#0B2230" stroke-width="2.5" stroke-dasharray="7 7" data-fx-trait/>
        <circle cx="250" cy="262" r="8" fill="#0B2230"/>
        <circle class="plan-onde" cx="395" cy="120" r="14" fill="none" stroke="#D42A21" stroke-width="2"/>
        <circle class="plan-onde plan-onde--2" cx="395" cy="120" r="14" fill="none" stroke="#D42A21" stroke-width="2"/>
        <circle cx="395" cy="120" r="11" fill="#D42A21" data-repere/>
        <g transform="translate(548 52)" fill="#0B2230"><path d="M0 -22 L 8 6 L 0 1 L -8 6 Z"/><text y="24" text-anchor="middle" font-size="15" font-weight="700" font-family="Figtree, sans-serif">N</text></g>
        <text x="236" y="292" text-anchor="end" font-size="20" font-weight="700" fill="#0B2230" font-family="Figtree, sans-serif">${c.t('contact.lieu.chexbres')}</text>
        <text x="420" y="112" font-size="22" font-weight="700" fill="#0B2230" font-family="Figtree, sans-serif">${c.t('contact.lieu.puidoux')}</text>
        <text x="420" y="138" font-size="17" font-weight="600" fill="#0A62A8" font-family="Figtree, sans-serif">${c.t('contact.lieu.piscine')}</text>
        <text x="300" y="386" text-anchor="middle" font-size="20" font-weight="700" fill="#0A62A8" font-family="Figtree, sans-serif">${c.t('contact.lieu.lac')}</text>
      </svg>
    </div>
  </div>
</section>

<section class="horaires" id="horaires">
  <div class="conteneur">
    <h2 data-anime="lignes">${c.t('contact.horaires.titre')}</h2>
    <ul class="horaires-liste" data-anime="cascade">
      ${['lundi', 'jeudi'].map((j) => html`<li class="jour"><strong>${c.t(`contact.horaires.${j}`)}</strong><span>${c.t('contact.horaires.heures')}</span>
        <span class="creneau" aria-hidden="true"><span class="creneau-piste"><span class="creneau-plage"></span></span><span class="creneau-bornes"><i>16 h</i><i>21 h</i></span></span></li>`)}
    </ul>
    <p class="horaires-note" data-anime>${c.t('contact.horaires.note')}</p>
    <p class="rappel" data-anime>${c.t('commun.rappelConfirmation')}</p>
  </div>
</section>

<section class="ecrire" id="ecrire">
  <div class="conteneur ecrire-grille">
    <div>
      <h2 data-anime="lignes">${c.t('contact.formulaire.titre')}</h2>
      <p data-anime>${c.t('contact.formulaire.simule')}</p>
      <img class="ecrire-poisson" src="/assets/images/logo.svg" alt="" width="260" height="188" loading="lazy" data-fx="vitesse" data-visuel>
    </div>
    <form data-formulaire action="#" novalidate data-anime>
      <div class="champ"><label for="c-nom">${c.t('contact.formulaire.nom')}</label><input id="c-nom" name="nom" autocomplete="name" required></div>
      <div class="champ"><label for="c-email">${c.t('contact.formulaire.email')}</label><input id="c-email" name="email" type="email" autocomplete="email" required></div>
      <div class="champ"><label for="c-tel">${c.t('contact.formulaire.tel')}</label><input id="c-tel" name="tel" type="tel" autocomplete="tel"></div>
      <div class="champ"><label for="c-sujet">${c.t('contact.formulaire.sujet')}</label>
        <select id="c-sujet" name="sujet">
          <option value="inscription">${c.t('contact.formulaire.sujetInscription')}</option>
          <option value="groupe">${c.t('contact.formulaire.sujetGroupe')}</option>
          <option value="autre" selected>${c.t('contact.formulaire.sujetAutre')}</option>
        </select></div>
      <div class="champ"><label for="c-message">${c.t('contact.formulaire.message')}</label><textarea id="c-message" name="message" rows="5" required></textarea></div>
      <p class="mention-donnees">${c.tb('contact.formulaire.donnees')}</p>
      <button type="submit" class="bouton">${c.t('contact.formulaire.envoyer')}</button>
      <p data-message-envoi role="status" tabindex="-1" hidden></p>
    </form>
  </div>
</section>
`;
