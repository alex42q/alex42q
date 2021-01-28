const express = require("express")
const app = express()
const mongoose = require("mongoose")
const PORT = 5000

app.get("/", function(req, res){
    res.send("Hello World")
})

mongoose.connect("mongodb://localhost:27017/fistReact", {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
const db = mongoose.connection
db.on("error", console.error.bind(console, "Mongo error"))

app.listen(PORT, function(err){
    if(err){
        console.log(err)
    }else{
        console.log(`Server is up on port ${PORT}`)
    }
})