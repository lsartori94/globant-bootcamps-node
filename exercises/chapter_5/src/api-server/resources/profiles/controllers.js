const _ = require("lodash");
const profileMock = require("../../../test-hepers/profiles");
const Joi = require('joi');

module.exports = {
  v1: {
    getAllProfiles,
    validateProfileID,
    getProfile
  }
};

function getAllProfiles(req, res) {
  console.log("processing profiles request");
  res.status(200).send({ message: "OK!", data: profileMock.ALL_PROFILES });
}

function getProfile(req, res) {
  console.log("processing profiles ID request");
  res.status(200).send({
    message: "OK!",
    data: profileMock.ALL_PROFILES[req.params.id - 1]
  });
}

function validateProfileID(req, res, next) {
  console.log("validating");
  const schema = Joi.object().keys({
    id: Joi.number()
      .min(1)
      .max(profileMock.ALL_PROFILES.length)
      .required()
  });
  Joi.validate({ id: req.params.id }, schema, (err, value) => {
    if (err) {
      console.log("validation failure");
      res.status(422).send({ message: "Invalid request!" });
    } else {
      console.log("validation success!");
      next();
    }
  });
}
