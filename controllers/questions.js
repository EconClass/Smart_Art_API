const express = require('express'),
app = express();
Question = require('../models/question.js');
Quiz = require('../models/quiz.js');

module.exports = (app) => {
    // HOME
    app.get('/', (req, res) => {
      res.send('Hello there.')
    });

    // CREATE Question
    app.post('/api/quiz/:quizId/question', (req, res) => {
        Quiz.findOne( { _id: req.params.quizId} )
        .exec( ( err, quiz) => {
            console.log(quiz)
            let question = new Question(req.body);
            quiz.questions.unshift(question);
            quiz.save( ask => {
                res.redirect(`/api/quiz/${req.params.quizId}`)
            })
        });
    });

    // // CREATE
    // app.post('/api/question', (req, res) => {
    //     let question = new Question(req.body)
    //     question.save(() => {
    //         return res.redirect('/');
    //     });
    // });

    // READ
    app.get('/api/question/:id', (req, res) => {
        Question.findOne( { _id: req.params.id } )
        .then( question => {
            res.send(question);
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
    // DESTROY
    // app.delete('/api/question/:id/delete', (req, res) => {
    //     Question.findOneAndRemove({ _id: req.params.id })
    //     .exec( (err, question) => {
    //         return res.redirect('/');
    //     });
    // });
}
