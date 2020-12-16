/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const advertising = document.querySelectorAll('.promo__adv img');
// console.log(advertising);


// advertising[1].remove(); // так делают только лохи
// advertising[2].remove();
// advertising[0].remove();

advertising.forEach(item => {
    item.remove();
});

// advertising.forEach(function (item) {  // способ с обычной функцией
//     item.remove();
// });

document.querySelector('.promo__genre').textContent = 'ДРАМА';

document.querySelector('.promo__bg').style.backgroundImage = 'url("img/bg.jpg")'; 

const filmsList = document.querySelector('.promo__interactive-list'); // нашли певый элемент
filmsList.innerHTML = ''; // удалили из списка все элементы
movieDB.movies.sort();
movieDB.movies.forEach((film, i) => {
    filmsList.innerHTML += ` 
    <li class="promo__interactive-item">${i + 1} ${film}
    <div class="delete"></div>
</li>
    `;
});

