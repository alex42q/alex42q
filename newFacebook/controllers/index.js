const RegisterUser = require("../models/users")
const session = require("express-session")
const passport = require('passport')


exports.getIndex = (req, res, next) =>{
    res.render("../views/pages/index.ejs")
}

exports.postIndex = (req, res, next) =>{
    user = new RegisterUser({
        firstname:req.body.firstname, 
        lastname:req.body.lastname, 
        username:req.body.username, 
        mobile:req.body.mobile, 
        name:req.body.name,
        day:req.body.day, 
        month:req.body.month, 
        year:req.body.year, 
        gender:req.body.gender, 
        address:req.body.address
    })
    RegisterUser.register(user,req.body.password, function(err, user){
            if(err){
                console.log(err)
            }else{
                RegisterUser.authenticate("local")(req, res, function(){
                    console.log("Registered")
                    res.redirect("/")
                })
            }
        })
}

exports.postLogin = (req, res, next) =>{
    passport.authenticate("local", 
    (err,user,info) =>{
        if(err){
            return next(err);
        }

        if(!user){
            res.redirect("index")
        }

        req.logIn(user, function(err){
            if(err){
                return next(err);
            }
            return res.redirect("main")
        });
    })(req, res, next)
}

exports.GetLogout = (req, res, next)=>{
    if(req.isAuthenticated()){
        req.session.destroy(function(err){
            if(err){
                console.log(err)
            }else{
                req.logOut()
                console.log("Cookie destroyed")
                res.redirect("/")
            }
        })
    }
}



