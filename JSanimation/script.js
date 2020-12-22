// const timerId = setTimeout(function () { //задержка начала работы функцииб в качестве аргументов передается функция или вызов функции и время задержки в милисекундах
// console.log('Hello!');
// }, 2000);




// const timerId = setTimeout(function (text) { //может принимать третим аогументом значение которое будет являться аргументов для функции которая должна выполняться внутри setTimeout
//     console.log(text);
//     }, 2000, 'Hello!');




// const timerId = setTimeout(logger, 2000); //указывается нахвание функции без вызова

// function logger () {
//     console.log('text');
// }

// // если записывем функцию setTimeout в переменную то мы записываем числовой идентификатор таймера

// clearInterval(timerId); // очистка таймера, когда необходимость выполнения функции setTimeout отпадает.



// const btn = document.querySelector('.btn'); // делаем так, чтобы после клика на кнопку, функция setTimeout не срабатывала
// let timerId;
// let i = 0;

// btn.addEventListener('click', () => {
//     // const timerId = setTimeout(logger, 2000);
//     timerId = setInterval(logger, 2000);
// });

// function logger () {
//     if (i === 3) {
//         clearInterval(timerId);
//     }
//     console.log('text');
//     i++;
// }

// setInterval используется для того, чтобы скрипт выполнялся не один раз, а несколько раз через опреденное время

// рекурсивный setTimeout работает также как и setInterval, но разница в том, что код всегда будет ждать строго отведенное время, в то время как 
// setInterval не дожидается выполнения тяжелого кода

// let id = setTimeout(function log () { //рекурсивный setTimeout 
//     console.log('privet');
//     id = setTimeout(log, 500);
// }, 500);




//делаем простую анимацию по перемещению объекта 
const btn = document.querySelector('.btn');

function myAnimation () {
    let element = document.querySelector('.box');
    let position = 0;

    const id = setInterval(frame, 10); // по умолчанию интервал 4 мс
    function frame () {
        if (position === 300) {
            clearInterval(id);
        } else {
            position++;
            element.style.top = position + 'px';
            element.style.left = position + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation);