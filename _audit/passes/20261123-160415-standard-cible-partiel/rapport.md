# Rapport d’audit

Projet : `esnatation-maquette` · 23/11/2026 17:07:39 · 3 min · 3 page(s) · audit standard ciblé sur /,/cours,/inscription (étapes : fichiers, mesures, parcours)

## Résumé

- Statut : **1 échec(s)**
- Passe : `20261123-160415-standard-cible-partiel` · version ?v=1
- Échecs : **1**
- À regarder : **7**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), mesures (33), balayage (3), intro accélérable et passable (7), menu (1), clavier (3), liens et boutons (3), liens profonds (4), liens vers la page en cours (3), changements de hauteur (2)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261123-152421-standard | standard | toutes | toutes | 369 | 28 | 1 | échecs |
| 20261123-154524-standard | standard | toutes | toutes | 2 | 15 | 1 | échecs |
| **20261123-160415-standard-cible-partiel** (celle-ci) | standard | /,/cours,/inscription | fichiers, mesures, parcours | 1 | 7 | 0 | échecs |

## Échecs

### clavier (1)

- **clavier** — `/inscription` — a « 076 391 44 54 » — le focus arrive sur un élément caché _(1366×768)_

## À regarder

### « à compléter » visible (2)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `inscription.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### section sans visuel (5)

- **section sans visuel** — `/cours` — section#groupes « Le bon groupe pour chaque enfant. Vous hésitez ent » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 390×844 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/cours` — section#deroule « Une inscription en quatre temps. 1 Votre demande L » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 390×844 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/inscription` — section#formulaire « 1 2 3 4 ÉTAPE 1 SUR 4 · L'ENFANT Pour qui est la p » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 390×844 sansWebgl)_
- **section sans visuel** — `/inscription` — section#formulaire « 1 L'enfant 2 Quand 3 Contact 4 Résumé ÉTAPE 1 SUR  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **section sans visuel** — `/inscription` — section#formulaire « Pour qui est la place ? Prénom de l'enfant Âge de  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 6 étape(s) notée(s), 29 min de travail pour 115 min de budget, 5 min d’attente de l’utilisateur.
- Audit standard : étapes lourdes sur /, /cours, /inscription.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Changements de hauteur /inscription : aucun effet ScrollTrigger, rien à recalculer.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --pages=/,/inscription --seulement=fichiers,parcours
```
