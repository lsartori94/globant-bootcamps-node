'use strict';
const Joi = require('joi');


/**
 * Validates that an 'id' URL parameter is positive.
 * @param {Object} req - http.ServerRequest
 * @param {Object} res - http.ServerResponse
 * @param {Function} next - Next middleware to execute
 */
function validateId(req, res, next) {
    const schema = Joi.object().keys({
        id: Joi.number().positive()
    });
    Joi.validate(req.params, schema, (err, value) => {
        if (err) {
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
    validateId: validateId,
}
