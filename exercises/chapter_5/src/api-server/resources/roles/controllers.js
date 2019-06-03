/*! Copyright Globant. All rights reserved. */
'use strict';

const _ = require('lodash');
const actions = require('./actions');
const roleMock = require('../../../test-helpers/roles');

module.exports = {
    v1: { // Initial version
        getAll: getAll
    }
};


/**
 * Retrieve all roles
 * @param {Object} req - http.ServerRequest
 * @param {Object} res - http.ServerResponse
 */
function getAll(req, res) {
    res.status(200).send(roleMock.ALL_ROLES);
}
