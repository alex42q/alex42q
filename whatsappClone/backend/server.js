const express = require("express")
const app = express()
const PORT = 5000
const db = require("./lib/db")
const bodyParser = require("body-parser")
const cors = require("cors")
const session = require("express-session")
const MongoDBStore = require("connect-mongodb-session")(session)

const store = new MongoDBStore({
    uri:"mongodb://localhost:27017/whatsupClone",
    collection:"sessions"
})

app.use(session({
    secret:"whatsappClone",
    resave:false,
    saveUninitialized:false,
    store:store,
    cookie:{maxAge:17760000}
}))

app.use(cors({
    origin:"http://localhost:3000",
    methods:"GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials:true
}))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const RegisterRouter = require("./routers/RegisterRouter")
const LoginRouter = require("./routers/LoginRouter")

app.use(RegisterRouter)
app.use(LoginRouter)

app.listen(PORT, function(err){
    if(err){
        console.log(err)
    }else{
        console.log(`Server is up on port ${PORT}`)
    }
})