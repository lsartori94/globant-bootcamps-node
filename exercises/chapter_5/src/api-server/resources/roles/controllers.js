const _ = require("lodash");
const roleMock = require("../../../test-hepers/roles");

module.exports = {
  v2: {
    getAllRoles,
    getRole
  }
};

function getAllRoles(req, res) {
  console.log("processing role request");
  res.status(200).send({
    message: "OK!",
    data: roleMock.ALL_ROLES
  });
}

function getRole(req, res) {
  console.log("processing role ID request");
  res
    .status(200)
    .send({ message: "OK!", data: roleMock.ALL_ROLES[req.params.id - 1] });
}
