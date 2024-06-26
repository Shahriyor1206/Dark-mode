let nav = document.querySelector('nav');
let btn = document.querySelector('.btn');
let body = document.body;

btn.addEventListener('click', () => {
   nav.classList.toggle('darkMode');
   body.classList.toggle('darkMode');
   btn.classList.toggle('active');
});