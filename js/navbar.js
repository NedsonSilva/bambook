const hamburguerElement = document.getElementById('hamburguer')
const menu = document.querySelector('.wrapper')

function toggleMenu() {
   hamburguerElement.classList.toggle('animate')
   menu.classList.toggle('active')
   menu.classList.contains('active')
      ? this.classList.add('fixed')
      : this.classList.remove('fixed')
}

hamburguerElement.addEventListener('click', toggleMenu)
