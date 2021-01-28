'use strict';

//метод forEach() не возвращает новый массив, а просто перебирает его

//метод filter фильтрует элементы внутри массива принимает в качестве аргумента колбэк функцию

// const names = ['ann', 'ivan', 'ksenia', 'aleksandr'];
//
// const shortNames = names.filter(function (name) {
//   return name.length < 5  //из функции ВОЗВРАЩАЕМ только то имя
// });
//
// console.log(shortNames);


//метод map позволяет взять исхлдный массив и изменить каждый элемент внутри него и на выходе получается новый массив с уже измененными данными

// const answers = ['IVan', 'AnnA', 'DiMa'];
//
// const result = answers.map(item => {
//   return item.toLowerCase();
// });
// //const result = answers.map(item => item.toLowerCase()); // сокращенный вариант написания стрелочной функции с одной строкой в теле
//
// console.log(result);

//чтобы не создавать новую переменную делаем так
// let answers = ['IVan', 'AnnA', 'DiMa'];
// answers = answers.map(item => item.toLowerCase());
// console.log(answers);


// метод some перебирает массив и в случае когда хотя бы один из элементов подходит под условие, то он вернет true, иначе false
// метод every перебирает массив и в случае когда все элементы подходит под условие, то он вернет true, иначе false

// const some = [4, '2dfgh', 'dfg'];
// console.log(some.some(item => typeof (item) === "number"));
// console.log(some.every(item => typeof (item) === "number"));



//метод reduce служит он для того чтобы схлопывать или собирать массив в одно единое целое, это метод перебора

// const arr = [3, 5, 6, 2, 1, 4];
//                         // 0             3
//                         // 3             5
//                         // 8             6
//                         // 14            2
// const res = arr.reduce((sum, current) => sum + current, 3);
// //метод принимает 2 аргумента которые подставляются автоматически. изначально sum = 0, current - это каждый элемент массива
// //метод может принимать еще один аргумент- начальное значение, указывается после колбэк функции, в таком случае начальное значение меняется
// console.log(res);


// const fruit = ['apple', 'plum', 'pear'];
// //const result = arr.reduce((sum, current) => sum + ',' + current); //классический способ сложения строк с помощью запятой
// const result = fruit.reduce((sum, current) => `${sum}, ${current}`);
// console.log(result);


const obj = {        // в объекте не может быть двух одинаковых свойств. Нужно ввытащить имена из массива
  ivan : 'persone',
  ann: 'persone',
  dog: 'animal',
  cat: 'animal'
};
//метод entries который относится к объектам, он позволяет нам взять объект и превратить его в матрицу(массив в массиве)
const newArr = Object.entries(obj).filter(item => item[1] === 'persone').map(item => item[0]);
console.log(newArr);
//сначала делаем из масиива матрицу, затем фильтруем массив на наличие 2-го значения, затем трансформируем массив так чтобы нам возвращалось только 1-ое значение
