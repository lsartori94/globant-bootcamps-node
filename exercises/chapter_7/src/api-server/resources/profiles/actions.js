const Joi = require("joi");

module.exports = {
	v1: {
		validateId: validateId,
		validateBodyPost: validateBodyPost,
		validateBodyPut: validateBodyPut
	}
};

/**
 * Validates the params received from the body of the post request
 * @param {Object} req
 * @param {Object} res
 * @param {*} next
 */
function validateBodyPost(req, res, next) {
	const schema = Joi.object().keys({
		name: Joi.string()
			.required()
			.min(4),
		description: Joi.string().required()
	});
	const data = req.body;
	Joi.validate(data, schema, (err, value) => {
		if (err) {
			res.status(501).json({
				status: "error",
				message: "Invalid format of params",
				data: data
			});
		} else {
			next();
		}
	});
}

/**
 * Validates the params received from the body of the put request
 * @param {Object} req
 * @param {Object} res
 * @param {*} next
 */
function validateBodyPut(req, res, next) {
	const schema = Joi.object().keys({
		name: Joi.string()
			.min(4),
		description: Joi.string()
	});
	const data = req.body;
	Joi.validate(data, schema, (err, value) => {
		if (err) {
			res.status(501).json({
				status: "error",
				message: "Invalid format of params",
				data: data
			});
		} else {
			next();
		}
	});
}

/**
 * Validates the id received from the params
 * @param {Object} req
 * @param {Object} res
 * @param {*} next
 */
function validateId(req, res, next) {
	const schema = Joi.object().keys({
		profileId: Joi.number().positive()
	});
	const data = req.params;
	Joi.validate(data, schema, (err, value) => {
		if (err) {
			res.status(422).json({
				status: "error",
				message: "Invalid ID",
				data: data
			});
		} else {
			next();
		}
    });
    
}
