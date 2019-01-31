if (!process.env.PORT) {
    require('dotenv').config()
    process.env.NODE_ENV = "dev"
}
  
const express = require('express');
const path = require('path');
// const favicon = require('serve-favicon');
// const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/smart-art');