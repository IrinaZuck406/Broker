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

inputLoan.addEventListener("input", maskTel);
inputLoan.addEventListener("focus", maskTel);
inputLoan.addEventListener("blur", maskTel);

const inputFormItem = document.querySelectorAll(".form__item input");

inputFormItem.forEach((item) => {

   item.addEventListener("input", maskTel);
   item.addEventListener("focus", maskTel);
   item.addEventListener("blur", maskTel);
});
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
/*-----------------Калькулятор "Расчёт кредита"--------------------*/
const firstInput = document.getElementById('loan-sum');
const secondInput = document.getElementById('loan-term');
const loanPercent = document.querySelector('.loan-calculator__result-text-3 span');
const loanPercentValue = parseInt(loanPercent.textContent);
const loanPayment = document.querySelector('.loan-calculator__result-text-1 span');
const loanOverpayment = document.querySelector('.loan-calculator__result-text-2 span');
/*
let loanSumValue = 0;
let loanTermValue = 1;
let loanPercentValue = parseInt(loanPercent.textContent);
loanSum.oninput = function () {
   if (parseInt(loanSum.value) >= 0) {
      loanSumValue = parseInt(loanSum.value);

      loanPayments();
      loanOverpayments();
   } if (parseInt(loanSum.value) == NaN) {

      loanSumValue = 0;
   }
   else {
      loanSumValue = 0;
   }
}

loanTerm.oninput = function () {
   if (parseInt(loanTerm.value) > 0) {
      loanTermValue = parseInt(loanTerm.value);
      console.log(loanTerm.value);
      loanPayments();
      loanOverpayments();
   } else {
      loanTermValue = 1;
   }

}
function loanPayments() {
   let loanPaymentText = (loanSumValue * (1 + loanPercentValue / 100)) / (loanTermValue * 12);
   loanPayment.textContent = loanPaymentText.toFixed(2);
}
function loanOverpayments() {
   let loanOverpaymentText = loanSumValue * loanPercentValue / 100;
   loanOverpayment.textContent = loanOverpaymentText.toFixed(2);
}*/
/* const firstInput = document.getElementById('firstNumber');
    const secondInput = document.getElementById('secondNumber');
    const resultElement = document.getElementById('result');*/

// Функция для форматирования числа с пробелами как разделителями тысяч
function formatNumberWithSpaces(value) {
   // Удаляем все пробелы и нецифровые символы (кроме десятичной точки)
   let cleaned = value.replace(/[^\d.]/g, '');

   // Разделяем на целую и дробную части
   let parts = cleaned.split('.');
   let integerPart = parts[0];
   let decimalPart = parts[1] || '';

   // Форматируем целую часть с пробелами каждые 3 цифры справа
   if (integerPart) {
      integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
   }

   // Собираем обратно
   if (decimalPart) {
      return integerPart + '.' + decimalPart;
   }
   return integerPart;
}

// Функция для получения числового значения из отформатированной строки
function getNumericValue(formattedValue) {
   // Удаляем пробелы и преобразуем в число
   const cleaned = formattedValue.replace(/\s/g, '');
   const num = parseFloat(cleaned);
   return isNaN(num) ? 0 : num;
}

let firstValue = 0;
let secondValue = 1;

function calculateSum() {
   // Получаем числовые значения для расчета
   const firstInputValue = firstInput.value.trim();
   const secondInputValue = secondInput.value.trim();

   // Для первого поля используем отформатированное значение
   firstValue = firstInputValue === '' ? 0 : getNumericValue(firstInputValue);
   secondValue = secondInputValue === '' ? 1 : parseFloat(secondInputValue);

   if (isNaN(secondValue)) {
      secondValue = 1;
      secondInput.value = '';
   }
   let loanPaymentText = (firstValue * (1 + loanPercentValue / 100)) / (secondValue * 12);

   loanPayment.textContent = formatNumberWithSpaces(loanPaymentText.toFixed(2));/*loanPaymentText.toFixed(2);*/
   let loanOverpaymentText = firstValue * loanPercentValue / 100;
   loanOverpayment.textContent = formatNumberWithSpaces(loanOverpaymentText.toFixed(2));
   /*const sum = firstValue + secondValue;
   resultElement.textContent = `Сумма: ${sum}`;*/
}

// Обработчик для первого поля с форматированием
firstInput.addEventListener('input', function (e) {
   const cursorPosition = this.selectionStart;
   const originalValue = this.value;

   // Форматируем значение
   const formattedValue = formatNumberWithSpaces(originalValue);
   this.value = formattedValue;

   // Пытаемся сохранить позицию курсора
   let newCursorPosition = cursorPosition;
   if (originalValue.length !== formattedValue.length) {
      // Простой способ - ставим курсор в конец
      this.setSelectionRange(formattedValue.length, formattedValue.length);
   } else {
      this.setSelectionRange(cursorPosition, cursorPosition);
   }

   calculateSum();
});

// Обработчик для второго поля
secondInput.addEventListener('input', function (e) {
   calculateSum();
});

// Обработка события focus для установки значений по умолчанию
firstInput.addEventListener('focus', function () {
   if (this.value.trim() === '') {
      firstValue = 0;
   }
});

secondInput.addEventListener('focus', function () {
   if (this.value.trim() === '') {
      secondValue = 1;
   }
});

// Инициализация
firstInput.value = '';
secondInput.value = '';
calculateSum();
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



