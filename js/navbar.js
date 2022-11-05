const navLinks = document.querySelector('.nav-links');
const menuBtn = document.querySelector('.menu-btn');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('nav-active');
});

navLinks.addEventListener('click', () => {
  navLinks.classList.remove('nav-active');
});
