const express = require('express');
const app = express();

//маршрутный
function logger(req,res,next) {
    console.log("Это мидлвейр");
    next();
}
//глобальный
app.use(logger);


//включение обработки тела запроса при отправке из формы
app.use(express.urlencoded());
//включение обработки тела запроса при отправке в формате json/js
app.use(express.json());

app.post("/", (req,res)=>{
    console.log(req.body);
    const {login, password} = req.body;
    // console.log(`Hello!, ${login}`);
    res.end(`Hello!, ${login}`);
})

app.listen(8080);