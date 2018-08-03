let mongoose = require('mongoose');

const uri = 'mongodb://mongo_db/lesson_4';

const connection =  mongoose.connect(uri);

connection
	.then(db => {
		console.log(`Successfully connected to ${uri}.`);
		return db;
	})
	.catch(err => {
		if (err.message.code === 'ETIMEDOUT') {
			console.log('Attempting to re-establish database connection.');
			mongoose.connect(uri);
		} else {
			console.error('Error while attempting to connect to database:');
			console.error(err);
		}
  });

module.exports = connection;
