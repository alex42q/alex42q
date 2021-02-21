const express = require("express")
const app = express()
const http = require('http').Server(app);
const io = require("socket.io")(http)

io.on('connection', (socket) =>{
    console.log('a user is connected')
  })


const server = http.listen(3001, () => {
    console.log('server is running on port', server.address().port);
  });

  module.exports= io