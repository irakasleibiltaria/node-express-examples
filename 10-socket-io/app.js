// http://socket.io/
// https://github.com/guille/chat-example.git

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile('index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    console.log(msg);
    io.emit('chat message', msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});