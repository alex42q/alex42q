const bcrypt = require("bcryptjs")
const Register = require("../models/Register")

exports.postLogin = (req, res, next)=>{
Register.findOne({email:req.body.email}, function(err, result){
    if(err){
        console.log(err)
    }else if(!result){
        res.send("Not Email")
    }else{
        bcrypt.compare(req.body.password, result.password, function(err, hashed){
            if(err){
                console.log(err)
            }else if (hashed){
                req.session.loggedin = true
                req.session.email = req.body.email
                res.send("loggedin")
            }else{
                res.send("notLoggedIn")
            }
        })
    }
})
}