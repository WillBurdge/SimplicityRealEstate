const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav');

navToggle.addEventListener('click', function() {
  navToggle.classList.toggle('active');
  navMenu.classList.toggle('active');
});

const firstCard = document.querySelector('.grid-item-1');
firstCard.addEventListener('click', function() {
  alert('You clicked the first card!');
});
