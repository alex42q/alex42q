const RegisterUser = require("../models/RegisterUserModel")
const bcrypt = require("bcryptjs")

exports.postLogin = (req, res, next)=>{
RegisterUser.findOne({email:req.body.email})
.then(result=>{
    if(!result){
        res.send("Noemail")
        console.log("not email")
    }else if(result){
        const password = result.password
        bcrypt.compare(req.body.password, password, function(err,hashed){
            if(err){
                console.log(err)
            }else if(hashed){
                const userId = result._id
                req.session.loggedin = true
                req.session.email = req.body.email
                req.session.userId = userId
                res.send("loggedin")
            }else{
                res.send("notLoggedIn")
            }
        })
    }
})
.catch(err=>{
    console.log(err)
})
}