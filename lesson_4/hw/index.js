const { urlencoded } = require('body-parser');
const express = require('express');
const app = express();
//для обработки тела запроса
app.use(express.urlencoded());

// //GET
// function sayMyName(req, res, next) {
//     const {firstname, lastname, age} = req.query;
//     console.log(`Hello, my name is ${firstname} ${lastname}, I'm ${age}`)
//     next();
// }
// app.get("/", sayMyName, (req,res) => {
//     const {firstname, lastname, age} = req.query;
//     res.end(`Hello, my name is ${firstname} ${lastname}, I'm ${age}`);
// })


//POST

function sayMyName(req, res, next) {
    const {firstname, lastname, age} = req.body;
    console.log(`Hello, my name is ${firstname} ${lastname}, I'm ${age}`)
    next();
}
app.post("/", sayMyName, (req,res) => {
    const {firstname, lastname, age} = req.body;
    res.end(`Hello, my name is ${firstname} ${lastname}, I'm ${age}`);
})

app.listen(8080);