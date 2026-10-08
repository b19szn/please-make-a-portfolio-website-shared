// NovaFlow SaaS Portfolio - vanilla JS (SaaS landing page with pricing toggle and contact)

document.addEventListener('DOMContentLoaded', () => {
  // Year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Theme toggle
  const themeToggle = document.getElementById('themeToggle');
  const root = document.documentElement;
  const storedTheme = localStorage.getItem('theme') || 'dark';
  applyTheme(storedTheme);
  themeToggle.addEventListener('click', () => {
    const next = root.classList.contains('theme-dark') ? 'light' : 'dark';
    applyTheme(next);
  });

  // Demo button scroll
  document.getElementById('ctaDemo').addEventListener('click', () => {
    document.getElementById('pricing').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  // Pricing data
  const plans = [
    { id: 'starter', name: 'Starter', month: 19, year: 190, features: ['Up to 5 users','2,000 actions/mo','Basic automation','Email support'] },
    { id: 'growth',  name: 'Growth',  month: 49, year: 490, features: ['Up to 25 users','10,000 actions/mo','Advanced automation','Priority email support'] },
    { id: 'scale',   name: 'Scale',   month: 99, year: 990, features: ['Unlimited users','30,000 actions/mo','Advanced analytics','24/7 support'] },
  ];

  // Render prices
  function renderPrices(mode) {
    const isMonthly = mode === 'monthly';
    plans.forEach(p => {
      const priceEl = document.getElementById(`price-${p.id}`);
      if (!priceEl) return;
      const amount = isMonthly ? p.month : p.year;
      priceEl.textContent = `$${amount} ${isMonthly ? '/mo' : '/yr'}`;
    });
  }

  // Initialize price elements
  // Inject inline price blocks (ids) if not present to be resilient
  // We assume HTML has price elements with ids: price-starter, price-growth, price-scale
  renderPrices('monthly');

  // Billing toggle
  document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const mode = btn.getAttribute('data-billing');
      renderPrices(mode);
    });
  });

  // Projects data is preserved from previous version; not used in SaaS flow

  // Smooth anchor offset for fixed header (optional)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const y = target.getBoundingClientRect().top + window.pageYOffset - 60;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    });
  });

  // Contact form
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const company = document.getElementById('company').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      status.textContent = 'Please fill in Name, Email, and Message.';
      status.style.color = '#f87171';
      return;
    }

    // Mock submission
    status.textContent = 'Thanks! Your message has been received. We’ll be in touch shortly.';
    status.style.color = '#34d399';
    form.reset();
  });
});

// Theme helper
function applyTheme(mode) {
  const root = document.documentElement;
  if (mode === 'light') {
    root.classList.remove('theme-dark');
    root.style.setProperty('--bg', '#f7f7fb');
    root.style.setProperty('--text', '#0f172a');
    root.style.setProperty('--muted', '#5b6470');
    root.style.setProperty('--surface', 'rgba(0,0,0,.04)');
    root.style.setProperty('--border', 'rgba(0,0,0,.08)');
  } else {
    root.classList.add('theme-dark');
    root.style.removeProperty('--bg');
    root.style.removeProperty('--text');
    root.style.removeProperty('--muted');
    root.style.removeProperty('--surface');
    root.style.removeProperty('--border');
  }
  localStorage.setItem('theme', mode);
}