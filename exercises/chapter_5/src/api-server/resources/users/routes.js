/*! Copyright Globant. All rights reserved. */
"use strict";

const config = require("../../core/config");
const users = require("./controllers");

module.exports = function initRoutes(app) {
  // Users resource base route
  const basePathUsers = config.basePath + "/users";
  const basePathProfiles = config.basePath + "/profiles";
  const basePathRoles = config.basePath + "/roles";

  app.get(basePathUsers, users.v1.getAll);
  app.get(`${basePathUsers}/:id`, users.v1.getUser);

  app.get(`${basePathProfiles}`, users.v1.getAllProfiles);
  app.get(`${basePathProfiles}/:id`, users.v1.getProfile);

  app.get(`${basePathRoles}`, users.v1.getAllRoles);
  app.get(`${basePathRoles}/:id`, users.v1.getRole);
};
