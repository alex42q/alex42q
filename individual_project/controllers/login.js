const RegisterUser = require("../models/user")
const dbconnection = require("../lib/db")
const bcrypt = require('bcrypt');
const con = require("../lib/db")


exports.getLogin = (req, res, next) =>{
    res.render("../views/pages/login.ejs")
}

exports.postLogin = (req, res, next)=>{
    var username = req.body.username;
    var password = req.body.password;
 
    const loginQuery = ("select * from users where username = ?")
    if(username && password){
        dbconnection.query(loginQuery, [req.body.username], function(err, results){
            var user = results[0].password
            if(results.length>0){
                bcrypt.compare(req.body.password, user.toString(), function(err, hashed){
                    if(err){
                       return next(err)
                    }
                    if(!user){
                        res.send("wrong")
                    }
                    if(hashed){
                        req.session.loggedin = true;
                        req.session.username = username;
                        res.redirect("/home")
                    }else if(!hashed){
                        return next("Wrong Password Please go back and try again")
                    }else if(!username){
                        res.send("This email is not valid please go back and try again")
                    }else{
                        res.redirect("/profile")
                    }
                })
                
            }else{
                res.redirect("/login")
            }
            
        })
    }else{
        res.send("enter username and password")
        res.end()
    }
}

