"use strict";
const Joi = require("joi");

module.exports = {
  v1: {
    roleData
  }
};

function roleData(req, res, next) {
  const schema = Joi.object().keys({
    name: Joi.string()
      .trim()
      .required()
  });
  Joi.validate({ name: req.body.name }, schema, err => {
    if (err) {
      res.status(400).send();
    } else {
      console.log("validation success");
      next();
    }
  });
}
