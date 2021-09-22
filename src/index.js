import './sass/main.scss';
import tSwitch from './js/theme-switch';
import cardTp from './templates/card.hbs';
import menu from './js/menu.json';

const {LIGHT, DARK ,load, save, addClass } = tSwitch;

const body = document.querySelector('body');
const themeSwitch = document.querySelector('#theme-switch-toggle');
const menuList = document.querySelector('.js-menu');

//добавляю дефолтный клас на body (можно и в html это сделать, но я же js прохожу :) ).
body.classList.add(LIGHT);

//Проверка положения Switch
addClass(body, themeSwitch);

//Слушатель событий на Switch
themeSwitch.addEventListener('change', (v) => { save(DARK, v.target.checked); addClass(body, themeSwitch);});

//Создаем разметку меню (карточек).
menuList.insertAdjacentHTML('beforeend', cardTp(menu)); 