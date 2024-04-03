const express = require('express');
app = express();

app.use(express.static('publuc'));

app.get("/cats", function (req, res) {
    res.end("Some information about cats")
})

app.get("/dogs", function (req, res) {
    res.end("Some information about dogs")
})

app.get("/mices", function (req, res) {
    res.end("Some information about mices")
})

app.listen(8081);