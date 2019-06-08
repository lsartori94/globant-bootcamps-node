'use strict';


const models = require('../../models');

/**
 * Retrieves a profile by id. Returns a profile object or undefined
 * (if the profile is not found)
 * @param {Integer} profileId - Desired profile's id
 */
function getById(profileId) {
    models.Profile.findByPk(profileId).then(profile => {
        return profile;    
    });
}

module.exports = {
    getById: getById
} 
