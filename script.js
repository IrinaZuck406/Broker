/*-------Табы---------*/
const tabsTitle = document.querySelectorAll('.services__tabs-title');
const tabsContent = document.querySelectorAll('.services__tabs-content');
if (tabsTitle) {
   tabsTitle.forEach(item => item.addEventListener('click', event => {

      const tabsTitleTarget = event.target.getAttribute('data-tab');

      tabsTitle.forEach(element => element.classList.remove('active-tab'));

      tabsContent.forEach(element => element.classList.add('hidden-tab-content'));

      item.classList.add('active-tab');

      document.getElementById(tabsTitleTarget).classList.remove('hidden-tab-content');

   }));
}
/*-------Слайдер "Сертификаты"---------*/
const certificatesSliderBox = document.querySelector('.certificates-slider');
if (certificatesSliderBox) {
   const certificatesSlider = new Swiper('.certificates-slider', {
      navigation: {
         nextEl: '.certificates-slider .certificates-button-prev',
         prevEl: '.certificates-slider .certificates-button-next'
      },

      // Количество слайдов для показа(можно указывать как целые числа, так и дроби например 2.5:
      slidesPerView: 3,
      //Отключение функционала, если слайдов в слайдере меньше, чем кол-во для одновременного показа (чтобы не отключалось ставим auto):
      watchOverflow: true,
      //Отступ между слайдами:
      spaceBetween: 20,

      //Кол-во пролистываемых слайдов:
      slidesPerGroup: 1,
      //Скорость переключения слайдов:
      speed: 300,

      //Бесконечный слайдер(отключить скролл и убрать мультирядность):
      loop: true,
      //Адаптивность
      breakpoints: {
         320: {
            slidesPerView: 1,
         },
         400: {
            slidesPerView: 2,
         },
         992: {
            slidesPerView: 3,
         }
      },
   });
   const swiperPrev = document.getElementById('certificatesPrev');
   const swiperNext = document.getElementById('certificatesNext');
   if (swiperPrev) {
      swiperPrev.addEventListener('click', () => {
         certificatesSlider.slidePrev();
      });
   }
   if (swiperNext) {
      swiperNext.addEventListener('click', () => {
         certificatesSlider.slideNext();
      });
   }
}
/*--------------------Слайдер отзывы---------------------*/
const reviewsSliderBox = document.querySelector('.reviews-slider');
if (reviewsSliderBox) {
   const reviewsSlider = new Swiper('.reviews-slider', {
      navigation: {
         nextEl: '.reviews-slider .reviews-button-prev',
         prevEl: '.reviews-slider .reviews-button-next'
      },

      // Количество слайдов для показа(можно указывать как целые числа, так и дроби например 2.5:
      slidesPerView: 3,
      //Отключение функционала, если слайдов в слайдере меньше, чем кол-во для одновременного показа (чтобы не отключалось ставим auto):
      watchOverflow: true,
      //Отступ между слайдами:
      spaceBetween: 20,

      //Кол-во пролистываемых слайдов:
      slidesPerGroup: 1,
      //Скорость переключения слайдов:
      speed: 300,

      //Бесконечный слайдер(отключить скролл и убрать мультирядность):
      loop: true,
      //Адаптивность
      breakpoints: {
         320: {
            slidesPerView: 1,
         },
         750: {
            slidesPerView: 2,
         },
         992: {
            slidesPerView: 3,
         }
      },
   });
   const reviewsPrev = document.getElementById('reviewsPrev');
   const reviewsNext = document.getElementById('reviewsNext');
   if (reviewsPrev) {
      reviewsPrev.addEventListener('click', () => {
         reviewsSlider.slidePrev();
      });
   }
   if (reviewsNext) {
      reviewsNext.addEventListener('click', () => {
         reviewsSlider.slideNext();
      });
   }
}
/*------------Слайдер "Другие варианты для бизнеса"---*/
const certificatSliderBox = document.querySelector('.business-options-slider');
if (certificatSliderBox) {
   const certificatSlider = new Swiper('.business-options-slider', {
      navigation: {
         nextEl: '.business-options-button-prev',
         prevEl: ' .business-options-button-next'
      },


      // Количество слайдов для показа(можно указывать как целые числа, так и дроби например 2.5:
      slidesPerView: 2,
      //Отключение функционала, если слайдов в слайдере меньше, чем кол-во для одновременного показа (чтобы не отключалось ставим auto):
      watchOverflow: true,
      //Отступ между слайдами:
      spaceBetween: 20,

      //Кол-во пролистываемых слайдов:
      slidesPerGroup: 1,
      //Скорость переключения слайдов:
      speed: 300,

      //Бесконечный слайдер(отключить скролл и убрать мультирядность):
      loop: true,
      //Адаптивность
      breakpoints: {
         320: {
            slidesPerView: 1,
         },
         800: {
            slidesPerView: 2,
         }

      },
   });
   const swiperPrev1 = document.getElementById('businessOptionsPrev');
   const swiperNext1 = document.getElementById('businessOptionsNext');
   if (swiperPrev1) {
      swiperPrev1.addEventListener('click', () => {
         certificatSlider.slidePrev();
      });
   }
   if (swiperNext1) {
      swiperNext1.addEventListener('click', () => {
         certificatSlider.slideNext();
      });
   }

   // Функция для выравнивания высоты всех слайдов по самому высокому
   function setEqualSlideHeight() {
      const slides = document.querySelectorAll('.business-options-slider__wrapper .swiper-slide');
      if (slides.length === 0) return;

      // Сбрасываем высоту, чтобы измерить реальную высоту контента
      slides.forEach(slide => {
         slide.style.height = 'auto';
         slide.style.minHeight = '0';
      });

      // Находим максимальную высоту
      let maxHeight = 0;
      slides.forEach(slide => {
         const height = slide.scrollHeight;
         if (height > maxHeight) maxHeight = height;
      });

      // Устанавливаем одинаковую высоту всем слайдам
      slides.forEach(slide => {
         slide.style.height = maxHeight + 'px';
         slide.style.minHeight = maxHeight + 'px';
      });

      // Обновляем Swiper (на всякий случай)
      if (certificatSlider) certificatSlider.update();
   }

   // Запускаем при загрузке
   window.addEventListener('load', setEqualSlideHeight);
   // И при изменении размера окна (адаптив)
   window.addEventListener('resize', setEqualSlideHeight);

   // Небольшая задержка на случай асинхронной подгрузки шрифтов и т.п.
   setTimeout(setEqualSlideHeight, 100);

}
/*-----------------------Аккордион----------------------*/
const accordion = document.getElementById('accordion');

const accordionItems = document.querySelectorAll('.accordion-item');
if (accordion) {
   accordionItems.forEach(item => {
      const accordionHeader = item.querySelector('.accordion-header');

      accordionHeader.addEventListener('click', () => {

         if (item.classList.contains('active')) {
            item.classList.remove('active');
         } else {

            accordionItems.forEach(otherItem => {
               if (otherItem !== item) {
                  otherItem.classList.remove('active');
               }
            });

            item.classList.add('active');
         }
      });

   });
}
/*---------------------Страница контакты, окно с информацией----------------------------------*/
/*const contactBox = document.querySelector('.contact-box');
const contactBoxX = document.querySelector('.contact-box__x');
const contactBoxArrow = document.querySelector('.contact-box__arrow');
if (contactBox) {
   contactBoxX.addEventListener('click', () => {
      contactBox.classList.remove('active');
      contactBoxArrow.classList.add('active');
   });

   contactBoxArrow.addEventListener('click', () => {
      if (contactBoxArrow.classList.contains('active')) {
         contactBox.classList.add('active');
         contactBoxArrow.classList.remove('active');
      }
   })
}*/

