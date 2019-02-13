var models = require('../models');
var express = require('express');
var router = express.Router();
var Sequelize = require('sequelize');

router.post('/init', function (req, res) {
	var customer;
	models.customer.create({
		//customerid: db.sequelize.Utils.generateUUID(),
		firstname: req.body.firstname,
		lastname: req.body.lastname,
		age: req.body.age
	}).then(createdCustomer => {
		// Send created customer to client
		customer = createdCustomer;

		return models.address.create({
			street: req.body.street,
			phone: req.body.phone
		})
	}).then(address => {
		customer.setAddress(address)
		res.send('OK');
	})
});

router.get('/all', function (req, res) {

	models.customer.findAll({
		attributes: [
			['uuid', 'customerId'],
			['firstname', 'name'], 'age'
		],
		include: [{
			model: models.address,
			where: {
				fk_customerid: Sequelize.col('customer.uuid')
			},
			attributes: ['street', 'phone']
		}]
	}).then(customers => {
		res.send(customers);
	});

});



module.exports = router;