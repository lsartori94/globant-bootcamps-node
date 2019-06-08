"use strict";

const config = require("../../core/config");
const profiles = require("./controllers");
const validate = require("./validate");

module.exports = function initRoutes(app) {
  const basePathProfiles = config.basePath + "/profile";

  app.get(
    basePathProfiles,
    profiles.v1.getAllProfiles
  );
  app.get(
    `${basePathProfiles}/:id`,
    validate.v1.validateProfileID,
    profiles.v1.getProfile
  );
};
