"use strict";

const config = require("../../core/config");
const profiles = require("./controllers");
const validate = require("./validate");

module.exports = function initRoutes(app) {
  const basePathProfiles = config.basePath + "/profile";

  app.get(
    basePathProfiles,
    validate.v1.validateGetAllProfiles,
    profiles.v1.getAllProfiles
  );
  app.get(
    `${basePathProfiles}/:id`,
    validate.v1.validateProfileID,
    profiles.v1.getProfile
  );
};
