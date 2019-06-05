const _ = require("lodash");
const roleMock = require("../../../test-hepers/roles");
const Joi = require("joi");

module.exports = {
  v1: {
    getAllRoles,
    validateRoleID,
    getRole
  }
};

function getAllRoles(req, res) {
  console.log("processing role request");
  res.status(200).send({
    message: "OK!",
    data: roleMock.ALL_ROLES
  });
}

function getRole(req, res) {
  console.log("processing role ID request");
  res
    .status(200)
    .send({ message: "OK!", data: roleMock.ALL_ROLES[req.params.id - 1] });
}

function validateRoleID(req, res, next) {
  console.log("validating");
  const schema = Joi.object().keys({
    id: Joi.number()
      .min(1)
      .max(roleMock.ALL_ROLES.length)
      .required()
  });
  Joi.validate({ id: req.params.id }, schema, (err, value) => {
    if (err) {
      console.log("validation failure")
      res.status(422).send({ message: "Invalid request!" });
    } else {
      console.log("validation success!");
      next();
    }
  });
}
