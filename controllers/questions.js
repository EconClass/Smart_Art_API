const express = require('express'),
app = express();
Question = require('../models/question.js');

module.exports = (app) => {
    // HOME
    app.get('/', (req, res) => {
        res.send('Hello there.');
    });
    // CREATE
    app.post('/api/question', (req, res) => {
        let question = new Question(req.body)
        question.save(() => {
            return res.redirect('/');
        });
    });
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
    // DESTROY
    app.delete('/api/question/:id/delete', (req, res) => {
        Question.findOneAndRemove({ _id: req.params.id })
        .exec( (err, question) => {
            return res.redirect('/');
        });
    });
}