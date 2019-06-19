/*! Copyright Globant. All rights reserved. */
'use strict';

const config = require('../../core/config');
const users = require('./controllers');
const genericMiddlewares = require('../middlewares');
const rolesMiddlewares = require('./middlewares');


module.exports = function initRoutes(app) {
    // Users resource base route
    const basePath = config.basePath + '/users';

    //console.log(basePath);
    app.get(basePath, users.v1.getAll);
    app.get(basePath + '/:id', genericMiddlewares.validateId, users.v1.getById);
    //create a user
    app.post(basePath, rolesMiddlewares.validateCreateUser, users.v1.postUser);
    //update a user by id
    app.put(basePath + '/:id', genericMiddlewares.validateId, users.v1.updateById);
    //delete a user by id
    app.delete(basePath + '/:id', genericMiddlewares.validateId, users.v1.deleteById);
};
