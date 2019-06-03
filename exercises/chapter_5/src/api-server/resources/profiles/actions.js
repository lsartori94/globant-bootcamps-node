module.exports={
    profileById: profileById
}
function profileById(id,profiles) {
    let profile;
    profiles.forEach(function (profileId) {
        if (profileId.id == id) {
            profile = profileId;
        }
    });
    if (profile) {
        return profile;
    } else {
        return "profile doesn't exist"
    }
}