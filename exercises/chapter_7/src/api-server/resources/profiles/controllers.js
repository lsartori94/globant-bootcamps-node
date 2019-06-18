//const _ =require('lodash');
//const actions=require('./actions');
const joi= require('joi');
const models = require('../../models');


module.exports={
    v1:{//initial version
        getAll: getAll,
        getById: getById,
        createProfile: createProfile,
        updateProfile: updateProfile,
        deleteProfile: deleteProfile,
        assignUsers: assignUsers
    }
};
//////////////////////////
/**
 * Retrieve all roles
 * @param {Object} req - http.ServerRequest
 * @param {Object} res - http.ServerResponse
 */

function getAll(req,res){
   models.Profile.findAll({})
   .then(result => res.status(200).send(result))
   .catch(error => {
    res.status(412).send({ message: error.message })
});
}

function getById(req,res){
    console.log(req.params);
    models.Profile.findByPk(req.params.id)
    .then(result => {
    if (result){
        res.status(200).send(result)
    } else {
        res.status(404).send({ message: "Not found" });
    }
})  
    .catch(error => {
        res.status(412).send({ message: "Not found" });
    });
          
}

function createProfile(req, res){
    models.Profile.create({
        name: req.body.name,
        description: req.body.description
    })
    .then(result => {res.status(200).send();
    })
    .catch(error => {
        res.status(412).send({msg: error.message});
    })
   
}

function updateProfile(req, res){
    models.Profile.update(req.body, {where: req.params})
    .then(result => {res.status(200).send();})
    .catch(error => {
        res.status(412).send({msg: error.message});
    })
}

function deleteProfile(req, res){
    models.Profile.destroy({where: req.params})
    .then(result => {res.status(200).send();})
    .catch(error => {
        res.status(412).send({msg: error.message});
    })
}

function assignUsers(req, res){
models.Profile.findByPk(req.params.id)
.then(profile => {
    if (profile){
        models.User.findAll(req.body.id)
        .then(users => {
            profile.setUsers(users)
            .then(result => {res.status(200).send();})
            .catch(error => {
                res.status(412).send({msg: error.message});
            })
        })
    } else {
        res.status(412).send({ message: "Profile Not found" });
    }
})
}