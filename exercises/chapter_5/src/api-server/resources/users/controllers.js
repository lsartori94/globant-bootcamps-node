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
 * Retrieve a user
 * @param {Object} req 
 * @param {Object} res 
 */
function getById(req, res){
    res.status(200).send(userMock.userById(req.params.userid));
}
