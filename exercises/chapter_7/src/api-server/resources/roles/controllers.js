/*! Copyright Globant. All rights reserved. */
"use strict";

const actions = require("./actions");

module.exports = {
  v1: {
    // Initial version
    getAll,
    getRoleById,
    createRole,
    modifyRole,
    deleteRole
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
    .getAllRoles()
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(500).send();
    });
}

function getRoleById(req, res) {
  return actions
    .getRoleById(req.params)
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

function createRole(req, res) {
  return actions
    .createRole(req)
    .then(data => {
      res.status(201).send(data);
    })
    .catch(err => {
      res.status(400).send();
    });
}

function modifyRole(req, res) {
  return actions
    .modifyRole(req)
    .then(modified => {
      if (!!modified) {
        res.status(200).send(modified);
      } else {
        res.status(404).send({ msg: "role not found" });
      }
    })
    .catch(err => {
      res.status(400).send();
    });
}

function deleteRole(req, res) {
  return actions
    .deleteRole(req.params)
    .then(data => {
      if (!!data) {
        res.status(204).send();
      } else {
        res.status(404).send({ msg: "role not found" });
      }
    })
    .catch(err => {
      res.status(500).send();
    });
}
