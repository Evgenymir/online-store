import objectFitImages from 'object-fit-images'; // => Полифил для картинок с object-fit 
import Header from '../pages/layout/_header.js';
import MainSlider from '../components/slickSlider/slickSlider.js';
import AdvantagesSlider from '../pages/section/ourAdvantages.js';
import LogoBrandsSlider from '../pages/section/logoBrands.js';

window.onload = () => {

	/* Подключаем полифил для картинок */
	const images = document.querySelectorAll('.j-image-polyfill');
	objectFitImages(images);

	/* Подключаем прелоадер */
	const headerItem = document.querySelector('.j-header-discount');
	if(headerItem) {
		Header();
	}

	/* Подключаем слайдер на главном экране */
	const mainSliuderItem = document.querySelector('.j-slider-main');
	if(mainSliuderItem) {
		MainSlider();
	}

	/* Подключаем слайдер наши преимущества */
	const advantagesSliderItem = document.querySelector('.j-ourAdvantages-slider');
	if(advantagesSliderItem) {
		AdvantagesSlider();
	}

	/* Подключаем слайдер логотипов */
	const logoBrandsSliderItem = document.querySelector('.j-logoBrands-slider');
	if(logoBrandsSliderItem) {
		LogoBrandsSlider();
	}

};