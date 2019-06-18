/*! Copyright Globant. All rights reserved. */
'use strict';

const _ = require('lodash');
const actions = require('./actions');
const userMock = require('../../../test-helpers/users');

module.exports = {
    v1: { // Initial version
        getAll,
        getById
    }
};

/////////////////////////////////////////////////////////////

/**
 * Retrieve all users
 * @param {Object} req - http.ServerRequest
 * @param {Object} res - http.ServerResponse
 */
function getAll(req, res) {
    res.status(200).send(actions.getUsers());
}

function getById(req, res){
    res.status(200).send(actions.getById(req.params.userId));
}

function valParams(req, res, err){
    const Joi = require('joi');
    const data = req.params;
    const schema = Joi.object().keys({
        userId: Joi.number().integer(),
    })
    Joi.validate(data, schema, (err, value)=> {
        if(err){
            res.status(422).json({
                status: 'error',
                message: 'invalid request data',
                data: data
            })
        }
    })
}