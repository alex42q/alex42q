const express =  require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const bcrypt = require("bcryptjs")
const session = require("express-session")
const MongoDBStore = require("connect-mongodb-session")(session)
const db = require("./lib/db")
const PORT = 5000

const store = new MongoDBStore({
    uri:"mongodb://localhost:27017/netstudio",
    collection:"sessions"
})

app.use(session({
    secret:"netstudio",
    saveUninitialized:false,
    resave:false,
    store:store,
    cookie: {maxAge: 17760000}
}))

app.use(cors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
}))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const RegisterRouter = require("./routes/RegisterRouter")
const LoginRouter = require("./routes/LoginRouter")
const HomeRouter = require("./routes/HomeRouter")

app.use(RegisterRouter)
app.use(LoginRouter)
app.use(HomeRouter)

app.listen(PORT, function(err){
    if(err){
        console.log(err)
    }else{
        console.log(`Backend server is listening on port ${PORT}`)
    }
})