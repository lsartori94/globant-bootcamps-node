/*! Copyright Globant. All rights reserved. */
'use strict';

const models = require('../../models');
const _ = require('lodash');
const actions = require('./actions');


module.exports = {
    v1: { // Initial version
        getAll: getAll
    }
};

/////////////////////////////////////////////////////////////

/**
 * Retrieve all users
 * @param {Object} req - http.ServerRequest
 * @param {Object} res - http.ServerResponse
 */
function getAll(req, res) {
    models.User.findAll({
        attributes: {
            exclude: ['password']
        }
    }).then(users=>{
        console.log(users);
        res.status(200).send(users);
    }).catch(err=>{
        res.status(404).send(err);
    });
}
