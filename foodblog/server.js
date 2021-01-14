const express = require("express");
const app = express();
const ejs = require("ejs");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Register = require('./models/register')
const Posts = require('./models/posts')
const session = require("express-session")


mongoose.connect('mongodb://localhost:27017/foodblog', { useNewUrlParser: true, useUnifiedTopology: true })

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Mongodb error'))

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }))

app.use(session({ 
    secret: "Alex", 
    cookie: { maxAge: 6000000 },
    resave: false, 
    saveUninitialized: false
})); 

app.use(bodyParser.json())

app.get("/", function(req, res){
    Posts.find({}, function(err, posts){
        res.render("pages/index", {posts: posts})
    })
    
})

app.get("/register", function(req, res){
    res.render("pages/register")
})

app.get('/login', function(req, res){
    res.render('pages/login')
})

app.post("/register-form", function(req, res){
        User = {
        sees: req.session,
        email: req.body.email,
        password: req.body.password
    }
    db.collection("registers").insertOne(User, function(err){
        if(err) throw err;
        console.log("Inserted")
        console.log(User)
    })

    res.render("pages/success")
})


app.post('/login-form', function(req, res){
        UserLogin = {
        session: req.session.loggedin = true,
        email:req.body.email,
        password: req.body.password
    }
    Register.findOne({email: UserLogin.email, password: UserLogin.password}, function(err, User){
        if(err) {
            console.log(err);
            return res.status(500).send()
        }
        if(User!=UserLogin.email && User!=UserLogin.password){
            return res.render("pages/failLogin")
        }else if(User === UserLogin.email && user === UserLogin.password)
        return res.redirect("logInIndex")
        
    })
})

app.get('/failLogin', function(req, res){
    return res.render("pages/failLogin")
})

app.get('/logInIndex', function(req, res){
    Posts.find({}, function(err, posts){
        if(req.session.loggedin){
            console.log(req.session.loggedin)
            let logInrender ="You have logged in as " + UserLogin.email
            console.log(logInrender)
            res.render("pages/logInIndex", {logInrender: logInrender, posts: posts})
        }else{
            res.render("pages/failLogin")
        }

    })


})


app.get('/logout', function(req, res){
    req.session.destroy(function(err){
        if(err){
            console.log("error on the log out")
        }else{
            return res.redirect('/')
        }
    })
})


app.listen(3000, function(e){
    if(e){
        console.log("not running")
    }else{
        console.log("server is running")
    }
})