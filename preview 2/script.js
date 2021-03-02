'use strict';

// localStorage.setItem('number', '5'); // записывает новый ключ, если есть уже такой ключ, то значение перезапишется
//
// localStorage.removeItem('number'); //удаляет данные
// localStorage.clear(); // полная очистка локального хранилица
//
// // localStorage.getItem('number'); // получаем данные

// console.log(localStorage.getItem('number'));

const form = document.querySelector('form'),
      checkbox = document.querySelector('#checkbox'),
      change = document.querySelector('#color');

//проверяем хранилице на наличие и ставим галочку в позицию checked
if (localStorage.getItem('isChecked')) {
  checkbox.checked = true;
}

if (localStorage.getItem('bg') === 'changed') { //проверяем окрашена ли форма и если нажата кнопка оставлять ее окрашеной
  form.style.backgroundColor = 'red';
}

checkbox.addEventListener('change', () => { //изменяем локальное хранилище при клике на чекбокс
  localStorage.setItem('isChecked', 'true');
});

change.addEventListener('click', () => { // изменяем цвет формы
  if (localStorage.getItem('bg') === 'changed') {
    localStorage.removeItem('bg');
    form.style.backgroundColor = 'white';
  } else {
  localStorage.setItem('bg', 'changed');
    form.style.backgroundColor = 'red';
  }
});

const persone = {
  name: 'alex',
  age: '25'
};

const serializedPersone = JSON.stringify(persone);
localStorage.setItem('alex', serializedPersone);

console.log(JSON.parse(localStorage.getItem('alex')));
