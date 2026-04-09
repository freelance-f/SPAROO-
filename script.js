const header = document.querySelector(".site-header");
const revealNodes = document.querySelectorAll(".reveal");
const heroSection = document.querySelector(".hero-section");
const phoneShell = document.querySelector(".phone-shell");
const glowCards = document.querySelectorAll(
  ".hero-signal-card, .hero-stat, .meta-card, .feature-card, .step-card, .why-card, .business-card, .vision-card, .solution-card, .product-panel, .signal-panel, .beacon-pod, .floating-chip, .contact-card, .cta-note, .security-card"
);

const updateHeader = () => {
  if (!header) {
    return;
  }

  header.classList.toggle("scrolled", window.scrollY > 16);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  revealNodes.forEach((node) => observer.observe(node));
} else {
  revealNodes.forEach((node) => node.classList.add("is-visible"));
}

if (heroSection) {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const resetHeroMotion = () => {
    heroSection.style.setProperty("--pointer-x", "72%");
    heroSection.style.setProperty("--pointer-y", "28%");

    if (phoneShell) {
      phoneShell.style.setProperty("--hero-tilt-x", "0deg");
      phoneShell.style.setProperty("--hero-tilt-y", "0deg");
    }
  };

  resetHeroMotion();

  heroSection.addEventListener("pointermove", (event) => {
    const rect = heroSection.getBoundingClientRect();
    const ratioX = (event.clientX - rect.left) / rect.width;
    const ratioY = (event.clientY - rect.top) / rect.height;

    heroSection.style.setProperty("--pointer-x", `${(ratioX * 100).toFixed(2)}%`);
    heroSection.style.setProperty("--pointer-y", `${(ratioY * 100).toFixed(2)}%`);

    if (phoneShell && !prefersReducedMotion && window.innerWidth > 900) {
      const tiltY = (ratioX - 0.5) * 8;
      const tiltX = (0.5 - ratioY) * 6;
      phoneShell.style.setProperty("--hero-tilt-x", `${tiltX.toFixed(2)}deg`);
      phoneShell.style.setProperty("--hero-tilt-y", `${tiltY.toFixed(2)}deg`);
    }
  });

  heroSection.addEventListener("pointerleave", resetHeroMotion);
}

glowCards.forEach((card) => {
  const updateGlow = (event) => {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    card.style.setProperty("--glow-x", `${x}px`);
    card.style.setProperty("--glow-y", `${y}px`);
    card.style.setProperty("--glow-opacity", "1");
  };

  card.addEventListener("pointermove", updateGlow);
  card.addEventListener("pointerenter", updateGlow);
  card.addEventListener("pointerleave", () => {
    card.style.setProperty("--glow-opacity", "0");
  });
});
