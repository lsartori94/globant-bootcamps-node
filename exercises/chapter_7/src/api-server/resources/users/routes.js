/*! Copyright Globant. All rights reserved. */
"use strict";

const config = require("../../core/config");
const users = require("./controllers");
const validate = require("./validate");

module.exports = function initRoutes(app) {
  // Users resource base route
  const basePath = config.basePath + "/user";

  //console.log(basePath);
  app.get(basePath, users.v1.getAll);
  app.get(`${basePath}/:id`, validate.v1.id, users.v1.getUserByID);
  app.post(basePath, validate.v1.allUserData, users.v1.createUser);
  app.put(
    `${basePath}/:id`,
    validate.v1.id,
    validate.v1.userData,
    users.v1.modifyUser
  );
  app.delete(`${basePath}/:id`, validate.v1.id, users.v1.deleteUser);
};
