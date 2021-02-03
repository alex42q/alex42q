const con = require("../lib/db")
const dbconnection = require("../lib/db")
const Admin = require("../models/admin")

exports.getAdminLogin = (req, res, next)=>{
    res.render("../views/pages/adminLogin.ejs")
}

exports.postAdminLogin = (req, res, next)=>{
const adminQuery = ("select * from admins where username = ? and password = ?")
let username = req.body.username
let password = req.body.password
if(username&& password){
    dbconnection.query(adminQuery,[req.body.username, req.body.password], function(err, results){
        if(results.length>0){
            req.session.admin = true;
            req.session.loggedin= true;
            req.session.username = username;
            res.redirect("/admin")
            console.log("admin connected")
        }else{
            res.redirect("/adminLogin")
            console.log("admin not connected")
        }
        res.end()
        })
    }else{
        res.send("enter username and password")
        res.end()
    }
}