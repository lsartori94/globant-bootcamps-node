/*! Copyright Globant. All rights reserved. */
'use strict';

const _ = require('lodash');
const actions = require('./actions');
const models = require('../../models');

module.exports = {
    v1: { // Initial version
        getAll: getAll,
        getById: getById
    }
};

/////////////////////////////////////////////////////////////

/**
 * Retrieve all roles
 * @param {Object} req - http.ServerRequest
 * @param {Object} res - http.ServerResponse
 */
function getAll(req, res) {
    models.Role.findAll().then(roles => {
        return res.status(200).send(roles); 
    });
}

/**
 * Retrive a role by id. If the role is not found 404 will be returned
 * @param {Object} req - http.ServerRequest 
 * @param {Object} res - http.ServerResponse 
 */
function getById(req, res) {
    const roleId = parseInt(req.params.id);
    const role = actions.getById(roleId);

    if (role === undefined) {
        return res.status(404).send();
    } else {
        return res.status(200).send(role);
    }
}
