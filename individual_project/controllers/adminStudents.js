const con = require("../lib/db")
const dbconnection = require("../lib/db")

exports.getAdminStudents = (req, res, next) =>{
    if(req.session.admin){
        const getQuery = ("select * from student")
        dbconnection.query(getQuery, function(err, data){
            if(err){
                console.log(err)
            }else{
                res.render("../views/pages/adminStudents.ejs", {data:data})
            }
        })
    }else{
        res.redirect("/adminLogin")
    }
}

exports.getStudents = (req, res, next)=>{
    if(req.session.admin){
        const getQuery = ("select * from student")
        dbconnection.query(getQuery, function(err, data){
            if(err){
                console.log(err)
            }else{
                res.json(data)
            }
        })
        
    }
}

exports.getForUpdate = (req, res, next)=>{
    if(req.session.admin){
        const id = req.params.studentId
        const getUpdateQuery = ("select * from student where studentId=?")
        dbconnection.query(getUpdateQuery,[req.body.studentId], function(err,result){
            if(err){
                console.log(err)
            }else{
                console.log(result)
                console.log(req.body.studentId)
                res.render("../views/pages/updateStudent.ejs", { result:result})
            }
        })
    }
}

exports.postStudents = (req, res, next)=>{
    if(req.session.admin){
        const postQuery = ("insert into student (firstname, lastname, dateOfBirth, tuitionFees) values (?, ?, ?, ?)")
        dbconnection.query(postQuery,[req.body.firstname, req.body.lastname, req.body.dateOfBirth, req.body.tuitionFees], function(err,result){
            if(err){
                console.log(err)
            }else{
                console.log("Records updates for students")
                res.redirect("/adminstudents")
            }
        })
    }
}

exports.postDeleteStudent = (req, res, next)=>{
    if(req.session.admin){
        const deleteQuery = ("delete from student where studentId=?")
        dbconnection.query(deleteQuery,[req.body.studentsId], function(err,result){
            if(err){
                console.log(err)
            }else{
                console.log(result)
                console.log("Deleted")
                console.log(req.body.studentsId)
                res.redirect("/adminstudents")
            }   
        })
    }
}

exports.postUpdateStudent = (req, res, next)=>{
    if(req.session.admin){
        const updateQuery = (`update student set firstname=?, lastname=?, dateOfBirth=?, tuitionFees=? where studentId=?`)
        dbconnection.query(updateQuery,[req.body.firstname, req.body.lastname, req.body.dateOfBirth, req.body.tuitionFees, req.body.studentId], function(err, results){
            if(err){
                console.log(err)
            }else{
                console.log(results)
                res.redirect("/adminstudents")
            }
        })
    }
}