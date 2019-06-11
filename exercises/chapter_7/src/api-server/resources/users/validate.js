"use strict";

const Joi = require("joi");

module.exports = {
  v1: {
    allUserData,
    userData
  }
};


function allUserData(req, res, next) {
  const schema = Joi.object().keys({
    username: Joi.string()
      .trim()
      .required(),
    name: Joi.string().required(),
    password: Joi.string()
      .trim()
      .min(6)
      .required(),
    lastname: Joi.string().required(),
    email: Joi.string()
      .email()
      .required(),
    ProfileId: Joi.number()
      .positive()
      .required()
  });
  Joi.validate(req.body, schema, err => {
    if (err) {
      res.status(422).send(err.message);
    } else {
      console.log("validation success");
      next();
    }
  });
}

function userData(req, res, next) {
  const schema = Joi.object().keys({
    username: Joi.string().trim(),
    name: Joi.string(),
    password: Joi.string()
      .trim()
      .min(6),
    lastname: Joi.string(),
    email: Joi.string().email(),
    ProfileId: Joi.number().positive()
  });
  Joi.validate(req.body, schema, err => {
    if (err) {
      res.status(422).send(err.message);
    } else {
      console.log("validation success");
      next();
    }
  });
}
