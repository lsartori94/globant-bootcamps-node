//const _ =require('lodash');
const actions=require('./actions');
const joi= require('joi');
const models = require('../../models');


module.exports={
    v1:{//initial version
        getAll: getAll,
        getById: getById,
        createRole: createRole,
        updateRole: updateRole,
        deleteRole: deleteRole
    }
};
//////////////////////////
/**
 * Retrieve all roles
 * @param {Object} req - http.ServerRequest
 * @param {Object} res - http.ServerResponse
 */

function getAll(req,res){
   models.Role.findAll({})
   .then(result => res.status(200).send(result))
   .catch(error => {
    res.status(412).send({ message: error.message })
});
}

function getById(req,res){
    console.log(req.params);
    models.Role.findByPk(req.params.id)
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

function createRole(req, res){
    models.Role.create({
        name: req.body.name
    })
    .then(result => {res.status(201).send();
    })
    .catch(error => {
        res.status(412).send({msg: error.message});
    })
   
}

function updateRole(req, res){
    models.Role.update(req.body, {where: req.params})
    .then(result => {res.status(201).send();})
    .catch(error => {
        res.status(412).send({msg: error.message});
    })
}

function deleteRole(req, res){
    models.Role.destroy({where: req.params})
    .then(result => {res.status(204).send();})
    .catch(error => {
        res.status(412).send({msg: error.message});
    })
}




    
    
    




