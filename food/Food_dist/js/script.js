document.addEventListener('DOMContentLoaded', () => {

    const tabs = document.querySelectorAll('.tabheader__item');
    const tabsContent = document.querySelectorAll('.tabcontent');
    const tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent () {
        tabsContent.forEach(item => { //делаем невидимыми все табы
            item.style.display = 'none';
        });

        tabs.forEach(item => {  //удаляем класс активности
            item.classList.remove('tabheader__item_active'); 
        });
    }

    function showTabContent (i = 0) { //добавляем класс активности на определнный элемент
        tabsContent[i].style.display = 'block';
        tabs[i].classList.add('tabheader__item_active'); 
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (e) => {
    const target = e.target;
  
    if (target && target.classList.contains('tabheader__item')) { //теперь нужно найти номер таба в списке и передать его в функцию showTabContent, чтобы его показать
         tabs.forEach((item, i) => {
             if (target === item) {
                hideTabContent();
                showTabContent(i);
             }

         });
    }

    });

});