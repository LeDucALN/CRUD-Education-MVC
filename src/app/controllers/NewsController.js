class NewsController {
    //[GET] /news
    index(req, res) {
        res.render('news');
    }

    //[GET] /news/:slug
    show(req, res) {
        res.send('New detail!!!');
    }
}

module.exports = new NewsController();

// function NewsController() {
//     this.index = (req, res) => {
//         //[GET] /news
//         res.render(news);
//     }
// }

// module.exports = new NewsController();
