const models = require('../../models');


module.exports={
    v1:{//initial version
        getAll: getAll,
        getById: getById,
        createUser: createUser,
        updateUser: updateUser,
        deleteUser: deleteUser
    }
};
//////////////////////////
/**
 * Retrieve all users
 * @param {Object} req - http.ServerRequest
 * @param {Object} res - http.ServerResponse
 */

function getAll(req, res){
   return models.User.findAll({})
   .then(result => res.status(200).send(result))
   .catch(error => {
    res.status(500).send(error)
});
}

function getById(req, res){
   return models.User.findByPk(req.params.id)
    .then(result => {
    if (result){
        res.status(200).send(result)
    } else {
        res.status(404).send({ message: "Not found" });
    }
})  
    .catch(error => {
        res.status(500).send(error);
    });
          
}

function createUser(req, res){
   return models.User.create({
        username: req.body.username,
        pass: req.body.pass,
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.name  
    })
    .then(result => {res.status(201).send();
    })
    .catch(error => {
        res.status(500).send(error);
    })
   
}

function updateUser(req, res){
   return models.User.update(req.body, {where: req.params})
    .then(result => {res.status(201).send();})
    .catch(error => {
        res.status(500).send({msg: error.message});
    })
}

function deleteUser(req, res){
   return models.User.destroy({where: req.params})
    .then(result => {res.status(204).send();})
    .catch(error => {
        res.status(500).send({msg: error.message});
    })
}



    


