const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    image: {
        data: Buffer,
        contentType: String
    },
    name: String,
    desc: String
})

const Posts = mongoose.model("posts", PostSchema, "posts")

module.exports = Posts;