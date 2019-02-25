const express = require('express'),
app = express(),
Card = require('../models/card.js');
<<<<<<< HEAD

module.exports = (app) => {
    // CREATE
    app.post('/api/deck/:id/card ', (req, res) => {
        let card = new Card(req.body)
        card.save(() => {
            return res.redirect(`/api/deck/${req.params.id}`);
        });
=======
Deck = require('../models/deck.js');

module.exports = (app) => {
    // CREATE
    app.post('/api/deck/:id/card ', async (req, res) => {
        let card = new Card(req.body)
        Deck.findOne({ _id: req.params.id }).then( deck => {
            card.save()
            deck.cards.unshift(card._id)
            deck.save(() => {
                return res.redirect(`/api/deck/${req.params.id}`);
            });
        })
        
>>>>>>> 3067f47f18247a40555d310cfcdb8a530fe1b452
    });

    // READ
    app.get('/api/deck/:id/card/:cardId', (req, res) => {
        card.findOne( { _id: req.params.id } )
        .then( card => {
            if (req.header('content-type') == 'application/json'){
                return res.json(card)
            }
            res.send(card);
        });
    });

    // UPDATE
    app.put('/api/deck/:id/card/:cardId', (req, res) => {
        card.findOneAndUpdate( { _id: req.params.id }, req.body )
        .then( card => {
            res.redirect(`/api/card/${req.params.id}`);
        });
    });
    
    // DESTROY
    app.delete('/api/deck/:id/card/:cardId/delete', (req, res) => {
        card.findOneAndRemove({ _id: req.params.id })
        .exec( (err, card) => {
            return res.redirect('/');
        });
    });
};