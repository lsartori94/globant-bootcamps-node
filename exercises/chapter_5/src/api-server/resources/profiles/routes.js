"use strict";
const config = require("../../core/config");
const users = require("./controllers");

module.exports = function initRoutes(app) {

  const basePathProfiles = config.basePath + "/profiles";

  app.get(`${basePathProfiles}`, users.v1.getAllProfiles);
  app.get(`${basePathProfiles}/:id`, users.v1.getProfile);
};
