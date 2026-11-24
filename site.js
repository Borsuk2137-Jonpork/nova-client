'use strict';
document.getElementById('year').textContent = new Date().getFullYear();

// Fade sections in as they scroll into view.
const targets = document.querySelectorAll('.card, .stats div, .split > *, .dl-card, details, h2');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(entries => {
    for (const e of entries) {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    }
  }, { threshold: 0.12 });
  targets.forEach(t => { t.classList.add('reveal'); io.observe(t); });
}

// Animate the demo keystrokes so the HUD preview feels alive.
const keys = [...document.querySelectorAll('.keys .k:not(.blank)')];
setInterval(() => {
  keys.forEach(k => k.classList.toggle('on', Math.random() < 0.3));
}, 450);
