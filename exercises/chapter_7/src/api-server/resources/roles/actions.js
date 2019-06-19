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

function getAll(){
	return models.Role.findAll();
}

function getRoleById(roleId){
    return models.Role.findByPk(roleId)
}

function createRole(role){
    return models.Role.create({
		name: role.name
	})
}

function deleteRole(roleId){
    return getRoleById(roleId).then(role => {
        if (!!role) {
            role.destroy();
            return "User destroyed"
         }
    })

}

function updateRole(roleId, roleBody){
    return getRoleById(roleId).then(role => {
        return role.update({
            name: roleBody.name
        }, { omitNull: true })
    })
}