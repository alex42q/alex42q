const RegisterUser = require("../models/user")
const dbconnection = require("../lib/db")
const bcrypt = require('bcryptjs');

exports.getRegister = (req, res, next)=>{
    res.render("../views/pages/register.ejs")
}

exports.postRegister = (req, res, next)=>{
    user = new RegisterUser({
        username:req.body.username,
        password:req.body.password,
        firstname:req.body.firstname,
        lastname:req.body.lastname
    })

    bcrypt.hash(req.body.password, 1, function(err, hash){
        if(err){
            console.log(err)
        }else{
            const registerQuery = ("insert into `users` (username, password, firstname, lastname) values (?, ?, ? , ?)")
            dbconnection.query(registerQuery, [req.body.username, hash, req.body.firstname, req.body.lastname], function(err, result){
                if(err){
                    console.log(err)
                }else{
                    console.log("Registered")
                    res.redirect("/")
                }
            })
        }
    })

    

}