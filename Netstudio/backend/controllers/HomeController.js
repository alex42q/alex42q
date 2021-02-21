const Register = require('../models/Register')

exports.getMain = (req, res, next)=>{
    if(req.session.loggedin){
        Register.findOne({email:req.session.email})
        .then(user=>{
            console.log(user)
            res.send({
                loggedin:"loggedin",
                user:user
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }else{
        res.send("notLoggedIn")
    }
}