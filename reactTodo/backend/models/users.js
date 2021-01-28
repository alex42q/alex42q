const mongoose = require("mongoose")
passportLocalMongoose = require("passport-local-mongoose")

const UserSchema = new mongoose.Schema({
    username:{
        type:String
    },
    password:{
        type:String
    }
})

UserSchema.plugin(passportLocalMongoose)
const User = mongoose.model("users", UserSchema)

module.exports = User