import $ from 'jquery';
import slick from 'slick-carousel';

const advatagesSlider = () => {

	$('.j-ourAdvantages-slider').slick({
		slidesToShow: 4,
  		slidesToScroll: 1,
  		prevArrow: $('.j-ourAdvantages-slide-prev'),
  		nextArrow: $('.j-ourAdvantages-slide-next'),
  		responsive: [
  			{
		      	breakpoint: 1090,
		      	settings: {
		      		slidesToShow: 3
		      	}
		    },
		    {
		      	breakpoint: 850,
		      	settings: {
		      		slidesToShow: 1
		      	}
		    }
	  	]
	});

};

export default advatagesSlider;