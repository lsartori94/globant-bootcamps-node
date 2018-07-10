var express = require('express');

var router = new express.Router();

var logger = require('./logger').Logger;



router.use(function timeLog(req, res, next){
  logger.info('This is a Test');
  next()
});

router.get('/', function(req, res) {
  res.send('You wanted to access the main page? Well, you did it! Yay!')
});

module.exports = router;
