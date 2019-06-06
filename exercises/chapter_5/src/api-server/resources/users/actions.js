const _ = require('lodash');
const userMock = require('../../../test-helpers/users');

module.exports = {
    userById: userById,
    getAllUsers: getAllUsers
}
/**
 * Returns an array with all users
 */
function getAllUsers() {
    return userMock.ALL_USERS;
}

/**
 * Returns a single user found by Id
 * @param {int} id 
 */
function userById(id) {
    let user = _.find(userMock.ALL_USERS, function (u) { return u.id == id });
    if (user) {
        return {
            user: user,
            res: 200
        }
    } else {
        return {
            user: "User doesn't exists",
            res: 404
        }

    }

}