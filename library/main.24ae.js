/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./library/src/components/base/burger-menu/burgerMenu.js":
/*!***************************************************************!*\
  !*** ./library/src/components/base/burger-menu/burgerMenu.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   burgerMenu: function() { return /* binding */ burgerMenu; }
/* harmony export */ });
function burgerMenu() {
  const bodyElement = document.querySelector('body');
  const header__container = document.querySelector('.header__container');
  const burgerMenuIcon = document.querySelector('.burger-menu');
  const navElement = document.querySelector('nav');

  bodyElement.addEventListener('click', burgerMenuHandler);

  function burgerMenuHandler(event) {
    if (event.target.closest('.burger-menu') || event.target.closest('.nav__item')) {
      if (navElement.classList.contains('nav_active') || burgerMenuIcon.classList.contains('burger-menu_active') ) {
        bodyElement.classList.remove('_overflow-hidden');
        navElement.classList.remove('nav_active');
        burgerMenuIcon.classList.remove('burger-menu_active');

        //700 ms === animation duration of nav menu
        setTimeout(() => header__container.classList.add('_overflow-hidden'), 700);
      } else {
        header__container.classList.remove('_overflow-hidden');
  
        bodyElement.classList.add('_overflow-hidden');
        navElement.classList.add('nav_active');
        burgerMenuIcon.classList.add('burger-menu_active');
      }
    }

    if (!event.target.closest('.nav__container') && navElement.classList.contains('nav_active') && burgerMenuIcon.classList.contains('burger-menu_active')) {
      bodyElement.classList.remove('_overflow-hidden');
      navElement.classList.remove('nav_active');
      burgerMenuIcon.classList.remove('burger-menu_active');
      
      setTimeout(() => header__container.classList.add('_overflow-hidden'), 700);
    }
  }
}

/***/ }),

/***/ "./library/src/components/librarySelfCheck/librarySelfCheck-part3/librarySelfCheckPart3.js":
/*!*************************************************************************************************!*\
  !*** ./library/src/components/librarySelfCheck/librarySelfCheck-part3/librarySelfCheckPart3.js ***!
  \*************************************************************************************************/
/***/ (function() {

console.log(`
      **ТЗ** 
https://github.com/rolling-scopes-school/tasks/blob/master/tasks/shelter/shelter-part3.md

            **Форма для проверки** 
https://rolling-scopes-school.github.io/checklist/


**Ваша оценка - 24 балла** 

#### Отзыв по пунктам ТЗ:

#####**Не выполненные/не засчитанные пункты:**
======================================================
1) при нажатии на стрелки происходит переход к новому блоку элементов 

2) смена блоков происходит с соответствующей анимацией карусели (способ выполнения анимации не проверяется) 

3) слайдер бесконечен, т.е. можно бесконечно много нажимать влево или вправо, и каждый раз будет прокрутка в эту сторону с новым набором карточек 

4) при переключении влево или вправо прокручивается ровно столько карточек, сколько показывается при текущей ширине экрана (3 для 1280px, 2 для 768px, 1 для 320px) 

5) в текущем блоке слайда карточки с питомцами не повторяются 

6) в следующем блоке нет дублирования карточек с текущим блоком. Например в слайдере из 3 элементов, следующий выезжающий слайд будет содержать 3 (из 8 доступных) новых карточки питомца, таких, каких не было среди 3х карточек на предыдущем уехавшем слайде 

7) сохраняется только одно предыдущее состояние. Т.е. при последовательном переходе два раза влево, а потом два раза вправо, мы получим набор карточек, отличный от исходного 

8) при каждой перезагрузке страницы формируется новая последовательность карточек 

9) генерация наборов карточек происходит на основе 8 объектов с данными о животными 

10) при изменении ширины экрана (от 1280px до 320px и обратно), слайдер перестраивается и работает без перезагрузки страницы (набор карточек при этом может как изменяться, так и оставаться тем же, скрывая лишнюю или добавляя недостающую, и сохраняя при этом описанные для слайдера требования) 

11) при перезагрузке страницы всегда открывается первая страница пагинации 

12) при нажатии кнопок '>' или '<' открывается следующая или предыдущая страница пагинации соответственно 

13) при нажатии кнопок '>>' или '<<' открывается последняя или первая страница пагинации соответственно 

14) при открытии первой страницы кнопки '<<' и '<' неактивны 

15) при открытии последней страницы кнопки '>' и '>>' неактивны 

16) в кружке по центру указан номер текущей страницы. При переключении страниц номер меняется на актуальный 

17) при загрузке страницы формируется массив из 48 объектов питомцев. Каждый из 8 питомцев должен встречаться ровно 6 раз 

18) при каждой перезагрузке страницы формируется новый массив со случайной последовательностью 

19) карточки питомцев не должны повторяться на одной странице 

20) при переключении страницы данные меняются (для >1280px меняется порядок карточек, для остальных - меняется набор и порядок карточек) 

21) при неизменных размерах области пагинации, в том числе размерах окна браузера, и без перезагрузки страницы, возвращаясь на страницу под определенным номером, контент на ней всегда будет одинаков. Т.е. карточки питомцев будут в том же расположении, что и были до перехода на другие страницы 

22) общее количество страниц при ширине экрана 1280px - 6, при 768px - 8, при 320px - 16 страниц 

23) при изменении ширины экрана (от 1280px до 320px и обратно), пагинация перестраивается и работает без перезагрузки страницы (страница может оставаться той же или переключаться, при этом сформированный массив - общая последовательность карточек - не обновляется, сохраняются все остальные требования к пагинации) 

24) попап появляется при нажатии на любое место карточки с описанием конкретного животного 

25) часть страницы вне попапа затемняется 

26) при открытии попапа вертикальный скролл страницы становится неактивным, при закрытии - снова активным 

27) при нажатии на область вокруг попапа или на кнопку с крестиком попап закрывается, при этом при нажатии на сам попап ничего не происходит 

28) кнопка с крестиком интерактивная 

29) окно попапа (не считая кнопку с крестиком) центрировано по всем осям, размеры элементов попапа и их расположение совпадают с макетом 

#####**Частично выполненные пункты:**
=====================================================
1) при повторном нажатии на бургер-иконку или на свободное от бургер-меню пространство адаптивное меню плавно скрывается уезжая за правую часть экрана, бургер-иконка плавно поворачивается на 90 градусов обратно 
Отзыв: Бургер меню скрывается не плавно

#####**Выполненные пункты:**
=====================================================
1) при ширине страницы меньше 768рх панель навигации скрывается, появляется бургер-иконка 

2) при нажатии на бургер-иконку, справа плавно появляется адаптивное меню шириной 320px, бургер-иконка плавно поворачивается на 90 градусов 

3) высота адаптивного меню занимает всю высоту экрана 

4) бургер-иконка создана при помощи html+css, без использования изображений 

5) ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям, сохраняются заданные на первом этапе выполнения задания требования интерактивности элементов меню 

6) при клике по любой ссылке (интерактивной или неинтерактивной) в меню адаптивное меню плавно скрывается вправо, бургер-иконка поворачивается на 90 градусов обратно 

7) расположение и размеры элементов в бургер-меню соответствует макету (центрирование по вертикали и горизонтали элементов меню, расположение иконки). При этом на странице Pets цветовая схема может быть как темная, так и светлая 

8) область, свободная от бургер-меню, затемняется 

9) страница под бургер-меню не прокручивается 
`)

/***/ }),

