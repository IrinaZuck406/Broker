const iconMenu = document.querySelector('.header__menu-icon');
const iconMenu1 = document.querySelector('.header__burger-icon');
const headerBurgerNavUl = document.querySelector('.header__bottom-nav ul');
const headerBurger = document.querySelector('.header__burger');
const headerBurgerNav = document.querySelector('.header__burger-nav');
const headerBurgerNavUlClone = headerBurgerNavUl.cloneNode(true);

headerBurgerNav.appendChild(headerBurgerNavUlClone);
/*if (iconMenu) {
   iconMenu.addEventListener("click", function (e) {
      document.body.classList.add('_lock');
      headerBurger.classList.add('active');
   });
}
if (iconMenu1) {
   iconMenu1.addEventListener("click", function (e) {
      document.body.classList.remove('_lock');
      headerBurger.classList.remove('active');
   });
}*/
/*----------------------Перенос кнопок в шапке-------------------------- */
const headerButtons = document.querySelector('.header__top .header__buttons');
const headerBottom = document.querySelector('.header__bottom');
const headerButtonsClone = headerButtons.cloneNode(true);
headerBottom.appendChild(headerButtonsClone);
const headerBottomButtons = document.querySelector('.header__bottom .header__buttons');
if (window.innerWidth < 1400) {
   headerButtons.classList.add('none-item');
   headerBottomButtons.classList.remove('none-item');
} else {
   headerButtons.classList.remove('none-item');
   headerBottomButtons.classList.add('none-item');
}
window.addEventListener('resize', () => {
   if (window.innerWidth < 1400) {
      headerButtons.classList.add('none-item');
      headerBottomButtons.classList.remove('none-item');
   } else {
      headerButtons.classList.remove('none-item');
      headerBottomButtons.classList.add('none-item');
   }
});


/*------------Всплывающее окно "Консультация"----------*/
const modal = document.querySelector('.consultation-modal__overlay');
const triggerBtn = document.querySelectorAll('.btn-trigger');
const closeBtn = document.querySelector('.consultation-modal__x');
const confirmBtn = document.querySelector('.consultation-modal__content button');


// Функция открытия модального окна
function consultationOpenModal() {
   modal.classList.add('active');
   document.body.classList.add('_lock');
}

// Функция закрытия модального окна
function consultationCloseModal() {
   modal.classList.remove('active');
   document.body.classList.remove('_lock');
}

// Обработчики событий

triggerBtn.forEach(elem => {
   elem.addEventListener('click', consultationOpenModal);
})
closeBtn.addEventListener('click', consultationCloseModal);
confirmBtn.addEventListener('click', consultationCloseModal);


// Закрытие окна при клике за его пределами
modal.addEventListener('click', (e) => {
   if (e.target === modal) {
      consultationCloseModal();
   }
});

// Закрытие окна при нажатии клавиши Escape
document.addEventListener('keydown', (e) => {
   if (e.key === 'Escape' && modal.classList.contains('active')) {
      consultationCloseModal();
   }
});
/*------------Всплывающее окно "Заявка"----------*/
const applicationModal = document.querySelector('.application-modal__overlay');
const applicationTriggerBtn = document.querySelectorAll('.application-btn-trigger');
const applicationCloseBtn = document.querySelector('.application-modal__x');
const applicationConfirmBtn = document.querySelector('.application-modal__content button');


// Функция открытия модального окна
function applicationOpenModal() {
   applicationModal.classList.add('active');
   document.body.classList.add('_lock');
}

// Функция закрытия модального окна
function applicationCloseModal() {
   applicationModal.classList.remove('active');
   document.body.classList.remove('_lock');
}

// Обработчики событий

applicationTriggerBtn.forEach(elem => {
   elem.addEventListener('click', applicationOpenModal);
})
applicationCloseBtn.addEventListener('click', applicationCloseModal);
applicationConfirmBtn.addEventListener('click', applicationCloseModal);


// Закрытие окна при клике за его пределами
applicationModal.addEventListener('click', (e) => {
   if (e.target === applicationModal) {
      applicationCloseModal();
   }
});

// Закрытие окна при нажатии клавиши Escape
document.addEventListener('keydown', (e) => {
   if (e.key === 'Escape' && applicationModal.classList.contains('active')) {
      applicationCloseModal();
   }
});
/*------------Всплывающее окно "Бургер"----------*/
const burgerModal = document.querySelector('.burger__overlay');
const burgerTriggerBtn = document.querySelectorAll('.burger-btn-trigger');
const burgerCloseBtn = document.querySelector('.burger__x');


// Функция открытия модального окна
function burgerOpenModal() {
   burgerModal.classList.add('active');
   document.body.classList.add('_lock');
}

// Функция закрытия модального окна
function burgerCloseModal() {
   burgerModal.classList.remove('active');
   document.body.classList.remove('_lock');
}

// Обработчики событий

burgerTriggerBtn.forEach(elem => {
   elem.addEventListener('click', burgerOpenModal);
})
burgerCloseBtn.addEventListener('click', burgerCloseModal);


// Закрытие окна при клике за его пределами
burgerModal.addEventListener('click', (e) => {
   if (e.target === burgerModal) {
      burgerCloseModal();
   }
});

// Закрытие окна при нажатии клавиши Escape
document.addEventListener('keydown', (e) => {
   if (e.key === 'Escape' && applicationModal.classList.contains('active')) {
      burgerCloseModal();
   }
});

/*-----------------------Прокрутка при клике-----------------------*/
const menuLinks = document.querySelectorAll('a[data-goto], button[data-goto]');

/*--проверяем, нашлись ли такие объекты--*/
if (menuLinks.length > 0) {
   menuLinks.forEach(menuLink => {
      menuLink.addEventListener("click", onMenuLinkClick);
   });
   function onMenuLinkClick(e) {
      /*--объект, на кот. мы кликаем, т.е. ссылка--*/
      const menuLink = e.target;
      /*--проверяем, заполнен ли этот дата-атрибут и существует ли объект, на кот. ссылается данный дата-атрибут--*/
      if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
         /*--получаем в константу этот объект--*/
         const gotoBlock = document.querySelector(menuLink.dataset.goto);
         /*--вычисляем положение этого объекта(той или иной секции) с учётом высоты шапки(расстоян. от верха на странице + кол-во прокрученых пикселей и отнимаем высоту шапки--*/
         const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;

         /* if (headerBurger.classList.contains('active')) {
             document.body.classList.remove('_lock');
 
             headerBurger.classList.remove('active');
          }*/
         if (burgerModal.classList.contains('active')) {
            document.body.classList.remove('_lock');
            burgerModal.classList.remove('active');
         }
         /*--код, кот заставит скролл прокрутиться к нужному месту--*/
         window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
         });
         /*--откл. работу ссылки, чтобы она только производила прокрутку--*/
         e.preventDefault();
      }
   }
}