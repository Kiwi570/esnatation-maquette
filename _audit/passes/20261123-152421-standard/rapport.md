# Rapport d’audit

Projet : `esnatation-maquette` · 23/11/2026 16:41:23 · 17 min · 6 page(s) · audit standard

## Résumé

- Statut : **369 échec(s)**
- Passe : `20261123-152421-standard` · version ?v=1
- Échecs : **369**
- À regarder : **28**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (3), mesures (66), balayage (5), films d’ouverture (10), films de transition (10), bords de l’écran (6), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (4), liens vers la page en cours (5), changements de hauteur (4), fluidité (10), défilement selon l’appareil (5), mouvement (10), effets du plan (4), souris immobile (3), vitesse (5), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✗ absent | aucun data-grille="manipuler" sur l’accueil |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 5 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | ✓ présent | voile en iris |
| 4. Quelque chose relie les sections et les pages | ✗ absent | sur aucune page |
| 5. Un titre fait l’événement sur chaque page | ✗ absent | sur aucune page |
| 6. La scène est un geste du métier | · sans objet | aucune scène épinglée marquée ni galerie générique |
| 7. L’action principale a un retour physique | ✗ absent | sur aucune page |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Échecs

### langues (292)

- **langues** — texte manquant en en : commun.logoLien
- **langues** — texte manquant en en : commun.marque
- **langues** — texte manquant en en : commun.marqueSous
- **langues** — texte manquant en en : commun.mentions
- **langues** — texte manquant en en : commun.confidentialite
- **langues** — texte manquant en en : commun.js
- **langues** — texte manquant en en : commun.lieu
- **langues** — texte manquant en en : commun.horaires
- **langues** — texte manquant en en : commun.periodes
- **langues** — texte manquant en en : commun.emailLibelle
- **langues** — texte manquant en en : commun.telLibelle
- **langues** — texte manquant en en : commun.copie
- **langues** — texte manquant en en : commun.duree
- **langues** — texte manquant en en : commun.lecons
- **langues** — texte manquant en en : commun.prixLibelle
- **langues** — texte manquant en en : commun.inscrire
- **langues** — texte manquant en en : commun.demander
- **langues** — texte manquant en en : commun.voirCours
- **langues** — texte manquant en en : commun.rappelConfirmation
- **langues** — texte manquant en en : commun.ligneEau
- **langues** — texte manquant en en : pages.cours.titre
- **langues** — texte manquant en en : pages.cours.description
- **langues** — texte manquant en en : pages.cours.nav
- **langues** — texte manquant en en : pages.cours.partageAlt
- **langues** — texte manquant en en : pages.cours.accroche
- **langues** — texte manquant en en : pages.ecole.titre
- **langues** — texte manquant en en : pages.ecole.description
- **langues** — texte manquant en en : pages.ecole.nav
- **langues** — texte manquant en en : pages.ecole.partageAlt
- **langues** — texte manquant en en : pages.ecole.accroche
- **langues** — texte manquant en en : pages.inscription.titre
- **langues** — texte manquant en en : pages.inscription.description
- **langues** — texte manquant en en : pages.inscription.nav
- **langues** — texte manquant en en : pages.inscription.partageAlt
- **langues** — texte manquant en en : pages.inscription.accroche
- **langues** — texte manquant en en : pages.contact.titre
- **langues** — texte manquant en en : pages.contact.description
- **langues** — texte manquant en en : pages.contact.nav
- **langues** — texte manquant en en : pages.contact.partageAlt
- **langues** — texte manquant en en : pages.contact.accroche
- … et 252 autres (rapport.json)

### pages générées (1)

- **pages générées** — pas régénérées depuis la dernière modification des données (node outils/generer.mjs) : 404.html, contact.html, cours.html, ecole.html, index.html, inscription.html

### contraste insuffisant (24)

