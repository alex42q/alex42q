const { session } = require("passport")

exports.getHome = (req, res, next) =>{
    if(req.session.loggedin){
        let username = req.session.username
        res.render("../views/pages/home.ejs", { username:username })
    }else{
        res.redirect("/login")
    }
}