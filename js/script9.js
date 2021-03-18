'use strict';

// new RegExp('pattern', 'flags');
// /pattern/flags;


// const ans = prompt('ВВедите ваше имя');
//
// // const reg = /n/; //создаем регулярное выражение для поиска n
// const reg = /n/ig; //поиск n не зависимо от регистра
//
// // console.log(ans.search(reg));  //метод регулярного выроажения который что-то ищет,указаывает позицию в строке первого найденного элемента
// // console.log(ans.match(reg)); //метод ищет все элементы, используя этот метод мы полуаем массив содержащий сам символ, его индекс, строку где ищем и свойство groups. если включен флаг глобальности, то получаем массив со всеми найденными результатами
//
//
// const pas = prompt('password');
// console.log(pas.replace(/./g, '*'));  //метод позволяет брать кусочек строки и заменять его на другое выражение (заменяем ВСЕ СИМВОЛЫ (.) в строке на звездочку)
// console.log(pas.replace(/\./g, '*')); //таким образом заменятся только точки
//
// console.log('12-34-56'.replace(/-/g, ':'));
//
// console.log(reg.test(ans)); // метод который проверяет наличие в строке которая передается внутрь что-то похожее на паттерн который внутри регулярного выражения. этот метод вохврашает true или false

// const ans = prompt('ВВедите ваше число');
// const reg = /\d/g;
// console.log(ans.match(reg));

// const str = 'My name is r2d2';
// console.log(str.match(/\w\d\w\d/i));
// console.log(str.match(/\W/i));


// геттеры и сеттеры
//
// const person = {
//   name: 'alex',
//   age: 25,
//
//   get userAge () {  //создаем геттер
//     return this.age;
//   },
//
//   set userAge (num) { //создание сеттера
//     this.age = num;
//   }
//   //геттер и сеттер идет как пара свойств поэтому имена могут повторяться, если не устанавливать геттер или сеттер то его не будет в нашем доступе
// };
//
// console.log(person.userAge);  //в геттере не ставим круглые скобки, тк геттер предполагает что внутри и
// // так какой-то функционал и он нам позволяет работать с этим методом как с обычным свойством, поэтому это и называется свойство акцессор
//
// console.log(person.userAge = 30);  //используем сеттер
// console.log(person.userAge);


//инкапсуляция

// function User (name, age) { //функция-конструктор
//   this.name = name;
//   let userAge = age;
//
//   this.say = function () {
//     console.log(`Имя пользователя: ${this.name}, возраст: ${userAge}`);
//   }
//
//   this.getAge = function () {
//     return userAge;
//   }
//
//   this.setAge = function (age) {
//     if (typeof age === 'number' && age > 0 && age < 110) {
//       userAge = age;
//     } else {
//       console.log('недопустимое значение');
//     }
//   }
// }
//
// const ivan = new User('ivan', 25);
// console.log(ivan.name);
// // console.log(ivan.userAge);
// console.log(ivan.getAge());
// console.log(ivan.setAge('h'));
//
// ivan.userAge = 30;
// ivan.name = 'alex';
//
// ivan.say();


/*
class User {
  constructor(name, age) {
    this.name = name;
    this._age = age;
  }

  #surname = 'Petrychenko';

  say = () => {
    console.log(`Имя пользователя: ${this.name} ${this.#surname}, возраст ${this._age}`);
  }

  get age() {
    return this._age;
  }

  set age(age) {
    if (typeof age === 'number' && age > 0 && age < 110) {
      this._age = age;
    } else {
      console.log('Недопустимое значение!');
    }
  }
}

const ivan = new User('ivan', 25);
console.log(ivan.age);
ivan.age = 99;
console.log(ivan.age);
ivan.say();
console.log(ivan.surname);
*/


// // прием Модуль
//
// const number = 1; // записали переменную в глобальную область видимости
//
// (function () {   //анонимная самовызывающаяся функция
//   const number = 2;
//   console.log(number);
//   console.log(number + 3);
// }());
//
// console.log(number);
//
// const user = (function () {
//   const privat = function () {
//     console.log('I am a privat');
//   }
//
//   return {   //используем объектный интерфейс
//     sayHello: privat
//   };
// }());
// user.sayHello();


// // try {
// //   console.log('normal'); //если в этом блоке кода взникает любая ошибка то происходит выполнение кода в блоке catch
// // } catch (e) { //этот блок служит для того чтобы отлавливать ошибки и что-то с ними делать
// //   console.log('error');
// // }
// //код написанный после такой конструкции также продолжит работать
// console.log('still normal');
//
// // в блок catch приходит объект ошибки
// try {
//   console.log('normal');
//   console.log(a);
// } catch (error) {
//   console.log(error); //и к этому объекту идут 3 сущности
//   console.log(error.name); //название ошибки
//   console.log(error.message);
//   console.log(error.stack); // здесь модно увидеть какие функции привели к ошибке
// } finally { // код который находится внутри этого блока выполнится абсолютно всегда, задача этого блока - завершить начатые операции при любщм развитии событий, те эту секцию можно использовать чтобы собщить пользователю что что-то пошло не так
//
// }
//

//функция-генератор
function* generator() {
  yield 'S'; //вызывая эту функцию первый раз она отдаст этот рез-т
  yield 'c'; //вызывая эту функцию второй раз она отдаст этот рез-т
  yield 'r';
  yield 'i';
  yield 'p';
  yield 't';
}

const str = generator();

// чтобы вызвать следующий шаг генератора нужно использовать встроенный метод next
console.log(str.next());
console.log(str.next());
console.log(str.next());
//когда функция срабатыввает она отдает объект в котором есть 2 поля: значение value и поле done, которое говорит выполнился ли генератор полностью
console.log(str.next().value); // так получим только значение


function* count(n) {
  for (let i = 0; i < n; i++) {
  yield i;
  }
}

for (let k of count(7)) { // запускаем функцию генератор автоматически все те разы которые нам было необходимо с помощью перебирающей конструкции for of
  console.log(k); //эту конструкцию можно использовать когда стоит задача запустить функцию максимальное количество раз
}

// const counter = count(7);
// console.log(counter.next().value);
// console.log(counter.next().value);
// console.log(counter.next().value);
// console.log(counter.next().value);
