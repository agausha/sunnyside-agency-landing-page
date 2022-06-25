const hamburgerBtn = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');

  hamburgerBtn.addEventListener('click', e => {
    navbar.classList.toggle('navbar__active');
    console.log(navbar);
  });
