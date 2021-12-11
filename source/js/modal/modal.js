const openBtn = document.querySelector('.main-nav__toggle')
const closeBtn = document.querySelector('.main-nav__toggle--exit');
const modal =  document.querySelector('.main-nav__wrapper')

openBtn.addEventListener('click', (e) => {
  e.preventDefault()
  modal.classList.add('active');
})

closeBtn.addEventListener('click', (e) => {
  e.preventDefault()
  modal.classList.remove('active')
})
