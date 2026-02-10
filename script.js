/* =========================
   FOOTER YEAR
========================= */
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

/* =========================
   MOBILE NAV TOGGLE
========================= */
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("active");
    navLinks.classList.toggle("open");
  });

  // Menü schließen nach Klick (Mobile)
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navToggle.classList.remove("active");
      navLinks.classList.remove("open");
    });
  });
}

/* =========================
   CONTACT FORM (MAILTO)
   GitHub Pages kompatibel
========================= */
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name")?.value.trim() || "";
    const email = document.getElementById("email")?.value.trim() || "";
    const topic = document.getElementById("topic")?.value.trim() || "";
    const message = document.getElementById("message")?.value.trim() || "";

    const subject = encodeURIComponent(
      `Website-Anfrage${topic ? " – " + topic : ""}`
    );

    const body = encodeURIComponent(
      `Name: ${name}\nE-Mail: ${email}\nThema: ${topic}\n\nNachricht:\n${message}`
    );

    window.location.href =
      `mailto:drescherlenny@gmail.com?subject=${subject}&body=${body}`;
  });
}

/* =========================
   OPTIONAL: SMOOTH SCROLL
   (falls du später Anker nutzt)
========================= */
function goToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}