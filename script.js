/**
 * Portfolio Naelle Phan — Interactive Scripts
 * Pure vanilla JS, accessible, lightweight and fast
 */

document.addEventListener('DOMContentLoaded', () => {

  // =========================================================================
  // 2. Project Database for Interactive Modal (5 Real Projects)
  // =========================================================================
  const projectDatabase = {
    pancreas: {
      category: '🏥 IA Médicale & SADM',
      date: 'Septembre 2026 · Master 1 MIAS',
      school: 'Centrale Lille & ILIS Université de Lille',
      title: "Système d’Aide à la Décision Médicale pour les Lésions Kystiques du Pancréas",
      subtitle: "De la modélisation ontologique symbolique sous Protégé (OWL, SPARQL, SWRL) à la fouille de données sous-symbolique sous Weka",
      authors: "Phan Naelle & Robin Alexis (sous la direction du Pr. Slim Hammadi)",
      pdfLink: "Cancer_du_pancreas.pdf",
      pdfLabel: "Ouvrir le rapport complet (28 pages - PDF)",
      context: "Les lésions kystiques du pancréas (LKP) sont de plus en plus fréquemment découvertes fortuitement lors d'imageries abdominales. Le défi médical majeur consiste à différencier avec certitude les kystes bénins (qui nécessitent une simple surveillance) des kystes mucineux précurseurs de redoutables adénocarcinomes pancréatiques nécessitant une résection chirurgicale précoce.",
      architecture: [
        "Volet Symbolique (OntoPLC) : Création sous l'éditeur Protégé d'une ontologie médicale complète formalisant la classification anatomopathologique (Cystadénome séreux, TIPMP, Cystadénome mucineux, Tumeur pseudopapillaire).",
        "Raisonnement & Sémantique : Modélisation d'une base de 10 cas cliniques réels, formulation de requêtes sémantiques SPARQL pour le filtrage diagnostique et implémentation de règles déductives SWRL pour dériver automatiquement la conduite thérapeutique (chirurgie versus surveillance échographique).",
        "Volet Sous-Symbolique (Weka) : Analyse comparative de multiples classifieurs supervisés (arbres de décision J48, Forêts Aléatoires / Random Forest, Naive Bayes, Logistic Model Trees).",
        "Évaluation rigoureuse : Validation croisée 10-fold, étude comparative des courbes ROC et aires sous la courbe (AUC), et démonstration formelle des risques de surapprentissage (overfitting) sur des jeux de données médicaux de petite taille."
      ],
      results: "Démonstration de la supériorité d'une architecture hybride : l'IA symbolique garantit une explicabilité médicale totale et le respect absolu des recommandations cliniques internationales, tandis que l'IA sous-symbolique apporte une flexibilité prédictive sur les profils atypiques."
    },

    svd: {
      category: '📐 Mathématiques & Algèbre Spectrale',
      date: '2026 · L3 Mathématiques',
      school: 'Université de Haute-Alsace (UHA Mulhouse)',
      title: "Singular Value Decomposition (SVD) et Auto-encodeurs Linéaires",
      subtitle: "Équivalence mathématique et applications rigoureuses à la compression de données",
      authors: "Auleley Moukagni Noémie, Stiti Aymen & Phan Naelle (sous la direction de Lionel Lenotre)",
      pdfLink: "SVD_&auto-encodeurs_lineaires.pdf",
      pdfLabel: "Consulter le mémoire complet (PDF)",
      context: "Ce mémoire de recherche en L3 Mathématiques explore les fondements théoriques de l'approximation matricielle de rang faible et établit un pont analytique rigoureux entre l'algèbre spectrale classique et les réseaux de neurones profonds.",
      architecture: [
        "Théorème Spectral & Frobenius : Rappels théoriques complets sur les matrices symétriques associées <i>X<sup>T</sup>X</i> et <i>XX<sup>T</sup></i>, les normes matricielles et l'Analyse en Composantes Principales (ACP).",
        "Théorème d'Eckart-Young-Mirsky : Démonstration intégrale du théorème prouvant que la SVD tronquée fournit la meilleure approximation possible d'une matrice pour toute norme unitairement invariante sous contrainte de rang <i>k</i>.",
        "Auto-encodeurs Linéaires : Définition formelle des espaces d'encodage et de décodage, formulation du problème d'optimisation du risque empirique par descente de gradient.",
        "Équivalence formelle : Démonstration que l'espace latent appris par un auto-encodeur linéaire sans fonction d'activation non linéaire coïncide exactement avec le sous-espace propre dominant identifié par la SVD tronquée."
      ],
      results: "Validation théorique et numérique avec applications concrètes à la compression matricielle d'images et au débruitage de signaux numériques."
    },

    distributions: {
      category: '📐 Analyse Fonctionnelle Pure',
      date: '2025 · L2 Mathématiques',
      school: 'Université de Haute-Alsace (UHA Mulhouse)',
      title: "Recherche Théorique : La Théorie des Distributions",
      subtitle: "Formalisation de l'impulsion de Dirac, dérivation faible et espaces de Sobolev",
      authors: "Auleley Moukagni Noémie & Phan Naelle (sous la direction de Daniel Panazzolo)",
      pdfLink: "Théorie-Distribution.pdf",
      pdfLabel: "Consulter le mémoire complet (PDF)",
      context: "La dérivation au sens classique ne permet pas de traiter les phénomènes physiques discontinus ou ponctuels (masses ponctuelles, chocs, charges électriques localisées). Laurent Schwartz a révolutionné l'analyse au XXe siècle en introduisant la théorie des distributions.",
      architecture: [
        "Motivation physique & analytique : Étude rigoureuse de l'impulsion de Dirac <i>δ</i> et de la marche d'Heaviside <i>H</i>(<i>x</i>), illustrant les paradoxes de l'analyse classique.",
        "Espaces de fonctions test : Définition topologique de l'espace <i>D</i>(ℝ) des fonctions infiniment différentiables à support compact muni de sa topologie inductive.",
        "Dual topologique <i>D'</i>(ℝ) : Définition des distributions comme fonctionnelles linéaires continues.",
        "Dérivation faible : Dérivation au sens des distributions par dualité via la formule d'intégration par parties : ⟨<i>T'</i>, <i>φ</i>⟩ = -⟨<i>T</i>, <i>φ'</i>⟩.",
        "Espaces de Sobolev : Introduction des espaces <i>L</i><sup>2</sup>(ℝ) et des espaces de Sobolev <i>H<sup>s</sup></i>(ℝ), cadre naturel moderne pour l'analyse des équations aux dérivées partielles (EDP)."
      ],
      results: "Mémoire théorique validé dans le cadre de la L2 Mathématiques, portant sur l'analyse fonctionnelle et les espaces de Sobolev."
    },

    agenda: {
      category: '💻 Génie Logiciel & C++',
      date: '2025 · L2 Math-Info',
      school: 'Université de Haute-Alsace (UHA Mulhouse)',
      title: "Développement d’un Agenda Interactif en C++",
      subtitle: "Programmation orientée objet, gestion des événements et structures de données avancées",
      authors: "Naelle Phan",
      pdfLink: null,
      pdfLabel: null,
      context: "Projet de conception logicielle exigeant le respect des paradigmes de la programmation orientée objet en C++ moderne et une gestion mémoire sans faille.",
      architecture: [
        "Modélisation Orientée Objet : Conception des classes Event, Task, Reminder, Calendar avec héritage et polymorphisme.",
        "Structures de données STL : Exploitation optimale de std::vector, std::map ordonnées par clés temporelles et pointeurs intelligents (std::unique_ptr, std::shared_ptr).",
        "Algorithme de détection de collisions : Vérification automatique des chevauchements d'horaires et suggestion de créneaux libres.",
        "Sérialisation & Persistance : Sauvegarde et rechargement robuste des données depuis des fichiers structurés."
      ],
      results: "Application rapide, modulaire et robuste, validée avec une gestion rigoureuse des ressources mémoire."
    },

    'nuit-info': {
      category: '🌙 Hackathon National',
      date: 'Éditions 2023, 2024 & 2025',
      school: 'Compétition Interuniversitaire France',
      title: "La Nuit de l'Informatique (3 éditions consécutives)",
      subtitle: "Environ 16h de hackathon intensif en équipe de la tombée de la nuit au lever du soleil",
      authors: "Équipe étudiante Université de Haute-Alsace",
      pdfLink: null,
      pdfLabel: null,
      context: "La Nuit de l'Info est le plus grand hackathon universitaire français réunissant des milliers d'étudiants chaque premier jeudi de décembre. Le sujet national est dévoilé à 16h40 et les livrables sont évalués le lendemain à 8h00.",
      architecture: [
        "Cycle de développement ultra-court : Cadrage du cahier des charges en 1h, prototypage UI/UX, développement modulaire en sprints de 2 heures.",
        "Collaboration Git intensive : Gestion des branches de fonctionnalités, revues de code express et fusion continue.",
        "Résolution de défis d'entreprises : Implémentation de micro-services web, intégration d'API et accessibilité numérique.",
        "Esprit d'équipe & endurance : Maintien de la concentration collective et de la bonne humeur sur une nuit blanche complète."
      ],
      results: "3 participations couronnées par la livraison de projets fonctionnels, démontrant adaptabilité, esprit de synthèse et résistance à la pression."
    }
  };

  // =========================================================================
  // 3. Minimalist Recruiter Search Bar Widget (Inspired by videoframe_3595.png)
  // =========================================================================
  const searchInput = document.getElementById('recruiter-search-input');
  const searchClearBtn = document.getElementById('search-clear-btn');
  const searchChips = document.querySelectorAll('.search-chip-pill');
  const matchedTitle = document.getElementById('answer-matched-title');
  const answerText = document.getElementById('answer-card-text');
  const answerActions = document.getElementById('answer-card-actions');
  const answerCard = document.getElementById('search-answer-card');

  const searchFAQDatabase = {
    hopital: {
      title: "Culture Hospitalière, SIH & Éthique Médicale",
      text: "Formée aux Systèmes d'Information Hospitaliers (SIH), aux ontologies cliniques (OWL, SWRL) et aux SADM. Autrice d'une architecture hybride d'aide au diagnostic pour les lésions kystiques du pancréas dirigée par le Pr. Hammadi (Centrale Lille). Je maîtrise également le cadre juridique RGPD de santé et l'évaluation des DMN.",
      actions: [
        { label: "🏥 Voir mon rapport Pancréas 28p (PDF)", url: "Cancer_du_pancreas.pdf", target: "_blank" },
        { label: "🏛️ Découvrir mon Master MIAS", url: "#formations", target: "_self" }
      ],
      keywords: ["sih", "hopital", "hôpital", "clinique", "pancreas", "pancréas", "sadm", "sante", "santé", "protégé", "protege", "owl", "swrl", "sparql", "hammadi", "soignant", "rgpd", "ethique", "éthique", "dmn"]
    },
    pancreas: {
      title: "Mémoire Recherche : IA & Kystes Pancréatiques (28p)",
      text: "Projet phare de Master 1 dirigé par le Pr. Slim Hammadi (Centrale Lille) : conception du système OntoPLC pour classifier les kystes bénins versus précurseurs malins. Volet symbolique avec ontologie OWL et règles déductives SWRL sous Protégé, et volet sous-symbolique avec benchmarking Weka (Random Forest, J48, Naive Bayes) et analyse des courbes ROC/AUC.",
      actions: [
        { label: "🔬 Lire le rapport complet 28p (PDF)", url: "Cancer_du_pancreas.pdf", target: "_blank" },
        { label: "📂 Voir la fiche projet détaillée", url: "#projets", target: "_self" }
      ],
      keywords: ["pancreas", "pancréas", "cancer", "kyste", "kystes", "lkp", "ontoplc", "rapport", "memoire", "mémoire", "28 pages", "weka", "random forest", "sparql", "swrl", "arbre de decision", "roc", "auc"]
    },
    maths: {
      title: "Niveau Mathématiques & Algèbre Spectrale",
      text: "Titulaire d'une Licence Math-Info validée avec Mention Assez Bien à l'Université de Haute-Alsace. Solides fondements théoriques : Décomposition en Valeurs Singulières (SVD), théorème d'Eckart-Young-Mirsky, analyse fonctionnelle (distributions de Schwartz, espaces de Sobolev), probabilités et optimisation numérique.",
      actions: [
        { label: "📐 Voir mon mémoire SVD (PDF)", url: "SVD_&auto-encodeurs_lineaires.pdf", target: "_blank" },
        { label: "📜 Voir mémoire Distributions (PDF)", url: "Théorie-Distribution.pdf", target: "_blank" }
      ],
      keywords: ["math", "maths", "mathematique", "mathematiques", "licence", "uha", "algebre", "algèbre", "spectrale", "analyse", "fonctionnelle", "sobolev", "probabilites", "probabilités", "niveau", "rigueur"]
    },
    svd: {
      title: "Mémoire SVD & Auto-encodeurs Linéaires",
      text: "Mémoire de recherche de L3 dirigé par Lionel Lenotre : démonstration intégrale du théorème d'Eckart-Young-Mirsky et preuve mathématique formelle de l'équivalence entre l'espace propre dominant de la SVD tronquée et l'espace latent appris par un auto-encodeur linéaire sans activation, avec applications à la compression matricielle d'images.",
      actions: [
        { label: "📐 Télécharger le mémoire SVD (PDF)", url: "SVD_&auto-encodeurs_lineaires.pdf", target: "_blank" },
        { label: "📂 Voir le projet", url: "#projets", target: "_self" }
      ],
      keywords: ["svd", "autoencodeur", "autoencodeurs", "auto-encodeur", "auto-encodeurs", "eckart", "young", "lenotre", "matrice", "compression", "reduction", "dimension"]
    },
    distributions: {
      title: "Mémoire Théorie des Distributions de Schwartz",
      text: "Recherche théorique en L2 sous la direction de Daniel Panazzolo (UHA) : formalisation de la masse de Dirac, dérivation faible par intégration par parties et introduction aux espaces de Sobolev H^s (cadre analytique moderne des équations aux dérivées partielles).",
      actions: [
        { label: "📜 Lire le mémoire Distributions (PDF)", url: "Théorie-Distribution.pdf", target: "_blank" },
        { label: "📂 Voir le projet", url: "#projets", target: "_self" }
      ],
      keywords: ["distribution", "distributions", "schwartz", "dirac", "sobolev", "panazzolo", "heaviside", "derivee faible", "dérivée faible", "edp"]
    },
    stage: {
      title: "Stage M1 (Mars 2027) & Alternance M2 (2027-2028)",
      text: "Je recherche activement un stage conventionné de 5 mois dès mars 2027 ainsi qu'une alternance en Master 2 (2027-2028) en IA en Santé, Data Science Médicale ou Gestion de projet SIH. Titulaire du Permis B et véhiculée, je suis mobile sur la Métropole de Lille (59), le Haut-Rhin (68), ainsi que sur toute la France.",
      actions: [
        { label: "📄 Télécharger mon CV (PDF)", url: "CV_Naelle_Phan.pdf", target: "_blank" },
        { label: "✉️ Me proposer une opportunité", url: "#contact", target: "_self" }
      ],
      keywords: ["stage", "m1", "m2", "mars", "2027", "duree", "durée", "convention", "recherche", "5 mois", "embauche", "recrutement", "disponibilite", "disponibilité", "date", "alternance", "apprentissage", "contrat"]
    },
    formation: {
      title: "Cursus Master MIAS, Licence Math-Info & Baccalauréat",
      text: "Actuellement en Master MIAS (Management de l'IA en Santé, co-accrédité par Centrale Lille & Université de Lille ILIS), titulaire d'une Licence Mathématiques appliquées & Informatique (UHA Mulhouse) et d'un Baccalauréat Général Mention Bien (spécialités Maths & Physique-Chimie, AMC).",
      actions: [
        { label: "🏛️ Découvrir mes formations", url: "#formations", target: "_self" },
        { label: "📄 Télécharger mon CV (PDF)", url: "CV_Naelle_Phan.pdf", target: "_blank" }
      ],
      keywords: ["formation", "formations", "master", "mias", "centrale lille", "centrale", "ilis", "ecole", "école", "etudes", "études", "cursus", "diplome", "diplôme", "universite", "université", "bac", "baccalaureat", "baccalauréat", "lycee", "lycée"]
    },
    code: {
      title: "Programmation, Algorithmique & Outils",
      text: "Je développe en Python (scikit-learn, NumPy, pandas, Weka) et en C++ moderne (POO, STL, structures de données, pointeurs intelligents). Je maîtrise également la modélisation UML/SysML, la rédaction scientifique sous LaTeX, ainsi que Git & GitHub pour le travail d'équipe.",
      actions: [
        { label: "💻 Voir mes compétences Bento", url: "#competences", target: "_self" },
        { label: "📂 Voir mon projet Agenda C++", url: "#projets", target: "_self" }
      ],
      keywords: ["python", "c++", "programmation", "code", "coder", "dev", "outils", "logiciel", "git", "github", "latex", "poo", "stl", "scikit", "weka", "uml", "sysml", "langage", "langages"]
    },
    experiences: {
      title: "Expériences Professionnelles (Hyper U & Burger King)",
      text: "Expériences solides menées en continu avec mes études universitaires : vendeuse en boulangerie chez Hyper U (CDI temps partiel, 2 ans+), conseillère polyvalente chez Hyper U (floral, culturel, techno, bazar), et équipière polyvalente chez Burger King (CDI temps partiel, 7 mois).",
      actions: [
        { label: "💼 Découvrir mes expériences", url: "#experiences", target: "_self" },
        { label: "📄 Télécharger mon CV (PDF)", url: "CV_Naelle_Phan.pdf", target: "_blank" }
      ],
      keywords: ["experience", "experiences", "expérience", "expériences", "cdi", "entreprise", "hyper u", "burger king", "travail", "job", "fleuriste", "boulangerie", "culturel", "techno", "bazar", "autonomie", "fiabilite", "fiabilité", "maturite", "maturité"]
    },
    tutorat: {
      title: "Tutorat Bénévole & Pédagogie",
      text: "J'ai assuré pendant 3 années consécutives du tutorat bénévole en mathématiques. Cette expérience m'a appris la pédagogie, la capacité à écouter et à reformuler des concepts abstraits, qualités clés pour collaborer avec des médecins et soignants sur le terrain.",
      actions: [
        { label: "✨ Voir mes engagements", url: "#about", target: "_self" },
        { label: "✉️ Me contacter", url: "#contact", target: "_self" }
      ],
      keywords: ["tutorat", "pedagogie", "pédagogie", "benevolat", "bénévolat", "enseignement", "vulgarisation", "ecoute", "écoute", "coaching", "sport", "association"]
    },
    nuit_info: {
      title: "Hackathons : La Nuit de l'Informatique",
      text: "3 participations consécutives (éditions 2023, 2024 et 2025) au plus grand hackathon universitaire français (environ 16h de développement web et algorithmie de nuit). Cela atteste de mon endurance, de mon agilité en équipe et de ma réactivité sous contrainte horaire.",
      actions: [
        { label: "🌙 Voir la fiche Nuit de l'Info", url: "#projets", target: "_self" }
      ],
      keywords: ["nuit de l'info", "hackathon", "competition", "compétition", "equipe", "équipe", "stress", "nuit", "16h", "projet agile"]
    },
    mobilite: {
      title: "Mobilité Géographique & Permis B",
      text: "Titulaire du Permis B et véhiculée avec ma propre voiture. Je suis mobile sans contrainte sur la Métropole Européenne de Lille (59), le Haut-Rhin (68) / Alsace, ainsi que sur toute la France en présentiel ou formule hybride / télétravail partiel.",
      actions: [
        { label: "✉️ Prendre contact", url: "#contact", target: "_self" },
        { label: "📄 Télécharger mon CV", url: "CV_Naelle_Phan.pdf", target: "_blank" }
      ],
      keywords: ["mobilite", "mobilité", "mobile", "permis", "permis b", "voiture", "vehicule", "véhicule", "véhiculée", "vehiculee", "lille", "mulhouse", "alsace", "france", "deplacement", "déplacement", "teletravail", "télétravail", "hybride", "deplacer"]
    },
    atouts: {
      title: "Pourquoi recruter Naelle ? — Mes 3 Atouts Clés",
      text: "1. Une double compétence rare alliant rigueur mathématique pure et ingénierie de l'IA médicale. 2. Une maturité et autonomie prouvées par 2+ ans en CDI menés en parallèle de ma licence. 3. Un excellent sens du collectif et de la pédagogie (3 ans de tutorat, 3 Nuits de l'Info).",
      actions: [
        { label: "💼 Découvrir mes expériences", url: "#experiences", target: "_self" },
        { label: "📞 06 38 66 32 56", url: "tel:0638663256", target: "_self" }
      ],
      keywords: ["atout", "atouts", "qualite", "qualité", "qualites", "qualités", "force", "forces", "pourquoi", "recruter", "valeur", "profil", "choisir", "pourquoi vous", "pourquoi toi"]
    },
    contact: {
      title: "Coordonnées & Contact Direct",
      text: "Je suis joignable par email à naelle.phan@gmail.com, par téléphone au 06 38 66 32 56, ou sur mon profil LinkedIn (linkedin.com/in/naelle-phan). N'hésitez pas à me contacter directement !",
      actions: [
        { label: "✉️ Envoyer un message", url: "#contact", target: "_self" },
        { label: "📄 Télécharger mon CV (PDF)", url: "CV_Naelle_Phan.pdf", target: "_blank" }
      ],
      keywords: ["contact", "contacter", "email", "mail", "telephone", "téléphone", "tel", "numero", "numéro", "linkedin", "joindre", "adresse", "ecrire", "écrire", "message"]
    },
    salutations: {
      title: "Bonjour ! Que souhaitez-vous découvrir ?",
      text: "Bonjour ! Je suis l'assistant IA du portfolio de Naelle Phan. Posez-moi vos questions en langage naturel sur son stage M1 (mars 2027), son Master MIAS (Centrale Lille × ILIS), son mémoire sur le cancer du pancréas ou ses compétences en maths et en code !",
      actions: [
        { label: "🔬 Voir le mémoire Pancréas (PDF)", url: "Cancer_du_pancreas.pdf", target: "_blank" },
        { label: "📄 Consulter mon CV (PDF)", url: "CV_Naelle_Phan.pdf", target: "_blank" }
      ],
      keywords: ["bonjour", "salut", "hello", "coucou", "qui es tu", "qui est naelle", "presente toi", "présente-toi", "presentation", "présentation", "aide"]
    }
  };

  function normalizeQueryText(str) {
    return str
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .replace(/[^a-z0-9\s+]/g, ' ')
      .trim();
  }

  function semanticMatchTopic(query) {
    const nq = normalizeQueryText(query);
    const tokens = nq.split(/\s+/).filter(t => t.length > 1);
    if (tokens.length === 0) return null;

    let bestKey = null;
    let bestScore = 0;

    for (const [key, item] of Object.entries(searchFAQDatabase)) {
      let score = 0;
      for (const kw of item.keywords) {
        const nkw = normalizeQueryText(kw);
        if (nq.includes(nkw)) {
          score += 4.5;
        } else {
          for (const t of tokens) {
            if (t === nkw) {
              score += 2.5;
            } else if (t.length > 3 && nkw.length > 3 && (nkw.includes(t) || t.includes(nkw))) {
              score += 1.2;
            }
          }
        }
      }
      if (score > bestScore) {
        bestScore = score;
        bestKey = key;
      }
    }

    // Return matched key if score is confident enough
    return bestScore >= 1.5 ? bestKey : null;
  }

  function displaySearchAnswer(queryKey, customTitle = null) {
    const data = searchFAQDatabase[queryKey];
    if (!data || !answerCard) return;

    answerCard.classList.add('updating');

    // Highlight matching chip if present
    searchChips.forEach(chip => {
      if (chip.getAttribute('data-query') === queryKey) {
        chip.classList.add('active');
      } else {
        chip.classList.remove('active');
      }
    });

    setTimeout(() => {
      if (matchedTitle) matchedTitle.textContent = customTitle || data.title;
      if (answerText) answerText.textContent = data.text;
      if (answerActions) {
        answerActions.innerHTML = '';
        data.actions.forEach(act => {
          const btn = document.createElement('a');
          btn.className = act.url.endsWith('.pdf') ? 'btn btn-primary-pink btn-sm' : 'btn btn-soft-pink btn-sm';
          btn.href = act.url;
          if (act.target) btn.target = act.target;
          if (act.target === '_blank') btn.rel = 'noopener noreferrer';
          btn.innerHTML = `<span>${act.label}</span>`;
          answerActions.appendChild(btn);
        });
      }
      answerCard.classList.remove('updating');
    }, 100);
  }

  // Setup suggestion chip clicks
  searchChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const qKey = chip.getAttribute('data-query');
      displaySearchAnswer(qKey);
      if (searchInput) {
        searchInput.value = '';
        if (searchClearBtn) searchClearBtn.classList.remove('visible');
      }
    });
  });

  // Real-time Semantic Search & NLP matching on input
  if (searchInput) {
    let searchDebounce = null;

    searchInput.addEventListener('input', () => {
      const val = searchInput.value.trim();
      if (searchClearBtn) {
        if (val.length > 0) {
          searchClearBtn.classList.add('visible');
        } else {
          searchClearBtn.classList.remove('visible');
        }
      }

      clearTimeout(searchDebounce);
      if (!val) {
        displaySearchAnswer('hopital');
        return;
      }

      searchDebounce = setTimeout(() => {
        const matchedTopic = semanticMatchTopic(val);
        if (matchedTopic) {
          displaySearchAnswer(matchedTopic, `« ${val} » → ${searchFAQDatabase[matchedTopic].title}`);
        } else {
          // Intelligent fallback
          if (answerCard) {
            answerCard.classList.add('updating');
            setTimeout(() => {
              if (matchedTitle) matchedTitle.textContent = `Résultat pour « ${val} »`;
              if (answerText) answerText.textContent = "Je n'ai pas trouvé de correspondance exacte, mais je peux vous renseigner en détail sur le stage M1 de Naelle (mars 2027), son Master MIAS (Centrale Lille × ILIS), son projet sur le cancer du pancréas ou ses compétences en code et maths !";
              if (answerActions) {
                answerActions.innerHTML = `
                  <a href="CV_Naelle_Phan.pdf" target="_blank" rel="noopener noreferrer" class="btn btn-primary-pink btn-sm"><span>📄 Télécharger le CV (PDF)</span></a>
                  <a href="#contact" class="btn btn-soft-pink btn-sm"><span>✉️ Poser la question à Naelle</span></a>
                `;
              }
              answerCard.classList.remove('updating');
            }, 100);
          }
        }
      }, 150);
    });

    if (searchClearBtn) {
      searchClearBtn.addEventListener('click', () => {
        searchInput.value = '';
        searchClearBtn.classList.remove('visible');
        displaySearchAnswer('hopital');
        searchInput.focus();
      });
    }

    // Rotating placeholders inspired by videoframe_3595.png
    const samplePlaceholders = [
      "what's happening this week?",
      "quel stage recherches-tu dès mars 2027 ?",
      "peux-tu me parler de ton projet pancréas ?",
      "quelles sont tes compétences en Python et C++ ?",
      "pourquoi ce double profil Maths & Santé ?",
      "où es-tu mobile géographiquement ?"
    ];
    let placeholderIndex = 0;

    setInterval(() => {
      if (document.activeElement !== searchInput && !searchInput.value) {
        placeholderIndex = (placeholderIndex + 1) % samplePlaceholders.length;
        searchInput.placeholder = samplePlaceholders[placeholderIndex];
      }
    }, 3800);
  }

  // Initialize with 'hopital'
  displaySearchAnswer('hopital');

  // =========================================================================
  // 6. 3D Student Badge with Cursor Tilt & 3D Flip (#2)
  // =========================================================================
  const badgeScene = document.getElementById('badge-scene');
  const studentBadgeCard = document.getElementById('student-badge-card');
  const flipToBackBtn = document.getElementById('flip-to-back-btn');
  const flipToFrontBtn = document.getElementById('flip-to-front-btn');

  if (badgeScene && studentBadgeCard) {
    badgeScene.addEventListener('mousemove', (e) => {
      if (studentBadgeCard.classList.contains('flipped')) return;
      const rect = badgeScene.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -14;
      const rotateY = ((x - centerX) / centerX) * 14;

      studentBadgeCard.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    badgeScene.addEventListener('mouseleave', () => {
      if (studentBadgeCard.classList.contains('flipped')) {
        studentBadgeCard.style.transform = 'rotateY(180deg)';
      } else {
        studentBadgeCard.style.transform = 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      }
    });

    function flipCardToBack() {
      studentBadgeCard.classList.add('flipped');
      studentBadgeCard.style.transform = 'rotateY(180deg)';
      showToast("Verso du badge : Coordonnées & Stage", "🪪");
    }

    function flipCardToFront() {
      studentBadgeCard.classList.remove('flipped');
      studentBadgeCard.style.transform = 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    }

    if (flipToBackBtn) {
      flipToBackBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        flipCardToBack();
      });
    }

    if (flipToFrontBtn) {
      flipToFrontBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        flipCardToFront();
      });
    }
  }
  // =========================================================================
  // 7. Collage "À la carte" (Inspiration 3 : Plateau Médical & Ingrédients IA)
  // =========================================================================
  const tastingDatabase = {
    uml: {
      icon: "📐",
      category: "Ingénierie & Modélisation",
      title: "UML & SysML — Modélisation des Parcours Hospitaliers",
      desc: "Conception des processus de soins et cartographie des flux d'information SIH. Réalisation de diagrammes d'activités, de blocs SysML et de cas d'utilisation pour modéliser l'intégration de dispositifs médicaux numériques dans les établissements de santé.",
      tools: "Diagrammes de classes, Activités, Blocs SysML, Enterprise Architect",
      project: "Master MIAS (Centrale Lille & ILIS) · Ingénierie des SIH",
      impact: "Compréhension des flux d'information et respect des parcours patients",
      actionLabel: "Voir le Master MIAS",
      actionUrl: "#formations"
    },
    python: {
      icon: "🐍",
      category: "Data Science & Machine Learning",
      title: "Python — Fouille de Données & Apprentissage Supervisé",
      desc: "Développement d'algorithmes prédictifs et d'analyses statistiques médicales : manipulation de jeux de données cliniques (pandas, NumPy), entraînement et comparaison de multiples classifieurs supervisés (Random Forest, régression logistique, arbres de décision) et étude fine des courbes ROC et AUC.",
      tools: "Python (scikit-learn, pandas, NumPy), Weka Explorer",
      project: "Système d'Aide au Diagnostic des Kystes du Pancréas (28 pages)",
      impact: "Sensibilité prédictive optimisée et prévention du surapprentissage",
      actionLabel: "Lire le rapport Pancréas (PDF)",
      actionUrl: "Cancer_du_pancreas.pdf"
    },
    owl: {
      icon: "🦉",
      category: "IA Symbolique & Connaissances",
      title: "Ontologies OWL / SWRL — IA Médicale Sémantique",
      desc: "Structuration des connaissances médicales sous l'éditeur Protégé : modélisation de l'ontologie OntoPLC, requêtes sémantiques SPARQL pour le filtrage diagnostique et règles d'inférence SWRL pour guider le choix thérapeutique.",
      tools: "Protégé 5.x, OWL, SPARQL, SWRL, Raisonneur Pellet",
      project: "Projet de recherche LKP : Kystes pancréatiques (Pr. Slim Hammadi)",
      impact: "Aide à la décision transparente et alignée avec les recommandations cliniques",
      actionLabel: "Consulter la fiche projet",
      actionUrl: "#projets"
    },
    stethoscope: {
      icon: "🩺",
      category: "Sensibilisation Clinique & Terrain",
      title: "Stéthoscope & SIH — Sensibilisation Clinique & Éthique",
      desc: "Sensibilisation au quotidien hospitalier et aux besoins du terrain : découverte des flux d'information SIH, principes du RGPD appliqué aux données de santé et prise en compte de l'éthique dans les outils d'aide à la décision.",
      tools: "SIH, Épidémiologie, RGPD Données de Santé, Réglementation DMN",
      project: "Master MIAS (Faculté d'Ingénierie de la Santé ILIS)",
      impact: "Aide à la conception d'outils adaptés aux pratiques soignantes et respectueux du cadre médical",
      actionLabel: "Découvrir mes formations santé",
      actionUrl: "#formations"
    },
    brain: {
      icon: "🧠",
      category: "Deep Learning & Mathématiques",
      title: "Cerveau IA — Réseaux de Neurones & Algèbre Spectrale",
      desc: "Double approche théorique et appliquée : réduction matricielle de rang faible via la Décomposition en Valeurs Singulières (SVD, Théorème d'Eckart-Young), lien mathématique avec les auto-encodeurs linéaires et étude d'architectures appliquées à l'imagerie médicale.",
      tools: "SVD, Auto-encodeurs, Théorème spectral, C++, Weka",
      project: "Mémoire de recherche L3 : SVD et Auto-encodeurs Linéaires",
      impact: "Compression d'images médicales et débruitage matriciel",
      actionLabel: "Lire le mémoire SVD (PDF)",
      actionUrl: "SVD_&auto-encodeurs_lineaires.pdf"
    },
    croissant: {
      icon: "🥐",
      category: "French Touch & Rigueur",
      title: "Croissant Beurre — Énergie & Ténacité au Quotidien",
      desc: "Un clin d'œil à l'énergie du quotidien : habituée aux journées bien remplies, j'ai concilié plus de 2 ans d'emploi étudiant en CDI parallèlement à mes études en mathématiques et informatique.",
      tools: "Organisation, Dynamisme, Esprit d'équipe, Polyvalence",
      project: "2+ ans en CDI à temps partiel (Hyper U & Burger King) en parallèle d'études",
      impact: "Grande autonomie, ponctualité et habitude du travail soutenu",
      actionLabel: "Voir mes expériences terrain",
      actionUrl: "#experiences"
    },
    coffee: {
      icon: "☕",
      category: "Carburant de Recherche",
      title: "Café Glacé — Pour les Nuits Blanches d'Algorithmique",
      desc: "Le carburant des longues sessions de modélisation et des hackathons : 3 participations consécutives à La Nuit de l'Informatique (environ 16h de code en équipe de la tombée de la nuit au petit matin) avec livraison de livrables fonctionnels sous contrainte de temps.",
      tools: "Endurance intellectuelle, Esprit d'équipe sous contrainte, Caféine & Bonne humeur",
      project: "3 éditions consécutives de La Nuit de l'Info (2023, 2024, 2025)",
      impact: "Capacité démontrée à collaborer et délivrer sous contrainte de temps",
      actionLabel: "Consulter mes projets",
      actionUrl: "#projets"
    },
    receipt: {
      icon: "🧾",
      category: "Addition du Recruteur",
      title: "L'Addition du Recruteur — Motivation & Compétences",
      desc: "Une étudiante motivée combinant socle mathématique, compétences en IA (symbolique et machine learning) et sensibilisation au milieu hospitalier. Disponible dès mars 2027 pour un stage conventionné de 5 mois !",
      tools: "Mathématiques + IA Santé + SIH + Modélisation UML/SysML",
      project: "Recherche de Stage M1 dès Mars 2027 (5 mois) · Mobilité France entière",
      impact: "Motivation sincère et implication directe dans vos projets",
      actionLabel: "Télécharger mon CV complet (PDF)",
      actionUrl: "CV_Naelle_Phan.pdf"
    }
  };

  const dishItems = document.querySelectorAll('.dish-item');
  const collageReceipt = document.getElementById('collage-receipt');
  const plateFilterBtns = document.querySelectorAll('.plate-filter-btn');

  const tastingPanel = document.getElementById('tasting-notes-panel');
  const tastingIcon = document.getElementById('tasting-icon');
  const tastingCategory = document.getElementById('tasting-category');
  const tastingTitle = document.getElementById('tasting-title');
  const tastingDesc = document.getElementById('tasting-desc');
  const tastingTools = document.getElementById('tasting-tools');
  const tastingProject = document.getElementById('tasting-project');
  const tastingImpact = document.getElementById('tasting-impact');
  const tastingActionBtn = document.getElementById('tasting-action-btn');
  const tastingActionLabel = document.getElementById('tasting-action-label');

  function updateTastingNote(itemKey) {
    const data = tastingDatabase[itemKey];
    if (!data || !tastingPanel) return;

    tastingPanel.classList.add('updating');

    dishItems.forEach(item => item.classList.remove('selected'));
    if (collageReceipt) collageReceipt.classList.remove('selected');

    if (itemKey === 'receipt' && collageReceipt) {
      collageReceipt.classList.add('selected');
    } else {
      const activeEl = document.querySelector(`.dish-item[data-item="${itemKey}"]`);
      if (activeEl) activeEl.classList.add('selected');
    }

    setTimeout(() => {
      if (tastingIcon) tastingIcon.textContent = data.icon;
      if (tastingCategory) tastingCategory.textContent = data.category;
      if (tastingTitle) tastingTitle.textContent = data.title;
      if (tastingDesc) tastingDesc.innerHTML = data.desc;
      if (tastingTools) tastingTools.textContent = data.tools;
      if (tastingProject) tastingProject.textContent = data.project;
      if (tastingImpact) tastingImpact.textContent = data.impact;

      if (tastingActionBtn) {
        tastingActionBtn.setAttribute('href', data.actionUrl);
        if (data.actionUrl.endsWith('.pdf')) {
          tastingActionBtn.setAttribute('target', '_blank');
          tastingActionBtn.setAttribute('rel', 'noopener noreferrer');
        } else {
          tastingActionBtn.removeAttribute('target');
          tastingActionBtn.removeAttribute('rel');
        }
      }

      if (tastingActionLabel) {
        tastingActionLabel.textContent = data.actionLabel;
      }

      tastingPanel.classList.remove('updating');
    }, 120);
  }

  // Setup dish item listeners
  dishItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      const itemKey = item.getAttribute('data-item');
      updateTastingNote(itemKey);
    });

    item.addEventListener('click', (e) => {
      e.preventDefault();
      const itemKey = item.getAttribute('data-item');
      updateTastingNote(itemKey);
    });

    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const itemKey = item.getAttribute('data-item');
        updateTastingNote(itemKey);
      }
    });
  });

  // Setup receipt listener
  if (collageReceipt) {
    collageReceipt.addEventListener('mouseenter', () => {
      updateTastingNote('receipt');
    });

    collageReceipt.addEventListener('click', (e) => {
      e.preventDefault();
      updateTastingNote('receipt');
    });
  }

  // Setup plate category filters
  plateFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      plateFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterCat = btn.getAttribute('data-category');

      dishItems.forEach(item => {
        const itemCats = item.getAttribute('data-category') || '';
        if (filterCat === 'all') {
          item.classList.remove('dimmed');
          item.classList.remove('highlighted');
        } else if (itemCats.includes(filterCat)) {
          item.classList.remove('dimmed');
          item.classList.add('highlighted');
        } else {
          item.classList.add('dimmed');
          item.classList.remove('highlighted');
        }
      });

      // Select first matching item
      const firstMatch = filterCat === 'all'
        ? dishItems[0]
        : document.querySelector(`.dish-item[data-category*="${filterCat}"]`);
      if (firstMatch) {
        const itemKey = firstMatch.getAttribute('data-item');
        updateTastingNote(itemKey);
      }
    });
  });

  // Initialize with first item (UML)
  if (dishItems.length > 0) {
    updateTastingNote('uml');
  }

  // =========================================================================
  // Progressive Disclosure: Expandable Drawers on Cards
  // =========================================================================
  const drawerToggles = document.querySelectorAll('.drawer-toggle-btn');

  drawerToggles.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';
      const drawer = btn.nextElementSibling;
      const labelSpan = btn.querySelector('.toggle-text');

      if (!drawer || !drawer.classList.contains('card-expand-drawer')) return;

      if (isExpanded) {
        btn.setAttribute('aria-expanded', 'false');
        drawer.classList.remove('open');
        if (labelSpan && btn.dataset.closedText) {
          labelSpan.textContent = btn.dataset.closedText;
        }
      } else {
        btn.setAttribute('aria-expanded', 'true');
        drawer.classList.add('open');
        if (labelSpan && btn.dataset.openText) {
          labelSpan.textContent = btn.dataset.openText;
        }
      }
    });
  });

  // =========================================================================
  // 8. Interactive Filtering for Projects
  // =========================================================================
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (filterValue === 'all' || cardCategory === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  // =========================================================================
  // 9. Project Details Modal Logic
  // =========================================================================
  const modal = document.getElementById('project-modal');
  const modalBody = document.getElementById('modal-body-content');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const openModalButtons = document.querySelectorAll('.open-modal-btn');

  function openProjectModal(projectId) {
    const data = projectDatabase[projectId];
    if (!data) return;

    let featuresHtml = '';
    data.architecture.forEach(point => {
      featuresHtml += `<li>${point}</li>`;
    });

    let pdfActionHtml = '';
    if (data.pdfLink) {
      pdfActionHtml = `
        <a href="${data.pdfLink}" target="_blank" rel="noopener noreferrer" class="btn btn-primary-pink btn-md">
          <svg class="icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
          <span>${data.pdfLabel || 'Télécharger le PDF'}</span>
        </a>
      `;
    }

    modalBody.innerHTML = `
      <div class="modal-header-meta">
        <span class="meta-tag tag-sante">${data.category}</span>
        <span class="meta-tag tag-date">${data.date}</span>
        <span class="meta-tag tag-school">${data.school}</span>
      </div>

      <h2 class="modal-title">${data.title}</h2>
      <p class="modal-subtitle">${data.subtitle}</p>

      <div class="authorship-box" style="margin-bottom: 1.5rem;">
        <span class="authors-names"><strong>Auteurs & Direction :</strong> ${data.authors}</span>
      </div>

      <h3 class="modal-section-title"><span>📌</span> Contexte & Problématique</h3>
      <p class="modal-p">${data.context}</p>

      <h3 class="modal-section-title"><span>⚙️</span> Méthodologie & Démarche Scientifique</h3>
      <ul class="modal-features-list">
        ${featuresHtml}
      </ul>

      <h3 class="modal-section-title"><span>📊</span> Conclusions & Résultats Clés</h3>
      <p class="modal-p">${data.results}</p>

      <div class="modal-footer-actions">
        ${pdfActionHtml}
        <button class="btn btn-soft-pink btn-md" id="modal-inner-close">Fermer la vue</button>
      </div>
    `;

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    const innerCloseBtn = document.getElementById('modal-inner-close');
    if (innerCloseBtn) {
      innerCloseBtn.addEventListener('click', closeModal);
    }
  }

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  openModalButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = btn.getAttribute('data-project');
      openProjectModal(projectId);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });

  // =========================================================================
  // 10. Toast Notification System
  // =========================================================================
  const toastContainer = document.getElementById('toast-container');

  function showToast(message, icon = '✓') {
    if (!toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span class="toast-icon">${icon}</span><span>${message}</span>`;
    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, 3000);
  }

  // =========================================================================
  // 11. Copy to Clipboard Functionality
  // =========================================================================
  const copyButtons = document.querySelectorAll('.copy-contact-btn');

  copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast(`Copié dans le presse-papier : ${textToCopy}`);
      }).catch(() => {
        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast(`Copié : ${textToCopy}`);
      });
    });
  });

  // =========================================================================
  // 12. Direct Contact Form (Generates Mailto with feedback)
  // =========================================================================
  const contactForm = document.getElementById('contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('sender-name').value.trim();
      const email = document.getElementById('sender-email').value.trim();
      const subject = document.getElementById('subject-select').value;
      const message = document.getElementById('sender-message').value.trim();

      const emailSubject = encodeURIComponent(`[Portfolio Naelle Phan] ${subject} - ${name}`);
      const emailBody = encodeURIComponent(
        `Bonjour Naelle,\n\n${message}\n\n---\nExpéditeur : ${name}\nEmail de réponse : ${email}`
      );

      const mailtoUrl = `mailto:naelle.phan@gmail.com?subject=${emailSubject}&body=${emailBody}`;

      window.location.href = mailtoUrl;

      showToast("Votre messagerie s'ouvre pour envoyer votre message !", "✉️");
    });
  }

  // =========================================================================
  // 13. Mobile Navigation Toggle
  // =========================================================================
  const mobileToggle = document.getElementById('mobile-toggle');
  const siteNav = document.getElementById('site-nav');

  if (mobileToggle && siteNav) {
    mobileToggle.addEventListener('click', () => {
      const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      mobileToggle.setAttribute('aria-expanded', !isExpanded);
      siteNav.classList.toggle('open');
    });

    siteNav.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        siteNav.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // =========================================================================
  // 14. Sticky Header & Scroll Spy for Active Navigation Link
  // =========================================================================
  const header = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id], header[id]');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    let currentSectionId = '';
    const scrollPosition = window.scrollY + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  });

});
