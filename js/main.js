// ==========================================================================
// Thandeka's Artisan Home Decor — main.js
// Handles the mobile navigation menu toggle.
// (Further interactivity, e.g. form validation, will be added in Part 3.)
// ==========================================================================

document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener("click", function () {
      navLinks.classList.toggle("open");
    });
  }
});
