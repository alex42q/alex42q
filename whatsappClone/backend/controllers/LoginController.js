const bcrypt = require("bcryptjs")
const RegisterUser = require("../models/RegisterModel")

exports.postLogin = (req, res, next)=>{
RegisterUser.findOne({email:req.body.email})
.then(user=>{
    if(user){
        bcrypt.compare(req.body.password, user.password, function(err, hash){
            if(err){
                console.log(err)
            }else if(hash){
                req.session.loggedin = true
                req.session.email = req.body.email
                res.send('loggedin')
            }else{
                res.send("nopass")
            }
        })
    }else{
        res.send("noemail")
    }
})
.catch(err=>{
    console.log(err)
})
}