const express = require('express');
const app = express();
const router = require('./routes');

app.use(router);

// Экземпляр приложения (app)
// В него добавляется главный роутер (Router)
// В главный роутер добавляются группы роутеров (index.route)
// Группы роутеров - экземпляр класса Router 
// с описанными путями (news.router)



// const news = [
//     {id:1, title: "Новость 1"},
//     {id:2, title: "Новость 2"},
//     {id:3, title: "Новость 3"},
//     {id:4, title: "Новость 4"},
// ]

// //динамический параметр 
// //1#$% _$

// app.get ("/news/:id", (req, res) => {
//     const newsId = +req.params.id;
//     const foundNews = news.find((item) => item.id === newsId);
//     //возвращаем json
//     res.json (foundNews);
// });

// //Связь реакта с бэком
// //http://localhost:5000/news/1 -> fetch("http://localhost:8080/news/1")

// /news -> [GET*2, POST, PUT,DELETE]
//         получить*2, добавить, изменить, удалить
// /categories -> [получить, добавить, изменить, удалить]
// /comments -> [получить, добавить, изменить, удалить]
// /add -> [получить, добавить, изменить, удалить]
// /user -> [получить, добавить, изменить, удалить]

// router.get('/, () => {}');
// router.get('/,id () => {}');
// router.post('/, () => {}');
// router.put('/, () => {}');
// router.delete('/, () => {}');
// module.exports = router;



app.listen(8080);