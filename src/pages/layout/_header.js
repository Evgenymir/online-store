const header = () => {

	const headerDiscountClose = document.querySelector('.j-header-discount__close');
	const headerDiscount = document.querySelector('.j-header-discount');

	headerDiscountClose.addEventListener('click', (e) => {
		e.preventDefault();

		headerDiscount.classList.add('is-hide');
	});

};

export default header;