const express = require('express');
const app = express();
const ejs = require("ejs")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const session = require("express-session")
const MongoDBStore = require('connect-mongodb-session')(session);
const passport = require("passport")
const passportLocal = require("passport-local")
const auth = require('passport-local-authenticate');
const passportLocalMongoose = require("passport-local-mongoose")
const RegisterUser = require("./models/users")
const Posts = require("./models/posts")
const PORT = 3000;

app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:false }))

const store = new MongoDBStore({
    uri:"mongodb://localhost:27017/newfacebook",
    collection:"sessions"
})

app.use(session({
    secret:"newfacebook",
    saveUninitialized:false,
    resave:false,
    store:store,
    cookie: {maxAge: 1360000}
}))

mongoose.connect("mongodb://localhost:27017/newfacebook", 
{useUnifiedTopology: true,
useNewUrlParser: true
})

const db = mongoose.connection
db.on("error", console.error.bind(console, "Mongo error"))


//routes
const indexRoutes = require("./routes/index")
const mainRoutes = require("./routes/main")
const searchRoutes = require("./routes/search")

//passport deserialize and serialize

passport.use(RegisterUser.createStrategy())

passport.serializeUser(RegisterUser.serializeUser())
passport.deserializeUser(RegisterUser.deserializeUser())
app.use(passport.initialize())
app.use(passport.session())

//apis
app.use(indexRoutes)
app.use(mainRoutes)
app.use(searchRoutes)


//listen
app.listen(PORT, (err) =>{
    if(err){
        console.log(err)
    }
    console.log(`Server is listening on server `)
})
