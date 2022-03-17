//variables
const menuBtn = document.querySelector('#mobile-cta'),
   nav = document.querySelector('nav'),
   exitMenuBtn = document.querySelector('#mobile-exit');
//eventlisteners
eventListeners();
function eventListeners() {
   menuBtn.addEventListener('click', () => {
      nav.style.display = 'block';
   });
   exitMenuBtn.addEventListener('click', () => {
      nav.style.display = 'none';
   });
}
//functions
