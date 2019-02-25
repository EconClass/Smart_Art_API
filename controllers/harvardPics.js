const express = require('express');
const app = express();
const restler = require("restler");
module.exports = (app) => {
    
    // returns all objects in their db 10 at a time
    app.get('/api/objects', (req, res) => {
        restler.get("https://api.harvardartmuseums.org/object", {
            query: {
                apikey: process.env.KEY,
                title: "dog",
                fields: "objectnumber,title,dated",
            }
        })
        .on("complete", function(data, response) {
            res.send(data.records);
        });
    });

    // returns array of image objects of a culture case-sensitive query
    // ex) api/culture/Afghan
    app.get('/api/culture/:name', (req, res) => {
        restler.get("https://api.harvardartmuseums.org/object", {
            query: {
                apikey: process.env.KEY,
                culture: `${req.params.name}`,
            }
        })
        .on("complete", function(data, response) {
            res.send(data);
        });
    });

    // returns array of image objects of a person case-sensitive query
    // ex) api/person/Picasso
    app.get('/api/person/:name', (req, res) => {
        restler.get("https://api.harvardartmuseums.org/object", {
            query: {
                apikey: process.env.KEY,
                person: `${req.params.name}`,
            }
        })
        .on("complete", function(data, response) {
            res.send(data);
        });
    });

    // get all periods
    app.get('/api/periods', (req, res) => {
        restler.get("https://api.harvardartmuseums.org/period", {
            query: {
                apikey: process.env.KEY,
            }
        })
        .on("complete", function(data, response) {
            res.send(data.records);
        });
    });

    // get one image by id
    app.get('/api/pic/:id', (req, res) => {
        restler.get(`https://api.harvardartmuseums.org/image/${req.params.id}`, {
            query: {
                apikey: process.env.KEY,
            }
        })
        .on("complete", function(data, response) {
            res.send(data);
        });
    });

    // get all objects in db
    app.get('/api/all', (req, res) => {
        // returns a an array size 10 of objects at a time for all images in db
        restler.get('https://api.harvardartmuseums.org/image', {
            query: {
                apikey: process.env.KEY,
            }
        })
        .on("complete", function(data, response) {
            res.send(data);
        });
    });
};