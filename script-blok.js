// Функция для отображения указанного блока
function showBlock(blockNumber) {
   const formContainer = document.querySelector('.calculation-ransom__wrapper');
   const blocks = document.querySelectorAll('.calculation-ransom__item');

   // Убираем active у всех блоков и добавляем inactive для позиционирования
   blocks.forEach(block => {
      block.classList.remove('active');
      block.classList.add('inactive');
   });

   // Показываем нужный блок
   const targetBlock = document.getElementById(`block${blockNumber}`);
   if (targetBlock) {
      targetBlock.classList.add('active');
      targetBlock.classList.remove('inactive');

      // Устанавливаем высоту контейнера равной высоте активного блока
      // Используем requestAnimationFrame для правильного расчета после применения стилей
      requestAnimationFrame(() => {
         const activeBlockHeight = targetBlock.offsetHeight;
         formContainer.style.height = activeBlockHeight + 'px';
      });
   }
}

// Инициализация - установка начальной высоты
window.addEventListener('load', () => {
   const formContainer = document.querySelector('.calculation-ransom__wrapper');
   const activeBlock = document.querySelector('.calculation-ransom__item.active');
   if (activeBlock) {
      formContainer.style.height = activeBlock.offsetHeight + 'px';
   }
});

// Обработка изменения размера окна для адаптивности
window.addEventListener('resize', () => {
   const activeBlock = document.querySelector('.calculation-ransom__item.active');
   const formContainer = document.querySelector('.calculation-ransom__wrapper');
   if (activeBlock) {
      formContainer.style.height = activeBlock.offsetHeight + 'px';
   }
});
/*------------Слайдер "Другие варианты для бизнеса"---*/
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
   if (swiper) swiper.update();
}

// Запускаем при загрузке
window.addEventListener('load', setEqualSlideHeight);
// И при изменении размера окна (адаптив)
window.addEventListener('resize', setEqualSlideHeight);

// Небольшая задержка на случай асинхронной подгрузки шрифтов и т.п.
setTimeout(setEqualSlideHeight, 100);