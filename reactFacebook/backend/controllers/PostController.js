const Post = require("../models/Posts")
const User = require("../models/Register")

exports.postPost = (req, res, next)=>{
    if(req.session.loggedin){
    User.findOne({email:req.session.email})
    .then(user=>{
        console.log(user)
        let post = new Post({
            post:req.body.post,
            firstname:user.firstname,
            lastname:user.lastname,
            userId:user._id
        })
        post.save(function(err, result){
            if(err){
                console.log(err)
            }else{
                console.log(result)
            }
        })
    })
    .catch(err=>{
        console.log(err)
    })    

    }
}