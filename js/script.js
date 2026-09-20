// AdStartup — shared script

// Mobile nav toggle
const burger = document.getElementById('navBurger');
const mobileNav = document.getElementById('navMobile');
if (burger && mobileNav) {
  burger.addEventListener('click', () => mobileNav.classList.toggle('open'));
}

// Scroll reveal animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal, .reveal-side, .stagger-children').forEach(el => observer.observe(el));

// Hero elements animate on load
document.querySelectorAll('.hero .reveal-side').forEach((el, i) => {
  setTimeout(() => el.classList.add('visible'), 100 + i * 120);
});
