const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

// Set up the express app
var expressLayouts = require('express-ejs-layouts')

const app = express();

require('dotenv').config()
// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.use(expressLayouts);

require('./server/routes')(app);
// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));

module.exports = app;