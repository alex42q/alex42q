const bcrypt = require("bcryptjs")
const RegisterModel = require("../models/Register")

exports.postRegister = (req, res, next)=>{
    bcrypt.hash(req.body.password,8, function(err, hashed){
        if(err){
            console.log(err)
        }else{
            const user = new RegisterModel({
                firstname:req.body.firstname,
                lastname:req.body.lastname,
                email:req.body.email,
                password:hashed
            })
            user.save(function(err,result){
                if(err){
                    console.log(err)
                    res.send("Error")
                }else{
                    console.log(result)
                    res.send("Registered")
                }
            })
        }
    })
 

}