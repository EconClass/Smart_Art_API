const express = require('express');
const app = express();
const restler = require("restler");
module.exports = (app) => {
    // test response
    app.get('/api/test', (req, res) => {
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

    // get one image by id
    app.get('/api/all', (req, res) => {
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