const express = require('express');
const redis = require('redis');

let router = express.Router();

/* redis */
const host = process.env.REDIS_PORT_6379_TCP_ADDR || '127.0.0.1';
const port = process.env.REDIS_PORT_6379_TCP_PORT || 6379;
let client = redis.createClient(port, host);

/* GET home page. */
router.get('/', function(req, res, next) {
  client.incr('counter', function(err, result) {
    if (err) {
      return next(err);
    }

    res.render('index', { title: 'Express', counter: result });
  });
});

module.exports = router;