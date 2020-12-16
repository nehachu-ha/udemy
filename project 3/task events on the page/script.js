/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

// Возьмите свой код из предыдущей практики

document.addEventListener('DOMContentLoaded', () => { // дожидаемся построения ДОМ - структуры

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
    const filmsList = document.querySelector('.promo__interactive-list'); 
    const form = document.querySelector('.add');
    const input = form.querySelector('.adding__input');
    const checkbox = form.querySelector('[type="checkbox"]');



    form.addEventListener('submit', (e) => {
        e.preventDefault();
       
        let newFilm = input.value;
        const favFilm = checkbox.checked; // отпределяем стоит ли галочка в чекбоксе получем булиновое значение

        if (newFilm) {

            if (newFilm.length > 21) {
                newFilm =`${newFilm.substring(0, 22)}...`;
            }

            if (favFilm) {
                console.log('Добавляем любимый фильм');
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
    
            createMovieList(movieDB.movies, filmsList);
        }

        form.reset(); //очистка формы
        // e.target.reset() // тоже самое
    });

    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };
   
    const makeChanges = () => {
        document.querySelector('.promo__genre').textContent = 'ДРАМА';

        document.querySelector('.promo__bg').style.backgroundImage = 'url("img/bg.jpg")'; 
    };

    const sortArr = (arr) => {
        arr.sort();
    };

    function createMovieList (films, parent) {
        parent.innerHTML = '';

        sortArr(films);

        films.forEach((film, i) => {
            parent.innerHTML += ` 
            <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1); // вырезаем элемент из базы данных
                createMovieList(films, parent); //рекурсия, заново перестраиваем список фильмов + отвязываемся от конкретных элементов
            });
        });
    }
   
   
    deleteAdv(advertising);
    makeChanges();
    
    createMovieList(movieDB.movies, filmsList);
    
});