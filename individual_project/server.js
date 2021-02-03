const express = require("express")
const app = express()
const ejs = require("ejs")
const passport = require("passport")
const session = require("express-session")
const auth = require("passport-local-authenticate")
const crypto = require("crypto")
const bcrypt = require('bcrypt');
const bodyParser = require("body-parser")
const cors = require("cors")
const LocalStrategy   = require('passport-local').Strategy;
const RegisterUser = require("./models/user")
const PORT = process.env.PORT || 3000


app.use(express.static("public"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:false }))
app.use(express.json())
app.set("view engine", "ejs")
app.use(cors())

app.use(session({
    secret:"individual_project",
    resave:false,
    saveUninitialized:false,
    cookie: {maxAge: 1360000}
}))

const indexRouter = require("./routes/index")
const registerRouter = require("./routes/register")
const loginRouter = require("./routes/login")
const logoutRouter = require("./routes/logout")
const profileRouter = require("./routes/profile")
const homeRouter = require("./routes/home")
const adminLogin = require("./routes/adminLogin")
const admin = require("./routes/admin")
const adminStudents = require("./routes/adminStudents")
const adminCourses = require("./routes/adminCourses")
const adminTrainers = require("./routes/adminTrainers")
const adminAss = require("./routes/adminAss")

app.use(passport.initialize())
app.use(passport.session())

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    connection.query("select * from users where id = "+id,function(err,rows){	
        done(err, rows[0]);
    });
});

passport.use(new LocalStrategy({
    usernameField : 'username',
    passwordField : 'password',
    passReqToCallback : true // allows pass back of entire request to the callback
},
function(req, username, password, done) { // callback with email and password from form
     // Match User
     connection.query("SELECT * FROM `users` WHERE `username` = '" + username + "'",function(err,rows){
        if (err)
            return done(err);
         // Check if Email exists in database
         if (!rows.length) {
            return done(null, false, { message: 'Email is not registered' }); 
        } 

        // Check if password matches the one found in the database (To Do: Encrypt this later!)
        if (!( rows[0].password == password))
            return done(null, false, { message: 'Password is incorrect.' });

        // All is well, return successful user
        return done(null, rows[0]);         
    });
}));


app.use(indexRouter)
app.use(registerRouter)
app.use(loginRouter)
app.use(logoutRouter)
app.use(profileRouter)
app.use(homeRouter)
app.use(adminLogin)
app.use(admin)
app.use(adminStudents)
app.use(adminCourses)
app.use(adminTrainers)
app.use(adminAss)

app.listen(PORT, function(err){
    if(err){
        console.log(err)
    }else{
        console.log(`Server is listening on port ${PORT}`)
    }
})