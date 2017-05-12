const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

// listen on connection event for incoming sockets
io.on('connection', function(socket){
  console.log('a user has connected!');

  socket.on('disconnect', function(){
    console.log('user disconnected');
  })
});

http.listen(3000, function(){
  console.log('listening on port 3000');
});