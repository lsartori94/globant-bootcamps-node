const models = require("../../models");

module.exports = {
	v1: {
		// Initial version
		getAll: getAll,
		getProfileById: getProfileById,
		createProfile: createProfile,
		deleteProfile: deleteProfile,
		updateProfile: updateProfile
	}
};

/**
 * returns all the roles
 */
function getAll(){
	return models.Profile.findAll();
}

/**
 * returns a profile by his id
 * @param {int} profileId 
 */
function getProfileById(profileId){
    return models.Profile.findByPk(profileId)
}

/**
 * Creates a profile by the data of the json param
 * @param {json} profile 
 */
function createProfile(profile){
    return models.Profile.create({
        name: profile.name,
        description: profile.description
	})
}

/**
 * Delete a profile
 * @param {int} profileId 
 */
function deleteProfile(profileId){
    return getProfileById(profileId).then(profile => {
        if (!!profile) {
            profile.destroy();
            return "User destroyed"
         }
    })

}

/**
 * Updates a profile found by id
 * @param {int} profileId 
 * @param {json} profileBody 
 */
function updateProfile(profileId, profileBody){
    return getProfileById(profileId).then(profile => {
        return profile.update({
            name: profileBody.name,
            description: profileBody.description
        }, { omitNull: true })
    })

}
