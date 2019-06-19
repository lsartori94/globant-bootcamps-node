'use strict';

const models = require('../../models');


/**
 * Retrieves all roles.
 */
function getAll() {
    return models.Role.findAll();
}

/**
 * Retrieves a role by id. Returns a role object or undefined
 * (if the role is not found)
 * @param {Integer} roleId - Desired role's id
 */
function getById(roleId) {
    return models.Role.findByPk(roleId);
}

/**
 * Create a role
 * @param {Object} reqDate -
 */
function postRole(reqData) {
    return models.Role.create(reqData);
}

/**
 * Update a role by ID
 * @param {Integer} roleId 
 * @param {Object} reqData 
 */
function updateById(roleId, reqData) {
    const rolePromise = getById(roleId);

    return rolePromise.then(role => {
        return role.update(reqData);
    });
}

/**
 * Delete a role by ID
 * @param {Integer} roleId 
 */
function deleteById(roleId) {
    const rolePromise = getById(roleId);

    return rolePromise.then(role => {
        return role.destroy({force: true});
    });
}

module.exports = {
    getAll: getAll,
    getById: getById,
    postRole: postRole,
    updateById: updateById,
    deleteById: deleteById
}
