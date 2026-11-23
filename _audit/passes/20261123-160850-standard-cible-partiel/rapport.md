# Rapport d’audit

Projet : `esnatation-maquette` · 23/11/2026 17:10:21 · 2 min · 2 page(s) · audit standard ciblé sur /,/inscription (étapes : fichiers, parcours)

## Résumé

- Statut : **tout a tourné, aucun échec**
- Passe : `20261123-160850-standard-cible-partiel` · version ?v=1
- Échecs : **0**
- À regarder : **2**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), intro accélérable et passable (7), menu (1), clavier (2), liens et boutons (2), liens profonds (4), liens vers la page en cours (2), changements de hauteur (1)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261123-152421-standard | standard | toutes | toutes | 369 | 28 | 1 | échecs |
| 20261123-154524-standard | standard | toutes | toutes | 2 | 15 | 1 | échecs |
| 20261123-160415-standard-cible-partiel | standard | /,/cours,/inscription | fichiers, mesures, parcours | 1 | 7 | 0 | échecs |
| **20261123-160850-standard-cible-partiel** (celle-ci) | standard | /,/inscription | fichiers, parcours | 0 | 2 | 0 | complet |

## Échecs

Aucun.

## À regarder

### « à compléter » visible (2)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `inscription.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 6 étape(s) notée(s), 29 min de travail pour 115 min de budget, 5 min d’attente de l’utilisateur.
- Audit standard : étapes lourdes sur /, /inscription.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Changements de hauteur /inscription : aucun effet ScrollTrigger, rien à recalculer.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`
