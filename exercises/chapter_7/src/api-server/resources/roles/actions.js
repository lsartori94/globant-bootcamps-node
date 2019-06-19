const models = require("../../models");

module.exports = {
	v1: {
		// Initial version
		getAll: getAll,
		getRoleById: getRoleById,
		createRole: createRole,
		deleteRole: deleteRole,
		updateRole: updateRole
	}
};

/**
 * returns all the roles
 */
function getAll(){
	return models.Role.findAll();
}

/**
 * returns a role by his id
 * @param {int} roleId 
 */
function getRoleById(roleId){
    return models.Role.findByPk(roleId)
}

/**
 * Creates a role by the data of the json param
 * @param {json} role 
 */
function createRole(role){
    return models.Role.create({
		name: role.name
	})
}

/**
 * Delete a role
 * @param {int} roleId 
 */
function deleteRole(roleId){
    return getRoleById(roleId).then(role => {
        if (!!role) {
            role.destroy();
            return "User destroyed"
         }
    })

}

/**
 * Updates a role found by id
 * @param {int} roleId 
 * @param {json} roleBody 
 */
function updateRole(roleId, roleBody){
    return getRoleById(roleId).then(role => {
        return role.update({
            name: roleBody.name
        }, { omitNull: true })
    })

}