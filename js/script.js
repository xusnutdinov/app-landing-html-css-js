const menuBtnOpen = document.querySelector('.menu-burger');
const menu = document.querySelector('.nav');
const body = document.body;

menuBtnOpen.addEventListener('click', function() {
	if (menuBtnOpen.classList.contains('active')) {
		this.classList.remove('active');
		menu.classList.remove('active');
		body.classList.remove('lock');
	} else {
		this.classList.add('active');
		menu.classList.add('active');
		body.classList.add('lock');
	}
});
