// события на мобильном браузере:
// touchstart  срабатывает при возникновении касания к элементу
// touchmove  срабатывает при перемещении пальца
// touchend  срабатывает когда палец оторвался от элемента
// touchenter срабатывает когда ведем пальцем по экрану и наскакиваем на элемент на который повешено это событие
// touchleave срабатывает когда палец продолжил скользить за пределы элемента на который повешено это событие
// touchcansel возникает когда точка соприкосновения больше не регистрируется на поверхности экрана

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();

        console.log('Start');
        console.log(e.touches);
    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        console.log('move');
    });

    box.addEventListener('touchend', (e) => {
        e.preventDefault();

        console.log('end');
    });
}); 

//свойства события е при работе на сенсорных устройствах

// touches выдает список всех пальцев которые прямо сейчас взаимодействуют с экраном
// targetTouches  список всех элементов которые могут взаимодействовать с этим элементом
// changedTouches  список всех пальцев которые участвуют в текущем событии, если событие энд, то в список попадет тот палец котрый убрали с экрана


// const box = document.querySelector('.box');
// box.addEventListener('touchmove', (e) => {
//     e.preventDefault();

//     console.log(e.targetTouches[0].pageX); //получаем координаты пальца 1
// });