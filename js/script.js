const hamburgerBtn = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');

if (hamburgerBtn) {
  hamburgerBtn.addEventListener('click', (e) => {
    navbar.classList.toggle('navbar__active');
  });
}