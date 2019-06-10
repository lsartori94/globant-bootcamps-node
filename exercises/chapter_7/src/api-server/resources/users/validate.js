"use strict";

const Joi = require("joi");

module.exports = {
  v1: {
    id,
    allUserData,
    userData
  }
};

function id(req, res, next) {
  const schema = Joi.object().keys({
    id: Joi.number()
      .min(1)
      .required()
  });
  Joi.validate({ id: req.params.id }, schema, (err, value) => {
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
  Joi.validate(
    {
      username: req.body.username,
      name: req.body.name,
      lastname: req.body.lastname,
      password: req.body.password,
      email: req.body.email,
      ProfileId: req.body.ProfileId
    },
    schema,
    (err, value) => {
      if (err) {
        res.status(400).send(err.message);
      } else {
        console.log("validation success");
        next();
      }
    }
  );
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
  Joi.validate(
    {
      username: req.body.username,
      name: req.body.name,
      lastname: req.body.lastname,
      password: req.body.password,
      email: req.body.email,
      ProfileId: req.body.ProfileId
    },
    schema,
    (err, value) => {
      if (err) {
        res.status(400).send(err.message);
      } else {
        console.log("validation success");
        next();
      }
    }
  );
}
