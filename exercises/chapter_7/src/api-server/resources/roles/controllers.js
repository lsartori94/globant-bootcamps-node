/*! Copyright Globant. All rights reserved. */
'use strict';

const _ = require('lodash');
const actions = require('./actions');


module.exports = {
    v1: { // Initial version
        getAll: getAll,
        getById: getById,
        postRole: postRole,
        updateById: updateById,
        deleteById: deleteById
    }
};

/////////////////////////////////////////////////////////////

/**
 * Retrieve all roles
 * @param {Object} req - http.ServerRequest
 * @param {Object} res - http.ServerResponse
 */
function getAll(req, res) {
    const rolesPromise = actions.getAll();

    rolesPromise.then(roles => {
        if (roles === undefined) {
            return res.status(404).send();
        } else {
            return res.status(200).send(roles); 
        }
    });
}

/**
 * Retrive a role by id. If the role is not found 404 will be returned
 * @param {Object} req - http.ServerRequest 
 * @param {Object} res - http.ServerResponse 
 */
function getById(req, res) {
    const roleId = parseInt(req.params.id);
    const rolePromise = actions.getById(roleId);

    rolePromise.then(role => {
        if (role === null) {
            return res.status(404).send();
        } else {
            return res.status(200).send(role);
        }
    });
}

/**
 * Creates and returns a JSON with the created role
 * @param {Object} req - http.ServerRequest
 * @param {Object} res - http.ServerResponse
 */
function postRole(req, res) {
    const rolePromise = actions.postRole(req.body);

    rolePromise.then(role => {
        return res.status(200).send(role);
    });
}

/**
 * Updates and returns
 * @param {Object} req 
 * @param {Object} res 
 */
function updateById(req, res) {
    const roleId = parseInt(req.params.id);
    const rolePromise = actions.updateById(roleId, req.body);

    rolePromise.then(role => {
        return res.status(200).send(role);
    });
}

/**
 * Deletes a role by Id and returns 204 
 * @param {Object} req - http.ServerRequest
 * @param {Object} res - http.ServerResponse
 */
function deleteById(req, res) {
    const roleId = parseInt(req.params.id);
    const rolePromise = actions.deleteById(roleId);

    rolePromise.then(() => {
        return res.status(204).send();
    });
}
