/*! Copyright Globant. All rights reserved. */

const _ = require("lodash");
const actions = require("./actions");

module.exports = {
	v1: {
		// Initial version
		getAll: getAll,
		getUserById: getUserById,
		createUser: createUser,
		deleteUser: deleteUser,
		updateUser: updateUser
	}
};

/////////////////////////////////////////////////////////////

/**
 * Retrieve all users
 * @param {Object} req - http.ServerRequest
 * @param {Object} res - http.ServerResponse
 */
function getAll(req, res) {
	return actions.v1.getAll()
		.then(users => {
			 res.status(200).send(users);
		}).catch(err => {
			res.status(500).send(err);
		})
}

/**
 * Returns a single user finded by his id
 * @param {Object} req
 * @param {Object} res
 */
function getUserById(req, res) {
	return actions.v1.getUserById(req.params.userId)
		.then(user => {
			if (!!user) {
				res.status(200).send(user);
			} else {
				res.status(404).send({ msg: "User doesn't exists" });
			}
		})
		.catch(err => {
			res.status(500).send(err);
		});
}

function createUser(req, res) {
	return actions.v1.createUser(req.body)
		.then(() => {
			res.status(200).send("User created");
		})
		.catch(err => {
			res.status(500).send(err);
		});
}

function updateUser(req, res) {
	return actions.v1.updateUser(req.params.userId, req.body)
		.then(user => {
			if (!!user) {
				res.status(200).send(user);
			} else {
				res.status(404).send("User doesnt exists")
			}
		})
		.catch(err => {
			res.status(500).send(err);
		});

}

function deleteUser(req, res) {
	return actions.v1.deleteUser(req.params.userId)
		.then((user) => {
			if (!!user) {
				res.status(200).send("User destroy");
			} else {
				res.status(404).send("User doesnt exists")
			}
		})
		.catch(err => {
			res.status(500).send(err);
		});

}



