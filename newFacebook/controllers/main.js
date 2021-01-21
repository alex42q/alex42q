const RegisterUser = require("../models/users")
const Post = require("../models/posts")
const Posts = require("../models/posts")

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
        Posts.create({description:req.body.description, userId:req.user._id, firstname:req.user.firstname,lastname:req.user.lastname})
        .then(post =>{
            console.log("Post added")
            res.redirect("/main")
        })
        .catch(err=>{
            console.log(err)
        })
    }
}

