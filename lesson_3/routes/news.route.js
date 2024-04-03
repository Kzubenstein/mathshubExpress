const {Router} = require("express");
//десструктуризация
const router = new Router();

router.get("/news", (req, res) => {
    res.end(req.method + "/" +req.protocol)
});
router.get("/news/:id", (req, res) => {
    const newId = +req.params.id;
    const foundNews = news.find((item)=> item.id === newId)
    res.json(foundNews);
});
router.post("/news", (req,res) => {
    res.end(req.method + "/" +req.protocol);
});
router.put("/news", (req,res) => {
    res.end(req.method + "/" +req.protocol);
});
router.delete("/news", (req,res) => {
    res.end(req.method + "/" +req.protocol);
});

module.exports = router;
