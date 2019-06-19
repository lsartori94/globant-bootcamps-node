/*! Copyright Globant. All rights reserved. */
const models = require('../../models');
const _ = require("lodash");
const actions = require("./actions");

module.exports = {
	v1: {
		// Initial version
		getAll: getAll,
		getProfileById: getProfileById,
		createProfile: createProfile,
		deleteProfile: deleteProfile,
		updateProfile: updateProfile,
		setProfileToUsers: setProfileToUsers
	}
};

/**
 * Retrieve all profiles
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
 * Returns a single profile found by its id
 * @param {Object} req
 * @param {Object} res
 */
function getProfileById(req, res) {
	return actions.v1.getProfileById(req.params.profileId)
		.then(profile => {
			if (!!profile) {
				res.status(200).send(profile);
			} else {
				res.status(404).send({ msg: "Profile doesn't exists" });
			}
		})
		.catch(err => {
			res.status(500).send(err);
		});
}

/**
 * Creates a profile with the data of the body
 * @param {Object} req 
 * @param {Object} res 
 */
function createProfile(req, res) {
	return actions.v1.createProfile(req.body)
		.then(() => {
			res.status(200).send("Profile created");
		})
		.catch(err => {
			res.status(500).send(err);
		});
}

/**
 * Set a profile to a list of users
 * @param {Object} req 
 * @param {Object} res 
 */
function setProfileToUsers(req, res) {
	return models.Profile.findByPk(req.params.profileId)
		.then(profile => {
			if (profile) {
				return models.User.update({ ProfileId: req.params.profileId }, { omitNull: true, where: { id: req.body.usersId } })
					.then(() => {
						res.status(200).send("Users updated");
					})
			}
			else {
				res.status(404).send("profileId does't exists");
			}
		})
		.catch(err=>{
			res.status(500).send("profileId does't exists");
		})
}

/**
 * Updates a profile with the data of the body
 * @param {Object} req 
 * @param {Object} res 
 */
function updateProfile(req, res) {
	return actions.v1.updateProfile(req.params.profileId, req.body)
		.then(profile => {
			if (!!profile) {
				res.status(200).send(profile);
			} else {
				res.status(404).send("Profile doesnt exists")
			}
		})
		.catch(err => {
			res.status(500).send(err);
		});
}

/**
 * Delete a profile by its Id
 * @param {Object} req 
 * @param {Object} res 
 */
function deleteProfile(req, res) {
	return actions.v1.deleteProfile(req.params.profileId)
		.then((profile) => {
			if (!!profile) {
				res.status(200).send("Profile destroy");
			} else {
				res.status(404).send("Profile doesnt exists")
			}
		})
		.catch(err => {
			res.status(500).send(err);
		});

}

