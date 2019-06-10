/*! Copyright Globant. All rights reserved. */
"use strict";

const models = require("../../models");
const _ = require("lodash");

module.exports = {
	v1: {
		// Initial version
		getAll: getAll,
		getProfileById: getProfileById,
		createProfile: createProfile,
		deleteProfile: deleteProfile,
		updateProfile: updateProfile
	}
};

/**
 * Retrieve all profiles
 * @param {Object} req - http.ServerRequest
 * @param {Object} res - http.ServerResponse
 */
function getAll(req, res) {
	models.Profile.findAll({})
		.then(profiles => {
			res.status(200).send(profiles);
		})
		.catch(err => {
			res.status(404).send(err);
		});
}

/**
 * Returns a single profile finded by his id
 * @param {Object} req
 * @param {Object} res
 */
function getProfileById(req, res) {
	models.Profile.findByPk(req.params.profileId)
		.then(profile => {
			if (profile) {
				res.status(200).send(profile);
			} else {
				res.status(404).send({ msg: "Profile doesn't exists" });
			}
		})
		.catch(err => {
			res.status(404).send(err);
		});
}

function createProfile(req, res) {
	models.Profile.create({
		name: req.body.name,
		description: req.body.description
	})
		.then(succes => {
			res.status(200).send("Profile created");
		})
		.catch(err => {
			res.status(502).send(err);
		});
}

function updateProfile(req, res) {
	models.Profile.findByPk(req.params.profileId)
		.then(profile => {
			if (profile) {
				profile.update({
					name: req.body.name,
					description: req.body.description
				}, { omitNull: true }).then(succes => {
					res.status(200).send(profile)
				}).catch(err => {
					res.status(502).send(err);
				});
			} else {
				res.status(404).send("profileId does't exists");
			}
		}).catch(err => {
			res.status(502).send(err);
		})
}

function deleteProfile(req, res) {
	models.Profile.findByPk(req.params.profileId)
		.then(profile => {
			if (profile) {
				profile.destroy()
					.then(succes => {
						res.status(200).send("Profile destroyed");
					})
					.catch(err => {
						res.status(502).send(err);
					});
			} else {
				res.status(404).send("ProfileId does't exists");
			}
		})
		.catch(err => {
			res.status(502).send(err);
		});

}

