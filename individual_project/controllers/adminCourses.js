const dbconnection = require("../lib/db")

exports.getAdminCourses = (req, res, next) =>{
    if(req.session.admin){
        const getQuery = ("select * from course")
        dbconnection.query(getQuery, function(err, data){
            if(err){
                console.log(err)
            }else{
                res.render("../views/pages/adminCourses.ejs", {data:data})
            }
        })
        
    }else{
        res.redirect("/adminLogin")
    }
}

exports.getCoursrs = (req, res, next)=>{
    if(req.session.admin){
        const getQuery = ("select * from course")
        dbconnection.query(getQuery, function(err, data){
            if(err){
                console.log(err)
            }else{
                res.json(data)
            }
        })
        
    }
}

exports.postCourses = (req, res, next)=>{
    if(req.session.admin){
        const postQuery = ("insert into course (title, stream, type, start_date, end_date) values (?, ?, ?, ?, ?)")
        dbconnection.query(postQuery,[req.body.title, req.body.stream, req.body.type, req.body.start_date, req.body.end_date], function(err, result){
            if(err){
                console.log(err)
            }else{
                console.log("Courses updated")
                res.redirect("/admincourses")
            }
        })
    }
}