const express = require('express')
const app = express()
const mongoose = require("mongoose")
const path = require('path');
const port = 8080

const mongoDB = "mongodb://localhost:27017/connectnow";
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})

const db = mongoose.connection

db.on("error", console.error.bind(console, "MongoDB connection error:"))
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname + "/index.html"))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})