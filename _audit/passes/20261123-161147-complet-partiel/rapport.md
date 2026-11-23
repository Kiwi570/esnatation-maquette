# Rapport d’audit

Projet : `esnatation-maquette` · 23/11/2026 17:17:38 · 6 min · 6 page(s) · audit complet (étapes : mesures, ecran)

## Résumé

- Statut : **2 échec(s)**
- Passe : `20261123-161147-complet-partiel` · version ?v=1
- Échecs : **2**
- À regarder : **7**
- Non lancé : **0**
- Contrôles passés : mesures (234), balayage (5)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261123-152421-standard | standard | toutes | toutes | 369 | 28 | 1 | échecs |
| 20261123-154524-standard | standard | toutes | toutes | 2 | 15 | 1 | échecs |
| 20261123-160415-standard-cible-partiel | standard | /,/cours,/inscription | fichiers, mesures, parcours | 1 | 7 | 0 | échecs |
| 20261123-160850-standard-cible-partiel | standard | /,/inscription | fichiers, parcours | 0 | 2 | 0 | complet |
| **20261123-161147-complet-partiel** (celle-ci) | complet | toutes | mesures, ecran | 2 | 7 | 0 | échecs |

## Échecs

### premier écran : bouton principal hors de l’écran (1)

- **premier écran : bouton principal hors de l’écran** — `/404` — section#debut > p:nth-of-type(2) > a.bouton « Retour à l'accueil » _(1000×560 normal, 1000×560 sansJs, 1000×560 sansWebgl)_

### premier écran : information clé hors de l’écran (1)

- **premier écran : information clé hors de l’écran** — `/404` — section#debut > p:nth-of-type(2) > a.bouton « Retour à l'accueil » _(1000×560 normal, 1000×560 sansJs, 1000×560 sansWebgl)_

## À regarder

### section sans visuel (7)

- **section sans visuel** — `/contact` — section#horaires « Les horaires. Lundi 17 h 30 – 19 h 30 Jeudi 17 h 3 » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/cours` — section#groupes « Le bon groupe pour chaque enfant. Vous hésitez ent » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(375×667 normal, 320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/cours` — section#deroule « Une inscription en quatre temps. 1 Votre demande L » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(375×667 normal, 320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/ecole` — section#pedagogie « Une pédagogie sans pression. Pas de compétition Sa » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/inscription` — section#formulaire « 1 2 3 4 ÉTAPE 1 SUR 4 · L'ENFANT Pour qui est la p » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 320×568 sansWebgl, 375×667 sansWebgl, 390×844 sansWebgl)_
- **section sans visuel** — `/inscription` — section#formulaire « 1 L'enfant 2 Quand 3 Contact 4 Résumé ÉTAPE 1 SUR  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(844×390 normal, 768×1024 normal, 1024×768 normal, 1000×560 normal, 1280×720 normal, 1366×768 normal, +14)_
- **section sans visuel** — `/inscription` — section#formulaire « Pour qui est la place ? Prénom de l'enfant Âge de  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 sansJs, 375×667 sansJs, 390×844 sansJs, 844×390 sansJs, 768×1024 sansJs, 1024×768 sansJs, +7)_

## Non lancé

Tout a été lancé.


## Repères

- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /cours : aucune section épinglée ou plein écran.
- Tient dans l'écran /ecole : aucune section épinglée ou plein écran.
- Tient dans l'écran /inscription : aucune section épinglée ou plein écran.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/,/404 --seulement=fichiers,mesures
```
