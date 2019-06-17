/*! Copyright Globant. All rights reserved. */
"use strict";

const models = require("../../models");

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
  return models.Role.findAll({
    attributes: {
      exclude: ["id"]
    }
  })
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(500).send();
    });
}

function getRoleById(req, res) {
  return models.Role.findByPk(req.params.id, {
    attributes: {
      exclude: ["id"]
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

function createRole(req, res) {
  return models.Role.create({
    name: req.body.name
  })
    .then(data => {
      res.status(201).send(data);
    })
    .catch(err => {
      res.status(400).send();
    });
}

function modifyRole(req, res) {
  return models.Role.update(req.body, { where: { id: req.params.id } })
    .then(idRoleModified => {
      if (!!idRoleModified) {
        res.status(200).send(idRoleModified);
      } else {
        res.status(404).send({ msg: "role not found" });
      }
    })
    .catch(err => {
      res.status(400).send();
    });
}

function deleteRole(req, res) {
  return models.Role.destroy({ where: { id: req.params.id } })
    .then(data => {
      if (!!data) {
        res.status(204).send({});
      } else {
        res.status(404).send({ msg: "role not found" });
      }
    })
    .catch(err => {
      res.status(500).send();
    });
}
