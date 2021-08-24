const hamburguerElement = document.getElementById('hamburguer')
const menu = document.querySelector('.wrapper')

function toggleMenu() {
   hamburguerElement.classList.toggle('animate')
   menu.classList.toggle('active')
}

hamburguerElement.addEventListener('click', toggleMenu)
