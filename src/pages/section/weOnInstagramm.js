import $ from 'jquery';
import slick from 'slick-carousel';

const instSlider = () => {

	$('.j-instagram-slider').slick({
		autoplay: true,
		autoplaySpeed: 2000,
		slidesToShow: 8,
  		slidesToScroll: 1,
  		prevArrow: $('.j-instagram-prev'),
  		nextArrow: $('.j-instagram-next'),
  		centerMode: true,
		variableWidth: true,
  		responsive: [
  			{
		      	breakpoint: 1470,
		      	settings: {
		      		slidesToShow: 7
		      	}
		    },
		    {
		      	breakpoint: 1390,
		      	settings: {
		      		slidesToShow: 6
		      	}
		    },
		    {
		      	breakpoint: 1090,
		      	settings: {
		      		slidesToShow: 5
		      	}
		    },
		    {
		      	breakpoint: 850,
		      	settings: {
		      		slidesToShow: 3,
		      	}
		    },
		    {
		    	breakpoint: 480,
		    	settings: {
		    		slidesToShow: 1
		    	}
		    }
	  	]
	});

};

export default instSlider;