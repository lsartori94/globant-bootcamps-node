const models = require("../../models");

module.exports = {
    v1: {
        // Initial version
        getAll: getAll,
        getUserById: getUserById,
        createUser: createUser,
        deleteUser: deleteUser,
        updateUser: updateUser
    }
};

/**
 * returns all the users
 */
function getAll() {
    return models.User.findAll();
}

/**
 * returns a user by his id
 * @param {int} userId 
 */
function getUserById(userId) {
    return models.User.findByPk(userId)
}

/**
 * Creates a user by the data of the json param
 * @param {json} user 
 */
function createUser(user) {
    return models.User.create({
        name: user.name,
        lastname: user.lastname,
        password: user.password,
        email: user.email,
        ProfileId: user.ProfileId
    })
}

/**
 * Delete a user
 * @param {int} userId 
 */
function deleteUser(userId) {
    return getUserById(userId).then(user => {
        if (!!user) {
            user.destroy();
            return "User destroyed"
         }
    })

}

/**
 * Updates a user found by id
 * @param {int} userId 
 * @param {json} userBody 
 */
function updateUser(userId, userBody) {
    return getUserById(userId).then(user => {
        return user.update({
            name: user.name,
            lastname: user.lastname,
            password: user.password,
            email: user.email,
            ProfileId: user.ProfileId
        }, { omitNull: true })
    })
}