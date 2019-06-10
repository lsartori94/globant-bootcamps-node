/*! Copyright Globant. All rights reserved. */
'use strict';

const config = require('../../core/config');
const users = require('./controllers');
const validator = require('./actions');

module.exports = function initRoutes(app) {
    // Users resource base route
    const basePath = config.basePath + '/users';

    //console.log(basePath);
    app.get(basePath, users.v1.getAll);

    //Path for a single user
    app.get(basePath + '/:userId', validator.v1.validateId, users.v1.getUserById);

    //Path for posting a user
    app.post(basePath, validator.v1.validateBodyPost, users.v1.createUser);

    //Path for updating a user
    app.put(basePath + '/:userId',  validator.v1.validateId, validator.v1.validateBodyPut, users.v1.updateUser);

    //Path for a deleting a user
	app.delete(basePath + "/:userId", validator.v1.validateId, users.v1.deleteUser);
};
