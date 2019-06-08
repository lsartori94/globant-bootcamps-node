/*! Copyright Globant. All rights reserved. */
"use strict";

const actions = require("./actions");
const models = require("../../models");

module.exports = {
  v1: {
    // Initial version

    getAll,
    getUserByID,
    createUser
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
        model: models.Profile     //exclude ID from profile!
      }
    ],
    attributes: {
      exclude: ["password", "id", "ProfileId"]
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
    name: req.body.name,
    lastname: req.body.lastname,
    username: req.body.username,
    password: req.body.password,
    email: req.body.lastname,
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
