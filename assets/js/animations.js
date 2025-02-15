// assets/js/animations.js

// Function to set up Intersection Observer animations
function animateSections() {
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        } else {
          entry.target.classList.remove('animate'); // Optional: Remove animation when out of view
        }
      });
    }, { threshold: 0.2 });
  
    sections.forEach((section) => observer.observe(section));
  }
  
  // Listen for DOM load, then run animations
  document.addEventListener('DOMContentLoaded', () => {
    console.log("animations.js loaded");
    animateSections();
  });
  