/*! Copyright Globant. All rights reserved. */
"use strict";

const actions = require("./actions");

module.exports = {
  v1: {
    // Initial version
    getAllUsers,
    getUser
  }
};

/////////////////////////////////////////////////////////////

/**
 * Retrieve all users
 * @param {Object} req - http.ServerRequest
 * @param {Object} res - http.ServerResponse
 */
function getAllUsers(req, res) {
  res.status(200).send(actions.v1.allUsers());
}

function getUser(req, res) {
  console.log("processing user ID request");
  res.status(200).send(actions.v1.searchUserByID(req.params.id));
}
