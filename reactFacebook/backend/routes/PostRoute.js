const express = require("express")
const router = express.Router()


const Post = require("../controllers/PostController")

router.post("/post", Post.postPost)

module.exports=router