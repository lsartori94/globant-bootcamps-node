/*! Copyright Globant. All rights reserved. */
'use strict';

const config = require('../../core/config');
const users = require('./controllers');

module.exports = function initRoutes(app) {
    // Users resource base route
    const basePath = config.basePath + '/users';

    //console.log(basePath);
    app.get(basePath, users.v1.getAll);

    //userByIdPatch
    app.get(basePath+'/:userid', users.v1.getById);
};
