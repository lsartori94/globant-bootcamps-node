/*! Copyright Globant. All rights reserved. */
"use strict";

const actions = require("./actions");
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
  models.User.findAll({
    attributes: {
      exclude: ["password"]
    }
  })
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(404).send();
    });
}

function getUserByID(req, res) {
  models.User.findByPk(req.params.id, {
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
      res.status(404).send();
    });
}

function createUser(req, res) {
  models.User.create({
    username: req.body.username,
    name: req.body.name,
    lastname: req.body.lastname,
    password: req.body.password,
    email: req.body.email,
    ProfileId: req.body.profile
  })
    .then(data => {
      if (!!data) {
        res.status(201).send(data);
      } else {
        res.status(400).send();
      }
    })
    .catch(err => {
      res.status(404).send(err);
    });
}

function modifyUser(req, res) {
  models.User.update(req.body, { where: { id: req.params.id }, limit: 1 })
    .then(data => {
      res.status(200).send();
    })
    .catch(err => {
      res.status(400).send();
    });
}

function deleteUser(req, res) {
  models.User.findByPk(req.params.id)
    .then(user => {
      user
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
