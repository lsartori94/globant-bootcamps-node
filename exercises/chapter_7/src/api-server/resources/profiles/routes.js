/*! Copyright Globant. All rights reserved. */
"use strict";

const config = require("../../core/config");
const profiles = require("./controllers");
const validator = require("./actions");

module.exports = function initRoutes(app) {
  // Profiles resource base route
  const basePath = config.basePath + "/profiles";

  //console.log(basePath);
  app.get(basePath, profiles.v1.getAll);

  //Path for a single profile
  app.get( basePath + "/:profileId", validator.v1.validateId, profiles.v1.getProfileById
  );

  //Path for posting a profile
  app.post(basePath, validator.v1.validateBodyPost, profiles.v1.createProfile);
  
  //Path for updating a profile
  //app.put(basePath  + "/:profileId", validator.v1.validateId, validator.v1.validateBodyPut, profiles.v1.updateProfile);

  //Path for a deleting a profile
	app.delete(basePath + "/:profileId", validator.v1.validateId, profiles.v1.deleteProfile);

};
