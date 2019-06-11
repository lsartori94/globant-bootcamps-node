/*! Copyright Globant. All rights reserved. */
'use strict';

const _ = require('lodash');
const actions = require('./actions');

module.exports = {
    v1: { // Initial version
        getAll: getAll,
        getById: getById
    }
};

/////////////////////////////////////////////////////////////

/**
 * Retrieve all profiles
 * @param {Object} req - http.ServerRequest
 * @param {Object} res - http.ServerResponse
 */
function getAll(req, res) {
    const profiles = actions.getAll();
    
    if (profiles === undefined) {
        return res.status(404).send();
    } else {
        return res.status(200).send(profiles);
    }    
}

/**
 * Retrive a profile by id. If the profile is not found 404 will be returned
 * @param {Object} req - http.ServerRequest 
 * @param {Object} res - http.ServerResponse 
 */
function getById(req, res) {
    const profileId = parseInt(req.params.id); 
    const profile = actions.getById(profileId);

    if (profile === undefined) {
        return res.status(404).send();
    } else {
        return res.status(200).send(profile);
    }
}
