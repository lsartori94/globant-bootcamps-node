/*! Copyright Globant. All rights reserved. */
'use strict';

const actions = require('./actions');
const rolMock = require('../../../test-helpers/roles');
const Joi = require('joi');

 
module.exports = {
    v1: { // Initial version
        getAll: getAll,
        getById: getById
    }
};

/////////////////////////////////////////////////////////////

/**
 * Retrieve all roles
 * @param {Object} req - http.ServerRequest
 * @param {Object} res - http.ServerResponse
 */
function getAll(req, res) {
    res.status(200).send(rolMock.ALL_ROLES);
}

/**
 * Retrieve a role
 * @param {Object} req 
 * @param {Object} res 
 */
function getById(req, res) {

    const schema = Joi.object().keys({
        roleid: Joi.number().positive()
    });
    const data= req.params;
    Joi.validate(data,schema, (err,value)=>{
        if(err){
            res.status(422).json({
                status:'error',
                message: 'Invalid ID',
                data: data
            })
        }else{
            res.status(200).send(actions.rolById(rolMock.ALL_ROLES, req.params.roleid));
        }
    })

}