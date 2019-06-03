/*! Copyright Globant. All rights reserved. */
"use strict";

const _ = require("lodash");
const actions = require("./actions");
const userMock = require("../../../test-hepers/users");
const profileMock = require("../../../test-hepers/profiles");


module.exports = {
  v1: {
    // Initial version
    getAllUsers,
    getUser,
  }
};

/////////////////////////////////////////////////////////////

/**
 * Retrieve all users
 * @param {Object} req - http.ServerRequest
 * @param {Object} res - http.ServerResponse
 */
function getAllUsers(req, res) {
  res.status(200).send(userMock.ALL_USERS);
}

//with sequelize we can use promises (returned by queries) that makes easier and async the middleware logic

function getUser(req, res) {
  console.log("processing user ID request"); //just to check the flux
  res
    .status(200)
    .send({ message: "OK!", data: userMock.ALL_USERS[req.params.id - 1] });

  //what if I want to mock a function that returns a user with my ID as param?

  //after an error in validatons > res.status(404).send({ message: "User not found" });
}

