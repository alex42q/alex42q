const dbconnection = require("../lib/db")
const { get } = require("../routes/profile")
const bcrypt = require('bcryptjs');

exports.getProfile = (req, res, next)=>{
    if(req.session.loggedin){
        let username = req.session.username
        console.log(req.session)
        console.log(req.session.id)
        const getAll = ("select * from users")
        dbconnection.query(getAll,[req.body.id], function(err,data){
            if(err){
                console.log(err)
            }else{
                res.render("../views/pages/profile.ejs", { username: username, data:data })
            }
        })
        
    }else{
        res.redirect("/login")
    }
}

exports.postEmail = (req, res, next)=>{
    if(req.session.loggedin){
        let username = req.session.username
        const emailQuery = ("update users set username = ?  where username = ?")
        dbconnection.query(emailQuery,[req.body.username,username], function(err,data){
            if(err){
                console.log(err)
            }else{
                console.log("email updated")
                req.session.destroy(function(err){
                    if(err){
                        console.log(err)
                    }else{
                        res.redirect("/profile")
                    }
                })
                
            }
        })
    }
}

exports.updatePassword = (req, res, next)=>{
    if(req.session.loggedin){
        let username = req.session.username
        const findUser = ("select * from users where username = ?")
        dbconnection.query(findUser, [username], function(err, data){
            if(err){
                console.log(err)
            }else{
                var updatePassword = data[0].password
                 console.log(updatePassword)
                bcrypt.compare(req.body.oldpassword, updatePassword.toString(), function(err,hashed){
                    if(err){
                        console.log(err)
                    }
                    if(hashed){
                        bcrypt.hash(req.body.newpassword, 1, function(err,hash){
                            if(err){
                                console.log(err)
                            }else{
                                let username = req.session.username
                                const updateQuery = ("update users set password = ? where username = ?")
                                dbconnection.query(updateQuery, [hash, username], function(err, result){
                                    if(err){
                                        console.log(err)
                                    }else{
                                        console.log("Password changed")
                                        req.session.destroy()
                                        res.redirect("/login")
                                    }
                                })
                            }
                        })
                       
                    }else if(!hashed){
                        res.send("passwords not match!")
                    }
                })
            }
        })
    }
}

exports.updateFirstLast = (req, res, next)=>{
    if(req.session.loggedin){
        let username = req.session.username
        const firstLastQuery = ("select * from users where username = ?")
        dbconnection.query(firstLastQuery, [username], function(err, data){
            if(err){
                console.log(err)
            }else{
                const findAndUpdate = ("update users set firstname= ?, lastname= ? where username = ?")
                dbconnection.query(findAndUpdate,[req.body.firstname, req.body.lastname, username], function(err, result){
                    if(err){
                        console.log(err)
                    }else{
                        res.redirect("/profile")
                    }
                })
            }
        })
    }
}