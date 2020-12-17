'use strict';

const p = document.querySelectorAll('p');
console.log(p);

// const script = document.createElement('script'); // создание скрипта на JS
// script.src = "test.js";
// document.body.append(script); // такой скрипт начнет выполняться только после добавления в документ
// //скрипты загружаемые таким образом (динамически загружаемые скрипты) по умолчанию ведут себя как async

// //чтобы изменить такое поведение нужно перед добавлением скрипта на страницу установить атрибуту async значение false
// const script = document.createElement('script'); // создание скрипта на JS
// script.src = "test.js";
// script.async = false;
// document.body.append(script);  // то этот скрипт будет вести себя как самый обычный скрипт

function loadScript (src) {
    const script = document.createElement('script'); 
    script.src = src;
    script.async = false;
    document.body.append(script); 
}
loadScript("test.js");
loadScript("some.js");