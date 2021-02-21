const RegisterModel = require("../models/Register")
const bcrypt = require("bcryptjs")
const io = require("../lib/socketio")

exports.postLogin = (req, res, next)=>{
RegisterModel.findOne({email:req.body.email}, function(err, resutl){
    if(err){
        console.log(err)
    }else if(!resutl){
        res.send("Not Email")
    }else{
        bcrypt.compare(req.body.password, resutl.password, function(err, hashed){
            if(err){
                console.log(err)
            }else if (hashed){
              let emit =  socket.emit("email", req.session.email)
              console.log(emit)
                req.session.loggedin = true
                req.session.email = req.body.email
                res.send("loggedin")
            }else{
                res.send("notLoggedIn")
            }
        })
    }
})
}