- **contraste insuffisant** — `/` — header > div.entete-rangee > div.entete-actions > a.bouton:nth-of-type(1) « S'inscrire » — 4.34:1 (minimum 4.5:1) _(768×1024 normal, 844×390 normal, 1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **contraste insuffisant** — `/` — div.hero-grille:nth-of-type(1) > div.hero-texte:nth-of-type(1) > p.hero-actions:nth-of-type(3) > a.bouton:nth-of-type(1) « Demander une inscription » — 4.34:1 (minimum 4.5:1) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1920×1080 normal, +5)_
- **contraste insuffisant** — `/` — div.parcours > ol.parcours-etapes > li:nth-of-type(4) > span.parcours-num « 4 » — 4.34:1 (minimum 4.5:1) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1920×1080 normal, +5)_
- **contraste insuffisant** — `/` — div.cycles:nth-of-type(2) > ol.cycles-liste > li.cycle:nth-of-type(2) > span.cycle-statut:nth-of-type(1) « Prochain cycle » — 4.34:1 (minimum 4.5:1) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1920×1080 normal, +5)_
- **contraste insuffisant** — `/` — body#haut > div:nth-of-type(4) > a.bouton:nth-of-type(2) « S'inscrire » — 4.34:1 (minimum 4.5:1) _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **contraste insuffisant** — `/404` — section#debut > p:nth-of-type(2) > a.bouton « Retour à l'accueil » — 4.34:1 (minimum 4.5:1) _(320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **contraste insuffisant** — `/404` — body#haut > div:nth-of-type(4) > a.bouton:nth-of-type(2) « S'inscrire » — 4.34:1 (minimum 4.5:1) _(320×568 normal, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/404` — body#haut > div.barre-masquee:nth-of-type(4) > a.bouton:nth-of-type(2) « S'inscrire » — 4.34:1 (minimum 4.5:1) _(390×844 normal, 390×844 sansWebgl)_
- **contraste insuffisant** — `/404` — header > div.entete-rangee > div.entete-actions > a.bouton:nth-of-type(1) « S'inscrire » — 4.34:1 (minimum 4.5:1) _(844×390 normal, 768×1024 normal, 1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **contraste insuffisant** — `/contact` — section#ecrire > div.conteneur.ecrire-grille > form > button.bouton « Envoyer » — 4.34:1 (minimum 4.5:1) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **contraste insuffisant** — `/contact` — body#haut > div:nth-of-type(4) > a.bouton:nth-of-type(2) « S'inscrire » — 4.34:1 (minimum 4.5:1) _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **contraste insuffisant** — `/contact` — header > div.entete-rangee > div.entete-actions > a.bouton:nth-of-type(1) « S'inscrire » — 4.34:1 (minimum 4.5:1) _(768×1024 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **contraste insuffisant** — `/cours` — header > div.entete-rangee > div.entete-actions > a.bouton:nth-of-type(1) « S'inscrire » — 4.34:1 (minimum 4.5:1) _(768×1024 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **contraste insuffisant** — `/cours` — div.conteneur.cours-tete-grille:nth-of-type(1) > div > p.hero-actions:nth-of-type(3) > a.bouton « Inscrire mon enfant » — 4.34:1 (minimum 4.5:1) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **contraste insuffisant** — `/cours` — div.conteneur > ol.deroule-etapes > li:nth-of-type(1) > span.parcours-num « 1 » — 4.34:1 (minimum 4.5:1) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **contraste insuffisant** — `/cours` — body#haut > div:nth-of-type(4) > a.bouton:nth-of-type(2) « S'inscrire » — 4.34:1 (minimum 4.5:1) _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **contraste insuffisant** — `/ecole` — body#haut > div:nth-of-type(4) > a.bouton:nth-of-type(2) « S'inscrire » — 4.34:1 (minimum 4.5:1) _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **contraste insuffisant** — `/ecole` — header > div.entete-rangee > div.entete-actions > a.bouton:nth-of-type(1) « S'inscrire » — 4.34:1 (minimum 4.5:1) _(768×1024 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **contraste insuffisant** — `/inscription` — div > div.inscr-tete > p.hero-actions:nth-of-type(3) > a.bouton « Continuer » — 4.34:1 (minimum 4.5:1) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **contraste insuffisant** — `/inscription` — div.fpe__carton > form.fpe__form > div.fpe__nav:nth-of-type(2) > button.bouton:nth-of-type(2) « Continuer » — 4.34:1 (minimum 4.5:1) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, +2)_
- **contraste insuffisant** — `/inscription` — body#haut > div.barre-masquee:nth-of-type(4) > a.bouton:nth-of-type(2) « S'inscrire » — 4.34:1 (minimum 4.5:1) _(390×844 normal, 320×568 normal, 390×844 sansWebgl)_
- **contraste insuffisant** — `/inscription` — header > div.entete-rangee > div.entete-actions > a.bouton:nth-of-type(1) « S'inscrire » — 4.34:1 (minimum 4.5:1) _(768×1024 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **contraste insuffisant** — `/inscription` — div.fpe__carton > form.fpe__form > div.fpe__nav > button.bouton:nth-of-type(3) « Envoyer la demande » — 4.34:1 (minimum 4.5:1) _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/inscription` — body#haut > div:nth-of-type(4) > a.bouton:nth-of-type(2) « S'inscrire » — 4.34:1 (minimum 4.5:1) _(390×844 sansJs, 320×568 sansJs)_

### texte sous 12 px (6)

- **texte sous 12 px** — `/` — div.conteneur > div.couloir:nth-of-type(2) > div.couloir-groupes:nth-of-type(2) > span.couloir-groupe.actif:nth-of-type(1) « Débutant » — 0.0 px _(390×844 normal, 320×568 normal, 390×844 sansWebgl)_
- **texte sous 12 px** — `/` — div.conteneur > div.couloir:nth-of-type(2) > div.couloir-groupes:nth-of-type(2) > span.couloir-groupe:nth-of-type(2) « Moyen » — 0.0 px _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **texte sous 12 px** — `/` — div.conteneur > div.couloir:nth-of-type(2) > div.couloir-groupes:nth-of-type(2) > span.couloir-groupe:nth-of-type(3) « Avancé 1 » — 0.0 px _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **texte sous 12 px** — `/` — div.conteneur > div.couloir:nth-of-type(2) > div.couloir-groupes:nth-of-type(2) > span.couloir-groupe:nth-of-type(4) « Avancé 2 » — 0.0 px _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **texte sous 12 px** — `/` — div.conteneur > div.couloir:nth-of-type(2) > div.couloir-groupes:nth-of-type(2) > span.couloir-groupe:nth-of-type(5) « Expert » — 0.0 px _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **texte sous 12 px** — `/` — div.conteneur > div.couloir:nth-of-type(2) > div.couloir-groupes:nth-of-type(2) > span.couloir-groupe:nth-of-type(1) « Débutant » — 0.0 px _(390×844 sansJs, 320×568 sansJs)_

### texte coupé (3)

- **texte coupé** — `/` — ul.bande-piste > li:nth-of-type(2) > figure.media.bande-media > figcaption.media-legende « Lundi, 1er trimestre 2025 » — coupé par section#conseils > div.bande-photos:nth-of-type(3) « Jeudi, 2e trimestre 2025 Lundi, 1er trimestre 2025 » _(390×844 normal, 320×568 normal, 390×844 sansWebgl)_
- **texte coupé** — `/ecole` — ul.bande-piste > li:nth-of-type(2) > figure.media.bande-media > figcaption.media-legende « Lundi, 4e trimestre 2024 » — coupé par section#photos > div.bande-photos « Lundi, 2e trimestre 2026 Lundi, 4e trimestre 2024  » _(390×844 normal, 320×568 normal, 390×844 sansWebgl)_
- **texte coupé** — `/inscription` — div.fpe__progression:nth-of-type(1) > ol.fpe__reperes > li.fpe__repere:nth-of-type(3) > span.fpe__nom:nth-of-type(2) « Vos coordonnées » — le contenu dépasse de son cadre _(768×1024 normal, 844×390 normal)_

### textes qui se chevauchent (3)

- **textes qui se chevauchent** — `/` — div.conteneur.confiance-grille > div.confiance-chiffre.chiffres:nth-of-type(1) > p:nth-of-type(1) > strong « 31 » — avec div.conteneur.confiance-grille > div.confiance-chiffre.chiffres:nth-of-type(1) > p:nth-of-type(1) > span « ans d'école » _(844×390 normal, 1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/ecole` — section#histoire > div.conteneur.histoire-grille > div > p.histoire-annee.chiffres:nth-of-type(1) « 1995 » — avec section#histoire > div.conteneur.histoire-grille > div > h2 « Éducation. Découverte. Plaisir. » _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **textes qui se chevauchent** — `/inscription` — div.fpe__progression:nth-of-type(1) > ol.fpe__reperes > li.fpe__repere:nth-of-type(3) > span.fpe__nom:nth-of-type(2) « Vos coordonnées » — avec div.fpe__progression:nth-of-type(1) > ol.fpe__reperes > li.fpe__repere:nth-of-type(4) > span.fpe__num:nth-of-type(1) « 4 » _(768×1024 normal, 844×390 normal)_

### élément recouvert (4)

- **élément recouvert** — `/` — section#debut > div.hero-grille:nth-of-type(1) > div.hero-texte:nth-of-type(1) > h1.titre-ouverture « Apprendre à nager, à son rythme. » — par div.hero-visuel:nth-of-type(2) > figure.media.hero-cadre:nth-of-type(1) > picture > img « Bassin vu du dessus, reflets de lumière sur le car » _(768×1024 normal)_
- **élément recouvert** — `/` — div.hero-grille:nth-of-type(1) > div.hero-texte:nth-of-type(1) > p.hero-actions:nth-of-type(3) > a.bouton:nth-of-type(1) « Demander une inscription » — par div.hero-visuel:nth-of-type(2) > figure.media.hero-cadre:nth-of-type(1) > picture > img « Bassin vu du dessus, reflets de lumière sur le car » _(768×1024 normal)_
- **élément recouvert** — `/` — div.hero-grille:nth-of-type(1) > div.hero-texte:nth-of-type(1) > p.hero-actions:nth-of-type(3) > a.bouton.bouton--contour:nth-of-type(2) « Voir les cours » — par div.hero-visuel:nth-of-type(2) > figure.media.hero-carte:nth-of-type(2) > picture > img « Groupe du lundi, deuxième trimestre 2026, au bord  » _(768×1024 normal)_
- **élément recouvert** — `/` — section#debut > div.hero-grille:nth-of-type(1) > div.hero-texte:nth-of-type(1) > p.hero-info:nth-of-type(4) « Prochain cycle : janvier – mars 2027 CHF 195.– les » — par div.hero-visuel:nth-of-type(2) > figure.media.hero-carte:nth-of-type(2) > picture > img « Groupe du lundi, deuxième trimestre 2026, au bord  » _(768×1024 normal)_

### accessibilité (axe) : color-contrast (12)

- **accessibilité (axe) : color-contrast** — `/` — li[data-cycle="hiver"] > .cycle-statut[data-cycle-statut=""] ; div[data-barre-fixe=""] > .bouton[href$="inscription"][data-libelle="Inscription"] — Elements must meet minimum color contrast ratio thresholds _(390×844 normal)_
- **accessibilité (axe) : color-contrast** — `/` — li[data-cycle="hiver"] > .cycle-statut[data-cycle-statut=""] — Elements must meet minimum color contrast ratio thresholds _(1366×768 normal)_
- **accessibilité (axe) : color-contrast** — `/404` — a[data-action-principale=""] — Elements must meet minimum color contrast ratio thresholds _(390×844 normal)_
- **accessibilité (axe) : color-contrast** — `/404` — .entete-actions > .bouton[href$="inscription"][data-libelle="Inscription"] ; a[data-action-principale=""] — Elements must meet minimum color contrast ratio thresholds _(1366×768 normal)_
- **accessibilité (axe) : color-contrast** — `/contact` — button[type="submit"] ; div[data-barre-fixe=""] > .bouton[href$="inscription"][data-libelle="Inscription"] — Elements must meet minimum color contrast ratio thresholds _(390×844 normal)_
- **accessibilité (axe) : color-contrast** — `/contact` — .entete-actions > .bouton[href$="inscription"][data-libelle="Inscription"] ; button[type="submit"] — Elements must meet minimum color contrast ratio thresholds _(1366×768 normal)_
- **accessibilité (axe) : color-contrast** — `/cours` — a[data-action-principale=""] ; div[data-panneau="debutant"] > .groupe-levels ; div[data-barre-fixe=""] > .bouton[href$="inscription"][data-libelle="Inscription"] — Elements must meet minimum color contrast ratio thresholds _(390×844 normal)_
- **accessibilité (axe) : color-contrast** — `/cours` — .entete-actions > .bouton[href$="inscription"][data-libelle="Inscription"] ; a[data-action-principale=""] ; div[data-panneau="debutant"] > .groupe-levels — Elements must meet minimum color contrast ratio thresholds _(1366×768 normal)_
- **accessibilité (axe) : color-contrast** — `/ecole` — a[data-action-principale=""] ; div[data-barre-fixe=""] > .bouton[href$="inscription"][data-libelle="Inscription"] — Elements must meet minimum color contrast ratio thresholds _(390×844 normal)_
- **accessibilité (axe) : color-contrast** — `/ecole` — a[data-action-principale=""] — Elements must meet minimum color contrast ratio thresholds _(1366×768 normal)_
- **accessibilité (axe) : color-contrast** — `/inscription` — a[href$="#formulaire"] ; button[data-suivant=""] — Elements must meet minimum color contrast ratio thresholds _(390×844 normal)_
- **accessibilité (axe) : color-contrast** — `/inscription` — .entete-actions > .bouton[href$="inscription"][data-libelle="Inscription"] ; a[href$="#formulaire"] ; button[data-suivant=""] — Elements must meet minimum color contrast ratio thresholds _(1366×768 normal)_

### premier écran : bouton principal hors de l’écran (2)

- **premier écran : bouton principal hors de l’écran** — `/404` — section#debut > p:nth-of-type(2) > a.bouton « Retour à l'accueil » _(320×568 normal, 844×390 normal, 320×568 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/ecole` — section#debut > div.conteneur.ecole-tete-texte > p.hero-actions:nth-of-type(3) > a.bouton « Demander une inscription » _(320×568 sansJs)_

### premier écran : information clé hors de l’écran (3)

- **premier écran : information clé hors de l’écran** — `/404` — section#debut > p:nth-of-type(2) > a.bouton « Retour à l'accueil » _(320×568 normal, 844×390 normal, 320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/cours` — section#debut > div.conteneur.cours-tete-grille:nth-of-type(1) > p.prix-geant « CHF 195.– » _(320×568 normal, 320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/ecole` — section#debut > div.conteneur.ecole-tete-texte > p.ecole-tete-info:nth-of-type(4) « Direction : Jean-Marc Maurer, instructeur suisse d » _(320×568 normal, 390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_

### zone tactile sous 44 px (10)

- **zone tactile sous 44 px** — `/cours` — div#levels > div.selecteur-flotteurs:nth-of-type(1) > button:nth-of-type(1) « 1 » — 33 × 44 px _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/cours` — div#levels > div.selecteur-flotteurs:nth-of-type(1) > button:nth-of-type(2) « 2 » — 35 × 45 px _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/cours` — div#levels > div.selecteur-flotteurs:nth-of-type(1) > button:nth-of-type(3) « 3 » — 36 × 46 px _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/cours` — div#levels > div.selecteur-flotteurs:nth-of-type(1) > button:nth-of-type(4) « 4 » — 36 × 46 px _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/cours` — div#levels > div.selecteur-flotteurs:nth-of-type(1) > button:nth-of-type(5) « 5 » — 36 × 46 px _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/cours` — div#levels > div.selecteur-flotteurs:nth-of-type(1) > button:nth-of-type(6) « 6 » — 35 × 45 px _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/cours` — div#levels > div.selecteur-flotteurs:nth-of-type(1) > button:nth-of-type(7) « 7 » — 33 × 44 px _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/cours` — div#levels > div.selecteur-flotteurs:nth-of-type(1) > button:nth-of-type(8) « 8 » — 34 × 45 px _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/cours` — div#levels > div.selecteur-flotteurs:nth-of-type(1) > button:nth-of-type(9) « 9 » — 35 × 46 px _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/cours` — div#levels > div.selecteur-flotteurs:nth-of-type(1) > button:nth-of-type(10) « 10 » — 36 × 46 px _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_

### contraste sur image (9)

- **contraste sur image** — `/ecole` — section#debut > div.conteneur.ecole-tete-texte > p.surtitre.masque-ecran-tres-bas:nth-of-type(1) « L'école » — 4.16:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(390×844 normal)_
- **contraste sur image** — `/ecole` — div.conteneur.ecole-tete-texte > h1.titre-page > span.ligne-masque:nth-of-type(1) > span.titre-ligne « Depuis 1995, » — 2.42:1 sur les 10 % de la photo les moins favorables (minimum 3:1) _(390×844 normal)_
- **contraste sur image** — `/ecole` — div.conteneur.ecole-tete-texte > h1.titre-page > span.ligne-masque:nth-of-type(2) > span.titre-ligne.titre-ligne--bleu « la natation pour tous. » — 1.88:1 sur les 10 % de la photo les moins favorables (minimum 3:1) _(390×844 normal)_
- **contraste sur image** — `/ecole` — section#debut > div.conteneur.ecole-tete-texte > p.intro:nth-of-type(2) « Une école née d'une passion, pour rendre l'apprent » — 3.62:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(390×844 normal)_
- **contraste sur image** — `/ecole` — section#debut > div.conteneur.ecole-tete-texte > p.hero-actions:nth-of-type(3) > a.bouton « Demander une inscription » — 4.34:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(390×844 normal, 1366×768 normal)_
- **contraste sur image** — `/ecole` — section#debut > div.conteneur.ecole-tete-texte > p.surtitre.masque-ecran-tres-bas:nth-of-type(1) « L'école » — 1.65:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_
- **contraste sur image** — `/ecole` — div.conteneur.ecole-tete-texte > h1.titre-page > span.ligne-masque:nth-of-type(1) > span.titre-ligne « Depuis 1995, » — 2.03:1 sur les 10 % de la photo les moins favorables (minimum 3:1) _(1366×768 normal)_
- **contraste sur image** — `/ecole` — div.conteneur.ecole-tete-texte > h1.titre-page > span.ligne-masque:nth-of-type(2) > span.titre-ligne.titre-ligne--bleu « la natation pour tous. » — 1.60:1 sur les 10 % de la photo les moins favorables (minimum 3:1) _(1366×768 normal)_
- **contraste sur image** — `/ecole` — section#debut > div.conteneur.ecole-tete-texte > p.intro:nth-of-type(2) « Une école née d'une passion, pour rendre l'apprent » — 3.46:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_

## À regarder

### « à compléter » visible (2)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `inscription.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### grille : effet signature qui ne se manipule pas (point 1) (1)

- **grille : effet signature qui ne se manipule pas (point 1)** — `/` — aucun élément data-grille="manipuler" sur l’accueil : objet à attraper, faire tourner ou glisser (module objet-a-faire-tourner, lumiere-au-pointeur…)

### grille : rien ne relie les sections (point 4) (1)

- **grille : rien ne relie les sections (point 4)** — sur aucune page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"

### grille : aucun titre ne fait l’événement (point 5) (1)

- **grille : aucun titre ne fait l’événement (point 5)** — sur aucune page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### grille : action principale sans retour physique (point 7) (1)

- **grille : action principale sans retour physique (point 7)** — ajout au panier, réservation, envoi ou filtre : quelque chose de l’objet part, se pose ou se transforme (module envol-vers-le-panier, tampon « reçu »), marqué data-grille="retour"

### grille : objet d’ouverture hors du premier écran (1)

- **grille : objet d’ouverture hors du premier écran** — `/inscription` — 358 × 0 px visibles : l’intro et le voile s’ouvrent depuis le centre de l’écran à cette taille _(390×844)_

### section sans visuel (9)

- **section sans visuel** — `/` — section#groupes « Les cours Cinq groupes, dix levels. Chaque enfant  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1920×1080 normal, +5)_
- **section sans visuel** — `/` — section#annee « Trois cycles par année scolaire. Dix leçons par cy » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1920×1080 normal, +5)_
- **section sans visuel** — `/contact` — section#horaires « Les horaires. Lundi 17 h 30 – 19 h 30 Jeudi 17 h 3 » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/cours` — section#groupes « Le bon groupe pour chaque enfant. Vous hésitez ent » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/cours` — section#deroule « Une inscription en quatre temps. 1 Votre demande L » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/ecole` — section#pedagogie « Une pédagogie sans pression. Pas de compétition Sa » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/inscription` — section#formulaire « 1 2 3 4 ÉTAPE 1 SUR 4 · L'ENFANT Pour qui est la p » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 390×844 sansWebgl)_
- **section sans visuel** — `/inscription` — section#formulaire « 1 L'enfant 2 Jour et cycle 3 Vos coordonnées 4 Réc » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **section sans visuel** — `/inscription` — section#formulaire « Pour qui est la place ? Prénom de l'enfant Âge de  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_

### texte de contenu sous 13 px (ordinateur) (9)

- **texte de contenu sous 13 px (ordinateur)** — `/` — div.hero-grille:nth-of-type(1) > div.hero-visuel:nth-of-type(2) > figure.media.hero-cadre:nth-of-type(1) > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#pour-qui > div.conteneur.pourqui-grille > figure.media.pourqui-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/404` — section#debut > figure.media.introuvable-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — section#debut > div.conteneur.contact-grille > figure.media.contact-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/cours` — section#debut > div.conteneur:nth-of-type(3) > figure.media.cours-bandeau > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/ecole` — section#debut > figure.media.ecole-tete-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/inscription` — div.fpe__carton > form.fpe__form > div.fpe__progression:nth-of-type(1) > p.fpe__etat « ÉTAPE 1 SUR 4 · L'ENFANT » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/inscription` — div.conteneur.inscr-grille > aside.inscr-aside > figure.media.inscr-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/inscription` — div.fpe__carton > form.fpe__form > fieldset.fpe__etape:nth-of-type(3) > p.fpe__note:nth-of-type(1) « Le numéro AVS de votre enfant vous sera demandé à  » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 sansJs)_

### retour avant : changement brusque (1)

- **retour avant : changement brusque** — `/cours` — à 71 ms (différence 21 %) (films/retour-avant-390.png) _(390×844 retour avant)_

### fluidité (1)

- **fluidité** — `/ecole` — 5 % d'images de plus de 50 ms _(1366×768 défilement à la molette, processeur ralenti 4 fois)_

### effet qui ne bouge pas au défilement (1)

- **effet qui ne bouge pas au défilement** — `/` — svg — trace : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_

## Non lancé

- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 6 étape(s) notée(s), 29 min de travail pour 115 min de budget, 5 min d’attente de l’utilisateur.
- Audit standard : étapes lourdes sur /, /contact, /cours, /ecole, /inscription.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2899 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2886 ms depuis le premier octet
- Ouverture /cours (1366×768) : 2791 ms depuis le premier octet
- Ouverture /ecole (1366×768) : 2870 ms depuis le premier octet
- Ouverture /inscription (1366×768) : 2860 ms depuis le premier octet
- Ouverture / (390×844) : 2887 ms depuis le premier octet
- Ouverture /contact (390×844) : 2899 ms depuis le premier octet
- Ouverture /cours (390×844) : 2809 ms depuis le premier octet
- Ouverture /ecole (390×844) : 2819 ms depuis le premier octet
- Ouverture /inscription (390×844) : 2884 ms depuis le premier octet
- bords de l’écran /contact 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- bords de l’écran /inscription 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 413 images d’intro, 15 de voile et 185 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Changements de hauteur /inscription : aucun effet ScrollTrigger, rien à recalculer.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /cours : aucune section épinglée ou plein écran.
- Tient dans l'écran /ecole : aucune section épinglée ou plein écran.
- Tient dans l'écran /inscription : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 2 % d'images lentes sur 355, tâche la plus longue 116 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 183, tâche la plus longue 0 ms
- Fluidité /cours 1366×768 (molette) : 0 % d'images lentes sur 203, tâche la plus longue 74 ms
- Fluidité /inscription 1366×768 (molette) : 0 % d'images lentes sur 137, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1436, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1339, tâche la plus longue 0 ms
- Fluidité /cours 390×844 (doigt) : 0 % d'images lentes sur 1427, tâche la plus longue 0 ms
- Fluidité /ecole 390×844 (doigt) : 0 % d'images lentes sur 1336, tâche la plus longue 0 ms
- Fluidité /inscription 390×844 (doigt) : 0 % d'images lentes sur 1338, tâche la plus longue 0 ms
- Vitesse / : 0.62 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.32 s de calcul au chargement (téléphone ralenti).
- Vitesse /cours : 0.42 s de calcul au chargement (téléphone ralenti).
- Vitesse /ecole : 0.42 s de calcul au chargement (téléphone ralenti).
- Vitesse /inscription : 0.33 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --seulement=fichiers,mesures
```
