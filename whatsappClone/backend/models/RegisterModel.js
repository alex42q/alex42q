const mongoose = require("mongoose")

const RegisterSchema = mongoose.Schema({
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

const RegisterModel = mongoose.model("register__users", RegisterSchema)

module.exports = RegisterModel