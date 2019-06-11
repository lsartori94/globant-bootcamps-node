/*! Copyright Globant. All rights reserved. */
"use strict";

const config = require("../../core/config");
const profile = require("./controllers");
const validateProfile = require("./validate");
const validate = require("../validate");

module.exports = function initRoutes(app) {
  // Users resource base route
  const basePath = config.basePath + "/profile";

  //console.log(basePath);
  app.get(basePath, profile.v1.getAll);
  app.get(`${basePath}/:id`, validate.v1.id, profile.v1.getProfileById);
  app.post(basePath, profile.v1.createProfile);
  app.put(
    `${basePath}/:id`,
    validate.v1.id,
    validateProfile.v1.profileData,
    profile.v1.modifyProfile
  );
  app.delete(`${basePath}/:id`, validate.v1.id, profile.v1.deleteProfile);

  //add validations to this op
  app.post(`${basePath}/:id/users`, profile.v1.addUsers);
};
