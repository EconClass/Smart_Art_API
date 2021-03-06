const express = require('express'),
app = express(),
Quiz = require('../models/quiz.js');

module.exports = (app) => {
    // CREATE
    app.post('/api/quiz/', (req, res) => {
        console.log("BODY", req.body);
        let quiz = new Quiz(req.body)
        quiz.save(() => {
            return res.redirect(`/`);
        });
    });

    // READ
    app.get('/api/quiz/:id', (req, res) => {
        Quiz.findOne( { _id: req.params.id } )
        .then( quiz => {
            if (req.header('content-type') == 'application/json'){
                return res.json(quiz)
            }
            console.log(quiz)
            res.render('show-quiz.handlebars', {quiz: quiz});

        });
    });

    // Return All quizzes
    app.get('/api/all', (req, res) => {
        Quiz.find()
        .then( quiz => {
            if (req.header('content-type') == 'application/json'){
                return res.json(quiz)
            }
            res.send(quiz);
        });
    });

    // UPDATE
    app.put('/api/quiz/:id', (req, res) => {
        Quiz.findOneAndUpdate( { _id: req.params.id }, req.body )
        .then( quiz => {
            res.redirect(`/api/quiz/${req.params.id}`);
        });
    });

    // New Quiz form
    app.get('/quiz/new', (req, res) => {
      res.render('new-quiz.handlebars')
    })

    // DESTROY
    app.delete('/api/quiz/:id/delete', (req, res) => {
        Quiz.findOneAndRemove({ _id: req.params.id })
        .exec( (err, quiz) => {
            return res.redirect('/');
        });
    });
};
