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
