const mongoose = require('mongoose')
const passportLocalMongoose = require("passport-local-mongoose")

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        
    },
    password:{
        type:String,
        
    },
    firstname:{
        type:String,
     
    },
    lastname:{
        type:String,
       
    }
})

UserSchema.plugin(passportLocalMongoose)
const RegisterUser = mongoose.model("users", UserSchema)

module.exports = RegisterUser