/*! Copyright Globant. All rights reserved. */
'use strict';

const config = require('../../core/config');
const roles = require('./controllers');

module.exports = function initRoutes(app) {
    // Roles resource base route
    const basePath = config.basePath + '/roles';

    //console.log(basePath);
    app.get(basePath, roles.v1.getAll);
};
