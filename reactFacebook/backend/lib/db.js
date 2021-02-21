const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/reactFb",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify:false
})

const db = mongoose.connection;

db.on("error", console.error.bind(console, "mongoError"))

module.exports = db