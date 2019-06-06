const _ =require('lodash');
const rolesMock = require('../../../test-helpers/roles');

module.exports={
    rolById: rolById,
    getAllRoles: getAllRoles
}


/**
 * Returns an array with all roles
 */
function getAllRoles() {
    return rolesMock.ALL_ROLES;
}

/**
 * Returns a single role by his Id 
 * @param {*} id 
 */
function rolById(id) {
    var role= _.find(rolesMock.ALL_ROLES, function(u){return u.id ==id });
    if (role) {
        return {
            role: role,
            res: 200
        }
    } else {
        return {
            role: "Role doesn't exists",
            res: 404
        }

    }
   
}