'use strict';

const models = require('../../models');


/**
 * Retrieves all roles.
 */
function getAll() {
    let allRoles = [];
    models.Role.findAll().then(roles => {
        allRoles = roles;
    });
    return allRoles;
}

/**
 * Retrieves a role by id. Returns a role object or undefined
 * (if the role is not found)
 * @param {Integer} roleId - Desired role's id
 */
function getById(roleId) {
    models.Role.findByPk(roleId).then(role => {
        return role;
    });
}

module.exports = {
    getById: getById,
    getAll: getAll
}
