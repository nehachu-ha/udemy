window.addEventListener('DOMContentLoaded', function() {

  // Tabs

  let tabs = document.querySelectorAll('.tabheader__item'),
    tabsContent = document.querySelectorAll('.tabcontent'),
    tabsParent = document.querySelector('.tabheader__items');

  function hideTabContent() {

    tabsContent.forEach(item => {
      item.classList.add('hide');
      item.classList.remove('show', 'fade');
    });

    tabs.forEach(item => {
      item.classList.remove('tabheader__item_active');
    });
  }

  function showTabContent(i = 0) {
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add('tabheader__item_active');
  }

  hideTabContent();
  showTabContent();

  tabsParent.addEventListener('click', function(event) {
    const target = event.target;
    if(target && target.classList.contains('tabheader__item')) {
      tabs.forEach((item, i) => {
        if (target === item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });

  // Timer

  const deadline = '2021-05-20';

  function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()),
      days = Math.floor( (t/(1000*60*60*24)) ),
      seconds = Math.floor( (t/1000) % 60 ),
      minutes = Math.floor( (t/1000/60) % 60 ),
      hours = Math.floor( (t/(1000*60*60) % 24) );

    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function getZero(num){
    if (num >= 0 && num < 10) {
      return '0' + num;
    } else {
      return num;
    }
  }

  function setClock(selector, endtime) {

    const timer = document.querySelector(selector),
      days = timer.querySelector("#days"),
      hours = timer.querySelector('#hours'),
      minutes = timer.querySelector('#minutes'),
      seconds = timer.querySelector('#seconds'),
      timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
      const t = getTimeRemaining(endtime);

      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock('.timer', deadline);

  // Modal

  const modalTrigger = document.querySelectorAll('[data-modal]'),
    modal = document.querySelector('.modal');

  modalTrigger.forEach(btn => {
    btn.addEventListener('click', openModal);
  });

  function closeModal() {
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
  }

  function openModal() {
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
    clearInterval(modalTimerId);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.getAttribute('data-close') === "") {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && modal.classList.contains('show')) {
      closeModal();
    }
  });

  const modalTimerId = setTimeout(openModal, 300000);
  // Изменил значение, чтобы не отвлекало

  function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      openModal();
      window.removeEventListener('scroll', showModalByScroll);
    }
  }
  window.addEventListener('scroll', showModalByScroll);

  // Используем классы для создание карточек меню

  class MenuCard {
    constructor(src, alt, title, descr, price, parentSelector, ...classes) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.descr = descr;
      this.price = price;
      this.classes = classes;
      this.parent = document.querySelector(parentSelector);
      this.transfer = 27;
      this.changeToUAH();
    }

    changeToUAH() {
      this.price = this.price * this.transfer;
    }

    render() {
      const element = document.createElement('div');

      if (this.classes.length === 0) {
        this.classes = "menu__item";
        element.classList.add(this.classes);
      } else {
        this.classes.forEach(className => element.classList.add(className));
      }

      element.innerHTML = `
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            `;
      this.parent.append(element);
    }
  }

  const getResource = async (url) => {   //создаем функцию которая будет получать данные с сервера
    const res = await fetch(url);
    if (!res.ok) {  // если выкидывать ошибку в ручном режиме, то сработает блок кода catch
      //объект ошибки, внутрь помещается текст ошибки, чтобы выкинуть объект ошибки оспользуется оператор throw
      throw new  Error(`Could not fetch ${url}, status: ${res.status}`); //выведется в консоль
    }
    return await res.json();
  };
  //если fetch столкнется с ошибкой в HTTP запросе (404 500 502) то он не выдаст catch(reject) (ошибкой для fetch является отсутствие интеренета или критические неполадки в самом запросе)
  //у промиса, который возвращается из fetch есть два свойства:
  //.ok - это свойство говорит о том что мы что-то получили и все ок или не ок
  //status - здесь мы попадаем на тот статус который вернул нам сервер(200 - ok, 404 - not found, 500)

  // getResource(' http://localhost:3000/menu')
  //   .then(data => {
  //     // data.forEach(obj => {
  //     //   new MenuCard(obj.img, obj.altimg, obj.title, obj.descr, obj.price).render(); //этот конструктор будет создаваться столько раз, сколько объектов будет внутри массива, который придет с сервера
  //     // });
  //     // здесь должны использовать синтаксис деструктуризации объекта - те когда из объекта вытаскиваем отдельные свойствва в качестве отдельной переменной
  //     data.forEach(({img, altimg, title, descr, price}) => {
  //       new MenuCard(img, altimg, title, descr, price, '.menu .container').render(); //этот конструктор будет создаваться столько раз, сколько объектов будет внутри массива, который придет с сервера
  //     });
  //   });

  //делаем запрос при помощи библиотеки axios
  axios.get('http://localhost:3000/menu')
    .then(data => {
      data.data.forEach(({img, altimg, title, descr, price}) => { // данным полученных у данных
        new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
      });
    });

  // теперь код ниже абсолютно не нужен
  // new MenuCard(
  //   "img/tabs/vegy.jpg",
  //   "vegy",
  //   'Меню "Фитнес"',
  //   'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
  //   9,
  //   ".menu .container"
  // ).render();
  //
  // new MenuCard(
  //   "img/tabs/post.jpg",
  //   "post",
  //   'Меню "Постное"',
  //   'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
  //   14,
  //   ".menu .container"
  // ).render();
  //
  // new MenuCard(
  //   "img/tabs/elite.jpg",
  //   "elite",
  //   'Меню “Премиум”',
  //   'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
  //   21,
  //   ".menu .container"
  // ).render();

  // второй способ не будет использовать классы а будет формировать верстку на лету, этот метод можно использовать когда нужно построить что-то только 1 раз
  // getResource(' http://localhost:3000/menu')
  //   .then(data => createCard());
  //
  // function createCard (data) {
  //   data.forEach(({img, altimg, title, descr, price}) => {
  //     const element = document.createElement('div');
  //     element.classList.add('.menu_item');
  //     element.innerHTML = `
  //               <img src=${img} alt=${altimg}>
  //               <h3 class="menu__item-subtitle">${title}</h3>
  //               <div class="menu__item-descr">${descr}</div>
  //               <div class="menu__item-divider"></div>
  //               <div class="menu__item-price">
  //                   <div class="menu__item-cost">Цена:</div>
  //                   <div class="menu__item-total"><span>${price}</span> грн/день</div>
  //               </div>
  //     `
  //     document.querySelector('.menu .container').append(element);
  //
  //   });
  // }

  // Forms

  const forms = document.querySelectorAll('form');
  const message = {
    loading: 'img/form/spinner.svg',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так...'
  };

  forms.forEach(item => {
    bindPostData(item);
  });

  //для преобразования асинхронного кода в синхронный оспользуются операторы c
  //async указывается перед началом функции, то мы говорим что внутри функции будет какой-то асинхронный код,
  // затем используем его парный оператор await его ставим перед теми операциями которые нам небходимо дождаться. время ожидания выполнения кода по стандарту 30 сек
  //эти операторы всегда используются в паре
  const postData = async (url, data) => {   //это асинхронный код, тк fetch отправляет запрос на сервер и сразу продолжается работа функции не дожидаясь ответа от сервера
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: data
    });
    return await res.json();
  };

  function bindPostData(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let statusMessage = document.createElement('img');
      statusMessage.src = message.loading;
      statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
      form.insertAdjacentElement('afterend', statusMessage);

      const formData = new FormData(form);

      // const object = {}; // не используется при передаче formData
      // formData.forEach(function(value, key){
      //   object[key] = value;
      // });

      //существуют методы которые помогают преобразить formData в JSON
      //метод entries - возвращает массив собственных перечисляемых свойств указанного объекта
      // const obj = {a: 25, b: 15};
      // console.log(Object.entries(obj)); // [['a', 25], ['b', 15]
      //то этот метод возвращает массив в котором находятся другие массивы, те берет каждое свойство и формирует из него маленький массив
      //метод fromEntries - превращает матрицу созданную с помощью entries в объект

      const json = JSON.stringify(Object.fromEntries(formData.entries()));

      //есть смысл всегда выносить функционал по общению с сервером выносить в отдельные функции (см postData)
      // fetch('server.php', {
      //   method: 'POST',
      //   headers: {   // не указываются при отправке formData
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify(object)
      //   //body: formData
      // })

      postData(' http://localhost:3000/requests', json)
        // .then(data => data.text()) //превращаем ответ в обычный текст
        .then(data => {
        console.log(data);
        showThanksModal(message.success);
        statusMessage.remove();
      }).catch(() => {
        showThanksModal(message.failure);
      }).finally(() => {
        form.reset();
      });
    });
  }

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

  //команды для npm и запуска json-server
  //cd folder_name
  //npm init / npm i
  //npm i json-server        - local
  //npm i json-server -g     - global
  //sudo npm i json-server   - local for macOS
  //npm i json-server --save-dev   - для разработки
  //npm i json-server --save       - для работы
  //json-server url
  //npx json-server url

  //получаем доступ к базе данных db.json
  // fetch('http://localhost:3000/menu')
  //   .then(data => data.json()) //возьмем ответ от сервера data и превратим его в обычный JS объект
  //   .then(res => console.log(res));


  //Slider

  const slides = document.querySelectorAll('.offer__slide');
  const slider = document.querySelector('.offer__slider');
  const prev = document.querySelector('.offer__slider-prev');
  const next = document.querySelector('.offer__slider-next');
  const total = document.querySelector('#total');
  const current = document.querySelector('#current');
  const slidesWrapper = document.querySelector('.offer__slider-wrapper');
  const slidesField = document.querySelector('.offer__slider-inner');
  const width = window.getComputedStyle(slidesWrapper).width;
  let slideIndex = 1;
  let offset = 0; // отступ, который сделали при помощи transition

  if (slides.length < 10) {
      total.textContent = `0${slides.length}`;
      current.textContent = `0${slideIndex}`;
    } else {
      total.textContent = slides.length;
      current.textContent = slideIndex;
  }

  slidesField.style.width = 100 * slides.length + '%'; // устанавливаем ширину иннера, чтобы поместить все слайды внутрь его
  slidesField.style.display = 'flex';
  slidesField.style.transition = 'all 0.5s';

  slidesWrapper.style.overflow = 'hidden';

  slides.forEach(slide => { // делаем слайды одинаковой ширины
    slide.style.width = width;
  })

  //создаем точки для слайдера
  slider.style.position = 'relative';

  const indicators = document.createElement('ol'),
        dots = [];
  indicators.classList.add('carousel-indicators');
  indicators.style.cssText = `
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 15;
    display: flex;
    justify-content: center;
    margin-right: 15%;
    margin-left: 15%;
    list-style: none;
  `;
  slider.append(indicators);

  for (let i = 0; i < slides.length; i++) { // определяем точки для каждого слайда
    const dot = document.createElement('li');
    dot.setAttribute('data-slide-to', i + 1);
    dot.style.cssText = `
    box-sizing: content-box;
    flex: 0 1 auto;
    width: 30px;
    height: 6px;
    margin-right: 3px;
    margin-left: 3px;
    cursor: pointer;
    background-color: #fff;
    background-clip: padding-box;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    opacity: .5;
    transition: opacity .6s ease;
    `;
    if (i === 0) {
      dot.style.opacity = '1';
    }
    indicators.append(dot);
    dots.push(dot);
  }


  next.addEventListener('click', () => {
    if (offset === +width.slice(0, width.length - 2) * (slides.length - 1)) { //смещаем слайдер на начало
      offset = 0;
    } else {
      offset += +width.slice(0, width.length - 2)  // мсещаем слайдер на ширину еще одного слайда
    }
    slidesField.style.transform =`translateX(-${offset}px)`; //сдвигаем слайд влево

    if (slideIndex === slides.length) {
      slideIndex = 1;
    } else {
      slideIndex++;
    }

    if (slides.length < 10) {
      current.textContent = `0${slideIndex}`;
    } else {
      current.textContent = slideIndex;
    };

    dots.forEach(dot => dot.style.opacity = '0.5');
    dots[slideIndex - 1].style.opacity = '1';
  });

  prev.addEventListener('click', () => {
    if (offset === 0) { //смещаем слайдер на конец
      offset = +width.slice(0, width.length - 2) * (slides.length - 1);
    } else {
      offset -= +width.slice(0, width.length - 2)  // мсещаем слайдер на ширину еще одного слайда
    }
    slidesField.style.transform =`translateX(-${offset}px)`; //сдвигаем слайд влево

    if (slideIndex === 1) {
      slideIndex = slides.length;
    } else {
      slideIndex--;
    }

    if (slides.length < 10) {
      current.textContent = `0${slideIndex}`;
    } else {
      current.textContent = slideIndex;
    }

    dots.forEach(dot => dot.style.opacity = '0.5');
    dots[slideIndex - 1].style.opacity = '1';
  });

  dots.forEach(dot => {   //делаем так чтобы при нажатии на точку листался слайдер
    dot.addEventListener('click', (e) => {
      const slideTo = e.target.getAttribute('data-slide-to');

      slideIndex = slideTo;
      offset = +width.slice(0, width.length - 2) * (slideTo- 1);

      slidesField.style.transform =`translateX(-${offset}px)`;

      if (slides.length < 10) {
        current.textContent = `0${slideIndex}`;
      } else {
        current.textContent = slideIndex;
      }

      dots.forEach(dot => dot.style.opacity = '0.5');
      dots[slideIndex - 1].style.opacity = '1';
    })
  });
  // showSlides(slideIndex); // нужно проинициализировать слайдер, чтобы он превратился в ту структуру которую мы должны увидеть
  //
  // if (slides.length < 10) {  // добавляем 0 в счетчике слайдов, если поместить этот функционал в функцию showSlides, то будет мигать переключение, тк каждый раз функция будет вызываться
  //   total.textContent = `0${slides.length}`;
  // } else {
  //   total.textContent = slides.length;
  // }
  //
  // function showSlides (n) {
  //   if (n > slides.length) {
  //     slideIndex = 1;
  //   }
  //   if (n < 1) {
  //     slideIndex = slides.length
  //   }
  //
  //   slides.forEach(item => item.style.display = 'none') //скрываем все слайды
  //
  //   slides[slideIndex - 1].style.display = 'block';  //-1 это значит 0левой слайд по индексации браузера //показываем нужный нам слайд
  //
  //   if (slides.length < 10) {  // изменяем текущий индекс при каждом клике на стрелочки
  //     current.textContent = `0${slideIndex}`;
  //   } else {
  //     current.textContent = slideIndex;
  //   }
  // }
  //
  // function plusSlides (n) { //делаем функцию которая будет изменять слайд индекс
  //   showSlides(slideIndex += n); //  вызыввем функцию  showSlides внутри которой увеличиваем slideIndex на значение n. В этом случае мы сразу вызываем функции с необходимым числом
  // }
  //
  // prev.addEventListener('click',() => {
  //   plusSlides(-1);
  // });
  //
  // next.addEventListener('click',() => {
  //   plusSlides(1);
  // });


});
