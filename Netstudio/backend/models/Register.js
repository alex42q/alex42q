const mongoose = require("mongoose")

const RegisterSchema = new mongoose.Schema({
    firstname:{
        type:String
    },
    lastname:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
})

const Register = mongoose.model("register__users", RegisterSchema)

module.exports = Register