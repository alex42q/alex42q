const mongoose = require("mongoose")

const FriendsSchema = new mongoose.Schema({
    friends:[{
        userId:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"register_users"
        }],
        names:[{
            firstname:{
                type:mongoose.Schema.Types.String,
                ref:"register_users"
            },
            lastname:{
                type:mongoose.Schema.Types.String,
                ref:'register_users'
            }
        }],
        posts:[{
            postId:[{
                type:mongoose.Schema.Types.ObjectId,
                ref:"posts"
            }]
        }]
    }]
})

const Friends = mongoose.model("friends", FriendsSchema)

module.exports = Friends