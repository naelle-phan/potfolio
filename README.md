# Portfolio de Naelle Phan

Site statique hébergable sur GitHub Pages : `index.html`, `style.css` et `script.js` constituent l'interface. La photographie, les PDF, les mémoires et le notebook restent dans ce dossier. `cloudflare-worker.js` est conservé pour une éventuelle réutilisation, sans appel depuis le portfolio.

## Visualisation locale

Depuis le dossier du projet :

```bash
python -m http.server 8000
```

Ouvrir ensuite http://localhost:8000/ dans un navigateur. Arrêter le serveur avec `Ctrl+C`. Les cartes des projets ouvrent leurs détails et les liens vers les documents existants ; le formulaire de contact ouvre la messagerie locale, il n'envoie pas de message depuis le site.

Les entrées au défilement et le survol des cartes sont des améliorations progressives : le contenu reste visible sans JavaScript, et la préférence système « réduire les animations » désactive les effets. La navigation conserve ses liens d'ancrage et indique la section active.

La version antérieure à la refonte a été sauvegardée dans le commit Git `cbbca5b`. Aucune publication GitHub n'est déclenchée par la visualisation locale.
