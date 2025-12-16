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
if (firstInput) {
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
}
// Обработчик для второго поля
if (secondInput) {
   secondInput.addEventListener('input', function (e) {
      calculateSum();
   });
}
// Обработка события focus для установки значений по умолчанию
if (firstInput) {
   firstInput.addEventListener('focus', function () {
      if (this.value.trim() === '') {
         firstValue = 0;
      }
   });
}
if (secondInput) {
   secondInput.addEventListener('focus', function () {
      if (this.value.trim() === '') {
         secondValue = 1;
      }
   });
}
// Инициализация
if (firstInput) {
   firstInput.value = '';
}
if (secondInput) {
   secondInput.value = '';
}
calculateSum();