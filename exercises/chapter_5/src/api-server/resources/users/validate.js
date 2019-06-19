"use strict";

const Joi = require("joi");
const userMock = require("../../../test-hepers/roles");

module.exports = {
  v1: {
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
