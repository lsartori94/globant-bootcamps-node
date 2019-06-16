/*! Copyright Globant. All rights reserved. */
"use strict";

const models = require("../../models");

module.exports = {
  v1: {
    // Initial version

    getAll,
    getUserByID,
    createUser,
    modifyUser,
    deleteUser
  }
};

/////////////////////////////////////////////////////////////

/**
 * Retrieve all users
 * @param {Object} req - http.ServerRequest
 * @param {Object} res - http.ServerResponse
 */
function getAll(req, res) {
  return models.User.findAll({
    include: [
      {
        model: models.Profile,
        attributes: { exclude: ["id"] }
      }
    ],
    attributes: {
      exclude: ["password", "id", "ProfileId"]
    }
  })
    .then(users => {
      res.status(200).send(users);
    })
    .catch(error => {
      res.status(500).send();
    });
}

function getUserByID(req, res) {
  return models.User.findByPk(req.params.id, {
    include: [
      {
        model: models.Profile,
        attributes: { exclude: ["id"] }
      }
    ],
    attributes: {
      exclude: ["password", "ProfileId", "id"]
    }
  })
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

function createUser(req, res) {
  return models.User.create(req.body)
    .then(data => {
      res.status(201).send(data);
    })
    .catch(err => {
      res.status(400).send();
    });
}

function modifyUser(req, res) {
  return models.User.update(req.body, { where: { id: req.params.id } })
    .then(idUserModified => {
      if (!!idUserModified) {
        res.status(200).send(idUserModified);
      } else {
        res.status(404).send({ msg: "user not found" });
      }
    })
    .catch(err => {
      res.status(500).send();
    });
}

function deleteUser(req, res) {
  return models.User.destroy(
    { where: { id: req.params.id } },
    { logging: true }
  )
    .then(user => {
      if (!!user) {
        res.status(204).send({});
      } else {
        res.status(404).send({ msg: "user not found" });
      }
    })
    .catch(err => {
      res.status(500).send();
    });
}
