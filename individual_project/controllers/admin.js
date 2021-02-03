exports.getAdmin = (req, res, next)=>{
    if(req.session.admin){
        res.render("../views/pages/admin.ejs")
    }else{
        res.redirect("/adminLogin")
    }
}