
const Joi = require('joi');

module.exports = {
    v1:{
        validateId: validateId
        }
    }


/**
 * Validates the id received from the params
 * @param {Object} req 
 * @param {Object} res 
 * @param {*} next 
 */
function validateId(req, res, next) {
    const schema = Joi.object().keys({
        roleId: Joi.number().positive()
    });
    const data = req.params;
    Joi.validate(data, schema, (err, value) => {
        if (err) {
            res.status(422).json({
                status: 'error',
                message: 'Invalid ID',
                data: data
            })
        } else {
            next();
        }
    })

}