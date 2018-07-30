const express = require('express');
const router = express.Router();
const expressJoiMiddleware = require('express-joi-middleware');
const Joi = require('joi');

const userCreateSchema = {
  body: {
    name: Joi.string().required(),
    username: Joi.string().email().required(),
    password: Joi.string().strip().required(),
    confirm: Joi.any().valid(Joi.ref('password')).required().options({ language: { any: { allowOnly: 'passwords and confirmation must be equals.' } } }),
  },
};

const userUpdateSchema = {
  body: {
    name: Joi.string().required(),
    username: Joi.string().email().required()
  },
};

const options = {
  wantResponse: true,
};

const userController = require('../controllers/user.controller');

router.post('/', expressJoiMiddleware(userCreateSchema, options), userController.create);

router.get('/list', userController.findAll);

router.get('/:userId', userController.findOne);

router.put('/:userId', expressJoiMiddleware(userUpdateSchema, options), userController.update);

router.delete('/:userId', userController.delete);

module.exports = router;