const express = require("express")
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
   res.sendfile('index.html');
});

app.get("/test", function(req, res){
    res.send("test")
    console.log(newio)
})


const newio = io.on('connection', function (socket) {
  socket.on( 'new_notification', function( data ) {
    console.log(data.title,data.message);
    io.sockets.emit( 'show_notification', { 
      title: data.title, 
      message: data.message, 
      icon: data.icon, 
    });
  });
});

http.listen(3000, function() {
   console.log('listening on localhost:3000');
});