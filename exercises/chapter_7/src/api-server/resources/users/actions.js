'use strict';

const models = require('../../models');

/**
 * Retrieves all users
 */
function getAll() {
    let allUsers = [];

    models.User.findAll().then(users => {
        allUsers = users;
    });
    return allUsers;
}

/**
 * Retrieves a user by id. Returns a user object or undefined
 * (if the user is not found)
 * @param {Integer} userId - Desired user's id
 */
function getById(userId) {
    models.User.findByPk(userId).then(user => {
        return user;
    });
}

module.exports = {
    getById: getById,
    getAll: getAll
}
