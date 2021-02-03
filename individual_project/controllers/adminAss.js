const dbconnection = require("../lib/db")

exports.getAdminAsss = (req, res, next)=>{
    if(req.session.admin){
        const getQuery = "select * from assingments"
        dbconnection.query(getQuery, function(err,data){
            if(err){
                console.log(err)
            }else{
                res.render("../views/pages/adminAss.ejs", { data:data })
            }
        })
        
    }else{
        res.redirect("/adminLogin")
    }
}

exports.getAss = (req, res, next)=>{
    if(req.session.admin){
        const getAss = ("select * from assingments")
        dbconnection.query(getAss, function(err, data){
            if(err){
                console.log(err)
            }else{
                res.json(data)
            }
        })
    }
}

exports.postAss = (req, res, next)=>{
    if(req.session.admin){
        const postAss = ("insert into assingments (title, description, subDateTime, oralMark, totalMark) values (?, ?, ?, ?, ?)")
        dbconnection.query(postAss, [req.body.title, req.body.description, req.body.subDateTime, req.body.oralMark, req.body.totalMark], function(err, result){
            if(err){
                console.log(err)
            }else{
                res.redirect("/adminass")
            }
        })
    }
}