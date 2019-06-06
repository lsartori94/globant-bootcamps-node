const _ = require("lodash");
const actions = require("./actions")

module.exports = {
  v1: {
    getAllProfiles,
    getProfile
  }
};

function getAllProfiles(req, res) {
  console.log("processing profiles request");
  res.status(200).send(actions.v1.validateGetAllProfiles(req, res));
}

function getProfile(req, res) {
  console.log("processing profiles ID request");
  res.status(200).send(actions.v1.validateProfileID(req, res));
}