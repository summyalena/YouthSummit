const hamburgerMenu = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-link');
const mobileNavLists = document.querySelectorAll('.nav-item-mobile');

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('is-active');
  mobileNav.classList.toggle('is-active');
});

mobileNavLists.forEach((link) => {
  link.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('is-active');
    mobileNav.classList.toggle('is-active');
  });
});