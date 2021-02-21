const express = require("express")
const app = express()
const PORT = 5000
const bodyParser = require("body-parser")
const db = require("./lib/db")
const session = require("express-session")
const MongoDBStore = require("connect-mongodb-session")(session)
const cors = require("cors")
const bcrypt = require("bcryptjs")

const store = new MongoDBStore({
    uri:"mongodb://localhost:27017/groupReactTodo",
    collection:"sessions"
})

app.use(session({
    secret:"groupReactTodo",
    saveUninitialized:false,
    resave:false,
    store:store,
    cookie:{maxAge:17760000}
}))


app.use(cors({
    origin:"http://localhost:3000",
    methods:"GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials:true,
}))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const RegisterRouter = require("./routes/RegisterRouter")
const LoginRouter = require("./routes/LoginRouter")
const MainRouter = require("./routes/MainRouter")
const LogOutRouter = require("./routes/LogoutRouter")

app.use(RegisterRouter)
app.use(LoginRouter)
app.use(MainRouter)
app.use(LogOutRouter)

app.listen(PORT, function(err){
    if(err){
        console.log(err)
    }else{
        console.log(`Server is running on port ${PORT}`)
    }
})