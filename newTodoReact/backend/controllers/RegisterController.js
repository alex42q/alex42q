const RegisterUser = require("../models/RegisterUserModel")
const bcrypt = require("bcryptjs")

exports.postRegister = (req, res, next)=>{
    bcrypt.hash(req.body.password, 8, function(err, hashed){
        if(err){
            console.log(err)
        }else{
            const user = new RegisterUser({
                firstname:req.body.firstname,
                lastname:req.body.lastname,
                email:req.body.email,
                password:hashed
            })
            user.save(function(err){
                if(err){
                    console.log(err)
                }else{
                    console.log("User has been registered!!")
                }
            })
        }
    })
}