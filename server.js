if (!process.env.PORT) {
    require('dotenv').config()
    process.env.NODE_ENV = "dev"
}

const express = require('express');
const app = express();
const path = require('path');
// const favicon = require('serve-favicon');
// const logger = require('morgan');
// const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/smart-art', { useNewUrlParser: true });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(expressValidator()); // Add after body parser initialization!

// Method Override
app.use(methodOverride('_method'));



const questions = require('./controllers/questions.js');
questions(app);

app.listen(port)
