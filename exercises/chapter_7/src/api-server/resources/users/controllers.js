/*! Copyright Globant. All rights reserved. */
'use strict';

const models = require('../../models');
const _ = require('lodash');


module.exports = {
    v1: { // Initial version
        getAll: getAll,
        getUserById: getUserById
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
        res.status(200).send(users);
    }).catch(err=>{
        res.status(404).send(err);
    });
}

/**
 * Returns a single user finded by his id
 * @param {Object} req 
 * @param {Object} res 
 */
function getUserById(req,res){
    models.User.findByPk(req.params.userId, {
        attributes: {
            exclude: ['password']
        },
        include: [{
            model: models.Profile,
            attributes: {
                exclude: ['id']
            }
        }]
    }).then(user=>{
        if(user){
            res.status(200).send(user);
        }else{
            res.status(404).send({msg: "User doesn't exists"});
        }
    }).catch(err=>{
        res.status(404).send(err);
    });

}

