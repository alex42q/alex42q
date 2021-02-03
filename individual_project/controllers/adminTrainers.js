const dbconnection = require("../lib/db")

exports.getAdminTrainers = (req, res, next)=>{
    if(req.session.admin){
        const getQuery = ("select * from trainer")
        dbconnection.query(getQuery, function(err, data){
            if(err){
                console.log(err)
            }else{
                res.render("../views/pages/adminTrainers.ejs", { data:data })
            }
        })
        
    }else{
        res.redirect("/adminLogin")
    }
}

exports.getTrainers = (req, res, next)=>{
    if(req.session.admin){
        const getTrainerQuery = ("select * from trainer")
        dbconnection.query(getTrainerQuery, function(err, data){
            if(err){
                console.log(err)
            }else{
                res.json(data)
            }
        })
    }
}

exports.postTrainers = (req, res, next)=>{
    if(req.session.admin){
        const courseQuery = ("select * from course")
        const postQuery = ("insert into trainer (firstname, lastname, subject ,courseId) values (?, ?, ?, (select courseId from course where course.courseId = ?));")
            dbconnection.query(courseQuery, function(err,courseResult){
                if(err){
                    console.log(err)
                }else{
                    if(req.body.subject==="java"){
                    req.body.courseId=1
                    runPostQuery()
                    }else if(req.body.subject==="c"){
                    req.body.courseId=2
                    runPostQuery()
                    }else if(req.body.subject==="c++"){
                        req.body.courseId=3
                        runPostQuery()
                    }else if(req.body.subject==="python"){
                        req.body.courseId=4
                        runPostQuery()
                    }else if(req.body.subject==="javascript"){
                        req.body.courseId=5
                        runPostQuery()
                    }
                }
            })

            function runPostQuery(){
                dbconnection.query(postQuery,[req.body.firstname, req.body.lastname, req.body.subject,req.body.courseId], function(err, result){
                    if(err){
                        console.log(err)
                    }else{
                            res.redirect("/admintrainers")
                    }
                })
            }
    }else{
        res.redirect("/admin")
    }
}