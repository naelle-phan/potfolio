/* ==========================================================================
   PORTFOLIO NAELLE PHAN - SCRIPTS D'INTERACTION & FOND DYNAMIQUE
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* --------------------------------------------------------------------------
     1. ARRIÈRE-PLAN CANVAS INTERACTIF (RÉSEAU DE PARTICULES & NEBULA)
     -------------------------------------------------------------------------- */
  const canvas = document.getElementById('interactive-canvas');
  const ctx = canvas.getContext('2d');
  const bgImageLayer = document.querySelector('.bg-image-layer');
  const cursorGlow = document.getElementById('cursor-glow');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  // Position de la souris avec interpolation
  const mouse = {
    x: width / 2,
    y: height / 2,
    targetX: width / 2,
    targetY: height / 2,
    radius: 180,
    active: false
  };

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    initParticles();
  });

  window.addEventListener('mousemove', (e) => {
    mouse.targetX = e.clientX;
    mouse.targetY = e.clientY;
    mouse.active = true;

    // Parallaxe subtile sur l'image de fond
    if (bgImageLayer) {
      const offsetX = (e.clientX / width - 0.5) * 20;
      const offsetY = (e.clientY / height - 0.5) * 20;
      bgImageLayer.style.transform = `scale(1.05) translate(${offsetX}px, ${offsetY}px)`;
    }
  });

  window.addEventListener('mouseleave', () => {
    mouse.active = false;
  });

  // Particules lumineuses
  const particles = [];
  const PARTICLE_COUNT = Math.min(Math.floor((width * height) / 14000), 85);
  const colors = [
    'rgba(224, 37, 133, ',  // Magenta
    'rgba(139, 92, 246, ',  // Violet
    'rgba(6, 182, 212, ',   // Cyan
    'rgba(236, 72, 153, '   // Rose
  ];

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.8;
      this.vy = (Math.random() - 0.5) * 0.8;
      this.size = Math.random() * 2.2 + 1;
      this.colorPrefix = colors[Math.floor(Math.random() * colors.length)];
      this.alpha = Math.random() * 0.5 + 0.2;
      this.baseAlpha = this.alpha;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0) this.x = width;
      if (this.x > width) this.x = 0;
      if (this.y < 0) this.y = height;
      if (this.y > height) this.y = 0;

      // Réaction douce au curseur
      if (mouse.active) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const force = (1 - dist / mouse.radius) * 1.5;
          this.x -= (dx / dist) * force;
          this.y -= (dy / dist) * force;
          this.alpha = Math.min(this.baseAlpha * 2, 0.95);
        } else {
          this.alpha = this.baseAlpha;
        }
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.colorPrefix + this.alpha + ')';
      ctx.shadowBlur = 12;
      ctx.shadowColor = this.colorPrefix + '0.8)';
      ctx.fill();
    }
  }

  function initParticles() {
    particles.length = 0;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(new Particle());
    }
  }
  initParticles();

  function render() {
    // Interpolation de la position de la souris
    mouse.x += (mouse.targetX - mouse.x) * 0.1;
    mouse.y += (mouse.targetY - mouse.y) * 0.1;

    // Déplacement du halo curseur
    if (cursorGlow) {
      cursorGlow.style.left = `${mouse.x}px`;
      cursorGlow.style.top = `${mouse.y}px`;
    }

    ctx.clearRect(0, 0, width, height);

    // Dessin des liaisons entre particules proches
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          const lineAlpha = (1 - dist / 120) * 0.15;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(168, 85, 247, ${lineAlpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    // Mise à jour et dessin de chaque particule
    for (const p of particles) {
      p.update();
      p.draw();
    }

    requestAnimationFrame(render);
  }
  render();


  /* --------------------------------------------------------------------------
     2. NAVIGATION & GESTION DU SCROLL
     -------------------------------------------------------------------------- */
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');

  // Effet navbar sur scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Scroll Spy pour les sections actives
    let currentSection = 'hero';
    const sections = document.querySelectorAll('section');

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  });

  // Toggle menu mobile
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const icon = mobileToggle.querySelector('i');
      if (navMenu.classList.contains('open')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
      } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
      }
    });

    // Fermer le menu lors du clic sur un lien
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        const icon = mobileToggle.querySelector('i');
        if (icon) {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      });
    });
  }


  /* --------------------------------------------------------------------------
     3. FILTRAGE DYNAMIQUE DES COMPÉTENCES
     -------------------------------------------------------------------------- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const skillCards = document.querySelectorAll('.skill-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      skillCards.forEach((card) => {
        const categories = card.getAttribute('data-category') || '';
        if (filter === 'all' || categories.includes(filter)) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });


  /* --------------------------------------------------------------------------
     4. MODALE DE PRÉVISUALISATION DES PDF
     -------------------------------------------------------------------------- */
  const pdfModal = document.getElementById('pdf-modal');
  const modalIframe = document.getElementById('pdf-modal-iframe');
  const modalTitle = document.getElementById('pdf-modal-title');
  const modalDownload = document.getElementById('pdf-modal-download');
  const modalClose = document.getElementById('pdf-modal-close');
  const modalBackdrop = document.getElementById('pdf-modal-backdrop');
  const openPdfBtns = document.querySelectorAll('.open-pdf-btn');

  function openPdfModal(pdfSrc, title) {
    if (!pdfModal || !modalIframe) return;
    modalTitle.textContent = title || 'Document PDF';
    modalIframe.src = pdfSrc;
    modalDownload.href = pdfSrc;
    modalDownload.setAttribute('download', pdfSrc);

    pdfModal.classList.add('open');
    pdfModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closePdfModal() {
    if (!pdfModal || !modalIframe) return;
    pdfModal.classList.remove('open');
    pdfModal.setAttribute('aria-hidden', 'true');
    modalIframe.src = '';
    document.body.style.overflow = '';
  }

  openPdfBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const pdf = btn.getAttribute('data-pdf');
      const title = btn.getAttribute('data-title');
      openPdfModal(pdf, title);
    });
  });

  if (modalClose) modalClose.addEventListener('click', closePdfModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closePdfModal);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && pdfModal.classList.contains('open')) {
      closePdfModal();
    }
  });


  /* --------------------------------------------------------------------------
     5. COPIE DANS LE PRESSE-PAPIER (EMAIL & TÉLÉPHONE)
     -------------------------------------------------------------------------- */
  const copyButtons = document.querySelectorAll('.copy-btn');

  copyButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      navigator.clipboard.writeText(textToCopy).then(() => {
        btn.classList.add('copied');
        const icon = btn.querySelector('i');
        const originalClass = icon.className;

        icon.className = 'fa-solid fa-check';

        setTimeout(() => {
          btn.classList.remove('copied');
          icon.className = originalClass;
        }, 2000);
      });
    });
  });


  /* --------------------------------------------------------------------------
     6. ANIMATION D'APPARITION AU DÉFILEMENT (INTERSECTION OBSERVER)
     -------------------------------------------------------------------------- */
  const fadeElements = document.querySelectorAll('.fade-in, .timeline-card, .skill-card, .project-card, .exp-card');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  fadeElements.forEach((el) => {
    el.classList.add('fade-in');
    observer.observe(el);
  });

});
