'use strict';


// //Модули CommonJS
// function myModule () {
//   this.hello = function () {
//     console.log('hello');
//   };
//
//   this.goodbye = function () {
//     console.log('bye');
//   };
// }
//
// module.exports = myModule; // указываем то что хотим экспортировать в файл index.js //это синтаксис CommonJS

//Модули ES6
export let one = 1; // указываем то что хотим экспортировать - это короткий синтаксис

let two = 2;
export {two}; // это именованный синтаксис

// export function sayHi() {
//   console.log('Hello!');
// }
// //самое главное в таких экспортах, чтобы у каждой сущности было свое имя, чтобы можно было их экспортировать
//
//
// export default function sayHi() { //экспорт по умолчанию
//   console.log('Hello!');
// }
//спокойно можно экспортировать и именнованный экспорт и экспорт по умолчанию, но экспорт по умолчанию должен быть только один
