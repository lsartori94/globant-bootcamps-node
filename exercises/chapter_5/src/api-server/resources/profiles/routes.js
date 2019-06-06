"use strict";
const config = require("../../core/config");
const profiles = require("./controllers");
const actions = require("./actions");

module.exports = function initRoutes(app) {
  const basePathProfiles = config.basePath + "/profile";

  app.get(
    basePathProfiles,
    actions.v1.validateGetAllProfiles,
    profiles.v1.getAllProfiles
  );
  app.get(
    `${basePathProfiles}/:id`,
    actions.v1.validateProfileID,
    profiles.v1.getProfile
  );
};
