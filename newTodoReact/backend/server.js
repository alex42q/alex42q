const express = require("express");
const app = express();
const PORT = 5000;
const cors = require("cors")
const bodyParser = require("body-parser")
const db = require("./lib/db")
const session = require("express-session")
const MongoDBStore = require("connect-mongodb-session")(session)
const bcrypt = require("bcryptjs")

const store = new MongoDBStore({
    uri:"mongodb://127.0.0.1:27017/newReactTodo",
    collection:'sessions'
})

app.use(session({
    secret:"newReactTodo",
    saveUninitialized:false,
    resave:false,
    store:store,
    cookie:{maxAge:17760000}
}))

app.use(cors({
    origin:"http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
}))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const RegisterUserRouter = require("./routers/RegisterRouter")
const LoginUserRouter = require("./routers/LoginRouter")
const HomeRouter = require("./routers/HomeRouter")
const LogoutRouter = require("./routers/LogoutRouter")
const ProfileRouter = require("./routers/ProfileRouter")
const ForgotRouter = require("./routers/ForgotRouter")

app.use(RegisterUserRouter)
app.use(LoginUserRouter)
app.use(HomeRouter)
app.use(LogoutRouter)
app.use(ProfileRouter)
app.use(ForgotRouter)

app.listen(PORT, function(err){
    if(err){
        console.log(err)
    }else{
        console.log(`Server is listening on port ${PORT}`)
    }
})