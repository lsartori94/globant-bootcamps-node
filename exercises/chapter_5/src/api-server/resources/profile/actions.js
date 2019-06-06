'use strict';

 const profileMock = require('../../../test-helpers/profiles');


/**
 * Retrieves a profile by id. Returns a profile object or undefined
 * (if the profile is not found)
 * @param {Integer} profileId - Desired profile's id
 */
function getById(profileId) {
    const filterProfile = profileMock.ALL_PROFILES.filter(elementProfile => {
        return (elementProfile.id === profileId);
    });
    return filterProfile[0];
}

module.exports = {
    getById: getById
} 
