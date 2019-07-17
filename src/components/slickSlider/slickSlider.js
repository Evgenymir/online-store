import $ from 'jquery';
import slick from 'slick-carousel';

const runSlider = () => {
	
	$('.j-slider-main').slick({
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 1000,
		prevArrow: $('.j-main-slide-prev'),
		nextArrow: $('.j-main-slide-next'),
		dots: true,
		dotsClass: 'b-slider__dots'
	});
};

export default runSlider;