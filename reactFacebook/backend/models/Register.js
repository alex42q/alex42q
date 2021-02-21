const mongoose = require("mongoose")

const RegisterSchema = new mongoose.Schema({
    firstname:{
        type:String,
    },
    lastname:{
        type:String
    },
    email:{
        type:String,
        unique: true,
        index: true,
        required: true,
    },
    password:{
        type:String
    },
    resetToken:{
        type:String
    },
    resetTokenExpiration:{
        type:Date,
        default:Date.now
    }
}) 

const Register = mongoose.model("register_users", RegisterSchema)

module.exports = Register