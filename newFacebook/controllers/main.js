const RegisterUser = require("../models/users")
const Posts = require("../models/posts")
const Likes = require("../models/likes")
const mongoose = require('mongoose')



exports.mainGet = (req, res, next) =>{
if(req.isAuthenticated()){
    RegisterUser.findOne({_id:req.user._id})
    .then(user =>{
        Posts.find().sort({date:-1})
        .then(posts =>{
            res.render("../views/pages/main.ejs", { user:user, posts:posts })
        })
        .catch(err=>{
            console.log(err)
        })
    })
    .catch(err=>{
        console.log(err)
    })
    }else{
        res.redirect("/")
    }
}





exports.mainPostpost = (req, res, next)=>{
    if(req.isAuthenticated()){
        post = new Posts({
            description:req.body.description, 
            userId:req.user._id,
             firstname:req.user.firstname,
             lastname:req.user.lastname,
             like:req.body.like,
             post:req.body.postId
        })
        Posts.create(post)
        .then(post =>{
            console.log("Post added")
            console.log(post)
            res.redirect("/main")
        })
        .catch(err=>{
            console.log(err)
        })
    }
}


exports.PostLikes = (req, res, next)=>{
    if(req.isAuthenticated()){
        Likes.findOne({post:req.body.postId})
        .then(like=>{
            if(like){
                Likes.findOneAndUpdate({post:req.body.postId}, {new:true, upsert:true})
                .then(updateLike=>{
                    console.log("like is updated")
                    updateLike.like++
                    updateLike.save()
                })
                .then(postUpdate=>{
                    Posts.findOneAndUpdate({_id:req.body.postId}, {new:true, upsert:true})
                    .then(postLike=>{
                        console.log(postLike.like)
                        postLike.like++
                        postLike.save()
                    })
                })
                .catch(err=>{
                    console.log(err)
                })
            }else if(!like){
                Likes.create({post:req.body.postId, like:req.body.like, userId:req.user._id})
                .then(createLike =>{
                    console.log("like is created!!!")
                    // Posts.findOne({_id:req.post})
                })
                .catch(err=>{
                    console.log(err)
                })
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }
}


