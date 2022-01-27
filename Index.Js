const hamburger = document.querySelector('.hamburger')
const ul = document.querySelector('ul')


hamburger.addEventListener('click', function (){

       ul.classList.toggle('open')
})