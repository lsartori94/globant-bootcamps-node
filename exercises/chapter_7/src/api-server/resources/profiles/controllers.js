/*! Copyright Globant. All rights reserved. */
'use strict';

const _ = require('lodash');
const actions = require('./actions');
module.exports = {
    v1: { // Initial version
        getAll,
        getById,
        createProfile,
        updateProfile,
        deleteProfile

    }
};

/////////////////////////////////////////////////////////////

/**
 * Retrieve all Profiles
 * @param {Object} req - http.ServerRequest
 * @param {Object} res - http.ServerResponse
 */
function getAll(req, res) {
    const allProfiles= model.profile.findAll
    allProfiles.then(profiles => {
        res.status(200).send(profiles);
    })
    allProfiles.catch(err =>{
        res.status(400).send(err);
    })
}
function getById(req, res) {
    const aProfile= model.profile.findByPk(req.params.id)
    aProfile.then(profile => {
        if (profile != null){
            res.status(200).send(user);
        }
        else{
            res.status(400).send(err);
        }
    })
}
function createProfile(req, res){
    const newProfile = models.profile.create(req.body)
    newProfile.then(profile => {
        res.status(200).send(profile);
    })
    newProfile.catch(err => {
        res.status(400).send(err);
    })
}

function updateProfile(req, res){
    const aProfile= model.profile.findByPk(req.params.id)
    aProfile.then(profile => {
        if (profile){
            model.profile.update(req.body);
        }
        else{
            res.status(400).send(err);
        }
    })
}
function deleteProfile(req, res) {
    const aProfile= model.profile.findByPk(req.params.id)
    aProfile.then(profile => {
        if (profile){
            model.profile.destroy(req.body);
        }
        else{
            res.status(400).send(err);
        }
    })
}
