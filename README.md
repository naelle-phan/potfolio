# Portfolio de Naelle Phan

Site statique compatible GitHub Pages (`/potfolio/`) : `index.html`, `style.css` et `script.js` constituent l’interface. Le hero utilise la vidéo locale `101010-video-720.mp4` et son image fixe `video-poster.webp` (également affichée si la vidéo est indisponible ou si les animations sont réduites). Les images des projets, PDF et notebooks restent dans ce dossier ; les chemins sont relatifs.
Les URL de `style.css` et `script.js` dans `index.html` portent une version : la changer lors d'une prochaine mise à jour de ces fichiers pour éviter que le cache de GitHub Pages associe une nouvelle page à d'anciennes ressources.

## Visualisation locale

Depuis le dossier du projet :

```bash
python -m http.server 8000
```

Ouvrir ensuite http://localhost:8000/ dans un navigateur. Arrêter le serveur avec `Ctrl+C`. La lecture vidéo démarre automatiquement si le navigateur l’autorise, sans son ni commandes visibles. Un dégradé progressif à plusieurs étapes sur 450 à 700 px (220 à 320 px sur petit écran) fait disparaître la vidéo dans le blanc cassé de la section suivante, sans filtre de flou. Sur un appareil demandant moins de mouvement, seule l’image fixe est présentée.

Les projets Barcelone et Thyroïde ouvrent des fiches détaillées, avec les méthodes et liens vers les documents ; les autres réalisations disposent aussi de leurs fiches. La photographie de Barcelone est affichée dans ses proportions originales pour conserver le logo visible. Le formulaire de contact ouvre la messagerie locale : il n’envoie pas de message depuis le site. Les entrées au défilement restent facultatives : sans JavaScript, le contenu reste visible et les ancres fonctionnent.
La palette de l’interface reste claire après le hero : blanc cassé, gris et anthracite, avec le bleu ardoise réservé aux libellés et liens. Les deux projets phares sont présentés en grands récits alternés ; Barcelone conserve sa photographie entière et son titre reste visible lors du défilement sur ordinateur. Les cinq autres projets restent dans une archive typographique filtrable, sans images ajoutées.

La version antérieure est conservée dans l’historique Git ; visualiser ce site localement ne publie rien et ne crée aucun commit.
