const axios = require("axios");
const express = require('express');
const app = express();


module.exports = (app) => {
    // let xAppToken;

    // app.get('/api/image/token', (req, res) => {
    //     axios.post('https://api.artsy.net/api/tokens/xapp_token', {
    //         client_id: process.env.ID,
    //         client_secret: process.env.SECRET
    //     })
    //     .then(function (response) {
    //         xAppToken = response.data.token;
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });
    //     res.send(xAppToken);
    // });

    // app.get('/api/image/:artist', (req, res) => {
    //     axios.get(`https://api.artsy.net/api/artists/${req.params.artist}`, {
    //         headers: { 'X-Xapp-Token': process.env.TOKEN}
    //     })
    //     .then( response => {
    //         // const images = response.data._links;
    //         res.send(response.data._links)
    //     })
    //     .catch( error => {
    //         console.log(error);
    //     });
    //     // res.send(images)
    // });

    app.get('/api/image/artworks', (req, res) => {
        axios.get("https://api.art.rmngp.fr/v1/works", {
            headers: { "ApiKey": "demo"}
        })
        .then( response => {
            console.log(response)
            res.send(response.data.hits.hits)
        })
        .catch( error => {
            console.log(error.message);
        });
        // res.send(images)
    });
};