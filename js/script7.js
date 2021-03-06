'use strict';
//promise (обещание) - эта технология позволяет успешно работать с различными асинхронными операциями (при таймаутах или при запросах на сервер)
//если произойтет что-то, то обещаем что произойдет то-то
// -классический присер обработчик события и колбэк функция
// - отправляем запрос на сервер - получаем от него данные - действия с полученными данными
// для такой последовательности событий можно написать много колбэк функций, при этом код превратиться в большой не читабеньный код (callback hell)

// console.log('запрос данных...'); // синхронный код, выполнится сразу

// const req = new Promise(function(resolve, reject) { //эти аргументы обозначают функции которые в будущем мы можем сами передавать
//     //resolve - означает что что-то выполнилось правильно, обещание выполнилось, reject  - обещание не выполнилось и что-то пошло не так
//     setTimeout(() => {   //асинхронный код
//         console.log('Подготовка данных...');

//         const product = {
//             name: 'TV',
//             price: 2000
//         };

//         resolve(product); // если код выполняется, то мы должны вызвать функцию
//     }, 2000);
// }); // создаем новый промис с помощью конструктора и внутрь помещаем колбэк функцию

//используем промисы
// метод then выполняется на промисе в случае положительного исхода и он принимает тот аргумент с функцией который называется resolve
// req.then((product) => {
//     console.log('Данные получены...');
//     setTimeout(() => {
//         product.status = 'order';
//         console.log(product);
//     }, 2000);
// });
//product в этой функции не существует, поэтому нужно его заретёрнить(вернуть) и сделать это можно с помощью функции resolve, в которую передаем аргументом какие данные,
//в данном случае product и функция resolve которую мы сами написали будет принимать в качестве аргумента product, который нам вернулся з предыдущего этапа

// //после выполнения кода в req.then нужно выполнить еще какие-то действия и после этого  сново нужно обернуть в промис
// req.then((product) => {
//     const req2 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.status = 'order';
//             resolve(product);
//         }, 2000);
//     });

//     req2.then((data) => { //используем новый промис
//         console.log(data);
//     });
// });

// // у промисов есть огромное преимущество перед колбэками - мы можем возвращать промис из then по цепочке (чейнинг)
// req.then((product) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.status = 'order';
//             resolve(product);
//         }, 2000);
//     }).then((data) => {
//         console.log(data);
//     });
// }); //таким образом мы избавились от колбэков

// из колбэков в then можно возвращать не только промисы, но и синхронный код можно передавать по цепочке, те выполнять код, который должен сточно следовать друг за другом
// req.then(product => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.status = 'order';
//             resolve(product);
//         }, 2000);
//     }).then((data) => {
//         data.modify = true;
//         return data;
//     }).then(data => {
//         console.log(data);
//     });
// });

// reject  - это функция, которую мы самостоятельно прописываем и выполняется эта функция когда промис завершился неудачей
// req.then(product => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.status = 'order';
//             reject();
//         }, 2000);
//     }).then((data) => {
//         data.modify = true;
//         return data;
//     }).then(data => {
//         console.log(data);
//     });
// }).catch(() => { //метод catch  используется для обработки ошибки, обычно он ставится в конце;это действие выполнится при какой-то ошибке
//     console.error('произошла ошибка');
// });

// req.then(product => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.status = 'order';
//             resolve(product);
//         }, 2000);
//     }).then((data) => {
//         data.modify = true;
//         return data;
//     }).then(data => {
//         console.log(data);
//     });
// }).catch(() => { //метод catch  используется для обработки ошибки, обычно он ставится в конце;это действие выполнится при какой-то ошибке
//     console.error('произошла ошибка');
// }).finally(() => { //блок finally позволяет выполнить действия при абсолютно любом исходе промиса, записывается в самом конце
//     console.log('Finally'); //в этот блок кода можно например поместить код, где мы очищаем форму
// });




//используем еще 2 метода для промисов

const test = time => {
    return new Promise(resolve => {
        setTimeout(resolve(), time);
    });
};
// test(1000).then(() => console.log('1000 ms'));
// test(2000).then(() => console.log('2000 ms')); //такую функцию можно использовать для того чтобы запускать одинаковые операции через определнный промежуток времени

// Promise.all([test(1000),test(2000)]).then(() => { //метод, который принимает внутрь себя массив с промисамиб его можно обработать методом then
//     console.log('ALL');
// });
// //команда Promise.all() служит для того, чтобы убедиться, что все наши промисы уже выполнились, а после этого можно уже выполнять какие-то действия(then или catch)

Promise.race([test(1000),test(2000)]).then(() => { //метод, который принимает внутрь себя массив с промисамиб его можно обработать методом then
    console.log('ALL');
});
// команда Promise.race() служит для того, чтобы выполнить действия только тогда самый первый промис уже правильно отработал




//API -  application programming interface (интерфейс ПО) - набор данных и возможностей которые предоставляют нам какое-то готовое решение
//DOM API - это различные методы которые позволяют нам работать с элементами на странице, встроенные в браузер
//Google Maps API - сторонние возможности, те гугл представляет возможность работать с их картами
//API говорит о том, что нам предоставляют готовые методы и свойства которые мы можем использовать

//FETCH API - встроенная в браузер технология, которая позволяет общаться с сервером и она построена на промисах
fetch('https://jsonplaceholder.typicode.com/todos/1')        //https://jsonplaceholder.typicode.com/ база данных в формате JSON, к которой можно обращаться, чтобы тестировать
  .then(response => response.json())
  .then(json => console.log(json));
// чтобы использовать fetch используется ключ слово fetch и в круглых скобках указывается тот URL куда буде посылаться запрос - это классический get-запрос и возвращает промис, который можно обработать с помощью then
//у fetch есть встроенные возможности для трансформации json а обычный объектс помощью  метода json() (вместо json.parse()) и эта команда возвращает промис
// также есть метод text() и др. чтобы модефицировать данные которые прих0дят от сервера

// для других видов запросов
fetch('https://jsonplaceholder.typicode.com/posts', {         // сюда помещаем объект с настройками, этот объект содержит много свойств, но обязательными являются 2
    method: 'POST',
    body: JSON.stringify({name: 'Alex'}),   // этот объект сразу превратится в JSON и мы его отправим с помощью fetch
    headers: {
        'Content-type': 'application/json'
    }
})        //https://jsonplaceholder.typicode.com/ база данных в формате JSON, к которой можно обращаться, чтобы тестировать
  .then(response => response.json())
  .then(json => console.log(json));

//промис который запускается при помощи fetch не перейдет в состояние отклонено (reject) из-зи ответ HTTP, который считается ошибкой( 404, 500), он все равно выполнится нормально,
// только в нем поменяется свойство status, которое перейдет в состояние false
//(если внутри промиса фетч попадает на ошибку, которая связана с HTTP протоколом то он не выкинет реджект и он нормально выполнит резолв, самое главное для фетча,
// что он вообще смог сделать этот запрос, соответственно реджект будет возникать при сбое сети или когда что-то помешало запросу выполнится)

//fetch стал заменой XMLHttpRequest
