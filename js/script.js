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

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function () {   // создание метода объекта
//         console.log('Test');
//     }
// };

// options.makeTest(); //вызов метода объекта
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

// const {border, bg} = options.colors; // деструктуризация объекта , те мы вытащили свойства из вложенного объекта в качестве отдельной переменной
// console.log(border);



// массив и методы массивов

// const arr = [1, 2, 3, 6, 8];
// arr[99] = 0; //добавляем элемент на 99 индекс
// console.log(arr.length);
// console.log(arr);

//методы, которые работают с концом массива:
// arr.pop(); //удаляет последний элемент массива
// arr.push(10); //добавляет элемент в конец массива
// console.log(arr);

// методы, которые работают н началом массива
// arr.shift;
// arr.unshift;
// for (let i = 0; i < arr.length; i++) {  //перебор массива
//     console.log(arr[i]);
// }

// for (let value of arr) {  //такой цикл работает только с массиво подобными сущностями: массивБ строка, псевдомассив, map, set , также с его помощью можно перебрать какие-то определенные элементы со страницы
//     console.log(value);
// }

// arr.forEach(function(item, i, ) {  //метод перебора массиваб его нельза остановить, как перебор с помошью for..of
//  console.log(`${i}: ${item} внутри массива ${arr}`)
// });

// const str = prompt('', '');
// const products = str.split(', '); // метод создания массива из строки, указываем в кавычках символ, который должен разделять элементы массива
// products.sort(); //всегдо сортирует элементы внутри массива как строки, в алвавитном порядке
// console.log(products.join('; ')); //метод обединения элементов в массив, указываем в кавычках символ, который должен разделять элементы массива

// const arr = [1, 25, 13, 6, 86];
// arr.sort();
// console.log(arr);  // сравнение идет как у строки посимвольно;

// function compareNum(a, b) {  //callback функция, которая позволяет произвети сортировку  массива как числа
//     return a - b;
// }
// arr.sort(compareNum);
// console.log(arr);



// передача по ссылке или по значению
// let a = 5;
// let b = a;
// b = b + 5;
// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };
// const copy = obj; //сюда кладется ссылка 
// copy.a = 10;
// console.log(copy);
// console.log(obj);

// function copy (mainObj) {
//     let objCopy = {};
//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key]; //создание копии объекта
//     }
//     return objCopy;
// }

// const numbers  = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers = copy(numbers); // клонирование объекта с помощью функции
// newNumbers.a = 10;


// // console.log(newNumbers);
// // console.log(numbers);

// newNumbers.c.x = 10;
// // console.log(newNumbers);

// const add = {
//     d: 17,
//     e: 20
// };

// console.log(Object.assign(numbers, add));

// const clone = Object.assign({}, add);
// clone.d = 20; 
// // console.log(add);
// // console.log(clone);

// const oldArr = ['a', 'b', 'c'];  //создание поверхностной копии массива
// const newArr = oldArr.slice(); //метод для копирования всего массиваб а в аргументах можно задать сколько элементов копировать
// // const newArr = oldArr;  // если оставить так, то передается просто ссылка на этот массив
// newArr[1] = 'fghjhghjkjh';
// console.log(newArr);
// console.log(oldArr);


// const video = ['youtube', 'vimeo', 'rutube'],
//       blogs = ['wordpress', 'livejournal', 'blogger'],
//       internet = [...video, ...blogs, 'vk', 'facebook'];  
// console.log(internet);

// function log (a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// const num = [2, 5, 7];

// log(...num);   //т.е. спред оператор зазложит массив на 3 отдельных элемента и возьмет их в качестве 3 аргументов в функцию


// const array = ['a', 'b'];
// const newArray = [...array];

// const q = {
//     one: 1,
//     two: 2
// };
// const newObj = {...q};




// основы ООП , прототипы;
// let  str = 'some';
// let strObj = new String(str);
// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1, 2, 3]);

// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHello: function () {
//         console.log('Hello!')
//     }
// };
// // const john = {
// //     health: 100
// // };

// // john.__proto__ = soldier; // установили прототипом джона содата // такой способ создания прототипа сейчас не используется
// // console.log(john);
// // console.log(john.armor);
// // john.sayHello();

// // Object.setPrototypeOf(john, soldier); //устанавливает прототип джона от солдата

// const john = Object.create(soldier); //создаем новый объект джон который будет прототипно наследоваться от солдата


// console.log(john);
// john.sayHello();




// // приведение типов данных
// // to string
// // 1)
// console.log(typeof(String(null)));
// console.log(typeof(String(4)));
// // 2) конкатенация
// console.log(typeof(null + '')); 

// const num = 5;
// console.log('https://vk.com/catalog/' + num);

// const fontSize = 26 + 'px';

// // to number
// // 1)
// console.log(typeof(Number('4')));
// // 2)  использование унарного плюса
// console.log(typeof(+'5'));
// // 3)
// console.log(typeof(parseInt('15px', 10)));

// let answ = +prompt('hello', ''); //превращает строковый тип данных в число унарный плюс

// //  to boolean

// // всегда  false
// // 0, '', null, undefined, NaN;

// // 1)
// let switcher = null;
// if (switcher) {
//     console.log('working...');
// }

// switcher = 1;
// if (switcher) {
//     console.log('working...');
// }
// // 2)
// console.log(typeof(Boolean('4')));
// // 3) два знака отрицания !! приводят к булиновому типу данных
// console.log(typeof(!!'4'));




// примеры с собеседований
// Какое будет выведено значение: let x = 5; alert( x++ ); ?
// Чему равно такое выражение: [ ] + false - null + true ?
// Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?
// Чему равна сумма [ ] + 1 + 2?
// Что выведет этот код: alert( "1"[0] )?
// Чему равно 2 && 1 && null && 0 && undefined ?
// Есть ли разница между выражениями? !!( a && b ) и (a && b)?
// Что выведет этот код: alert( null || 2 && 3 || 4 ); ?
// a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?
// Что выведет этот код: alert( +"Infinity" ); ?
// Верно ли сравнение: "Ёжик" > "яблоко"?
// Чему равно 0 || "" || 2 || undefined || true || falsе ?

// let x = 5; 
// alert( x++ ); // выведет 5 из-за постфиксного написания инкремента, т.е. сначала выводит значение, а потом увеличивает

// console.log([ ] + false - null + true); //пустой массив приводится к пустой строке; строка + любой тип дпнных = строка; + false = false; -null = NaN; + true = NaN;

// let y = 1; 
// let x = y = 2; // сначала присваивается значение y, а потом присваивается значение х. присваивание примитиву по значению; последовательное присваивание
// alert(x); // выведет 2;


// console.log([ ] + 1 + 2); // 12 String;

// alert( "1"[0] ); //обращение к символу строки по его индексу. выведет 1

// console.log(2 && 1 && null && 0 && undefined); //и запинается на лжи,  те приведет все значения с аправа налево к булевому значению, и остановится когда дойдет до false и выведет его, и дальше не пойдет читать код
// // аналогичное поведение у или, тоолько он запинается на правде
// console.log(2 && 1 && 0); // вернет 0


// console.log(!!( 1 && 2 ));
// console.log(1 && 2);  // два значени не равны  !! - приводит к булиновому значению


//                 // 3
// alert( null || 2 && 3 || 4 ); // смотрим таблицу приоритета операторов, у И приоритет выше чем у ИЛИ
// // ИЛИ запинается на правде

// const a = [1, 2, 3]; 
// const b = [1, 2, 3];
// console.log(a == b); //false тк это два разных хранилища информации, которые содержат одинаковую информацию

// alert( +"Infinity" ); // infinity

// console.log("Ёжик" > "яблоко"); // false Юникод

// console.log(0 || "" || 2 || undefined || true || falsе); //2
