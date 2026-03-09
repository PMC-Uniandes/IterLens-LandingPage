/* ============================================================
   IterLens — main.js
   ============================================================ */

/* ────────────────────────────────────────────
   CUSTOM CURSOR
──────────────────────────────────────────── */
const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
});

function animateCursor() {
  cursor.style.left = mx - 6 + 'px';
  cursor.style.top  = my - 6 + 'px';
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx - 18 + 'px';
  ring.style.top  = ry - 18 + 'px';
  requestAnimationFrame(animateCursor);
}
animateCursor();

document.querySelectorAll('button, a').forEach(el => {
  el.addEventListener('mouseenter', () => {
    ring.style.transform   = 'scale(1.5)';
    cursor.style.transform = 'scale(0.5)';
  });
  el.addEventListener('mouseleave', () => {
    ring.style.transform   = 'scale(1)';
    cursor.style.transform = 'scale(1)';
  });
});

/* ────────────────────────────────────────────
   NAV — scroll effect
──────────────────────────────────────────── */
window.addEventListener('scroll', () => {
  document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 50);
});

/* ────────────────────────────────────────────
   SCROLL REVEAL
──────────────────────────────────────────── */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ────────────────────────────────────────────
   COUNTER ANIMATION
──────────────────────────────────────────── */
function animateCounter(id, target, duration = 1800) {
  const el   = document.getElementById(id);
  let current = 0;
  const step  = target / (duration / 16);

  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = Math.floor(current);
    if (current >= target) clearInterval(timer);
  }, 16);
}

const statsObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      animateCounter('c1', 18);   // % reducción
      animateCounter('c2', 10);   // x más rápido
      animateCounter('c3', 94);   // % adopción
      animateCounter('c4', 18);   // $K ahorro
      statsObserver.disconnect();
    }
  });
}, { threshold: 0.5 });

const statsBar = document.querySelector('.stats-bar');
if (statsBar) statsObserver.observe(statsBar);

/* ────────────────────────────────────────────
   WHATSAPP CHAT ANIMATION
──────────────────────────────────────────── */
function showMessage(id, delay) {
  setTimeout(() => {
    const el = document.getElementById(id);
    if (!el) return;
    el.style.transition = 'opacity 0.4s ease';
    el.style.opacity    = '1';
  }, delay);
}

// Sequence: typing → msg1 → msg2 → msg3
setTimeout(() => {
  showMessage('msg4', 500);           // show typing indicator

  setTimeout(() => {
    const typing = document.getElementById('msg4');
    if (typing) typing.style.opacity = '0';

    showMessage('msg1', 800);         // falla registrada
    showMessage('msg2', 2400);        // estuvo parada 2 horas
    showMessage('msg3', 3600);        // ticket cerrado
  }, 1200);
}, 1000);
