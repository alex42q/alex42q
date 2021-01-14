const mongoose = require("mongoose")

const FeedSchema = new mongoose.Schema({
    ifFriends:{
        type:Boolean
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"register_users"
    },
    postId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"posts"
    },
    firstname:{
        type:mongoose.Schema.Types.String,
        ref:"register_users"
    },
    lastname:{
        type:mongoose.Schema.Types.String,
        ref:"register_users"
    },
    description:[{
        type:mongoose.Schema.Types.String,
        ref:"posts"
    }]
})

const Feed = mongoose.model("feeds", FeedSchema)

module.exports = Feed