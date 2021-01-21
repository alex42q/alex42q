const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    firstname:{
        type:mongoose.Schema.Types.String,
        ref:'users'
    },
    lastname:{
        type:mongoose.Schema.Types.String,
        ref:'users'
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    },
    image:{
        type:Buffer,
        contentType: String
    },
    description:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now
    },
    likes:{
        type:Number
    }
})

const Posts = mongoose.model("posts", PostSchema)

module.exports = Posts