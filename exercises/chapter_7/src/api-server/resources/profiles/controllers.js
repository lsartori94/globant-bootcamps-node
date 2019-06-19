/*! Copyright Globant. All rights reserved. */
"use strict";

const actions = require("./actions");

module.exports = {
  v1: {
    // Initial version
    getAll,
    getProfileById,
    createProfile,
    modifyProfile,
    deleteProfile,
    addUsers
  }
};

/////////////////////////////////////////////////////////////

/**
 * Retrieve all users
 * @param {Object} req - http.ServerRequest
 * @param {Object} res - http.ServerResponse
 */
function getAll(req, res) {
  return actions
    .getAllProfiles()
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(500).send();
    });
}

function getProfileById(req, res) {
  return actions
    .getProfileById(req.params)
    .then(data => {
      if (!!data) {
        res.status(200).send(data);
      } else {
        res.status(404).send();
      }
    })
    .catch(err => {
      res.status(500).send();
    });
}

function createProfile(req, res) {
  return actions
    .createProfile(req)
    .then(data => {
      res.status(201).send(data);
    })
    .catch(err => {
      res.status(400).send();
    });
}

function modifyProfile(req, res) {
  return actions
    .modifyProfile(req)
    .then(modified => {
      if (!!modified) {
        res.status(200).send(modified);
      } else {
        res.status(404).send({ msg: "profile not found" });
      }
    })
    .catch(err => {
      res.status(500).send();
    });
}

function deleteProfile(req, res) {
  return actions
    .deleteProfile(req.params)
    .then(data => {
      if (!!data) {
        res.status(204).send();
      } else {
        res.status(404).send({ msg: "profile not found" });
      }
    })
    .catch(err => {
      res.status(500).send();
    });
}

function addUsers(req, res) {
  return actions
    .addUsers(req)
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(500).send();
    });
}
