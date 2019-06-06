"use strict";
const config = require("../../core/config");
const roles = require("./controllers");
const actions = require("./actions")

module.exports = function initRoutes(app) {
  const basePathRoles = config.basePath + "/role";

  app.get(basePathRoles, actions.v1.validateGetAllRoles, roles.v1.getAllRoles);
  app.get(`${basePathRoles}/:id`, actions.v1.validateRoleID, roles.v1.getRole);
};
