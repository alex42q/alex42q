const express = require("express")
const app = express()
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const passport = require("passport")
const passportLocal = require("passport-local")
const session = require("express-session")
const auth = require('passport-local-authenticate');
const passportLocalMongoose = require("passport-local-mongoose")
const cors = require("cors")
const MongoDBStore = require("connect-mongodb-session")(session)
const User = require("./models/users")
const Todo = require("./models/todo")
const PORT = 5000



const store = new MongoDBStore({
    uri:"mongodb://localhost:27017/reactTodo",
    collection:"sessions"
})

app.use(session({
    secret:"reactTodo",
    resave:false,
    saveUninitialized:false,
    store:store,
    cookie: {maxAge: 1560000}
}))
app.use(
    cors({
         origin: "http://localhost:3000", // allow to server to accept request from different origin
         methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
         credentials: true, // allow session cookie from browser to pass through
   })
);
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/reactTodo",{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify:false
})


const db = mongoose.connection
db.on("error", console.error.bind(console, "Mongo error"));

app.use(passport.initialize())
app.use(passport.session())
passport.use(User.createStrategy())

passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

app.get("/", function(req, res){
    if(req.isAuthenticated()){
        res.send("authenticated")
    }else{
        res.send("not authenticated")
    }
})

app.get("/showTodos", function(req, res){
    if(req.isAuthenticated()){
        Todo.find({userId:req.user._id})
        .then(findTodos=>{
            res.send(findTodos)
        })
        .catch(err=>{
            console.log(err)
        })
    }
})

app.get("/profile", function(req,res){
    if(req.isAuthenticated()){
        User.findOne({username:req.user.username})
        .then(findUsername=>{
            res.send({
            authenticate:"authenticated",
            user:findUsername
        })

        })
        .catch(err=>{
            console.log(err)
        })
        
    }else{
        res.send("not authenticated")
    }
})


app.get("/logout", function(req, res, next){
    if(req.isAuthenticated()){
        req.session.destroy(function(err){
            if(err){
                return next(err)
            }else{
                req.logOut()
                console.log("cookie deleted")
                res.send("loggedout")
            }
        })
    }
})

app.post("/users", function(req, res){
    const user = new User({
        username:req.body.username,
    })
    User.register(user,req.body.password, function(err, user){
        if(err){
            console.log(err)
        }else{
            User.authenticate("local")(req, res, function(){
                console.log("User registered")
            })
        }
    })
})

app.post("/login", function(req, res, next){
    passport.authenticate("local", 
    (err, user, info)=>{
        if(err){
            return next(err);
        }
        if(!user){
            console.log("Not user!")
        }

        req.logIn(user, function(err){
            if(err){
                res.send("notLoggedin")
                return next(err)
            }else{ 
                console.log("Logged In!")
                res.send("loggedIn")
                next();
            }
        })
    })(req, res, next);
})

app.post("/getTodos", function(req, res, next){
    if(req.isAuthenticated()){
    const todos = new Todo({
        todo:req.body.todo,
        userId:req.user._id
    })
    Todo.create(todos, function(err,data){
        if(err){
            console.log(err)
        }else{
            console.log(data)
            console.log("todo added")
            res.send("todo Added")
        }
    })
  }
})

app.post("/deleteTodos", function(req, res, next){
    Todo.findOneAndDelete({_id:req.body._id})
    .then(getId=>{
        console.log(getId)
        res.json(getId)
    })
    .catch(err=>{
        console.log(err)
        })
})

app.post("/updateEmail", function(req, res){
    if(req.isAuthenticated()){
        User.findOneAndUpdate({username:req.body.username})
        .then(changeEmail=>{
            res.send("email changed")
        })
        .catch(err=>{
            console.log(err)
        })
    }
})

app.post("/ticked", function(req, res, next){
    Todo.findOneAndUpdate({_id:req.body._id}, {ticked:req.body.ticked}, {new:true,upsert:true})
        .then(tickTodo=>{
            console.log(tickTodo.ticked)
            res.send(tickTodo)
        })
    .catch(err=>{
        console.log(err)
    })
})

app.listen(PORT, function(err){
    if(err){
        console.log(err)
    }else{
        console.log(`Back end server is up and listening on ${PORT}`)
    }
    
})