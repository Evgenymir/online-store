import $ from 'jquery';
import slick from 'slick-carousel';

const runSlider = () => {
	
	$('.j-slider').slick({
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 1000,
		arrows: false,
		dots: true,
		dotsClass: 'b-slider__dots'
	});
};

export default runSlider;