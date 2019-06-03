/*! Copyright Globant. All rights reserved. */
"use strict";

const config = require("../../core/config");
const users = require("./controllers");

module.exports = function initRoutes(app) {
  // Users resource base route
  const basePathUsers = config.basePath + "/users";

  app.get(basePathUsers, users.v1.getAllUsers);
  app.get(`${basePathUsers}/:id`, users.v1.getUser);

};
