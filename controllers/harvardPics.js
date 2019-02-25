const express = require('express');
const app = express();
const restler = require("restler");
module.exports = (app) => {
<<<<<<< HEAD


=======
    
>>>>>>> 3067f47f18247a40555d310cfcdb8a530fe1b452
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
<<<<<<< HEAD
          console.log(response)
            res.render('culture.handlebars');
=======
            res.send(data);
>>>>>>> 3067f47f18247a40555d310cfcdb8a530fe1b452
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

<<<<<<< HEAD
    // get one image by id
=======
    // get all objects in db
>>>>>>> 3067f47f18247a40555d310cfcdb8a530fe1b452
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
<<<<<<< HEAD
};
=======
};
>>>>>>> 3067f47f18247a40555d310cfcdb8a530fe1b452
