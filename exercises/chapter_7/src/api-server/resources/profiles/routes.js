/*! Copyright Globant. All rights reserved. */
'use strict';

const config = require('../../core/config');
const profiles = require('./controllers');
const validations = require('../validations')

module.exports = function initRoutes(app) {
    // Users resource base route
    const basePath = config.basePath + '/profiles';


    //console.log(basePath);
    app.get(basePath, profiles.v1.getAll);

    app.get(`${basePath}/:id`, validations.validateProfileId, profiles.v1.getOneByid)
    app.post(`${basePath}/create`, validations.validateReqBodyProfile, profiles.v1.createProfile);
    //assign a profile to a list of user
    app.post(`${basePath}/:id/users`, profiles.v1.assignprofile);

    app.delete(`${basePath}/:id`, validations.validateProfileId, profiles.v1.deleteProfile);
    app.put(`${basePath}/:id`, validations.validateReqBodyProfile, validations.validateProfileId, profiles.v1.updateProfile);
};

