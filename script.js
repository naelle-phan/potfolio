/**
 * Portfolio Naelle Phan — filtres, détails des projets et contact.
 */

document.addEventListener('DOMContentLoaded', () => {

  // Données détaillées des sept projets, conservées hors des cartes de synthèse.
  const projectDatabase = {
    pancreas: {
      category: 'IA médicale et aide à la décision',
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
      results: "Étude d'une architecture hybride associant des règles ontologiques explicites à la comparaison de méthodes de classification sous Weka, dans le cadre des cas et données analysés dans le rapport."
    },

    barcelone: {
      category: 'Data Science et Machine Learning',
      date: 'Automne 2026 · Master 1 MIAS',
      school: 'Centrale Lille & ILIS Université de Lille',
      title: "Tarification & Régulation du Marché Locatif de Barcelone (Inside Airbnb)",
      subtitle: "Cahier intégral d'analyse prédictive et prescriptive (Jalons M0 à M10) : ingénierie de données, modèles tabulaires, Deep Learning PyTorch et fusion multimodale",
      authors: "Phan Naelle · Master 1 MIAS (Centrale Lille / ILIS)",
      pdfLink: null,
      pdfLabel: null,
      secondaryLink: "Projet_Longitudinal_M0_a_M10.html",
      secondaryLabel: "Consulter le Notebook interactif (HTML)",
      context: "Ce projet longitudinal de Master 1 MIAS applique l'ensemble du cycle méthodologique de la Data Science sur un jeu de données réel et complexe de 15 293 annonces Inside Airbnb à Barcelone (90 variables brutes). Il répond à une double problématique décisionnelle : estimer honnêtement le tarif à la nuitée pour un investisseur privé (Client B - régression) et réguler les annonces multipropriétaires non conformes pour la municipalité (Client A - classification sous contrainte de matrice de coût opérationnel).",
      architecture: [
        "Discipline Split-First & Zéro Data Leakage (M0–M2) : Scellement immédiat du jeu de test (Sealed Test Set) avant toute manipulation. Nettoyage raisonné, détection des mécanismes de valeurs manquantes (MCAR, MAR, MNAR) et consignation exhaustive de chaque choix dans un Journal de Décisions formel (Decision Log).",
        "Pipelines scikit-learn & Audit des Fuites (M2–M3) : Conception de pipelines hermétiques avec <code>ColumnTransformer</code> (imputation, standardisation, Target Encoding / OneHotEncoder sur 69 quartiers et 10 districts). Audit chiffré démontrant le biais d'inflation artificielle causé par la fuite de variables cibles dérivées.",
        "Régression & Analyse des Résidus (M3–M4) : Modélisation comparative (Ridge, Lasso, Random Forest), analyse approfondie des résidus démontrant l'hétéroscédasticité et justification théorique de la transformation logarithmique de la variable cible.",
        "Classification & Arbitrage de Coût Métier (M4–M6) : Benchmark supervisé (Régression Logistique, Random Forest, Gradient Boosting), courbe de coût opérationnel pénalisant les faux négatifs (amendes non recouvrées) par rapport aux faux positifs (inspections inutiles), et détermination du seuil de coupure optimal.",
        "Validation Croisée Groupée & Model Card (M5–M6) : Validation croisée <code>GroupKFold</code> par identifiant d'hôte (host_id) pour prémunir les modèles contre la fuite inter-groupes, importance par permutation avec avertissement causal, audit d'équité spatiale sur les 10 districts et rédaction d'une Model Card v1 normalisée.",
        "Deep Learning from Scratch & PyTorch (M7–M10) : Implémentation d'un réseau de neurones complet codé de zéro en NumPy avec validation analytique des gradients, Perceptron Multicouche (MLP) sous PyTorch, étude d'ablation rigoureuse de régularisation sur 3 graines (Dropout, BatchNorm, Weight Decay) et fusion multimodale texte (Embeddings / TF-IDF) + tabulaire."
      ],
      results: "Cahier couvrant les jalons M0 à M10 : comparaison de modèles tabulaires et de réseaux de neurones, analyse de leurs limites et recommandations pour les deux problématiques étudiées.",
      scientificPlot: "plot_barcelone_1.png",
      scientificCaption: "Figure scientifique : Optimisation du seuil de décision sous matrice de coût opérationnel (Inside Airbnb Barcelona, Jalons M4–M6)."
    },

    thyroide: {
      category: 'IA médicale et aide à la décision',
      date: 'Septembre 2026 · Master 1 MIAS',
      school: 'Centrale Lille & Université de Lille (UFR3S)',
      title: "Système d’Aide à la Décision Médicale pour les Pathologies Thyroïdiennes",
      subtitle: "De l’analyse exploratoire des données à l’hybridation d’une ontologie sous Protégé (OWL, SPARQL, SWRL) et d’arbres de décision sous Weka",
      authors: "Peguy Baptiste, De Souza Maryla, Phan Naelle, Robin Alexis (sous la direction du Pr. Slim Hammadi, Centrale Lille)",
      pdfLink: "Pathologies_Thyroidiennes.pdf",
      pdfLabel: "Ouvrir le rapport complet (41 pages - PDF)",
      context: "En endocrinologie, le diagnostic des affections thyroïdiennes (nodules et dysthyroïdies) repose sur des bilans biologiques multidimensionnels aux signaux parfois trompeurs et soumis à un déséquilibre extrême des classes (92,3 % de patients euthyroïdiens). L'enjeu est de concilier la puissance diagnostique de l'apprentissage statistique supervisé avec la traçabilité explicable et la sécurité clinique imposées par l'EU AI Act.",
      architecture: [
        "Cohorte clinique & Analyse Exploratoire : Assainissement rigoureux de 9 172 dossiers bruts de l'archive UCI pour isoler une cohorte homogène de 3 772 patients (élimination des biais de grossesse, chirurgie et traitements hormonaux substitutifs). Démonstration formelle de dépendance par le test d'indépendance du χ² (χ²obs = 30,11 ≫ 16,27, p = 1,31×10⁻⁶) et analyse de colinéarité de Pearson (r = +0,793 entre TT4 et FTI).",
        "IA Symbolique (OntoThyroid sous Protégé) : Modélisation d'une ontologie formelle OWL 2 (30 classes, 16 propriétés, 16 règles SWRL, 17 individus de référence) instanciée et raisonnée avec Pellet sous Owlready2. Définition de règles déductives expertes pour la qualification biologique et requêtes sémantiques SPARQL.",
        "IA Sous-Symbolique (Fouille Weka) : Benchmark complet sous validation croisée 10 plis (J48, LMT, RandomTree, Random Forest, Naive Bayes). L'arbre J48 élagué atteint 99,58 % d'exactitude (Kappa = 0,9707) avec extraction empirique des seuils décisionnels pivots (TSH ≤ 6,0 mUI/L et FTI ≤ 64,0). Évaluation comparative des courbes ROC sous KnowledgeFlow démontrant l'effondrement de Naive Bayes face à la colinéarité.",
        "SADM Hybride & Sécurisation Clinique : Articulation synergique des deux approches : validation empirique des seuils par J48, complétée par la supervision sémantique de l'ontologie qui assure le contrôle formel d'éligibilité, la politique d'abstention prudente (zone limite 6 < TSH ≤ 10) et l'encadrement posologique gériatrique prudent (palier initial à 12,5 µg/j)."
      ],
      results: "Évaluation expérimentale d'une classification J48 (99,58 % d'exactitude dans le protocole décrit) et d'une ontologie déductive pour documenter les décisions dans les cas étudiés.",
      scientificPlot: "fig_thyroide_p18_0.png",
      scientificCaption: "Figure scientifique : Matrice de corrélation linéaire de Pearson révélant la colinéarité TT4–FTI (cohorte UCI 3 772 patients, rapport scientifique page 18)."
    },

    svd: {
      category: 'Mathématiques et algèbre spectrale',
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
      category: 'Analyse fonctionnelle',
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
      category: 'Génie logiciel et C++',
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
      category: 'Hackathon étudiant',
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

  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      filterButtons.forEach(item => {
        const selected = item === button;
        item.classList.toggle('active', selected);
        item.setAttribute('aria-pressed', String(selected));
      });
      projectCards.forEach(card => {
        card.hidden = filter !== 'all' && card.dataset.category !== filter;
      });
    });
  });

  const modal = document.getElementById('project-modal');
  const modalDialog = modal.querySelector('.modal-dialog');
  const modalBody = document.getElementById('modal-body-content');
  const modalClose = document.getElementById('modal-close-btn');
  let returnFocus = null;

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    modalBody.replaceChildren();
    if (returnFocus) returnFocus.focus();
  }

  function openProjectModal(projectId, trigger) {
    const data = projectDatabase[projectId];
    if (!data) return;
    returnFocus = trigger;

    const links = [
      data.pdfLink && { href: data.pdfLink, label: data.pdfLabel || 'Consulter le rapport (PDF)' },
      data.secondaryLink && { href: data.secondaryLink, label: data.secondaryLabel || 'Consulter le notebook' },
      projectId === 'barcelone' && { href: 'Projet_Longitudinal_M0_a_M10.ipynb', label: 'Télécharger le notebook (.ipynb)' }
    ].filter(Boolean).map(link => `<a href="${link.href}" target="_blank" rel="noopener noreferrer">${link.label} ↗</a>`).join('');

    let figureHtml = '';
    if (data.scientificPlot) {
      figureHtml = `
        <div class="modal-figure-box">
          <img src="${data.scientificPlot}" alt="${data.scientificCaption || 'Graphique scientifique du projet'}" class="modal-figure-img" loading="lazy">
          <p class="modal-figure-caption">${data.scientificCaption || ''}</p>
        </div>
      `;
    }

    modalBody.innerHTML = `
      <p class="modal-header-meta">${data.category} · ${data.date} · ${data.school}</p>
      <h2 class="modal-title" id="modal-title">${data.title}</h2>
      <p class="modal-subtitle">${data.subtitle}</p>
      <p class="modal-authors"><strong>Auteurs et direction :</strong> ${data.authors}</p>
      <h3 class="modal-section-title">Contexte et problématique</h3>
      <p class="modal-p">${data.context}</p>
      ${figureHtml}
      <h3 class="modal-section-title">Méthodologie et démarche scientifique</h3>
      <ul class="modal-features-list">${data.architecture.map(point => `<li>${point}</li>`).join('')}</ul>
      <h3 class="modal-section-title">Conclusions et résultats</h3>
      <p class="modal-p">${data.results}</p>
      ${links ? `<div class="modal-footer-actions">${links}</div>` : ''}
    `;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    modalDialog.scrollTop = 0;
    modalClose.focus();
  }

  document.querySelectorAll('.open-modal-btn').forEach(button => {
    button.addEventListener('click', () => openProjectModal(button.dataset.project, button));
  });
  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', event => {
    if (event.target === modal) closeModal();
  });
  document.addEventListener('keydown', event => {
    if (!modal.classList.contains('open')) return;
    if (event.key === 'Escape') {
      closeModal();
    } else if (event.key === 'Tab') {
      const focusables = [...modalDialog.querySelectorAll('a[href], button:not([disabled])')];
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });

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

    });
  }

  const mobileToggle = document.getElementById('mobile-toggle');
  const siteNav = document.getElementById('site-nav');
  const closeMenu = () => {
    siteNav.classList.remove('open');
    mobileToggle.setAttribute('aria-expanded', 'false');
    mobileToggle.setAttribute('aria-label', 'Ouvrir le menu de navigation');
  };
  mobileToggle.addEventListener('click', () => {
    const expanded = mobileToggle.getAttribute('aria-expanded') === 'true';
    siteNav.classList.toggle('open', !expanded);
    mobileToggle.setAttribute('aria-expanded', String(!expanded));
    mobileToggle.setAttribute('aria-label', expanded ? 'Ouvrir le menu de navigation' : 'Fermer le menu de navigation');
  });
  siteNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && siteNav.classList.contains('open')) {
      closeMenu();
      mobileToggle.focus();
    }
  });

  // L'animation ne modifie jamais le contenu : sans JS, sans observer ou en
  // mouvement réduit, tous les éléments restent visibles.
  const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)');
  if (typeof IntersectionObserver === 'function' && reducedMotion && !reducedMotion.matches) {
    const revealTargets = document.querySelectorAll(
      '.hero-eyebrow, .hero-title-clean, .hero-lead-clean, .hero-availability-clean, ' +
      '.hero-actions-clean, .hero-scroll-cue, ' +
      '.section-kicker, .section-heading > *, .showcase-card, .complementary-projects-head > *, ' +
      '.timeline-item, .experience-item, .engagements, ' +
      '.project-card, .skill-group, .curriculum-note, .contact-details, .contact-form-wrapper'
    );
    let revealObserver;
    try {
      revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (isIntersecting) {
            target.classList.add('is-visible');
            observer.unobserve(target);
          }
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.04 });
      revealTargets.forEach(target => target.classList.add('reveal'));
      document.documentElement.classList.add('motion-ready');
      revealTargets.forEach(target => revealObserver.observe(target));
      document.addEventListener('focusin', event => {
        event.target.closest('.reveal')?.classList.add('is-visible');
      });
      reducedMotion.addEventListener?.('change', event => {
        if (event.matches) {
          revealObserver.disconnect();
          document.documentElement.classList.remove('motion-ready');
        }
      }, { once: true });
    } catch {
      revealObserver?.disconnect();
      document.documentElement.classList.remove('motion-ready');
    }
  }

  const navLinks = [...siteNav.querySelectorAll('.nav-link')];
  const sections = navLinks.map(link => document.querySelector(link.getAttribute('href')));
  const updateActiveSection = () => {
    const line = Math.max(100, window.innerHeight * 0.38);
    let active = sections[0];
    sections.forEach(section => {
      if (section.getBoundingClientRect().top <= line) active = section;
    });
    navLinks.forEach((link, index) => {
      const selected = sections[index] === active;
      link.classList.toggle('active', selected);
      if (selected) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  };
  if (typeof IntersectionObserver === 'function') {
    try {
      const sectionObserver = new IntersectionObserver(updateActiveSection, {
        rootMargin: '-80px 0px -60% 0px'
      });
      sections.forEach(section => sectionObserver.observe(section));
    } catch {
      // Les ancres et l'historique restent natifs si l'observateur échoue.
    }
  }
  window.addEventListener('hashchange', updateActiveSection);
  window.addEventListener('scrollend', updateActiveSection);
  updateActiveSection();
});
