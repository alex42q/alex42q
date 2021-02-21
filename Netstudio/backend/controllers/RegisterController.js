const Register = require("../models/Register")
const bcrypt = require("bcryptjs")

exports.postRegister = (req, res, next)=>{
bcrypt.hash(req.body.password, 8, function(err,hashed){
    if(err){
        console.log(err)
    }else{
        const user = new Register({
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            email:req.body.email,
            password:hashed
        })
        user.save(function(err,result){
            if(err){
                console.log(err)
            }else{
                console.log(result)
                res.send("Registered")
            }
        })
    }
})
}