const express = require('express')
const app = express()
const mongoose = require("mongoose")
const session = require("express-session")
const passport = require("passport")
const passportLocalMongoose = require("passport-local-mongoose")
const MongoDBStore = require('connect-mongodb-session')(session)
const passportLocal = require("passport-local")
const auth = require('passport-local-authenticate');
const ejs = require("ejs")
const bodyParser = require("body-parser")
const RegisterUser = require("./models/users")
const PORT = 3000

app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:false }))

const store = new MongoDBStore({
    uri:"mongodb://localhost:27017/connectnowBlog",
    collection:'sessions'
})

app.use(session({
    secret:'connectnowBlog',
    resave:false,
    saveUninitialized:false,
    store:store,
    cookie: {maxAge: 1360000}
}))

mongoose.connect("mongodb://localhost:27017/connectnowBlog", { 
    useNewUrlParser: true, 
    useUnifiedTopology: true}
    )

const db = mongoose.connection
db.on("error", console.error.bind(console, 'Mongo Error'))

app.use(passport.initialize())
app.use(passport.session())
passport.use(RegisterUser.createStrategy())

passport.serializeUser(RegisterUser.serializeUser())
passport.deserializeUser(RegisterUser.deserializeUser())

app.get("/", function(req,res){
    res.render("pages/index")
})

app.get("/register", function(req, res){
    res.render("pages/register")
})

app.get("/login", function(req, res){
    res.render("pages/login")
})

app.post("/register-form", function(req, res){
    RegisterUser.register({username:req.body.username, firstname:req.body.firstname, lastname:req.body.lastname}, req.body.password, function(err, user){
        if(err){
            console.log(err)
        }else{
            RegisterUser.authenticate("local")(req,res ,function(){
                console.log("Registered")
                res.redirect("/")
            })
        }
    })
})

app.post("/login-form", function(req, res, next){
    passport.authenticate("local", 
    (err,user, info) =>{
        if(err){
            return next(err)
        }

        if(!user){
            return res.redirect("/login")
        }

        req.logIn(user, function(err){
            if(err){
                return next (err);
            }
            console.log('logged in')
            return res.redirect("/")
        });
    })(req, res, next);
})

app.listen(PORT, function(err){
    if(err){
        console.log(err)
    }else{
        console.log(`server is listening on port ${PORT}`)
    }
})