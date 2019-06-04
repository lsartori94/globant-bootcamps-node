/*! Copyright Globant. All rights reserved. */
'use strict';

const _ = require('lodash');
const actions = require('./actions');
const userMock = require('../../../test-helpers/users');

module.exports = {
    v1: { // Initial version
        getAll: getAll,
        getOneByid: getOneByid
    }
};

/////////////////////////////////////////////////////////////

/**
 * Retrieve all users
 * @param {Object} req - http.ServerRequest
 * @param {Object} res - http.ServerResponse
 */
function getAll(req, res) {
    res.status(200).send(userMock.ALL_USERS);
}

 function getOneByid(req,res){

    const {id} = req.params;
   // console.log('Ace deberiamos buscar uno por id',id);
    var a =actions.actionFindById(Number(id));
    if (a==undefined){
        res.status(400).send('No se encuentra el id buscado');

    }else if (a!= undefined){
        res.status(200).send(a);

    }

    
}