"use strict";

// let number = 5;
// const leftBorderWidth = 1;

// number = 10;

// console.log(number);



// const obj = {
//     a: 50
// };

// obj.a = 10;
// console.log(obj);


// console.log(name);
// var name = 'Ivan';
// name = 'alex';

// {
// let result = 40;
// }
// console.log(result);

// console.log(-4 / 0);
// console.log('string' * 9);

// const persone = 'string';

// const bool = true;

// console.log(smth); //  null

// let und;
// console.log(und); // undefined


// const obj = {
//  name: 'John',
//  age: 25,
//  isMarried: false
// };

// console.log(obj.name);
// console.log(obj["name"]);

// let array = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []];
// console.log(array[0]);

// alert('hello');

// const result = confirm('are you here?');
// console.log(result);

// const answer = prompt('are you 18?', '');
// // console.log(answer);
// console.log(typeof(answer));


// const answer = +prompt('are you 18?', '');
// console.log(typeof(answer));
// console.log(answer + 5);

// const answers = []; // запись в массив
// answers[0] = prompt('what is your name?', '');
// answers[1] = prompt('what is your surname?', '');
// answers[2] = prompt('what is your age?', '');

// document.write(answers);
// console.log(typeof(answers));

// console.log(typeof(null)); //   официально признанная ошибка в js


// const category = 'toys';
// console.log(`i need by ${category}`); 

// const user = 'Ivan';
// alert(`hello, ${user}`);

// console.log('arr ' + '- object'); //конкатенация
// console.log(4  + '- object');

// console.log(4  + +'5');

// let incr = 10,
//     decr = 10;

// // incr++;
// // decr--; git
// // console.log(incr);
// // console.log(decr);

// // ++incr;
// // --decr;

// console.log(incr++);
// console.log(decr--);

// // console.log(++incr);
// // console.log(--decr);

// console.log(5%2);

// console.log(2*4 == '8');
// console.log(2*4 === 8);

// const isChecked = true;
// const isClose = true;
// console.log(isChecked && isClose);
// console.log(isChecked || isClose);
// console.log(isChecked || !isClose);

// console.log(2*4 != 8);

// if (4 == 9) {
//     console.log('ok!');
// } else {
// console.log('error');
// }

// const num = 50;
// if (num < 49) {
//     console.log('error');
// } else if (num > 100) {
//  console.log ('too mach');
// } else {
//     console.log('ok!');
// }

// (num === 50) ? console.log('ok!') : console.log('error'); // тернарный оператор
//  4 + 4; // бинарный аргумент
//  +'4';//унарный аргумент

//  switch (num) {
//      case 49: 
//         console.log('error');
//         break;
//       case 100:
//           console.log ('too mach');
//           break;
//          case 50:
//             console.log('ok!');
//             break;
//             default:
//                 console.log('another time!');
//                 break;
//  };

// let num = 50;
// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;  
// }
// while (num < 55);

// for (let i = 1; i < 8; i++) {
//     console.log(num);
//      num++;
// }

// for (let i = 1; i < 8; i++) {
//     if (i === 6) {
//         // break;
//         continue;
//     }
//     console.log(i);
// }





// function showFirstMessage (text) {
//     console.log(text);
//     let num = 20;
// }

// showFirstMessage('hello!');
// console.log(num);

// let num = 20;

// function showFirstMessage (text) {
//     console.log(text);
//     let num = 10;
//     console.log(num); 
// }

// showFirstMessage('hello!');
// console.log(num);

// function calc(a, b) {
//     return (a + b);
//     console.log('gfdfghjk'); //анричебл кодб, код который никогда не выполнитсяб т.к. находится после  return, мертвый код;
// }
// console.log(calc(4, 3));
// console.log(calc(7, 5));
// console.log(calc(10, 6));


// function ret() {
//     let num = 50;
//     return num;
// }                   // возврат значения наружу ф-ции;
// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function () {
//     console.log('hello')
// };
// logger();


