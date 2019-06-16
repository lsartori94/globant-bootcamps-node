var _ = require('lodash');
const Joi = require("joi");

module.exports = {
    validateProfileId: validateProfileId,
    validateUserId:validateUserId,
    validateRolId:validateRolId
    

}

function validateProfileId(req, res, next) {
    const { id } = req.params;
    //console.log('validations');
    const schema = Joi.object().keys({
        id: Joi.number().min(1).required()
    });

     Joi.validate({id : id }, schema, err => {
        if (err) {
            // send a 422 error response if validation fails
            res.status(422).json({
                status: 'error',
                message: `Invalid request id: ${id}`,
            });
        } else {
        next();
        }
    })
    
}

function validateUserId(req, res, next) {
     const { id } = req.params;
     console.log('validations users');
     const schema = Joi.object().keys({
         id: Joi.number().min(1).required()
     });
 
      Joi.validate({id : id }, schema, err => {
         if (err) {
             // send a 422 error response if validation fails
             res.status(422).json({
                 status: 'error',
                 message: `Invalid request id: ${id}`,
             });
         } else {
         next();
         }
     })
     
 }

 
function validateRolId(req, res, next) {
    const { id } = req.params;
  //  console.log('validations rol');
    const schema = Joi.object().keys({
        id: Joi.number().min(1).required()
    });

     Joi.validate({id : id }, schema, err => {
        if (err) {
            // send a 422 error response if validation fails
            res.status(422).json({
                status: 'error',
                message: `Invalid request id: ${id} `, 
            });
        } else {
            
        next();
        }
    })
    
}