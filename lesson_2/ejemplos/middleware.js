var express = require('express');
var app = express();

app.use(function (req, res, next) {
  console.log('Time:', Date.now());
  console.log('Request Type:', req.method);
  next();
});

app.get('/', (req, res) => {
  res.send('Middleware example');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
