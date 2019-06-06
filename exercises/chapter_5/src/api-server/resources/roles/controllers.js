const _ = require("lodash");
const rolesMock = require("../../../test-hepers/roles");

module.exports = {
  v1: {
    getAllRoles,
    getRole
  }
};

function getAllRoles(req, res) {
  console.log("processing role request");
  res.status(200).send(rolesMock.ALL_ROLES);
}

function getRole(req, res) {
  console.log("processing role ID request");
  res.status(200).send(rolesMock.ALL_ROLES[req.params.id - 1]);
}
