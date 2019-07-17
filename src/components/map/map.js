const map = () => {

	ymaps.ready(init);
	var myMap;

	function init () {
	    myMap = new ymaps.Map('map', {
	    	center: [60.008549, 30.258663],
	    	controls: ['zoomControl'],
	    	zoom: 11
	    }, {
	    	searchControlProvider: 'yandex#search'
	    });

	    myMap.behaviors
	    .disable('scrollZoom');

	    //Добавление меток на карту
	    myMap.geoObjects
	    .add(new ymaps.Placemark([60.008549, 30.258663], {
	        balloonContent: 'Россия, Санкт-Петербург',
	        iconCaption: 'Санкт-Петербург'
	    },{
	  		preset: 'islands#blueCircleDotIconWithCaption'
	  	}))
	}

};

export default map;

//- script(src="https://api-maps.yandex.ru/2.1/?lang=ru_RU")