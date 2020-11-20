const express = require("express");
const bodyParser = require("body-parser");
var path = require('path');
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/signup");
var db = mongoose.connection;
db.on("error", console.log.bind(console, "Error friend"));
db.once("open", function(callback){
    console.log("success")
})

const app = express();

app.use(bodyParser.json());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.post('/sign_up', function(req, res){
    var name = req.body.name;
    var email = req.body.email;
    var pass = req.body.password;
    var phone = req.body.phone;

    var data = {
        "name":name,
        "email":email,
        "password": pass,
        "phone": phone
    }

    db.collection('signup').insertOne(data, function(err, collection){
        if(err) throw err;
        console.log("success record");
    });

    return res.sendFile(path.join(__dirname + '/success.html'))
})

app.get('/', function(req, res){

    return res.sendFile(path.join(__dirname + '/index.html'))
}).listen(3000)

console.log("server is up")