'use strict'
const Joi = require('joi');

/**
 * Validates.
 * @param {Object} req - http.ServerRequest
 * @param {Object} res - http.ServerResponse
 * @param {Function} next - Next middleware to execute
 */
function validateCreateProfile(req, res, next) {
    const schema = Joi.object().keys({
        // name is required
        // name must be string
        name: Joi.string().required(),
        //description is requerid
        //description must be min 7 characters
        description: Joi.string().min(7).required()
    });
    Joi.validate(req.body, schema, (err, value) => {
        if (err) {
            //TODO: create a friendly msg
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
    validateCreateProfile: validateCreateProfile
}
