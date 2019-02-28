const Question = require('../models/question.js');
const Quiz = require('../models/quiz.js');
const restler = require("restler");

module.exports = (app) => {
    // HOME
    app.get('/', (req, res) => {
      res.send('Hello there.')
    });

    // CREATE Question
    app.post('/api/quiz/:quizId/question', (req, res) => {
        console.log(req.body)
        Quiz.findOne( { _id: req.params.quizId} )
        .exec( ( err, quiz) => {
            console.log(quiz)
            let question = new Question(req.body);
            quiz.questions.unshift(question);
            quiz.save( ask => {
                res.redirect(`/api/quiz/${req.params.quizId}`)
            });
        });
    });

    // READ
    app.get('/api/question/:id', (req, res) => {
        Question.findOne( { _id: req.params.id } )
        .then( question => {
            res.send(question);
        });
    });
    //
    app.get('/quiz/:id/question/new', (req, res) => {
        Quiz.findOne( { _id: req.params.id } )
        .then( quiz => {
            restler.get("https://api.harvardartmuseums.org/object", {
                query: {
                    apikey: process.env.KEY,
                    period: "Romanticism",
                    sort: "random",
                    hasimage: 1
                }
            })
            .on("complete", function(data, response) {
                res.render("question.hbs", {
                    data: data,
                    id: req.params.id
                    // artist: data.records.people[0]
                });
            });
        });
    });
    
    // UPDATE
    app.put('/api/question/:id', (req, res) => {

        Question.findOneAndUpdate( { _id: req.params.id }, req.body )
        .then( question => {
            res.redirect(`/api/question/${req.params.id}`);
        });
    });

    // Delete Question
    app.post('/api/quiz/:quizId/question/:id/delete', (req, res) => {
        Quiz.findOne({ _id: req.params.quizId })
        .exec( (err,quiz) => {
            quiz.questions = quiz.questions.filter( ask => {
                return String( ask._id ) !== req.params.id;
            })
            quiz.save().then(quiz => {
                res.redirect(`/api/quiz/${req.params.quizId}`)
            });
        });
    });
}