/***/ "./library/src/components/index.html":
/*!*******************************************!*\
  !*** ./library/src/components/index.html ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons//apple-touch-icon.png */ "./library/src/assets/icons/apple-touch-icon.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons//favicon-32x32.png */ "./library/src/assets/icons/favicon-32x32.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons//favicon-16x16.png */ "./library/src/assets/icons/favicon-16x16.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/site.webmanifest */ "./library/src/assets/icons/site.webmanifest"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/png/about/about_img1.png */ "./library/src/assets/images/png/about/about_img1.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/png/about/about_img2.png */ "./library/src/assets/images/png/about/about_img2.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/png/about/about_img3.png */ "./library/src/assets/images/png/about/about_img3.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/png/favorites/book1.png */ "./library/src/assets/images/png/favorites/book1.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/png/favorites/book2.png */ "./library/src/assets/images/png/favorites/book2.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/png/favorites/book3.png */ "./library/src/assets/images/png/favorites/book3.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/png/favorites/book4.png */ "./library/src/assets/images/png/favorites/book4.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);
var ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);
var ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, user-scalable=yes\">\r\n  <meta name=\"keywords\" content=\"Brooklyn, library, public library, digital library cards, library coffee shop\">\r\n  <title>Brooklyn Public Library</title>\r\n   <!-- favicon start -->\r\n  <link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\">\r\n  <link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\">\r\n  <link rel=\"icon\" type=\"image/png\" sizes=\"16x16\" href=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\">\r\n  <link rel=\"manifest\" href=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\">\r\n   <!-- favicon end -->\r\n   <!-- css elements start -->\r\n  <!-- css elements end -->\r\n  <!-- Fonts links start -->\r\n  <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\r\n  <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\r\n  <link href=\"https://fonts.googleapis.com/css2?family=Forum&family=Inter:wght@400;700&display=swap\" rel=\"stylesheet\">\r\n  <!-- Fonts links end -->\r\n</head>\r\n<body>\r\n  <!-- header start -->\r\n  <header class=\"container layout-multiple-columns header__container _overflow-hidden\">\r\n    <h1 class=\"title title-h1 text_let-space-0d6px text_light\"><a class=\"link title-h1 text_let-space-0d6px text_light\" href=\"https://www.brooklinelibrary.org/about/\" target=\"_blank\">Brooklyn Public Library</a></h1>\r\n    <div class=\"layout-multiple-columns nav__container\">\r\n      <nav class=\"nav nav_position\">\r\n        <ul class=\"layout-multiple-columns nav__list\">\r\n          <li class=\"nav__item\">\r\n            <a class=\"link nav__link text_light\" href=\"#about\">About</a>\r\n          </li>\r\n          <li class=\"nav__item\">\r\n            <a class=\"link nav__link text_light\" href=\"#favorites\">Favorites</a>\r\n          </li>\r\n          <li class=\"nav__item\">\r\n            <a class=\"link nav__link text_light\" href=\"#coffee-shop\">Coffee shop</a>\r\n          </li>\r\n          <li class=\"nav__item\">\r\n            <a class=\"link nav__link text_light\" href=\"#contacts\">Contacts</a>\r\n          </li>\r\n          <li class=\"nav__item\">\r\n            <a class=\"link nav__link text_light\" href=\"#library-card\">Library Card</a>\r\n          </li>\r\n        </ul>\r\n      </nav>\r\n      <div class=\"nav__user-logo_z-index\">\r\n        <svg class=\"nav__user-logo\" width=\"28\" height=\"28\" viewBox=\"0 0 28 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n          <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M28 14C28 21.732 21.732 28 14 28C6.26801 28 0 21.732 0 14C0 6.26801 6.26801 0 14 0C21.732 0 28 6.26801 28 14ZM18.6667 7.77778C18.6667 10.3551 16.5774 12.4444 14.0001 12.4444C11.4227 12.4444 9.33339 10.3551 9.33339 7.77778C9.33339 5.20045 11.4227 3.11111 14.0001 3.11111C16.5774 3.11111 18.6667 5.20045 18.6667 7.77778ZM19.4998 16.2781C20.9584 17.7367 21.7778 19.715 21.7778 21.7778H14L6.22225 21.7778C6.22225 19.715 7.0417 17.7367 8.50031 16.2781C9.95893 14.8194 11.9372 14 14 14C16.0628 14 18.0411 14.8194 19.4998 16.2781Z\" fill=\"white\"/>\r\n          </svg>\r\n      </div>\r\n      <div class=\"layout-one-column burger-menu burger-menu_position\">\r\n        <div class=\"burger-menu__cutlet burger-menu__cutlet_position\"></div>\r\n        <div class=\"burger-menu__cutlet burger-menu__cutlet_position\"></div>\r\n        <div class=\"burger-menu__cutlet burger-menu__cutlet_position\"></div>\r\n      </div>\r\n    </div>\r\n  </header>\r\n  <!-- header end -->\r\n  <!-- main start -->\r\n  <main class=\"layout-one-column main__container\">\r\n    <!-- section welcome start -->\r\n    <section class=\"layout-one-column welcome\">\r\n      <div class=\"layout-one-column welcome__container\">\r\n        <h3 class=\"paragraph-xl text_let-space-3px text_uppercase text_light\">Welcome<br> to the Brooklyn<br> Library</h3>\r\n      </div>\r\n    </section>\r\n    <!-- section welcome end -->\r\n    <!-- section about start -->\r\n    <section class=\"about\" id=\"about\">\r\n      <div class=\"container layout-one-column about__container\">\r\n        <div class=\"layout-one-column title__container\">\r\n          <h2 class=\"title-h2 text_let-space-2px text_capitalize\">About</h2>\r\n          <div class=\"title_underline\"></div>\r\n        </div>\r\n        <div class=\"layout-one-column pagination__container\">\r\n          <p class=\"paragraph-l text_center\">The Brooklyn Library is a free workspace, a large number of books and a cozy coffee shop inside</p>\r\n          <div class=\"layout-multiple-columns pagination__content\">\r\n            <div class=\"layout-one-column pagination__content-icon\">\r\n              <div class=\"pagination__content-icon\">\r\n                <svg class=\"pagination__slider-arrow\" width=\"24\" height=\"25\" viewBox=\"0 0 24 25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                  <path d=\"M15 7.5L9 12.5L15 17.5\" stroke=\"black\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n                </svg>\r\n              </div>\r\n            </div>\r\n            <img class=\"pagination__image\" data-pagination-image=\"image__1\" src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"pretty girl lokking for a book\">\r\n            <img class=\"pagination__image\" data-pagination-image=\"image__2\" src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"a number of busts of outstanding writers\">\r\n            <img class=\"pagination__image\" data-pagination-image=\"image__3\" src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"library. Shelves with a lot of books\">\r\n            <div class=\"pagination__content-icon\">\r\n              <div class=\"layout-one-column pagination__content-icon\">\r\n                <svg class=\"pagination__slider-arrow\" width=\"24\" height=\"25\" viewBox=\"0 0 24 25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                  <path d=\"M9 17.5L15 12.5L9 7.5\" stroke=\"black\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n                </svg>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"layout-multiple-columns pagination__buttons-container\">\r\n            <div class=\"layout-one-column pagination__button pagination__button_active\">\r\n              <div class=\"pagination__button-inner pagination__button-inner_active\"></div>\r\n            </div>\r\n            <div class=\"layout-one-column pagination__button\">\r\n              <div class=\"pagination__button-inner\"></div>\r\n            </div>\r\n            <div class=\"layout-one-column pagination__button\">\r\n              <div class=\"pagination__button-inner\"></div>\r\n            </div>\r\n            <div class=\"layout-one-column pagination__button\">\r\n              <div class=\"pagination__button-inner\"></div>\r\n            </div>\r\n            <div class=\"layout-one-column pagination__button\">\r\n              <div class=\"pagination__button-inner\"></div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <!-- section about end -->\r\n    <!-- section favorites start -->\r\n    <section class=\"favorites\" id=\"favorites\">\r\n      <div class=\"container layout-one-column favorites__container\">\r\n        <div class=\"layout-one-column title__container\">\r\n          <h2 class=\"title-h2 text_let-space-2px text_capitalize\">Favorites</h2>\r\n          <div class=\"title_underline\"></div>\r\n        </div>\r\n        <div class=\"layout-one-column favorites__checker-container\">\r\n          <p class=\"paragraph-l text_height-normal text_bold\">Pick favorites of season</p>\r\n          <div class=\"layout-multiple-columns favorites__checker-radio-container\">\r\n            <label class=\"layout-multiple-columns favorites__checker-btn-container\" for=\"favorites__radio-btn1\">\r\n              <input class=\"favorites__checker-radio-btn\" id=\"favorites__radio-btn1\" type=\"radio\" name=\"favorites__checker-radio-btn\" value=\"Winter\" checked>\r\n              <span class=\"paragraph-l text_height-normal text_dark\" data-favorites__radio-btn-content=\"Winter\">\r\n                Winter\r\n              </span>\r\n            </label>\r\n            <label class=\"layout-multiple-columns favorites__checker-btn-container\" for=\"favorites__radio-btn2\" >\r\n              <input class=\"favorites__checker-radio-btn\" id=\"favorites__radio-btn2\" type=\"radio\" name=\"favorites__checker-radio-btn\" value=\"Spring\">\r\n              <span class=\"paragraph-l text_height-normal text_dark\" data-favorites__radio-btn-content=\"Spring\">\r\n                Spring\r\n              </span>\r\n            </label>\r\n            <div >\r\n              <label class=\"layout-multiple-columns favorites__checker-btn-container\" for=\"favorites__radio-btn3\">\r\n                <input class=\"favorites__checker-radio-btn\" id=\"favorites__radio-btn3\" type=\"radio\" name=\"favorites__checker-radio-btn\" value=\"Summer\">\r\n                <span class=\"paragraph-l text_height-normal text_dark\" data-favorites__radio-btn-content=\"Summer\">\r\n                  Summer\r\n                </span>\r\n              </label>\r\n            </div>\r\n            <label class=\"layout-multiple-columns favorites__checker-btn-container\" for=\"favorites__radio-btn4\">\r\n              <input class=\"favorites__checker-radio-btn\" id=\"favorites__radio-btn4\" type=\"radio\" name=\"favorites__checker-radio-btn\" value=\"Autumn\">\r\n              <span class=\"paragraph-l text_height-normal text_dark\" data-favorites__radio-btn-content=\"Autumn\">\r\n                Autumn\r\n              </span>\r\n            </label>\r\n          </div>\r\n          <div class=\"layout-multiple-columns favorites__content-container\">\r\n            <div class=\"book__container\">\r\n              <img class=\"book__content-preview\" src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"The Book Eaters By Sunyi Dean preview\">\r\n              <div class=\"layout-one-column book__content-container\">\r\n                <div class=\"layout-one-column book__title-container\">\r\n                  <div class=\"title-h5 text_let-space-2px text_capitalize\">Staff Picks</div>\r\n                  <div class=\"title_underline book__title_underline\"></div>\r\n                </div>\r\n                <p class=\"layout-one-column paragraph-m text_let-space-2px text_bold\">\r\n                  <span class=\"text_uppercase\">The Book Eaters</span>\r\n                  <span>By Sunyi Dean</span>\r\n                </p>\r\n                <p class=\"book__paragraph paragraph-m text_let-space-2px text_capitalize\">\r\n                  An unusual sci-fi story about a book eater woman who tries desperately to save her dangerous mind-eater son from tradition and certain death. Complete with dysfunctional family values, light Sapphic romance, and a strong, complex protagonist. Not for the faint of heart.\r\n                </p>\r\n                <button class=\"button book__button paragraph-s text_bold text_height-normal text_let-space-1px text_dark-background\">\r\n                  Buy\r\n                </button>\r\n              </div>\r\n            </div>\r\n            <div class=\"book__container\">\r\n              <img class=\"book__content-preview\" src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"Cackle By Rachel Harrison preview\">\r\n              <div class=\"layout-one-column book__content-container\">\r\n                <div class=\"layout-one-column book__title-container\">\r\n                  <div class=\"title-h5 text_let-space-2px text_capitalize\">Staff Picks</div>\r\n                  <div class=\"title_underline book__title_underline\"></div>\r\n                </div>\r\n                <p class=\"layout-one-column paragraph-m text_let-space-2px text_bold\">\r\n                  <span class=\"text_uppercase\">Cackle</span>\r\n                  <span>By Rachel Harrison</span>\r\n                </p>\r\n                <p class=\"book__paragraph paragraph-m text_let-space-2px text_capitalize\">\r\n                  Are your Halloween movies of choice The Witches of Eastwick and Practical Magic? Look no further than here - where a woman recovering from a breakup moves to a quaint town in upstate New York and befriends a beautiful witch.\r\n                </p>\r\n                <button class=\"button book__button paragraph-s text_bold text_height-normal text_let-space-1px text_dark-background\">\r\n                  Buy\r\n                </button>\r\n              </div>\r\n            </div>\r\n            <div class=\"book__container\">\r\n              <img class=\"book__content-preview\" src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"Dante: Poet of the Secular World By Erich Auerbach preview\">\r\n              <div class=\"layout-one-column book__content-container\">\r\n                <div class=\"layout-one-column book__title-container\">\r\n                  <div class=\"title-h5 text_let-space-2px text_capitalize\">Staff Picks</div>\r\n                  <div class=\"title_underline book__title_underline\"></div>\r\n                </div>\r\n                <p class=\"layout-one-column paragraph-m text_let-space-2px text_bold\">\r\n                  <span class=\"text_uppercase\">Dante: Poet of the Secular World</span>\r\n                  <span>By Erich Auerbach</span>\r\n                </p>\r\n                <p class=\"book__paragraph paragraph-m text_let-space-2px text_capitalize\">\r\n                  Auerbach's engaging book places the 'Comedy' within the tradition of epic, tragedy, and philosophy in general, arguing for Dante's uniqueness as one who raised the individual and his drama of soul into something of divine significance—an inspired introduction to Dante's main themes.\r\n                </p>\r\n                <button class=\"button book__button paragraph-s text_bold text_height-normal text_let-space-1px text_dark-background\">\r\n                  Buy\r\n                </button>\r\n              </div>\r\n            </div>\r\n            <div class=\"book__container\">\r\n              <img class=\"book__content-preview\" src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"The Last Queen By Clive Irving preview\">\r\n              <div class=\"layout-one-column book__content-container\">\r\n                <div class=\"layout-one-column book__title-container\">\r\n                  <div class=\"title-h5 text_let-space-2px text_capitalize\">Staff Picks</div>\r\n                  <div class=\"title_underline book__title_underline\"></div>\r\n                </div>\r\n                <p class=\"layout-one-column paragraph-m text_let-space-2px text_bold\">\r\n                  <span class=\"text_uppercase\">The Last Queen</span>\r\n                  <span>By Clive Irving</span>\r\n                </p>\r\n                <p class=\"book__paragraph paragraph-m text_let-space-2px text_capitalize\">\r\n                  A timely and revelatory new biography of Queen Elizabeth (and her family) exploring how the Windsors have evolved and thrived as the modern world has changed around them.\r\n                </p>\r\n                <button class=\"button book__button paragraph-s text_bold text_height-normal text_let-space-1px text_dark-background\" disabled=\"disabled\">Own</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <!-- section favorites end -->\r\n    <!-- section CoffeShop start -->\r\n    <section class=\"coffee-shop\" id=\"coffee-shop\">\r\n      <div class=\"container layout-one-column coffee-shop__container\">\r\n        <div class=\"layout-one-column title__container\">\r\n          <h2 class=\"title-h2 text_let-space-2px text_capitalize\">Coffee shop</h2>\r\n          <div class=\"title_underline\"></div>\r\n        </div>\r\n        <p class=\"coffee-shop__description paragraph-l text_let-space-2px\">\r\n          In our library, we have of cozy coffee shop, welcoming in customers with frothy cappuccinos and friendly conversation. You can get a favorite book and read in coffee shop. Our barista to cook you best coffee, and also you can try desserts from bakery.\r\n        </p>\r\n        <div class=\"layout-multiple-columns coffee-shop__menu-container\">\r\n          <div class=\"layout-one-column coffee-shop__menu coffee-shop__menu_left\">\r\n            <div class=\"layout-multiple-columns coffee-shop__menu-content\">\r\n              <h3 class=\"title-h3 text_let-space-2px text_capitalize text_interactive\">Coffee & Tea</h3>\r\n            </div>\r\n            <div class=\"layout-multiple-columns coffee-shop__menu-content coffee-shop__menu-content_left\">\r\n              <p class=\"paragraph-l text_let-space-2px text_capitalize\">Cold Brew Coffee</p>\r\n              <div class=\"layout-multiple-columns coffee-shop__menu-price-container\">\r\n                <span class=\"coffee-shop__menu-line\"></span>\r\n                <p class=\"title-h5 text_let-space-2px text_capitalize\">$3</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"layout-multiple-columns coffee-shop__menu-content coffee-shop__menu-content_left\">\r\n              <p class=\"paragraph-l text_let-space-2px text_capitalize\">French Press Pot</p>\r\n              <div class=\"layout-multiple-columns coffee-shop__menu-price-container\">\r\n                <span class=\"coffee-shop__menu-line\"></span>\r\n                <p class=\"title-h5 text_let-space-2px text_capitalize\">$5</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"layout-multiple-columns coffee-shop__menu-content coffee-shop__menu-content_left\">\r\n              <p class=\"paragraph-l text_let-space-2px text_capitalize\">Espresso</p>\r\n              <div class=\"layout-multiple-columns coffee-shop__menu-price-container\">\r\n                <span class=\"coffee-shop__menu-line\"></span>\r\n                <p class=\"title-h5 text_let-space-2px text_capitalize\">$2</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"layout-multiple-columns coffee-shop__menu-content coffee-shop__menu-content_left\">\r\n              <p class=\"paragraph-l text_let-space-2px text_capitalize\">Cappuccino</p>\r\n              <div class=\"layout-multiple-columns coffee-shop__menu-price-container\">\r\n                <span class=\"coffee-shop__menu-line\"></span>\r\n                <p class=\"title-h5 text_let-space-2px text_capitalize\">$4</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"layout-multiple-columns coffee-shop__menu-content coffee-shop__menu-content_left\">\r\n              <p class=\"paragraph-l text_let-space-2px text_capitalize\">Hot tea</p>\r\n              <div class=\"layout-multiple-columns coffee-shop__menu-price-container\">\r\n                <span class=\"coffee-shop__menu-line\"></span>\r\n                <p class=\"title-h5 text_let-space-2px text_capitalize\">$2</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"layout-multiple-columns coffee-shop__menu-content coffee-shop__menu-content_left\">\r\n              <p class=\"paragraph-l text_let-space-2px text_capitalize\">Cold tea</p>\r\n              <div class=\"layout-multiple-columns coffee-shop__menu-price-container\">\r\n                <span class=\"coffee-shop__menu-line\"></span>\r\n                <p class=\"title-h5 text_let-space-2px text_capitalize\">$2</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"layout-one-column coffee-shop__menu coffee-shop__menu_right\">\r\n            <div class=\"layout-multiple-columns coffee-shop__menu-content coffee-shop__menu-content_right\">\r\n              <h3 class=\"title-h3 text_let-space-2px text_capitalize text_interactive\">Desserts & Cakes</h3>\r\n            </div>\r\n            <div class=\"layout-multiple-columns coffee-shop__menu-content coffee-shop__menu-content_right\">\r\n              <p class=\"paragraph-l text_let-space-2px text_capitalize\">Forest Gateau</p>\r\n              <div class=\"layout-multiple-columns coffee-shop__menu-price-container\">\r\n                <span class=\"coffee-shop__menu-line\"></span>\r\n                <p class=\"title-h5 text_let-space-2px text_capitalize\">$16</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"layout-multiple-columns coffee-shop__menu-content coffee-shop__menu-content_right\">\r\n              <p class=\"paragraph-l text_let-space-2px text_capitalize\">Blue Moon</p>\r\n              <div class=\"layout-multiple-columns coffee-shop__menu-price-container\">\r\n                <span class=\"coffee-shop__menu-line\"></span>\r\n                <p class=\"title-h5 text_let-space-2px text_capitalize\">$16</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"layout-multiple-columns coffee-shop__menu-content coffee-shop__menu-content_right\">\r\n              <p class=\"paragraph-l text_let-space-2px text_capitalize\">Truffle Cake</p>\r\n              <div class=\"layout-multiple-columns coffee-shop__menu-price-container\">\r\n                <span class=\"coffee-shop__menu-line\"></span>\r\n                <p class=\"title-h5 text_let-space-2px text_capitalize\">$15</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"layout-multiple-columns coffee-shop__menu-content coffee-shop__menu-content_right\">\r\n              <p class=\"paragraph-l text_let-space-2px text_capitalize\">Chocolate Cake</p>\r\n              <div class=\"layout-multiple-columns coffee-shop__menu-price-container\">\r\n                <span class=\"coffee-shop__menu-line\"></span>\r\n                <p class=\"title-h5 text_let-space-2px text_capitalize\">$18</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"layout-multiple-columns coffee-shop__menu-content coffee-shop__menu-content_right\">\r\n              <p class=\"paragraph-l text_let-space-2px text_capitalize\">Poet&#39;s Dream Cake</p>\r\n              <div class=\"layout-multiple-columns coffee-shop__menu-price-container\">\r\n                <span class=\"coffee-shop__menu-line\"></span>\r\n                <p class=\"title-h5 text_let-space-2px text_capitalize\">$16</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"layout-multiple-columns coffee-shop__menu-content coffee-shop__menu-content_right\">\r\n              <p class=\"paragraph-l text_let-space-2px text_capitalize\">Pineapple Cake</p>\r\n              <div class=\"layout-multiple-columns coffee-shop__menu-price-container\">\r\n                <span class=\"coffee-shop__menu-line\"></span>\r\n                <p class=\"title-h5 text_let-space-2px text_capitalize\">$14</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <!-- section CoffeShop end -->\r\n    <!-- section Contacts start -->\r\n    <section class=\"contacts\" id=\"contacts\">\r\n      <div class=\"container layout-one-column contacts__container\">\r\n        <div class=\"layout-one-column title__container\">\r\n          <h2 class=\"title-h2 text_let-space-2px text_capitalize\">Our Contacts</h2>\r\n          <div class=\"title_underline\"></div>\r\n        </div>\r\n        <div class=\"layout-multiple-columns contacts__info-container\">\r\n          <div class=\"layout-one-column contacts__content-container\">\r\n            <div class=\"layout-one-column contacts__content-item\">\r\n              <p class=\"paragraph-l text_bold text_let-space-2px text_capitalize\">\r\n                For all Library inquiries:\r\n              </p>\r\n              <p class=\"paragraph-l text_let-space-2px text_capitalize\">\r\n                Please call <a class=\"link contacts__link text_let-space-2px text_capitalize text_dark\" href=\"tel:+16177302370\" target=\"_blank\">(617) 730-2370</a>\r\n              </p>\r\n              <p class=\"paragraph-l text_let-space-2px text_capitalize\">\r\n                For TTY service, please call <a class=\"link contacts__link text_let-space-2px text_capitalize text_dark\" href=\"tel:+16177302370\" target=\"_blank\">(617) 730-2370</a>\r\n              </p>\r\n              <p class=\"paragraph-l text_let-space-2px text_capitalize\">\r\n                Putterham Library: <a class=\"link contacts__link text_let-space-2px text_capitalize text_dark\" href=\"tel:+6177302385\" target=\"_blank\">(617) 730-2385</a>\r\n              </p>\r\n            </div>\r\n            <div class=\"layout-one-column contacts__content-item\">\r\n              <p class=\"paragraph-l text_bold text_let-space-2px text_capitalize\">Senior Staff</p>\r\n              <p class=\"paragraph-l text_let-space-2px text_capitalize\">Library Director: <a class=\"link contacts__link  text_let-space-2px text_capitalize text_dark text_bold\" href=\"mailto:AmandaHirst@gmail.com&body=Greetings?subject=question\" target=\"_blank\">Amanda Hirst</a>\r\n              </p>\r\n            </div>\r\n          </div>\r\n          <iframe class=\"library-location\" src=\"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1512.513529161274!2d-73.9914183222291!3d40.69540171749293!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a49b6395abd%3A0x5b6c5e44eb578313!2sBrooklyn%20Public%20Library%20-%20Brooklyn%20Heights%20Branch!5e0!3m2!1sen!2sru!4v1694381291747!5m2!1sen!2sru\" width=\"696\" height=\"414\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <!-- section Contacts end -->\r\n    <!-- section LibraryCard start -->\r\n    <section class=\"library-card\" id=\"library-card\">\r\n      <div class=\"container layout-one-column library-card__container\">\r\n        <div class=\"layout-one-column title__container\">\r\n          <h2 class=\"title-h2 text_let-space-2px text_capitalize\">Digital Library Cards</h2>\r\n          <div class=\"title_underline\"></div>\r\n        </div>\r\n        <div class=\"layout-multiple-columns library-card__contetnt-container\">\r\n          <div class=\"layout-one-column library-card__check-container\">\r\n            <p class=\"check-form__title paragraph-l-enhanced text_height-normal text_let-space-0d6px\">Find your Library card</p>\r\n            <div class=\"layout-one-column check-form__container\">\r\n              <form class=\"layout-one-column check-form__form\" id=\"library-card__check-form\" method=\"post\" action=\"#\">\r\n                <h4 class=\"title-h4 text_let-space-0d6px\">Brooklyn Public Library</h4>\r\n                <input class=\"check-form__input title-h4 text_let-space-0d6px\" type=\"text\" placeholder=\"Reader's name\" required>\r\n                <input class=\"check-form__input title-h4 text_let-space-0d6px\" type=\"number\" placeholder=\"Card number\" required>\r\n              </form>\r\n              <button class=\"button library-card__button library-card__button_at-center paragraph-l text_bold text_height-normal text_let-space-1px text_dark-background\" form=\"library-card__check-form\">Check the card</button>\r\n            </div>\r\n          </div>\r\n          <div class=\"layout-one-column authorization__container\">\r\n            <h4 class=\"title-h4 text_height-normal text_let-space-0d6px\">Get a reader card</h4>\r\n            <p class=\"authorization__info paragraph-l text_let-space-0d4px text_center\">\r\n              You will be able to see a reader card after logging into account or you can register a new account\r\n            </p>\r\n            <div class=\"layout-multiple-columns authorization__buttons-container\">\r\n              <button class=\"button paragraph-s text_bold text_height-normal text_let-space-1px text_dark-background\">Sign Up</button>\r\n              <button class=\"button paragraph-s text_bold text_height-normal text_let-space-1px text_dark-background\">Log in</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section> \r\n    <!-- section LibraryCard end -->\r\n  </main>\r\n  <!-- main end -->\r\n  <!-- footer start -->\r\n  <footer class=\"layout-one-column\">\r\n    <div class=\"container layout-one-column footer-library__container\">\r\n      <div class=\"layout-multiple-columns footer-library__content-container\">\r\n        <a class=\"link footer-library__link paragraph-m footer-library__link_left text_light\" href=\"https://goo.gl/maps/QQzfNq9D4f6UGVNB6\" target=\"_blank\">286 Cadman Plaza, New York, NY 11238, United States</a>\r\n        <a class=\"link footer-library__link paragraph-m footer-library__link_right text_light\" href=\"https://www.brooklinelibrary.org/about/hours-locations/\" target=\"_blank\">Mon - Fri<br> 08:00 am - 07:00 pm</a>\r\n      </div>\r\n      <div class=\"layout-multiple-columns footer-library__content-container\">\r\n        <ul class=\"layout-multiple-columns social__container\">\r\n          <li class=\"social__item\">\r\n            <a class=\"link social__link paragraph-m text_light\" href=\"https://twitter.com/\" target=\"_blank\">\r\n              <div class=\"footer__icon\">\r\n                <svg class=\"link social__link\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                  <path d=\"M22.9912 3.95021C22.9913 3.77357 22.9447 3.60007 22.8559 3.44735C22.7671 3.29464 22.6395 3.16817 22.486 3.08084C22.3324 2.9935 22.1585 2.94842 21.9819 2.95017C21.8053 2.95193 21.6323 3.00046 21.4805 3.09083C20.8952 3.43921 20.265 3.70601 19.6075 3.88383C18.6685 3.07806 17.4708 2.63713 16.2335 2.64164C14.8761 2.6432 13.5724 3.17223 12.5977 4.11702C11.623 5.06181 11.0537 6.3484 11.0099 7.70512C8.33384 7.27838 5.90849 5.88164 4.19631 3.78126C4.09315 3.65609 3.9614 3.55757 3.81217 3.494C3.66295 3.43043 3.50062 3.40368 3.33889 3.41601C3.17725 3.42932 3.02128 3.4818 2.88448 3.56892C2.74768 3.65603 2.63416 3.77516 2.55373 3.91601C2.14126 4.63582 1.90436 5.44276 1.86228 6.27131C1.8202 7.09986 1.97412 7.92666 2.31154 8.68456L2.30959 8.68651C2.15794 8.77991 2.03278 8.91066 1.94609 9.06625C1.85941 9.22185 1.81409 9.39708 1.81447 9.57519C1.81263 9.72211 1.82145 9.86898 1.84084 10.0146C1.94298 11.2729 2.50062 12.4507 3.4092 13.3271C3.34756 13.4446 3.30994 13.5731 3.29854 13.7052C3.28714 13.8373 3.30218 13.9704 3.34279 14.0967C3.7389 15.3308 4.58129 16.3727 5.7051 17.0185C4.56334 17.46 3.33052 17.614 2.11525 17.4668C1.89032 17.4386 1.66248 17.4876 1.4691 17.6059C1.27572 17.7242 1.12828 17.9047 1.05097 18.1178C0.973654 18.3309 0.97106 18.5639 1.04361 18.7787C1.11616 18.9935 1.25955 19.1772 1.45025 19.2998C3.54034 20.646 5.97393 21.3617 8.46002 21.3613C11.2793 21.393 14.03 20.4921 16.2843 18.7988C18.5385 17.1054 20.17 14.7145 20.9248 11.998C21.2779 10.8146 21.4582 9.58648 21.46 8.35157C21.46 8.28614 21.46 8.21876 21.459 8.15138C21.9811 7.58831 22.3856 6.92668 22.6487 6.20527C22.9118 5.48387 23.0283 4.7172 22.9912 3.95021ZM19.6846 7.16212C19.5194 7.35746 19.4358 7.60891 19.4512 7.86427C19.461 8.02927 19.46 8.19527 19.46 8.35157C19.4579 9.39511 19.305 10.4329 19.0059 11.4326C18.3894 13.744 17.015 15.7817 15.103 17.2192C13.1909 18.6568 10.8517 19.4111 8.46002 19.3613C7.6009 19.3616 6.74474 19.2606 5.90924 19.0606C6.97465 18.7172 7.97083 18.1879 8.85162 17.4971C9.01385 17.3693 9.13257 17.1945 9.19151 16.9967C9.25044 16.7988 9.2467 16.5875 9.18079 16.3918C9.11489 16.1961 8.99005 16.0257 8.8234 15.9038C8.65675 15.7819 8.45647 15.7145 8.25002 15.7109C7.41885 15.698 6.62515 15.363 6.03615 14.7764C6.18557 14.7481 6.33401 14.7129 6.48147 14.6709C6.69748 14.6094 6.88651 14.477 7.01813 14.295C7.14975 14.1131 7.21629 13.8921 7.20704 13.6677C7.1978 13.4433 7.1133 13.2285 6.96715 13.058C6.82101 12.8874 6.62173 12.7711 6.40139 12.7275C5.91893 12.6323 5.46494 12.427 5.0747 12.1277C4.68447 11.8284 4.36852 11.4432 4.15139 11.002C4.33212 11.0266 4.514 11.0419 4.69631 11.0479C4.91289 11.0511 5.1249 10.9854 5.30169 10.8603C5.47847 10.7351 5.61086 10.5569 5.67971 10.3516C5.74569 10.1443 5.74229 9.92123 5.67004 9.7161C5.59778 9.51096 5.46061 9.33499 5.27932 9.21485C4.83947 8.92182 4.47916 8.52427 4.23068 8.0578C3.98219 7.59134 3.85328 7.07052 3.85549 6.54201C3.85549 6.47561 3.85744 6.4092 3.86135 6.34377C6.10261 8.43402 9.00967 9.66621 12.0703 9.82326C12.2248 9.82934 12.3787 9.80024 12.5203 9.73816C12.6619 9.67607 12.7875 9.58262 12.8877 9.46486C12.9869 9.34596 13.0571 9.20566 13.0929 9.05501C13.1286 8.90437 13.1289 8.74748 13.0937 8.5967C13.0366 8.35806 13.0074 8.11357 13.0068 7.86818C13.0077 7.01271 13.348 6.19254 13.9529 5.58764C14.5578 4.98274 15.378 4.64251 16.2334 4.64161C16.6736 4.64043 17.1092 4.7305 17.5127 4.90615C17.9163 5.0818 18.2791 5.3392 18.5781 5.66212C18.6935 5.7862 18.8386 5.87871 18.9998 5.93085C19.161 5.98299 19.3329 5.99303 19.499 5.96001C19.9098 5.88006 20.3147 5.7724 20.7109 5.63775C20.4407 6.19072 20.0953 6.70369 19.6846 7.16212Z\"/>\r\n                </svg>\r\n              </div>\r\n            </a>\r\n          </li>\r\n          <li class=\"social__item\">\r\n            <a class=\"link social__link\" href=\"https://www.instagram.com/\" target=\"_blank\">\r\n              <div class=\"footer__icon\">\r\n                <svg class=\"link social__link\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                  <path d=\"M17.34 5.46C17.1027 5.46 16.8707 5.53038 16.6733 5.66224C16.476 5.79409 16.3222 5.98151 16.2313 6.20078C16.1405 6.42005 16.1168 6.66133 16.1631 6.89411C16.2094 7.12689 16.3236 7.34071 16.4915 7.50853C16.6593 7.67635 16.8731 7.79064 17.1059 7.83694C17.3387 7.88324 17.5799 7.85948 17.7992 7.76866C18.0185 7.67783 18.2059 7.52402 18.3378 7.32668C18.4696 7.12935 18.54 6.89734 18.54 6.66C18.54 6.34174 18.4136 6.03652 18.1885 5.81147C17.9635 5.58643 17.6583 5.46 17.34 5.46ZM21.94 7.88C21.9206 7.0503 21.7652 6.2294 21.48 5.45C21.2257 4.78313 20.83 4.17928 20.32 3.68C19.8248 3.16743 19.2196 2.77418 18.55 2.53C17.7727 2.23616 16.9508 2.07721 16.12 2.06C15.06 2 14.72 2 12 2C9.28 2 8.94 2 7.88 2.06C7.04915 2.07721 6.22734 2.23616 5.45 2.53C4.78168 2.77665 4.17693 3.16956 3.68 3.68C3.16743 4.17518 2.77418 4.78044 2.53 5.45C2.23616 6.22734 2.07721 7.04915 2.06 7.88C2 8.94 2 9.28 2 12C2 14.72 2 15.06 2.06 16.12C2.07721 16.9508 2.23616 17.7727 2.53 18.55C2.77418 19.2196 3.16743 19.8248 3.68 20.32C4.17693 20.8304 4.78168 21.2234 5.45 21.47C6.22734 21.7638 7.04915 21.9228 7.88 21.94C8.94 22 9.28 22 12 22C14.72 22 15.06 22 16.12 21.94C16.9508 21.9228 17.7727 21.7638 18.55 21.47C19.2196 21.2258 19.8248 20.8326 20.32 20.32C20.8322 19.8226 21.2283 19.2182 21.48 18.55C21.7652 17.7706 21.9206 16.9497 21.94 16.12C21.94 15.06 22 14.72 22 12C22 9.28 22 8.94 21.94 7.88ZM20.14 16C20.1327 16.6348 20.0178 17.2637 19.8 17.86C19.6403 18.2952 19.3839 18.6884 19.05 19.01C18.7256 19.3405 18.3332 19.5964 17.9 19.76C17.3037 19.9778 16.6748 20.0927 16.04 20.1C15.04 20.15 14.67 20.16 12.04 20.16C9.41 20.16 9.04 20.16 8.04 20.1C7.38089 20.1123 6.72459 20.0109 6.1 19.8C5.68578 19.6281 5.31136 19.3728 5 19.05C4.66809 18.7287 4.41484 18.3352 4.26 17.9C4.01586 17.2952 3.88044 16.6519 3.86 16C3.86 15 3.8 14.63 3.8 12C3.8 9.37 3.8 9 3.86 8C3.86448 7.35106 3.98295 6.70795 4.21 6.1C4.38605 5.67791 4.65627 5.30166 5 5C5.30381 4.65617 5.67929 4.3831 6.1 4.2C6.70955 3.98004 7.352 3.86508 8 3.86C9 3.86 9.37 3.8 12 3.8C14.63 3.8 15 3.8 16 3.86C16.6348 3.86728 17.2637 3.98225 17.86 4.2C18.3144 4.36865 18.7223 4.64285 19.05 5C19.3777 5.30718 19.6338 5.68273 19.8 6.1C20.0223 6.70893 20.1373 7.35178 20.14 8C20.19 9 20.2 9.37 20.2 12C20.2 14.63 20.19 15 20.14 16ZM12 6.87C10.9858 6.87198 9.99496 7.17453 9.15265 7.73942C8.31035 8.30431 7.65438 9.1062 7.26763 10.0438C6.88089 10.9813 6.78072 12.0125 6.97979 13.0069C7.17886 14.0014 7.66824 14.9145 8.38608 15.631C9.10392 16.3474 10.018 16.835 11.0129 17.0321C12.0077 17.2293 13.0387 17.1271 13.9755 16.7385C14.9123 16.35 15.7129 15.6924 16.2761 14.849C16.8394 14.0056 17.14 13.0142 17.14 12C17.1413 11.3251 17.0092 10.6566 16.7512 10.033C16.4933 9.40931 16.1146 8.84281 15.6369 8.36605C15.1592 7.88929 14.5919 7.51168 13.9678 7.25493C13.3436 6.99818 12.6749 6.86736 12 6.87ZM12 15.33C11.3414 15.33 10.6976 15.1347 10.15 14.7688C9.60234 14.4029 9.17552 13.8828 8.92348 13.2743C8.67144 12.6659 8.6055 11.9963 8.73398 11.3503C8.86247 10.7044 9.17963 10.111 9.64533 9.64533C10.111 9.17963 10.7044 8.86247 11.3503 8.73398C11.9963 8.6055 12.6659 8.67144 13.2743 8.92348C13.8828 9.17552 14.4029 9.60234 14.7688 10.15C15.1347 10.6976 15.33 11.3414 15.33 12C15.33 12.4373 15.2439 12.8703 15.0765 13.2743C14.9092 13.6784 14.6639 14.0454 14.3547 14.3547C14.0454 14.6639 13.6784 14.9092 13.2743 15.0765C12.8703 15.2439 12.4373 15.33 12 15.33Z\"/>\r\n                </svg>\r\n              </div>\r\n            </a>\r\n          </li>\r\n          <li class=\"social__item\">\r\n            <a class=\"link social__link\" href=\"https://www.facebook.com/\" target=\"_blank\">\r\n              <div class=\"footer__icon\">\r\n                <svg class=\"link social__link\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                  <path d=\"M15.12 5.32003H17V2.14003C16.0897 2.04538 15.1751 1.99865 14.26 2.00003C11.54 2.00003 9.67999 3.66003 9.67999 6.70003V9.32003H6.60999V12.88H9.67999V22H13.36V12.88H16.42L16.88 9.32003H13.36V7.05003C13.36 6.00003 13.64 5.32003 15.12 5.32003Z\"/>\r\n                </svg>\r\n              </div>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n        <a class=\"link footer-library__link paragraph-m footer-library__link_right text_light\" href=\"https://www.brooklinelibrary.org/about/hours-locations/\" target=\"_blank\">Sat - Sun<br> 10:00 am - 06:00 pm</a>\r\n      </div>\r\n      <div class=\"title_underline title_underline-light\"></div>\r\n      <div class=\"layout-multiple-columns footer-library__user-container\">\r\n        <ul class=\"layout-multiple-columns footer-library__user-list\">\r\n          <li class=\"footer-library__user-item paragraph-l text_let-space-2px text_light\">2023</li>\r\n          <li class=\"footer-library__user-item\">\r\n            <a class=\"link footer-library__user-link paragraph-l text_let-space-2px text_light\" href=\"https://rs.school/js-stage0/\" target=\"_blank\">The Rolling Scopes School</a>\r\n          </li>\r\n          <li class=\"footer-library__user-item\">\r\n            <a class=\"link footer-library__user-link paragraph-l text_let-space-2px text_light\" href=\"https://github.com/Dmitriy-Frostoff\" target=\"_blank\">Dmitriy-Frostoff</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </footer>\r\n  <!-- footer end -->\r\n</body>\r\n</html>";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ (function(module) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./library/src/components/library.scss":
/*!*********************************************!*\
  !*** ./library/src/components/library.scss ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./library/src/assets/icons/site.webmanifest":
/*!***************************************************!*\
  !*** ./library/src/assets/icons/site.webmanifest ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "src/assets/icons/site.1c337fa2fa1515591f8d.webmanifest";

/***/ }),

