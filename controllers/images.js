const axios = require("axios");
const express = require('express');
const app = express();


module.exports = (app) => {

    // All artworks from Images d'Art API
    app.get('/api/image/artworks', (req, res) => {
        let returnArray = [];
        axios.get("https://api.art.rmngp.fr/v1/works", {
            headers: { "ApiKey": "demo"}
        })
        .then( response => {
            let resArray = response.data.hits.hits;
            let count = 0;
            console.log(response.data.hits.hits)
            // console.log(resArray[1]._source.images[0].urls.original)
            while ( count < resArray.length ) {
                // console.log(resArray[count])
                let add = resArray[count]._source.images[0].urls.original;
                returnArray.push(add)
                count++
            };
            res.send(returnArray)
        })
        .catch( error => {
            console.log(error.message);
        });   
    });
};