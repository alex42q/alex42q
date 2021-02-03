const RegisterUser = require("../models/user")
const dbconnection = require("../lib/db")
const bcrypt = require('bcryptjs');
const con = require("../lib/db")


exports.getLogin = (req, res, next) =>{
    res.render("../views/pages/login.ejs")
}

exports.postLogin = (req, res, next)=>{
    var username = req.body.username;
    const loginQuery = ("select * from users where username = ?")
    dbconnection.query(loginQuery,[req.body.username], function(err, data){
        if(data[0]===undefined){
            return next("email not found, please go back and try again")
        }else{
            dbconnection.query(loginQuery, [req.body.username], function(err, dataPass){
                var password = dataPass[0].password
                if(dataPass.length>0){
                    bcrypt.compare(req.body.password, password, function(err, hashed){
                        if(err){
                            console.log(err)
                        }
                        if(hashed){
                            req.session.loggedin = true;
                            req.session.username = username;
                            res.redirect("/home")
                        }else{
                            res.redirect("/login")
                        }
                    })
                }
            })
        }
    })
}

