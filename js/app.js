const menuBtn = document.querySelector('#menuBtn');
const nav = document.querySelector('#nav')

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('hidden');
})