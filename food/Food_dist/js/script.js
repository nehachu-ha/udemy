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

    //Modal

    const modalTrigger = document.querySelectorAll('[data-modal]');
    const modal = document.querySelector('.modal');
    const modalCloseBtn = document.querySelector('[data-close]');

    function openModal () {
        modal.classList.add('show');
        modal.classList.remove('hide');
        // modal.classList.toggle('show'); // можно испольховать вместо add и remove;
        document.body.style.overflow = 'hidden'; // запрещаем прокрутку страницы при открытом модальном окне;
        clearInterval(setTimeoutId); //отменяем открытие модального окна, если пользователь его уже открывал
    }

    modalTrigger.forEach((item) => {
        item.addEventListener('click', openModal);
    });

    function closeModal () {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = ''; // восстанавливаем прокрутку при закрытом модальном окне, оставляем пустые кавычки, тогда браузер сам определяет что нужно сделать
    }

    modalCloseBtn.addEventListener('click', closeModal); // восстанавливаем прокрутку при закрытом модальном окне, оставляем пустые кавычки, тогда браузер сам определяет что нужно сделать

    modal.addEventListener('click', (e) => { //модальное окно закрывается при клике на подложку
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => { //закрывается модальное окно при нажатии на ESC
        if (e.code === "Escape" && modal.classList.contains('show')) {    // проверяем содержит ли собитие е код Escape и проверяем открыто ли окно
            closeModal();
        }
    });

    const setTimeoutId = setInterval(openModal, 5000); // создаем таймер, чтобы модальное окно открылось самомтоятельно через какое-то время

    function showModalByScroll () {
        //pageYOffset - показывает насколько прокручерн документ по оси у; 
        //clientHeight - показывает сколько пикселей сечас видно пользователю;
        //scrollHeight -  полный сайт 
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) { // то узнаем прокручена ли страница до конца;
            openModal();
            window.removeEventListener('scroll', showModalByScroll); // удаляем обработчик события после того как один раз уже открылось модальное окно, чтобы не открывалось повторно
        }
    }

    window.addEventListener('scroll', showModalByScroll);// вешаем обработчик события на скролл
       
    



});