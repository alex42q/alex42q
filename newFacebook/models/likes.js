const mongoose = require("mongoose")

const LikeSchema = new mongoose.Schema({
    like:{
        type:Number,
        default:0
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"register_users"
    },
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"posts"
    }
})

const Likes = mongoose.model("likes", LikeSchema)

module.exports = Likes