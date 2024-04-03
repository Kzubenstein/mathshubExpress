const {Router} = require("express");
//десструктуризация
const router = new Router();

router.get("/news", (req, res) => {
    res.end("GET/news")
});
router.get("/news/:id", (req, res) => {
    const newId = +req.params.id;
    const foundNews = news.find((item)=> item.id === newId)
    res.json(foundNews);
});
router.post("/news", (req,res) => {
    res.end("POST/news");
});
router.put("/news", (req,res) => {
    res.end("PUT/news");
});
router.delete("/news", (req,res) => {
    res.end("PUT/news");
});

module.exports = router;
