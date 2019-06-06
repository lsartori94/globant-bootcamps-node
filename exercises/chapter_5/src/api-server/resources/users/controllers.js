/*! Copyright Globant. All rights reserved. */
'use strict';

const _ = require('lodash');
const actions = require('./actions');
const userMock = require('../../../test-helpers/users');

module.exports = {
    v1: { // Initial version
        getAll: getAll,
        getById: getById
    }
};

/////////////////////////////////////////////////////////////

/**
 * Retrieve all users
 * @param {Object} req - http.ServerRequest
 * @param {Object} res - http.ServerResponse
 */
function getAll(req, res) {
    res.status(200).send(userMock.ALL_USERS);
}

/**
 * Retrive an user by id. If the user is not found 404 will be returned
 * @param {Object} req - http.ServerRequest 
 * @param {Object} res - http.ServerResponse 
 */

function getById(req, res) {
    const userId = parseInt(req.params.id);
    
    const user = actions.getById(userId);

    if (user === undefined) {
        return res.status(404).send();
    } else {
        return res.status(200).send(user);
    }
}
