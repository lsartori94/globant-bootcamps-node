"use strict";

const actions = require("./actions");

module.exports = {
  v1: {
    getAllRoles,
    getRole
  }
};

function getAllRoles(req, res) {
  console.log("processing role request");
  res.status(200).send(actions.v1.allRoles());
}

function getRole(req, res) {
  console.log("processing role ID request");
  res.status(200).send(actions.v1.searchRoleById(req.params.id));
}
