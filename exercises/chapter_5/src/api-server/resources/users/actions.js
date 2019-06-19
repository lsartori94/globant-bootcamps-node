'use strict';

const userMock = require('../../../test-helpers/users');


/**
 * Retrieves a user by id. Returns a user object or undefined
 * (if the user is not found)
 * @param {Integer} userId - Desired user's id
 */
function getById(userId) {
    const filterUser = userMock.ALL_USERS.filter(elementUser => {
        return (elementUser.id === userId);
    });
    return filterUser[0];
}

module.exports = {
    getById: getById
}
