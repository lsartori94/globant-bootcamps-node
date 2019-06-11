/*! Copyright Globant. All rights reserved. */
"use strict";

const config = require("../../core/config");
const role = require("./controllers");
const validateRole = require("./validate");
const validate = require("../validate");

module.exports = function initRoutes(app) {
  // Users resource base route
  const basePath = config.basePath + "/role";

  //console.log(basePath);
  app.get(basePath, role.v1.getAll);
  app.get(`${basePath}/:id`, validate.v1.id, role.v1.getRoleById);
  app.post(basePath, validateRole.v1.allRoleData, role.v1.createRole);
  app.put(
    `${basePath}/:id`,
    validate.v1.id,
    validateRole.v1.roleData,
    role.v1.modifyRole
  );
  app.delete(`${basePath}/:id`, validate.v1.id, role.v1.deleteRole);
};
