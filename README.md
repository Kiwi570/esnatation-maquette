# Maquette ESN École Suisse de Natation (Puidoux-Chexbres)

Maquette v1 de la refonte du site https://www.esnatation.ch, direction « Reflets du bassin ».
Adresse de présentation : https://esnatation-maquette.vercel.app

## Pages

| Page | Ouverture | Contenu |
|---|---|---|
| Accueil `/` | Titre et grand cadre du bassin côte à côte, reflets de lumière en WebGL, carte d'un vrai groupe | Pour qui, les 5 groupes sur la ligne d'eau, la méthode, les 4 conseils et les photos des trimestres, l'année en 3 cycles, l'équipe, la confiance, appel |
| Les cours `/cours` | Le prix en très grand dans un disque bleu, sélecteur de level sur la ligne d'eau, bandeau de planches | Fiches des 5 groupes, inscription en 4 temps, bon à savoir, appel |
| L'école `/ecole` | Plein cadre sous l'eau, titre blanc | 1995 et la devise, pédagogie, équipe, charte des droits de l'enfant, Jeunesse+Sport, photos, appel |
| Inscription `/inscription` | Le formulaire d'abord (3 étapes et récapitulatif, simulé) | À retenir, téléphone |
| Contact `/contact` | Le numéro en très grand, le bassin au soir | Lieu et plan indicatif, horaires, formulaire simulé |
| 404 | Une planche jaune seule dans le bassin | Retour à l'accueil |

Pages du site actuel non reprises en v1 (disponibles en v2) : Galerie (photos des trimestres, en partie reprises dans les bandes de photos), Vidéos, News.

## Ce que l'école doit fournir (à compléter)

- **Mentions légales** : raison sociale exacte, adresse postale de l'école, responsable de la publication, numéro IDE si l'école en a un.
- **Politique de confidentialité** (nLPD) : traitement des données des formulaires et du numéro AVS de l'enfant (finalité, durée de conservation, destinataires, dont Jeunesse+Sport).
- **Hébergeur** : Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis (adresse des conditions d'utilisation de Vercel, vérifiée le 23 novembre 2026).
- **Adresse exacte de la piscine** du collège du Verrney et l'accès (parking, entrée) : la page Contact ne donne que « Piscine du collège du Verrney, Puidoux » et un plan indicatif.
- **Dates précises des cycles** (premier et dernier cours, vacances scolaires) : la maquette n'affiche que les périodes (septembre – décembre, janvier – mars, avril – juin) et calcule le cycle en cours et le prochain d'après la date du jour.
- **Conditions** : annulation, absence, paiement (non précisées sur le site actuel, donc absentes de la maquette).
- **Équipe** : confirmer l'attribution des 4 photos (sur le site actuel, elles sont croisées) ; la maquette suit les noms de fichiers : Jean-Marc Maurer (bonnet, polo blanc), Dario Olmo (lunettes, dans le bassin), Thomas Thévenet (t-shirt jaune), Daphné Bricod. Des portraits plus grands et plus nets amélioreraient la section.
- **Photos des groupes d'enfants** : vérifier que les parents ont donné leur accord pour la publication (elles sont déjà publiées sur le site actuel ; la maquette les montre en cartes moyennes, jamais en plein écran).
- **Réseaux sociaux** : les icônes du site actuel mènent aux comptes de Wix ; aucun compte de l'école n'est connu, la maquette n'en affiche pas.
- **Crédits des illustrations générées** : 9 images créées avec Grok (bassin, planches, vue sous l'eau, sac de piscine, bassin au soir, bonnets, planche de la 404). Chacune porte la mention « Illustration générée », à garder sur le site final.

## Remplacé ou retiré faute d'information

- Pas de statut « ouvert maintenant » : les horaires (lundi et jeudi, 17 h 30 – 19 h 30) ne valent que pendant les périodes scolaires, dont les dates précises manquent.
- Les quatre conseils aux débutants (courage, patience, régularité, plaisir) sont affichés sans développement : le texte de l'article d'origine n'était pas lisible.
- Les images de banque d'images Wix du site actuel (nageurs, enfants sous l'eau) sont écartées.

## À la mise en ligne définitive

- Retirer : `noindex` (balise robots dans `source/gabarits/commun.mjs` et en-tête X-Robots-Tag dans `vercel.json`), les formulaires simulés (inscription et contact, à brancher sur un vrai envoi), les mentions « à compléter » du pied de page, le paragraphe « Maquette » du pied de page.
- Garder : la mention « Illustration générée » sur les images créées par IA.

## Technique

Site statique, prêt pour Vercel. Les pages sont générées depuis `donnees/` (textes, groupes, équipe, charte, photos) par `node outils/generer.mjs` ; ne jamais modifier les pages HTML à la main. Images : `plan-images.json` et le pipeline de la bibliothèque des maquettes. Audit : `node _audit/audit.mjs`.
Le module « formulaire par étapes » de l'inscription vient de la bibliothèque des maquettes (Kiwi570/bibliotheque-maquettes).
