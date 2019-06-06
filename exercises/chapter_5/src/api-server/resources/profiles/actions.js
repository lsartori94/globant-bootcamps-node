const _ =require('lodash');
const profileMock = require('../../../test-helpers/profiles');


module.exports={
    profileById: profileById,
    getAllProfiles: getAllProfiles
}

function getAllProfiles(){
    return profileMock.ALL_PROFILES;
}

/**
 * Find a profile by his Id 
 * @param {number} id 
 */
function profileById(id) {
    let profile= _.find(profileMock.ALL_PROFILES, function(u){return u.id ==id });
    if (profile) {
        return {
            profile: profile,
            res: 200
        }
    } else {
        return {
            profile: "Profile doesn't exists",
            res: 404
        }

    }
   
}