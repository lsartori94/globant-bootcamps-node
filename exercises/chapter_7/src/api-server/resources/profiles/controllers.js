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
 return models.Profile.findAll({})
   .then(result => res.status(200).send(result))
   .catch(error => {
    res.status(500).send(error)
});
}

function getById(req,res){
   return models.Profile.findByPk(req.params.id)
    .then(result => {
    if (result){
        res.status(200).send(result)
    } else {
        res.status(404).send({ message: "Not found" });
    }
})  
    .catch(error => {
        res.status(500).send({ message: "Not found" });
    });
          
}

function createProfile(req, res){
   return models.Profile.create({
        name: req.body.name,
        description: req.body.description
    })
    .then(result => {res.status(201).send();
    })
    .catch(error => {
        res.status(500).send(error);
    })
   
}

function updateProfile(req, res){
   return models.Profile.update(req.body, {where: req.params})
    .then(result => {res.status(201).send();})
    .catch(error => {
        res.status(500).send({msg: error.message});
    })
}

function deleteProfile(req, res){
   return models.Profile.destroy({where: req.params})
    .then(result => {res.status(204).send();})
    .catch(error => {
        res.status(500).send(error);
    })
}

function assignUsers(req, res){
return models.Profile.findByPk(req.params.id)
.then(profile => {
    if (profile){
      models.User.findAll(req.body.id)
        .then(users => {
            profile.setUsers(users)
            .then(result => {res.status(200).send();})
            .catch(error => {
                res.status(500).send({msg: error.message});
            })
        })
    } else {
        res.status(404).send({ message: "Profile Not found" });
    }
})
}