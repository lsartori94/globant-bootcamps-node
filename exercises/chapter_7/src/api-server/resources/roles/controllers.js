/*! Copyright Globant. All rights reserved. */
"use strict";

const models = require("../../models");
const _ = require("lodash");

module.exports = {
	v1: {
		// Initial version
		getAll: getAll,
		getRoleById: getRoleById,
		createRole: createRole,
		deleteRole: deleteRole
	}
};

/////////////////////////////////////////////////////////////

/**
 * Retrieve all Roles
 * @param {Object} req - http.ServerRequest
 * @param {Object} res - http.ServerResponse
 */
function getAll(req, res) {
	models.Role.findAll({})
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
	models.Role.findByPk(req.params.roleId)
		.then(role => {
			if (role) {
				res.status(200).send(role);
			} else {
				res.status(404).send({ msg: "Role doesn't exists" });
			}
		})
		.catch(err => {
			res.status(404).send(err);
		});
}

function createRole(req, res) {
	models.Role.create({
		name: req.body.name
	})
		.then(succes => {
			res.status(200).send("Role created");
		})
		.catch(err => {
			res.status(502).send(err);
		});
}

function deleteRole(req, res) {
    models.Role.findByPk(req.params.roleId)
    .then(role => {
        if(role){
            role.destroy()
            .then(succes => {
				res.status(200).send("Role destroyed");
			})
			.catch(err => {
				res.status(502).send(err);
            });
        }else{
    			res.status(404).send("RoleId does't exists");
        }
    })
    .catch(err => {
				res.status(502).send(err);
            });
            
}
