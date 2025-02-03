document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// JavaScript to toggle the mobile navigation menu
document.addEventListener('DOMContentLoaded', function() {
    var burger = document.getElementById('burger');
    var navLinks = document.getElementById('nav-links');
  
    burger.addEventListener('click', function() {
      navLinks.classList.toggle('nav-active');
      burger.classList.toggle('toggle');
    });
  });
  