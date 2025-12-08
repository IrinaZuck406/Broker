/*-------Табы---------*/
const tabsTitle = document.querySelectorAll('.services__tabs-title');
const tabsContent = document.querySelectorAll('.services__tabs-content');

tabsTitle.forEach(item => item.addEventListener('click', event => {

   const tabsTitleTarget = event.target.getAttribute('data-tab');

   tabsTitle.forEach(element => element.classList.remove('active-tab'));

   tabsContent.forEach(element => element.classList.add('hidden-tab-content'));

   item.classList.add('active-tab');

   document.getElementById(tabsTitleTarget).classList.remove('hidden-tab-content');

}));
/*-------Слайдер "Сертификаты"---------*/
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
/*--------------------Слайдер отзывы---------------------*/
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
/*--------------------Маски для телефонов-------------------*/
const inputLoan = document.querySelector("#loan");
if (inputLoan) {
   inputLoan.addEventListener("input", maskTel);
   inputLoan.addEventListener("focus", maskTel);
   inputLoan.addEventListener("blur", maskTel);
}
const inputFormItem = document.querySelectorAll(".form__item input");
if (inputFormItem.length > 0) {
   inputFormItem.forEach((item) => {

      item.addEventListener("input", maskTel);
      item.addEventListener("focus", maskTel);
      item.addEventListener("blur", maskTel);
   });
}
//Всплывающие окна(маски для тел.):
const applicationModalImputTel = document.querySelector('.application-modal__content input[type="tel"]');
const consultationModalImputTel = document.querySelector('.consultation-modal__content input[type="tel"]');
applicationModalImputTel.addEventListener("input", maskTel);
applicationModalImputTel.addEventListener("focus", maskTel);
applicationModalImputTel.addEventListener("blur", maskTel);
consultationModalImputTel.addEventListener("input", maskTel);
consultationModalImputTel.addEventListener("focus", maskTel);
consultationModalImputTel.addEventListener("blur", maskTel);
/*--*/
function maskTel(event) {
   var blank = "+_ (___) ___-__-__";

   var i = 0;
   var val = this.value.replace(/\D/g, "").replace(/^8/, "7"); // <---

   this.value = blank.replace(/./g, function (char) {
      if (/[_\d]/.test(char) && i < val.length) return val.charAt(i++);

      return i >= val.length ? "" : char;
   });

   if (event.type == "blur") {
      if (this.value.length == 2) this.value = "";
   } else {
      setCursorPosition(this, this.value.length);
   }
};

/*--*/
function setCursorPosition(elem, pos) {
   elem.focus();

   if (elem.setSelectionRange) {
      elem.setSelectionRange(pos, pos);
      return;
   }

   if (elem.createTextRange) {
      var range = elem.createTextRange();
      range.collapse(true);
      range.moveEnd("character", pos);
      range.moveStart("character", pos);
      range.select();
      return;
   }
}

/*-----------------------Аккордеон----------------------*/
const accordion = document.getElementById('accordion');
const accordionItems = accordion.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
   const header = item.querySelector('.accordion-header');

   header.addEventListener('click', () => {

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



