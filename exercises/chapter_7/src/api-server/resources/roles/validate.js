"use strict";
const Joi = require("joi");

module.exports = {
  v1: {
    allRoleData,
    roleData
  }
};

function id(req, res, next) {
  const schema = Joi.object().keys({
    id: Joi.number()
      .positive()
      .required()
  });
  Joi.validate({ id: req.params.id }, schema, err => {
    if (err) {
      res.status(400).send({
        message: `Invalid request! ${req.params.id} is not a valid ID`
      });
    } else {
      console.log("validation success");
      next();
    }
  });
}

function allRoleData(req, res, next) {
  const schema = Joi.object().keys({
    name: Joi.string()
      .trim()
      .required()
  });
  Joi.validate({ name: req.body.name }, schema, err => {
    if (err) {
      res.status(422).send();
    } else {
      console.log("validation success");
      next();
    }
  });
}

function roleData(req, res, next) {
  const schema = Joi.object().keys({
    name: Joi.string().trim()
  });
  Joi.validate({ name: req.body.name }, schema, err => {
    if (err) {
      res.status(422).send();
    } else {
      console.log("validation success");
      next();
    }
  });
}