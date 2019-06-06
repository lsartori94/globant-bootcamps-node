"use strict";
const Joi = require("joi");
const userMock = require("../../../test-hepers/users");

module.exports = {
  v1: {
    validateGetAllUsers,
    validateUserID
  }
};

function validateUserID(req, res) {
  console.log("validating");
  const schema = Joi.object().keys({
    id: Joi.number()
      .min(1)
      .max(userMock.ALL_USERS.length)
      .required()
  });
  Joi.validate({ id: req.params.id }, schema, err => {
    if (err) {
      console.log("validation failure");
      res.status(422).send({
        message: `Invalid request! ${req.params.id} is not a valid ID`
      });
    }
  });
  return userMock.ALL_USERS[req.params.id - 1];
}

function validateGetAllUsers(req, res) {
  console.log("validating");
  const schema = Joi.object().keys({
    length: Joi.number().min(1)
  });
  Joi.validate({ length: userMock.ALL_USERS.length }, schema, err => {
    if (err) {
      console.log("validation failure");
      res.status(404).send({
        message: "No users found!"
      });
    }
  });
  return userMock.ALL_USERS;
}
