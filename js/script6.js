'use strict';
//сервер - это программа которая позволяет запускать сайт и выполнять более сложные манипуляции с ним. Это бэкэнд часть
//локальные сервера позволяют нам тестировать наш продукт у себя на компьютере
//классификация локальных серверов: 
// - простые - выполняют одну единственную задачу или несколько простых liveServer, httpsrver, jsonserver, Browser Sync
// эти сервера умеет обрабатывать несколько видов запросов:
// - http запросы:
 //       - get и post запросы; get - получить информацию; post - отправить информацию
 // простые локальные сервера поддерживают только get запросы, также get запросы не работают на обычных HTML страницах
// - комплексные  - выполняют все что можно только на сервере

//технология AJAX это серверная технология которая позволяет отправлять get и post запросы без перезагрузки страницы

//JSON - современный формат передачи данных JavaScript Object Notation -  является текстовым форматом обмена данных (используется для передачи и хранения данных)
//JSON изначально использовался только в JS, но теперь может использоваться практически любым языком програмирования
//JSON это набор пар ключ-значение как в объекте,и главное правило что все строки должны быть в двойных кавычках, в качестве значений могут быть объекты,
//массивы, числа, строки, логические значения или null, т.о. мы можем получить небольшую нереляционную базу данных

const persone = {
    name: 'Alex',
    phone: '+375298888888',
    parent: {
        mom: 'Olga',
        dad: 'Mike'
    }
};

//этот объет необходимо передать на сервер, напрямую объект оправить мы не можем, т.к. сервер и протоколы передачи данных нам просто не поймут, 
//поэтому нам нужно превратить наш объект в один из варинтов которые можно транспортировать

//1.стандвртный URL Encoder вариант когда форма просто отправляется с сайта с перезагрузкой страницы, чаще всего вообще без скрипта
// 2.передача объекта FormData
//3. формат данных jSON

//все современные юраузеры, даже IE8имеют встроенный объект JSON для работы с этими данными и в этом встроенном объекте есть как свойства, так и методы

//метод, который превращает объект в нужный нам формат
console.log(JSON.stringify(persone));

//когда с сервера приходит JSON и нам нужно превратить его в обычный объект в нашем скрипте и уже как-то использовать используется следующий метод
console.log(JSON.parse(JSON.stringify(persone)));

//преимуществом JSON является маленький вес файлов и простота чтения
// до появления JSON использовался язык XML

//глубокие копии объектов создаются при помощи JSON;

const clone = JSON.parse(JSON.stringify(persone)); 
// в переменную помещаем объект , в котором операция stringify превратит существующий объект в формат JSON, дальше операция parse возьмет JSON и распарсит его обратно в объект, 
// и при этом буд создан новый полностью глубокий клон, который совершенно не зависит от первоначального объекта

clone.parent.mom = 'Ann'; //вносим изменения в клонированный объект
console.log(persone);
console.log(clone);  

