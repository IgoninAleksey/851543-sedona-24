const link = document.querySelector('.main-nav__toggle')
const closeBtn = document.querySelector('.main-nav__toggle--exit');
const modal =  document.querySelector('.main-nav__wrapper')

link.addEventListener('click', (e) => {
	e.preventDefault()
	modal.classList.add('main-nav__wrapper--closed');
});

closeBtn.addEventListener('click', (e) => {
	e.preventDefault()
	modal.classList.remove('main-nav__wrapper--closed');
});
