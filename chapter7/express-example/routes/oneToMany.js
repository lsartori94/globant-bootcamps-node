var models = require('../models');
var express = require('express');
var router = express.Router();

router.get('/init', function (req, res) {

	// Apple company
	models.company.create({
		name: 'Apple',
		street: 'Cupertino, CA 95014',
		phone: '1-408-996-1010',
		products: [{
				code: "A-123",
				name: "Iphone7",
				details: "Price: 649.00 USD & FREE shipping"
			},
			{
				code: "A-456",
				name: "IPadPro",
				details: "Price: 417.67 USD & FREE shipping"
			}
		]
	}, {
		include: [models.product]
	}).then(() => {

		console.log("-----------> Apple is created");

		models.company.create({
			name: 'Samsung',
			street: 'Seocho District, Seoul, South Korea',
			phone: '+82-2-2053-3000',
			products: [{
					code: "S-012",
					name: "GalaxyJ7",
					details: "Price: 219.00 USD & FREE shipping"
				},
				{
					code: "S-456",
					name: "GalaxyTabA",
					details: "Price: 299.99 USD & FREE shipping"
				}
			]
		}, {
			include: [models.product]
		}).then(() => {
			console.log("-----------> Samsung is created");
		})
	}).then(() => {
		res.send("Done!");
	})
});

router.get('/all', function (req, res) {
	
	models.company.findAll({
		attributes: [['id', 'companyId'], 'name', 'street', 'phone'],
		include: [{
			model: models.product,
			// where: { companyId },
			attributes: ['code', 'name', 'details']
		}]
	}).then(function (companies) {

	   res.send(companies);
	});


});



module.exports = router;