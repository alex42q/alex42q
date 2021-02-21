const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/whatsupClone", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const db = mongoose.connection

db.on("error", console.error.bind(console, "MongodDB Error"))

module.exports = db