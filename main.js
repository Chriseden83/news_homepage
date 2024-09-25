// Body Element for no scoll when menu open
const body = document.querySelector('body');
// Hamburger Icon
const hamburgerEl = document.querySelector('.nav__open');
// Nav Menu once burger icon clicked - to show
const navEl = document.querySelector('.nav__content');
// Close Icon to remove Nab Menu
const closeEl = document.querySelector('.nav__content--close');
// Overlay for when Nav Menu is open
const overlay = document.querySelector('.overlay');

// Burger event listener function to add Nav Menu, Overlay & No scroll
hamburgerEl.addEventListener('click', () => {
  navEl.classList.add('nav__open');
  overlay.classList.add('visible');
  body.classList.add('no-scroll');
});

// close event listener function to remove Nav Menu, Overlay & No scroll
closeEl.addEventListener('click', () => {
  navEl.classList.remove('nav__open');
  overlay.classList.remove('visible');
  body.classList.remove('no-scroll');
});

// nav event listener function to remove Nav Menu, Overlay & No scroll if clicked
navEl.addEventListener('click', () => {
  navEl.classList.remove('nav__open');
  hamburgerEl.classList.remove('nav__open');
  overlay.classList.remove('visible');
  body.classList.remove('no-scroll');
});
