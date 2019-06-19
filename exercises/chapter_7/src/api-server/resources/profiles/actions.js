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

function getAll(){
	return models.Profile.findAll();
}

function getProfileById(profileId){
    return models.Profile.findByPk(profileId)
}

function createProfile(profile){
    return models.Profile.create({
        name: profile.name,
        description: profile.description
	})
}

function deleteProfile(profileId){
    return getProfileById(profileId).then(profile => {
        if (!!profile) {
            profile.destroy();
            return "User destroyed"
         }
    })

}

function updateProfile(profileId, profileBody){
    return getProfileById(profileId).then(profile => {
        return profile.update({
            name: profileBody.name,
            description: profileBody.description
        }, { omitNull: true })
    })

}
