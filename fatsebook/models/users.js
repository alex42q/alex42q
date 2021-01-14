const mongoose = require("mongoose")
const passportLocalMongoose = require("passport-local-mongoose")
const passport = require("passport")

const UserSchema = new mongoose.Schema({
    username:{
        type:String, 
    },
    password:{
        type:String
    },
    firstname:{
        type:String,
    },
    lastname:{
        type:String,
    },
    mobile:{
        type:Number,
    },
    day:{
        type:String,
    },
    month:{
        type:String,
    },
    year:{
        type:String,
    },
    gender:{
        type:String,
    },
    address:{
        type:String,
    },
    images:{
        imageId:{type:mongoose.Schema.Types.ObjectId,
        ref:"images"
    },
    url:{
        type:mongoose.Schema.Types.String,
        ref:"images"
    }
    },
    postId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"posts"
    }
})

UserSchema.plugin(passportLocalMongoose)
const RegisterUser = mongoose.model("register_users", UserSchema)

module.exports = RegisterUser