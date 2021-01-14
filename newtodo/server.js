const express = require("express")
const app = express()
const crypto = require("crypto")
const bcrypt = require('bcrypt');
const mongoose = require("mongoose")
const ejs = require("ejs")
const session = require("express-session")
const bodyParser = require("body-parser")
const passport = require("passport")
const passportLocal = require("passport-local")
const auth = require('passport-local-authenticate');
const passportLocalMongoose = require("passport-local-mongoose")
const MongoDBStore = require("connect-mongodb-session")(session)
const nodemailer = require("nodemailer")
const sendgridTransport = require("nodemailer-sendgrid-transport")
const flash = require("connect-flash")
const RegisterUser = require("./models/users")
const Todo = require("./models/todos")
const { findOneAndUpdate } = require("./models/users")
const PORT = 3000;
let todos = ""


app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const transporter = nodemailer.createTransport(sendgridTransport({
    auth:{
        api_key : "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"
    }
}))

const store = new MongoDBStore({
    uri:"mongodb://localhost:27017/todosnew",
    collection:"sessions"
    })

app.use(session({
    secret:"todos",
    resave:false,
    saveUninitialized:false,
    store:store,
    cookie: {maxAge: 1360000}
}))

app.use(flash())



mongoose.connect("mongodb://localhost:27017/todosnew",{
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

const db = mongoose.connection
db.on("error", console.error.bind(console, "Mongo error"))

app.use(passport.initialize())
app.use(passport.session())
passport.use(RegisterUser.createStrategy())

passport.serializeUser(RegisterUser.serializeUser())
passport.deserializeUser(RegisterUser.deserializeUser())

app.get("/login", function(req, res){
    res.render("pages/login", {
        errorMessage: req.flash("error")
    })
})

app.get("/register", function(req, res){
    res.render("pages/register")
})

app.get("/", function(req, res){
    if(req.isAuthenticated()){
    RegisterUser.findOne({userId:req.user._id}, function(err,user){
        if(err){
            console.log(err)
        }else{
            Todo.find({userId:req.user._id}, function(err, todos){
                res.render("pages/index", { todos: todos })
            })

        }
    })

    }else{
        res.redirect("/login")
    }
})

app.get("/logout", function(req, res){
    if(req.isAuthenticated())
    req.session.destroy(function(err){
        if(err){
            console.log(err)
        }else{
            req.logOut()
            res.redirect("/login")
            console.log("Coockie Destroyed")
        }
    })
})

app.get("/reset", function(req, res){
    res.render("pages/reset")
})

app.get("/reset/:token", function(req, res){
    const token = req.params.token;
    RegisterUser.findOne({ resetToken:token, resetTokenExpiration: { $gt: Date.now()}})
    .then(user =>{
        res.render("pages/newpassword", {
            userId: user.id.toString(),
            passwordToken : token
        });
    })
    .catch(err =>{
        console.log(err)
    });

});

app.get("*", function(req, res){
    res.render("pages/404")
})

app.post("/register", function(req, res){
    RegisterUser.register({username:req.body.username, email:req.body.email}, req.body.password, function(err, user){
        if(err){
            console.log(err)
        }else{
            RegisterUser.authenticate("local")(req, res, function(){
                console.log("Registered")
                res.redirect("/")
                transporter.sendMail({
                    to:user.email,
                    from:"alexander@zorbadakis.me",
                    subject:"Register succeded",
                    html:"<h1>You have successfully registered</h1>"
                })
                console.log(user.email)
            })
        }
    })
})

app.post("/login-form", function(req, res, next){
    passport.authenticate('local',
    (err, user, info) => {
      if (err) {
        return next(err);
      }
  
      if (!user) {
          req.flash("error", "wrong username or password!")
        return res.redirect('/login');
      }
  
      req.logIn(user, function(err) {
        if (err) {
          return next(err);
        }
  
        return res.redirect('/');
      });
  
    })(req, res, next);
})

app.post("/remove-todo", function(req, res){
    if(req.isAuthenticated()){
            const todoId = req.body.id
            const dbId =  todos._id
            Todo.findByIdAndDelete(req.body.id, function(err, todo){
                console.log("Destroyed")
                res.redirect("/")
            
            })
    }
})

app.post("/todo", function(req, res){
    if(req.isAuthenticated()){
        todos = new Todo({
            todo:req.body.todo,
            userId:req.user._id,
            todoId: req.body.id
        })
        
        Todo.create(({todo:req.body.todo, userId:req.user._id, todoId:req.body.id}), function(err, todos){
            if(err){
                console.log(err)
            }else{
                res.redirect("/")
            }
        })
    }
})

app.post("/reset", function(req, res){
    crypto.randomBytes(32, (err, buffer) => {
        if(err){
            console.log(err);
            return res.redirect("/reset");
        };
        const token = buffer.toString("hex");
        RegisterUser.findOne({email: req.body.email}).then(user => {
            if(!user){
                console.log("not user");
                return res.redirect("/reset");
            };
            user.resetToken = token;
            user.resetTokenExpiration = Date.now() + 3600000;
           return user.save();
        })
        .then(result => {
            res.redirect("/login");
            transporter.sendMail({
                to:req.body.email,
                from:"alexander@zorbadakis.me",
                subject:"Password reset",
                html:`
                <p>You requested a password reset</p>
                <p>Click this <a href="http://localhost:3000/reset/${token}">Link</a> to set a new password. </p>
                `
            });
        })
        .catch(err =>{
            console.log(err);
        });
    });
});

app.post("/newpassword", function(req, res){
    const newPassword = req.body.password;
    const userId = req.body.userId;
    const passwordToken = req.body.passwordToken;


    RegisterUser.findOne({resetToken:passwordToken, resetTokenExpiration: {$gt: Date.now() }, 
    _id: userId
    })
    .then(user =>{
        user.setPassword(newPassword, (err) =>{
            user.save()
        })
    })
    .then(resutl =>{
        res.redirect("/login");
    })
    .catch(err =>{
        console.log(err);
    });
});





app.listen(PORT, function(err){
    if(err){
        console.log(err)
    }else{
        console.log(`Server listen on port ${PORT}`)
    }
})