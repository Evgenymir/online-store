// import objectFitImages from 'object-fit-images'; // => Полифил для картинок с object-fit 
import Header from '../pages/layout/_header.js';


/* Подключаем прелоадер */
const headerItem = document.querySelector('.j-header-discount');
if(headerItem) {
	Header();
}
