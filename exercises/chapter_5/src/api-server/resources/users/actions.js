"use strict";
const Joi = require("joi");
const userMock = require("../../../test-hepers/roles");

module.exports = {
  v1: {
    validateGetAllUsers,
    validateUserID
  }
};

function validateUserID(req, res, next) {
  console.log("validating");
  const schema = Joi.object().keys({
    id: Joi.number()
      .min(1)
      .max(userMock.ALL_ROLES.length)
      .required()
  });
  Joi.validate({ id: req.params.id }, schema, err => {
    if (err) {
      console.log("validation failure");
      res.status(422).send({
        message: `Invalid request! ${req.params.id} is not a valid ID`
      });
    }
    next();
  });
}

function validateGetAllUsers(req, res, next) {
  console.log("validating");
  const schema = Joi.object().keys({
    length: Joi.number().min(1)
  });
  Joi.validate({ length: userMock.ALL_ROLES.length }, schema, err => {
    if (err) {
      console.log("validation failure");
      res.status(404).send();
    }
    next();
  });
}
