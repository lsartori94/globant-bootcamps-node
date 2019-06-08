/*! Copyright Globant. All rights reserved. */
"use strict";

const _ = require("lodash");
const actions = require("./actions");
const models = require("../../models");

module.exports = {
  v1: {
    // Initial version
    getAll,
    createProfile
  }
};

/////////////////////////////////////////////////////////////

/**
 * Retrieve all users
 * @param {Object} req - http.ServerRequest
 * @param {Object} res - http.ServerResponse
 */
function getAll(req, res) {
  res.status(200).send(userMock.ALL_USERS);
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
