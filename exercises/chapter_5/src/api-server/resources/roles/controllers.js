//const _ =require('lodash');
const actions=require('./actions');
const rolesMock= require ('../../../test-helpers/roles');
const joi= require('joi');


module.exports={
    v1:{//initial version
        getAll: getAll,
        getById: getById
    }
};
//////////////////////////
/**
 * Retrieve all roles
 * @param {Object} req - http.ServerRequest
 * @param {Object} res - http.ServerResponse
 */
function getAll(req,res){
    res.status(200).send(rolesMock.ALL_ROLES);
}

function getById(req,res){
        actions.validateId(req,res,actions.validateIdExist(req,res));
}




    
    
    




