/*! Copyright Globant. All rights reserved. */
'use strict';

const _ = require('lodash');
const actions = require('./actions');


module.exports = {
    v1: { // Initial version
        getAll: getAll,
        getById: getById,
        postProfile: postProfile,
        updateById: updateById,
        deleteById: deleteById,
        assingUsers: assingUsers
    }
};

/////////////////////////////////////////////////////////////

/**
 * Retrieve all profiles
 * @param {Object} req - http.ServerRequest
 * @param {Object} res - http.ServerResponse
 */
function getAll(req, res) {
    const profilesPromise = actions.getAll();
    
    profilesPromise.then(profiles => {
        if (profiles === undefined) {
            return res.status(404).send();
        } else {
            return res.status(200).send(profiles);
        }   
    });
}

/**
 * Retrive a profile by id. If the profile is not found 404 will be returned
 * @param {Object} req - http.ServerRequest 
 * @param {Object} res - http.ServerResponse 
 */
function getById(req, res) {
    const profileId = parseInt(req.params.id); 
    const profilePromise = actions.getById(profileId);

    profilePromise.then(profile => {
        if (profile === null) {
            return res.status(404).send();
        } else {
            return res.status(200).send(profile);
        }    
    });
}

/**
 * Creates a profile and returns a JSON  
 * @param {Object} req - http.ServerRequest
 * @param {Object} res - http.ServerResponse 
 */
function postProfile(req, res) {
    const profilePromise = actions.postProfile(req.body);

    profilePromise.then(profile => {
        return res.status(200).send(profile);
    });
}

/**
 * Updates a profile and returns
 * @param {Object} req - http.ServerRequest
 * @param {Object} res - http.ServerResponse
 */
function updateById(req, res) {
    const profileId = parseInt(req.params.id); 
    const profilePromise = actions.updateById(profileId, req.body);

    profilePromise.then(profile => {
        return res.status(204).send(profile);
    });
}

/**
 * Deletes a role by Id and returns 204
 * @param {Object} req - http.ServerRequest
 * @param {Object} res - http.ServerResponse
 */
function deleteById(req, res) {
    const profileId = parseInt(req.params.id); 
    const profilePromise = actions.deleteById(profileId);

    profilePromise.then(() => {
        return res.status(204).send();
    });
}

function assingUsers(req, res) {
    const profileId = parseInt(req.params.id);
    const usersId = req.body;
    const profilePromise = actions.getById(profileId);
    
    const assignPromise = profilePromise.then(profile => {
        return actions.assingUsersToProfile(profile, usersId);
    });

    return assignPromise.then(() => {
        return res.status(200).send();
    });
}
