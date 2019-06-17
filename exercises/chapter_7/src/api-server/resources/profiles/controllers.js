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
  return models.Profile.findAll(
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
      res.status(500).send();
    });
}

function getProfileById(req, res) {
  return models.Profile.findByPk(
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
      res.status(500).send();
    });
}

function createProfile(req, res) {
  return models.Profile.create({
    name: req.body.name,
    description: req.body.description
  })
    .then(data => {
      res.status(201).send(data);
    })
    .catch(err => {
      res.status(400).send();
    });
}

function modifyProfile(req, res) {
  return models.Profile.update(req.body, {
    where: { id: req.params.id }
  })
    .then(idProfileModified => {
      if (!!idProfileModified) {
        res.status(200).send(idProfileModified);
      } else {
        res.status(404).send({ msg: "profile not found" });
      }
    })
    .catch(err => {
      res.status(500).send();
    });
}

function deleteProfile(req, res) {
  return models.Profile.destroy({ where: { id: req.params.id } })
    .then(data => {
      if (!!data) {
        res.status(204).send({});
      } else {
        res.status(404).send({ msg: "profile not found" });
      }
    })
    .catch(err => {
      res.status(500).send();
    });
}

function addUsers(req, res) {
  return models.Profile.update(req.body.Users, { where: { id: req.params.id } })
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(500).send();
    });
}
