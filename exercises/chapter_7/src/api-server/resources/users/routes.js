/*! Copyright Globant. All rights reserved. */
'use strict';

const config = require('../../core/config');
const users = require('./controllers');
const genericMiddlewares = require('../middlewares');

module.exports = function initRoutes(app) {
    // Users resource base route
    const basePath = config.basePath + '/users';

    //console.log(basePath);
    app.get(basePath, users.v1.getAll);
    app.get(basePath + '/:id', genericMiddlewares.validateId, users.v1.getById); 
};
