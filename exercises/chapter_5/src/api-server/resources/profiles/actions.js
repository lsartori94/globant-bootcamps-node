"use strict";

const _ = require("lodash");
const profilesMock = require("../../../test-hepers/profiles");

module.exports = {
  v1: {
    allProfiles,
    searchProfileByID
  }
};

function allProfiles() {
  return profilesMock.ALL_PROFILES;
}

function searchProfileByID(id) {
  return _.find(profilesMock.ALL_PROFILES, function(profile) {
    if (id == profile.id) {
      return profile;
    }
  });
}
