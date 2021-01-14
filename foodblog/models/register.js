const mongoose = require("mongoose");
const passportalLocalMongoose = require("passport-local-mongoose")

const RegisterSchema = new mongoose.Schema({
    email: String,
    password: String
})


RegisterSchema.plugin(passportalLocalMongoose)
const Register = mongoose.model("registers", RegisterSchema, "registers")

module.exports = Register;