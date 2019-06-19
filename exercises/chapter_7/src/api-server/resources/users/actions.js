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

function getAll() {
    return models.User.findAll();
}

function getUserById(userId) {
    return models.User.findByPk(userId)
}

function createUser(user) {
    return models.User.create({
        name: user.name,
        lastname: user.lastname,
        password: user.password,
        email: user.email,
        ProfileId: user.ProfileId
    })
}

function deleteUser(userId) {
    return getUserById(userId).then(user => {
        if (!!user) {
            user.destroy();
            return "User destroyed"
         }
    })

}

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