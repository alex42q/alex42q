const bcrypt = require("bcryptjs")
const RegisterUser = require("../models/RegisterUser")

exports.postLogin = (req, res, next)=>{
RegisterUser.findOne({email:req.body.email})
.then(user=>{
    if(user){
        bcrypt.compare(req.body.password, user.password, function(err, hash){
            if(err){
                console.log(err)
            }else if(hash){
                console.log("Eimai komple")
                req.session.loggedin = true
                req.session.email = req.body.email
                req.session._id = user._id
                res.send("loggedin")
            }else{
                console.log("to hash den einai idio")
                res.send("nopass")
            }
        })
    }else{
        console.log("den iparxei to email")
        res.send("noemail")
    }
})
.catch(err=>{
    console.log(err)
})
}

