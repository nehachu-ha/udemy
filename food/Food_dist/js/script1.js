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

    const deadline = '2021-05-20'; //создаем переменную с дедлайном

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
    // const modalCloseBtn = document.querySelector('[data-close]'); //удаляем, т.к. будем оспользовать делегирование событий

    function openModal () {
        modal.classList.add('show');
        modal.classList.remove('hide');
        // modal.classList.toggle('show'); // можно испольховать вместо add и remove;
        document.body.style.overflow = 'hidden'; // запрещаем прокрутку страницы при открытом модальном окне;
        // clearInterval(setTimeoutId); //отменяем открытие модального окна, если пользователь его уже открывал
    }

    modalTrigger.forEach((item) => {
        item.addEventListener('click', openModal);
    });

    function closeModal () {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = ''; // восстанавливаем прокрутку при закрытом модальном окне, оставляем пустые кавычки, тогда браузер сам определяет что нужно сделать
    }

    // modalCloseBtn.addEventListener('click', closeModal); // восстанавливаем прокрутку при закрытом модальном окне, оставляем пустые кавычки, тогда браузер сам определяет что нужно сделать
    // удаляем, т.к. будем оспользовать делегирование событий

    modal.addEventListener('click', (e) => { //модальное окно закрывается при клике на подложку
        if (e.target === modal || e.target.getAttribute('data-close') === '') {  //также проверяем есть ли дата -атрибут у элемента(у крестика)
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => { //закрывается модальное окно при нажатии на ESC
        if (e.code === "Escape" && modal.classList.contains('show')) {    // проверяем содержит ли собитие е код Escape и проверяем открыто ли окно
            closeModal();
        }
    });

    const setTimeoutId = setInterval(openModal, 50000); // создаем таймер, чтобы модальное окно открылось самомтоятельно через какое-то время

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

//используем классы для карточек

    class MenuCard {
        constructor(src, alt, title, description, price, parentSelector, ...classes) { //с помощью rest оператора добавляем классы для div
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.description = description;
            this.price = price;
            this.classes = classes; //это будет массив
            this.parent = document.querySelector(parentSelector); //ищем элемент после которого помещать в разметку element;
            this.transfer = 27;
            this.changeToUAH();
        }

        changeToUAH() {    // конвертация курсов валют
            this.price = this.price * this.transfer;
        }

        render() { //классическое название метода, чтобы сформировать верстку
            const element = document.createElement('div');
            if (this.classes.length === 0) { // назначаем параметры по умолчению для массива полученного с помощью rest оператора
                this.element = 'menu__item'; //назначаем дефолтный класс
                element.classList.add(this.element);
            } else {
                this.classes.forEach(className => element.classList.add(className)); //перебираем массив, внутри forEach с помощью стрелочной функции говорим, что
                //в качестве аргумента она принимает имя класса и добавляет element указанный класс
            }

            element.innerHTML = `
            <img src=${this.src} alt=${this.alt}>
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">${this.description}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
            </div>
            `;
            this.parent.append(element);
        }
    }
    // const div = new MenuCard();
    // div.render();

    //объект может существовать и без переменной, делается это тогда, когда этот объект используется только на месте. если его не положить в переменную,
    //то в будущем он потеряется, он создастся и удалится , т.к. на него не будет потом никаких ссылок, тогда запись будет следующего вида

    new MenuCard( // аргументы копируем из HTML
        "img/tabs/vegy.jpg",
        "vegy",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9,
        '.menu .container',

    ).render();

    new MenuCard( // аргументы копируем из HTML
        "img/tabs/elite.jpg",
        "elite",
        'Меню "Премиум"',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        14,
        '.menu .container',
        'menu__item'
    ).render();

    new MenuCard( // аргументы копируем из HTML
        "img/tabs/post.jpg",
        "post",
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        12,
        '.menu .container',
        'menu__item'
    ).render();


//Forms

    const forms = document.querySelectorAll('form');

    //создаем объект, который содержит список ответов пользователю после загрузки данных на сервер (лучше указывать позитивные и негативные сценарии)
    const message = {
        loading: 'img/spinner.svg',
        success: 'Спасибо! Скоро с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    //под каждую форму нужно подвязать функцию
    forms.forEach(item => {
        postData(item);
    });

    //создаем функцию, которая отвечает за постинг данных
    function postData(form) {
        form.addEventListener('submit', (e) => {   //submit срабатывает каждый раз, когда мы пытаемся отправить какую-то формупри клике мыши или нажатии на энтер
            e.preventDefault(); // сбрасываем стандароное поведение браузера

            //создаем еще один блок, в котом будет выводиться сообщение для пользовател, которое будет динамически появляться на странице
            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading; //можно использовать setAttribute() - устанавливает какой-то атрибут
            // statusMessage.textContent = message.loading; // при срабатывании submit сразу будет воявляться сообщение о загрузке
            statusMessage.style.cssText = ` 
                display: block;
                margin: 0 auto;
            `; //устанавливаем cssстили в инлайновом формате
            // form.append(statusMessage);
            form.insertAdjacentElement('afterend', statusMessage); //вставляем элемент сразу после формы

            const request = new XMLHttpRequest();
            request.open('POST', 'server.php');

            //нужно сделать так, чтобы все данные, которые пользователь заполнил в форме , мы получили в JS и уже могли отправить на сервер
            //и самый простой способ  - это использовать объект formData. Нам не всегда нужно передавать в формате JSON, ориентируясь на то как работаем с бэкэндом
            //formData - это специальный объект, который позволяет с определнной формы быстро сформировать данные которые заполнил пользователь, в формате ключ-значение

            //request.setRequestHeader('Content-type', 'multipart/form-data');
            const formData = new FormData(form); //внутрь помещаем ту форму из которой нам нужно забрать данные
            // ВАжно!! в HTML, если подразумевается что данные из формы будут уходить на сервер, в input обязательно указывать атрибут name

            //отправка данных на сервер
            request.send(formData);

            request.addEventListener('load', () => { //отслеживаем загрузку
                if (request.status === 200) {
                    console.log(request.response);
                    showThanksModal(message.success); // после загрузки данных на сервер изменяем сообщение для пользователя
                    form.reset(); //очистка формы после отправки данных
                    statusMessage.remove(); // будет использоваться только для loading, те для спинера котрый будет показываться на странице
                } else {
                    showThanksModal(message.failure); //если загрузка не произошла, тоже меняем сообщение для пользователя
                }
            });
        });
    }
    //когда используем связку XMLHttpRequest и FormData то заголовки setRequestHeader задавать не нужно,он устанавливается автоматически,
    // из-за того что мы установили заголовок, на сервере не получили данные



    // для отправки данных в формате JSON код будет выглядеть след образом:

    // function postData(form) {
    //     form.addEventListener('submit', (e) => {
    //         e.preventDefault();

    //         let statusMessage = document.createElement('div');
    //         statusMessage.classList.add('status');
    //         statusMessage.textContent = message.loading;
    //         form.appendChild(statusMessage);

    //         const request = new XMLHttpRequest();
    //         request.open('POST', 'server.php');
    //         request.setRequestHeader('Content-type', 'application/json; charset=utf-8'); //нужно устанавливать заголовки
    //         const formData = new FormData(form);

    //         //необходимо объект FormData перевести в формат JSON след образом
    //         const object = {};
    //         formData.forEach(function(value, key){
    //             object[key] = value;
    //         }); // т.о. перебором с помощью forEach получили обычный объект, а не FormData

    //         const json = JSON.stringify(object); // превращаем обычный объект в JSON

    //         request.send(json);
    //         //PHP не умеет натовно работать с форматом JSON, чаще всего такие данные отправляются на сервера с использованием NodeJS,
    //         //но поработать с таким типом данных есть возможность см. файл server.php

    //         request.addEventListener('load', () => {
    //             if (request.status === 200) {
    //                 console.log(request.response);
    //                 statusMessage.textContent = message.success;
    //                 form.reset();
    //                 setTimeout(() => {
    //                     statusMessage.remove();
    //                 }, 2000);
    //             } else {
    //                 statusMessage.textContent = message.failure;
    //             }
    //         });
    //     });
    // }


    //создаем красивое уведомление пользователя

    // function showThanksModal(message) { //сообщение о статусе отправки пеедаем как аргумент
    //     const previousModalDialog = document.querySelector('.modal__dialog');

    //     //нужно скрыть этот элемент перед тем как показать модальное окно, НЕ УДАЛИТЬ со страницы, а СКРЫТЬ,
    //     //т.к. в будущем пользователь может снова открыть модальное окно и попытаться отправить форму и если полностью удалить этот блок,
    //     //то воспользоваться таким функционалом уже будет невозможно
    //     previousModalDialog.classList.add('hide');
    //     //необходимо открыть сам класс modal  и добавтить ему класс show
    //     openModal();

    //     // сфоромировать структуру внутри modal вручную (создаем новый контент)
    //     const thanksModal = document.createElement('div');
    //     thanksModal.classList.add('modal___dialog');
    //     thanksModal.innerHTML = `
    //         <div class="modal__content">
    //             <div class="modal__close">x</div>
    //             <div class="modal__title">${message}</div>
    //         </div>
    //     `;
    //     // крестик который будет создаваться внутри верстки не будет реагировать на те действия, которые были повешены на него изначально,
    //     //т.к. если элемент создается динамически, то обработчики событий на него не повесятся, поэтому нужно использовать делегирование событий(вешаем обработчик на родителя)

    //     // помещаем на страницу
    //     document.querySelector('.modal').append(thanksModal);

    //     //нужно реализовать такой функционал, чтобы все возвращалось на свои места и пользователь может снова открыть модальное окно и попытаться отправить форму
    //     //те новый блок в модалке исчезал, а старый появлялся
    //     setTimeout(() => {
    //         thanksModal.remove();
    //         previousModalDialog.classList.add('show');
    //         previousModalDialog.classList.remove('hide');
    //         closeModal();
    //     }, 5000);
    // } // почему-то не правильно срабатывает функция, ниже код препода


    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.classList.add('hide');
        openModal();

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${message}</div>
            </div>
        `;
        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal();
        }, 4000);
    }





























});
