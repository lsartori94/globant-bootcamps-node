/*! Copyright Globant. All rights reserved. */
'use strict';

const models = require('../../models');
const _ = require('lodash');


module.exports = {
    v1: { // Initial version
        getAll: getAll,
        getRoleById: getRoleById
    }
};

/////////////////////////////////////////////////////////////

/**
 * Retrieve all Roles
 * @param {Object} req - http.ServerRequest
 * @param {Object} res - http.ServerResponse
 */
function getAll(req, res) {
    models.Role.findAll({
    }).then(roles=>{
        res.status(200).send(roles);
    }).catch(err=>{
        res.status(404).send(err);
    });
}

/**
 * Returns a single role finded by his id
 * @param {Object} req 
 * @param {Object} res 
 */
function getRoleById(req,res){
    models.Role.findByPk(req.params.roleId).then(role=>{
        if(role){
            res.status(200).send(role);
        }else{
            res.status(404).send({msg: "Role doesn't exists"});
        }
    }).catch(err=>{
        res.status(404).send(err);
    });

}
