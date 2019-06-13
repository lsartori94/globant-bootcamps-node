/*! Copyright Globant. All rights reserved. */
'use strict';

const _ = require('lodash');
const actions = require('./actions');
const profilesMock = require('../../../test-helpers/profiles');

module.exports = {
    v1: { // Initial version
        getAll: getAll,
        getOneById:getOneById
    }
};

/////////////////////////////////////////////////////////////

/**
 * Retrieve all users
 * @param {Object} req - http.ServerRequest
 * @param {Object} res - http.ServerResponse
 */
function getAll(req, res) {
    
    res.status(200).send(profilesMock.ALL_PROFILES);
}

function getOneById(req,res){
    
    const {idProfile} = req.params;
    //console.log('hola,',idProfile);
    var a =actions.actionGetOneById(Number(idProfile));
    
   


// Esto seria sin las validaciones
    if (a==undefined){
        res.status(404).send('No se encuentra el id buscado');

    }else if (a!= undefined){
        res.status(200).send(a);

    } 


}