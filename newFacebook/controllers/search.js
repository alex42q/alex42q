const RegisterUser = require("../models/users")

exports.searchGet = (req, res, next) =>{
    if(req.isAuthenticated()){
            RegisterUser.find({firstname: {$ne:req.user.firstname}})
        .then(user=>{
            console.log(user)
            res.render("../views/pages/search.ejs", {user:user})
        })
        .catch(err=>{
            console.log(err)
        })
        
    }
}

exports.searchPost = (req, res, next)=>{
    if(req.isAuthenticated()){
        RegisterUser.find({firstname:req.body.search})
        .then(user=>{
            console.log(user)
            res.render("../views/pages/search.ejs", {user:user})
        })
        .catch(err=>{
            console.log(err)
        })
    }
}