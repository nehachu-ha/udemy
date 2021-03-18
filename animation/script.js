const btn = document.querySelector('.btn'),
  elem = document.querySelector('.box');
let pos = 0;

// function myAnimation() {
//     let pos = 0;

//     const id = setInterval(frame, 10);
//     function frame() {
//         if (pos == 300) {
//             clearInterval(id);
//         } else {
//             pos++;
//             elem.style.top = pos + "px";
//             elem.style.left = pos + 'px';
//         }
//     }
// }

function myAnimation() {
  pos++;
  elem.style.top = pos + "px";
  elem.style.left = pos + 'px';

  if (pos < 300) {
    requestAnimationFrame(myAnimation);
  }
}
//когда запускаем myAnimation внутри себя она начинает зацикливать анимацию при помощи requestAnimationFrame(myAnimation) и она выполнит ее 300 раз
// и соответственно когда позиция будет >= 300 то анимация перестает запускаться

btn.addEventListener('click', () => requestAnimationFrame(myAnimation)); //здесь обязательно должен быть колбэк иначе функция запустится без клика

//эту анимацию также можно останавливать
let id = requestAnimationFrame(myAnimation); //когда помещаем в какую-то переменную вызов requestAnimationFrame то она оставляет уникальный идентификатор анимации
cancelAnimationFrame(id); //отменяем анимацию