/***/ "./library/src/assets/icons/apple-touch-icon.png":
/*!*******************************************************!*\
  !*** ./library/src/assets/icons/apple-touch-icon.png ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "src/assets/icons/apple-touch-icon.62d0e638f3660af1fcf3.png";

/***/ }),

/***/ "./library/src/assets/icons/favicon-16x16.png":
/*!****************************************************!*\
  !*** ./library/src/assets/icons/favicon-16x16.png ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "src/assets/icons/favicon-16x16.4e43830a221c8c684ad7.png";

/***/ }),

/***/ "./library/src/assets/icons/favicon-32x32.png":
/*!****************************************************!*\
  !*** ./library/src/assets/icons/favicon-32x32.png ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "src/assets/icons/favicon-32x32.0c94c54703e536d263ff.png";

/***/ }),

/***/ "./library/src/assets/images/png/about/about_img1.png":
/*!************************************************************!*\
  !*** ./library/src/assets/images/png/about/about_img1.png ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "src/assets/images/png/about/about_img1.41dafeb795883b548e33.png";

/***/ }),

/***/ "./library/src/assets/images/png/about/about_img2.png":
/*!************************************************************!*\
  !*** ./library/src/assets/images/png/about/about_img2.png ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "src/assets/images/png/about/about_img2.4ecc0775b288c7b5cd58.png";

/***/ }),

