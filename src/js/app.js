// import objectFitImages from 'object-fit-images'; // => Полифил для картинок с object-fit 
import Header from '../pages/layout/_header.js';
import MainSlider from '../components/slickSlider/slickSlider.js';


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