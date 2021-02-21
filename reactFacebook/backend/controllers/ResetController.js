const RegisterUser = require("../models/Register")
const bcrypt = require("bcryptjs")

exports.postReset = (req, res, next)=>{
RegisterUser.findOne({email:req.body.email})
.then(user=>{
    bcrypt.hash(req.body.token,1, function(err,hashed){
        if(err){
            console.log(err)
        }else if(user){
            const resetToken = req.body.resetToken
            RegisterUser.findOneAndUpdate({email:req.body.email}, {resetToken:hashed})
            .then(result=>{
                result.resetTokenExpiration = Date.now() + 10000000;
                result.save()
                console.log(result)
                res.send(resetToken)
            })
            .catch(err=>{
                console.log(err)
            })
        }
    })
})
.catch(err=>{
    console.log(err)
    })
}

exports.getReset = (req, res, next)=>{
    const id = req.params.id
    RegisterUser.findOne({resetToken:id})
    .then(result=>{
        if(result){
            res.json({
                result:result.resetToken
            })
        }else{
            res.send("Not token")
        }
    })
    .catch(err=>{
        console.log(err)
    })
}

exports.postResetPassword = (req, res, next)=>{
bcrypt.hash(req.body.password, 8, function(err,newhashed){
    if(err){
        console.log(err)
    }else{
        const newpassword = {
            password:newhashed
        }
        RegisterUser.findOneAndUpdate({resetToken:req.body.id}, {password:newpassword.password})
        .then(result=>{
            console.log(result)
        })
        .catch(err=>{
            console.log(err)
        })
        }
    })
}