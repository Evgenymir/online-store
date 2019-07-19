import $ from 'jquery';
import slick from 'slick-carousel';

const logoBanners = () => {

	$('.j-logoBrands-slider').slick({
		slidesToShow: 6,
  		slidesToScroll: 1,
  		autoplay: true,
  		autoplaySpeed: 2000,
  		prevArrow: $('.j-logoBrands-prev'),
  		nextArrow: $('.j-logoBrands-next'),
  		responsive: [
  			{
		      	breakpoint: 1390,
		      	settings: {
		      		slidesToShow: 5
		      	}
		    },
		    {
		      	breakpoint: 1090,
		      	settings: {
		      		slidesToShow: 4
		      	}
		    },
		    {
		      	breakpoint: 850,
		      	settings: {
		      		slidesToShow: 2
		      	}
		    },
		    {
		    	breakpoint: 480,
		    	settings: {
		    		centerMode: true,
		    		variableWidth: true,
		    		slidesToShow: 1,
		    		dots: true,
		    		dotsClass: 'b-logoBrands-slider__dots'
		    	}
		    }
	  	]
	});

};

export default logoBanners;