/*! Copyright Globant. All rights reserved. */
"use strict";

const config = require("../../core/config");
const roles = require("./controllers");
const validator = require("./actions");

module.exports = function initRoutes(app) {
	// Roles resource base route
	const basePath = config.basePath + "/roles";

	//console.log(basePath);
	app.get(basePath, roles.v1.getAll);

	//Path for a single role
	app.get(basePath + "/:roleId", validator.v1.validateId, roles.v1.getRoleById);

	//Path for posting a role
	app.post(basePath, validator.v1.validateBodyPost, roles.v1.createRole);

	//Path for updating role
	app.put(basePath + "/:roleId", validator.v1.validateId, validator.v1.validateBodyPut, roles.v1.updateRole);

	//Path for a deleting a role
	app.delete(basePath + "/:roleId", validator.v1.validateId, roles.v1.deleteRole);
};
