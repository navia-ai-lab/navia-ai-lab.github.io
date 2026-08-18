const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');

if (navToggle && mainNav) {
  const closeNav = () => {
    mainNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Open navigation');
  };

  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });

  mainNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeNav));

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeNav();
  });
}

const revealItems = document.querySelectorAll('.reveal');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
  revealItems.forEach(item => item.classList.add('visible'));
} else if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach(item => observer.observe(item));
} else {
  revealItems.forEach(item => item.classList.add('visible'));
}

const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = [...document.querySelectorAll('.main-nav a[href^="#"]')];

function updateActiveNav() {
  const y = window.scrollY + 120;
  let current = 'home';

  sections.forEach(section => {
    if (section.offsetTop <= y) current = section.id;
  });

  navLinks.forEach(link => {
    const target = link.getAttribute('href').slice(1);
    link.classList.toggle('active', target === current);
  });
}

window.addEventListener('scroll', updateActiveNav, { passive: true });
updateActiveNav();

const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (form) {
  form.addEventListener('submit', event => {
    event.preventDefault();

    const data = new FormData(form);
    const name = data.get('name') || 'there';
    const email = data.get('email') || '';
    const role = data.get('role') || '';
    const message = data.get('message') || '';

    const subject = encodeURIComponent('NAVIA collaboration inquiry');
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nRole: ${role}\n\n${message}`
    );

    formMessage.textContent =
      `Thank you, ${name}. Your email app should open with a prepared NAVIA message.`;

    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  });
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
