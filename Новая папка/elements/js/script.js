'use strict';

//методы для получения элементов со страницы

const box = document.getElementById('box');
console.log(box);

// const btns = document.getElementsByTagName('button');
// console.log(btns);

// const btns = document.getElementsByTagName('button')[1]; // получаем только одну кнопку по индексу в коллекции(псевдомассиве)
// console.log(btns);

const btns = document.getElementsByTagName('button');
console.log(btns[1]); // когда хотим использовать один элемент в будущем

//если на странице находится только один элемент button, но его нашли с помощью метода getElementsByTagName() , то он все равно выведется в коллекции, 
//в которой содержится только один элемент. обращаться к такому элементу необходимо через индекс, тк без индекса мы будем обращаться ко всему псевдомассиву

const circles = document.getElementsByClassName('circle');
console.log(circles);

const hearts = document.querySelectorAll('.heart'); //коллекция, полученная таким образом имееи один метод forEach
console.log(hearts);
hearts.forEach(item =>{
    console.log(item); 
});

const oneHeart = document.querySelector('.heart'); // получает только один первый элемент со страницы
console.log(oneHeart);