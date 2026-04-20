/* ============================================================
   IterLens — main.js
   ============================================================ */

/* ────────────────────────────────────────────
   CUSTOM CURSOR
──────────────────────────────────────────── */
const cursor = document.getElementById("cursor");
const ring = document.getElementById("cursorRing");
let mx = 0,
  my = 0,
  rx = 0,
  ry = 0;

document.addEventListener("mousemove", (e) => {
  mx = e.clientX;
  my = e.clientY;
});

function animateCursor() {
  cursor.style.left = mx - 6 + "px";
  cursor.style.top = my - 6 + "px";
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx - 18 + "px";
  ring.style.top = ry - 18 + "px";
  requestAnimationFrame(animateCursor);
}
animateCursor();

document.querySelectorAll("button, a").forEach((el) => {
  el.addEventListener("mouseenter", () => {
    ring.style.transform = "scale(1.5)";
    cursor.style.transform = "scale(0.5)";
  });
  el.addEventListener("mouseleave", () => {
    ring.style.transform = "scale(1)";
    cursor.style.transform = "scale(1)";
  });
});

/* ── HAMBURGUESA ── */
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const navOverlay = document.getElementById("navOverlay");

function toggleMenu(open) {
  hamburger.classList.toggle("open", open);
  navLinks.classList.toggle("open", open);
  navOverlay.classList.toggle("open", open);
  document.body.style.overflow = open ? "hidden" : "";
}

hamburger.addEventListener("click", () => {
  toggleMenu(!navLinks.classList.contains("open"));
});

// Cerrar al hacer click en overlay o en un link
navOverlay.addEventListener("click", () => toggleMenu(false));
document.querySelectorAll(".nav-close").forEach((link) => {
  link.addEventListener("click", () => toggleMenu(false));
});

/* ────────────────────────────────────────────
   NAV — scroll effect
──────────────────────────────────────────── */
window.addEventListener("scroll", () => {
  document
    .getElementById("nav")
    .classList.toggle("scrolled", window.scrollY > 50);
});

/* ────────────────────────────────────────────
   SCROLL REVEAL
──────────────────────────────────────────── */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("visible");
    });
  },
  { threshold: 0.1 },
);

document
  .querySelectorAll(".reveal")
  .forEach((el) => revealObserver.observe(el));

/* ────────────────────────────────────────────
   COUNTER ANIMATION
──────────────────────────────────────────── */
function animateCounter(id, target, duration = 1800) {
  const el = document.getElementById(id);
  let current = 0;
  const step = target / (duration / 16);

  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = Math.floor(current);
    if (current >= target) clearInterval(timer);
  }, 16);
}

const statsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        animateCounter("c1", 18); // % reducción
        animateCounter("c2", 10); // x más rápido
        animateCounter("c3", 94); // % adopción
        animateCounter("c4", 18); // $K ahorro
        statsObserver.disconnect();
      }
    });
  },
  { threshold: 0.5 },
);

const statsBar = document.querySelector(".stats-bar");
if (statsBar) statsObserver.observe(statsBar);

/* ────────────────────────────────────────────
   WHATSAPP CHAT ANIMATION
──────────────────────────────────────────── */
function showMessage(id, delay) {
  setTimeout(() => {
    const el = document.getElementById(id);
    if (!el) return;
    el.style.transition = "opacity 0.4s ease";
    el.style.opacity = "1";
  }, delay);
}

/* ── MODAL VIDEO ── */
const btnDemo = document.getElementById("btnDemo");
const modalOverlay = document.getElementById("modalOverlay");
const modalClose = document.getElementById("modalClose");
const demoVideo = document.getElementById("demoVideo");

const YOUTUBE_ID = "MogDkO5L888";

function openModal() {
  demoVideo.src = `https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&mute=1&origin=${window.location.origin}`;
  modalOverlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  demoVideo.src = ""; // detiene el video al cerrar
  modalOverlay.classList.remove("open");
  document.body.style.overflow = "";
}

btnDemo.addEventListener("click", openModal);
modalClose.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// Sequence: typing → msg1 → msg2 → msg3
setTimeout(() => {
  showMessage("msg4", 500); // show typing indicator

  setTimeout(() => {
    const typing = document.getElementById("msg4");
    if (typing) typing.style.opacity = "0";

    showMessage("msg1", 800); // falla registrada
    showMessage("msg2", 2400); // estuvo parada 2 horas
    showMessage("msg3", 3600); // ticket cerrado
  }, 1200);
}, 1000);

const testimonialSlides = document.querySelectorAll(".testimonial-slide");
const testimonialDots = document.querySelectorAll(".testimonial-dot");
let activeTestimonial = 0;

function showTestimonial(index) {
  if (testimonialSlides.length === 0) return;
  activeTestimonial =
    (index + testimonialSlides.length) % testimonialSlides.length;
  testimonialSlides.forEach((slide, i) => {
    const diff = i - activeTestimonial;
    if (diff === 0) {
      slide.style.opacity = "1";
      slide.style.transform = "translateX(-50%) scale(1)";
      slide.style.zIndex = "2";
    } else {
      slide.style.opacity = "0.3";
      slide.style.transform = `translateX(calc(-50% + ${diff * 100}%)) scale(0.9)`;
      slide.style.zIndex = "1";
    }
  });
  testimonialDots.forEach((dot, i) => {
    dot.classList.toggle("active", i === activeTestimonial);
  });
}

testimonialDots.forEach((dot) => {
  dot.addEventListener("click", () => {
    showTestimonial(Number(dot.dataset.index));
  });
});

if (testimonialSlides.length > 0) {
  setInterval(() => {
    showTestimonial(activeTestimonial + 1);
  }, 6000);
}

const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const nombre = formData.get("nombre") || "No especificado";
    const telefono = formData.get("telefono") || "No especificado";
    const email = formData.get("email") || "No especificado";
    const rol = formData.get("rol") || "No especificado";
    const subject = `Contacto IterLens - ${nombre}`;
    const body = `Nombre: ${nombre}\nTeléfono: ${telefono}\nEmail: ${email}\nRol en la empresa: ${rol}`;
    const mailto = `mailto:jd.gutierrezr123@uniandes.edu.co?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.history.replaceState(
      null,
      document.title,
      window.location.pathname + window.location.search,
    );
    window.location.href = mailto;
  });
}
