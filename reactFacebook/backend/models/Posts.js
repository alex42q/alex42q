const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema({
    firstname:{
        type:mongoose.Schema.Types.String,
        ref:"register_users"
    },
    lastname:{
        type:mongoose.Schema.Types.String,
        ref:"register_users"
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"register_users"
    },
    post:{
        type:String
    },
})

const Post = mongoose.model("posts", PostSchema)

module.exports = Post