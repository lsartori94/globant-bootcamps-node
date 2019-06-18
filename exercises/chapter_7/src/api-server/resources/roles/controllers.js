/*! Copyright Globant. All rights reserved. */

const models = require("../../models");
const _ = require("lodash");

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

/////////////////////////////////////////////////////////////

/**
 * Retrieve all Roles
 * @param {Object} req - http.ServerRequest
 * @param {Object} res - http.ServerResponse
 */
function getAll(req, res) {
	return models.Role.findAll({})
		.then(roles => {
			res.status(200).send(roles);
		})
		.catch(err => {
			res.status(404).send(err);
		});
}

/**
 * Returns a single role finded by his id
 * @param {Object} req
 * @param {Object} res
 */
function getRoleById(req, res) {
	return models.Role.findByPk(req.params.roleId)
		.then(role => {
			if (role) {
				res.status(200).send(role);
			} else {
				res.status(404).send({ msg: "Role doesn't exists" });
			}
		})
		.catch(err => {
			res.status(500).send(err);
		});
}

function createRole(req, res) {
	return models.Role.create({
		name: req.body.name
	})
		.then(() => {
			res.status(200).send("Role created");
		})
		.catch(err => {
			res.status(500).send(err);
		});
}

function updateRole(req, res) {
	return models.Role.findByPk(req.params.roleId).then(role => {
		if (role) {
			role.update({
				name: req.body.name
			}, { omitNull: true }).then(succes => {
				res.status(200).send(role)
			});
		} else {
			res.status(404).send("roleId does't exists");
		}
	}).catch(err => {
		res.status(500).send(err);
	})
}

function deleteRole(req, res) {
	return models.Role.findByPk(req.params.roleId)
		.then(role => {
			if (role) {
				role.destroy()
					.then(succes => {
						res.status(200).send("Role destroyed");
					});
			} else {
				res.status(404).send("RoleId does't exists");
			}
		})
		.catch(err => {
			res.status(500).send(err);
		});

}
