/*! Copyright Globant. All rights reserved. */
'use strict';

const config = require('../../core/config');
const roles = require('./controllers');
const genericMiddlewares = require('../middlewares');


module.exports = function initRoutes(app) {
    // Roles resource base route
    const basePath = config.basePath + '/roles';

    //console.log(basePath);
    app.get(basePath, roles.v1.getAll);
    app.get(basePath + '/:id', genericMiddlewares.validateId, roles.v1.getById); 
};
