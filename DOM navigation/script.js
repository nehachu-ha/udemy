
//обращение к узлам (нодам) элементов;

// console.log(document.body); //обращаемся к тегу body
// console.log(document.head); //обращаемся к тегу head
// console.log(document.documentElement);//обращаемся к тегу html
// console.log(document.body.childNodes); // обращаемся ко всем узлам, которые являются детьми у body
// console.log(document.body.firstChild); // обращаемся к первoму  ребенку у body узел
// console.log(document.body.lastChild); //обращаемся к последнему  ребенку у body узел

// console.log(document.querySelector('#current').parentNode); // обращаемся к родительскому узлу у элемента с id = current;
// console.log(document.querySelector('#current').parentNode.parentNode); // обращаемся к родительскому узлу уровнем выше

// console.log(document.querySelector('[data-current = "3"]')); // поиск дата-элемента по атрибуту
// console.log(document.querySelector('[data-current = "3"]').nextSibling); // поиск сделующего узла соседа
// console.log(document.querySelector('[data-current = "3"]').previousSibling); // получение предыдущего узла соседа


// обращеение к самим элементам

// console.log(document.querySelector('[data-current = "3"]').nextElementSibling); // получение следующего элемента
// console.log(document.querySelector('#current').parentElement); // поиск родительского элемента
// console.log(document.body.firstElementChild); // обращаемся к первoму  ребенку у body
// console.log(document.body.lastElementChild); //обращаемся к последнему  элементу который находится внутри родителя

// console.log(document.body.childNodes); // нет аналогов с элементами, но можно создать вручную //собирает псевдоколлекцию
for (let node of document.body.childNodes) {
    if (node.nodeName === '#text') {  // у каждой текстовой ноды есть атрибут nodeName со значением #text, те мы ищем все такие ноды
        continue;                       // прерываем выполнение цикла когда находится такая нода и начинаеи его заново уже с другим значением ноды
    }
    console.log(node);
}