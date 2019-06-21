var _ = require('lodash');
const Joi = require("joi");

module.exports = {
    validateProfileId: validateProfileId,
    validateUserId: validateUserId,
    validateRolId: validateRolId,
    validateReqBodyProfile: validateReqBodyProfile,
    validateReqBodyUser: validateReqBodyUser,
    validateReqBodyRole: validateReqBodyRole


}

function validateProfileId(req, res, next) {
    const { id } = req.params;
    //console.log('validations');
    const schema = Joi.object().keys({
        id: Joi.number().min(1).required()
    });

    Joi.validate({ id: id }, schema, err => {
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

    Joi.validate({ id: id }, schema, err => {
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

    Joi.validate({ id: id }, schema, err => {
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

function validateReqBodyProfile(req, res, next) {
    const data = req.body;
    const schema = Joi.object().keys({
        name: Joi.string().min(3).required(),

        description: Joi.string().min(4)


    });

    Joi.validate(data, schema, (err, value) => {
        if (err) {
            // send a 422 error response if validation fails
            res.status(422).json({
                status: 'error',
                message: `Invalid request, message: ${err} `,
            });
        } else {

            next();
        }
    })

}

function validateReqBodyRole(req, res, next) {
    const data = req.body;
    const schema = Joi.object().keys({

        name: Joi.string().min(3).required(),

    });
    Joi.validate(data, schema, (err, value) => {
        if (err) {
            // send a 422 error response if validation fails
            res.status(422).json({
                status: 'error',
                message: `Invalid request, message: ${err} `,
            });
        } else {

            next();
        }
    })

}

function validateReqBodyUser(req, res, next) {
    const data = req.body;
    const schema = Joi.object().keys({
        name: Joi.string().min(3).required(),

        lastName: Joi.string().min(3),

        email: Joi.string().email()

    });
    Joi.validate(data, schema, (err, value) => {
        if (err) {
            // send a 422 error response if validation fails
            res.status(422).json({
                status: 'error',
                message: `Invalid request, message: ${err} `,
            });
        } else {

            next();
        }
    })

}

