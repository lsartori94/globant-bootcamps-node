"use strict";
const Joi = require("joi");
const rolesMock = require("../../../test-hepers/roles");

module.exports = {
  v1: {
    validateGetAllRoles,
    validateRoleID
  }
};

function validateRoleID(req, res) {
  console.log("validating");
  const schema = Joi.object().keys({
    id: Joi.number()
      .min(1)
      .max(rolesMock.ALL_ROLES.length)
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
  return rolesMock.ALL_ROLES[req.params.id - 1];
}

function validateGetAllRoles(req, res) {
  console.log("validating");
  const schema = Joi.object().keys({
    length: Joi.number().min(1)
  });
  Joi.validate({ length: rolesMock.ALL_ROLES.length }, schema, err => {
    if (err) {
      console.log("validation failure");
      res.status(404).send({
        message: "No roles found!"
      });
    }
  });
  return rolesMock.ALL_ROLES;
}
