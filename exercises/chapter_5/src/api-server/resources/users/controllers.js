/*! Copyright Globant. All rights reserved. */
"use strict";

const _ = require("lodash");
const actions = require("./actions.js");

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
  res.status(200).send(actions.v1.validateGetAllUsers(req, res));
}

function getUser(req, res) {
  console.log("processing user ID request");
  res.status(200).send(actions.v1.validateUserID(req, res));
}
