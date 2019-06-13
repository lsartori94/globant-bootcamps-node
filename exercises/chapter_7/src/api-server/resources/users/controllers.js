/*! Copyright Globant. All rights reserved. */
'use strict';


const models=require('../../models');
const _ = require('lodash');
const actions = require('./actions');
// const userMock = require('../../../test-helpers/users'); 

module.exports = {
    v1: { // Initial version
        getAll: getAll,
        getOneByid: getOneByid,
        createUser:createUser,
        deleteUser:deleteUser,
        updateUser:updateUser,


    }
};

/////////////////////////////////////////////////////////////

/**
 * Retrieve all users
 * @param {Object} req - http.ServerRequest
 * @param {Object} res - http.ServerResponse
 */
 async function getAll(req, res) {
    const users = await models.User.findAll({
        attributes: [ 'id','name','lastname', 'email'],
        order: [
            ['id', 'DESC']
        ]
    });
console.log(users[0]);
    res.json({ users });

}


 async function getOneByid(req,res){

    const {id} = req.params;
    const user = await models.User.findOne({
        where: { id },
        attributes: [ 'id','name','lastname', 'email'],
    });
   // console.log(user,'lalalalla');
    // const a=1;
    // debugger;
    if (user == null) {
        res.status(404).send('No se encuentra el id buscado');

    }else {
        res.json(user);

    }
   

   // console.log('Ace deberiamos buscar uno por id',id);
   
    
/*    const { id } = req.params;

    const user = await .findOne({
        where: { id },
        attributes: ['id', 'projectid', 'name', 'done']
    });
    res.json(task);

}*/
    
}

async function createUser(req,res){
    const { name, password, lastname,email } = req.body;
       
    
    const newUser = await models.User.create({
        name,
        password,
        lastname,
        email
    }, {
            fields: ['name', 'password', 'lastname','email']// que fields voy a pasar cuando creo un nuevo dato
        });


    res.json(({ message: "new user created" }))

}
// ojo delete tira user deleted si no encuentra id
 async function deleteUser(req, res) {
    const { id } = req.params;

   const deleted= await models.User.destroy({
        where: {
            id
        }
    })
    //console.log(deleted,'a');
    if (deleted != 0){
    res.json({ message: `User with id: ${id}, was deleted` })
    }else{
    res.json({message:`User with id: ${id} no exists`})
    }
}

async function updateUser(req, res) {

    const { id } = req.params;
    const { name, lastname, email,password} = req.body;

    const user = await models.User.findOne({
        attributes: [ 'id','name','lastname', 'email','password'],
        where: { id }
    })
// aca tendria que ver que es lo que se actualiza y que es lo que pasan 
// preguntar diferencia entre put y patch no me acuerdo, o actualizo todo
// se podria hacer un patch solo para password 
    const updatedTask = await models.User.update({
        name,
        lastname,
        email,
        password

    },
        {
            where: { id }
        })
    res.json({
        message: 'Task updated',
        updatedTask
    })

}

