"use strict";

const _ = require("lodash");
const rolesMock = require("../../../test-hepers/roles");

module.exports = {
  v1: {
    allRoles,
    searchRoleById
  }
};

function allRoles() {
  return rolesMock.ALL_ROLES;
}

function searchRoleById(id) {
  return _.find(rolesMock.ALL_ROLES, function(role) {
    if (id == role.id) {
      return role;
    }
  });
}
