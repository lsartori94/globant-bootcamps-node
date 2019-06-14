'use strict';

const models = require('../../models');


/**
 * Retrieves all users
 */
function getAll() {
    return models.User.findAll();
}

/**
 * Retrieves a user by id. Returns a user object or undefined
 * (if the user is not found)
 * @param {Integer} userId - Desired user's id
 */
function getById(userId) {
    return models.User.findByPk(userId);
}

/**
 * Create a user
 * @param {*} reqData 
 */
function postUser(reqData) {
    return models.User.create(reqData);
}

/**
 *  Update a user by ID
 * @param {Integer} userId 
 * @param {Object} reqData 
 */
function updateById(userId, reqData) {
    const userPromise = getById(userId);
    
    return userPromise.then(user => {
        return user.update(reqData);
    }); 
}

module.exports = {
    getAll: getAll,
    getById: getById,
    postUser: postUser,
    updateById: updateById,

}
