"use strict";

const _ = require("lodash");
const userMock = require("../../../test-hepers/roles");

module.exports = {
  v1: {
    allUsers,
    searchUserByID
  }
};

function allUsers() {
  return userMock.ALL_ROLES;
}

function searchUserByID(id) {
  return _.find(userMock.ALL_ROLES, function(user) {
    if (id == user.id) {
      return user;
    }
  });
}
