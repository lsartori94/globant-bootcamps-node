/*! Copyright Globant. All rights reserved. */
'use strict';

const _ = require('lodash');
const actions = require('./actions');
module.exports = {
    v1: { // Initial version
        getAll,
        getById,
        createUser,
        updateUser,
        deleteUser

    }
};

/////////////////////////////////////////////////////////////

/**
 * Retrieve all users
 * @param {Object} req - http.ServerRequest
 * @param {Object} res - http.ServerResponse
 */
function getAll(req, res) {
    const allUsers= model.user.findAll
    allUsers.then(users => {
        res.status(200).send(users);
    })
    allUsers.catch(err =>{
        res.status(400).send(err);
    })
}
function getById(req, res) {
    const aUser= model.user.findByPk(req.params.id)
    aUser.then(user => {
        if (user != null){
            res.status(200).send(user);
        }
        else{
            res.status(400).send(err);
        }
    })
}
function createUser(req, res){
    const newUser = models.user.create(req.body)
    newUser.then(user => {
        res.status(200).send(user);
    })
    newUser.catch(err => {
        res.status(400).send(err);
    })
}

function updateUser(req, res){
    const aUser= model.user.findByPk(req.params.id)
    aUser.then(user => {
        if (user){
            model.user.update(req.body);
        }
        else{
            res.status(400).send(err);
        }
    })
}
function deleteUser(req, res) {
    const aUser= model.user.findByPk(req.params.id)
    aUser.then(user => {
        if (user){
            model.user.destroy(req.body);
        }
        else{
            res.status(400).send(err);
        }
    })
}
