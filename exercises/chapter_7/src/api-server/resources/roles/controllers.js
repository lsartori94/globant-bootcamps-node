/*! Copyright Globant. All rights reserved. */
'use strict';

const _ = require('lodash');
const actions = require('./actions');
const rolesMock = require('../../../test-helpers/roles');

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
    //console.log('hey apple');
    res.status(200).send(rolesMock.ALL_ROLES);
};



function getOneById(req,res){
    const {idRol} = req.params;
    //console.log('hola,',idRol);
    const a =actions.actionFindRolById(Number(idRol));
    if (a==undefined){
        res.status(404).send('No se encuentra el id buscado');

    }else if (a!= undefined){
        res.status(200).send(a);

    }

};