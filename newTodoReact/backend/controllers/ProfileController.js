const RegisterUser = require("../models/RegisterUserModel")
const bcrypt = require("bcryptjs")

exports.getProfile = (req, res, next)=>{
    if(req.session.loggedin){
        res.send("loggedin")
    }else{
        res.send("not loggedin")
    }
}


exports.getProfileUser = (req, res, next)=>{
    if(req.session.loggedin){
        RegisterUser.findOne({email:req.session.email})
        .then(result=>{
            res.send([result])
        })
        .catch(err=>{
            console.log(err)
        })
    }
}

exports.postChangeEmailProfile = (req, res, next)=>{
    if(req.session.loggedin){
        RegisterUser.findOneAndUpdate({email:req.body.email})
        .then(changeEmail=>{
            console.log(changeEmail)
            res.send("email changed")
        })
        .catch(err=>{
            console.log(err)
        })
    }
}

exports.postChangePassword = (req, res, next)=>{
    if(req.session.loggedin){
        RegisterUser.findOne({email:req.session.email})
        .then(user=>{
            if(user){
                bcrypt.compare(req.body.oldpassword, user.password, function(err, hashed){
                    if(err){
                        console.log(err)
                    }else if(hashed){
                        console.log("hashed!")
                        bcrypt.hash(req.body.newpassword, 8, function(err, newpass){
                            if(err){
                                console.log(err)
                            }else{
                                RegisterUser.findOneAndUpdate({email:req.session.email}, {password:newpass}, {new:true, upsert:true})
                                .then(result=>{
                                    res.send("password changed!")
                                })
                                .catch(err=>{
                                    console.log(err)
                                })
                            }
                        })
                    }else if(!hashed){
                        res.send("Oldpassword dont match")
                    }
                })
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }
}

exports.postFirstnameLastname = (req, res, next)=>{
    if(req.session.loggedin){
        RegisterUser.findOne({email:req.session.email})
        .then(user=>{
            if(user && req.body.firstname){
                RegisterUser.findOneAndUpdate({firstname:req.body.firstname})
                .then(changed=>{
                    console.log(changed)
                })
                .catch(err=>{
                    console.log(err)
                })
            }else if(user && req.body.lastname){
                RegisterUser.findOneAndUpdate({lastname:req.body.lastname})
                .then(lastChange=>{
                    console.log(lastChange)
                })
                .catch(err=>{
                    console.log(err)
                })
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }
}