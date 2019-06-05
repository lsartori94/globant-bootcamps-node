/*! Copyright Globant. All rights reserved. */
'use strict';

const actions = require('./actions');
const profileMock = require('../../../test-helpers/profiles');
const Joi = require('joi');

 
module.exports = {
    v1: { // Initial version
        getAll: getAll,
        getById: getById
    }
};

/////////////////////////////////////////////////////////////

/**
 * Retrieve all profiles
 * @param {Object} req - http.ServerRequest
 * @param {Object} res - http.ServerResponse
 */
function getAll(req, res) {
    res.status(200).send(profileMock.ALL_PROFILES);
}

/**
 * Retrieve a role
 * @param {Object} req 
 * @param {Object} res 
 */
function getById(req, res) {

    const schema = Joi.object().keys({
        profileid: Joi.number().positive()
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
            res.status(200).send(actions.profileById(profileMock.ALL_PROFILES, req.params.profileid));
        }
    })

}