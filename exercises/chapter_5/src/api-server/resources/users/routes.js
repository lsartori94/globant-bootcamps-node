/*! Copyright Globant. All rights reserved. */
"use strict";

const config = require("../../core/config");
const users = require("./controllers");
const actions = require("./actions");

module.exports = function initRoutes(app) {
  // Users resource base route
  const basePathUsers = config.basePath + "/user";

  app.get(basePathUsers, actions.v1.validateGetAllUsers, users.v1.getAllUsers);
  app.get(`${basePathUsers}/:id`, actions.v1.validateUserID, users.v1.getUser);
};
