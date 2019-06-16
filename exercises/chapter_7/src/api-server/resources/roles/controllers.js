/*! Copyright Globant. All rights reserved. */
'use strict';

const _ = require('lodash');
const actions = require('./actions');
const models = require('../../../db/models');
//const rolesMock = require('../../../test-helpers/roles');


module.exports = {
    v1: { // Initial version
        getAll: getAll,
        createRol: createRol,
        deleteRol: deleteRol,
        updateRol: updateRol,
        getOneById: getOneById
    }
};

/////////////////////////////////////////////////////////////

/**
 * Retrieve all users
 * @param {Object} req - http.ServerRequest
 * @param {Object} res - http.ServerResponse
 */
async function getAll(req, res) {
    const roles = await models.Rol.findAll({
        attributes: ['id', 'name'],
        order: [
            ['id', 'DESC']
        ]
    });
    console.log(roles[0]);
    res.json({ roles });

};


async function getOneById(req,res) {
    const {id} = req.params;
    const rol = await models.Rol.findOne({
        where: { id },
        attributes: ['id', 'name'],
    });

    if (rol == null) {
        res.status(404).send('No se encuentra el id buscado');

    } else {
        res.json(rol);

    }

};



async function createRol(req,res){
    const {name} = req.body;

    const newRol = await models.Rol.create({
        name
    },{
        fields:['name']
    });
    res.json(({message:"new Rol created"}))

}

async function deleteRol(req,res){
    const {id} = req.params;

    const deleted = await models.Rol.destroy({
        where:{
            id
        }
    })

    if (deleted != 0) {
        res.json({ message: `Rol with id: ${id}, was deleted` })
    } else {
        res.json({ message: `Rol with id: ${id} no exists` })
    } 


}


async function updateRol(req, res) {

    const { id } = req.params;
    const { name } = req.body;
// NO SE PQ LO BUSCO DPS PROBAR SI ANDA SIN BUSCAR
    const rol = await models.Rol.findOne({
        attributes: ['id', 'name'],
        where: { id }
    })
    // aca tendria que ver que es lo que se actualiza y que es lo que pasan 
    // preguntar diferencia entre put y patch no me acuerdo, o actualizo todo
    // se podria hacer un patch solo para password 
    const updatedRol = await models.Rol.update({
        name,
    },
        {
            where: { id }
        })
    if (updatedRol == 1) {
        res.json({
            message: 'Rol updated successfully',

        });
    }else {
        res.status(400).json({
            message: 'Some error occurred',

        });
    }

}