/***/ "./library/src/assets/images/png/about/about_img3.png":
/*!************************************************************!*\
  !*** ./library/src/assets/images/png/about/about_img3.png ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "src/assets/images/png/about/about_img3.29ae201d5d18f44cccbc.png";

/***/ }),

/***/ "./library/src/assets/images/png/favorites/book1.png":
/*!***********************************************************!*\
  !*** ./library/src/assets/images/png/favorites/book1.png ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "src/assets/images/png/favorites/book1.56af8287b0a87259ec3a.png";

/***/ }),

/***/ "./library/src/assets/images/png/favorites/book2.png":
/*!***********************************************************!*\
  !*** ./library/src/assets/images/png/favorites/book2.png ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "src/assets/images/png/favorites/book2.80504ee1025053c2151f.png";

/***/ }),

/***/ "./library/src/assets/images/png/favorites/book3.png":
/*!***********************************************************!*\
  !*** ./library/src/assets/images/png/favorites/book3.png ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "src/assets/images/png/favorites/book3.1d2c4fad2976c0f4ad5d.png";

/***/ }),

/***/ "./library/src/assets/images/png/favorites/book4.png":
/*!***********************************************************!*\
  !*** ./library/src/assets/images/png/favorites/book4.png ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "src/assets/images/png/favorites/book4.dc96beee8b8a9070cfa8.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!*****************************************!*\
  !*** ./library/src/components/index.js ***!
  \*****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./library/src/components/index.html");
/* harmony import */ var _library_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./library.scss */ "./library/src/components/library.scss");
/* harmony import */ var _librarySelfCheck_librarySelfCheck_part3_librarySelfCheckPart3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./librarySelfCheck/librarySelfCheck-part3/librarySelfCheckPart3 */ "./library/src/components/librarySelfCheck/librarySelfCheck-part3/librarySelfCheckPart3.js");
/* harmony import */ var _librarySelfCheck_librarySelfCheck_part3_librarySelfCheckPart3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_librarySelfCheck_librarySelfCheck_part3_librarySelfCheckPart3__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base_burger_menu_burgerMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base/burger-menu/burgerMenu */ "./library/src/components/base/burger-menu/burgerMenu.js");



// self - check
// import { librarySelfCheckPart1 } from './librarySelfCheck/librarySelfCheck-part1/librarySelfCheckPart1';
// import { librarySelfCheckPart2 } from './librarySelfCheck/librarySelfCheck-part2/librarySelfCheckPart2';




(0,_base_burger_menu_burgerMenu__WEBPACK_IMPORTED_MODULE_3__.burgerMenu)();
}();
/******/ })()
;
//# sourceMappingURL=main.24ae.js.map