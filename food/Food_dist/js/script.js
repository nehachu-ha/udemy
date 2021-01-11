document.addEventListener('DOMContentLoaded', () => {

    //Tabs

    const tabs = document.querySelectorAll('.tabheader__item');
    const tabsContent = document.querySelectorAll('.tabcontent');
    const tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabsContent.forEach(item => { //делаем невидимыми все табы
            item.style.display = 'none';
        });

        tabs.forEach(item => { //удаляем класс активности
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) { //добавляем класс активности на определнный элемент
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

    //Timer

    const deadline = '2021-01-20'; //создаем переменную с дедлайном

    function gerTimerRemaining (endtime) { // создаем функцию, которая будеи определять разницу между дедлайном и текущим временем

        const t = Date.parse(endtime) - Date.parse(new Date()); // переводит разницу в датах к милисекунды
        const days = Math.floor(t / (1000 * 60 * 60 * 24));
        const hours = Math.floor((t / (1000 * 60 * 60) % 24));
        const minutes = Math.floor((t / 1000 / 60) % 60);
        const seconds = Math.floor((t / 1000) % 60);

        return { //возвращаем объект с данными полученными в переменных
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

        function getZero (num) { // функция которая будет подставлять ноль к однозначным числам (01)
            if (num >= 0 && num < 10) {
                return `0${num}`;
            } else {
                return num;
            }
        }

        function setClock(selector, endtime) { //создаем функцию установки часов
            const timer = document.querySelector(selector), //ищем элементы со страницы
                days = timer.querySelector('#days'),
                hours = timer.querySelector('#hours'),
                minutes = timer.querySelector('#minutes'),
                seconds = timer.querySelector('#seconds');
            const timeInterval = setInterval(updateClock, 1000); // запускаем функцию каждую секунду

            updateClock(); //запускаем функцию прямо здесь, чтобы избежать мигания таймера при загрузке страницы, т.к. сначала загружаются данные из верстки, 
                           //а таймер запускает функцию только через секунду

            function updateClock() { //создаем функцию, которая будет обновлять таймер каждую секунду
                const t = gerTimerRemaining(endtime);

                days.innerHTML = getZero(t.days);
                hours.innerHTML = getZero(t.hours);
                minutes.innerHTML = getZero(t.minutes);
                seconds.innerHTML = getZero(t.seconds);

                if (t.total <= 0) { // останавливаем обновление таймера, когда отсчет доходит до 0;
                    clearInterval(timeInterval);
                }
            }

        }
    setClock('.timer', deadline);

});