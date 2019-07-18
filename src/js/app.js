import objectFitImages from 'object-fit-images'; // => Полифил для картинок с object-fit 
import Header from '../pages/layout/_header.js';
import MainSlider from '../components/slickSlider/slickSlider.js';
import AdvantagesSlider from '../pages/section/ourAdvantages.js';
import LogoBrandsSlider from '../pages/section/logoBrands.js';
import Tabs from '../components/tabs/tabs.js';
import InstSlider from '../pages/section/weOnInstagramm.js';

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

	/* Подключаем Табы */
	const tabsItem = document.querySelector('.j-tabs');
	if(tabsItem) {
		Tabs();
	}

	/* Подключаем слайдер инстаграм */
	const InstSliderItem = document.querySelector('.j-instagram-slider');
	if(InstSliderItem) {
		InstSlider();
	}

};