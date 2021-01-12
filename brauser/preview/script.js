'use strict';

const box = document.querySelector('.box');
const btn = document.querySelector('button');



//метрики которые относятся к конкретным элементам на странице;



// эти свойства нельзя модефицировать:

// const width = box.clientWidth; // получаем элемент включая padding, но без border, margin и прокрутки
// const height = box.clientHeight;

// const width = box.offsetWidth; // получаем элемент включая padding, border, margin и прокруткy;
// const height = box.offsetHeight;

const width = box.scrollWidth; // получаем полную ширину элемента 
const height = box.scrollHeight; // получаем полную высоту элемента с учетом прокрутки(невидимой части)

console.log(width, height);

btn.addEventListener('click', () => {
//  box.style.height = box.scrollHeight + 'px';
console.log(box.scrollTop);
});


// // эти свойства можно модефицировать:
// box.scrollTop; // сколько контента есть сверху после прокрутки
// box.scrollLeft;

console.log(box.getBoundingClientRect()); // получаем все координаты элемента на странице
//отсчет координат ведется с левого верхнего угла //отсчет в js отличается от осчета css

console.log(box.getBoundingClientRect().top); // получаем только координату top

//получаем стили которые были применены к элементу при помощи css(computed)
const style = window.getComputedStyle(box);
console.log(style);
console.log(style.display);

//с помощью метода getComputedStyle можно получить стили псевдоэлементов, хотя в JS нельзя работать с псевдоэлементами, 
//указывается вторым агрументов через запятую псевдоэлемент

//computed стили берутся из CSS  и они изначально появятся на странице, а инлайн стили появляются внутри верстки и прописываются в HTML-тег
//инлайн стилии более приоритетны чем компьютед
// инлайн стили можно изменять и получать, а компьютед стили только получать и проверять на какое-то соответствие




// метрики которые применяются к глобальным объектам document и window;


console.log(document.documentElement.clientWidth);
console.log(document.documentElement.scrollTop);

window.scrollBy(0, 400); //скролит страницу относительно текущего положения
window.scrollTo(0, 400); //скролит страницу относительно всей страницы



