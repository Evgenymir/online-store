import $ from 'jquery';

const validate = () => {
	const form = document.querySelector('.j-form');
	let elems = form.elements;
	const overlay = document.querySelector('.j-overlay');
	const popupThanks = document.querySelector('.j-popup-thanks');
	const popupClose = document.querySelector('.j-popup-thanks__close');

	const openPopup = () => {
		overlay.classList.add('active');
		popupThanks.classList.add('is-active');
	};

	const closePopup = () => {
		overlay.classList.remove('active');
		popupThanks.classList.remove('is-active');
	};

	popupClose.addEventListener('click', () => {
		closePopup();
	});

	overlay.addEventListener('click', () => {
		closePopup();
	});


	form.addEventListener('submit', function(e) {
		e.preventDefault();
		let valid = true;

		if(!elems.name.value.trim()) {
			valid = false;
			elems.name.focus();
			elems.name.parentElement.classList.add('has-error');
			elems.name.parentElement.classList.remove('is-success');
		} else {
			elems.name.parentElement.classList.remove('has-error');
		}

		if(!elems.email.value.trim()) {
			valid = false;
			if(elems.name.value) {
				elems.email.focus();
			}
			elems.email.parentElement.classList.add('has-error');
			elems.email.parentElement.classList.remove('is-success');
		} else {
			elems.email.parentElement.classList.remove('has-error');
		}

		if(valid === true) {
			let formData = $('.j-form').serialize();
        	$.ajax({
        		url: $(this).attr('action'),
            	type: 'POST',
            	data: formData,
            	success: function (data) {
              		openPopup();
					elems.name.value = '';
					elems.email.value = '';
					elems.message.value = '';
            	}
          	});
		}
	});

	form.addEventListener('change', function(e) {
		e.preventDefault();

		if(elems.name.value) {
			elems.name.parentElement.classList.add('is-success');
			elems.name.parentElement.classList.remove('has-error');
		} 

		if(elems.email.value) {
			elems.email.parentElement.classList.add('is-success');
			elems.email.parentElement.classList.remove('has-error');
		}
	});
};

export default validate;