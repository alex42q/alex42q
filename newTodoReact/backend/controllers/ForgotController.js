const RegisterUser = require("../models/RegisterUserModel")
const bcrypt = require("bcryptjs")

exports.postForget = (req, res, next)=>{
    RegisterUser.findOne({email:req.body.email})
    .then(user=>{
        if(user){
            bcrypt.hash(req.body.token, 1, function(err, hashedToken){
                if(err){
                    console.log(err)
                }else{
                    RegisterUser.findOneAndUpdate({email:req.body.email}, {token:hashedToken}, {new:true, upsert:true})
                    .then(saveToken=>{
                        res.send(saveToken.token)
                    })
                    .catch(err=>{
                        console.log(err)
                    })
                }
            })
        }
    })
    .catch(err=>{
        console.log(err)
    })
}

exports.getReset = (req, res, next)=>{
    const id = req.params.id
    RegisterUser.findOne({token:id})
    .then(result=>{
        if(result){
            res.send({id:result.token})
            console.log(result.token)
        }else if(!result){
            res.send("Wrong id")
        }
    })
    .catch(err=>{
        console.log(err)
    })
}

exports.postResetPassword = (req, res, next)=>{
    
}