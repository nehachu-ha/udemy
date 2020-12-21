'use strict';

const btns = document.querySelectorAll('button');

// console.log(btns[0].classList.length); // узнаем количество классов у элемента с помошью свойства


// console.log(btns[0].classList.item(0)); // помогает получить класс, который находится под определнным индексом

// console.log(btns[0].classList.add('red')); //добавление нового класса элементу
// console.log(btns[0].classList.remove('blue'));  //удаляем ненужные классы
// console.log(btns[0].classList.toggle('blue'));  // тогглит классы , те если класс есть, то убирает его, а если нет класса, то добавляет;

// console.log(btns[0].classList.add('red', 'green')); // добавление нескольких класссов через запятую

//наличие класса можно проверить и с помощью условия

// метод contains позволяет проверять наличие определнного класса на определенном элементе и возвращает булиновое значение
//  console.log(btns[1].classList.add('red'));

//  if (btns[1].classList.contains('red')) {
//     console.log('red');
//  }


//код похожий на работу гамбургер-меню
btns[0].addEventListener('click', () => {
    if (!btns[1].classList.contains('red')) {
        btns[1].classList.add('red');
    } else {
        btns[1].classList.remove('red');
    }

});

// другой способ
btns[0].addEventListener('click', () => {
    btns[1].classList.toggle('blue');
});


console.log(btns[0].className); // устаревшее свойство которое содержит в себе классы в виде одной строки;



// делегирование событий - суть в том что мы берем элемент, который является родителем для всех необходимых элементов, на него назначаем обработчик событий, 
// а внутри проверяем на что произошло событие и назначаем функцию для его потомков если они подходят под какие -то определенные параметры

const wrapper= document.querySelector('.btn-block');

wrapper.addEventListener('click', (event) => {   // ищем куда кликнули
    // console.dir(event.target);

     if (event.target && event.target.tagName === 'BUTTON') {  // проверяем возможность клика на элемент с помощью event.target и проверяем tagName, который будет являться BUTTON (обращаем внимание на регистр) 
        console.log('hello!');
     }
});

// btns.forEach(btn, () => {
//     btn.addEventListener('click', () => {
//         console.log('aloha!');
//     });
// });

//  добавим еще одну кнопку
const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);

// делегирование позволяет добавлять обработчик события на все элементы внутри родителя, даже на те которые были созданы после 
// перебор forEach не дает возмодности навешивать обработчик на созданные динамически элементы;

wrapper.addEventListener('click', (event) => {   // ищем куда кликнули
    // console.dir(event.target);

     if (event.target && event.target.matches('button.red')) {  // проверяем на определнные совпадения, те какой то элемент совпадает с чем-то;
        console.log('HeLLo!');
     }
});