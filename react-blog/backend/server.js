import express from "express";
import mongoose from "mongoose"
import subs from "./subs.js"
import users from "./models/users.js"
import cors from "cors"
import bodyParser from "body-parser"
const app = express()
const PORT = 8000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

mongoose.connect('mongodb://localhost:27017/reactblog', {
    useNewUrlParser : true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})

app.get('/', function(req, res){
    if(res.status(200)){
        res.send("Hello")
    }
})

app.post("/subscribe-form", function(req, res){
    const Email = new subs ({
        email: req.body.email
    })
    Email.save(function(err, data){
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
})




app.listen(PORT, function(err){
    if(err){
        console.log(err)
    }else{
        console.log(`Server is running on port ${PORT}`)
    }
})