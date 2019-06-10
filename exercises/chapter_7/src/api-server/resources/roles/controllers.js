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
  models.Role.findAll({
    attributes: {
      exclude: ["id"]
    }
  })
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(400).send();
    });
}

function getRoleById(req, res) {
  models.Role.findByPk(req.params.id, {
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
      res.status(400).send();
    });
}

function createRole(req, res) {
  models.Role.create({
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
  models.Role.findByPk(req.params.id)
    .then(role => {
      models.Role.update(req.body,{where: {id: role.dataValues.id}})
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

function deleteRole(req, res) {
  models.Role.findByPk(req.params.id)
    .then(role => {
      role
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
