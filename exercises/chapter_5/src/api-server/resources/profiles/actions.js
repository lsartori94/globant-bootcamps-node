"use strict";
const Joi = require("joi");
const profilesMock = require("../../../test-hepers/profiles");

module.exports = {
  v1: {
    validateGetAllProfiles,
    validateProfileID
  }
};

function validateProfileID(req, res) {
  console.log("validating");
  const schema = Joi.object().keys({
    id: Joi.number()
      .min(1)
      .max(profilesMock.ALL_PROFILES.length)
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
  return profilesMock.ALL_PROFILES[req.params.id - 1];
}

function validateGetAllProfiles(req, res) {
  console.log("validating");
  const schema = Joi.object().keys({
    length: Joi.number().min(1)
  });
  Joi.validate({ length: profilesMock.ALL_PROFILES.length }, schema, err => {
    if (err) {
      console.log("validation failure");
      res.status(404).send({
        message: "No roles found!"
      });
    }
  });
  return profilesMock.ALL_PROFILES;
}