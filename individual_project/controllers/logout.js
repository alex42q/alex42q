const dbconnection = require("../lib/db")

exports.getLogout = (req, res, next)=>{
    if(req.session.loggedin){
    req.session.destroy(function(err){
        if(err){
         console.log(err)
            }else{
             console.log("cookie deleted")
              res.redirect("/")
            }
        
        })
    }

    
}