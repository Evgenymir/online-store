import $ from 'jquery';
import slick from 'slick-carousel';

const tab = () => {

	$('.j-tab-link').on('click', function(e) {
		e.preventDefault();

		let 
			$this = $(this),
			item = $this.closest('.j-tab-item'),
			container = $this.closest('.j-tabs'),
			content = container.find('.j-tabs-content-item'),
			ndx = item.index(),
			reqItem = content.eq(ndx),
			activeItem = content.filter('.is-active');

			item.addClass('is-active')
				.siblings()
				.removeClass('is-active');

			activeItem.fadeOut(0, function() {
				reqItem.fadeIn(0, function() {
					$(this).addClass('is-active')
						.siblings()
						.removeClass('is-active');
				});
			});
	});

	$('.j-slider-bestProducts').slick({
		slidesToShow: 4,
  		slidesToScroll: 1,
  		prevArrow: $('.j-bestProducts-prev'),
  		nextArrow: $('.j-bestProducts-next'),
  		dots: true,
		dotsClass: 'b-slider-bestProducts-dots',
  		responsive: [
  			{
		      	breakpoint: 1390,
		      	settings: {
		      		slidesToShow: 3
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
		    		slidesToShow: 1,
		    		dots: false
		    	}
		    }
	  	]
	});

	$('.j-slider-bestProducts-two').slick({
		slidesToShow: 4,
  		slidesToScroll: 1,
  		prevArrow: $('.j-bestProducts-two-prev'),
  		nextArrow: $('.j-bestProducts-two-next'),
  		dots: true,
		dotsClass: 'b-slider-bestProducts-dots',
  		responsive: [
  			{
		      	breakpoint: 1390,
		      	settings: {
		      		slidesToShow: 3
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
		    		slidesToShow: 1,
		    		dots: false
		    	}
		    }
	  	]
	});

};

export default tab;