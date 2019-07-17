const progressBarLine = () => {
	const bar = document.querySelector('.j-progress-bar');
	const documentHeight = document.documentElement.scrollHeight;
	const windowHeight = window.innerHeight;

	window.onscroll = () => {
		let scroll = window.pageYOffset;
		let value = (scroll / (documentHeight - windowHeight)) * 100;

		bar.style.width = value + '%';
	}
};

export default progressBarLine;