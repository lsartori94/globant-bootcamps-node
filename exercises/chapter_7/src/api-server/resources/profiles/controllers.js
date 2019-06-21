/*! Copyright Globant. All rights reserved. */
'use strict';

const _ = require('lodash');
const actions = require('./actions');
const models = require('../../../db/models');
//const profilesMock = require('../../../test-helpers/profiles');

module.exports = {
    v1: { // Initial version
        getAll: getAll,
        getOneByid: getOneByid,
        createProfile: createProfile,
        deleteProfile: deleteProfile,
        updateProfile: updateProfile,
        assignprofile: assignprofile,
    }
};

/////////////////////////////////////////////////////////////

/**
 * Retrieve all users
 * @param {Object} req - http.ServerRequest
 * @param {Object} res - http.ServerResponse
 */
async function getAll(req, res) {
    const profiles = await models.Profile.findAll({
        attributes: ['id', 'name', 'description'],
        order: [
            ['id', 'DESC']
        ]
    });
    res.status(200).json({ profiles });

}

async function getOneByid(req, res) {

    const { id } = req.params;
    const profile = await models.Profile.findOne({
        where: { id },
        attributes: ['id', 'name', 'description'],
    });

    if (profile == null) {
        res.status(404).send('No se encuentra el id buscado');

    } else {
        res.status(200).json(profile);

    }


}

async function createProfile(req, res) {
    const { name, description } = req.body;


    const newProfile = await models.Profile.create({
        name,
        description
    }, {
            fields: ['name', 'description']// que fields voy a pasar cuando creo un nuevo dato
        });


    res.status(200).json(({ message: "new profile created" }))

}

async function deleteProfile(req, res) {
    const { id } = req.params;

    const deleted = await models.Profile.destroy({
        where: {
            id
        }
    })
    if (deleted != 0) {
        res.status(200).json({ message: `profile with id: ${id}, was deleted` })
    } else {
        res.status(404).json({ message: `profile with id: ${id} no exists` })
    }
}

async function updateProfile(req, res) {

    const { id } = req.params;
    const { name, description } = req.body;

    const profile = await models.Profile.findOne({
        attributes: ['id', 'name', 'description'],
        where: { id }
    })
    // aca tendria que ver que es lo que se actualiza y que es lo que pasan 
    // preguntar diferencia entre put y patch no me acuerdo, o actualizo todo
    // se podria hacer un patch solo para password 
    const updatedProfile = await models.Profile.update({
        name,
        description

    },
        {
            where: { id }
        })

    if (updatedProfile == 1) {
        res.status(200).json({
            message: 'Profile updated successfully',

        });
    } else {
        res.status(400).json({
            message: 'Some error occurred',

        });

    }
}

async function assignprofile(req, res) {
    const { id } = req.params;
    const profile = await models.Profile.findOne({
        attributes: ['id', 'name', 'description'],
        where: { id }
    })
    const updatedUsers = await models.User.update({ ProfileId: id }, { omitNull: true, where: { id: req.body.listUsers } })

    if (updatedUsers != 0) {
        res.status(200).json({
            message: 'updated Users successfully'

        });

    } else {
        res.status(404).json({
            message: 'updated Users unsuccessfully'

        });
    }
}




