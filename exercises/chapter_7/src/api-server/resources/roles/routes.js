/*! Copyright Globant. All rights reserved. */
'use strict';

const config = require('../../core/config');
const role = require('./controllers');

module.exports = function initRoutes(app) {
    // Users resource base route
    const basePath = config.basePath + '/role';

    //console.log(basePath);
    app.get(basePath, role.v1.getAll);
};
