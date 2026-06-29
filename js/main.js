/* ========================================
   Boking Bow — Main Scripts
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {

  // --- Set current year in footer ---
  document.getElementById('year').textContent = new Date().getFullYear();

  // --- Navbar scroll effect ---
  const navbar = document.querySelector('.navbar');
  let lastScrollY = 0;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    lastScrollY = scrollY;
  }, { passive: true });

  // --- Mobile menu toggle ---
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('active');
      navLinks.classList.toggle('open');
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menuBtn.classList.remove('active');
        navLinks.classList.remove('open');
      });
    });
  }

  // --- Smooth scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // --- Fade-in on scroll (Intersection Observer) ---
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all cards and sections for fade-in animation
  document.querySelectorAll('.about-card, .blog-card, .section-title, .section-subtitle, .social-link').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });

  // --- Typing effect for tagline (optional, adds flair) ---
  const tagline = document.querySelector('.hero-tagline');
  if (tagline) {
    // Tagline is already static; we keep it simple
  }

  console.log('✨ Boking Bow — Personal Homepage loaded');
});
