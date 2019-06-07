/*! Copyright Globant. All rights reserved. */
'use strict';

const config = require('../../core/config');
const profiles = require('./controllers');
const validator = require('./actions');

module.exports = function initRoutes(app) {
    // Profiles resource base route
    const basePath = config.basePath + '/profiles';

    //console.log(basePath);
    app.get(basePath, profiles.v1.getAll); 

    //Path for a single progile
    app.get(basePath+'/:profileId', validator.v1.validateId, profiles.v1.getProfileById);
};
