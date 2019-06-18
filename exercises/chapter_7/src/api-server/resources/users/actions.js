const Joi = require('joi')
module.exports={
    validateId: validateId,
    validateBodyInput: validateBodyInput
}
//validate body Post or Put
function validateBodyInput(req, res, next){
    const schema = Joi.object().keys({
        username: Joi.string().alphanum().max(20).required(),
        pass: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
        name: Joi.string().max(15).required(),
        lastname: Joi.string().max(15).required(),
        email: Joi.string().email().required()
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