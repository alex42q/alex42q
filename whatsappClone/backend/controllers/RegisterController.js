const bcrypt = require("bcryptjs")
const RegisterUser = require("../models/RegisterModel")

exports.registerPost = (req, res, next)=>{
bcrypt.hash(req.body.password, 8, function(err,hash){
    if(err){
        console.log(err)
    }else{
        const user = new RegisterUser({
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            email:req.body.email,
            password:hash
            })
        RegisterUser.create(user, function(err,result){
            if(err){
                console.log(err)
            }else{
                console.log(result)
            }
        })
    }
})
}