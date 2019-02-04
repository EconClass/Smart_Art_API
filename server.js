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

const questions = require('./controllers/questions.js');
app.use(questions);

app.listen(port)