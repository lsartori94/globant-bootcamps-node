/*! Copyright Globant. All rights reserved. */
'use strict';

const config = require('../../core/config');
const roles = require('./controllers');
const validations = require('../validations')


module.exports = function initRoutes(app) {
    // Users resource base route
    const basePath = config.basePath + '/roles';

    //console.log(basePath);
    app.get(basePath, roles.v1.getAll);
    app.get(`${basePath}/:id`, validations.validateRolId, roles.v1.getOneById)
    app.post(`${basePath}/create`, validations.validateReqBodyRole, roles.v1.createRol);

    app.delete(`${basePath}/:id`, validations.validateRolId, roles.v1.deleteRol);
    app.put(`${basePath}/:id`, validations.validateReqBodyRole, validations.validateRolId, roles.v1.updateRol);

};
