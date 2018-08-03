var express = require('express');
var router = express.Router();
var User = require('../models/User');

/* GET users listing. */
router.get('/create', function(req, res) {
  // create a new user called Jhon Doe
  var jDoe = new User({
    name: 'Jhon Doe',
    username: 'jdoe',
    password: 'password' 
  });

  jDoe.save(function(err) {
    if (err) throw err;
  
    res.send('User saved successfully!');
  });
  
});

router.get('/list', function(req, res) {
  // create a new user called Jhon Doe
  User.find({}, function(err, users) {
      res.json({ users: users });
  });
  
});

module.exports = router;