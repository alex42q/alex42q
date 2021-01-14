const mongoose = require("mongoose")

const Admins = new mongoose.Schema({
    username: String,
    password: String
})

const Admin = new mongoose.model("admins", Admins)

module.exports = Admin