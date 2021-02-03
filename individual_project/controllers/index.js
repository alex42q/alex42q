const con = require("../lib/db")
const dbconnection = require("../lib/db")

exports.getIndex = (req,res,next)=>{
    res.render("../views/pages/index.ejs")
}

exports.postNews = (req, res, next)=>{
    const newsQuery = ("insert into `newsletter` (email) values (?)")
    dbconnection.query(newsQuery, [req.body.news], function(err, data){
        if(err){
            console.log(err)
        }else{
            console.log("email for newsletter added")
            console.log(data)
            console.log(req.body.news)
            res.redirect("/")
        }
    })
}