'use strict'
const Joi = require('joi');

/**
 * 
 * @param {Object} req - http.ServerRequest
 * @param {Object} res - http.ServerResponse
 * @param {Function} next - Next middleware to execute
 */
function validateCreateUser(req, res, next) {
    const schema = Joi.object().keys({
        // username is required
        // username must be string
        username: Joi.string().required(),
        // pass is required
        // pass accepts alphanumeric strings at least 7 characters long
        pass: Joi.string().min(7).alphanum().required(),
        // email is required
        // email accepts only valid lowercase email addresses
        email: Joi.string().email().lowercase().required(),  
        //name is required
        //name must be string
        name: Joi.string().required(),
        //lastname is required
        //lastname must be string
        lastname: Joi.string().required()
    });
    Joi.validate(req.body, schema, (err, value) => {
        if (err) {
            //TODO: create a friendly msg
            console.log('Error', err.details);
            console.log('Valor', value);
            res.status(400).send({
                status: 'error',
                message: 'Invalid request data',
                data: req.data
            });
        } else {
            next();
        }
    });
}

module.exports = {
    validateCreateUser: validateCreateUser
}
