"use strict";

const Joi = require("joi");

module.exports = {
  v1: {
    id,
    profileData,
    allProfileData
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
      res.status(422).send({
        message: `Invalid request! ${req.params.id} is not a valid ID`
      });
    } else {
      console.log("validation success");
      next();
    }
  });
}

function allProfileData(req, res, next) {
  const schema = Joi.object().keys({
    name: string()
      .trim()
      .required(),
    description: string().required()
  });
  Joi.validate(req.body, schema, err => {
    if (err) {
      res.status(422).send();
    } else {
      console.log("validation success");
      next();
    }
  });
}

function profileData(req, res, next) {
  const schema = Joy.object().keys({
    name: string().trim(),
    description: string()
  });
  Joy.validate(req.body, schema, schema, err => {
    if (err) {
      res.status(422).send();
    } else {
      console.log("validation success");
      next();
    }
  });
}
