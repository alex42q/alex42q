const mongoose = require("mongoose")
const passportLocalMongoose = require("passport-local-mongoose")


const RegisterUserSchema = new mongoose.Schema({
    username:{
        type:String,

    },
    password:{
        type:String
    },
    resetToken:{
        type:String
    },
    resetTokenExpiration:{
        type:Date
    },
    email:{
        type:String,

    }
})

RegisterUserSchema.plugin(passportLocalMongoose)

const User = mongoose.model("users", RegisterUserSchema)
module.exports= User