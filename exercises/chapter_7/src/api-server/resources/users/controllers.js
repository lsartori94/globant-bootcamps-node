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
  models.User.findAll({
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
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(400).send();
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
    ProfileId: req.body.ProfileId
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
  models.User.findByPk(req.params.id)
    .then(user => {
      models.User.update(req.body, { where: { id: user.dataValues.id } })
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
