'use strict';

const roleMock = require('../../../test-helpers/roles');


/**
 * Retrieves a role by id. Returns a role object or undefined
 * (if the role is not found)
 * @param {Integer} roleId - Desired role's id
 */
function getById(roleId) {
    const filterRole = roleMock.ALL_ROLES.filter(elementRole => {
        return (elementRole.id === roleId);
    });
    return filterRole[0];
}

module.exports = {
    getById: getById
}
