# Rapport d’audit

Projet : `esnatation-maquette` · 23/11/2026 17:02:27 · 17 min · 6 page(s) · audit standard

## Résumé

- Statut : **2 échec(s)**
- Passe : `20261123-154524-standard` · version ?v=1
- Échecs : **2**
- À regarder : **15**
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

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261123-152421-standard | standard | toutes | toutes | 369 | 28 | 1 | échecs |
| **20261123-154524-standard** (celle-ci) | standard | toutes | toutes | 2 | 15 | 1 | échecs |

## Échecs

### accessibilité (axe) : color-contrast (1)

- **accessibilité (axe) : color-contrast** — `/cours` — div[data-panneau="debutant"] > .groupe-levels — Elements must meet minimum color contrast ratio thresholds _(390×844 normal, 1366×768 normal)_

### clavier (1)

- **clavier** — `/inscription` — a « 076 391 44 54 » — le focus arrive sur un élément caché _(1366×768)_

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

### section sans visuel (7)

- **section sans visuel** — `/contact` — section#horaires « Les horaires. Lundi 17 h 30 – 19 h 30 Jeudi 17 h 3 » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 390×844 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/cours` — section#groupes « Le bon groupe pour chaque enfant. Vous hésitez ent » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/cours` — section#deroule « Une inscription en quatre temps. 1 Votre demande L » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/ecole` — section#pedagogie « Une pédagogie sans pression. Pas de compétition Sa » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 768×1024 normal, 390×844 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/inscription` — section#formulaire « 1 2 3 4 ÉTAPE 1 SUR 4 · L'ENFANT Pour qui est la p » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 390×844 sansWebgl)_
- **section sans visuel** — `/inscription` — section#formulaire « 1 L'enfant 2 Quand 3 Contact 4 Résumé ÉTAPE 1 SUR  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **section sans visuel** — `/inscription` — section#formulaire « Pour qui est la place ? Prénom de l'enfant Âge de  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_

### retour avant : changement brusque (1)

- **retour avant : changement brusque** — `/cours` — à 67 ms (différence 21 %) (films/retour-avant-390.png) _(390×844 retour avant)_

### fluidité (1)

- **fluidité** — `/` — 3 % d'images de plus de 50 ms _(1366×768 défilement à la molette, processeur ralenti 4 fois)_

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
- Ouverture / (1366×768) : 2883 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2885 ms depuis le premier octet
- Ouverture /cours (1366×768) : 2797 ms depuis le premier octet
- Ouverture /ecole (1366×768) : 2840 ms depuis le premier octet
- Ouverture /inscription (1366×768) : 2880 ms depuis le premier octet
- Ouverture / (390×844) : 2891 ms depuis le premier octet
- Ouverture /contact (390×844) : 2868 ms depuis le premier octet
- film de l'ouverture /contact 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /cours (390×844) : 2823 ms depuis le premier octet
- Ouverture /ecole (390×844) : 2879 ms depuis le premier octet
- Ouverture /inscription (390×844) : 2906 ms depuis le premier octet
- bords de l’écran /contact 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- bords de l’écran /inscription 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 423 images d’intro, 11 de voile et 192 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Changements de hauteur /inscription : aucun effet ScrollTrigger, rien à recalculer.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /cours : aucune section épinglée ou plein écran.
- Tient dans l'écran /ecole : aucune section épinglée ou plein écran.
- Tient dans l'écran /inscription : aucune section épinglée ou plein écran.
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 178, tâche la plus longue 0 ms
- Fluidité /cours 1366×768 (molette) : 2 % d'images lentes sur 210, tâche la plus longue 63 ms
- Fluidité /ecole 1366×768 (molette) : 1 % d'images lentes sur 257, tâche la plus longue 78 ms
- Fluidité /inscription 1366×768 (molette) : 0 % d'images lentes sur 113, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1476, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1341, tâche la plus longue 0 ms
- Fluidité /cours 390×844 (doigt) : 0 % d'images lentes sur 1429, tâche la plus longue 0 ms
- Fluidité /ecole 390×844 (doigt) : 0 % d'images lentes sur 1336, tâche la plus longue 0 ms
- Fluidité /inscription 390×844 (doigt) : 0 % d'images lentes sur 1344, tâche la plus longue 0 ms
- Vitesse / : 0.64 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.29 s de calcul au chargement (téléphone ralenti).
- Vitesse /cours : 0.41 s de calcul au chargement (téléphone ralenti).
- Vitesse /ecole : 0.38 s de calcul au chargement (téléphone ralenti).
- Vitesse /inscription : 0.32 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --pages=/,/cours,/inscription --seulement=fichiers,mesures,parcours
```
