/*! Copyright Globant. All rights reserved. */
'use strict';

const models = require('../../models');
const _ = require('lodash');


module.exports = {
    v1: { // Initial version
        getAll: getAll,
        getUserById: getUserById,
        createUser: createUser,
        deleteUser: deleteUser
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
    }).then(users => {
        res.status(200).send(users);
    }).catch(err => {
        res.status(404).send(err);
    });
}

/**
 * Returns a single user finded by his id
 * @param {Object} req 
 * @param {Object} res 
 */
function getUserById(req, res) {
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
    }).then(user => {
        if (user) {
            res.status(200).send(user);
        } else {
            res.status(404).send({ msg: "User doesn't exists" });
        }
    }).catch(err => {
        res.status(404).send(err);
    });
}

function createUser(req, res) {
    models.User.create({
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        ProfileId: req.body.ProfileId
    })
        .then(succes => {
            res.status(200).send("User created");
        })
        .catch(err => {
            res.status(502).send(err);
        });
}

function deleteUser(req, res) {
    models.User.findByPk(req.params.userId)
        .then(user => {
            if (user) {
                user.destroy()
                    .then(succes => {
                        res.status(200).send("user destroyed");
                    })
                    .catch(err => {
                        res.status(502).send(err);
                    });
            } else {
                res.status(404).send("userId does't exists");
            }
        }).catch(err => {
            res.status(502).send(err);
        });
}



