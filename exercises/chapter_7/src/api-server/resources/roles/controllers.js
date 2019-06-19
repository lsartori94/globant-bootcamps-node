/*! Copyright Globant. All rights reserved. */

const _ = require("lodash");
const actions = require("./actions");

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
	return actions.v1.getAll()
		.then(roles => {
			 res.status(200).send(roles);
		}).catch(err => {
			res.status(500).send(err);
		})
}

/**
 * Returns a single role finded by his id
 * @param {Object} req
 * @param {Object} res
 */
function getRoleById(req, res) {
	return actions.v1.getRoleById(req.params.roleId)
		.then(role => {
			if (!!role) {
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
	return actions.v1.createRole(req.body)
		.then(() => {
			res.status(200).send("Role created");
		})
		.catch(err => {
			res.status(500).send(err);
		});
}

function updateRole(req, res) {
	return actions.v1.updateRole(req.params.roleId, req.body)
		.then(role => {
			if (!!role) {
				res.status(200).send(role);
			} else {
				res.status(404).send("Role doesnt exists")
			}
		})
		.catch(err => {
			res.status(500).send(err);
		});

}

function deleteRole(req, res) {
	return actions.v1.deleteRole(req.params.roleId)
		.then((role) => {
			if (!!role) {
				res.status(200).send("Role destroy");
			} else {
				res.status(404).send("Role doesnt exists")
			}
		})
		.catch(err => {
			res.status(500).send(err);
		});

}
