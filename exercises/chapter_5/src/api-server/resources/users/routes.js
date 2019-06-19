/*! Copyright Globant. All rights reserved. */
"use strict";

const config = require("../../core/config");
const users = require("./controllers");
const validate = require("./validate");

module.exports = function initRoutes(app) {
  // Users resource base route
  const basePathUsers = config.basePath + "/user";

  app.get(basePathUsers, users.v1.getAllUsers);
  app.get(`${basePathUsers}/:id`, validate.v1.validateUserID, users.v1.getUser);
};
