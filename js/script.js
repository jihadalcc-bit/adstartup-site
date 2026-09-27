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

// ROAS lead-magnet calculator
const calcBudget = document.getElementById('calcBudget');
const calcSector = document.getElementById('calcSector');
const calcResult = document.getElementById('calcResult');
function updateCalc() {
  if (!calcBudget || !calcSector || !calcResult) return;
  const budget = parseFloat(calcBudget.value) || 0;
  const roas = parseFloat(calcSector.value) || 0;
  const revenue = Math.round(budget * roas);
  calcResult.textContent = '$' + revenue.toLocaleString('en-US');
}
if (calcBudget && calcSector) {
  calcBudget.addEventListener('input', updateCalc);
  calcSector.addEventListener('change', updateCalc);
  updateCalc();
}
