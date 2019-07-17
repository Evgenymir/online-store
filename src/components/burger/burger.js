// Клик по бургеру

const clickBurger = () => {
	const burger = document.querySelector('.j-burger');
	const mobileMenu = document.querySelector('.j-mobileMenu');
	const closeButton = document.querySelector('.j-mobileMenu__close');
	const overlay = document.querySelector('.j-overlay');

	const openMenu = () => {
		// Берем координаты страницы
		let x = window.scrollX;
		let y = window.scrollY;

		mobileMenu.classList.add('active');
		overlay.classList.add('active');
		window.onscroll = function() {
			window.scrollTo(x, y);
		};
	};

	const closeMenu = () => {
		mobileMenu.classList.remove('active');
		overlay.classList.remove('active');
		window.onscroll = function() {};
	};

	burger.addEventListener('click', function(e) {
		e.preventDefault();
		
		openMenu();
	});

	closeButton.addEventListener('click', () => {
		closeMenu();
	});

	overlay.addEventListener('click', () => {
		closeMenu();
	});
};

export default clickBurger;