// Theme Toggle
const toggle = document.getElementById('toggle-theme');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});

// Preserve theme
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
  toggle.textContent = '☀️';
}

// Scroll Reveal
const sections = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });
sections.forEach(section => observer.observe(section));

// Back to Top
const topBtn = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  topBtn.style.display = window.scrollY > 400 ? 'block' : 'none';
});
topBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
