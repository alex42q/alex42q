const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    firstname:{
        type:mongoose.Schema.Types.String,
        ref:'register_users'
    },
    lastname:{
        type:mongoose.Schema.Types.String,
        ref:'register_users'
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"register_users"
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
    },like:{
        type:mongoose.Schema.Types.Number,
        default:0,
        ref:"likes",
    },
    likeId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"likes"
    }
})

const Posts = mongoose.model("posts", PostSchema)

module.exports = Posts