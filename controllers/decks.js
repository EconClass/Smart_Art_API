const express = require('express'),
app = express(),
Deck = require('../models/deck.js');

module.exports = (app) => {
    // CREATE
    app.post('/api/deck', (req, res) => {
        let deck = new Deck(req.body)
        deck.save(() => {
            return res.redirect('/');
        });
    });

    // READ
    app.get('/api/deck/:id', (req, res) => {
        Deck.findOne( { _id: req.params.id } )
        .then( deck => {
            if (req.header('content-type') == 'application/json'){
                return res.json(deck)
            }
            res.send(deck);
        });
    });

    // UPDATE
    app.put('/api/deck/:id', (req, res) => {
        Deck.findOneAndUpdate( { _id: req.params.id }, req.body )
        .then( deck => {
            res.redirect(`/api/deck/${req.params.id}`);
        });
    });
    
    // DESTROY
    app.delete('/api/deck/:id/delete', (req, res) => {
        Deck.findOneAndRemove({ _id: req.params.id })
        .exec( (err, deck) => {
            return res.redirect('/');
        });
    });
}