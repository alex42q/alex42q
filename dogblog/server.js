const express = require("express")
const app = express()
const dotenv = require('dotenv').config()
const ejs = require("ejs")
const session = require("express-session")
const mongoose = require("mongoose")
const bodyParser = require('body-parser')
const AdminBro = require('admin-bro')
const AdminBroExpress = require("admin-bro-expressjs")
const AdminBroMongoose = require("admin-bro-mongoose");
const passport = require("passport")
const passportLocalMongoose = require("passport-local-mongoose")
const users = require("./models/users")
const adminDB = require("./models/admins")
const cookieParser = require('cookie-parser')


app.use(session({
    secret: "alex",
    resave: false,
    saveUninitialized: false,
    cookie: {maxAge: 60000}
  }))


  app.use(passport.initialize());
  app.use(passport.session())
  
  passport.use(users.createStrategy())

  passport.serializeUser(users.serializeUser());
  
  passport.deserializeUser(users.deserializeUser());


mongoose.connect(process.env.MONGO_DB, {
useNewUrlParser: true,
useUnifiedTopology: true,
useFindAndModify: false,
useCreateIndex: true })
mongoose.set("useCreateIndex", true)

const db = mongoose.connection

db.on("error", console.log.bind(console, 'MongoDB error'))

AdminBro.registerAdapter(AdminBroMongoose)

//adminbrp
const AdminBroOptions = {
    resources : [
        { resource: users},
        { resource: adminDB}
    ],
}

const adminBro = new AdminBro({
    databases: [mongoose],
    rootPath: '/admin',
  })


const ADMIN = {
    email: process.env.ADMIN_EMAIL || 'admin@example.com',
    password: process.env.ADMIN_PASSWORD || 'lovejs',
}


const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
    cookieName: process.env.ADMIN_COOKIE_NAME || 'admin-bro',
    cookiePassword: process.env.ADMIN_COOKIE_PASS || 'alex',
    authenticate: async (email, password) => {
        if(ADMIN.password === password && ADMIN.email === email){
            return ADMIN
            
        }else{
            return null
        }
    }
})

app.use(adminBro.options.rootPath, router)


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.set("view engine", "ejs")
app.use(express.static("public"))


app.get("/", function(req, res){
    res.render("pages/index")
})

app.get("/index", function(req, res){
    if(req.isAuthenticated(user)){
        console.log(user)
        res.render("pages/indexlogin", {user: user})
    }else{
        console.log(user)
        res.redirect("/login")
    }
})


app.get('/register', function(req, res){
    res.render("pages/register")
})

app.get('/login', function(req, res){
    res.render("pages/login")
})

app.get('/success', function(req, res){
    res.render("pages/success")
})


app.get('/logout', function(req, res){
    req.session.destroy(function(err){
        if(err){
            console.log(err)
        }else{
            res.render("pages/logout")
        }
    })
      });

app.post('/register-form', function(req, res){
    users.register({ username: req.body.email}, req.body.password, function(err, user){
        if(err){
            console.log(err)
            res.redirect("/register")
        }else{
            users.authenticate('local')(req, res, function(){
                res.redirect("login")
            })
        }
    })
})

app.post("/login-form", function(req, res){
        user = new users({
        username : req.body.email,
        password : req.body.password
    })

    req.login(user, function(err){
        if(err){
            console.log(err)
        }else{
            users.authenticate('local')(req, res, function(){
                res.redirect("index")
            })
        }
    })
})




app.listen(process.env.PORT, function(err){
    if(err){
        console.log("error running")
    }else{
        console.log("Running")
    }
})
