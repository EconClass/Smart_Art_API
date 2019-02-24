require('dotenv').config();

const express = require('express');
const request = require('superagent');
const sampleHref = 'https://d32dm0rphc51dk.cloudfront.net/E-k-uLoQADM8AjadsSKHrA/four_thirds.jpg' // Test image
const apiUrl = 'https://api.artsy.net/api/tokens/xapp_token';
let xappToken;
const app = express();
const Question = require('../models/question.js');


module.exports = (app) => {
    // HOME
    app.get('/', (req, res) => {
      const sendMe = { client_id: process.env.client_id, client_secret: process.env.client_secret }
      console.log(sendMe)
      request
        .post(apiUrl)
        .send(sendMe)
        .end(function(result) {
          console.log(result)
          xappToken = result.body.token;
          res.send(xappToken)
        });
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

    // // ------ Artsy API


    // -------- End Artsy API
}
