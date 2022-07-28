const HamburgerMenu = document.querySelector('.hamburger');
const MobileNav = document.querySelector('.mobile-link');
const MobileNavLists = document.querySelectorAll('.nav-item-mobile');

HamburgerMenu.addEventListener('click', () => {
  HamburgerMenu.classList.toggle('is-active');
  MobileNav.classList.toggle('is-active');
});

MobileNavLists.forEach((link) => {
  link.addEventListener('click', () => {
    HamburgerMenu.classList.toggle('is-active');
    MobileNav.classList.toggle('is-active');
  });
});