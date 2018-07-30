const express = require('express');
let router = express.Router();


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Learn NodeJS Lesson 4' });
});

module.exports = router;