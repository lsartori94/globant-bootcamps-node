'use strict';

const models = require('../../models');


/**
 * Retrieves all profiles.
 */
function getAll() {
    return models.Profile.findAll();
}

/**
 * Retrieves a profile by id. Returns a profile object or undefined
 * (if the profile is not found)
 * @param {Integer} profileId - Desired profile's id
 */
function getById(profileId) {
    return models.Profile.findByPk(profileId);
}

/**
 * Create a profile
 * @param {Object} reqData - Data for a new profile
 */
function postProfile(reqData) {
    return models.Profile.create(reqData);
}

/**
 * Updte a profile by ID
 * @param {Integer} profileId - Desired profile's id for the update
 * @param {Object} reqData - New data for the update
 */
function updateById(profileId, reqData) {
    const profilePromise = getById(profileId);

    return profilePromise.then(profile => {
        return profile.update(reqData);
    });    
}

/**
 * Delete a profile by id.
 * @param {Integer} profileId - profile's id
 */
function deleteById(profileId) {
    const profilePromise = getById(profileId);

    return profilePromise.then(profile => {
        return profile.destroy({force: true});
    });
}

module.exports = {
    getAll: getAll,
    getById: getById,
    postProfile: postProfile,
    updateById: updateById,
    deleteById: deleteById,
} 
