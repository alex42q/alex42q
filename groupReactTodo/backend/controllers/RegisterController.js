const RegisterUser = require("../models/RegisterUser")
const bcrypt = require("bcryptjs")

exports.postRegister = (req, res, next)=>{
    bcrypt.hash(req.body.password, 8, function(err,hash){
        const User = new RegisterUser({
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            email:req.body.email,
            password:hash
            })
        RegisterUser.create(User, function(err,result){
            if(err){
                console.log(err)
            }else{
                console.log(result)
            }
        })
    })
}