const exp = require('constants');
//объект для инициализации express сервера
const express = require('express');
// console.log(express);

// экземпляр нашего http сервера
const app = express();

//принмиает 2 аргумента
// 1. Адрес(uri)
// 2. Функция, которая будет срабатывать по каждому запросу этого адреса
app.get("/", function(req, res){
    res.end('request success');
});

//Создаёт статичную папку
app.use(express.static('public'));

// 1.Номер порта
// 2.Функция, которая выполнится при запуске сервера(опциональная)
app.listen(8080, function() {
    console.log('Server has been started on port 8080');
})