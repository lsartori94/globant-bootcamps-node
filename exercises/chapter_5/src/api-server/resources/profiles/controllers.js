"use strict";

const actions = require("./actions");

module.exports = {
  v1: {
    getAllProfiles,
    getProfile
  }
};

function getAllProfiles(req, res) {
  console.log("processing profiles request");
  res.status(200).send(actions.v1.allProfiles());
}

function getProfile(req, res) {
  console.log("processing profiles ID request");
  res.status(200).send(actions.v1.searchProfileByID(req.params.id));
}
