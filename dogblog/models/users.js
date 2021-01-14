const mogoose = require("mongoose")
const passportLocalMongoose = require("passport-local-mongoose")
const passport = require("passport")
const encrypt = require("mongoose-encryption")

const UserSchema = new mogoose.Schema({
    username: String,
    password: String
})

const secret = "alex";

UserSchema.plugin(passportLocalMongoose)
const Users = mogoose.model("Users", UserSchema)

module.exports = Users;