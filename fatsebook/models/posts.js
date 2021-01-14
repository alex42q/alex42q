const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    userId:[{type: mongoose.Schema.Types.ObjectId, 
        ref:"register_users",
        required:true
    }
],
    firstname:{
        type: mongoose.Schema.Types.String,
        ref:"register_users"
    },

    lastname:{
        type: mongoose.Schema.Types.String,
        ref:"register_users"
    },
    description:{
        type:String,
        required:true
    },
    like:{
        type:Number
    },
    updated: { 
        type: Date, default: Date.now 
    },
    image:{
        type:Buffer,
        contentType: String
    },
    feedId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:("feeds")
    },
    postId:{
        type:mongoose.Schema.Types.ObjectId
    },
    date:{
        type:Date,
        default:Date.now
    }
})

const Posts = mongoose.model("posts", PostSchema)

module.exports = Posts