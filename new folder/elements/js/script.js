'use strict';

//методы для получения элементов со страницы

const box = document.getElementById('box');
// console.log(box);

const btns = document.getElementsByTagName('button');
// console.log(btns);

// const btns = document.getElementsByTagName('button')[1]; // получаем только одну кнопку по индексу в коллекции(псевдомассиве)
// console.log(btns);

// const btns = document.getElementsByTagName('button');
// console.log(btns[1]); // когда хотим использовать один элемент в будущем

//если на странице находится только один элемент button, но его нашли с помощью метода getElementsByTagName() , то он все равно выведется в коллекции, 
//в которой содержится только один элемент. обращаться к такому элементу необходимо через индекс, тк без индекса мы будем обращаться ко всему псевдомассиву

const circles = document.getElementsByClassName('circle');
// console.log(circles);

const hearts = document.querySelectorAll('.heart'); //коллекция, полученная таким образом имееи один метод forEach
// console.log(hearts);
// hearts.forEach(item =>{
//     console.log(item); 
// });

const oneHeart = document.querySelector('.heart'); // получает только один первый элемент со страницы
// console.log(oneHeart);



//действия с элементами на странице

// console.dir(box);

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

// btns[1].style.borderRadius = '100%';
// circles.style.backgroundColor = 'red';  // не сработает, т.к. обращаемся к псевдомассиву
// circles[0].style.backgroundColor = 'red'; // обращаемся к конкретному элементу

// box.style.cssText = 'background-color: green; width: 550px'; // это свойство применяется когда нужно задать сразу несколько стилей

// const num = 500;
// box.style.cssText = `background-color: green; width: ${num}px`; // очень полезно, если мы определнные параметры расчитываем динамически

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

//используются для того, чтобы назначить свойство для нескольких элементов сразу; 

// for (let i = 0; i < hearts.length; i++) {   // цикл используется редко
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});


const div = document.createElement('div'); // создание нового элемента, но он существует только внутри JS;

// const text = document.createTextNode('здесь был я');   //создание текстовых узлов те элементов без оболочки тега  

div.classList.add('black'); // добавляем класс из css; //пока нет на странице, существует в JS

// document.body.append(div);//добавляем элемент в конец body. в любой другой родитель

//если переменная используется только 1 раз, не обязательно ее отдельно выносить
// document.querySelector('.wrapper').append(div);
const wrapper = document.querySelector('.wrapper');

//новые методы

wrapper.append(div); // добавляет элемент в конец родителя
// wrapper.prepend(div); // дjбавляет элемент в начало родителя
// hearts[0].before(div); // добавляет div перед hearts[0]
// hearts[0].after(div); //  добавляет div после hearts[0]

// circles[0].remove(); //удалает элемент;

// hearts[0].replaceWith(circles[0]); // заменяет один элемент другим элементом 

// старые методы

//  wrapper.appendChild(div); // работает как append

// wrapper.insertBefore(div, hearts[0]); //использовался вместо prepend, before и after

// wrapper.removeChild(hearts[1]); // исползовался как remove

// wrapper.replaceChild(circles[0],hearts[0]); // использовался как replaceWith;

// div.innerHTML = 'hello'; // добавляет текст и html структуру
// div.innerHTML = '<h2>hello</h2>'; //добавляем как строку
// div.innerHTML = ''; // очистить элемент
//console.log(div.innerHTML); //позволяет получать HTMLэлементы со страницы в виде строки


// div.textContent = 'hello'; //добавляет только текст

//добавляет кусочек html кода
// div.innerHTML = '<h2>hello</h2>';
// div.insertAdjacentHTML('afterbegin', '<h2>bye</h2>');


// // ищет элементы внутри определнного блока, а не внутри всей страницы
// const wrapper = document.querySelector('.wrapper');
// const hearts = wrapper.querySelectorAll('.heart');
// const oneHeart = wrapper.querySelector('.heart'); 


 



