!function(){var n={458:function(){console.log('\nПривет!) Я ещё доделываю работу и надеюсь на твоё понимание) На текщий момент готово: карусель в about.\n\n      **ТЗ** \nhttps://github.com/rolling-scopes-school/tasks/blob/master/tasks/library/library-part3.md\n\n            **Форма для проверки** \nhttps://rolling-scopes-school.github.io/checklist/\n\n\n**Ваша оценка - 25 балла** \n\n#### Отзыв по пунктам ТЗ:\n\n#####**Не выполненные/не засчитанные пункты:**\n======================================================\n1) "Слайдер" реагирует на нажатие кнопок панели навигации и происходит анимация затухания и проявления.\n\n2) На любой ширине экрана все 4 карточки с книгами одновременно будут плавно затухать, а затем плавно проявляться следующие.\n\n3) Анимация может быть прервана следующим нажатием на кнопку выбора поры года, но при этом анимация не должна застывать в промежуточном состоянии. Если анимация не была прервана следующим нажатием кнопки, то она должна отрабатывать до конца.\n\n4) Во время анимаций высота блока Favorites не должна меняться.\n\n5) ❗Панель навигации "слайдера" сделана по технологии "sticky" для разрешений с одним рядом книг (768px и меньше), т.е. опускается вниз вместе со скроллом страницы, прилипая к верхней части экрана, в рамках блока Favorites.\n\n6) В блоке Favorites все кнопки должны иметь имя Buy, а не Own.\n\n7) Нажатие на иконку пользователя в хедере открывает меню, которое должно оказаться под иконкой таким образом, что правый верхний угол меню находится в той же точке, что и нижний правый угол контейнера с иконкой в хедере. Меню под иконкой.\n\n8) На разрешении 768px, при открытом бургер-меню, оно закрывается и открывается меню авторизации.\n\n9) То же верно и в обратную сторону, кнопка бургер-меню должна быть доступна при открытом меню авторизации.\n\n10) Нажатие на любую область или элемент вне меню приводят к закрытию меню авторизации.\n\n11) Дизайн модального окна соответствует макету.\n\n12) При нажатии на кнопку Register в открытом меню авторизации появляется модальное окно REGISTER, где есть поля First name, Last name, E-mail и Password.\n\n13) При нажатии кнопки Sign Up в блоке Digital Library Cards также появляется модальное окно REGISTER.\n\n14) Окно центрировано, а область вокруг затемнена (насколько затемнена - не имеет значения).\n\n15) При нажатии на крестик в углу окна, или на затемнённую область вне этого окна, оно закрывается.\n\n16) В данном случае, ограничения по полям - все поля должны быть не пустыми.\n\n17) Пароль должен быть не короче 8 символов.\n\n18) В поле E-mail должна быть валидация типа email.\n\n19) Данные сохраняются в хранилище localStorage, в том числе и пароль, хотя в реальной жизни так делать нельзя.\n\n20) Иконка пользователя меняется на заглавные буквы имени.\n\n21) Отображение страницы приходит в состояние после авторизации (этап 4).\n\n22) Будет сгенерирован девятизначный Card Number случайным образом в формате 16-ричного числа.\n\n23) Блок Digital Library Cards. Если введённые имя и номер карты совпадают с данными пользователя, то отображается панель с информацией, вместо кнопки Check the card на 10 секунд.\n\n24) Там же после отображения информации, кнопка возвращается в прежнее состояние, а поля в форме сбрасываются.\n\n25) Дизайн модального окна соответствует макету.\n\n26) При нажатии на кнопку Log In появляется модальное окно LOGIN, где есть поля E-mail or readers card и Password.\n\n27) При нажатии кнопки Log In в блоке Digital Library Cards также появляется модальное окно LOGIN.\n\n28) Окно центрировано, а область вокруг затемнена (насколько затемнена - не имеет значения).\n\n29) При нажатии на крестик в углу окна, или на затемнённую область вне этого окна, оно закрывается.\n\n30) Для авторизации все поля должны быть не пустыми.\n\n31) Пароль должен быть не короче 8 символов.\n\n32) Если пользователь ещё не вошёл в учётную запись, то при нажатии на любую кнопку Buy открывается модальное окно LOGIN.\n\n33) При наведении курсором на иконку пользователя должно отображаться полное имя пользователя (атрибут title).\n\n34) Нажатие на иконку пользователя в хедере открывает меню, которое должно оказаться под иконкой таким образом, что правый верхний угол меню находится в той же точке, что и нижний правый угол контейнера с иконкой в хедере. Меню под иконкой.\n\n35) На разрешении 768px при открытом бургер-меню, оно закрывается и открывается меню авторизации.\n\n36) То же верно и в обратную сторону, кнопка бургер-меню должна быть доступна.\n\n37) Нажатие на любую область или элемент вне меню приводят к закрытию меню профиля.\n\n38) ❗Вместо надписи Profile отображается девятизначный Card Number. Для Card Number можно использовать меньший шрифт чтобы надпись вметилась в контейнер.\n\n39) Нажатие на кнопку My Profile открывает модальное окно MY PROFILE.\n\n40) Нажатие на кнопку Log Out приводит к выходу пользователю из состояния авторизации, возвращаемся к этапу #1.\n\n41) Дизайн модального окна соответствует макету.\n\n42) Счетчик для Visits отображает, сколько раз пользователь проходил процесс авторизации, включая самый первый - регистрацию.\n\n43) Счетчик для Books отображает, сколько у пользователя книг находятся в состоянии Own. Значение варьируется 0-16.\n\n44) Рядом с Card Number есть кнопка, нажатие на которую копирует код карты клиента в буфер обмена.\n\n45) Окно центрировано, а область вокруг затемнена (насколько затемнена - не имеет значения).\n\n46) При нажатии на крестик в углу окна, или на затемненную область вне этого окна, оно закрывается.\n\n47) При нажатии на любую кнопку Buy, еще до покупки абонемента, открывается модальное окно BUY A LIBRARY CARD.\n\n48) При нажатии на любую кнопку Buy, после покупки абонемента, меняет вид кнопки на неактивную Own, добавляя единицу к счетчику книг в профиле.\n\n49) Кроме того после нажатия обновляется не только счетчик, но и название книги должно отобразится в разделе Rented Books. Название формируется по принципу <название книги>, <автор книги>. В случае если название книги слишком длинное или список стал слишком большой список книг в блоке Rented Books становится скроллируемым (по необходимости горизонтально/ вертикально или оба скролла сразу) Тайтл Rented Books скроллироваться не должен\n\n50) ❗Модальное окно нужно сделать шириной 640px. Будет это обрезка по 5px по бокам, или просто уменьшение длины с сохранением сетки - значения не имеет, хотя при правильной сеточной структуре, сделать это будет намного проще.\n\n51) Дизайн модального окна соответствует макету.\n\n52) При нажатии на крестик в углу окна, или на затемнённую область вне этого окна, оно закрывается.\n\n53) Для того, чтобы кнопка Buy была активна, все поля должны быть не пустыми.\n\n54) Bank card number должен содержать 16 цифр. С пробелами каждые 4 символа или нет - значения не имеет.\n\n55) Expiration code содержит 2 поля с ограничением в 2 цифры.\n\n56) CVC должен содержать 3 цифры.\n\n57) При наличии авторизации вместо кнопки Check the Card будут отображаться данные пользователя и бейджи, как на дизайне LibraryCard after login in account.\n\n#####**Выполненные пункты:**\n=====================================================\n1) Карусель реагирует на нажатие кнопок (кнопки под каруселью и стрелочки слева и справа в мобильной версии) и происходит анимация перелистывания.\n\n2) На экране шириной 1440px проверяем, чтобы было доступно 2 других скрытых картинки. При каждом нажатии выезжает следующая, и так до границ справа и слева.\n\n3) Выделенная кнопка под каруселью (имеется ввиду кнопка соответствующая активному слайду и которая имеет коричневый цвет) - неактивная.\n\n4) Если анимация карусели не успела завершиться, при этом нажата была следующая кнопка, то картинка не должна зависнуть в промежуточном состоянии.\n\n5) На экране шириной 768px проверяем, чтобы было доступно 4 других скрытых картинки. Для этого меняем разрешение и перезагружаем страницу. Теперь доступных перемещений становится 5.\n\n6) Неактивными становятся не только выделенные кнопки, но и стрелочки на границах карусели. \n')},91:function(n){"use strict";n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),e.hash&&(n+=e.hash),e.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(n)?'"'.concat(n,'"'):n):n}},38:function(n,e,t){"use strict";n.exports=t.p+"src/assets/icons/site.1c337fa2fa1515591f8d.webmanifest"},516:function(n,e,t){"use strict";n.exports=t.p+"src/assets/icons/apple-touch-icon.62d0e638f3660af1fcf3.png"},938:function(n,e,t){"use strict";n.exports=t.p+"src/assets/icons/favicon-16x16.4e43830a221c8c684ad7.png"},264:function(n,e,t){"use strict";n.exports=t.p+"src/assets/icons/favicon-32x32.0c94c54703e536d263ff.png"},511:function(n,e,t){"use strict";n.exports=t.p+"src/assets/images/png/about/about_img1.41dafeb795883b548e33.png"},450:function(n,e,t){"use strict";n.exports=t.p+"src/assets/images/png/about/about_img2.4ecc0775b288c7b5cd58.png"},823:function(n,e,t){"use strict";n.exports=t.p+"src/assets/images/png/about/about_img3.29ae201d5d18f44cccbc.png"},782:function(n,e,t){"use strict";n.exports=t.p+"src/assets/images/png/about/about_img4.8fb663b2e07916f71ee2.png"},723:function(n,e,t){"use strict";n.exports=t.p+"src/assets/images/png/about/about_img5.b9a2fcc078e510a176b7.png"},10:function(n,e,t){"use strict";n.exports=t.p+"src/assets/images/png/favorites/book1.56af8287b0a87259ec3a.png"},499:function(n,e,t){"use strict";n.exports=t.p+"src/assets/images/png/favorites/book2.80504ee1025053c2151f.png"},90:function(n,e,t){"use strict";n.exports=t.p+"src/assets/images/png/favorites/book3.1d2c4fad2976c0f4ad5d.png"},34:function(n,e,t){"use strict";n.exports=t.p+"src/assets/images/png/favorites/book4.dc96beee8b8a9070cfa8.png"}},e={};function t(s){var o=e[s];if(void 0!==o)return o.exports;var c=e[s]={exports:{}};return n[s](c,c.exports,t),c.exports}t.m=n,t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,{a:e}),e},t.d=function(n,e){for(var s in e)t.o(e,s)&&!t.o(n,s)&&Object.defineProperty(n,s,{enumerable:!0,get:e[s]})},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t.b=document.baseURI||self.location.href,function(){"use strict";var n=t(91),e=t.n(n),s=new URL(t(516),t.b),o=new URL(t(264),t.b),c=new URL(t(938),t.b),r=new URL(t(38),t.b),a=new URL(t(511),t.b),i=new URL(t(450),t.b),u=new URL(t(823),t.b),l=new URL(t(782),t.b),d=new URL(t(723),t.b),_=new URL(t(10),t.b),b=new URL(t(499),t.b),f=new URL(t(90),t.b),g=new URL(t(34),t.b);e()(s),e()(o),e()(c),e()(r),e()(a),e()(i),e()(u),e()(l),e()(d),e()(_),e()(b),e()(f),e()(g),t(458),function(){const n=document.querySelector("body"),e=document.querySelector(".header__container"),t=document.querySelector(".burger-menu"),s=document.querySelector("nav");n.addEventListener("click",(function(o){(o.target.closest(".burger-menu")||o.target.closest(".nav__item"))&&(s.classList.contains("nav_active")||t.classList.contains("burger-menu_active")?(n.classList.remove("_overflow-hidden"),s.classList.remove("nav_active"),t.classList.remove("burger-menu_active"),setTimeout((()=>e.classList.add("_overflow-hidden")),700)):(e.classList.remove("_overflow-hidden"),n.classList.add("_overflow-hidden"),s.classList.add("nav_active"),t.classList.add("burger-menu_active"))),!o.target.closest(".nav__container")&&s.classList.contains("nav_active")&&t.classList.contains("burger-menu_active")&&(n.classList.remove("_overflow-hidden"),s.classList.remove("nav_active"),t.classList.remove("burger-menu_active"),setTimeout((()=>e.classList.add("_overflow-hidden")),700))}))}(),function(){const n=document.querySelector(".carousel__container"),e=document.querySelector(".carousel__content"),t=document.querySelectorAll(".carousel__button"),s=document.querySelectorAll(".carousel__button-inner"),o=document.querySelector(".carousel__image").getBoundingClientRect().width+25,c=document.querySelector(".carousel__content-icon-left"),r=document.querySelector(".carousel__content-icon-right"),a={btn__0:0*-o,btn__1:1*-o,btn__2:2*-o,btn__3:3*-o,btn__4:4*-o};function i(){t.forEach((n=>n.classList.remove("carousel__button_active"))),s.forEach((n=>n.classList.remove("carousel__button-inner_active")))}function u(n){n.classList.add("carousel__button_active"),document.querySelector(".carousel__button_active > .carousel__button-inner").classList.add("carousel__button-inner_active")}function l(n,e){return n.outerHTML.match(e).toString()}function d(n){const t=l(n,/btn__\d/gi);e.style.transform=`translateX(${a[t]}px)`}function _(n){0===n?c.classList.add("carousel__content-icon_disabled"):c?.classList.remove("carousel__content-icon_disabled"),4===n?r.classList.add("carousel__content-icon_disabled"):r?.classList.remove("carousel__content-icon_disabled")}n.addEventListener("click",(function(n){if(n.target.closest(".carousel__button")){const e=n.target.closest(".carousel__button");_(Number(l(e,/btn__\d/gi).replace(/\D/gi,""))),i(),u(e),d(e)}if(n.target.closest(".carousel__content-icon")){const e=document.querySelector(".carousel__button_active");let t=Number(l(e,/btn__\d/gi).replace(/\D/gi,""));if(i(),t>=0&&t<=4){if(_(t),n.target.closest(".carousel__content-icon-left")&&t-1>=0){let n=document.querySelector(`[data-carousel-button="btn__${t-1}"]`);u(n),d(n),_(t-1)}if(n.target.closest(".carousel__content-icon-right")&&t+1<=4){let n=document.querySelector(`[data-carousel-button="btn__${t+1}"]`);u(n),d(n),_(t+1)}}}}))}()}()}();
//# sourceMappingURL=main.2e24.js.map