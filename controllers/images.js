const axios = require("axios");
const express = require('express');
const app = express();


module.exports = (app) => {

    app.get('/api/image/artworks', (req, res) => {
        let returnArray = [];
        axios.get("https://api.art.rmngp.fr/v1/works", {
            headers: { "ApiKey": "demo"}
        })
        .then( response => {
            let resArray = response.data.hits.hits;
            let count = 0;
            while ( count < resArray.length - 1 ) {
                // console.log(resArray[count])
                let another = resArray[count];
                let index = 0;
                while (index < another._source.images.length - 1){
                    // console.log(another._source.images[index].urls.medium.url)
                    returnArray.push(another._source.images[index].urls.medium.url)
                    index++
                }
                count++
            };
            res.send(returnArray)
        })
        .catch( error => {
            console.log(error.message);
        });   
    });
};