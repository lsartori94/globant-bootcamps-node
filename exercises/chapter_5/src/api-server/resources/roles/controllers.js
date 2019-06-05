/*! Copyright Globant. All rights reserved. */
'use strict';

const _ = require('lodash');
const actions = require('./actions');
const roleMock = require('../../../test-helpers/roles');

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
    res.status(200).send(roleMock.ALL_ROLES);
}

/**
 * Retrive a role by id. If the role is not found 404 will be returned
 * @param {Object} req - http.ServerRequest 
 * @param {Object} res - http.ServerResponse 
 */

function getById(req, res) {
    const roleId = parseInt(req.params.id);
    
    const filterRole = roleMock.ALL_ROLES.filter(elementRole => {
        let elementRoleId = elementRole.id;
        return (elementRoleId === roleId);
    });
    if (filterRole.length === 0) {
        return res.status(404).send();
    } else {
        return res.status(200).send(filterRole[0]);
    }
}