const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/newReactTodo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify:false
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Mongo error"));

module.exports = db;