/*! Copyright Globant. All rights reserved. */
'use strict';

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const util = require('./util');

// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Load all routes files from resources folder
util.loadRoutes(__dirname, app);

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to Nodejs bootcamp.',
}));

module.exports = app;