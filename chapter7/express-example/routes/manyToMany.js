var models = require('../models');
var express = require('express');
var router = express.Router();

router.get('/init', function (req, res) {
  models.person.create({
		firstname: "Jack",
		lastname: "Davis",
		age: 37		
	}).then(jack => {
			let people = [jack];
			
			return models.person.create({
				firstname: "Mary",
				lastname: "Taylor",
				age: 21
			}).then(mary => {
				people.push(mary);
				return people;
			})
	}).then(people => {
		models.project.create({
			code: 'P-123',
			name: 'JSA - Branding Development'
		}).then(p123 => {
			p123.setWorkers(people);
		})
		
		models.project.create({
			code: 'P-456',
			name: 'JSA - DataEntry Development'
		}).then(p456 => {
			p456.setWorkers(people);
		})
	}).then(() => {
		res.send("OK");
	});
});

router.get('/all', function (req, res) {
  models.project.findAll({
		attributes: ['code', 'name'],
		include: [{
			model: models.person, as: 'Workers',
			attributes: [['firstname', 'name'], 'age'],
			through: {
				attributes: ['projectId', 'personId'],
			}
		  }]
	}).then(projects => {
	   res.send(projects);
	});
});



module.exports = router;