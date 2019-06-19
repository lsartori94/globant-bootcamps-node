/*! Copyright Globant. All rights reserved. */
'use strict';

const _ = require('lodash');
const actions = require('./actions');

module.exports = {
    v1: { // Initial version
        getAll: getAll,
        getById: getById,
        postUser: postUser,
        updateById: updateById,
        deleteById: deleteById
    }
};

/////////////////////////////////////////////////////////////

/**
 * Retrieve all users
 * @param {Object} req - http.ServerRequest
 * @param {Object} res - http.ServerResponse
 */
function getAll(req, res) {
    const usersPromise = actions.getAll();
    usersPromise.then(users => {
        if (users === undefined) {
            return res.status(404).send();
        } else {
            return res.status(200).send(users); 
        }
    });
}

/**
 * Retrive an user by id. If the user is not found 404 will be returned
 * @param {Object} req - http.ServerRequest 
 * @param {Object} res - http.ServerResponse 
 */
function getById(req, res) {
    const userId = parseInt(req.params.id);
    const userPromise = actions.getById(userId);

    userPromise.then(user => {
        if (user === null) {
            return res.status(404).send();
        } else {
            return res.status(200).send(user);
        }
    });
}

/**
 * Creates and returns a JSON with the created user
 * @param {Object} req - http.ServerRequest
 * @param {Object} res - http.ServerResponse
 */
function postUser(req, res) {
    const userPromise = actions.postUser(req.body);

    userPromise.then(user => {
        return res.status(200).send(user);
    });
}

/**
 * Updates and returns
 * @param {Object} req 
 * @param {Object} res 
 */
function updateById(req, res) {
    const userId = parseInt(req.params.id);
    const userPromise = actions.updateById(userId, req.body);

    userPromise.then(user => {
        return res.status(200).send(user);
    });
}

function deleteById(req, res) {
    const userId = parseInt(req.params.id);
    const userPromise = actions.deleteById(userId);

    userPromise.then(()=> {
        return res.status(204).send();
    });
}
