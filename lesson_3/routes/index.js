const {Router} = require('express');
const router = new Router();

const routerComments = require("./comments.route");
const routerNews = require("./news.route");

router.use("/news", routerNews);
router.use("/categories", routerNews);
router.use("/comments", routerComments);
router.use("/add", routerNews);
router.use("/user", routerNews);

module.exports = module;