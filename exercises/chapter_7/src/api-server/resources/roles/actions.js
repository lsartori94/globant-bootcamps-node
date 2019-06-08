const Joi = require("joi");

module.exports = {
	v1: {
		validateId: validateId,
		validateBody: validateBody
	}
};

/**
 * Validates the params received from the body of the request
 * @param {Object} req
 * @param {Object} res
 * @param {*} next
 */
function validateBody(req, res, next) {
	const schema = Joi.object().keys({
		name: Joi.string()
			.required()
			.min(4)
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
    roleId: Joi.number().positive()
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
