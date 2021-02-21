const mongoose = require("mongoose")

const RegisterUserSchema = mongoose.Schema({
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

const RegisterUser = mongoose.model("register__users", RegisterUserSchema)

module.exports = RegisterUser