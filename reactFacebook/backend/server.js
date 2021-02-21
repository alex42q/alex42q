const express = require("express")
const app = express()
const io = require("./lib/socketio")
const db = require("./lib/db")
const session = require("express-session")
const { collection } = require("./lib/db")
const MongoDBStore = require("connect-mongodb-session")(session)
const cors = require("cors")
const bodyParser = require("body-parser")
const bcrypt = require("bcryptjs")
const PORT = 5000

const store = new MongoDBStore({
    uri:"mongodb://localhost:27017/reactFb",
    collection:"sessions"
})

app.use(session({
    secret:"Facebook",
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
app.use(bodyParser.urlencoded({ extended:false }))



const RegisterRouter = require("./routes/RegisterRoute")
const LoginRouter = require("./routes/LoginRoute")
const MainRouter = require("./routes/mainRoute")
const LogoutRouter = require("./routes/LogoutRoute")
const PostRouter = require("./routes/PostRoute")
const ResetRouter = require("./routes/ResetRouter")

app.use(RegisterRouter)
app.use(LoginRouter)
app.use(MainRouter)
app.use(LogoutRouter)
app.use(PostRouter)
app.use(ResetRouter)



app.listen(PORT, function(err){
    if(err){
        console.log(err)
    }else{
        console.log(`Facebook server is listening on port ${PORT}`)
    }
})