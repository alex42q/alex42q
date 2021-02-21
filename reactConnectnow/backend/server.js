const express = require("express")
const app = express()
const cors = require('cors')
const bodyParser = require("body-parser")
const session = require("express-session")
const crypto = require('cryptojs')
const db = require("./lib/db")
const MongoDBStore = require("connect-mongodb-session")(session)
const PORT = 5000

const store = new MongoDBStore({
    uri:"mongodb://127.0.0.1:27017/reactConnectnow",
    collection:"sessions"
})

app.use(session({
    secret:"$ecRet",
    saveUninitialized: false,
    resave:false,
    store:store
}))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.listen(PORT, function(err){
    if(err){
        console.log(err)
    }else{
        console.log(`Back end server is working on port ${PORT}`)
    }
})