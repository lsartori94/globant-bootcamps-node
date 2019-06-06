const _ = require("lodash");
const profilesMock = require("../../../test-hepers/profiles");

module.exports = {
  v1: {
    getAllProfiles,
    getProfile
  }
};

function getAllProfiles(req, res) {
  console.log("processing profiles request");
  res.status(200).send(profilesMock.ALL_PROFILES);
}

function getProfile(req, res) {
  console.log("processing profiles ID request");
  res.status(200).send(profilesMock.ALL_PROFILES[req.params.id - 1]);
}
