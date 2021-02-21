const mongoose = require("mongoose")
const session = require("express-session")

mongoose.connect("mongodb://127.0.0.1:27017/reactConnectnow", { 
    useNewUrlParser: true,
    useUnifiedTopology: true
    })

const dbConnection = mongoose.connection
dbConnection.on("error", console.error.bind(console, "Mongo Error"))


module.exports = dbConnection