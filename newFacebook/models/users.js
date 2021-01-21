const mongoose = require("mongoose")
const passportLocalMongoose = require("passport-local-mongoose")

const userSchema = mongoose.Schema({
    firstname:{
        type:String,
    },
    lastname:{
        type:String
    },
    username:{
        type:String
    },
    mobile:{
        type:String
    },
    password:{
        type:String
    },
    name:{
        type:String
    },
    day:{
        type:String
    },
    month:{
        type:String
    },
    year:{
        type:String
    },
    gender:{
        type:String
    },
    address:{
        type:String
    }
})

userSchema.plugin(passportLocalMongoose)
const RegisterUser = mongoose.model("register_users", userSchema)

module.exports = RegisterUser

