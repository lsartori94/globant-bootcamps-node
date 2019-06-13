/*! Copyright Globant. All rights reserved. */
'use strict';

const config = require('../../core/config');
const profiles = require('./controllers');
const validations= require('../validations')

module.exports = function initRoutes(app) {
    // Users resource base route
    const basePath = config.basePath + '/profiles';


    //console.log(basePath);
    app.get(`${basePath}/:idProfile`,validations.validateProfileId ,profiles.v1.getOneById)
    app.get(basePath,profiles.v1.getAll);
};

