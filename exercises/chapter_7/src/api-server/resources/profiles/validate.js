"use strict";

const Joi = require("joi");

module.exports = {
  v1: {
    profileData,
    allProfileData
  }
};

function allProfileData(req, res, next) {
  const schema = Joi.object().keys({
    name: Joi.string()
      .required()
      .trim(),
    description: Joi.string().required()
  });
  Joi.validate(req.body, schema, err => {
    if (err) {
      res.status(400).send();
    } else {
      console.log("validation success");
      next();
    }
  });
}

function profileData(req, res, next) {
  const schema = Joi.object().keys({
    name: Joi.string().trim(),
    description: Joi.string()
  });
  Joi.validate(req.body, schema, err => {
    if (err) {
      res.status(400).send();
    } else {
      console.log("validation success");
      next();
    }
  });
}
