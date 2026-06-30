function pad(n) { return String(n).padStart(2, '0'); }

function ceremonyCountdown() {
  const target = new Date('2026-08-06T14:30:00-07:00');
  function tick() {
    const diff = target - new Date();
    if (diff <= 0) {
      ['ceremony-cd-days', 'ceremony-cd-hours', 'ceremony-cd-mins', 'ceremony-cd-secs'].forEach(id => document.getElementById(id).textContent = '00');
      return;
    }
    document.getElementById('ceremony-cd-days').textContent  = pad(Math.floor(diff / 86400000));
    document.getElementById('ceremony-cd-hours').textContent = pad(Math.floor(diff % 86400000 / 3600000));
    document.getElementById('ceremony-cd-mins').textContent  = pad(Math.floor(diff % 3600000 / 60000));
    document.getElementById('ceremony-cd-secs').textContent  = pad(Math.floor(diff % 60000 / 1000));
  }
  tick();
  setInterval(tick, 1000);
}

function partyCountdown() {
  const target = new Date('2026-08-09T18:00:00-07:00');
  function tick() {
    const diff = target - new Date();
    if (diff <= 0) {
      ['party-cd-days', 'party-cd-hours', 'party-cd-mins', 'party-cd-secs'].forEach(id => document.getElementById(id).textContent = '00');
      return;
    }
    document.getElementById('party-cd-days').textContent  = pad(Math.floor(diff / 86400000));
    document.getElementById('party-cd-hours').textContent = pad(Math.floor(diff % 86400000 / 3600000));
    document.getElementById('party-cd-mins').textContent  = pad(Math.floor(diff % 3600000 / 60000));
    document.getElementById('party-cd-secs').textContent  = pad(Math.floor(diff % 60000 / 1000));
  }
  tick();
  setInterval(tick, 1000);
}

function initScrollReveal() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('section, .divider, .card, footer, .countdown-section, .rsvp-section, .story-item, .toast-section')
    .forEach(el => io.observe(el));
}
