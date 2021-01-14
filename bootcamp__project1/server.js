const express = require("express");
const app = express();
const mysql = require("mysql")
const path = require("path")
const databa = require('./public/db.js')

app.use(express.static(path.join(__dirname, "public")))

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/index.html'))
})

app.get('/index.html', function(req, res){
    res.sendFile(path.join(__dirname + '/index.html'))
})

app.get('/student.html', function(req, res){
    res.sendFile(path.join(__dirname + '/student.html'))
})

app.get('/success.html', function(req, res){
    res.sendFile(path.join(__dirname + '/success.html'))
})

app.get('/trainer.html', function(req, res){
    res.sendFile(path.join(__dirname + '/trainer.html'))
})

app.get('/scholarship.html', function(req, res){
    res.sendFile(path.join(__dirname + '/scholarship.html'))
})


app.listen(3000, console.log("server is up"));
