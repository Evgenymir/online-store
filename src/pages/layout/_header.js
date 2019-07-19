const header = () => {

	const headerDiscountClose = document.querySelector('.j-header-discount__close');
	const headerDiscount = document.querySelector('.j-header-discount');
	const registration = document.querySelector('.j-registration');
	const popupRegister = document.querySelector('.j-popup-registration');
	const overlay = document.querySelector('.j-overlay');
	const buttonClosePopup = document.querySelector('.j-popup-close-registration');

	const openPopup = () => {
		popupRegister.classList.add('is-active');
		overlay.classList.add('is-active');
	};

	const closePopup = () => {
		popupRegister.classList.remove('is-active');
		overlay.classList.remove('is-active');
	};

	headerDiscountClose.addEventListener('click', (e) => {
		e.preventDefault();

		headerDiscount.classList.add('is-hide');
	});

	registration.addEventListener('click', function(e) {
		e.preventDefault();

		openPopup();
	});

	overlay.addEventListener('click', () => {
		closePopup();
	});

	buttonClosePopup.addEventListener('click', () => {
		closePopup();
	});

};

export default header;