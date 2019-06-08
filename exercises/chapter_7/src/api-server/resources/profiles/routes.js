/*! Copyright Globant. All rights reserved. */
"use strict";

const config = require("../../core/config");
const profile = require("./controllers");
const validate = require("./validate");

module.exports = function initRoutes(app) {
  // Users resource base route
  const basePath = config.basePath + "/profile";

  //console.log(basePath);
  app.get(basePath, profile.v1.getAll);
  //app.get(basePath, validate.v1.validateID, profile.v1.geProfileByID);
  app.post(basePath, profile.v1.createProfile);
};
