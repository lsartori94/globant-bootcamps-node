/*! Copyright Globant. All rights reserved. */
'use strict';

const config = require('../../core/config');
const profiles = require('./controllers');
const genericMiddlewares = require('../middlewares');
const profilesMiddlewares = require('./middlewares');


module.exports = function initRoutes(app) {
     // Profiles resource base route
     const basePath = config.basePath + '/profiles';

     //console.log(basePath);
     app.get(basePath, profiles.v1.getAll);
     app.get(basePath + '/:id', genericMiddlewares.validateId, profiles.v1.getById); 
     //create a profile
     app.post(basePath, profilesMiddlewares.validateCreateProfile, profiles.v1.postProfile); 
     //delete a profile
     app.delete(basePath + '/:id', genericMiddlewares.validateId, profiles.v1.deleteById);
     //assign a profile to a list of users
     app.post(basePath + '/:id/users', profiles.v1.assingUsers);
     //update a profile by id
     app.put(basePath + '/:id', genericMiddlewares.validateId, profiles.v1.updateById);
};
