/*! Copyright Globant. All rights reserved. */
"use strict";

const actions = require("./actions");

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
  return actions
    .getAllUsers()
    .then(users => {
      res.status(200).send(users);
    })
    .catch(error => {
      res.status(500).send();
    });
}

function getUserByID(req, res) {
  return actions
    .getUserById(req.params)
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
  return actions
    .createUser(req)
    .then(data => {
      res.status(201).send(data);
    })
    .catch(err => {
      res.status(400).send();
    });
}

function modifyUser(req, res) {
  return actions
    .modifyUser(req)
    .then(modified => {
      if (!!modified) {
        res.status(200).send(modified);
      } else {
        res.status(404).send({ msg: "user not found" });
      }
    })
    .catch(err => {
      res.status(500).send();
    });
}

function deleteUser(req, res) {
  return actions
    .deleteUser(req.params)
    .then(user => {
      if (!!user) {
        res.status(204).send();
      } else {
        res.status(404).send({ msg: "user not found" });
      }
    })
    .catch(err => {
      res.status(500).send();
    });
}
