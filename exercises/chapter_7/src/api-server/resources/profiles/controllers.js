/*! Copyright Globant. All rights reserved. */
"use strict";

const models = require("../../models");

module.exports = {
  v1: {
    // Initial version
    getAll,
    getProfileById,
    createProfile,
    modifyProfile,
    deleteProfile,
    addUsers
  }
};

/////////////////////////////////////////////////////////////

/**
 * Retrieve all users
 * @param {Object} req - http.ServerRequest
 * @param {Object} res - http.ServerResponse
 */
function getAll(req, res) {
  models.Profile.findAll(
    {
      include: [
        {
          model: models.User,
          attributes: { exclude: ["id"] }
        }
      ]
    },
    { attributes: { exclude: ["id"] } }
  )
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(404).send();
    });
}

function getProfileById(req, res) {
  models.Profile.findByPk(
    req.params.id,
    {
      include: [
        {
          model: models.User,
          attributes: { exclude: ["id"] }
        }
      ]
    },
    { attributes: { exclude: ["id"] } }
  )
    .then(data => {
      if (!!data) {
        res.status(200).send(data);
      } else {
        res.status(404).send();
      }
    })
    .catch(err => {
      res.status(400).send();
    });
}

function createProfile(req, res) {
  models.Profile.create({
    name: req.body.name,
    description: req.body.description
  })
    .then(data => {
      if (!!data) {
        res.status(201).send(data);
      } else {
        res.status(400).send();
      }
    })
    .catch(err => {
      res.status(400).send();
    });
}

function modifyProfile(req, res) {
  models.Profile.findByPk(req.params.id)
    .then(profile => {
      models.Profile.update(req.body, { where: { id: profile.dataValues.id } })
        .then(data => {
          res.status(200).send();
        })
        .catch(err => {
          res.status(400).send();
        });
    })
    .catch(err => {
      res.status(404).send();
    });
}

function deleteProfile(req, res) {
  models.Profile.findByPk(req.params.id)
    .then(profile => {
      profile
        .destroy()
        .then(data => {
          res.status(204).send();
        })
        .catch(err => {
          res.status(400).send();
        });
    })
    .catch(err => {
      res.status(404).send();
    });
}

function addUsers(req, res) {
  models.Profile.update(req.body.Users, { where: { id: req.params.id } })
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(400).send(err);
    });
}
