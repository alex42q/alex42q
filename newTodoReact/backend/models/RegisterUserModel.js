const mongoose = require("mongoose")

const RegisterUserSchema = new mongoose.Schema({
    firstname:{
        type:String
    },
    lastname:{
        type:String
    },
    email:{
        type:String,
        unique: true,
        index: true
    },
    password:{
        type:String
    },
    token:{
        type:String
    },
    expiredToken:{
        type:Date
    }
})

const RegisterUser = mongoose.model("Register__users", RegisterUserSchema)

module.exports = RegisterUser