// const calc = (a, b) => { return a + b };
// //const calc = (a, b) => a + b;  
// //const calc = a  => a + b;
// //const calc = (a, b) => {
// //      console.log('1');
// //      return a + b;
// //};



// //свойство строк
// const str = 'test';
// console.log(str.length);
// const arr = [1, 2, 3, 4, 5];
// console.log(arr.length);

// console.log(str[2]);  //получение символа из строки по индексу;

// // методы строк
// console.log(str.toUpperCase()); // приведение к верхнему регистру;
// console.log(str.toLowerCase()); // приведение к нижнему регистру;

// const fruit = 'some fruit';
// console.log(fruit.indexOf('fruit')); // найти кусок строки и сказать с какой позиции она начинается; (поиск подстроки);  нумерация с 0; -1 - значит что искомая строка не найдена;

// const logg = 'hello world!';
// console.log(logg.slice(6, 11)); //вырезает кусок строки с : 1 аргумент  - индекс включается, 2 ой аргумент - индекс не включается; 
// console.log(logg.slice(6));  //вырезает от указанного индекса до конца строки;
// console.log(logg.slice(-5, -11)); //отсчет с конца строки; 

// console.log(logg.substring(6, 11)); // похож на метод slice,  но нельзя использовать отрицат значения и не может быть 1ое значние больше второго;

// console.log(logg.substr(6, 5)); // указывает с какого символа (1й аргумент) и сколько символов (2й аргумент) необходимо вырезать;



// // методы чисел
//  const num = 12.2;
// console.log(Math.round(num)); //округление к ближайшему целому

// const test = '12.2 px';
// console.log(parseInt(test)); // переводит число в другую систему исчисления (здесь строку приводит к числу округленное)
// console.log(parseFloat(test)); // берет строку и возвращает в 10тичном варианте (здесь строку приводит к числу неокругленное)



//callback-функции
// function first () {
//     //do smth
//     setTimeout (function () {
//         console.log(1);
//     }, 500);
// }

// function second () {
//     console.log(2);
// }

// first();
// second();

// function learnJS (lang, callback) {
//     console.log(`я учу: ${lang}`);
//     callback();
// }
// // learnJS('JavaScript', function() {    // передача анонимной функции, которая исчезнет после выполнения
// // console.log('я прошел этот урок')
// // });

// function done () {
//     console.log('я прошел этот урок');
// }
// learnJS('JavaScript', done);  // вызов коллбэк функции без круглых скобок, т.К. здесь мы  передаем функцию как аргумент, а выполнится она внутри другой функции в вызове callback ;



//методы объектов

// const obj = new Object(); // еще один способ создания объектов

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function () {   // создание метода объекта
        console.log('Test');
    }
};

options.makeTest(); //вызов метода объекта
// // console.log(options.name);

// // delete options.name; //  оператор удаляет какое-то свойство объекта
// // console.log(options);
// let counter = 0; //подсчет количества свойств обекта
// for (let key in options) { // цикл который перебирает все ключевые значения свойства объекта; 
//     if (typeof(options[key]) === 'object') {   //цикл который перебирает все ключевые значения свойства ВЛОЖЕННОГО объекта; 
//         for (let i in options[key]) {
//             console.log(`свойство ${i} имеет значение ${options[key][i]}`); 
//             counter++;
//         }
//     } else {
//      console.log(`свойство ${key} имеет значение ${options[key]}`);  //будем получать значение свойства
//      counter++;
//     }
// }
// console.log(counter);
// // console.log(options['colors']['border']); //двойное обращение к свойству обекта


// console.log(Object.keys(options)); //ЭТОТ МЕТОД БЕРЕТ НАШ ОБЪЕКТ и на его основании создает массив в котором все элементы это это ключи из пары ключ-значение
// console.log(Object.keys(options).length);  // получаем количество элементов? которые находтся в массиве из ключей

const {border, bg} = options.colors; // деструктуризация объекта , те мы вытащили свойства из вложенного объекта в качестве отдельной переменной
console.log(border);