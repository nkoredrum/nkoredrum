// assets/js/nav.js

function initMobileMenu() {
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  mobileMenuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// Listen for DOM load, then set up mobile menu
document.addEventListener('DOMContentLoaded', () => {
  console.log("nav.js loaded");
  initMobileMenu();
});
