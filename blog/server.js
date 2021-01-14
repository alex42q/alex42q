const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const ejs = require("ejs");
const request = require("request")
const MongoClient = require("mongodb").MongoClient;
const mongoose = require('mongoose');

const url = "mongodb://localhost:27017";
mongoose.connect("mongodb://localhost:27017/blog", { useNewUrlParser : true,  useUnifiedTopology : true  })

const dbName = "blog";




MongoClient.connect(url, function(err, client){
    if(err){
        console.log("not connected")
    }else{
        console.log("connected")
        const db= client.db(dbName)
        
        client.close()
    }
})

var postSchema = new mongoose.Schema({ 
    description: String,
    body: String,
    author: String
     });
var Post = mongoose.model('posts', postSchema);
console.log(Post)


app.use(bodyParser.json())
app.use (bodyParser.urlencoded ({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    Post.find({}, (err, posts)=>{
        res.render('index', {posts})
    })
    
 });


app.listen(3000, function(){
    console.log("server is up")
})