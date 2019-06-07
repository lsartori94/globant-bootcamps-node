/*! Copyright Globant. All rights reserved. */
"use strict";

const _ = require("lodash");
const actions = require("./actions");
const userMock = require("../../../test-helpers/users");
const Joi = require("joi");

module.exports = {
  v1: {
    // Initial version

    getAll,
    getUser,
    validateID
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

function getUser(req, res) {
  console.log("processing user ID");
  res
    .status(200)
    .send();
}

function validateID(req, res, next) {
  const schema = Joi.object().keys({
    id: Joi
      .number()
      .min(1)
      .max(userMock.ALL_USERS.length)
      .required()
  });
  Joi.validate({ id: req.params.id }, schema, (err, value) => {
    if (err) {
      res.status(422).send({
        message: `Invalid request! ${req.params.id} is not a valid ID`
      });
    } else {
      console.log("validation success");
      next();
    }
  });
}
