/*
  ============================================================
  script.js  —  Small interactive features for all pages
  ============================================================
*/


// ============ 1. MOBILE MENU (☰ button) ============
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function () {
  navLinks.classList.toggle("open");
});


// ============ 2. TYPING EFFECT (Home page only) ============
const typingElement = document.getElementById("typing");

// Only run if the page has an element with id="typing"
if (typingElement) {
  const words = ["Student", "Web Designer", "Lifelong Learner"];
  let wordIndex = 0;
  let letterIndex = 0;
  let isDeleting = false;

  function type() {
    const currentWord = words[wordIndex];
    letterIndex += isDeleting ? -1 : 1;
    typingElement.textContent = currentWord.substring(0, letterIndex);

    let delay = isDeleting ? 50 : 100;

    if (!isDeleting && letterIndex === currentWord.length) {
      delay = 1500;           // pause after typing a word
      isDeleting = true;
    } else if (isDeleting && letterIndex === 0) {
      isDeleting = false;     // move to the next word
      wordIndex = (wordIndex + 1) % words.length;
      delay = 300;
    }

    setTimeout(type, delay);
  }

  type();
}


// ============ 3. CONTACT FORM (Contact page only) ============
const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();   // stop the page from reloading
    document.getElementById("form-success").classList.add("show");
    contactForm.reset();      // clear all fields
  });
}


// ============ 4. CURRENT YEAR IN FOOTER ============
document.getElementById("year").textContent = new Date().getFullYear();
