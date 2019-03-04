if (!process.env.PORT) {
    require('dotenv').config()
    process.env.NODE_ENV = "dev"
}

//==========================DEPENDENCIES==========================\\
const express = require('express');
const app = express();
const path = require('path');
// const favicon = require('serve-favicon');
// const logger = require('morgan');
// const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const exphbs = require('express-handlebars')
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const exphbs = require('express-handlebars').create({
    layoutsDir: path.join(__dirname, "views/layouts"),
    partialsDir: path.join(__dirname, "views/partials"),
    defaultLayout: 'main',
    extname: 'hbs'
});
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/smart-art', { useNewUrlParser: true });


app.engine('hbs', exphbs.engine);
app.set('view engine', 'hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.engine("handlebars", exphbs({defaultLayout: "main"}))
app.set("view engine", "handlebars")
app.use(express.static('public'))
// app.use(expressValidator()); // Add after body parser initialization!
// app.use(expressValidator());

// Method Override
app.use(methodOverride('_method'));

//==========================CONTROLLERS==========================\\
const quizzes = require('./controllers/quizzes.js');
quizzes(app);

const questions = require('./controllers/questions.js');
questions(app);


const harvardPics = require('./controllers/harvardPics.js');
harvardPics(app);


app.listen(port)
