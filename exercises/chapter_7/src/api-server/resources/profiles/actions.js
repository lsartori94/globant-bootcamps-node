const Joi = require('joi')
module.exports={
    validateId: validateId,
    validateBodyInput: validateBodyInput
}
//validate body Post or Put
function validateBodyInput(req, res, next){
    const schema = Joi.object().keys({
        name: Joi.string().required(),
        description: Joi.string().required()
    });
    Joi.validate(req.body, schema, (err, result)=>{
        if(err){
            res.status(422).send(err.message);
        } else {
        next();
        }
    })
}
//validate Id
function validateId(req, res, next){
    const schema = Joi.object().keys({
        id: Joi.number().integer().min(0)
    });
    Joi.validate(req.params, schema, (err, result)=>{
        if(err){
            res.status(412).send(err.message);
        } else {
        next();
        }
    })
}

    
    



