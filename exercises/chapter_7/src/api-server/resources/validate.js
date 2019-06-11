"use strict";

const Joi = require("joi");

module.exports = {
    v1: {
        id
    }
}

function id(req, res, next) {
  const schema = Joi.object().keys({
    id: Joi.number()
      .min(1)
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
