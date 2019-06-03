"use strict";
const config = require("../../core/config");
const users = require("./controllers");

module.exports = function initRoutes(app) {
  
 const basePathRoles = config.basePath + "/roles";

  app.get(`${basePathRoles}`, users.v2.getAllRoles);
  app.get(`${basePathRoles}/:id`, users.v2.getRole);

};
