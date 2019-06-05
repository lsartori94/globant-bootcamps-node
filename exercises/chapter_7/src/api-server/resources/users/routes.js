/*! Copyright Globant. All rights reserved. */
"use strict";

const config = require("../../core/config");
const users = require("./controllers");

module.exports = function initRoutes(app) {
  // Users resource base route
  const basePath = config.basePath + "/user";

  //console.log(basePath);
  app.get(basePath, users.v1.getAll);
  app.get(`${basePath}/:id`, users.v1.validateID, users.v1.getUser);
};
