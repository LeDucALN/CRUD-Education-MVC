const Course = require('../models/Course')
const { multipleMongooseToObject } = require('../../util/mongose');


class SiteController {
    //[GET] /
    index(req, res, next) {
        // res.render('home');
        Course.find({})
            .then(courses => {
                res.render('home', {
                    courses: multipleMongooseToObject(courses)
                });
            })
            .catch(next);
    }
    // .catch (error => next(error));

    // Course.find({}, function (err, courses) {
    //     if (!err) {
    //         res.json(courses);
    //         return;
    //     } else {
    //         next(err)
    //     }
    // })    


    //[GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();

// function SiteController() {
//     this.index = (req, res) => {
//         //[GET] /news
//         res.render(news);
//     }
// }

// module.exports = new SiteController();
