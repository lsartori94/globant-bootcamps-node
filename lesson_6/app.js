var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

const userDisconnected = ()  => console.log('user disconnected');

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  
  socket.on('disconnect', userDisconnected);

  socket.on('chat message', function(msg, username){
    io.emit('chat message', `${username}: ${msg}`);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});