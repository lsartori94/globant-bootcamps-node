"use strict";
const config = require("../../core/config");
const roles = require("./controllers");

module.exports = function initRoutes(app) {
  const basePathRoles = config.basePath + "/role";

  app.get(basePathRoles, roles.v1.getAllRoles);
  app.get(`${basePathRoles}/:id`, roles.v1.getRole);
};
