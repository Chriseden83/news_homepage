const body = document.querySelector('body');
const hamburgerEl = document.querySelector('.nav__open');
const navEl = document.querySelector('.nav__content');
const closeEl = document.querySelector('.nav__content--close');
const linksEl = document.querySelector('.header__link');

hamburgerEl.addEventListener('click', () => {
  navEl.classList.toggle('nav__open');
  body.classList.add('no-scroll');
  body.classList.add('overlay');
});

closeEl.addEventListener('click', () => {
  navEl.classList.toggle('nav__open');
  body.classList.remove('no-scroll');
  body.classList.remove('overlay');
});

navEl.addEventListener('click', () => {
  navEl.classList.remove('nav__open');
  hamburgerEl.classList.remove('nav__open');
  body.classList.remove('overlay');
});
