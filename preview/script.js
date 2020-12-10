// использование свойств DOM дерева 

const btn = document.querySelector('button'),
      overlay = document.querySelector('.overlay');

// btn.onclick = function () {
//     alert('click');
// };
// btn.onclick = function () {
//     alert('second click');
// };  //первый обработчик пропадет

//  btn.addEventListener('click', () => {
//     alert('click');
// });
//  btn.addEventListener('click', () => {
//     alert('second click');
// }); //сохраняется 2 действия


//  btn.addEventListener('click', (e) => { //слушатель события
//     // console.log(e); // просмотр объекта event (е) который содержит в себе все свойства и методы, этот обЪект передается как агрумент в колбэк-функцию
//     // console.log(e.target);
//     e.target.remove();
//     // console.log('hover');
// });

// let i = 0;
// const deleteElement = (e) => { 
//     console.log(e.target);
//     i++;
//     if (i === 1) { // если клик произойдет 1 раз, то...
//         btn.removeEventListener('click', deleteElement); // удаляем обработчик событий
//     }
// };
// btn.addEventListener('click', deleteElement); // добавляем обработчик событий



const deleteElement = (e) => { 
    console.log(e.target);
    console.log(e.currentTarget);
    console.log(e.type);
   
};
// btn.addEventListener('click', deleteElement); 
// overlay.addEventListener('click', deleteElement); 


// способы отменить стандартное поведение браузера
const link = document.querySelector('a');

link.addEventListener('click', (event) => {
    event.preventDefault(); // метод отменяет переход по ссылке (стандартное поведение браузера), указывается в самом начале обработчика событий
    console.log(event.target);
});

// добавляем обработчик событий jlby  сразу на несколько элементов
const btns = document.querySelectorAll('button');
btns.forEach(item => {
    item.addEventListener('click', deleteElement, {once: true}); //в объекте передали опцию, которая говорит что событие должно повториться только 1 раз
});


