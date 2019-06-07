/*! Copyright Globant. All rights reserved. */
'use strict';

const models = require('../../models');
const _ = require('lodash');


module.exports = {
    v1: { // Initial version
        getAll: getAll,
        getProfileById: getProfileById
    }
};

/////////////////////////////////////////////////////////////

/**
 * Retrieve all profiles
 * @param {Object} req - http.ServerRequest
 * @param {Object} res - http.ServerResponse
 */
function getAll(req, res) {
    models.Profile.findAll({
    }).then(profiles=>{
        res.status(200).send(profiles);
    }).catch(err=>{
        res.status(404).send(err);
    });
}

/**
 * Returns a single profile finded by his id
 * @param {Object} req 
 * @param {Object} res 
 */
function getProfileById(req,res){
    models.Profile.findByPk(req.params.profileId).then(profile=>{
        if(profile){
            res.status(200).send(profile);
        }else{
            res.status(404).send({msg: "Profile doesn't exists"});
        }
    }).catch(err=>{
        res.status(404).send(err);
    });

}
